import type { SupabaseClient } from "@supabase/supabase-js";

import { fetchAllRows } from "@/lib/data/supabase-pagination";
import type { ExampleNo, JlptLevel, LearningProgress, PartOfSpeech, VocabExample, VocabWord } from "@/lib/types";

export type VocabEntryType = "word" | "phrase";
export type VocabContentSourceType = "pdf" | "generated";
export type VocabReviewStatus = "ok" | "needs_review";

export interface VocabRow {
  id: string;
  level: JlptLevel;
  lesson_no: number | null;
  entry_type: VocabEntryType;
  word_jp: string;
  reading_furigana: string;
  meaning_vi: string;
  usage_note_vi: string | null;
  group_key: string | null;
  /** Chỉ N2 trở đi — xem migration 0057. NULL với từ vựng N5 (dùng lesson_no thay). */
  word_class: string | null;
  source_page: number | null;
  source_text: string | null;
  source_type: VocabContentSourceType;
  review_status: VocabReviewStatus;
  corrected_text: string | null;
  correction_note: string | null;
  created_at: string;
}

export interface VocabExampleRow {
  id: string;
  vocab_id: string;
  example_jp: string;
  example_vi: string;
  cloze_jp: string | null;
  answer: string | null;
  source_type: VocabContentSourceType;
}

export type VocabQuestionType = "choose_meaning" | "choose_reading" | "choose_word_from_meaning" | "fill_blank" | "match_pair";

export interface VocabQuestionRow {
  id: string;
  vocab_id: string;
  question_type: VocabQuestionType;
  question_text: string;
  choice_1: string | null;
  choice_2: string | null;
  choice_3: string | null;
  choice_4: string | null;
  correct_answer: string;
  source_type: VocabContentSourceType;
  review_status: VocabReviewStatus;
  /** Chỉ khi source_type='pdf' (16 câu hỏi thật trích từ PDF N2) — trang PDF chứa câu hỏi. */
  source_page: number | null;
}

const DEFAULT_PROGRESS: LearningProgress = {
  status: "chua_hoc",
  isFavorite: false,
  timesCorrect: 0,
  timesWrong: 0,
  lastReviewedAt: null,
  nextReviewAt: null,
  intervalDays: 1,
  easeFactor: 2.5,
  repetitions: 0,
};

/** N2 trở đi PDF phân loại rõ theo word_class (xem migration 0057) — map thẳng sang PartOfSpeech thay vì mặc định "noun". */
const WORD_CLASS_TO_PART_OF_SPEECH: Record<string, PartOfSpeech> = {
  動詞: "verb",
  複合動詞: "verb",
  動名詞: "noun",
  名詞: "noun",
  い形容詞: "i_adjective",
  な形容詞: "na_adjective",
  副詞: "adverb",
  接続詞: "conjunction",
};

/**
 * N5 (chưa có word_class trong nguồn PDF gốc — chỉ chia theo lesson_no) vẫn
 * phải mặc định trung tính "noun", không suy diễn bừa. N2 trở đi map đúng
 * theo word_class; riêng nhóm カタカナ đa số là danh từ mượn, trừ vài từ có
 * đuôi "な" rõ ràng là な形容詞 (ユニークな, ロマンチックな, ルーズな...).
 */
function guessPartOfSpeech(entryType: VocabEntryType, wordClass: string | null, wordJp: string): PartOfSpeech {
  if (entryType === "phrase") return "expression";
  if (wordClass === "カタカナ") return wordJp.endsWith("な") ? "na_adjective" : "noun";
  if (wordClass && wordClass in WORD_CLASS_TO_PART_OF_SPEECH) return WORD_CLASS_TO_PART_OF_SPEECH[wordClass];
  return "noun";
}

/**
 * Map 1 dòng `jp_vocab` sang đúng shape `VocabWord` để dùng chung được với
 * toàn bộ UI/luyện tập/ôn tập hiện có (vốn thiết kế cho từ vựng N3 tĩnh).
 * Cố tình TÁI SỬ DỤNG các trường sẵn có thay vì thêm field mới vào UI:
 *   - usageNote  ← usage_note_vi (đúng đúng vị trí "Cách dùng thực tế" đã có UI)
 *   - similarWords ← liệt kê nhanh group_key (để hiện trong "Lưu ý/từ dễ nhầm")
 *   - needsReview ← review_status === 'needs_review'
 */
export function dbVocabRowToWord(row: VocabRow, partOfSpeechOverride?: PartOfSpeech): VocabWord {
  const hasKanji = /[一-鿿]/.test(row.word_jp);
  return {
    id: row.id,
    word: row.word_jp,
    kanji: hasKanji ? row.word_jp : "",
    reading: row.reading_furigana,
    meaningVi: row.meaning_vi,
    partOfSpeech: partOfSpeechOverride ?? guessPartOfSpeech(row.entry_type, row.word_class, row.word_jp),
    verbClass: null,
    transitivity: null,
    particlePatterns: [],
    usagePatterns: [],
    collocations: [],
    register: "neutral",
    usageNote: row.usage_note_vi ?? "",
    commonMistake: "",
    similarWords: "",
    naturalnessNote: "",
    jlpt: row.level,
    needsReview: row.review_status === "needs_review",
    progress: { ...DEFAULT_PROGRESS },
    lessonNo: row.lesson_no ?? undefined,
    wordClass: row.word_class,
    entryType: row.entry_type,
    groupKey: row.group_key,
    sourcePage: row.source_page,
    sourceText: row.source_text,
    contentSourceType: row.source_type,
  };
}

/** Điền `similarWords` bằng danh sách các word_jp khác cùng group_key — gọi sau khi đã có toàn bộ mảng words của cùng 1 level. */
export function fillGroupSimilarWords(words: VocabWord[]): VocabWord[] {
  const byGroup = new Map<string, string[]>();
  for (const w of words) {
    if (!w.groupKey) continue;
    byGroup.set(w.groupKey, [...(byGroup.get(w.groupKey) ?? []), w.word]);
  }
  return words.map((w) => {
    if (!w.groupKey) return w;
    const siblings = (byGroup.get(w.groupKey) ?? []).filter((word) => word !== w.word);
    if (siblings.length === 0) return w;
    return { ...w, similarWords: `Dễ nhầm với: ${siblings.join("、")}` };
  });
}

export function vocabExampleRowToExample(row: VocabExampleRow, exampleNo: ExampleNo = 1): VocabExample {
  return {
    vocabId: row.vocab_id,
    exampleNo,
    exampleType: "daily",
    exampleJp: row.example_jp,
    exampleVi: row.example_vi,
    clozeJp: row.cloze_jp ?? row.example_jp,
    answer: row.answer ?? "",
  };
}

/**
 * Toàn bộ từ vựng nạp từ DB (mọi cấp độ đã có), kèm câu ví dụ — dùng để
 * merge vào VocabularyContext bên cạnh N3 JSON tĩnh. Public content, không
 * cần đăng nhập. Dùng fetchAllRows (phân trang .range()) vì tổng số dòng
 * đã vượt 1000 (giới hạn mặc định của Supabase/PostgREST) từ khi có N2 —
 * gọi .select("*") thẳng sẽ bị cắt bớt âm thầm, làm mất hẳn dữ liệu N5.
 */
export async function listAllDbVocab(supabase: SupabaseClient): Promise<{ words: VocabWord[]; examples: VocabExample[] }> {
  const [vocabRows, exampleRows] = await Promise.all([
    fetchAllRows<VocabRow>((from, to) =>
      supabase
        .from("jp_vocab")
        .select("*", { count: "exact" })
        .order("level", { ascending: true })
        .order("lesson_no", { ascending: true, nullsFirst: false })
        .order("word_class", { ascending: true, nullsFirst: false })
        .range(from, to),
    ),
    fetchAllRows<VocabExampleRow>((from, to) => supabase.from("jp_vocab_examples").select("*", { count: "exact" }).range(from, to)),
  ]);

  const words = fillGroupSimilarWords(vocabRows.map((r) => dbVocabRowToWord(r)));
  const examples = exampleRows.map((r) => vocabExampleRowToExample(r));
  return { words, examples };
}

/** Toàn bộ câu hỏi generated cho 1 danh sách vocab_id — dùng cho quiz trắc nghiệm theo bài/theo lộ trình. */
export async function getVocabQuestionsForIds(supabase: SupabaseClient, vocabIds: string[]): Promise<VocabQuestionRow[]> {
  if (vocabIds.length === 0) return [];
  return fetchAllRows<VocabQuestionRow>((from, to) =>
    supabase.from("jp_vocab_questions").select("*", { count: "exact" }).in("vocab_id", vocabIds).range(from, to),
  );
}

/** Toàn bộ câu hỏi generated trong DB — dùng cho export Excel (sheet QUESTIONS). */
export async function listAllVocabQuestions(supabase: SupabaseClient): Promise<VocabQuestionRow[]> {
  return fetchAllRows<VocabQuestionRow>((from, to) => supabase.from("jp_vocab_questions").select("*", { count: "exact" }).range(from, to));
}

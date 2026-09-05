import type { SupabaseClient } from "@supabase/supabase-js";

import { fetchAllRows } from "@/lib/data/supabase-pagination";
import type { ExampleNo, JlptLevel, LearningProgress, PartOfSpeech, Transitivity, VerbClass, VocabExample, VocabWord } from "@/lib/types";

export type VocabEntryType = "word" | "phrase";
export type VocabContentSourceType = "pdf" | "generated";
export type VocabReviewStatus = "ok" | "needs_review";

export interface VocabRow {
  id: string;
  level: JlptLevel;
  lesson_no: number | null;
  entry_type: VocabEntryType;
  word_jp: string;
  dictionary_form?: string | null;
  reading_furigana: string;
  meaning_vi: string;
  usage_note_vi: string | null;
  group_key: string | null;
  /** Chỉ N2 trở đi — xem migration 0057. NULL với từ vựng N5 (dùng lesson_no thay). */
  word_class: string | null;
  verb_class?: Exclude<VerbClass, null> | null;
  transitivity?: Exclude<Transitivity, null> | null;
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
  example_no?: number | null;
  example_type?: string | null;
  difficulty?: number | null;
  focus_note?: string | null;
  furigana_tokens?: unknown;
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

/**
 * Map lớp từ nguồn sang nhóm PartOfSpeech mà app hiện hỗ trợ. `wordClass` gốc
 * vẫn được giữ nguyên trên VocabWord nên export/QA không mất độ chính xác.
 * 代名詞 có hành vi danh từ; 動名詞 hiện cũng thuộc nhóm noun trong UI.
 * 感動詞／連体詞／表現 không có bảng chia nên gom vào expression thay vì
 * rơi về "unclassified".
 */
const WORD_CLASS_TO_PART_OF_SPEECH: Record<string, PartOfSpeech> = {
  動詞: "verb",
  複合動詞: "verb",
  動名詞: "noun",
  名詞: "noun",
  代名詞: "noun",
  い形容詞: "i_adjective",
  な形容詞: "na_adjective",
  副詞: "adverb",
  接続詞: "conjunction",
  助詞: "particle",
  感動詞: "expression",
  連体詞: "expression",
  表現: "expression",
};

/**
 * Không có word_class thì PHẢI trả "unclassified", KHÔNG mặc định noun.
 * Riêng カタカナ nguồn cũ: đa số là danh từ mượn; từ có đuôi な được giữ
 * cách xử lý tương thích hiện tại.
 */
function guessPartOfSpeech(entryType: VocabEntryType, wordClass: string | null, wordJp: string): PartOfSpeech {
  if (entryType === "phrase") return "expression";
  if (!wordClass) return "unclassified";
  if (wordClass === "カタカナ") return wordJp.endsWith("な") ? "na_adjective" : "noun";
  if (wordClass in WORD_CLASS_TO_PART_OF_SPEECH) return WORD_CLASS_TO_PART_OF_SPEECH[wordClass];
  return "unclassified";
}

/**
 * Map 1 dòng `jp_vocab` sang đúng shape `VocabWord` để dùng chung được với
 * toàn bộ UI/luyện tập/ôn tập hiện có (vốn thiết kế cho từ vựng N3 tĩnh).
 * Cố tình TÁI SỬ DỤNG các trường sẵn có thay vì thêm field mới vào UI:
 *   - usageNote  ← usage_note_vi (nếu trống sẽ được fallback từ focus_note đã review)
 *   - similarWords ← liệt kê nhanh group_key (để hiện trong "Lưu ý/từ dễ nhầm")
 *   - needsReview ← review_status === 'needs_review'
 */
export function dbVocabRowToWord(row: VocabRow, partOfSpeechOverride?: PartOfSpeech): VocabWord {
  const hasKanji = /[一-鿿]/.test(row.word_jp);
  return {
    id: row.id,
    word: row.word_jp,
    dictionaryForm: row.dictionary_form ?? row.word_jp.replace(/[①-⑳]+$/u, ""),
    kanji: hasKanji ? row.word_jp : "",
    reading: row.reading_furigana,
    meaningVi: row.meaning_vi,
    partOfSpeech: partOfSpeechOverride ?? guessPartOfSpeech(row.entry_type, row.word_class, row.word_jp),
    verbClass: row.verb_class ?? null,
    transitivity: row.transitivity ?? null,
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
  const storedExampleNo = row.example_no;
  const resolvedNo: ExampleNo = storedExampleNo === 1 || storedExampleNo === 2 || storedExampleNo === 3 ? storedExampleNo : exampleNo;
  const resolvedType = row.example_type === "exam" || row.example_type === "business" ? row.example_type : "daily";
  const resolvedDifficulty = row.difficulty === 1 || row.difficulty === 2 || row.difficulty === 3 ? row.difficulty : undefined;
  const furiganaTokens = Array.isArray(row.furigana_tokens)
    ? row.furigana_tokens.filter(
        (token): token is { surface: string; reading: string } =>
          typeof token === "object" &&
          token !== null &&
          "surface" in token &&
          "reading" in token &&
          typeof token.surface === "string" &&
          typeof token.reading === "string",
      )
    : undefined;
  return {
    vocabId: row.vocab_id,
    exampleNo: resolvedNo,
    exampleType: resolvedType,
    exampleJp: row.example_jp,
    exampleVi: row.example_vi,
    clozeJp: row.cloze_jp ?? row.example_jp,
    answer: row.answer ?? "",
    difficulty: resolvedDifficulty,
    focusNote: row.focus_note ?? undefined,
    furiganaTokens,
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

  const examples = exampleRows.map((r) => vocabExampleRowToExample(r));

  // Không sinh usage note mới. Khi cột usage_note_vi chưa có nội dung, dùng
  // chính focus_note đã được review trong bộ 3 ví dụ làm fallback hiển thị.
  const reviewedFocusByVocab = new Map<string, string[]>();
  for (const example of examples) {
    const note = example.focusNote?.trim();
    if (!note) continue;
    const current = reviewedFocusByVocab.get(example.vocabId) ?? [];
    if (!current.includes(note)) reviewedFocusByVocab.set(example.vocabId, [...current, note]);
  }

  const words = fillGroupSimilarWords(
    vocabRows.map((row) => {
      const word = dbVocabRowToWord(row);
      if (word.usageNote.trim()) return word;
      const reviewedNotes = reviewedFocusByVocab.get(word.id) ?? [];
      return reviewedNotes.length > 0 ? { ...word, usageNote: reviewedNotes.join(" · ") } : word;
    }),
  );

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

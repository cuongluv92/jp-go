import type { SupabaseClient } from "@supabase/supabase-js";

import type { GrammarExampleRow } from "@/lib/data/grammar-service";
import type { CuratedN5Exercise } from "@/lib/data/n5-curated-exercises";
import type { VocabExample } from "@/lib/types";

export interface ContextExerciseItem {
  id: string;
  prompt: string;
  answer: string;
  explanation?: string;
  badge?: string;
}

function usableCloze(cloze: string | null | undefined, full: string, answer: string | null | undefined): boolean {
  return Boolean(answer?.trim()) && Boolean(cloze?.trim()) && cloze!.trim() !== full.trim();
}

export function buildVocabContextExercises(examples: VocabExample[], limit = 3): ContextExerciseItem[] {
  return examples
    .filter((example) => usableCloze(example.clozeJp, example.exampleJp, example.answer))
    .slice(0, limit)
    .map((example) => ({
      id: `vocab-${example.vocabId}-${example.exampleNo}`,
      prompt: example.clozeJp,
      answer: example.answer,
      explanation: example.exampleVi,
      badge: example.exampleType === "exam" ? "Dạng đề" : example.exampleType === "business" ? "Công việc" : "Đời thường",
    }));
}

/**
 * Hai bài bổ sung cho MỌI từ N5: đưa một tình huống/ý tiếng Việt rồi yêu cầu
 * chọn câu Nhật phù hợp nhất trong chính 3 ví dụ canonical đã kiểm định của từ.
 * Cả ba distractor đều là câu Nhật thật và tự nhiên; không sinh đáp án vô lý.
 */
export function buildVocabScenarioExercises(examples: VocabExample[], target: string, limit = 2): CuratedN5Exercise[] {
  const canonical = [...examples]
    .filter((example) => example.exampleJp.trim() && example.exampleVi.trim())
    .sort((a, b) => a.exampleNo - b.exampleNo)
    .slice(0, 3);
  if (canonical.length < 3) return [];

  return canonical.slice(1, 1 + limit).map((example, index) => ({
    id: `vocab-scenario-${example.vocabId}-${example.exampleNo}`,
    mode: "practice",
    domain: "vocab",
    subtype: "context_sentence_selection",
    difficulty: index === 0 ? 1 : 2,
    instruction_ja: "場面にいちばん合う文を選んでください。",
    instruction_vi: `Tình huống: ${example.exampleVi}`,
    choices: canonical.map((candidate) => candidate.exampleJp),
    correct_answer: example.exampleJp,
    explanation_vi: `Câu phù hợp: ${example.exampleJp}`,
    targets: [target],
    skills: ["context", "sentence_comprehension", "usage"],
  }));
}

export function buildGrammarContextExercises(examples: GrammarExampleRow[], limit = 3): ContextExerciseItem[] {
  return examples
    .filter((example) => usableCloze(example.cloze_jp, example.example_jp, example.answer))
    .slice(0, limit)
    .map((example) => ({
      id: `grammar-${example.id}`,
      prompt: example.cloze_jp,
      answer: example.answer,
      explanation: example.example_vi,
      badge: example.example_type === "standard" ? "Chuẩn mẫu" : example.example_type === "business" ? "Công việc" : "Đời thường",
    }));
}

/** Tạo 2 bài chọn câu theo tình huống từ bộ 3 ví dụ đã review của từng usage ngữ pháp. */
export function buildGrammarScenarioExercises(examples: GrammarExampleRow[], pattern: string, limit = 2): CuratedN5Exercise[] {
  const canonical = [...examples]
    .filter((example) => example.example_jp.trim() && example.example_vi.trim())
    .sort((a, b) => a.example_no - b.example_no)
    .slice(0, 3);
  if (canonical.length < 3) return [];

  return canonical.slice(1, 1 + limit).map((example, index) => ({
    id: `grammar-scenario-${example.id}`,
    mode: "practice",
    domain: "grammar",
    subtype: "context_sentence_selection",
    difficulty: index === 0 ? 1 : 2,
    instruction_ja: "場面にいちばん合う文を選んでください。",
    instruction_vi: `Tình huống: ${example.example_vi}`,
    choices: canonical.map((candidate) => candidate.example_jp),
    correct_answer: example.example_jp,
    explanation_vi: `Câu phù hợp với tình huống và cách dùng của mẫu: ${example.example_jp}`,
    targets: [pattern],
    skills: ["context", "grammar_usage", "sentence_comprehension"],
  }));
}

interface KanjiWordForContext {
  id: string;
  word_jp: string;
  word_furigana: string | null;
  meaning_vi: string | null;
  linked_vocab_id: string | null;
}

interface VocabSentenceForKanji {
  id: string;
  vocab_id: string;
  example_jp: string;
  example_vi: string;
}

const N5_KANJI_FALLBACK_CONTEXTS: Record<string, Array<{ sentence: string; explanation: string }>> = {
  万: [
    { sentence: "この車は百＿円です。", explanation: "百万円（ひゃくまんえん）= một triệu yên." },
    { sentence: "一＿円で何を買いますか。", explanation: "一万円（いちまんえん）= mười nghìn yên." },
    { sentence: "このパソコンは十＿円でした。", explanation: "十万円（じゅうまんえん）= một trăm nghìn yên." },
    { sentence: "財布に五＿円あります。", explanation: "五万円（ごまんえん）= năm mươi nghìn yên." },
  ],
  元: [
    { sentence: "田中さんは今日も＿気です。", explanation: "元気（げんき）= khỏe, khỏe khoắn." },
    { sentence: "病気でしたが、もう＿気になりました。", explanation: "元気になる = khỏe trở lại." },
    { sentence: "母はいつも＿気です。", explanation: "元気です = khỏe/khỏe khoắn." },
    { sentence: "旅行のあとも＿気でした。", explanation: "元気でした = đã vẫn khỏe." },
  ],
  内: [
    { sentence: "駅で道を案＿してもらいました。", explanation: "案内する（あんないする）= hướng dẫn/chỉ đường; đây là từ N5 trong kho hiện tại." },
    { sentence: "先生が学校を案＿してくれました。", explanation: "案内する dùng khi dẫn hoặc giới thiệu một nơi cho ai đó." },
    { sentence: "駅からホテルまで案＿します。", explanation: "案内します = sẽ hướng dẫn/dẫn đường." },
    { sentence: "会社の中を案＿してもらいました。", explanation: "案内してもらう = được ai đó hướng dẫn." },
  ],
  千: [
    { sentence: "このかばんは三＿円です。", explanation: "三千円（さんぜんえん）= 3.000 yên." },
    { sentence: "二＿円だけ持っています。", explanation: "二千円（にせんえん）= 2.000 yên." },
    { sentence: "これは五＿円でした。", explanation: "五千円（ごせんえん）= 5.000 yên." },
    { sentence: "財布に＿円あります。", explanation: "千円（せんえん）= 1.000 yên." },
  ],
  多: [
    { sentence: "この町は人が＿いです。", explanation: "多い（おおい）= nhiều." },
    { sentence: "日曜日は店に人が＿いです。", explanation: "人が多い = đông người." },
    { sentence: "夏は雨が＿いです。", explanation: "雨が多い = mưa nhiều." },
    { sentence: "このクラスは学生が＿いです。", explanation: "学生が多い = có nhiều học sinh/sinh viên." },
  ],
  好: [
    { sentence: "私は日本の料理が＿きです。", explanation: "好き（すき）= thích." },
    { sentence: "妹は猫が大＿きです。", explanation: "大好き（だいすき）= rất thích." },
    { sentence: "兄は音楽が＿きです。", explanation: "音楽が好きです = thích âm nhạc." },
    { sentence: "私は旅行が大＿きです。", explanation: "大好きです = rất thích." },
  ],
  寺: [
    { sentence: "日曜日にお＿へ行きました。", explanation: "お寺（おてら）= chùa." },
    { sentence: "この町には古いお＿があります。", explanation: "お寺があります = có một ngôi chùa." },
    { sentence: "お＿の前で写真を撮りました。", explanation: "お寺の前 = trước chùa." },
    { sentence: "駅の近くにお＿があります。", explanation: "駅の近くにお寺があります = có chùa gần ga." },
  ],
  百: [
    { sentence: "この本は八＿円です。", explanation: "八百円（はっぴゃくえん）= 800 yên." },
    { sentence: "りんごを三＿円で買いました。", explanation: "三百円（さんびゃくえん）= 300 yên." },
    { sentence: "ジュースは＿円です。", explanation: "百円（ひゃくえん）= 100 yên." },
    { sentence: "このペンは二＿円でした。", explanation: "二百円（にひゃくえん）= 200 yên." },
  ],
  立: [
    { sentence: "駅の前に＿っています。", explanation: "立つ（たつ）= đứng." },
    { sentence: "ここに＿たないでください。", explanation: "立たないでください = xin đừng đứng ở đây." },
    { sentence: "バス停で＿っています。", explanation: "立っています = đang đứng." },
    { sentence: "先生の前で＿ちました。", explanation: "立ちました = đã đứng dậy/đứng." },
  ],
  買: [
    { sentence: "スーパーでパンを＿いました。", explanation: "買う（かう）= mua." },
    { sentence: "日曜日に家族と＿い物をします。", explanation: "買い物する（かいものする）= đi mua sắm." },
    { sentence: "駅で切符を＿いました。", explanation: "切符を買う = mua vé." },
    { sentence: "昨日、新しい靴を＿いました。", explanation: "靴を買う = mua giày." },
  ],
};

function replaceFirstCharacter(sentence: string, character: string): string {
  const index = sentence.indexOf(character);
  if (index < 0) return sentence;
  return `${sentence.slice(0, index)}＿${sentence.slice(index + character.length)}`;
}

export async function getKanjiContextExercises(
  supabase: SupabaseClient,
  kanjiId: string,
  character: string,
  limit = 4,
): Promise<ContextExerciseItem[]> {
  const { data: words, error: wordError } = await supabase
    .from("jp_kanji_words")
    .select("id,word_jp,word_furigana,meaning_vi,linked_vocab_id")
    .eq("kanji_id", kanjiId)
    .eq("review_status", "ok");
  if (wordError) throw wordError;

  const typedWords = (words ?? []) as KanjiWordForContext[];
  const linkedIds = Array.from(new Set(typedWords.map((word) => word.linked_vocab_id).filter((id): id is string => Boolean(id))));
  let sentences: VocabSentenceForKanji[] = [];
  if (linkedIds.length > 0) {
    const { data, error } = await supabase
      .from("jp_vocab_examples")
      .select("id,vocab_id,example_jp,example_vi")
      .in("vocab_id", linkedIds)
      .order("example_no", { ascending: true });
    if (error) throw error;
    sentences = (data ?? []) as VocabSentenceForKanji[];
  }

  const wordByVocab = new Map(typedWords.filter((word) => word.linked_vocab_id).map((word) => [word.linked_vocab_id as string, word]));
  const built: ContextExerciseItem[] = [];
  for (const sentence of sentences) {
    if (!sentence.example_jp.includes(character)) continue;
    const word = wordByVocab.get(sentence.vocab_id);
    built.push({
      id: `kanji-context-${sentence.id}`,
      prompt: replaceFirstCharacter(sentence.example_jp, character),
      answer: character,
      explanation: word
        ? `${word.word_jp}${word.word_furigana ? `（${word.word_furigana}）` : ""}${word.meaning_vi ? ` — ${word.meaning_vi}` : ""}\n${sentence.example_vi}`
        : sentence.example_vi,
      badge: "Kanji trong câu",
    });
    if (built.length >= limit) break;
  }

  if (built.length < Math.min(4, limit)) {
    for (const [index, fallback] of (N5_KANJI_FALLBACK_CONTEXTS[character] ?? []).entries()) {
      const id = `kanji-fallback-${kanjiId}-${index + 1}`;
      if (built.some((item) => item.id === id)) continue;
      built.push({
        id,
        prompt: fallback.sentence,
        answer: character,
        explanation: fallback.explanation,
        badge: "Kanji trong ngữ cảnh",
      });
      if (built.length >= limit) break;
    }
  }

  return built;
}

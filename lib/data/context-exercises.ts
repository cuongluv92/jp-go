import type { SupabaseClient } from "@supabase/supabase-js";

import type { GrammarExampleRow } from "@/lib/data/grammar-service";
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
  ],
  元: [
    { sentence: "田中さんは今日も＿気です。", explanation: "元気（げんき）= khỏe, khỏe khoắn." },
    { sentence: "病気でしたが、もう＿気になりました。", explanation: "元気になる = khỏe trở lại." },
  ],
  内: [
    { sentence: "駅で道を案＿してもらいました。", explanation: "案内する（あんないする）= hướng dẫn/chỉ đường; đây là từ N5 trong kho hiện tại." },
    { sentence: "先生が学校を案＿してくれました。", explanation: "案内する dùng khi dẫn hoặc giới thiệu một nơi cho ai đó." },
  ],
  千: [
    { sentence: "このかばんは三＿円です。", explanation: "三千円（さんぜんえん）= 3.000 yên." },
    { sentence: "二＿円だけ持っています。", explanation: "二千円（にせんえん）= 2.000 yên." },
  ],
  多: [
    { sentence: "この町は人が＿いです。", explanation: "多い（おおい）= nhiều." },
    { sentence: "日曜日は店に人が＿いです。", explanation: "人が多い = đông người." },
  ],
  好: [
    { sentence: "私は日本の料理が＿きです。", explanation: "好き（すき）= thích." },
    { sentence: "妹は猫が大＿きです。", explanation: "大好き（だいすき）= rất thích." },
  ],
  寺: [
    { sentence: "日曜日にお＿へ行きました。", explanation: "お寺（おてら）= chùa." },
    { sentence: "この町には古いお＿があります。", explanation: "お寺があります = có một ngôi chùa." },
  ],
  百: [
    { sentence: "この本は八＿円です。", explanation: "八百円（はっぴゃくえん）= 800 yên." },
    { sentence: "りんごを三＿円で買いました。", explanation: "三百円（さんびゃくえん）= 300 yên." },
  ],
  立: [
    { sentence: "駅の前に＿っています。", explanation: "立つ（たつ）= đứng." },
    { sentence: "ここに＿たないでください。", explanation: "立たないでください = xin đừng đứng ở đây." },
  ],
  買: [
    { sentence: "スーパーでパンを＿いました。", explanation: "買う（かう）= mua." },
    { sentence: "日曜日に家族と＿い物をします。", explanation: "買い物する（かいものする）= đi mua sắm." },
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

  if (built.length < 2) {
    for (const [index, fallback] of (N5_KANJI_FALLBACK_CONTEXTS[character] ?? []).entries()) {
      built.push({
        id: `kanji-fallback-${kanjiId}-${index + 1}`,
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

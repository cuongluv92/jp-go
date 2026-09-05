import type { ContextExerciseItem } from "@/lib/data/context-exercises";
import type { GrammarExampleRow } from "@/lib/data/grammar-service";
import type { CuratedN5Exercise } from "@/lib/data/n5-curated-exercises";
import type { VocabExample } from "@/lib/types";

export function buildVocabFallbackChallenge(examples: VocabExample[], target: string): CuratedN5Exercise | null {
  const usable = [...examples]
    .filter((example) => example.clozeJp.trim() && example.answer.trim() && example.clozeJp.trim() !== example.exampleJp.trim())
    .sort((a, b) => a.exampleNo - b.exampleNo);
  if (usable.length < 2) return null;
  const selected = [usable[0], usable[usable.length - 1]];
  return {
    id: `vocab-fallback-challenge-${selected[0].vocabId}`,
    mode: "challenge",
    domain: "vocab",
    subtype: "multi_context_production",
    difficulty: 3,
    instruction_ja: "同じことばを使って、二つの文を完成させてください。",
    instruction_vi: "Không có lựa chọn. Dùng chính từ đang học ở dạng phù hợp để hoàn thành cả hai ngữ cảnh.",
    stimulus_ja: `① ${selected[0].clozeJp}\n② ${selected[1].clozeJp}`,
    correct_answer: selected.map((example) => example.answer),
    explanation_vi: `① ${selected[0].exampleJp}\n② ${selected[1].exampleJp}`,
    targets: [target],
    skills: ["production", "context", "multi_context"],
  };
}

export function buildGrammarFallbackChallenge(examples: GrammarExampleRow[], pattern: string, suffix: string): CuratedN5Exercise | null {
  const usable = [...examples]
    .filter((example) => example.cloze_jp.trim() && example.answer.trim() && example.cloze_jp.trim() !== example.example_jp.trim())
    .sort((a, b) => a.example_no - b.example_no);
  if (usable.length < 2) return null;
  const selected = [usable[0], usable[usable.length - 1]];
  return {
    id: `grammar-fallback-challenge-${suffix}`,
    mode: "challenge",
    domain: "grammar",
    subtype: "multi_context_production",
    difficulty: 3,
    instruction_ja: "文法の使い方を考えて、二つの文を完成させてください。",
    instruction_vi: "Hoàn thành cả hai câu bằng cách dùng đúng mẫu/ngữ pháp trong hai ngữ cảnh khác nhau.",
    stimulus_ja: `① ${selected[0].cloze_jp}\n② ${selected[1].cloze_jp}`,
    correct_answer: selected.map((example) => example.answer),
    explanation_vi: `① ${selected[0].example_jp}\n② ${selected[1].example_jp}`,
    targets: [pattern],
    skills: ["production", "grammar_usage", "multi_context"],
  };
}

export function buildKanjiFallbackChallenge(
  contextItems: ContextExerciseItem[],
  character: string,
  kanjiId: string,
): CuratedN5Exercise | null {
  if (contextItems.length < 2) return null;
  const selected = [contextItems[0], contextItems[contextItems.length - 1]];
  return {
    id: `kanji-fallback-challenge-${kanjiId}`,
    mode: "challenge",
    domain: "kanji",
    subtype: "multi_context_kanji_production",
    difficulty: 3,
    instruction_ja: "二つの文に同じ漢字を入れて、ことばを完成させてください。",
    instruction_vi: "Không hỏi âm ON/KUN. Hãy nhận ra cùng Kanji này khi nó xuất hiện trong hai từ/ngữ cảnh khác nhau.",
    stimulus_ja: `① ${selected[0].prompt}\n② ${selected[1].prompt}`,
    correct_answer: [character, character],
    explanation_vi: `${selected[0].explanation ?? ""}\n${selected[1].explanation ?? ""}`.trim(),
    targets: [character],
    skills: ["kanji_in_context", "production", "multi_context"],
  };
}

import type { SupabaseClient } from "@supabase/supabase-js";

import { fetchAllRows } from "@/lib/data/supabase-pagination";
import type { JlptLevel } from "@/lib/types";

interface GrammarQualityRow {
  id: string;
  level: JlptLevel;
  review_status: "ok" | "needs_review";
}

interface GrammarUsageQualityRow {
  id: string;
  grammar_id: string;
  review_status: "ok" | "needs_review";
}

interface GrammarExampleQualityRow {
  grammar_id: string;
  usage_id: string | null;
  example_type: "standard" | "daily" | "business";
  example_jp: string;
  review_status: "ok" | "needs_review";
}

interface GrammarQuestionQualityRow {
  grammar_id: string;
  review_status: "ok" | "needs_review";
}

interface KanjiQualityRow {
  id: string;
  level: JlptLevel;
  stroke_count: number | null;
  radical: string | null;
  review_status: "ok" | "needs_review";
}

interface KanjiQuestionQualityRow {
  kanji_id: string;
  review_status: "ok" | "needs_review";
}

export interface CatalogLevelQuality {
  level: JlptLevel;
  grammar: number;
  grammarCompleteExamples: number;
  grammarWithQuestions: number;
  kanji: number;
  kanjiCompleteMetadata: number;
  kanjiWithQuestions: number;
}

export interface CatalogQualityStats {
  levels: CatalogLevelQuality[];
  grammarNeedsReview: number;
  kanjiNeedsReview: number;
  repeatedGrammarExamples: number;
}

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

function completeGrammarExampleSet(rows: GrammarExampleQualityRow[]): boolean {
  const types = new Set(rows.filter((row) => row.review_status === "ok").map((row) => row.example_type));
  const sentences = new Set(rows.filter((row) => row.review_status === "ok").map((row) => row.example_jp.normalize("NFKC").trim()));
  return types.has("standard") && types.has("daily") && types.has("business") && sentences.size >= 3;
}

/** Thống kê chỉ những tiêu chí có thể kiểm tra chắc chắn từ schema hiện tại. */
export async function getCatalogQualityStats(supabase: SupabaseClient): Promise<CatalogQualityStats> {
  const [grammars, usages, grammarExamples, grammarQuestions, kanji, kanjiQuestions] = await Promise.all([
    fetchAllRows<GrammarQualityRow>((from, to) => supabase.from("jp_grammar").select("id,level,review_status", { count: "exact" }).range(from, to)),
    fetchAllRows<GrammarUsageQualityRow>((from, to) =>
      supabase.from("jp_grammar_usages").select("id,grammar_id,review_status", { count: "exact" }).range(from, to),
    ),
    fetchAllRows<GrammarExampleQualityRow>((from, to) =>
      supabase.from("jp_grammar_examples").select("grammar_id,usage_id,example_type,example_jp,review_status", { count: "exact" }).range(from, to),
    ),
    fetchAllRows<GrammarQuestionQualityRow>((from, to) =>
      supabase.from("jp_grammar_questions").select("grammar_id,review_status", { count: "exact" }).range(from, to),
    ),
    fetchAllRows<KanjiQualityRow>((from, to) =>
      supabase.from("jp_kanji").select("id,level,stroke_count,radical,review_status", { count: "exact" }).range(from, to),
    ),
    fetchAllRows<KanjiQuestionQualityRow>((from, to) =>
      supabase.from("jp_kanji_questions").select("kanji_id,review_status", { count: "exact" }).range(from, to),
    ),
  ]);

  const usagesByGrammar = new Map<string, GrammarUsageQualityRow[]>();
  for (const usage of usages) usagesByGrammar.set(usage.grammar_id, [...(usagesByGrammar.get(usage.grammar_id) ?? []), usage]);
  const examplesByGroup = new Map<string, GrammarExampleQualityRow[]>();
  for (const example of grammarExamples) {
    const key = `${example.grammar_id}:${example.usage_id ?? "root"}`;
    examplesByGroup.set(key, [...(examplesByGroup.get(key) ?? []), example]);
  }
  const completeGrammarIds = new Set<string>();
  for (const grammar of grammars) {
    const grammarUsages = usagesByGrammar.get(grammar.id) ?? [];
    const groupIds = grammarUsages.length > 0 ? grammarUsages.map((usage) => usage.id) : [null];
    if (groupIds.every((usageId) => completeGrammarExampleSet(examplesByGroup.get(`${grammar.id}:${usageId ?? "root"}`) ?? []))) {
      completeGrammarIds.add(grammar.id);
    }
  }
  const grammarQuestionIds = new Set(grammarQuestions.filter((row) => row.review_status === "ok").map((row) => row.grammar_id));
  const kanjiQuestionIds = new Set(kanjiQuestions.filter((row) => row.review_status === "ok").map((row) => row.kanji_id));

  const repeatedExampleMap = new Map<string, Set<string>>();
  for (const example of grammarExamples) {
    const sentence = example.example_jp.normalize("NFKC").trim();
    const ids = repeatedExampleMap.get(sentence) ?? new Set<string>();
    ids.add(example.grammar_id);
    repeatedExampleMap.set(sentence, ids);
  }

  const grammarNeedsReviewIds = new Set([
    ...grammars.filter((row) => row.review_status === "needs_review").map((row) => row.id),
    ...usages.filter((row) => row.review_status === "needs_review").map((row) => row.grammar_id),
    ...grammarExamples.filter((row) => row.review_status === "needs_review").map((row) => row.grammar_id),
    ...grammarQuestions.filter((row) => row.review_status === "needs_review").map((row) => row.grammar_id),
  ]);
  const kanjiNeedsReviewIds = new Set([
    ...kanji.filter((row) => row.review_status === "needs_review").map((row) => row.id),
    ...kanjiQuestions.filter((row) => row.review_status === "needs_review").map((row) => row.kanji_id),
  ]);

  return {
    levels: LEVELS.map((level) => {
      const levelGrammar = grammars.filter((row) => row.level === level);
      const levelKanji = kanji.filter((row) => row.level === level);
      return {
        level,
        grammar: levelGrammar.length,
        grammarCompleteExamples: levelGrammar.filter((row) => completeGrammarIds.has(row.id)).length,
        grammarWithQuestions: levelGrammar.filter((row) => grammarQuestionIds.has(row.id)).length,
        kanji: levelKanji.length,
        kanjiCompleteMetadata: levelKanji.filter((row) => Boolean(row.stroke_count && row.radical?.trim())).length,
        kanjiWithQuestions: levelKanji.filter((row) => kanjiQuestionIds.has(row.id)).length,
      };
    }),
    grammarNeedsReview: grammarNeedsReviewIds.size,
    kanjiNeedsReview: kanjiNeedsReviewIds.size,
    repeatedGrammarExamples: [...repeatedExampleMap.values()].filter((ids) => ids.size > 1).length,
  };
}

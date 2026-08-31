import ExcelJS from "exceljs";
import type { SupabaseClient } from "@supabase/supabase-js";

import type {
  GrammarExampleRow,
  GrammarQuestionRow,
  GrammarRelationRow,
  GrammarReviewRow,
  GrammarRow,
  GrammarUsageRow,
} from "@/lib/data/grammar-service";
import { fetchAllRows } from "@/lib/data/supabase-pagination";

const GRAMMAR_COLUMNS = [
  "id",
  "level",
  "grammar_pattern",
  "meaning_vi",
  "memory_hint_vi",
  "connection",
  "usage",
  "register",
  "notes",
  "common_mistake",
  "similar_patterns",
  "difference_note",
  "source_page",
  "source_type",
  "review_status",
  "corrected_text",
  "correction_note",
] as const;

const USAGES_COLUMNS = [
  "id",
  "grammar_id",
  "usage_no",
  "meaning",
  "connection",
  "usage",
  "notes",
  "source_page",
  "source_type",
  "review_status",
] as const;

const EXAMPLES_COLUMNS = [
  "id",
  "grammar_id",
  "usage_id",
  "example_no",
  "example_type",
  "example_jp",
  "example_vi",
  "cloze_jp",
  "answer",
  "linked_vocab_id",
  "source_type",
  "review_status",
] as const;

const QUESTIONS_COLUMNS = [
  "id",
  "grammar_id",
  "usage_id",
  "question_type",
  "question_text",
  "choice_1",
  "choice_2",
  "choice_3",
  "choice_4",
  "correct_answer",
  "source_type",
  "review_status",
] as const;

const RELATIONS_COLUMNS = ["id", "grammar_id_1", "grammar_id_2", "difference_note", "source_type"] as const;

const REVIEW_COLUMNS = ["user_id", "grammar_id", "status", "correct_count", "wrong_count", "next_review_at", "updated_at"] as const;

/** Tải toàn bộ dữ liệu Ngữ pháp (mọi cấp) trực tiếp từ Supabase để xuất Excel. */
export async function fetchAllGrammarData(supabase: SupabaseClient): Promise<{
  grammar: GrammarRow[];
  usages: GrammarUsageRow[];
  examples: GrammarExampleRow[];
  questions: GrammarQuestionRow[];
  relations: GrammarRelationRow[];
  review: GrammarReviewRow[];
}> {
  const [grammar, usages, examples, questions, relations] = await Promise.all([
    fetchAllRows<GrammarRow>((from, to) =>
      supabase.from("jp_grammar").select("*", { count: "exact" }).order("level").order("created_at").range(from, to),
    ),
    fetchAllRows<GrammarUsageRow>((from, to) => supabase.from("jp_grammar_usages").select("*", { count: "exact" }).range(from, to)),
    fetchAllRows<GrammarExampleRow>((from, to) => supabase.from("jp_grammar_examples").select("*", { count: "exact" }).range(from, to)),
    fetchAllRows<GrammarQuestionRow>((from, to) => supabase.from("jp_grammar_questions").select("*", { count: "exact" }).range(from, to)),
    fetchAllRows<GrammarRelationRow>((from, to) => supabase.from("jp_grammar_relations").select("*", { count: "exact" }).range(from, to)),
  ]);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const review = user
    ? await fetchAllRows<GrammarReviewRow>((from, to) =>
        supabase.from("jp_grammar_reviews").select("*", { count: "exact" }).eq("user_id", user.id).range(from, to),
      )
    : [];

  return {
    grammar,
    usages,
    examples,
    questions,
    relations,
    review,
  };
}

/** Xuất toàn bộ dữ liệu Ngữ pháp thành 1 file .xlsx — 6 sheet, cột tách rõ ràng. Chỉ xuất, không có luồng import. */
export async function buildGrammarWorkbook(data: {
  grammar: GrammarRow[];
  usages: GrammarUsageRow[];
  examples: GrammarExampleRow[];
  questions: GrammarQuestionRow[];
  relations: GrammarRelationRow[];
  review: GrammarReviewRow[];
}): Promise<Blob> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "jp-go";
  workbook.created = new Date();

  const grammarSheet = workbook.addWorksheet("GRAMMAR");
  grammarSheet.columns = GRAMMAR_COLUMNS.map((key) => ({ header: key, key, width: 22 }));
  for (const g of data.grammar) grammarSheet.addRow({ ...g, similar_patterns: g.similar_patterns.join("|") });

  const usagesSheet = workbook.addWorksheet("USAGES");
  usagesSheet.columns = USAGES_COLUMNS.map((key) => ({ header: key, key, width: 22 }));
  for (const u of data.usages) usagesSheet.addRow(u);

  const examplesSheet = workbook.addWorksheet("EXAMPLES");
  examplesSheet.columns = EXAMPLES_COLUMNS.map((key) => ({ header: key, key, width: 20 }));
  for (const e of data.examples) examplesSheet.addRow(e);

  const questionsSheet = workbook.addWorksheet("QUESTIONS");
  questionsSheet.columns = QUESTIONS_COLUMNS.map((key) => ({ header: key, key, width: 22 }));
  for (const q of data.questions) questionsSheet.addRow(q);

  const relationsSheet = workbook.addWorksheet("RELATIONS");
  relationsSheet.columns = RELATIONS_COLUMNS.map((key) => ({ header: key, key, width: 22 }));
  for (const r of data.relations) relationsSheet.addRow(r);

  const reviewSheet = workbook.addWorksheet("REVIEW");
  reviewSheet.columns = REVIEW_COLUMNS.map((key) => ({ header: key, key, width: 18 }));
  for (const p of data.review) reviewSheet.addRow(p);

  for (const sheet of [grammarSheet, usagesSheet, examplesSheet, questionsSheet, relationsSheet, reviewSheet]) {
    sheet.getRow(1).font = { bold: true };
  }

  const buffer = await workbook.xlsx.writeBuffer();
  return new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

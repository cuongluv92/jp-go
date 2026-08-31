import ExcelJS from "exceljs";
import type { SupabaseClient } from "@supabase/supabase-js";

import type { KanjiProgressRow, KanjiQuestionRow, KanjiReadingRow, KanjiRow, KanjiWordRow } from "@/lib/data/kanji-service";
import { fetchAllRows } from "@/lib/data/supabase-pagination";

const KANJI_COLUMNS = [
  "id",
  "level",
  "kanji_character",
  "han_viet",
  "meaning_vi_summary",
  "stroke_count",
  "radical",
  "mnemonic_hint_vi",
  "common_mistake",
  "similar_kanji",
  "source_page",
  "source_type",
  "review_status",
  "corrected_text",
  "correction_note",
] as const;

const READINGS_COLUMNS = [
  "id",
  "kanji_id",
  "reading_type",
  "reading_kana",
  "is_main",
  "source_page",
  "review_status",
  "correction_note",
] as const;

const WORDS_COLUMNS = [
  "id",
  "kanji_id",
  "reading_id",
  "word_jp",
  "word_furigana",
  "meaning_vi",
  "is_irregular",
  "linked_vocab_id",
  "source_page",
  "source_type",
  "review_status",
  "corrected_text",
  "correction_note",
] as const;

const QUESTIONS_COLUMNS = [
  "id",
  "kanji_id",
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

const REVIEW_COLUMNS = ["user_id", "kanji_id", "status", "correct_count", "wrong_count", "next_review_at", "updated_at"] as const;

/** Tải toàn bộ dữ liệu Kanji (mọi cấp) trực tiếp từ Supabase để xuất Excel. */
export async function fetchAllKanjiData(supabase: SupabaseClient): Promise<{
  kanji: KanjiRow[];
  readings: KanjiReadingRow[];
  words: KanjiWordRow[];
  questions: KanjiQuestionRow[];
  progress: KanjiProgressRow[];
}> {
  const [kanji, readings, words, questions] = await Promise.all([
    fetchAllRows<KanjiRow>((from, to) => supabase.from("jp_kanji").select("*").order("level").order("created_at").range(from, to)),
    fetchAllRows<KanjiReadingRow>((from, to) => supabase.from("jp_kanji_readings").select("*").range(from, to)),
    fetchAllRows<KanjiWordRow>((from, to) => supabase.from("jp_kanji_words").select("*").range(from, to)),
    fetchAllRows<KanjiQuestionRow>((from, to) => supabase.from("jp_kanji_questions").select("*").range(from, to)),
  ]);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const progress = user
    ? await fetchAllRows<KanjiProgressRow>((from, to) => supabase.from("jp_kanji_progress").select("*").eq("user_id", user.id).range(from, to))
    : [];

  return { kanji, readings, words, questions, progress };
}

/** Xuất toàn bộ dữ liệu Kanji thành 1 file .xlsx — 5 sheet, cột tách rõ ràng. Chỉ xuất, không có luồng import. */
export async function buildKanjiWorkbook(data: {
  kanji: KanjiRow[];
  readings: KanjiReadingRow[];
  words: KanjiWordRow[];
  questions: KanjiQuestionRow[];
  progress: KanjiProgressRow[];
}): Promise<Blob> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "jp-go";
  workbook.created = new Date();

  const kanjiSheet = workbook.addWorksheet("KANJI");
  kanjiSheet.columns = KANJI_COLUMNS.map((key) => ({ header: key, key, width: 20 }));
  for (const k of data.kanji) kanjiSheet.addRow({ ...k, similar_kanji: k.similar_kanji.join("|") });

  const readingsSheet = workbook.addWorksheet("READINGS");
  readingsSheet.columns = READINGS_COLUMNS.map((key) => ({ header: key, key, width: 18 }));
  for (const r of data.readings) readingsSheet.addRow(r);

  const wordsSheet = workbook.addWorksheet("WORDS");
  wordsSheet.columns = WORDS_COLUMNS.map((key) => ({ header: key, key, width: 20 }));
  for (const w of data.words) wordsSheet.addRow(w);

  const questionsSheet = workbook.addWorksheet("QUESTIONS");
  questionsSheet.columns = QUESTIONS_COLUMNS.map((key) => ({ header: key, key, width: 22 }));
  for (const q of data.questions) questionsSheet.addRow(q);

  const reviewSheet = workbook.addWorksheet("REVIEW");
  reviewSheet.columns = REVIEW_COLUMNS.map((key) => ({ header: key, key, width: 18 }));
  for (const p of data.progress) reviewSheet.addRow(p);

  for (const sheet of [kanjiSheet, readingsSheet, wordsSheet, questionsSheet, reviewSheet]) {
    sheet.getRow(1).font = { bold: true };
  }

  const buffer = await workbook.xlsx.writeBuffer();
  return new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

import ExcelJS from "exceljs";

import { exampleToRow, wordToVocabRow } from "@/lib/data/excel-import";
import { getConjugation } from "@/lib/conjugation";
import {
  EXAMPLE_COLUMNS,
  EXCEL_SHEET_NAMES,
  VOCAB_COLUMNS,
  type VocabExample,
  type VocabWord,
} from "@/lib/types";

/** Cột của sheet CONJUGATIONS — gộp chung cho verb/i_adjective/na_adjective, để trống ô không áp dụng. */
const CONJUGATION_COLUMNS = [
  "vocab_id",
  "kind",
  "dictionary_form",
  "masu_form",
  "te_form",
  "nai_form",
  "ta_form",
  "potential_form",
  "volitional_form",
  "negative_form",
  "past_form",
  "negative_past_form",
] as const;

/**
 * Xuất toàn bộ dữ liệu hiện tại (VOCAB/EXAMPLES/CONJUGATIONS) thành 1 file
 * .xlsx, cột tách rõ ràng — không gộp thành JSON trong 1 ô, đúng yêu cầu để
 * người dùng tải về, chỉnh sửa bằng Excel rồi import lại.
 */
export async function buildVocabularyWorkbook(words: VocabWord[], examples: VocabExample[]): Promise<Blob> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "jp-go";
  workbook.created = new Date();

  const vocabSheet = workbook.addWorksheet(EXCEL_SHEET_NAMES.vocab);
  vocabSheet.columns = VOCAB_COLUMNS.map((key) => ({ header: key, key, width: 22 }));
  for (const word of words) vocabSheet.addRow(wordToVocabRow(word));

  const examplesSheet = workbook.addWorksheet(EXCEL_SHEET_NAMES.examples);
  examplesSheet.columns = EXAMPLE_COLUMNS.map((key) => ({ header: key, key, width: 26 }));
  for (const example of examples) examplesSheet.addRow(exampleToRow(example));

  const conjugationSheet = workbook.addWorksheet(EXCEL_SHEET_NAMES.conjugations);
  conjugationSheet.columns = CONJUGATION_COLUMNS.map((key) => ({ header: key, key, width: 18 }));
  for (const word of words) {
    const conjugation = getConjugation(word);
    if (!conjugation) continue;

    if (conjugation.kind === "verb") {
      conjugationSheet.addRow({
        vocab_id: word.id,
        kind: conjugation.kind,
        dictionary_form: conjugation.dictionaryForm,
        masu_form: conjugation.masuForm,
        te_form: conjugation.teForm,
        nai_form: conjugation.naiForm,
        ta_form: conjugation.taForm,
        potential_form: conjugation.potentialForm,
        volitional_form: conjugation.volitionalForm,
      });
    } else {
      conjugationSheet.addRow({
        vocab_id: word.id,
        kind: conjugation.kind,
        dictionary_form: conjugation.dictionaryForm,
        negative_form: conjugation.negativeForm,
        past_form: conjugation.pastForm,
        negative_past_form: conjugation.negativePastForm,
        te_form: conjugation.teForm,
      });
    }
  }

  for (const sheet of [vocabSheet, examplesSheet, conjugationSheet]) {
    sheet.getRow(1).font = { bold: true };
  }

  const buffer = await workbook.xlsx.writeBuffer();
  return new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

/** Kích hoạt tải file .xlsx xuống trình duyệt. Chỉ chạy ở client. */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

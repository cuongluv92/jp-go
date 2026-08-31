import ExcelJS from "exceljs";

import {
  EXAMPLE_COLUMNS,
  EXCEL_SHEET_NAMES,
  VOCAB_COLUMNS,
  type ExampleColumn,
  type ExampleExcelRow,
  type JlptLevel,
  type PartOfSpeech,
  type Register,
  type Transitivity,
  type VerbClass,
  type VocabColumn,
  type VocabExample,
  type VocabExcelRow,
  type VocabWord,
} from "@/lib/types";

/**
 * Chuyển đổi giữa 2 sheet Excel (VOCAB, EXAMPLES) và dữ liệu dùng trong app.
 * Danh sách (particle_patterns, usage_patterns, collocations) được nối bằng
 * " | " trong 1 ô — vẫn là text đọc được trực tiếp trong Excel, không phải
 * JSON, nhưng tách được lại chính xác khi import.
 */

const LIST_SEPARATOR = " | ";

function joinList(items: string[]): string {
  return items.join(LIST_SEPARATOR);
}

function splitList(value: string): string[] {
  return value
    .split("|")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

const PART_OF_SPEECH_VALUES: PartOfSpeech[] = [
  "noun",
  "verb",
  "i_adjective",
  "na_adjective",
  "adverb",
  "conjunction",
  "particle",
  "expression",
  "unclassified",
];

const VERB_CLASS_VALUES: Exclude<VerbClass, null>[] = ["godan", "ichidan", "suru", "kuru"];
const REGISTER_VALUES: Exclude<Register, null>[] = ["casual", "neutral", "formal", "business"];
const JLPT_VALUES: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

const REQUIRED_VOCAB_COLUMNS: VocabColumn[] = ["id", "word", "reading", "meaning_vi", "part_of_speech", "jlpt"];

export interface RowValidation {
  /** Cột bắt buộc bị thiếu hoặc rỗng, hoặc giá trị không nằm trong tập cho phép. */
  errors: string[];
  /** Cảnh báo không chặn import (cột nên có nhưng đang trống). */
  warnings: string[];
}

/** Kiểm tra một dòng VOCAB: thiếu cột bắt buộc, hoặc giá trị enum không hợp lệ. */
export function validateVocabRow(row: Partial<VocabExcelRow>): RowValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const column of REQUIRED_VOCAB_COLUMNS) {
    if (!row[column]?.trim()) errors.push(`Thiếu cột bắt buộc "${column}"`);
  }

  const pos = row.part_of_speech?.trim();
  if (pos && !PART_OF_SPEECH_VALUES.includes(pos as PartOfSpeech)) {
    errors.push(`part_of_speech "${pos}" không hợp lệ`);
  }
  if (pos === "verb" && !row.verb_class?.trim()) {
    errors.push('Động từ (part_of_speech="verb") phải có verb_class');
  }
  if (row.verb_class?.trim() && !VERB_CLASS_VALUES.includes(row.verb_class.trim() as (typeof VERB_CLASS_VALUES)[number])) {
    errors.push(`verb_class "${row.verb_class}" không hợp lệ`);
  }
  const jlpt = row.jlpt?.trim();
  if (jlpt && !JLPT_VALUES.includes(jlpt as JlptLevel)) {
    errors.push(`jlpt "${jlpt}" không hợp lệ`);
  }
  const register = row.register?.trim();
  if (register && !REGISTER_VALUES.includes(register as (typeof REGISTER_VALUES)[number])) {
    errors.push(`register "${register}" không hợp lệ`);
  }

  for (const column of ["particle_patterns", "usage_patterns", "collocations", "usage_note", "similar_words"] as const) {
    if (!row[column]?.trim()) warnings.push(`Thiếu cột "${column}"`);
  }

  return { errors, warnings };
}

/** Chuyển 1 dòng VOCAB hợp lệ thành `VocabWord`. Từ mới nhập luôn bắt đầu ở trạng thái "chưa học". */
export function vocabRowToWord(row: VocabExcelRow): VocabWord {
  return {
    id: row.id.trim(),
    word: row.word.trim(),
    kanji: row.kanji.trim(),
    reading: row.reading.trim(),
    meaningVi: row.meaning_vi.trim(),
    partOfSpeech: row.part_of_speech.trim() as PartOfSpeech,
    verbClass: (row.verb_class.trim() || null) as VerbClass,
    transitivity: (row.transitivity.trim() || null) as Transitivity,
    particlePatterns: splitList(row.particle_patterns),
    usagePatterns: splitList(row.usage_patterns),
    collocations: splitList(row.collocations),
    register: (row.register.trim() || null) as Register,
    usageNote: row.usage_note.trim(),
    commonMistake: row.common_mistake.trim(),
    similarWords: row.similar_words.trim(),
    naturalnessNote: row.naturalness_note.trim(),
    jlpt: row.jlpt.trim() as JlptLevel,
    needsReview: row.needs_review.trim().toLowerCase() === "true",
    progress: {
      status: "chua_hoc",
      isFavorite: false,
      timesCorrect: 0,
      timesWrong: 0,
      lastReviewedAt: null,
      nextReviewAt: null,
      intervalDays: 1,
      easeFactor: 2.5,
      repetitions: 0,
    },
  };
}

/** Chiều ngược lại — dùng khi export. */
export function wordToVocabRow(word: VocabWord): VocabExcelRow {
  return {
    id: word.id,
    word: word.word,
    kanji: word.kanji,
    reading: word.reading,
    meaning_vi: word.meaningVi,
    part_of_speech: word.partOfSpeech,
    verb_class: word.verbClass ?? "",
    transitivity: word.transitivity ?? "",
    particle_patterns: joinList(word.particlePatterns),
    usage_patterns: joinList(word.usagePatterns),
    collocations: joinList(word.collocations),
    register: word.register ?? "",
    usage_note: word.usageNote,
    common_mistake: word.commonMistake,
    similar_words: word.similarWords,
    naturalness_note: word.naturalnessNote,
    jlpt: word.jlpt,
    needs_review: word.needsReview ? "true" : "false",
  };
}

export function exampleRowToExample(row: ExampleExcelRow): VocabExample {
  const exampleNo = Number(row.example_no) as 1 | 2 | 3;
  return {
    vocabId: row.vocab_id.trim(),
    exampleNo,
    exampleType: row.example_type.trim() as VocabExample["exampleType"],
    exampleJp: row.example_jp,
    exampleVi: row.example_vi,
    clozeJp: row.cloze_jp,
    answer: row.answer,
  };
}

export function exampleToRow(example: VocabExample): ExampleExcelRow {
  return {
    vocab_id: example.vocabId,
    example_no: String(example.exampleNo),
    example_type: example.exampleType,
    example_jp: example.exampleJp,
    example_vi: example.exampleVi,
    cloze_jp: example.clozeJp,
    answer: example.answer,
  };
}

export interface DuplicateGroup {
  id: string;
  count: number;
}

/** ID trùng nhau ngay trong file đang nhập. */
export function findDuplicateIdsWithinRows(rows: VocabExcelRow[]): DuplicateGroup[] {
  const counts = new Map<string, number>();
  for (const row of rows) {
    const id = row.id.trim();
    if (!id) continue;
    counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .map(([id, count]) => ({ id, count }));
}

/** ID trong file trùng với từ đã có sẵn trong kho — cần người dùng chọn update hoặc skip. */
export function findDuplicateIdsAgainstExisting(rows: VocabExcelRow[], existingWords: VocabWord[]): Set<string> {
  const existingIds = new Set(existingWords.map((w) => w.id));
  return new Set(rows.map((r) => r.id.trim()).filter((id) => existingIds.has(id)));
}

/** So khớp header thực tế của file với danh sách cột chuẩn của sheet VOCAB. */
export function findMissingVocabHeaders(actualHeaders: string[]): VocabColumn[] {
  const headerSet = new Set(actualHeaders.map((h) => h.trim()));
  return VOCAB_COLUMNS.filter((column) => !headerSet.has(column));
}

export function findMissingExampleHeaders(actualHeaders: string[]): ExampleColumn[] {
  const headerSet = new Set(actualHeaders.map((h) => h.trim()));
  return EXAMPLE_COLUMNS.filter((column) => !headerSet.has(column));
}

function readSheetAsRows(sheet: ExcelJS.Worksheet): { headers: string[]; rows: Record<string, string>[] } {
  const headers: string[] = [];
  sheet.getRow(1).eachCell((cell, colNumber) => {
    headers[colNumber - 1] = String(cell.value ?? "").trim();
  });

  const rows: Record<string, string>[] = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const record: Record<string, string> = {};
    headers.forEach((header, i) => {
      if (!header) return;
      const cell = row.getCell(i + 1).value;
      record[header] = cell === null || cell === undefined ? "" : String(cell).trim();
    });
    if (Object.values(record).some((v) => v !== "")) rows.push(record);
  });

  return { headers, rows };
}

/** Đọc file .xlsx do người dùng chọn: dòng thô của sheet VOCAB và (nếu có) sheet EXAMPLES. */
export async function parseVocabWorkbookFile(
  file: File,
): Promise<{ headers: string[]; rows: VocabExcelRow[]; exampleRows: ExampleExcelRow[] }> {
  const buffer = await file.arrayBuffer();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);

  const vocabSheet = workbook.getWorksheet(EXCEL_SHEET_NAMES.vocab) ?? workbook.worksheets[0];
  if (!vocabSheet) return { headers: [], rows: [], exampleRows: [] };

  const { headers, rows } = readSheetAsRows(vocabSheet);
  const normalizedRows: VocabExcelRow[] = rows.map((record) => {
    const row = {} as VocabExcelRow;
    for (const column of VOCAB_COLUMNS) row[column] = record[column] ?? "";
    return row;
  });

  const examplesSheet = workbook.getWorksheet(EXCEL_SHEET_NAMES.examples);
  let exampleRows: ExampleExcelRow[] = [];
  if (examplesSheet) {
    const { rows: exampleRecords } = readSheetAsRows(examplesSheet);
    exampleRows = exampleRecords.map((record) => {
      const row = {} as ExampleExcelRow;
      for (const column of EXAMPLE_COLUMNS) row[column] = record[column] ?? "";
      return row;
    });
  }

  return { headers, rows: normalizedRows, exampleRows };
}

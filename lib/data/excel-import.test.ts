import { describe, expect, it } from "vitest";

import {
  findDuplicateIdsAgainstExisting,
  findDuplicateIdsWithinRows,
  findMissingVocabHeaders,
  vocabRowToWord,
  wordToVocabRow,
  validateVocabRow,
} from "@/lib/data/excel-import";
import { VOCAB_COLUMNS, type VocabExcelRow, type VocabWord } from "@/lib/types";

function makeRow(overrides: Partial<VocabExcelRow> = {}): VocabExcelRow {
  const base = Object.fromEntries(VOCAB_COLUMNS.map((c) => [c, ""])) as VocabExcelRow;
  return {
    ...base,
    id: "kaigi",
    word: "会議",
    kanji: "会議",
    reading: "かいぎ",
    meaning_vi: "cuộc họp",
    part_of_speech: "noun",
    jlpt: "N4",
    needs_review: "false",
    ...overrides,
  };
}

function makeWord(overrides: Partial<VocabWord> = {}): VocabWord {
  return {
    id: "kaigi",
    word: "会議",
    kanji: "会議",
    reading: "かいぎ",
    meaningVi: "cuộc họp",
    partOfSpeech: "noun",
    verbClass: null,
    transitivity: null,
    particlePatterns: [],
    usagePatterns: [],
    collocations: [],
    register: null,
    usageNote: "",
    commonMistake: "",
    similarWords: "",
    naturalnessNote: "",
    jlpt: "N4",
    needsReview: false,
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
    ...overrides,
  };
}

describe("validateVocabRow", () => {
  it("báo lỗi khi thiếu cột bắt buộc", () => {
    const result = validateVocabRow(makeRow({ meaning_vi: "" }));
    expect(result.errors.some((e) => e.includes("meaning_vi"))).toBe(true);
  });

  it("báo lỗi khi part_of_speech không hợp lệ", () => {
    const result = validateVocabRow(makeRow({ part_of_speech: "khong_ro" }));
    expect(result.errors.some((e) => e.includes("part_of_speech"))).toBe(true);
  });

  it("động từ phải có verb_class", () => {
    const result = validateVocabRow(makeRow({ part_of_speech: "verb", verb_class: "" }));
    expect(result.errors.some((e) => e.includes("verb_class"))).toBe(true);
  });

  it("chỉ cảnh báo (không chặn) khi thiếu cột không bắt buộc", () => {
    const result = validateVocabRow(makeRow({ usage_note: "" }));
    expect(result.errors).toHaveLength(0);
    expect(result.warnings.some((w) => w.includes("usage_note"))).toBe(true);
  });

  it("không báo lỗi khi đầy đủ và hợp lệ", () => {
    const result = validateVocabRow(makeRow({ particle_patterns: "会議に出る", usage_note: "x", similar_words: "y" }));
    expect(result.errors).toHaveLength(0);
  });
});

describe("findMissingVocabHeaders", () => {
  it("phát hiện cột thiếu trong header thực tế của file", () => {
    const actual = VOCAB_COLUMNS.filter((c) => c !== "register");
    expect(findMissingVocabHeaders(actual)).toEqual(["register"]);
  });

  it("trả về mảng rỗng khi đủ hết cột", () => {
    expect(findMissingVocabHeaders([...VOCAB_COLUMNS])).toHaveLength(0);
  });
});

describe("vocabRowToWord / wordToVocabRow", () => {
  it("chuyển đổi 2 chiều giữ nguyên nội dung danh sách (particle_patterns...)", () => {
    const row = makeRow({
      particle_patterns: "会議に出る | 会議を開く",
      collocations: "定例会議 | 会議室",
    });
    const word = vocabRowToWord(row);
    expect(word.particlePatterns).toEqual(["会議に出る", "会議を開く"]);
    expect(word.collocations).toEqual(["定例会議", "会議室"]);
    expect(word.progress.status).toBe("chua_hoc");

    const roundTrip = wordToVocabRow(word);
    expect(roundTrip.particle_patterns).toBe("会議に出る | 会議を開く");
    expect(roundTrip.collocations).toBe("定例会議 | 会議室");
    expect(roundTrip.id).toBe("kaigi");
  });

  it("needs_review parse đúng chuỗi 'true'/'false'", () => {
    expect(vocabRowToWord(makeRow({ needs_review: "true" })).needsReview).toBe(true);
    expect(vocabRowToWord(makeRow({ needs_review: "false" })).needsReview).toBe(false);
  });
});

describe("findDuplicateIdsWithinRows", () => {
  it("phát hiện ID trùng nhau trong cùng file", () => {
    const rows = [makeRow({ id: "a" }), makeRow({ id: "a" }), makeRow({ id: "b" })];
    expect(findDuplicateIdsWithinRows(rows)).toEqual([{ id: "a", count: 2 }]);
  });
});

describe("findDuplicateIdsAgainstExisting", () => {
  it("phát hiện ID trong file trùng với từ đã có trong kho", () => {
    const existing = [makeWord({ id: "kaigi" })];
    const rows = [makeRow({ id: "kaigi" }), makeRow({ id: "moi" })];
    const result = findDuplicateIdsAgainstExisting(rows, existing);
    expect(result.has("kaigi")).toBe(true);
    expect(result.has("moi")).toBe(false);
  });
});

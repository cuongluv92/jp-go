import { describe, expect, it } from "vitest";

import { analyzeVocabularyQuality } from "@/lib/data/content-quality";
import type { VocabExample, VocabWord } from "@/lib/types";

function makeWord(id: string, patch: Partial<VocabWord> = {}): VocabWord {
  return {
    id,
    word: `語${id}`,
    kanji: `語${id}`,
    reading: `ご${id}`,
    meaningVi: `nghĩa ${id}`,
    partOfSpeech: "noun",
    verbClass: null,
    transitivity: null,
    particlePatterns: [],
    usagePatterns: [],
    collocations: [],
    register: "neutral",
    usageNote: "cách dùng",
    commonMistake: "",
    similarWords: "",
    naturalnessNote: "",
    jlpt: "N5",
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
    ...patch,
  };
}

function examplesFor(id: string): VocabExample[] {
  return (["exam", "daily", "business"] as const).map((type, index) => ({
    vocabId: id,
    exampleNo: (index + 1) as 1 | 2 | 3,
    exampleType: type,
    exampleJp: `${id}の例${index}`,
    exampleVi: `Ví dụ ${index}`,
    clozeJp: `_____の例${index}`,
    answer: id,
  }));
}

describe("analyzeVocabularyQuality", () => {
  it("chỉ coi bộ ví dụ đủ khi có 3 ngữ cảnh khác nhau", () => {
    const words = [makeWord("a"), makeWord("b", { usageNote: "", partOfSpeech: "unclassified", needsReview: true })];
    const report = analyzeVocabularyQuality(words, [...examplesFor("a"), examplesFor("b")[0]]);
    expect(report.completeExampleSets).toBe(1);
    expect(report.incompleteExampleWordIds).toEqual(["b"]);
    expect(report.missingUsageNotes).toBe(1);
    expect(report.unclassified).toBe(1);
    expect(report.needsReview).toBe(1);
  });

  it("gắn cờ trùng mục từ và câu ví dụ nhưng không xóa dữ liệu", () => {
    const words = [makeWord("a", { word: "会う", reading: "あう" }), makeWord("b", { word: "会う", reading: "あう" })];
    const examples = [...examplesFor("a"), ...examplesFor("b")];
    examples[3] = { ...examples[3], exampleJp: examples[0].exampleJp };
    const report = analyzeVocabularyQuality(words, examples);
    expect(report.duplicateEntries).toHaveLength(1);
    expect(report.repeatedExamples).toHaveLength(1);
    expect(words).toHaveLength(2);
  });
});

import { describe, expect, it } from "vitest";

import { generatePracticeTest } from "@/lib/data/jlpt-practice-generator";
import { JLPT_BLUEPRINTS } from "@/lib/jlpt-blueprint";
import type { LearningProgress, VocabExample, VocabWord } from "@/lib/types";

function progress(): LearningProgress {
  return {
    status: "chua_hoc",
    isFavorite: false,
    timesCorrect: 0,
    timesWrong: 0,
    lastReviewedAt: null,
    nextReviewAt: null,
    intervalDays: 1,
    easeFactor: 2.5,
    repetitions: 0,
  };
}

function word(index: number): VocabWord {
  return {
    id: `fw-${index}`,
    word: `単語${index}`,
    kanji: `単語${index}`,
    reading: `たんご${index}`,
    meaningVi: `nghĩa ${index}`,
    partOfSpeech: index % 2 === 0 ? "noun" : "verb",
    verbClass: index % 2 === 0 ? null : "godan",
    transitivity: null,
    particlePatterns: [],
    usagePatterns: [],
    collocations: [],
    register: null,
    usageNote: "",
    commonMistake: "",
    similarWords: "",
    naturalnessNote: "",
    jlpt: "N3",
    needsReview: false,
    progress: progress(),
  };
}

function example(item: VocabWord, index: number): VocabExample {
  return {
    vocabId: item.id,
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: `例${index}で${item.word}を使う。`,
    exampleVi: `ví dụ ${index}`,
    clozeJp: `例${index}で＿＿＿を使う。`,
    answer: item.word,
  };
}

describe("generatePracticeTest full-width cloze", () => {
  it("nhận ＿＿＿ giống như _____ để không làm mất ví dụ N4/N5 mới", () => {
    const words = Array.from({ length: 24 }, (_, index) => word(index));
    const examples = words.map(example);
    const result = generatePracticeTest(JLPT_BLUEPRINTS.N3, words, examples);
    const context = result.sections.find((section) => section.kind === "context_vocab");

    expect(context?.available).toBe(true);
    expect(context?.questions.length).toBeGreaterThan(0);
    expect(context?.questions.every((question) => question.prompt.includes("＿＿＿"))).toBe(true);
  });
});

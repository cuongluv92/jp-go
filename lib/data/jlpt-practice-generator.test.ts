import { describe, expect, it } from "vitest";

import { generatePracticeTest } from "@/lib/data/jlpt-practice-generator";
import { JLPT_BLUEPRINTS } from "@/lib/jlpt-blueprint";
import type { LearningProgress, VocabExample, VocabWord } from "@/lib/types";

function makeProgress(): LearningProgress {
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

function makeWord(id: string): VocabWord {
  return {
    id,
    word: id,
    kanji: id,
    reading: id,
    meaningVi: `nghĩa ${id}`,
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
    jlpt: "N3",
    needsReview: false,
    progress: makeProgress(),
  };
}

function makeExample(vocabId: string, answer: string): VocabExample {
  return {
    vocabId,
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: `${answer}を使う。`,
    exampleVi: "ví dụ",
    clozeJp: "_____を使う。",
    answer,
  };
}

describe("generatePracticeTest", () => {
  it("sinh đủ câu hỏi cho phần context_vocab khi có đủ ví dụ", () => {
    const words = Array.from({ length: 20 }, (_, i) => makeWord(`w${i}`));
    const examples = words.map((w) => makeExample(w.id, `đáp án ${w.id}`));
    const blueprint = JLPT_BLUEPRINTS.N3;

    const result = generatePracticeTest(blueprint, words, examples);
    const contextSection = result.sections.find((s) => s.kind === "context_vocab")!;

    expect(contextSection.available).toBe(true);
    expect(contextSection.questions.length).toBeGreaterThan(0);
    for (const q of contextSection.questions) {
      expect(q.options).toHaveLength(4);
      expect(q.options[q.correctIndex]).toBeTruthy();
      expect(q.prompt.replace("_____", q.options[q.correctIndex])).toContain(q.options[q.correctIndex]);
    }
  });

  it("đánh dấu chưa đủ nội dung cho các phần chưa sinh được (kanji/ngữ pháp/đọc hiểu...)", () => {
    const words = [makeWord("w1")];
    const examples = [makeExample("w1", "đáp án")];
    const result = generatePracticeTest(JLPT_BLUEPRINTS.N3, words, examples);

    const kanjiSection = result.sections.find((s) => s.kind === "kanji_reading")!;
    expect(kanjiSection.available).toBe(false);
    expect(kanjiSection.questions).toHaveLength(0);
  });

  it("không đủ ví dụ cho context_vocab thì cũng báo chưa đủ nội dung thay vì bịa", () => {
    const words = [makeWord("w1"), makeWord("w2")];
    const examples = [makeExample("w1", "a"), makeExample("w2", "b")];
    const result = generatePracticeTest(JLPT_BLUEPRINTS.N3, words, examples);

    const contextSection = result.sections.find((s) => s.kind === "context_vocab")!;
    expect(contextSection.available).toBe(false);
  });
});

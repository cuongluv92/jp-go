import { describe, expect, it } from "vitest";

import { generatePracticeTest } from "@/lib/data/jlpt-practice-generator";
import { JLPT_BLUEPRINTS } from "@/lib/jlpt-blueprint";
import type { LearningProgress, VocabExample, VocabWord } from "@/lib/types";
import type { GrammarQuestionRow } from "@/lib/data/grammar-service";

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

function makeWord(index: number): VocabWord {
  return {
    id: `w${index}`,
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
    progress: makeProgress(),
  };
}

function makeExample(word: VocabWord, index: number): VocabExample {
  return {
    vocabId: word.id,
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: `例${index}で${word.word}を使う。`,
    exampleVi: `ví dụ ${index}`,
    clozeJp: `例${index}で_____を使う。`,
    answer: word.word,
  };
}

describe("generatePracticeTest", () => {
  it("sinh ba dạng kanji đọc, kanji viết và điền theo ngữ cảnh", () => {
    const words = Array.from({ length: 24 }, (_, index) => makeWord(index));
    const examples = words.map(makeExample);
    const result = generatePracticeTest(JLPT_BLUEPRINTS.N3, words, examples);

    for (const kind of ["kanji_reading", "kanji_writing", "context_vocab"] as const) {
      const section = result.sections.find((candidate) => candidate.kind === kind)!;
      expect(section.available).toBe(true);
      expect(section.questions.length).toBeGreaterThan(0);
      expect(new Set(section.questions.map((question) => question.prompt)).size).toBe(section.questions.length);
      for (const question of section.questions) {
        expect(question.options).toHaveLength(4);
        expect(new Set(question.options).size).toBe(4);
        expect(question.options[question.correctIndex]).toBeTruthy();
        expect(question.explanation).toBeTruthy();
      }
    }
  });

  it("ưu tiên nhiễu cùng từ loại cho câu ngữ cảnh khi đủ dữ liệu", () => {
    const words = Array.from({ length: 24 }, (_, index) => makeWord(index));
    const examples = words.map(makeExample);
    const result = generatePracticeTest(JLPT_BLUEPRINTS.N3, words, examples);
    const context = result.sections.find((section) => section.kind === "context_vocab")!;
    const bySurface = new Map(words.map((word) => [word.word, word]));
    for (const question of context.questions) {
      const target = words.find((word) => word.id === question.vocabId)!;
      expect(question.options.every((option) => bySurface.get(option)?.partOfSpeech === target.partOfSpeech)).toBe(true);
    }
  });

  it("không đủ dữ liệu thì báo chưa đủ thay vì bịa", () => {
    const words = [makeWord(1), makeWord(2)];
    const examples = words.map(makeExample);
    const result = generatePracticeTest(JLPT_BLUEPRINTS.N3, words, examples);

    expect(result.sections.find((section) => section.kind === "kanji_reading")?.available).toBe(false);
    expect(result.sections.find((section) => section.kind === "context_vocab")?.available).toBe(false);
  });

  it("đưa câu ngữ pháp đã kiểm tra vào đúng mục JLPT", () => {
    const words = Array.from({ length: 24 }, (_, index) => makeWord(index));
    const examples = words.map(makeExample);
    const grammarQuestions: GrammarQuestionRow[] = Array.from({ length: 20 }, (_, index) => ({
      id: `gq${index}`,
      grammar_id: `g${index}`,
      usage_id: null,
      question_type: index < 15 ? "choose_pattern" : "reorder_sentence",
      question_text: `文法問題 ${index}`,
      choice_1: "A",
      choice_2: "B",
      choice_3: "C",
      choice_4: "D",
      correct_answer: "B",
      source_type: "generated",
      review_status: "ok",
      created_at: "2026-01-01",
    }));
    const result = generatePracticeTest(JLPT_BLUEPRINTS.N3, words, examples, grammarQuestions);
    expect(result.sections.find((section) => section.kind === "grammar1")?.available).toBe(true);
    expect(result.sections.find((section) => section.kind === "grammar2")?.available).toBe(true);
  });
});

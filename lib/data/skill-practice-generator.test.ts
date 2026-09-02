import { describe, expect, it } from "vitest";

import { generateSkillPractice } from "@/lib/data/skill-practice-generator";
import type { VocabExample, VocabWord } from "@/lib/types";

const progress = {
  status: "chua_hoc" as const,
  isFavorite: false,
  timesCorrect: 0,
  timesWrong: 0,
  lastReviewedAt: null,
  nextReviewAt: null,
  intervalDays: 1,
  easeFactor: 2.5,
  repetitions: 0,
};

function word(id: string, text: string, reading: string, meaning: string, partOfSpeech: VocabWord["partOfSpeech"] = "noun"): VocabWord {
  return {
    id,
    word: text,
    kanji: text,
    reading,
    meaningVi: meaning,
    partOfSpeech,
    verbClass: partOfSpeech === "verb" ? "ichidan" : null,
    transitivity: null,
    particlePatterns: [],
    usagePatterns: [],
    collocations: [],
    register: "neutral",
    usageNote: "",
    commonMistake: "",
    similarWords: "",
    naturalnessNote: "",
    jlpt: "N5",
    needsReview: false,
    progress: { ...progress },
  };
}

const words = [
  word("w1", "食べる", "たべる", "ăn", "verb"),
  word("w2", "見る", "みる", "xem", "verb"),
  word("w3", "学校", "がっこう", "trường học"),
  word("w4", "会社", "かいしゃ", "công ty"),
  word("w5", "電車", "でんしゃ", "tàu điện"),
  word("w6", "時間", "じかん", "thời gian"),
  word("w7", "先生", "せんせい", "giáo viên"),
  word("w8", "学生", "がくせい", "học sinh"),
];

const examples: VocabExample[] = words.map((item, index) => ({
  vocabId: item.id,
  exampleNo: 1,
  exampleType: "daily",
  exampleJp: `${item.word}を使います。`,
  exampleVi: `Câu ví dụ ${index + 1} cho ${item.meaningVi}.`,
  clozeJp: "_____を使います。",
  answer: item.word,
}));

describe("generateSkillPractice", () => {
  it("trộn nhiều kỹ năng và không lặp từ khi kho đủ lớn", () => {
    const result = generateSkillPractice("N5", words, examples, 8, () => 0.42);
    expect(result.questions).toHaveLength(8);
    expect(new Set(result.questions.map((question) => question.kind)).size).toBeGreaterThanOrEqual(4);
    expect(new Set(result.questions.map((question) => question.vocabId)).size).toBe(8);
    expect(result.questions.every((question) => question.options.length === 4)).toBe(true);
  });

  it("không bịa câu khi cấp độ chưa có dữ liệu", () => {
    expect(generateSkillPractice("N1", words, examples, 10, () => 0.2).questions).toEqual([]);
  });
});

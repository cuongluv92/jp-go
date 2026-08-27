import { describe, expect, it } from "vitest";

import { computeStats, filterWords, getDueWords, getStruggledWords } from "@/lib/data/selectors";
import type { VocabWord } from "@/lib/types";

function makeWord(overrides: Partial<VocabWord> = {}): VocabWord {
  return {
    id: "w-test",
    word: "テスト",
    kanji: "テスト",
    reading: "てすと",
    meaningVi: "bài kiểm tra",
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
    ...overrides,
  };
}

describe("filterWords", () => {
  const words = [
    makeWord({ id: "1", word: "会議", reading: "かいぎ", meaningVi: "cuộc họp", jlpt: "N4", partOfSpeech: "noun" }),
    makeWord({ id: "2", word: "頑張る", reading: "がんばる", meaningVi: "cố gắng", jlpt: "N5", partOfSpeech: "verb" }),
  ];

  it("lọc theo từ khoá tìm kiếm khớp nghĩa tiếng Việt", () => {
    const result = filterWords(words, { query: "cố gắng" });
    expect(result.map((w) => w.id)).toEqual(["2"]);
  });

  it("lọc theo từ khoá tìm kiếm khớp cách đọc", () => {
    const result = filterWords(words, { query: "かいぎ" });
    expect(result.map((w) => w.id)).toEqual(["1"]);
  });

  it("lọc theo cấp độ", () => {
    const result = filterWords(words, { level: "N5" });
    expect(result.map((w) => w.id)).toEqual(["2"]);
  });

  it("lọc theo loại từ", () => {
    const result = filterWords(words, { partOfSpeech: "noun" });
    expect(result.map((w) => w.id)).toEqual(["1"]);
  });

  it("trả về tất cả khi không có bộ lọc", () => {
    expect(filterWords(words, {})).toHaveLength(2);
  });
});

describe("getDueWords", () => {
  it("chỉ trả về từ có nextReviewAt <= thời điểm hiện tại", () => {
    const now = new Date("2026-01-10T00:00:00Z");
    const words = [
      makeWord({ id: "past", progress: { ...makeWord().progress, nextReviewAt: "2026-01-09T00:00:00Z" } }),
      makeWord({ id: "future", progress: { ...makeWord().progress, nextReviewAt: "2026-01-20T00:00:00Z" } }),
      makeWord({ id: "none", progress: { ...makeWord().progress, nextReviewAt: null } }),
    ];
    expect(getDueWords(words, now).map((w) => w.id)).toEqual(["past"]);
  });
});

describe("getStruggledWords", () => {
  it("trả về từ chưa nhớ và từng trả lời sai ít nhất một lần", () => {
    const words = [
      makeWord({ id: "wrong", progress: { ...makeWord().progress, timesWrong: 2, status: "dang_hoc" } }),
      makeWord({ id: "clean", progress: { ...makeWord().progress, timesWrong: 0, status: "dang_hoc" } }),
      makeWord({ id: "learned", progress: { ...makeWord().progress, timesWrong: 3, status: "da_nho" } }),
    ];
    expect(getStruggledWords(words).map((w) => w.id)).toEqual(["wrong"]);
  });
});

describe("computeStats", () => {
  it("đếm đúng số từ theo trạng thái, cấp độ, loại từ", () => {
    const words = [
      makeWord({ id: "1", jlpt: "N5", partOfSpeech: "noun", progress: { ...makeWord().progress, status: "da_nho" } }),
      makeWord({ id: "2", jlpt: "N5", partOfSpeech: "verb", progress: { ...makeWord().progress, status: "dang_hoc" } }),
      makeWord({ id: "3", jlpt: "N4", partOfSpeech: "noun", progress: { ...makeWord().progress, status: "chua_hoc" } }),
    ];
    const stats = computeStats(words);
    expect(stats.total).toBe(3);
    expect(stats.learned).toBe(1);
    expect(stats.learning).toBe(1);
    expect(stats.notStarted).toBe(1);
    expect(stats.byLevel).toEqual({ N5: 2, N4: 1 });
    expect(stats.byPartOfSpeech).toEqual({ noun: 2, verb: 1 });
  });
});

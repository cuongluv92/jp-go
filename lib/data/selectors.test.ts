import { describe, expect, it } from "vitest";

import { computeStats, filterWords, getDueWords, getStruggledWords, listTopics } from "@/lib/data/selectors";
import type { VocabularyWord } from "@/lib/types";

function makeWord(overrides: Partial<VocabularyWord> = {}): VocabularyWord {
  return {
    id: "w-test",
    word: "テスト",
    reading: "てすと",
    meaning: "bài kiểm tra",
    partOfSpeech: "danh_tu",
    level: "N5",
    topic: "Trường học",
    examples: {
      exam: { japanese: "", translation: "" },
      daily: { japanese: "", translation: "" },
      work: { japanese: "", translation: "" },
    },
    usage: {
      structure: "",
      particles: "",
      precedingElements: "",
      followingElements: "",
      conjugation: "",
      notes: "",
    },
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
    makeWord({ id: "1", word: "会議", reading: "かいぎ", meaning: "cuộc họp", level: "N4", topic: "Công việc" }),
    makeWord({ id: "2", word: "頑張る", reading: "がんばる", meaning: "cố gắng", level: "N5", topic: "Đời sống" }),
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

  it("lọc theo chủ đề", () => {
    const result = filterWords(words, { topic: "Công việc" });
    expect(result.map((w) => w.id)).toEqual(["1"]);
  });

  it("trả về tất cả khi không có bộ lọc", () => {
    expect(filterWords(words, {})).toHaveLength(2);
  });
});

describe("listTopics", () => {
  it("trả về danh sách chủ đề không trùng, đã sắp xếp", () => {
    const words = [makeWord({ topic: "Du lịch" }), makeWord({ topic: "Công việc" }), makeWord({ topic: "Du lịch" })];
    expect(listTopics(words)).toEqual(["Công việc", "Du lịch"]);
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
  it("đếm đúng số từ theo trạng thái, chủ đề, loại từ", () => {
    const words = [
      makeWord({ id: "1", topic: "A", partOfSpeech: "danh_tu", progress: { ...makeWord().progress, status: "da_nho" } }),
      makeWord({ id: "2", topic: "A", partOfSpeech: "dong_tu", progress: { ...makeWord().progress, status: "dang_hoc" } }),
      makeWord({ id: "3", topic: "B", partOfSpeech: "danh_tu", progress: { ...makeWord().progress, status: "chua_hoc" } }),
    ];
    const stats = computeStats(words);
    expect(stats.total).toBe(3);
    expect(stats.learned).toBe(1);
    expect(stats.learning).toBe(1);
    expect(stats.notStarted).toBe(1);
    expect(stats.byTopic).toEqual({ A: 2, B: 1 });
    expect(stats.byPartOfSpeech).toEqual({ danh_tu: 2, dong_tu: 1 });
  });
});

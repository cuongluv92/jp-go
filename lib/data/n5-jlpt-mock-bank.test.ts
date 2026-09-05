import { describe, expect, it } from "vitest";

import {
  N5_LISTENING_MOCK,
  N5_TEXT_MINI_MOCKS,
  N5_TEXT_SECTION_ORDER,
} from "@/lib/data/n5-jlpt-mock-bank";

describe("N5 curated JLPT mock bank", () => {
  it("loads three 34-question text mini mocks with valid answers", () => {
    expect(N5_TEXT_MINI_MOCKS).toHaveLength(3);
    for (const set of N5_TEXT_MINI_MOCKS) {
      expect(set.items).toHaveLength(34);
      expect(new Set(set.items.map((item) => item.id)).size).toBe(set.items.length);
      for (const item of set.items) {
        expect(item.choices).toContain(item.correct_answer);
      }
      for (const section of N5_TEXT_SECTION_ORDER) {
        expect(set.items.some((item) => item.section === section)).toBe(true);
      }
    }
  });

  it("applies the resolved information-retrieval replacement in mock 01", () => {
    const item = N5_TEXT_MINI_MOCKS[0].items.find((candidate) => candidate.id === "N5-J01-033");
    expect(item?.correct_answer).toBe("平日に参加できるものはありません");
  });

  it("loads 32 listening questions with 8 questions in each official family", () => {
    expect(N5_LISTENING_MOCK.items).toHaveLength(32);
    const families = [
      "task_based_comprehension",
      "key_point_comprehension",
      "verbal_expressions",
      "quick_response",
    ];
    for (const family of families) {
      expect(N5_LISTENING_MOCK.items.filter((item) => item.problem_family === family)).toHaveLength(8);
    }
    for (const item of N5_LISTENING_MOCK.items) {
      expect(item.audio_script_ja?.trim().length).toBeGreaterThan(0);
      expect(item.choices).toContain(item.correct_answer);
    }
  });

  it("uses the QA-resolved quick-response choices", () => {
    const item = N5_LISTENING_MOCK.items.find((candidate) => candidate.id === "N5-L01-030");
    expect(item?.correct_answer).toBe("はい、お願いします");
    expect(item?.choices).toContain("はい、お願いします");
  });
});

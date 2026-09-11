import { describe, expect, it } from "vitest";

import { clampLesson, getLessonCount, getLessonRange, LESSON_SIZES, sliceLesson } from "@/lib/data/lesson-structure";

describe("lesson structure", () => {
  it("uses balanced learning sizes", () => {
    expect(LESSON_SIZES).toEqual({ vocabulary: 20, kanji: 10, grammar: 6 });
  });

  it("calculates lesson counts and final partial lessons", () => {
    expect(getLessonCount(98, LESSON_SIZES.grammar)).toBe(17);
    expect(getLessonCount(0, LESSON_SIZES.kanji)).toBe(0);
    expect(getLessonRange(43, 3, 20)).toEqual({
      lesson: 3,
      startIndex: 40,
      endIndex: 43,
      startNumber: 41,
      endNumber: 43,
      count: 3,
    });
  });

  it("clamps invalid lesson numbers safely", () => {
    expect(clampLesson(0, 41, 20)).toBe(1);
    expect(clampLesson(99, 41, 20)).toBe(3);
  });

  it("slices items without dropping the final remainder", () => {
    const items = Array.from({ length: 43 }, (_, index) => index + 1);
    expect(sliceLesson(items, 1, 20)).toEqual(items.slice(0, 20));
    expect(sliceLesson(items, 3, 20)).toEqual([41, 42, 43]);
  });
});

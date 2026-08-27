import { describe, expect, it } from "vitest";

import { applyFlashcardGrade } from "@/lib/srs";
import type { LearningProgress } from "@/lib/types";

function makeProgress(overrides: Partial<LearningProgress> = {}): LearningProgress {
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
    ...overrides,
  };
}

describe("applyFlashcardGrade", () => {
  const now = new Date("2026-01-01T00:00:00Z");

  it("'chưa nhớ' reset repetitions và đưa từ về trạng thái đang học", () => {
    const progress = makeProgress({ repetitions: 4, status: "da_nho", intervalDays: 20 });
    const next = applyFlashcardGrade(progress, "chua_nho", now);

    expect(next.repetitions).toBe(0);
    expect(next.intervalDays).toBe(1);
    expect(next.status).toBe("dang_hoc");
    expect(next.timesWrong).toBe(1);
    expect(next.lastReviewedAt).toBe(now.toISOString());
  });

  it("'khó' tăng nhẹ khoảng ôn nhưng chưa chuyển sang đã nhớ", () => {
    const progress = makeProgress({ intervalDays: 10 });
    const next = applyFlashcardGrade(progress, "kho", now);

    expect(next.intervalDays).toBe(12);
    expect(next.status).toBe("dang_hoc");
    expect(next.timesCorrect).toBe(1);
  });

  it("'đã nhớ' đủ 3 lần liên tiếp thì chuyển trạng thái sang đã nhớ", () => {
    let progress = makeProgress();
    progress = applyFlashcardGrade(progress, "da_nho", now);
    expect(progress.status).toBe("dang_hoc");
    progress = applyFlashcardGrade(progress, "da_nho", now);
    expect(progress.status).toBe("dang_hoc");
    progress = applyFlashcardGrade(progress, "da_nho", now);
    expect(progress.status).toBe("da_nho");
    expect(progress.repetitions).toBe(3);
  });

  it("luôn tính lại nextReviewAt dựa trên intervalDays mới", () => {
    const progress = makeProgress({ intervalDays: 1, repetitions: 0 });
    const next = applyFlashcardGrade(progress, "da_nho", now);
    const expected = new Date(now.getTime() + next.intervalDays * 24 * 60 * 60 * 1000).toISOString();
    expect(next.nextReviewAt).toBe(expected);
  });
});

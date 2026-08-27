import type { FlashcardGrade, LearningProgress } from "@/lib/types";

const MIN_EASE_FACTOR = 1.3;
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Cập nhật tiến độ SRS (kiểu SM-2 rút gọn) sau một lượt học flashcard.
 * Đây là khung tối thiểu để sau này thay bằng thuật toán lặp lại ngắt quãng
 * đầy đủ hơn mà không cần đổi cách gọi ở UI.
 */
export function applyFlashcardGrade(progress: LearningProgress, grade: FlashcardGrade, now: Date = new Date()): LearningProgress {
  const next: LearningProgress = { ...progress, lastReviewedAt: now.toISOString() };

  if (grade === "chua_nho") {
    next.timesWrong += 1;
    next.repetitions = 0;
    next.intervalDays = 1;
    next.easeFactor = Math.max(MIN_EASE_FACTOR, progress.easeFactor - 0.2);
    next.status = "dang_hoc";
  } else if (grade === "kho") {
    next.timesCorrect += 1;
    next.repetitions += 1;
    next.intervalDays = Math.max(1, Math.round(progress.intervalDays * 1.2));
    next.easeFactor = Math.max(MIN_EASE_FACTOR, progress.easeFactor - 0.05);
    next.status = "dang_hoc";
  } else {
    next.timesCorrect += 1;
    next.repetitions += 1;
    next.intervalDays =
      next.repetitions <= 1 ? 2 : Math.round(progress.intervalDays * progress.easeFactor);
    next.easeFactor = progress.easeFactor + 0.1;
    next.status = next.repetitions >= 3 ? "da_nho" : "dang_hoc";
  }

  next.nextReviewAt = new Date(now.getTime() + next.intervalDays * DAY_MS).toISOString();
  return next;
}

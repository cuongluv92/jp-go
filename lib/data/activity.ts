import type { PracticeDailyResult } from "@/lib/types";

function dateKeyDaysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

/** Kết quả luyện tập 7 ngày gần nhất, dùng ở trang Tiến độ. */
export const samplePracticeHistory: PracticeDailyResult[] = [
  { date: dateKeyDaysAgo(6), correct: 8, total: 10 },
  { date: dateKeyDaysAgo(5), correct: 6, total: 8 },
  { date: dateKeyDaysAgo(4), correct: 0, total: 0 },
  { date: dateKeyDaysAgo(3), correct: 12, total: 15 },
  { date: dateKeyDaysAgo(2), correct: 9, total: 10 },
  { date: dateKeyDaysAgo(1), correct: 5, total: 9 },
  { date: dateKeyDaysAgo(0), correct: 3, total: 4 },
];

/** Số ngày học liên tục gần nhất (demo bằng số cố định). */
export const sampleStreakDays = 5;

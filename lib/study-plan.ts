/**
 * Thuật toán chia lộ trình học đều theo ngày — không dồn ngày quá tải,
 * ngày quá ít. Hàm thuần, không phụ thuộc Supabase/React (dễ test).
 */

/**
 * Chia `total` mục cho `days` ngày sao cho tải học cân bằng nhất có thể:
 * - tổng số mục luôn đúng bằng `total`;
 * - số mục giữa hai ngày bất kỳ chênh nhau tối đa 1;
 * - phần dư được rải đều xuyên suốt lộ trình, không dồn vào ngày cuối.
 */
export function distributeEvenly(total: number, days: number): number[] {
  if (days <= 0) throw new Error("days phải lớn hơn 0");
  if (total < 0) throw new Error("total không được âm");

  return Array.from({ length: days }, (_, i) => {
    const completedBefore = Math.floor((i * total) / days);
    const completedThroughToday = Math.floor(((i + 1) * total) / days);
    return completedThroughToday - completedBefore;
  });
}

/** Chia danh sách id (từ vựng/kanji/ngữ pháp) thành từng ngày theo `distributeEvenly`. */
export function buildStudyDays(itemIds: string[], days: number): string[][] {
  const counts = distributeEvenly(itemIds.length, days);
  const result: string[][] = [];
  let offset = 0;
  for (const count of counts) {
    result.push(itemIds.slice(offset, offset + count));
    offset += count;
  }
  return result;
}

export interface DayContent {
  wordIds: string[];
  kanjiIds: string[];
  grammarIds: string[];
}

/**
 * Chia đồng thời 3 loại nội dung (từ vựng/kanji/ngữ pháp) theo cùng số ngày
 * — khi phạm vi là "Tất cả", mỗi ngày có đủ cả 3 loại theo đúng tỉ lệ,
 * không phải kiểu "hôm nay chỉ kanji, mai chỉ từ vựng".
 */
export function buildMultiTypeStudyDays(
  items: { vocab: string[]; kanji: string[]; grammar: string[] },
  days: number,
): DayContent[] {
  const vocabGroups = buildStudyDays(items.vocab, days);
  const kanjiGroups = buildStudyDays(items.kanji, days);
  const grammarGroups = buildStudyDays(items.grammar, days);
  return Array.from({ length: days }, (_, i) => ({
    wordIds: vocabGroups[i] ?? [],
    kanjiIds: kanjiGroups[i] ?? [],
    grammarIds: grammarGroups[i] ?? [],
  }));
}

export type DurationMonths = 1 | 2 | 3;

/** Quy đổi số tháng sang số ngày của lộ trình. */
export function monthsToDays(months: DurationMonths): number {
  return months * 30;
}

export interface PlanPace {
  daysElapsed: number;
  expectedCompletedByNow: number;
  paceDiff: number;
}

/**
 * So ngày thực tế đã trôi qua kể từ `startedAt` với số ngày ĐÃ HOÀN THÀNH,
 * để biết 1 lộ trình đang chậm/đúng/vượt tiến độ. `paceDiff` dương = vượt
 * tiến độ, âm = chậm tiến độ. Hàm thuần dùng chung ở cả trang /plan lẫn
 * trang Tiến độ, tránh lệch công thức giữa 2 nơi.
 */
export function computePlanPace(startedAt: string, totalDays: number, completedCount: number, now: number = Date.now()): PlanPace {
  const daysElapsed = Math.floor((now - new Date(startedAt).getTime()) / 86400000) + 1;
  const expectedCompletedByNow = Math.min(Math.max(daysElapsed - 1, 0), totalDays);
  return { daysElapsed, expectedCompletedByNow, paceDiff: completedCount - expectedCompletedByNow };
}

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Số ngày liên tục (tính đến hôm nay hoặc hôm qua) có ít nhất 1 ngày học
 * hoàn thành — dùng để hiển thị "streak" trên trang chủ. `completedAt` là
 * danh sách timestamp hoàn thành thật (từ `jp_study_days.completed_at`),
 * không phải số liệu giả định.
 */
export function computeStreak(completedAt: string[], now: Date = new Date()): number {
  const completedDateKeys = new Set(completedAt.map((iso) => toDateKey(new Date(iso))));
  if (completedDateKeys.size === 0) return 0;

  const oneDayMs = 24 * 60 * 60 * 1000;
  let cursor = new Date(now);
  if (!completedDateKeys.has(toDateKey(cursor))) {
    // Chưa học gì hôm nay — vẫn tính streak nếu hôm qua có học liên tục.
    cursor = new Date(cursor.getTime() - oneDayMs);
    if (!completedDateKeys.has(toDateKey(cursor))) return 0;
  }

  let streak = 0;
  while (completedDateKeys.has(toDateKey(cursor))) {
    streak += 1;
    cursor = new Date(cursor.getTime() - oneDayMs);
  }
  return streak;
}

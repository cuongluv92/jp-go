/**
 * Thuật toán chia lộ trình học đều theo ngày — không dồn ngày quá tải,
 * ngày quá ít. Hàm thuần, không phụ thuộc Supabase/React (dễ test).
 */

/**
 * Chia `total` mục cho `days` ngày sao cho:
 *  - Tổng các phần tử trả về đúng bằng `total`.
 *  - Chênh lệch số mục giữa 2 ngày bất kỳ tối đa là 1.
 * Dùng cách chia "cumulative rounding": ngày thứ i (0-index) nhận
 * round((i+1) * total / days) - round(i * total / days) mục.
 */
export function distributeEvenly(total: number, days: number): number[] {
  if (days <= 0) throw new Error("days phải lớn hơn 0");
  if (total < 0) throw new Error("total không được âm");

  const counts: number[] = [];
  let previousCumulative = 0;
  for (let day = 1; day <= days; day += 1) {
    const cumulative = Math.round((day * total) / days);
    counts.push(cumulative - previousCumulative);
    previousCumulative = cumulative;
  }
  return counts;
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

export type DurationMonths = 1 | 2 | 3;

/** Quy đổi số tháng sang số ngày của lộ trình. */
export function monthsToDays(months: DurationMonths): number {
  return months * 30;
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

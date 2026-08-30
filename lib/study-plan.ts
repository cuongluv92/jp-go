/**
 * Thuật toán chia lộ trình học đều theo ngày — không dồn ngày quá tải,
 * ngày quá ít. Hàm thuần, không phụ thuộc Supabase/React (dễ test).
 */

/**
 * Chia `total` mục cho `days` ngày theo đúng công thức đã chốt:
 * mỗi ngày = floor(total / days), số dư (chia không hết) dồn hết vào NGÀY
 * CUỐI CÙNG — không rải số dư rải rác giữa chừng gây lệch ngày bất thường.
 */
export function distributeEvenly(total: number, days: number): number[] {
  if (days <= 0) throw new Error("days phải lớn hơn 0");
  if (total < 0) throw new Error("total không được âm");

  const base = Math.floor(total / days);
  const remainder = total - base * days;
  const counts = Array<number>(days).fill(base);
  counts[days - 1] += remainder;
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

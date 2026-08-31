import type { PostgrestError } from "@supabase/supabase-js";

const PAGE_SIZE = 1000;

/**
 * Supabase/PostgREST mặc định giới hạn tối đa 1000 dòng cho MỌI truy vấn
 * select, kể cả không có .limit() — vượt quá sẽ bị cắt bớt ÂM THẦM (không
 * ném lỗi). Khi tổng số dòng 1 bảng có thể vượt 1000 (jp_vocab, jp_vocab_
 * examples, jp_kanji_words, jp_kanji_questions... một khi gộp nhiều cấp độ
 * N5→N1), PHẢI dùng hàm này thay vì gọi thẳng .select("*") — lặp .range()
 * cho tới khi lấy hết, tránh lặp lại lỗi đã khiến toàn bộ từ vựng N5 biến
 * mất khỏi app sau khi thêm N2 (tổng 2042 dòng jp_vocab > 1000).
 */
export async function fetchAllRows<T>(
  queryFactory: (from: number, to: number) => PromiseLike<{ data: T[] | null; error: PostgrestError | null }>,
): Promise<T[]> {
  const rows: T[] = [];
  let from = 0;
  for (;;) {
    const { data, error } = await queryFactory(from, from + PAGE_SIZE - 1);
    if (error) throw error;
    const page = data ?? [];
    rows.push(...page);
    if (page.length < PAGE_SIZE) break;
    from += PAGE_SIZE;
  }
  return rows;
}

import type { PostgrestError } from "@supabase/supabase-js";

const PAGE_SIZE = 1000;

interface PageResult<T> {
  data: T[] | null;
  error: PostgrestError | null;
  count?: number | null;
}

/**
 * Supabase/PostgREST mặc định giới hạn tối đa 1000 dòng cho MỌI truy vấn
 * select, kể cả không có .limit() — vượt quá sẽ bị cắt bớt ÂM THẦM (không
 * ném lỗi). Khi tổng số dòng 1 bảng có thể vượt 1000 (jp_vocab, jp_vocab_
 * examples, jp_kanji_words, jp_kanji_questions... một khi gộp nhiều cấp độ
 * N5→N1), PHẢI dùng hàm này thay vì gọi thẳng .select("*") — lặp .range()
 * cho tới khi lấy hết, tránh lặp lại lỗi đã khiến toàn bộ từ vựng N5 biến
 * mất khỏi app sau khi thêm N2 (tổng 2042 dòng jp_vocab > 1000).
 *
 * Truyền `{ count: "exact" }` trong .select() của queryFactory để lấy được
 * tổng số dòng ngay ở trang đầu — nhờ vậy các trang còn lại được tải SONG
 * SONG (Promise.all) thay vì lần lượt, tránh chậm dần khi dữ liệu ngày
 * càng nhiều (N4→N1 sau này). Không truyền count vẫn đúng, chỉ chậm hơn
 * (tải tuần tự từng trang một).
 */
export async function fetchAllRows<T>(queryFactory: (from: number, to: number) => PromiseLike<PageResult<T>>): Promise<T[]> {
  const first = await queryFactory(0, PAGE_SIZE - 1);
  if (first.error) throw first.error;
  const firstPage = first.data ?? [];
  if (firstPage.length < PAGE_SIZE) return firstPage;

  if (typeof first.count === "number") {
    const pageStarts: number[] = [];
    for (let from = PAGE_SIZE; from < first.count; from += PAGE_SIZE) pageStarts.push(from);
    const results = await Promise.all(pageStarts.map((from) => queryFactory(from, from + PAGE_SIZE - 1)));
    const rows = [...firstPage];
    for (const r of results) {
      if (r.error) throw r.error;
      rows.push(...(r.data ?? []));
    }
    return rows;
  }

  // Không có count (queryFactory không truyền { count: "exact" }) — tải tuần tự, vẫn đúng nhưng chậm hơn.
  const rows = [...firstPage];
  let from = PAGE_SIZE;
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

export interface AnswerItem {
  label: string;
  text: string;
}

const HEADER_RE = /^\d+[.．]\s*\S+$/;
// Mốc hết 1 mục dù không có header số tiếp theo - vd "【2-2】" mở sang phần
// khác hẳn của cùng câu hỏi (2-1 chọn từ giải thích, 2-2 là câu hỏi khác về
// sơ đồ). Không chặn dòng này thì mục cuối cùng sẽ "nuốt" luôn phần sau nó.
const SECTION_BREAK_RE = /^[【[].*[】\]]$/;

/**
 * Tách 解答例 thành từng mục khi đề dạng "chọn N trong M từ/thuật ngữ" (vd
 * "1. 工具の取扱い\n① ...\n② ...\n\n2. 分電盤の取付け\n..."). Nhận diện bằng dòng
 * tiêu đề "số. tên mục" đứng riêng một dòng (khác câu thường vì không kết
 * thúc bằng 。). Không tách được (đáp án dạng đoạn văn/điền chỗ trống kiểu
 * "(1)/(2)") thì trả về mảng rỗng - modal sẽ rơi về chế độ luyện toàn bộ.
 */
export function parseAnswerItems(text: string): AnswerItem[] {
  const lines = text.split("\n");
  const items: { label: string; lines: string[] }[] = [];
  let current: { label: string; lines: string[] } | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (HEADER_RE.test(trimmed) && !trimmed.endsWith("。")) {
      current = { label: trimmed, lines: [line] };
      items.push(current);
      continue;
    }
    if (SECTION_BREAK_RE.test(trimmed)) {
      current = null;
      continue;
    }
    current?.lines.push(line);
  }

  return items
    .map((item) => ({ label: item.label, text: item.lines.join("\n").trim() }))
    .filter((item) => item.text.length > 0);
}

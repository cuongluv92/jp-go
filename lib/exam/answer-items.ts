export interface AnswerItem {
  label: string;
  text: string;
}

// "1. 風力発電" - đề dạng "chọn N trong M từ/thuật ngữ rồi giải thích".
const TERM_HEADER_RE = /^\d+[.．]\s*\S+$/;
// "1-1" hoặc "1-1 ..." - đề dạng nhiều câu con (施工経験記述 1-1/1-2, v.v.).
const SUBQUESTION_HEADER_RE = /^\d+-\d+(?:[\s　].*)?$/;
// "① 留意事項：..." - chỉ tách tiếp theo dấu này KHI đang ở trong 1 mục dạng
// subquestion (1-1/1-2): trong mục dạng "N. term" thì ①② là 2 ý nhỏ của
// CÙNG 1 thuật ngữ, không được tách rời, nếu không sẽ phá mất nhóm đó.
const CIRCLED_NUMBER_RE = /^[①②③④⑤⑥⑦⑧⑨⑩]/;
// Mốc hết 1 mục dù không có header tiếp theo - vd "【2-2】" mở sang phần khác
// hẳn của cùng câu hỏi. Không chặn dòng này thì mục cuối cùng sẽ "nuốt" luôn
// phần sau nó.
const SECTION_BREAK_RE = /^[【[].*[】\]]$/;

type SectionKind = "term" | "subquestion" | null;

/**
 * Tách 解答例 thành từng mục nhỏ để luyện riêng, nhận diện 2 kiểu đề khác
 * nhau hay gặp trong answer_jp:
 * - "chọn N trong M từ": "1. 工具の取扱い\n① ...\n② ...\n\n2. 分電盤の取付け\n...".
 * - "nhiều câu con 1-1/1-2": "1-1\n(1) ...\n...\n\n1-2\n① 留意事項：...\n\n② 留意事項：...".
 *   Trong kiểu này, ①② đứng đầu dòng lại là ranh giới 2 câu trả lời độc lập
 *   (không phải 2 ý nhỏ của cùng 1 câu), nên được tách thành mục riêng, gắn
 *   nhãn theo mục cha gần nhất (vd "1-2 ①").
 * Không tách được (đáp án dạng đoạn văn/điền chỗ trống kiểu "(1)/(2)") thì
 * trả về mảng rỗng - modal sẽ rơi về chế độ luyện toàn bộ.
 */
export function parseAnswerItems(text: string): AnswerItem[] {
  const lines = text.split("\n");
  const items: { label: string; lines: string[] }[] = [];
  let current: { label: string; lines: string[] } | null = null;
  let sectionKind: SectionKind = null;
  let sectionPrefix = "";

  for (const line of lines) {
    const trimmed = line.trim();

    if (TERM_HEADER_RE.test(trimmed) && !trimmed.endsWith("。")) {
      current = { label: trimmed, lines: [line] };
      items.push(current);
      sectionKind = "term";
      sectionPrefix = "";
      continue;
    }

    if (SUBQUESTION_HEADER_RE.test(trimmed) && !trimmed.endsWith("。")) {
      current = { label: trimmed, lines: [line] };
      items.push(current);
      sectionKind = "subquestion";
      sectionPrefix = trimmed;
      continue;
    }

    if (sectionKind === "subquestion" && CIRCLED_NUMBER_RE.test(trimmed)) {
      const marker = trimmed[0];
      current = { label: sectionPrefix ? `${sectionPrefix} ${marker}` : marker, lines: [line] };
      items.push(current);
      continue;
    }

    if (SECTION_BREAK_RE.test(trimmed)) {
      current = null;
      sectionKind = null;
      sectionPrefix = "";
      continue;
    }

    current?.lines.push(line);
  }

  const normalized = items.map((item) => ({ label: item.label, text: item.lines.join("\n").trim() }));
  // "1-2" đứng riêng mà toàn bộ nội dung thực ra đã dồn hết sang các mục con
  // "1-2 ①"/"1-2 ②" ngay sau - bỏ cái header trống đó đi, chỉ giữ các mục con.
  return normalized
    .filter((item, index) => {
      if (item.text !== item.label) return true;
      const next = normalized[index + 1];
      return !(next && next.label.startsWith(`${item.label} `));
    })
    .filter((item) => item.text.length > 0);
}

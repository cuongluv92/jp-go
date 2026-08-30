import type { JlptLevel } from "@/lib/types";

/**
 * Cấu trúc đề JLPT theo từng cấp độ — không có phần Nghe (聴解, chưa có
 * audio). Nguồn dữ liệu:
 *  - N2: lấy ĐÚNG theo đề thật kỳ 2018-07 (người dùng gửi file PDF, đã đọc
 *    trực tiếp, không suy đoán) — 14 mục, 75 câu, 105 phút.
 *  - N1/N3/N4/N5: CHƯA có đề thật để đối chiếu — suy ra từ khung N2 thật ở
 *    trên theo cấu trúc công khai phổ biến (đã tra cứu thêm), với 2 khác
 *    biệt đã xác nhận: (a) 語形成 (word formation) CHỈ có ở N2, không xuất
 *    hiện ở cấp khác; (b) số câu giảm dần theo cấp thấp hơn, N4/N5 không có
 *    統合理解/主張理解 (đọc hiểu dài). Đây là MÔ PHỎNG GẦN ĐÚNG, số câu có
 *    thể lệch vài câu so với đề thật — số câu JLPT thật cũng dao động nhẹ
 *    giữa các kỳ thi (đặc biệt N1/N2), không phải hằng số tuyệt đối.
 */

export type BlueprintSectionKind =
  | "kanji_reading"
  | "kanji_writing"
  | "word_formation"
  | "context_vocab"
  | "synonym"
  | "usage"
  | "grammar1"
  | "grammar2"
  | "grammar3"
  | "reading_short"
  | "reading_mid"
  | "integrated"
  | "reading_long"
  | "info_search";

export interface BlueprintSection {
  kind: BlueprintSectionKind;
  title: string;
  questionCount: number;
}

export interface JlptBlueprint {
  level: JlptLevel;
  minutes: number;
  sections: BlueprintSection[];
  /** true = số liệu lấy từ đề thật đã đối chiếu; false = mô phỏng gần đúng. */
  verified: boolean;
}

/**
 * Loại phần hiện SINH ĐƯỢC câu hỏi thật từ nội dung có sẵn (chỉ có từ vựng +
 * ví dụ, chưa có Kanji/Ngữ pháp/đoạn văn đọc hiểu) — các phần còn lại hiển
 * thị "chưa đủ nội dung" thay vì bịa câu hỏi.
 */
export const GENERATABLE_KINDS: BlueprintSectionKind[] = ["context_vocab"];

export const JLPT_BLUEPRINTS: Record<JlptLevel, JlptBlueprint> = {
  N2: {
    level: "N2",
    minutes: 105,
    verified: true,
    sections: [
      { kind: "kanji_reading", title: "問題1 漢字読み", questionCount: 5 },
      { kind: "kanji_writing", title: "問題2 表記", questionCount: 5 },
      { kind: "word_formation", title: "問題3 語形成", questionCount: 5 },
      { kind: "context_vocab", title: "問題4 文脈規定", questionCount: 7 },
      { kind: "synonym", title: "問題5 言い換え類義", questionCount: 5 },
      { kind: "usage", title: "問題6 用法", questionCount: 5 },
      { kind: "grammar1", title: "問題7 文法1", questionCount: 12 },
      { kind: "grammar2", title: "問題8 文法2（文の組み立て）", questionCount: 5 },
      { kind: "grammar3", title: "問題9 文章の文法", questionCount: 5 },
      { kind: "reading_short", title: "問題10 内容理解（短文）", questionCount: 5 },
      { kind: "reading_mid", title: "問題11 内容理解（中文）", questionCount: 9 },
      { kind: "integrated", title: "問題12 統合理解", questionCount: 2 },
      { kind: "reading_long", title: "問題13 主張理解（長文）", questionCount: 3 },
      { kind: "info_search", title: "問題14 情報検索", questionCount: 2 },
    ],
  },
  N1: {
    level: "N1",
    minutes: 110,
    verified: false,
    sections: [
      { kind: "kanji_reading", title: "問題1 漢字読み", questionCount: 6 },
      { kind: "context_vocab", title: "問題2 文脈規定", questionCount: 7 },
      { kind: "synonym", title: "問題3 言い換え類義", questionCount: 6 },
      { kind: "usage", title: "問題4 用法", questionCount: 6 },
      { kind: "grammar1", title: "問題5 文法1", questionCount: 10 },
      { kind: "grammar2", title: "問題6 文法2（文の組み立て）", questionCount: 5 },
      { kind: "grammar3", title: "問題7 文章の文法", questionCount: 5 },
      { kind: "reading_short", title: "問題8 内容理解（短文）", questionCount: 4 },
      { kind: "reading_mid", title: "問題9 内容理解（中文）", questionCount: 9 },
      { kind: "reading_long", title: "問題10 内容理解（長文）", questionCount: 4 },
      { kind: "integrated", title: "問題11 統合理解", questionCount: 3 },
      { kind: "reading_long", title: "問題12 主張理解（長文）", questionCount: 4 },
      { kind: "info_search", title: "問題13 情報検索", questionCount: 2 },
    ],
  },
  N3: {
    level: "N3",
    minutes: 70,
    verified: false,
    sections: [
      { kind: "kanji_reading", title: "問題1 漢字読み", questionCount: 8 },
      { kind: "kanji_writing", title: "問題2 表記", questionCount: 6 },
      { kind: "context_vocab", title: "問題3 文脈規定", questionCount: 11 },
      { kind: "synonym", title: "問題4 言い換え類義", questionCount: 5 },
      { kind: "usage", title: "問題5 用法", questionCount: 5 },
      { kind: "grammar1", title: "問題1 文法1", questionCount: 13 },
      { kind: "grammar2", title: "問題2 文法2（文の組み立て）", questionCount: 5 },
      { kind: "grammar3", title: "問題3 文章の文法", questionCount: 5 },
      { kind: "reading_short", title: "問題4 内容理解（短文）", questionCount: 4 },
      { kind: "reading_mid", title: "問題5 内容理解（中文）", questionCount: 6 },
      { kind: "reading_long", title: "問題6 内容理解（長文）", questionCount: 4 },
      { kind: "info_search", title: "問題7 情報検索", questionCount: 2 },
    ],
  },
  N4: {
    level: "N4",
    minutes: 55,
    verified: false,
    sections: [
      { kind: "kanji_reading", title: "問題1 漢字読み", questionCount: 9 },
      { kind: "kanji_writing", title: "問題2 表記", questionCount: 6 },
      { kind: "context_vocab", title: "問題3 文脈規定", questionCount: 10 },
      { kind: "synonym", title: "問題4 言い換え類義", questionCount: 5 },
      { kind: "usage", title: "問題5 用法", questionCount: 5 },
      { kind: "grammar1", title: "問題1 文法1", questionCount: 15 },
      { kind: "grammar2", title: "問題2 文法2（文の組み立て）", questionCount: 5 },
      { kind: "grammar3", title: "問題3 文章の文法", questionCount: 5 },
      { kind: "reading_short", title: "問題4 内容理解（短文）", questionCount: 4 },
      { kind: "reading_mid", title: "問題5 内容理解（中文）", questionCount: 4 },
      { kind: "info_search", title: "問題6 情報検索", questionCount: 2 },
    ],
  },
  N5: {
    level: "N5",
    minutes: 50,
    verified: false,
    sections: [
      { kind: "kanji_reading", title: "問題1 漢字読み", questionCount: 12 },
      { kind: "kanji_writing", title: "問題2 表記", questionCount: 8 },
      { kind: "context_vocab", title: "問題3 文脈規定", questionCount: 10 },
      { kind: "synonym", title: "問題4 言い換え類義", questionCount: 5 },
      { kind: "grammar1", title: "問題1 文法1", questionCount: 16 },
      { kind: "grammar2", title: "問題2 文法2（文の組み立て）", questionCount: 5 },
      { kind: "grammar3", title: "問題3 文章の文法", questionCount: 5 },
      { kind: "reading_short", title: "問題4 内容理解（短文）", questionCount: 3 },
      { kind: "reading_mid", title: "問題5 内容理解（中文）", questionCount: 2 },
      { kind: "info_search", title: "問題6 情報検索", questionCount: 1 },
    ],
  },
};

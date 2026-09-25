import type { VocabExample } from "@/lib/types";

/**
 * Ví dụ cho các từ trong tango-n3-word-additions.ts (từ bị thiếu khỏi
 * sample-words.json gốc). Đúng 3 ví dụ/từ (exam/daily/business), theo
 * chuẩn đã áp dụng cho toàn bộ Tango N3.
 */
export const TANGO_N3_EXAMPLE_ADDITIONS: VocabExample[] = [
  {
    vocabId: "daihyou",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "クラスの代表として、意見を発表した。",
    exampleVi: "Với tư cách đại diện lớp, tôi đã phát biểu ý kiến.",
    clozeJp: "クラスの_____として、意見を発表した。",
    answer: "代表",
  },
  {
    vocabId: "daihyou",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "今度の旅行、誰が代表で予約する?",
    exampleVi: "Chuyến du lịch lần này, ai sẽ đại diện đặt chỗ?",
    clozeJp: "今度の旅行、誰が_____で予約する?",
    answer: "代表",
  },
  {
    vocabId: "daihyou",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "会社を代表して、契約書にサインした。",
    exampleVi: "Đại diện cho công ty, tôi đã ký hợp đồng.",
    clozeJp: "会社を_____して、契約書にサインした。",
    answer: "代表",
  },
];

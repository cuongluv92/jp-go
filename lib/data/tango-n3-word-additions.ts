import type { VocabWord } from "@/lib/types";

/**
 * Từ bị rơi mất khỏi file Excel gốc khi biên soạn N3 (代表 nằm giữa
 * タイトル và 大部分 trong nguồn nhưng chưa từng được đưa vào sample-words.json).
 * Không sửa tay JSON lớn — thêm qua lớp riêng này để giữ lịch sử, giống
 * cách tango-n3-word-overrides.ts xử lý các sửa hậu kiểm khác.
 */
export const TANGO_N3_WORD_ADDITIONS: VocabWord[] = [
  {
    id: "daihyou",
    word: "代表",
    kanji: "代表",
    reading: "だいひょう",
    meaningVi: "đại diện, đại biểu",
    partOfSpeech: "noun",
    verbClass: null,
    transitivity: null,
    particlePatterns: ["〜を代表する", "クラスの代表"],
    usagePatterns: [],
    collocations: ["代表を選ぶ", "代表になる"],
    register: "neutral",
    usageNote:
      "代表 vừa là danh từ (người/vật đại diện) vừa có thể dùng サ変 động từ (代表する = đại diện cho). Thường xuất hiện trong ngữ cảnh trang trọng: hội nghị, tổ chức, thi đấu.",
    commonMistake: "",
    similarWords: "担当（たんとう）: người phụ trách một việc cụ thể, không nhất thiết đại diện cho cả nhóm/tổ chức.",
    naturalnessNote: "",
    jlpt: "N3",
    needsReview: false,
    progress: {
      status: "chua_hoc",
      isFavorite: false,
      timesCorrect: 0,
      timesWrong: 0,
      lastReviewedAt: null,
      nextReviewAt: null,
      intervalDays: 1,
      easeFactor: 2.5,
      repetitions: 0,
    },
  },
];

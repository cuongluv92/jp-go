/**
 * Kiểu dữ liệu lõi cho jp-go — schema v2.
 *
 * Thiết kế để phục vụ trực tiếp việc học (quiz, chia từ, cloze, SRS...),
 * không chỉ hiển thị nghĩa. Ba thực thể tách rời, khớp với 3 sheet khi
 * export/import Excel:
 *   - VocabWord       → sheet VOCAB
 *   - VocabExample    → sheet EXAMPLES (đúng 3 dòng / từ)
 *   - Conjugation     → sheet CONJUGATIONS (chỉ áp dụng động từ/tính từ)
 */

// ---------------------------------------------------------------------------
// Loại từ, cấp độ, trạng thái học
// ---------------------------------------------------------------------------

export type PartOfSpeech =
  | "noun"
  | "verb"
  | "i_adjective"
  | "na_adjective"
  | "adverb"
  | "conjunction"
  | "particle"
  | "expression";

/** Nhãn hiển thị trên UI — dùng thuật ngữ tiếng Nhật ngắn gọn, không diễn giải dài dòng. */
export const PART_OF_SPEECH_LABELS: Record<PartOfSpeech, string> = {
  noun: "名詞",
  verb: "動詞",
  i_adjective: "い形容詞",
  na_adjective: "な形容詞",
  adverb: "副詞",
  conjunction: "接続詞",
  particle: "助詞",
  expression: "表現",
};

/** Chỉ có ý nghĩa khi part_of_speech = "verb". */
export type VerbClass = "godan" | "ichidan" | "suru" | "kuru" | null;

/** Chỉ có ý nghĩa với động từ. */
export type Transitivity = "transitive" | "intransitive" | null;

/** Sắc thái/độ trang trọng — để trống nếu không chắc, không suy đoán bừa. */
export type Register = "casual" | "neutral" | "formal" | "business" | null;

export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export const JLPT_LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export type LearningStatus = "chua_hoc" | "dang_hoc" | "da_nho";

export const LEARNING_STATUS_LABELS: Record<LearningStatus, string> = {
  chua_hoc: "Chưa học",
  dang_hoc: "Đang học",
  da_nho: "Đã nhớ",
};

// ---------------------------------------------------------------------------
// SRS / tiến độ học — tách riêng khỏi nội dung từ vựng
// ---------------------------------------------------------------------------

export interface LearningProgress {
  status: LearningStatus;
  isFavorite: boolean;
  timesCorrect: number;
  timesWrong: number;
  lastReviewedAt: string | null;
  nextReviewAt: string | null;
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
}

// ---------------------------------------------------------------------------
// VOCAB — sheet chính
// ---------------------------------------------------------------------------

export interface VocabWord {
  id: string;
  word: string;
  /** Phần kanji thuần (nếu có). Với từ thuần kana (アイデア...), để trống hoặc bằng `word`. */
  kanji: string;
  reading: string;
  meaningVi: string;
  partOfSpeech: PartOfSpeech;
  verbClass: VerbClass;
  transitivity: Transitivity;

  /** Trợ từ / mẫu câu hoàn chỉnh thường đi kèm, vd "会議に出る" — không lưu trợ từ trần trụi. */
  particlePatterns: string[];
  /** Mẫu ngữ pháp/cách dùng rộng hơn (đặc biệt hữu ích với trợ từ, biểu hiện). */
  usagePatterns: string[];
  /** Cụm từ ghép / collocation thường gặp, vd "定例会議", "会議室". */
  collocations: string[];

  register: Register;
  /** Cách dùng thực tế — mô tả ngắn cách người Nhật thực sự dùng từ này. */
  usageNote: string;
  /** Lỗi thường gặp khi dùng từ này. */
  commonMistake: string;
  /** Từ gần nghĩa / dễ nhầm, và điểm khác biệt. */
  similarWords: string;
  /** Ghi chú thêm về mức độ tự nhiên (vd chỉ dùng trong văn viết, hội thoại...). */
  naturalnessNote: string;

  jlpt: JlptLevel;
  /** true nếu một trường nào đó (trợ từ, cách dùng, từ gần nghĩa...) chưa chắc chắn, cần người kiểm tra lại. */
  needsReview: boolean;
  /** Admin ẩn từ khỏi kho từ vựng (vẫn giữ dữ liệu, không xoá). Không thuộc dữ liệu Excel. */
  isHidden?: boolean;

  progress: LearningProgress;
}

// ---------------------------------------------------------------------------
// EXAMPLES — đúng 3 dòng / từ
// ---------------------------------------------------------------------------

export type ExampleNo = 1 | 2 | 3;
export type ExampleType = "exam" | "daily" | "business";

export const EXAMPLE_TYPE_BY_NO: Record<ExampleNo, ExampleType> = {
  1: "exam",
  2: "daily",
  3: "business",
};

export interface VocabExample {
  vocabId: string;
  exampleNo: ExampleNo;
  exampleType: ExampleType;
  exampleJp: string;
  exampleVi: string;
  /** Câu example_jp nhưng ẩn từ đang học bằng "_____". */
  clozeJp: string;
  /** Từ bị ẩn trong cloze — dùng để chấm bài điền từ. */
  answer: string;
}

// ---------------------------------------------------------------------------
// CONJUGATIONS — chỉ verb / i_adjective / na_adjective mới có
// ---------------------------------------------------------------------------

export interface VerbConjugation {
  kind: "verb";
  dictionaryForm: string;
  masuForm: string;
  teForm: string;
  naiForm: string;
  taForm: string;
  potentialForm: string;
  volitionalForm: string;
}

export interface IAdjectiveConjugation {
  kind: "i_adjective";
  dictionaryForm: string;
  negativeForm: string;
  pastForm: string;
  negativePastForm: string;
  teForm: string;
}

export interface NaAdjectiveConjugation {
  kind: "na_adjective";
  dictionaryForm: string;
  negativeForm: string;
  pastForm: string;
  negativePastForm: string;
  teForm: string;
}

export type Conjugation = VerbConjugation | IAdjectiveConjugation | NaAdjectiveConjugation;

// ---------------------------------------------------------------------------
// Luyện tập
// ---------------------------------------------------------------------------

export type FlashcardGrade = "chua_nho" | "kho" | "da_nho";

export interface PracticeDailyResult {
  date: string;
  correct: number;
  total: number;
}

export type PracticeMode =
  | "chon_nghia"
  | "dien_tu"
  | "chon_tro_tu"
  | "sap_xep_cau"
  | "chon_cach_dung"
  | "phan_biet_ngu_canh";

export interface PracticeModeInfo {
  mode: PracticeMode;
  title: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Import/Export Excel
// ---------------------------------------------------------------------------

/** Tên 3 sheet dùng khi export/import — cố định để import lại đúng chỗ. */
export const EXCEL_SHEET_NAMES = {
  vocab: "VOCAB",
  examples: "EXAMPLES",
  conjugations: "CONJUGATIONS",
} as const;

/** Cột của sheet VOCAB, đúng thứ tự khi export. */
export const VOCAB_COLUMNS = [
  "id",
  "word",
  "kanji",
  "reading",
  "meaning_vi",
  "part_of_speech",
  "verb_class",
  "transitivity",
  "particle_patterns",
  "usage_patterns",
  "collocations",
  "register",
  "usage_note",
  "common_mistake",
  "similar_words",
  "naturalness_note",
  "jlpt",
  "needs_review",
] as const;

export type VocabColumn = (typeof VOCAB_COLUMNS)[number];

/** Một dòng thô đọc từ sheet VOCAB (mọi giá trị là text, kể cả list đã join bằng "|"). */
export type VocabExcelRow = Record<VocabColumn, string>;

export const EXAMPLE_COLUMNS = [
  "vocab_id",
  "example_no",
  "example_type",
  "example_jp",
  "example_vi",
  "cloze_jp",
  "answer",
] as const;

export type ExampleColumn = (typeof EXAMPLE_COLUMNS)[number];
export type ExampleExcelRow = Record<ExampleColumn, string>;

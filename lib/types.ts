/**
 * Kiểu dữ liệu lõi cho jp-go.
 *
 * `ExcelVocabularyRow` khớp 1-1 với các cột trong file Excel từ vựng đang được
 * chuẩn bị (xem README mục "Nguồn dữ liệu Excel"). `VocabularyWord` là kiểu
 * dùng trong toàn bộ UI: nó chứa lại đúng các trường của Excel (đã đổi tên
 * sang camelCase, dễ dùng trong code) cộng thêm phần metadata do app quản lý
 * (cấp độ, chủ đề, tiến độ học...) mà Excel không có.
 *
 * Khi có file Excel thật, chỉ cần viết một hàm đọc file (xlsx/csv) trả về
 * `ExcelVocabularyRow[]`, rồi dùng `mapExcelRowToWord` (lib/data/excel-import.ts)
 * để chuyển sang `VocabularyWord` — không cần sửa lại UI.
 */

/** Tên các cột đúng như trong file Excel, dùng để đối chiếu khi nhập file. */
export const EXCEL_COLUMNS = [
  "Từ vựng",
  "Cách đọc",
  "Nghĩa tiếng Việt",
  "Loại từ",
  "Ví dụ 1: phong cách đề thi",
  "Bản dịch ví dụ 1",
  "Ví dụ 2: hội thoại đời thường tự nhiên tại Nhật",
  "Bản dịch ví dụ 2",
  "Ví dụ 3: môi trường công việc/văn phòng",
  "Bản dịch ví dụ 3",
  "Cấu trúc sử dụng",
  "Trợ từ thường đi kèm",
  "Thành phần thường đứng trước",
  "Thành phần thường đứng sau",
  "Cách chia hoặc dạng biến đổi",
  "Lưu ý cách dùng và lỗi thường gặp",
] as const;

export type ExcelColumn = (typeof EXCEL_COLUMNS)[number];

/** Một dòng dữ liệu thô, đúng như đọc ra từ file Excel (mọi giá trị là text). */
export type ExcelVocabularyRow = Record<ExcelColumn, string>;

/** Loại từ. Excel ghi bằng tiếng Việt tự do; đây là tập giá trị chuẩn hoá dùng trong app. */
export type PartOfSpeech =
  | "danh_tu" // Danh từ
  | "dong_tu" // Động từ
  | "tinh_tu" // Tính từ
  | "trang_tu" // Trạng từ
  | "tro_tu" // Trợ từ
  | "lien_tu" // Liên từ
  | "cum_tu" // Cụm từ / thành ngữ
  | "khac"; // Khác

export const PART_OF_SPEECH_LABELS: Record<PartOfSpeech, string> = {
  danh_tu: "Danh từ",
  dong_tu: "Động từ",
  tinh_tu: "Tính từ",
  trang_tu: "Trạng từ",
  tro_tu: "Trợ từ",
  lien_tu: "Liên từ",
  cum_tu: "Cụm từ",
  khac: "Khác",
};

export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export const JLPT_LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

/** Trạng thái học của một từ. */
export type LearningStatus = "chua_hoc" | "dang_hoc" | "da_nho";

export const LEARNING_STATUS_LABELS: Record<LearningStatus, string> = {
  chua_hoc: "Chưa học",
  dang_hoc: "Đang học",
  da_nho: "Đã nhớ",
};

/** Một câu ví dụ kèm bản dịch. */
export interface ExampleSentence {
  japanese: string;
  translation: string;
}

/** Ba bối cảnh ví dụ bắt buộc cho mỗi từ. */
export interface VocabularyExamples {
  /** Ví dụ 1: phong cách đề thi (JLPT...) */
  exam: ExampleSentence;
  /** Ví dụ 2: hội thoại đời thường tự nhiên tại Nhật */
  daily: ExampleSentence;
  /** Ví dụ 3: môi trường công việc / văn phòng */
  work: ExampleSentence;
}

/** Thông tin cách dùng chi tiết của từ. */
export interface VocabularyUsage {
  /** Cấu trúc sử dụng */
  structure: string;
  /** Trợ từ thường đi kèm */
  particles: string;
  /** Thành phần thường đứng trước */
  precedingElements: string;
  /** Thành phần thường đứng sau */
  followingElements: string;
  /** Cách chia hoặc dạng biến đổi */
  conjugation: string;
  /** Lưu ý cách dùng và lỗi thường gặp */
  notes: string;
}

/** Tiến độ học / lặp lại ngắt quãng (spaced repetition) của một từ, tính riêng cho từng người dùng. */
export interface LearningProgress {
  status: LearningStatus;
  isFavorite: boolean;
  timesCorrect: number;
  timesWrong: number;
  /** ISO datetime của lần ôn gần nhất, null nếu chưa ôn lần nào. */
  lastReviewedAt: string | null;
  /** ISO datetime của lần ôn kế tiếp theo lịch SRS, null nếu chưa lên lịch. */
  nextReviewAt: string | null;
  /** Khoảng cách hiện tại (ngày) giữa hai lần ôn. */
  intervalDays: number;
  /** Hệ số dễ (ease factor) kiểu SM-2, càng cao thì khoảng ôn tăng càng nhanh. */
  easeFactor: number;
  /** Số lần đã ôn liên tiếp thành công (reset về 0 khi trả lời "chưa nhớ"). */
  repetitions: number;
}

/** Một từ vựng đầy đủ, dùng xuyên suốt UI. */
export interface VocabularyWord {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  partOfSpeech: PartOfSpeech;
  level: JlptLevel;
  /** Chủ đề, ví dụ: "Công việc", "Đời sống", "Du lịch"... */
  topic: string;
  examples: VocabularyExamples;
  usage: VocabularyUsage;
  /** URL audio phát âm, nếu có. Khi không có, dùng Web Speech API để đọc `word`. */
  audioUrl?: string;
  /** Từ bị admin ẩn khỏi kho từ vựng (vẫn giữ dữ liệu, không xoá). */
  isHidden?: boolean;
  progress: LearningProgress;
}

/** Mức đánh giá khi học flashcard, dùng để cập nhật lịch ôn tập. */
export type FlashcardGrade = "chua_nho" | "kho" | "da_nho";

/** Một điểm dữ liệu thống kê luyện tập theo ngày, dùng ở trang Tiến độ. */
export interface PracticeDailyResult {
  /** Ngày dạng YYYY-MM-DD */
  date: string;
  correct: number;
  total: number;
}

/** Dạng bài luyện tập được hỗ trợ (giai đoạn này chỉ là khung giao diện). */
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

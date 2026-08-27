import {
  EXCEL_COLUMNS,
  type ExcelColumn,
  type ExcelVocabularyRow,
  type PartOfSpeech,
  type VocabularyWord,
} from "@/lib/types";

/**
 * Lớp chuyển đổi giữa file Excel từ vựng và `VocabularyWord` dùng trong app.
 *
 * Giai đoạn này chưa đọc file Excel thật (chưa có file mẫu hoàn thiện), nhưng
 * toàn bộ logic map cột / kiểm tra thiếu cột / phát hiện trùng đã sẵn sàng.
 * Khi có file thật, chỉ cần thêm một bước đọc .xlsx/.csv thành mảng
 * `ExcelVocabularyRow` (mỗi dòng là 1 object khoá theo đúng tên cột) rồi gọi
 * các hàm dưới đây — không cần sửa UI trang Quản lý dữ liệu.
 */

/** Các cột bắt buộc phải có giá trị thì mới nhập được một từ. */
const REQUIRED_COLUMNS: ExcelColumn[] = ["Từ vựng", "Cách đọc", "Nghĩa tiếng Việt", "Loại từ"];

const PART_OF_SPEECH_ALIASES: Record<string, PartOfSpeech> = {
  "danh từ": "danh_tu",
  "động từ": "dong_tu",
  "tính từ": "tinh_tu",
  "trạng từ": "trang_tu",
  "phó từ": "trang_tu",
  "trợ từ": "tro_tu",
  "liên từ": "lien_tu",
  "cụm từ": "cum_tu",
  "thành ngữ": "cum_tu",
};

export function mapPartOfSpeech(raw: string): PartOfSpeech {
  const key = raw.trim().toLowerCase();
  return PART_OF_SPEECH_ALIASES[key] ?? "khac";
}

export interface ExcelRowValidation {
  /** Các cột bắt buộc bị thiếu hoặc rỗng — phải sửa trước khi nhập. */
  missingColumns: ExcelColumn[];
  /** Các cột nên có nhưng đang trống — vẫn nhập được, chỉ cảnh báo. */
  warnings: string[];
}

/** Kiểm tra một dòng Excel: cột nào thiếu, cột nào nên bổ sung thêm. */
export function validateExcelRow(row: Partial<ExcelVocabularyRow>): ExcelRowValidation {
  const missingColumns: ExcelColumn[] = [];
  const warnings: string[] = [];

  for (const column of EXCEL_COLUMNS) {
    const value = row[column]?.trim();
    if (!value) {
      if (REQUIRED_COLUMNS.includes(column)) {
        missingColumns.push(column);
      } else {
        warnings.push(`Thiếu cột "${column}"`);
      }
    }
  }

  return { missingColumns, warnings };
}

/** Tìm các cột có trong `EXCEL_COLUMNS` nhưng không xuất hiện trong header thực tế của file. */
export function findMissingHeaders(actualHeaders: string[]): ExcelColumn[] {
  const headerSet = new Set(actualHeaders.map((h) => h.trim()));
  return EXCEL_COLUMNS.filter((column) => !headerSet.has(column));
}

export interface ExcelImportOverrides {
  id: string;
  level: VocabularyWord["level"];
  topic: string;
}

/** Chuyển một dòng Excel hợp lệ thành `VocabularyWord`. Metadata (id/level/topic) do người nhập chọn. */
export function mapExcelRowToWord(row: ExcelVocabularyRow, overrides: ExcelImportOverrides): VocabularyWord {
  return {
    id: overrides.id,
    word: row["Từ vựng"].trim(),
    reading: row["Cách đọc"].trim(),
    meaning: row["Nghĩa tiếng Việt"].trim(),
    partOfSpeech: mapPartOfSpeech(row["Loại từ"]),
    level: overrides.level,
    topic: overrides.topic,
    examples: {
      exam: {
        japanese: row["Ví dụ 1: phong cách đề thi"].trim(),
        translation: row["Bản dịch ví dụ 1"].trim(),
      },
      daily: {
        japanese: row["Ví dụ 2: hội thoại đời thường tự nhiên tại Nhật"].trim(),
        translation: row["Bản dịch ví dụ 2"].trim(),
      },
      work: {
        japanese: row["Ví dụ 3: môi trường công việc/văn phòng"].trim(),
        translation: row["Bản dịch ví dụ 3"].trim(),
      },
    },
    usage: {
      structure: row["Cấu trúc sử dụng"].trim(),
      particles: row["Trợ từ thường đi kèm"].trim(),
      precedingElements: row["Thành phần thường đứng trước"].trim(),
      followingElements: row["Thành phần thường đứng sau"].trim(),
      conjugation: row["Cách chia hoặc dạng biến đổi"].trim(),
      notes: row["Lưu ý cách dùng và lỗi thường gặp"].trim(),
    },
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
  };
}

export interface DuplicateGroup {
  word: string;
  reading: string;
  count: number;
}

/** Phát hiện từ trùng nhau trong chính danh sách đang nhập (so theo word + reading). */
export function findDuplicatesWithinRows(rows: ExcelVocabularyRow[]): DuplicateGroup[] {
  const counts = new Map<string, DuplicateGroup>();
  for (const row of rows) {
    const word = row["Từ vựng"].trim();
    const reading = row["Cách đọc"].trim();
    if (!word) continue;
    const key = `${word}__${reading}`;
    const existing = counts.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(key, { word, reading, count: 1 });
    }
  }
  return Array.from(counts.values()).filter((group) => group.count > 1);
}

/** Phát hiện dòng Excel trùng với từ đã có sẵn trong kho từ vựng. */
export function findDuplicatesAgainstExisting(
  rows: ExcelVocabularyRow[],
  existingWords: VocabularyWord[],
): ExcelVocabularyRow[] {
  const existingKeys = new Set(existingWords.map((w) => `${w.word}__${w.reading}`));
  return rows.filter((row) => existingKeys.has(`${row["Từ vựng"].trim()}__${row["Cách đọc"].trim()}`));
}

import { describe, expect, it } from "vitest";

import {
  findDuplicatesAgainstExisting,
  findDuplicatesWithinRows,
  findMissingHeaders,
  mapExcelRowToWord,
  mapPartOfSpeech,
  validateExcelRow,
} from "@/lib/data/excel-import";
import { EXCEL_COLUMNS, type ExcelVocabularyRow, type VocabularyWord } from "@/lib/types";

function makeRow(overrides: Partial<ExcelVocabularyRow> = {}): ExcelVocabularyRow {
  const base = Object.fromEntries(EXCEL_COLUMNS.map((c) => [c, ""])) as ExcelVocabularyRow;
  return {
    ...base,
    "Từ vựng": "会議",
    "Cách đọc": "かいぎ",
    "Nghĩa tiếng Việt": "cuộc họp",
    "Loại từ": "Danh từ",
    ...overrides,
  };
}

describe("mapPartOfSpeech", () => {
  it("nhận diện đúng loại từ tiếng Việt", () => {
    expect(mapPartOfSpeech("Danh từ")).toBe("danh_tu");
    expect(mapPartOfSpeech("động từ")).toBe("dong_tu");
    expect(mapPartOfSpeech(" Tính Từ ")).toBe("tinh_tu");
  });

  it("trả về 'khac' khi không nhận diện được", () => {
    expect(mapPartOfSpeech("Không rõ")).toBe("khac");
  });
});

describe("validateExcelRow", () => {
  it("báo thiếu cột bắt buộc", () => {
    const row = makeRow({ "Nghĩa tiếng Việt": "" });
    const result = validateExcelRow(row);
    expect(result.missingColumns).toContain("Nghĩa tiếng Việt");
  });

  it("chỉ cảnh báo (không chặn) khi thiếu cột không bắt buộc", () => {
    const row = makeRow({ "Cấu trúc sử dụng": "" });
    const result = validateExcelRow(row);
    expect(result.missingColumns).toHaveLength(0);
    expect(result.warnings.some((w) => w.includes("Cấu trúc sử dụng"))).toBe(true);
  });

  it("không báo lỗi khi đầy đủ cột bắt buộc", () => {
    const row = makeRow();
    expect(validateExcelRow(row).missingColumns).toHaveLength(0);
  });
});

describe("findMissingHeaders", () => {
  it("phát hiện cột bị thiếu trong header thực tế của file", () => {
    const actual = EXCEL_COLUMNS.filter((c) => c !== "Trợ từ thường đi kèm");
    expect(findMissingHeaders(actual)).toEqual(["Trợ từ thường đi kèm"]);
  });

  it("trả về mảng rỗng khi đủ hết cột", () => {
    expect(findMissingHeaders([...EXCEL_COLUMNS])).toHaveLength(0);
  });
});

describe("mapExcelRowToWord", () => {
  it("chuyển đổi đúng cấu trúc, giữ nguyên dữ liệu và gán metadata", () => {
    const row = makeRow({
      "Ví dụ 1: phong cách đề thi": "明日の会議は何時からですか。",
      "Bản dịch ví dụ 1": "Cuộc họp ngày mai bắt đầu từ mấy giờ?",
    });
    const word = mapExcelRowToWord(row, { id: "w-1", level: "N4", topic: "Công việc" });

    expect(word.id).toBe("w-1");
    expect(word.word).toBe("会議");
    expect(word.partOfSpeech).toBe("danh_tu");
    expect(word.level).toBe("N4");
    expect(word.examples.exam.japanese).toBe("明日の会議は何時からですか。");
    expect(word.progress.status).toBe("chua_hoc");
  });
});

describe("findDuplicatesWithinRows", () => {
  it("phát hiện các dòng trùng từ + cách đọc trong cùng file", () => {
    const rows = [makeRow(), makeRow(), makeRow({ "Từ vựng": "予約", "Cách đọc": "よやく" })];
    const duplicates = findDuplicatesWithinRows(rows);
    expect(duplicates).toEqual([{ word: "会議", reading: "かいぎ", count: 2 }]);
  });
});

describe("findDuplicatesAgainstExisting", () => {
  it("phát hiện dòng trùng với từ đã có trong kho", () => {
    const existing: VocabularyWord[] = [
      {
        id: "w-1",
        word: "会議",
        reading: "かいぎ",
        meaning: "cuộc họp",
        partOfSpeech: "danh_tu",
        level: "N4",
        topic: "Công việc",
        examples: {
          exam: { japanese: "", translation: "" },
          daily: { japanese: "", translation: "" },
          work: { japanese: "", translation: "" },
        },
        usage: { structure: "", particles: "", precedingElements: "", followingElements: "", conjugation: "", notes: "" },
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
    const rows = [makeRow(), makeRow({ "Từ vựng": "予約", "Cách đọc": "よやく" })];
    const result = findDuplicatesAgainstExisting(rows, existing);
    expect(result).toHaveLength(1);
    expect(result[0]["Từ vựng"]).toBe("会議");
  });
});

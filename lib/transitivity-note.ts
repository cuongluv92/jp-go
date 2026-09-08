import type { PartOfSpeech, Transitivity } from "@/lib/types";

function isBothTransitivityExplicit(note: string): boolean {
  const normalized = note.toLowerCase();
  return (
    (note.includes("自動詞") && note.includes("他動詞")) ||
    (normalized.includes("tự động từ") && normalized.includes("tha động từ")) ||
    note.includes("自他")
  );
}

function isFixedExpressionExplicit(note: string): boolean {
  const normalized = note.toLowerCase();
  return (
    note.includes("固定句") ||
    note.includes("固定表現") ||
    normalized.includes("cụm cố định") ||
    normalized.includes("không ép nhãn") ||
    note.includes("単一の自他ラベル") ||
    note.includes("単一ラベルに固定しない")
  );
}

/**
 * Thêm nhãn tự/tha động từ dễ nhìn vào ghi chú học.
 * Không suy đoán từ mặt chữ: chỉ dùng `transitivity` đã kiểm định và ghi chú DB
 * cho các entry cố ý để null vì đa nghĩa/cụm cố định.
 */
export function addTransitivityNote(
  partOfSpeech: PartOfSpeech,
  transitivity: Transitivity,
  usageNote: string,
): string {
  if (partOfSpeech !== "verb") return usageNote;

  const note = usageNote.trim();
  if (transitivity === "intransitive") {
    if (note.includes("自動詞") || note.toLowerCase().includes("tự động từ")) {
      return `Tự/tha: ${note}`;
    }
    return `Tự/tha: Tự động từ（自動詞）.${note ? ` ${note}` : ""}`;
  }
  if (transitivity === "transitive") {
    if (note.includes("他動詞") || note.toLowerCase().includes("tha động từ")) {
      return `Tự/tha: ${note}`;
    }
    return `Tự/tha: Tha động từ（他動詞）.${note ? ` ${note}` : ""}`;
  }
  if (isBothTransitivityExplicit(note)) {
    return `Tự/tha: Có cả tự động từ và tha động từ（自動詞・他動詞）, tùy nghĩa/cấu trúc.${note ? ` ${note}` : ""}`;
  }
  if (isFixedExpressionExplicit(note)) {
    return `Tự/tha: Không gán một nhãn đơn; đây là cụm/cách dùng cần học theo mẫu câu.${note ? ` ${note}` : ""}`;
  }
  return `Tự/tha: Không gán một nhãn 自動詞／他動詞 đơn lẻ cho entry này; xem mẫu trợ từ và cách dùng.${note ? ` ${note}` : ""}`;
}

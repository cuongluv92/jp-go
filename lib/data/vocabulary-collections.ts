import type { VocabWord } from "../types";

export type VocabularyCollection = "current" | "tango-n3" | "n2-chua-dat";

/**
 * Phân biệt "tango-n3" (bộ N3 JSON tĩnh) với các từ nạp từ Supabase bằng
 * `contentSourceType`. Giữ literal "n2-chua-dat" chỉ để tương thích với
 * consumer cũ; production hiện không còn bản ghi N2 legacy nào.
 */
export function getVocabularyCollection(
  word: Pick<VocabWord, "jlpt" | "contentSourceType" | "lessonNo">,
): VocabularyCollection {
  if (word.jlpt === "N2" && word.lessonNo === undefined) return "n2-chua-dat";
  if (word.jlpt === "N3" && !word.contentSourceType) return "tango-n3";
  return "current";
}

export const VOCABULARY_COLLECTIONS = [
  { id: "current", label: "Từ vựng", href: "/vocabulary" },
  { id: "tango-n3", label: "単語 N3", href: "/vocabulary?collection=tango-n3" },
] as const;

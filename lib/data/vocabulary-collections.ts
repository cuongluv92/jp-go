import type { VocabWord } from "../types";

export type VocabularyCollection = "current" | "tango-n3";

/**
 * Phân biệt "tango-n3" (bộ N3 JSON tĩnh) với các từ nạp từ Supabase bằng
 * `contentSourceType`: chỉ từ DB mới có field này. N2 hoàn chỉnh hiện là
 * bộ production duy nhất và thuộc collection "current".
 */
export function getVocabularyCollection(
  word: Pick<VocabWord, "jlpt" | "contentSourceType">,
): VocabularyCollection {
  if (word.jlpt === "N3" && !word.contentSourceType) return "tango-n3";
  return "current";
}

export const VOCABULARY_COLLECTIONS = [
  { id: "current", label: "Từ vựng", href: "/vocabulary" },
  { id: "tango-n3", label: "単語 N3", href: "/vocabulary?collection=tango-n3" },
] as const;

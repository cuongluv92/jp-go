import type { VocabWord } from "../types";

export type VocabularyCollection = "current" | "tango-n3" | "n2-chua-dat";

/**
 * Phân biệt "tango-n3" (bộ N3 JSON tĩnh, ~1798 từ) với các từ N3 khác (nạp
 * từ Supabase, xem vocab-content-service.ts) bằng `contentSourceType`: chỉ
 * từ nạp từ DB mới có field này (luôn set, xem dbVocabRowToWord); từ JSON
 * tĩnh không bao giờ set. Cố tình KHÔNG import `sample-words.ts` ở đây để
 * dựng Set id (như trước) — file đó nặng ~1.36MB, import tĩnh sẽ kéo theo
 * mọi nơi gọi `getVocabularyCollection`, kể cả từ những route không liên
 * quan gì tới N3.
 */
export function getVocabularyCollection(word: Pick<VocabWord, "jlpt" | "contentSourceType">): VocabularyCollection {
  if (word.jlpt === "N2") return "n2-chua-dat";
  if (word.jlpt === "N3" && !word.contentSourceType) return "tango-n3";
  return "current";
}

export const VOCABULARY_COLLECTIONS = [
  { id: "current", label: "Từ vựng", href: "/vocabulary" },
  { id: "tango-n3", label: "単語 N3", href: "/vocabulary?collection=tango-n3" },
  { id: "n2-chua-dat", label: "N2 dữ liệu cũ", href: "/vocabulary?collection=n2-chua-dat" },
] as const;

import { sampleWords } from "./sample-words";
import type { VocabWord } from "../types";

export type VocabularyCollection = "current" | "tango-n3" | "n2-chua-dat";

const tangoN3Ids = new Set(sampleWords.filter((word) => word.jlpt === "N3").map((word) => word.id));

export function getVocabularyCollection(word: Pick<VocabWord, "id" | "jlpt">): VocabularyCollection {
  if (word.jlpt === "N2") return "n2-chua-dat";
  if (tangoN3Ids.has(word.id)) return "tango-n3";
  return "current";
}

export const VOCABULARY_COLLECTIONS = [
  { id: "current", label: "Từ vựng", href: "/vocabulary" },
  { id: "tango-n3", label: "単語 N3", href: "/vocabulary?collection=tango-n3" },
  { id: "n2-chua-dat", label: "N2 dữ liệu cũ", href: "/vocabulary?collection=n2-chua-dat" },
] as const;

import type { JlptLevel, VocabExample, VocabWord } from "@/lib/types";

export interface VocabularyLevelQuality {
  level: JlptLevel;
  words: number;
  completeExampleSets: number;
  missingUsageNotes: number;
  unclassified: number;
  needsReview: number;
  duplicateEntries: number;
}

export interface VocabularyQualityReport {
  levels: VocabularyLevelQuality[];
  totalWords: number;
  completeExampleSets: number;
  missingUsageNotes: number;
  unclassified: number;
  needsReview: number;
  duplicateEntries: Array<{ label: string; ids: string[] }>;
  repeatedExamples: Array<{ sentence: string; vocabIds: string[] }>;
  incompleteExampleWordIds: string[];
}

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];
const REQUIRED_EXAMPLE_TYPES = new Set(["exam", "daily", "business"]);

function normalize(value: string): string {
  return value.normalize("NFKC").trim().replace(/\s+/g, " ");
}

function hasCompleteExampleSet(examples: VocabExample[]): boolean {
  const uniqueSentences = new Set(examples.map((example) => normalize(example.exampleJp)).filter(Boolean));
  const types = new Set(examples.map((example) => example.exampleType));
  return uniqueSentences.size >= 3 && [...REQUIRED_EXAMPLE_TYPES].every((type) => types.has(type as VocabExample["exampleType"]));
}

/**
 * Kiểm tra chất lượng có thể xác định bằng dữ liệu, không cố đoán câu Nhật
 * "hay" hay "tự nhiên". Các nhóm trùng chỉ được gắn cờ để duyệt, không tự xóa
 * vì một mặt chữ/cách đọc có thể có nhiều nghĩa hợp lệ.
 */
export function analyzeVocabularyQuality(words: VocabWord[], examples: VocabExample[]): VocabularyQualityReport {
  const visibleWords = words.filter((word) => !word.isHidden);
  const examplesByWord = new Map<string, VocabExample[]>();
  for (const example of examples) examplesByWord.set(example.vocabId, [...(examplesByWord.get(example.vocabId) ?? []), example]);

  const duplicateMap = new Map<string, VocabWord[]>();
  for (const word of visibleWords) {
    const key = `${word.jlpt}\u0000${normalize(word.word)}\u0000${normalize(word.reading)}`;
    duplicateMap.set(key, [...(duplicateMap.get(key) ?? []), word]);
  }
  const duplicateEntries = [...duplicateMap.values()]
    .filter((group) => group.length > 1)
    .map((group) => ({ label: `${group[0].word}（${group[0].reading}） · ${group[0].jlpt}`, ids: group.map((word) => word.id) }));
  const duplicateIds = new Set(duplicateEntries.flatMap((entry) => entry.ids.slice(1)));

  const repeatedExampleMap = new Map<string, Set<string>>();
  for (const example of examples) {
    const sentence = normalize(example.exampleJp);
    if (!sentence) continue;
    const ids = repeatedExampleMap.get(sentence) ?? new Set<string>();
    ids.add(example.vocabId);
    repeatedExampleMap.set(sentence, ids);
  }
  const repeatedExamples = [...repeatedExampleMap.entries()]
    .filter(([, ids]) => ids.size > 1)
    .map(([sentence, ids]) => ({ sentence, vocabIds: [...ids] }))
    .sort((a, b) => b.vocabIds.length - a.vocabIds.length);

  const incompleteExampleWordIds = visibleWords
    .filter((word) => !hasCompleteExampleSet(examplesByWord.get(word.id) ?? []))
    .map((word) => word.id);
  const incompleteIds = new Set(incompleteExampleWordIds);

  const levels = LEVELS.map((level) => {
    const levelWords = visibleWords.filter((word) => word.jlpt === level);
    return {
      level,
      words: levelWords.length,
      completeExampleSets: levelWords.filter((word) => !incompleteIds.has(word.id)).length,
      missingUsageNotes: levelWords.filter((word) => !word.usageNote.trim()).length,
      unclassified: levelWords.filter((word) => word.partOfSpeech === "unclassified").length,
      needsReview: levelWords.filter((word) => word.needsReview).length,
      duplicateEntries: levelWords.filter((word) => duplicateIds.has(word.id)).length,
    };
  });

  return {
    levels,
    totalWords: visibleWords.length,
    completeExampleSets: visibleWords.length - incompleteExampleWordIds.length,
    missingUsageNotes: visibleWords.filter((word) => !word.usageNote.trim()).length,
    unclassified: visibleWords.filter((word) => word.partOfSpeech === "unclassified").length,
    needsReview: visibleWords.filter((word) => word.needsReview).length,
    duplicateEntries,
    repeatedExamples,
    incompleteExampleWordIds,
  };
}

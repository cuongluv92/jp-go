import type { JlptLevel, LearningStatus, PartOfSpeech, VocabularyWord } from "@/lib/types";

/** Bộ lọc dùng ở trang Kho từ vựng. Mọi trường đều tuỳ chọn (undefined = không lọc). */
export interface VocabularyFilter {
  query?: string;
  level?: JlptLevel;
  topic?: string;
  partOfSpeech?: PartOfSpeech;
  status?: LearningStatus;
}

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

function matchesQuery(word: VocabularyWord, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  return (
    word.word.toLowerCase().includes(q) ||
    word.reading.toLowerCase().includes(q) ||
    normalize(word.meaning).includes(q)
  );
}

/** Lọc + tìm kiếm danh sách từ vựng. Hàm thuần, không phụ thuộc nguồn dữ liệu. */
export function filterWords(words: VocabularyWord[], filter: VocabularyFilter): VocabularyWord[] {
  return words.filter((word) => {
    if (filter.query && !matchesQuery(word, filter.query)) return false;
    if (filter.level && word.level !== filter.level) return false;
    if (filter.topic && word.topic !== filter.topic) return false;
    if (filter.partOfSpeech && word.partOfSpeech !== filter.partOfSpeech) return false;
    if (filter.status && word.progress.status !== filter.status) return false;
    return true;
  });
}

/** Danh sách chủ đề duy nhất, dùng để dựng bộ lọc theo chủ đề. */
export function listTopics(words: VocabularyWord[]): string[] {
  return Array.from(new Set(words.map((w) => w.topic))).sort();
}

/** Từ đã đến hạn ôn (nextReviewAt <= thời điểm `now`). */
export function getDueWords(words: VocabularyWord[], now: Date = new Date()): VocabularyWord[] {
  return words.filter((w) => w.progress.nextReviewAt !== null && new Date(w.progress.nextReviewAt) <= now);
}

/** Từ đánh dấu "chưa nhớ" hoặc có tỉ lệ sai cao — dùng ở trang Ôn tập. */
export function getStruggledWords(words: VocabularyWord[]): VocabularyWord[] {
  return words.filter((w) => w.progress.status !== "da_nho" && w.progress.timesWrong > 0);
}

export function getFavoriteWords(words: VocabularyWord[]): VocabularyWord[] {
  return words.filter((w) => w.progress.isFavorite);
}

export interface VocabularyStats {
  total: number;
  learned: number;
  learning: number;
  notStarted: number;
  dueToday: number;
  byTopic: Record<string, number>;
  byPartOfSpeech: Partial<Record<PartOfSpeech, number>>;
}

/** Tổng hợp số liệu cho trang chủ và trang Tiến độ. */
export function computeStats(words: VocabularyWord[], now: Date = new Date()): VocabularyStats {
  const stats: VocabularyStats = {
    total: words.length,
    learned: 0,
    learning: 0,
    notStarted: 0,
    dueToday: 0,
    byTopic: {},
    byPartOfSpeech: {},
  };

  for (const word of words) {
    if (word.progress.status === "da_nho") stats.learned += 1;
    else if (word.progress.status === "dang_hoc") stats.learning += 1;
    else stats.notStarted += 1;

    if (word.progress.nextReviewAt !== null && new Date(word.progress.nextReviewAt) <= now) {
      stats.dueToday += 1;
    }

    stats.byTopic[word.topic] = (stats.byTopic[word.topic] ?? 0) + 1;
    stats.byPartOfSpeech[word.partOfSpeech] = (stats.byPartOfSpeech[word.partOfSpeech] ?? 0) + 1;
  }

  return stats;
}

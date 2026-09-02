import { getConjugation, normalizeDictionaryForm } from "@/lib/conjugation";
import type { VocabWord } from "@/lib/types";

export interface JapaneseTextSegment {
  text: string;
  start: number;
  word: VocabWord | null;
  /** Cách đọc đã được nguồn nội dung xác nhận cho đúng bề mặt trong câu. */
  reading?: string;
}

/**
 * Tách câu theo từ vựng đã có trong jp-go bằng cách ưu tiên từ dài nhất.
 * Đây không phải bộ phân tích hình thái đầy đủ; đoạn không khớp vẫn được giữ
 * nguyên để câu không bị biến đổi hoặc suy đoán sai.
 */
export function segmentJapaneseText(
  text: string,
  words: VocabWord[],
  furiganaTokens: Array<{ surface: string; reading: string }> = [],
): JapaneseTextSegment[] {
  const byFirst = new Map<string, Array<{ surface: string; word: VocabWord | null; reading?: string; verifiedReading: boolean }>>();
  for (const word of words) {
    const conjugation = getConjugation(word);
    const forms = conjugation ? Object.values(conjugation).filter((value): value is string => typeof value === "string") : [];
    const dictionaryForm = normalizeDictionaryForm(word.dictionaryForm || word.word);
    const surfaces = new Set([word.word.trim(), dictionaryForm, ...forms]);
    for (const surface of surfaces) {
      if (!surface || (surface.length === 1 && !/[一-鿿]/.test(surface))) continue;
      const first = Array.from(surface)[0];
      byFirst.set(first, [...(byFirst.get(first) ?? []), { surface, word, verifiedReading: false }]);
    }
  }
  for (const token of furiganaTokens) {
    const surface = token.surface.trim();
    const reading = token.reading.trim();
    if (!surface || !reading || !/[一-鿿]/u.test(surface)) continue;
    const first = Array.from(surface)[0];
    const matchingWord = words.find((word) => normalizeDictionaryForm(word.dictionaryForm || word.word) === surface) ?? null;
    byFirst.set(first, [...(byFirst.get(first) ?? []), { surface, word: matchingWord, reading, verifiedReading: true }]);
  }
  for (const candidates of byFirst.values()) {
    candidates.sort((a, b) => b.surface.length - a.surface.length || Number(b.verifiedReading) - Number(a.verifiedReading));
  }

  const segments: JapaneseTextSegment[] = [];
  let index = 0;
  let plain = "";
  let plainStart = 0;

  const flushPlain = () => {
    if (!plain) return;
    segments.push({ text: plain, start: plainStart, word: null });
    plain = "";
  };

  while (index < text.length) {
    const candidates = byFirst.get(text[index]) ?? [];
    const match = candidates.find((candidate) => text.startsWith(candidate.surface, index));
    if (match) {
      flushPlain();
      segments.push({ text: match.surface, start: index, word: match.word, reading: match.reading });
      index += match.surface.length;
      plainStart = index;
      continue;
    }
    if (!plain) plainStart = index;
    plain += text[index];
    index += 1;
  }
  flushPlain();
  return segments;
}

export function normalizeJapaneseAnswer(value: string): string {
  return value
    .normalize("NFKC")
    .replace(/[\s。、！？!?.,]/g, "")
    .toLowerCase();
}

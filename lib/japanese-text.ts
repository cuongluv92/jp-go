import { getConjugation, normalizeDictionaryForm } from "@/lib/conjugation";
import type { VocabWord } from "@/lib/types";

export interface JapaneseTextSegment {
  text: string;
  start: number;
  word: VocabWord | null;
  /** Cách đọc đã được nguồn nội dung xác nhận cho đúng bề mặt trong câu. */
  reading?: string;
}

type SegmentCandidate = {
  surface: string;
  word: VocabWord | null;
  reading?: string;
  /** 3 = token nội dung kiểm tra tay, 2 = suy ra an toàn từ reading_furigana, 1 = chỉ khớp mặt chữ. */
  readingPriority: 1 | 2 | 3;
};

const KURU_SUFFIX_READINGS: Record<string, string> = {
  "来る": "くる",
  "来ます": "きます",
  "来ました": "きました",
  "来ません": "きません",
  "来ませんでした": "きませんでした",
  "来て": "きて",
  "来た": "きた",
  "来ない": "こない",
  "来なかった": "こなかった",
  "来られる": "こられる",
  "来よう": "こよう",
  "来させる": "こさせる",
  "来させられる": "こさせられる",
  "来い": "こい",
  "来れば": "くれば",
};

function hasKanji(value: string): boolean {
  return /[一-鿿]/u.test(value);
}

/**
 * Tạo reading cho đúng bề mặt chia từ mà không đoán phát âm mới:
 * giữ nguyên phần reading của gốc đã có trong jp_vocab rồi nối hậu tố kana
 * xuất hiện trực tiếp trên bề mặt. 来る là ngoại lệ duy nhất cần bảng riêng.
 */
function deriveVerifiedReading(word: VocabWord, dictionaryForm: string, surface: string): string | undefined {
  const dictionaryReading = normalizeDictionaryForm(word.reading || "").trim();
  if (!dictionaryReading || !hasKanji(surface)) return undefined;

  if (surface === dictionaryForm) return dictionaryReading;

  // 来る thay đổi く/き/こ theo dạng chia; không được cắt chuỗi máy móc.
  if (dictionaryForm.endsWith("来る") && dictionaryReading.endsWith("くる")) {
    const surfacePrefix = dictionaryForm.slice(0, -2);
    const readingPrefix = dictionaryReading.slice(0, -2);
    if (!surface.startsWith(surfacePrefix)) return undefined;
    const suffix = surface.slice(surfacePrefix.length);
    const suffixReading = KURU_SUFFIX_READINGS[suffix];
    return suffixReading ? `${readingPrefix}${suffixReading}` : undefined;
  }

  // Từ ghép + する: 確認する→確認した / 勉強する→勉強して...
  if (dictionaryForm.endsWith("する") && dictionaryReading.endsWith("する")) {
    const surfaceStem = dictionaryForm.slice(0, -2);
    const readingStem = dictionaryReading.slice(0, -2);
    return surface.startsWith(surfaceStem) ? `${readingStem}${surface.slice(surfaceStem.length)}` : undefined;
  }

  // な形容詞: 静か→静かだった / 安全→安全です (phần gốc không đổi cách đọc).
  if (word.partOfSpeech === "na_adjective" && surface.startsWith(dictionaryForm)) {
    return `${dictionaryReading}${surface.slice(dictionaryForm.length)}`;
  }

  // Động từ thường và い形容詞: bỏ đúng 1 kana cuối của dạng từ điển/read rồi
  // nối phần kana biến đổi trên bề mặt. Ví dụ 書く→書いて = か + いて.
  if (word.partOfSpeech === "verb" || word.partOfSpeech === "i_adjective") {
    const lastSurface = dictionaryForm.slice(-1);
    const lastReading = dictionaryReading.slice(-1);
    if (lastSurface && lastSurface === lastReading) {
      const surfaceStem = dictionaryForm.slice(0, -1);
      const readingStem = dictionaryReading.slice(0, -1);
      if (surfaceStem && surface.startsWith(surfaceStem)) {
        return `${readingStem}${surface.slice(surfaceStem.length)}`;
      }
    }
  }

  return undefined;
}

function safeStemCandidate(word: VocabWord, dictionaryForm: string): { surface: string; reading: string } | null {
  const dictionaryReading = normalizeDictionaryForm(word.reading || "").trim();
  if (!dictionaryReading) return null;

  // 来る phải dùng bảng bất quy tắc ở trên, nếu lấy 来→く sẽ sai ở 来ます/来ない.
  if (dictionaryForm.endsWith("来る") && dictionaryReading.endsWith("くる")) return null;

  if (dictionaryForm.endsWith("する") && dictionaryReading.endsWith("する")) {
    const surface = dictionaryForm.slice(0, -2);
    const reading = dictionaryReading.slice(0, -2);
    return surface && reading && hasKanji(surface) ? { surface, reading } : null;
  }

  if (word.partOfSpeech === "verb" || word.partOfSpeech === "i_adjective") {
    const lastSurface = dictionaryForm.slice(-1);
    const lastReading = dictionaryReading.slice(-1);
    if (lastSurface && lastSurface === lastReading) {
      const surface = dictionaryForm.slice(0, -1);
      const reading = dictionaryReading.slice(0, -1);
      return surface && reading && hasKanji(surface) ? { surface, reading } : null;
    }
  }

  return null;
}

function addCandidate(byFirst: Map<string, SegmentCandidate[]>, candidate: SegmentCandidate) {
  const surface = candidate.surface.trim();
  if (!surface || (surface.length === 1 && !hasKanji(surface))) return;
  const first = Array.from(surface)[0];
  byFirst.set(first, [...(byFirst.get(first) ?? []), { ...candidate, surface }]);
}

/**
 * Tách câu theo từ vựng đã có trong jp-go bằng cách ưu tiên từ dài nhất.
 * Furigana chỉ được hiển thị khi reading xuất phát từ reading_furigana đã lưu
 * hoặc token đã kiểm tra tay. Không dùng bộ phân tích hình thái/dịch tự động
 * để đoán phần không chắc chắn; đoạn không khớp luôn được giữ nguyên.
 */
export function segmentJapaneseText(
  text: string,
  words: VocabWord[],
  furiganaTokens: Array<{ surface: string; reading: string }> = [],
): JapaneseTextSegment[] {
  const byFirst = new Map<string, SegmentCandidate[]>();

  for (const word of words) {
    const dictionaryForm = normalizeDictionaryForm(word.dictionaryForm || word.word);
    const conjugation = getConjugation(word);
    const conjugationForms = conjugation ? Object.values(conjugation).filter((value): value is string => typeof value === "string") : [];
    const surfaces = new Set([word.word.trim(), dictionaryForm, ...conjugationForms]);

    // N5 cũ còn nhiều động từ chưa có verb_class. Riêng 来る vẫn thêm được
    // toàn bộ dạng bất quy tắc vì đây là bảng xác định, không phải suy đoán nhóm.
    if (dictionaryForm.endsWith("来る") && normalizeDictionaryForm(word.reading || "").endsWith("くる")) {
      const prefix = dictionaryForm.slice(0, -2);
      Object.keys(KURU_SUFFIX_READINGS).forEach((suffix) => surfaces.add(`${prefix}${suffix}`));
    }

    for (const surface of surfaces) {
      const reading = deriveVerifiedReading(word, dictionaryForm, surface);
      addCandidate(byFirst, { surface, word, reading, readingPriority: reading ? 2 : 1 });
    }

    // Khi verb_class chưa có, vẫn có thể gắn furigana cho phần gốc có kanji:
    // 書いて→書[か] + いて, 食べます→食べ[たべ] + ます,
    // 確認しました→確認[かくにん] + しました.
    const stem = safeStemCandidate(word, dictionaryForm);
    if (stem) addCandidate(byFirst, { ...stem, word, readingPriority: 2 });
  }

  // Token kiểm tra tay luôn thắng reading suy ra nếu cùng một bề mặt.
  for (const token of furiganaTokens) {
    const surface = token.surface.trim();
    const reading = token.reading.trim();
    if (!surface || !reading || !hasKanji(surface)) continue;
    const matchingWord = words.find((word) => normalizeDictionaryForm(word.dictionaryForm || word.word) === surface) ?? null;
    addCandidate(byFirst, { surface, word: matchingWord, reading, readingPriority: 3 });
  }

  for (const candidates of byFirst.values()) {
    candidates.sort((a, b) => b.surface.length - a.surface.length || b.readingPriority - a.readingPriority);
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

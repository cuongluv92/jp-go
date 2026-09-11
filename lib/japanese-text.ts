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
  /** 3 = token nội dung kiểm tra tay, 2 = reading khớp trực tiếp, 1 = fallback yếu/không reading. */
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

const KANJI_LIKE_RE = /[一-鿿々〆ヵヶ]/u;

function hasKanji(value: string): boolean {
  return KANJI_LIKE_RE.test(value);
}

/** Ruby chỉ được nhận đúng một cách đọc cụ thể. Dữ liệu kiểu なに／なん
 * là ghi chú nhiều cách đọc, không được đưa nguyên chuỗi đó lên furigana. */
function singleStoredReading(value: string | undefined): string | undefined {
  const reading = normalizeDictionaryForm(value || "").trim();
  if (!reading || /[／/・,，;]/u.test(reading)) return undefined;
  return reading;
}

/**
 * reading_furigana mô tả word.word đang hiển thị, không phải lúc nào cũng là
 * dictionary_form. Ví dụ 歩いて=あるいて nhưng dictionary_form=歩く.
 * Chỉ dùng reading đó để suy dạng chia khi có căn cứ nó thực sự là reading
 * của dictionary_form. Entry có nhãn ngữ cảnh như [雨が～]降る vẫn dùng được,
 * nhưng cho priority thấp hơn entry gốc 降る nếu cả hai cùng tồn tại.
 */
function trustedDictionaryReading(
  word: VocabWord,
  dictionaryForm: string,
): { reading: string; priority: 1 | 2 } | null {
  const reading = singleStoredReading(word.reading);
  if (!reading) return null;

  const rawWord = (word.word || "").trim();
  const normalizedWord = normalizeDictionaryForm(rawWord);
  if (normalizedWord === dictionaryForm) return { reading, priority: 2 };
  if (rawWord.endsWith(dictionaryForm)) return { reading, priority: 1 };
  return null;
}

/**
 * Tạo reading cho đúng bề mặt chia từ mà không đoán phát âm mới:
 * giữ nguyên phần reading của dạng từ điển đã xác nhận rồi nối hậu tố kana
 * xuất hiện trực tiếp trên bề mặt. 来る là ngoại lệ duy nhất cần bảng riêng.
 */
function deriveVerifiedReading(
  word: VocabWord,
  dictionaryForm: string,
  dictionaryReading: string,
  surface: string,
): string | undefined {
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

  // な形容詞: nguồn có thể lưu 静かな/熱心な nhưng dạng dùng thực tế là
  // 静かで・熱心に・安全だった... Chỉ bỏ đúng な/だ cuối đã xác minh,
  // giữ nguyên reading của phần gốc rồi nối hậu tố kana có trên bề mặt.
  if (word.partOfSpeech === "na_adjective") {
    const surfaceStem = dictionaryForm.replace(/[なだ]$/u, "");
    const readingStem = dictionaryReading.replace(/[なだ]$/u, "");
    if (surfaceStem && readingStem && surface.startsWith(surfaceStem)) {
      return `${readingStem}${surface.slice(surfaceStem.length)}`;
    }
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

function safeStemCandidate(
  word: VocabWord,
  dictionaryForm: string,
  dictionaryReading: string,
): { surface: string; reading: string } | null {
  if (!dictionaryReading) return null;

  // 来る phải dùng bảng bất quy tắc ở trên, nếu lấy 来→く sẽ sai ở 来ます/来ない.
  if (dictionaryForm.endsWith("来る") && dictionaryReading.endsWith("くる")) return null;

  if (dictionaryForm.endsWith("する") && dictionaryReading.endsWith("する")) {
    const surface = dictionaryForm.slice(0, -2);
    const reading = dictionaryReading.slice(0, -2);
    return surface && reading && hasKanji(surface) ? { surface, reading } : null;
  }

  if (word.partOfSpeech === "na_adjective") {
    const surface = dictionaryForm.replace(/[なだ]$/u, "");
    const reading = dictionaryReading.replace(/[なだ]$/u, "");
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
 * Không được nhận một từ ngắn nằm bên trong từ ghép Kanji dài hơn. Ví dụ
 * 一日[ついたち] không được ăn mất tiền tố của 一日中[いちにちじゅう].
 * Với Kanji đơn, kiểm cả hai phía như trước; với từ nhiều ký tự, chặn khi
 * ngay sau nó vẫn là Kanji/々 để ưu tiên token/từ ghép đầy đủ nếu có.
 */
function candidateMatchesAt(text: string, index: number, candidate: SegmentCandidate): boolean {
  if (!text.startsWith(candidate.surface, index)) return false;

  const previous = index > 0 ? text[index - 1] : "";
  const next = text[index + candidate.surface.length] ?? "";
  if (candidate.surface.length === 1 && hasKanji(candidate.surface)) {
    return !hasKanji(previous) && !hasKanji(next);
  }
  const last = candidate.surface.slice(-1);
  if (hasKanji(last) && hasKanji(next)) return false;
  return true;
}

/**
 * Tách câu theo từ vựng đã có trong jp-go bằng cách ưu tiên từ dài nhất.
 * Furigana chỉ được hiển thị khi reading xuất phát từ reading_furigana đã lưu
 * đúng cho bề mặt/dạng từ điển, hoặc token đã kiểm tra tay. Không dùng bộ phân
 * tích hình thái/dịch tự động để đoán phần không chắc chắn; đoạn không khớp
 * luôn được giữ nguyên.
 */
export function segmentJapaneseText(
  text: string,
  words: VocabWord[],
  furiganaTokens: Array<{ surface: string; reading: string }> = [],
): JapaneseTextSegment[] {
  const byFirst = new Map<string, SegmentCandidate[]>();

  for (const word of words) {
    const rawWord = (word.word || "").trim();
    const dictionaryForm = normalizeDictionaryForm(word.dictionaryForm || word.word);
    const dictionary = trustedDictionaryReading(word, dictionaryForm);
    const conjugation = getConjugation(word);
    const conjugationForms = conjugation ? Object.values(conjugation).filter((value): value is string => typeof value === "string") : [];
    const surfaces = new Set([rawWord, dictionaryForm, ...conjugationForms]);

    // N5 cũ còn nhiều động từ chưa có verb_class. Riêng 来る vẫn thêm được
    // toàn bộ dạng bất quy tắc khi reading của dictionary_form đã đáng tin.
    if (dictionary && dictionaryForm.endsWith("来る") && dictionary.reading.endsWith("くる")) {
      const prefix = dictionaryForm.slice(0, -2);
      Object.keys(KURU_SUFFIX_READINGS).forEach((suffix) => surfaces.add(`${prefix}${suffix}`));
    }

    for (const surface of surfaces) {
      // reading_furigana luôn mô tả word.word đang hiển thị, vì vậy exact
      // surface được phép dùng trực tiếp kể cả khi entry là 歩いて/知っている.
      if (surface === rawWord) {
        const exactReading = singleStoredReading(word.reading);
        addCandidate(byFirst, {
          surface,
          word,
          reading: exactReading && hasKanji(surface) ? exactReading : undefined,
          readingPriority: exactReading && hasKanji(surface) ? 2 : 1,
        });
        continue;
      }

      const reading = dictionary
        ? deriveVerifiedReading(word, dictionaryForm, dictionary.reading, surface)
        : undefined;
      addCandidate(byFirst, {
        surface,
        word,
        reading,
        readingPriority: reading ? dictionary?.priority ?? 1 : 1,
      });
    }

    // Khi verb_class chưa có, vẫn có thể gắn furigana cho phần gốc có kanji,
    // nhưng chỉ khi reading của dictionary_form đã được xác nhận.
    if (dictionary) {
      const stem = safeStemCandidate(word, dictionaryForm, dictionary.reading);
      if (stem) addCandidate(byFirst, { ...stem, word, readingPriority: dictionary.priority });
    }
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
    const match = candidates.find((candidate) => candidateMatchesAt(text, index, candidate));
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

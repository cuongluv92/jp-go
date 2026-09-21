import { getConjugation, normalizeDictionaryForm } from "@/lib/conjugation";
import type { VocabWord } from "@/lib/types";

export interface JapaneseTextSegment {
  text: string;
  start: number;
  word: VocabWord | null;
  /** Cách đọc đã được nguồn nội dung xác nhận cho đúng bề mặt trong câu. */
  reading?: string;
}

export interface FuriganaToken {
  surface: string;
  reading: string;
  /**
   * Vị trí 0-based trong chính câu đang hiển thị. Khi có start, token chỉ được
   * phép khớp đúng occurrence này; dùng cho các từ đa âm/đồng hình như 一日・何.
   */
  start?: number;
}

type SegmentCandidate = {
  surface: string;
  word: VocabWord | null;
  reading?: string;
  exactStart?: number;
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

function normalizeCandidateSurface(candidate: SegmentCandidate): SegmentCandidate | null {
  const surface = candidate.surface.trim();
  if (!surface || (surface.length === 1 && !hasKanji(surface))) return null;
  return { ...candidate, surface };
}

function insertCandidate(byFirst: Map<string, SegmentCandidate[]>, candidate: SegmentCandidate) {
  const first = Array.from(candidate.surface)[0];
  byFirst.set(first, [...(byFirst.get(first) ?? []), candidate]);
}

function addCandidate(byFirst: Map<string, SegmentCandidate[]>, candidate: SegmentCandidate) {
  const normalized = normalizeCandidateSurface(candidate);
  if (normalized) insertCandidate(byFirst, normalized);
}

/**
 * Suy candidate của 1 từ (dictionaryForm/dạng chia/reading đã xác minh) chỉ
 * phụ thuộc chính bản thân từ đó, không phụ thuộc câu ví dụ, priorityWordId
 * hay furiganaTokens của lần gọi. Mỗi trang có thể hiện nhiều câu ví dụ,
 * gọi segmentJapaneseText nhiều lần với CÙNG danh sách words (đến hàng nghìn
 * từ) — nếu suy lại từ đầu mỗi lần thì cùng 1 từ bị lặp lại phép tính hàng
 * chục lần chỉ trong 1 lượt xem trang. Cache theo tham chiếu VocabWord (an
 * toàn: object cũ được thay bằng object mới khi cập nhật tiến độ, WeakMap tự
 * dọn phần không còn ai tham chiếu) để chỉ tính đúng 1 lần cho mỗi từ.
 */
const wordCandidateCache = new WeakMap<VocabWord, SegmentCandidate[]>();

function computeWordCandidates(word: VocabWord): SegmentCandidate[] {
  const cached = wordCandidateCache.get(word);
  if (cached) return cached;

  const candidates: SegmentCandidate[] = [];
  const push = (candidate: SegmentCandidate) => {
    const normalized = normalizeCandidateSurface(candidate);
    if (normalized) candidates.push(normalized);
  };

  const rawWord = (word.word || "").trim();
  const dictionaryForm = normalizeDictionaryForm(word.dictionaryForm || word.word);
  const dictionary = trustedDictionaryReading(word, dictionaryForm);
  const conjugation = getConjugation(word);
  // Object.values(conjugation) cũng chứa "kind" ("verb"/"i_adjective"/…) và
  // dictionaryForm - loại 2 khoá này ra để không biến literal "kind" thành
  // 1 bề mặt có thể khớp (vô hại trong câu tiếng Nhật thật, nhưng vẫn là dữ
  // liệu sai nếu lọt vào tập bề mặt).
  const conjugationForms = conjugation
    ? Object.entries(conjugation)
        .filter(([key, value]) => key !== "kind" && key !== "dictionaryForm" && typeof value === "string")
        .map(([, value]) => value as string)
    : [];
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
      push({
        surface,
        word,
        reading: exactReading && hasKanji(surface) ? exactReading : undefined,
        readingPriority: exactReading && hasKanji(surface) ? 2 : 1,
      });
      continue;
    }

    // Bề mặt suy ra (dictionaryForm/dạng chia) khác với rawWord chỉ có giá
    // trị khi còn Kanji để gắn furigana. Không có Kanji (vd dictionary_form
    // bị nhập nhầm thành cách đọc thuần kana như "まし" thay vì "增し") thì
    // bỏ qua hẳn - nếu vẫn thêm, chuỗi kana ngắn đó có thể vô tình khớp
    // giữa 1 từ chia dạng khác hoàn toàn không liên quan (vd "出しました"
    // bị cắt nhầm thành "出"+"し"+"まし"+"た" vì "まし" trùng khớp).
    if (!hasKanji(surface)) continue;

    const reading = dictionary
      ? deriveVerifiedReading(word, dictionaryForm, dictionary.reading, surface)
      : undefined;
    push({
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
    if (stem) push({ ...stem, word, readingPriority: dictionary.priority });
  }

  wordCandidateCache.set(word, candidates);
  return candidates;
}

/**
 * Không được nhận một từ ngắn nằm bên trong từ ghép Kanji dài hơn. Ví dụ
 * 一日[ついたち] không được ăn mất tiền tố của 一日中[いちにちじゅう].
 * Với Kanji đơn, kiểm cả hai phía như trước; với từ nhiều ký tự, chặn khi
 * ngay sau nó vẫn là Kanji/々 để ưu tiên token/từ ghép đầy đủ nếu có.
 */
function candidateMatchesAt(text: string, index: number, candidate: SegmentCandidate): boolean {
  if (candidate.exactStart !== undefined && candidate.exactStart !== index) return false;
  if (!text.startsWith(candidate.surface, index)) return false;

  const previous = index > 0 ? text[index - 1] : "";
  const next = text[index + candidate.surface.length] ?? "";
  if (candidate.surface.length === 1 && hasKanji(candidate.surface)) {
    return !hasKanji(previous) && !hasKanji(next);
  }
  const last = candidate.surface.slice(-1);
  // Token đã kiểm tra tay (readingPriority 3) là cả cụm đã được xác nhận
  // trọn vẹn - không áp dụng chặn "Kanji tiếp theo" vì 2 cụm Kanji độc lập
  // đứng liền nhau là chuyện bình thường trong câu tiếng Nhật (vd 一日中
  // đứng ngay trước 勉強), không có nghĩa cụm đầu bị cắt hụt. Với candidate
  // suy luận tự động (priority 1/2) vẫn giữ nguyên chặn để tránh đoán nhầm
  // vào một từ ghép dài hơn mà ta không biết.
  if (candidate.readingPriority !== 3 && hasKanji(last) && hasKanji(next)) return false;
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
  furiganaTokens: FuriganaToken[] = [],
): JapaneseTextSegment[] {
  const byFirst = new Map<string, SegmentCandidate[]>();

  for (const word of words) {
    for (const candidate of computeWordCandidates(word)) {
      insertCandidate(byFirst, candidate);
    }
  }

  // Token kiểm tra tay luôn thắng reading suy ra nếu cùng một bề mặt.
  for (const token of furiganaTokens) {
    const surface = token.surface.trim();
    const reading = token.reading.trim();
    if (!surface || !reading || !hasKanji(surface)) continue;

    let exactStart: number | undefined;
    if (token.start !== undefined) {
      if (!Number.isInteger(token.start) || token.start < 0 || text.slice(token.start, token.start + surface.length) !== surface) {
        continue;
      }
      exactStart = token.start;
    }

    const matchingWord = words.find((word) => normalizeDictionaryForm(word.dictionaryForm || word.word) === surface) ?? null;
    addCandidate(byFirst, { surface, word: matchingWord, reading, exactStart, readingPriority: 3 });
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

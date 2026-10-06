import "server-only";

import { getKuromojiTokenizer, raceWithTimeout } from "./kuromoji-tokenizer";

/**
 * Chấm "回答練習" cho câu hỏi 2次 (tự luận, không có choices): so câu người
 * dùng tự gõ với 解答例 đã có sẵn trong dữ liệu (answer_jp) - KHÔNG dùng AI,
 * chỉ so trùng từ nội dung (danh từ/động từ/tính từ đã đưa về dạng từ điển
 * qua kuromoji) để chấp nhận cách viết khác nhau nhưng cùng ý, khác với so
 * khớp từng chữ y hệt. Đây là phép so xấp xỉ theo từ vựng, không phải hiểu
 * nghĩa thật - câu diễn đạt quá khác cấu trúc có thể bị chấm thiếu.
 */

export interface AnswerUnit {
  /** Nguyên văn đoạn này (có thể là 1 câu, hoặc đúng 1 ký tự xuống dòng). */
  text: string;
  /** false = đoạn này không được chấm (tiêu đề/khoảng trắng) - luôn hiện bình thường. */
  graded: boolean;
  /** Chỉ có ý nghĩa khi graded=true. */
  matched: boolean;
}

export interface AnswerGradingResult {
  /** % nội dung đáp án đã được người dùng nhắc tới, theo độ dài ký tự. null nếu đáp án mẫu rỗng. */
  percent: number | null;
  officialUnits: AnswerUnit[];
  userUnits: AnswerUnit[];
}

const GRADE_TIMEOUT_MS = 4000;
const MATCH_THRESHOLD = 0.3;

// Tiêu đề/ghi chú của riêng bản đáp án mẫu (không phải nội dung cần viết),
// vd "【解答例（学習用）】", "※本番では6項目から2つ選ぶ。" - không chấm các dòng này.
const HEADER_LINE_RE = /^[【[].*[】\]]$/;
const NOTE_LINE_RE = /^※/;

// Giữ danh từ/động từ/tính từ/phó từ làm "từ nội dung"; bỏ trợ từ/trợ động từ/
// động từ phụ trợ (làm/する non-độc lập) vì xuất hiện ở hầu hết mọi câu, không
// phân biệt được ý nghĩa, nếu giữ sẽ làm điểm khớp bị đội lên sai.
const CONTENT_POS = new Set(["名詞", "動詞", "形容詞", "副詞"]);
const SKIP_POS_DETAIL = new Set(["非自立", "接尾"]);

interface RawUnit {
  value: string;
  isBreak: boolean;
}

function splitUnits(text: string): RawUnit[] {
  const lines = text.split(/(\n)/);
  const units: RawUnit[] = [];
  for (const line of lines) {
    if (line === "") continue;
    if (line === "\n") {
      units.push({ value: line, isBreak: true });
      continue;
    }
    const sentences = line.match(/[^。]+。?/g) ?? [line];
    for (const sentence of sentences) {
      if (sentence) units.push({ value: sentence, isBreak: false });
    }
  }
  return units;
}

function isSkippableLine(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;
  return HEADER_LINE_RE.test(trimmed) || NOTE_LINE_RE.test(trimmed);
}

async function contentLemmas(text: string): Promise<Set<string>> {
  const lemmas = new Set<string>();
  const trimmed = text.trim();
  if (!trimmed) return lemmas;
  try {
    const tokenizer = await raceWithTimeout(getKuromojiTokenizer(), GRADE_TIMEOUT_MS, null);
    if (!tokenizer) return lemmas;
    for (const token of tokenizer.tokenize(trimmed)) {
      const pos = token.pos ?? "";
      if (!CONTENT_POS.has(pos)) continue;
      if (token.pos_detail_1 && SKIP_POS_DETAIL.has(token.pos_detail_1)) continue;
      const lemma = token.basic_form && token.basic_form !== "*" ? token.basic_form : token.surface_form;
      if (lemma) lemmas.add(lemma);
    }
  } catch {
    // Không chặn luyện tập nếu tokenizer lỗi - đoạn đó chỉ không khớp được với gì.
  }
  return lemmas;
}

function diceScore(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const item of a) if (b.has(item)) shared += 1;
  return (2 * shared) / (a.size + b.size);
}

export async function gradeWrittenAnswer(officialJp: string, userJp: string): Promise<AnswerGradingResult> {
  const officialRaw = splitUnits(officialJp);
  const userRaw = splitUnits(userJp);

  const officialSkip = officialRaw.map((unit) => unit.isBreak || isSkippableLine(unit.value));
  const userSkip = userRaw.map((unit) => unit.isBreak || isSkippableLine(unit.value));

  const officialLemmas = await Promise.all(
    officialRaw.map((unit, i) => (officialSkip[i] ? Promise.resolve(new Set<string>()) : contentLemmas(unit.value))),
  );
  const userLemmas = await Promise.all(
    userRaw.map((unit, i) => (userSkip[i] ? Promise.resolve(new Set<string>()) : contentLemmas(unit.value))),
  );

  // Chỉ đoạn còn >=1 từ nội dung mới thực sự được chấm - đoạn toàn hư từ/quá
  // ngắn luôn hiện bình thường, không tính vào mẫu số %.
  const officialGradable = officialRaw.map((_, i) => !officialSkip[i] && officialLemmas[i].size > 0);
  const userGradable = userRaw.map((_, i) => !userSkip[i] && userLemmas[i].size > 0);

  const pairs: { oi: number; ui: number; score: number }[] = [];
  for (let oi = 0; oi < officialRaw.length; oi += 1) {
    if (!officialGradable[oi]) continue;
    for (let ui = 0; ui < userRaw.length; ui += 1) {
      if (!userGradable[ui]) continue;
      const score = diceScore(officialLemmas[oi], userLemmas[ui]);
      if (score >= MATCH_THRESHOLD) pairs.push({ oi, ui, score });
    }
  }
  // Ghép tham lam theo điểm cao nhất trước - mỗi đoạn đáp án mẫu chỉ ghép với
  // đúng 1 đoạn người dùng viết (và ngược lại), tránh 1 câu dài của người
  // dùng "ăn" hết nhiều đoạn đáp án mẫu chỉ vì chứa nhiều từ chung.
  pairs.sort((a, b) => b.score - a.score);
  const officialMatched = new Array<boolean>(officialRaw.length).fill(false);
  const userMatched = new Array<boolean>(userRaw.length).fill(false);
  const officialUsed = new Array<boolean>(officialRaw.length).fill(false);
  const userUsed = new Array<boolean>(userRaw.length).fill(false);
  for (const pair of pairs) {
    if (officialUsed[pair.oi] || userUsed[pair.ui]) continue;
    officialUsed[pair.oi] = true;
    userUsed[pair.ui] = true;
    officialMatched[pair.oi] = true;
    userMatched[pair.ui] = true;
  }

  const officialUnits: AnswerUnit[] = officialRaw.map((unit, i) => ({
    text: unit.value,
    graded: officialGradable[i],
    matched: officialGradable[i] ? officialMatched[i] : true,
  }));
  const userUnits: AnswerUnit[] = userRaw.map((unit, i) => ({
    text: unit.value,
    graded: userGradable[i],
    matched: userGradable[i] ? userMatched[i] : true,
  }));

  let totalLength = 0;
  let coveredLength = 0;
  officialRaw.forEach((unit, i) => {
    if (!officialGradable[i]) return;
    totalLength += unit.value.length;
    if (officialMatched[i]) coveredLength += unit.value.length;
  });
  const percent = totalLength > 0 ? Math.round((coveredLength / totalLength) * 100) : null;

  return { percent, officialUnits, userUnits };
}

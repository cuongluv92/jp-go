import "server-only";

import { getKuromojiTokenizer, raceWithTimeout } from "./kuromoji-tokenizer";
import type { ContentBlock, FuriganaToken } from "./content-blocks";

const KANJI_RE = /[一-鿿々〆ヵヶ]/u;
// Dựng dictionary kuromoji từ đĩa mất khoảng 2s ở lần đầu mỗi instance serverless.
// Trang đề đã render trước, nên route furigana có thể chờ lâu hơn một chút để tránh
// trả về mảng rỗng ở cold start; tokenizer vẫn được cache cho các lần sau.
const TOKENIZE_TIMEOUT_MS = 7500;
const tokenCache = new Map<string, Promise<FuriganaToken[]>>();

function katakanaToHiragana(value: string): string {
  return value.replace(/[ァ-ヶ]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60),
  );
}

async function generatedTokens(text: string): Promise<FuriganaToken[]> {
  if (!text || !KANJI_RE.test(text)) return [];
  const cached = tokenCache.get(text);
  if (cached) return raceWithTimeout(cached, TOKENIZE_TIMEOUT_MS, []);

  const pending = (async () => {
    try {
      const tokenizer = await getKuromojiTokenizer();
      const parsed = tokenizer.tokenize(text);
      const result: FuriganaToken[] = [];
      let cursor = 0;

      for (const token of parsed) {
        const surface = token.surface_form;
        const rawReading = token.reading;
        if (!surface) continue;

        let start =
          Number.isInteger(token.word_position) && (token.word_position ?? 0) > 0
            ? (token.word_position as number) - 1
            : -1;

        if (start < 0 || text.slice(start, start + surface.length) !== surface) {
          start = text.indexOf(surface, cursor);
        }
        if (start < 0) continue;
        cursor = start + surface.length;

        if (!KANJI_RE.test(surface) || !rawReading || rawReading === "*") continue;
        const reading = katakanaToHiragana(rawReading).trim();
        if (!reading) continue;
        result.push({ surface, reading, start });
      }

      return result;
    } catch {
      return [];
    }
  })();

  tokenCache.set(text, pending);
  // `pending` tiếp tục chạy nền và được cache lại dù lượt này có bị timeout
  // hay không - lần gọi sau (hoặc re-render) cho cùng text sẽ có token thật
  // ngay khi tokenizer đã dựng xong, không phải tính lại.
  return raceWithTimeout(pending, TOKENIZE_TIMEOUT_MS, []);
}

/**
 * Some imported exams have legacy readings for isolated kanji (e.g. 電=でん,
 * 線=せん), but no contextual reading for the compound 電線. Returning a
 * non-empty legacy array without re-tokenizing left most kanji unreadable.
 *
 * Merge contextual kuromoji tokens with reviewed/legacy tokens rather than
 * treating any non-empty array as complete. Explicitly positioned reviewed
 * tokens retain precedence; contextual readings then win over unpositioned
 * tokens for the same surface at a given occurrence.
 *
 * No changes are made to source Japanese, translations, or stored answers.
 */
async function withTokens(text: string, existing?: FuriganaToken[]): Promise<FuriganaToken[]> {
  if (!text || !KANJI_RE.test(text)) return [];
  const reviewed = (existing ?? []).filter((token) =>
    token && typeof token.surface === "string" &&
    typeof token.reading === "string" &&
    token.reading.trim().length > 0 &&
    KANJI_RE.test(token.surface) &&
    (token.start === undefined ||
      (Number.isInteger(token.start) &&
        (token.start as number) >= 0 &&
        text.slice(token.start, token.start + token.surface.length) === token.surface)),
  );
  const contextual = await generatedTokens(text);
  if (contextual.length === 0) return reviewed;

  const placed = reviewed.filter((token) => token.start !== undefined);
  const unplaced = reviewed.filter((token) => token.start === undefined);

  const placedKeys = new Set(placed.map((token) => `${token.start}:${token.surface}`));
  const merged = [
    ...placed,
    ...contextual.filter((token) => !placedKeys.has(`${token.start}:${token.surface}`)),
    ...unplaced,
  ];
  // A word with no reading in the tokenizer may still be covered by an
  // imported token; let the longest valid surface win in segmentJapaneseText.
  const seen = new Set<string>();
  return merged.filter((token) => {
    const key = `${token.start ?? "all"}:${token.surface}:${token.reading}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function withTokenGroups(items: string[], existing?: FuriganaToken[][]): Promise<FuriganaToken[][]> {
  return Promise.all(items.map((item, index) => withTokens(item, existing?.[index])));
}

async function withTokenGrid(rows: string[][], existing?: FuriganaToken[][][]): Promise<FuriganaToken[][][]> {
  return Promise.all(
    rows.map((row, rowIndex) =>
      Promise.all(row.map((cell, cellIndex) => withTokens(cell, existing?.[rowIndex]?.[cellIndex]))),
    ),
  );
}

async function enrichBlock(block: ContentBlock): Promise<ContentBlock> {
  switch (block.type) {
    case "heading":
    case "paragraph":
    case "note":
    case "warning":
    case "definition":
      return { ...block, furigana_tokens: await withTokens(block.jp, block.furigana_tokens) };

    case "bullet_list":
    case "numbered_list":
      return {
        ...block,
        items_furigana_tokens: await withTokenGroups(block.items_jp, block.items_furigana_tokens),
      };

    case "table":
      return {
        ...block,
        headers_furigana_tokens: await withTokenGroups(block.headers_jp, block.headers_furigana_tokens),
        rows_furigana_tokens: await withTokenGrid(block.rows_jp, block.rows_furigana_tokens),
      };

    case "exercise":
      return {
        ...block,
        question_furigana_tokens: await withTokens(block.question_jp, block.question_furigana_tokens),
        choices_furigana_tokens: await withTokenGroups(block.choices_jp, block.choices_furigana_tokens),
        solution_furigana_tokens: await withTokens(block.solution_jp, block.solution_furigana_tokens),
      };

    case "section_group":
      return {
        ...block,
        blocks: (await Promise.all(block.blocks.map((child) => enrichBlock(child)))) as typeof block.blocks,
      };

    case "formula":
    case "image":
    case "image_placeholder":
      return block;
  }
}

export async function enrichExamTextWithFurigana(
  text: string,
  existing?: FuriganaToken[],
): Promise<FuriganaToken[]> {
  return withTokens(text, existing);
}

export async function enrichExamBlocksWithFurigana(blocks: ContentBlock[]): Promise<ContentBlock[]> {
  return Promise.all(blocks.map((block) => enrichBlock(block)));
}

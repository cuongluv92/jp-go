import "server-only";

import path from "node:path";
import kuromoji from "kuromoji";

import type { ContentBlock, FuriganaToken } from "./content-blocks";

type KuromojiToken = {
  word_position?: number;
  surface_form: string;
  reading?: string;
};

type KuromojiTokenizer = {
  tokenize(text: string): KuromojiToken[];
};

const KANJI_RE = /[一-鿿々〆ヵヶ]/u;
// Dựng dictionary kuromoji từ đĩa mất ~2s ở lần đầu mỗi instance serverless -
// không được để request nào phải chờ quá lâu chỉ vì furigana (chỉ là phần hỗ
// trợ đọc, không phải nội dung chính). Quá thời gian này thì trả về rỗng cho
// lượt render đó, tokenizer vẫn tiếp tục dựng ở background và cache lại cho
// lần sau (instance đã "warm").
const TOKENIZE_TIMEOUT_MS = 1500;
const tokenCache = new Map<string, Promise<FuriganaToken[]>>();
let tokenizerPromise: Promise<KuromojiTokenizer> | null = null;
let tokenizerUnavailable = false;

function raceWithTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(fallback), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      () => {
        clearTimeout(timer);
        resolve(fallback);
      },
    );
  });
}

function katakanaToHiragana(value: string): string {
  return value.replace(/[ァ-ヶ]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60),
  );
}

function getTokenizer(): Promise<KuromojiTokenizer> {
  if (tokenizerUnavailable) return Promise.reject(new Error("kuromoji unavailable"));
  if (tokenizerPromise) return tokenizerPromise;

  tokenizerPromise = new Promise<KuromojiTokenizer>((resolve, reject) => {
    const dicPath = path.join(process.cwd(), "node_modules", "kuromoji", "dict");
    kuromoji.builder({ dicPath }).build((error, tokenizer) => {
      if (error || !tokenizer) {
        tokenizerUnavailable = true;
        tokenizerPromise = null;
        reject(error ?? new Error("Failed to initialize kuromoji"));
        return;
      }
      resolve(tokenizer as KuromojiTokenizer);
    });
  });

  return tokenizerPromise;
}

async function generatedTokens(text: string): Promise<FuriganaToken[]> {
  if (!text || !KANJI_RE.test(text)) return [];
  const cached = tokenCache.get(text);
  if (cached) return raceWithTimeout(cached, TOKENIZE_TIMEOUT_MS, []);

  const pending = (async () => {
    try {
      const tokenizer = await getTokenizer();
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

async function withTokens(text: string, existing?: FuriganaToken[]): Promise<FuriganaToken[]> {
  return existing && existing.length > 0 ? existing : generatedTokens(text);
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

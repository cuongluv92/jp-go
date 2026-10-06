import "server-only";

import path from "node:path";
import kuromoji from "kuromoji";

export type KuromojiFeatureToken = {
  word_position?: number;
  surface_form: string;
  reading?: string;
  pos?: string;
  pos_detail_1?: string;
  basic_form?: string;
};

export type KuromojiTokenizer = {
  tokenize(text: string): KuromojiFeatureToken[];
};

// Singleton dùng chung cho mọi tính năng cần kuromoji (furigana, chấm câu trả
// lời tự luận...) - dựng dictionary từ đĩa mất ~2s ở lần đầu mỗi instance
// serverless, không được dựng lại nhiều lần trong cùng 1 instance.
let tokenizerPromise: Promise<KuromojiTokenizer> | null = null;
let tokenizerUnavailable = false;

export function getKuromojiTokenizer(): Promise<KuromojiTokenizer> {
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

export function raceWithTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
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

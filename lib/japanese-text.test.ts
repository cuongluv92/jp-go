import { describe, expect, it } from "vitest";

import { segmentJapaneseText } from "@/lib/japanese-text";
import type { VocabWord } from "@/lib/types";

const word = (id: string, surface: string): VocabWord =>
  ({ id, word: surface, progress: {} } as VocabWord);

describe("segmentJapaneseText", () => {
  it("ưu tiên từ dài nhất và giữ nguyên phần không khớp", () => {
    const result = segmentJapaneseText("明日の会議に参加します。", [word("1", "会議"), word("2", "参加する"), word("3", "明日")]);
    expect(result.map((part) => [part.text, part.word?.id ?? null])).toEqual([
      ["明日", "3"],
      ["の", null],
      ["会議", "1"],
      ["に参加します。", null],
    ]);
  });

  it("không biến trợ từ một kana thành từ có thể bấm", () => {
    expect(segmentJapaneseText("学校に行く", [word("1", "に")]).map((part) => part.word)).toEqual([null]);
  });
});

import { describe, expect, it } from "vitest";

import { buildMaziiWebUrl, isAppleTouchDevice } from "@/lib/mazii";

describe("Mazii links", () => {
  it("tạo đúng đường dẫn cho từ vựng, kanji và ngữ pháp", () => {
    expect(buildMaziiWebUrl("word", "食べる")).toContain("/search/word/javi/%E9%A3%9F%E3%81%B9%E3%82%8B");
    expect(buildMaziiWebUrl("kanji", "食")).toContain("/search/kanji/javi/");
    expect(buildMaziiWebUrl("grammar", "〜ている")).toContain("/search/grammar/javi/");
  });

  it("nhận diện cả iPad báo platform như máy Mac", () => {
    expect(isAppleTouchDevice("Mozilla/5.0 (iPad)", "iPad", 5)).toBe(true);
    expect(isAppleTouchDevice("Mozilla/5.0", "MacIntel", 5)).toBe(true);
    expect(isAppleTouchDevice("Mozilla/5.0", "MacIntel", 0)).toBe(false);
  });
});

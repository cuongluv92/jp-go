import { describe, expect, it } from "vitest";

import { kanjiVgFilename } from "@/components/kanji-stroke-practice";

describe("kanjiVgFilename", () => {
  it("converts a common kanji to KanjiVG's five-digit hex filename", () => {
    expect(kanjiVgFilename("会")).toBe("04f1a.svg");
  });

  it("supports characters outside the basic multilingual plane", () => {
    expect(kanjiVgFilename("𠮷")).toBe("20bb7.svg");
  });

  it("uses only the first character and handles empty input", () => {
    expect(kanjiVgFilename(" 日 ")).toBe("065e5.svg");
    expect(kanjiVgFilename("  ")).toBeNull();
  });
});

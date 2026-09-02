import { describe, expect, it } from "vitest";

import { normalizePersonalExampleInput, validatePersonalExampleInput } from "@/lib/data/personal-example-service";

describe("personal example input", () => {
  it("trims every text field", () => {
    expect(
      normalizePersonalExampleInput({
        exampleType: "business",
        sentenceJp: "  会議を始めます。 ",
        sentenceVi: "  Bắt đầu cuộc họp. ",
        highlightText: " を ",
        note: "  Dùng trong công việc. ",
      }),
    ).toEqual({
      exampleType: "business",
      sentenceJp: "会議を始めます。",
      sentenceVi: "Bắt đầu cuộc họp.",
      highlightText: "を",
      note: "Dùng trong công việc.",
    });
  });

  it("requires a Japanese sentence", () => {
    expect(
      validatePersonalExampleInput({
        exampleType: "daily",
        sentenceJp: "   ",
        sentenceVi: "",
        highlightText: "",
        note: "",
      }),
    ).toBe("Hãy nhập câu tiếng Nhật.");
  });
});

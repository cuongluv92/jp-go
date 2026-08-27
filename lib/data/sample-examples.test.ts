import { describe, expect, it } from "vitest";

import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";

describe("sampleExamples", () => {
  it("mỗi từ có đúng 3 ví dụ, đủ 3 loại exam/daily/business", () => {
    for (const word of sampleWords) {
      const examples = sampleExamples.filter((e) => e.vocabId === word.id);
      expect(examples, `từ "${word.word}" phải có đúng 3 ví dụ`).toHaveLength(3);
      const types = examples.map((e) => e.exampleType).sort();
      expect(types).toEqual(["business", "daily", "exam"]);
    }
  });

  it("cloze_jp thay _____ bằng answer phải khớp chính xác example_jp", () => {
    for (const example of sampleExamples) {
      const reconstructed = example.clozeJp.replace("_____", example.answer);
      expect(reconstructed, `vocabId=${example.vocabId} exampleNo=${example.exampleNo}`).toBe(example.exampleJp);
    }
  });

  it("mọi ví dụ đều có bản dịch tiếng Việt", () => {
    for (const example of sampleExamples) {
      expect(example.exampleVi.trim().length).toBeGreaterThan(0);
    }
  });
});

import { describe, expect, it } from "vitest";

import { buildPersonalExercise, isPersonalExerciseAnswerCorrect, splitJapaneseChunks } from "@/lib/personal-example-exercise";

describe("personal example exercises", () => {
  it("tạo câu điền chỗ trống từ phần cần chú ý", () => {
    const exercise = buildPersonalExercise("cloze", "会議に参加します。", "Tôi tham gia cuộc họp.", "参加します");
    expect(exercise.prompt).toBe("会議に＿＿＿。");
    expect(isPersonalExerciseAnswerCorrect("参加します", exercise)).toBe(true);
  });

  it("tách được câu thành nhiều mảnh để sắp xếp", () => {
    expect(splitJapaneseChunks("明日は会社で会議をします。").length).toBeGreaterThan(1);
  });
});

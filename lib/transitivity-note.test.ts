import { describe, expect, it } from "vitest";

import { addTransitivityNote } from "@/lib/transitivity-note";

describe("addTransitivityNote", () => {
  it("ghi rõ tự động từ", () => {
    expect(addTransitivityNote("verb", "intransitive", "ドアが開く。"))
      .toBe("Tự/tha: Tự động từ（自動詞）. ドアが開く。");
  });

  it("ghi rõ tha động từ", () => {
    expect(addTransitivityNote("verb", "transitive", "ドアを開ける。"))
      .toBe("Tự/tha: Tha động từ（他動詞）. ドアを開ける。");
  });

  it("không ép nhãn với động từ thực sự có cả hai cách dùng", () => {
    const note = "「休む」 có cả tự động từ và tha động từ tùy cấu trúc.";
    expect(addTransitivityNote("verb", null, note)).toContain("Có cả tự động từ và tha động từ（自動詞・他動詞）");
  });

  it("ghi rõ trường hợp cụm cố định", () => {
    const note = "「気を付ける」 là một cụm cố định, không ép nhãn đơn.";
    expect(addTransitivityNote("verb", null, note)).toContain("Không gán một nhãn đơn");
  });

  it("không thay đổi ghi chú của từ không phải động từ", () => {
    expect(addTransitivityNote("noun", null, "ghi chú")).toBe("ghi chú");
  });
});

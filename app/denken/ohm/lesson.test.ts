import { describe, expect, it } from "vitest";
import { lesson } from "./lesson";

const redSpans = (text: string) => {
  const parts = text.split("**");
  expect(parts.length % 2).toBe(1);
  return parts.filter((_, index) => index % 2 === 1);
};

describe("Source red highlights and bilingual parity — Denken 2–5", () => {
  for (const page of [2, 3, 4, 5]) {
    it(`retains matching red spans in both columns on p.${page}`, () => {
      for (const row of lesson[page]) {
        if (!("jp" in row)) continue;
        expect(redSpans(row.vi).length, row.jp.slice(0, 40)).toBe(redSpans(row.jp).length);
      }
    });
  }

  const expected: Record<number, string[]> = {"2":["電流","電圧","電気回路","電源","負荷","電気抵抗","抵抗","V、I、R"],"3":["オームの法則","電圧÷電流＝抵抗","電位差","電圧","電流"],"4":["起電力","V","E","ボルト［V］","起電力 E［V］","内部抵抗 r［Ω］","直列","V = 102 V　r = 0.59 Ω"],"5":["直列接続","並列接続","合成抵抗","2抵抗の和","和分の積（2抵抗の積 ÷ 和）","和","和分の積","分電圧","比例配分","分路電流","逆比例配分"]};
  for (const page of [2, 3, 4, 5]) {
    it(`covers verified red content on p.${page}`, () => {
      const spans = lesson[page].flatMap(row => "jp" in row ? redSpans(row.jp) : []);
      for (const term of expected[page]) expect(spans, term).toContain(term);
    });
  }

  it("keeps black symbols black in p.2 table", () => {
    const row = lesson[2].find(row => "jp" in row && row.jp.startsWith("表1-1-1"));
    expect(row && "jp" in row ? redSpans(row.jp) : []).toHaveLength(0);
  });

  it("does not color white-on-red heading text as red on p.5", () => {
    const row = lesson[5][0];
    expect("jp" in row ? redSpans(row.jp) : []).toHaveLength(0);
  });
});

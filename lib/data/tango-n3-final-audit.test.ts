import { describe, expect, it } from "vitest";

import { sampleExamples } from "./sample-examples";
import { sampleWords } from "./sample-words";

type ExampleKey = `${string}#${1 | 2 | 3}`;

const examplesByKey = new Map(sampleExamples.map((e) => [`${e.vocabId}#${e.exampleNo}`, e] as const));
const wordsById = new Map(sampleWords.map((w) => [w.id, w] as const));

function example(key: ExampleKey) {
  const value = examplesByKey.get(key);
  expect(value, `missing runtime example ${key}`).toBeDefined();
  return value!;
}

describe("Tango N3 final manual audit regressions", () => {
  it("keeps the complete 1,798-word / 5,394-example runtime set", () => {
    expect(sampleWords).toHaveLength(1798);
    expect(sampleExamples).toHaveLength(5394);
  });

  it("keeps every runtime cloze exactly reversible", () => {
    for (const row of sampleExamples) {
      expect(row.clozeJp.replace("_____", row.answer), `${row.vocabId}#${row.exampleNo}`).toBe(row.exampleJp);
    }
  });

  it("locks homophonous-Kanji and sense corrections found by the full manual read", () => {
    expect(example("hakaru#2").exampleJp).toContain("測って");
    expect(example("hakaru#2").exampleJp).not.toMatch(/[量計]って/u);
    expect(example("hakaru#3").exampleJp).toContain("測って");
    expect(example("hakaru#3").exampleJp).not.toMatch(/[量計]って/u);

    expect(example("nama#3").exampleJp).toContain("生の魚");
    expect(example("nama#3").exampleJp).not.toContain("生放送");
    expect(example("hamigaki#3").exampleJp).toContain("歯磨き");
    expect(example("hamigaki#3").exampleJp).not.toContain("歯磨き粉");
    expect(example("taiiku#3").exampleJp).toContain("体育の授業");
    expect(example("taiiku#3").exampleJp).not.toContain("体育館");
    expect(example("kokuou#3").exampleJp).toContain("国王の公式訪問");
  });

  it("locks Japanese collocation and register fixes", () => {
    expect(example("fuusoku#1").exampleJp).toBe("今日の風速はかなり高い。");
    expect(example("koro#3").exampleJp).toBe("来月頃には完成する見込みです。");
    expect(example("meirei#3").exampleJp).toContain("業務命令に従って対応");
    expect(example("hanko#3").exampleJp).toBe("契約書の所定欄に判こを押してください。");
    expect(example("ataru#3").exampleJp).toContain("予測が当たるか");
    expect(example("tada#3").exampleJp).toContain("同僚");
    expect(example("tada#3").exampleJp).toContain("ただで参加できる");
  });

  it("keeps business examples in explicit work/service contexts where manual audit found drift", () => {
    expect(example("yuujou#3").exampleJp).toMatch(/同僚|働/u);
    expect(example("classmate#3").exampleJp).toMatch(/取引先|担当者/u);
    expect(example("sumou#3").exampleJp).toMatch(/旅行会社|ツアー/u);
    expect(example("zou#3").exampleJp).toContain("動物園");
    expect(example("tora#3").exampleJp).toContain("動物園");
    expect(example("oyatsu#3").exampleJp).toContain("社員食堂");
    expect(example("nagareru#3").exampleJp).toContain("店内");
    expect(example("naru_fruit#3").exampleJp).toContain("農園");
  });

  it("locks natural Vietnamese meaning corrections", () => {
    expect(wordsById.get("sangyou")?.meaningVi).toBe("ngành công nghiệp, ngành kinh tế");
    expect(wordsById.get("seikeigeka")?.meaningVi).toBe("khoa chấn thương chỉnh hình, ngoại chỉnh hình");
    expect(wordsById.get("jikoku")?.meaningVi).toBe("giờ, thời điểm");
    expect(wordsById.get("stand")?.meaningVi).toBe("đèn bàn; giá, chân đỡ");
    expect(example("nouritsu#2").exampleVi).toContain("kém hiệu quả");
    expect(example("tojiru#1").exampleVi).toBe("Vui lòng đóng sách lại.");
  });
});

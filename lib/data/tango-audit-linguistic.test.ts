import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { sampleExamples } from "./sample-examples";
import { sampleWords } from "./sample-words";

const outDir = join(process.cwd(), "audit-output");
const wordById = new Map(sampleWords.map((w) => [w.id, w] as const));

const jpPunctuationInVi = /[。、「」『』]/u;
const replacementChar = /�/u;
const vietnameseInJp = /[ăâđêôơưĂÂĐÊÔƠƯ]/u;
const latinOnlyJp = /^[\s\p{ASCII}]+$/u;
const suspiciousViLiteral = /(chủ nghĩa thực lực|dựa trên tham khảo|tin đồn sai sự thật|xin lỗi vì sự bất tiện này。)/iu;
const suspiciousJpLiteral = /(事情を説明の上)/u;

function row(e: (typeof sampleExamples)[number]) {
  const w = wordById.get(e.vocabId);
  return {
    vocabId: e.vocabId,
    word: w?.word,
    meaningVi: w?.meaningVi,
    type: e.exampleType,
    jp: e.exampleJp,
    vi: e.exampleVi,
    cloze: e.clozeJp,
    answer: e.answer,
  };
}

describe("Tango N3 linguistic anomaly scan", () => {
  it("exports translation/script and known semantic-risk suspects", () => {
    const jpPunctuation = sampleExamples.filter((e) => jpPunctuationInVi.test(e.exampleVi)).map(row);
    const replacement = sampleExamples.filter((e) => replacementChar.test(e.exampleJp) || replacementChar.test(e.exampleVi)).map(row);
    const viCharsInJp = sampleExamples.filter((e) => vietnameseInJp.test(e.exampleJp)).map(row);
    const asciiJp = sampleExamples.filter((e) => latinOnlyJp.test(e.exampleJp)).map(row);
    const literalVi = sampleExamples.filter((e) => suspiciousViLiteral.test(e.exampleVi)).map(row);
    const literalJp = sampleExamples.filter((e) => suspiciousJpLiteral.test(e.exampleJp)).map(row);

    const wordsWithJpPunctuationInVi = sampleWords.filter((w) => jpPunctuationInVi.test(w.meaningVi) || jpPunctuationInVi.test(w.usageNote) || jpPunctuationInVi.test(w.commonMistake) || jpPunctuationInVi.test(w.similarWords)).map((w) => ({ id: w.id, word: w.word, meaningVi: w.meaningVi, usageNote: w.usageNote, commonMistake: w.commonMistake, similarWords: w.similarWords }));

    const report = {
      jpPunctuationInViCount: jpPunctuation.length,
      replacementCharCount: replacement.length,
      vietnameseCharsInJpCount: viCharsInJp.length,
      asciiOnlyJpCount: asciiJp.length,
      suspiciousViLiteralCount: literalVi.length,
      suspiciousJpLiteralCount: literalJp.length,
      wordMetadataJpPunctuationInViCount: wordsWithJpPunctuationInVi.length,
      jpPunctuation,
      replacement,
      viCharsInJp,
      asciiJp,
      literalVi,
      literalJp,
      wordsWithJpPunctuationInVi,
    };

    writeFileSync(join(outDir, "linguistic-report.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
    expect(sampleExamples).toHaveLength(5394);
  });
});

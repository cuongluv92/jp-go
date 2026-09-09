import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { sampleExamples } from "./sample-examples";
import { sampleWords } from "./sample-words";

const outDir = join(process.cwd(), "audit-output");

function jsonl(rows: unknown[]) {
  return `${rows.map((row) => JSON.stringify(row)).join("\n")}\n`;
}

describe("temporary Tango N3 runtime export", () => {
  it("exports final post-override data for independent audit", () => {
    mkdirSync(outDir, { recursive: true });

    const words = sampleWords.map(({ progress: _progress, ...word }) => word);
    const wordById = new Map(words.map((word) => [word.id, word] as const));
    const examples = sampleExamples.map((example, index) => {
      const word = wordById.get(example.vocabId);
      return {
        index,
        vocabId: example.vocabId,
        word: word?.word,
        reading: word?.reading,
        meaningVi: word?.meaningVi,
        partOfSpeech: word?.partOfSpeech,
        verbClass: word?.verbClass,
        transitivity: word?.transitivity,
        exampleNo: example.exampleNo,
        exampleType: example.exampleType,
        exampleJp: example.exampleJp,
        exampleVi: example.exampleVi,
        clozeJp: example.clozeJp,
        answer: example.answer,
        difficulty: example.difficulty,
        focusNote: example.focusNote,
      };
    });

    writeFileSync(join(outDir, "tango-words.jsonl"), jsonl(words), "utf8");
    writeFileSync(join(outDir, "tango-examples.jsonl"), jsonl(examples), "utf8");
    writeFileSync(
      join(outDir, "summary.json"),
      JSON.stringify({ words: words.length, examples: examples.length }, null, 2) + "\n",
      "utf8",
    );

    expect(words).toHaveLength(1798);
    expect(examples).toHaveLength(5394);
  });
});

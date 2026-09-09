import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { sampleExamples } from "./sample-examples";
import { sampleWords } from "./sample-words";

const outDir = join(process.cwd(), "audit-output", "manual-batches");
const wordById = new Map(sampleWords.map((w) => [w.id, w] as const));
const BATCH = 180;

function clean(s: string) {
  return s.replace(/\t/g, " ").replace(/\r?\n/g, " ");
}

describe("Tango N3 compact manual-review batches", () => {
  it("exports every final runtime example exactly once", () => {
    mkdirSync(outDir, { recursive: true });
    const rows = sampleExamples.map((e, i) => {
      const w = wordById.get(e.vocabId)!;
      return [
        String(i + 1).padStart(4, "0"),
        e.vocabId,
        e.exampleType,
        clean(w.word),
        clean(w.reading),
        clean(w.meaningVi),
        clean(e.exampleJp),
        clean(e.exampleVi),
      ].join("\t");
    });
    const files: string[] = [];
    for (let start = 0; start < rows.length; start += BATCH) {
      const no = Math.floor(start / BATCH) + 1;
      const name = `batch-${String(no).padStart(2, "0")}.tsv`;
      files.push(name);
      const header = "row\tvocabId\ttype\tword\treading\tmeaningVi\texampleJp\texampleVi";
      writeFileSync(join(outDir, name), `${header}\n${rows.slice(start, start + BATCH).join("\n")}\n`, "utf8");
    }
    writeFileSync(join(outDir, "index.txt"), `${files.join("\n")}\n`, "utf8");
    expect(rows).toHaveLength(5394);
    expect(files).toHaveLength(30);
  });
});

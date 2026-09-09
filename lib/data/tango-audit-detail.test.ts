import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { sampleExamples } from "./sample-examples";
import { sampleWords } from "./sample-words";

const outDir = join(process.cwd(), "audit-output");
const casual = /(じゃん|だよね|だよ[。！]?|だね[。！]?|だぞ|だぜ|ちゃう|ちゃった|ごめん(?:ね)?|またね|何で|なんで)/;
const explicitInternal = /(同僚|親しい|先輩|後輩|同期|チームメンバー|社内|職場の仲間|新人)/;
const SENSE_MARKERS = /[①-⑳]+$/u;

function overrideKeys(path: string) {
  const text = readFileSync(join(process.cwd(), path), "utf8");
  return [...text.matchAll(/^\s{2}"([^"]+)"\s*:\s*\{/gm)].map((m) => m[1]);
}

function extractOverrideBlock(path: string, key: string) {
  const text = readFileSync(join(process.cwd(), path), "utf8");
  const startToken = `  "${key}": {`;
  const start = text.indexOf(startToken);
  if (start < 0) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = text.indexOf("{", start); i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') { inString = true; continue; }
    if (ch === "{") depth++;
    if (ch === "}") {
      depth--;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }
  return null;
}

describe("Tango N3 focused runtime audit details", () => {
  it("exports collision, casual-business, dictionary-form and template details", () => {
    const wordById = new Map(sampleWords.map((w) => [w.id, w] as const));
    const overrideFiles = [
      "lib/data/tango-n3-example-overrides.ts",
      "lib/data/tango-n3-example-overrides-context.ts",
      "lib/data/tango-n3-example-overrides-final.ts",
      "lib/data/tango-n3-example-overrides-final2.ts",
    ];
    const appearances = new Map<string, string[]>();
    for (const path of overrideFiles) {
      for (const key of overrideKeys(path)) appearances.set(key, [...(appearances.get(key) ?? []), path]);
    }
    const collisions = [...appearances.entries()]
      .filter(([, paths]) => paths.length > 1)
      .map(([key, paths]) => ({
        key,
        paths,
        blocks: paths.map((path) => ({ path, block: extractOverrideBlock(path, key) })),
        runtime: sampleExamples.find((e) => `${e.vocabId}#${e.exampleNo}` === key),
      }));

    const casualBusiness = sampleExamples
      .filter((e) => e.exampleType === "business" && casual.test(e.exampleJp) && !explicitInternal.test(e.exampleJp))
      .map((e) => ({ word: wordById.get(e.vocabId), example: e }));

    const missingDictionaryForm = sampleWords
      .filter((w) => w.partOfSpeech === "verb" && !w.dictionaryForm)
      .map((w) => {
        const candidate = w.word.replace(SENSE_MARKERS, "");
        const classShapeOk = w.verbClass === "suru"
          ? candidate.endsWith("する")
          : w.verbClass === "kuru"
            ? candidate.endsWith("来る") || candidate.endsWith("くる")
            : w.verbClass === "ichidan"
              ? candidate.endsWith("る")
              : w.verbClass === "godan"
                ? /[うくぐすつぬぶむる]$/u.test(candidate)
                : false;
        return {
          id: w.id,
          word: w.word,
          candidate,
          reading: w.reading,
          meaningVi: w.meaningVi,
          verbClass: w.verbClass,
          transitivity: w.transitivity,
          classShapeOk,
          particlePatterns: w.particlePatterns,
          usageNote: w.usageNote,
        };
      });

    const templateMap = new Map<string, typeof sampleExamples>();
    for (const e of sampleExamples) {
      const key = `${e.exampleType}\t${e.clozeJp}`;
      const bucket = templateMap.get(key) ?? [];
      bucket.push(e);
      templateMap.set(key, bucket);
    }
    const templates = [...templateMap.entries()]
      .filter(([, rows]) => rows.length >= 3)
      .map(([key, rows]) => ({
        key,
        count: rows.length,
        rows: rows.map((e) => ({ vocabId: e.vocabId, word: wordById.get(e.vocabId)?.word, jp: e.exampleJp, vi: e.exampleVi })),
      }))
      .sort((a, b) => b.count - a.count);

    const report = {
      collisionCount: collisions.length,
      collisions,
      casualBusinessCount: casualBusiness.length,
      casualBusiness,
      missingDictionaryFormCount: missingDictionaryForm.length,
      dictionaryClassShapeBadCount: missingDictionaryForm.filter((x) => !x.classShapeOk).length,
      dictionaryClassShapeBad: missingDictionaryForm.filter((x) => !x.classShapeOk),
      missingDictionaryForm,
      templateGroupCount: templates.length,
      templates,
    };
    writeFileSync(join(outDir, "detail-report.json"), JSON.stringify(report, null, 2) + "\n", "utf8");

    expect(collisions.length).toBeGreaterThanOrEqual(0);
  });
});

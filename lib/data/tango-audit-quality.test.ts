import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { sampleExamples } from "./sample-examples";
import { sampleWords } from "./sample-words";

const outDir = join(process.cwd(), "audit-output");
const workplace = /(会社|職場|勤務|業務|仕事|会議|顧客|お客様|取引先|上司|部長|課長|同僚|新人|社員|担当|資料|報告|連絡|確認|納期|出荷|工場|作業|検査|製造|設備|機械|安全|研修|出張|受付|窓口|契約|見積|注文|在庫|売上|営業|メール|電話|システム|プロジェクト|チーム|店舗|店員|サービス|学校|授業|先生|学生|病院|患者|医師|看護|ホテル|客室|予約)/;
const casual = /(じゃん|だよね|だよ[。！]?|だね[。！]?|だぞ|だぜ|ちゃう|ちゃった|ごめん(?:ね)?|またね|何で|なんで)/;
const explicitInternal = /(同僚|親しい|先輩|後輩|同期|チームメンバー|社内|職場の仲間|新人)/;

function group<T>(rows: T[], key: (row: T) => string) {
  const map = new Map<string, T[]>();
  for (const row of rows) {
    const k = key(row);
    const bucket = map.get(k) ?? [];
    bucket.push(row);
    map.set(k, bucket);
  }
  return [...map.entries()];
}

function overrideKeys(path: string) {
  const text = readFileSync(join(process.cwd(), path), "utf8");
  return [...text.matchAll(/^\s{2}"([^"]+)"\s*:\s*\{/gm)].map((m) => m[1]);
}

describe("Tango N3 independent full-runtime detectors", () => {
  it("writes suspect lists without trusting old review flags", () => {
    const wordById = new Map(sampleWords.map((word) => [word.id, word] as const));
    const examplesByWord = new Map<string, typeof sampleExamples>();
    for (const ex of sampleExamples) {
      const bucket = examplesByWord.get(ex.vocabId) ?? [];
      bucket.push(ex);
      examplesByWord.set(ex.vocabId, bucket);
    }

    const posSchemaIssues = sampleWords.filter((w) =>
      w.partOfSpeech === "verb"
        ? !w.dictionaryForm || !w.verbClass
        : w.verbClass !== null || w.transitivity !== null,
    ).map((w) => ({ id: w.id, word: w.word, partOfSpeech: w.partOfSpeech, dictionaryForm: w.dictionaryForm, verbClass: w.verbClass, transitivity: w.transitivity }));

    const verbMissingTransitivity = sampleWords.filter((w) => w.partOfSpeech === "verb" && w.transitivity === null)
      .map((w) => ({ id: w.id, word: w.word, reading: w.reading, meaningVi: w.meaningVi, dictionaryForm: w.dictionaryForm, verbClass: w.verbClass, particlePatterns: w.particlePatterns }));

    const multiSenseWords = sampleWords.filter((w) => /①|②|③/.test(w.meaningVi))
      .map((w) => ({ id: w.id, word: w.word, reading: w.reading, meaningVi: w.meaningVi, examples: (examplesByWord.get(w.id) ?? []).map((e) => ({ type: e.exampleType, jp: e.exampleJp, vi: e.exampleVi, answer: e.answer })) }));

    const businessNoWorkplaceCue = sampleExamples.filter((e) => e.exampleType === "business" && !workplace.test(e.exampleJp))
      .map((e) => ({ vocabId: e.vocabId, word: wordById.get(e.vocabId)?.word, jp: e.exampleJp, vi: e.exampleVi }));

    const businessCasualWithoutInternalCue = sampleExamples.filter((e) => e.exampleType === "business" && casual.test(e.exampleJp) && !explicitInternal.test(e.exampleJp))
      .map((e) => ({ vocabId: e.vocabId, word: wordById.get(e.vocabId)?.word, jp: e.exampleJp, vi: e.exampleVi }));

    const exactTemplateGroups = group(sampleExamples, (e) => `${e.exampleType}\t${e.clozeJp}`)
      .filter(([, rows]) => rows.length >= 3)
      .map(([key, rows]) => ({ key, count: rows.length, rows: rows.slice(0, 12).map((e) => ({ vocabId: e.vocabId, jp: e.exampleJp, vi: e.exampleVi })) }))
      .sort((a, b) => b.count - a.count);

    const viDuplicateGroups = group(sampleExamples, (e) => `${e.exampleType}\t${e.exampleVi}`)
      .filter(([, rows]) => rows.length >= 3)
      .map(([key, rows]) => ({ key, count: rows.length, vocabIds: rows.map((e) => e.vocabId) }))
      .sort((a, b) => b.count - a.count);

    const answerSurfaceSuspects = sampleExamples.filter((e) => {
      const w = wordById.get(e.vocabId);
      if (!w) return true;
      if (["noun", "adverb", "conjunction", "particle"].includes(w.partOfSpeech)) {
        return e.answer !== w.word && e.answer !== w.reading && !e.answer.includes(w.word) && !w.word.includes(e.answer);
      }
      return false;
    }).map((e) => ({ vocabId: e.vocabId, word: wordById.get(e.vocabId)?.word, pos: wordById.get(e.vocabId)?.partOfSpeech, type: e.exampleType, jp: e.exampleJp, answer: e.answer }));

    const overrideFiles = [
      "lib/data/tango-n3-example-overrides.ts",
      "lib/data/tango-n3-example-overrides-context.ts",
      "lib/data/tango-n3-example-overrides-final.ts",
      "lib/data/tango-n3-example-overrides-final2.ts",
    ];
    const layers = overrideFiles.map((path) => ({ path, keys: overrideKeys(path) }));
    const appearances = new Map<string, string[]>();
    for (const layer of layers) for (const key of layer.keys) appearances.set(key, [...(appearances.get(key) ?? []), layer.path]);
    const overrideCollisions = [...appearances.entries()].filter(([, paths]) => paths.length > 1).map(([key, paths]) => ({ key, paths }));

    const report = {
      counts: { words: sampleWords.length, examples: sampleExamples.length, verbs: sampleWords.filter((w) => w.partOfSpeech === "verb").length },
      posSchemaIssueCount: posSchemaIssues.length,
      verbMissingTransitivityCount: verbMissingTransitivity.length,
      multiSenseWordCount: multiSenseWords.length,
      businessNoWorkplaceCueCount: businessNoWorkplaceCue.length,
      businessCasualWithoutInternalCueCount: businessCasualWithoutInternalCue.length,
      exactTemplateGroupCount: exactTemplateGroups.length,
      viDuplicateGroupCount: viDuplicateGroups.length,
      answerSurfaceSuspectCount: answerSurfaceSuspects.length,
      overrideLayerKeyCounts: layers.map((l) => ({ path: l.path, count: l.keys.length })),
      overrideCollisionCount: overrideCollisions.length,
      samples: {
        posSchemaIssues: posSchemaIssues.slice(0, 200),
        verbMissingTransitivity: verbMissingTransitivity.slice(0, 300),
        multiSenseWords: multiSenseWords.slice(0, 300),
        businessNoWorkplaceCue: businessNoWorkplaceCue.slice(0, 300),
        businessCasualWithoutInternalCue: businessCasualWithoutInternalCue.slice(0, 300),
        exactTemplateGroups: exactTemplateGroups.slice(0, 100),
        viDuplicateGroups: viDuplicateGroups.slice(0, 100),
        answerSurfaceSuspects: answerSurfaceSuspects.slice(0, 300),
        overrideCollisions: overrideCollisions.slice(0, 300),
      },
    };

    writeFileSync(join(outDir, "quality-report.json"), JSON.stringify(report, null, 2) + "\n", "utf8");

    expect(sampleWords).toHaveLength(1798);
    expect(sampleExamples).toHaveLength(5394);
  });
});

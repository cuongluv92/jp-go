import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

type Row = {
  vocabId: string;
  exampleNo: number;
  exampleType: "exam" | "business";
  exampleJp: string;
  exampleVi: string;
  clozeJp: string;
  answer: string;
  difficulty: number;
  focusNote: string;
};

function unquote(value: string): string {
  return value.replace(/''/g, "'");
}

function loadGeneratedRows(): Row[] {
  const qualityDir = path.join(process.cwd(), "quality");
  const files = fs
    .readdirSync(qualityDir)
    .filter((name) => /^n4_vocab_lesson\d+_examples\.sql$/.test(name))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

  expect(files).toHaveLength(25);

  const rowPattern = /\('([0-9a-f-]{36})'::uuid,\s*([13]),\s*'(exam|business)',\s*'((?:''|[^'])*)',\s*'((?:''|[^'])*)',\s*'((?:''|[^'])*)',\s*'((?:''|[^'])*)',\s*([123]),\s*'((?:''|[^'])*)'\)/g;
  const rows: Row[] = [];

  for (const file of files) {
    const sql = fs.readFileSync(path.join(qualityDir, file), "utf8");
    for (const match of sql.matchAll(rowPattern)) {
      rows.push({
        vocabId: match[1],
        exampleNo: Number(match[2]),
        exampleType: match[3] as Row["exampleType"],
        exampleJp: unquote(match[4]),
        exampleVi: unquote(match[5]),
        clozeJp: unquote(match[6]),
        answer: unquote(match[7]),
        difficulty: Number(match[8]),
        focusNote: unquote(match[9]),
      });
    }
  }
  return rows;
}

function reconstruct(row: Row): string {
  return row.clozeJp.replace(/_{3,}|＿{3,}/u, row.answer);
}

describe("N4 generated vocabulary SQL examples", () => {
  const rows = loadGeneratedRows();

  it("covers all 942 vocabulary IDs with exactly one exam and one business example", () => {
    expect(rows).toHaveLength(942 * 2);
    const grouped = new Map<string, Row[]>();
    for (const row of rows) grouped.set(row.vocabId, [...(grouped.get(row.vocabId) ?? []), row]);
    expect(grouped.size).toBe(942);
    for (const group of grouped.values()) {
      expect(group).toHaveLength(2);
      expect(group.map((row) => `${row.exampleNo}:${row.exampleType}`).sort()).toEqual(["1:exam", "3:business"]);
    }
  });

  it("has complete text, valid difficulty and a real cloze blank", () => {
    for (const row of rows) {
      expect(row.exampleJp.trim()).not.toBe("");
      expect(row.exampleVi.trim()).not.toBe("");
      expect(row.answer.trim()).not.toBe("");
      expect(row.focusNote.trim()).not.toBe("");
      expect(row.difficulty).toBeGreaterThanOrEqual(1);
      expect(row.difficulty).toBeLessThanOrEqual(3);
      expect(row.clozeJp).toMatch(/_{3,}|＿{3,}/u);
    }
  });

  it("reconstructs every reviewed Japanese example exactly from cloze + answer", () => {
    for (const row of rows) expect(reconstruct(row)).toBe(row.exampleJp);
  });

  it("does not reuse an exact generated Japanese sentence", () => {
    const normalized = rows.map((row) => row.exampleJp.trim().replace(/[。！？!?]+$/u, ""));
    expect(new Set(normalized).size).toBe(normalized.length);
  });
});

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

function lessonNumbersFromFile(file: string): number[] {
  const match = file.match(/^n4_vocab_lessons?(\d+)(?:_(\d+))?_examples\.sql$/);
  if (!match) return [];
  const first = Number(match[1]);
  const last = match[2] ? Number(match[2]) : first;
  return Array.from({ length: last - first + 1 }, (_, i) => first + i);
}

/** Parse one VALUES tuple while respecting SQL single-quoted strings and ''. */
function parseTupleLine(line: string): string[] | null {
  let text = line.trim();
  if (!text.startsWith("(")) return null;
  if (text.endsWith(",")) text = text.slice(0, -1).trimEnd();
  if (!text.endsWith(")")) return null;
  text = text.slice(1, -1);

  const fields: string[] = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === "'") {
      if (quoted && text[i + 1] === "'") {
        current += "'";
        i += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }
    if (char === "," && !quoted) {
      fields.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  if (quoted) throw new Error(`Unclosed SQL string: ${line}`);
  fields.push(current.trim());
  return fields;
}

function loadGeneratedRows(): Row[] {
  const qualityDir = path.join(process.cwd(), "quality");
  const files = fs
    .readdirSync(qualityDir)
    .filter((name) => /^n4_vocab_lessons?\d+(?:_\d+)?_examples\.sql$/.test(name))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

  const coveredLessons = [...new Set(files.flatMap(lessonNumbersFromFile))].sort((a, b) => a - b);
  expect(coveredLessons).toEqual(Array.from({ length: 25 }, (_, i) => 26 + i));

  const rows: Row[] = [];
  for (const file of files) {
    const sql = fs.readFileSync(path.join(qualityDir, file), "utf8");
    for (const line of sql.split(/\r?\n/u)) {
      if (!line.includes("'exam'") && !line.includes("'business'")) continue;
      const fields = parseTupleLine(line);
      if (!fields || fields.length !== 9) throw new Error(`Cannot parse example tuple in ${file}: ${line}`);
      const exampleType = fields[2];
      if (exampleType !== "exam" && exampleType !== "business") continue;
      rows.push({
        vocabId: fields[0].replace(/::uuid$/u, ""),
        exampleNo: Number(fields[1]),
        exampleType,
        exampleJp: fields[3],
        exampleVi: fields[4],
        clozeJp: fields[5],
        answer: fields[6],
        difficulty: Number(fields[7]),
        focusNote: fields[8],
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
    if (grouped.size !== 942) throw new Error(`Expected 942 vocab IDs, parsed ${grouped.size}`);
    const badGroups = [...grouped.entries()].filter(([, group]) => {
      const roles = group.map((row) => `${row.exampleNo}:${row.exampleType}`).sort();
      return group.length !== 2 || roles.join("|") !== "1:exam|3:business";
    });
    expect(badGroups).toEqual([]);
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
    const broken = rows.filter((row) => reconstruct(row) !== row.exampleJp).map((row) => ({
      vocabId: row.vocabId,
      type: row.exampleType,
      example: row.exampleJp,
      cloze: row.clozeJp,
      answer: row.answer,
      restored: reconstruct(row),
    }));
    expect(broken).toEqual([]);
  });

  it("does not reuse an exact generated Japanese sentence", () => {
    const groups = new Map<string, Row[]>();
    for (const row of rows) {
      const normalized = row.exampleJp.trim().replace(/[。！？!?]+$/u, "");
      groups.set(normalized, [...(groups.get(normalized) ?? []), row]);
    }
    const duplicates = [...groups.entries()]
      .filter(([, group]) => group.length > 1)
      .map(([sentence, group]) => ({ sentence, rows: group.map((row) => ({ vocabId: row.vocabId, type: row.exampleType })) }));
    expect(duplicates).toEqual([]);
  });
});

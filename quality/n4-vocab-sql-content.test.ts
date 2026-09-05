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

function parseTuple(tuple: string): string[] {
  let text = tuple.trim();
  if (!text.startsWith("(") || !text.endsWith(")")) throw new Error(`Invalid SQL tuple: ${tuple}`);
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
  if (quoted) throw new Error(`Unclosed SQL string: ${tuple}`);
  fields.push(current.trim());
  return fields;
}

function extractValueTuples(sql: string, endPattern: RegExp): string[] {
  const valuesMatch = /\bvalues\b/iu.exec(sql);
  if (!valuesMatch) throw new Error("VALUES block not found");
  const start = valuesMatch.index + valuesMatch[0].length;
  const endMatch = endPattern.exec(sql.slice(start));
  if (!endMatch) throw new Error("End of VALUES block not found");
  const body = sql.slice(start, start + endMatch.index);

  const tuples: string[] = [];
  let tupleStart = -1;
  let depth = 0;
  let quoted = false;
  for (let i = 0; i < body.length; i += 1) {
    const char = body[i];
    if (char === "'") {
      if (quoted && body[i + 1] === "'") i += 1;
      else quoted = !quoted;
      continue;
    }
    if (quoted) continue;
    if (char === "(") {
      if (depth === 0) tupleStart = i;
      depth += 1;
      continue;
    }
    if (char === ")") {
      depth -= 1;
      if (depth < 0) throw new Error("Unexpected closing parenthesis in VALUES block");
      if (depth === 0 && tupleStart >= 0) {
        tuples.push(body.slice(tupleStart, i + 1));
        tupleStart = -1;
      }
    }
  }
  if (quoted || depth !== 0 || tupleStart !== -1) throw new Error("Unclosed SQL tuple/string in VALUES block");
  return tuples;
}

function rowFromTuple(tuple: string, source: string): Row {
  const fields = parseTuple(tuple);
  if (fields.length !== 9) throw new Error(`Cannot parse 9 fields in ${source}: ${tuple}`);
  const exampleType = fields[2];
  if (exampleType !== "exam" && exampleType !== "business") {
    throw new Error(`Unexpected example type in ${source}: ${exampleType}`);
  }
  return {
    vocabId: fields[0].replace(/::uuid$/u, ""),
    exampleNo: Number(fields[1]),
    exampleType,
    exampleJp: fields[3],
    exampleVi: fields[4],
    clozeJp: fields[5],
    answer: fields[6],
    difficulty: Number(fields[7]),
    focusNote: fields[8],
  };
}

function loadFinalGeneratedRows(): Row[] {
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
    const tuples = extractValueTuples(sql, /\n\)\s*\ninsert\s+into\s+public\.jp_vocab_examples/iu);
    rows.push(...tuples.map((tuple) => rowFromTuple(tuple, file)));
  }

  const fixSql = fs.readFileSync(path.join(qualityDir, "n4_vocab_duplicate_example_fixes.sql"), "utf8");
  const fixBlockMatch = /-- GENERATED_EXAMPLE_FIXES_BEGIN([\s\S]*?)-- GENERATED_EXAMPLE_FIXES_END/u.exec(fixSql);
  if (!fixBlockMatch) throw new Error("Generated example correction block not found");
  const fixes = extractValueTuples(fixBlockMatch[1], /\n\)\s*\nupdate\s+public\.jp_vocab_examples/iu)
    .map((tuple) => rowFromTuple(tuple, "n4_vocab_duplicate_example_fixes.sql"));

  for (const fix of fixes) {
    const index = rows.findIndex((row) => row.vocabId === fix.vocabId && row.exampleNo === fix.exampleNo && row.exampleType === fix.exampleType);
    if (index < 0) throw new Error(`Generated correction target missing: ${fix.vocabId}/${fix.exampleType}`);
    rows[index] = fix;
  }
  return rows;
}

function reconstruct(row: Row): string {
  return row.clozeJp.replace(/_{3,}|＿{3,}/u, row.answer);
}

describe("N4 generated vocabulary SQL examples", () => {
  const rows = loadFinalGeneratedRows();

  it("covers all 942 vocabulary IDs with exactly one exam and one business example", () => {
    expect(rows).toHaveLength(942 * 2);
    const grouped = new Map<string, Row[]>();
    for (const row of rows) grouped.set(row.vocabId, [...(grouped.get(row.vocabId) ?? []), row]);
    expect(grouped.size).toBe(942);
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

  it("does not reuse an exact Japanese sentence after final package corrections", () => {
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

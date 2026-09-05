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

/** Parse one SQL VALUES tuple while respecting single-quoted strings and ''. */
function parseTuple(tuple: string): string[] {
  let text = tuple.trim();
  if (!text.startsWith("(") || !text.endsWith(")")) {
    throw new Error(`Invalid SQL tuple: ${tuple}`);
  }
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

/**
 * Extract every tuple from the CTE VALUES block. This deliberately scans the
 * whole block instead of assuming one tuple per physical line, because a
 * reviewed SQL row may be formatted across multiple lines.
 */
function extractValueTuples(sql: string): string[] {
  const valuesMatch = /\bvalues\b/iu.exec(sql);
  if (!valuesMatch) throw new Error("VALUES block not found");
  const start = valuesMatch.index + valuesMatch[0].length;
  const insertMatch = /\n\)\s*\ninsert\s+into\s+public\.jp_vocab_examples/iu.exec(sql.slice(start));
  if (!insertMatch) throw new Error("End of vocabulary VALUES block not found");
  const body = sql.slice(start, start + insertMatch.index);

  const tuples: string[] = [];
  let tupleStart = -1;
  let depth = 0;
  let quoted = false;

  for (let i = 0; i < body.length; i += 1) {
    const char = body[i];
    if (char === "'") {
      if (quoted && body[i + 1] === "'") {
        i += 1;
      } else {
        quoted = !quoted;
      }
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

  if (quoted || depth !== 0 || tupleStart !== -1) {
    throw new Error("Unclosed SQL tuple/string in VALUES block");
  }
  return tuples;
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
    for (const tuple of extractValueTuples(sql)) {
      const fields = parseTuple(tuple);
      if (fields.length !== 9) throw new Error(`Cannot parse 9 fields in ${file}: ${tuple}`);
      const exampleType = fields[2];
      if (exampleType !== "exam" && exampleType !== "business") {
        throw new Error(`Unexpected example type in ${file}: ${exampleType}`);
      }
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

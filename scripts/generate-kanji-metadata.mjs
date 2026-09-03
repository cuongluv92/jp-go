import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const [migrationDir, kanjiVgDir] = process.argv.slice(2);
if (!migrationDir || !kanjiVgDir) {
  throw new Error("Usage: node scripts/generate-kanji-metadata.mjs <migration-dir> <kanjivg-kanji-dir>");
}

const entries = new Map();
for (const filename of readdirSync(migrationDir).filter((name) => name.endsWith(".sql")).sort()) {
  const sql = readFileSync(join(migrationDir, filename), "utf8");
  const pattern = /values\s*\(\s*'[^']+'\s*,\s*'(N[245])'\s*,\s*'([^']+)'/g;
  for (const match of sql.matchAll(pattern)) {
    const [, level, character] = match;
    if (Array.from(character).length === 1) entries.set(`${level}:${character}`, { level, character });
  }
}

function attributes(tag) {
  return Object.fromEntries(Array.from(tag.matchAll(/([\w:-]+)="([^"]*)"/g), (match) => [match[1], match[2]]));
}

function metadata(character) {
  const codePoint = character.codePointAt(0).toString(16).padStart(5, "0");
  const svg = readFileSync(join(kanjiVgDir, `${codePoint}.svg`), "utf8");
  const strokeSection = svg.slice(svg.indexOf("StrokePaths_"), svg.indexOf("StrokeNumbers_"));
  const strokeCount = (strokeSection.match(/<path\b/g) ?? []).length;
  const candidates = Array.from(svg.matchAll(/<g\b[^>]*>/g), (match) => attributes(match[0]))
    .filter((attrs) => attrs["kvg:element"] && attrs["kvg:radical"])
    .sort((a, b) => ({ general: 3, tradit: 2, nelson: 1 }[b["kvg:radical"]] ?? 0) - ({ general: 3, tradit: 2, nelson: 1 }[a["kvg:radical"]] ?? 0));
  const radical = candidates[0]?.["kvg:element"];
  if (!strokeCount || !radical) throw new Error(`Missing KanjiVG metadata for ${character} (${codePoint})`);
  return { strokeCount, radical };
}

const rows = Array.from(entries.values())
  .map((entry) => ({ ...entry, ...metadata(entry.character) }))
  .sort((a, b) => a.level.localeCompare(b.level) || a.character.localeCompare(b.character, "ja"));

const quote = (value) => `'${value.replaceAll("'", "''")}'`;
const values = rows.map((row) => `  (${quote(row.level)}, ${quote(row.character)}, ${row.strokeCount}, ${quote(row.radical)})`).join(",\n");

process.stdout.write(`-- Kanji metadata derived from KanjiVG r20260714 (CC BY-SA 3.0).\n-- https://github.com/KanjiVG/kanjivg/releases/tag/r20260714\n-- Only fills missing metadata; reviewed values already in the database are preserved.\n\nwith source(level, kanji_character, stroke_count, radical) as (\n  values\n${values}\n)\nupdate public.jp_kanji as target\nset\n  stroke_count = coalesce(target.stroke_count, source.stroke_count),\n  radical = coalesce(nullif(btrim(target.radical), ''), source.radical)\nfrom source\nwhere target.level = source.level\n  and target.kanji_character = source.kanji_character\n  and (target.stroke_count is null or target.radical is null or btrim(target.radical) = '');\n`);

import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

type ApiKanji = {
  kanji: string;
  stroke_count: number;
  alternate_stroke_counts?: number[];
  on_readings: string[];
  kun_readings: string[];
};

type DbKanji = { id: string; level: "N5" | "N4"; kanji_character: string; stroke_count: number | null };
type DbReading = { kanji_id: string; reading_type: "on" | "kun"; reading_kana: string };

function toHiragana(value: string): string {
  return value.replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function normalizeReading(value: string): string {
  return toHiragana(value).replace(/[.・\-]/g, "").trim();
}

function kunForms(value: string): Set<string> {
  const hira = toHiragana(value).trim();
  const forms = new Set<string>([normalizeReading(hira)]);
  const dot = hira.indexOf(".");
  if (dot >= 0) forms.add(normalizeReading(hira.slice(0, dot)));
  return forms;
}

async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;
  async function worker() {
    for (;;) {
      const index = cursor++;
      if (index >= items.length) return;
      results[index] = await fn(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

export async function GET() {
  const supabase = await createClient();
  const [{ data: kanjiRows, error: kanjiError }, { data: readingRows, error: readingError }] = await Promise.all([
    supabase.from("jp_kanji").select("id,level,kanji_character,stroke_count").in("level", ["N5", "N4"]),
    supabase.from("jp_kanji_readings").select("kanji_id,reading_type,reading_kana"),
  ]);
  if (kanjiError || readingError) {
    return NextResponse.json({ error: (kanjiError ?? readingError)?.message ?? "Supabase read failed" }, { status: 500 });
  }

  const kanji = (kanjiRows ?? []) as DbKanji[];
  const readings = (readingRows ?? []) as DbReading[];
  const readingMap = new Map<string, DbReading[]>();
  for (const reading of readings) readingMap.set(reading.kanji_id, [...(readingMap.get(reading.kanji_id) ?? []), reading]);

  const checks = await mapLimit(kanji, 12, async (row) => {
    const response = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(row.kanji_character)}`, { cache: "no-store" });
    if (!response.ok) return { row, fetchError: `${response.status} ${response.statusText}` };
    const source = (await response.json()) as ApiKanji;
    const sourceStrokes = new Set([source.stroke_count, ...(source.alternate_stroke_counts ?? [])]);
    const sourceOn = new Set(source.on_readings.map(normalizeReading));
    const sourceKun = source.kun_readings.map(kunForms);
    const readingMismatches = (readingMap.get(row.id) ?? []).filter((reading) => {
      const normalized = normalizeReading(reading.reading_kana);
      if (reading.reading_type === "on") return !sourceOn.has(normalized);
      return !sourceKun.some((forms) => forms.has(normalized));
    });
    return {
      level: row.level,
      kanji: row.kanji_character,
      strokeMismatch: row.stroke_count == null || !sourceStrokes.has(row.stroke_count),
      dbStroke: row.stroke_count,
      sourceStroke: source.stroke_count,
      alternateStrokeCounts: source.alternate_stroke_counts ?? [],
      readingMismatches,
    };
  });

  const fetchErrors = checks.filter((x) => "fetchError" in x);
  const strokeMismatches = checks.filter((x) => !("fetchError" in x) && x.strokeMismatch);
  const readingMismatches = checks.filter((x) => !("fetchError" in x) && x.readingMismatches.length > 0);

  return NextResponse.json({
    checked: kanji.length,
    fetchErrors,
    strokeMismatches,
    readingMismatches,
  });
}

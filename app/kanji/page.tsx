"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";

import { getCached, setCached } from "@/lib/data/client-cache";
import { downloadBlob } from "@/lib/data/excel-export";
import { buildKanjiWorkbook, fetchAllKanjiData } from "@/lib/data/kanji-excel-export";
import { getKanjiLevelCounts, listKanjiByLevel, type KanjiRow } from "@/lib/data/kanji-service";
import { createClient } from "@/lib/supabase/client";
import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";
import { JLPT_TONES } from "@/lib/ui/jlpt-styles";

interface KanjiListCachedData {
  kanjiList: KanjiRow[];
  countsByLevel: Record<JlptLevel, number>;
}

function kanjiListCacheKey(level: JlptLevel): string {
  return `kanji-list-${level}`;
}

export default function KanjiListPage() {
  return (
    <Suspense fallback={null}>
      <KanjiListContent />
    </Suspense>
  );
}

function KanjiListContent() {
  const searchParams = useSearchParams();
  const initialLevel = searchParams.get("level");
  const isJlptLevel = (v: string | null): v is JlptLevel => !!v && (JLPT_LEVELS as readonly string[]).includes(v);

  const initialLevelValue: JlptLevel = isJlptLevel(initialLevel) ? initialLevel : "N5";
  const [level, setLevel] = useState<JlptLevel>(initialLevelValue);
  const initialCached = getCached<KanjiListCachedData>(kanjiListCacheKey(initialLevelValue));
  const [kanjiList, setKanjiList] = useState<KanjiRow[]>(initialCached?.kanjiList ?? []);
  const [countsByLevel, setCountsByLevel] = useState<Record<JlptLevel, number> | null>(initialCached?.countsByLevel ?? null);
  const [loading, setLoading] = useState(!initialCached);
  const [exporting, setExporting] = useState(false);
  const [query, setQuery] = useState("");

  const filteredKanji = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("vi");
    if (!normalized) return kanjiList;
    return kanjiList.filter((kanji) =>
      [kanji.kanji_character, kanji.han_viet, kanji.meaning_vi_summary ?? ""].some((value) =>
        value.toLocaleLowerCase("vi").includes(normalized),
      ),
    );
  }, [kanjiList, query]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const [list, counts] = await Promise.all([listKanjiByLevel(supabase, level), getKanjiLevelCounts(supabase)]);
      if (cancelled) return;
      setKanjiList(list);
      setCountsByLevel(counts);
      setLoading(false);
      setCached<KanjiListCachedData>(kanjiListCacheKey(level), { kanjiList: list, countsByLevel: counts });
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [level]);

  function selectLevel(newLevel: JlptLevel) {
    const cached = getCached<KanjiListCachedData>(kanjiListCacheKey(newLevel));
    if (cached) {
      setKanjiList(cached.kanjiList);
      setCountsByLevel(cached.countsByLevel);
      setLoading(false);
    } else {
      setKanjiList([]);
      setLoading(true);
    }
    setLevel(newLevel);
  }

  async function handleExport() {
    setExporting(true);
    try {
      const supabase = createClient();
      const data = await fetchAllKanjiData(supabase);
      const blob = await buildKanjiWorkbook(data);
      downloadBlob(blob, `jp-go-kanji-${new Date().toISOString().slice(0, 10)}.xlsx`);
    } finally {
      setExporting(false);
    }
  }

  const tone = JLPT_TONES[level];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-bold">Kanji</h1>
            <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold ${tone.badge}`}>{level}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{kanjiList.length} kanji ở cấp {level}</p>
        </div>
        <button
          type="button"
          onClick={handleExport}
          disabled={exporting}
          className="shrink-0 rounded-xl border border-accent px-3 py-2 text-xs font-semibold text-accent transition hover:bg-accent-soft disabled:opacity-60"
        >
          {exporting ? "Đang xuất..." : "Xuất Excel"}
        </button>
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {JLPT_LEVELS.map((lv) => {
          const count = countsByLevel?.[lv] ?? 0;
          const levelTone = JLPT_TONES[lv];
          return (
            <button
              key={lv}
              type="button"
              disabled={count === 0}
              onClick={() => selectLevel(lv)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                level === lv
                  ? levelTone.active
                  : count > 0
                    ? levelTone.idle
                    : "border-border bg-slate-50 text-muted opacity-60"
              }`}
            >
              <span className="inline-flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${level === lv ? "bg-white" : levelTone.dot}`} aria-hidden />
                {lv} {count > 0 ? `(${count})` : "· sắp có"}
              </span>
            </button>
          );
        })}
      </div>

      <label className="relative block">
        <span className="sr-only">Tìm Kanji</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm theo Kanji, Hán Việt hoặc nghĩa..."
          className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-accent"
        />
      </label>

      {loading ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>
      ) : kanjiList.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
          Chưa có nội dung Kanji cho cấp {level}.
        </p>
      ) : filteredKanji.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
          Không tìm thấy Kanji phù hợp.
        </p>
      ) : (
        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {filteredKanji.map((k) => (
            <li key={k.id}>
              <Link
                href={`/kanji/${k.id}`}
                className="group relative flex flex-col items-center gap-1 overflow-hidden rounded-xl border border-border bg-surface px-2 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md active:scale-[0.97]"
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${tone.dot}`} aria-hidden />
                <span className="font-jp mt-1 text-2xl font-semibold transition group-hover:text-accent">{k.kanji_character}</span>
                <span className="text-[11px] font-semibold text-foreground/80">{k.han_viet}</span>
                <span className="line-clamp-1 text-[10px] leading-4 text-muted">{k.meaning_vi_summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

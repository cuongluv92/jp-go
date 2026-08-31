"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { getCached, setCached } from "@/lib/data/client-cache";
import { downloadBlob } from "@/lib/data/excel-export";
import { buildGrammarWorkbook, fetchAllGrammarData } from "@/lib/data/grammar-excel-export";
import { getGrammarLevelCounts, listGrammarByLevel, type GrammarRow } from "@/lib/data/grammar-service";
import { createClient } from "@/lib/supabase/client";
import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";

interface GrammarListCachedData {
  grammarList: GrammarRow[];
  countsByLevel: Record<JlptLevel, number>;
}

function grammarListCacheKey(level: JlptLevel): string {
  return `grammar-list-${level}`;
}

export default function GrammarListPage() {
  return (
    <Suspense fallback={null}>
      <GrammarListContent />
    </Suspense>
  );
}

function GrammarListContent() {
  const searchParams = useSearchParams();
  const initialLevel = searchParams.get("level");
  const isJlptLevel = (v: string | null): v is JlptLevel => !!v && (JLPT_LEVELS as readonly string[]).includes(v);

  const initialLevelValue: JlptLevel = isJlptLevel(initialLevel) ? initialLevel : "N5";
  const [level, setLevel] = useState<JlptLevel>(initialLevelValue);
  const initialCached = getCached<GrammarListCachedData>(grammarListCacheKey(initialLevelValue));
  const [grammarList, setGrammarList] = useState<GrammarRow[]>(initialCached?.grammarList ?? []);
  const [countsByLevel, setCountsByLevel] = useState<Record<JlptLevel, number> | null>(initialCached?.countsByLevel ?? null);
  const [loading, setLoading] = useState(!initialCached);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const [list, counts] = await Promise.all([listGrammarByLevel(supabase, level), getGrammarLevelCounts(supabase)]);
      if (cancelled) return;
      setGrammarList(list);
      setCountsByLevel(counts);
      setLoading(false);
      setCached<GrammarListCachedData>(grammarListCacheKey(level), { grammarList: list, countsByLevel: counts });
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [level]);

  function selectLevel(newLevel: JlptLevel) {
    const cached = getCached<GrammarListCachedData>(grammarListCacheKey(newLevel));
    if (cached) {
      setGrammarList(cached.grammarList);
      setCountsByLevel(cached.countsByLevel);
      setLoading(false);
    } else {
      setGrammarList([]);
      setLoading(true);
    }
    setLevel(newLevel);
  }

  async function handleExport() {
    setExporting(true);
    try {
      const supabase = createClient();
      const data = await fetchAllGrammarData(supabase);
      const blob = await buildGrammarWorkbook(data);
      downloadBlob(blob, `jp-go-grammar-${new Date().toISOString().slice(0, 10)}.xlsx`);
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h1 className="text-xl font-bold">Ngữ pháp</h1>
          <p className="mt-1 text-sm text-muted">{grammarList.length} mẫu ở cấp {level}</p>
        </div>
        <button
          type="button"
          onClick={handleExport}
          disabled={exporting}
          className="shrink-0 rounded-xl border border-accent px-3 py-2 text-xs font-semibold text-accent disabled:opacity-60"
        >
          {exporting ? "Đang xuất..." : "Xuất Excel"}
        </button>
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {JLPT_LEVELS.map((lv) => {
          const count = countsByLevel?.[lv] ?? 0;
          return (
            <button
              key={lv}
              type="button"
              disabled={count === 0}
              onClick={() => selectLevel(lv)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                level === lv
                  ? "border-accent bg-accent text-accent-foreground"
                  : count > 0
                    ? "border-border bg-surface text-foreground"
                    : "border-border bg-slate-50 text-muted opacity-60"
              }`}
            >
              {lv} {count > 0 ? `(${count})` : "· sắp có"}
            </button>
          );
        })}
      </div>

      {loading ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>
      ) : grammarList.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
          Chưa có nội dung Ngữ pháp cho cấp {level}.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {grammarList.map((g) => (
            <li key={g.id}>
              <Link
                href={`/grammar/${g.id}`}
                className="flex flex-col gap-0.5 rounded-xl border border-border bg-surface px-4 py-3 shadow-sm transition active:scale-[0.98]"
              >
                <span className="font-jp text-base font-semibold">{g.grammar_pattern}</span>
                <span className="text-xs text-muted">{g.meaning_vi}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

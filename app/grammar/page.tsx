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
import { JLPT_TONES } from "@/lib/ui/jlpt-styles";

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
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      try {
        const [list, counts] = await Promise.all([listGrammarByLevel(supabase, level), getGrammarLevelCounts(supabase)]);
        if (cancelled) return;
        setGrammarList(list);
        setCountsByLevel(counts);
        setLoadError(null);
        setCached<GrammarListCachedData>(grammarListCacheKey(level), { grammarList: list, countsByLevel: counts });
      } catch {
        if (cancelled) return;
        setLoadError("Không tải được dữ liệu Ngữ pháp. Vui lòng thử lại.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [level, reloadKey]);

  function selectLevel(newLevel: JlptLevel) {
    const cached = getCached<GrammarListCachedData>(grammarListCacheKey(newLevel));
    setLoadError(null);
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

  function retryLoad() {
    setLoadError(null);
    setLoading(grammarList.length === 0);
    setReloadKey((value) => value + 1);
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

  const tone = JLPT_TONES[level];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-bold">Ngữ pháp</h1>
            <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold ${tone.badge}`}>{level}</span>
          </div>
          <p className="mt-1 text-sm text-muted">{grammarList.length} mẫu ở cấp {level}</p>
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

      {loadError && grammarList.length > 0 && (
        <div className="flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
          <span>{loadError} Đang hiển thị dữ liệu đã lưu tạm.</span>
          <button type="button" onClick={retryLoad} className="shrink-0 font-semibold text-accent">
            Thử lại
          </button>
        </div>
      )}

      {loading ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>
      ) : loadError && grammarList.length === 0 ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p>{loadError}</p>
          <button type="button" onClick={retryLoad} className="mt-2 font-semibold text-accent">
            Thử lại
          </button>
        </div>
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
                className="group relative flex flex-col gap-0.5 overflow-hidden rounded-xl border border-border bg-surface py-3 pl-5 pr-4 shadow-sm transition hover:border-slate-300 hover:shadow-md active:scale-[0.98]"
              >
                <span className={`absolute inset-y-0 left-0 w-1 ${tone.dot}`} aria-hidden />
                <span className="font-jp text-base font-semibold transition group-hover:text-accent">{g.grammar_pattern}</span>
                <span className="text-xs leading-5 text-muted">{g.meaning_vi}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

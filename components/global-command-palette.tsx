"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { createClient } from "@/lib/supabase/client";

type CommandKind = "page" | "vocab" | "kanji" | "grammar";

interface CommandResult {
  id: string;
  kind: CommandKind;
  badge: string;
  primary: string;
  secondary: string;
  href: string;
}

interface GlobalCommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

const QUICK_LINKS: CommandResult[] = [
  { id: "page-vocabulary", kind: "page", badge: "語", primary: "Từ vựng", secondary: "Tra cứu từ, cách đọc và nghĩa", href: "/vocabulary" },
  { id: "page-kanji", kind: "page", badge: "漢", primary: "Kanji", secondary: "Âm đọc, từ ghép và luyện viết", href: "/kanji" },
  { id: "page-grammar", kind: "page", badge: "文", primary: "Ngữ pháp", secondary: "Mẫu câu, cách dùng và bài tập", href: "/grammar" },
  { id: "page-practice", kind: "page", badge: "練", primary: "Luyện tập", secondary: "Bài tập tổng hợp theo cấp độ", href: "/practice" },
  { id: "page-review", kind: "page", badge: "復", primary: "Ôn tập", secondary: "Nội dung đến hạn ôn", href: "/review" },
];

function resultScore(result: CommandResult, query: string): number {
  const q = query.toLocaleLowerCase("vi");
  const primary = result.primary.toLocaleLowerCase("vi");
  const secondary = result.secondary.toLocaleLowerCase("vi");
  if (primary === q) return 0;
  if (primary.startsWith(q)) return 1;
  if (primary.includes(q)) return 2;
  if (secondary.startsWith(q)) return 3;
  if (secondary.includes(q)) return 4;
  return 5;
}

function normalizeSearchTerm(value: string): string {
  // PostgREST .or() dùng dấu phẩy/ngoặc làm cú pháp; bỏ chúng khỏi input để
  // tìm kiếm không thể làm hỏng biểu thức filter.
  return value.replace(/[,%()]/g, " ").replace(/\s+/g, " ").trim().slice(0, 80);
}

function kindLabel(kind: CommandKind): string {
  if (kind === "vocab") return "Từ vựng";
  if (kind === "kanji") return "Kanji";
  if (kind === "grammar") return "Ngữ pháp";
  return "Đi nhanh";
}

export function GlobalCommandPalette({ open, onClose }: GlobalCommandPaletteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const requestIdRef = useRef(0);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CommandResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setResults([]);
    setLoading(false);
    setSelectedIndex(0);
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const term = normalizeSearchTerm(query);
    if (!term) {
      setResults([]);
      setLoading(false);
      return;
    }

    const currentRequestId = ++requestIdRef.current;
    const timer = window.setTimeout(async () => {
      setLoading(true);
      const supabase = createClient();
      const pattern = `%${term}%`;

      const [vocabResult, kanjiResult, grammarResult] = await Promise.all([
        supabase
          .from("jp_vocab")
          .select("id, level, word_jp, reading_furigana, meaning_vi")
          .or(`word_jp.ilike.${pattern},reading_furigana.ilike.${pattern},meaning_vi.ilike.${pattern},level.ilike.${pattern}`)
          .limit(7),
        supabase
          .from("jp_kanji")
          .select("id, level, kanji_character, han_viet, meaning_vi_summary")
          .or(`kanji_character.ilike.${pattern},han_viet.ilike.${pattern},meaning_vi_summary.ilike.${pattern},level.ilike.${pattern}`)
          .limit(6),
        supabase
          .from("jp_grammar")
          .select("id, level, grammar_pattern, meaning_vi")
          .or(`grammar_pattern.ilike.${pattern},meaning_vi.ilike.${pattern},level.ilike.${pattern}`)
          .limit(7),
      ]);

      if (currentRequestId !== requestIdRef.current) return;

      const nextResults: CommandResult[] = [];
      for (const row of vocabResult.data ?? []) {
        nextResults.push({
          id: `vocab-${row.id}`,
          kind: "vocab",
          badge: "語",
          primary: String(row.word_jp ?? ""),
          secondary: [row.reading_furigana, row.meaning_vi, row.level].filter(Boolean).join(" · "),
          href: `/vocabulary/${row.id}`,
        });
      }
      for (const row of kanjiResult.data ?? []) {
        nextResults.push({
          id: `kanji-${row.id}`,
          kind: "kanji",
          badge: String(row.kanji_character ?? "漢"),
          primary: String(row.kanji_character ?? ""),
          secondary: [row.han_viet, row.meaning_vi_summary, row.level].filter(Boolean).join(" · "),
          href: `/kanji/${row.id}`,
        });
      }
      for (const row of grammarResult.data ?? []) {
        nextResults.push({
          id: `grammar-${row.id}`,
          kind: "grammar",
          badge: "文",
          primary: String(row.grammar_pattern ?? ""),
          secondary: [row.meaning_vi, row.level].filter(Boolean).join(" · "),
          href: `/grammar/${row.id}`,
        });
      }

      nextResults.sort((a, b) => resultScore(a, term) - resultScore(b, term));
      setResults(nextResults.slice(0, 14));
      setSelectedIndex(0);
      setLoading(false);
    }, 160);

    return () => window.clearTimeout(timer);
  }, [open, query]);

  const visibleResults = useMemo(() => (normalizeSearchTerm(query) ? results : QUICK_LINKS), [query, results]);

  function openResult(result: CommandResult) {
    onClose();
    router.push(result.href);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (visibleResults.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((index) => (index + 1) % visibleResults.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((index) => (index - 1 + visibleResults.length) % visibleResults.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      openResult(visibleResults[Math.min(selectedIndex, visibleResults.length - 1)]);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-slate-950/35 px-4 pt-[10vh] backdrop-blur-sm" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Tìm kiếm toàn app"
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/70 bg-surface shadow-[0_28px_80px_-24px_rgba(15,23,42,0.55)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-muted">
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M21 21l-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tìm từ vựng, Kanji, ngữ pháp..."
            className="min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-muted/70"
          />
          {loading ? (
            <span className="text-xs font-medium text-muted">Đang tìm...</span>
          ) : (
            <kbd className="rounded-lg border border-border bg-slate-50 px-2 py-1 text-[10px] font-semibold text-muted">ESC</kbd>
          )}
        </div>

        <div className="max-h-[58vh] overflow-y-auto p-2.5">
          {!normalizeSearchTerm(query) && (
            <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Đi nhanh</p>
          )}
          {normalizeSearchTerm(query) && !loading && visibleResults.length === 0 && (
            <div className="px-5 py-10 text-center">
              <p className="text-sm font-semibold text-foreground">Không tìm thấy kết quả</p>
              <p className="mt-1 text-xs text-muted">Thử từ Nhật, cách đọc, nghĩa tiếng Việt hoặc cấp độ như N3.</p>
            </div>
          )}

          <ul className="flex flex-col gap-1">
            {visibleResults.map((result, index) => {
              const active = index === selectedIndex;
              return (
                <li key={result.id}>
                  <button
                    type="button"
                    onMouseMove={() => setSelectedIndex(index)}
                    onClick={() => openResult(result)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${active ? "bg-accent-soft" : "hover:bg-slate-50"}`}
                  >
                    <span className={`font-jp flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${active ? "bg-accent text-accent-foreground" : "bg-slate-100 text-foreground"}`}>
                      {result.badge}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-jp block truncate text-sm font-semibold text-foreground">{result.primary}</span>
                      <span className="mt-0.5 block truncate text-xs text-muted">{result.secondary}</span>
                    </span>
                    <span className="shrink-0 rounded-full border border-border bg-white px-2 py-1 text-[10px] font-semibold text-muted">{kindLabel(result.kind)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-slate-50/80 px-5 py-2.5 text-[10px] font-medium text-muted">
          <span>↑↓ chọn · Enter mở · Esc đóng</span>
          <span>Tìm xuyên Từ vựng · Kanji · Ngữ pháp</span>
        </div>
      </div>
    </div>
  );
}

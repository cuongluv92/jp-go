"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { createClient } from "@/lib/supabase/client";

type DetailKind = "vocabulary" | "grammar" | "kanji";
type Variant = "top" | "bottom";

interface SectionLink {
  id: string;
  label: string;
}

interface NeighborLink {
  href: string;
  label: string;
}

interface NeighborState {
  previous: NeighborLink | null;
  next: NeighborLink | null;
}

function parseDetailRoute(pathname: string): { kind: DetailKind; id: string } | null {
  const match = pathname.match(/^\/(vocabulary|grammar|kanji)\/([^/?#]+)$/);
  if (!match) return null;
  return { kind: match[1] as DetailKind, id: decodeURIComponent(match[2]) };
}

function compactLabel(value: string): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length > 38 ? `${normalized.slice(0, 38)}…` : normalized;
}

function visibleHeading(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) return false;
  if (element.offsetParent === null) return false;
  return Boolean(element.textContent?.trim());
}

async function loadDbNeighbors(kind: "grammar" | "kanji", id: string): Promise<NeighborState> {
  const supabase = createClient();
  const config =
    kind === "grammar"
      ? { table: "jp_grammar", label: "grammar_pattern", href: "/grammar" }
      : { table: "jp_kanji", label: "kanji_character", href: "/kanji" };

  const { data: current, error: currentError } = await supabase
    .from(config.table)
    .select(`id, level, ${config.label}`)
    .eq("id", id)
    .maybeSingle();
  if (currentError || !current) return { previous: null, next: null };

  const { data: rows, error: listError } = await supabase
    .from(config.table)
    .select(`id, ${config.label}, created_at`)
    .eq("level", current.level)
    .order("created_at", { ascending: true })
    .limit(1000);
  if (listError || !rows) return { previous: null, next: null };

  const index = rows.findIndex((row) => row.id === id);
  if (index < 0) return { previous: null, next: null };
  const previous = rows[index - 1];
  const next = rows[index + 1];

  return {
    previous: previous
      ? { href: `${config.href}/${previous.id}`, label: String(previous[config.label] ?? "Bài trước") }
      : null,
    next: next ? { href: `${config.href}/${next.id}`, label: String(next[config.label] ?? "Bài tiếp") } : null,
  };
}

async function loadVocabularyNeighbors(id: string): Promise<NeighborState> {
  const supabase = createClient();
  const { data: current } = await supabase
    .from("jp_vocab")
    .select("id, level, word_jp")
    .eq("id", id)
    .maybeSingle();

  if (current) {
    const { data: rows, error } = await supabase
      .from("jp_vocab")
      .select("id, word_jp, created_at")
      .eq("level", current.level)
      .order("created_at", { ascending: true })
      .limit(1000);
    if (!error && rows) {
      const index = rows.findIndex((row) => row.id === id);
      if (index >= 0) {
        const previous = rows[index - 1];
        const next = rows[index + 1];
        return {
          previous: previous ? { href: `/vocabulary/${previous.id}`, label: previous.word_jp } : null,
          next: next ? { href: `/vocabulary/${next.id}`, label: next.word_jp } : null,
        };
      }
    }
  }

  const [{ sampleWords }, { getVocabularyCollection }] = await Promise.all([
    import("@/lib/data/sample-words"),
    import("@/lib/data/vocabulary-collections"),
  ]);
  const currentStatic = sampleWords.find((word) => word.id === id);
  if (!currentStatic) return { previous: null, next: null };
  const collection = getVocabularyCollection(currentStatic);
  const peers = sampleWords.filter((word) => !word.isHidden && getVocabularyCollection(word) === collection);
  const index = peers.findIndex((word) => word.id === id);
  const previous = peers[index - 1];
  const next = peers[index + 1];
  return {
    previous: previous ? { href: `/vocabulary/${previous.id}`, label: previous.word } : null,
    next: next ? { href: `/vocabulary/${next.id}`, label: next.word } : null,
  };
}

export function DetailQuickNavigator({ variant }: { variant: Variant }) {
  const pathname = usePathname();
  const route = useMemo(() => parseDetailRoute(pathname), [pathname]);
  const [sections, setSections] = useState<SectionLink[]>([]);
  const [neighbors, setNeighbors] = useState<NeighborState>({ previous: null, next: null });

  useEffect(() => {
    if (variant !== "top" || !route) {
      setSections([]);
      return;
    }

    const main = document.querySelector("main");
    if (!main) return;

    function collectSections() {
      const seen = new Set<string>();
      const nextSections: SectionLink[] = [];
      const headings = Array.from(main!.querySelectorAll("h2, h3")).filter(visibleHeading);

      headings.forEach((heading, index) => {
        const label = heading.textContent?.replace(/\s+/g, " ").trim();
        if (!label || seen.has(label) || nextSections.length >= 6) return;
        seen.add(label);
        if (!heading.id) heading.id = `detail-section-${route.kind}-${index}`;
        nextSections.push({ id: heading.id, label: compactLabel(label) });
      });
      setSections(nextSections);
    }

    collectSections();
    const observer = new MutationObserver(collectSections);
    observer.observe(main, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [route, variant]);

  useEffect(() => {
    if (variant !== "bottom" || !route) {
      setNeighbors({ previous: null, next: null });
      return;
    }
    let cancelled = false;
    async function load() {
      try {
        const value =
          route.kind === "vocabulary"
            ? await loadVocabularyNeighbors(route.id)
            : await loadDbNeighbors(route.kind, route.id);
        if (!cancelled) setNeighbors(value);
      } catch {
        if (!cancelled) setNeighbors({ previous: null, next: null });
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [route, variant]);

  if (!route) return null;

  if (variant === "top") {
    if (sections.length < 2) return null;
    return (
      <nav
        aria-label="Mục lục bài học"
        className="sticky top-[76px] z-20 mb-4 hidden items-center gap-1.5 overflow-x-auto rounded-2xl border border-border/90 bg-white/92 p-2 shadow-sm backdrop-blur-xl md:flex"
      >
        <span className="shrink-0 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted">Trong bài</span>
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="shrink-0 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-foreground/75 transition hover:bg-accent-soft hover:text-accent"
          >
            {section.label}
          </button>
        ))}
      </nav>
    );
  }

  if (!neighbors.previous && !neighbors.next) return null;
  return (
    <nav aria-label="Chuyển bài" className="mt-7 grid grid-cols-2 gap-3 border-t border-border/80 pt-5">
      {neighbors.previous ? (
        <Link
          href={neighbors.previous.href}
          className="group min-w-0 rounded-2xl border border-border bg-surface p-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted">← Bài trước</span>
          <span className="mt-1 block truncate font-jp text-sm font-semibold group-hover:text-accent">{neighbors.previous.label}</span>
        </Link>
      ) : (
        <div />
      )}
      {neighbors.next ? (
        <Link
          href={neighbors.next.href}
          className="group min-w-0 rounded-2xl border border-border bg-surface p-3.5 text-right shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
        >
          <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted">Bài tiếp →</span>
          <span className="mt-1 block truncate font-jp text-sm font-semibold group-hover:text-accent">{neighbors.next.label}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

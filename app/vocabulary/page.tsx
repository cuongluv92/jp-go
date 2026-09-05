"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

import { StatusBadge } from "@/components/status-badge";
import { filterWords, type VocabularyFilter } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { getVocabularyCollection, VOCABULARY_COLLECTIONS } from "@/lib/data/vocabulary-collections";
import {
  JLPT_LEVELS,
  LEARNING_STATUS_LABELS,
  PART_OF_SPEECH_LABELS,
  type JlptLevel,
  type LearningStatus,
  type PartOfSpeech,
} from "@/lib/types";

export default function VocabularyPage() {
  return (
    <Suspense fallback={null}>
      <VocabularyPageRoute />
    </Suspense>
  );
}

function VocabularyPageRoute() {
  const searchParams = useSearchParams();
  return <VocabularyPageContent key={searchParams.toString()} />;
}

function VocabularyPageContent() {
  const { words, archivedWords } = useVocabulary();
  const searchParams = useSearchParams();
  const initialLevel = searchParams.get("level");
  const requestedCollection = searchParams.get("collection");
  const collection = requestedCollection === "tango-n3" || requestedCollection === "n2-chua-dat" ? requestedCollection : "current";
  const currentCollection = VOCABULARY_COLLECTIONS.find((item) => item.id === collection)!;
  const visibleWords = useMemo(() => {
    const source = collection === "n2-chua-dat" ? archivedWords : words;
    return source.filter((word) => !word.isHidden && getVocabularyCollection(word) === collection);
  }, [words, archivedWords, collection]);
  const initialQuery = searchParams.get("query")?.trim() || undefined;
  const isJlptLevel = (v: string | null): v is JlptLevel => !!v && (JLPT_LEVELS as readonly string[]).includes(v);

  const [filter, setFilter] = useState<VocabularyFilter>(
    { ...(isJlptLevel(initialLevel) ? { level: initialLevel } : {}), ...(initialQuery ? { query: initialQuery } : {}) },
  );

  const filtered = useMemo(() => filterWords(visibleWords, filter), [visibleWords, filter]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">{collection === "current" ? "Kho từ vựng" : currentCollection.label}</h1>
        <p className="mt-1 text-sm text-muted">{visibleWords.length} từ · đang hiển thị {filtered.length}</p>
      </div>

      <nav aria-label="Bộ từ vựng" className="flex gap-2 overflow-x-auto pb-1">
        {VOCABULARY_COLLECTIONS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            aria-current={collection === item.id ? "page" : undefined}
            className={`shrink-0 rounded-xl border px-3 py-2 text-sm font-semibold ${collection === item.id ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-muted"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {collection === "tango-n3" && (
        <p className="rounded-xl border border-border bg-surface p-3 text-sm text-muted">
          Bộ 単語 N3 hiện tại được giữ riêng, không tính vào kho N3 mới.
        </p>
      )}
      {collection === "n2-chua-dat" && (
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          N2 dữ liệu cũ · Được giữ riêng để tra lại, không tính vào bộ N2 mới.
        </p>
      )}

      <div className="relative">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted">
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={filter.query ?? ""}
          onChange={(e) => setFilter((f) => ({ ...f, query: e.target.value }))}
          placeholder="Tìm theo từ, cách đọc hoặc nghĩa..."
          className="w-full rounded-xl border border-border bg-surface py-2.5 pl-9 pr-3 text-sm shadow-sm outline-none focus:border-accent"
        />
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {collection === "current" && (
          <SelectChip
            label="Cấp độ"
            value={filter.level}
            options={JLPT_LEVELS.map((level) => ({ value: level, label: level }))}
            onChange={(v) => setFilter((f) => ({ ...f, level: (v as JlptLevel) || undefined }))}
          />
        )}
        <SelectChip
          label="Loại từ"
          value={filter.partOfSpeech}
          options={Object.entries(PART_OF_SPEECH_LABELS).map(([value, label]) => ({ value, label }))}
          onChange={(v) => setFilter((f) => ({ ...f, partOfSpeech: (v as PartOfSpeech) || undefined }))}
        />
        <SelectChip
          label="Trạng thái"
          value={filter.status}
          options={Object.entries(LEARNING_STATUS_LABELS).map(([value, label]) => ({ value, label }))}
          onChange={(v) => setFilter((f) => ({ ...f, status: (v as LearningStatus) || undefined }))}
        />
      </div>

      <ul className="flex flex-col gap-2">
        {filtered.map((word) => (
          <li key={word.id}>
            <Link href={`/vocabulary/${word.id}`} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-sm transition active:scale-[0.99]">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-jp truncate text-base font-semibold">{word.word}</p>
                  {word.progress.isFavorite && <span aria-hidden>⭐</span>}
                </div>
                <p className="truncate text-xs text-muted">{word.reading} · {word.meaningVi}</p>
              </div>
              <StatusBadge status={word.progress.status} />
            </Link>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">Chưa có dữ liệu ở mục này.</li>
        )}
      </ul>
    </div>
  );
}

function SelectChip({ label, value, options, onChange }: { label: string; value?: string; options: { value: string; label: string }[]; onChange: (value: string) => void }) {
  return (
    <label className="relative shrink-0">
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-full border px-3 py-1.5 pr-7 text-xs font-medium shadow-sm outline-none ${value ? "border-accent bg-accent/10 text-accent" : "border-border bg-surface text-muted"}`}
      >
        <option value="">{label}</option>
        {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </label>
  );
}

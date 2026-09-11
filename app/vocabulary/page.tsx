"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

import { LessonNavigator } from "@/components/lesson-navigator";
import { StatusBadge } from "@/components/status-badge";
import { LESSON_SIZES, getLessonCount, sliceLesson } from "@/lib/data/lesson-structure";
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
  type VocabWord,
} from "@/lib/types";
import { JLPT_TONES } from "@/lib/ui/jlpt-styles";

type VocabularyViewMode = "lesson" | "partOfSpeech";
type PartOfSpeechSelection = PartOfSpeech | "all";

const LEARNER_PART_OF_SPEECH_LABELS: Record<PartOfSpeech, string> = {
  noun: "Danh từ（名詞）",
  verb: "Động từ（動詞）",
  i_adjective: "Tính từ い（い形容詞）",
  na_adjective: "Tính từ な（な形容詞）",
  adverb: "Trạng từ（副詞）",
  conjunction: "Liên từ（接続詞）",
  particle: "Trợ từ（助詞）",
  expression: "Biểu hiện / cụm từ（表現）",
  unclassified: "Chưa phân loại",
};

function sortWordsForLessons(words: VocabWord[]): VocabWord[] {
  return words
    .map((word, index) => ({ word, index }))
    .sort((a, b) => {
      const lessonA = a.word.lessonNo ?? Number.MAX_SAFE_INTEGER;
      const lessonB = b.word.lessonNo ?? Number.MAX_SAFE_INTEGER;
      if (lessonA !== lessonB) return lessonA - lessonB;

      const pageA = a.word.sourcePage ?? Number.MAX_SAFE_INTEGER;
      const pageB = b.word.sourcePage ?? Number.MAX_SAFE_INTEGER;
      if (pageA !== pageB) return pageA - pageB;

      return a.index - b.index;
    })
    .map(({ word }) => word);
}

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
  const defaultLevel = isJlptLevel(initialLevel) ? initialLevel : collection === "current" && !initialQuery ? "N5" : undefined;

  const [filter, setFilter] = useState<VocabularyFilter>({
    ...(defaultLevel ? { level: defaultLevel } : {}),
    ...(initialQuery ? { query: initialQuery } : {}),
  });
  const [viewMode, setViewMode] = useState<VocabularyViewMode>("lesson");
  const [selectedLesson, setSelectedLesson] = useState(1);
  const [selectedPartOfSpeech, setSelectedPartOfSpeech] = useState<PartOfSpeechSelection>("all");

  const collectionFixedLevel = useMemo(() => {
    const levels = Array.from(new Set(visibleWords.map((word) => word.jlpt)));
    return levels.length === 1 ? levels[0] : undefined;
  }, [visibleWords]);
  const effectiveLevel = filter.level ?? collectionFixedLevel;

  const levelWords = useMemo(() => {
    if (!effectiveLevel) return visibleWords;
    return visibleWords.filter((word) => word.jlpt === effectiveLevel);
  }, [visibleWords, effectiveLevel]);
  const lessonOrderedWords = useMemo(() => sortWordsForLessons(levelWords), [levelWords]);
  const lessonWords = useMemo(
    () => sliceLesson(lessonOrderedWords, selectedLesson, LESSON_SIZES.vocabulary),
    [lessonOrderedWords, selectedLesson],
  );

  const categoryCounts = useMemo(() => {
    const counts = new Map<PartOfSpeech, number>();
    for (const word of levelWords) counts.set(word.partOfSpeech, (counts.get(word.partOfSpeech) ?? 0) + 1);
    return counts;
  }, [levelWords]);
  const availableCategories = (Object.keys(PART_OF_SPEECH_LABELS) as PartOfSpeech[]).filter(
    (partOfSpeech) => (categoryCounts.get(partOfSpeech) ?? 0) > 0,
  );

  const queryActive = Boolean(filter.query?.trim());
  const viewScopedWords = useMemo(() => {
    if (viewMode === "lesson") {
      if (queryActive) return lessonOrderedWords;
      if (!effectiveLevel) return [];
      return lessonWords;
    }
    if (selectedPartOfSpeech === "all") return levelWords;
    return levelWords.filter((word) => word.partOfSpeech === selectedPartOfSpeech);
  }, [viewMode, queryActive, lessonOrderedWords, effectiveLevel, lessonWords, selectedPartOfSpeech, levelWords]);

  const filtered = useMemo(
    () => filterWords(viewScopedWords, { query: filter.query, status: filter.status }),
    [viewScopedWords, filter.query, filter.status],
  );
  const lessonCount = getLessonCount(lessonOrderedWords.length, LESSON_SIZES.vocabulary);

  function changeLevel(value: string) {
    setFilter((current) => ({ ...current, level: (value as JlptLevel) || undefined }));
    setSelectedLesson(1);
    setSelectedPartOfSpeech("all");
  }

  function changeViewMode(mode: VocabularyViewMode) {
    setViewMode(mode);
    setSelectedLesson(1);
    setSelectedPartOfSpeech("all");
  }

  const headerScope = effectiveLevel ? `${effectiveLevel} · ${levelWords.length} từ` : `${visibleWords.length} từ`;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-xl font-bold">{collection === "current" ? "Kho từ vựng" : currentCollection.label}</h1>
          {effectiveLevel && (
            <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold ${JLPT_TONES[effectiveLevel].badge}`}>{effectiveLevel}</span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted">
          {headerScope}
          {viewMode === "lesson" && effectiveLevel ? ` · ${lessonCount} bài · ${LESSON_SIZES.vocabulary} từ/bài` : ""}
        </p>
      </div>

      <nav aria-label="Bộ từ vựng" className="flex gap-2 overflow-x-auto pb-1">
        {VOCABULARY_COLLECTIONS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            aria-current={collection === item.id ? "page" : undefined}
            className={`shrink-0 rounded-xl border px-3 py-2 text-sm font-semibold transition ${collection === item.id ? "border-accent bg-accent text-accent-foreground shadow-sm shadow-accent/20" : "border-border bg-surface text-muted hover:border-slate-300 hover:bg-slate-50 hover:text-foreground"}`}
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
          onChange={(event) => setFilter((current) => ({ ...current, query: event.target.value }))}
          placeholder="Tìm theo từ, cách đọc hoặc nghĩa..."
          className="w-full rounded-xl border border-border bg-surface py-2.5 pl-9 pr-3 text-sm shadow-sm outline-none transition focus:border-accent"
        />
      </div>

      <div className="grid grid-cols-2 gap-1 rounded-2xl bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => changeViewMode("lesson")}
          className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${viewMode === "lesson" ? "bg-white text-foreground shadow-sm" : "text-muted hover:text-foreground"}`}
        >
          Theo bài
        </button>
        <button
          type="button"
          onClick={() => changeViewMode("partOfSpeech")}
          className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${viewMode === "partOfSpeech" ? "bg-white text-foreground shadow-sm" : "text-muted hover:text-foreground"}`}
        >
          Theo từ loại
        </button>
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {collection === "current" && (
          <SelectChip
            label="Cấp độ"
            value={filter.level}
            options={JLPT_LEVELS.map((level) => ({ value: level, label: level }))}
            onChange={changeLevel}
          />
        )}
        <SelectChip
          label="Trạng thái"
          value={filter.status}
          options={Object.entries(LEARNING_STATUS_LABELS).map(([value, label]) => ({ value, label }))}
          onChange={(value) => setFilter((current) => ({ ...current, status: (value as LearningStatus) || undefined }))}
        />
      </div>

      {viewMode === "lesson" && !queryActive && effectiveLevel && (
        <LessonNavigator
          totalItems={lessonOrderedWords.length}
          lessonSize={LESSON_SIZES.vocabulary}
          selectedLesson={selectedLesson}
          onChange={setSelectedLesson}
          unitLabel="từ"
          title="Bài từ vựng"
        />
      )}

      {viewMode === "lesson" && !queryActive && !effectiveLevel && (
        <p className="rounded-xl border border-dashed border-border bg-slate-50 p-4 text-sm text-muted">
          Chọn một cấp độ N5–N1 để học theo bài. Mỗi bài có khoảng {LESSON_SIZES.vocabulary} từ.
        </p>
      )}

      {viewMode === "lesson" && queryActive && (
        <p className="rounded-xl border border-border bg-slate-50 px-3 py-2 text-xs text-muted">
          Đang tìm trong toàn bộ {effectiveLevel ?? "kho từ"}; xoá từ khoá để quay lại Bài {selectedLesson}.
        </p>
      )}

      {viewMode === "partOfSpeech" && (
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          <button
            type="button"
            onClick={() => setSelectedPartOfSpeech("all")}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selectedPartOfSpeech === "all" ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-muted hover:border-slate-300 hover:text-foreground"}`}
          >
            Tất cả ({levelWords.length})
          </button>
          {availableCategories.map((partOfSpeech) => (
            <button
              key={partOfSpeech}
              type="button"
              onClick={() => setSelectedPartOfSpeech(partOfSpeech)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selectedPartOfSpeech === partOfSpeech ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-muted hover:border-slate-300 hover:text-foreground"}`}
            >
              {LEARNER_PART_OF_SPEECH_LABELS[partOfSpeech]} ({categoryCounts.get(partOfSpeech) ?? 0})
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between gap-3 text-xs text-muted">
        <span>
          {viewMode === "lesson" && !queryActive && effectiveLevel
            ? `Bài ${selectedLesson}/${lessonCount}`
            : viewMode === "partOfSpeech" && selectedPartOfSpeech !== "all"
              ? LEARNER_PART_OF_SPEECH_LABELS[selectedPartOfSpeech]
              : "Danh sách"}
        </span>
        <span>{filtered.length} từ đang hiển thị</span>
      </div>

      <ul className="flex flex-col gap-2">
        {filtered.map((word) => {
          const tone = JLPT_TONES[word.jlpt];
          return (
            <li key={word.id}>
              <Link href={`/vocabulary/${word.id}`} className="group relative flex items-center justify-between gap-3 overflow-hidden rounded-xl border border-border bg-surface py-3 pl-5 pr-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md active:scale-[0.99]">
                <span className={`absolute inset-y-0 left-0 w-1 ${tone.dot}`} aria-hidden />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-jp truncate text-base font-semibold transition group-hover:text-accent">{word.word}</p>
                    <span className={`hidden rounded-full border px-2 py-0.5 text-[10px] font-bold sm:inline-flex ${tone.badge}`}>{word.jlpt}</span>
                    {word.progress.isFavorite && <span aria-hidden>⭐</span>}
                  </div>
                  <p className="truncate text-xs leading-5 text-muted">{word.reading} · {word.meaningVi}</p>
                </div>
                <StatusBadge status={word.progress.status} />
              </Link>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">Chưa có dữ liệu ở mục này.</li>
        )}
      </ul>
    </div>
  );
}

function SelectChip({ label, value, options, onChange }: { label: string; value?: string; options: { value: string; label: string }[]; onChange: (value: string) => void }) {
  const levelTone = value && (JLPT_LEVELS as readonly string[]).includes(value) ? JLPT_TONES[value as JlptLevel] : null;
  return (
    <label className="relative shrink-0">
      <select
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        className={`appearance-none rounded-full border px-3 py-1.5 pr-7 text-xs font-semibold shadow-sm outline-none transition ${levelTone ? levelTone.idle : value ? "border-accent bg-accent/10 text-accent" : "border-border bg-surface text-muted hover:border-slate-300"}`}
      >
        <option value="">{label}</option>
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </label>
  );
}

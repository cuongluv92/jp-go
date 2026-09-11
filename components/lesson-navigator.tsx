"use client";

import { getLessonCount, getLessonRange } from "@/lib/data/lesson-structure";

interface LessonNavigatorProps {
  totalItems: number;
  lessonSize: number;
  selectedLesson: number;
  onChange: (lesson: number) => void;
  unitLabel: string;
  title?: string;
}

export function LessonNavigator({
  totalItems,
  lessonSize,
  selectedLesson,
  onChange,
  unitLabel,
  title = "Học theo bài",
}: LessonNavigatorProps) {
  const totalLessons = getLessonCount(totalItems, lessonSize);
  if (totalLessons === 0) return null;

  const range = getLessonRange(totalItems, selectedLesson, lessonSize);
  const progress = `${Math.min(100, Math.max(0, (range.lesson / totalLessons) * 100))}%`;

  return (
    <section className="rounded-2xl border border-border bg-surface p-3.5 shadow-sm sm:p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold text-foreground">{title}</p>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent">
              {lessonSize} {unitLabel}/bài
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">
            Bài {range.lesson}/{totalLessons} · mục {range.startNumber}–{range.endNumber} · {range.count} {unitLabel}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange(range.lesson - 1)}
            disabled={range.lesson <= 1}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-sm font-bold text-foreground transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Bài trước"
          >
            ←
          </button>

          <label className="relative min-w-0 flex-1 sm:flex-none">
            <span className="sr-only">Chọn bài</span>
            <select
              value={range.lesson}
              onChange={(event) => onChange(Number(event.target.value))}
              className="h-9 w-full min-w-[138px] appearance-none rounded-xl border border-border bg-white px-3 pr-8 text-xs font-semibold text-foreground outline-none transition focus:border-accent sm:w-auto"
            >
              {Array.from({ length: totalLessons }, (_, index) => {
                const lesson = index + 1;
                const lessonRange = getLessonRange(totalItems, lesson, lessonSize);
                return (
                  <option key={lesson} value={lesson}>
                    Bài {lesson} · {lessonRange.startNumber}–{lessonRange.endNumber}
                  </option>
                );
              })}
            </select>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </label>

          <button
            type="button"
            onClick={() => onChange(range.lesson + 1)}
            disabled={range.lesson >= totalLessons}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-sm font-bold text-foreground transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Bài tiếp"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100" aria-hidden>
        <div className="h-full rounded-full bg-accent transition-[width] duration-200" style={{ width: progress }} />
      </div>
    </section>
  );
}

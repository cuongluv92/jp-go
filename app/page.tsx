"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { LevelAccordion } from "@/components/level-accordion";
import { StatCard } from "@/components/stat-card";
import {
  completeStudyDay,
  getActiveStudyPlan,
  type StudyDayRow,
  type StudyPlanRow,
} from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { computeStreak } from "@/lib/study-plan";
import type { JlptLevel } from "@/lib/types";

const ALL_LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

export default function HomePage() {
  const { words } = useVocabulary();
  const [userId, setUserId] = useState<string | null>(null);
  const [plan, setPlan] = useState<StudyPlanRow | null>(null);
  const [days, setDays] = useState<StudyDayRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPlan() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) {
        if (!cancelled) setLoading(false);
        return;
      }
      setUserId(user.id);
      const result = await getActiveStudyPlan(supabase, user.id);
      if (cancelled) return;
      setPlan(result?.plan ?? null);
      setDays(result?.days ?? []);
      setLoading(false);
    }

    void loadPlan();
    return () => {
      cancelled = true;
    };
  }, []);

  const todayDay = days.find((d) => d.completed_at === null) ?? null;
  const completedDays = days.filter((d) => d.completed_at !== null);
  const planProgressPercent = days.length > 0 ? Math.round((completedDays.length / days.length) * 100) : 0;
  const streak = computeStreak(completedDays.map((d) => d.completed_at as string));

  const todayWords = todayDay ? todayDay.word_ids.map((id) => words.find((w) => w.id === id)).filter(Boolean) : [];

  async function handleCompleteToday() {
    if (!userId || !todayDay) return;
    setCompleting(true);
    const supabase = createClient();
    await completeStudyDay(supabase, userId, todayDay);
    const result = await getActiveStudyPlan(supabase, userId);
    setPlan(result?.plan ?? null);
    setDays(result?.days ?? []);
    setCompleting(false);
  }

  const countsByLevel = Object.fromEntries(
    ALL_LEVELS.map((level) => [
      level,
      {
        vocab: words.filter((w) => w.jlpt === level && !w.isHidden).length,
        kanji: 0,
        grammar: 0,
      },
    ]),
  ) as Record<JlptLevel, { vocab: number; kanji: number; grammar: number }>;

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-xl font-bold">Xin chào 👋</h1>
        <p className="mt-1 text-sm text-muted">Hôm nay bạn đã sẵn sàng học tiếng Nhật chưa?</p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <StatCard label="Tiến độ lộ trình" value={`${planProgressPercent}%`} hint={plan ? `${completedDays.length}/${days.length} ngày` : undefined} />
        <StatCard label="Chuỗi ngày học" value={`🔥 ${streak}`} hint="ngày liên tục" />
      </section>

      <section>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Hôm nay</h2>
          {plan && (
            <Link href="/settings" className="text-xs font-medium text-accent">
              Đổi lộ trình
            </Link>
          )}
        </div>

        {loading ? (
          <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>
        ) : !plan ? (
          <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
            <p>Bạn chưa có lộ trình học. Hãy cài đặt để bắt đầu.</p>
            <Link
              href="/settings"
              className="flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
            >
              Cài đặt lộ trình
            </Link>
          </div>
        ) : !todayDay ? (
          <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
            🎉 Bạn đã hoàn thành toàn bộ lộ trình {plan.jlpt_level}!
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-xs text-muted">
              Ngày {todayDay.day_number}/{plan.total_days} · {todayWords.length} từ
            </p>
            <ul className="flex flex-col gap-2">
              {todayWords.map((word) => (
                <li key={word!.id}>
                  <Link
                    href={`/vocabulary/${word!.id}`}
                    className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 shadow-sm"
                  >
                    <div>
                      <p className="font-jp text-base font-semibold">{word!.word}</p>
                      <p className="text-xs text-muted">
                        {word!.reading} · {word!.meaningVi}
                      </p>
                    </div>
                    <span className="text-xs text-muted">{word!.jlpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleCompleteToday}
              disabled={completing}
              className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition disabled:opacity-60"
            >
              {completing ? "Đang lưu..." : "Đã học xong"}
            </button>
          </div>
        )}
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link
          href="/flashcards"
          className="flex items-center justify-center rounded-2xl border border-accent px-4 py-3 text-center text-sm font-semibold text-accent transition active:scale-[0.98]"
        >
          Học bằng Flashcard
        </Link>
        <Link
          href="/review"
          className="flex items-center justify-center rounded-2xl border border-accent px-4 py-3 text-center text-sm font-semibold text-accent transition active:scale-[0.98]"
        >
          Ôn tập
        </Link>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Nội dung theo cấp độ</h2>
        <LevelAccordion countsByLevel={countsByLevel} />
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { StatCard } from "@/components/stat-card";
import { getCached, setCached } from "@/lib/data/client-cache";
import { getDueKanjiForReview, getKanjiProgressStats, type KanjiProgressStats } from "@/lib/data/kanji-service";
import { getRecentPracticeAttempts, type PracticeDayResult } from "@/lib/data/practice-attempt-service";
import { getDueReviewSchedules } from "@/lib/data/review-service";
import { computeStats } from "@/lib/data/selectors";
import { getStudyPlanDays, listActiveStudyPlans, type StudyDayRow, type StudyPlanRow } from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { computePlanPace } from "@/lib/study-plan";
import { PART_OF_SPEECH_LABELS } from "@/lib/types";

const PROGRESS_CACHE_KEY = "progress-page-data";

interface PlanWithDays {
  plan: StudyPlanRow;
  days: StudyDayRow[];
}

interface ProgressCachedData {
  userId: string | null;
  plans: PlanWithDays[];
  dueVocabCount: number;
  dueKanjiCount: number;
  kanjiStats: KanjiProgressStats;
  practiceHistory: PracticeDayResult[];
}

const EMPTY_KANJI_STATS: KanjiProgressStats = { learned: 0, learning: 0, needsReview: 0, dueCount: 0 };

// Không dùng toLocaleDateString: dữ liệu ICU cho tên thứ có thể khác nhau giữa
// server (Node) và trình duyệt, gây lỗi hydration mismatch.
const WEEKDAY_LABELS = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"];

function formatDateLabel(dateKey: string): string {
  const d = new Date(`${dateKey}T00:00:00`);
  return WEEKDAY_LABELS[d.getDay()];
}

function planDisplayName(plan: StudyPlanRow): string {
  return plan.name && plan.name.trim().length > 0 ? plan.name : `Lộ trình ${plan.jlpt_level}`;
}

/**
 * Trang Tiến độ — tổng hợp DỮ LIỆU THẬT từ mọi nguồn: lộ trình (gộp TẤT CẢ
 * lộ trình đang chạy song song, không chỉ 1), kanji, từ vựng (flashcard),
 * và lịch sử luyện đề thật (`jp_practice_attempts`) thay vì số liệu mẫu.
 */
export default function ProgressPage() {
  const { words } = useVocabulary();
  const cached = getCached<ProgressCachedData>(PROGRESS_CACHE_KEY);
  const [plans, setPlans] = useState<PlanWithDays[]>(cached?.plans ?? []);
  const [dueVocabCount, setDueVocabCount] = useState(cached?.dueVocabCount ?? 0);
  const [dueKanjiCount, setDueKanjiCount] = useState(cached?.dueKanjiCount ?? 0);
  const [kanjiStats, setKanjiStats] = useState<KanjiProgressStats>(cached?.kanjiStats ?? EMPTY_KANJI_STATS);
  const [practiceHistory, setPracticeHistory] = useState<PracticeDayResult[]>(cached?.practiceHistory ?? []);
  const [loading, setLoading] = useState(!cached);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) {
        if (!cancelled) setLoading(false);
        return;
      }

      const [activePlans, dueSchedules, dueKanji, kStats, history] = await Promise.all([
        listActiveStudyPlans(supabase, user.id),
        getDueReviewSchedules(supabase, user.id),
        getDueKanjiForReview(supabase, user.id),
        getKanjiProgressStats(supabase, user.id),
        getRecentPracticeAttempts(supabase, user.id, 7),
      ]);
      if (cancelled) return;

      const plansWithDays = await Promise.all(
        activePlans.map(async (plan) => ({ plan, days: await getStudyPlanDays(supabase, plan.id) })),
      );
      if (cancelled) return;

      setPlans(plansWithDays);
      setDueVocabCount(dueSchedules.length);
      setDueKanjiCount(dueKanji.length);
      setKanjiStats(kStats);
      setPracticeHistory(history);
      setLoading(false);
      setCached<ProgressCachedData>(PROGRESS_CACHE_KEY, {
        userId: user.id,
        plans: plansWithDays,
        dueVocabCount: dueSchedules.length,
        dueKanjiCount: dueKanji.length,
        kanjiStats: kStats,
        practiceHistory: history,
      });
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const visible = words.filter((w) => !w.isHidden);
  const stats = computeStats(visible);

  const totalDueCount = dueVocabCount + dueKanjiCount;
  const totalPlanDays = plans.reduce((sum, p) => sum + p.plan.total_days, 0);
  const totalCompletedDays = plans.reduce((sum, p) => sum + p.days.filter((d) => d.completed_at !== null).length, 0);
  const overallPlanPercent = totalPlanDays > 0 ? Math.round((totalCompletedDays / totalPlanDays) * 100) : 0;

  const maxDailyTotal = Math.max(1, ...practiceHistory.map((d) => d.total));
  const maxLevelCount = Math.max(1, ...Object.values(stats.byLevel).map((v) => v ?? 0));
  const maxPosCount = Math.max(1, ...Object.values(stats.byPartOfSpeech).map((v) => v ?? 0));
  const hasAnyPractice = practiceHistory.some((d) => d.total > 0);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold">Tiến độ học tập</h1>
        <p className="mt-1 text-sm text-muted">Tổng hợp lộ trình, từ vựng, kanji và kết quả luyện tập — theo dữ liệu thật.</p>
      </div>

      {totalDueCount > 0 && (
        <Link
          href="/review"
          className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-accent px-4 py-3.5 text-accent-foreground shadow-lg shadow-accent/20 transition active:scale-[0.99]"
        >
          <div>
            <p className="text-sm font-bold">🔔 {totalDueCount} mục đang đến hạn ôn tập</p>
            <p className="mt-0.5 text-xs text-white/80">
              {dueVocabCount > 0 && `${dueVocabCount} lịch từ vựng`}
              {dueVocabCount > 0 && dueKanjiCount > 0 && " · "}
              {dueKanjiCount > 0 && `${dueKanjiCount} kanji`}
            </p>
          </div>
          <span className="shrink-0 rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold">Ôn ngay →</span>
        </Link>
      )}

      <section>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Lộ trình đang học</h2>
        {loading ? (
          <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>
        ) : plans.length === 0 ? (
          <Link
            href="/plan"
            className="block rounded-2xl border border-dashed border-border p-4 text-center text-sm text-muted transition active:scale-[0.99]"
          >
            Bạn chưa có lộ trình nào. Bấm để tạo lộ trình mới →
          </Link>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Lộ trình đang chạy" value={plans.length} hint={plans.map((p) => p.plan.jlpt_level).join(", ")} />
              <StatCard
                label="Tổng ngày hoàn thành"
                value={`${overallPlanPercent}%`}
                hint={`${totalCompletedDays}/${totalPlanDays} ngày (gộp tất cả)`}
              />
            </div>
            <ul className="flex flex-col gap-2">
              {plans.map(({ plan, days }) => {
                const completed = days.filter((d) => d.completed_at !== null).length;
                const percent = plan.total_days > 0 ? Math.round((completed / plan.total_days) * 100) : 0;
                const { paceDiff } = computePlanPace(plan.started_at, plan.total_days, completed);
                return (
                  <li key={plan.id}>
                    <Link
                      href="/plan"
                      className="block rounded-2xl border border-border bg-surface px-4 py-3 shadow-sm transition active:scale-[0.99]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex min-w-0 items-center gap-1.5">
                          <span className="shrink-0 rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-bold text-accent">
                            {plan.jlpt_level}
                          </span>
                          <span className="truncate text-sm font-semibold text-foreground">{planDisplayName(plan)}</span>
                        </div>
                        <span className="shrink-0 text-xs font-semibold text-muted">{percent}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-gradient-accent" style={{ width: `${percent}%` }} />
                      </div>
                      <p
                        className={`mt-1.5 text-[11px] font-medium ${
                          paceDiff < 0 ? "text-amber-700" : paceDiff > 0 ? "text-emerald-700" : "text-muted"
                        }`}
                      >
                        {completed}/{plan.total_days} ngày ·{" "}
                        {paceDiff < 0 ? `⚠️ chậm ${-paceDiff} ngày` : paceDiff > 0 ? `🚀 vượt ${paceDiff} ngày` : "✅ đúng tiến độ"}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Kanji</h2>
        <div className="grid grid-cols-3 gap-3">
          <StatCard label="Đã nhớ" value={kanjiStats.learned} />
          <StatCard label="Đang học" value={kanjiStats.learning} />
          <StatCard label="Cần ôn" value={kanjiStats.dueCount} />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Từ vựng (Flashcard)</h2>
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Từ đã học" value={stats.learned + stats.learning} hint={`/${stats.total} từ`} />
          <StatCard label="Từ đã nhớ" value={stats.learned} />
          <StatCard label="Chưa bắt đầu" value={stats.notStarted} />
          <StatCard label="Lịch ôn từ vựng đến hạn" value={dueVocabCount} hint="theo lộ trình, xem ở Ôn tập" />
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold">Kết quả luyện tập 7 ngày qua</h2>
        <div className="flex items-end justify-between gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {practiceHistory.map((day) => {
            const heightPct = day.total === 0 ? 4 : Math.max(6, (day.total / maxDailyTotal) * 100);
            const accuracyPct = day.total === 0 ? 0 : Math.round((day.correct / day.total) * 100);
            return (
              <div key={day.date} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px] text-muted">{day.total > 0 ? `${accuracyPct}%` : ""}</span>
                <div className="flex h-24 w-full items-end">
                  <div
                    className="w-full rounded-t-md bg-accent"
                    style={{ height: `${heightPct}%`, opacity: day.total === 0 ? 0.15 : 1 }}
                  />
                </div>
                <span className="text-[10px] font-medium capitalize text-muted">{formatDateLabel(day.date)}</span>
              </div>
            );
          })}
        </div>
        {!hasAnyPractice && !loading && (
          <p className="mt-2 text-xs text-muted">
            Chưa có bài luyện đề nào trong 7 ngày qua. Sang mục Luyện tập để bắt đầu.
          </p>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold">Theo cấp độ JLPT</h2>
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {Object.entries(stats.byLevel).map(([level, count]) => (
            <BarRow key={level} label={level} count={count ?? 0} max={maxLevelCount} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold">Theo loại từ</h2>
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {Object.entries(stats.byPartOfSpeech).map(([pos, count]) => (
            <BarRow
              key={pos}
              label={PART_OF_SPEECH_LABELS[pos as keyof typeof PART_OF_SPEECH_LABELS]}
              count={count ?? 0}
              max={maxPosCount}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function BarRow({ label, count, max }: { label: string; count: number; max: number }) {
  const pct = Math.max(4, (count / max) * 100);
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-muted">{label}</span>
        <span className="font-medium">{count}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

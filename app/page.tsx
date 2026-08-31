"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { LevelChips } from "@/components/level-chips";
import { SectionTiles } from "@/components/section-tiles";
import { StatCard } from "@/components/stat-card";
import { getCached, setCached } from "@/lib/data/client-cache";
import { getKanjiLevelCounts } from "@/lib/data/kanji-service";
import { getStudyPlanDays, listActiveStudyPlans, type StudyDayRow, type StudyPlanRow } from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { computeStreak } from "@/lib/study-plan";
import type { JlptLevel } from "@/lib/types";

const HOME_CACHE_KEY = "home-page-data";

interface HomeCachedData {
  plan: StudyPlanRow | null;
  days: StudyDayRow[];
  kanjiCounts: Record<JlptLevel, number> | null;
}

/**
 * Trang chủ chỉ còn vai trò tổng quan + điều hướng (mục lớn Từ vựng/Kanji/
 * Ngữ pháp, thống kê tiến độ) — việc quản lý lộ trình thật sự ("Hôm nay học
 * gì", đánh dấu hoàn thành, đổi tên/dừng lộ trình...) nằm ở trang riêng
 * `/plan`. Thẻ "Tiến độ lộ trình" ở đây gộp TẤT CẢ lộ trình đang chạy song
 * song (nếu có nhiều), không chỉ 1 lộ trình.
 */
export default function HomePage() {
  const { words } = useVocabulary();
  const cached = getCached<HomeCachedData>(HOME_CACHE_KEY);
  const [plan, setPlan] = useState<StudyPlanRow | null>(cached?.plan ?? null);
  const [days, setDays] = useState<StudyDayRow[]>(cached?.days ?? []);
  const [kanjiCounts, setKanjiCounts] = useState<Record<JlptLevel, number> | null>(cached?.kanjiCounts ?? null);
  const [selectedLevel, setSelectedLevel] = useState<JlptLevel>("N5");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const supabase = createClient();
      const counts = await getKanjiLevelCounts(supabase);
      if (!cancelled) setKanjiCounts(counts);

      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) {
        if (!cancelled) setCached<HomeCachedData>(HOME_CACHE_KEY, { plan: null, days: [], kanjiCounts: counts });
        return;
      }
      const plans = await listActiveStudyPlans(supabase, user.id);
      if (cancelled) return;
      const nextPlan = plans[0] ?? null;
      const allDays = (await Promise.all(plans.map((p) => getStudyPlanDays(supabase, p.id)))).flat();
      if (cancelled) return;
      setPlan(nextPlan);
      setDays(allDays);
      setCached<HomeCachedData>(HOME_CACHE_KEY, { plan: nextPlan, days: allDays, kanjiCounts: counts });
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const completedDays = days.filter((d) => d.completed_at !== null);
  const planProgressPercent = days.length > 0 ? Math.round((completedDays.length / days.length) * 100) : 0;
  const streak = computeStreak(completedDays.map((d) => d.completed_at as string));

  const vocabCountForLevel = words.filter((w) => w.jlpt === selectedLevel && !w.isHidden).length;
  const kanjiCountForLevel = kanjiCounts?.[selectedLevel] ?? 0;

  return (
    <div className="flex flex-col gap-6">
      <section className="bg-gradient-accent -mx-4 rounded-b-3xl px-4 pb-6 pt-2 text-accent-foreground shadow-lg shadow-accent/20 sm:mx-0 sm:rounded-3xl sm:px-6 sm:pt-6">
        <h1 className="text-xl font-bold">Xin chào 👋</h1>
        <p className="mt-1 text-sm text-white/80">Hôm nay bạn đã sẵn sàng học tiếng Nhật chưa?</p>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Khám phá nội dung</h2>
          <span className="text-xs text-muted">Chọn cấp độ</span>
        </div>
        <LevelChips level={selectedLevel} onChange={setSelectedLevel} />
        <SectionTiles level={selectedLevel} vocabCount={vocabCountForLevel} kanjiCount={kanjiCountForLevel} grammarCount={0} />
      </section>

      <section className="grid grid-cols-2 gap-3">
        <StatCard label="Tiến độ lộ trình" value={`${planProgressPercent}%`} hint={plan ? `${completedDays.length}/${days.length} ngày` : undefined} />
        <StatCard label="Chuỗi ngày học" value={`🔥 ${streak}`} hint="ngày liên tục" />
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
    </div>
  );
}

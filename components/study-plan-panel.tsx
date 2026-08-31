"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getCached, setCached } from "@/lib/data/client-cache";
import { getKanjiByIds, type KanjiRow } from "@/lib/data/kanji-service";
import {
  completeStudyDay,
  getActiveStudyPlan,
  type StudyDayRow,
  type StudyPlanRow,
} from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";

const CACHE_KEY = "study-plan-panel-data";

interface CachedData {
  userId: string | null;
  plan: StudyPlanRow | null;
  days: StudyDayRow[];
  todayKanji: KanjiRow[];
}

async function loadTodayKanji(supabase: ReturnType<typeof createClient>, kanjiIds: string[]): Promise<KanjiRow[]> {
  if (kanjiIds.length === 0) return [];
  return getKanjiByIds(supabase, kanjiIds);
}

/**
 * Nơi quản lý lộ trình học ("Hôm nay học gì", tiến độ, đổi lộ trình) — đặt
 * ở đầu trang Từ vựng theo đúng yêu cầu: vào Từ vựng (từ thẻ lớn ở Trang
 * chủ) là nơi quản lý/cài lộ trình muốn học, không phải ở Trang chủ.
 * Mục "Hôm nay" liệt kê cả từ vựng LẪN kanji của ngày hiện tại thành từng
 * mục con bấm được (trước đây chỉ từ vựng có link, kanji chỉ hiện số đếm).
 */
export function StudyPlanPanel() {
  const { words } = useVocabulary();
  const cached = getCached<CachedData>(CACHE_KEY);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [plan, setPlan] = useState<StudyPlanRow | null>(cached?.plan ?? null);
  const [days, setDays] = useState<StudyDayRow[]>(cached?.days ?? []);
  const [todayKanji, setTodayKanji] = useState<KanjiRow[]>(cached?.todayKanji ?? []);
  const [loading, setLoading] = useState(!cached);
  const [completing, setCompleting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) {
        if (!cancelled) {
          setLoading(false);
          setCached<CachedData>(CACHE_KEY, { userId: null, plan: null, days: [], todayKanji: [] });
        }
        return;
      }
      setUserId(user.id);
      const result = await getActiveStudyPlan(supabase, user.id);
      if (cancelled) return;
      const nextPlan = result?.plan ?? null;
      const nextDays = result?.days ?? [];
      const todayDay = nextDays.find((d) => d.completed_at === null) ?? null;
      const nextTodayKanji = await loadTodayKanji(supabase, todayDay?.kanji_ids ?? []);
      if (cancelled) return;
      setPlan(nextPlan);
      setDays(nextDays);
      setTodayKanji(nextTodayKanji);
      setLoading(false);
      setCached<CachedData>(CACHE_KEY, { userId: user.id, plan: nextPlan, days: nextDays, todayKanji: nextTodayKanji });
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const todayDay = days.find((d) => d.completed_at === null) ?? null;
  const completedDays = days.filter((d) => d.completed_at !== null);
  const todayWords = todayDay ? todayDay.word_ids.map((id) => words.find((w) => w.id === id)).filter(Boolean) : [];

  async function handleCompleteToday() {
    if (!userId || !todayDay) return;
    setCompleting(true);
    const supabase = createClient();
    await completeStudyDay(supabase, userId, todayDay);
    const result = await getActiveStudyPlan(supabase, userId);
    const nextPlan = result?.plan ?? null;
    const nextDays = result?.days ?? [];
    const nextTodayDay = nextDays.find((d) => d.completed_at === null) ?? null;
    const nextTodayKanji = await loadTodayKanji(supabase, nextTodayDay?.kanji_ids ?? []);
    setPlan(nextPlan);
    setDays(nextDays);
    setTodayKanji(nextTodayKanji);
    setCompleting(false);
    setCached<CachedData>(CACHE_KEY, { userId, plan: nextPlan, days: nextDays, todayKanji: nextTodayKanji });
  }

  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Lộ trình của tôi</h2>
        <Link href="/settings" className="text-xs font-medium text-accent">
          {plan ? "Đổi lộ trình" : "Cài đặt lộ trình"}
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-muted">Đang tải...</p>
      ) : !plan ? (
        <p className="text-sm text-muted">Bạn chưa có lộ trình học. Bấm &quot;Cài đặt lộ trình&quot; để bắt đầu.</p>
      ) : !todayDay ? (
        <p className="text-sm text-muted">🎉 Bạn đã hoàn thành toàn bộ lộ trình {plan.jlpt_level}!</p>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-muted">
            Ngày {todayDay.day_number}/{plan.total_days} · {completedDays.length}/{days.length} ngày đã xong
          </p>
          <p className="text-xs font-semibold text-foreground">
            {todayDay.word_ids.length} từ vựng · {todayDay.kanji_ids.length} kanji · {todayDay.grammar_ids.length} điểm ngữ pháp
          </p>
          <ul className="flex flex-col gap-2">
            {todayWords.map((word) => (
              <li key={word!.id}>
                <Link
                  href={`/vocabulary/${word!.id}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
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
            {todayKanji.map((k) => (
              <li key={k.id}>
                <Link
                  href={`/kanji/${k.id}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-jp text-xl font-semibold">{k.kanji_character}</span>
                    <div>
                      <p className="text-sm font-semibold">{k.han_viet}</p>
                      <p className="text-xs text-muted">{k.meaning_vi_summary}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted">{k.level}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => void handleCompleteToday()}
            disabled={completing}
            className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition disabled:opacity-60"
          >
            {completing ? "Đang lưu..." : "Đã học xong"}
          </button>
        </div>
      )}
    </section>
  );
}

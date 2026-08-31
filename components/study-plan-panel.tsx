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

type SubTab = "overview" | "vocab" | "kanji";

async function loadTodayKanji(supabase: ReturnType<typeof createClient>, kanjiIds: string[]): Promise<KanjiRow[]> {
  if (kanjiIds.length === 0) return [];
  return getKanjiByIds(supabase, kanjiIds);
}

function SubTabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
        active ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-muted"
      }`}
    >
      {children}
    </button>
  );
}

function ContentProgressCard({ label, learned, total }: { label: string; learned: number; total: number }) {
  const percent = total > 0 ? Math.round((learned / total) * 100) : 0;
  return (
    <div className="rounded-xl border border-border bg-background px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted">
          {learned}/{total} · {percent}%
        </p>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-accent" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

/**
 * Nội dung tab "Học tiếp" ở trang /plan. Có 2-3 tab con (Tổng quan/Từ vựng/
 * Kanji, chỉ hiện tab nào lộ trình thực sự có) để tách riêng từng loại nội
 * dung thay vì dồn hết vào 1 màn hình — bấm tab nào mới hiện nội dung đó,
 * đỡ rối khi lộ trình có cả Từ vựng lẫn Kanji song song. Tổng quan có thêm
 * cảnh báo tiến độ: so ngày thực tế đã trôi qua kể từ lúc bắt đầu với số
 * ngày đã hoàn thành để biết đang chậm/đúng/vượt tiến độ.
 */
export function StudyPlanPanel() {
  const { words } = useVocabulary();
  const [now] = useState(() => Date.now());
  const cached = getCached<CachedData>(CACHE_KEY);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [plan, setPlan] = useState<StudyPlanRow | null>(cached?.plan ?? null);
  const [days, setDays] = useState<StudyDayRow[]>(cached?.days ?? []);
  const [todayKanji, setTodayKanji] = useState<KanjiRow[]>(cached?.todayKanji ?? []);
  const [loading, setLoading] = useState(!cached);
  const [completing, setCompleting] = useState(false);
  const [subTab, setSubTab] = useState<SubTab>("overview");

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

  const totalWordsInPlan = days.reduce((sum, d) => sum + d.word_ids.length, 0);
  const learnedWordsInPlan = completedDays.reduce((sum, d) => sum + d.word_ids.length, 0);
  const totalKanjiInPlan = days.reduce((sum, d) => sum + d.kanji_ids.length, 0);
  const learnedKanjiInPlan = completedDays.reduce((sum, d) => sum + d.kanji_ids.length, 0);

  const hasVocabTab = !!plan?.scope.includes("vocab") && totalWordsInPlan > 0;
  const hasKanjiTab = !!plan?.scope.includes("kanji") && totalKanjiInPlan > 0;

  // Cảnh báo tiến độ: ngày thực tế đã trôi qua kể từ started_at so với số ngày ĐÃ HOÀN THÀNH.
  const daysElapsed = plan ? Math.floor((now - new Date(plan.started_at).getTime()) / 86400000) + 1 : 0;
  const expectedCompletedByNow = plan ? Math.min(Math.max(daysElapsed - 1, 0), plan.total_days) : 0;
  const paceDiff = completedDays.length - expectedCompletedByNow;

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

  if (loading) return <p className="text-sm text-muted">Đang tải...</p>;

  if (!plan) {
    return (
      <p className="text-sm text-muted">
        Bạn chưa có lộ trình học. Chuyển sang tab &quot;Chọn lộ trình mới&quot; để bắt đầu.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        <SubTabButton active={subTab === "overview"} onClick={() => setSubTab("overview")}>
          Tổng quan
        </SubTabButton>
        {hasVocabTab && (
          <SubTabButton active={subTab === "vocab"} onClick={() => setSubTab("vocab")}>
            Từ vựng
          </SubTabButton>
        )}
        {hasKanjiTab && (
          <SubTabButton active={subTab === "kanji"} onClick={() => setSubTab("kanji")}>
            Kanji
          </SubTabButton>
        )}
      </div>

      {subTab === "overview" && (
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-background px-4 py-3">
            <p className="text-sm font-semibold text-foreground">
              {plan.jlpt_level} · {completedDays.length}/{plan.total_days} ngày đã xong · còn{" "}
              {plan.total_days - completedDays.length} ngày
            </p>
            <p
              className={`mt-1.5 text-xs font-medium ${
                paceDiff < 0 ? "text-amber-700" : paceDiff > 0 ? "text-emerald-700" : "text-muted"
              }`}
            >
              {paceDiff < 0
                ? `⚠️ Đang chậm tiến độ ${-paceDiff} ngày so với kế hoạch.`
                : paceDiff > 0
                  ? `🚀 Đang vượt tiến độ ${paceDiff} ngày, tuyệt vời!`
                  : "✅ Đúng tiến độ."}
            </p>
          </div>

          {!todayDay ? (
            <p className="text-sm text-muted">
              🎉 Bạn đã hoàn thành toàn bộ lộ trình {plan.jlpt_level}! Sang tab &quot;Chọn lộ trình mới&quot; để tiếp tục
              với lộ trình khác.
            </p>
          ) : (
            <>
              <p className="text-xs font-semibold text-foreground">
                Hôm nay (ngày {todayDay.day_number}): {todayDay.word_ids.length} từ vựng · {todayDay.kanji_ids.length}{" "}
                kanji · {todayDay.grammar_ids.length} điểm ngữ pháp
              </p>
              <button
                type="button"
                onClick={() => void handleCompleteToday()}
                disabled={completing}
                className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition disabled:opacity-60"
              >
                {completing ? "Đang lưu..." : "Đã học xong"}
              </button>
            </>
          )}
        </div>
      )}

      {subTab === "vocab" && (
        <div className="flex flex-col gap-3">
          <ContentProgressCard label="Từ vựng trong lộ trình" learned={learnedWordsInPlan} total={totalWordsInPlan} />
          {todayWords.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold text-foreground">Từ vựng hôm nay ({todayWords.length})</p>
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
              </ul>
            </div>
          )}
        </div>
      )}

      {subTab === "kanji" && (
        <div className="flex flex-col gap-3">
          <ContentProgressCard label="Kanji trong lộ trình" learned={learnedKanjiInPlan} total={totalKanjiInPlan} />
          {todayKanji.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold text-foreground">Kanji hôm nay ({todayKanji.length})</p>
              <ul className="flex flex-col gap-2">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}

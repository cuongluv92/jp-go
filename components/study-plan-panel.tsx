"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getCached, setCached } from "@/lib/data/client-cache";
import { getKanjiByIds, type KanjiRow } from "@/lib/data/kanji-service";
import {
  archiveStudyPlan,
  completeStudyDay,
  countCompletedStudyDays,
  getStudyPlanDays,
  listActiveStudyPlans,
  renameStudyPlan,
  type StudyDayRow,
  type StudyPlanRow,
} from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { computePlanPace } from "@/lib/study-plan";

const CACHE_KEY = "study-plan-panel-data";

interface CachedData {
  userId: string | null;
  plans: StudyPlanRow[];
  selectedPlanId: string | null;
  days: StudyDayRow[];
  todayKanji: KanjiRow[];
  completedCounts: Record<string, number>;
}

type SubTab = "overview" | "vocab" | "kanji";

function planDisplayName(plan: StudyPlanRow): string {
  return plan.name && plan.name.trim().length > 0 ? plan.name : `Lộ trình ${plan.jlpt_level}`;
}

const SCOPE_LABELS: Record<string, string> = { vocab: "Từ vựng", kanji: "Kanji", grammar: "Ngữ pháp" };

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
    <div className="rounded-2xl border border-border bg-surface px-4 py-3.5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-foreground">{label}</p>
        <p className="text-xs font-medium text-muted">
          {learned}/{total} · {percent}%
        </p>
      </div>
      <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-gradient-accent transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

/** Chip chọn lộ trình khi có nhiều lộ trình đang chạy song song (VD Kanji N5 + Từ vựng N3). */
function PlanSwitcherChip({
  plan,
  active,
  progressPercent,
  onClick,
}: {
  plan: StudyPlanRow;
  active: boolean;
  progressPercent: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 flex-col gap-1 rounded-2xl border px-3.5 py-2.5 text-left transition ${
        active ? "border-accent bg-accent-soft shadow-sm" : "border-border bg-surface"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${active ? "bg-accent text-accent-foreground" : "bg-slate-100 text-muted"}`}>
          {plan.jlpt_level}
        </span>
        <span className={`max-w-[9rem] truncate text-xs font-semibold ${active ? "text-accent" : "text-foreground"}`}>
          {planDisplayName(plan)}
        </span>
      </div>
      <span className="text-[10px] text-muted">{progressPercent}% hoàn thành</span>
    </button>
  );
}

/**
 * Nội dung tab "Học tiếp" ở trang /plan. Người dùng có thể chạy NHIỀU lộ
 * trình song song (VD Kanji N5 + Từ vựng N3 cùng lúc, hoặc 2 lộ trình
 * giống hệt nhau) — chip chuyển đổi lộ trình chỉ hiện khi có từ 2 lộ trình
 * trở lên. Mỗi lộ trình có 2-3 tab con (Tổng quan/Từ vựng/Kanji, chỉ hiện
 * tab nào lộ trình thực sự có) để tách riêng từng loại nội dung. Tổng quan
 * có cảnh báo tiến độ: so ngày thực tế đã trôi qua kể từ lúc bắt đầu với
 * số ngày đã hoàn thành để biết đang chậm/đúng/vượt tiến độ, và cho phép
 * đổi tên hoặc dừng lộ trình ngay tại chỗ.
 */
export function StudyPlanPanel() {
  const { words } = useVocabulary();
  const [now] = useState(() => Date.now());
  const cached = getCached<CachedData>(CACHE_KEY);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [plans, setPlans] = useState<StudyPlanRow[]>(cached?.plans ?? []);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(cached?.selectedPlanId ?? null);
  const [days, setDays] = useState<StudyDayRow[]>(cached?.days ?? []);
  const [todayKanji, setTodayKanji] = useState<KanjiRow[]>(cached?.todayKanji ?? []);
  const [completedCounts, setCompletedCounts] = useState<Record<string, number>>(cached?.completedCounts ?? {});
  const [loading, setLoading] = useState(!cached);
  const [switching, setSwitching] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [subTab, setSubTab] = useState<SubTab>("overview");
  const [renaming, setRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState("");
  const [archiving, setArchiving] = useState(false);

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
          setCached<CachedData>(CACHE_KEY, {
            userId: null,
            plans: [],
            selectedPlanId: null,
            days: [],
            todayKanji: [],
            completedCounts: {},
          });
        }
        return;
      }
      setUserId(user.id);
      const nextPlans = await listActiveStudyPlans(supabase, user.id);
      if (cancelled) return;
      const stillValid = nextPlans.find((p) => p.id === selectedPlanId);
      const targetPlan = stillValid ?? nextPlans[0] ?? null;
      const otherPlans = nextPlans.filter((p) => p.id !== targetPlan?.id);
      const [nextDays, otherCounts] = await Promise.all([
        targetPlan ? getStudyPlanDays(supabase, targetPlan.id) : Promise.resolve([] as StudyDayRow[]),
        Promise.all(otherPlans.map((p) => countCompletedStudyDays(supabase, p.id))),
      ]);
      if (cancelled) return;
      const todayDay = nextDays.find((d) => d.completed_at === null) ?? null;
      const nextTodayKanji = await loadTodayKanji(supabase, todayDay?.kanji_ids ?? []);
      if (cancelled) return;
      const nextCounts: Record<string, number> = {};
      otherPlans.forEach((p, i) => {
        nextCounts[p.id] = otherCounts[i];
      });
      if (targetPlan) nextCounts[targetPlan.id] = nextDays.filter((d) => d.completed_at !== null).length;
      setPlans(nextPlans);
      setSelectedPlanId(targetPlan?.id ?? null);
      setDays(nextDays);
      setTodayKanji(nextTodayKanji);
      setCompletedCounts(nextCounts);
      setLoading(false);
      setCached<CachedData>(CACHE_KEY, {
        userId: user.id,
        plans: nextPlans,
        selectedPlanId: targetPlan?.id ?? null,
        days: nextDays,
        todayKanji: nextTodayKanji,
        completedCounts: nextCounts,
      });
    }

    void load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const plan = plans.find((p) => p.id === selectedPlanId) ?? null;

  async function switchPlan(planId: string) {
    if (planId === selectedPlanId || !userId) return;
    setSwitching(true);
    setSubTab("overview");
    const supabase = createClient();
    const nextDays = await getStudyPlanDays(supabase, planId);
    const todayDay = nextDays.find((d) => d.completed_at === null) ?? null;
    const nextTodayKanji = await loadTodayKanji(supabase, todayDay?.kanji_ids ?? []);
    const nextCounts = { ...completedCounts, [planId]: nextDays.filter((d) => d.completed_at !== null).length };
    setSelectedPlanId(planId);
    setDays(nextDays);
    setTodayKanji(nextTodayKanji);
    setCompletedCounts(nextCounts);
    setSwitching(false);
    setCached<CachedData>(CACHE_KEY, {
      userId,
      plans,
      selectedPlanId: planId,
      days: nextDays,
      todayKanji: nextTodayKanji,
      completedCounts: nextCounts,
    });
  }

  const todayDay = days.find((d) => d.completed_at === null) ?? null;
  const completedDays = days.filter((d) => d.completed_at !== null);
  const todayWords = todayDay ? todayDay.word_ids.map((id) => words.find((w) => w.id === id)).filter(Boolean) : [];

  const totalWordsInPlan = days.reduce((sum, d) => sum + d.word_ids.length, 0);
  const learnedWordsInPlan = completedDays.reduce((sum, d) => sum + d.word_ids.length, 0);
  const totalKanjiInPlan = days.reduce((sum, d) => sum + d.kanji_ids.length, 0);
  const learnedKanjiInPlan = completedDays.reduce((sum, d) => sum + d.kanji_ids.length, 0);

  const hasVocabTab = !!plan?.scope.includes("vocab") && totalWordsInPlan > 0;
  const hasKanjiTab = !!plan?.scope.includes("kanji") && totalKanjiInPlan > 0;

  const planProgressPercent = plan && plan.total_days > 0 ? Math.round((completedDays.length / plan.total_days) * 100) : 0;

  const paceDiff = plan ? computePlanPace(plan.started_at, plan.total_days, completedDays.length, now).paceDiff : 0;

  function progressPercentFor(p: StudyPlanRow): number {
    if (p.total_days <= 0) return 0;
    const completed = p.id === plan?.id ? completedDays.length : (completedCounts[p.id] ?? 0);
    return Math.round((completed / p.total_days) * 100);
  }

  async function handleCompleteToday() {
    if (!userId || !todayDay || !plan) return;
    setCompleting(true);
    const supabase = createClient();
    await completeStudyDay(supabase, userId, todayDay);
    const nextDays = await getStudyPlanDays(supabase, plan.id);
    const nextTodayDay = nextDays.find((d) => d.completed_at === null) ?? null;
    const nextTodayKanji = await loadTodayKanji(supabase, nextTodayDay?.kanji_ids ?? []);
    const nextCounts = { ...completedCounts, [plan.id]: nextDays.filter((d) => d.completed_at !== null).length };
    setDays(nextDays);
    setTodayKanji(nextTodayKanji);
    setCompletedCounts(nextCounts);
    setCompleting(false);
    setCached<CachedData>(CACHE_KEY, {
      userId,
      plans,
      selectedPlanId: plan.id,
      days: nextDays,
      todayKanji: nextTodayKanji,
      completedCounts: nextCounts,
    });
  }

  function startRename() {
    if (!plan) return;
    setRenameValue(plan.name ?? "");
    setRenaming(true);
  }

  async function handleSaveRename() {
    if (!plan) return;
    const supabase = createClient();
    await renameStudyPlan(supabase, plan.id, renameValue);
    const nextName = renameValue.trim().length > 0 ? renameValue.trim() : null;
    const nextPlans = plans.map((p) => (p.id === plan.id ? { ...p, name: nextName } : p));
    setPlans(nextPlans);
    setRenaming(false);
    setCached<CachedData>(CACHE_KEY, { userId, plans: nextPlans, selectedPlanId, days, todayKanji, completedCounts });
  }

  async function handleArchive() {
    if (!plan || !userId) return;
    const ok = window.confirm(`Dừng lộ trình "${planDisplayName(plan)}"? Bạn có thể tạo lộ trình mới bất cứ lúc nào.`);
    if (!ok) return;
    setArchiving(true);
    const supabase = createClient();
    await archiveStudyPlan(supabase, plan.id);
    const remainingPlans = plans.filter((p) => p.id !== plan.id);
    const nextPlan = remainingPlans[0] ?? null;
    const nextDays = nextPlan ? await getStudyPlanDays(supabase, nextPlan.id) : [];
    const nextTodayDay = nextDays.find((d) => d.completed_at === null) ?? null;
    const nextTodayKanji = await loadTodayKanji(supabase, nextTodayDay?.kanji_ids ?? []);
    const nextCounts = { ...completedCounts };
    delete nextCounts[plan.id];
    if (nextPlan) nextCounts[nextPlan.id] = nextDays.filter((d) => d.completed_at !== null).length;
    setPlans(remainingPlans);
    setSelectedPlanId(nextPlan?.id ?? null);
    setDays(nextDays);
    setTodayKanji(nextTodayKanji);
    setCompletedCounts(nextCounts);
    setArchiving(false);
    setCached<CachedData>(CACHE_KEY, {
      userId,
      plans: remainingPlans,
      selectedPlanId: nextPlan?.id ?? null,
      days: nextDays,
      todayKanji: nextTodayKanji,
      completedCounts: nextCounts,
    });
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
      {plans.length > 1 && (
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {plans.map((p) => (
            <PlanSwitcherChip
              key={p.id}
              plan={p}
              active={p.id === selectedPlanId}
              progressPercent={progressPercentFor(p)}
              onClick={() => void switchPlan(p.id)}
            />
          ))}
        </div>
      )}

      <div className="bg-gradient-accent rounded-2xl px-4 py-4 text-accent-foreground shadow-lg shadow-accent/20">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            {renaming ? (
              <div className="flex items-center gap-1.5">
                <input
                  autoFocus
                  type="text"
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  placeholder={`Lộ trình ${plan.jlpt_level}`}
                  maxLength={80}
                  className="min-w-0 flex-1 rounded-lg border border-white/30 bg-white/10 px-2 py-1 text-sm font-bold text-white placeholder:text-white/50 outline-none focus:border-white/60"
                />
                <button
                  type="button"
                  onClick={() => void handleSaveRename()}
                  className="shrink-0 rounded-lg bg-white/20 px-2 py-1 text-xs font-semibold"
                >
                  Lưu
                </button>
                <button type="button" onClick={() => setRenaming(false)} className="shrink-0 text-xs text-white/70">
                  Huỷ
                </button>
              </div>
            ) : (
              <button type="button" onClick={startRename} className="group flex items-center gap-1.5 text-left">
                <h2 className="truncate text-base font-bold">{planDisplayName(plan)}</h2>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 shrink-0 opacity-60 group-hover:opacity-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </button>
            )}
            <p className="mt-1 text-xs text-white/80">
              {plan.jlpt_level} · {plan.scope.map((s) => SCOPE_LABELS[s] ?? s).join(", ")} · {plan.duration_months} tháng
            </p>
          </div>
          <button
            type="button"
            onClick={() => void handleArchive()}
            disabled={archiving}
            className="shrink-0 rounded-lg bg-white/10 px-2 py-1 text-[11px] font-medium text-white/80 transition hover:bg-white/20 disabled:opacity-50"
          >
            Dừng
          </button>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span>
              {completedDays.length}/{plan.total_days} ngày đã xong
            </span>
            <span>{planProgressPercent}%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-white transition-all" style={{ width: `${planProgressPercent}%` }} />
          </div>
        </div>

        <p
          className={`mt-2.5 inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium ${
            paceDiff < 0 ? "bg-amber-400/20 text-amber-100" : paceDiff > 0 ? "bg-emerald-400/20 text-emerald-100" : "bg-white/10 text-white/90"
          }`}
        >
          {paceDiff < 0
            ? `⚠️ Đang chậm tiến độ ${-paceDiff} ngày so với kế hoạch.`
            : paceDiff > 0
              ? `🚀 Đang vượt tiến độ ${paceDiff} ngày, tuyệt vời!`
              : "✅ Đúng tiến độ."}
        </p>
      </div>

      {switching ? (
        <p className="text-sm text-muted">Đang tải lộ trình...</p>
      ) : (
        <>
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
              {!todayDay ? (
                <p className="rounded-2xl border border-dashed border-border bg-surface px-4 py-6 text-center text-sm text-muted">
                  🎉 Bạn đã hoàn thành toàn bộ lộ trình {plan.jlpt_level}! Sang tab &quot;Chọn lộ trình mới&quot; để tiếp tục
                  với lộ trình khác.
                </p>
              ) : (
                <div className="rounded-2xl border border-border bg-surface px-4 py-3.5 shadow-sm">
                  <p className="text-xs font-semibold text-foreground">
                    Hôm nay (ngày {todayDay.day_number}): {todayDay.word_ids.length} từ vựng · {todayDay.kanji_ids.length}{" "}
                    kanji · {todayDay.grammar_ids.length} điểm ngữ pháp
                  </p>
                  <button
                    type="button"
                    onClick={() => void handleCompleteToday()}
                    disabled={completing}
                    className="mt-3 w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition disabled:opacity-60"
                  >
                    {completing ? "Đang lưu..." : "Đã học xong"}
                  </button>
                </div>
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
                          className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 shadow-sm transition active:scale-[0.99]"
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
                          className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 shadow-sm transition active:scale-[0.99]"
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
        </>
      )}
    </div>
  );
}

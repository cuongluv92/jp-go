"use client";

import { useEffect, useState } from "react";

import { CustomReviewPicker } from "@/components/custom-review-picker";
import { GrammarReviewSession } from "@/components/grammar-review-session";
import { KanjiReviewSession } from "@/components/kanji-review-session";
import { ReviewFlashcardExercise } from "@/components/review-flashcard-exercise";
import { ReviewMatchingExercise } from "@/components/review-matching-exercise";
import { ReviewTypingExercise } from "@/components/review-typing-exercise";
import { SegmentedTabs } from "@/components/segmented-tabs";
import { getCached, setCached } from "@/lib/data/client-cache";
import { getDueGrammarForReview, type DueGrammarRow } from "@/lib/data/grammar-service";
import { getDueKanjiForReview, type DueKanjiRow } from "@/lib/data/kanji-service";
import { completeReviewSchedules, getDueReviewSchedules, type ReviewScheduleRow } from "@/lib/data/review-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import type { VocabWord } from "@/lib/types";

type ExerciseMode = "flashcard" | "typing" | "matching";
type Tab = "due" | "custom";

const REVIEW_CACHE_KEY = "review-page-data";

interface ReviewCachedData {
  userId: string | null;
  schedules: ReviewScheduleRow[];
  dueKanji: DueKanjiRow[];
  dueGrammar: DueGrammarRow[];
}

export default function ReviewPage() {
  const { words } = useVocabulary();
  const cached = getCached<ReviewCachedData>(REVIEW_CACHE_KEY);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [schedules, setSchedules] = useState<ReviewScheduleRow[]>(cached?.schedules ?? []);
  const [dueKanji, setDueKanji] = useState<DueKanjiRow[]>(cached?.dueKanji ?? []);
  const [dueGrammar, setDueGrammar] = useState<DueGrammarRow[]>(cached?.dueGrammar ?? []);
  const [selected, setSelected] = useState<Set<string>>(new Set((cached?.schedules ?? []).map((s) => s.id)));
  const [selectedKanji, setSelectedKanji] = useState<Set<string>>(new Set((cached?.dueKanji ?? []).map((k) => k.kanji_id)));
  const [selectedGrammar, setSelectedGrammar] = useState<Set<string>>(new Set((cached?.dueGrammar ?? []).map((g) => g.grammar_id)));
  const [loading, setLoading] = useState(!cached);
  const [mode, setMode] = useState<ExerciseMode | null>(null);
  const [kanjiSessionIds, setKanjiSessionIds] = useState<string[] | null>(null);
  const [grammarSessionIds, setGrammarSessionIds] = useState<string[] | null>(null);
  const [tab, setTab] = useState<Tab>("due");
  const [customWords, setCustomWords] = useState<VocabWord[] | null>(null);
  const [customMode, setCustomMode] = useState<ExerciseMode | null>(null);
  const [customKanjiIds, setCustomKanjiIds] = useState<string[] | null>(null);
  const [customGrammarIds, setCustomGrammarIds] = useState<string[] | null>(null);

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
          setCached<ReviewCachedData>(REVIEW_CACHE_KEY, { userId: null, schedules: [], dueKanji: [], dueGrammar: [] });
        }
        return;
      }
      setUserId(user.id);
      const [due, dueK, dueG] = await Promise.all([
        getDueReviewSchedules(supabase, user.id),
        getDueKanjiForReview(supabase, user.id),
        getDueGrammarForReview(supabase, user.id),
      ]);
      if (cancelled) return;
      setSchedules(due);
      setSelected(new Set(due.map((s) => s.id)));
      setDueKanji(dueK);
      setSelectedKanji(new Set(dueK.map((k) => k.kanji_id)));
      setDueGrammar(dueG);
      setSelectedGrammar(new Set(dueG.map((g) => g.grammar_id)));
      setLoading(false);
      setCached<ReviewCachedData>(REVIEW_CACHE_KEY, { userId: user.id, schedules: due, dueKanji: dueK, dueGrammar: dueG });
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  function toggleSelected(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAll() {
    setSelected((prev) => (prev.size === schedules.length ? new Set() : new Set(schedules.map((s) => s.id))));
  }

  function toggleSelectedKanji(id: string) {
    setSelectedKanji((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAllKanji() {
    setSelectedKanji((prev) => (prev.size === dueKanji.length ? new Set() : new Set(dueKanji.map((k) => k.kanji_id))));
  }

  function toggleSelectedGrammar(id: string) {
    setSelectedGrammar((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAllGrammar() {
    setSelectedGrammar((prev) => (prev.size === dueGrammar.length ? new Set() : new Set(dueGrammar.map((g) => g.grammar_id))));
  }

  const selectedWordIds = Array.from(
    new Set(
      schedules
        .filter((s) => selected.has(s.id))
        .flatMap((s) => s.study_day?.word_ids ?? []),
    ),
  );
  const sessionWords: VocabWord[] = selectedWordIds
    .map((id) => words.find((w) => w.id === id))
    .filter((w): w is VocabWord => Boolean(w) && !w!.isHidden);

  async function refreshDue(nextUserId: string) {
    const supabase = createClient();
    setLoading(true);
    const [due, dueK, dueG] = await Promise.all([
      getDueReviewSchedules(supabase, nextUserId),
      getDueKanjiForReview(supabase, nextUserId),
      getDueGrammarForReview(supabase, nextUserId),
    ]);
    setSchedules(due);
    setSelected(new Set(due.map((s) => s.id)));
    setDueKanji(dueK);
    setSelectedKanji(new Set(dueK.map((k) => k.kanji_id)));
    setDueGrammar(dueG);
    setSelectedGrammar(new Set(dueG.map((g) => g.grammar_id)));
    setLoading(false);
    setCached<ReviewCachedData>(REVIEW_CACHE_KEY, { userId: nextUserId, schedules: due, dueKanji: dueK, dueGrammar: dueG });
  }

  async function handleExerciseComplete() {
    const supabase = createClient();
    await completeReviewSchedules(supabase, Array.from(selected));
    setMode(null);
    if (userId) await refreshDue(userId);
  }

  async function handleKanjiSessionComplete() {
    setKanjiSessionIds(null);
    if (userId) await refreshDue(userId);
  }

  async function handleGrammarSessionComplete() {
    setGrammarSessionIds(null);
    if (userId) await refreshDue(userId);
  }

  // ---- Phiên đang chạy (ưu tiên hiển thị trước mọi thứ khác) ----

  if (kanjiSessionIds && userId) {
    return <KanjiReviewSession userId={userId} kanjiIds={kanjiSessionIds} onComplete={() => void handleKanjiSessionComplete()} />;
  }

  if (grammarSessionIds && userId) {
    return <GrammarReviewSession userId={userId} grammarIds={grammarSessionIds} onComplete={() => void handleGrammarSessionComplete()} />;
  }

  if (mode && sessionWords.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        <button type="button" onClick={() => setMode(null)} className="self-start text-xs text-muted">
          ← Quay lại
        </button>
        {mode === "flashcard" && <ReviewFlashcardExercise words={sessionWords} onComplete={handleExerciseComplete} />}
        {mode === "typing" && <ReviewTypingExercise words={sessionWords} onComplete={handleExerciseComplete} />}
        {mode === "matching" && <ReviewMatchingExercise words={sessionWords} onComplete={handleExerciseComplete} />}
      </div>
    );
  }

  if (customMode && customWords && customWords.length > 0) {
    const finishCustom = () => {
      setCustomMode(null);
      setCustomWords(null);
    };
    return (
      <div className="flex flex-col gap-4">
        <button type="button" onClick={finishCustom} className="self-start text-xs text-muted">
          ← Quay lại
        </button>
        {customMode === "flashcard" && <ReviewFlashcardExercise words={customWords} onComplete={finishCustom} />}
        {customMode === "typing" && <ReviewTypingExercise words={customWords} onComplete={finishCustom} />}
        {customMode === "matching" && <ReviewMatchingExercise words={customWords} onComplete={finishCustom} />}
      </div>
    );
  }

  if (customKanjiIds && userId) {
    return <KanjiReviewSession userId={userId} kanjiIds={customKanjiIds} onComplete={() => setCustomKanjiIds(null)} />;
  }

  if (customGrammarIds && userId) {
    return <GrammarReviewSession userId={userId} grammarIds={customGrammarIds} onComplete={() => setCustomGrammarIds(null)} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold">Ôn tập</h1>
        <p className="mt-1 text-sm text-muted">
          Lịch ôn 1-5-15: học/nhớ đúng ngày nào thì 5 ngày sau và 15 ngày sau tự sinh lịch ôn lại. Hoặc tự chọn ôn riêng
          bất cứ lúc nào, không cần chờ đến hạn.
        </p>
      </div>

      <SegmentedTabs
        value={tab}
        onChange={setTab}
        options={[
          { value: "due", label: "Đến hạn" },
          { value: "custom", label: "Tự chọn ôn tập" },
        ]}
      />

      {tab === "due" ? (
        loading ? (
          <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>
        ) : schedules.length === 0 && dueKanji.length === 0 && dueGrammar.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
            Không có lịch ôn nào đến hạn. Tiếp tục học để tạo lịch ôn mới, hoặc sang tab &quot;Tự chọn ôn tập&quot; để ôn
            bất cứ lúc nào.
          </p>
        ) : (
          <>
            {schedules.length > 0 && (
              <section>
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-foreground">Từ vựng ({schedules.length} lịch đến hạn)</h2>
                  <button type="button" onClick={toggleSelectAll} className="text-xs font-medium text-accent">
                    {selected.size === schedules.length ? "Bỏ chọn tất cả" : "Chọn tất cả"}
                  </button>
                </div>
                <ul className="flex flex-col gap-2">
                  {schedules.map((s) => {
                    const planLabel = s.study_day?.plan
                      ? (s.study_day.plan.name?.trim() || `Lộ trình ${s.study_day.plan.jlpt_level}`)
                      : null;
                    return (
                      <li key={s.id}>
                        <label className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-sm">
                          <input type="checkbox" checked={selected.has(s.id)} onChange={() => toggleSelected(s.id)} />
                          <span className="flex-1 text-sm">
                            {planLabel && <span className="mr-1.5 rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-bold text-accent">{planLabel}</span>}
                            Ngày {s.study_day?.day_number ?? "?"} · ôn lại sau {s.stage} ngày
                          </span>
                          <span className="text-xs text-muted">{s.study_day?.word_ids.length ?? 0} từ</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-3 grid grid-cols-1 gap-2">
                  <button
                    type="button"
                    disabled={sessionWords.length === 0}
                    onClick={() => setMode("flashcard")}
                    className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
                  >
                    Lật thẻ ({sessionWords.length} từ)
                  </button>
                  <button
                    type="button"
                    disabled={sessionWords.length === 0}
                    onClick={() => setMode("typing")}
                    className="rounded-xl border border-accent px-4 py-3 text-sm font-semibold text-accent disabled:opacity-50"
                  >
                    Nghĩ trước rồi viết tiếng Nhật
                  </button>
                  <button
                    type="button"
                    disabled={sessionWords.length === 0}
                    onClick={() => setMode("matching")}
                    className="rounded-xl border border-accent px-4 py-3 text-sm font-semibold text-accent disabled:opacity-50"
                  >
                    Nối từ – nghĩa
                  </button>
                </div>
              </section>
            )}

            {dueKanji.length > 0 && (
              <section>
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-foreground">Kanji ({dueKanji.length} kanji đến hạn)</h2>
                  <button type="button" onClick={toggleSelectAllKanji} className="text-xs font-medium text-accent">
                    {selectedKanji.size === dueKanji.length ? "Bỏ chọn tất cả" : "Chọn tất cả"}
                  </button>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {dueKanji.map((k) => (
                    <li key={k.kanji_id}>
                      <label
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm ${
                          selectedKanji.has(k.kanji_id) ? "border-accent bg-accent-soft" : "border-border bg-surface"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedKanji.has(k.kanji_id)}
                          onChange={() => toggleSelectedKanji(k.kanji_id)}
                        />
                        <span className="font-jp text-base font-semibold">{k.kanji_character}</span>
                        <span className="text-xs text-muted">{k.han_viet}</span>
                      </label>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled={selectedKanji.size === 0}
                  onClick={() => setKanjiSessionIds(Array.from(selectedKanji))}
                  className="mt-3 w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
                >
                  Ôn {selectedKanji.size} kanji đã chọn
                </button>
              </section>
            )}

            {dueGrammar.length > 0 && (
              <section>
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-foreground">Ngữ pháp ({dueGrammar.length} mẫu đến hạn)</h2>
                  <button type="button" onClick={toggleSelectAllGrammar} className="text-xs font-medium text-accent">
                    {selectedGrammar.size === dueGrammar.length ? "Bỏ chọn tất cả" : "Chọn tất cả"}
                  </button>
                </div>
                <ul className="flex flex-col gap-2">
                  {dueGrammar.map((g) => (
                    <li key={g.grammar_id}>
                      <label
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 shadow-sm ${
                          selectedGrammar.has(g.grammar_id) ? "border-accent bg-accent-soft" : "border-border bg-surface"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedGrammar.has(g.grammar_id)}
                          onChange={() => toggleSelectedGrammar(g.grammar_id)}
                        />
                        <span className="flex-1">
                          <span className="font-jp block text-sm font-semibold">{g.grammar_pattern}</span>
                          <span className="block text-xs text-muted">{g.meaning_vi}</span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled={selectedGrammar.size === 0}
                  onClick={() => setGrammarSessionIds(Array.from(selectedGrammar))}
                  className="mt-3 w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
                >
                  Ôn {selectedGrammar.size} mẫu ngữ pháp đã chọn
                </button>
              </section>
            )}
          </>
        )
      ) : (
        <CustomReviewPicker
          onStartVocab={(selectedWords, exerciseMode) => {
            setCustomWords(selectedWords);
            setCustomMode(exerciseMode);
          }}
          onStartKanji={setCustomKanjiIds}
          onStartGrammar={setCustomGrammarIds}
        />
      )}
    </div>
  );
}

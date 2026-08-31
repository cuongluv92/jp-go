"use client";

import { useEffect, useState } from "react";

import { ReviewFlashcardExercise } from "@/components/review-flashcard-exercise";
import { ReviewMatchingExercise } from "@/components/review-matching-exercise";
import { ReviewTypingExercise } from "@/components/review-typing-exercise";
import { getCached, setCached } from "@/lib/data/client-cache";
import { completeReviewSchedules, getDueReviewSchedules, type ReviewScheduleRow } from "@/lib/data/review-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import type { VocabWord } from "@/lib/types";

type ExerciseMode = "flashcard" | "typing" | "matching";

const REVIEW_CACHE_KEY = "review-page-data";

interface ReviewCachedData {
  userId: string | null;
  schedules: ReviewScheduleRow[];
}

export default function ReviewPage() {
  const { words } = useVocabulary();
  const cached = getCached<ReviewCachedData>(REVIEW_CACHE_KEY);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [schedules, setSchedules] = useState<ReviewScheduleRow[]>(cached?.schedules ?? []);
  const [selected, setSelected] = useState<Set<string>>(new Set((cached?.schedules ?? []).map((s) => s.id)));
  const [loading, setLoading] = useState(!cached);
  const [mode, setMode] = useState<ExerciseMode | null>(null);

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
          setCached<ReviewCachedData>(REVIEW_CACHE_KEY, { userId: null, schedules: [] });
        }
        return;
      }
      setUserId(user.id);
      const due = await getDueReviewSchedules(supabase, user.id);
      if (cancelled) return;
      setSchedules(due);
      setSelected(new Set(due.map((s) => s.id)));
      setLoading(false);
      setCached<ReviewCachedData>(REVIEW_CACHE_KEY, { userId: user.id, schedules: due });
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

  async function handleExerciseComplete() {
    const supabase = createClient();
    await completeReviewSchedules(supabase, Array.from(selected));
    setMode(null);
    if (!userId) return;
    setLoading(true);
    const due = await getDueReviewSchedules(supabase, userId);
    setSchedules(due);
    setSelected(new Set(due.map((s) => s.id)));
    setLoading(false);
    setCached<ReviewCachedData>(REVIEW_CACHE_KEY, { userId, schedules: due });
  }

  if (mode && sessionWords.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        <button type="button" onClick={() => setMode(null)} className="self-start text-xs text-muted">
          ← Quay lại chọn lịch ôn
        </button>
        {mode === "flashcard" && <ReviewFlashcardExercise words={sessionWords} onComplete={handleExerciseComplete} />}
        {mode === "typing" && <ReviewTypingExercise words={sessionWords} onComplete={handleExerciseComplete} />}
        {mode === "matching" && <ReviewMatchingExercise words={sessionWords} onComplete={handleExerciseComplete} />}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold">Ôn tập</h1>
        <p className="mt-1 text-sm text-muted">
          Lịch ôn 1-5-15: học ngày nào thì 5 ngày sau và 15 ngày sau tự sinh lịch ôn lại đúng nội dung ngày đó.
        </p>
      </div>

      {loading ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>
      ) : schedules.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
          Không có lịch ôn nào đến hạn. Tiếp tục học để tạo lịch ôn mới nhé!
        </p>
      ) : (
        <>
          <section>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Chọn lịch ôn ({schedules.length} lịch đến hạn)</h2>
              <button type="button" onClick={toggleSelectAll} className="text-xs font-medium text-accent">
                {selected.size === schedules.length ? "Bỏ chọn tất cả" : "Chọn tất cả"}
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {schedules.map((s) => (
                <li key={s.id}>
                  <label className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
                    <input type="checkbox" checked={selected.has(s.id)} onChange={() => toggleSelected(s.id)} />
                    <span className="flex-1 text-sm">
                      Ngày {s.study_day?.day_number ?? "?"} · ôn lại sau {s.stage} ngày
                    </span>
                    <span className="text-xs text-muted">{s.study_day?.word_ids.length ?? 0} từ</span>
                  </label>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-sm font-semibold text-foreground">
              Chọn kiểu bài ({sessionWords.length} từ đã chọn)
            </h2>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                disabled={sessionWords.length === 0}
                onClick={() => setMode("flashcard")}
                className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
              >
                Lật thẻ
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
        </>
      )}
    </div>
  );
}

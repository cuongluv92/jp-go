"use client";

import { useEffect, useState } from "react";

import { KanjiQuizRunner, type KanjiQuizResult } from "@/components/kanji-quiz-runner";
import { gradeKanjiReview, getQuestionsForKanjiIds, type KanjiQuestionRow } from "@/lib/data/kanji-service";
import { createClient } from "@/lib/supabase/client";

/**
 * Phiên ôn tập gộp nhiều kanji cùng lúc (dùng cho cả "Kanji đến hạn" và
 * "Tự chọn ôn tập Kanji" ở trang Ôn tập). Trộn câu hỏi của tất cả kanji đã
 * chọn thành 1 bài trắc nghiệm liên tục, sau đó chấm SRS 1-5-15 riêng cho
 * TỪNG kanji dựa trên tỉ lệ đúng/sai của đúng những câu thuộc kanji đó
 * (không phải tính chung 1 điểm cho cả phiên).
 */
export function KanjiReviewSession({
  userId,
  kanjiIds,
  onComplete,
}: {
  userId: string;
  kanjiIds: string[];
  onComplete: () => void;
}) {
  const [questions, setQuestions] = useState<KanjiQuestionRow[] | null>(null);
  const [summary, setSummary] = useState<{ correct: number; total: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const rows = await getQuestionsForKanjiIds(supabase, kanjiIds);
      if (!cancelled) setQuestions(rows);
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [kanjiIds]);

  async function handleFinish(correct: number, total: number, results: KanjiQuizResult[]) {
    setSummary({ correct, total });

    const byKanji = new Map<string, KanjiQuizResult[]>();
    for (const r of results) {
      const list = byKanji.get(r.kanjiId) ?? [];
      list.push(r);
      byKanji.set(r.kanjiId, list);
    }

    const supabase = createClient();
    await Promise.all(
      Array.from(byKanji.entries()).map(([kanjiId, kanjiResults]) => {
        const correctCount = kanjiResults.filter((r) => r.correct).length;
        const passed = correctCount > kanjiResults.length / 2;
        return gradeKanjiReview(supabase, userId, kanjiId, passed);
      }),
    );
  }

  if (summary) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <p className="text-4xl">✅</p>
        <p className="text-sm">
          Hoàn thành ôn tập {kanjiIds.length} kanji! Đúng {summary.correct}/{summary.total} câu.
        </p>
        <button type="button" onClick={onComplete} className="text-sm font-medium text-accent">
          ← Quay lại
        </button>
      </div>
    );
  }

  if (!questions) {
    return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>;
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <p className="text-sm text-muted">Các kanji đã chọn chưa có bài tập.</p>
        <button type="button" onClick={onComplete} className="text-sm font-medium text-accent">
          ← Quay lại
        </button>
      </div>
    );
  }

  return <KanjiQuizRunner questions={questions} onFinish={(c, t, r) => void handleFinish(c, t, r)} />;
}

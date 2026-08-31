"use client";

import { useEffect, useState } from "react";

import { GrammarQuizRunner, type GrammarQuizResult } from "@/components/grammar-quiz-runner";
import { gradeGrammarReview, getQuestionsForGrammarIds, type GrammarQuestionRow } from "@/lib/data/grammar-service";
import { createClient } from "@/lib/supabase/client";

/**
 * Phiên ôn tập gộp nhiều mẫu ngữ pháp cùng lúc (dùng cho cả "Ngữ pháp đến
 * hạn" và "Tự chọn ôn tập Ngữ pháp" ở trang Ôn tập) — cùng cơ chế
 * KanjiReviewSession: trộn câu hỏi thành 1 bài liên tục, chấm SRS 1-5-15
 * riêng cho TỪNG mẫu dựa trên tỉ lệ đúng/sai của đúng những câu thuộc mẫu đó.
 */
export function GrammarReviewSession({
  userId,
  grammarIds,
  onComplete,
}: {
  userId: string;
  grammarIds: string[];
  onComplete: () => void;
}) {
  const [questions, setQuestions] = useState<GrammarQuestionRow[] | null>(null);
  const [summary, setSummary] = useState<{ correct: number; total: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const rows = await getQuestionsForGrammarIds(supabase, grammarIds);
      if (!cancelled) setQuestions(rows);
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [grammarIds]);

  async function handleFinish(correct: number, total: number, results: GrammarQuizResult[]) {
    setSummary({ correct, total });

    const byGrammar = new Map<string, GrammarQuizResult[]>();
    for (const r of results) {
      const list = byGrammar.get(r.grammarId) ?? [];
      list.push(r);
      byGrammar.set(r.grammarId, list);
    }

    const supabase = createClient();
    await Promise.all(
      Array.from(byGrammar.entries()).map(([grammarId, grammarResults]) => {
        const correctCount = grammarResults.filter((r) => r.correct).length;
        const passed = correctCount > grammarResults.length / 2;
        return gradeGrammarReview(supabase, userId, grammarId, passed);
      }),
    );
  }

  if (summary) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <p className="text-4xl">✅</p>
        <p className="text-sm">
          Hoàn thành ôn tập {grammarIds.length} mẫu ngữ pháp! Đúng {summary.correct}/{summary.total} câu.
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
        <p className="text-sm text-muted">Các mẫu đã chọn chưa có bài tập.</p>
        <button type="button" onClick={onComplete} className="text-sm font-medium text-accent">
          ← Quay lại
        </button>
      </div>
    );
  }

  return <GrammarQuizRunner questions={questions} onFinish={(c, t, r) => void handleFinish(c, t, r)} />;
}

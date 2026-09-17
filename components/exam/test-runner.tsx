"use client";

import { useEffect, useMemo, useState } from "react";

import { ReferenceModal } from "./reference-modal";
import { getExamSourceImageUrl } from "@/lib/exam/storage";
import type { ExamQuestion, ExamTest } from "@/lib/exam/types";

interface TestState {
  currentIndex: number;
  answers: Record<string, string>;
  flagged: Record<string, boolean>;
}

function loadState(testId: string, questions: ExamQuestion[]): TestState {
  const flagged: Record<string, boolean> = {};
  for (const q of questions) flagged[q.id] = q.is_flagged_default;

  if (typeof window !== "undefined") {
    try {
      const raw = window.sessionStorage.getItem(`jp-go-exam-test-${testId}`);
      if (raw) return { currentIndex: 0, answers: {}, flagged, ...JSON.parse(raw) };
    } catch {
      // sessionStorage có thể bị chặn (chế độ ẩn danh) - bỏ qua, dùng state mặc định.
    }
  }
  return { currentIndex: 0, answers: {}, flagged };
}

function formatSeconds(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/**
 * Quản lý toàn bộ state của một lần làm đề: câu hiện tại, đáp án đã chọn,
 * câu đánh dấu, timer. Mở/đóng modal 参考資料 KHÔNG được reset gì trong số
 * này - modal chỉ là overlay điều khiển bằng 1 state cờ riêng
 * (`referenceQuestionId`), không unmount phần còn lại của component.
 */
export function TestRunner({ test, questions }: { test: ExamTest; questions: ExamQuestion[] }) {
  const [state, setState] = useState<TestState>(() => loadState(test.id, questions));
  const [referenceQuestionId, setReferenceQuestionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(`jp-go-exam-test-${test.id}`, JSON.stringify(state));
    } catch {
      // Bỏ qua nếu sessionStorage không dùng được - không ảnh hưởng việc làm bài.
    }
  }, [state, test.id]);

  const current = questions[state.currentIndex];
  const answeredCount = Object.keys(state.answers).length;

  const score = useMemo(() => {
    if (!submitted) return null;
    let correct = 0;
    for (const q of questions) {
      const chosen = state.answers[q.id];
      const correctChoice = q.choices.find((c) => c.is_correct);
      if (chosen && correctChoice && chosen === correctChoice.id) correct += 1;
    }
    return { correct, total: questions.length };
  }, [submitted, questions, state.answers]);

  if (!current) {
    return <p className="p-6 text-sm text-muted">Đề thi này chưa có câu hỏi.</p>;
  }

  const selectChoice = (choiceId: string) => {
    if (submitted) return;
    setState((s) => ({ ...s, answers: { ...s.answers, [current.id]: choiceId } }));
  };

  const toggleFlag = () => {
    setState((s) => ({ ...s, flagged: { ...s.flagged, [current.id]: !s.flagged[current.id] } }));
  };

  const goTo = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    setState((s) => ({ ...s, currentIndex: index }));
  };

  const referenceQuestion = referenceQuestionId ? questions.find((q) => q.id === referenceQuestionId) : null;

  return (
    <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-start lg:gap-6">
      <aside className="order-2 lg:order-1 lg:w-56 lg:shrink-0">
        <div className="rounded-2xl border border-border bg-surface p-3">
          <p className="mb-2 text-xs font-semibold uppercase text-muted">Danh sách câu hỏi</p>
          <div className="grid grid-cols-8 gap-1.5 lg:grid-cols-5">
            {questions.map((q, i) => {
              const isAnswered = Boolean(state.answers[q.id]);
              const isFlagged = state.flagged[q.id];
              const isCurrent = i === state.currentIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`relative flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition ${
                    isCurrent
                      ? "bg-accent text-accent-foreground"
                      : isAnswered
                        ? "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                        : "bg-slate-100 dark:bg-white/10 text-muted"
                  }`}
                >
                  {q.question_number}
                  {isFlagged && <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-500" />}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <div className="order-1 flex-1 lg:order-2">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-2.5">
          <span className="text-sm font-semibold">{test.title}</span>
          <span className="text-sm tabular-nums text-muted">⏱ {formatSeconds(elapsedSeconds)}</span>
        </div>

        {submitted && score && (
          <div className="mt-4 rounded-2xl border border-accent bg-accent/5 p-4 text-sm font-medium text-accent">
            Kết quả: {score.correct}/{score.total} câu đúng
          </div>
        )}

        <div className="mt-4 rounded-2xl border border-border bg-surface p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <p className="font-jp whitespace-pre-line text-base font-medium leading-relaxed">
              問{current.question_number}. {current.question_jp}
            </p>
            <button
              type="button"
              onClick={toggleFlag}
              aria-pressed={state.flagged[current.id]}
              className={`shrink-0 rounded-lg border px-2.5 py-1 text-xs font-medium ${
                state.flagged[current.id]
                  ? "border-amber-400 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400"
                  : "border-border text-muted"
              }`}
            >
              {state.flagged[current.id] ? "Đã đánh dấu" : "Đánh dấu"}
            </button>
          </div>

          {current.question_image_path && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getExamSourceImageUrl(current.question_image_path)}
              alt={`Hình câu ${current.question_number}`}
              className="mt-3 rounded-lg border border-border"
            />
          )}

          <div className="mt-4 flex flex-col gap-2">
            {current.choices.map((choice) => {
              const isSelected = state.answers[current.id] === choice.id;
              const showCorrectness = submitted;
              const isCorrectChoice = choice.is_correct;
              return (
                <button
                  key={choice.id}
                  type="button"
                  onClick={() => selectChoice(choice.id)}
                  disabled={submitted}
                  className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                    showCorrectness && isCorrectChoice
                      ? "border-emerald-400 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10"
                      : showCorrectness && isSelected && !isCorrectChoice
                        ? "border-red-300 bg-red-50 dark:bg-red-500/10"
                        : isSelected
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                  }`}
                >
                  <span className="font-jp font-semibold">{choice.choice_label}</span>
                  <span className="font-jp">{choice.choice_jp}</span>
                </button>
              );
            })}
          </div>

          {submitted && current.explanation_vi && (
            <p className="mt-4 rounded-xl bg-slate-50 dark:bg-surface-muted p-3 text-sm text-muted">{current.explanation_vi}</p>
          )}

          {current.references.length > 0 && (
            <button
              type="button"
              onClick={() => setReferenceQuestionId(current.id)}
              className="mt-4 rounded-lg border border-accent px-3 py-1.5 text-sm font-medium text-accent"
            >
              参考資料を見る
            </button>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => goTo(state.currentIndex - 1)}
            disabled={state.currentIndex === 0}
            className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-40"
          >
            ← Câu trước
          </button>
          <span className="text-xs text-muted">
            Đã làm {answeredCount}/{questions.length} câu
          </span>
          {state.currentIndex === questions.length - 1 ? (
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={submitted}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground disabled:opacity-40"
            >
              Nộp bài
            </button>
          ) : (
            <button
              type="button"
              onClick={() => goTo(state.currentIndex + 1)}
              className="rounded-lg border border-border px-4 py-2 text-sm"
            >
              Câu sau →
            </button>
          )}
        </div>
      </div>

      {referenceQuestion && (
        <ReferenceModal references={referenceQuestion.references} onClose={() => setReferenceQuestionId(null)} />
      )}
    </div>
  );
}

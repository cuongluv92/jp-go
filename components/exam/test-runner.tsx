"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { getExamSourceImageUrl } from "@/lib/exam/storage";
import { segmentJapaneseText, type FuriganaToken } from "@/lib/japanese-text";
import type { ExamQuestion, ExamTest } from "@/lib/exam/types";

interface TestState {
  currentIndex: number;
  answers: Record<string, string>;
  flagged: Record<string, boolean>;
}

function renderExamJapanese(text: string, tokens: FuriganaToken[] = [], showFurigana = false) {
  if (!showFurigana || tokens.length === 0) return text;
  return segmentJapaneseText(text, [], tokens).map((segment, index) =>
    segment.reading ? (
      <ruby key={`${segment.start}-${index}`}>
        {segment.text}
        <rt className="text-[0.65em] font-medium leading-none text-muted">{segment.reading}</rt>
      </ruby>
    ) : (
      <span key={`${segment.start}-${index}`}>{segment.text}</span>
    ),
  );
}

function loadState(testId: string, questions: ExamQuestion[]): TestState {
  const flagged: Record<string, boolean> = {};
  for (const q of questions) flagged[q.id] = q.is_flagged_default;

  if (typeof window !== "undefined") {
    try {
      const raw = window.sessionStorage.getItem(`jp-go-exam-test-${testId}`);
      if (raw) return { currentIndex: 0, answers: {}, flagged, ...JSON.parse(raw) };
    } catch {
      // sessionStorage có thể bị chặn - dùng state mặc định.
    }
  }
  return { currentIndex: 0, answers: {}, flagged };
}

function ReferencePages({ question }: { question: ExamQuestion }) {
  if (question.references.length === 0) return null;

  return (
    <div className="mt-4 border-t border-border pt-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
        Lý thuyết liên quan
      </p>
      <div className="flex flex-wrap gap-2">
        {question.references.map((ref) => {
          if (!ref.book || !ref.page) {
            return ref.note ? (
              <span key={ref.id} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-muted dark:bg-white/10">
                {ref.note}
              </span>
            ) : null;
          }

          return (
            <Link
              key={ref.id}
              href={`/exam/${ref.book.slug}/page/${ref.page.page_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-accent/40 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent hover:bg-accent/10"
            >
              {ref.book.short_title} · p.{ref.page.page_number}
              {ref.note ? ` · ${ref.note}` : ""}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Giao diện dùng chung cho đề thật/luyện:
 * - 4 cột giống 総合問題: 問題 / Dịch 問題 / 解答 / Giải thích.
 * - 解答 chỉ dùng đáp án Nhật đã có trong dữ liệu, không tự suy đoán.
 * - Chỉ bật chấm điểm khi câu thực sự có choices/đáp án.
 */
export function TestRunner({ test, questions }: { test: ExamTest; questions: ExamQuestion[] }) {
  const [state, setState] = useState<TestState>(() => loadState(test.id, questions));
  const [submitted, setSubmitted] = useState(false);
  const [showFurigana, setShowFurigana] = useState(false);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(`jp-go-exam-test-${test.id}`, JSON.stringify(state));
    } catch {
      // Không ảnh hưởng việc đọc/làm đề.
    }
  }, [state, test.id]);

  const current = questions[state.currentIndex];
  const hasAnyChoices = useMemo(() => questions.some((q) => q.choices.length > 0), [questions]);
  const correctChoice = current?.choices.find((choice) => choice.is_correct) ?? null;

  const score = useMemo(() => {
    if (!submitted || !hasAnyChoices) return null;
    let correct = 0;
    let gradable = 0;
    for (const q of questions) {
      const correctChoice = q.choices.find((c) => c.is_correct);
      if (!correctChoice) continue;
      gradable += 1;
      if (state.answers[q.id] === correctChoice.id) correct += 1;
    }
    return { correct, total: gradable };
  }, [submitted, hasAnyChoices, questions, state.answers]);

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

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-xs text-muted">
            {test.test_year ?? ""}
            {test.exam_stage ? ` · ${test.exam_stage === "1ji" ? "1次" : "2次"}` : ""}
          </p>
          <h1 className="font-jp text-base font-bold sm:text-lg">{test.title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFurigana((value) => !value)}
            aria-pressed={showFurigana}
            className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${
              showFurigana ? "border-accent bg-accent/5 text-accent" : "border-border text-muted"
            }`}
          >
            ふりがな {showFurigana ? "ON" : "OFF"}
          </button>
        <button
          type="button"
          onClick={toggleFlag}
          aria-pressed={state.flagged[current.id]}
          className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${
            state.flagged[current.id]
              ? "border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-400"
              : "border-border text-muted"
          }`}
        >
          {state.flagged[current.id] ? "Đã đánh dấu" : "Đánh dấu"}
        </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-3">
        <p className="mb-2 text-xs font-semibold uppercase text-muted">Danh sách câu hỏi</p>
        <div className="flex flex-wrap gap-1.5">
          {questions.map((q, i) => (
            <button
              key={q.id}
              type="button"
              onClick={() => goTo(i)}
              className={`relative flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
                i === state.currentIndex
                  ? "bg-accent text-accent-foreground"
                  : "bg-slate-100 text-muted dark:bg-white/10"
              }`}
            >
              {q.question_number}
              {state.flagged[q.id] && <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-500" />}
            </button>
          ))}
        </div>
      </div>

      {submitted && score && (
        <div className="rounded-2xl border border-accent bg-accent/5 p-4 text-sm font-medium text-accent">
          Kết quả: {score.correct}/{score.total} câu đúng
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">問題</p>
          <p className="font-jp whitespace-pre-line text-sm leading-relaxed sm:text-base">
            問{current.question_number}. {renderExamJapanese(current.question_jp, current.question_furigana_tokens, showFurigana)}
          </p>

          {current.question_image_path && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getExamSourceImageUrl(current.question_image_path)}
              alt={`Hình câu ${current.question_number}`}
              className="mt-4 h-auto max-w-full rounded-lg border border-border"
            />
          )}

          {current.choices.length > 0 && (
            <div className="mt-4 flex flex-col gap-2">
              {current.choices.map((choice) => {
                const isSelected = state.answers[current.id] === choice.id;
                const showCorrectness = submitted;
                return (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => selectChoice(choice.id)}
                    disabled={submitted}
                    className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                      showCorrectness && choice.is_correct
                        ? "border-emerald-400 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-500/10"
                        : showCorrectness && isSelected && !choice.is_correct
                          ? "border-red-300 bg-red-50 dark:bg-red-500/10"
                          : isSelected
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-accent/50"
                    }`}
                  >
                    <span className="font-jp font-semibold">{choice.choice_label}</span>
                    <span className="font-jp">{renderExamJapanese(choice.choice_jp, choice.choice_furigana_tokens, showFurigana)}</span>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Dịch 問題</p>
          {current.question_vi ? (
            <p className="whitespace-pre-line text-sm leading-relaxed sm:text-base">{current.question_vi}</p>
          ) : (
            <p className="text-sm italic text-muted">(chưa dịch)</p>
          )}

          {current.choices.length > 0 && (
            <div className="mt-4 flex flex-col gap-2">
              {current.choices.map((choice) => (
                <div key={choice.id} className="flex items-start gap-3 rounded-xl border border-border px-3 py-2.5 text-sm">
                  <span className="font-semibold">{choice.choice_label}</span>
                  <span>{choice.choice_vi ?? "(chưa dịch lựa chọn)"}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">解答</p>
          {correctChoice ? (
            <div className="space-y-3">
              <p className="font-jp text-sm font-bold text-accent">【正解】{correctChoice.choice_label}</p>
              <p className="font-jp whitespace-pre-line text-sm leading-relaxed sm:text-base">
                {renderExamJapanese(correctChoice.choice_jp, correctChoice.choice_furigana_tokens, showFurigana)}
              </p>
            </div>
          ) : (
            <p className="text-sm italic text-muted">
              Câu này chưa có đáp án tiếng Nhật được nhập trong dữ liệu.
            </p>
          )}
        </section>

        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Giải thích</p>
          {current.explanation_vi ? (
            <p className="whitespace-pre-line text-sm leading-relaxed">{current.explanation_vi}</p>
          ) : (
            <p className="text-sm italic text-muted">Chưa có phần giải thích cho câu này.</p>
          )}
          <ReferencePages question={current} />
        </section>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => goTo(state.currentIndex - 1)}
          disabled={state.currentIndex === 0}
          className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-40"
        >
          ← Câu trước
        </button>
        <span className="text-xs text-muted">
          Câu {state.currentIndex + 1}/{questions.length}
        </span>
        {hasAnyChoices && state.currentIndex === questions.length - 1 ? (
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
            disabled={state.currentIndex === questions.length - 1}
            className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-40"
          >
            Câu sau →
          </button>
        )}
      </div>
    </div>
  );
}

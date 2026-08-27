"use client";

import { useState } from "react";

import { PRACTICE_MODES, getQuestionsByMode, type PracticeQuestion } from "@/lib/data/practice-samples";
import type { PracticeMode } from "@/lib/types";

export default function PracticePage() {
  const [activeMode, setActiveMode] = useState<PracticeMode | null>(null);

  if (activeMode) {
    return <PracticeQuiz mode={activeMode} onExit={() => setActiveMode(null)} />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Luyện tập</h1>
        <p className="mt-1 text-sm text-muted">Chọn một dạng bài để bắt đầu (dữ liệu mẫu).</p>
      </div>

      <div className="flex flex-col gap-3">
        {PRACTICE_MODES.map((info) => {
          const count = getQuestionsByMode(info.mode).length;
          return (
            <button
              key={info.mode}
              type="button"
              onClick={() => setActiveMode(info.mode)}
              disabled={count === 0}
              className="flex flex-col items-start gap-1 rounded-2xl border border-border bg-surface p-4 text-left shadow-sm transition active:scale-[0.99] disabled:opacity-50"
            >
              <div className="flex w-full items-center justify-between">
                <h2 className="text-sm font-semibold">{info.title}</h2>
                <span className="text-xs text-muted">{count} câu</span>
              </div>
              <p className="text-xs text-muted">{info.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PracticeQuiz({ mode, onExit }: { mode: PracticeMode; onExit: () => void }) {
  const questions = getQuestionsByMode(mode);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const question: PracticeQuestion | undefined = questions[index];
  const modeInfo = PRACTICE_MODES.find((m) => m.mode === mode)!;

  if (!question) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-4xl">✅</p>
        <p className="text-sm">
          Hoàn thành {modeInfo.title}! Đúng {correctCount}/{questions.length} câu.
        </p>
        <button type="button" onClick={onExit} className="text-sm font-medium text-accent">
          ← Chọn dạng bài khác
        </button>
      </div>
    );
  }

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === question!.correctIndex) setCorrectCount((c) => c + 1);
  }

  function next() {
    setSelected(null);
    setIndex((i) => i + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button type="button" onClick={onExit} className="text-sm text-muted">
          ← {modeInfo.title}
        </button>
        <span className="text-xs text-muted">
          Câu {index + 1}/{questions.length}
        </span>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="font-jp text-lg font-semibold leading-relaxed">{question.prompt}</p>
      </div>

      <div className="flex flex-col gap-2">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;
          let style = "border-border bg-surface";
          if (selected !== null) {
            if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-700";
            else if (isSelected) style = "border-rose-400 bg-rose-50 text-rose-700";
          }
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(i)}
              className={`font-jp rounded-xl border px-4 py-3 text-left text-sm transition ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="rounded-xl bg-slate-50 p-3 text-sm text-muted">{question.explanation}</div>
      )}

      {selected !== null && (
        <button
          type="button"
          onClick={next}
          className="rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground"
        >
          Câu tiếp theo →
        </button>
      )}
    </div>
  );
}

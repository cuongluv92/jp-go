"use client";

import { useState } from "react";

export interface QuizItem {
  prompt: string;
  options: string[];
  correctIndex: number;
}

/** Trình chạy quiz trắc nghiệm dùng chung cho đề tự động JLPT và đề tự tạo. */
export function QuizRunner({ items, onFinish }: { items: QuizItem[]; onFinish: (correctCount: number) => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const item = items[index];

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === item.correctIndex) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 >= items.length) {
      onFinish(correctCount);
      return;
    }
    setSelected(null);
    setIndex((i) => i + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs text-muted">
        Câu {index + 1}/{items.length}
      </span>

      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="font-jp text-lg font-semibold leading-relaxed">{item.prompt}</p>
      </div>

      <div className="flex flex-col gap-2">
        {item.options.map((option, i) => {
          const isCorrect = i === item.correctIndex;
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
        <button type="button" onClick={next} className="rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground">
          {index + 1 >= items.length ? "Xem kết quả" : "Câu tiếp theo →"}
        </button>
      )}
    </div>
  );
}

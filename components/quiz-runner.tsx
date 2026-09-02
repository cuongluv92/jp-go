"use client";

import { useState } from "react";

export interface QuizItem {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

/** Trình chạy quiz trắc nghiệm dùng chung cho đề tự động JLPT và đề tự tạo. */
export function QuizRunner({ items, onFinish }: { items: QuizItem[]; onFinish: (correctCount: number) => void }) {
  const [queue, setQueue] = useState(() => items.map((item) => ({ item, isRetry: false })));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const queued = queue[index];
  const item = queued.item;

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === item.correctIndex && !queued.isRetry) setCorrectCount((count) => count + 1);
    if (i !== item.correctIndex && !queued.isRetry) {
      setQueue((current) => [...current, { item, isRetry: true }]);
    }
  }

  function next() {
    if (index + 1 >= queue.length) {
      onFinish(correctCount);
      return;
    }
    setSelected(null);
    setIndex((i) => i + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs text-muted">{queued.isRetry ? "Ôn lại câu đã sai" : `Câu ${index + 1}/${items.length}`}</span>

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
        <div
          className={`rounded-xl border p-3 text-sm ${selected === item.correctIndex ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-800"}`}
        >
          <p className="font-semibold">{selected === item.correctIndex ? "Đúng" : `Chưa đúng · Đáp án: ${item.options[item.correctIndex]}`}</p>
          {item.explanation && <p className="mt-1 whitespace-pre-line text-xs leading-relaxed">{item.explanation}</p>}
          <button type="button" onClick={next} className="mt-3 w-full rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground">
            {index + 1 >= queue.length ? "Xem kết quả" : "Câu tiếp theo →"}
          </button>
        </div>
      )}
    </div>
  );
}

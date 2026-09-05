"use client";

import { useState } from "react";

import type { ContextExerciseItem } from "@/lib/data/context-exercises";
import { normalizeJapaneseAnswer } from "@/lib/japanese-text";

export function ContextExerciseRunner({
  items,
  onFinish,
}: {
  items: ContextExerciseItem[];
  onFinish?: (correct: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const item = items[index];

  if (!item) return null;

  const isCorrect = normalizeJapaneseAnswer(input) === normalizeJapaneseAnswer(item.answer);

  function check(event: React.FormEvent) {
    event.preventDefault();
    if (checked) {
      if (index + 1 >= items.length) {
        onFinish?.(correctCount, items.length);
        return;
      }
      setIndex((value) => value + 1);
      setInput("");
      setChecked(false);
      return;
    }
    if (!input.trim()) return;
    if (isCorrect) setCorrectCount((value) => value + 1);
    setChecked(true);
  }

  return (
    <form onSubmit={check} className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-xs text-muted">
        <span>Câu {index + 1}/{items.length}</span>
        {item.badge && <span className="rounded-full bg-accent-soft px-2 py-0.5 font-semibold text-accent">{item.badge}</span>}
      </div>
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <p className="font-jp whitespace-pre-line text-base font-semibold leading-relaxed">{item.prompt}</p>
      </div>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        disabled={checked}
        placeholder="Nhập phần còn thiếu..."
        className="rounded-xl border border-border bg-surface px-3 py-3 text-center font-jp text-lg outline-none focus:border-accent disabled:opacity-70"
      />
      {checked && (
        <div className={`rounded-xl border p-3 text-sm ${isCorrect ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-800"}`}>
          <p className="font-semibold">{isCorrect ? "Đúng" : `Chưa đúng · Đáp án: ${item.answer}`}</p>
          {item.explanation && <p className="mt-1 whitespace-pre-line text-xs leading-relaxed">{item.explanation}</p>}
        </div>
      )}
      <button
        type="submit"
        disabled={!checked && !input.trim()}
        className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
      >
        {checked ? (index + 1 >= items.length ? "Hoàn thành" : "Câu tiếp theo →") : "Kiểm tra"}
      </button>
    </form>
  );
}

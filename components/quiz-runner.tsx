"use client";

import { useState } from "react";

import { normalizeJapaneseAnswer } from "@/lib/japanese-text";

export interface QuizItem {
  vocabId?: string;
  prompt: string;
  options?: string[];
  correctIndex?: number;
  answer?: string;
  explanation?: string;
}

/** Trình chạy quiz trắc nghiệm dùng chung cho đề tự động JLPT và đề tự tạo. */
export function QuizRunner({
  items,
  onFinish,
  onAnswer,
}: {
  items: QuizItem[];
  onFinish: (correctCount: number) => void;
  /** Chỉ gọi ở lượt đầu của mỗi câu, không chấm SRS lần nữa khi câu sai quay lại cuối hàng đợi. */
  onAnswer?: (item: QuizItem, correct: boolean) => void;
}) {
  const [queue, setQueue] = useState(() => items.map((item) => ({ item, isRetry: false })));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [typedInput, setTypedInput] = useState("");
  const [typedChecked, setTypedChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const queued = queue[index];
  const item = queued.item;
  const options = item.options ?? [];
  const isTyped = options.length === 0 && Boolean(item.answer);

  function handleSelect(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (!queued.isRetry) {
      const correct = i === item.correctIndex;
      if (correct) setCorrectCount((count) => count + 1);
      else setQueue((current) => [...current, { item, isRetry: true }]);
      onAnswer?.(item, correct);
    }
  }

  function handleTypedSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (typedChecked) {
      next();
      return;
    }
    if (!item.answer || !typedInput.trim()) return;
    const correct = normalizeJapaneseAnswer(typedInput) === normalizeJapaneseAnswer(item.answer);
    if (!queued.isRetry) {
      if (correct) setCorrectCount((count) => count + 1);
      else setQueue((current) => [...current, { item, isRetry: true }]);
      onAnswer?.(item, correct);
    }
    setTypedChecked(true);
  }

  function next() {
    if (index + 1 >= queue.length) {
      onFinish(correctCount);
      return;
    }
    setSelected(null);
    setTypedInput("");
    setTypedChecked(false);
    setIndex((i) => i + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs text-muted">{queued.isRetry ? "Ôn lại câu đã sai" : `Câu ${index + 1}/${items.length}`}</span>

      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="font-jp text-lg font-semibold leading-relaxed">{item.prompt}</p>
      </div>

      {isTyped ? (
        <form onSubmit={handleTypedSubmit} className="flex flex-col gap-3">
          <input
            value={typedInput}
            onChange={(event) => setTypedInput(event.target.value)}
            disabled={typedChecked}
            autoFocus
            inputMode="text"
            placeholder="Nhập đáp án tiếng Nhật..."
            className="rounded-xl border border-border bg-surface px-3 py-3 text-center font-jp text-lg outline-none focus:border-accent disabled:opacity-70"
          />
          {typedChecked && (
            <div className={`rounded-xl border p-3 text-sm ${normalizeJapaneseAnswer(typedInput) === normalizeJapaneseAnswer(item.answer!) ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-800"}`}>
              <p className="font-semibold">
                {normalizeJapaneseAnswer(typedInput) === normalizeJapaneseAnswer(item.answer!) ? "Đúng" : `Chưa đúng · Đáp án: ${item.answer}`}
              </p>
              {item.explanation && <p className="mt-1 whitespace-pre-line text-xs leading-relaxed">{item.explanation}</p>}
            </div>
          )}
          <button type="submit" disabled={!typedInput.trim()} className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50">
            {typedChecked ? (index + 1 >= queue.length ? "Xem kết quả" : "Câu tiếp theo →") : "Kiểm tra"}
          </button>
        </form>
      ) : (
      <div className="flex flex-col gap-2">
        {options.map((option, i) => {
          const isCorrect = i === item.correctIndex;
          const isSelected = i === selected;
          let style = "border-border bg-surface";
          if (selected !== null) {
            if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-700";
            else if (isSelected) style = "border-rose-400 bg-rose-50 text-rose-700";
          }
          return (
            <button
              key={`${option}-${i}`}
              type="button"
              onClick={() => handleSelect(i)}
              className={`font-jp rounded-xl border px-4 py-3 text-left text-sm transition ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      )}

      {!isTyped && selected !== null && (
        <div
          className={`rounded-xl border p-3 text-sm ${selected === item.correctIndex ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-800"}`}
        >
          <p className="font-semibold">{selected === item.correctIndex ? "Đúng" : `Chưa đúng · Đáp án: ${options[item.correctIndex!]}`}</p>
          {item.explanation && <p className="mt-1 whitespace-pre-line text-xs leading-relaxed">{item.explanation}</p>}
          <button type="button" onClick={next} className="mt-3 w-full rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground">
            {index + 1 >= queue.length ? "Xem kết quả" : "Câu tiếp theo →"}
          </button>
        </div>
      )}
    </div>
  );
}

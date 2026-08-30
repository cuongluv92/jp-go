"use client";

import { useState } from "react";

import type { KanjiQuestionRow } from "@/lib/data/kanji-service";

/** Trình chạy bài tập Kanji — hỗ trợ trắc nghiệm (4 lựa chọn) và gõ đáp án (write_reading). */
export function KanjiQuizRunner({
  questions,
  onFinish,
}: {
  questions: KanjiQuestionRow[];
  onFinish: (correctCount: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [typedInput, setTypedInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const question = questions[index];
  const isTyped = question.question_type === "write_reading";
  const choices = [question.choice_1, question.choice_2, question.choice_3, question.choice_4].filter(
    (c): c is string => !!c,
  );

  function submitTyped(e: React.FormEvent) {
    e.preventDefault();
    if (checked) {
      next();
      return;
    }
    const isCorrect = typedInput.trim() === question.correct_answer.trim();
    if (isCorrect) setCorrectCount((c) => c + 1);
    setChecked(true);
  }

  function selectChoice(choice: string) {
    if (checked) return;
    setSelected(choice);
    setChecked(true);
    if (choice === question.correct_answer) setCorrectCount((c) => c + 1);
  }

  function next() {
    setSelected(null);
    setTypedInput("");
    setChecked(false);
    if (index + 1 >= questions.length) {
      onFinish(correctCount, questions.length);
      return;
    }
    setIndex((i) => i + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs text-muted">
        Câu {index + 1}/{questions.length}
      </span>

      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <p className="font-jp text-base font-semibold leading-relaxed">{question.question_text}</p>
      </div>

      {isTyped ? (
        <form onSubmit={submitTyped} className="flex flex-col gap-3">
          <input
            type="text"
            value={typedInput}
            onChange={(e) => setTypedInput(e.target.value)}
            disabled={checked}
            autoFocus
            placeholder="Gõ đáp án..."
            className="rounded-xl border border-border bg-surface px-3 py-2.5 text-center font-jp text-lg outline-none focus:border-accent disabled:opacity-70"
          />
          {checked && (
            <p
              className={`text-center text-sm font-medium ${
                typedInput.trim() === question.correct_answer.trim() ? "text-emerald-700" : "text-rose-600"
              }`}
            >
              {typedInput.trim() === question.correct_answer.trim()
                ? "Chính xác! 🎉"
                : `Chưa đúng — đáp án: ${question.correct_answer}`}
            </p>
          )}
          <button
            type="submit"
            className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition active:scale-[0.98]"
          >
            {checked ? (index + 1 >= questions.length ? "Xem kết quả" : "Câu tiếp theo →") : "Kiểm tra"}
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-2">
          {choices.map((choice) => {
            const isCorrect = choice === question.correct_answer;
            const isSelected = choice === selected;
            let style = "border-border bg-surface";
            if (checked) {
              if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-700";
              else if (isSelected) style = "border-rose-400 bg-rose-50 text-rose-700";
            }
            return (
              <button
                key={choice}
                type="button"
                onClick={() => selectChoice(choice)}
                className={`font-jp rounded-xl border px-4 py-3 text-left text-sm transition ${style}`}
              >
                {choice}
              </button>
            );
          })}
          {checked && (
            <button
              type="button"
              onClick={next}
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              {index + 1 >= questions.length ? "Xem kết quả" : "Câu tiếp theo →"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

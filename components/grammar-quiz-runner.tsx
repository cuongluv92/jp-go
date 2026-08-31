"use client";

import { useState } from "react";

import type { GrammarQuestionRow } from "@/lib/data/grammar-service";

export interface GrammarQuizResult {
  grammarId: string;
  correct: boolean;
}

/**
 * Trình chạy bài tập Ngữ pháp — hỗ trợ trắc nghiệm 4 lựa chọn (choose_pattern/
 * choose_connection/choose_meaning) và gõ đáp án (fill_blank/reorder_sentence,
 * nhận diện bằng việc câu hỏi không có choice nào thay vì cố định theo
 * question_type, giống cách KanjiQuizRunner làm với write_reading). Nhận
 * `questions` từ 1 hoặc nhiều mẫu trộn chung (dùng cho phiên ôn tập gộp
 * nhiều mẫu) — `onFinish` trả về kết quả từng câu kèm `grammarId` để bên
 * gọi tự nhóm lại và chấm SRS riêng cho từng mẫu.
 */
export function GrammarQuizRunner({
  questions,
  onFinish,
}: {
  questions: GrammarQuestionRow[];
  onFinish: (correctCount: number, total: number, results: GrammarQuizResult[]) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [typedInput, setTypedInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [results, setResults] = useState<GrammarQuizResult[]>([]);

  const question = questions[index];
  const choices = [question.choice_1, question.choice_2, question.choice_3, question.choice_4].filter(
    (c): c is string => !!c,
  );
  const isTyped = choices.length === 0;

  function recordAnswer(isCorrect: boolean) {
    if (isCorrect) setCorrectCount((c) => c + 1);
    setResults((prev) => [...prev, { grammarId: question.grammar_id, correct: isCorrect }]);
  }

  function submitTyped(e: React.FormEvent) {
    e.preventDefault();
    if (checked) {
      next();
      return;
    }
    recordAnswer(typedInput.trim() === question.correct_answer.trim());
    setChecked(true);
  }

  function selectChoice(choice: string) {
    if (checked) return;
    setSelected(choice);
    setChecked(true);
    recordAnswer(choice === question.correct_answer);
  }

  function next() {
    setSelected(null);
    setTypedInput("");
    setChecked(false);
    if (index + 1 >= questions.length) {
      onFinish(correctCount, questions.length, results);
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

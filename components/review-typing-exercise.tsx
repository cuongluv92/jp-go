"use client";

import { useState } from "react";

import { getExamplesForWord } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { normalizeJapaneseAnswer } from "@/lib/japanese-text";
import type { VocabWord } from "@/lib/types";

/**
 * Kiểu bài ôn tập "Nghĩ trước rồi viết tiếng Nhật" — hiện nghĩa/câu ví dụ có
 * chỗ trống (`VocabExample.clozeJp`/`answer` đã có sẵn), người dùng gõ đáp
 * án tiếng Nhật.
 */
export function ReviewTypingExercise({ words, onComplete }: { words: VocabWord[]; onComplete: () => void }) {
  const { examples, gradeFlashcard } = useVocabulary();
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);

  const current = words[index];
  const example = getExamplesForWord(examples, current.id)[0];
  const cloze = example?.clozeJp ?? `（${current.meaningVi}）`;
  const answer = example?.answer ?? current.word;
  const hintVi = example?.exampleVi ?? current.meaningVi;

  function checkAnswer(e: React.FormEvent) {
    e.preventDefault();
    if (result) {
      next();
      return;
    }
    const isCorrect = normalizeJapaneseAnswer(input) === normalizeJapaneseAnswer(answer);
    setResult(isCorrect ? "correct" : "incorrect");
    gradeFlashcard(current.id, isCorrect ? "da_nho" : "chua_nho");
  }

  function next() {
    setInput("");
    setResult(null);
    if (index + 1 >= words.length) {
      onComplete();
      return;
    }
    setIndex((i) => i + 1);
  }

  return (
    <form onSubmit={checkAnswer} className="flex flex-col gap-4">
      <p className="text-xs text-muted">
        Câu {index + 1} / {words.length}
      </p>

      <div className="rounded-2xl border border-border bg-surface p-5 text-center shadow-sm">
        <p className="font-jp text-xl font-semibold">{cloze}</p>
        <p className="mt-2 text-sm text-muted">{hintVi}</p>
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={result !== null}
        autoFocus
        placeholder="Gõ đáp án tiếng Nhật..."
        className="rounded-xl border border-border bg-surface px-3 py-2.5 text-center font-jp text-lg outline-none focus:border-accent disabled:opacity-70"
      />

      {result === "correct" && <p className="text-center text-sm font-medium text-emerald-700">Chính xác! 🎉</p>}
      {result === "incorrect" && <p className="text-center text-sm font-medium text-rose-600">Chưa đúng — đáp án: {answer}</p>}

      <button type="submit" className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition active:scale-[0.98]">
        {result ? "Câu tiếp theo →" : "Kiểm tra"}
      </button>
    </form>
  );
}

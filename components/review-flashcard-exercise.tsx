"use client";

import { useState } from "react";

import { PronounceButton } from "@/components/pronounce-button";
import { getExamplesForWord } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import type { FlashcardGrade, VocabWord } from "@/lib/types";

const TONE_STYLES = {
  rose: "border-rose-300 bg-rose-50 text-rose-600",
  amber: "border-amber-300 bg-amber-50 text-amber-700",
  emerald: "border-emerald-300 bg-emerald-50 text-emerald-700",
};

function GradeButton({ label, tone, onClick }: { label: string; tone: keyof typeof TONE_STYLES; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-2 py-3 text-sm font-semibold transition active:scale-[0.97] ${TONE_STYLES[tone]}`}
    >
      {label}
    </button>
  );
}

/** Kiểu bài ôn tập "Lật thẻ" — dùng lại flow chấm SM-2 sẵn có (`gradeFlashcard`). */
export function ReviewFlashcardExercise({ words, onComplete }: { words: VocabWord[]; onComplete: () => void }) {
  const { examples, gradeFlashcard } = useVocabulary();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = words[index];

  function next() {
    if (index + 1 >= words.length) {
      onComplete();
      return;
    }
    setFlipped(false);
    setIndex((i) => i + 1);
  }

  function handleGrade(grade: FlashcardGrade) {
    gradeFlashcard(current.id, grade);
    next();
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-muted">
        Thẻ {index + 1} / {words.length}
      </p>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="flex min-h-[22rem] flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-surface p-6 text-center shadow-sm active:scale-[0.99]"
      >
        {!flipped ? (
          <>
            <p className="font-jp text-5xl font-bold">{current.word}</p>
            <p className="text-xs text-muted">Chạm để lật thẻ</p>
          </>
        ) : (
          <div className="flex w-full flex-col items-center gap-3">
            <p className="font-jp text-2xl font-semibold">{current.word}</p>
            <p className="text-base text-muted">{current.reading}</p>
            <p className="text-lg font-medium">{current.meaningVi}</p>
            {getExamplesForWord(examples, current.id)
              .slice(0, 1)
              .map((example) => (
                <div key={example.exampleNo} className="mt-2 w-full rounded-xl bg-slate-50 p-3 text-left text-sm">
                  <p className="font-jp">{example.exampleJp}</p>
                  <p className="mt-0.5 text-xs text-muted">{example.exampleVi}</p>
                </div>
              ))}
            <div onClick={(e) => e.stopPropagation()}>
              <PronounceButton text={current.word} />
            </div>
          </div>
        )}
      </button>

      {flipped ? (
        <div className="grid grid-cols-3 gap-2">
          <GradeButton label="Chưa nhớ" tone="rose" onClick={() => handleGrade("chua_nho")} />
          <GradeButton label="Khó" tone="amber" onClick={() => handleGrade("kho")} />
          <GradeButton label="Đã nhớ" tone="emerald" onClick={() => handleGrade("da_nho")} />
        </div>
      ) : (
        <button type="button" onClick={next} className="rounded-xl border border-border py-2.5 text-sm text-muted">
          Bỏ qua từ này →
        </button>
      )}
    </div>
  );
}

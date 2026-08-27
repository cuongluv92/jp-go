"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { PronounceButton } from "@/components/pronounce-button";
import { getExamplesForWord } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import type { FlashcardGrade } from "@/lib/types";

export default function FlashcardsPage() {
  const { words, examples, gradeFlashcard } = useVocabulary();

  const deck = useMemo(() => words.filter((w) => !w.isHidden && w.progress.status !== "da_nho"), [words]);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);

  if (deck.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center">
        <p className="text-4xl">🎉</p>
        <p className="text-sm text-muted">Bạn đã học hết các từ hiện có! Hãy quay lại Kho từ vựng.</p>
        <Link href="/vocabulary" className="text-sm font-medium text-accent">
          Xem kho từ vựng
        </Link>
      </div>
    );
  }

  const current = deck[index % deck.length];

  function goNext() {
    setFlipped(false);
    setIndex((i) => (i + 1) % deck.length);
  }

  function handleGrade(grade: FlashcardGrade) {
    gradeFlashcard(current.id, grade);
    setSessionCount((c) => c + 1);
    goNext();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>
          Thẻ {(index % deck.length) + 1} / {deck.length}
        </span>
        <span>Đã học trong phiên: {sessionCount}</span>
      </div>

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
        <button type="button" onClick={goNext} className="rounded-xl border border-border py-2.5 text-sm text-muted">
          Bỏ qua từ này →
        </button>
      )}
    </div>
  );
}

const TONE_STYLES = {
  rose: "border-rose-300 bg-rose-50 text-rose-600",
  amber: "border-amber-300 bg-amber-50 text-amber-700",
  emerald: "border-emerald-300 bg-emerald-50 text-emerald-700",
};

function GradeButton({
  label,
  tone,
  onClick,
}: {
  label: string;
  tone: keyof typeof TONE_STYLES;
  onClick: () => void;
}) {
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

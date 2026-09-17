"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { JapaneseSentence } from "@/components/japanese-sentence";
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

      {/* div (không phải button) vì mặt sau chứa nút bấm thật (phát âm, chọn
          từ trong câu ví dụ, bật/tắt furigana) - HTML không cho phép
          <button> lồng <button>, nên phải tự thêm role/tabIndex/onKeyDown
          để vẫn bấm được bằng bàn phím như button thật. */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        className="flex min-h-[22rem] cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-surface p-6 text-center shadow-sm active:scale-[0.99]"
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
                <div key={example.exampleNo} className="mt-2 w-full rounded-xl bg-slate-50 dark:bg-surface-muted p-3 text-left text-sm" onClick={(e) => e.stopPropagation()}>
                  <JapaneseSentence
                    text={example.exampleJp}
                    furiganaTokens={example.furiganaTokens}
                    priorityWordId={current.id}
                    className="font-jp"
                  />
                  <p className="mt-0.5 text-xs text-muted">{example.exampleVi}</p>
                </div>
              ))}
            <div onClick={(e) => e.stopPropagation()}>
              <PronounceButton text={current.word} />
            </div>
          </div>
        )}
      </div>

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
  rose: "border-rose-300 bg-rose-50 dark:bg-rose-500/10 text-rose-600",
  amber: "border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400",
  emerald: "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
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

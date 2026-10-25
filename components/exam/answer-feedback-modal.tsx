"use client";

import { useEffect, useId, useRef } from "react";

import { segmentJapaneseText, type FuriganaToken } from "@/lib/japanese-text";

/**
 * Overlay nổi ngay trên trang làm đề (KHÔNG chuyển route) báo đúng/sai ngay
 * khi bấm đáp án. Cả đáp án đúng và sai đều có thể sang câu tiếp theo;
 * người dùng có thể làm lại câu sai ngay hoặc quay lại sau.
 */
export function AnswerFeedbackModal({
  correct,
  choiceLabel,
  explanation,
  explanationJp,
  explanationJpTokens = [],
  showFurigana = false,
  sourceUrl,
  isLastQuestion,
  onRetry,
  onNext,
}: {
  correct: boolean;
  choiceLabel: string;
  explanation?: string | null;
  explanationJp?: string | null;
  explanationJpTokens?: FuriganaToken[];
  showFurigana?: boolean;
  sourceUrl?: string | null;
  isLastQuestion: boolean;
  onRetry: () => void;
  onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    // Native modal nằm trong top layer, không bị transform của khung trang
    // làm lệch vị trí fixed; đồng thời giữ focus bên trong hộp thoại.
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onRetry();
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border-0 bg-surface p-5 sm:p-7 text-center text-foreground shadow-xl backdrop:bg-black/50"
    >
      <div
        className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-[3px] text-3xl font-bold ${
          correct
            ? "border-emerald-500 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400"
            : "border-red-500 text-red-600 dark:border-red-400 dark:text-red-400"
        }`}
      >
        {correct ? "○" : "✕"}
      </div>
      <p
        id={titleId}
        className={`text-xl font-semibold sm:text-2xl ${
          correct ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
        }`}
      >
        {correct ? "Chính xác!" : "Chưa đúng"}
      </p>
      {!correct && <p className="mt-2 text-base text-muted">Bạn đã chọn {choiceLabel}. Có thể làm lại ngay hoặc quay lại câu này sau.</p>}
      {(explanationJp || explanation) && (
        <div className="mt-4 space-y-4 rounded-xl bg-slate-50 p-4 text-left dark:bg-surface-muted sm:p-5">
          {explanationJp && (
            <div>
              <p className="mb-2 font-jp text-sm font-semibold text-muted">日本語解説</p>
              <p lang="ja" className="font-jp whitespace-pre-line text-base leading-relaxed sm:text-lg">{showFurigana && explanationJpTokens.length > 0
                ? segmentJapaneseText(explanationJp, [], explanationJpTokens).map((segment, index) =>
                    segment.reading ? (
                      <ruby key={`${segment.start}-${index}`}>
                        {segment.text}
                        <rt className="text-[0.65em] font-medium leading-none text-muted">{segment.reading}</rt>
                      </ruby>
                    ) : (
                      <span key={`${segment.start}-${index}`}>{segment.text}</span>
                    ),
                  )
                : explanationJp}</p>
            </div>
          )}
          {explanation && (
            <div>
              <p className="mb-2 text-sm font-semibold text-muted">Giải thích tiếng Việt</p>
              <p className="whitespace-pre-line text-base leading-relaxed sm:text-lg">{explanation}</p>
            </div>
          )}
        </div>
      )}
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Xem lời giải tiếng Nhật trên Kakomonn"
          className="mt-4 inline-flex items-center gap-1 rounded-lg border border-accent/40 px-3 py-2 text-sm font-semibold text-accent hover:bg-accent/10 sm:text-base"
        >
          📖 Giải Nhật · Kakomon <span aria-hidden="true">↗</span>
        </a>
      )}
      <div className="mt-5 flex gap-3">
        {!correct && (
          <button
            type="button"
            onClick={onRetry}
            className="flex-1 rounded-xl border border-border px-4 py-3 text-base font-semibold sm:text-lg"
          >
            Làm lại
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          className="flex-1 rounded-xl bg-accent px-4 py-3 text-base font-semibold text-accent-foreground sm:text-lg"
        >
          {isLastQuestion ? "Hoàn thành bài" : "Câu tiếp theo →"}
        </button>
      </div>
    </dialog>
  );
}

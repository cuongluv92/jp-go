"use client";

/**
 * Overlay nổi ngay trên trang làm đề (KHÔNG chuyển route) báo đúng/sai ngay
 * khi bấm đáp án. Sai -> "Làm lại" chỉ đóng modal, không đổi câu. Đúng ->
 * qua câu tiếp theo (hoặc hoàn thành nếu là câu cuối).
 */
export function AnswerFeedbackModal({
  correct,
  choiceLabel,
  explanation,
  isLastQuestion,
  onRetry,
  onNext,
}: {
  correct: boolean;
  choiceLabel: string;
  explanation?: string | null;
  isLastQuestion: boolean;
  onRetry: () => void;
  onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-surface p-5 text-center shadow-xl">
        <div
          className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-semibold ${
            correct
              ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
              : "bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400"
          }`}
        >
          {correct ? "✓" : "✕"}
        </div>
        <p
          className={`text-lg font-semibold ${
            correct ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
          }`}
        >
          {correct ? "Chính xác!" : "Chưa đúng"}
        </p>
        {!correct && <p className="mt-1 text-sm text-muted">Bạn đã chọn {choiceLabel}. Thử lại nhé.</p>}
        {explanation && (
          <p className="mt-3 rounded-xl bg-slate-50 p-3 text-left text-sm text-muted dark:bg-surface-muted">
            {explanation}
          </p>
        )}
        <button
          type="button"
          onClick={correct ? onNext : onRetry}
          className="mt-4 w-full rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground"
        >
          {correct ? (isLastQuestion ? "Hoàn thành bài" : "Câu tiếp theo →") : "Làm lại"}
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";

import { parseAnswerItems } from "@/lib/exam/answer-items";
import type { AnswerGradingResult, AnswerUnit } from "@/lib/exam/answer-grading";

/**
 * "回答練習" - overlay riêng TRÊN trang làm đề (không chuyển route, không sửa
 * đề/解答例 gốc) để người dùng tự gõ câu trả lời rồi so với 解答例 đang có sẵn
 * trong dữ liệu. Chấm theo từ nội dung (không phải AI hiểu nghĩa 100%) nên có
 * thể lệch nhẹ với câu viết quá khác cấu trúc, và KHÔNG phát hiện được việc
 * đổi 1 từ khóa quan trọng thành 1 từ khác (vd đổi chiều 上部/下部) nếu phần
 * còn lại của câu vẫn giống hệt - so từ không có khái niệm "từ nào quan
 * trọng hơn". Xem lib/exam/answer-grading.ts.
 *
 * Đề dạng "chọn N trong M từ/thuật ngữ rồi giải thích" có nhiều mục độc lập
 * trong cùng 1 answer_jp - cho luyện từng mục riêng (dễ viết, dễ nhìn kết
 * quả hơn) thay vì bắt gõ nguyên khối, bằng cách tách qua parseAnswerItems.
 */
const ALL_KEY = "__all__";

function renderUnits(units: AnswerUnit[], variant: "official" | "user") {
  return units.map((unit, index) => {
    if (unit.text === "\n") return <br key={index} />;
    if (!unit.graded || unit.matched) {
      return <span key={index}>{unit.text}</span>;
    }
    if (variant === "official") {
      return (
        <mark
          key={index}
          className="rounded bg-amber-200 px-0.5 text-foreground dark:bg-amber-500/40"
        >
          {unit.text}
        </mark>
      );
    }
    return (
      <span key={index} className="text-red-600 line-through dark:text-red-400">
        {unit.text}
      </span>
    );
  });
}

function scoreColor(percent: number): string {
  if (percent >= 80) return "border-emerald-400 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-400";
  if (percent >= 50) return "border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-400";
  return "border-red-400 bg-red-50 text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-400";
}

export function AnswerPracticeModal({
  questionNumber,
  officialAnswerJp,
  onClose,
}: {
  questionNumber: number;
  officialAnswerJp: string;
  onClose: () => void;
}) {
  const items = useMemo(() => parseAnswerItems(officialAnswerJp), [officialAnswerJp]);
  // Có >=2 mục tách được (dạng "chọn N trong M từ") thì mặc định luyện mục
  // đầu tiên - gõ ít, kết quả dễ đọc hơn hẳn so với cả khối. Không tách được
  // thì chỉ còn mỗi lựa chọn "toàn bộ".
  const [selectedKey, setSelectedKey] = useState<string>(items.length >= 2 ? "0" : ALL_KEY);
  const selectedText = selectedKey === ALL_KEY ? officialAnswerJp : items[Number(selectedKey)]?.text ?? officialAnswerJp;

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, AnswerGradingResult | null>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const answer = answers[selectedKey] ?? "";
  const result = results[selectedKey] ?? null;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function selectItem(key: string) {
    setSelectedKey(key);
    setError(null);
  }

  async function grade() {
    if (!answer.trim() || loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/exam/grade-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ officialJp: selectedText, userJp: answer }),
      });
      if (!res.ok) throw new Error("grade failed");
      const data = (await res.json()) as AnswerGradingResult;
      setResults((current) => ({ ...current, [selectedKey]: data }));
    } catch {
      setError("Không chấm được câu trả lời, thử lại nhé.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setAnswers((current) => ({ ...current, [selectedKey]: "" }));
    setResults((current) => ({ ...current, [selectedKey]: null }));
    setError(null);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-6">
      <div className="flex h-[92vh] w-full max-w-2xl flex-col rounded-t-2xl bg-surface shadow-xl sm:h-[85vh] sm:rounded-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold">回答練習 · 問{questionNumber}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-slate-100 hover:text-foreground dark:hover:bg-white/10"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {items.length >= 2 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {items.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectItem(String(index))}
                  className={`font-jp rounded-lg border px-2.5 py-1 text-xs font-medium ${
                    selectedKey === String(index) ? "border-accent bg-accent/5 text-accent" : "border-border text-muted"
                  }`}
                >
                  {item.label}
                  {results[String(index)] && " ✓"}
                </button>
              ))}
              <button
                type="button"
                onClick={() => selectItem(ALL_KEY)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${
                  selectedKey === ALL_KEY ? "border-accent bg-accent/5 text-accent" : "border-border text-muted"
                }`}
              >
                Toàn bộ
              </button>
            </div>
          )}

          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
            Câu trả lời của bạn (tiếng Nhật)
          </p>
          <textarea
            key={selectedKey}
            value={answer}
            onChange={(event) => setAnswers((current) => ({ ...current, [selectedKey]: event.target.value }))}
            rows={items.length >= 2 && selectedKey !== ALL_KEY ? 5 : 8}
            placeholder="Gõ câu trả lời của bạn ở đây..."
            className="font-jp w-full resize-y rounded-xl border border-border bg-surface-muted p-3 text-sm leading-relaxed"
          />

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => void grade()}
              disabled={!answer.trim() || loading}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground disabled:opacity-40"
            >
              {loading ? "Đang chấm..." : "採点"}
            </button>
            {(result || error) && (
              <button type="button" onClick={reset} className="rounded-lg border border-border px-3 py-2 text-xs">
                Làm lại
              </button>
            )}
          </div>

          {error && <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>}

          {result && (
            <div className="mt-5 space-y-4">
              {result.percent !== null && (
                <div className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${scoreColor(result.percent)}`}>
                  Mức độ đầy đủ: {result.percent}%
                </div>
              )}

              <div className="rounded-xl border border-border bg-surface p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  Câu trả lời của bạn
                </p>
                <p className="font-jp whitespace-pre-line text-sm leading-relaxed">
                  {renderUnits(result.userUnits, "user")}
                </p>
                <p className="mt-2 text-[11px] text-muted">
                  Phần <span className="text-red-600 line-through dark:text-red-400">gạch đỏ</span> là phần thừa/không khớp ý nào trong đáp án mẫu.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  解答例 (so sánh)
                </p>
                <p className="font-jp whitespace-pre-line text-sm leading-relaxed">
                  {renderUnits(result.officialUnits, "official")}
                </p>
                <p className="mt-2 text-[11px] text-muted">
                  Phần <mark className="rounded bg-amber-200 px-0.5 dark:bg-amber-500/40">bôi màu</mark> là ý bạn còn thiếu, cần nhớ thêm.
                </p>
              </div>

              <p className="text-[11px] italic text-muted">
                Chấm theo từ khóa nội dung (không phải AI hiểu nghĩa hoàn toàn): câu viết đúng ý nhưng diễn đạt khác cấu trúc có thể bị chấm thiếu nhẹ, và nếu chỉ đổi sai 1 từ quan trọng (vd đổi chiều 上部/下部) mà phần còn lại của câu vẫn giống hệt thì có thể KHÔNG bị phát hiện - vẫn nên tự đọc kỹ lại 解答例 phía trên, đừng chỉ tin vào %.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

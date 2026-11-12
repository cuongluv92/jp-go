"use client";

import Link from "next/link";
import { useExamProgress } from "@/lib/exam/use-exam-progress";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { AnswerFeedbackModal } from "./answer-feedback-modal";
import { AnswerPracticeModal } from "./answer-practice-modal";
import { useArrowKeyNav } from "@/lib/hooks/use-arrow-key-nav";
import { useColumnKeyboardShortcuts } from "@/lib/hooks/use-column-keyboard-shortcuts";
import { getExamSourceImageUrl } from "@/lib/exam/storage";
import { getKakomonnQuestionUrl } from "@/lib/exam/kakomonn-links";
import { segmentJapaneseText, type FuriganaToken } from "@/lib/japanese-text";
import type { ExamQuestion, ExamTest } from "@/lib/exam/types";

interface AnswerFeedback {
  choiceLabel: string;
  correct: boolean;
}

type RefColumnKey = "question" | "questionVi" | "answer" | "explanation";

const REF_COLUMN_ORDER: RefColumnKey[] = ["question", "questionVi", "answer", "explanation"];

const REF_COLUMN_LABELS: Record<RefColumnKey, string> = {
  question: "問題",
  questionVi: "Dịch 問題",
  answer: "解答",
  explanation: "Giải thích",
};

const REF_COLUMN_STORAGE_KEYS: Record<RefColumnKey, string> = {
  question: "jpgo-exam-test-show-question",
  questionVi: "jpgo-exam-test-show-question-vi",
  answer: "jpgo-exam-test-show-answer",
  explanation: "jpgo-exam-test-show-explanation",
};

type ColumnVisibility = Record<RefColumnKey, boolean>;

const ALL_COLUMNS_VISIBLE: ColumnVisibility = { question: true, questionVi: true, answer: true, explanation: true };

function readStoredColumnVisibility(): ColumnVisibility {
  if (typeof window === "undefined") return ALL_COLUMNS_VISIBLE;
  const read = (key: string) => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? true : raw === "1";
    } catch {
      return true;
    }
  };
  return {
    question: read(REF_COLUMN_STORAGE_KEYS.question),
    questionVi: read(REF_COLUMN_STORAGE_KEYS.questionVi),
    answer: read(REF_COLUMN_STORAGE_KEYS.answer),
    explanation: read(REF_COLUMN_STORAGE_KEYS.explanation),
  };
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
      <circle cx="12" cy="12" r="2.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H4v4M16 3h4v4M8 21H4v-4M16 21h4v-4" />
    </svg>
  );
}

function CompressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
    </svg>
  );
}

function gridColsClass(count: number): string {
  if (count >= 4) return "md:grid-cols-2 xl:grid-cols-4";
  if (count === 3) return "md:grid-cols-3";
  if (count === 2) return "md:grid-cols-2";
  return "md:grid-cols-1";
}

/**
 * Nhãn cột + nút "ẩn"/"phóng to" - cùng kiểu với ColumnHeader của trang đọc
 * sách (components/exam/column-workspace.tsx) để 2 nơi nhất quán hành vi.
 */
function ColumnHeader({
  col,
  focused,
  visible,
  visibleCount,
  onToggleVisible,
  onToggleFocus,
}: {
  col: RefColumnKey;
  focused: boolean;
  visible: boolean;
  visibleCount: number;
  onToggleVisible: () => void;
  onToggleFocus: () => void;
}) {
  const disableHide = visible && visibleCount <= 1;
  const label = REF_COLUMN_LABELS[col];

  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <p className="font-jp truncate text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={onToggleVisible}
          disabled={disableHide}
          aria-label={visible ? `Ẩn ${label}` : `Hiện ${label}`}
          title={visible ? `Ẩn ${label}` : `Hiện ${label}`}
          className={`flex h-7 w-7 items-center justify-center rounded-lg text-muted transition hover:bg-slate-100 dark:hover:bg-white/10 hover:text-foreground ${
            disableHide ? "cursor-not-allowed opacity-40" : ""
          }`}
        >
          <EyeIcon />
        </button>
        <button
          type="button"
          onClick={onToggleFocus}
          aria-label={focused ? `Thoát chế độ tập trung ${label}` : `Phóng to ${label}`}
          title={focused ? "Thoát chế độ tập trung" : `Phóng to ${label}`}
          className={`flex h-7 w-7 items-center justify-center rounded-lg transition hover:bg-slate-100 dark:hover:bg-white/10 ${
            focused ? "text-accent" : "text-muted hover:text-foreground"
          }`}
        >
          {focused ? <CompressIcon /> : <ExpandIcon />}
        </button>
      </div>
    </div>
  );
}

function renderExamJapanese(text: string, tokens: FuriganaToken[] = [], showFurigana = false) {
  if (!showFurigana || tokens.length === 0) return text;
  return segmentJapaneseText(text, [], tokens).map((segment, index) =>
    segment.reading ? (
      <ruby key={`${segment.start}-${index}`}>
        {segment.text}
        <rt className="text-[0.65em] font-medium leading-none text-muted">{segment.reading}</rt>
      </ruby>
    ) : (
      <span key={`${segment.start}-${index}`}>{segment.text}</span>
    ),
  );
}

type QuestionLink = { href: string; label: string };

function ReferencePages({ question, theoryLinks = [] }: { question: ExamQuestion; theoryLinks?: QuestionLink[] }) {
  if (question.references.length === 0 && theoryLinks.length === 0) return null;

  return (
    <div className="mt-4 border-t border-border pt-3">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
        Lý thuyết liên quan
      </p>
      <div className="flex flex-wrap gap-2">
        {theoryLinks.map(({ href, label }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer"
            className="rounded-lg border border-accent/40 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent hover:bg-accent/10">
            {label} ↗
          </a>
        ))}
        {question.references.map((ref) => {
          if (!ref.book || !ref.page) {
            return ref.note ? (
              <span key={ref.id} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-muted dark:bg-white/10">
                {ref.note}
              </span>
            ) : null;
          }

          return (
            <Link
              key={ref.id}
              href={`/exam/${ref.book.slug}/page/${ref.page.page_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-accent/40 bg-accent/5 px-2.5 py-1 text-xs font-medium text-accent hover:bg-accent/10"
            >
              {ref.book.short_title} · p.{ref.page.page_number}
              {ref.note ? ` · ${ref.note}` : ""}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Giao diện dùng chung cho đề thật/luyện:
 * - Mặc định (chế độ tham khảo): 4 cột giống 総合問題: 問題 / Dịch 問題 / 解答 / Giải thích,
 *   đáp án + giải thích luôn hiện sẵn - dùng để đọc/ôn lại.
 * - "Chế độ làm bài": ẩn 解答/Giải thích, bấm 1 đáp án hiện popup nổi báo đúng/sai ngay -
 *   sai thì bấm làm lại (không đổi câu), đúng thì tự qua câu tiếp theo.
 * - 解答 chỉ dùng đáp án Nhật đã có trong dữ liệu, không tự suy đoán.
 * - Chỉ bật chấm điểm khi câu thực sự có choices/đáp án.
 */
export function TestRunner({
  test, questions: initialQuestions, userId, staticQuestions = false, initialQuestionNumber, questionDetails,
}: {
  test: ExamTest;
  questions: ExamQuestion[];
  userId: string;
  staticQuestions?: boolean;
  initialQuestionNumber?: number;
  questionDetails?: Record<string, { label?: string; partGroup?: string; theoryLinks?: QuestionLink[]; source?: QuestionLink; originalPages?: QuestionLink[]; explanation?: ReactNode }>;
}) {
  // Render ngay với dữ liệu gốc (chưa có furigana) để không phải chờ kuromoji
  // dựng dictionary - furigana (nếu có) tới sau qua API, state ở đây chỉ đổi
  // phần furigana_tokens, không đổi id/thứ tự câu nên không ảnh hưởng gì tới
  // index/answers đang có.
  const [questions, setQuestions] = useState(initialQuestions);
  useEffect(() => {
    if (staticQuestions) return;
    let cancelled = false;
    fetch(`/api/exam/furigana/test?slug=${encodeURIComponent(test.slug)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { questions?: ExamQuestion[] } | null) => {
        if (!cancelled && data?.questions) setQuestions(data.questions);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [test.slug, staticQuestions]);

  const {state, update: setState, ready, status, retry, reset} = useExamProgress(userId, test.id, initialQuestions, staticQuestions);
  const [linkedQuestionIndex, setLinkedQuestionIndex] = useState(() =>
    initialQuestions.findIndex((question) => question.question_number === initialQuestionNumber));
  const currentIndex = linkedQuestionIndex >= 0 ? linkedQuestionIndex : state.currentIndex;
  const submitted = state.submitted;
  const setSubmitted = (value: boolean) => setState(s => ({...s, submitted: value}));
  const [showFurigana, setShowFurigana] = useState(false);
  // Mặc định bật "chế độ làm bài" (ẩn đáp án, hiện bảng đúng/sai khi bấm chọn) -
  // đây là cách dùng chính khi làm đề; tắt đi mới chuyển qua xem tham khảo
  // (đáp án + giải thích hiện sẵn ngay cả khi chưa nộp bài).
  const [quizMode, setQuizMode] = useState(() => questions.some((q) => q.choices.length > 0));
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null);
  const [retryIndices, setRetryIndices] = useState<number[] | null>(null);
  const [retryFinished, setRetryFinished] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [columnVisible, setColumnVisible] = useState<ColumnVisibility>(ALL_COLUMNS_VISIBLE);
  const [columnFocus, setColumnFocus] = useState<RefColumnKey | null>(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColumnVisible(readStoredColumnVisibility());
  }, []);

  const current = questions[currentIndex];
  const wrongIndices = questions.flatMap((q, index) => {
    const selected = q.choices.find(choice => choice.id === state.answers[q.id]);
    return selected && !selected.is_correct ? [index] : [];
  });
  // Freeze each retry round so a corrected question does not disappear mid-answer.
  const navigationIndices = retryIndices ?? questions.map((_, index) => index);
  const navigationPosition = navigationIndices.indexOf(currentIndex);
  const previousIndex = navigationIndices[navigationPosition - 1];
  const nextIndex = navigationIndices[navigationPosition + 1];

  const goTo = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    setLinkedQuestionIndex(-1);
    setRetryFinished(false);
    setPracticeOpen(false);
    // Phóng to chỉ nên áp dụng cho câu đang xem - không mang sang câu khác.
    setColumnFocus(null);
    // Sau khi hoàn thành vẫn được quay lại các câu để làm lại.
    setSubmitted(false);
    setState((s) => ({ ...s, currentIndex: index }));
  };

  const startWrongRetry = () => {
    if (!wrongIndices.length) return;
    setRetryIndices(wrongIndices);
    setRetryFinished(false);
    setQuizMode(true);
    setFeedback(null);
    setColumnVisible(v => ({...v, question: true, questionVi: true}));
    goTo(wrongIndices[0]);
  };
  const leaveWrongRetry = () => {
    setRetryIndices(null);
    setRetryFinished(false);
    setFeedback(null);
  };

  // Chỉ xóa tiến độ khi người học xác nhận làm lại từ đầu.
  const resetTest = () => {
    if (!window.confirm("Xóa toàn bộ đáp án đã lưu và làm lại đề này từ đầu?")) return;
    leaveWrongRetry();
    setLinkedQuestionIndex(-1);
    reset();
    setSubmitted(false);
    setFeedback(null);
    setPracticeOpen(false);
  };

  // ← = câu trước, → = câu sau - tắt khi đang có modal (kết quả/回答練習)
  // mở để không vô tình nhảy câu lúc người dùng còn đang xem/gõ trong đó.
  // Đặt trước early-return bên dưới để không vi phạm rules-of-hooks.
  useArrowKeyNav({
    onPrev: previousIndex !== undefined ? () => goTo(previousIndex) : undefined,
    onNext: nextIndex !== undefined ? () => goTo(nextIndex) : undefined,
    enabled: !feedback && !practiceOpen,
  });

  const hasAnyChoices = useMemo(() => questions.some((q) => q.choices.length > 0), [questions]);
  const correctChoice = current?.choices.find((choice) => choice.is_correct) ?? null;
  const writtenAnswer = current?.answer_jp?.trim() ? current.answer_jp : null;
  const details = current ? questionDetails?.[current.id] : undefined;
  const questionLabel = (question: ExamQuestion) => questionDetails?.[question.id]?.label ?? question.question_number;
  const partGroup = details?.partGroup;
  const partIndices = partGroup ? questions.flatMap((question, index) =>
    questionDetails?.[question.id]?.partGroup === partGroup ? [index] : [],
  ) : [];
  const nextPartLabel = nextIndex !== undefined && partIndices.includes(nextIndex)
    ? `Sang câu ${questionLabel(questions[nextIndex])} →`
    : undefined;
  const hasOriginalPages = Boolean(details?.originalPages?.length);
  const sourceUrl = details?.source?.href ?? getKakomonnQuestionUrl(test.slug, current?.question_number ?? 0);
  const sourceLabel = details?.source?.label ?? "Giải Nhật · Kakomon";

  const score = useMemo(() => {
    if (!submitted || !hasAnyChoices) return null;
    let correct = 0;
    let gradable = 0;
    let firstTry = 0;
    for (const q of questions) {
      const correctChoiceForQuestion = q.choices.find((c) => c.is_correct);
      if (!correctChoiceForQuestion) continue;
      gradable += 1;
      if (state.answers[q.id] === correctChoiceForQuestion.id) {
        correct += 1;
        if (!state.mistakes[q.id]) firstTry += 1;
      }
    }
    return { correct, firstTry, total: gradable };
  }, [submitted, hasAnyChoices, questions, state.answers, state.mistakes]);

  const isLastQuestion = nextIndex === undefined;
  const showReferenceColumns = !quizMode || submitted;

  // Cột 解答/Giải thích chỉ thực sự tồn tại khi showReferenceColumns - ẩn/focus
  // lưu trên cả 4 key nhưng chỉ áp dụng cho các cột đang thật sự có mặt.
  const availableColumns = REF_COLUMN_ORDER.filter(
    (col) => col === "question" || col === "questionVi" || showReferenceColumns,
  );
  const visibleAvailableCount = availableColumns.filter((col) => columnVisible[col]).length;

  function toggleColumnVisible(col: RefColumnKey) {
    if (columnVisible[col] && visibleAvailableCount <= 1) return; // luôn giữ ít nhất 1 cột hiển thị
    setColumnFocus(null);
    const next = { ...columnVisible, [col]: !columnVisible[col] };
    setColumnVisible(next);
    for (const key of REF_COLUMN_ORDER) {
      try {
        window.localStorage.setItem(REF_COLUMN_STORAGE_KEYS[key], next[key] ? "1" : "0");
      } catch {
        // localStorage có thể bị chặn - không ảnh hưởng hiển thị trong phiên hiện tại.
      }
    }
  }

  function toggleColumnFocus(col: RefColumnKey) {
    setColumnFocus((curr) => (curr === col ? null : col));
  }

  // Phím số 1..n = ẩn/hiện cột theo đúng thứ tự đang thực sự hiển thị; Ctrl+số
  // = phóng to cột đó; Ctrl một mình (không kèm phím khác) = bật/tắt chế độ
  // làm bài; Shift một mình = làm lại từ đầu; phím 0 = bật/tắt furigana. Đặt
  // trước early-return bên dưới để không vi phạm rules-of-hooks.
  useColumnKeyboardShortcuts({
    columns: availableColumns,
    onToggleVisible: toggleColumnVisible,
    onToggleFocus: toggleColumnFocus,
    onToggleQuizMode: hasAnyChoices && !submitted ? () => setQuizMode((v) => !v) : undefined,
    onToggleFurigana: () => setShowFurigana((v) => !v),
    onReset: resetTest,
    enabled: !feedback && !practiceOpen,
  });

  if (!ready) return <p className="p-6 text-sm text-muted">Đang khôi phục tiến độ đã lưu…</p>;

  if (!current) {
    return <p className="p-6 text-sm text-muted">Đề thi này chưa có câu hỏi.</p>;
  }

  const selectChoice = (choiceId: string) => {
    if (submitted) return;
    if (!quizMode) {
      setState((s) => ({ ...s, answers: { ...s.answers, [current.id]: choiceId } }));
      return;
    }
    // Chọn đúng rồi vẫn cho bấm lại chọn đáp án khác (vd quay lại câu đã
    // trả lời từ danh sách câu hỏi) - chỉ chặn lúc modal kết quả đang hiện.
    if (feedback) return;
    const choice = current.choices.find((c) => c.id === choiceId);
    if (!choice) return;
    setState((s) => ({
      ...s,
      answers: { ...s.answers, [current.id]: choiceId },
      mistakes: choice.is_correct ? s.mistakes : { ...s.mistakes, [current.id]: true },
    }));
    setFeedback({ choiceLabel: choice.choice_label, correct: choice.is_correct });
  };

  const closeFeedbackAndAdvance = () => {
    setFeedback(null);
    if (isLastQuestion) {
      if (retryIndices) setRetryFinished(true);
      else setSubmitted(true);
    } else {
      goTo(nextIndex);
    }
  };

  const closeFeedbackAndRetry = () => {
    setFeedback(null);
  };

  const toggleFlag = () => {
    setState((s) => ({ ...s, flagged: { ...s.flagged, [current.id]: !s.flagged[current.id] } }));
  };

  const renderedColumns = columnFocus && availableColumns.includes(columnFocus)
    ? [columnFocus]
    : availableColumns.filter((col) => columnVisible[col]);

  function renderChoiceList(language: "ja" | "vi") {
    if (!current || current.choices.length === 0) return null;
    const interactive = language === "ja" || staticQuestions;
    const Choice = interactive ? "button" : "div";

    return (
      <div className="mt-4 flex flex-col gap-2">
        {current.choices.map((choice) => {
          const selected = state.answers[current.id] === choice.id;
          const showResult = submitted || (selected && quizMode);
          let style = interactive ? "border-border hover:border-accent/50" : "border-border";
          if (interactive && showResult && (choice.is_correct || (selected && !staticQuestions && !submitted))) {
            style = "border-emerald-400 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-500/10";
          } else if (interactive && showResult && selected) {
            style = "border-red-300 bg-red-50 dark:border-red-500/40 dark:bg-red-500/10";
          } else if (interactive && selected) {
            style = "border-accent bg-accent/5";
          }

          const label = language === "ja"
            ? choice.choice_jp
              ? renderExamJapanese(choice.choice_jp, choice.choice_furigana_tokens, showFurigana)
              : "Chọn phương án theo đề gốc"
            : choice.choice_vi ?? (hasOriginalPages ? "Xem phương án trong đề gốc" : "(chưa dịch lựa chọn)");
          return (
            <Choice
              key={choice.id}
              {...(interactive ? {
                type: "button" as const,
                onClick: () => selectChoice(choice.id),
                disabled: submitted || Boolean(feedback),
                "aria-pressed": selected,
              } : {})}
              lang={language}
              className={`flex min-w-0 items-start gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${style} ${language === "ja" ? "font-jp" : ""}`}
            >
              <span className="shrink-0 font-semibold">{choice.choice_label}</span>
              <span className="min-w-0 whitespace-pre-line wrap-break-word">{label}</span>
            </Choice>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center gap-3 text-xs text-muted" role="status">
        <span>{status}</span>
        <button type="button" onClick={retry} className="underline">{staticQuestions ? "Đọc lại tiến độ" : "Đồng bộ lại"}</button>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-xs text-muted">
            {test.test_year ?? ""}
            {test.exam_stage ? ` · ${test.exam_stage === "1ji" ? "1次" : "2次"}` : ""}
          </p>
          <h1 className="font-jp text-base font-bold sm:text-lg">{test.title}</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {hasAnyChoices && (
            <button type="button" onClick={retryIndices ? leaveWrongRetry : startWrongRetry}
              disabled={!retryIndices && wrongIndices.length === 0} aria-pressed={retryIndices !== null}
              className="rounded-lg border border-red-300 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 disabled:opacity-40 dark:bg-red-500/10">
              {retryIndices ? "Xem toàn bộ đề" : `Chỉ làm lại câu sai (${wrongIndices.length})`}
            </button>
          )}
          {hasAnyChoices && (
            <button
              type="button"
              onClick={() => setQuizMode((value) => !value)}
              disabled={submitted}
              aria-pressed={quizMode}
              className={`rounded-lg border px-2.5 py-1 text-xs font-medium disabled:opacity-40 ${
                quizMode ? "border-accent bg-accent/5 text-accent" : "border-border text-muted"
              }`}
            >
              Chế độ làm bài {quizMode ? "ON" : "OFF"}
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowFurigana((value) => !value)}
            aria-pressed={showFurigana}
            className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${
              showFurigana ? "border-accent bg-accent/5 text-accent" : "border-border text-muted"
            }`}
          >
            ふりがな {showFurigana ? "ON" : "OFF"}
          </button>
        <button
          type="button"
          onClick={resetTest}
          title="Phím tắt: Shift"
          className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-muted hover:border-accent/60 hover:text-accent"
        >
          ↺ Làm lại từ đầu
        </button>
        <button
          type="button"
          onClick={toggleFlag}
          aria-pressed={state.flagged[current.id]}
          className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${
            state.flagged[current.id]
              ? "border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-400"
              : "border-border text-muted"
          }`}
        >
          {state.flagged[current.id] ? "Đã đánh dấu" : "Đánh dấu"}
        </button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-3">
        <p className="mb-2 text-xs font-semibold uppercase text-muted">{retryIndices ? `Làm lại câu sai · ${retryIndices.length} câu` : "Danh sách câu hỏi"}</p>
        {retryIndices && (
          <div className="mb-3 space-y-2 text-sm" role="status">
            <p>{retryFinished ? "Đã hoàn thành lượt ôn này." : "Đang ôn các câu sai lúc bắt đầu lượt. Câu sửa đúng sẽ chuyển xanh."} Còn {wrongIndices.filter(i => retryIndices.includes(i)).length} câu sai trong lượt này.</p>
            {retryFinished && wrongIndices.length > 0 && <button type="button" onClick={startWrongRetry} className="rounded-lg border border-red-300 px-3 py-1.5 text-red-700">Ôn tiếp các câu còn sai ({wrongIndices.length})</button>}
          </div>
        )}
        <p className="mb-2 text-xs text-muted">Xanh lá: đúng · Đỏ nhạt: chưa đúng · Bấm số câu để xem hoặc làm lại.</p>
        <div className="flex flex-wrap gap-1.5">
          {navigationIndices.map((i) => {
            const q = questions[i];
            const selected = q.choices.find((choice) => choice.id === state.answers[q.id]);
            const status = selected
              ? (selected.is_correct ? "Đúng" : "Chưa đúng")
              : state.mistakes[q.id] ? "Chưa đúng" : "Chưa trả lời";
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Câu ${questionLabel(q)}: ${status}${selected ? `, đã chọn đáp án ${selected.choice_label}` : ""}`}
                aria-current={i === currentIndex ? "step" : undefined}
                className={`relative flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
                  status === "Đúng"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                      : status === "Chưa đúng"
                        ? "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400"
                        : "bg-slate-100 text-muted dark:bg-white/10"
                } ${i === currentIndex ? "ring-2 ring-accent ring-offset-2 ring-offset-surface" : ""}`}
              >
                {questionLabel(q)}
                {selected && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0.5 top-0.5 text-[9px] font-bold leading-none text-blue-800 dark:text-blue-300"
                  >
                    {selected.choice_label}
                  </span>
                )}
                {state.flagged[q.id] && <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {submitted && score && (
        <div className="rounded-2xl border border-accent bg-accent/5 p-4 text-sm font-medium text-accent">
          Kết quả: {score.correct}/{score.total} câu đúng · {score.firstTry} câu đúng ngay lần đầu
        </div>
      )}

      {/* Thanh này đứng ngoài lưới cột nên luôn hiện đủ, kể cả khi 1 cột đang bị
          ẩn hoặc đang phóng to - không có nó thì nút ẩn/phóng to nằm trong
          chính cột đó sẽ biến mất theo, không còn cách gọi lại cột đã ẩn. */}
      <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2">
        <p className="mr-1 text-xs text-muted">Cột hiển thị</p>
        {availableColumns.map((col) => {
          const isOn = columnVisible[col];
          const disableOff = isOn && visibleAvailableCount <= 1;
          return (
            <button
              key={col}
              type="button"
              onClick={() => toggleColumnVisible(col)}
              disabled={disableOff}
              aria-pressed={isOn}
              aria-label={isOn ? `Ẩn ${REF_COLUMN_LABELS[col]}` : `Hiện ${REF_COLUMN_LABELS[col]}`}
              title={isOn ? `Ẩn ${REF_COLUMN_LABELS[col]}` : `Hiện ${REF_COLUMN_LABELS[col]}`}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                isOn ? "border-accent/40 bg-accent-soft text-accent" : "border-border text-muted"
              } ${disableOff ? "cursor-not-allowed opacity-60" : "hover:border-accent/60"}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${isOn ? "bg-accent" : "bg-slate-300 dark:bg-white/20"}`} />
              <span className="font-jp">{REF_COLUMN_LABELS[col]}</span>
            </button>
          );
        })}
        {columnFocus && (
          <button
            type="button"
            onClick={() => setColumnFocus(null)}
            className="ml-auto rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent hover:border-accent/60"
          >
            Thoát chế độ tập trung
          </button>
        )}
      </div>

      {partIndices.length > 1 && !retryIndices && (
        <nav aria-label={`Các phần của câu ${partGroup}`} className="flex flex-wrap gap-2">
          {partIndices.map((index) => (
            <button
              key={questions[index].id}
              type="button"
              onClick={() => goTo(index)}
              aria-current={index === currentIndex ? "step" : undefined}
              disabled={index === currentIndex}
              className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${index === currentIndex
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-surface hover:border-accent/60"}`}
            >
              Câu {questionLabel(questions[index])}
            </button>
          ))}
        </nav>
      )}

      {details?.theoryLinks?.length ? <ReferencePages question={current} theoryLinks={details.theoryLinks} /> : null}

      <div className={`grid gap-3 ${gridColsClass(renderedColumns.length)}`}>
        {renderedColumns.includes("question") && (
        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <ColumnHeader
            col="question"
            focused={columnFocus === "question"}
            visible={columnVisible.question}
            visibleCount={visibleAvailableCount}
            onToggleVisible={() => toggleColumnVisible("question")}
            onToggleFocus={() => toggleColumnFocus("question")}
          />
          <p className="font-jp whitespace-pre-line text-sm leading-relaxed sm:text-base">
            問{questionLabel(current)}. {renderExamJapanese(current.question_jp, current.question_furigana_tokens, showFurigana)}
          </p>

          {current.question_image_path && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getExamSourceImageUrl(current.question_image_path)}
              alt={`Hình câu ${questionLabel(current)}`}
              className="mt-4 h-auto max-w-full rounded-lg border border-border"
            />
          )}

          {hasOriginalPages && (
            <details key={current.id} open={/図|次式|表[1１]/u.test(current.question_jp) || current.choices.some((choice) => !choice.choice_jp) || undefined} className="mt-4 rounded-lg border border-border p-2">
              <summary className="cursor-pointer text-sm font-semibold">Đề gốc · Hình và bảng lựa chọn</summary>
              {details?.originalPages?.map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={href} alt={label} loading="lazy" className="h-auto w-full" />
                  <span className="block px-2 py-1 text-xs text-accent">{label} ↗</span>
                </a>
              ))}
            </details>
          )}

          {current.choices.length === 0 && writtenAnswer && (
            <button
              type="button"
              onClick={() => setPracticeOpen(true)}
              className="mt-4 rounded-lg border border-accent/40 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent/10"
            >
              回答練習
            </button>
          )}

          {renderChoiceList("ja")}
        </section>
        )}

        {renderedColumns.includes("questionVi") && (
        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <ColumnHeader
            col="questionVi"
            focused={columnFocus === "questionVi"}
            visible={columnVisible.questionVi}
            visibleCount={visibleAvailableCount}
            onToggleVisible={() => toggleColumnVisible("questionVi")}
            onToggleFocus={() => toggleColumnFocus("questionVi")}
          />
          {current.question_vi ? (
            <p className="whitespace-pre-line text-sm leading-relaxed sm:text-base">{current.question_vi}</p>
          ) : (
            <p className="text-sm italic text-muted">(chưa dịch)</p>
          )}

          {hasOriginalPages && !renderedColumns.includes("question") && (
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {details?.originalPages?.map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent underline">
                  {label} ↗
                </a>
              ))}
            </div>
          )}
          {renderChoiceList("vi")}
        </section>
        )}

        {renderedColumns.includes("answer") && (
        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <ColumnHeader
            col="answer"
            focused={columnFocus === "answer"}
            visible={columnVisible.answer}
            visibleCount={visibleAvailableCount}
            onToggleVisible={() => toggleColumnVisible("answer")}
            onToggleFocus={() => toggleColumnFocus("answer")}
          />
          {correctChoice ? (
            <div className="space-y-3">
              <p className="font-jp text-sm font-bold text-accent">【正解】{correctChoice.choice_label}</p>
              <p className="font-jp whitespace-pre-line text-sm leading-relaxed sm:text-base">
                {correctChoice.choice_jp
                  ? renderExamJapanese(correctChoice.choice_jp, correctChoice.choice_furigana_tokens, showFurigana)
                  : "Xem hình tương ứng trong đề gốc."}
              </p>
              {staticQuestions && correctChoice.choice_vi && (
                <p lang="vi" className="whitespace-pre-line text-sm leading-relaxed">{correctChoice.choice_vi}</p>
              )}
            </div>
          ) : writtenAnswer ? (
            <div className="space-y-3">
              <p className="font-jp text-sm font-bold text-accent">【解答例】</p>
              <p className="font-jp whitespace-pre-line text-sm leading-relaxed sm:text-base">
                {renderExamJapanese(writtenAnswer, current.answer_furigana_tokens, showFurigana)}
              </p>
            </div>
          ) : (
            <p className="text-sm italic text-muted">
              Câu này chưa có đáp án tiếng Nhật được nhập trong dữ liệu.
            </p>
          )}
        </section>
        )}

        {renderedColumns.includes("explanation") && (
        <section className="min-w-0 rounded-2xl border border-border bg-surface p-4">
          <ColumnHeader
            col="explanation"
            focused={columnFocus === "explanation"}
            visible={columnVisible.explanation}
            visibleCount={visibleAvailableCount}
            onToggleVisible={() => toggleColumnVisible("explanation")}
            onToggleFocus={() => toggleColumnFocus("explanation")}
          />
          {current.answer_vi && (
            <div className="mb-4 rounded-xl border border-border bg-slate-50 p-3 dark:bg-white/5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Dịch đáp án</p>
              <p className="whitespace-pre-line text-sm leading-relaxed">{current.answer_vi}</p>
            </div>
          )}
          {current.explanation_jp && (
            <div className="mb-4 border-b border-border pb-4">
              <p className="mb-2 font-jp text-xs font-semibold uppercase tracking-wide text-muted">日本語解説</p>
              <p lang="ja" className="font-jp whitespace-pre-line text-sm leading-relaxed">{renderExamJapanese(current.explanation_jp, current.explanation_furigana_tokens ?? [], showFurigana)}</p>
            </div>
          )}
          {current.explanation_vi || details?.explanation ? (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                {current.explanation_jp ? "Giải thích tiếng Việt" : "Giải thích"}
              </p>
              {details?.explanation ?? <p className="whitespace-pre-line text-sm leading-relaxed">{current.explanation_vi}</p>}
            </div>
          ) : (
            <p className="text-sm italic text-muted">Chưa có phần giải thích cho câu này.</p>
          )}
          {!details?.theoryLinks?.length && <ReferencePages question={current} />}
          {sourceUrl && <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-lg border border-accent/40 px-2.5 py-1.5 text-xs font-semibold text-accent hover:bg-accent/10">📖 {sourceLabel} ↗</a>}
        </section>
        )}
      </div>

      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => previousIndex !== undefined && goTo(previousIndex)}
          disabled={previousIndex === undefined}
          className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-40"
        >
          ← Câu trước
        </button>
        <span className="text-xs text-muted">
          {retryIndices ? `Câu sai ${navigationPosition + 1}/${retryIndices.length} · Câu gốc ${questionLabel(current)}` : `Câu ${currentIndex + 1}/${questions.length}`}
        </span>
        {hasAnyChoices && isLastQuestion ? (
          <button
            type="button"
            onClick={() => retryIndices ? setRetryFinished(true) : setSubmitted(true)}
            disabled={retryIndices ? retryFinished : submitted}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground disabled:opacity-40"
          >
            {retryIndices ? "Hoàn thành lượt ôn" : "Nộp bài"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => nextIndex !== undefined && goTo(nextIndex)}
            disabled={nextIndex === undefined}
            className="rounded-lg border border-border px-4 py-2 text-sm disabled:opacity-40"
          >
            {nextPartLabel ?? "Câu sau →"}
          </button>
        )}
      </div>

      {feedback && (
        <AnswerFeedbackModal
          correct={feedback.correct}
          choiceLabel={feedback.choiceLabel}
          officialAnswer={staticQuestions && correctChoice ? {
            label: correctChoice.choice_label,
            text: correctChoice.choice_vi ?? correctChoice.choice_jp,
          } : undefined}
          explanation={details?.explanation ?? current.explanation_vi}
          explanationJp={current.explanation_jp}
          explanationJpTokens={current.explanation_furigana_tokens ?? []}
          showFurigana={showFurigana}
          sourceUrl={sourceUrl}
          sourceLabel={sourceLabel}
          isLastQuestion={isLastQuestion}
          nextLabel={nextPartLabel}
          onRetry={closeFeedbackAndRetry}
          onNext={closeFeedbackAndAdvance}
        />
      )}

      {practiceOpen && writtenAnswer && (
        <AnswerPracticeModal
          key={current.id}
          questionNumber={current.question_number}
          officialAnswerJp={writtenAnswer}
          onClose={() => setPracticeOpen(false)}
        />
      )}
    </div>
  );
}

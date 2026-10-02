"use client";

import { Fragment, useEffect, useMemo, useState } from "react";

import { renderBlockColumns } from "./content-block-view";
import type { ContentBlock, ExerciseBlock, FuriganaToken } from "@/lib/exam/content-blocks";
import { segmentJapaneseText } from "@/lib/japanese-text";

type ColumnKey = "jp" | "vi" | "explanation";

const COLUMN_ORDER: ColumnKey[] = ["jp", "vi", "explanation"];

const COLUMN_LABELS: Record<ColumnKey, { title: string; subtitle: string }> = {
  jp: { title: "原文", subtitle: "Nội dung sách" },
  vi: { title: "Dịch", subtitle: "Tiếng Việt" },
  explanation: { title: "Giải thích", subtitle: "解説" },
};

/** localStorage keys - đặt tên đúng theo spec để phiên sau còn nhận ra. */
const STORAGE_KEYS: Record<ColumnKey, string> = {
  jp: "jpgo-exam-show-original",
  vi: "jpgo-exam-show-translation",
  explanation: "jpgo-exam-show-explanation",
};
const FURIGANA_STORAGE_KEY = "jpgo-exam-show-furigana";

type Visibility = Record<ColumnKey, boolean>;

const ALL_VISIBLE: Visibility = { jp: true, vi: true, explanation: true };

function readStoredVisibility(): Visibility {
  if (typeof window === "undefined") return ALL_VISIBLE;
  const read = (key: string) => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? true : raw === "1";
    } catch {
      return true;
    }
  };
  return { jp: read(STORAGE_KEYS.jp), vi: read(STORAGE_KEYS.vi), explanation: read(STORAGE_KEYS.explanation) };
}

function readStoredFurigana(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const raw = window.localStorage.getItem(FURIGANA_STORAGE_KEY);
    return raw === null ? true : raw === "1";
  } catch {
    return true;
  }
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

function SingleColumnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
    </svg>
  );
}

function AllColumnsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <path strokeLinecap="round" d="M9.5 5v14M14.5 5v14" />
    </svg>
  );
}

function desktopGridColsClass(count: number): string {
  // Giải thích thường ngắn hơn hẳn nguyên văn/bản dịch (nhiều chỗ chỉ 1-2 câu
  // hoặc bỏ trống) nên chia 5:5:3 thay vì gần bằng nhau như trước, đỡ phí
  // khoảng trắng ở cột giải thích và có thêm chỗ cho 2 cột còn lại.
  if (count >= 3) return "md:grid-cols-[5fr_5fr_3fr]";
  if (count === 2) return "md:grid-cols-2";
  return "md:grid-cols-1";
}


type ExerciseColumnKey = "questionJp" | "questionVi" | "solutionJp" | "solutionVi";

const EXERCISE_COLUMN_ORDER: ExerciseColumnKey[] = ["questionJp", "questionVi", "solutionJp", "solutionVi"];

const EXERCISE_COLUMN_LABELS: Record<ExerciseColumnKey, { title: string; subtitle: string }> = {
  questionJp: { title: "問題", subtitle: "Câu hỏi" },
  questionVi: { title: "Dịch 問題", subtitle: "Dịch câu hỏi" },
  solutionJp: { title: "解説", subtitle: "Lời giải Nhật" },
  solutionVi: { title: "Dịch 解説", subtitle: "Dịch lời giải + giải thích" },
};

function renderExerciseJapanese(text: string, tokens: FuriganaToken[] = [], showFurigana = false) {
  const segments =
    showFurigana && tokens.length > 0
      ? segmentJapaneseText(text, [], tokens)
      : [{ text, start: 0, word: null, reading: undefined }];

  return segments.map((segment, index) =>
    segment.reading ? (
      <ruby key={`${segment.start}-${index}`}>
        {segment.text}
        <rt className="text-[0.65em] font-medium leading-none text-muted">{segment.reading}</rt>
      </ruby>
    ) : (
      <Fragment key={`${segment.start}-${index}`}>{segment.text}</Fragment>
    ),
  );
}

function ExerciseWorkspace({ blocks }: { blocks: ExerciseBlock[] }) {
  const [mobileTab, setMobileTab] = useState<ExerciseColumnKey>("questionJp");
  const [showFurigana, setShowFurigana] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowFurigana(readStoredFurigana());
  }, []);

  function toggleFurigana() {
    setShowFurigana((current) => {
      const next = !current;
      try {
        window.localStorage.setItem(FURIGANA_STORAGE_KEY, next ? "1" : "0");
      } catch {
        // Không chặn việc học nếu localStorage bị vô hiệu hóa.
      }
      return next;
    });
  }

  function renderExerciseCell(block: ExerciseBlock, column: ExerciseColumnKey) {
    if (column === "questionJp") {
      return (
        <div className="space-y-3">
          <p className="font-jp text-xs font-bold text-accent">【問題 No.{block.number}】</p>
          <p className="font-jp whitespace-pre-line leading-relaxed">
            {renderExerciseJapanese(block.question_jp, block.question_furigana_tokens, showFurigana)}
          </p>
          {block.figure_placeholder_jp && (
            <div className="rounded-lg border border-dashed border-border bg-slate-50/60 p-3 font-jp text-xs text-muted dark:bg-white/5">
              【図】{block.figure_placeholder_jp}
            </div>
          )}
          {block.choices_jp.length > 0 && (
            <ol className="space-y-1 pl-5 font-jp text-sm">
              {block.choices_jp.map((choice, index) => (
                <li key={index}>{renderExerciseJapanese(choice, block.choices_furigana_tokens?.[index] ?? [], showFurigana)}</li>
              ))}
            </ol>
          )}
        </div>
      );
    }

    if (column === "questionVi") {
      return (
        <div className="space-y-3">
          <p className="text-xs font-bold text-accent">Câu {block.number}</p>
          {block.question_vi ? (
            <p className="whitespace-pre-line leading-relaxed">{block.question_vi}</p>
          ) : (
            <p className="text-sm italic text-muted">(chưa dịch)</p>
          )}
          {block.choices_vi && block.choices_vi.length > 0 && (
            <ol className="space-y-1 pl-5 text-sm">
              {block.choices_vi.map((choice, index) => <li key={index}>{choice}</li>)}
            </ol>
          )}
        </div>
      );
    }

    if (column === "solutionJp") {
      return (
        <div className="space-y-3">
          <p className="font-jp text-xs font-bold text-accent">
            【解説 No.{block.number}】{block.reference_jp ? ` ${block.reference_jp}` : ""}
          </p>
          <p className="font-jp whitespace-pre-line leading-relaxed">
            {renderExerciseJapanese(block.solution_jp, block.solution_furigana_tokens, showFurigana)}
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {block.solution_vi ? (
          <p className="whitespace-pre-line leading-relaxed">{block.solution_vi}</p>
        ) : (
          <p className="text-sm italic text-muted">(chưa dịch)</p>
        )}
        {block.explanation_vi && (
          <div className="rounded-lg bg-sky-50 p-3 text-sm leading-relaxed text-sky-950 dark:bg-sky-500/10 dark:text-sky-100">
            <p className="mb-1 font-semibold">Giải thích thêm</p>
            <p className="whitespace-pre-line">{block.explanation_vi}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2">
        <p className="text-xs text-muted">総合問題 · 4 cột</p>
        <button
          type="button"
          onClick={toggleFurigana}
          aria-pressed={showFurigana}
          className={`ml-auto flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
            showFurigana
              ? "border-accent/40 bg-accent-soft text-accent"
              : "border-border text-muted hover:border-accent/60 hover:text-foreground"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${showFurigana ? "bg-accent" : "bg-slate-300 dark:bg-white/20"}`} />
          <span className="font-jp">ふりがな</span> {showFurigana ? "ON" : "OFF"}
        </button>
      </div>

      <div className="hidden gap-x-4 lg:grid lg:grid-cols-4">
        {EXERCISE_COLUMN_ORDER.map((column) => (
          <div key={column} className="border-b-2 border-border pb-2">
            <p className="font-jp text-sm font-bold">{EXERCISE_COLUMN_LABELS[column].title}</p>
            <p className="text-[11px] text-muted">{EXERCISE_COLUMN_LABELS[column].subtitle}</p>
          </div>
        ))}
        {blocks.map((block) => (
          <Fragment key={block.number}>
            {EXERCISE_COLUMN_ORDER.map((column) => (
              <div key={column} className="min-w-0 border-b border-border py-4">
                {renderExerciseCell(block, column)}
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div className="lg:hidden">
        <div className="grid grid-cols-2 border-b border-border sm:grid-cols-4">
          {EXERCISE_COLUMN_ORDER.map((column) => (
            <button
              key={column}
              type="button"
              onClick={() => setMobileTab(column)}
              className={`border-b-2 px-2 py-2 text-xs font-medium transition ${
                mobileTab === column ? "border-accent text-accent" : "border-transparent text-muted"
              }`}
            >
              <span className="font-jp">{EXERCISE_COLUMN_LABELS[column].title}</span>
            </button>
          ))}
        </div>
        <div className="divide-y divide-border">
          {blocks.map((block) => (
            <div key={block.number} className="py-4">
              {renderExerciseCell(block, mobileTab)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Tự chuyển sang workspace 4 cột khi trang gồm các block 総合問題.
 * Các sách lý thuyết cũ vẫn dùng workspace 3 cột, không bị thay đổi.
 */
export function ColumnWorkspace({ blocks }: { blocks: ContentBlock[] }) {
  const exerciseBlocks = blocks.filter((block): block is ExerciseBlock => block.type === "exercise");
  if (exerciseBlocks.length > 0 && exerciseBlocks.length === blocks.length) {
    return <ExerciseWorkspace blocks={exerciseBlocks} />;
  }
  return <StandardColumnWorkspace blocks={blocks} />;
}

/**
 * Workspace 3 cột (原文 / Dịch / Giải thích) cho trang đọc 2級電気工事施工管理.
 *
 * - HIDE/SHOW: `visible` (persist localStorage) - người dùng chủ động chọn tổ
 *   hợp cột muốn xem, luôn giữ ít nhất 1 cột.
 * - FOCUS: `focus` (không persist qua refresh) - tạm thời chỉ phóng to 1 cột,
 *   không đụng tới `visible` nên thoát Focus luôn khôi phục đúng tổ hợp trước đó.
 * - FURIGANA: chỉ render các token cách đọc đã được kiểm tra trong dữ liệu;
 *   bật/tắt độc lập và ghi nhớ bằng localStorage.
 * Desktop: CSS grid song song. Mobile: tab, không ép nằm ngang.
 */
function StandardColumnWorkspace({ blocks }: { blocks: ContentBlock[] }) {
  const [visible, setVisible] = useState<Visibility>(ALL_VISIBLE);
  const [focus, setFocus] = useState<ColumnKey | null>(null);
  const [mobileTab, setMobileTab] = useState<ColumnKey>("jp");
  const [showFurigana, setShowFurigana] = useState(true);

  useEffect(() => {
    // Đọc localStorage sau khi hydrate xong (SSR không có window) - cùng
    // pattern với AppChrome cho sidebar, tránh lệch HTML server/client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(readStoredVisibility());
    setShowFurigana(readStoredFurigana());
  }, []);

  const visibleCount = COLUMN_ORDER.filter((key) => visible[key]).length;

  function persistVisibility(next: Visibility) {
    setVisible(next);
    for (const key of COLUMN_ORDER) {
      try {
        window.localStorage.setItem(STORAGE_KEYS[key], next[key] ? "1" : "0");
      } catch {
        // localStorage có thể bị chặn - không ảnh hưởng hiển thị trong phiên hiện tại.
      }
    }
  }

  function toggleVisible(col: ColumnKey) {
    if (visible[col] && visibleCount <= 1) return; // luôn giữ ít nhất 1 cột hiển thị
    setFocus(null);
    persistVisibility({ ...visible, [col]: !visible[col] });
  }

  function toggleFocus(col: ColumnKey) {
    setFocus((current) => (current === col ? null : col));
  }

  function showOnly(cols: ColumnKey[]) {
    setFocus(null);
    persistVisibility({ jp: cols.includes("jp"), vi: cols.includes("vi"), explanation: cols.includes("explanation") });
  }

  function toggleFurigana() {
    setShowFurigana((current) => {
      const next = !current;
      try {
        window.localStorage.setItem(FURIGANA_STORAGE_KEY, next ? "1" : "0");
      } catch {
        // Preference vẫn hoạt động trong phiên hiện tại nếu localStorage bị chặn.
      }
      return next;
    });
  }

  const isJpOnly = visible.jp && !visible.vi && !visible.explanation;
  const isAllVisible = visible.jp && visible.vi && visible.explanation;
  const renderedColumns = focus ? [focus] : COLUMN_ORDER.filter((key) => visible[key]);
  const rows = useMemo(
    () => blocks.map((block, index) => ({ key: index, ...renderBlockColumns(block, showFurigana) })),
    [blocks, showFurigana],
  );
  const mobileActiveTab = renderedColumns.includes(mobileTab) ? mobileTab : renderedColumns[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => showOnly(["jp"])}
            aria-pressed={isJpOnly}
            className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
              isJpOnly ? "border-accent/40 bg-accent-soft text-accent" : "border-border text-muted hover:border-accent/60 hover:text-foreground"
            }`}
          >
            <SingleColumnIcon />
            <span className="font-jp">日本語のみ</span>
          </button>
          <button
            type="button"
            onClick={() => showOnly(["jp", "vi", "explanation"])}
            aria-pressed={isAllVisible}
            className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
              isAllVisible ? "border-accent/40 bg-accent-soft text-accent" : "border-border text-muted hover:border-accent/60 hover:text-foreground"
            }`}
          >
            <AllColumnsIcon />
            <span className="font-jp">すべて表示</span>
          </button>
        </div>

        <div className="h-5 w-px shrink-0 bg-border" aria-hidden />

        <button
          type="button"
          onClick={toggleFurigana}
          aria-pressed={showFurigana}
          title={showFurigana ? "Ẩn hiragana trên Kanji" : "Hiện hiragana trên Kanji"}
          className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
            showFurigana ? "border-accent/40 bg-accent-soft text-accent" : "border-border text-muted hover:border-accent/60 hover:text-foreground"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${showFurigana ? "bg-accent" : "bg-slate-300 dark:bg-white/20"}`} />
          <span className="font-jp">ふりがな</span> {showFurigana ? "ON" : "OFF"}
        </button>

        <div className="ml-auto flex flex-wrap items-center gap-1.5">
          {COLUMN_ORDER.map((col) => {
            const isOn = visible[col];
            const disableOff = isOn && visibleCount <= 1;
            return (
              <button
                key={col}
                type="button"
                onClick={() => toggleVisible(col)}
                disabled={disableOff}
                aria-pressed={isOn}
                aria-label={isOn ? `Ẩn ${COLUMN_LABELS[col].title}` : `Hiện ${COLUMN_LABELS[col].title}`}
                title={isOn ? `Ẩn ${COLUMN_LABELS[col].title}` : `Hiện ${COLUMN_LABELS[col].title}`}
                className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                  isOn ? "border-accent/40 bg-accent-soft text-accent" : "border-border text-muted"
                } ${disableOff ? "cursor-not-allowed opacity-60" : "hover:border-accent/60"}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isOn ? "bg-accent" : "bg-slate-300 dark:bg-white/20"}`} />
                <span className="font-jp">{COLUMN_LABELS[col].title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop: grid song song, số cột và tỉ lệ tự tính theo renderedColumns. */}
      <div className={`hidden gap-x-6 md:grid ${desktopGridColsClass(renderedColumns.length)}`}>
        {renderedColumns.map((col) => (
          <ColumnHeader
            key={`head-${col}`}
            col={col}
            focused={focus === col}
            visible={visible[col]}
            visibleCount={visibleCount}
            onToggleVisible={() => toggleVisible(col)}
            onToggleFocus={() => toggleFocus(col)}
          />
        ))}
        {rows.map((row) =>
          renderedColumns.map((col) => (
            <div key={`${row.key}-${col}`} className="border-b border-border py-1.5">
              {row[col] ?? <span className="text-sm text-muted/60">—</span>}
            </div>
          )),
        )}
      </div>

      {/* Mobile/tablet hẹp: tab, không ép nằm ngang. */}
      <div className="md:hidden">
        {renderedColumns.length > 1 && (
          <div className="flex border-b border-border">
            {renderedColumns.map((col) => (
              <button
                key={col}
                type="button"
                onClick={() => setMobileTab(col)}
                className={`flex-1 border-b-2 py-2 text-sm font-medium transition ${
                  mobileActiveTab === col ? "border-accent text-accent" : "border-transparent text-muted"
                }`}
              >
                <span className="font-jp">{COLUMN_LABELS[col].title}</span>
              </button>
            ))}
          </div>
        )}
        {mobileActiveTab && (
          <div className="pt-3">
            <ColumnHeader
              col={mobileActiveTab}
              focused={focus === mobileActiveTab}
              visible={visible[mobileActiveTab]}
              visibleCount={visibleCount}
              onToggleVisible={() => toggleVisible(mobileActiveTab)}
              onToggleFocus={() => toggleFocus(mobileActiveTab)}
            />
            <div className="flex flex-col gap-4 pt-2">
              {rows.map((row) => (
                <div key={row.key} className="border-b border-border pb-4 last:border-0">
                  {row[mobileActiveTab] ?? <span className="text-sm text-muted/60">—</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ColumnHeader({
  col,
  focused,
  visible,
  visibleCount,
  onToggleVisible,
  onToggleFocus,
}: {
  col: ColumnKey;
  focused: boolean;
  visible: boolean;
  visibleCount: number;
  onToggleVisible: () => void;
  onToggleFocus: () => void;
}) {
  const disableHide = visible && visibleCount <= 1;
  const label = COLUMN_LABELS[col];

  return (
    <div className="flex items-center justify-between gap-2 border-b border-border pb-2">
      <div className="min-w-0">
        <p className="font-jp truncate text-sm font-semibold">{label.title}</p>
        <p className="truncate text-[11px] text-muted">{label.subtitle}</p>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={onToggleVisible}
          disabled={disableHide}
          aria-label={visible ? `Ẩn ${label.title}` : `Hiện ${label.title}`}
          title={visible ? `Ẩn ${label.title}` : `Hiện ${label.title}`}
          className={`flex h-7 w-7 items-center justify-center rounded-lg text-muted transition hover:bg-slate-100 dark:hover:bg-white/10 hover:text-foreground ${
            disableHide ? "cursor-not-allowed opacity-40" : ""
          }`}
        >
          <EyeIcon />
        </button>
        <button
          type="button"
          onClick={onToggleFocus}
          aria-label={focused ? `Thoát chế độ tập trung ${label.title}` : `Phóng to ${label.title}`}
          title={focused ? "Thoát chế độ tập trung" : `Phóng to ${label.title}`}
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

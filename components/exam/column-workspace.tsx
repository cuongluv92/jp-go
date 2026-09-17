"use client";

import { useEffect, useMemo, useState } from "react";

import { renderBlockColumns } from "./content-block-view";
import type { ContentBlock } from "@/lib/exam/content-blocks";

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

function desktopGridColsClass(count: number): string {
  // Giải thích thường ngắn hơn hẳn nguyên văn/bản dịch (nhiều chỗ chỉ 1-2 câu
  // hoặc bỏ trống) nên chia 5:5:3 thay vì gần bằng nhau như trước, đỡ phí
  // khoảng trắng ở cột giải thích và có thêm chỗ cho 2 cột còn lại.
  if (count >= 3) return "md:grid-cols-[5fr_5fr_3fr]";
  if (count === 2) return "md:grid-cols-2";
  return "md:grid-cols-1";
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
export function ColumnWorkspace({ blocks }: { blocks: ContentBlock[] }) {
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

  const renderedColumns = focus ? [focus] : COLUMN_ORDER.filter((key) => visible[key]);
  const rows = useMemo(
    () => blocks.map((block, index) => ({ key: index, ...renderBlockColumns(block, showFurigana) })),
    [blocks, showFurigana],
  );
  const mobileActiveTab = renderedColumns.includes(mobileTab) ? mobileTab : renderedColumns[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
        <button
          type="button"
          onClick={() => showOnly(["jp"])}
          className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-foreground transition hover:border-accent hover:text-accent"
        >
          <span className="font-jp">日本語のみ</span>
        </button>
        <button
          type="button"
          onClick={() => showOnly(["jp", "vi", "explanation"])}
          className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-foreground transition hover:border-accent hover:text-accent"
        >
          <span className="font-jp">すべて表示</span>
        </button>
        <button
          type="button"
          onClick={toggleFurigana}
          aria-pressed={showFurigana}
          title={showFurigana ? "Ẩn hiragana trên Kanji" : "Hiện hiragana trên Kanji"}
          className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
            showFurigana ? "border-accent/40 bg-accent-soft text-accent" : "border-border text-muted hover:border-accent/60"
          }`}
        >
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
            <div key={`${row.key}-${col}`} className="border-b border-border py-4">
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

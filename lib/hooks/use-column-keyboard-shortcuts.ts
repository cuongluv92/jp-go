"use client";

import { useEffect, useRef } from "react";

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

interface ColumnKeyboardShortcutsOptions<T extends string> {
  // Thứ tự cột đang có mặt - phím số 1..n tương ứng columns[0..n-1] (tối đa 9).
  columns: T[];
  onToggleVisible: (col: T) => void;
  onToggleFocus: (col: T) => void;
  // Không truyền (undefined) ở trang không có chế độ làm bài.
  onToggleQuizMode?: () => void;
  onToggleFurigana?: () => void;
  // Không truyền ở trang không có đáp án để reset (vd trang đọc sách thường).
  onReset?: () => void;
  enabled?: boolean;
}

/**
 * Phím tắt dùng chung cho mọi khu vực có cột ẩn/hiện kiểu 問題/解答/...:
 * - 1..n: ẩn/hiện cột tương ứng theo đúng thứ tự `columns` hiện có.
 * - Ctrl+1..n: phóng to (tập trung) cột tương ứng.
 * - Ctrl bấm một mình (không kèm phím khác): bật/tắt chế độ làm bài.
 * - Shift bấm một mình (không kèm phím khác): làm lại từ đầu (reset đáp án).
 * - 0: bật/tắt furigana.
 */
export function useColumnKeyboardShortcuts<T extends string>({
  columns,
  onToggleVisible,
  onToggleFocus,
  onToggleQuizMode,
  onToggleFurigana,
  onReset,
  enabled = true,
}: ColumnKeyboardShortcutsOptions<T>) {
  // true nếu phím bổ trợ (Ctrl/Shift) đang được giữ mà chưa kèm phím nào khác -
  // dùng để phân biệt "bấm một mình" (bật/tắt làm bài, reset) với tổ hợp
  // (Ctrl+số = phóng to cột).
  const ctrlAloneRef = useRef(false);
  const shiftAloneRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (isTypingTarget(event.target)) return;

      if (event.key === "Control") {
        ctrlAloneRef.current = true;
        return;
      }
      if (event.key === "Shift") {
        shiftAloneRef.current = true;
        return;
      }

      // Phím bất kỳ khác đi kèm Ctrl/Shift nghĩa là không còn "bấm một mình"
      // nữa - kể cả khi phím đó không khớp ý nghĩa nào bên dưới (vd Ctrl+C,
      // Shift+chọn chữ) để không bị bật/tắt/reset nhầm lúc thả phím bổ trợ ra.
      if (event.ctrlKey) ctrlAloneRef.current = false;
      if (event.shiftKey) shiftAloneRef.current = false;

      if (event.ctrlKey) {
        if (event.key >= "1" && event.key <= "9") {
          const index = Number(event.key) - 1;
          if (index < columns.length) {
            event.preventDefault();
            onToggleFocus(columns[index]);
          }
        }
        return;
      }

      if (event.shiftKey) return;

      if (event.key >= "1" && event.key <= "9") {
        const index = Number(event.key) - 1;
        if (index < columns.length) {
          event.preventDefault();
          onToggleVisible(columns[index]);
        }
        return;
      }

      if (event.key === "0" && onToggleFurigana) {
        event.preventDefault();
        onToggleFurigana();
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === "Control") {
        if (ctrlAloneRef.current) onToggleQuizMode?.();
        ctrlAloneRef.current = false;
      } else if (event.key === "Shift") {
        if (shiftAloneRef.current) onReset?.();
        shiftAloneRef.current = false;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [columns, onToggleVisible, onToggleFocus, onToggleQuizMode, onToggleFurigana, onReset, enabled]);
}

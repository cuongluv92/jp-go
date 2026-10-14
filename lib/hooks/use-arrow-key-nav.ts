"use client";

import { useEffect } from "react";

interface ArrowKeyNavOptions {
  onPrev?: () => void;
  onNext?: () => void;
  enabled?: boolean;
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

/**
 * Phím tắt điều hướng trước/sau dùng chung toàn app: ← = trước, → = sau.
 * Cố tình KHÔNG dùng ↑/↓ - 2 phím đó phải giữ nguyên hành vi cuộn trang mặc
 * định của trình duyệt (giống lăn chuột), không được "nhảy" sang trang/câu
 * khác như ←/→.
 */
export function useArrowKeyNav({ onPrev, onNext, enabled = true }: ArrowKeyNavOptions) {
  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (isTypingTarget(event.target)) return;
      // Có phím bổ trợ (Ctrl/Alt/Meta/Shift) nghĩa là người dùng đang dùng tổ
      // hợp khác (vd Alt+← quay lại trang trình duyệt, Shift+← bôi đen chữ) -
      // nhường lại cho trình duyệt, không giành phím.
      if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) return;

      if (event.key === "ArrowLeft") {
        if (!onPrev) return;
        event.preventDefault();
        onPrev();
      } else if (event.key === "ArrowRight") {
        if (!onNext) return;
        event.preventDefault();
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, enabled]);
}

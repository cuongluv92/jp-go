"use client";

import { useEffect } from "react";

interface ArrowKeyNavOptions {
  // Trái hoặc Lên đều lùi lại (trước) - để người dùng dùng tay nào cũng được.
  onPrev?: () => void;
  // Phải hoặc Xuống đều tiến tới (sau).
  onNext?: () => void;
  enabled?: boolean;
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

/** Phím tắt điều hướng trước/sau dùng chung toàn app: ←/↑ = trước, →/↓ = sau. */
export function useArrowKeyNav({ onPrev, onNext, enabled = true }: ArrowKeyNavOptions) {
  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (isTypingTarget(event.target)) return;

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        if (!onPrev) return;
        event.preventDefault();
        onPrev();
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        if (!onNext) return;
        event.preventDefault();
        onNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, enabled]);
}

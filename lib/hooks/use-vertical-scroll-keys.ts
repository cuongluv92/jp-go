"use client";

import { useEffect, useRef } from "react";

// px mỗi khung hình (~60fps) - tốc độ vừa phải, mượt như giữ lăn chuột liên tục.
const SCROLL_STEP_PER_FRAME = 14;

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

function isScrollableY(el: Element): boolean {
  const style = window.getComputedStyle(el);
  const overflowY = style.overflowY;
  return (overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight + 1;
}

/**
 * Tìm vùng thực sự cuộn được, đi từ phần tử đang nhận sự kiện lên tổ tiên.
 * KHÔNG dùng document.activeElement làm điểm xuất phát vì lúc chưa có gì
 * được focus (vd vừa tải trang xong), activeElement là <body> - không có tổ
 * tiên cuộn được nào để tìm lên cả.
 */
function findScrollContainer(start: Element | null): Element | null {
  let el = start;
  while (el && el !== document.body && el !== document.documentElement) {
    if (isScrollableY(el)) return el;
    el = el.parentElement;
  }
  // Layout của app luôn có đúng 1 <main> làm vùng nội dung chính (xem
  // components/app-chrome.tsx). Desktop: chính <main> đó tự overflow-y-auto -
  // dùng luôn. Mobile: <main> không tự cuộn (cả window/document mới là vùng
  // cuộn) - trả null để code gọi dùng window.scrollBy.
  const main = document.querySelector("main");
  if (main && isScrollableY(main)) return main;
  return null;
}

function scrollContainerBy(container: Element | null, delta: number) {
  if (container) {
    container.scrollBy({ top: delta, behavior: "auto" });
  } else {
    window.scrollBy({ top: delta, behavior: "auto" });
  }
}

/**
 * ↑/↓ không kèm phím bổ trợ = tự tay cuộn vùng nội dung đang xem theo bước
 * nhỏ mỗi khung hình (mượt khi giữ phím, giống lăn chuột) thay vì để trình
 * duyệt tự xử lý - tránh hẳn kiểu "nhảy" sang liên kết/vị trí khác (gặp khi
 * bật caret browsing, hoặc trang có nhiều vùng cuộn lồng nhau khiến trình
 * duyệt tự chuyển focus thay vì cuộn). Không bao giờ chọn chữ hay đổi focus
 * vì ta tự scrollBy() thủ công, không dùng hành vi mặc định của phím.
 */
export function useVerticalScrollKeys(enabled = true) {
  const activeDirectionRef = useRef<1 | -1 | null>(null);
  const containerRef = useRef<Element | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    function stop() {
      activeDirectionRef.current = null;
    }

    function tick() {
      const direction = activeDirectionRef.current;
      if (direction == null) {
        rafIdRef.current = null;
        return;
      }
      scrollContainerBy(containerRef.current, direction * SCROLL_STEP_PER_FRAME);
      rafIdRef.current = window.requestAnimationFrame(tick);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
      // Có phím bổ trợ = người dùng đang dùng tổ hợp khác (vd Ctrl+↑ của hệ
      // điều hành) - nhường lại, không giành phím.
      if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) return;
      if (isTypingTarget(event.target)) return;
      // Đã có nơi khác (vd ô tìm kiếm toàn app) tự xử lý và preventDefault
      // rồi thì không giành nữa - ví dụ danh sách kết quả tìm kiếm dùng ↑/↓
      // để chọn dòng.
      if (event.defaultPrevented) return;

      // Luôn chặn hành vi mặc định của phím - kể cả các lần bàn phím tự lặp
      // khi giữ phím - để trình duyệt không tự cuộn/tự đổi focus song song
      // với vòng lặp cuộn thủ công bên dưới.
      event.preventDefault();

      const direction = event.key === "ArrowDown" ? 1 : -1;
      if (activeDirectionRef.current !== direction) {
        activeDirectionRef.current = direction;
        containerRef.current = findScrollContainer(event.target instanceof Element ? event.target : null);
      }
      if (rafIdRef.current == null) rafIdRef.current = window.requestAnimationFrame(tick);
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") stop();
    }

    // Mất focus cửa sổ (đổi app, đổi tab) giữa chừng lúc đang giữ phím - dừng
    // lại, tránh cuộn mãi không thấy keyup (vd phím được thả ở app khác).
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", stop);
    document.addEventListener("visibilitychange", stop);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", stop);
      document.removeEventListener("visibilitychange", stop);
      if (rafIdRef.current != null) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, [enabled]);
}

"use client";

import type { MouseEvent, ReactNode } from "react";

import { buildMaziiWebUrl, isAppleTouchDevice, type MaziiSearchKind } from "@/lib/mazii";

export function MaziiLink({
  kind,
  query,
  className = "",
  children = "Mở trong Mazii ↗",
}: {
  kind: MaziiSearchKind;
  query: string;
  className?: string;
  children?: ReactNode;
}) {
  const webUrl = buildMaziiWebUrl(kind, query);

  function openMazii(event: MouseEvent<HTMLAnchorElement>) {
    if (!isAppleTouchDevice(navigator.userAgent, navigator.platform, navigator.maxTouchPoints)) return;
    event.preventDefault();

    // Mazii công khai scheme mở ứng dụng nhưng không công bố scheme tìm kiếm
    // ổn định. Sao chép sẵn từ/mẫu rồi mở app; nếu app chưa cài thì về trang web.
    void navigator.clipboard?.writeText(query).catch(() => undefined);
    let timer = 0;
    const stopFallback = () => {
      if (document.visibilityState === "hidden") window.clearTimeout(timer);
    };
    document.addEventListener("visibilitychange", stopFallback, { once: true });
    timer = window.setTimeout(() => {
      document.removeEventListener("visibilitychange", stopFallback);
      if (document.visibilityState === "visible") window.location.assign(webUrl);
    }, 1200);
    window.location.assign("mazii://");
  }

  return (
    <a href={webUrl} target="_blank" rel="noreferrer" onClick={openMazii} className={className}>
      {children}
    </a>
  );
}

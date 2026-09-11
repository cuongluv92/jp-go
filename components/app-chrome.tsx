"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { TopHeader } from "@/components/top-header";

const LAYOUT_STORAGE_KEY = "jp-go-layout-mode";
type LayoutMode = "mobile" | "desktop";

function getPageKind(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/vocabulary") return "vocabulary";
  if (pathname.startsWith("/vocabulary/")) return "vocabulary-detail";
  if (pathname === "/grammar") return "grammar";
  if (pathname.startsWith("/grammar/")) return "grammar-detail";
  if (pathname === "/kanji") return "kanji";
  if (pathname.startsWith("/kanji/")) return "kanji-detail";
  if (pathname === "/plan") return "plan";
  if (pathname === "/practice") return "practice";
  if (pathname === "/review") return "review";
  if (pathname === "/progress") return "progress";
  if (pathname === "/flashcards") return "flashcards";
  return "generic";
}

/**
 * Khung chung của app.
 * - Mobile mode giữ nguyên giao diện hẹp + bottom navigation.
 * - Desktop mode chuyển thành workspace: sidebar trái + nội dung chính rộng.
 * Lựa chọn được lưu riêng trên trình duyệt của người dùng.
 */
export function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("mobile");

  useEffect(() => {
    try {
      const savedMode = window.localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (savedMode === "desktop" || savedMode === "mobile") {
        setLayoutMode(savedMode);
      }
    } catch {
      // localStorage có thể bị chặn; khi đó chỉ dùng chế độ mặc định.
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.jpLayout = layoutMode;
    document.documentElement.dataset.jpPage = getPageKind(pathname);

    return () => {
      delete document.documentElement.dataset.jpPage;
    };
  }, [layoutMode, pathname]);

  const isDesktopMode = layoutMode === "desktop";

  function toggleLayoutMode() {
    const nextMode: LayoutMode = isDesktopMode ? "mobile" : "desktop";
    setLayoutMode(nextMode);
    try {
      window.localStorage.setItem(LAYOUT_STORAGE_KEY, nextMode);
    } catch {
      // Không ảnh hưởng việc chuyển giao diện trong phiên hiện tại.
    }
  }

  if (isLoginPage) {
    return <main className="mx-auto w-full max-w-md flex-1 px-4 py-4 sm:max-w-lg">{children}</main>;
  }

  if (isDesktopMode) {
    return (
      <>
        <TopHeader desktopMode onToggleDesktop={toggleLayoutMode} />
        <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-[220px_minmax(0,1fr)] items-start gap-7 px-5 py-6 lg:grid-cols-[232px_minmax(0,1fr)] lg:gap-8 lg:px-8">
          <BottomNav desktopMode />
          <main className="min-w-0 pb-10">{children}</main>
        </div>
      </>
    );
  }

  return (
    <>
      <TopHeader desktopMode={false} onToggleDesktop={toggleLayoutMode} />
      <main className="mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-4 sm:max-w-lg">{children}</main>
      <BottomNav desktopMode={false} />
    </>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { DetailQuickNavigator } from "@/components/detail-quick-navigator";
import { GlobalCommandPalette } from "@/components/global-command-palette";
import { TopHeader } from "@/components/top-header";
import styles from "@/components/app-chrome-polish.module.css";

const LAYOUT_STORAGE_KEY = "jp-go-layout-mode";
const SIDEBAR_STORAGE_KEY = "jp-go-desktop-sidebar-collapsed";
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
 * - Desktop mode là workspace: sidebar trái + nội dung rộng + command palette.
 * Lựa chọn layout/sidebar được lưu riêng trên trình duyệt.
 */
export function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("mobile");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    try {
      const savedMode = window.localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (savedMode === "desktop" || savedMode === "mobile") setLayoutMode(savedMode);
      setSidebarCollapsed(window.localStorage.getItem(SIDEBAR_STORAGE_KEY) === "1");
    } catch {
      // localStorage có thể bị chặn; khi đó chỉ dùng chế độ mặc định.
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.jpLayout = layoutMode;
    document.documentElement.dataset.jpPage = getPageKind(pathname);
    document.documentElement.dataset.jpSidebar = sidebarCollapsed ? "collapsed" : "expanded";

    return () => {
      delete document.documentElement.dataset.jpPage;
    };
  }, [layoutMode, pathname, sidebarCollapsed]);

  useEffect(() => {
    if (layoutMode !== "desktop") return;

    function handleGlobalShortcut(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable;
      const commandK = (event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k";
      const slashSearch = event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey && !isTyping;

      if (commandK || slashSearch) {
        event.preventDefault();
        setCommandOpen(true);
      }
    }

    window.addEventListener("keydown", handleGlobalShortcut);
    return () => window.removeEventListener("keydown", handleGlobalShortcut);
  }, [layoutMode]);

  const isDesktopMode = layoutMode === "desktop";

  function toggleLayoutMode() {
    const nextMode: LayoutMode = isDesktopMode ? "mobile" : "desktop";
    setLayoutMode(nextMode);
    if (nextMode === "mobile") setCommandOpen(false);
    try {
      window.localStorage.setItem(LAYOUT_STORAGE_KEY, nextMode);
    } catch {
      // Không ảnh hưởng việc chuyển giao diện trong phiên hiện tại.
    }
  }

  function toggleSidebar() {
    const nextValue = !sidebarCollapsed;
    setSidebarCollapsed(nextValue);
    try {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, nextValue ? "1" : "0");
    } catch {
      // Không ảnh hưởng việc thu gọn sidebar trong phiên hiện tại.
    }
  }

  if (isLoginPage) {
    return <main className="mx-auto w-full max-w-md flex-1 px-4 py-4 sm:max-w-lg">{children}</main>;
  }

  if (isDesktopMode) {
    const desktopGridClass = sidebarCollapsed
      ? "mx-auto grid w-full max-w-7xl flex-1 grid-cols-[76px_minmax(0,1fr)] items-start gap-5 px-5 py-6 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-6 lg:px-8"
      : "mx-auto grid w-full max-w-7xl flex-1 grid-cols-[220px_minmax(0,1fr)] items-start gap-7 px-5 py-6 lg:grid-cols-[232px_minmax(0,1fr)] lg:gap-8 lg:px-8";

    return (
      <>
        <TopHeader desktopMode onToggleDesktop={toggleLayoutMode} onOpenSearch={() => setCommandOpen(true)} />
        <div className={desktopGridClass}>
          <BottomNav desktopMode sidebarCollapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar} />
          <main className={`${styles.desktopMain} min-w-0 pb-10`}>
            <DetailQuickNavigator variant="top" />
            {children}
            <DetailQuickNavigator variant="bottom" />
          </main>
        </div>
        <GlobalCommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      </>
    );
  }

  return (
    <>
      <TopHeader desktopMode={false} onToggleDesktop={toggleLayoutMode} />
      <main className={`${styles.mobileMain} mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-4 sm:max-w-lg`}>
        {children}
        <DetailQuickNavigator variant="bottom" />
      </main>
      <BottomNav desktopMode={false} />
    </>
  );
}

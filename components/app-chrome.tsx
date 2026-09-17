"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { DetailQuickNavigator } from "@/components/detail-quick-navigator";
import { GlobalCommandPalette } from "@/components/global-command-palette";
import { MobileNavDrawer } from "@/components/mobile-nav-drawer";
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
  if (pathname.startsWith("/exam")) return "exam";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

  function setSidebarState(nextValue: boolean) {
    setSidebarCollapsed(nextValue);
    try {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, nextValue ? "1" : "0");
    } catch {
      // Không ảnh hưởng việc đóng/mở sidebar trong phiên hiện tại.
    }
  }

  function toggleSidebar() {
    setSidebarState(!sidebarCollapsed);
  }

  if (isLoginPage) {
    return <main className="mx-auto w-full max-w-md flex-1 px-4 py-4 sm:max-w-lg">{children}</main>;
  }

  if (isDesktopMode) {
    // App shell full-height cố định (header + hàng dưới cao đúng phần còn
    // lại của viewport). Sidebar và main mỗi bên tự overflow-y-auto riêng -
    // đây là nguyên nhân gốc của bug "sidebar bị cắt, không scroll được":
    // bản cũ dùng `position: sticky` không giới hạn chiều cao, dựa vào
    // scroll của CẢ TRANG nên khi trang ngắn hơn danh sách menu, phần menu
    // dưới không có cách nào cuộn tới. Nhị phân mở/đóng giữ nguyên - đóng là
    // không render sidebar (không giữ khoảng trắng), main giãn full width.
    return (
      <div className="flex h-dvh flex-col">
        <TopHeader
          desktopMode
          onToggleDesktop={toggleLayoutMode}
          onOpenSearch={() => setCommandOpen(true)}
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={toggleSidebar}
        />
        <div className="flex min-h-0 flex-1">
          {/* Sidebar chỉ đóng/mở qua nút gạt ☰ ở TopHeader (toggleSidebar) -
              không tự đóng khi bấm 1 mục điều hướng, theo yêu cầu người dùng. */}
          {!sidebarCollapsed && <BottomNav desktopMode />}
          <main className={`${styles.desktopMain} min-w-0 flex-1 overflow-y-auto overflow-x-hidden px-5 py-6 lg:px-8`}>
            <DetailQuickNavigator variant="top" />
            {children}
            <DetailQuickNavigator variant="bottom" />
          </main>
        </div>
        <GlobalCommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      </div>
    );
  }

  return (
    <>
      <TopHeader desktopMode={false} onToggleDesktop={toggleLayoutMode} onOpenMenu={() => setMobileMenuOpen(true)} />
      <main className={`${styles.mobileMain} mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-4 sm:max-w-lg`}>
        {children}
        <DetailQuickNavigator variant="bottom" />
      </main>
      <BottomNav desktopMode={false} />
      <MobileNavDrawer open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

interface TopHeaderProps {
  desktopMode: boolean;
  onToggleDesktop: () => void;
  onOpenSearch?: () => void;
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
  /** Mobile only: mở drawer menu (nhóm "Nội dung" không có chỗ trong bottom tab bar). */
  onOpenMenu?: () => void;
}

function SidebarToggleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 4.5v15" strokeLinecap="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

/**
 * 5 tab chính (bottom tab bar mobile / đầu sidebar desktop) không có "trang
 * trước" hợp lý trong luồng điều hướng của app - mọi trang KHÁC (từ vựng,
 * Kanji, ngữ pháp, ôn thi, flashcard, quản lý dữ liệu...) đều được mở ra từ
 * một trang khác nên luôn có "quay lại" hợp lý.
 */
const PRIMARY_TAB_ROOTS = new Set(["/", "/practice", "/review", "/progress", "/plan"]);

function shouldShowBack(pathname: string): boolean {
  return !PRIMARY_TAB_ROOTS.has(pathname);
}

function LayoutIcon({ desktopMode }: { desktopMode: boolean }) {
  if (desktopMode) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="7" y="3" width="10" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18h4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  );
}

function getBreadcrumbs(pathname: string): string[] {
  if (pathname === "/") return ["Trang chủ"];
  if (pathname.startsWith("/vocabulary/")) return ["Từ vựng", "Chi tiết"];
  if (pathname === "/vocabulary") return ["Từ vựng"];
  if (pathname.startsWith("/kanji/")) return ["Kanji", "Chi tiết"];
  if (pathname === "/kanji") return ["Kanji"];
  if (pathname.startsWith("/grammar/")) return ["Ngữ pháp", "Chi tiết"];
  if (pathname === "/grammar") return ["Ngữ pháp"];
  if (pathname.startsWith("/plan")) return ["Đang học"];
  if (pathname.startsWith("/practice")) return ["Luyện tập"];
  if (pathname.startsWith("/review")) return ["Ôn tập"];
  if (pathname.startsWith("/progress")) return ["Tiến độ"];
  if (pathname.startsWith("/flashcards")) return ["Flashcard"];
  if (pathname.startsWith("/admin")) return ["Quản lý dữ liệu"];
  return ["jp-go"];
}

export function TopHeader({ desktopMode, onToggleDesktop, onOpenSearch, sidebarCollapsed, onToggleSidebar, onOpenMenu }: TopHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);
  const showBack = shouldShowBack(pathname);

  function goBack() {
    // router.back() phụ thuộc lịch sử trình duyệt - nếu người dùng vào thẳng
    // trang này (mở link, F5...) thì không có lịch sử để quay lại, khi đó về
    // thẳng trang chủ thay vì kẹt lại đúng trang hiện tại.
    if (window.history.length > 1) router.back();
    else router.push("/");
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  // Full-width: không còn max-w-7xl - toolbar dùng hết chiều rộng viewport.
  // Chiều cao cố định qua --app-header-h để sidebar/nội dung tính offset
  // chính xác thay vì mỗi nơi tự đoán 1 số px (nguyên nhân lệch sticky cũ).
  const innerClassName = desktopMode
    ? "flex h-[var(--app-header-h)] w-full items-center px-5 lg:px-8"
    : "mx-auto flex h-[var(--app-header-h)] w-full max-w-md items-center justify-between px-4 sm:max-w-lg";

  return (
    // backdrop-blur chỉ bật ở desktop (GPU khoẻ hơn hẳn điện thoại) - header
    // này sticky, repaint mỗi lần cuộn trang, blur liên tục là gánh nặng
    // GPU rõ rệt trên di động cấu hình thấp. Mobile dùng nền gần như đặc.
    <header className={`safe-top sticky top-0 z-30 shrink-0 border-b border-border/90 ${desktopMode ? "bg-surface/90 backdrop-blur-xl" : "bg-surface/98"}`}>
      <div className={innerClassName}>
        {desktopMode && onToggleSidebar && (
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label={sidebarCollapsed ? "Mở sidebar" : "Đóng sidebar"}
            aria-pressed={!sidebarCollapsed}
            title={sidebarCollapsed ? "Mở sidebar" : "Đóng sidebar"}
            className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <SidebarToggleIcon />
          </button>
        )}
        {desktopMode && showBack && (
          <button
            type="button"
            onClick={goBack}
            aria-label="Quay lại"
            title="Quay lại"
            className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <BackIcon />
          </button>
        )}
        {!desktopMode && showBack && (
          <button
            type="button"
            onClick={goBack}
            aria-label="Quay lại"
            title="Quay lại"
            className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <BackIcon />
          </button>
        )}
        {!desktopMode && !showBack && onOpenMenu && (
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Mở menu"
            title="Mở menu"
            className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <HamburgerIcon />
          </button>
        )}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className={`flex items-center justify-center bg-gradient-accent font-bold text-accent-foreground ${desktopMode ? "h-10 w-10 rounded-2xl text-base" : "h-8 w-8 rounded-xl text-sm"}`}>
            日
          </span>
          <span>
            <span className={`${desktopMode ? "text-xl" : "text-lg"} block font-semibold tracking-tight`}>jp-go</span>
            {desktopMode && <span className="block text-[11px] font-medium tracking-wide text-muted">Japanese Learning Workspace</span>}
          </span>
        </Link>

        {desktopMode && (
          <div className="mx-5 hidden min-w-0 flex-1 items-center gap-5 md:flex lg:mx-8">
            <div className="min-w-0 flex-1">
              <div className="flex min-w-0 items-center gap-1.5 text-xs font-medium text-muted">
                {breadcrumbs.map((item, index) => (
                  <span key={`${item}-${index}`} className="flex min-w-0 items-center gap-1.5">
                    {index > 0 && <span className="text-slate-300">/</span>}
                    <span className={index === breadcrumbs.length - 1 ? "truncate font-semibold text-foreground" : "truncate"}>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenSearch}
              className="group flex w-full max-w-[330px] items-center gap-2.5 rounded-2xl border border-border bg-slate-50/85 px-3.5 py-2.5 text-left shadow-sm transition hover:border-accent/30 hover:bg-white hover:shadow-md"
              aria-label="Tìm kiếm toàn app"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0 text-muted group-hover:text-accent">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-3.5-3.5" />
              </svg>
              <span className="min-w-0 flex-1 truncate text-xs font-medium text-muted">Tìm từ, Kanji, ngữ pháp...</span>
              <kbd className="shrink-0 rounded-lg border border-border bg-white px-1.5 py-0.5 text-[9px] font-semibold text-muted">Ctrl K</kbd>
            </button>
          </div>
        )}

        <div className={`${desktopMode ? "ml-auto" : ""} flex shrink-0 items-center gap-1.5`}>
          {desktopMode && (
            <span className="mr-1 hidden rounded-full border border-border bg-slate-50 px-3 py-1 text-[11px] font-semibold text-muted xl:inline-flex">
              Desktop
            </span>
          )}
          <Link
            href="/admin"
            aria-label="Quản lý dữ liệu"
            title="Cài đặt / quản lý dữ liệu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button
            type="button"
            onClick={onToggleDesktop}
            aria-label={desktopMode ? "Chuyển về giao diện điện thoại" : "Chuyển sang giao diện desktop"}
            aria-pressed={desktopMode}
            title={desktopMode ? "Về giao diện điện thoại" : "Mở giao diện desktop"}
            className={`hidden h-9 w-9 items-center justify-center rounded-full transition md:flex ${
              desktopMode ? "bg-accent-soft text-accent" : "text-muted hover:bg-slate-100 hover:text-foreground"
            }`}
          >
            <LayoutIcon desktopMode={desktopMode} />
          </button>
          <button
            type="button"
            onClick={handleLogout}
            aria-label="Đăng xuất"
            title="Đăng xuất"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

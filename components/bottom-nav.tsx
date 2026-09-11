"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavItem {
  href: string;
  label: string;
  description: string;
  icon: ReactNode;
}

interface BottomNavProps {
  desktopMode: boolean;
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5 12 4l9 7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="4" y="4.5" width="16" height="15" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5v3M16 3.5v3M4 10h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5l2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 016.5 3H11v16H6.5A2.5 2.5 0 004 21.5v-16zM20 5.5A2.5 2.5 0 0017.5 3H13v16h4.5a2.5 2.5 0 012.5 2.5v-16z" />
    </svg>
  );
}

function KanjiIcon() {
  return <span className="font-jp text-base font-bold leading-none">漢</span>;
}

function GrammarIcon() {
  return <span className="font-jp text-base font-bold leading-none">文</span>;
}

function CollapseIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d={collapsed ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} />
    </svg>
  );
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Trang chủ", description: "Tổng quan học tập", icon: <HomeIcon /> },
  { href: "/plan", label: "Lộ trình", description: "Kế hoạch theo ngày", icon: <PlanIcon /> },
  { href: "/practice", label: "Luyện tập", description: "Bài tập tổng hợp", icon: <PencilIcon /> },
  { href: "/review", label: "Ôn tập", description: "Nội dung đến hạn", icon: <ClockIcon /> },
  { href: "/progress", label: "Tiến độ", description: "Theo dõi kết quả", icon: <ChartIcon /> },
];

const CONTENT_ITEMS: NavItem[] = [
  { href: "/vocabulary", label: "Từ vựng", description: "Tra cứu & học từ", icon: <BookIcon /> },
  { href: "/kanji", label: "Kanji", description: "Âm đọc & từ ghép", icon: <KanjiIcon /> },
  { href: "/grammar", label: "Ngữ pháp", description: "Mẫu câu & bài tập", icon: <GrammarIcon /> },
];

function isItemActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function DesktopNavGroup({ items, pathname, collapsed }: { items: NavItem[]; pathname: string; collapsed: boolean }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = isItemActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              title={collapsed ? item.label : undefined}
              className={`group flex items-center rounded-2xl transition ${
                collapsed ? "justify-center px-2 py-2.5" : "gap-3 px-3 py-2.5"
              } ${isActive ? "bg-accent text-accent-foreground shadow-sm shadow-accent/20" : "text-foreground hover:bg-slate-50"}`}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/15" : "bg-slate-100 text-muted group-hover:text-foreground"}`}>
                {item.icon}
              </span>
              {!collapsed && (
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{item.label}</span>
                  <span className={`mt-0.5 block truncate text-[11px] ${isActive ? "text-white/75" : "text-muted"}`}>{item.description}</span>
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function BottomNav({ desktopMode, sidebarCollapsed = false, onToggleSidebar }: BottomNavProps) {
  const pathname = usePathname();

  if (desktopMode) {
    return (
      <aside className="sticky top-[88px] self-start">
        <nav
          aria-label="Điều hướng chính"
          className={`rounded-3xl border border-border/90 bg-surface/95 shadow-sm backdrop-blur transition-all ${sidebarCollapsed ? "p-2" : "p-3"}`}
        >
          {sidebarCollapsed ? (
            <div className="mb-2 flex justify-center py-1">
              <span className="font-jp flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent text-sm font-bold text-white shadow-sm">日</span>
            </div>
          ) : (
            <div className="mb-2 px-3 pb-2 pt-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Workspace</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Học tiếng Nhật</p>
            </div>
          )}

          <DesktopNavGroup items={NAV_ITEMS} pathname={pathname} collapsed={sidebarCollapsed} />

          <div className="my-3 h-px bg-border" />
          {!sidebarCollapsed && <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Nội dung</p>}
          <DesktopNavGroup items={CONTENT_ITEMS} pathname={pathname} collapsed={sidebarCollapsed} />

          {!sidebarCollapsed && (
            <div className="mt-3 rounded-2xl bg-slate-50 px-3 py-3">
              <p className="text-xs font-semibold text-foreground">Phím tắt nhanh</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-muted">
                <span>Tìm mọi thứ</span>
                <kbd className="rounded-md border border-border bg-white px-1.5 py-0.5 font-semibold">Ctrl K</kbd>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted">
                <span>Tìm nhanh</span>
                <kbd className="rounded-md border border-border bg-white px-1.5 py-0.5 font-semibold">/</kbd>
              </div>
            </div>
          )}

          {onToggleSidebar && (
            <button
              type="button"
              onClick={onToggleSidebar}
              title={sidebarCollapsed ? "Mở rộng sidebar" : "Thu gọn sidebar"}
              aria-label={sidebarCollapsed ? "Mở rộng sidebar" : "Thu gọn sidebar"}
              className={`mt-3 flex w-full items-center rounded-xl border border-border text-xs font-semibold text-muted transition hover:border-accent/30 hover:bg-accent-soft hover:text-accent ${sidebarCollapsed ? "justify-center px-2 py-2.5" : "justify-between px-3 py-2"}`}
            >
              {!sidebarCollapsed && <span>Thu gọn</span>}
              <CollapseIcon collapsed={sidebarCollapsed} />
            </button>
          )}
        </nav>
      </aside>
    );
  }

  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/90 shadow-[0_-4px_16px_-8px_rgba(15,23,42,0.12)] backdrop-blur-lg">
      <ul className="mx-auto grid w-full max-w-md grid-cols-5 sm:max-w-lg">
        {NAV_ITEMS.map((item) => {
          const isActive = isItemActive(pathname, item.href);
          return (
            <li key={item.href} className="flex justify-center py-1.5">
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 rounded-2xl px-3.5 py-1.5 text-[11px] font-medium transition-colors ${
                  isActive ? "bg-accent-soft text-accent" : "text-muted active:bg-slate-100"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CONTENT_ITEMS, isNavItemActive, NAV_ITEMS, type NavItem } from "@/components/nav-items";

interface BottomNavProps {
  desktopMode: boolean;
  /** Gọi khi người dùng bấm 1 mục điều hướng ở sidebar desktop (dùng để tự đóng sidebar). */
  onNavigate?: () => void;
}

function DesktopNavGroup({
  items,
  pathname,
  onNavigate,
}: {
  items: NavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = isNavItemActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              data-active={isActive ? "true" : undefined}
              className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition ${
                isActive ? "bg-accent text-accent-foreground shadow-sm shadow-accent/20" : "text-foreground hover:bg-slate-50"
              }`}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/15" : "bg-slate-100 text-muted group-hover:text-foreground"}`}>
                {item.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{item.label}</span>
                <span className={`mt-0.5 block truncate text-[11px] ${isActive ? "text-white/75" : "text-muted"}`}>{item.description}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Sidebar desktop (panel cao hết vùng còn lại dưới header, tự scroll riêng -
 * xem AppChrome cho cấu trúc flex bao ngoài) và bottom tab bar mobile.
 */
export function BottomNav({ desktopMode, onNavigate }: BottomNavProps) {
  const pathname = usePathname();

  if (desktopMode) {
    return (
      <aside
        aria-label="Điều hướng chính"
        className="flex h-full w-[240px] shrink-0 flex-col overflow-y-auto overflow-x-hidden border-r border-border/80 bg-surface/95 px-3 py-4 lg:w-[256px]"
      >
        <div className="mb-2 px-3 pb-2 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Workspace</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Học tiếng Nhật</p>
        </div>

        <DesktopNavGroup items={NAV_ITEMS} pathname={pathname} onNavigate={onNavigate} />

        <div className="my-3 h-px shrink-0 bg-border" />
        <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Nội dung</p>
        <DesktopNavGroup items={CONTENT_ITEMS} pathname={pathname} onNavigate={onNavigate} />

        <div className="mt-3 shrink-0 rounded-2xl bg-slate-50 px-3 py-3">
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
      </aside>
    );
  }

  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/90 shadow-[0_-4px_16px_-8px_rgba(15,23,42,0.12)] backdrop-blur-lg">
      <ul className="mx-auto grid w-full max-w-md grid-cols-5 sm:max-w-lg">
        {NAV_ITEMS.map((item) => {
          const isActive = isNavItemActive(pathname, item.href);
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

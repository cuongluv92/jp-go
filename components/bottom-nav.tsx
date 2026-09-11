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

function DesktopNavGroup({ items, pathname }: { items: NavItem[]; pathname: string }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const isActive = isItemActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
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

export function BottomNav({ desktopMode }: BottomNavProps) {
  const pathname = usePathname();

  if (desktopMode) {
    return (
      <aside className="sticky top-[88px] self-start">
        <nav aria-label="Điều hướng chính" className="rounded-3xl border border-border/90 bg-surface/95 p-3 shadow-sm backdrop-blur">
          <div className="mb-2 px-3 pb-2 pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Workspace</p>
            <p className="mt-1 text-sm font-semibold text-foreground">Học tiếng Nhật</p>
          </div>

          <DesktopNavGroup items={NAV_ITEMS} pathname={pathname} />

          <div className="my-3 h-px bg-border" />
          <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Nội dung</p>
          <DesktopNavGroup items={CONTENT_ITEMS} pathname={pathname} />

          <div className="mt-3 rounded-2xl bg-slate-50 px-3 py-3">
            <p className="text-xs font-semibold text-foreground">Chế độ Desktop</p>
            <p className="mt-1 text-[11px] leading-5 text-muted">Không gian rộng hơn để tra cứu, học và làm bài tập thoải mái.</p>
          </div>
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

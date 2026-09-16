"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { CONTENT_ITEMS, isNavItemActive, NAV_ITEMS, type NavItem } from "@/components/nav-items";

interface MobileNavDrawerProps {
  open: boolean;
  onClose: () => void;
}

function MobileNavGroup({ items, pathname, onNavigate }: { items: NavItem[]; pathname: string; onNavigate: () => void }) {
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
              className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition ${
                isActive ? "bg-accent text-accent-foreground shadow-sm shadow-accent/20" : "text-foreground active:bg-slate-100"
              }`}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/15" : "bg-slate-100 text-muted"}`}>
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
 * Drawer menu cho mobile (☰ ở TopHeader mở/đóng). Bottom tab bar mobile chỉ
 * có 5 mục điều hướng chính; drawer này thêm đường vào cho nhóm "Nội dung"
 * (Từ vựng/Kanji/Ngữ pháp/Ôn thi) vốn không có chỗ trong tab bar cố định.
 * Tự cuộn riêng khi danh sách dài, đóng khi chọn mục / bấm nền / bấm X.
 */
export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <button
        type="button"
        aria-label="Đóng menu"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"
      />
      <div className="safe-top absolute inset-y-0 left-0 flex w-[82vw] max-w-xs flex-col bg-surface shadow-xl">
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3.5">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-accent text-sm font-bold text-accent-foreground shadow-sm">日</span>
            <span className="text-lg font-semibold tracking-tight">jp-go</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng menu"
            title="Đóng menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Menu điều hướng" className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
          <MobileNavGroup items={NAV_ITEMS} pathname={pathname} onNavigate={onClose} />
          <div className="my-3 h-px bg-border" />
          <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Nội dung</p>
          <MobileNavGroup items={CONTENT_ITEMS} pathname={pathname} onNavigate={onClose} />
        </nav>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavItem {
  href: string;
  label: string;
  icon: ReactNode;
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"
      />
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

// "Lộ trình" trỏ vào /plan (tab con "Học tiếp"/"Chọn lộ trình mới") — tách
// riêng khỏi /vocabulary để Từ vựng (vào từ thẻ lớn ở Trang chủ) chỉ thuần
// là danh sách từ vựng, không lẫn nội dung quản lý lộ trình.
const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Trang chủ", icon: <HomeIcon /> },
  { href: "/plan", label: "Lộ trình", icon: <PlanIcon /> },
  { href: "/practice", label: "Luyện tập", icon: <PencilIcon /> },
  { href: "/review", label: "Ôn tập", icon: <ClockIcon /> },
  { href: "/progress", label: "Tiến độ", icon: <ChartIcon /> },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/90 shadow-[0_-4px_16px_-8px_rgba(15,23,42,0.12)] backdrop-blur-lg">
      <ul className="mx-auto grid w-full max-w-md grid-cols-5 sm:max-w-lg">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
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

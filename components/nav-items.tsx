import type { ReactNode } from "react";

export interface NavItem {
  href: string;
  label: string;
  description: string;
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

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

/**
 * Nhóm điều hướng chính - dùng cho bottom tab bar mobile (giữ đúng 5 mục cố
 * định, không đổi). "Đang học" (route /plan, giữ nguyên logic trang Lộ
 * trình cũ) cố tình đặt NGAY SAU "Tiến độ" theo yêu cầu sắp xếp lại menu.
 */
export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Trang chủ", description: "Tổng quan học tập", icon: <HomeIcon /> },
  { href: "/practice", label: "Luyện tập", description: "Bài tập tổng hợp", icon: <PencilIcon /> },
  { href: "/review", label: "Ôn tập", description: "Nội dung đến hạn", icon: <ClockIcon /> },
  { href: "/progress", label: "Tiến độ", description: "Theo dõi kết quả", icon: <ChartIcon /> },
  { href: "/plan", label: "Đang học", description: "Kế hoạch theo ngày", icon: <PlanIcon /> },
];

const EXAM_NAV_ITEM: NavItem = {
  href: "/exam",
  label: "2級電気工事施工管理",
  description: "Sách + đề thi chứng chỉ",
  icon: <BoltIcon />,
};

/**
 * Nhóm điều hướng chính cho sidebar desktop + mobile drawer (không bị giới
 * hạn 5 mục như bottom tab bar) - "2級電気工事施工管理" nằm ngay sau
 * "Đang học", cùng nhóm chính, không còn ở nhóm "Nội dung" phía dưới.
 */
export const PRIMARY_SIDEBAR_ITEMS: NavItem[] = [...NAV_ITEMS, EXAM_NAV_ITEM];

/** Nhóm nội dung tra cứu - hiện ở sidebar desktop (nhóm "Nội dung") và mobile drawer. */
export const CONTENT_ITEMS: NavItem[] = [
  { href: "/vocabulary", label: "Từ vựng", description: "Tra cứu & học từ", icon: <BookIcon /> },
  { href: "/kanji", label: "Kanji", description: "Âm đọc & từ ghép", icon: <KanjiIcon /> },
  { href: "/grammar", label: "Ngữ pháp", description: "Mẫu câu & bài tập", icon: <GrammarIcon /> },
];

export function isNavItemActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import type { JlptLevel } from "@/lib/types";

interface SectionTile {
  label: string;
  count: number;
  href: string;
  icon: ReactNode;
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 15.5v-10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 15.5A2.5 2.5 0 016.5 18H20" />
    </svg>
  );
}

function KanjiIcon() {
  return (
    <span aria-hidden className="font-jp text-xl font-bold leading-none">
      日
    </span>
  );
}

function GrammarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h9l5 5v11a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6" />
    </svg>
  );
}

/**
 * Các mục lớn ở Trang chủ — bấm vào đi thẳng vào từng mảng nội dung (Từ
 * vựng/Kanji/Ngữ pháp) thay vì phải mở rộng theo từng cấp độ trước. Mục nào
 * chưa có nội dung (count = 0) vẫn bấm được nhưng hiện nhãn "sắp có" và mờ đi.
 * `level` (chọn qua LevelChips cạnh bên) quyết định số lượng hiển thị và
 * link có kèm `?level=` để vào thẳng đúng cấp đang xem.
 */
export function SectionTiles({
  level,
  vocabCount,
  kanjiCount,
  grammarCount,
}: {
  level: JlptLevel;
  vocabCount: number;
  kanjiCount: number;
  grammarCount: number;
}) {
  const tiles: SectionTile[] = [
    ...(level === "N3" || level === "N2"
      ? []
      : [{ label: "Từ vựng", count: vocabCount, href: `/vocabulary?level=${level}`, icon: <BookIcon /> }]),
    { label: "Kanji", count: kanjiCount, href: `/kanji?level=${level}`, icon: <KanjiIcon /> },
    { label: "Ngữ pháp", count: grammarCount, href: `/grammar?level=${level}`, icon: <GrammarIcon /> },
  ];

  return (
    <div className={`grid gap-3 ${tiles.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {tiles.map((tile) => (
        <Link
          key={tile.label}
          href={tile.href}
          className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-2 py-4 text-center shadow-sm transition active:scale-[0.97]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">{tile.icon}</span>
          <span className="text-sm font-semibold text-foreground">{tile.label}</span>
          <span className="text-xs text-muted">{tile.count > 0 ? `${tile.count} mục` : "sắp có"}</span>
        </Link>
      ))}
    </div>
  );
}

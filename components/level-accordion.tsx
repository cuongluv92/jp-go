"use client";

import { useState } from "react";

import type { JlptLevel } from "@/lib/types";

interface LevelCounts {
  vocab: number;
  kanji: number;
  grammar: number;
}

interface LevelAccordionProps {
  /** Số lượng nội dung thật hiện có theo từng cấp — 0 nghĩa là "sắp có". */
  countsByLevel: Record<JlptLevel, LevelCounts>;
}

const LEVELS: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

function SubjectRow({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between px-3 py-1.5 text-sm">
      <span className="text-muted">{label}</span>
      {count > 0 ? (
        <span className="font-medium text-foreground">{count}</span>
      ) : (
        <span className="text-xs text-muted">sắp có</span>
      )}
    </div>
  );
}

/** Danh sách N1–N5 dạng xổ (≡), mỗi cấp xổ ra Từ vựng/Kanji/Ngữ pháp. */
export function LevelAccordion({ countsByLevel }: LevelAccordionProps) {
  const [openLevel, setOpenLevel] = useState<JlptLevel | null>(null);

  return (
    <ul className="flex flex-col gap-2">
      {LEVELS.map((level) => {
        const counts = countsByLevel[level];
        const total = counts.vocab + counts.kanji + counts.grammar;
        const isOpen = openLevel === level;
        return (
          <li key={level} className="overflow-hidden rounded-xl border border-border bg-surface">
            <button
              type="button"
              onClick={() => setOpenLevel(isOpen ? null : level)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-left"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-base leading-none text-muted">
                  ☰
                </span>
                <span className="text-sm font-semibold">{level}</span>
              </span>
              <span className="text-xs text-muted">{total > 0 ? `${total} mục` : "sắp có"}</span>
            </button>
            {isOpen && (
              <div className="border-t border-border py-1">
                <SubjectRow label="Từ vựng" count={counts.vocab} />
                <SubjectRow label="Kanji" count={counts.kanji} />
                <SubjectRow label="Ngữ pháp" count={counts.grammar} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

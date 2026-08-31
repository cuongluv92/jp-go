"use client";

import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";

/** Hàng chọn nhanh cấp độ N5→N1 — chọn xong các mục lớn bên dưới cập nhật theo đúng cấp đó. */
export function LevelChips({ level, onChange }: { level: JlptLevel; onChange: (level: JlptLevel) => void }) {
  return (
    <div className="flex gap-2">
      {JLPT_LEVELS.map((lv) => (
        <button
          key={lv}
          type="button"
          onClick={() => onChange(lv)}
          className={`flex-1 rounded-xl border px-2 py-2 text-sm font-semibold transition ${
            level === lv ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-foreground"
          }`}
        >
          {lv}
        </button>
      ))}
    </div>
  );
}

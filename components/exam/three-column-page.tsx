"use client";

import { Fragment, useState } from "react";

import { renderBlockColumns } from "./content-block-view";
import type { ContentBlock } from "@/lib/exam/content-blocks";

type Tab = "jp" | "vi" | "explanation";

const TABS: { key: Tab; label: string }[] = [
  { key: "jp", label: "原文" },
  { key: "vi", label: "Dịch" },
  { key: "explanation", label: "Giải thích" },
];

/**
 * Yêu cầu bắt buộc: desktop hiển thị 3 cột song song (nguyên văn / dịch /
 * giải thích), mobile chuyển sang tab để tránh horizontal scroll khó dùng.
 * Dữ liệu chỉ render 1 lần; CSS (hidden md:grid / md:hidden) quyết định
 * layout nào hiển thị theo breakpoint, tab mobile chỉ ẩn/hiện bằng state.
 */
export function ThreeColumnPage({ blocks }: { blocks: ContentBlock[] }) {
  const [activeTab, setActiveTab] = useState<Tab>("jp");
  const rows = blocks.map((block, index) => ({ key: index, ...renderBlockColumns(block) }));

  return (
    <div>
      {/* Desktop: 3 cột song song. Giải thích thường ngắn hơn hẳn 2 cột kia
          (nguyên văn/bản dịch luôn có nội dung, giải thích nhiều chỗ chỉ 1-2
          câu hoặc bỏ trống) nên chia tỉ lệ 5:5:3 thay vì đều nhau, đỡ phí
          khoảng trắng ở cột giải thích và có thêm chỗ cho 2 cột còn lại. */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[5fr_5fr_3fr] gap-x-6 border-b border-border pb-2 text-sm font-semibold text-muted">
          <span>① 日本語・原文</span>
          <span>② Bản dịch tiếng Việt</span>
          <span>③ Giải thích</span>
        </div>
        <div className="grid grid-cols-[5fr_5fr_3fr] gap-x-6">
          {rows.map((row) => (
            <Fragment key={row.key}>
              <div className="border-b border-border py-1.5">{row.jp}</div>
              <div className="border-b border-border py-1.5">{row.vi}</div>
              <div className="border-b border-border py-1.5">
                {row.explanation ?? <span className="text-sm text-muted/60">—</span>}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Mobile: tab 原文 | Dịch | Giải thích */}
      <div className="md:hidden">
        {/* Không backdrop-blur: tab này sticky, repaint mỗi frame cuộn trên
            mobile - bỏ blur để tránh gánh nặng GPU trên máy cấu hình thấp. */}
        <div className="sticky top-14 z-10 -mx-4 flex border-b border-border bg-surface/98 px-4">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 border-b-2 py-2.5 text-sm font-medium transition ${
                activeTab === tab.key ? "border-accent text-accent" : "border-transparent text-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4 py-4">
          {rows.map((row) => {
            const content = row[activeTab];
            if (activeTab === "explanation" && !content) return null;
            return (
              <div key={row.key} className="border-b border-border pb-4 last:border-0">
                {content ?? <span className="text-sm text-muted/60">—</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

import { ThreeColumnPage } from "./three-column-page";
import type { ExamQuestionReference } from "@/lib/exam/types";

/**
 * "参考資料を見る" - mở modal TRÊN CHÍNH trang làm đề (không chuyển route),
 * đóng lại (×) phải giữ nguyên toàn bộ state bài thi. Component này chỉ
 * render/ẩn theo props do TestRunner quản lý - không tự giữ state bài thi.
 */
export function ReferenceModal({
  references,
  onClose,
}: {
  references: ExamQuestionReference[];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-6">
      <div className="flex h-[90vh] w-full max-w-4xl flex-col rounded-t-2xl bg-surface shadow-xl sm:h-[85vh] sm:rounded-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold">参考資料</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-slate-100 hover:text-foreground"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {references.map((ref) => (
            <div key={ref.id} className="mb-6 last:mb-0">
              <p className="mb-2 text-xs font-semibold uppercase text-muted">
                {ref.book?.short_title}
                {ref.section ? ` · ${ref.section.title_jp}` : ""}
                {ref.page ? ` · trang ${ref.page.page_number}` : ""}
              </p>
              {ref.note && <p className="mb-2 text-sm text-muted">{ref.note}</p>}
              {ref.page && ref.page.content_blocks.length > 0 ? (
                <ThreeColumnPage blocks={ref.page.content_blocks} />
              ) : (
                <p className="text-sm text-muted">Chưa có nội dung chi tiết cho tài liệu tham khảo này.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

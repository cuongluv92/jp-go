"use client";

import { useRouter } from "next/navigation";

export interface PageJumpOption {
  pageNumber: number;
  label: string;
}

/**
 * Chọn nhảy thẳng tới 1 trang bất kỳ - trước chỉ có nút lùi/tiến từng trang
 * một, bất tiện khi sách có nhiều trang. Dùng <select> gốc (không phải combobox
 * tự viết) để có sẵn hành vi bàn phím/cuộn đúng chuẩn trên cả mobile lẫn desktop.
 */
export function PageJumpSelect({
  bookSlug,
  options,
  currentPage,
}: {
  bookSlug: string;
  options: PageJumpOption[];
  currentPage: number;
}) {
  const router = useRouter();

  return (
    <select
      value={currentPage}
      onChange={(e) => router.push(`/exam/${bookSlug}/page/${e.target.value}`)}
      aria-label="Chọn trang"
      className="max-w-[220px] truncate rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm font-medium text-foreground outline-none transition focus:border-accent sm:max-w-[280px]"
    >
      {options.map((opt) => (
        <option key={opt.pageNumber} value={opt.pageNumber}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

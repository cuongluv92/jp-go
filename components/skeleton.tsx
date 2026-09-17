import type { CSSProperties } from "react";

/**
 * Khung xám nhấp nháy nhẹ thay cho dòng chữ "Đang tải..." đứng im - cùng lý
 * do UX với các app tham khảo khác (nhatkytrading): người dùng cảm nhận app
 * "mượt" phần lớn nhờ có phản hồi ngay khi chờ, không phải vì tải nhanh hơn
 * thật sự. Dùng chung 1 khối để đổi màu/animation ở 1 chỗ.
 */
export function Skeleton({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return <div className={`animate-pulse rounded-lg bg-surface-muted ${className}`} style={style} />;
}

/** Vài dòng chữ giả, dòng sau ngắn dần - dùng cho khối văn bản/tiêu đề đang tải. */
export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className="h-4" style={{ width: `${92 - i * 14}%` }} />
      ))}
    </div>
  );
}

/** Danh sách thẻ giả - dùng cho trang danh sách (ngữ pháp, kanji...) đang tải. */
export function SkeletonRows({ count = 6, rowClassName = "h-16", className = "" }: { count?: number; rowClassName?: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className={`rounded-xl ${rowClassName}`} />
      ))}
    </div>
  );
}

/** Lưới ô vuông giả - dùng cho trang lưới Kanji đang tải. `gridClassName` tự
 * chọn số cột cho khớp lưới thật thay vì cố định. */
export function SkeletonGrid({
  count = 24,
  gridClassName = "grid-cols-3 sm:grid-cols-4",
  className = "",
}: {
  count?: number;
  gridClassName?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-2 ${gridClassName} ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="aspect-square rounded-xl" />
      ))}
    </div>
  );
}

/** Thẻ chi tiết giả - dùng cho trang chi tiết (từ vựng/ngữ pháp/kanji) đang tải. */
export function SkeletonDetailCard({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 ${className}`}>
      <Skeleton className="h-8 w-2/5" />
      <Skeleton className="h-4 w-1/4" />
      <SkeletonText lines={3} />
    </div>
  );
}

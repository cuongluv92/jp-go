import { WideContainer } from "@/components/exam/wide-container";

/**
 * Mọi trang trong module ôn thi đều là Server Component gọi thẳng Supabase
 * (force-dynamic, không cache) - không có loading.tsx thì khi mạng/DB chậm,
 * bấm vào KHÔNG có phản hồi gì cho tới khi dữ liệu về xong, giống hệt "bấm
 * hoài không ăn" dù thực ra chỉ đang tải. loading.tsx của Next.js tự động
 * hiện NGAY khi bấm, không cần state/JS gì thêm ở phía component nguồn.
 */
export default function ExamHomeLoading() {
  return (
    <WideContainer>
      <div className="flex flex-col gap-6 py-4">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-40 animate-pulse rounded bg-surface-muted" />
          <div className="h-7 w-64 animate-pulse rounded bg-surface-muted" />
        </div>
        <div className="h-11 w-full animate-pulse rounded-xl bg-surface-muted" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-28 animate-pulse rounded-2xl border border-border bg-surface-muted" />
          ))}
        </div>
      </div>
    </WideContainer>
  );
}

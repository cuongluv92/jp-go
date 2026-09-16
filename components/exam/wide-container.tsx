import type { ReactNode } from "react";

/**
 * Layout gốc (app/layout.tsx) bọc mọi trang trong `max-w-md sm:max-w-lg` để
 * tối ưu cho di động - phù hợp với các trang từ vựng hiện có. Trang đọc sách
 * 3 cột của module ôn thi cần rộng hơn nhiều trên desktop, nên "thoát" khỏi
 * khung đó bằng kỹ thuật full-bleed (relative/left-1/2/-translate) thay vì
 * sửa layout chung - không ảnh hưởng các trang khác.
 */
export function WideContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </div>
  );
}

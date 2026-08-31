"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { TopHeader } from "@/components/top-header";

/**
 * Bọc phần khung app (header + bottom nav) và chỉ hiện khi đã ở trong app
 * thật sự — ẩn hoàn toàn ở /login vì lúc đó chưa có phiên đăng nhập nên
 * các nút Quản lý dữ liệu/Đăng xuất (TopHeader) và các tab (BottomNav) đều
 * chưa có ý nghĩa, hiện ra chỉ gây rối mắt cho màn hình đăng nhập.
 */
export function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  if (isLoginPage) {
    return <main className="mx-auto w-full max-w-md flex-1 px-4 py-4 sm:max-w-lg">{children}</main>;
  }

  return (
    <>
      <TopHeader />
      <main className="mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-4 sm:max-w-lg">{children}</main>
      <BottomNav />
    </>
  );
}

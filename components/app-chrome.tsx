"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { BottomNav } from "@/components/bottom-nav";
import { TopHeader } from "@/components/top-header";

const LAYOUT_STORAGE_KEY = "jp-go-layout-mode";
type LayoutMode = "mobile" | "desktop";

/**
 * Bọc phần khung app (header + bottom nav) và chỉ hiện khi đã ở trong app
 * thật sự — ẩn hoàn toàn ở /login vì lúc đó chưa có phiên đăng nhập nên
 * các nút Quản lý dữ liệu/Đăng xuất (TopHeader) và các tab (BottomNav) đều
 * chưa có ý nghĩa, hiện ra chỉ gây rối mắt cho màn hình đăng nhập.
 *
 * Mặc định giữ khung hẹp như giao diện điện thoại. Trên máy tính người dùng
 * có thể bật chế độ desktop từ TopHeader; lựa chọn được lưu trên trình duyệt.
 */
export function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("mobile");

  useEffect(() => {
    try {
      const savedMode = window.localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (savedMode === "desktop" || savedMode === "mobile") {
        setLayoutMode(savedMode);
      }
    } catch {
      // localStorage có thể bị chặn; khi đó chỉ dùng chế độ mặc định.
    }
  }, []);

  const isDesktopMode = layoutMode === "desktop";

  function toggleLayoutMode() {
    const nextMode: LayoutMode = isDesktopMode ? "mobile" : "desktop";
    setLayoutMode(nextMode);
    try {
      window.localStorage.setItem(LAYOUT_STORAGE_KEY, nextMode);
    } catch {
      // Không ảnh hưởng việc chuyển giao diện trong phiên hiện tại.
    }
  }

  if (isLoginPage) {
    return <main className="mx-auto w-full max-w-md flex-1 px-4 py-4 sm:max-w-lg">{children}</main>;
  }

  const mainClassName = isDesktopMode
    ? "mx-auto w-full max-w-7xl flex-1 px-4 pb-24 pt-4 sm:px-6 lg:px-8"
    : "mx-auto w-full max-w-md flex-1 px-4 pb-24 pt-4 sm:max-w-lg";

  return (
    <>
      <TopHeader desktopMode={isDesktopMode} onToggleDesktop={toggleLayoutMode} />
      <main className={mainClassName}>{children}</main>
      <BottomNav desktopMode={isDesktopMode} />
    </>
  );
}

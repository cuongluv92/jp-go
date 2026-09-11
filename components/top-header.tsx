"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

interface TopHeaderProps {
  desktopMode: boolean;
  onToggleDesktop: () => void;
}

function LayoutIcon({ desktopMode }: { desktopMode: boolean }) {
  if (desktopMode) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="7" y="3" width="10" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18h4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  );
}

export function TopHeader({ desktopMode, onToggleDesktop }: TopHeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  const innerClassName = desktopMode
    ? "mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8"
    : "mx-auto flex w-full max-w-md items-center justify-between px-4 py-3 sm:max-w-lg";

  return (
    <header className="safe-top sticky top-0 z-30 border-b border-border/90 bg-surface/90 backdrop-blur-xl">
      <div className={innerClassName}>
        <Link href="/" className="flex items-center gap-3">
          <span className={`flex items-center justify-center bg-gradient-accent font-bold text-accent-foreground shadow-sm shadow-accent/30 ${desktopMode ? "h-10 w-10 rounded-2xl text-base" : "h-8 w-8 rounded-xl text-sm"}`}>
            日
          </span>
          <span>
            <span className={`${desktopMode ? "text-xl" : "text-lg"} block font-semibold tracking-tight`}>jp-go</span>
            {desktopMode && <span className="block text-[11px] font-medium tracking-wide text-muted">Japanese Learning Workspace</span>}
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          {desktopMode && (
            <span className="mr-2 hidden rounded-full border border-border bg-slate-50 px-3 py-1 text-[11px] font-semibold text-muted lg:inline-flex">
              Desktop
            </span>
          )}
          <Link
            href="/admin"
            aria-label="Quản lý dữ liệu"
            title="Cài đặt / quản lý dữ liệu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button
            type="button"
            onClick={onToggleDesktop}
            aria-label={desktopMode ? "Chuyển về giao diện điện thoại" : "Chuyển sang giao diện desktop"}
            aria-pressed={desktopMode}
            title={desktopMode ? "Về giao diện điện thoại" : "Mở giao diện desktop"}
            className={`hidden h-9 w-9 items-center justify-center rounded-full transition md:flex ${
              desktopMode ? "bg-accent-soft text-accent" : "text-muted hover:bg-slate-100 hover:text-foreground"
            }`}
          >
            <LayoutIcon desktopMode={desktopMode} />
          </button>
          <button
            type="button"
            onClick={handleLogout}
            aria-label="Đăng xuất"
            title="Đăng xuất"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-slate-100 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { N5CuratedMockHub } from "@/components/n5-curated-mock-hub";
import { createClient } from "@/lib/supabase/client";

export function PracticeShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMainPractice = pathname === "/practice";
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (!isMainPractice) return;
    let cancelled = false;
    void createClient().auth.getUser().then(({ data }) => {
      if (!cancelled) setUserId(data.user?.id ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [isMainPractice]);

  return (
    <div className="flex flex-col gap-4">
      {isMainPractice && (
        <>
          <Link
            href="/practice/summary"
            className="flex items-center justify-between gap-3 rounded-2xl border border-accent/20 bg-accent-soft p-4 shadow-sm transition active:scale-[0.99]"
          >
            <div>
              <p className="text-sm font-bold text-accent">Tổng kết N5</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">Ôn theo Ngày trong lộ trình · theo Bài · hoặc từng nhóm 10 từ.</p>
            </div>
            <span className="shrink-0 text-lg text-accent">→</span>
          </Link>
          <N5CuratedMockHub userId={userId} />
        </>
      )}
      <div className={isMainPractice ? "practice-main-content" : ""}>{children}</div>
    </div>
  );
}

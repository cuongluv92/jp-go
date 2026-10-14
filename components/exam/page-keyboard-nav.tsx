"use client";

import { useRouter } from "next/navigation";

import { useArrowKeyNav } from "@/lib/hooks/use-arrow-key-nav";

/** Gắn phím tắt ←/↑ (trang trước) và →/↓ (trang sau) cho trang đọc sách. */
export function PageKeyboardNav({ prevHref, nextHref }: { prevHref: string | null; nextHref: string | null }) {
  const router = useRouter();
  useArrowKeyNav({
    onPrev: prevHref ? () => router.push(prevHref) : undefined,
    onNext: nextHref ? () => router.push(nextHref) : undefined,
  });
  return null;
}

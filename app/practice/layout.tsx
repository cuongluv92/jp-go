import Link from "next/link";

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
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
      {children}
    </div>
  );
}

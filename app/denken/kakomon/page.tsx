import Link from "next/link";
import { denkenExamHref, denkenPastExams } from "./catalog";

export const metadata = { title: "Đề thi các năm · 電験三種 · JP-GO" };

export default function DenkenPastExamsPage() {
  const years = [...new Set(denkenPastExams.map(({ eraYear }) => eraYear))].sort((a, b) => b - a);

  return (
    <section aria-labelledby="denken-exam-title" className="@container mx-auto w-full max-w-6xl space-y-4 py-4">
      <header className="space-y-2">
        <Link href="/denken" className="text-sm text-accent">← 電験三種</Link>
        <h1 id="denken-exam-title" className="text-2xl font-bold">Đề thi các năm</h1>
      </header>
      <div className="grid items-start gap-3 @min-[22rem]:grid-cols-2 @min-[38rem]:grid-cols-3 @min-[56rem]:grid-cols-4">
        {years.map((year) => (
          <details key={year} className="group rounded-xl border border-border bg-surface">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-xl px-3 py-3 hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
              <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-base font-semibold tabular-nums">{1988 + year}</span>
                <span className="font-jp text-xs text-muted" lang="ja">平成{year}年度</span>
              </span>
              <span aria-hidden="true" className="mr-1 size-2 shrink-0 -translate-y-0.5 rotate-45 border-r-2 border-b-2 border-current text-accent group-open:translate-y-0.5 group-open:-rotate-135" />
            </summary>
            <ul className="space-y-1 border-t border-border p-2">
              {denkenPastExams.filter(({ eraYear }) => eraYear === year).map(({ test }) => (
                <li key={test.id}>
                  <Link href={`${denkenExamHref}/${test.slug}`} className="block rounded-md px-2 py-2 text-sm font-medium text-accent hover:bg-accent/10 hover:underline">
                    {test.title.split(" · ")[1]}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}

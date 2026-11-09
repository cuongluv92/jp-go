import Link from "next/link";
import { notFound } from "next/navigation";
import { PageJumpSelect } from "@/components/exam/page-jump-select";
import { PageKeyboardNav } from "@/components/exam/page-keyboard-nav";
import { WideContainer } from "@/components/exam/wide-container";
import { enrichExamTextWithFurigana } from "@/lib/exam/server-furigana";
import { ContentsTree } from "../contents-tree";
import { lesson } from "./lesson";
import { OhmReader } from "./reader";

export const metadata = { title: "1‑1 オームの法則 — 電験三種 — jp-go" };

const pages = Object.keys(lesson).map(Number);
const href = (page: number) => page === 2 ? "/denken/ohm" : `/denken/ohm?trang=${page}`;
const navButton = "rounded-lg border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent";

export default async function OhmLesson({ searchParams }: { searchParams: Promise<{ trang?: string }> }) {
  const { trang } = await searchParams;
  const page = Number(trang ?? "2");
  if (!pages.includes(page)) notFound();
  const previous = pages[pages.indexOf(page) - 1];
  const next = pages[pages.indexOf(page) + 1];
  const prevHref = previous === undefined ? null : href(previous);
  const nextHref = next === undefined ? null : href(next);
  const title = page === 7 ? "1‑2 並列合成抵抗・分圧 · Điện trở song song và chia áp" : "1‑1 オームの法則 · Định luật Ohm";
  const rows = await Promise.all(lesson[page].map(async row => "jp" in row
    ? { ...row, readings: await Promise.all(row.jp.split("**").map(part => enrichExamTextWithFurigana(part))) }
    : row));

  return (
    <WideContainer>
      <PageKeyboardNav prevHref={prevHref} nextHref={nextHref} />
      <div className="grid items-start gap-4 py-4 xl:grid-cols-[15rem_minmax(0,1fr)]">
        <aside>
          <details className="xl:hidden">
            <summary className="mb-2 cursor-pointer font-semibold">Mục lục 電験三種</summary>
            <ContentsTree currentPage={page} />
          </details>
          <div className="hidden xl:block"><ContentsTree currentPage={page} /></div>
        </aside>
        <main className="min-w-0 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="min-w-0 text-sm text-muted">
              <Link href="/denken" className="hover:text-accent">電験三種</Link> / 理論 / 直流回路 / {title}
            </p>
            <nav aria-label="Chuyển trang" className="flex flex-wrap items-center gap-2">
              {prevHref ? <Link href={prevHref} className={navButton}>← Trang trước</Link> : <span className="text-sm text-muted">← Trang trước</span>}
              <PageJumpSelect bookSlug="denken" currentPage={page} options={pages.map(n => ({ pageNumber: n, label: `Trang ${n}`, href: href(n) }))} />
              {nextHref ? <Link href={nextHref} className={navButton}>Trang sau →</Link> : <span className="text-sm text-muted">Trang sau →</span>}
            </nav>
          </div>
          <h1 className="font-jp text-xl font-bold">{title} <span className="text-sm text-red-700 dark:text-red-300">p.{page}</span></h1>
          <OhmReader rows={rows} />
        </main>
      </div>
    </WideContainer>
  );
}

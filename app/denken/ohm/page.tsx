import Link from "next/link";
import { notFound } from "next/navigation";
import { PageJumpSelect } from "@/components/exam/page-jump-select";
import { PageKeyboardNav } from "@/components/exam/page-keyboard-nav";
import { WideContainer } from "@/components/exam/wide-container";
import { enrichExamTextWithFurigana } from "@/lib/exam/server-furigana";
import { ContentsTree } from "../contents-tree";
import { lesson } from "./lesson";
import { OhmReader } from "./reader";

export const metadata = { title: "直流回路 1‑1・1‑2 — 電験三種 — jp-go" };

const pages = [2, 3, 4, 5];
const href = (page: number) => page === 2 ? "/denken/ohm" : `/denken/ohm?trang=${page}`;
const navButton = "rounded-lg border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent";

export default async function OhmLesson({ searchParams }: { searchParams: Promise<{ trang?: string }> }) {
  const { trang } = await searchParams;
  const page = Number(trang ?? "2");
  if (!pages.includes(page)) notFound();
  const prevHref = page > 2 ? href(page - 1) : null;
  const nextHref = page < 5 ? href(page + 1) : null;
  const reviewedReadings = [
    ["電気回路", "でんきかいろ"], ["直流回路", "ちょくりゅうかいろ"],
    ["起電力", "きでんりょく"], ["内部抵抗", "ないぶていこう"],
    ["電磁誘導作用", "でんじゆうどうさよう"],
    ["電位差", "でんいさ"], ["電位", "でんい"],
    ["電気抵抗", "でんきていこう"], ["負荷抵抗", "ふかていこう"],
    ["負荷電流", "ふかでんりゅう"], ["負荷電圧", "ふかでんあつ"],
    ["合成抵抗", "ごうせいていこう"], ["直列接続", "ちょくれつせつぞく"],
    ["並列接続", "へいれつせつぞく"], ["直列合成抵抗", "ちょくれつごうせいていこう"],
    ["並列合成抵抗", "へいれつごうせいていこう"], ["和分の積", "わぶんのせき"],
    ["分電圧", "ぶんでんあつ"], ["分路電流", "ぶんろでんりゅう"],
    ["比例配分", "ひれいはいぶん"], ["逆比例配分", "ぎゃくひれいはいぶん"],
    ["分圧", "ぶんあつ"], ["分流", "ぶんりゅう"],
    ["量記号", "りょうきごう"], ["単位記号", "たんいきごう"],
  ] as const;
  const reviewedTokens = (text: string) => reviewedReadings.flatMap(([surface, reading]) => {
    const tokens: { surface: string; reading: string; start: number }[] = [];
    let start = text.indexOf(surface);
    while (start !== -1) {
      tokens.push({ surface, reading, start });
      start = text.indexOf(surface, start + surface.length);
    }
    return tokens;
  });
  const rows = await Promise.all(lesson[page].map(async row => "jp" in row
    ? { ...row, readings: await Promise.all(row.jp.split("**").map(part => enrichExamTextWithFurigana(part, reviewedTokens(part)))) }
    : row));

  return (
    <WideContainer>
      <PageKeyboardNav prevHref={prevHref} nextHref={nextHref} />
      <div className="grid items-start gap-4 py-4 xl:grid-cols-[15rem_minmax(0,1fr)]">
        <aside>
          <details className="xl:hidden">
            <summary className="mb-2 cursor-pointer font-semibold">Mục lục 電験三種</summary>
            <ContentsTree reading />
          </details>
          <div className="hidden xl:block"><ContentsTree reading /></div>
        </aside>
        <main className="min-w-0 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="min-w-0 text-sm text-muted">
              <Link href="/denken" className="hover:text-accent">電験三種</Link> / 理論 / 直流回路 / {page === 5 ? "1‑2 合成抵抗" : "1‑1 オームの法則"}
            </p>
            <nav aria-label="Chuyển trang" className="flex flex-wrap items-center gap-2">
              {prevHref ? <Link href={prevHref} className={navButton}>← Trang trước</Link> : <span className="text-sm text-muted">← Trang trước</span>}
              <PageJumpSelect bookSlug="denken" currentPage={page} options={pages.map(n => ({ pageNumber: n, label: `Trang ${n}`, href: href(n) }))} />
              {nextHref ? <Link href={nextHref} className={navButton}>Trang sau →</Link> : <span className="text-sm text-muted">Trang sau →</span>}
            </nav>
          </div>
          <h1 className="font-jp text-xl font-bold">{page === 5 ? "1‑2 直列合成抵抗・並列合成抵抗 · Điện trở tương đương" : "1‑1 オームの法則 · Định luật Ohm"} <span className="text-sm text-red-700 dark:text-red-300">p.{page}</span></h1>
          <OhmReader rows={rows} />
        </main>
      </div>
    </WideContainer>
  );
}

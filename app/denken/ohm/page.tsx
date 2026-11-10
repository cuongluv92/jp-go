import Link from "next/link";
import { notFound } from "next/navigation";
import { PageJumpSelect } from "@/components/exam/page-jump-select";
import { PageKeyboardNav } from "@/components/exam/page-keyboard-nav";
import { WideContainer } from "@/components/exam/wide-container";
import { enrichLessonPart } from "./readings";
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
  const title = page >= 84 ? "章末問題 · Bài tập cuối chương"
    : page >= 81 ? "3‑4 V 結線 · Nối V"
    : page >= 79 ? "3‑3 三相電力 · Công suất ba pha"
    : page >= 77 ? "3‑2 Δ‑Y 変換 · Đổi tam giác sang sao"
    : page >= 70 ? "3‑1 三相交流回路 · Mạch xoay chiều ba pha"
    : page >= 67 ? "章末問題 · Bài tập cuối chương xoay chiều"
    : page >= 62 ? "2‑11 過渡現象 · Quá trình quá độ"
    : page >= 60 ? "2‑10 交流回路の複素数計算 · Tính mạch xoay chiều bằng số phức"
    : page >= 57 ? "2‑9 電力 · Công suất xoay chiều"
    : page >= 55 ? "2‑8 共振の条件 · Điều kiện cộng hưởng"
    : page >= 51 ? "2‑7 並列回路 · Mạch xoay chiều song song"
    : page >= 48 ? "2‑6 直列回路 · Mạch xoay chiều nối tiếp"
    : page >= 44 ? "2‑5 R、L、Cの作用 · Tác dụng của R, L, C"
    : page >= 41 ? "2‑4 交流回路のオームの法則 · Định luật Ohm trong mạch xoay chiều"
    : page >= 39 ? "2‑3 交流のベクトル表示 · Biểu diễn xoay chiều bằng vectơ pha"
    : page >= 36 ? "2‑2 交流の大きさ · Độ lớn của đại lượng xoay chiều"
    : page >= 31 ? "2‑1 正弦波交流 · Dòng điện xoay chiều hình sin"
    : page >= 26 ? "章末問題 · Bài tập cuối chương mạch một chiều"
    : page >= 24 ? "1‑10 定電圧源と定電流源・重ね合せの理 · Nguồn lý tưởng và nguyên lý chồng chất"
    : page === 23 ? "1‑9 直流回路の電力 · Công suất mạch một chiều"
    : page >= 21 ? "1‑8 Δ-Y変換 · Biến đổi tam giác–sao"
    : page >= 19 ? "1‑7 ブリッジ回路 · Mạch cầu"
    : page >= 16 ? "1‑6 ミルマンの定理 · Định lý Millman"
    : page >= 14 ? "1‑5 テブナンの定理 · Định lý Thévenin"
    : page >= 12 ? "1‑4 キルヒホッフの法則 · Định luật Kirchhoff"
    : page >= 9 ? "1‑3 導体の抵抗 · Điện trở của vật dẫn" : page >= 5 ? "1‑2 直列・並列合成抵抗 · Điện trở nối tiếp và song song" : "1‑1 オームの法則 · Định luật Ohm";
  const rows = await Promise.all(lesson[page].map(async row => "jp" in row
    ? { ...row, readings: await Promise.all(row.jp.split("**").map(enrichLessonPart)) }
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
              <Link href="/denken" className="hover:text-accent">電験三種</Link> / 理論 / {page >= 70 ? "三相交流回路" : page >= 31 ? "交流回路" : "直流回路"} / {title}
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

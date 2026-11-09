import Link from "next/link";
import { Fraction } from "./fraction";
import { quantitySymbols } from "./contents";
import { ContentsTree } from "./contents-tree";

export const metadata = { title: "電験三種 — jp-go" };

const bookRed = "text-red-700 dark:text-red-300";

export default function DenkenPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-6">
      <header>
        <Link href="/" className="text-sm text-accent">← Trang chủ</Link>
        <h1 className="font-jp mt-2 text-2xl font-bold">電験三種</h1>
        <p className="mt-1 text-sm text-muted">電験三種 合格ガイド 第4版 · Mục lục theo số trang in trong sách</p>
      </header>
      <ContentsTree />
      <section id="quantity-symbols" className="scroll-mt-20 rounded-2xl border border-border bg-surface p-4" aria-labelledby="quantity-symbols-title">
        <h2 id="quantity-symbols-title" className="font-jp font-semibold">
          <span className={bookRed}>p.xx</span> · 本書で用いる主な量記号と単位記号
        </h2>
        <p className="mt-1 text-sm text-muted">Ký hiệu đại lượng và đơn vị dùng trong sách</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm" lang="ja">
            <thead className="bg-surface-muted">
              <tr>
                <th scope="col" className="px-3 py-2">物理量</th>
                <th scope="col" className="px-3 py-2">量記号</th>
                <th scope="col" className="px-3 py-2">単位記号</th>
                <th scope="col" className="px-3 py-2">単位の名称</th>
              </tr>
            </thead>
            <tbody>
              {quantitySymbols.map(([name, symbol, unit, unitName]) => (
                <tr key={name} className="border-t border-border even:bg-surface-muted">
                  <th scope="row" className="px-3 py-2 font-normal">{name}</th>
                  <td className={`whitespace-nowrap px-3 py-2 font-serif italic ${bookRed}`}>{symbol}</td>
                  <td className="whitespace-nowrap px-3 py-2">{unit}</td>
                  <td className="px-3 py-2">{unitName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="rounded-2xl border border-border bg-surface p-4">
        <h2 className="font-semibold">Công thức tra cứu · 直流回路</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-jp text-sm">オームの法則 · Định luật Ohm</p>
            <p className="mt-2 font-serif text-2xl" aria-label="R bằng V chia I"><i>R</i> = <Fraction numerator={<i>V</i>} denominator={<i>I</i>} /></p>
            <p className="mt-2 text-sm text-muted">Điện áp V tính bằng volt (V), dòng điện I tính bằng A, điện trở R tính bằng Ω.</p>
          </div>
          <div>
            <p className="font-jp text-sm">並列合成抵抗 · Hai điện trở song song</p>
            <p className="mt-2 font-serif text-2xl" aria-label="R tương đương bằng tích R một nhân R hai chia tổng R một cộng R hai">
              <i>R</i><sub>tđ</sub> = <Fraction numerator={<><i>R</i><sub>1</sub><i>R</i><sub>2</sub></>} denominator={<><i>R</i><sub>1</sub> + <i>R</i><sub>2</sub></>} />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

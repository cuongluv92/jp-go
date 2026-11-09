import Link from "next/link";
import type { ReactNode } from "react";
import { frontMatter, lessons } from "./contents";

export const metadata = { title: "電験三種 — jp-go" };

const subjects = [
  ["理論", "Lý thuyết", 1, [[2,"直流回路"],[31,"交流回路"],[70,"三相交流回路"],[87,"電気・電子計測"],[99,"静電気と電界、コンデンサの静電容量と接続"],[115,"磁気と磁界、電流の磁気作用"],[141,"電子工学・電子回路"]]],
  ["機械", "Máy điện và ứng dụng", 161, [[162,"変圧器"],[186,"誘導電動機"],[205,"直流発電機と直流電動機"],[219,"同期発電機と同期電動機"],[238,"電動機応用"],[246,"パワーエレクトロニクス"],[263,"照明"],[274,"電熱と電気加熱"],[282,"電気化学"],[286,"自動制御と制御理論"],[302,"論理回路とデジタル回路"]]],
  ["電力", "Hệ thống điện", 321, [[322,"水力発電"],[341,"火力発電"],[357,"原子力発電、特殊発電"],[372,"変電所"],[385,"送電、配電"],[415,"電気材料"]]],
  ["法規", "Pháp quy", 423, [[424,"電気関係法規"],[441,"電気設備の技術基準・解釈"],[494,"電気施設管理"]]],
  ["数学", "Toán bổ trợ", 515, [[516,"数学の基礎"],[524,"方程式、三角関数"],[530,"複素数、対数、ベクトル"]]],
] as const;

function Fraction({ numerator, denominator }: { numerator: ReactNode; denominator: ReactNode }) {
  return (
    <span className="inline-grid align-middle text-center leading-snug">
      <span className="border-b border-current px-2 pb-0.5">{numerator}</span>
      <span className="px-2 pt-0.5">{denominator}</span>
    </span>
  );
}

const bookRed = "text-red-700 dark:text-red-300";

function ContentsText({ text }: { text: string }) {
  return text.split(/(といえば)/).map((part, index) =>
    part === "といえば" ? <span key={index} className={bookRed}>{part}</span> : part,
  );
}

export default function DenkenPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-6">
      <header>
        <Link href="/" className="text-sm text-accent">← Trang chủ</Link>
        <h1 className="font-jp mt-2 text-2xl font-bold">電験三種</h1>
        <p className="mt-1 text-sm text-muted">電験三種 合格ガイド 第4版 · Mục lục theo số trang in trong sách</p>
      </header>
      <section className="space-y-3" aria-label="Mục lục">
        <details className="rounded-2xl border border-border bg-surface p-4">
          <summary className="cursor-pointer font-semibold">Phần mở đầu</summary>
          <ul className="mt-3 space-y-2">
            {frontMatter.map(([page, title]) => <li key={page} className="text-sm"><span className={bookRed}>p.{page}</span> · {title}</li>)}
          </ul>
        </details>
        {subjects.map(([title, translation, page, chapters]) => (
          <details key={title} className="rounded-2xl border border-border bg-surface p-4">
            <summary className="cursor-pointer font-semibold">{title} · {translation} <span className={`text-sm font-normal ${bookRed}`}>p.{page}</span></summary>
            <ul className="mt-3 space-y-2">
              {chapters.map(([start, chapter], index) => (
                <li key={start}>
                  <details className="rounded-lg border border-border px-3 py-2">
                    <summary className="cursor-pointer text-sm font-medium">
                      <span className="mr-2 inline-block min-w-5 rounded bg-red-700 px-1 text-center text-xs font-semibold text-white">{index + 1}</span>
                      <span className="font-jp">{chapter}</span>
                      <span className={`ml-2 tabular-nums ${bookRed}`}>p.{start}</span>
                    </summary>
                    <ol className="mt-2 divide-y divide-border">
                      {lessons[title][index].split("\n").map((line) => {
                        const pageNumber = line.slice(0, 3);
                        const [before, after] = line.slice(4).split("{percentZ}");
                        return (
                          <li key={line} className="flex items-baseline gap-3 py-2 text-sm">
                            <span className={`w-12 shrink-0 tabular-nums ${bookRed}`}>p.{pageNumber}</span>
                            <span lang="ja" className="font-jp leading-relaxed">
                              <ContentsText text={before} />
                              {after !== undefined && <><Fraction numerator="%z" denominator="100" /><ContentsText text={after} /></>}
                            </span>
                          </li>
                        );
                      })}
                    </ol>
                  </details>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <p className="px-4 py-2 text-sm"><span className={bookRed}>p.538</span> · 索引</p>
      </section>
      <section className="rounded-2xl border border-border bg-surface p-4">
        <h2 className="font-semibold">Công thức mẫu · 直流回路</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-jp text-sm">オームの法則 · Định luật Ohm</p>
            <p className="mt-2 font-serif text-2xl" aria-label="R bằng U chia I"><i>R</i> = <Fraction numerator={<i>U</i>} denominator={<i>I</i>} /></p>
            <p className="mt-2 text-sm text-muted">Điện áp U tính bằng V, dòng điện I tính bằng A, điện trở R tính bằng Ω.</p>
          </div>
          <div>
            <p className="font-jp text-sm">並列合成抵抗 · Hai điện trở song song</p>
            <p className="mt-2 font-serif text-2xl" aria-label="R tương đương bằng tích R một nhân R hai chia tổng R một cộng R hai">
              <i>R</i><sub>tđ</sub> = <Fraction numerator={<><i>R</i><sub>1</sub><i>R</i><sub>2</sub></>} denominator={<><i>R</i><sub>1</sub> + <i>R</i><sub>2</sub></>} />
            </p>
          </div>
        </div>
      </section>
      <p className="text-sm text-muted">Mục lục đã sẵn sàng. Nội dung từng bài sẽ được nhập từ các trang bài học.</p>
    </main>
  );
}

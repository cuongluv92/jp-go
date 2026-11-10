import Link from "next/link";
import { Fraction } from "./fraction";
import { frontMatter, lessons } from "./contents";

const subjects = [
  ["理論", "Lý thuyết", 1, [[2,"直流回路"],[31,"交流回路"],[70,"三相交流回路"],[87,"電気・電子計測"],[99,"静電気と電界、コンデンサの静電容量と接続"],[115,"磁気と磁界、電流の磁気作用"],[141,"電子工学・電子回路"]]],
  ["機械", "Máy điện và ứng dụng", 161, [[162,"変圧器"],[186,"誘導電動機"],[205,"直流発電機と直流電動機"],[219,"同期発電機と同期電動機"],[238,"電動機応用"],[246,"パワーエレクトロニクス"],[263,"照明"],[274,"電熱と電気加熱"],[282,"電気化学"],[286,"自動制御と制御理論"],[302,"論理回路とデジタル回路"]]],
  ["電力", "Hệ thống điện", 321, [[322,"水力発電"],[341,"火力発電"],[357,"原子力発電、特殊発電"],[372,"変電所"],[385,"送電、配電"],[415,"電気材料"]]],
  ["法規", "Pháp quy", 423, [[424,"電気関係法規"],[441,"電気設備の技術基準・解釈"],[494,"電気施設管理"]]],
  ["数学", "Toán bổ trợ", 515, [[516,"数学の基礎"],[524,"方程式、三角関数"],[530,"複素数、対数、ベクトル"]]],
] as const;

const bookRed = "text-red-700 dark:text-red-300";

function ContentsText({ text }: { text: string }) {
  return text.split(/(といえば)/).map((part, index) =>
    part === "といえば" ? <span key={index} className={bookRed}>{part}</span> : part,
  );
}

const availableStarts = [2, 5, 9, 12, 14, 16, 19, 21, 23, 24, 26, 31, 36, 39, 41, 44, 48];

export function ContentsTree({ currentPage }: { currentPage?: number }) {
  const activeStart = currentPage === undefined ? undefined : availableStarts.filter(page => page <= currentPage).at(-1);
  return (
      <nav className="space-y-3" aria-label="Mục lục">
        <details className="rounded-2xl border border-border bg-surface p-4">
          <summary className="cursor-pointer font-semibold">Phần mở đầu</summary>
          <ul className="mt-3 space-y-2">
            {frontMatter.map(([page, title]) => (
              <li key={page} className="text-sm">
                <span className={bookRed}>p.{page}</span> · {page === "xx"
                  ? <a href="/denken#quantity-symbols" className="underline underline-offset-2">{title}</a>
                  : title}
              </li>
            ))}
          </ul>
        </details>
        {subjects.map(([title, translation, page, chapters]) => (
          <details key={title} open={title === "理論" ? true : undefined} className="rounded-2xl border border-border bg-surface p-4">
            <summary className="cursor-pointer font-semibold">{title} · {translation} <span className={`text-sm font-normal ${bookRed}`}>p.{page}</span></summary>
            <ul className="mt-3 space-y-2">
              {chapters.map(([start, chapter], index) => (
                <li key={start}>
                  <details open={start === (currentPage !== undefined && currentPage >= 31 ? 31 : 2) ? true : undefined} className="rounded-lg border border-border px-3 py-2">
                    <summary className="cursor-pointer text-sm font-medium">
                      <span className="mr-2 inline-block min-w-5 rounded bg-red-700 px-1 text-center text-xs font-semibold text-white">{index + 1}</span>
                      <span className="font-jp">{chapter}</span>
                      <span className={`ml-2 tabular-nums ${bookRed}`}>p.{start}</span>
                    </summary>
                    <ol className="mt-2 divide-y divide-border">
                      {lessons[title][index].split("\n").map((line) => {
                        const pageNumber = line.slice(0, 3);
                        const startPage = Number(pageNumber);
                        const [before, after] = line.slice(4).split("{percentZ}");
                        return (
                          <li key={line} className="flex items-baseline gap-3 py-2 text-sm">
                            <span className={`w-12 shrink-0 tabular-nums ${bookRed}`}>p.{pageNumber}</span>
                            <span lang="ja" className="font-jp leading-relaxed">
                              {title === "理論" && availableStarts.includes(startPage) ? (
                                <Link href={startPage === 2 ? "/denken/ohm" : `/denken/ohm?trang=${startPage}`} aria-current={activeStart === startPage ? "location" : undefined} className="underline underline-offset-2"><ContentsText text={before} /></Link>
                              ) : <ContentsText text={before} />}
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
      </nav>
  );
}

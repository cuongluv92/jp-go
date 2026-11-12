import entries from "./index-entries.json";
import { bookPageHref } from "./index-lookup";

export const indexPages = Object.keys(entries).map(Number);

type IndexReference = number | string;
type IndexRow = string | [term: string, references: IndexReference[]];
const columnsByPage = entries as Record<string, IndexRow[][]>;

export function BookIndex({ page, availablePages }: { page: number; availablePages: number[] }) {
  const columns = columnsByPage[String(page)] ?? [];
  const available = new Set(availablePages);

  return (
    <div aria-label="Danh sách thuật ngữ theo sách" className="mx-auto grid max-w-[90rem] items-start gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3" lang="ja">
      {columns.map((rows, column) => (
        <ul key={column} className="min-w-0 space-y-0.5">
          {rows.map((row, index) => {
            if (typeof row === "string") {
              return <li key={index} className="rounded-md bg-red-100 px-2 py-1 text-center font-semibold text-red-900 dark:bg-red-950 dark:text-red-200">{row}</li>;
            }
            const [term, references] = row;
            return (
              <li key={index} className="flex min-h-7 items-baseline gap-1.5 rounded px-1 py-0.5 text-sm hover:bg-surface-muted">
                <span className="min-w-0 break-words font-jp">{term}</span>
                <span aria-hidden="true" className="min-w-2 flex-1 border-b border-dotted border-border" />
                <span className="flex shrink-0 flex-wrap justify-end gap-x-1.5 tabular-nums text-red-700 dark:text-red-300">
                  {references.map((target, occurrence) => {
                    const href = target === "xx" ? "/denken#quantity-symbols"
                      : typeof target === "number" && available.has(target) ? bookPageHref(target) : null;
                    return href ? (
                      <a key={occurrence} href={href} target="_blank" rel="noopener noreferrer" lang="vi"
                        aria-label={`${term} · Mở trang ${target} trong tab mới`}
                        className="rounded-sm px-0.5 underline underline-offset-2 hover:bg-red-100 dark:hover:bg-red-950">
                        {target}
                      </a>
                    ) : <span key={occurrence}>{target}</span>;
                  })}
                </span>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}

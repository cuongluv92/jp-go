import entries from "./index-entries.json";
import { bookPageHref } from "./index-lookup";

export const indexPages = Object.keys(entries).map(Number);

type IndexReference = number | string;
type IndexRow = string | [term: string, references: IndexReference[], translation: string];
const columnsByPage = entries as Record<string, IndexRow[][]>;

export function BookIndex({ page, availablePages }: { page: number; availablePages: number[] }) {
  const columns = columnsByPage[String(page)] ?? [];
  const available = new Set(availablePages);

  return (
    <div aria-label="Danh sách thuật ngữ theo sách" className="mx-auto grid max-w-[90rem] items-start gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
      {columns.map((rows, column) => (
        <ul key={column} className="min-w-0 space-y-0.5">
          {rows.map((row, index) => {
            if (typeof row === "string") {
              return <li key={index} lang="ja" className="rounded-md bg-red-100 px-2 py-1 text-center font-semibold text-red-900 dark:bg-red-950 dark:text-red-200">{row}</li>;
            }
            const [term, references, translation] = row;
            return (
              <li key={index} className="grid min-h-8 grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_3rem] items-baseline gap-x-2 border-b border-dotted border-border px-1 py-1 text-sm hover:bg-surface-muted">
                <span lang="ja" className="min-w-0 break-words font-jp">{term}</span>
                <span lang="vi" className="min-w-0 break-words text-muted">{translation}</span>
                <span className="flex flex-wrap justify-end gap-x-1 tabular-nums text-red-700 dark:text-red-300">
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

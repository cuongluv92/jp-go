import { lesson } from "./ohm/lesson";

function normalize(value: string) {
  return value.normalize("NFKC").toLowerCase()
    .replace(/\p{Script=Latin}/gu, letter => letter.normalize("NFD").replace(/\p{M}/gu, ""))
    .replaceAll("đ", "d")
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function bookPageHref(page: number) {
  return page === 2 ? "/denken/ohm" : `/denken/ohm?trang=${page}`;
}

function searchBook(query: string) {
  const term = normalize(query);
  if (!term) return [];
  if (/^\d+$/.test(term)) {
    const page = Number(term);
    return Object.hasOwn(lesson, page) ? [{ page, label: "", rank: 0 }] : [];
  }

  const results = [];
  for (const [key, rows] of Object.entries(lesson)) {
    const page = Number(key);
    let best: { page: number; label: string; rank: number } | undefined;
    for (const row of rows) {
      if ("diagram" in row) continue;
      const japanese = [row.jp, ...(row.table?.jp ?? [])];
      const vietnamese = [row.vi, ...(row.table?.vi ?? [])];
      for (const value of [...japanese, ...vietnamese]) {
        const normalized = normalize(value);
        if (!normalized.includes(term)) continue;
        const rank = normalized === term ? 0 : row.heading ? 1 : 2;
        if (best && best.rank <= rank) continue;
        const label = value.replaceAll("**", "");
        const start = Math.max(0, normalized.indexOf(term) - 28);
        best = { page, rank, label: (start ? "…" : "") + label.slice(start, start + 116) + (label.length > start + 116 ? "…" : "") };
      }
    }
    if (best) results.push(best);
  }
  return results.sort((a, b) => a.rank - b.rank || a.page - b.page);
}

export function IndexLookup({ page, query }: { page: number; query: string }) {
  const results = searchBook(query);
  const shown = results.slice(0, 30);

  return (
    <section id="tra-cuu" aria-label="Tra cứu nội dung sách" className="mx-auto max-w-[60rem] space-y-3 rounded-lg border border-border bg-surface p-3">
      <form action="/denken/ohm" method="get" role="search" className="flex flex-wrap items-end gap-2">
        <input type="hidden" name="trang" value={page} />
        <div className="min-w-[12rem] flex-1">
          <label htmlFor="denken-index-query" className="mb-1 block text-sm font-medium">Từ khóa hoặc số trang</label>
          <input id="denken-index-query" name="q" type="search" maxLength={100} defaultValue={query}
            placeholder="Ví dụ オーム, điện trở, 516"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-surface-muted">Tra cứu</button>
      </form>
      {query && (shown.length ? (
        <>
          <p className="text-sm text-muted">{results.length > shown.length ? `Hiện ${shown.length} trên ${results.length} kết quả` : `${results.length} kết quả`} · Mở trong tab mới</p>
          <ul className="divide-y divide-border">
            {shown.map(({ page: foundPage, label }) => (
              <li key={foundPage}>
                <a href={bookPageHref(foundPage)} target="_blank" rel="noopener noreferrer"
                  className="flex gap-3 rounded px-2 py-2 text-sm hover:bg-surface-muted">
                  <span className="shrink-0 font-semibold text-accent underline underline-offset-2">p.{foundPage}</span>
                  {label && <span className="font-jp">{label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : <p className="text-sm text-muted">Không tìm thấy trong các trang đã nhập. Thử từ khóa ngắn hơn hoặc số trang.</p>)}
    </section>
  );
}

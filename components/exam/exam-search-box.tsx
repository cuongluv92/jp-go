"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { ExamSearchResult, ExamSectionSearchResult } from "@/lib/exam/queries";

interface SearchResponse {
  pages: ExamSearchResult[];
  sections: ExamSectionSearchResult[];
}

/** Ô search riêng cho module ôn thi - tìm theo jp/vi/explanation/tên chương/mục/code/số trang. */
export function ExamSearchBox({ bookSlug }: { bookSlug?: string }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResult(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const trimmed = query.trim();
    if (!trimmed) return;

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      const params = new URLSearchParams({ q: trimmed });
      if (bookSlug) params.set("book", bookSlug);
      try {
        const res = await fetch(`/api/exam/search?${params.toString()}`);
        const data = (await res.json()) as SearchResponse;
        setResult(data);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, bookSlug]);

  const hasResults = result && (result.pages.length > 0 || result.sections.length > 0);

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        placeholder="Tìm 工程管理, quản lý tiến độ, trang 65..."
        className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
      />

      {query.trim() && (
        <div className="absolute inset-x-0 top-full z-30 mt-2 max-h-96 overflow-y-auto rounded-xl border border-border bg-surface shadow-lg">
          {loading && <p className="p-4 text-sm text-muted">Đang tìm...</p>}
          {!loading && !hasResults && <p className="p-4 text-sm text-muted">Không tìm thấy kết quả.</p>}

          {!loading && result && result.sections.length > 0 && (
            <div className="border-b border-border p-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase text-muted">Chương / mục</p>
              {result.sections.map(({ book, section }) => (
                <Link
                  key={section.id}
                  href={`/exam/${book.slug}`}
                  className="block rounded-lg px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-surface-muted"
                >
                  <p className="font-jp text-sm font-medium">{section.title_jp}</p>
                  <p className="text-xs text-muted">
                    {book.short_title}
                    {section.title_vi ? ` · ${section.title_vi}` : ""}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {!loading && result && result.pages.length > 0 && (
            <div className="p-2">
              <p className="px-2 py-1 text-xs font-semibold uppercase text-muted">Trang</p>
              {result.pages.map(({ book, section, page, snippet }) => (
                <Link
                  key={page.id}
                  href={`/exam/${book.slug}/page/${page.page_number}`}
                  className="block rounded-lg px-2 py-1.5 hover:bg-slate-50 dark:hover:bg-surface-muted"
                >
                  <p className="text-sm font-medium">
                    {book.short_title} · trang {page.page_number}
                    {section ? ` · ${section.title_jp}` : ""}
                  </p>
                  {snippet && <p className="line-clamp-2 text-xs text-muted">{snippet}</p>}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

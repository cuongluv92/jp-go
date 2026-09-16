import Link from "next/link";
import { notFound } from "next/navigation";

import { ColumnWorkspace } from "@/components/exam/column-workspace";
import { WideContainer } from "@/components/exam/wide-container";
import {
  getExamBookBySlug,
  getExamPage,
  getExamSectionAncestors,
  listExamPageNumbers,
} from "@/lib/exam/queries";

export const dynamic = "force-dynamic";

export default async function ExamPageReader({
  params,
}: {
  params: Promise<{ bookSlug: string; pageNumber: string }>;
}) {
  const { bookSlug, pageNumber } = await params;
  const pageNum = Number(pageNumber);
  if (!Number.isInteger(pageNum)) notFound();

  const book = await getExamBookBySlug(bookSlug);
  if (!book) notFound();

  const page = await getExamPage(book.id, pageNum);
  if (!page) notFound();

  const [ancestors, pageNumbers] = await Promise.all([
    page.section_id ? getExamSectionAncestors(page.section_id) : Promise.resolve([]),
    listExamPageNumbers(book.id),
  ]);

  const idx = pageNumbers.indexOf(pageNum);
  const prevPage = idx > 0 ? pageNumbers[idx - 1] : null;
  const nextPage = idx >= 0 && idx < pageNumbers.length - 1 ? pageNumbers[idx + 1] : null;

  return (
    <WideContainer>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-muted">
            <Link href="/exam" className="hover:text-accent">
              2級電気工事施工管理
            </Link>{" "}
            /{" "}
            <Link href={`/exam/${book.slug}`} className="hover:text-accent">
              {book.short_title}
            </Link>
            {ancestors.map((section) => (
              <span key={section.id}> / {section.title_jp}</span>
            ))}
          </p>

          <div className="flex items-center gap-2">
            {prevPage != null ? (
              <Link
                href={`/exam/${book.slug}/page/${prevPage}`}
                className="rounded-lg border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
              >
                ← Trang trước
              </Link>
            ) : (
              <span className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted/50">← Trang trước</span>
            )}
            <span className="text-sm font-medium">Trang {page.page_number}</span>
            {nextPage != null ? (
              <Link
                href={`/exam/${book.slug}/page/${nextPage}`}
                className="rounded-lg border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
              >
                Trang sau →
              </Link>
            ) : (
              <span className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted/50">Trang sau →</span>
            )}
          </div>
        </div>

        {page.content_blocks.length > 0 ? (
          <ColumnWorkspace blocks={page.content_blocks} />
        ) : (
          <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
            Trang này chưa có nội dung.
          </p>
        )}
      </div>
    </WideContainer>
  );
}

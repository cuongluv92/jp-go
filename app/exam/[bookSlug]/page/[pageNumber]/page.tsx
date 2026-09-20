import Link from "next/link";
import { notFound } from "next/navigation";

import { ColumnWorkspace } from "@/components/exam/column-workspace";
import { PageJumpSelect } from "@/components/exam/page-jump-select";
import { WideContainer } from "@/components/exam/wide-container";
import {
  getExamBookBySlug,
  getExamPage,
  getExamSectionAncestors,
  getExamSectionTree,
  listExamPagesMeta,
} from "@/lib/exam/queries";
import { buildAggregatedFirstPageIndex, buildSectionPageIndex, flattenSectionTree } from "@/lib/exam/section-tree";

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

  const [ancestors, tree, pagesMeta] = await Promise.all([
    page.section_id ? getExamSectionAncestors(page.section_id) : Promise.resolve([]),
    getExamSectionTree(book.id),
    listExamPagesMeta(book.id),
  ]);

  // Trang chỉ gắn section_id vào mục lá - mục cha (第1編...) không có trang
  // trực tiếp nên cần index gộp đệ quy mới bấm được ở MỌI cấp breadcrumb,
  // không chỉ sách/mục lá như trước.
  const directPageIndex = buildSectionPageIndex(pagesMeta);
  const aggregatedFirstPage = buildAggregatedFirstPageIndex(tree, directPageIndex);
  const sectionsById = new Map(flattenSectionTree(tree).map((section) => [section.id, section]));

  const sortedPages = [...pagesMeta].sort((a, b) => a.page_number - b.page_number);
  const idx = sortedPages.findIndex((p) => p.page_number === pageNum);
  const prevPage = idx > 0 ? sortedPages[idx - 1].page_number : null;
  const nextPage = idx >= 0 && idx < sortedPages.length - 1 ? sortedPages[idx + 1].page_number : null;

  const pageOptions = sortedPages.map((p) => {
    const title = p.section_id ? sectionsById.get(p.section_id)?.title_jp : null;
    return { pageNumber: p.page_number, label: title ? `Trang ${p.page_number} — ${title}` : `Trang ${p.page_number}` };
  });

  return (
    <WideContainer>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="min-w-0 flex-1 text-sm text-muted">
            <Link href="/exam" className="hover:text-accent">
              2級電気工事施工管理
            </Link>{" "}
            /{" "}
            <Link href={`/exam/${book.slug}`} className="hover:text-accent">
              {book.short_title}
            </Link>
            {ancestors.map((section) => {
              const firstPage = aggregatedFirstPage.get(section.id);
              return (
                <span key={section.id}>
                  {" "}
                  /{" "}
                  {firstPage != null ? (
                    <Link href={`/exam/${book.slug}/page/${firstPage}`} className="hover:text-accent">
                      {section.title_jp}
                    </Link>
                  ) : (
                    section.title_jp
                  )}
                </span>
              );
            })}
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
            <PageJumpSelect bookSlug={book.slug} options={pageOptions} currentPage={page.page_number} />
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

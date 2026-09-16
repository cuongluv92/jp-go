import Link from "next/link";
import { notFound } from "next/navigation";

import { ExamSearchBox } from "@/components/exam/exam-search-box";
import { SectionAccordion } from "@/components/exam/section-accordion";
import { WideContainer } from "@/components/exam/wide-container";
import {
  getExamBookBySlug,
  getExamSectionTree,
  listExamPagesMeta,
} from "@/lib/exam/queries";
import { buildSectionPageIndex } from "@/lib/exam/section-tree";

export const dynamic = "force-dynamic";

export default async function ExamBookPage({ params }: { params: Promise<{ bookSlug: string }> }) {
  const { bookSlug } = await params;
  const book = await getExamBookBySlug(bookSlug);
  if (!book) notFound();

  const [tree, pagesMeta] = await Promise.all([getExamSectionTree(book.id), listExamPagesMeta(book.id)]);
  const pageIndexMap = buildSectionPageIndex(pagesMeta);
  const pageIndex = Object.fromEntries(pageIndexMap);

  return (
    <WideContainer>
      <div className="flex flex-col gap-6 py-4">
        <div>
          <p className="text-sm text-muted">
            <Link href="/exam" className="hover:text-accent">
              2級電気工事施工管理
            </Link>{" "}
            / {book.short_title}
          </p>
          <h1 className="font-jp text-2xl font-bold">{book.short_title}</h1>

          <details className="group mt-3 rounded-xl border border-border bg-surface p-3">
            <summary className="cursor-pointer text-sm font-medium text-accent">Thông tin sách</summary>
            <div className="mt-3 flex flex-col gap-1.5 text-sm">
              <p className="font-jp font-medium">{book.title_jp}</p>
              {book.title_vi && <p className="text-muted">{book.title_vi}</p>}
              <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-muted">
                {book.edition && (
                  <>
                    <dt className="font-medium">Edition</dt>
                    <dd>{book.edition}</dd>
                  </>
                )}
                {book.year && (
                  <>
                    <dt className="font-medium">Năm</dt>
                    <dd>{book.year}</dd>
                  </>
                )}
                {book.publisher && (
                  <>
                    <dt className="font-medium">Nhà xuất bản</dt>
                    <dd className="font-jp">{book.publisher}</dd>
                  </>
                )}
                {book.description && (
                  <>
                    <dt className="font-medium">Ghi chú</dt>
                    <dd>{book.description}</dd>
                  </>
                )}
              </dl>
            </div>
          </details>
        </div>

        <ExamSearchBox bookSlug={book.slug} />

        <div className="rounded-2xl border border-border bg-surface p-2 sm:p-4">
          {tree.length > 0 ? (
            <SectionAccordion nodes={tree} bookSlug={book.slug} pageIndex={pageIndex} />
          ) : (
            <p className="p-4 text-sm text-muted">Chưa có mục lục cho sách này.</p>
          )}
        </div>
      </div>
    </WideContainer>
  );
}

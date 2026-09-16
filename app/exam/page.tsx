import Link from "next/link";

import { ExamSearchBox } from "@/components/exam/exam-search-box";
import { WideContainer } from "@/components/exam/wide-container";
import { listExamBooks } from "@/lib/exam/queries";

export const metadata = { title: "2級電気工事施工管理 — jp-go" };
// Nội dung do script import cập nhật độc lập với lần deploy - luôn render
// theo request để không cần rebuild mỗi khi có trang/sách mới.
export const dynamic = "force-dynamic";

/**
 * Tab lớn "2級電気工事施工管理". Chỉ hiện tên NGẮN trên màn hình chính (rule
 * bắt buộc) - tên đầy đủ/edition/năm/nhà xuất bản chỉ hiện khi mở trang sách.
 */
export default async function ExamHomePage() {
  const books = await listExamBooks();

  return (
    <WideContainer>
      <div className="flex flex-col gap-6 py-4">
        <div>
          <p className="text-sm text-muted">jp-go / ôn thi chứng chỉ</p>
          <h1 className="font-jp text-2xl font-bold">2級電気工事施工管理</h1>
        </div>

        <ExamSearchBox />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/exam/${book.slug}`}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent hover:shadow-md"
            >
              <span className="font-jp text-lg font-bold">{book.short_title}</span>
              <span className="mt-2 text-xs text-muted">Xem mục lục →</span>
            </Link>
          ))}

          <Link
            href="/exam/kakomon"
            className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent hover:shadow-md"
          >
            <span className="font-jp text-lg font-bold">過去問・実戦問題</span>
            <span className="mt-2 text-xs text-muted">Làm đề →</span>
          </Link>
        </div>
      </div>
    </WideContainer>
  );
}

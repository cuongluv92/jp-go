import Link from "next/link";

import { WideContainer } from "@/components/exam/wide-container";
import { listExamTests } from "@/lib/exam/queries";

export const metadata = { title: "過去問・実戦問題 — jp-go" };
export const dynamic = "force-dynamic";

const TEST_TYPE_LABELS: Record<string, string> = {
  kakomon: "Đề thi thật",
  mock: "Đề thử",
  practice: "Đề luyện",
};

export default async function ExamKakomonListPage() {
  const tests = await listExamTests();

  return (
    <WideContainer>
      <div className="flex flex-col gap-6 py-4">
        <div>
          <p className="text-sm text-muted">
            <Link href="/exam" className="hover:text-accent">
              2級電気工事施工管理
            </Link>{" "}
            / 過去問・実戦問題
          </p>
          <h1 className="font-jp text-2xl font-bold">過去問・実戦問題</h1>
        </div>

        {tests.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
            Chưa có đề thi nào.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((test) => (
              <Link
                key={test.id}
                href={`/exam/kakomon/${test.slug}`}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-accent hover:shadow-md"
              >
                <span className="text-xs font-medium uppercase text-accent">
                  {TEST_TYPE_LABELS[test.test_type] ?? test.test_type}
                </span>
                <span className="font-jp text-lg font-bold">{test.title}</span>
                <span className="text-xs text-muted">
                  {test.test_year ? `${test.test_year} · ` : ""}
                  {test.question_count ? `${test.question_count} câu` : ""}
                  {test.duration_minutes ? ` · ${test.duration_minutes} phút` : ""}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </WideContainer>
  );
}

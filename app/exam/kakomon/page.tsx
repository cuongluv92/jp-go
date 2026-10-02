import Link from "next/link";

import { WideContainer } from "@/components/exam/wide-container";
import { listExamTests } from "@/lib/exam/queries";
import type { ExamTest } from "@/lib/exam/types";

export const metadata = { title: "過去問・実戦問題 — jp-go" };
export const dynamic = "force-dynamic";

const TEST_TYPE_LABELS: Record<string, string> = {
  kakomon: "Đề thi thật",
  mock: "Đề thử",
  practice: "Đề luyện",
};

const STAGE_LABELS: Record<string, string> = {
  "1ji": "1次",
  "2ji": "2次",
};

function TestCard({ test }: { test: ExamTest }) {
  return (
    <Link
      href={`/exam/kakomon/${test.slug}`}
      className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-4 shadow-sm transition hover:border-accent hover:shadow-md"
    >
      <span className="text-[11px] font-medium uppercase text-accent">
        {TEST_TYPE_LABELS[test.test_type] ?? test.test_type}
      </span>
      <span className="font-jp text-base font-bold">{test.title}</span>
      <span className="text-xs text-muted">
        {test.question_count ? `${test.question_count} câu` : ""}
        {test.duration_minutes ? ` · ${test.duration_minutes} phút` : ""}
      </span>
    </Link>
  );
}

export default async function ExamKakomonListPage() {
  const tests = await listExamTests();

  const yearOrder: string[] = [];
  const byYear = new Map<string, ExamTest[]>();
  for (const test of tests) {
    const year = test.test_year || "Chưa xác định năm";
    if (!byYear.has(year)) {
      byYear.set(year, []);
      yearOrder.push(year);
    }
    byYear.get(year)!.push(test);
  }

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
          <p className="mt-1 text-sm text-muted">
            Chọn theo năm → 1次 / 2次. Các đề cũ ghi 実地試験 được xếp vào 2次.
          </p>
        </div>

        {tests.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
            Chưa có đề thi nào.
          </p>
        ) : (
          <div className="space-y-5">
            {yearOrder.map((year) => {
              const yearTests = byYear.get(year) ?? [];
              const stages = ["1ji", "2ji"] as const;
              const extra = yearTests.filter((t) => !t.exam_stage);

              return (
                <section key={year} className="rounded-2xl border border-border bg-surface/50 p-4 sm:p-5">
                  <h2 className="font-jp text-lg font-bold">{year}</h2>

                  <div className="mt-3 grid gap-4 lg:grid-cols-2">
                    {stages.map((stage) => {
                      const stageTests = yearTests.filter((t) => t.exam_stage === stage);
                      return (
                        <div key={stage} className="rounded-xl border border-border bg-surface p-3">
                          <div className="mb-2 flex items-center justify-between">
                            <h3 className="font-jp font-semibold">{STAGE_LABELS[stage]}</h3>
                            <span className="text-xs text-muted">{stageTests.length} đề</span>
                          </div>
                          {stageTests.length > 0 ? (
                            <div className="grid gap-2">
                              {stageTests.map((test) => <TestCard key={test.id} test={test} />)}
                            </div>
                          ) : (
                            <p className="rounded-lg border border-dashed border-border px-3 py-4 text-center text-xs text-muted">
                              Chưa có đề
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {extra.length > 0 && (
                    <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {extra.map((test) => <TestCard key={test.id} test={test} />)}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>
    </WideContainer>
  );
}

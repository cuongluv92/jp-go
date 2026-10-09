import Link from "next/link";

import { WideContainer } from "@/components/exam/wide-container";
import { listExamTests } from "@/lib/exam/queries";
import type { ExamTest } from "@/lib/exam/types";

export const metadata = { title: "過去問・実戦問題 — jp-go" };
export const dynamic = "force-dynamic";

const STAGE_LABELS: Record<string, string> = {
  "1ji": "1次",
  "2ji": "2次",
};

// Mục này chỉ chứa đề thi thật (過去問), không trộn đề thử/đề luyện - nhãn
// loại đề trên từng thẻ vì vậy luôn thừa, bỏ đi cho thẻ gọn hơn.
function TestCard({ test }: { test: ExamTest }) {
  return (
    <Link
      href={`/exam/kakomon/${test.slug}`}
      className="flex flex-col gap-0.5 rounded-lg border border-border bg-surface px-3 py-2 transition hover:border-accent hover:shadow-sm"
    >
      <span className="font-jp text-sm font-semibold leading-snug">{test.title}</span>
      <span className="text-[11px] text-muted">
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
            <Link href="/exam" className="-m-1.5 inline-block rounded p-1.5 font-jp hover:text-accent hover:underline">
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
          <div className="space-y-3">
            {yearOrder.map((year) => {
              const yearTests = byYear.get(year) ?? [];
              const stages = ["1ji", "2ji"] as const;
              const extra = yearTests.filter((t) => !t.exam_stage);

              return (
                <section key={year} className="rounded-xl border border-border bg-surface/50 p-3 sm:p-4">
                  <h2 className="font-jp text-base font-bold">{year}</h2>

                  <div className="mt-2 grid gap-2.5 lg:grid-cols-2">
                    {stages.map((stage) => {
                      const stageTests = yearTests.filter((t) => t.exam_stage === stage);
                      return (
                        <div key={stage} className="rounded-lg border border-border bg-surface p-2">
                          <div className="mb-1.5 flex items-center justify-between">
                            <h3 className="font-jp text-sm font-semibold">{STAGE_LABELS[stage]}</h3>
                            <span className="text-[11px] text-muted">{stageTests.length} đề</span>
                          </div>
                          {stageTests.length > 0 ? (
                            <div className="grid gap-1.5">
                              {stageTests.map((test) => <TestCard key={test.id} test={test} />)}
                            </div>
                          ) : (
                            <p className="rounded-lg border border-dashed border-border px-3 py-2 text-center text-[11px] text-muted">
                              Chưa có đề
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {extra.length > 0 && (
                    <div className="mt-2.5 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
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

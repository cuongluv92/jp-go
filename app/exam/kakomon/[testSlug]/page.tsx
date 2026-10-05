import { notFound } from "next/navigation";

import { TestRunner } from "@/components/exam/test-runner";
import { WideContainer } from "@/components/exam/wide-container";
import { getExamTestBySlug, listExamQuestionsForTest } from "@/lib/exam/queries";

export const dynamic = "force-dynamic";

export default async function ExamTestPage({ params }: { params: Promise<{ testSlug: string }> }) {
  const { testSlug } = await params;
  const test = await getExamTestBySlug(testSlug);
  if (!test) notFound();

  const questions = await listExamQuestionsForTest(test.id);
  const showLegacyFirstStageGuide =
    test.exam_stage === "1ji" &&
    (
      test.slug === "r1-2denki-1ji-early" ||
      test.slug === "r1-2denki-1ji-late" ||
      test.slug === "r2-2denki-1ji-late"
    );
  const showR3PlusFirstStageGuide =
    test.exam_stage === "1ji" &&
    (
      test.slug === "r3-2denki-1ji-early" ||
      test.slug === "r3-2denki-1ji-late" ||
      test.slug === "r4-2denki-1ji-early" ||
      test.slug === "r4-2denki-1ji-late"
    );

  return (
    <WideContainer>
      {showLegacyFirstStageGuide && (
        <section className="mb-4 rounded-2xl border border-border bg-surface p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-jp text-base font-bold">注意事項・解答数</h2>
            <p className="text-sm font-semibold">Hướng dẫn làm đề</p>
          </div>
          <p className="mt-2 text-sm text-muted">
            Thời gian: 150 phút. Đề có 64 câu, làm 40 câu, mỗi câu 1 điểm (40 điểm).
          </p>
          <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <p><span className="font-jp font-semibold">No.1–12</span>: chọn 8/12 câu</p>
            <p><span className="font-jp font-semibold">No.13–32</span>: chọn 11/20 câu</p>
            <p><span className="font-jp font-semibold">No.33–38</span>: chọn 3/6 câu</p>
            <p><span className="font-jp font-semibold">No.39</span>: bắt buộc</p>
            <p><span className="font-jp font-semibold">No.40–52</span>: chọn 9/13 câu</p>
            <p><span className="font-jp font-semibold">No.53–64</span>: chọn 8/12 câu</p>
          </div>
          <p className="mt-3 text-xs text-muted">
            Đây là quy tắc chọn câu của đề gốc. Phần học trên app vẫn cho phép mở từng câu để ôn tập.
          </p>
        </section>
      )}
      {showR3PlusFirstStageGuide && (
        <section className="mb-4 rounded-2xl border border-border bg-surface p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-jp text-base font-bold">注意事項・解答数</h2>
            <p className="text-sm font-semibold">Hướng dẫn làm đề</p>
          </div>
          <p className="mt-2 text-sm text-muted">
            Thời gian: 150 phút. Đề có 64 câu, làm 40 câu, mỗi câu 1 điểm (40 điểm).
          </p>
          <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <p><span className="font-jp font-semibold">No.1–12</span>: chọn 8/12 câu</p>
            <p><span className="font-jp font-semibold">No.13–31</span>: chọn 10/19 câu</p>
            <p><span className="font-jp font-semibold">No.32–37</span>: chọn 3/6 câu</p>
            <p><span className="font-jp font-semibold">No.38–42</span>: làm đủ 5 câu</p>
            <p><span className="font-jp font-semibold">No.43–52</span>: chọn 6/10 câu</p>
            <p><span className="font-jp font-semibold">No.53–64</span>: chọn 8/12 câu</p>
          </div>
          <p className="mt-3 text-xs text-muted">
            No.39–42 là các câu hỏi năng lực ứng dụng về 施工管理法. Đây là quy tắc chọn câu của đề gốc; trên app vẫn có thể mở từng câu để ôn tập.
          </p>
        </section>
      )}
      <TestRunner test={test} questions={questions} />
    </WideContainer>
  );
}

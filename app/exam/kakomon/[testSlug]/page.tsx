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

  return (
    <WideContainer>
      <TestRunner test={test} questions={questions} />
    </WideContainer>
  );
}

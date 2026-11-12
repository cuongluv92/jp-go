import type { ReactNode } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { TestRunner } from "@/components/exam/test-runner";
import { WideContainer } from "@/components/exam/wide-container";
import { createClient } from "@/lib/supabase/server";
import { bookPageHref } from "../../index-lookup";
import { denkenExamHref, denkenPastExams } from "../catalog";
import { H21RironQuestion6Solution } from "../h21-riron-solution";

const solutions: Record<string, ReactNode> = {
  "denken-h21-riron-06": <H21RironQuestion6Solution />,
};

export const metadata = { title: "Làm đề · 電験三種 · JP-GO" };

export default async function DenkenPastExamPage({ params, searchParams }: {
  params: Promise<{ testSlug: string }>;
  searchParams: Promise<{ cau?: string | string[] }>;
}) {
  const [{ testSlug }, { cau }] = await Promise.all([params, searchParams]);
  const exam = denkenPastExams.find(({ test }) => test.slug === testSlug);
  if (!exam) notFound();
  const entryQuestion = typeof cau === "string"
    ? exam.questions.find(({ question }) => String(question.question_number) === cau)
    : undefined;
  if (cau !== undefined && !entryQuestion) notFound();

  const { data: { user } } = await (await createClient()).auth.getUser();
  if (!user) redirect("/login");

  return (
    <WideContainer>
      <nav aria-label="Đề thi 電験三種" className="flex flex-wrap gap-3 pt-4 text-sm text-accent">
        <Link href="/denken">← 電験三種</Link>
        <Link href={denkenExamHref}>Đề thi các năm</Link>
      </nav>
      <TestRunner
        key={`${user.id}:${exam.test.id}:${cau ?? ""}`}
        test={exam.test}
        questions={exam.questions.map(({ question }) => question)}
        userId={user.id}
        staticQuestions
        initialQuestionNumber={entryQuestion?.question.question_number}
        questionDetails={Object.fromEntries(exam.questions.map(({ question, theory, source }) => [
          question.id,
          {
            theoryLinks: theory.map(({ page, title }) => ({ href: bookPageHref(page), label: `Trang ${page} · ${title}` })),
            source,
            explanation: solutions[question.id],
          },
        ]))}
      />
    </WideContainer>
  );
}

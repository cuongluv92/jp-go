import type { ReactNode } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { TestRunner } from "@/components/exam/test-runner";
import { WideContainer } from "@/components/exam/wide-container";
import { createClient } from "@/lib/supabase/server";
import { bookPageHref } from "../../index-lookup";
import { denkenExamHref, denkenPastExams, questionLabel } from "../catalog";
import { SolutionSteps } from "../solution-steps";
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
    ? exam.questions.find(({ key }) => key === cau)
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
      {(exam.subject === "riron" || exam.subject === "kikai") && (
        <p className="pt-3 text-sm text-muted">Đề gốc yêu cầu chọn câu 17 hoặc câu 18. Ở chế độ luyện tập, bạn có thể làm cả hai.</p>
      )}
      {(exam.eraYear === 26 || exam.eraYear === 27) && (
        <p className="pt-2 text-sm text-muted">
          Nguồn đề gốc:{" "}
          <a href="https://www.shiken.or.jp/chief/third/qa/index_2.html" target="_blank" rel="noreferrer" className="underline">
            電気技術者試験センター · 平成{exam.eraYear}年度第三種電気主任技術者試験
          </a>
          {". Phần chữ tiếng Nhật được biên tập cho giao diện. Ảnh đi kèm giữ đề gốc."}
          {exam.subject === "houki" && ` Các câu pháp quy căn cứ vào văn bản có hiệu lực ngày 01/04/${1988 + exam.eraYear}.`}
        </p>
      )}
      <TestRunner
        key={`${user.id}:${exam.test.id}:${cau ?? ""}`}
        test={exam.test}
        questions={exam.questions.map(({ question }) => question)}
        userId={user.id}
        staticQuestions
        initialQuestionNumber={entryQuestion?.question.question_number}
        questionDetails={Object.fromEntries(exam.questions.map(({ key, question, theory, source, originalPages, solution }) => [
          question.id,
          {
            label: questionLabel(key),
            partGroup: /^[0-9]+[ab]$/.test(key) ? key.slice(0, -1) : undefined,
            theoryLinks: theory.map(({ page, title }) => ({ href: bookPageHref(page), label: title ? `Trang ${page} · ${title}` : `Trang ${page}` })),
            originalPages,
            source,
            explanation: solution ? <SolutionSteps steps={solution} /> : solutions[question.id],
          },
        ]))}
      />
    </WideContainer>
  );
}
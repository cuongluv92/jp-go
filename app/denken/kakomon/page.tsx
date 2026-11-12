import Link from "next/link";
import { denkenPastExams, denkenQuestionHref } from "./catalog";

export const metadata = { title: "Đề thi các năm · 電験三種 · JP-GO" };

export default function DenkenPastExamsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-5 px-4 py-6">
      <header className="space-y-2">
        <Link href="/denken" className="text-sm text-accent">← 電験三種</Link>
        <h1 className="text-2xl font-bold">Đề thi các năm</h1>
      </header>
      {denkenPastExams.map(({ test, questions }) => (
        <section key={test.id} className="rounded-2xl border border-border bg-surface p-4">
          <h2 className="font-jp text-lg font-semibold">{test.title} · {test.test_year}</h2>
          <p className="mt-1 text-sm text-muted">Câu làm thử</p>
          <ul className="mt-3 space-y-2">
            {questions.map(({ question, topic }) => (
              <li key={question.id}>
                <Link className="block rounded-lg border border-border px-3 py-2 text-sm font-medium text-accent hover:border-accent"
                  href={denkenQuestionHref(test.slug, question.question_number)}>
                  Câu {question.question_number} · {topic}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

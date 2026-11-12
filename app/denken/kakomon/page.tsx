import Link from "next/link";
import { denkenExamHref, denkenPastExams, denkenQuestionHref, questionLabel } from "./catalog";

export const metadata = { title: "Đề thi các năm · 電験三種 · JP-GO" };

export default function DenkenPastExamsPage() {
  const years = [...new Set(denkenPastExams.map(({ eraYear }) => eraYear))].reverse();

  return (
    <main className="mx-auto w-full max-w-4xl space-y-5 px-4 py-6">
      <header className="space-y-2">
        <Link href="/denken" className="text-sm text-accent">← 電験三種</Link>
        <h1 className="text-2xl font-bold">Đề thi các năm</h1>
      </header>
      {years.map((year) => (
        <section key={year} className="space-y-3 rounded-2xl border border-border bg-surface p-4">
          <h2 className="font-jp text-lg font-semibold">平成{year}年度 · {1988 + year}</h2>
          {denkenPastExams.filter(({ eraYear }) => eraYear === year).map(({ test, questions }) => (
            <div key={test.id} className="rounded-lg border border-border p-3">
              <Link href={`${denkenExamHref}/${test.slug}`} className="text-sm font-semibold text-accent underline">
                {test.title.split(" · ")[1]} · {questions.length} mục trả lời
              </Link>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-muted">Danh sách câu hỏi</summary>
                <ul className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                  {questions.map(({ key, topic }) => (
                    <li key={key}>
                      <Link title={topic} className="block rounded-lg border border-border px-3 py-2 text-sm text-accent hover:border-accent"
                        href={denkenQuestionHref(test.slug, key)}>
                        Câu {questionLabel(key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}

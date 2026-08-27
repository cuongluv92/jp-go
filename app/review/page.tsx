"use client";

import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import { getDueWords, getStruggledWords } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import type { VocabularyWord } from "@/lib/types";

export default function ReviewPage() {
  const { words } = useVocabulary();
  const visible = words.filter((w) => !w.isHidden);

  const dueWords = getDueWords(visible);
  const struggledWords = getStruggledWords(visible);
  const notLearnedWords = visible.filter((w) => w.progress.status === "chua_hoc");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold">Ôn tập</h1>
        <p className="mt-1 text-sm text-muted">
          Danh sách dưới đây sẽ là nguồn cho lịch lặp lại ngắt quãng (spaced repetition) khi tích hợp thuật toán đầy đủ.
        </p>
      </div>

      {dueWords.length > 0 && (
        <Link
          href="/flashcards"
          className="rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground shadow-sm"
        >
          Ôn ngay {dueWords.length} từ đến hạn →
        </Link>
      )}

      <ReviewSection title="Từ đến hạn ôn" emptyText="Không có từ nào đến hạn." words={dueWords} />
      <ReviewSection title="Từ trả lời sai" emptyText="Bạn chưa trả lời sai từ nào." words={struggledWords} />
      <ReviewSection title="Từ chưa nhớ" emptyText="Không còn từ nào chưa học." words={notLearnedWords} />
    </div>
  );
}

function ReviewSection({
  title,
  emptyText,
  words,
}: {
  title: string;
  emptyText: string;
  words: VocabularyWord[];
}) {
  return (
    <section>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-sm font-semibold">{title}</h2>
        <span className="text-xs text-muted">{words.length} từ</span>
      </div>
      {words.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted">{emptyText}</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {words.map((word) => (
            <li key={word.id}>
              <Link
                href={`/vocabulary/${word.id}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 shadow-sm"
              >
                <div>
                  <p className="font-jp text-base font-semibold">{word.word}</p>
                  <p className="text-xs text-muted">
                    {word.reading} · {word.meaning}
                  </p>
                </div>
                <StatusBadge status={word.progress.status} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

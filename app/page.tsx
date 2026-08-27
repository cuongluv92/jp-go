"use client";

import Link from "next/link";

import { StatCard } from "@/components/stat-card";
import { sampleStreakDays } from "@/lib/data/activity";
import { computeStats, getDueWords } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";

export default function HomePage() {
  const { words } = useVocabulary();
  const stats = computeStats(words);
  const dueWords = getDueWords(words).slice(0, 5);

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-xl font-bold">Xin chào 👋</h1>
        <p className="mt-1 text-sm text-muted">Hôm nay bạn đã sẵn sàng học tiếng Nhật chưa?</p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <StatCard label="Đã nhớ" value={stats.learned} hint={`/${stats.total} từ`} />
        <StatCard label="Cần ôn hôm nay" value={stats.dueToday} />
        <StatCard label="Đang học" value={stats.learning} />
        <StatCard label="Chuỗi ngày học" value={`🔥 ${sampleStreakDays}`} hint="ngày liên tục" />
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link
          href="/flashcards"
          className="flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground shadow-sm transition active:scale-[0.98]"
        >
          Bắt đầu học
        </Link>
        <Link
          href="/review"
          className="flex items-center justify-center rounded-2xl border border-accent px-4 py-3 text-center text-sm font-semibold text-accent transition active:scale-[0.98]"
        >
          Ôn tập
        </Link>
      </section>

      <section>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Từ cần ôn hôm nay</h2>
          <Link href="/review" className="text-xs font-medium text-accent">
            Xem tất cả
          </Link>
        </div>
        {dueWords.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">
            Không có từ nào đến hạn ôn hôm nay. Tuyệt vời!
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {dueWords.map((word) => (
              <li key={word.id}>
                <Link
                  href={`/vocabulary/${word.id}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 shadow-sm"
                >
                  <div>
                    <p className="font-jp text-base font-semibold">{word.word}</p>
                    <p className="text-xs text-muted">
                      {word.reading} · {word.meaningVi}
                    </p>
                  </div>
                  <span className="text-xs text-muted">{word.jlpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

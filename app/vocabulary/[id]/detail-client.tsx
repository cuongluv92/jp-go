"use client";

import Link from "next/link";

import { PronounceButton } from "@/components/pronounce-button";
import { StatusBadge } from "@/components/status-badge";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { PART_OF_SPEECH_LABELS, type ExampleSentence, type LearningStatus } from "@/lib/types";

const STATUS_OPTIONS: { value: LearningStatus; label: string }[] = [
  { value: "chua_hoc", label: "Chưa nhớ" },
  { value: "dang_hoc", label: "Đang học" },
  { value: "da_nho", label: "Đã nhớ" },
];

export function VocabularyDetailClient({ id }: { id: string }) {
  const { getWordById, toggleFavorite, setStatus } = useVocabulary();
  const word = getWordById(id);

  if (!word) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center">
        <p className="text-sm text-muted">Không tìm thấy từ vựng này.</p>
        <Link href="/vocabulary" className="text-sm font-medium text-accent">
          ← Về kho từ vựng
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 pb-6">
      <Link href="/vocabulary" className="text-sm text-muted">
        ← Kho từ vựng
      </Link>

      <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-jp text-3xl font-bold">{word.word}</p>
            <p className="mt-1 text-base text-muted">{word.reading}</p>
          </div>
          <PronounceButton text={word.word} />
        </div>

        <p className="mt-3 text-lg">{word.meaning}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {PART_OF_SPEECH_LABELS[word.partOfSpeech]}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {word.level}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {word.topic}
          </span>
          <StatusBadge status={word.progress.status} />
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => toggleFavorite(word.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition ${
              word.progress.isFavorite
                ? "border-amber-300 bg-amber-50 text-amber-600"
                : "border-border text-muted"
            }`}
          >
            {word.progress.isFavorite ? "★ Đã yêu thích" : "☆ Yêu thích"}
          </button>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setStatus(word.id, opt.value)}
              className={`rounded-xl border px-2 py-2 text-xs font-medium transition ${
                word.progress.status === opt.value
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-sm font-semibold">Cách dùng</h2>
        <dl className="mt-3 flex flex-col gap-3 text-sm">
          <UsageRow label="Cấu trúc sử dụng" value={word.usage.structure} />
          <UsageRow label="Trợ từ thường đi kèm" value={word.usage.particles} />
          <UsageRow label="Thành phần thường đứng trước" value={word.usage.precedingElements} />
          <UsageRow label="Thành phần thường đứng sau" value={word.usage.followingElements} />
          <UsageRow label="Cách chia / dạng biến đổi" value={word.usage.conjugation} />
          <UsageRow label="Lưu ý & lỗi thường gặp" value={word.usage.notes} highlight />
        </dl>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Ví dụ theo ngữ cảnh</h2>
        <ExampleCard title="📝 Đề thi" example={word.examples.exam} />
        <ExampleCard title="💬 Đời thường" example={word.examples.daily} />
        <ExampleCard title="🏢 Văn phòng" example={word.examples.work} />
      </section>
    </div>
  );
}

function UsageRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <dt className="text-xs font-medium text-muted">{label}</dt>
      <dd className={`mt-0.5 ${highlight ? "rounded-lg bg-amber-50 p-2 text-amber-800" : ""}`}>
        {value || "—"}
      </dd>
    </div>
  );
}

function ExampleCard({ title, example }: { title: string; example: ExampleSentence }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-muted">{title}</h3>
        <PronounceButton text={example.japanese} className="h-7 w-7" />
      </div>
      <p className="font-jp mt-2 text-base leading-relaxed">{example.japanese}</p>
      <p className="mt-1 text-sm text-muted">{example.translation}</p>
    </div>
  );
}

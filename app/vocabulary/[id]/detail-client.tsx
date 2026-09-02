"use client";

import Link from "next/link";

import { PersonalExamples } from "@/components/personal-examples";
import { JapaneseSentence } from "@/components/japanese-sentence";
import { PronounceButton } from "@/components/pronounce-button";
import { StatusBadge } from "@/components/status-badge";
import { getConjugation } from "@/lib/conjugation";
import { getExamplesForWord } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { PART_OF_SPEECH_LABELS, type Conjugation, type ExampleType, type LearningStatus } from "@/lib/types";

const STATUS_OPTIONS: { value: LearningStatus; label: string }[] = [
  { value: "chua_hoc", label: "Chưa nhớ" },
  { value: "dang_hoc", label: "Đang học" },
  { value: "da_nho", label: "Đã nhớ" },
];

const EXAMPLE_TYPE_LABELS: Record<ExampleType, string> = {
  exam: "Dạng đề thi",
  daily: "Đời thường",
  business: "Công việc",
};

export function VocabularyDetailClient({ id }: { id: string }) {
  const { getWordById, toggleFavorite, setStatus, examples: allExamples } = useVocabulary();
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

  const examples = getExamplesForWord(allExamples, word.id);
  const conjugation = getConjugation(word);
  const notes = [word.commonMistake, word.similarWords, word.naturalnessNote].filter((n) => n.trim().length > 0);

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

        <p className="mt-3 text-lg">{word.meaningVi}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {PART_OF_SPEECH_LABELS[word.partOfSpeech]}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {word.jlpt}
          </span>
          <StatusBadge status={word.progress.status} />
          {word.needsReview && (
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
              ⚠ Cần kiểm tra lại
            </span>
          )}
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
          <a
            href={`https://mazii.net/vi-VN/search/word/javi/${encodeURIComponent(word.word)}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center rounded-xl border border-border px-3 py-2 text-sm font-medium text-accent"
          >
            Tra trên Mazii ↗
          </a>
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
          <UsageRow label="Loại từ" value={PART_OF_SPEECH_LABELS[word.partOfSpeech]} />
          <UsageListRow label="Trợ từ / mẫu thường đi kèm" items={word.particlePatterns} />
          <UsageListRow label="Mẫu dùng" items={word.usagePatterns} />
          <UsageListRow label="Cụm thường gặp" items={word.collocations} />
          {conjugation && <ConjugationTable conjugation={conjugation} />}
          <UsageRow label="Cách dùng thực tế" value={word.usageNote} />
          {notes.length > 0 && (
            <div>
              <dt className="text-xs font-medium text-muted">Lưu ý / từ dễ nhầm</dt>
              <dd className="mt-1 flex flex-col gap-1 rounded-lg bg-amber-50 p-2 text-amber-800">
                {notes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold">Ví dụ</h2>
        {examples.length < 3 && (
          <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
            Hiện có {examples.length}/3 ngữ cảnh. Phần còn thiếu chưa được tự điền để tránh đưa câu chưa kiểm chứng vào bài học.
          </p>
        )}
        {examples.length === 0 && <p className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">Chưa có ví dụ đã kiểm tra.</p>}
        {examples.map((example) => (
          <div key={example.exampleNo} className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
            <div className="mb-2 flex flex-wrap items-center gap-1.5 pl-7 text-[10px] font-semibold">
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">{EXAMPLE_TYPE_LABELS[example.exampleType]}</span>
              {example.difficulty && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-muted">Mức {example.difficulty}/3</span>}
              {example.focusNote && <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-800">{example.focusNote}</span>}
            </div>
            <div className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">{example.exampleNo}</span>
              <div className="flex-1">
                <JapaneseSentence
                  text={example.exampleJp}
                  className="text-base"
                  priorityWordId={word.id}
                  furiganaTokens={example.furiganaTokens}
                />
              </div>
            </div>
            <p className="mt-1 pl-7 text-sm text-muted">{example.exampleVi}</p>
          </div>
        ))}
      </section>

      <PersonalExamples targetType="vocab" targetId={word.id} focusText={word.word} />
    </div>
  );
}

function UsageRow({ label, value }: { label: string; value: string }) {
  if (!value.trim()) return null;
  return (
    <div>
      <dt className="text-xs font-medium text-muted">{label}</dt>
      <dd className="mt-0.5">{value}</dd>
    </div>
  );
}

function UsageListRow({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <dt className="text-xs font-medium text-muted">{label}</dt>
      <dd className="font-jp mt-1 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="rounded-lg bg-slate-100 px-2 py-1 text-sm">
            {item}
          </span>
        ))}
      </dd>
    </div>
  );
}

const VERB_ROWS: { key: keyof Extract<Conjugation, { kind: "verb" }>; label: string }[] = [
  { key: "dictionaryForm", label: "辞書形" },
  { key: "masuForm", label: "ます形" },
  { key: "teForm", label: "て形" },
  { key: "naiForm", label: "ない形" },
  { key: "naiTaForm", label: "なかった形" },
  { key: "taForm", label: "た形" },
  { key: "potentialForm", label: "可能形" },
  { key: "volitionalForm", label: "意向形" },
  { key: "passiveForm", label: "受身形" },
  { key: "causativeForm", label: "使役形" },
  { key: "causativePassiveForm", label: "使役受身形" },
  { key: "imperativeForm", label: "命令形" },
  { key: "conditionalForm", label: "ば形" },
];

const ADJECTIVE_ROWS: {
  key: keyof Extract<Conjugation, { kind: "i_adjective" | "na_adjective" }>;
  label: string;
}[] = [
  { key: "dictionaryForm", label: "辞書形" },
  { key: "negativeForm", label: "否定形" },
  { key: "pastForm", label: "過去形" },
  { key: "negativePastForm", label: "過去否定形" },
  { key: "teForm", label: "て形" },
  { key: "conditionalForm", label: "条件形" },
];

function ConjugationTable({ conjugation }: { conjugation: Conjugation }) {
  const rows =
    conjugation.kind === "verb"
      ? VERB_ROWS.map((r) => ({ label: r.label, value: conjugation[r.key] }))
      : ADJECTIVE_ROWS.map((r) => ({ label: r.label, value: conjugation[r.key] }));

  return (
    <div>
      <dt className="text-xs font-medium text-muted">Cách chia</dt>
      <dd className="font-jp mt-1 grid grid-cols-1 gap-x-3 gap-y-1.5 rounded-lg bg-slate-50 p-3 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-3">
            <span className="shrink-0 text-muted">{row.label}</span>
            <span className="text-right font-medium">{row.value}</span>
          </div>
        ))}
      </dd>
    </div>
  );
}

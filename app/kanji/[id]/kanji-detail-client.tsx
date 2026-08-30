"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  gradeKanjiReview,
  getKanjiDetail,
  type KanjiDetail,
  type KanjiReadingRow,
  type KanjiWordRow,
} from "@/lib/data/kanji-service";
import { createClient } from "@/lib/supabase/client";

import { KanjiQuizRunner } from "./kanji-quiz-runner";

function wordsForReading(words: KanjiWordRow[], readingId: string): KanjiWordRow[] {
  return words.filter((w) => w.reading_id === readingId);
}

function ReadingBlock({ label, readings, words }: { label: string; readings: KanjiReadingRow[]; words: KanjiWordRow[] }) {
  if (readings.length === 0) return null;
  return (
    <div>
      <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">{label}</h3>
      <div className="flex flex-col gap-2">
        {readings.map((r) => {
          const relatedWords = wordsForReading(words, r.id).slice(0, 2);
          return (
            <div key={r.id} className="rounded-xl border border-border bg-surface px-3 py-2">
              <p className="font-jp text-lg font-semibold">
                {r.reading_kana}
                {r.review_status === "needs_review" && (
                  <span className="ml-2 align-middle text-[10px] font-normal text-amber-600">cần kiểm tra lại</span>
                )}
              </p>
              {relatedWords.map((w) => (
                <p key={w.id} className="mt-0.5 text-xs text-muted">
                  <span className="font-jp text-foreground">{w.word_jp}</span>
                  {w.word_furigana && ` (${w.word_furigana})`} — {w.meaning_vi}
                  {w.is_irregular && <span className="ml-1 text-amber-600">※bất quy tắc</span>}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function KanjiDetailClient({ id }: { id: string }) {
  const [detail, setDetail] = useState<KanjiDetail | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAllWords, setShowAllWords] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizResult, setQuizResult] = useState<{ correct: number; total: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const data = await getKanjiDetail(supabase, id);
      if (cancelled) return;
      setUserId(user?.id ?? null);
      setDetail(data);
      setLoading(false);
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleQuizFinish(correct: number, total: number) {
    setQuizResult({ correct, total });
    if (userId) {
      const supabase = createClient();
      await gradeKanjiReview(supabase, userId, id, correct > total / 2);
    }
  }

  if (loading) return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>;
  if (!detail) return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Không tìm thấy kanji.</p>;

  const kunReadings = detail.readings.filter((r) => r.reading_type === "kun");
  const onReadings = detail.readings.filter((r) => r.reading_type === "on");
  const shownWordIds = new Set(
    [...kunReadings, ...onReadings].flatMap((r) => wordsForReading(detail.words, r.id).slice(0, 2).map((w) => w.id)),
  );
  const remainingWords = detail.words.filter((w) => !shownWordIds.has(w.id));

  return (
    <div className="flex flex-col gap-5">
      <Link href={`/kanji?level=${detail.level}`} className="text-xs font-medium text-accent">
        ← Danh sách Kanji {detail.level}
      </Link>

      <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
        <span className="font-jp text-6xl font-bold">{detail.kanji_character}</span>
        <span className="text-sm font-semibold text-accent">{detail.han_viet}</span>
        {detail.meaning_vi_summary && <span className="text-sm text-muted">{detail.meaning_vi_summary}</span>}
      </div>

      <ReadingBlock label="Âm Kun" readings={kunReadings} words={detail.words} />
      <ReadingBlock label="Âm On" readings={onReadings} words={detail.words} />

      {remainingWords.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setShowAllWords((v) => !v)}
            className="text-xs font-semibold text-accent"
          >
            {showAllWords ? "Thu gọn ▲" : `Xem thêm ${remainingWords.length} từ ghép ▼`}
          </button>
          {showAllWords && (
            <ul className="mt-2 flex flex-col gap-1.5">
              {remainingWords.map((w) => (
                <li key={w.id} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs">
                  <span className="font-jp text-sm text-foreground">{w.word_jp}</span>
                  {w.word_furigana && ` (${w.word_furigana})`} — <span className="text-muted">{w.meaning_vi}</span>
                  {w.is_irregular && <span className="ml-1 text-amber-600">※bất quy tắc</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {(detail.similar_kanji.length > 0 || detail.common_mistake) && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
          {detail.similar_kanji.length > 0 && (
            <p>
              <span className="font-semibold">Kanji dễ nhầm:</span>{" "}
              <span className="font-jp">{detail.similar_kanji.join(" ⇄ ")}</span>
            </p>
          )}
          {detail.common_mistake && <p className="mt-1">{detail.common_mistake}</p>}
        </div>
      )}

      {detail.mnemonic_hint_vi && (
        <p className="rounded-xl border border-dashed border-border p-3 text-xs italic text-muted">
          💡 {detail.mnemonic_hint_vi}
        </p>
      )}

      <div>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Bài tập</h2>
        {detail.questions.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">Chưa có bài tập.</p>
        ) : !quizStarted ? (
          <button
            type="button"
            onClick={() => {
              setQuizStarted(true);
              setQuizResult(null);
            }}
            className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
          >
            Bắt đầu {detail.questions.length} câu hỏi
          </button>
        ) : quizResult ? (
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-sm font-semibold">
              Đúng {quizResult.correct}/{quizResult.total}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuizStarted(false);
                setQuizResult(null);
              }}
              className="rounded-xl border border-accent px-4 py-2 text-sm font-semibold text-accent"
            >
              Làm lại
            </button>
          </div>
        ) : (
          <KanjiQuizRunner questions={detail.questions} onFinish={handleQuizFinish} />
        )}
      </div>
    </div>
  );
}

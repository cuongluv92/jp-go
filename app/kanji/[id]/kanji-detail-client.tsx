"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { KanjiQuizRunner } from "@/components/kanji-quiz-runner";
import { KanjiStrokePractice } from "@/components/kanji-stroke-practice";
import { MaziiLink } from "@/components/mazii-link";
import { getCached, setCached } from "@/lib/data/client-cache";
import {
  gradeKanjiReview,
  getKanjiDetail,
  type KanjiDetail,
  type KanjiReadingRow,
  type KanjiWordRow,
} from "@/lib/data/kanji-service";
import { createClient } from "@/lib/supabase/client";

interface KanjiDetailCachedData {
  detail: KanjiDetail | null;
  userId: string | null;
}

interface LinkedVocabMeta {
  id: string;
  level: string;
  word_jp: string;
  reading_furigana: string | null;
  meaning_vi: string | null;
}

interface LinkedVocabExample {
  id: string;
  vocab_id: string;
  context_type: string | null;
  sentence_jp: string;
  sentence_vi: string | null;
  is_primary: boolean | null;
}

interface LinkedLearningData {
  vocab: LinkedVocabMeta;
  examples: LinkedVocabExample[];
}

function kanjiDetailCacheKey(id: string): string {
  return `kanji-detail-${id}`;
}

function wordsForReading(words: KanjiWordRow[], readingId: string): KanjiWordRow[] {
  return words.filter((w) => w.reading_id === readingId);
}

function ExamplePreview({ data }: { data?: LinkedLearningData }) {
  if (!data || data.examples.length === 0) return null;
  const first = data.examples[0];
  const more = data.examples.slice(1, 3);
  return (
    <div className="mt-1.5 rounded-lg bg-slate-50 px-2.5 py-2 text-xs leading-relaxed">
      <p className="font-jp text-[13px] text-foreground">{first.sentence_jp}</p>
      {first.sentence_vi && <p className="mt-0.5 text-muted">→ {first.sentence_vi}</p>}
      {more.length > 0 && (
        <details className="mt-1">
          <summary className="cursor-pointer font-medium text-accent">Xem thêm {more.length} ví dụ</summary>
          <div className="mt-1.5 flex flex-col gap-2">
            {more.map((example) => (
              <div key={example.id}>
                <p className="font-jp text-[13px] text-foreground">{example.sentence_jp}</p>
                {example.sentence_vi && <p className="text-muted">→ {example.sentence_vi}</p>}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function WordRow({ word, linked }: { word: KanjiWordRow; linked?: LinkedLearningData }) {
  return (
    <div className="mt-1.5 border-t border-border/70 pt-1.5 first:mt-0 first:border-t-0 first:pt-0">
      <p className="text-xs text-muted">
        <Link href={`/vocabulary?query=${encodeURIComponent(word.word_jp)}`} className="font-jp text-sm font-medium text-accent underline decoration-dotted">
          {word.word_jp}
        </Link>
        {word.word_furigana && `（${word.word_furigana}）`} — {word.meaning_vi}
        {linked?.vocab.level && (
          <span className="ml-1.5 rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-muted">
            từ {linked.vocab.level}
          </span>
        )}
        {word.is_irregular && <span className="ml-1 text-amber-600">※ đọc đặc biệt</span>}
      </p>
      <ExamplePreview data={linked} />
    </div>
  );
}

function ReadingCard({ reading, words, linkedByVocabId }: { reading: KanjiReadingRow; words: KanjiWordRow[]; linkedByVocabId: Record<string, LinkedLearningData> }) {
  const relatedWords = wordsForReading(words, reading.id).slice(0, 3);
  const body = (
    <div className="rounded-xl border border-border bg-surface px-3 py-2">
      <div className="flex items-center gap-2">
        <p className="font-jp text-lg font-semibold">{reading.reading_kana}</p>
        <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${reading.is_main ? "bg-emerald-50 text-emerald-700" : relatedWords.length > 0 ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-muted"}`}>
          {reading.is_main ? "ưu tiên học" : relatedWords.length > 0 ? "âm bổ trợ" : "âm mở rộng"}
        </span>
        {reading.review_status === "needs_review" && <span className="text-[10px] text-amber-600">cần kiểm tra lại</span>}
      </div>
      {relatedWords.length > 0 ? (
        <div className="mt-1.5">
          {relatedWords.map((word) => (
            <WordRow key={word.id} word={word} linked={word.linked_vocab_id ? linkedByVocabId[word.linked_vocab_id] : undefined} />
          ))}
        </div>
      ) : (
        <p className="mt-0.5 text-[11px] text-muted">Không ép thêm từ hiếm chỉ để lấp số lượng.</p>
      )}
    </div>
  );

  if (!reading.is_main && relatedWords.length === 0) {
    return (
      <details key={reading.id}>
        <summary className="cursor-pointer list-none rounded-xl border border-dashed border-border bg-slate-50 px-3 py-2 text-xs text-muted">
          Âm mở rộng: <span className="font-jp font-semibold text-foreground">{reading.reading_kana}</span> ▾
        </summary>
        <div className="mt-1">{body}</div>
      </details>
    );
  }
  return body;
}

function ReadingBlock({ label, readings, words, linkedByVocabId }: { label: string; readings: KanjiReadingRow[]; words: KanjiWordRow[]; linkedByVocabId: Record<string, LinkedLearningData> }) {
  if (readings.length === 0) return null;
  const sorted = [...readings].sort((a, b) => Number(b.is_main) - Number(a.is_main));
  return (
    <div>
      <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">{label}</h3>
      <div className="flex flex-col gap-2">
        {sorted.map((reading) => (
          <ReadingCard key={reading.id} reading={reading} words={words} linkedByVocabId={linkedByVocabId} />
        ))}
      </div>
    </div>
  );
}

export function KanjiDetailClient({ id }: { id: string }) {
  const cached = getCached<KanjiDetailCachedData>(kanjiDetailCacheKey(id));
  const [detail, setDetail] = useState<KanjiDetail | null>(cached?.detail ?? null);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [linkedByVocabId, setLinkedByVocabId] = useState<Record<string, LinkedLearningData>>({});
  const [loading, setLoading] = useState(!cached);
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
      setCached<KanjiDetailCachedData>(kanjiDetailCacheKey(id), { detail: data, userId: user?.id ?? null });

      const vocabIds = Array.from(new Set((data?.words ?? []).map((word) => word.linked_vocab_id).filter((value): value is string => Boolean(value))));
      if (vocabIds.length === 0) {
        setLinkedByVocabId({});
        return;
      }
      const [vocabResult, exampleResult] = await Promise.all([
        supabase.from("jp_vocab").select("id, level, word_jp, reading_furigana, meaning_vi").in("id", vocabIds),
        supabase.from("jp_vocab_examples").select("id, vocab_id, context_type, sentence_jp, sentence_vi, is_primary").in("vocab_id", vocabIds).eq("review_status", "ok"),
      ]);
      if (cancelled || vocabResult.error || exampleResult.error) return;
      const vocabRows = (vocabResult.data ?? []) as LinkedVocabMeta[];
      const exampleRows = (exampleResult.data ?? []) as LinkedVocabExample[];
      const map: Record<string, LinkedLearningData> = {};
      for (const vocab of vocabRows) {
        const examples = exampleRows
          .filter((example) => example.vocab_id === vocab.id)
          .sort((a, b) => Number(Boolean(b.is_primary)) - Number(Boolean(a.is_primary)))
          .slice(0, 3);
        map[vocab.id] = { vocab, examples };
      }
      setLinkedByVocabId(map);
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

  const readingWordIds = useMemo(() => {
    if (!detail) return new Set<string>();
    return new Set(detail.words.filter((word) => word.reading_id !== null).map((word) => word.id));
  }, [detail]);

  if (loading) return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>;
  if (!detail) return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Không tìm thấy kanji.</p>;

  const kunReadings = detail.readings.filter((r) => r.reading_type === "kun");
  const onReadings = detail.readings.filter((r) => r.reading_type === "on");
  const remainingWords = detail.words.filter((word) => !readingWordIds.has(word.id));

  return (
    <div className="flex flex-col gap-5">
      <Link href={`/kanji?level=${detail.level}`} className="text-xs font-medium text-accent">
        ← Danh sách Kanji {detail.level}
      </Link>

      <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
        <span className="font-jp text-6xl font-bold">{detail.kanji_character}</span>
        <span className="text-sm font-semibold text-accent">{detail.han_viet}</span>
        {detail.meaning_vi_summary && <span className="text-sm text-muted">{detail.meaning_vi_summary}</span>}
        {(detail.stroke_count || detail.radical) && (
          <div className="mt-1 flex flex-wrap justify-center gap-2 text-xs text-muted">
            {detail.stroke_count && <span className="rounded-full bg-slate-100 px-2.5 py-1">{detail.stroke_count} nét</span>}
            {detail.radical && <span className="rounded-full bg-slate-100 px-2.5 py-1">Bộ {detail.radical}</span>}
          </div>
        )}
        <MaziiLink kind="kanji" query={detail.kanji_character} className="mt-2 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-accent" />
      </div>

      <KanjiStrokePractice character={detail.kanji_character} userId={userId} />

      <ReadingBlock label="Âm Kun" readings={kunReadings} words={detail.words} linkedByVocabId={linkedByVocabId} />
      <ReadingBlock label="Âm On" readings={onReadings} words={detail.words} linkedByVocabId={linkedByVocabId} />

      {remainingWords.length > 0 && (
        <div>
          <button type="button" onClick={() => setShowAllWords((v) => !v)} className="text-xs font-semibold text-accent">
            {showAllWords ? "Thu gọn ▲" : `Đọc đặc biệt / từ chưa gắn âm (${remainingWords.length}) ▼`}
          </button>
          {showAllWords && (
            <ul className="mt-2 flex flex-col gap-1.5">
              {remainingWords.map((word) => (
                <li key={word.id} className="rounded-lg border border-border bg-surface px-3 py-2 text-xs">
                  <WordRow word={word} linked={word.linked_vocab_id ? linkedByVocabId[word.linked_vocab_id] : undefined} />
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

      {detail.mnemonic_hint_vi && <p className="rounded-xl border border-dashed border-border p-3 text-xs italic text-muted">💡 {detail.mnemonic_hint_vi}</p>}

      <div>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Bài tập</h2>
        {detail.questions.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">Chưa có bài tập.</p>
        ) : !quizStarted ? (
          <button type="button" onClick={() => { setQuizStarted(true); setQuizResult(null); }} className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
            Bắt đầu {detail.questions.length} câu hỏi
          </button>
        ) : quizResult ? (
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-sm font-semibold">Đúng {quizResult.correct}/{quizResult.total}</p>
            <button type="button" onClick={() => { setQuizStarted(false); setQuizResult(null); }} className="rounded-xl border border-accent px-4 py-2 text-sm font-semibold text-accent">
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

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { JapaneseSentence } from "@/components/japanese-sentence";
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

interface LinkedVocabPreview {
  id: string;
  level: string;
  word_jp: string;
  reading_furigana: string;
  meaning_vi: string;
}

interface LinkedVocabExample {
  id: string;
  vocab_id: string;
  example_no: number | null;
  example_type: string | null;
  example_jp: string;
  example_vi: string;
  furigana_tokens: Array<{ surface: string; reading: string }> | null;
}

interface KanjiDetailCachedData {
  detail: KanjiDetail | null;
  userId: string | null;
  linkedVocabById?: Record<string, LinkedVocabPreview>;
  examplesByVocabId?: Record<string, LinkedVocabExample[]>;
}

function kanjiDetailCacheKey(id: string): string {
  return `kanji-detail-${id}`;
}

function wordsForReading(words: KanjiWordRow[], readingId: string): KanjiWordRow[] {
  return words.filter((word) => word.reading_id === readingId);
}

function preferredExample(examples: LinkedVocabExample[] | undefined): LinkedVocabExample | null {
  if (!examples || examples.length === 0) return null;
  return (
    examples.find((example) => example.example_type === "daily") ??
    examples.find((example) => example.example_type === "exam") ??
    examples.find((example) => example.example_type === "business") ??
    examples[0]
  );
}

function exampleTypeLabel(type: string | null): string {
  if (type === "exam") return "Exam";
  if (type === "business") return "Work";
  return "Daily";
}

function RelatedWordRow({
  word,
  enhancedN3,
  linkedVocabById,
  examplesByVocabId,
}: {
  word: KanjiWordRow;
  enhancedN3: boolean;
  linkedVocabById: Record<string, LinkedVocabPreview>;
  examplesByVocabId: Record<string, LinkedVocabExample[]>;
}) {
  const linkedVocab = word.linked_vocab_id ? linkedVocabById[word.linked_vocab_id] : undefined;
  const example = enhancedN3 && word.linked_vocab_id ? preferredExample(examplesByVocabId[word.linked_vocab_id]) : null;

  if (!enhancedN3) {
    return (
      <p className="mt-0.5 text-xs text-muted">
        <Link
          href={`/vocabulary?query=${encodeURIComponent(word.word_jp)}`}
          className="font-jp font-medium text-accent underline decoration-dotted"
        >
          {word.word_jp}
        </Link>
        {word.word_furigana && ` (${word.word_furigana})`} — {word.meaning_vi}
        {word.is_irregular && <span className="ml-1 text-amber-600">※biến âm/đọc đặc biệt</span>}
      </p>
    );
  }

  return (
    <div className="border-t border-border/70 py-2 first:border-t-0 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <Link
          href={`/vocabulary?query=${encodeURIComponent(word.word_jp)}`}
          className="font-jp text-sm font-semibold text-accent underline decoration-dotted underline-offset-2"
        >
          {word.word_jp}
        </Link>
        {word.word_furigana && <span className="font-jp text-xs font-medium text-foreground/70">{word.word_furigana}</span>}
        {word.meaning_vi && <span className="text-xs text-foreground/75">— {word.meaning_vi}</span>}
        {word.is_irregular && <span className="text-[10px] font-semibold text-amber-700">※đọc đặc biệt</span>}
      </div>

      {example && (
        <details className="mt-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5">
          <summary className="cursor-pointer text-[11px] font-semibold text-accent">
            Ví dụ {exampleTypeLabel(example.example_type)}
          </summary>
          <div className="mt-2">
            <JapaneseSentence
              text={example.example_jp}
              className="text-sm leading-7 text-foreground"
              priorityWordId={linkedVocab?.id}
              furiganaTokens={example.furigana_tokens ?? []}
            />
            <p className="mt-1 text-xs leading-5 text-foreground/70">{example.example_vi}</p>
          </div>
        </details>
      )}
    </div>
  );
}

function ReadingBlock({
  label,
  readings,
  words,
  enhancedN3,
  linkedVocabById,
  examplesByVocabId,
}: {
  label: string;
  readings: KanjiReadingRow[];
  words: KanjiWordRow[];
  enhancedN3: boolean;
  linkedVocabById: Record<string, LinkedVocabPreview>;
  examplesByVocabId: Record<string, LinkedVocabExample[]>;
}) {
  if (readings.length === 0) return null;
  const limit = enhancedN3 ? 4 : 2;

  return (
    <div>
      <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">{label}</h3>
      <div className="flex flex-col gap-2">
        {readings.map((reading) => {
          const allRelatedWords = wordsForReading(words, reading.id);
          const relatedWords = allRelatedWords.slice(0, limit);
          const totalRelatedWords = allRelatedWords.length;
          return (
            <div
              key={reading.id}
              className={
                enhancedN3 && reading.is_main
                  ? "rounded-xl border border-accent/35 bg-accent-soft/35 px-3 py-2.5"
                  : "rounded-xl border border-border bg-surface px-3 py-2.5"
              }
            >
              <div className="flex items-center justify-between gap-2">
                <p className={enhancedN3 ? "font-jp text-xl font-bold text-foreground" : "font-jp text-lg font-semibold"}>
                  {reading.reading_kana}
                  {reading.is_main && (
                    <span className="ml-2 align-middle font-sans text-[10px] font-semibold text-accent">ưu tiên N3</span>
                  )}
                  {reading.review_status === "needs_review" && (
                    <span className="ml-2 align-middle font-sans text-[10px] font-normal text-amber-600">cần kiểm tra lại</span>
                  )}
                </p>
                {enhancedN3 && totalRelatedWords > 0 && (
                  <span className="shrink-0 text-[10px] font-medium text-muted">{totalRelatedWords} từ</span>
                )}
              </div>

              {relatedWords.length > 0 && (
                <div className={enhancedN3 ? "mt-1.5" : ""}>
                  {relatedWords.map((word) => (
                    <RelatedWordRow
                      key={word.id}
                      word={word}
                      enhancedN3={enhancedN3}
                      linkedVocabById={linkedVocabById}
                      examplesByVocabId={examplesByVocabId}
                    />
                  ))}
                </div>
              )}

              {enhancedN3 && totalRelatedWords > relatedWords.length && (
                <p className="mt-1.5 text-[10px] text-muted">+ {totalRelatedWords - relatedWords.length} từ khác ở mục “Xem thêm từ ghép” bên dưới</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function KanjiDetailClient({ id }: { id: string }) {
  const cached = getCached<KanjiDetailCachedData>(kanjiDetailCacheKey(id));
  const [detail, setDetail] = useState<KanjiDetail | null>(cached?.detail ?? null);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [linkedVocabById, setLinkedVocabById] = useState<Record<string, LinkedVocabPreview>>(cached?.linkedVocabById ?? {});
  const [examplesByVocabId, setExamplesByVocabId] = useState<Record<string, LinkedVocabExample[]>>(cached?.examplesByVocabId ?? {});
  const [loading, setLoading] = useState(!cached);
  const [showAllWords, setShowAllWords] = useState(false);
  const [showExtendedReadings, setShowExtendedReadings] = useState(false);
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

      let nextLinkedVocabById: Record<string, LinkedVocabPreview> = {};
      let nextExamplesByVocabId: Record<string, LinkedVocabExample[]> = {};

      // Chỉ N3 dùng lớp ví dụ/furigana nâng cao. N4/N5 giữ giao diện gọn cũ
      // và không phải tải thêm dữ liệu chỉ vì component Kanji dùng chung.
      if (data?.level === "N3") {
        const linkedIds = Array.from(
          new Set((data.words ?? []).map((word) => word.linked_vocab_id).filter((vocabId): vocabId is string => Boolean(vocabId))),
        );

        if (linkedIds.length > 0) {
          const [vocabResult, exampleResult] = await Promise.all([
            supabase.from("jp_vocab").select("id, level, word_jp, reading_furigana, meaning_vi").in("id", linkedIds),
            supabase
              .from("jp_vocab_examples")
              .select("id, vocab_id, example_no, example_type, example_jp, example_vi, furigana_tokens")
              .in("vocab_id", linkedIds)
              .order("example_no", { ascending: true }),
          ]);
          const linkedError = vocabResult.error ?? exampleResult.error;
          if (linkedError) throw linkedError;

          nextLinkedVocabById = Object.fromEntries(((vocabResult.data ?? []) as LinkedVocabPreview[]).map((row) => [row.id, row]));
          for (const example of (exampleResult.data ?? []) as LinkedVocabExample[]) {
            nextExamplesByVocabId[example.vocab_id] = [...(nextExamplesByVocabId[example.vocab_id] ?? []), example];
          }
        }
      }

      if (cancelled) return;
      setUserId(user?.id ?? null);
      setDetail(data);
      setLinkedVocabById(nextLinkedVocabById);
      setExamplesByVocabId(nextExamplesByVocabId);
      setLoading(false);
      setCached<KanjiDetailCachedData>(kanjiDetailCacheKey(id), {
        detail: data,
        userId: user?.id ?? null,
        linkedVocabById: nextLinkedVocabById,
        examplesByVocabId: nextExamplesByVocabId,
      });
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

  const enhancedN3 = detail.level === "N3";
  const linkedReadingIds = new Set(detail.words.map((word) => word.reading_id).filter((readingId): readingId is string => Boolean(readingId)));
  const learningReadings = enhancedN3
    ? detail.readings.filter((reading) => reading.is_main || linkedReadingIds.has(reading.id))
    : detail.readings;
  const extendedReadings = enhancedN3
    ? detail.readings.filter((reading) => !learningReadings.some((item) => item.id === reading.id))
    : [];
  const kunReadings = learningReadings.filter((reading) => reading.reading_type === "kun");
  const onReadings = learningReadings.filter((reading) => reading.reading_type === "on");
  const extendedKunReadings = extendedReadings.filter((reading) => reading.reading_type === "kun");
  const extendedOnReadings = extendedReadings.filter((reading) => reading.reading_type === "on");
  const wordLimit = enhancedN3 ? 4 : 2;
  const shownWordIds = new Set(
    [...kunReadings, ...onReadings].flatMap((reading) =>
      wordsForReading(detail.words, reading.id)
        .slice(0, wordLimit)
        .map((word) => word.id),
    ),
  );
  const remainingWords = detail.words.filter((word) => !shownWordIds.has(word.id));

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

      {enhancedN3 && (
        <p className="rounded-xl border border-accent/20 bg-accent-soft px-3 py-2 text-xs leading-5 text-foreground/70">
          N3: ưu tiên âm đang dùng trong từ học thật. Ví dụ được thu gọn; mở “Ví dụ” khi cần để xem furigana, nghe và bấm vào từ.
        </p>
      )}

      <ReadingBlock
        label={enhancedN3 ? "Âm Kun（訓読み）" : "Âm Kun"}
        readings={kunReadings}
        words={detail.words}
        enhancedN3={enhancedN3}
        linkedVocabById={linkedVocabById}
        examplesByVocabId={examplesByVocabId}
      />
      <ReadingBlock
        label={enhancedN3 ? "Âm On（音読み）" : "Âm On"}
        readings={onReadings}
        words={detail.words}
        enhancedN3={enhancedN3}
        linkedVocabById={linkedVocabById}
        examplesByVocabId={examplesByVocabId}
      />

      {extendedReadings.length > 0 && (
        <div className="rounded-xl border border-dashed border-border p-3">
          <button
            type="button"
            onClick={() => setShowExtendedReadings((value) => !value)}
            className="text-xs font-semibold text-accent"
          >
            {showExtendedReadings ? "Ẩn âm từ điển mở rộng ▲" : `Xem ${extendedReadings.length} âm từ điển mở rộng ▼`}
          </button>
          {showExtendedReadings && (
            <div className="mt-3 flex flex-col gap-4">
              <p className="text-xs text-muted">Giữ để tra cứu, nhưng không đặt ngang hàng với âm đang dùng trong từ N3 hiện tại.</p>
              <ReadingBlock
                label="Kun mở rộng"
                readings={extendedKunReadings}
                words={detail.words}
                enhancedN3={false}
                linkedVocabById={{}}
                examplesByVocabId={{}}
              />
              <ReadingBlock
                label="On mở rộng"
                readings={extendedOnReadings}
                words={detail.words}
                enhancedN3={false}
                linkedVocabById={{}}
                examplesByVocabId={{}}
              />
            </div>
          )}
        </div>
      )}

      {remainingWords.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setShowAllWords((value) => !value)}
            className="text-xs font-semibold text-accent"
          >
            {showAllWords ? "Thu gọn ▲" : `Xem thêm ${remainingWords.length} từ ghép ▼`}
          </button>
          {showAllWords && (
            <ul className="mt-2 flex flex-col gap-1.5">
              {remainingWords.map((word) => (
                <li key={word.id} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs">
                  <Link
                    href={`/vocabulary?query=${encodeURIComponent(word.word_jp)}`}
                    className="font-jp text-sm font-medium text-accent underline decoration-dotted"
                  >
                    {word.word_jp}
                  </Link>
                  {word.word_furigana && ` (${word.word_furigana})`} — <span className="text-muted">{word.meaning_vi}</span>
                  {word.is_irregular && <span className="ml-1 text-amber-600">※biến âm/đọc đặc biệt</span>}
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
        <p className="rounded-xl border border-dashed border-border p-3 text-xs italic text-muted">💡 {detail.mnemonic_hint_vi}</p>
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
            <p className="text-sm font-semibold">Đúng {quizResult.correct}/{quizResult.total}</p>
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

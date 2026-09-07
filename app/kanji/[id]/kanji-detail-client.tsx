"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  return words.filter((w) => w.reading_id === readingId);
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

function WordLearningCard({
  word,
  linkedVocabById,
  examplesByVocabId,
}: {
  word: KanjiWordRow;
  linkedVocabById: Record<string, LinkedVocabPreview>;
  examplesByVocabId: Record<string, LinkedVocabExample[]>;
}) {
  const linkedVocab = word.linked_vocab_id ? linkedVocabById[word.linked_vocab_id] : undefined;
  const example = word.linked_vocab_id ? preferredExample(examplesByVocabId[word.linked_vocab_id]) : null;
  const exampleCount = word.linked_vocab_id ? examplesByVocabId[word.linked_vocab_id]?.length ?? 0 : 0;

  return (
    <div className="rounded-xl border border-border bg-surface p-3 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <Link
            href={`/vocabulary?query=${encodeURIComponent(word.word_jp)}`}
            className="font-jp text-lg font-bold text-foreground underline decoration-accent/40 underline-offset-4"
          >
            {word.word_jp}
          </Link>
          {word.word_furigana && <p className="mt-0.5 font-jp text-sm font-semibold text-accent">{word.word_furigana}</p>}
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          {linkedVocab && (
            <span className="rounded-full bg-accent-soft px-2 py-1 text-[10px] font-bold text-accent">
              Kho từ {linkedVocab.level}
            </span>
          )}
          {exampleCount > 0 && (
            <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-foreground">
              {exampleCount} ví dụ
            </span>
          )}
          {word.is_irregular && (
            <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold text-amber-800">biến âm/đọc đặc biệt</span>
          )}
        </div>
      </div>

      {word.meaning_vi && <p className="mt-1.5 text-sm font-medium text-foreground">{word.meaning_vi}</p>}

      {example && (
        <div className="mt-3 rounded-lg border border-accent/15 bg-accent-soft/40 p-2.5">
          <p className="text-[10px] font-bold uppercase tracking-wide text-accent">Ví dụ {exampleTypeLabel(example.example_type)}</p>
          <p className="mt-1 font-jp text-sm font-semibold leading-6 text-foreground">{example.example_jp}</p>
          <p className="mt-1 text-xs leading-5 text-foreground/80">{example.example_vi}</p>
        </div>
      )}

      {linkedVocab && (
        <Link href={`/vocabulary?query=${encodeURIComponent(linkedVocab.word_jp)}`} className="mt-2 inline-block text-xs font-bold text-accent">
          Xem đầy đủ từ vựng →
        </Link>
      )}
    </div>
  );
}

function ReadingBlock({
  label,
  readings,
  words,
  linkedVocabById,
  examplesByVocabId,
}: {
  label: string;
  readings: KanjiReadingRow[];
  words: KanjiWordRow[];
  linkedVocabById: Record<string, LinkedVocabPreview>;
  examplesByVocabId: Record<string, LinkedVocabExample[]>;
}) {
  if (readings.length === 0) return null;
  return (
    <section>
      <h3 className="mb-2 text-sm font-extrabold tracking-wide text-foreground">{label}</h3>
      <div className="flex flex-col gap-3">
        {readings.map((reading) => {
          const relatedWords = wordsForReading(words, reading.id);
          return (
            <div
              key={reading.id}
              className={
                reading.is_main
                  ? "rounded-2xl border-2 border-accent/35 bg-accent-soft/50 p-4 shadow-sm"
                  : "rounded-2xl border border-border bg-surface p-4 shadow-sm"
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={reading.is_main ? "text-[10px] font-extrabold uppercase tracking-wider text-accent" : "text-[10px] font-bold uppercase tracking-wider text-muted"}>
                    {reading.is_main ? "Âm ưu tiên học ở N3" : "Âm dùng trong từ liên quan"}
                  </p>
                  <p className="mt-0.5 font-jp text-3xl font-black text-foreground">{reading.reading_kana}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  {reading.is_main && <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold text-accent-foreground">Ưu tiên N3</span>}
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-foreground">{relatedWords.length} từ liên quan</span>
                  {reading.review_status === "needs_review" && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-800">cần kiểm tra lại</span>
                  )}
                </div>
              </div>

              {relatedWords.length > 0 ? (
                <div className="mt-3 flex flex-col gap-2.5">
                  {relatedWords.map((word) => (
                    <WordLearningCard
                      key={word.id}
                      word={word}
                      linkedVocabById={linkedVocabById}
                      examplesByVocabId={examplesByVocabId}
                    />
                  ))}
                </div>
              ) : (
                <p className="mt-3 rounded-lg border border-dashed border-border px-3 py-2 text-xs text-muted">
                  Đây là âm ưu tiên của chữ, nhưng kho hiện tại chưa có từ minh họa đủ chắc để gắn vào. Không tự thêm từ chỉ để lấp chỗ trống.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function KanjiDetailClient({ id }: { id: string }) {
  const cached = getCached<KanjiDetailCachedData>(kanjiDetailCacheKey(id));
  const [detail, setDetail] = useState<KanjiDetail | null>(cached?.detail ?? null);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [linkedVocabById, setLinkedVocabById] = useState<Record<string, LinkedVocabPreview>>(cached?.linkedVocabById ?? {});
  const [examplesByVocabId, setExamplesByVocabId] = useState<Record<string, LinkedVocabExample[]>>(cached?.examplesByVocabId ?? {});
  const [loading, setLoading] = useState(!cached);
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

      const linkedIds = Array.from(
        new Set((data?.words ?? []).map((word) => word.linked_vocab_id).filter((vocabId): vocabId is string => Boolean(vocabId))),
      );
      let nextLinkedVocabById: Record<string, LinkedVocabPreview> = {};
      let nextExamplesByVocabId: Record<string, LinkedVocabExample[]> = {};

      if (linkedIds.length > 0) {
        const [vocabResult, exampleResult] = await Promise.all([
          supabase.from("jp_vocab").select("id, level, word_jp, reading_furigana, meaning_vi").in("id", linkedIds),
          supabase
            .from("jp_vocab_examples")
            .select("id, vocab_id, example_no, example_type, example_jp, example_vi")
            .in("vocab_id", linkedIds)
            .order("example_no", { ascending: true }),
        ]);
        const linkedError = vocabResult.error ?? exampleResult.error;
        if (linkedError) throw linkedError;

        nextLinkedVocabById = Object.fromEntries(
          ((vocabResult.data ?? []) as LinkedVocabPreview[]).map((row) => [row.id, row]),
        );
        for (const example of (exampleResult.data ?? []) as LinkedVocabExample[]) {
          nextExamplesByVocabId[example.vocab_id] = [...(nextExamplesByVocabId[example.vocab_id] ?? []), example];
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

  const linkedReadingIds = new Set(detail.words.map((word) => word.reading_id).filter((readingId): readingId is string => Boolean(readingId)));
  const learningReadings =
    detail.level === "N3" ? detail.readings.filter((reading) => reading.is_main || linkedReadingIds.has(reading.id)) : detail.readings;
  const extendedReadings = detail.level === "N3" ? detail.readings.filter((reading) => !learningReadings.some((item) => item.id === reading.id)) : [];
  const kunReadings = learningReadings.filter((reading) => reading.reading_type === "kun");
  const onReadings = learningReadings.filter((reading) => reading.reading_type === "on");
  const specialWords = detail.words.filter((word) => !word.reading_id);
  const linkedExampleWordCount = detail.words.filter((word) => word.linked_vocab_id && (examplesByVocabId[word.linked_vocab_id]?.length ?? 0) > 0).length;

  return (
    <div className="flex flex-col gap-5">
      <Link href={`/kanji?level=${detail.level}`} className="text-xs font-medium text-accent">
        ← Danh sách Kanji {detail.level}
      </Link>

      <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
        <span className="font-jp text-6xl font-bold">{detail.kanji_character}</span>
        <span className="text-sm font-semibold text-accent">{detail.han_viet}</span>
        {detail.meaning_vi_summary && <span className="text-sm font-medium text-foreground/80">{detail.meaning_vi_summary}</span>}
        {(detail.stroke_count || detail.radical) && (
          <div className="mt-1 flex flex-wrap justify-center gap-2 text-xs text-muted">
            {detail.stroke_count && <span className="rounded-full bg-slate-100 px-2.5 py-1">{detail.stroke_count} nét</span>}
            {detail.radical && <span className="rounded-full bg-slate-100 px-2.5 py-1">Bộ {detail.radical}</span>}
          </div>
        )}
        <MaziiLink kind="kanji" query={detail.kanji_character} className="mt-2 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-accent" />
      </div>

      <KanjiStrokePractice character={detail.kanji_character} userId={userId} />

      <section className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-extrabold text-foreground">Âm đọc & từ liên quan</h2>
            <p className="mt-1 text-xs leading-5 text-foreground/70">
              Học âm qua từ thật. Âm ưu tiên N3 được làm nổi; mỗi từ liên quan hiện rõ cách đọc, nghĩa và ví dụ đã kiểm định khi có trong kho từ vựng.
            </p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-slate-100 px-2 py-2">
            <p className="text-lg font-black text-foreground">{onReadings.length}</p>
            <p className="text-[10px] font-semibold text-muted">On đang học</p>
          </div>
          <div className="rounded-xl bg-slate-100 px-2 py-2">
            <p className="text-lg font-black text-foreground">{kunReadings.length}</p>
            <p className="text-[10px] font-semibold text-muted">Kun đang học</p>
          </div>
          <div className="rounded-xl bg-accent-soft px-2 py-2">
            <p className="text-lg font-black text-accent">{detail.words.length}</p>
            <p className="text-[10px] font-semibold text-accent">Từ liên quan</p>
          </div>
        </div>
        {linkedExampleWordCount > 0 && (
          <p className="mt-2 text-[11px] font-semibold text-accent">{linkedExampleWordCount} từ trên trang này có thể mở trực tiếp ví dụ học thật từ kho từ vựng.</p>
        )}
      </section>

      <ReadingBlock
        label="Âm On（音読み）"
        readings={onReadings}
        words={detail.words}
        linkedVocabById={linkedVocabById}
        examplesByVocabId={examplesByVocabId}
      />
      <ReadingBlock
        label="Âm Kun（訓読み）"
        readings={kunReadings}
        words={detail.words}
        linkedVocabById={linkedVocabById}
        examplesByVocabId={examplesByVocabId}
      />

      {specialWords.length > 0 && (
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="text-sm font-extrabold text-amber-950">Đọc đặc biệt / không nên ép vào một On-Kun</h3>
          <p className="mt-1 text-xs leading-5 text-amber-900/80">Những từ này được giữ riêng để tránh dạy sai rằng toàn bộ cách đọc phải quy về một âm On/Kun đơn lẻ.</p>
          <div className="mt-3 flex flex-col gap-2">
            {specialWords.map((word) => (
              <WordLearningCard
                key={word.id}
                word={word}
                linkedVocabById={linkedVocabById}
                examplesByVocabId={examplesByVocabId}
              />
            ))}
          </div>
        </section>
      )}

      {extendedReadings.length > 0 && (
        <div className="rounded-xl border border-dashed border-border p-3">
          <button type="button" onClick={() => setShowExtendedReadings((value) => !value)} className="text-xs font-bold text-accent">
            {showExtendedReadings ? "Ẩn âm từ điển mở rộng ▲" : `Xem ${extendedReadings.length} âm từ điển mở rộng ▼`}
          </button>
          {showExtendedReadings && (
            <div className="mt-3">
              <p className="text-xs leading-5 text-muted">Các âm này vẫn được giữ để tra cứu, nhưng chưa có từ minh họa đủ chắc trong kho hiện tại nên không được đặt ngang hàng với phần học chính.</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {extendedReadings.map((reading) => (
                  <span key={reading.id} className="rounded-lg border border-border bg-surface px-2.5 py-1.5 font-jp text-sm font-semibold text-foreground">
                    {reading.reading_kana}
                    <span className="ml-1 font-sans text-[9px] font-semibold text-muted">{reading.reading_type === "on" ? "ON" : "KUN"}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {(detail.similar_kanji.length > 0 || detail.common_mistake) && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
          {detail.similar_kanji.length > 0 && (
            <p>
              <span className="font-semibold">Kanji dễ nhầm:</span>{" "}
              <span className="font-jp font-bold">{detail.similar_kanji.join(" ⇄ ")}</span>
            </p>
          )}
          {detail.common_mistake && <p className="mt-1">{detail.common_mistake}</p>}
        </div>
      )}

      {detail.mnemonic_hint_vi && (
        <p className="rounded-xl border border-dashed border-border p-3 text-xs font-medium italic text-foreground/75">
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

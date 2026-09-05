"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { QuizRunner, type QuizItem } from "@/components/quiz-runner";
import { buildVocabContextExercises, getKanjiContextExercises } from "@/lib/data/context-exercises";
import { getQuestionsForGrammarIds } from "@/lib/data/grammar-service";
import { getKanjiByIds } from "@/lib/data/kanji-service";
import { savePracticeAttempt } from "@/lib/data/practice-attempt-service";
import { getExamplesForWord } from "@/lib/data/selectors";
import { getStudyPlanDays, listActiveStudyPlans, type StudyDayRow, type StudyPlanRow } from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";

type SummaryScope = "day" | "lesson" | "ten";

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function grammarQuestionToQuiz(question: Awaited<ReturnType<typeof getQuestionsForGrammarIds>>[number]): QuizItem | null {
  if (question.review_status !== "ok" || question.question_type === "choose_meaning") return null;
  const options = [question.choice_1, question.choice_2, question.choice_3, question.choice_4].filter((choice): choice is string => Boolean(choice));
  if (options.length > 0) {
    const correctIndex = options.indexOf(question.correct_answer);
    if (correctIndex < 0) return null;
    return {
      prompt: question.question_text,
      options,
      correctIndex,
      explanation: question.explanation_vi ?? undefined,
    };
  }
  return {
    prompt: question.question_text,
    answer: question.correct_answer,
    explanation: question.explanation_vi ?? undefined,
  };
}

export default function N5SummaryPracticePage() {
  const { words, examples, gradeFlashcard } = useVocabulary();
  const [userId, setUserId] = useState<string | null>(null);
  const [plans, setPlans] = useState<StudyPlanRow[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState("");
  const [days, setDays] = useState<StudyDayRow[]>([]);
  const [scope, setScope] = useState<SummaryScope>("day");
  const [dayNumber, setDayNumber] = useState(1);
  const [lessonNo, setLessonNo] = useState(1);
  const [tenGroup, setTenGroup] = useState(0);
  const [questionCount, setQuestionCount] = useState(15);
  const [quiz, setQuiz] = useState<QuizItem[] | null>(null);
  const [result, setResult] = useState<{ correct: number; total: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const n5Words = useMemo(
    () => words.filter((word) => word.jlpt === "N5").sort((a, b) => (a.lessonNo ?? 999) - (b.lessonNo ?? 999) || a.word.localeCompare(b.word, "ja")),
    [words],
  );
  const lessons = useMemo(
    () => Array.from(new Set(n5Words.map((word) => word.lessonNo).filter((value): value is number => typeof value === "number"))).sort((a, b) => a - b),
    [n5Words],
  );
  const tenGroups = Math.ceil(n5Words.length / 10);

  useEffect(() => {
    let cancelled = false;
    async function loadUserAndPlans() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (cancelled) return;
      const id = user?.id ?? null;
      setUserId(id);
      if (!id) return;
      const active = (await listActiveStudyPlans(supabase, id)).filter((plan) => plan.jlpt_level === "N5");
      if (cancelled) return;
      setPlans(active);
      if (active.length > 0) setSelectedPlanId(active[0].id);
    }
    void loadUserAndPlans();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!selectedPlanId) return;
    let cancelled = false;
    void getStudyPlanDays(createClient(), selectedPlanId).then((rows) => {
      if (!cancelled) {
        setDays(rows);
        setDayNumber(rows[0]?.day_number ?? 1);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [selectedPlanId]);

  function vocabQuizItems(vocabIds: string[], limit: number): QuizItem[] {
    const pools = vocabIds
      .map((id) => {
        const word = n5Words.find((candidate) => candidate.id === id);
        if (!word) return [];
        return buildVocabContextExercises(getExamplesForWord(examples, id), 3).map((item) => ({
          vocabId: id,
          prompt: item.prompt,
          answer: item.answer,
          explanation: item.explanation,
        } satisfies QuizItem));
      })
      .filter((pool) => pool.length > 0);

    const resultItems: QuizItem[] = [];
    for (let round = 0; round < 3 && resultItems.length < limit; round += 1) {
      for (const pool of pools) {
        if (pool[round]) resultItems.push(pool[round]);
        if (resultItems.length >= limit) break;
      }
    }
    return resultItems;
  }

  async function generateDay(day: StudyDayRow): Promise<QuizItem[]> {
    const supabase = createClient();
    const vocabItems = vocabQuizItems(day.word_ids, Math.max(8, questionCount - 8));

    const grammarRows = await getQuestionsForGrammarIds(supabase, day.grammar_ids);
    const grammarItems = grammarRows
      .map(grammarQuestionToQuiz)
      .filter((item): item is QuizItem => item !== null)
      .slice(0, 5);

    const kanjiRows = await getKanjiByIds(supabase, day.kanji_ids);
    const kanjiPools = await Promise.all(
      kanjiRows.slice(0, 6).map(async (kanji) => {
        const items = await getKanjiContextExercises(supabase, kanji.id, kanji.kanji_character, 1);
        return items.map((item) => ({ prompt: item.prompt, answer: item.answer, explanation: item.explanation } satisfies QuizItem));
      }),
    );

    return shuffle([...vocabItems, ...grammarItems, ...kanjiPools.flat()]).slice(0, questionCount);
  }

  async function generate() {
    setLoading(true);
    setError("");
    setQuiz(null);
    setResult(null);
    try {
      let items: QuizItem[] = [];
      if (scope === "day") {
        const day = days.find((row) => row.day_number === dayNumber);
        if (!day) throw new Error("Chưa có dữ liệu cho ngày đã chọn.");
        items = await generateDay(day);
      } else if (scope === "lesson") {
        const ids = n5Words.filter((word) => word.lessonNo === lessonNo).map((word) => word.id);
        items = shuffle(vocabQuizItems(ids, questionCount));
      } else {
        const ids = n5Words.slice(tenGroup * 10, tenGroup * 10 + 10).map((word) => word.id);
        items = shuffle(vocabQuizItems(ids, questionCount));
      }

      const deduped = Array.from(new Map(items.map((item) => [`${item.prompt}::${item.answer ?? item.correctIndex ?? ""}`, item])).values());
      if (deduped.length === 0) throw new Error("Phạm vi này chưa có đủ câu ngữ cảnh đã kiểm tra để tổng kết.");
      setQuiz(deduped.slice(0, questionCount));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Không tạo được buổi tổng kết.");
    } finally {
      setLoading(false);
    }
  }

  async function finish(correct: number) {
    if (!quiz) return;
    setResult({ correct, total: quiz.length });
    if (userId) {
      await savePracticeAttempt(createClient(), userId, "skill_mix", "N5", [
        { kind: `n5_summary_${scope}`, title: scope === "day" ? `Ngày ${dayNumber}` : scope === "lesson" ? `Bài ${lessonNo}` : `Nhóm từ ${tenGroup * 10 + 1}-${Math.min(tenGroup * 10 + 10, n5Words.length)}`, correct, total: quiz.length },
      ]);
    }
  }

  if (quiz && !result) {
    return (
      <div className="flex flex-col gap-4">
        <button type="button" onClick={() => setQuiz(null)} className="self-start text-xs font-semibold text-accent">← Chọn lại phạm vi</button>
        <QuizRunner
          items={quiz}
          onAnswer={(item, correct) => {
            if (item.vocabId) gradeFlashcard(item.vocabId, correct ? "da_nho" : "chua_nho");
          }}
          onFinish={(correct) => void finish(correct)}
        />
      </div>
    );
  }

  if (result) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <p className="text-4xl">✅</p>
        <h1 className="text-lg font-bold">Hoàn thành tổng kết N5</h1>
        <p className="text-sm">Đúng {result.correct}/{result.total} câu.</p>
        <button type="button" onClick={() => { setQuiz(null); setResult(null); }} className="w-full rounded-xl border border-accent px-4 py-3 text-sm font-semibold text-accent">Chọn phần khác</button>
        <Link href="/practice" className="text-sm font-medium text-muted">Về Luyện tập</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Link href="/practice" className="text-xs font-semibold text-accent">← Luyện tập</Link>
        <h1 className="mt-2 text-xl font-bold">Tổng kết N5</h1>
        <p className="mt-1 text-sm leading-relaxed text-muted">Ôn lại đúng phần đã học. Không dùng câu “nghĩa là gì / đọc là gì”; Day có thể trộn từ vựng, Kanji và ngữ pháp.</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {([
          ["day", "Theo ngày"],
          ["lesson", "Theo bài"],
          ["ten", "10 từ"],
        ] as const).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setScope(value)}
            className={`rounded-xl border px-2 py-2.5 text-sm font-semibold ${scope === value ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {scope === "day" && (
        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4">
          {plans.length === 0 ? (
            <p className="text-sm text-muted">Chưa có lộ trình N5 đang hoạt động. Khi tạo lộ trình, Ngày 1, Ngày 2… sẽ lấy đúng các mục của ngày đó.</p>
          ) : (
            <>
              {plans.length > 1 && (
                <label className="text-xs font-semibold text-muted">Lộ trình
                  <select value={selectedPlanId} onChange={(event) => setSelectedPlanId(event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground">
                    {plans.map((plan) => <option key={plan.id} value={plan.id}>{plan.name || `N5 · ${plan.duration_months} tháng`}</option>)}
                  </select>
                </label>
              )}
              <label className="text-xs font-semibold text-muted">Ngày muốn tổng kết
                <select value={dayNumber} onChange={(event) => setDayNumber(Number(event.target.value))} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground">
                  {days.map((day) => <option key={day.id} value={day.day_number}>Ngày {day.day_number}{day.completed_at ? " · đã học" : ""}</option>)}
                </select>
              </label>
            </>
          )}
        </div>
      )}

      {scope === "lesson" && (
        <label className="rounded-2xl border border-border bg-surface p-4 text-xs font-semibold text-muted">Bài từ vựng N5
          <select value={lessonNo} onChange={(event) => setLessonNo(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground">
            {lessons.map((lesson) => <option key={lesson} value={lesson}>Bài {lesson} · {n5Words.filter((word) => word.lessonNo === lesson).length} từ</option>)}
          </select>
        </label>
      )}

      {scope === "ten" && (
        <label className="rounded-2xl border border-border bg-surface p-4 text-xs font-semibold text-muted">Nhóm 10 từ
          <select value={tenGroup} onChange={(event) => setTenGroup(Number(event.target.value))} className="mt-2 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-foreground">
            {Array.from({ length: tenGroups }, (_, index) => {
              const start = index * 10 + 1;
              const end = Math.min(index * 10 + 10, n5Words.length);
              return <option key={index} value={index}>Từ {start}–{end}</option>;
            })}
          </select>
        </label>
      )}

      <div>
        <p className="mb-2 text-sm font-semibold">Số câu</p>
        <div className="grid grid-cols-3 gap-2">
          {[10, 15, 20].map((count) => (
            <button key={count} type="button" onClick={() => setQuestionCount(count)} className={`rounded-xl border py-2.5 text-sm font-semibold ${questionCount === count ? "border-accent bg-accent-soft text-accent" : "border-border bg-surface"}`}>{count} câu</button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-dashed border-border p-3 text-xs leading-relaxed text-muted">
        <strong className="text-foreground">Theo ngày:</strong> lấy đúng word_ids / kanji_ids / grammar_ids của ngày trong lộ trình. <strong className="text-foreground">Theo bài và 10 từ:</strong> tổng kết từ vựng theo thứ tự học, ưu tiên ba ngữ cảnh đã kiểm định của mỗi từ.
      </div>

      <button type="button" onClick={() => void generate()} disabled={loading || (scope === "day" && days.length === 0)} className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50">
        {loading ? "Đang ghép bài tổng kết..." : "Bắt đầu tổng kết"}
      </button>
      {error && <p className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
    </div>
  );
}

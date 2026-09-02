"use client";

import { useEffect, useState } from "react";

import { QuizRunner } from "@/components/quiz-runner";
import { SegmentedTabs } from "@/components/segmented-tabs";
import { getCached, setCached } from "@/lib/data/client-cache";
import { createCustomTest, deleteCustomTest, listCustomTests, type CustomTestQuestion, type CustomTestRow } from "@/lib/data/custom-test-service";
import { generatePracticeTest, type GeneratedSection, type GeneratedTest } from "@/lib/data/jlpt-practice-generator";
import { savePracticeAttempt, type SectionResult } from "@/lib/data/practice-attempt-service";
import { listActiveStudyPlans } from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { JLPT_BLUEPRINTS } from "@/lib/jlpt-blueprint";
import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";

type Tab = "auto" | "custom";

const PRACTICE_USER_CACHE_KEY = "practice-user-id";
const CUSTOM_TESTS_CACHE_PREFIX = "practice-custom-tests-";

export default function PracticePage() {
  const [tab, setTab] = useState<Tab>("auto");
  const [userId, setUserId] = useState<string | null>(getCached<string | null>(PRACTICE_USER_CACHE_KEY) ?? null);

  useEffect(() => {
    let cancelled = false;
    async function loadUser() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!cancelled) {
        setUserId(user?.id ?? null);
        setCached<string | null>(PRACTICE_USER_CACHE_KEY, user?.id ?? null);
      }
    }
    void loadUser();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold">Luyện tập</h1>
        <p className="mt-1 text-sm text-muted">Luyện đề theo cấu trúc JLPT, hoặc làm đề bạn tự đưa vào.</p>
      </div>

      <SegmentedTabs
        value={tab}
        onChange={setTab}
        options={[
          { value: "auto", label: "Luyện đề tự động" },
          { value: "custom", label: "Đề của tôi" },
        ]}
      />

      {tab === "auto" ? <AutoPracticeTab userId={userId} /> : <CustomTestsTab userId={userId} />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4.1 Luyện đề tự động theo cấu trúc JLPT
// ---------------------------------------------------------------------------

function AutoPracticeTab({ userId }: { userId: string | null }) {
  const { words, examples } = useVocabulary();
  const [level, setLevel] = useState<JlptLevel>("N3");
  const [levelAutoPicked, setLevelAutoPicked] = useState(false);
  const [test, setTest] = useState<GeneratedTest | null>(null);
  const [runIndex, setRunIndex] = useState(0);
  const [results, setResults] = useState<SectionResult[]>([]);
  const [summary, setSummary] = useState<SectionResult[] | null>(null);

  // Mặc định chọn sẵn cấp độ của lộ trình đang học (nếu có) để luyện tập
  // "khớp" với lộ trình thay vì luôn phải tự chọn lại N3 — vẫn cho đổi cấp
  // độ tự do vì "Luyện đề tự động" độc lập với lộ trình, không bị khoá cứng.
  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    async function loadDefaultLevel() {
      const supabase = createClient();
      const plans = await listActiveStudyPlans(supabase, userId!);
      if (!cancelled && plans.length > 0) {
        setLevel(plans[0].jlpt_level);
        setLevelAutoPicked(true);
      }
    }
    void loadDefaultLevel();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const blueprint = JLPT_BLUEPRINTS[level];
  const availableSections = test?.sections.filter((s) => s.available) ?? [];
  const currentSection: GeneratedSection | undefined = availableSections[runIndex];

  function handleGenerate() {
    const generated = generatePracticeTest(blueprint, words, examples);
    setTest(generated);
    setRunIndex(0);
    setResults([]);
    setSummary(null);
  }

  async function handleSectionFinish(correctCount: number) {
    const section = currentSection!;
    const nextResults = [
      ...results,
      {
        kind: section.kind,
        title: section.title,
        correct: correctCount,
        total: section.questions.length,
      },
    ];
    if (runIndex + 1 >= availableSections.length) {
      setResults(nextResults);
      setSummary(nextResults);
      if (userId) {
        const supabase = createClient();
        await savePracticeAttempt(supabase, userId, "auto_jlpt", level, nextResults);
      }
      return;
    }
    setResults(nextResults);
    setRunIndex((i) => i + 1);
  }

  if (summary) {
    const correct = summary.reduce((sum, s) => sum + s.correct, 0);
    const total = summary.reduce((sum, s) => sum + s.total, 0);
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <p className="text-4xl">✅</p>
        <p className="text-sm">
          Hoàn thành đề {level}! Đúng {correct}/{total} câu.
        </p>
        <div className="flex w-full flex-col gap-1 text-left text-xs text-muted">
          {summary.map((s) => (
            <p key={s.kind}>
              {s.title}: {s.correct}/{s.total}
            </p>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setTest(null);
            setSummary(null);
          }}
          className="text-sm font-medium text-accent"
        >
          ← Làm đề khác
        </button>
      </div>
    );
  }

  if (currentSection) {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold text-foreground">{currentSection.title}</p>
        <QuizRunner key={currentSection.kind} items={currentSection.questions} onFinish={(correct) => void handleSectionFinish(correct)} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Chọn cấp độ</h2>
        <div className="grid grid-cols-5 gap-2">
          {JLPT_LEVELS.map((lv) => (
            <button
              key={lv}
              type="button"
              onClick={() => {
                setLevel(lv);
                setLevelAutoPicked(false);
              }}
              className={`rounded-xl border px-2 py-2 text-sm font-semibold transition ${
                level === lv ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-foreground"
              }`}
            >
              {lv}
            </button>
          ))}
        </div>
        {levelAutoPicked && <p className="mt-2 text-xs text-accent">Đã chọn sẵn theo cấp độ lộ trình bạn đang học.</p>}
        {!blueprint.verified && (
          <p className="mt-2 text-xs text-muted">
            Cấu trúc đề {level} là mô phỏng gần đúng theo cấu trúc JLPT công khai (chỉ N2 lấy đúng từ đề thật) — có thể lệch vài câu so với đề thi thật.
          </p>
        )}
      </div>

      <div className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">
        <p className="mb-1 font-semibold text-foreground">
          Phần không nghe {level} ({blueprint.minutes} phút):
        </p>
        {blueprint.sections.map((s) => (
          <p key={s.title}>
            {s.title}: {s.questionCount} câu
          </p>
        ))}
      </div>

      <button
        type="button"
        onClick={handleGenerate}
        className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition active:scale-[0.98]"
      >
        Tạo đề luyện tập
      </button>

      {test && availableSections.length === 0 && (
        <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted">
          Chưa đủ nội dung đã kiểm tra ở cấp {level} để tự sinh câu hỏi có căn cứ.
        </p>
      )}
      {test && availableSections.length > 0 && (
        <p className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">
          {availableSections.length}/{test.sections.length} phần có đủ nội dung để làm ngay ({availableSections.reduce((sum, s) => sum + s.questions.length, 0)}{" "}
          câu) — các phần ngữ pháp/đọc hiểu còn thiếu sẽ được bổ sung sau khi nội dung được kiểm tra.
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4.2 Đề của tôi — độc lập với lộ trình học
// ---------------------------------------------------------------------------

function emptyQuestion(): CustomTestQuestion {
  return { prompt: "", options: ["", "", "", ""], correctIndex: 0 };
}

function CustomTestsTab({ userId }: { userId: string | null }) {
  const [tests, setTests] = useState<CustomTestRow[]>(userId ? (getCached<CustomTestRow[]>(CUSTOM_TESTS_CACHE_PREFIX + userId) ?? []) : []);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState<JlptLevel | "">("");
  const [questions, setQuestions] = useState<CustomTestQuestion[]>([emptyQuestion()]);
  const [running, setRunning] = useState<CustomTestRow | null>(null);
  const [summary, setSummary] = useState<{
    correct: number;
    total: number;
  } | null>(null);

  useEffect(() => {
    if (!userId) return;
    const supabase = createClient();
    void listCustomTests(supabase, userId).then((rows) => {
      setTests(rows);
      setCached<CustomTestRow[]>(CUSTOM_TESTS_CACHE_PREFIX + userId, rows);
    });
  }, [userId]);

  function updateQuestion(index: number, patch: Partial<CustomTestQuestion>) {
    setQuestions((prev) => prev.map((q, i) => (i === index ? { ...q, ...patch } : q)));
  }

  function updateOption(qIndex: number, oIndex: number, value: string) {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex
          ? {
              ...q,
              options: q.options.map((o, j) => (j === oIndex ? value : o)),
            }
          : q,
      ),
    );
  }

  async function handleSave() {
    if (!userId || !title.trim()) return;
    const validQuestions = questions.filter((q) => q.prompt.trim() && q.options.every((o) => o.trim()));
    if (validQuestions.length === 0) return;
    const supabase = createClient();
    const created = await createCustomTest(supabase, userId, title.trim(), level || null, validQuestions);
    setTests((prev) => {
      const next = [created, ...prev];
      setCached<CustomTestRow[]>(CUSTOM_TESTS_CACHE_PREFIX + userId, next);
      return next;
    });
    setCreating(false);
    setTitle("");
    setLevel("");
    setQuestions([emptyQuestion()]);
  }

  async function handleDelete(id: string) {
    const supabase = createClient();
    await deleteCustomTest(supabase, id);
    setTests((prev) => {
      const next = prev.filter((t) => t.id !== id);
      if (userId) setCached<CustomTestRow[]>(CUSTOM_TESTS_CACHE_PREFIX + userId, next);
      return next;
    });
  }

  async function handleFinishRun(correctCount: number) {
    const total = running!.content.length;
    setSummary({ correct: correctCount, total });
    if (userId) {
      const supabase = createClient();
      await savePracticeAttempt(supabase, userId, "custom", running!.jlpt_level, [
        {
          kind: "custom",
          title: running!.title,
          correct: correctCount,
          total,
        },
      ]);
    }
  }

  if (running) {
    if (summary) {
      return (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
          <p className="text-4xl">✅</p>
          <p className="text-sm">
            Hoàn thành &quot;{running.title}&quot;! Đúng {summary.correct}/{summary.total} câu.
          </p>
          <button
            type="button"
            onClick={() => {
              setRunning(null);
              setSummary(null);
            }}
            className="text-sm font-medium text-accent"
          >
            ← Quay lại danh sách đề
          </button>
        </div>
      );
    }
    return <QuizRunner items={running.content} onFinish={(c) => void handleFinishRun(c)} />;
  }

  return (
    <div className="flex flex-col gap-4">
      {!creating ? (
        <button type="button" onClick={() => setCreating(true)} className="rounded-xl border border-accent px-4 py-3 text-sm font-semibold text-accent">
          + Tạo đề mới
        </button>
      ) : (
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4">
          <input
            type="text"
            placeholder="Tên đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <div className="flex flex-wrap gap-2">
            {JLPT_LEVELS.map((lv) => (
              <button
                key={lv}
                type="button"
                onClick={() => setLevel(lv === level ? "" : lv)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                  level === lv ? "border-accent bg-accent text-accent-foreground" : "border-border text-muted"
                }`}
              >
                {lv}
              </button>
            ))}
          </div>

          {questions.map((q, qIndex) => (
            <div key={qIndex} className="flex flex-col gap-2 rounded-lg border border-dashed border-border p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted">Câu {qIndex + 1}</span>
                {questions.length > 1 && (
                  <button type="button" onClick={() => setQuestions((prev) => prev.filter((_, i) => i !== qIndex))} className="text-xs text-rose-600">
                    Xoá
                  </button>
                )}
              </div>
              <input
                type="text"
                placeholder="Câu hỏi"
                value={q.prompt}
                onChange={(e) => updateQuestion(qIndex, { prompt: e.target.value })}
                className="rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-accent"
              />
              {q.options.map((option, oIndex) => (
                <label key={oIndex} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`correct-${qIndex}`}
                    checked={q.correctIndex === oIndex}
                    onChange={() => updateQuestion(qIndex, { correctIndex: oIndex })}
                  />
                  <input
                    type="text"
                    placeholder={`Đáp án ${oIndex + 1}`}
                    value={option}
                    onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                    className="flex-1 rounded-lg border border-border px-2 py-1.5 text-sm outline-none focus:border-accent"
                  />
                </label>
              ))}
            </div>
          ))}

          <button
            type="button"
            onClick={() => setQuestions((prev) => [...prev, emptyQuestion()])}
            className="rounded-lg border border-border py-2 text-xs text-muted"
          >
            + Thêm câu hỏi
          </button>

          <div className="flex gap-2">
            <button type="button" onClick={() => setCreating(false)} className="flex-1 rounded-lg border border-border py-2 text-sm text-muted">
              Huỷ
            </button>
            <button type="button" onClick={() => void handleSave()} className="flex-1 rounded-lg bg-accent py-2 text-sm font-semibold text-accent-foreground">
              Lưu đề
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {tests.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted">Bạn chưa có đề nào. Tạo đề mới để bắt đầu luyện tập.</p>
        ) : (
          tests.map((t) => (
            <div key={t.id} className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
              <button type="button" onClick={() => setRunning(t)} className="flex-1 text-left">
                <p className="text-sm font-semibold">{t.title}</p>
                <p className="text-xs text-muted">
                  {t.jlpt_level ?? "Không phân cấp"} · {t.content.length} câu
                </p>
              </button>
              <button type="button" onClick={() => void handleDelete(t.id)} className="text-xs text-rose-600">
                Xoá
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { createStudyPlan, type StudyScope } from "@/lib/data/study-plan-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";

/** Cấp độ nào có sẵn nội dung thật trong app — các cấp khác hiển thị "sắp có". */
const AVAILABLE_LEVELS: JlptLevel[] = ["N3"];
const DURATIONS = [1, 2, 3] as const;

const SCOPE_LABELS: Record<StudyScope, string> = {
  vocab: "Từ vựng",
  kanji: "Kanji",
  grammar: "Ngữ pháp",
};
/** Chỉ Từ vựng có nội dung thật — Kanji/Ngữ pháp chưa biên soạn nên khoá. */
const AVAILABLE_SCOPES: StudyScope[] = ["vocab"];

export default function SettingsPage() {
  const router = useRouter();
  const { words } = useVocabulary();
  const [level, setLevel] = useState<JlptLevel>("N3");
  const [scope, setScope] = useState<StudyScope[]>(["vocab"]);
  const [duration, setDuration] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const wordIdsForLevel = useMemo(
    () => words.filter((w) => w.jlpt === level && !w.isHidden).map((w) => w.id),
    [words, level],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setError("Bạn cần đăng nhập lại.");
        return;
      }
      await createStudyPlan(supabase, user.id, level, scope, duration, wordIdsForLevel);
      router.push("/");
      router.refresh();
    } catch {
      setError("Không tạo được lộ trình, thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  }

  function toggleScope(s: StudyScope) {
    if (!AVAILABLE_SCOPES.includes(s)) return;
    setScope((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-xl font-bold">Cài đặt lộ trình</h1>
        <p className="mt-1 text-sm text-muted">
          Chọn cấp độ, phạm vi và thời gian — hệ thống tự chia đều nội dung theo từng ngày.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <section>
          <h2 className="mb-2 text-sm font-semibold text-foreground">1. Cấp độ</h2>
          <div className="grid grid-cols-5 gap-2">
            {JLPT_LEVELS.map((lv) => {
              const available = AVAILABLE_LEVELS.includes(lv);
              return (
                <button
                  key={lv}
                  type="button"
                  disabled={!available}
                  onClick={() => setLevel(lv)}
                  className={`flex flex-col items-center gap-0.5 rounded-xl border px-2 py-2 text-sm font-semibold transition ${
                    level === lv
                      ? "border-accent bg-accent text-accent-foreground"
                      : available
                        ? "border-border bg-surface text-foreground"
                        : "border-border bg-slate-50 text-muted opacity-60"
                  }`}
                >
                  {lv}
                  {!available && <span className="text-[10px] font-normal">sắp có</span>}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold text-foreground">2. Phạm vi học</h2>
          <div className="flex flex-col gap-2">
            {(Object.keys(SCOPE_LABELS) as StudyScope[]).map((s) => {
              const available = AVAILABLE_SCOPES.includes(s);
              return (
                <label
                  key={s}
                  className={`flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm ${
                    available ? "bg-surface" : "bg-slate-50 text-muted opacity-60"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={scope.includes(s)}
                    disabled={!available}
                    onChange={() => toggleScope(s)}
                  />
                  {SCOPE_LABELS[s]}
                  {!available && <span className="ml-auto text-xs">sắp có</span>}
                </label>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold text-foreground">3. Thời gian hoàn thành</h2>
          <div className="grid grid-cols-3 gap-2">
            {DURATIONS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setDuration(m)}
                className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                  duration === m ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-foreground"
                }`}
              >
                {m} tháng
              </button>
            ))}
          </div>
        </section>

        <p className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">
          {level} · {SCOPE_LABELS.vocab}: {wordIdsForLevel.length} từ, chia đều cho {duration * 30} ngày (~
          {Math.max(1, Math.round(wordIdsForLevel.length / (duration * 30)))} từ/ngày).
        </p>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting || scope.length === 0 || wordIdsForLevel.length === 0}
          className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition disabled:opacity-60"
        >
          {submitting ? "Đang tạo lộ trình..." : "Tạo lộ trình học"}
        </button>
      </form>
    </div>
  );
}

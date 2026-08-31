"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { createStudyPlan, getActiveStudyPlan, type StudyPlanItems, type StudyScope } from "@/lib/data/study-plan-service";
import { getKanjiLevelCounts, listKanjiByLevel } from "@/lib/data/kanji-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { distributeEvenly } from "@/lib/study-plan";
import { JLPT_LEVELS, type JlptLevel } from "@/lib/types";

const DURATIONS = [1, 2, 3] as const;

type ScopeChoice = "vocab" | "kanji" | "grammar" | "all";

const SCOPE_LABELS: Record<ScopeChoice, string> = {
  vocab: "Từ vựng",
  kanji: "Kanji",
  grammar: "Ngữ pháp",
  all: "Tất cả",
};

function scopeChoiceToArray(choice: ScopeChoice): StudyScope[] {
  if (choice === "all") return ["vocab", "kanji", "grammar"];
  return [choice];
}

type Step = 1 | 2 | 3 | 4;
const STEP_TITLES: Record<Step, string> = {
  1: "1. Cấp độ",
  2: "2. Phạm vi học",
  3: "3. Thời gian hoàn thành",
  4: "4. Xem trước & xác nhận",
};

export default function SettingsPage() {
  const router = useRouter();
  const { words } = useVocabulary();
  const [step, setStep] = useState<Step>(1);
  const [level, setLevel] = useState<JlptLevel>("N3");
  const [scopeChoice, setScopeChoice] = useState<ScopeChoice>("vocab");
  const [duration, setDuration] = useState<1 | 2 | 3>(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasActivePlan, setHasActivePlan] = useState(false);
  const [overwriteConfirmed, setOverwriteConfirmed] = useState(false);
  const [kanjiCountsByLevel, setKanjiCountsByLevel] = useState<Record<JlptLevel, number> | null>(null);
  const [kanjiIdsForLevel, setKanjiIdsForLevel] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function checkActivePlan() {
      const supabase = createClient();
      const [{ data: { user } }, counts] = await Promise.all([
        supabase.auth.getUser(),
        getKanjiLevelCounts(supabase),
      ]);
      if (cancelled) return;
      setKanjiCountsByLevel(counts);
      if (!user) return;
      const active = await getActiveStudyPlan(supabase, user.id);
      if (!cancelled) setHasActivePlan(active !== null);
    }
    void checkActivePlan();
    return () => {
      cancelled = true;
    };
  }, []);

  // Kanji id cần fetch riêng theo level đang chọn (nội dung Kanji nằm ở Supabase, không có sẵn trong context như từ vựng).
  useEffect(() => {
    let cancelled = false;
    async function loadKanjiIds() {
      const supabase = createClient();
      const rows = await listKanjiByLevel(supabase, level);
      if (!cancelled) setKanjiIdsForLevel(rows.map((r) => r.id));
    }
    void loadKanjiIds();
    return () => {
      cancelled = true;
    };
  }, [level]);

  /** Cấp độ nào có sẵn nội dung thật (từ vựng HOẶC kanji) — cấp khác hiển thị "sắp có". */
  const vocabCountByLevel = useMemo(() => {
    const map = {} as Record<JlptLevel, number>;
    for (const lv of JLPT_LEVELS) map[lv] = words.filter((w) => w.jlpt === lv && !w.isHidden).length;
    return map;
  }, [words]);

  const availableLevels = useMemo(
    () => JLPT_LEVELS.filter((lv) => vocabCountByLevel[lv] > 0 || (kanjiCountsByLevel?.[lv] ?? 0) > 0),
    [vocabCountByLevel, kanjiCountsByLevel],
  );

  /** Phạm vi nào dùng được cho 1 level — chỉ cần SỐ LƯỢNG (đã có sẵn cho mọi level từ lúc mount), không cần fetch đủ id. */
  function scopeAvailabilityFor(lv: JlptLevel): Record<ScopeChoice, boolean> {
    const vocab = vocabCountByLevel[lv] > 0;
    const kanji = (kanjiCountsByLevel?.[lv] ?? 0) > 0;
    const grammar = false; // Ngữ pháp chưa có nội dung ở bất kỳ cấp nào trong app.
    return { vocab, kanji, grammar, all: vocab || kanji || grammar };
  }

  const scopeAvailability = scopeAvailabilityFor(level);

  /** Chọn level mới, đồng thời tự chuyển phạm vi đang chọn nếu nó không còn khả dụng ở level mới. */
  function selectLevel(newLevel: JlptLevel) {
    setLevel(newLevel);
    const availability = scopeAvailabilityFor(newLevel);
    if (!availability[scopeChoice]) {
      const fallback = (["vocab", "kanji", "grammar", "all"] as ScopeChoice[]).find((s) => availability[s]);
      if (fallback) setScopeChoice(fallback);
    }
  }

  const wordIdsForLevel = useMemo(
    () => words.filter((w) => w.jlpt === level && !w.isHidden).map((w) => w.id),
    [words, level],
  );
  // Ngữ pháp chưa có nội dung ở bất kỳ cấp nào trong app — không giả lập số liệu.
  const grammarIdsForLevel: string[] = [];

  const totalDays = duration * 30;
  const includesVocab = scopeChoice === "vocab" || scopeChoice === "all";
  const includesKanji = scopeChoice === "kanji" || scopeChoice === "all";
  const includesGrammar = scopeChoice === "grammar" || scopeChoice === "all";

  const vocabCount = includesVocab ? wordIdsForLevel.length : 0;
  const kanjiCount = includesKanji ? kanjiIdsForLevel.length : 0;
  const grammarCount = includesGrammar ? grammarIdsForLevel.length : 0;

  function previewLine(label: string, total: number, active: boolean) {
    if (!active) return null;
    if (total === 0) return `${label}: chưa có nội dung cho ${level}.`;
    const counts = distributeEvenly(total, totalDays);
    const base = counts[0];
    const lastDay = counts[counts.length - 1];
    return lastDay === base
      ? `${label}: ${total} mục → mỗi ngày ${base} mục.`
      : `${label}: ${total} mục → mỗi ngày ${base} mục, riêng ngày cuối (ngày ${totalDays}) ${lastDay} mục (dồn số dư).`;
  }

  const previewLines = [
    previewLine(SCOPE_LABELS.vocab, vocabCount, includesVocab),
    previewLine(SCOPE_LABELS.kanji, kanjiCount, includesKanji),
    previewLine(SCOPE_LABELS.grammar, grammarCount, includesGrammar),
  ].filter((l): l is string => l !== null);

  const canCreate = vocabCount + kanjiCount + grammarCount > 0;

  async function handleConfirmCreate() {
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
      const items: StudyPlanItems = {
        vocab: includesVocab ? wordIdsForLevel : [],
        kanji: includesKanji ? kanjiIdsForLevel : [],
        grammar: includesGrammar ? grammarIdsForLevel : [],
      };
      await createStudyPlan(supabase, user.id, level, scopeChoiceToArray(scopeChoice), duration, items);
      router.push("/");
      router.refresh();
    } catch {
      setError("Không tạo được lộ trình, thử lại sau.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-xl font-bold">Cài đặt lộ trình</h1>
        <p className="mt-1 text-sm text-muted">
          Chọn cấp độ, phạm vi và thời gian — hệ thống tự chia đều nội dung theo từng ngày.
        </p>
      </section>

      <div className="flex gap-1 text-xs font-semibold text-muted">
        {([1, 2, 3, 4] as Step[]).map((s) => (
          <span
            key={s}
            className={`rounded-full px-2 py-1 ${s === step ? "bg-accent text-accent-foreground" : "bg-slate-100"}`}
          >
            {s}
          </span>
        ))}
      </div>

      {step === 1 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold text-foreground">{STEP_TITLES[1]}</h2>
          <div className="grid grid-cols-5 gap-2">
            {JLPT_LEVELS.map((lv) => {
              const available = availableLevels.includes(lv);
              return (
                <button
                  key={lv}
                  type="button"
                  disabled={!available}
                  onClick={() => selectLevel(lv)}
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
          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
          >
            Tiếp theo
          </button>
        </section>
      )}

      {step === 2 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold text-foreground">{STEP_TITLES[2]}</h2>
          <div className="flex flex-col gap-2">
            {(Object.keys(SCOPE_LABELS) as ScopeChoice[]).map((s) => {
              const available = scopeAvailability[s];
              return (
                <label
                  key={s}
                  className={`flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm ${
                    available ? "bg-surface" : "bg-slate-50 text-muted opacity-60"
                  }`}
                >
                  <input
                    type="radio"
                    name="scope"
                    checked={scopeChoice === s}
                    disabled={!available}
                    onChange={() => setScopeChoice(s)}
                  />
                  {SCOPE_LABELS[s]}
                  {!available && <span className="ml-auto text-xs">sắp có</span>}
                </label>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-muted">
            Chọn &quot;Tất cả&quot; để mỗi ngày học đồng thời mọi loại nội dung đang có ở cấp {level} theo đúng tỉ lệ (loại
            nào chưa có nội dung ở cấp này sẽ tự bỏ qua, không bắt buộc phải đủ cả 3 loại).
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
            >
              Quay lại
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              Tiếp theo
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section>
          <h2 className="mb-2 text-sm font-semibold text-foreground">{STEP_TITLES[3]}</h2>
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
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
            >
              Quay lại
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="flex-1 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              Xem trước
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-foreground">{STEP_TITLES[4]}</h2>
          <div className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">
            <p className="mb-1 font-semibold text-foreground">
              {level} · {SCOPE_LABELS[scopeChoice]} · {totalDays} ngày ({duration} tháng)
            </p>
            {previewLines.length > 0 ? (
              previewLines.map((line) => <p key={line}>{line}</p>)
            ) : (
              <p>Chưa có nội dung nào phù hợp lựa chọn hiện tại.</p>
            )}
          </div>

          {hasActivePlan && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900">
              <p className="font-semibold">Bạn đang có lộ trình đang chạy dở.</p>
              <p className="mt-1">Lộ trình cũ sẽ bị dừng lại, bạn có chắc muốn tạo lộ trình mới?</p>
              <label className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={overwriteConfirmed}
                  onChange={(e) => setOverwriteConfirmed(e.target.checked)}
                />
                Tôi hiểu, dừng lộ trình cũ và tạo lộ trình mới.
              </label>
            </div>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground"
            >
              Quay lại
            </button>
            <button
              type="button"
              onClick={handleConfirmCreate}
              disabled={submitting || !canCreate || (hasActivePlan && !overwriteConfirmed)}
              className="flex-1 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition disabled:opacity-60"
            >
              {submitting ? "Đang tạo lộ trình..." : "Xác nhận tạo lộ trình"}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

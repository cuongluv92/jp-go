"use client";

import { useMemo, useState } from "react";

import {
  availablePersonalExerciseModes,
  buildPersonalExercise,
  isPersonalExerciseAnswerCorrect,
  type PersonalExerciseMode,
} from "@/lib/personal-example-exercise";
import { gradePersonalExampleReview, type PersonalExampleRow } from "@/lib/data/personal-example-service";
import { createClient } from "@/lib/supabase/client";

const MODE_LABELS: Record<PersonalExerciseMode, string> = {
  cloze: "Điền từ",
  particle: "Chọn trợ từ",
  order: "Sắp xếp câu",
  jp_to_vi: "Nhật → Việt",
  vi_to_jp: "Việt → Nhật",
};

export function PersonalExampleExercise({
  example,
  userId,
  focusText,
  onGraded,
}: {
  example: PersonalExampleRow;
  userId: string;
  focusText: string;
  onGraded: (updated: PersonalExampleRow) => void;
}) {
  const modes = useMemo(
    () => availablePersonalExerciseModes(example.sentence_jp, example.sentence_vi, example.highlight_text || focusText),
    [example, focusText],
  );
  const [mode, setMode] = useState<PersonalExerciseMode>(modes[0]);
  const exercise = useMemo(
    () => buildPersonalExercise(mode, example.sentence_jp, example.sentence_vi, example.highlight_text || focusText),
    [example, focusText, mode],
  );
  const [answer, setAnswer] = useState("");
  const [chosenChunks, setChosenChunks] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | null>(null);
  const [saving, setSaving] = useState(false);

  function changeMode(nextMode: PersonalExerciseMode) {
    setMode(nextMode);
    setAnswer("");
    setChosenChunks([]);
    setResult(null);
  }

  async function grade(value = answer) {
    const correct = isPersonalExerciseAnswerCorrect(value, exercise);
    setResult(correct);
    setSaving(true);
    try {
      const updated = await gradePersonalExampleReview(createClient(), userId, example, correct);
      onGraded(updated);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-3 rounded-xl bg-slate-50 p-3">
      <div className="flex flex-wrap gap-1.5">
        {modes.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => changeMode(item)}
            className={`rounded-lg px-2 py-1 text-[11px] font-semibold ${mode === item ? "bg-accent text-accent-foreground" : "border border-border bg-surface"}`}
          >
            {MODE_LABELS[item]}
          </button>
        ))}
      </div>
      <p className="font-jp mt-3 text-sm font-medium">{exercise.prompt}</p>

      {mode === "particle" ? (
        <div className="mt-2 grid grid-cols-4 gap-2">
          {exercise.options?.map((option) => (
            <button key={option} type="button" disabled={result !== null} onClick={() => void grade(option)} className="rounded-lg border border-border bg-surface py-2 font-jp text-sm">
              {option}
            </button>
          ))}
        </div>
      ) : mode === "order" ? (
        <div className="mt-2">
          <div className="min-h-10 rounded-lg border border-dashed border-border bg-surface p-2 font-jp text-sm">
            {chosenChunks.join("") || "Chạm các mảnh theo đúng thứ tự"}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {exercise.chunks?.map((chunk, index) => {
              const used = chosenChunks.filter((item) => item === chunk).length;
              const occurrence = exercise.chunks!.slice(0, index + 1).filter((item) => item === chunk).length;
              return (
                <button
                  key={`${chunk}-${index}`}
                  type="button"
                  disabled={used >= occurrence || result !== null}
                  onClick={() => setChosenChunks((current) => [...current, chunk])}
                  className="rounded-lg border border-border bg-surface px-2 py-1.5 font-jp text-sm disabled:opacity-30"
                >
                  {chunk}
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex gap-2">
            <button type="button" onClick={() => setChosenChunks([])} className="rounded-lg border border-border px-3 py-1.5 text-xs">Làm lại</button>
            <button type="button" disabled={chosenChunks.length === 0 || result !== null} onClick={() => void grade(chosenChunks.join(""))} className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground disabled:opacity-40">Kiểm tra</button>
          </div>
        </div>
      ) : (
        <div className="mt-2 flex gap-2">
          <input value={answer} onChange={(event) => setAnswer(event.target.value)} disabled={result !== null} className="min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm" placeholder="Nhập câu trả lời" />
          <button type="button" disabled={!answer.trim() || result !== null} onClick={() => void grade()} className="rounded-lg bg-accent px-3 text-xs font-semibold text-accent-foreground disabled:opacity-40">Chấm</button>
        </div>
      )}

      {result !== null && (
        <div className={`mt-2 rounded-lg p-2 text-xs ${result ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {result ? "✓ Chính xác" : `✗ Đáp án: ${exercise.answer}`}
          {!result && <span className="ml-1">· Đã đưa vào lịch ôn ngày mai.</span>}
          <button type="button" disabled={saving} onClick={() => changeMode(mode)} className="ml-2 font-semibold underline">Làm lại</button>
        </div>
      )}
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";

import type { CuratedN5Exercise } from "@/lib/data/n5-curated-exercises";
import { normalizeJapaneseAnswer } from "@/lib/japanese-text";

function answerEquals(actual: string, expected: string): boolean {
  return normalizeJapaneseAnswer(actual) === normalizeJapaneseAnswer(expected);
}

function isAcceptedSingle(item: CuratedN5Exercise, value: string): boolean {
  const expected = typeof item.correct_answer === "string" ? item.correct_answer : item.correct_answer.join("／");
  if (answerEquals(value, expected)) return true;
  return (item.accepted_answers ?? []).some((answer) => answerEquals(value, answer));
}

export function CuratedExerciseRunner({
  items,
  onFinish,
}: {
  items: CuratedN5Exercise[];
  onFinish?: (correct: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [typed, setTyped] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const item = items[index];
  const expected = useMemo(() => (Array.isArray(item.correct_answer) ? item.correct_answer : [item.correct_answer]), [item]);
  const isMulti = expected.length > 1;
  const hasChoices = (item.choices?.length ?? 0) > 0;

  function currentIsCorrect(): boolean {
    if (isMulti) {
      const answers = hasChoices ? multiSelected : typed;
      return expected.every((answer, i) => answerEquals(answers[i] ?? "", answer));
    }
    return hasChoices ? answerEquals(selected ?? "", expected[0]) : isAcceptedSingle(item, typed[0] ?? "");
  }

  function check() {
    if (checked) return;
    const correct = currentIsCorrect();
    if (correct) setCorrectCount((count) => count + 1);
    setChecked(true);
  }

  function next() {
    if (index + 1 >= items.length) {
      onFinish?.(correctCount, items.length);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
    setMultiSelected([]);
    setTyped([]);
    setChecked(false);
  }

  if (!item) return null;

  const correctNow = checked && currentIsCorrect();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-xs text-muted">
        <span>Câu {index + 1}/{items.length}</span>
        <span className={`rounded-full px-2 py-0.5 font-semibold ${item.mode === "challenge" ? "bg-amber-100 text-amber-800" : "bg-accent-soft text-accent"}`}>
          {item.mode === "challenge" ? "Challenge" : `Mức ${item.difficulty}`}
        </span>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
        {item.instruction_ja && <p className="mb-1 text-xs font-medium text-muted">{item.instruction_ja}</p>}
        {item.instruction_vi && <p className="mb-2 text-xs leading-relaxed text-foreground">{item.instruction_vi}</p>}
        {item.stimulus_ja && <p className="font-jp whitespace-pre-line text-base font-semibold leading-relaxed">{item.stimulus_ja}</p>}
        {item.prompt_ja && <p className="font-jp mt-2 whitespace-pre-line text-sm leading-relaxed">{item.prompt_ja}</p>}
      </div>

      {hasChoices && !isMulti && (
        <div className="flex flex-col gap-2">
          {item.choices!.map((choice) => {
            const active = selected === choice;
            const right = answerEquals(choice, expected[0]);
            let style = "border-border bg-surface";
            if (checked && right) style = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (checked && active) style = "border-rose-400 bg-rose-50 text-rose-700";
            return (
              <button
                key={choice}
                type="button"
                disabled={checked}
                onClick={() => setSelected(choice)}
                className={`font-jp rounded-xl border px-4 py-3 text-left text-sm ${style}`}
              >
                {choice}
              </button>
            );
          })}
        </div>
      )}

      {hasChoices && isMulti && (
        <div className="grid gap-2">
          {expected.map((_, slot) => (
            <label key={slot} className="grid grid-cols-[3rem_1fr] items-center gap-2 text-sm">
              <span className="text-center font-semibold text-muted">{slot + 1}</span>
              <select
                value={multiSelected[slot] ?? ""}
                disabled={checked}
                onChange={(event) => setMultiSelected((current) => {
                  const next = [...current];
                  next[slot] = event.target.value;
                  return next;
                })}
                className="rounded-xl border border-border bg-surface px-3 py-2.5 font-jp outline-none focus:border-accent"
              >
                <option value="">Chọn đáp án</option>
                {item.choices!.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
              </select>
            </label>
          ))}
        </div>
      )}

      {!hasChoices && (
        <div className="grid gap-2">
          {expected.map((_, slot) => (
            <input
              key={slot}
              value={typed[slot] ?? ""}
              disabled={checked}
              onChange={(event) => setTyped((current) => {
                const next = [...current];
                next[slot] = event.target.value;
                return next;
              })}
              placeholder={isMulti ? `Đáp án ${slot + 1}` : "Nhập đáp án tiếng Nhật..."}
              className="rounded-xl border border-border bg-surface px-3 py-3 text-center font-jp text-lg outline-none focus:border-accent"
            />
          ))}
        </div>
      )}

      {checked && (
        <div className={`rounded-xl border p-3 text-sm ${correctNow ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-800"}`}>
          <p className="font-semibold">{correctNow ? "Đúng" : `Chưa đúng · Đáp án: ${expected.join(" ／ ")}`}</p>
          {item.explanation_vi && <p className="mt-1 text-xs leading-relaxed">{item.explanation_vi}</p>}
        </div>
      )}

      {!checked ? (
        <button
          type="button"
          onClick={check}
          disabled={hasChoices ? (isMulti ? multiSelected.filter(Boolean).length < expected.length : !selected) : typed.filter((value) => value?.trim()).length < expected.length}
          className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
        >
          Kiểm tra
        </button>
      ) : (
        <button type="button" onClick={next} className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
          {index + 1 >= items.length ? "Hoàn thành" : "Câu tiếp theo →"}
        </button>
      )}
    </div>
  );
}

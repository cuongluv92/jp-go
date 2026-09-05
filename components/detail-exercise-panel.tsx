"use client";

import { useState } from "react";

import { ContextExerciseRunner } from "@/components/context-exercise-runner";
import { CuratedExerciseRunner } from "@/components/curated-exercise-runner";
import type { ContextExerciseItem } from "@/lib/data/context-exercises";
import type { CuratedN5Exercise } from "@/lib/data/n5-curated-exercises";

type Stage = "intro" | "context" | "curated" | "done";

export function DetailExercisePanel({
  title = "Bài tập của mục này",
  description,
  contextItems,
  practiceItems = [],
  challengeItems = [],
}: {
  title?: string;
  description: string;
  contextItems: ContextExerciseItem[];
  practiceItems?: CuratedN5Exercise[];
  challengeItems?: CuratedN5Exercise[];
}) {
  const curated = [...practiceItems, ...challengeItems];
  const total = contextItems.length + curated.length;
  const [stage, setStage] = useState<Stage>("intro");
  const [contextCorrect, setContextCorrect] = useState(0);
  const [curatedCorrect, setCuratedCorrect] = useState(0);

  if (total === 0) return null;

  function restart() {
    setContextCorrect(0);
    setCuratedCorrect(0);
    setStage(contextItems.length > 0 ? "context" : "curated");
  }

  return (
    <section className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-bold text-foreground">{title}</h2>
          <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">{total} câu</span>
      </div>

      {stage === "intro" && (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="font-semibold text-foreground">Luyện dùng</p>
              <p className="mt-1 text-muted">{contextItems.length + practiceItems.length} câu ngữ cảnh</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
              <p className="font-semibold text-amber-900">Challenge</p>
              <p className="mt-1 text-amber-800">{challengeItems.length} câu phân biệt / suy luận</p>
            </div>
          </div>
          <button type="button" onClick={restart} className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
            Bắt đầu {total} câu
          </button>
        </div>
      )}

      {stage === "context" && (
        <ContextExerciseRunner
          key="context-run"
          items={contextItems}
          onFinish={(correct) => {
            setContextCorrect(correct);
            setStage(curated.length > 0 ? "curated" : "done");
          }}
        />
      )}

      {stage === "curated" && (
        <CuratedExerciseRunner
          key="curated-run"
          items={curated}
          onFinish={(correct) => {
            setCuratedCorrect(correct);
            setStage("done");
          }}
        />
      )}

      {stage === "done" && (
        <div className="flex flex-col items-center gap-3 py-3 text-center">
          <p className="text-3xl">✅</p>
          <p className="text-sm font-semibold">Hoàn thành · đúng {contextCorrect + curatedCorrect}/{total}</p>
          <p className="text-xs text-muted">Challenge được tính chung vào chính mục đang học, không tách thành chế độ riêng.</p>
          <button type="button" onClick={restart} className="w-full rounded-xl border border-accent px-4 py-2.5 text-sm font-semibold text-accent">
            Làm lại
          </button>
        </div>
      )}
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

import { JapaneseSentence } from "@/components/japanese-sentence";
import { PersonalExampleExercise } from "@/components/personal-example-exercise";
import type { PersonalExampleRow } from "@/lib/data/personal-example-service";

export function PersonalExampleReviewSection({
  initialExamples,
  userId,
}: {
  initialExamples: PersonalExampleRow[];
  userId: string;
}) {
  const [examples, setExamples] = useState(initialExamples);
  const [activeId, setActiveId] = useState<string | null>(null);
  if (examples.length === 0) return null;

  return (
    <section>
      <h2 className="mb-2 text-sm font-semibold text-foreground">Ví dụ cá nhân ({examples.length} câu đến hạn)</h2>
      <div className="flex flex-col gap-2">
        {examples.map((example) => (
          <article key={example.id} className="rounded-xl border border-border bg-surface p-3 shadow-sm">
            <JapaneseSentence text={example.sentence_jp} className="text-sm" />
            {example.sentence_vi && <p className="mt-1 text-xs text-muted">{example.sentence_vi}</p>}
            <div className="mt-2 flex items-center justify-between gap-2 text-xs">
              <Link href={`/${example.target_type === "vocab" ? "vocabulary" : "grammar"}/${example.target_id}`} className="text-muted">
                Mở nội dung gốc →
              </Link>
              <button type="button" onClick={() => setActiveId((current) => (current === example.id ? null : example.id))} className="font-semibold text-accent">
                {activeId === example.id ? "Đóng" : "Ôn câu này"}
              </button>
            </div>
            {activeId === example.id && (
              <PersonalExampleExercise
                example={example}
                userId={userId}
                focusText={example.highlight_text}
                onGraded={(updated) => {
                  setExamples((current) => current.filter((item) => item.id !== updated.id));
                  setActiveId(null);
                }}
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

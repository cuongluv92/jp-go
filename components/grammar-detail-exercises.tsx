"use client";

import { useEffect, useState } from "react";

import { DetailExercisePanel } from "@/components/detail-exercise-panel";
import { buildGrammarContextExercises, buildGrammarScenarioExercises } from "@/lib/data/context-exercises";
import { getGrammarDetail, type GrammarDetail } from "@/lib/data/grammar-service";
import { getCuratedN5ExercisesForTargets, type CuratedN5Exercise } from "@/lib/data/n5-curated-exercises";
import { createClient } from "@/lib/supabase/client";

function safeDbQuestions(detail: GrammarDetail, usageId: string | null, limit = 1): CuratedN5Exercise[] {
  return detail.questions
    .filter((question) =>
      question.review_status === "ok" &&
      question.usage_id === usageId &&
      question.question_type !== "choose_meaning" &&
      ["fill_blank", "reorder_sentence", "choose_connection", "choose_pattern"].includes(question.question_type),
    )
    .slice(0, limit)
    .map((question) => {
      const choices = [question.choice_1, question.choice_2, question.choice_3, question.choice_4].filter((choice): choice is string => Boolean(choice));
      return {
        id: `db-grammar-${question.id}`,
        mode: "practice",
        domain: "grammar",
        subtype: question.question_type,
        difficulty: question.difficulty === 3 ? 3 : question.difficulty === 2 ? 2 : 1,
        stimulus_ja: question.question_text,
        choices: choices.length > 0 ? choices : undefined,
        correct_answer: question.correct_answer,
        explanation_vi: question.explanation_vi ?? undefined,
        targets: [detail.grammar_pattern],
        skills: [question.skill_tag ?? question.question_type],
      };
    });
}

export function GrammarDetailExercises({ id }: { id: string }) {
  const [detail, setDetail] = useState<GrammarDetail | null>(null);

  useEffect(() => {
    let cancelled = false;
    void getGrammarDetail(createClient(), id).then((value) => {
      if (!cancelled) setDetail(value);
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!detail || detail.level !== "N5") return null;

  const overallTargets = [
    detail.grammar_pattern,
    detail.connection ?? "",
    ...detail.usages.map((usage) => usage.connection ?? ""),
    ...detail.similar_patterns,
  ].filter((value): value is string => Boolean(value));

  const overallChallenge = getCuratedN5ExercisesForTargets(overallTargets, {
    domain: "grammar",
    modes: ["challenge"],
    contains: true,
    limit: 3,
  });

  const units = detail.usages.length > 0
    ? detail.usages.map((usage) => ({ id: usage.id as string | null, usageNo: usage.usage_no, connection: usage.connection }))
    : [{ id: null, usageNo: 1, connection: detail.connection }];

  return (
    <section className="flex flex-col gap-3">
      <div className="px-1">
        <h2 className="text-sm font-bold">Bài tập ngữ pháp</h2>
        <p className="mt-1 text-xs leading-relaxed text-muted">Mỗi cách dùng có tối thiểu 5 bài dựa trên đúng 3 ví dụ đã kiểm định. Không hỏi “mẫu này nghĩa là gì”.</p>
      </div>

      {units.map((unit, index) => {
        const usageExamples = detail.examples.filter((example) => unit.id === null ? example.usage_id === null : example.usage_id === unit.id);
        const contextItems = buildGrammarContextExercises(usageExamples, 3);
        const scenarioItems = buildGrammarScenarioExercises(usageExamples, detail.grammar_pattern, 2);
        const dbItems = safeDbQuestions(detail, unit.id, 1);
        const unitTargets = [detail.grammar_pattern, unit.connection ?? ""].filter((value): value is string => Boolean(value));
        const curatedPractice = getCuratedN5ExercisesForTargets(unitTargets, {
          domain: "grammar",
          modes: ["practice"],
          contains: true,
          limit: 1,
        });
        const practiceItems = Array.from(new Map([...scenarioItems, ...dbItems, ...curatedPractice].map((item) => [item.id, item])).values()).slice(0, 3);

        return (
          <DetailExercisePanel
            key={unit.id ?? "root"}
            title={units.length > 1 ? `Cách dùng ${unit.usageNo} · ${detail.grammar_pattern}` : `Bài tập · ${detail.grammar_pattern}`}
            description="3 câu điền theo ngữ cảnh + 2 câu chọn tình huống là nền bắt buộc; câu nối mẫu/sắp xếp và Challenge được thêm khi có dữ liệu đã kiểm định."
            contextItems={contextItems}
            practiceItems={practiceItems}
            challengeItems={index === 0 ? overallChallenge : []}
          />
        );
      })}
    </section>
  );
}

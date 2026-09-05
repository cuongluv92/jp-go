"use client";

import { useEffect, useState } from "react";

import { DetailExercisePanel } from "@/components/detail-exercise-panel";
import { buildGrammarContextExercises } from "@/lib/data/context-exercises";
import { getGrammarDetail, type GrammarDetail } from "@/lib/data/grammar-service";
import { getCuratedN5ExercisesForTargets, type CuratedN5Exercise } from "@/lib/data/n5-curated-exercises";
import { createClient } from "@/lib/supabase/client";

function safeDbQuestions(detail: GrammarDetail): CuratedN5Exercise[] {
  return detail.questions
    .filter((question) =>
      question.review_status === "ok" &&
      question.question_type !== "choose_meaning" &&
      ["fill_blank", "reorder_sentence", "choose_connection", "choose_pattern"].includes(question.question_type),
    )
    .slice(0, 2)
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

  const contextItems = buildGrammarContextExercises(detail.examples, 4);
  const targets = [
    detail.grammar_pattern,
    detail.connection ?? "",
    ...detail.usages.flatMap((usage) => [usage.connection ?? ""]),
    ...detail.similar_patterns,
  ].filter(Boolean);

  const curatedPractice = getCuratedN5ExercisesForTargets(targets, {
    domain: "grammar",
    modes: ["practice"],
    contains: true,
    limit: 2,
  });
  const challengeItems = getCuratedN5ExercisesForTargets(targets, {
    domain: "grammar",
    modes: ["challenge"],
    contains: true,
    limit: 3,
  });

  const practiceById = new Map([...safeDbQuestions(detail), ...curatedPractice].map((item) => [item.id, item]));

  return (
    <DetailExercisePanel
      title={`Bài tập · ${detail.grammar_pattern}`}
      description="Kiểm tra cách nối và cách dùng trong ngữ cảnh, rồi mới lên sửa lỗi / phân biệt / biến đổi. Không có câu hỏi “mẫu này nghĩa là gì”."
      contextItems={contextItems}
      practiceItems={Array.from(practiceById.values()).slice(0, 3)}
      challengeItems={challengeItems}
    />
  );
}

import type { SupabaseClient } from "@supabase/supabase-js";

import type { JlptLevel } from "@/lib/types";

export interface SectionResult {
  kind: string;
  title: string;
  correct: number;
  total: number;
}

export async function savePracticeAttempt(
  supabase: SupabaseClient,
  userId: string,
  testType: "auto_jlpt" | "custom",
  jlptLevel: JlptLevel | null,
  sections: SectionResult[],
): Promise<void> {
  const scoreTotal = sections.reduce((sum, s) => sum + s.correct, 0);
  const totalQuestions = sections.reduce((sum, s) => sum + s.total, 0);
  await supabase.from("jp_practice_attempts").insert({
    user_id: userId,
    test_type: testType,
    jlpt_level: jlptLevel,
    sections,
    score_total: scoreTotal,
    total_questions: totalQuestions,
  });
}

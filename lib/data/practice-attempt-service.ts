import type { SupabaseClient } from "@supabase/supabase-js";

import type { JlptLevel } from "@/lib/types";

export interface SectionResult {
  kind: string;
  title: string;
  correct: number;
  total: number;
}

export interface PracticeDayResult {
  date: string;
  correct: number;
  total: number;
}

/**
 * Kết quả luyện tập thật của user trong `days` ngày gần nhất (mặc định 7),
 * gộp theo ngày (`taken_at`) — dùng ở trang Tiến độ. Luôn trả đủ `days`
 * phần tử kể cả ngày không luyện tập (correct/total = 0), sắp cũ → mới.
 */
export async function getRecentPracticeAttempts(
  supabase: SupabaseClient,
  userId: string,
  days = 7,
  now: Date = new Date(),
): Promise<PracticeDayResult[]> {
  const since = new Date(now);
  since.setDate(since.getDate() - (days - 1));
  since.setHours(0, 0, 0, 0);

  const { data } = await supabase
    .from("jp_practice_attempts")
    .select("taken_at, score_total, total_questions")
    .eq("user_id", userId)
    .gte("taken_at", since.toISOString())
    .order("taken_at", { ascending: true });

  const byDate = new Map<string, { correct: number; total: number }>();
  for (const row of (data ?? []) as { taken_at: string; score_total: number; total_questions: number }[]) {
    const dateKey = row.taken_at.slice(0, 10);
    const existing = byDate.get(dateKey) ?? { correct: 0, total: 0 };
    existing.correct += row.score_total;
    existing.total += row.total_questions;
    byDate.set(dateKey, existing);
  }

  const result: PracticeDayResult[] = [];
  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateKey = d.toISOString().slice(0, 10);
    const entry = byDate.get(dateKey) ?? { correct: 0, total: 0 };
    result.push({ date: dateKey, ...entry });
  }
  return result;
}

export async function savePracticeAttempt(
  supabase: SupabaseClient,
  userId: string,
  testType: "auto_jlpt" | "skill_mix" | "custom",
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

import type { SupabaseClient } from "@supabase/supabase-js";

import { buildMultiTypeStudyDays, type DurationMonths, monthsToDays } from "@/lib/study-plan";
import type { JlptLevel } from "@/lib/types";

export type StudyScope = "vocab" | "kanji" | "grammar";

export interface StudyPlanRow {
  id: string;
  user_id: string;
  jlpt_level: JlptLevel;
  scope: StudyScope[];
  duration_months: number;
  total_days: number;
  started_at: string;
  is_active: boolean;
  created_at: string;
}

export interface StudyDayRow {
  id: string;
  plan_id: string;
  user_id: string;
  day_number: number;
  word_ids: string[];
  kanji_ids: string[];
  grammar_ids: string[];
  completed_at: string | null;
}

export interface StudyPlanItems {
  vocab: string[];
  kanji: string[];
  grammar: string[];
}

/** Lộ trình đang hoạt động của user (nếu có), kèm toàn bộ các ngày đã sinh. */
export async function getActiveStudyPlan(
  supabase: SupabaseClient,
  userId: string,
): Promise<{ plan: StudyPlanRow; days: StudyDayRow[] } | null> {
  const { data: plan } = await supabase
    .from("jp_study_plans")
    .select("*")
    .eq("user_id", userId)
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (!plan) return null;

  const { data: days } = await supabase
    .from("jp_study_days")
    .select("*")
    .eq("plan_id", plan.id)
    .order("day_number", { ascending: true });

  return { plan: plan as StudyPlanRow, days: (days ?? []) as StudyDayRow[] };
}

/**
 * Tạo lộ trình mới: tắt lộ trình cũ (nếu có), chia đều `items` (từ vựng +
 * kanji + ngữ pháp) theo số ngày tương ứng `durationMonths`, ghi vào
 * `jp_study_plans` + `jp_study_days`. Gọi hàm này đồng nghĩa xác nhận dừng
 * lộ trình cũ (nếu có) — UI gọi phía trên (Settings) phải tự hỏi xác nhận
 * người dùng TRƯỚC khi gọi hàm này, hàm này không tự hỏi lại.
 */
export async function createStudyPlan(
  supabase: SupabaseClient,
  userId: string,
  level: JlptLevel,
  scope: StudyScope[],
  durationMonths: DurationMonths,
  items: StudyPlanItems,
): Promise<StudyPlanRow> {
  await supabase.from("jp_study_plans").update({ is_active: false }).eq("user_id", userId).eq("is_active", true);

  const totalDays = monthsToDays(durationMonths);
  const { data: plan, error: planError } = await supabase
    .from("jp_study_plans")
    .insert({
      user_id: userId,
      jlpt_level: level,
      scope,
      duration_months: durationMonths,
      total_days: totalDays,
    })
    .select("*")
    .single();
  if (planError || !plan) throw planError ?? new Error("Không tạo được lộ trình");

  const dayGroups = buildMultiTypeStudyDays(items, totalDays);
  const dayRows = dayGroups.map((day, index) => ({
    plan_id: plan.id,
    user_id: userId,
    day_number: index + 1,
    word_ids: day.wordIds,
    kanji_ids: day.kanjiIds,
    grammar_ids: day.grammarIds,
  }));
  if (dayRows.length > 0) {
    const { error: daysError } = await supabase.from("jp_study_days").insert(dayRows);
    if (daysError) throw daysError;
  }

  return plan as StudyPlanRow;
}

/**
 * Đánh dấu 1 ngày đã học xong + tự sinh 2 lịch ôn tập (5 ngày và 15 ngày
 * sau). Mở khoá ngày kế tiếp là hệ quả tự nhiên (UI chỉ cho học ngày đầu
 * tiên chưa có `completed_at`).
 */
export async function completeStudyDay(supabase: SupabaseClient, userId: string, studyDay: StudyDayRow): Promise<void> {
  const now = new Date();
  await supabase.from("jp_study_days").update({ completed_at: now.toISOString() }).eq("id", studyDay.id);

  const inFuture = (days: number) => {
    const d = new Date(now);
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  };

  await supabase.from("jp_review_schedules").insert([
    { user_id: userId, study_day_id: studyDay.id, stage: 5, scheduled_date: inFuture(5) },
    { user_id: userId, study_day_id: studyDay.id, stage: 15, scheduled_date: inFuture(15) },
  ]);
}

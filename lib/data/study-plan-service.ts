import type { SupabaseClient } from "@supabase/supabase-js";

import { buildMultiTypeStudyDays, type DurationMonths, monthsToDays } from "@/lib/study-plan";
import type { JlptLevel } from "@/lib/types";

export type StudyScope = "vocab" | "kanji" | "grammar";

export interface StudyPlanRow {
  id: string;
  user_id: string;
  name: string | null;
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

/**
 * Mọi lộ trình đang hoạt động của user (KHÔNG giới hạn 1 lộ trình — người
 * dùng được phép chạy nhiều lộ trình song song, ví dụ Kanji N5 + Từ vựng
 * N3 cùng lúc, hoặc 2 lộ trình giống hệt nhau cho 2 người dùng chung tài
 * khoản). Sắp xếp mới nhất trước.
 */
export async function listActiveStudyPlans(supabase: SupabaseClient, userId: string): Promise<StudyPlanRow[]> {
  const { data: plans } = await supabase
    .from("jp_study_plans")
    .select("*")
    .eq("user_id", userId)
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return (plans ?? []) as StudyPlanRow[];
}

/** Toàn bộ các ngày đã sinh cho 1 lộ trình cụ thể. */
export async function getStudyPlanDays(supabase: SupabaseClient, planId: string): Promise<StudyDayRow[]> {
  const { data: days } = await supabase
    .from("jp_study_days")
    .select("*")
    .eq("plan_id", planId)
    .order("day_number", { ascending: true });

  return (days ?? []) as StudyDayRow[];
}

/** Số ngày đã hoàn thành của 1 lộ trình — dùng để hiển thị % tiến độ trên chip chuyển lộ trình mà không cần tải toàn bộ `word_ids`/`kanji_ids` của mọi lộ trình. */
export async function countCompletedStudyDays(supabase: SupabaseClient, planId: string): Promise<number> {
  const { count } = await supabase
    .from("jp_study_days")
    .select("id", { count: "exact", head: true })
    .eq("plan_id", planId)
    .not("completed_at", "is", null);
  return count ?? 0;
}

/** Đổi tên 1 lộ trình — không giới hạn ký tự đặc biệt, chuỗi rỗng coi như bỏ tên (dùng tên mặc định theo cấp độ). */
export async function renameStudyPlan(supabase: SupabaseClient, planId: string, name: string): Promise<void> {
  const trimmed = name.trim();
  const { error } = await supabase
    .from("jp_study_plans")
    .update({ name: trimmed.length > 0 ? trimmed : null })
    .eq("id", planId);
  if (error) throw error;
}

/**
 * Dừng (ẩn) 1 lộ trình cụ thể — hành động CHỦ ĐỘNG do người dùng chọn khi
 * họ tự muốn dừng, khác với trước đây (tự động tắt lộ trình cũ khi tạo lộ
 * trình mới). Không xoá dữ liệu, chỉ set is_active=false nên có thể khôi
 * phục lại bằng cách sửa trực tiếp trong DB nếu cần.
 */
export async function archiveStudyPlan(supabase: SupabaseClient, planId: string): Promise<void> {
  const { error } = await supabase.from("jp_study_plans").update({ is_active: false }).eq("id", planId);
  if (error) throw error;
}

/**
 * Tạo lộ trình mới — KHÔNG đụng đến các lộ trình đang hoạt động khác của
 * user, cho phép chạy song song nhiều lộ trình (kể cả nhiều lộ trình giống
 * hệt nhau, ví dụ dùng chung tài khoản cho 2 người). Chia đều `items` (từ
 * vựng + kanji + ngữ pháp) theo số ngày tương ứng `durationMonths`, ghi vào
 * `jp_study_plans` + `jp_study_days`.
 */
export async function createStudyPlan(
  supabase: SupabaseClient,
  userId: string,
  level: JlptLevel,
  scope: StudyScope[],
  durationMonths: DurationMonths,
  items: StudyPlanItems,
  name?: string,
): Promise<StudyPlanRow> {
  const totalDays = monthsToDays(durationMonths);
  const trimmedName = name?.trim();
  const { data: plan, error: planError } = await supabase
    .from("jp_study_plans")
    .insert({
      user_id: userId,
      name: trimmedName && trimmedName.length > 0 ? trimmedName : null,
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

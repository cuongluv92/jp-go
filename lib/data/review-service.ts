import type { SupabaseClient } from "@supabase/supabase-js";

export interface ReviewScheduleRow {
  id: string;
  user_id: string;
  study_day_id: string;
  stage: 5 | 15;
  scheduled_date: string;
  completed_at: string | null;
  study_day: {
    day_number: number;
    word_ids: string[];
    plan: { name: string | null; jlpt_level: string } | null;
  } | null;
}

/**
 * Lịch ôn tập đến hạn (scheduled_date <= hôm nay) và chưa hoàn thành. Kèm
 * tên/cấp độ lộ trình gốc (`study_day.plan`) để phân biệt rõ khi người dùng
 * có nhiều lộ trình song song (VD "ngày 5" có thể trùng số giữa 2 lộ trình
 * khác nhau).
 */
export async function getDueReviewSchedules(
  supabase: SupabaseClient,
  userId: string,
  now: Date = new Date(),
): Promise<ReviewScheduleRow[]> {
  const today = now.toISOString().slice(0, 10);
  const { data } = await supabase
    .from("jp_review_schedules")
    .select("*, study_day:jp_study_days(day_number, word_ids, plan:jp_study_plans(name, jlpt_level))")
    .eq("user_id", userId)
    .is("completed_at", null)
    .lte("scheduled_date", today)
    .order("scheduled_date", { ascending: true });

  return (data ?? []) as unknown as ReviewScheduleRow[];
}

/** Đánh dấu hoàn thành 1 lượt ôn tập (đã chọn 1 hoặc nhiều lịch để gộp thành 1 buổi). */
export async function completeReviewSchedules(supabase: SupabaseClient, ids: string[]): Promise<void> {
  if (ids.length === 0) return;
  await supabase.from("jp_review_schedules").update({ completed_at: new Date().toISOString() }).in("id", ids);
}

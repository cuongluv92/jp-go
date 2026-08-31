import type { SupabaseClient } from "@supabase/supabase-js";

import type { JlptLevel } from "@/lib/types";

export type KanjiReadingType = "on" | "kun";
export type KanjiSourceType = "pdf" | "generated";
export type KanjiReviewStatus = "ok" | "needs_review";
export type KanjiQuestionType =
  | "choose_reading"
  | "choose_kanji_from_meaning"
  | "choose_word_meaning"
  | "write_reading"
  | "match_kanji_word";
export type KanjiProgressStatus = "chua_hoc" | "dang_hoc" | "da_nho" | "hay_sai";

export interface KanjiRow {
  id: string;
  level: JlptLevel;
  kanji_character: string;
  han_viet: string;
  meaning_vi_summary: string | null;
  stroke_count: number | null;
  radical: string | null;
  mnemonic_hint_vi: string | null;
  common_mistake: string | null;
  similar_kanji: string[];
  source_page: number | null;
  source_text: string | null;
  source_type: KanjiSourceType;
  review_status: KanjiReviewStatus;
  corrected_text: string | null;
  correction_note: string | null;
  created_at: string;
}

export interface KanjiReadingRow {
  id: string;
  kanji_id: string;
  reading_type: KanjiReadingType;
  reading_kana: string;
  is_main: boolean;
  source_page: number | null;
  review_status: KanjiReviewStatus;
  correction_note: string | null;
  created_at: string;
}

export interface KanjiWordRow {
  id: string;
  kanji_id: string;
  reading_id: string | null;
  word_jp: string;
  word_furigana: string | null;
  meaning_vi: string | null;
  is_irregular: boolean;
  linked_vocab_id: string | null;
  source_page: number | null;
  source_text: string | null;
  source_type: KanjiSourceType;
  review_status: KanjiReviewStatus;
  corrected_text: string | null;
  correction_note: string | null;
  created_at: string;
}

export interface KanjiQuestionRow {
  id: string;
  kanji_id: string;
  question_type: KanjiQuestionType;
  question_text: string;
  choice_1: string | null;
  choice_2: string | null;
  choice_3: string | null;
  choice_4: string | null;
  correct_answer: string;
  source_type: KanjiSourceType;
  review_status: KanjiReviewStatus;
  created_at: string;
}

export interface KanjiProgressRow {
  id: string;
  user_id: string;
  kanji_id: string;
  status: KanjiProgressStatus;
  next_review_at: string | null;
  correct_count: number;
  wrong_count: number;
  updated_at: string;
}

export interface KanjiDetail extends KanjiRow {
  readings: KanjiReadingRow[];
  words: KanjiWordRow[];
  questions: KanjiQuestionRow[];
}

/** Số lượng kanji đã có theo từng cấp độ — dùng ở Trang chủ và trang danh sách Kanji. */
export async function getKanjiLevelCounts(supabase: SupabaseClient): Promise<Record<JlptLevel, number>> {
  const counts: Record<JlptLevel, number> = { N5: 0, N4: 0, N3: 0, N2: 0, N1: 0 };
  const { data, error } = await supabase.from("jp_kanji").select("level");
  if (error) throw error;
  for (const row of (data ?? []) as { level: JlptLevel }[]) {
    counts[row.level] += 1;
  }
  return counts;
}

/** Danh sách kanji của 1 cấp độ, sắp theo thứ tự tạo (khớp thứ tự trong PDF nguồn). */
export async function listKanjiByLevel(supabase: SupabaseClient, level: JlptLevel): Promise<KanjiRow[]> {
  const { data, error } = await supabase
    .from("jp_kanji")
    .select("*")
    .eq("level", level)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []) as KanjiRow[];
}

/** Chi tiết 1 kanji kèm đầy đủ âm đọc, từ ghép, bài tập. */
export async function getKanjiDetail(supabase: SupabaseClient, kanjiId: string): Promise<KanjiDetail | null> {
  const { data: kanji, error: kanjiError } = await supabase.from("jp_kanji").select("*").eq("id", kanjiId).maybeSingle();
  if (kanjiError) throw kanjiError;
  if (!kanji) return null;

  const [{ data: readings }, { data: words }, { data: questions }] = await Promise.all([
    supabase.from("jp_kanji_readings").select("*").eq("kanji_id", kanjiId).order("is_main", { ascending: false }),
    supabase.from("jp_kanji_words").select("*").eq("kanji_id", kanjiId).order("created_at", { ascending: true }),
    supabase.from("jp_kanji_questions").select("*").eq("kanji_id", kanjiId),
  ]);

  return {
    ...(kanji as KanjiRow),
    readings: (readings ?? []) as KanjiReadingRow[],
    words: (words ?? []) as KanjiWordRow[],
    questions: (questions ?? []) as KanjiQuestionRow[],
  };
}

/** Tiến độ của user cho 1 danh sách kanji, trả về map theo kanji_id (thiếu = chưa học lần nào). */
export async function getKanjiProgressMap(
  supabase: SupabaseClient,
  userId: string,
  kanjiIds: string[],
): Promise<Record<string, KanjiProgressRow>> {
  if (kanjiIds.length === 0) return {};
  const { data, error } = await supabase
    .from("jp_kanji_progress")
    .select("*")
    .eq("user_id", userId)
    .in("kanji_id", kanjiIds);
  if (error) throw error;
  const map: Record<string, KanjiProgressRow> = {};
  for (const row of (data ?? []) as KanjiProgressRow[]) {
    map[row.kanji_id] = row;
  }
  return map;
}

function nextStageAfterCorrect(current: KanjiProgressStatus): { status: KanjiProgressStatus; days: number } {
  if (current === "dang_hoc" || current === "da_nho") return { status: "da_nho", days: 15 };
  return { status: "dang_hoc", days: 5 };
}

/**
 * Chấm 1 lượt ôn tập kanji — đúng thì tiến theo lịch 1-5-15 (chưa học/đang
 * học → đang học (+5 ngày) → đã nhớ (+15 ngày), lặp lại +15 mỗi lần đúng
 * tiếp theo); sai thì đánh dấu "hay sai" và hẹn ôn lại ngày mai.
 */
export async function gradeKanjiReview(
  supabase: SupabaseClient,
  userId: string,
  kanjiId: string,
  correct: boolean,
): Promise<void> {
  const { data: existing } = await supabase
    .from("jp_kanji_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("kanji_id", kanjiId)
    .maybeSingle();

  const row = existing as KanjiProgressRow | null;
  const correctCount = (row?.correct_count ?? 0) + (correct ? 1 : 0);
  const wrongCount = (row?.wrong_count ?? 0) + (correct ? 0 : 1);

  let status: KanjiProgressStatus;
  let days: number;
  if (correct) {
    ({ status, days } = nextStageAfterCorrect(row?.status ?? "chua_hoc"));
  } else {
    status = "hay_sai";
    days = 1;
  }
  const nextReviewAt = new Date();
  nextReviewAt.setDate(nextReviewAt.getDate() + days);

  await supabase.from("jp_kanji_progress").upsert(
    {
      user_id: userId,
      kanji_id: kanjiId,
      status,
      correct_count: correctCount,
      wrong_count: wrongCount,
      next_review_at: nextReviewAt.toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,kanji_id" },
  );
}

export interface DueKanjiRow {
  kanji_id: string;
  kanji_character: string;
  han_viet: string;
  level: JlptLevel;
  status: KanjiProgressStatus;
  next_review_at: string;
}

/**
 * Kanji đến hạn ôn theo lịch 1-5-15 riêng của Kanji (`jp_kanji_progress.
 * next_review_at`) — độc lập với lịch ôn từ vựng (`jp_review_schedules`).
 * Kanji chưa từng học (chưa có dòng progress) không tính là "đến hạn".
 */
export async function getDueKanjiForReview(
  supabase: SupabaseClient,
  userId: string,
  now: Date = new Date(),
): Promise<DueKanjiRow[]> {
  const { data, error } = await supabase
    .from("jp_kanji_progress")
    .select("kanji_id, status, next_review_at, kanji:jp_kanji(kanji_character, han_viet, level)")
    .eq("user_id", userId)
    .lte("next_review_at", now.toISOString())
    .order("next_review_at", { ascending: true });
  if (error) throw error;

  type Row = { kanji_id: string; status: KanjiProgressStatus; next_review_at: string; kanji: { kanji_character: string; han_viet: string; level: JlptLevel } | null };
  return ((data ?? []) as unknown as Row[])
    .filter((row): row is Row & { kanji: NonNullable<Row["kanji"]> } => row.kanji !== null)
    .map((row) => ({
      kanji_id: row.kanji_id,
      status: row.status,
      next_review_at: row.next_review_at,
      kanji_character: row.kanji.kanji_character,
      han_viet: row.kanji.han_viet,
      level: row.kanji.level,
    }));
}

/** Kanji đang bị đánh dấu "hay sai" của user, không phụ thuộc lịch đến hạn — dùng cho mục Tự chọn ôn tập. */
export async function listWrongKanjiForUser(supabase: SupabaseClient, userId: string, level: JlptLevel): Promise<KanjiRow[]> {
  const { data: progressRows, error: progressError } = await supabase
    .from("jp_kanji_progress")
    .select("kanji_id")
    .eq("user_id", userId)
    .eq("status", "hay_sai");
  if (progressError) throw progressError;
  const kanjiIds = (progressRows ?? []).map((r: { kanji_id: string }) => r.kanji_id);
  if (kanjiIds.length === 0) return [];

  const { data, error } = await supabase.from("jp_kanji").select("*").eq("level", level).in("id", kanjiIds);
  if (error) throw error;
  return (data ?? []) as KanjiRow[];
}

/** Lấy toàn bộ câu hỏi (jp_kanji_questions) cho nhiều kanji cùng lúc — dùng cho phiên ôn tập gộp nhiều kanji. */
export async function getQuestionsForKanjiIds(supabase: SupabaseClient, kanjiIds: string[]): Promise<KanjiQuestionRow[]> {
  if (kanjiIds.length === 0) return [];
  const { data, error } = await supabase.from("jp_kanji_questions").select("*").in("kanji_id", kanjiIds);
  if (error) throw error;
  return (data ?? []) as KanjiQuestionRow[];
}

import type { SupabaseClient } from "@supabase/supabase-js";

import { fetchAllRows } from "@/lib/data/supabase-pagination";
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

const KANJI_ID_BATCH_SIZE = 200;

function chunkIds(ids: string[]): string[][] {
  const chunks: string[][] = [];
  for (let index = 0; index < ids.length; index += KANJI_ID_BATCH_SIZE) {
    chunks.push(ids.slice(index, index + KANJI_ID_BATCH_SIZE));
  }
  return chunks;
}

/** Số lượng kanji đã có theo từng cấp độ — dùng ở Trang chủ và trang danh sách Kanji. Phân trang vì tổng mọi cấp độ có thể vượt 1000 dòng (giới hạn mặc định Supabase). */
export async function getKanjiLevelCounts(supabase: SupabaseClient): Promise<Record<JlptLevel, number>> {
  const counts: Record<JlptLevel, number> = { N5: 0, N4: 0, N3: 0, N2: 0, N1: 0 };
  const rows = await fetchAllRows<{ level: JlptLevel }>((from, to) => supabase.from("jp_kanji").select("level", { count: "exact" }).range(from, to));
  for (const row of rows) {
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

/** Tra nhanh nhiều kanji theo id — dùng để hiện tên/mặt chữ kanji trong danh sách "Hôm nay" của lộ trình. */
export async function getKanjiByIds(supabase: SupabaseClient, ids: string[]): Promise<KanjiRow[]> {
  if (ids.length === 0) return [];
  const batches = await Promise.all(
    chunkIds(ids).map((batch) => fetchAllRows<KanjiRow>((from, to) => supabase.from("jp_kanji").select("*", { count: "exact" }).in("id", batch).range(from, to))),
  );
  return batches.flat();
}

/** Chi tiết 1 kanji kèm đầy đủ âm đọc, từ ghép, bài tập. */
export async function getKanjiDetail(supabase: SupabaseClient, kanjiId: string): Promise<KanjiDetail | null> {
  const { data: kanji, error: kanjiError } = await supabase.from("jp_kanji").select("*").eq("id", kanjiId).maybeSingle();
  if (kanjiError) throw kanjiError;
  if (!kanji) return null;

  const [readingsResult, wordsResult, questionsResult] = await Promise.all([
    supabase.from("jp_kanji_readings").select("*").eq("kanji_id", kanjiId).order("is_main", { ascending: false }),
    supabase.from("jp_kanji_words").select("*").eq("kanji_id", kanjiId).order("created_at", { ascending: true }),
    supabase.from("jp_kanji_questions").select("*").eq("kanji_id", kanjiId),
  ]);
  const detailError = readingsResult.error ?? wordsResult.error ?? questionsResult.error;
  if (detailError) throw detailError;

  return {
    ...(kanji as KanjiRow),
    readings: (readingsResult.data ?? []) as KanjiReadingRow[],
    words: (wordsResult.data ?? []) as KanjiWordRow[],
    questions: (questionsResult.data ?? []) as KanjiQuestionRow[],
  };
}

/** Tiến độ của user cho 1 danh sách kanji, trả về map theo kanji_id (thiếu = chưa học lần nào). */
export async function getKanjiProgressMap(
  supabase: SupabaseClient,
  userId: string,
  kanjiIds: string[],
): Promise<Record<string, KanjiProgressRow>> {
  if (kanjiIds.length === 0) return {};
  const batches = await Promise.all(
    chunkIds(kanjiIds).map((batch) =>
      fetchAllRows<KanjiProgressRow>((from, to) =>
        supabase.from("jp_kanji_progress").select("*", { count: "exact" }).eq("user_id", userId).in("kanji_id", batch).range(from, to),
      ),
    ),
  );
  const map: Record<string, KanjiProgressRow> = {};
  for (const row of batches.flat()) {
    map[row.kanji_id] = row;
  }
  return map;
}

export interface KanjiProgressStats {
  learned: number;
  learning: number;
  needsReview: number;
  dueCount: number;
}

/** Tổng hợp tiến độ Kanji của user (dùng ở trang Tiến độ) — phân trang để không mất dữ liệu khi tổng Kanji vượt 1000. */
export async function getKanjiProgressStats(supabase: SupabaseClient, userId: string): Promise<KanjiProgressStats> {
  const rows = await fetchAllRows<{ status: KanjiProgressStatus; next_review_at: string | null }>((from, to) =>
    supabase.from("jp_kanji_progress").select("status, next_review_at", { count: "exact" }).eq("user_id", userId).range(from, to),
  );

  const now = new Date();
  const stats: KanjiProgressStats = { learned: 0, learning: 0, needsReview: 0, dueCount: 0 };
  for (const row of rows) {
    if (row.status === "da_nho") stats.learned += 1;
    else if (row.status === "hay_sai") stats.needsReview += 1;
    else stats.learning += 1;
    if (row.next_review_at && new Date(row.next_review_at) <= now) stats.dueCount += 1;
  }
  return stats;
}

function nextStageAfterCorrect(current: KanjiProgressStatus): { status: KanjiProgressStatus; days: number } {
  if (current === "dang_hoc" || current === "da_nho") return { status: "da_nho", days: 15 };
  return { status: "dang_hoc", days: 5 };
}

/**
 * Chấm 1 lượt ôn tập kanji — đúng thì tiến theo lịch 1-5-15; mọi lỗi đọc/ghi
 * progress đều được ném ra cho UI xử lý, không được báo hoàn tất âm thầm.
 */
export async function gradeKanjiReview(
  supabase: SupabaseClient,
  userId: string,
  kanjiId: string,
  correct: boolean,
): Promise<void> {
  const { data: existing, error: existingError } = await supabase
    .from("jp_kanji_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("kanji_id", kanjiId)
    .maybeSingle();
  if (existingError) throw existingError;

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

  const { error: upsertError } = await supabase.from("jp_kanji_progress").upsert(
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
  if (upsertError) throw upsertError;
}

export interface DueKanjiRow {
  kanji_id: string;
  kanji_character: string;
  han_viet: string;
  level: JlptLevel;
  status: KanjiProgressStatus;
  next_review_at: string;
}

/** Kanji đến hạn ôn theo lịch 1-5-15 riêng của Kanji, phân trang toàn bộ kết quả. */
export async function getDueKanjiForReview(
  supabase: SupabaseClient,
  userId: string,
  now: Date = new Date(),
): Promise<DueKanjiRow[]> {
  type Row = { kanji_id: string; status: KanjiProgressStatus; next_review_at: string; kanji: { kanji_character: string; han_viet: string; level: JlptLevel } | null };
  const rows = await fetchAllRows<Row>((from, to) =>
    supabase
      .from("jp_kanji_progress")
      .select("kanji_id, status, next_review_at, kanji:jp_kanji(kanji_character, han_viet, level)", { count: "exact" })
      .eq("user_id", userId)
      .lte("next_review_at", now.toISOString())
      .order("next_review_at", { ascending: true })
      .range(from, to) as unknown as PromiseLike<{ data: Row[] | null; error: import("@supabase/supabase-js").PostgrestError | null; count?: number | null }>,
  );

  return rows
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
  const progressRows = await fetchAllRows<{ kanji_id: string }>((from, to) =>
    supabase.from("jp_kanji_progress").select("kanji_id", { count: "exact" }).eq("user_id", userId).eq("status", "hay_sai").range(from, to),
  );
  const kanjiIds = progressRows.map((row) => row.kanji_id);
  if (kanjiIds.length === 0) return [];
  const batches = await Promise.all(
    chunkIds(kanjiIds).map((batch) =>
      fetchAllRows<KanjiRow>((from, to) => supabase.from("jp_kanji").select("*", { count: "exact" }).eq("level", level).in("id", batch).range(from, to)),
    ),
  );
  return batches.flat();
}

/**
 * Lấy toàn bộ câu hỏi cho nhiều Kanji. Phân nhóm ID + phân trang để phiên ôn
 * N5+N4 (306 Kanji = 1.224 câu) không bị PostgREST cắt âm thầm ở 1.000 dòng.
 */
export async function getQuestionsForKanjiIds(supabase: SupabaseClient, kanjiIds: string[]): Promise<KanjiQuestionRow[]> {
  if (kanjiIds.length === 0) return [];
  const batches = await Promise.all(
    chunkIds(kanjiIds).map((batch) =>
      fetchAllRows<KanjiQuestionRow>((from, to) =>
        supabase.from("jp_kanji_questions").select("*", { count: "exact" }).in("kanji_id", batch).range(from, to),
      ),
    ),
  );
  return batches.flat();
}

import type { SupabaseClient } from "@supabase/supabase-js";

import type { JlptLevel } from "@/lib/types";

export type GrammarSourceType = "pdf" | "generated";
export type GrammarReviewStatus = "ok" | "needs_review";
export type GrammarQuestionType = "fill_blank" | "choose_pattern" | "choose_connection" | "reorder_sentence" | "choose_meaning";
export type GrammarProgressStatus = "chua_hoc" | "dang_hoc" | "da_nho" | "hay_sai";
export type GrammarExampleType = "standard" | "daily" | "business";

export interface GrammarRow {
  id: string;
  level: JlptLevel;
  grammar_pattern: string;
  meaning_vi: string;
  memory_hint_vi: string | null;
  connection: string | null;
  usage: string | null;
  register: string | null;
  notes: string | null;
  common_mistake: string | null;
  similar_patterns: string[];
  difference_note: string | null;
  source_page: number | null;
  source_text: string | null;
  source_type: GrammarSourceType;
  review_status: GrammarReviewStatus;
  corrected_text: string | null;
  correction_note: string | null;
  created_at: string;
}

export interface GrammarUsageRow {
  id: string;
  grammar_id: string;
  usage_no: number;
  meaning: string;
  connection: string | null;
  usage: string | null;
  notes: string | null;
  source_page: number | null;
  source_type: GrammarSourceType;
  review_status: GrammarReviewStatus;
  created_at: string;
}

export interface GrammarExampleRow {
  id: string;
  grammar_id: string;
  usage_id: string | null;
  example_no: number;
  example_type: GrammarExampleType;
  example_jp: string;
  example_vi: string;
  cloze_jp: string;
  answer: string;
  linked_vocab_id: string | null;
  source_type: GrammarSourceType;
  review_status: GrammarReviewStatus;
  created_at: string;
}

export interface GrammarQuestionRow {
  id: string;
  grammar_id: string;
  usage_id: string | null;
  question_type: GrammarQuestionType;
  question_text: string;
  choice_1: string | null;
  choice_2: string | null;
  choice_3: string | null;
  choice_4: string | null;
  correct_answer: string;
  source_type: GrammarSourceType;
  review_status: GrammarReviewStatus;
  created_at: string;
}

export interface GrammarRelationRow {
  id: string;
  grammar_id_1: string;
  grammar_id_2: string;
  difference_note: string;
  source_type: GrammarSourceType;
  created_at: string;
}

export interface GrammarReviewRow {
  id: string;
  user_id: string;
  grammar_id: string;
  status: GrammarProgressStatus;
  next_review_at: string | null;
  correct_count: number;
  wrong_count: number;
  updated_at: string;
}

export interface GrammarDetail extends GrammarRow {
  usages: GrammarUsageRow[];
  examples: GrammarExampleRow[];
  questions: GrammarQuestionRow[];
  relations: { relation: GrammarRelationRow; other: GrammarRow }[];
}

/** Số lượng mẫu ngữ pháp đã có theo từng cấp độ — dùng ở Trang chủ và trang danh sách Ngữ pháp. */
export async function getGrammarLevelCounts(supabase: SupabaseClient): Promise<Record<JlptLevel, number>> {
  const counts: Record<JlptLevel, number> = { N5: 0, N4: 0, N3: 0, N2: 0, N1: 0 };
  const { data, error } = await supabase.from("jp_grammar").select("level");
  if (error) throw error;
  for (const row of (data ?? []) as { level: JlptLevel }[]) {
    counts[row.level] += 1;
  }
  return counts;
}

/** Danh sách mẫu ngữ pháp của 1 cấp độ, sắp theo thứ tự tạo (khớp thứ tự trong PDF nguồn). */
export async function listGrammarByLevel(supabase: SupabaseClient, level: JlptLevel): Promise<GrammarRow[]> {
  const { data, error } = await supabase
    .from("jp_grammar")
    .select("*")
    .eq("level", level)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data ?? []) as GrammarRow[];
}

/** Tra nhanh nhiều mẫu ngữ pháp theo id — dùng để hiện tên mẫu trong danh sách "Hôm nay" của lộ trình. */
export async function getGrammarByIds(supabase: SupabaseClient, ids: string[]): Promise<GrammarRow[]> {
  if (ids.length === 0) return [];
  const { data, error } = await supabase.from("jp_grammar").select("*").in("id", ids);
  if (error) throw error;
  return (data ?? []) as GrammarRow[];
}

/** Chi tiết 1 mẫu ngữ pháp kèm đầy đủ usage, ví dụ, bài tập, mẫu gần nghĩa. */
export async function getGrammarDetail(supabase: SupabaseClient, grammarId: string): Promise<GrammarDetail | null> {
  const { data: grammar, error: grammarError } = await supabase.from("jp_grammar").select("*").eq("id", grammarId).maybeSingle();
  if (grammarError) throw grammarError;
  if (!grammar) return null;

  const [{ data: usages }, { data: examples }, { data: questions }, { data: relations1 }, { data: relations2 }] = await Promise.all([
    supabase.from("jp_grammar_usages").select("*").eq("grammar_id", grammarId).order("usage_no", { ascending: true }),
    supabase.from("jp_grammar_examples").select("*").eq("grammar_id", grammarId).order("example_no", { ascending: true }),
    supabase.from("jp_grammar_questions").select("*").eq("grammar_id", grammarId),
    supabase.from("jp_grammar_relations").select("*").eq("grammar_id_1", grammarId),
    supabase.from("jp_grammar_relations").select("*").eq("grammar_id_2", grammarId),
  ]);

  const relationRows = [...(relations1 ?? []), ...(relations2 ?? [])] as GrammarRelationRow[];
  const otherIds = relationRows.map((r) => (r.grammar_id_1 === grammarId ? r.grammar_id_2 : r.grammar_id_1));
  const otherGrammars = otherIds.length > 0 ? await getGrammarByIds(supabase, otherIds) : [];
  const otherById = new Map(otherGrammars.map((g) => [g.id, g]));
  const relations = relationRows
    .map((relation) => {
      const otherId = relation.grammar_id_1 === grammarId ? relation.grammar_id_2 : relation.grammar_id_1;
      const other = otherById.get(otherId);
      return other ? { relation, other } : null;
    })
    .filter((r): r is { relation: GrammarRelationRow; other: GrammarRow } => r !== null);

  return {
    ...(grammar as GrammarRow),
    usages: (usages ?? []) as GrammarUsageRow[],
    examples: (examples ?? []) as GrammarExampleRow[],
    questions: (questions ?? []) as GrammarQuestionRow[],
    relations,
  };
}

/** Tiến độ của user cho 1 danh sách mẫu ngữ pháp, trả về map theo grammar_id (thiếu = chưa học lần nào). */
export async function getGrammarProgressMap(
  supabase: SupabaseClient,
  userId: string,
  grammarIds: string[],
): Promise<Record<string, GrammarReviewRow>> {
  if (grammarIds.length === 0) return {};
  const { data, error } = await supabase
    .from("jp_grammar_reviews")
    .select("*")
    .eq("user_id", userId)
    .in("grammar_id", grammarIds);
  if (error) throw error;
  const map: Record<string, GrammarReviewRow> = {};
  for (const row of (data ?? []) as GrammarReviewRow[]) {
    map[row.grammar_id] = row;
  }
  return map;
}

export interface GrammarProgressStats {
  learned: number;
  learning: number;
  needsReview: number;
  dueCount: number;
}

/** Tổng hợp tiến độ Ngữ pháp của user (dùng ở trang Tiến độ) — gộp mọi mẫu user từng học. */
export async function getGrammarProgressStats(supabase: SupabaseClient, userId: string): Promise<GrammarProgressStats> {
  const { data, error } = await supabase.from("jp_grammar_reviews").select("status, next_review_at").eq("user_id", userId);
  if (error) throw error;

  const now = new Date();
  const stats: GrammarProgressStats = { learned: 0, learning: 0, needsReview: 0, dueCount: 0 };
  for (const row of (data ?? []) as { status: GrammarProgressStatus; next_review_at: string | null }[]) {
    if (row.status === "da_nho") stats.learned += 1;
    else if (row.status === "hay_sai") stats.needsReview += 1;
    else stats.learning += 1;
    if (row.next_review_at && new Date(row.next_review_at) <= now) stats.dueCount += 1;
  }
  return stats;
}

function nextStageAfterCorrect(current: GrammarProgressStatus): { status: GrammarProgressStatus; days: number } {
  if (current === "dang_hoc" || current === "da_nho") return { status: "da_nho", days: 15 };
  return { status: "dang_hoc", days: 5 };
}

/**
 * Chấm 1 lượt ôn tập ngữ pháp — đúng thì tiến theo lịch 1-5-15 (chưa học/
 * đang học → đang học (+5 ngày) → đã nhớ (+15 ngày), lặp lại +15 mỗi lần
 * đúng tiếp theo); sai thì đánh dấu "hay sai" và hẹn ôn lại ngày mai. Giống
 * hệt cơ chế gradeKanjiReview, tách riêng bảng nên không ảnh hưởng Kanji.
 */
export async function gradeGrammarReview(
  supabase: SupabaseClient,
  userId: string,
  grammarId: string,
  correct: boolean,
): Promise<void> {
  const { data: existing } = await supabase
    .from("jp_grammar_reviews")
    .select("*")
    .eq("user_id", userId)
    .eq("grammar_id", grammarId)
    .maybeSingle();

  const row = existing as GrammarReviewRow | null;
  const correctCount = (row?.correct_count ?? 0) + (correct ? 1 : 0);
  const wrongCount = (row?.wrong_count ?? 0) + (correct ? 0 : 1);

  let status: GrammarProgressStatus;
  let days: number;
  if (correct) {
    ({ status, days } = nextStageAfterCorrect(row?.status ?? "chua_hoc"));
  } else {
    status = "hay_sai";
    days = 1;
  }
  const nextReviewAt = new Date();
  nextReviewAt.setDate(nextReviewAt.getDate() + days);

  await supabase.from("jp_grammar_reviews").upsert(
    {
      user_id: userId,
      grammar_id: grammarId,
      status,
      correct_count: correctCount,
      wrong_count: wrongCount,
      next_review_at: nextReviewAt.toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,grammar_id" },
  );
}

export interface DueGrammarRow {
  grammar_id: string;
  grammar_pattern: string;
  meaning_vi: string;
  level: JlptLevel;
  status: GrammarProgressStatus;
  next_review_at: string;
}

/**
 * Mẫu ngữ pháp đến hạn ôn theo lịch 1-5-15 riêng (`jp_grammar_reviews.
 * next_review_at`) — độc lập với lịch ôn Từ vựng/Kanji. Mẫu chưa từng học
 * (chưa có dòng review) không tính là "đến hạn".
 */
export async function getDueGrammarForReview(
  supabase: SupabaseClient,
  userId: string,
  now: Date = new Date(),
): Promise<DueGrammarRow[]> {
  const { data, error } = await supabase
    .from("jp_grammar_reviews")
    .select("grammar_id, status, next_review_at, grammar:jp_grammar(grammar_pattern, meaning_vi, level)")
    .eq("user_id", userId)
    .lte("next_review_at", now.toISOString())
    .order("next_review_at", { ascending: true });
  if (error) throw error;

  type Row = {
    grammar_id: string;
    status: GrammarProgressStatus;
    next_review_at: string;
    grammar: { grammar_pattern: string; meaning_vi: string; level: JlptLevel } | null;
  };
  return ((data ?? []) as unknown as Row[])
    .filter((row): row is Row & { grammar: NonNullable<Row["grammar"]> } => row.grammar !== null)
    .map((row) => ({
      grammar_id: row.grammar_id,
      status: row.status,
      next_review_at: row.next_review_at,
      grammar_pattern: row.grammar.grammar_pattern,
      meaning_vi: row.grammar.meaning_vi,
      level: row.grammar.level,
    }));
}

/** Mẫu ngữ pháp đang bị đánh dấu "hay sai" của user, không phụ thuộc lịch đến hạn — dùng cho mục Tự chọn ôn tập. */
export async function listWrongGrammarForUser(supabase: SupabaseClient, userId: string, level: JlptLevel): Promise<GrammarRow[]> {
  const { data: progressRows, error: progressError } = await supabase
    .from("jp_grammar_reviews")
    .select("grammar_id")
    .eq("user_id", userId)
    .eq("status", "hay_sai");
  if (progressError) throw progressError;
  const grammarIds = (progressRows ?? []).map((r: { grammar_id: string }) => r.grammar_id);
  if (grammarIds.length === 0) return [];

  const { data, error } = await supabase.from("jp_grammar").select("*").eq("level", level).in("id", grammarIds);
  if (error) throw error;
  return (data ?? []) as GrammarRow[];
}

/** Lấy toàn bộ câu hỏi (jp_grammar_questions) cho nhiều mẫu cùng lúc — dùng cho phiên ôn tập gộp nhiều mẫu. */
export async function getQuestionsForGrammarIds(supabase: SupabaseClient, grammarIds: string[]): Promise<GrammarQuestionRow[]> {
  if (grammarIds.length === 0) return [];
  const { data, error } = await supabase.from("jp_grammar_questions").select("*").in("grammar_id", grammarIds);
  if (error) throw error;
  return (data ?? []) as GrammarQuestionRow[];
}

/** Câu hỏi ngữ pháp đã kiểm tra của một cấp, dùng để ghép đề mô phỏng JLPT. */
export async function listReviewedGrammarQuestionsByLevel(
  supabase: SupabaseClient,
  level: JlptLevel,
): Promise<GrammarQuestionRow[]> {
  const { data: grammarRows, error: grammarError } = await supabase
    .from("jp_grammar")
    .select("id")
    .eq("level", level)
    .eq("review_status", "ok");
  if (grammarError) throw grammarError;
  const ids = (grammarRows ?? []).map((row: { id: string }) => row.id);
  if (ids.length === 0) return [];
  const { data, error } = await supabase
    .from("jp_grammar_questions")
    .select("*")
    .in("grammar_id", ids)
    .eq("review_status", "ok");
  if (error) throw error;
  return (data ?? []) as GrammarQuestionRow[];
}

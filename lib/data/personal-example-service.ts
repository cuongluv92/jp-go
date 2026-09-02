import type { SupabaseClient } from "@supabase/supabase-js";

export type PersonalExampleTarget = "vocab" | "grammar";
export type PersonalExampleType = "exam" | "daily" | "business";

export interface PersonalExampleRow {
  id: string;
  user_id: string;
  target_type: PersonalExampleTarget;
  target_id: string;
  example_type: PersonalExampleType;
  sentence_jp: string;
  sentence_vi: string;
  highlight_text: string;
  note: string;
  created_at: string;
  updated_at: string;
}

export interface PersonalExampleInput {
  exampleType: PersonalExampleType;
  sentenceJp: string;
  sentenceVi: string;
  highlightText: string;
  note: string;
}

export const PERSONAL_EXAMPLE_TYPE_LABELS: Record<PersonalExampleType, string> = {
  exam: "JLPT / thi cử",
  daily: "Đời thường",
  business: "Business",
};

export function normalizePersonalExampleInput(input: PersonalExampleInput): PersonalExampleInput {
  return {
    exampleType: input.exampleType,
    sentenceJp: input.sentenceJp.trim(),
    sentenceVi: input.sentenceVi.trim(),
    highlightText: input.highlightText.trim(),
    note: input.note.trim(),
  };
}

export function validatePersonalExampleInput(input: PersonalExampleInput): string | null {
  const normalized = normalizePersonalExampleInput(input);
  if (!normalized.sentenceJp) return "Hãy nhập câu tiếng Nhật.";
  if (normalized.sentenceJp.length > 500) return "Câu tiếng Nhật tối đa 500 ký tự.";
  if (normalized.sentenceVi.length > 1000) return "Bản dịch tối đa 1.000 ký tự.";
  if (normalized.highlightText.length > 100) return "Phần cần chú ý tối đa 100 ký tự.";
  if (normalized.note.length > 1000) return "Ghi chú tối đa 1.000 ký tự.";
  return null;
}

export async function listPersonalExamples(
  supabase: SupabaseClient,
  userId: string,
  targetType: PersonalExampleTarget,
  targetId: string,
): Promise<PersonalExampleRow[]> {
  const { data, error } = await supabase
    .from("jp_personal_examples")
    .select("*")
    .eq("user_id", userId)
    .eq("target_type", targetType)
    .eq("target_id", targetId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as PersonalExampleRow[];
}

export async function createPersonalExample(
  supabase: SupabaseClient,
  userId: string,
  targetType: PersonalExampleTarget,
  targetId: string,
  input: PersonalExampleInput,
): Promise<PersonalExampleRow> {
  const normalized = normalizePersonalExampleInput(input);
  const validationError = validatePersonalExampleInput(normalized);
  if (validationError) throw new Error(validationError);

  const { data, error } = await supabase
    .from("jp_personal_examples")
    .insert({
      user_id: userId,
      target_type: targetType,
      target_id: targetId,
      example_type: normalized.exampleType,
      sentence_jp: normalized.sentenceJp,
      sentence_vi: normalized.sentenceVi,
      highlight_text: normalized.highlightText,
      note: normalized.note,
    })
    .select("*")
    .single();
  if (error) throw error;
  return data as PersonalExampleRow;
}

export async function updatePersonalExample(
  supabase: SupabaseClient,
  userId: string,
  id: string,
  input: PersonalExampleInput,
): Promise<PersonalExampleRow> {
  const normalized = normalizePersonalExampleInput(input);
  const validationError = validatePersonalExampleInput(normalized);
  if (validationError) throw new Error(validationError);

  const { data, error } = await supabase
    .from("jp_personal_examples")
    .update({
      example_type: normalized.exampleType,
      sentence_jp: normalized.sentenceJp,
      sentence_vi: normalized.sentenceVi,
      highlight_text: normalized.highlightText,
      note: normalized.note,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("user_id", userId)
    .select("*")
    .single();
  if (error) throw error;
  return data as PersonalExampleRow;
}

export async function deletePersonalExample(supabase: SupabaseClient, userId: string, id: string): Promise<void> {
  const { error } = await supabase.from("jp_personal_examples").delete().eq("id", id).eq("user_id", userId);
  if (error) throw error;
}

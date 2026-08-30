import type { SupabaseClient } from "@supabase/supabase-js";

import type { JlptLevel } from "@/lib/types";

export interface CustomTestQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

export interface CustomTestRow {
  id: string;
  user_id: string;
  title: string;
  jlpt_level: JlptLevel | null;
  content: CustomTestQuestion[];
  created_at: string;
}

/** Đề luyện tập người dùng tự đưa vào — độc lập hoàn toàn với lộ trình học. */
export async function listCustomTests(supabase: SupabaseClient, userId: string): Promise<CustomTestRow[]> {
  const { data } = await supabase
    .from("jp_custom_tests")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  return (data ?? []) as CustomTestRow[];
}

export async function createCustomTest(
  supabase: SupabaseClient,
  userId: string,
  title: string,
  jlptLevel: JlptLevel | null,
  questions: CustomTestQuestion[],
): Promise<CustomTestRow> {
  const { data, error } = await supabase
    .from("jp_custom_tests")
    .insert({ user_id: userId, title, jlpt_level: jlptLevel, content: questions })
    .select("*")
    .single();
  if (error || !data) throw error ?? new Error("Không tạo được đề");
  return data as CustomTestRow;
}

export async function deleteCustomTest(supabase: SupabaseClient, id: string): Promise<void> {
  await supabase.from("jp_custom_tests").delete().eq("id", id);
}

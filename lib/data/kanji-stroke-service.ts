import type { SupabaseClient } from "@supabase/supabase-js";

export interface KanjiStrokeProgressRow {
  user_id: string;
  kanji_character: string;
  practice_count: number;
  best_score: number;
  last_score: number;
  updated_at: string;
}

export async function saveKanjiStrokeProgress(
  supabase: SupabaseClient,
  userId: string,
  character: string,
  score: number,
): Promise<KanjiStrokeProgressRow> {
  const { data: existing } = await supabase
    .from("jp_kanji_stroke_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("kanji_character", character)
    .maybeSingle();

  const previous = existing as KanjiStrokeProgressRow | null;
  const { data, error } = await supabase
    .from("jp_kanji_stroke_progress")
    .upsert(
      {
        user_id: userId,
        kanji_character: character,
        practice_count: (previous?.practice_count ?? 0) + 1,
        best_score: Math.max(previous?.best_score ?? 0, score),
        last_score: score,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,kanji_character" },
    )
    .select("*")
    .single();
  if (error) throw error;
  return data as KanjiStrokeProgressRow;
}

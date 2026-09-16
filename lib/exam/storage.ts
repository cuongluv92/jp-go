import { getSupabaseClient } from "./supabase-client";

/**
 * Ảnh nguồn KHÔNG lưu base64 trong DB - chỉ lưu path trong Supabase Storage,
 * bucket "exam-sources" (xem docs/EXAM_CONTENT_IMPORT.md mục ảnh nguồn).
 * Đổi ảnh sau này chỉ cần thay file trong Storage, không đổi page id.
 */
export function getExamSourceImageUrl(path: string): string {
  const supabase = getSupabaseClient();
  return supabase.storage.from("exam-sources").getPublicUrl(path).data.publicUrl;
}

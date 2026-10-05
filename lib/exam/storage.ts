import { getSupabaseClient } from "./supabase-client";

/**
 * Ảnh nguồn chủ yếu lưu dưới dạng path trong Supabase Storage (bucket "exam-sources")
 * hoặc public path của app. Với một số đề PDF đã nhập, cho phép data URL để giữ nguyên
 * sơ đồ/hình gốc mà không cần tạo thêm file Storage.
 */
export function getExamSourceImageUrl(path: string): string {
  if (path.startsWith("/") || path.startsWith("data:")) return path;
  const supabase = getSupabaseClient();
  return supabase.storage.from("exam-sources").getPublicUrl(path).data.publicUrl;
}

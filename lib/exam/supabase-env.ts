/**
 * Đọc biến môi trường Supabase. Module ôn thi chỉ ĐỌC dữ liệu công khai
 * (RLS cho phép SELECT với mọi người) nên phía app chỉ cần anon/publishable
 * key - không bao giờ dùng service role key ở đây.
 *
 * SUPABASE_SERVICE_ROLE_KEY chỉ được đọc trong scripts/exam-import.ts (chạy
 * bằng Node ở máy người dùng/CI), không import vào bất kỳ file nào nằm dưới
 * app/ hoặc components/ để tránh lọt vào bundle client.
 */
export function getSupabasePublicEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY. Xem .env.example.",
    );
  }

  return { url, anonKey };
}

export function getSupabaseServiceEnv() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Thiếu SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY. Đây là biến chỉ dùng ở server cho script import, không commit vào repo.",
    );
  }

  return { url, serviceRoleKey };
}

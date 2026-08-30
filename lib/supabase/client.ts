import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client dùng ở phía trình duyệt (Client Components).
 * Dùng chung project Supabase với app nhatkytrading nhưng dữ liệu tách biệt
 * hoàn toàn — mọi bảng của jp-go đều có tiền tố `jp_` và RLS riêng theo
 * auth.uid() (xem supabase/migrations/0001_jp_go_init.sql).
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

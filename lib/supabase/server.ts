import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase client dùng ở phía server (Server Components, Route Handlers,
 * middleware). Đọc/ghi session qua cookie theo pattern chuẩn của
 * @supabase/ssr cho Next.js App Router.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Bị gọi từ Server Component (không có quyền set cookie) — bỏ qua,
          // vì middleware đã lo việc refresh session.
        }
      },
    },
  });
}

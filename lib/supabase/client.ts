import { createBrowserClient } from "@supabase/ssr";

function createBrowserSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

// `createBrowserClient` chính nó bị overload — `ReturnType<typeof
// createBrowserClient>` sẽ lấy nhầm chữ ký overload cuối cùng thay vì chữ
// ký thực sự khớp lệnh gọi bên dưới, làm rộng/lệch kiểu và gây implicit
// `any` ở những nơi dùng `.from(...)`. Bọc qua 1 hàm không overload để
// `ReturnType` suy ra đúng kiểu của đúng lệnh gọi đang dùng.
let browserClient: ReturnType<typeof createBrowserSupabaseClient> | undefined;

/**
 * Supabase client dùng ở phía trình duyệt (Client Components).
 * Dùng chung project Supabase với app nhatkytrading nhưng dữ liệu tách biệt
 * hoàn toàn — mọi bảng của jp-go đều có tiền tố `jp_` và RLS riêng theo
 * auth.uid() (xem supabase/migrations/0001_jp_go_init.sql).
 *
 * SINGLETON theo tab trình duyệt (thay vì tạo mới mỗi lần gọi): mỗi
 * `createBrowserClient()` tự dựng 1 GoTrueClient riêng, tự đăng ký listener
 * + timer auto-refresh token, không có noi huỷ (không unsubscribe) khi
 * instance đó bị bỏ đi. Trước đây `createClient()` được gọi ở ~30 chỗ, có
 * chỗ gọi lại mỗi lần thao tác (vd. `syncProgress` trong
 * vocabulary-context.tsx chạy mỗi lần chấm điểm flashcard/bấm yêu thích) —
 * càng dùng app lâu, càng nhiều timer/listener "mồ côi" cùng chạy song
 * song, đây là nguyên nhân gốc khiến app càng dùng càng nặng/giật.
 */
export function createClient() {
  if (!browserClient) {
    browserClient = createBrowserSupabaseClient();
  }
  return browserClient;
}

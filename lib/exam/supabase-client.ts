import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabasePublicEnv } from "./supabase-env";

let browserClient: SupabaseClient | null = null;

/**
 * Client dùng chung cho server components và client components của module
 * ôn thi. Chỉ dùng anon key (đọc công khai qua RLS) - không có quyền ghi.
 */
export function getSupabaseClient(): SupabaseClient {
  if (browserClient) return browserClient;

  const { url, anonKey } = getSupabasePublicEnv();
  browserClient = createClient(url, anonKey, {
    auth: { persistSession: false },
  });
  return browserClient;
}

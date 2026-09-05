import { type NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Áp dụng cho mọi route trừ static assets/ảnh/favicon. Route quality
     * bên dưới chỉ mở tạm trên branch kiểm định để đối chiếu read-only với
     * KANJIDIC; sẽ được xóa ngay sau khi hoàn tất audit.
     */
    "/((?!api/quality/kanji-source-audit|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
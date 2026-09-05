import { type NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Áp dụng cho mọi route trừ static assets/ảnh/favicon — không cần bảo vệ
     * các file tĩnh, chỉ cần bảo vệ trang thực sự render nội dung app.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

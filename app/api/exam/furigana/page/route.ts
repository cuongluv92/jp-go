import { NextResponse, type NextRequest } from "next/server";

import { getExamBookBySlug, getExamPage } from "@/lib/exam/queries";
import { enrichExamBlocksWithFurigana } from "@/lib/exam/server-furigana";

/**
 * Trang đọc sách render ngay với content_blocks gốc (chưa có furigana),
 * rồi client gọi route này để lấy bản đã sinh furigana và cập nhật lại -
 * xem ghi chú ở /api/exam/furigana/test/route.ts.
 */
export async function GET(request: NextRequest) {
  const bookSlug = request.nextUrl.searchParams.get("bookSlug");
  const pageNumber = Number(request.nextUrl.searchParams.get("pageNumber"));
  if (!bookSlug || !Number.isInteger(pageNumber)) {
    return NextResponse.json({ error: "missing params" }, { status: 400 });
  }

  const book = await getExamBookBySlug(bookSlug);
  if (!book) return NextResponse.json({ error: "not found" }, { status: 404 });

  const page = await getExamPage(book.id, pageNumber);
  if (!page) return NextResponse.json({ error: "not found" }, { status: 404 });

  const blocks = await enrichExamBlocksWithFurigana(page.content_blocks);
  return NextResponse.json({ blocks });
}

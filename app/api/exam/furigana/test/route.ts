import { NextResponse, type NextRequest } from "next/server";

import { getExamTestBySlug, listExamQuestionsForTest } from "@/lib/exam/queries";

/**
 * Trang làm đề render ngay với câu hỏi/đáp án chưa có furigana (xem
 * listExamQuestionsForTestRaw), rồi client gọi route này để lấy bản đã sinh
 * furigana (chạy kuromoji) và cập nhật lại - furigana "hiện ra sau" thay vì
 * chặn cả trang chờ dictionary dựng xong.
 */
export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "missing slug" }, { status: 400 });

  const test = await getExamTestBySlug(slug);
  if (!test) return NextResponse.json({ error: "not found" }, { status: 404 });

  const questions = await listExamQuestionsForTest(test.id);
  return NextResponse.json({ questions });
}

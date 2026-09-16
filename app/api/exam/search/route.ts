import { NextResponse, type NextRequest } from "next/server";

import { searchExamContent, searchExamSections } from "@/lib/exam/queries";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") ?? "";
  const bookSlug = request.nextUrl.searchParams.get("book") ?? undefined;

  if (!q.trim()) {
    return NextResponse.json({ pages: [], sections: [] });
  }

  const [pages, sections] = await Promise.all([
    searchExamContent(q, { bookSlug, limit: 20 }),
    searchExamSections(q, { bookSlug, limit: 10 }),
  ]);

  return NextResponse.json({ pages, sections });
}

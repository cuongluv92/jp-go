import { buildSectionTree } from "./section-tree";
import { getSupabaseClient } from "./supabase-client";
import type {
  ExamBook,
  ExamPage,
  ExamQuestion,
  ExamQuestionChoice,
  ExamQuestionReference,
  ExamSection,
  ExamSectionNode,
  ExamTest,
} from "./types";

/** 4 mục lớn hiển thị trên tab chính - 3 book_slug thật + "kakomon" (không phải sách). */
export const EXAM_BOOK_SLUGS = ["sekou-houki", "sekou-gijutsu", "sougou-mondai"] as const;
export type ExamBookSlug = (typeof EXAM_BOOK_SLUGS)[number];

export async function listExamBooks(): Promise<ExamBook[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_books")
    .select("*")
    .neq("status", "archived")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data as ExamBook[];
}

export async function getExamBookBySlug(slug: string): Promise<ExamBook | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_books")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return (data as ExamBook | null) ?? null;
}

export async function listExamSections(bookId: string): Promise<ExamSection[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_sections")
    .select("*")
    .eq("book_id", bookId)
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data as ExamSection[];
}

export async function getExamSectionTree(bookId: string): Promise<ExamSectionNode[]> {
  const sections = await listExamSections(bookId);
  return buildSectionTree(sections);
}

export async function getExamSectionById(sectionId: string): Promise<ExamSection | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_sections")
    .select("*")
    .eq("id", sectionId)
    .maybeSingle();

  if (error) throw error;
  return (data as ExamSection | null) ?? null;
}

/** Đường dẫn từ root -> section (dùng cho breadcrumb trang đọc). */
export async function getExamSectionAncestors(sectionId: string): Promise<ExamSection[]> {
  const chain: ExamSection[] = [];
  let currentId: string | null = sectionId;

  while (currentId) {
    const section = await getExamSectionById(currentId);
    if (!section) break;
    chain.unshift(section);
    currentId = section.parent_id;
  }

  return chain;
}

export async function getExamPage(bookId: string, pageNumber: number): Promise<ExamPage | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_pages")
    .select("*")
    .eq("book_id", bookId)
    .eq("page_number", pageNumber)
    .maybeSingle();

  if (error) throw error;
  return (data as ExamPage | null) ?? null;
}

export async function listExamPagesForSection(sectionId: string): Promise<ExamPage[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_pages")
    .select("*")
    .eq("section_id", sectionId)
    .order("page_number", { ascending: true });

  if (error) throw error;
  return data as ExamPage[];
}

export async function listExamPagesMeta(
  bookId: string,
): Promise<{ id: string; section_id: string | null; page_number: number }[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_pages")
    .select("id, section_id, page_number")
    .eq("book_id", bookId)
    .order("page_number", { ascending: true });

  if (error) throw error;
  return data as { id: string; section_id: string | null; page_number: number }[];
}

export async function listExamPageNumbers(bookId: string): Promise<number[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_pages")
    .select("page_number")
    .eq("book_id", bookId)
    .order("page_number", { ascending: true });

  if (error) throw error;
  return (data as { page_number: number }[]).map((row) => row.page_number);
}

export interface ExamSearchResult {
  book: Pick<ExamBook, "id" | "slug" | "short_title">;
  section: Pick<ExamSection, "id" | "code" | "title_jp" | "title_vi"> | null;
  page: ExamPage;
  snippet: string;
}

function buildSnippet(searchText: string | undefined, query: string, radius = 60): string {
  if (!searchText) return "";
  const idx = searchText.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return searchText.slice(0, radius * 2).trim();
  const start = Math.max(0, idx - radius);
  const end = Math.min(searchText.length, idx + query.length + radius);
  return `${start > 0 ? "…" : ""}${searchText.slice(start, end).trim()}${end < searchText.length ? "…" : ""}`;
}

/** Search theo jp/vi/explanation_vi/tên chương/tên mục/code/số trang, có thể giới hạn theo 1 sách. */
export async function searchExamContent(
  query: string,
  options: { bookSlug?: string; limit?: number } = {},
): Promise<ExamSearchResult[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const supabase = getSupabaseClient();
  const limit = options.limit ?? 30;

  let bookId: string | undefined;
  if (options.bookSlug) {
    const book = await getExamBookBySlug(options.bookSlug);
    if (!book) return [];
    bookId = book.id;
  }

  const asPageNumber = /^\d+$/.test(trimmed) ? Number(trimmed) : null;
  const selectColumns =
    "*, book:jp_exam_books(id, slug, short_title), section:jp_exam_sections(id, code, title_jp, title_vi)";

  type PageRow = ExamPage & {
    book: Pick<ExamBook, "id" | "slug" | "short_title">;
    section: Pick<ExamSection, "id" | "code" | "title_jp" | "title_vi"> | null;
    search_text?: string;
  };

  // Hai truy vấn riêng (thay vì .or() ghép chuỗi thô) để không phải nội suy
  // search-input trực tiếp vào cú pháp filter của PostgREST.
  const textQuery = supabase.from("jp_exam_pages").select(selectColumns).ilike("search_text", `%${trimmed}%`).limit(limit);
  const pageNumberQuery =
    asPageNumber != null
      ? supabase.from("jp_exam_pages").select(selectColumns).eq("page_number", asPageNumber).limit(limit)
      : null;

  const [textResult, pageNumberResult] = await Promise.all([
    bookId ? textQuery.eq("book_id", bookId) : textQuery,
    pageNumberQuery ? (bookId ? pageNumberQuery.eq("book_id", bookId) : pageNumberQuery) : Promise.resolve(null),
  ]);

  if (textResult.error) throw textResult.error;
  if (pageNumberResult?.error) throw pageNumberResult.error;

  const rows = new Map<string, PageRow>();
  for (const row of (textResult.data ?? []) as PageRow[]) rows.set(row.id, row);
  for (const row of (pageNumberResult?.data ?? []) as PageRow[]) rows.set(row.id, row);

  return [...rows.values()].slice(0, limit).map((row) => {
    const { book, section, ...page } = row;
    return {
      book,
      section,
      page: page as ExamPage,
      snippet: buildSnippet(row.search_text, trimmed),
    };
  });
}

export interface ExamSectionSearchResult {
  book: Pick<ExamBook, "id" | "slug" | "short_title">;
  section: ExamSection;
}

/** Search riêng theo tên chương/tên mục/code (không phải nội dung trang). */
export async function searchExamSections(
  query: string,
  options: { bookSlug?: string; limit?: number } = {},
): Promise<ExamSectionSearchResult[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const supabase = getSupabaseClient();
  const limit = options.limit ?? 20;

  let bookId: string | undefined;
  if (options.bookSlug) {
    const book = await getExamBookBySlug(options.bookSlug);
    if (!book) return [];
    bookId = book.id;
  }

  let sectionsQuery = supabase
    .from("jp_exam_sections")
    .select("*, book:jp_exam_books(id, slug, short_title)")
    .or(`title_jp.ilike.%${escapePostgrestLikePattern(trimmed)}%,title_vi.ilike.%${escapePostgrestLikePattern(trimmed)}%,code.ilike.%${escapePostgrestLikePattern(trimmed)}%`)
    .limit(limit);

  if (bookId) sectionsQuery = sectionsQuery.eq("book_id", bookId);

  const { data, error } = await sectionsQuery;
  if (error) throw error;

  type Row = ExamSection & { book: Pick<ExamBook, "id" | "slug" | "short_title"> };
  return (data as Row[]).map(({ book, ...section }) => ({ book, section: section as ExamSection }));
}

/**
 * PostgREST `.or()` nhận một chuỗi filter thô (cột.op.giá_trị,...) - escape
 * các ký tự có ý nghĩa cú pháp (`,`, `(`, `)`) trong giá trị người dùng nhập
 * để không phá cú pháp filter hoặc chèn thêm điều kiện ngoài ý muốn.
 */
function escapePostgrestLikePattern(value: string): string {
  return value.replace(/[,()]/g, "");
}

// ---------------------------------------------------------------------------
// 過去問・実戦問題 (kakomon)
// ---------------------------------------------------------------------------

export async function listExamTests(): Promise<ExamTest[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_tests")
    .select("*")
    .neq("status", "archived")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data as ExamTest[];
}

export async function getExamTestBySlug(slug: string): Promise<ExamTest | null> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_tests")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return (data as ExamTest | null) ?? null;
}

export async function listExamQuestionsForTest(testId: string): Promise<ExamQuestion[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("jp_exam_questions")
    .select(
      `*,
       choices:jp_exam_question_choices(*),
       references:jp_exam_question_references(
         *,
         book:jp_exam_books(id, slug, short_title),
         section:jp_exam_sections(id, code, title_jp, title_vi),
         page:jp_exam_pages(*)
       )`,
    )
    .eq("test_id", testId)
    .order("question_number", { ascending: true });

  if (error) throw error;

  type Row = Omit<ExamQuestion, "choices" | "references"> & {
    choices: ExamQuestionChoice[];
    references: ExamQuestionReference[];
  };

  return (data as Row[]).map((row) => ({
    ...row,
    choices: [...row.choices].sort((a, b) => a.sort_order - b.sort_order),
    references: [...row.references].sort((a, b) => a.sort_order - b.sort_order),
  }));
}

import type { ContentBlock } from "./content-blocks";
import { parseExamPageImport, type ExamPageImport } from "./import-schema";

export interface ExamImportSectionRecord {
  id: string;
}

export interface ExamImportPageRecord {
  id: string;
  content_blocks: ContentBlock[];
  page_label: string | null;
  source_image_path: string | null;
  notes_vi: string | null;
  review_status: string;
}

/**
 * Interface tách biệt khỏi @supabase/supabase-js để logic import test được
 * bằng in-memory fake (không cần network). scripts/exam-import.ts cung cấp
 * bản implementation thật dùng service-role key.
 */
export interface ExamImportDb {
  findBookIdBySlug(slug: string): Promise<string | null>;
  findSection(params: {
    bookId: string;
    parentId: string | null;
    code: string | null;
    titleJp: string;
  }): Promise<ExamImportSectionRecord | null>;
  createSection(params: {
    bookId: string;
    parentId: string | null;
    code: string | null;
    titleJp: string;
    titleVi: string | null;
    depth: number;
    sortOrder: number;
  }): Promise<ExamImportSectionRecord>;
  findPage(params: { bookId: string; pageNumber: number }): Promise<ExamImportPageRecord | null>;
  createPage(params: {
    bookId: string;
    sectionId: string | null;
    pageNumber: number;
    pageLabel: string | null;
    sourceImagePath: string | null;
    notesVi: string | null;
    reviewStatus: string;
    contentBlocks: ContentBlock[];
  }): Promise<{ id: string }>;
  updatePage(
    pageId: string,
    params: {
      sectionId: string | null;
      pageLabel: string | null;
      sourceImagePath: string | null;
      notesVi: string | null;
      reviewStatus: string;
      contentBlocks: ContentBlock[];
    },
  ): Promise<void>;
}

export type ImportAction = "created" | "updated" | "skipped";

export interface ImportFileResult {
  file: string;
  action: ImportAction;
  bookSlug?: string;
  pageNumber?: number;
}

export interface ImportError {
  file: string;
  book?: string;
  page?: number;
  reason: string;
}

export interface ImportReport {
  created: number;
  updated: number;
  skipped: number;
  errors: ImportError[];
  results: ImportFileResult[];
}

function blocksEqual(a: ContentBlock[], b: ContentBlock[]): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

/** Resolve section_path thành section_id cuối cùng, tìm-hoặc-tạo từng cấp (idempotent). */
async function resolveSectionPath(
  db: ExamImportDb,
  bookId: string,
  sectionPath: ExamPageImport["section_path"],
): Promise<string | null> {
  let parentId: string | null = null;
  let depth = 0;

  for (const [index, entry] of sectionPath.entries()) {
    const code = entry.code ?? null;
    const existing = await db.findSection({
      bookId,
      parentId,
      code,
      titleJp: entry.title_jp,
    });

    if (existing) {
      parentId = existing.id;
    } else {
      const created = await db.createSection({
        bookId,
        parentId,
        code,
        titleJp: entry.title_jp,
        titleVi: entry.title_vi ?? null,
        depth,
        sortOrder: index + 1,
      });
      parentId = created.id;
    }
    depth += 1;
  }

  return parentId;
}

/** Import một trang đã validate. Ném lỗi (Error) nếu book_slug không tồn tại. */
export async function importExamPage(
  db: ExamImportDb,
  input: ExamPageImport,
): Promise<ImportAction> {
  const bookId = await db.findBookIdBySlug(input.book_slug);
  if (!bookId) {
    throw new Error(`Không tìm thấy book_slug "${input.book_slug}" trong jp_exam_books.`);
  }

  const sectionId = await resolveSectionPath(db, bookId, input.section_path);

  const existingPage = await db.findPage({ bookId, pageNumber: input.page_number });
  const nextPageLabel = input.page_label ?? null;
  const nextSourceImagePath = input.source_image_path ?? null;
  const nextNotesVi = input.notes_vi ?? null;
  const nextReviewStatus = input.review_status ?? "draft";
  const nextBlocks = input.blocks as ContentBlock[];

  if (!existingPage) {
    await db.createPage({
      bookId,
      sectionId,
      pageNumber: input.page_number,
      pageLabel: nextPageLabel,
      sourceImagePath: nextSourceImagePath,
      notesVi: nextNotesVi,
      reviewStatus: nextReviewStatus,
      contentBlocks: nextBlocks,
    });
    return "created";
  }

  const unchanged =
    blocksEqual(existingPage.content_blocks, nextBlocks) &&
    existingPage.page_label === nextPageLabel &&
    existingPage.source_image_path === nextSourceImagePath &&
    existingPage.notes_vi === nextNotesVi &&
    existingPage.review_status === nextReviewStatus;

  if (unchanged) {
    return "skipped";
  }

  await db.updatePage(existingPage.id, {
    sectionId,
    pageLabel: nextPageLabel,
    sourceImagePath: nextSourceImagePath,
    notesVi: nextNotesVi,
    reviewStatus: nextReviewStatus,
    contentBlocks: nextBlocks,
  });
  return "updated";
}

/** Import nhiều file JSON (đã đọc thành { file, raw } - chưa validate). Không bao giờ throw. */
export async function importExamFiles(
  db: ExamImportDb,
  files: { file: string; raw: unknown }[],
): Promise<ImportReport> {
  const report: ImportReport = { created: 0, updated: 0, skipped: 0, errors: [], results: [] };

  for (const { file, raw } of files) {
    const parsed = parseExamPageImport(raw);
    if (!parsed.success) {
      const reason = parsed.error.issues
        .map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`)
        .join("; ");
      report.errors.push({ file, reason });
      continue;
    }

    const input = parsed.data;
    try {
      const action = await importExamPage(db, input);
      report.results.push({ file, action, bookSlug: input.book_slug, pageNumber: input.page_number });
      report[action] += 1;
    } catch (err) {
      report.errors.push({
        file,
        book: input.book_slug,
        page: input.page_number,
        reason: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return report;
}

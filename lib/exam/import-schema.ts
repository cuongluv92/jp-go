import { z } from "zod";

import { contentBlockSchema } from "./content-blocks";

/**
 * Một mắt xích trong section_path: từ sách -> ... -> mục chứa trang này.
 * `code` là khoá để tìm-hoặc-tạo section (idempotent). Khi `code` là
 * null/undefined thì khớp theo `title_jp` giữa các section cùng cha.
 */
export const sectionPathEntrySchema = z.object({
  code: z.string().min(1).nullable().optional(),
  title_jp: z.string().min(1),
  title_vi: z.string().nullable().optional(),
});

export type SectionPathEntry = z.infer<typeof sectionPathEntrySchema>;

export const examPageImportSchema = z.object({
  book_slug: z.string().min(1),
  section_path: z.array(sectionPathEntrySchema).default([]),
  page_number: z.number().int().positive(),
  page_label: z.string().nullable().optional(),
  source_image_path: z.string().nullable().optional(),
  notes_vi: z.string().nullable().optional(),
  review_status: z.enum(["draft", "reviewed", "needs_fix"]).optional(),
  blocks: z.array(contentBlockSchema).min(1),
});

export type ExamPageImport = z.infer<typeof examPageImportSchema>;

export function parseExamPageImport(raw: unknown) {
  return examPageImportSchema.safeParse(raw);
}

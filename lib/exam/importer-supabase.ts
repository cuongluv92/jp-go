import type { SupabaseClient } from "@supabase/supabase-js";

import type { ExamImportDb, ExamImportPageRecord, ExamImportSectionRecord } from "./importer";

/**
 * ExamImportDb thật, dùng service-role client (bypass RLS - chỉ chạy trong
 * scripts/exam-import.ts, không bao giờ import vào code chạy trên trình duyệt).
 */
export function createSupabaseExamImportDb(client: SupabaseClient): ExamImportDb {
  return {
    async findBookIdBySlug(slug) {
      const { data, error } = await client
        .from("jp_exam_books")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data?.id ?? null;
    },

    async findSection({ bookId, parentId, code, titleJp }): Promise<ExamImportSectionRecord | null> {
      let query = client.from("jp_exam_sections").select("id").eq("book_id", bookId);
      query = parentId ? query.eq("parent_id", parentId) : query.is("parent_id", null);
      query = code ? query.eq("code", code) : query.is("code", null).eq("title_jp", titleJp);

      const { data, error } = await query.maybeSingle();
      if (error) throw error;
      return data ? { id: data.id } : null;
    },

    async createSection({ bookId, parentId, code, titleJp, titleVi, depth, sortOrder }) {
      const { data, error } = await client
        .from("jp_exam_sections")
        .insert({
          book_id: bookId,
          parent_id: parentId,
          code,
          title_jp: titleJp,
          title_vi: titleVi,
          depth,
          sort_order: sortOrder,
        })
        .select("id")
        .single();
      if (error) throw error;
      return { id: data.id };
    },

    async findPage({ bookId, pageNumber }): Promise<ExamImportPageRecord | null> {
      const { data, error } = await client
        .from("jp_exam_pages")
        .select("id, content_blocks, page_label, source_image_path, notes_vi, review_status")
        .eq("book_id", bookId)
        .eq("page_number", pageNumber)
        .maybeSingle();
      if (error) throw error;
      return data as ExamImportPageRecord | null;
    },

    async createPage({
      bookId,
      sectionId,
      pageNumber,
      pageLabel,
      sourceImagePath,
      notesVi,
      reviewStatus,
      contentBlocks,
    }) {
      const { data, error } = await client
        .from("jp_exam_pages")
        .insert({
          book_id: bookId,
          section_id: sectionId,
          page_number: pageNumber,
          page_label: pageLabel,
          source_image_path: sourceImagePath,
          notes_vi: notesVi,
          review_status: reviewStatus,
          content_blocks: contentBlocks,
        })
        .select("id")
        .single();
      if (error) throw error;
      return { id: data.id };
    },

    async updatePage(pageId, { sectionId, pageLabel, sourceImagePath, notesVi, reviewStatus, contentBlocks }) {
      const { error } = await client
        .from("jp_exam_pages")
        .update({
          section_id: sectionId,
          page_label: pageLabel,
          source_image_path: sourceImagePath,
          notes_vi: notesVi,
          review_status: reviewStatus,
          content_blocks: contentBlocks,
        })
        .eq("id", pageId);
      if (error) throw error;
    },
  };
}

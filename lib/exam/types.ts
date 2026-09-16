/**
 * Kiểu dữ liệu khớp 1-1 với các bảng jp_exam_* (xem
 * supabase/migrations/20260916120000_jp_exam_2kyu_denki_schema.sql).
 */
import type { ContentBlock } from "./content-blocks";

export type ExamBookStatus = "active" | "draft" | "archived";

export interface ExamBook {
  id: string;
  slug: string;
  short_title: string;
  title_jp: string;
  title_vi: string | null;
  edition: string | null;
  year: string | null;
  publisher: string | null;
  description: string | null;
  sort_order: number;
  status: ExamBookStatus;
  created_at: string;
  updated_at: string;
}

export interface ExamSection {
  id: string;
  book_id: string;
  parent_id: string | null;
  code: string | null;
  title_jp: string;
  title_vi: string | null;
  start_page: number | null;
  end_page: number | null;
  depth: number;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

/** Section node sau khi dựng thành cây (dùng cho accordion UI). */
export interface ExamSectionNode extends ExamSection {
  children: ExamSectionNode[];
}

export type ExamPageReviewStatus = "draft" | "reviewed" | "needs_fix";

export interface ExamPage {
  id: string;
  book_id: string;
  section_id: string | null;
  page_number: number;
  page_label: string | null;
  source_image_path: string | null;
  content_blocks: ContentBlock[];
  notes_vi: string | null;
  review_status: ExamPageReviewStatus;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export type ExamTestType = "kakomon" | "mock" | "practice";
export type ExamTestStatus = "draft" | "published" | "archived";

export interface ExamTest {
  id: string;
  slug: string;
  title: string;
  test_year: string | null;
  test_type: ExamTestType;
  question_count: number | null;
  duration_minutes: number | null;
  status: ExamTestStatus;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ExamQuestionChoice {
  id: string;
  question_id: string;
  choice_label: string;
  choice_jp: string;
  is_correct: boolean;
  sort_order: number;
}

export interface ExamQuestionReference {
  id: string;
  question_id: string;
  book_id: string | null;
  section_id: string | null;
  page_id: string | null;
  note: string | null;
  sort_order: number;
  /** Đính kèm khi query kèm join, để mở modal 参考資料を見る không cần round-trip thêm. */
  book?: Pick<ExamBook, "id" | "slug" | "short_title"> | null;
  section?: Pick<ExamSection, "id" | "title_jp" | "title_vi" | "code"> | null;
  page?: ExamPage | null;
}

export interface ExamQuestion {
  id: string;
  test_id: string;
  question_number: number;
  question_jp: string;
  question_image_path: string | null;
  explanation_vi: string | null;
  is_flagged_default: boolean;
  sort_order: number;
  choices: ExamQuestionChoice[];
  references: ExamQuestionReference[];
}

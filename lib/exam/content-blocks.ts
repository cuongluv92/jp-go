/**
 * Content block schema dùng chung cho module ôn thi 2級電気工事施工管理.
 *
 * Rule bắt buộc (xem docs/EXAM_CONTENT_IMPORT.md):
 * - `jp` / `*_jp`  = CHỈ nguyên văn tiếng Nhật trong sách.
 * - `vi` / `*_vi`  = CHỈ bản dịch sát nghĩa của `jp`. Có thể null nếu chưa dịch.
 * - `explanation_vi` = CHỈ giải thích thêm, tách biệt khỏi bản dịch. Luôn được phép null.
 * - `furigana_tokens` = CHỈ cách đọc đã được kiểm tra cho đúng bề mặt Kanji trong `jp`.
 * - `bold_jp` = các cụm chữ được IN ĐẬM ngay trong nội dung sách; không dùng để tự nhấn mạnh thêm.
 * - `bold_vi` = cụm trong BẢN DỊCH tương ứng nghĩa với từng phần tử của `bold_jp` (không bắt buộc
 *   1-1 theo thứ tự/số lượng - vd 2 cụm tiếng Nhật cùng nghĩa "nối tiếp" chỉ cần 1 cụm bold_vi vì
 *   UI tự tô mọi chỗ khớp). Phải là NGUYÊN VĂN xuất hiện trong `vi` (so khớp chuỗi con), không phải
 *   diễn giải lại - nếu không chắc cụm nào tương ứng thì để trống, đừng đoán.
 *
 * Dùng chung một bộ schema Zod cho cả import (validate JSON từ ChatGPT) lẫn
 * UI render (3 cột), để không bao giờ lệch giữa hai phía.
 */
import { z } from "zod";

const nullableString = z.string().nullable();
const nullableStringArray = z.array(z.string()).nullable();

export const furiganaTokenSchema = z.object({
  surface: z.string().min(1),
  reading: z.string().min(1),
});

// Furigana / typography là metadata bổ sung: nội dung/import cũ không bắt buộc phải có.
const furiganaTokens = z.array(furiganaTokenSchema).optional();
const boldPhrases = z.array(z.string().min(1)).optional();
const inlineImageFields = {
  image_path: z.string().min(1).optional(),
  image_width: z.number().int().positive().max(600).optional(),
};

export const headingBlockSchema = z.object({
  type: z.literal("heading"),
  level: z.number().int().min(1).max(6).default(2),
  jp: z.string().min(1),
  vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
  furigana_tokens: furiganaTokens,
  bold_jp: boldPhrases,
  bold_vi: boldPhrases,
});

export const paragraphBlockSchema = z.object({
  type: z.literal("paragraph"),
  jp: z.string().min(1),
  vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
  furigana_tokens: furiganaTokens,
  bold_jp: boldPhrases,
  bold_vi: boldPhrases,
  ...inlineImageFields,
});

export const bulletListBlockSchema = z.object({
  type: z.literal("bullet_list"),
  items_jp: z.array(z.string().min(1)).min(1),
  items_vi: nullableStringArray.default(null),
  explanation_vi: nullableString.default(null),
});

export const numberedListBlockSchema = z.object({
  type: z.literal("numbered_list"),
  items_jp: z.array(z.string().min(1)).min(1),
  items_vi: nullableStringArray.default(null),
  explanation_vi: nullableString.default(null),
});

export const tableBlockSchema = z.object({
  type: z.literal("table"),
  headers_jp: z.array(z.string()).default([]),
  rows_jp: z.array(z.array(z.string())).min(1),
  headers_vi: z.array(z.string()).nullable().default(null),
  rows_vi: z.array(z.array(z.string())).nullable().default(null),
  explanation_vi: nullableString.default(null),
  ...inlineImageFields,
});

export const formulaBlockSchema = z.object({
  type: z.literal("formula"),
  content: z.string().min(1),
  vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
  ...inlineImageFields,
});

export const imageBlockSchema = z.object({
  type: z.literal("image"),
  image_path: z.string().min(1),
  caption_jp: nullableString.default(null),
  caption_vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
});

export const noteBlockSchema = z.object({
  type: z.literal("note"),
  jp: z.string().min(1),
  vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
  furigana_tokens: furiganaTokens,
  bold_jp: boldPhrases,
  bold_vi: boldPhrases,
});

export const warningBlockSchema = z.object({
  type: z.literal("warning"),
  jp: z.string().min(1),
  vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
  furigana_tokens: furiganaTokens,
  bold_jp: boldPhrases,
  bold_vi: boldPhrases,
});

export const definitionBlockSchema = z.object({
  type: z.literal("definition"),
  jp: z.string().min(1),
  vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
  furigana_tokens: furiganaTokens,
  bold_jp: boldPhrases,
  bold_vi: boldPhrases,
});

export const contentLeafBlockSchema = z.discriminatedUnion("type", [
  headingBlockSchema,
  paragraphBlockSchema,
  bulletListBlockSchema,
  numberedListBlockSchema,
  tableBlockSchema,
  formulaBlockSchema,
  imageBlockSchema,
  noteBlockSchema,
  warningBlockSchema,
  definitionBlockSchema,
]);

/**
 * Một cụm nội dung trong sách có hình đặt bên phải toàn bộ cụm
 * (ví dụ tiêu đề + đoạn giải thích + công thức + chú giải).
 * Dùng block này để giữ đúng bố cục sách, thay vì gắn ảnh vào một dòng lẻ.
 */
export const sectionGroupBlockSchema = z.object({
  type: z.literal("section_group"),
  blocks: z.array(contentLeafBlockSchema).min(1),
  image_path: z.string().min(1),
  image_width: z.number().int().positive().max(600).optional(),
  // "side": toàn bộ cụm chữ ở trái, hình ở phải.
  // "top_then_side": một số block đầu chạy full width; phần còn lại ở trái và hình ở phải.
  image_layout: z.enum(["side", "top_then_side"]).optional(),
  top_block_count: z.number().int().min(0).optional(),
  caption_jp: nullableString.default(null),
  caption_vi: nullableString.default(null),
  explanation_vi: nullableString.default(null),
});

export const contentBlockSchema = z.discriminatedUnion("type", [
  headingBlockSchema,
  paragraphBlockSchema,
  bulletListBlockSchema,
  numberedListBlockSchema,
  tableBlockSchema,
  formulaBlockSchema,
  imageBlockSchema,
  noteBlockSchema,
  warningBlockSchema,
  definitionBlockSchema,
  sectionGroupBlockSchema,
]);

export type FuriganaToken = z.infer<typeof furiganaTokenSchema>;
export type HeadingBlock = z.infer<typeof headingBlockSchema>;
export type ParagraphBlock = z.infer<typeof paragraphBlockSchema>;
export type BulletListBlock = z.infer<typeof bulletListBlockSchema>;
export type NumberedListBlock = z.infer<typeof numberedListBlockSchema>;
export type TableBlock = z.infer<typeof tableBlockSchema>;
export type FormulaBlock = z.infer<typeof formulaBlockSchema>;
export type ImageBlock = z.infer<typeof imageBlockSchema>;
export type NoteBlock = z.infer<typeof noteBlockSchema>;
export type WarningBlock = z.infer<typeof warningBlockSchema>;
export type DefinitionBlock = z.infer<typeof definitionBlockSchema>;
export type SectionGroupBlock = z.infer<typeof sectionGroupBlockSchema>;
export type ContentBlock = z.infer<typeof contentBlockSchema>;
export type ContentBlockType = ContentBlock["type"];

export const CONTENT_BLOCK_TYPES: ContentBlockType[] = [
  "heading",
  "paragraph",
  "bullet_list",
  "numbered_list",
  "table",
  "formula",
  "image",
  "note",
  "warning",
  "definition",
  "section_group",
];

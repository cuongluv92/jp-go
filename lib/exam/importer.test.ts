import { describe, expect, it } from "vitest";

import type { ContentBlock } from "./content-blocks";
import { importExamFiles, importExamPage, type ExamImportDb } from "./importer";

interface FakeSection {
  id: string;
  book_id: string;
  parent_id: string | null;
  code: string | null;
  title_jp: string;
  title_vi: string | null;
  depth: number;
  sort_order: number;
}

interface FakePage {
  id: string;
  book_id: string;
  section_id: string | null;
  page_number: number;
  content_blocks: ContentBlock[];
  page_label: string | null;
  source_image_path: string | null;
  notes_vi: string | null;
  review_status: string;
}

function createFakeDb(books: { slug: string; id: string }[]) {
  const sections: FakeSection[] = [];
  const pages: FakePage[] = [];
  let nextId = 1;
  const genId = () => `id-${nextId++}`;

  const db: ExamImportDb = {
    async findBookIdBySlug(slug) {
      return books.find((b) => b.slug === slug)?.id ?? null;
    },
    async findSection({ bookId, parentId, code, titleJp }) {
      const found = sections.find(
        (s) =>
          s.book_id === bookId &&
          s.parent_id === parentId &&
          (code ? s.code === code : s.code === null && s.title_jp === titleJp),
      );
      return found ? { id: found.id } : null;
    },
    async createSection({ bookId, parentId, code, titleJp, titleVi, depth, sortOrder }) {
      const record: FakeSection = {
        id: genId(),
        book_id: bookId,
        parent_id: parentId,
        code,
        title_jp: titleJp,
        title_vi: titleVi,
        depth,
        sort_order: sortOrder,
      };
      sections.push(record);
      return { id: record.id };
    },
    async findPage({ bookId, pageNumber }) {
      const found = pages.find((p) => p.book_id === bookId && p.page_number === pageNumber);
      return found
        ? {
            id: found.id,
            content_blocks: found.content_blocks,
            page_label: found.page_label,
            source_image_path: found.source_image_path,
            notes_vi: found.notes_vi,
            review_status: found.review_status,
          }
        : null;
    },
    async createPage(params) {
      const record: FakePage = {
        id: genId(),
        book_id: params.bookId,
        section_id: params.sectionId,
        page_number: params.pageNumber,
        content_blocks: params.contentBlocks,
        page_label: params.pageLabel,
        source_image_path: params.sourceImagePath,
        notes_vi: params.notesVi,
        review_status: params.reviewStatus,
      };
      pages.push(record);
      return { id: record.id };
    },
    async updatePage(pageId, params) {
      const record = pages.find((p) => p.id === pageId);
      if (!record) throw new Error("page not found");
      record.section_id = params.sectionId;
      record.content_blocks = params.contentBlocks;
      record.page_label = params.pageLabel;
      record.source_image_path = params.sourceImagePath;
      record.notes_vi = params.notesVi;
      record.review_status = params.reviewStatus;
    },
  };

  return { db, sections, pages };
}

const samplePayload = () => ({
  book_slug: "sekou-houki",
  section_path: [
    { code: "施工管理", title_jp: "施工管理", title_vi: "Quản lý thi công" },
    { code: "2", title_jp: "2. 工程管理", title_vi: "Quản lý tiến độ" },
  ],
  page_number: 65,
  blocks: [
    { type: "heading" as const, level: 2, jp: "2. 工程管理", vi: "2. Quản lý tiến độ", explanation_vi: null },
    {
      type: "paragraph" as const,
      jp: "工程管理とは工事が計画どおりに進むよう管理することである。",
      vi: "Quản lý tiến độ là quản lý để công trình tiến hành đúng theo kế hoạch.",
      explanation_vi: "Bao gồm việc lập và kiểm soát trình tự các công việc.",
    },
  ],
});

describe("importExamPage", () => {
  it("creates a new page and the section path on first import", async () => {
    const { db, sections, pages } = createFakeDb([{ slug: "sekou-houki", id: "book-1" }]);

    const action = await importExamPage(db, samplePayload());

    expect(action).toBe("created");
    expect(sections).toHaveLength(2);
    expect(sections[1].parent_id).toBe(sections[0].id);
    expect(pages).toHaveLength(1);
    expect(pages[0].section_id).toBe(sections[1].id);
  });

  it("reuses existing sections and is a no-op (skipped) on unchanged re-import", async () => {
    const { db, sections, pages } = createFakeDb([{ slug: "sekou-houki", id: "book-1" }]);

    await importExamPage(db, samplePayload());
    const secondAction = await importExamPage(db, samplePayload());

    expect(secondAction).toBe("skipped");
    expect(sections).toHaveLength(2);
    expect(pages).toHaveLength(1);
  });

  it("updates the same page (no duplicate) when content changes", async () => {
    const { db, pages } = createFakeDb([{ slug: "sekou-houki", id: "book-1" }]);

    await importExamPage(db, samplePayload());
    const changed = samplePayload();
    changed.blocks[1].explanation_vi = "Giải thích cập nhật.";
    const action = await importExamPage(db, changed);

    expect(action).toBe("updated");
    expect(pages).toHaveLength(1);
    expect((pages[0].content_blocks[1] as { explanation_vi: string | null }).explanation_vi).toBe(
      "Giải thích cập nhật.",
    );
  });

  it("throws a clear error when book_slug does not exist", async () => {
    const { db } = createFakeDb([]);
    await expect(importExamPage(db, samplePayload())).rejects.toThrow(/sekou-houki/);
  });
});

describe("importExamFiles", () => {
  it("reports created/updated/skipped/errors across a batch", async () => {
    const { db } = createFakeDb([{ slug: "sekou-houki", id: "book-1" }]);

    const report = await importExamFiles(db, [
      { file: "page-0065.json", raw: samplePayload() },
      { file: "page-0065-again.json", raw: samplePayload() },
      { file: "page-invalid.json", raw: { book_slug: "sekou-houki" } },
      { file: "page-unknown-book.json", raw: { ...samplePayload(), book_slug: "no-such-book", page_number: 1 } },
    ]);

    expect(report.created).toBe(1);
    expect(report.skipped).toBe(1);
    expect(report.updated).toBe(0);
    expect(report.errors).toHaveLength(2);
    expect(report.errors[0].file).toBe("page-invalid.json");
    expect(report.errors[1].file).toBe("page-unknown-book.json");
  });
});

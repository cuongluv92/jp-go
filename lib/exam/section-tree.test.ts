import { describe, expect, it } from "vitest";

import { buildSectionPageIndex, buildSectionTree } from "./section-tree";
import type { ExamSection } from "./types";

function section(overrides: Partial<ExamSection> & Pick<ExamSection, "id" | "title_jp">): ExamSection {
  return {
    book_id: "book-1",
    parent_id: null,
    code: null,
    title_vi: null,
    start_page: null,
    end_page: null,
    depth: 0,
    sort_order: 0,
    created_at: "",
    updated_at: "",
    ...overrides,
  };
}

describe("buildSectionTree", () => {
  it("nests children under their parent and sorts by sort_order", () => {
    const flat: ExamSection[] = [
      section({ id: "houki", title_jp: "法規", sort_order: 2 }),
      section({ id: "sekou", title_jp: "施工管理", sort_order: 1 }),
      section({ id: "c2", title_jp: "工程管理", parent_id: "sekou", sort_order: 2 }),
      section({ id: "c1", title_jp: "施工計画", parent_id: "sekou", sort_order: 1 }),
      section({ id: "c1-1", title_jp: "施工管理の概要", parent_id: "c1", sort_order: 1 }),
    ];

    const tree = buildSectionTree(flat);

    expect(tree.map((n) => n.id)).toEqual(["sekou", "houki"]);
    expect(tree[0].children.map((n) => n.id)).toEqual(["c1", "c2"]);
    expect(tree[0].children[0].children.map((n) => n.id)).toEqual(["c1-1"]);
  });
});

describe("buildSectionPageIndex", () => {
  it("counts pages per section and tracks the earliest page number", () => {
    const index = buildSectionPageIndex([
      { section_id: "c1", page_number: 65 },
      { section_id: "c1", page_number: 66 },
      { section_id: "c2", page_number: 70 },
      { section_id: null, page_number: 1 },
    ]);

    expect(index.get("c1")).toEqual({ count: 2, firstPageNumber: 65 });
    expect(index.get("c2")).toEqual({ count: 1, firstPageNumber: 70 });
    expect(index.has(null as unknown as string)).toBe(false);
  });
});

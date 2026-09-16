import type { ExamSection, ExamSectionNode } from "./types";

/** Dựng cây section từ danh sách phẳng (parent_id) - dùng cho accordion UI. */
export function buildSectionTree(sections: ExamSection[]): ExamSectionNode[] {
  const nodesById = new Map<string, ExamSectionNode>();
  for (const section of sections) {
    nodesById.set(section.id, { ...section, children: [] });
  }

  const roots: ExamSectionNode[] = [];
  for (const section of sections) {
    const node = nodesById.get(section.id)!;
    const parent = section.parent_id ? nodesById.get(section.parent_id) : undefined;
    if (parent) {
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  }

  const bySortOrder = (a: ExamSectionNode, b: ExamSectionNode) => a.sort_order - b.sort_order;
  const sortRecursive = (nodes: ExamSectionNode[]) => {
    nodes.sort(bySortOrder);
    for (const node of nodes) sortRecursive(node.children);
  };
  sortRecursive(roots);

  return roots;
}

/** Tìm đường dẫn (root -> node) tới section chứa page_number nằm trong [start_page, end_page]. */
export function findSectionPathContainingPage(
  tree: ExamSectionNode[],
  pageNumber: number,
): ExamSectionNode[] | null {
  for (const node of tree) {
    const inRange =
      node.start_page != null && node.end_page != null
        ? pageNumber >= node.start_page && pageNumber <= node.end_page
        : false;

    const childPath = findSectionPathContainingPage(node.children, pageNumber);
    if (childPath) return [node, ...childPath];
    if (inRange) return [node];
  }
  return null;
}

export interface SectionPageStat {
  count: number;
  firstPageNumber: number;
}

/** Gom số trang + trang đầu tiên theo section_id, để accordion biết mục nào có nội dung. */
export function buildSectionPageIndex(
  pages: { section_id: string | null; page_number: number }[],
): Map<string, SectionPageStat> {
  const index = new Map<string, SectionPageStat>();
  for (const page of pages) {
    if (!page.section_id) continue;
    const existing = index.get(page.section_id);
    if (!existing) {
      index.set(page.section_id, { count: 1, firstPageNumber: page.page_number });
    } else {
      existing.count += 1;
      existing.firstPageNumber = Math.min(existing.firstPageNumber, page.page_number);
    }
  }
  return index;
}

export function flattenSectionTree(tree: ExamSectionNode[]): ExamSection[] {
  const out: ExamSection[] = [];
  const visit = (nodes: ExamSectionNode[]) => {
    for (const node of nodes) {
      const { children, ...rest } = node;
      out.push(rest);
      visit(children);
    }
  };
  visit(tree);
  return out;
}

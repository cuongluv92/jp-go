"use client";

import Link from "next/link";
import { useState } from "react";

import type { SectionPageStat } from "@/lib/exam/section-tree";
import type { ExamSectionNode } from "@/lib/exam/types";

interface SectionAccordionProps {
  nodes: ExamSectionNode[];
  bookSlug: string;
  pageIndex: Record<string, SectionPageStat>;
}

/**
 * Cây mục lục lấy hoàn toàn từ database (parent_id, không giới hạn số cấp) -
 * KHÔNG hard-code chương/mục trong component. Click mở mục con, click lại
 * đóng lại (accordion).
 */
export function SectionAccordion({ nodes, bookSlug, pageIndex }: SectionAccordionProps) {
  return (
    <ul className="flex flex-col gap-1">
      {nodes.map((node) => (
        <SectionNode key={node.id} node={node} bookSlug={bookSlug} pageIndex={pageIndex} />
      ))}
    </ul>
  );
}

function SectionNode({
  node,
  bookSlug,
  pageIndex,
}: {
  node: ExamSectionNode;
  bookSlug: string;
  pageIndex: Record<string, SectionPageStat>;
}) {
  const [open, setOpen] = useState(node.depth === 0);
  const hasChildren = node.children.length > 0;
  const stat = pageIndex[node.id];

  return (
    <li>
      <div className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-slate-50">
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-muted transition"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <span className="w-6 shrink-0" />
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          {stat ? (
            <Link href={`/exam/${bookSlug}/page/${stat.firstPageNumber}`} className="min-w-0">
              <SectionLabel node={node} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => hasChildren && setOpen((v) => !v)}
              className="min-w-0 text-left"
              disabled={!hasChildren}
            >
              <SectionLabel node={node} muted={!hasChildren} />
            </button>
          )}
        </div>

        {stat && <span className="shrink-0 text-xs text-muted">{stat.count} trang</span>}
      </div>

      {hasChildren && open && (
        <ul className="ml-6 flex flex-col gap-1 border-l border-border pl-3">
          {node.children.map((child) => (
            <SectionNode key={child.id} node={child} bookSlug={bookSlug} pageIndex={pageIndex} />
          ))}
        </ul>
      )}
    </li>
  );
}

function SectionLabel({ node, muted }: { node: ExamSectionNode; muted?: boolean }) {
  return (
    <>
      <p className={`font-jp truncate text-sm font-medium ${muted ? "text-muted" : ""}`}>{node.title_jp}</p>
      {node.title_vi && <p className="truncate text-xs text-muted">{node.title_vi}</p>}
    </>
  );
}

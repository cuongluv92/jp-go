import { Fragment, type ReactNode } from "react";

import type { ContentBlock, FuriganaToken } from "@/lib/exam/content-blocks";
import { segmentJapaneseText } from "@/lib/japanese-text";
import { getExamSourceImageUrl } from "@/lib/exam/storage";

export interface BlockColumns {
  jp: ReactNode;
  vi: ReactNode;
  explanation: ReactNode;
}

const HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

const EmptyVi = () => <p className="text-sm italic text-muted">(chưa dịch)</p>;

function renderJapaneseText(text: string, tokens: FuriganaToken[] = [], showFurigana = false): ReactNode {
  if (!showFurigana || tokens.length === 0) return text;

  const segments = segmentJapaneseText(text, [], tokens);
  return segments.map((segment, index) =>
    segment.reading ? (
      <ruby key={`${segment.start}-${index}`}>
        {segment.text}
        <rt className="text-[0.58em] font-normal leading-none text-muted">{segment.reading}</rt>
      </ruby>
    ) : (
      <Fragment key={`${segment.start}-${index}`}>{segment.text}</Fragment>
    ),
  );
}

/**
 * Chuyển 1 content block thành 3 mảnh render riêng biệt cho 3 cột. KHÔNG bao
 * giờ trộn jp/vi/explanation_vi vào cùng một node - đúng rule bắt buộc của
 * module (xem docs/EXAM_CONTENT_IMPORT.md).
 */
export function renderBlockColumns(block: ContentBlock, showFurigana = false): BlockColumns {
  switch (block.type) {
    case "heading": {
      const Tag = HEADING_TAGS[Math.min(Math.max(block.level - 1, 0), 5)];
      return {
        jp: <Tag className="font-jp text-lg font-bold">{renderJapaneseText(block.jp, block.furigana_tokens, showFurigana)}</Tag>,
        vi: block.vi ? <Tag className="text-lg font-bold">{block.vi}</Tag> : <EmptyVi />,
        explanation: block.explanation_vi ? <p className="text-sm text-muted">{block.explanation_vi}</p> : null,
      };
    }

    case "paragraph":
    case "note":
    case "warning":
    case "definition": {
      const calloutClass: Record<string, string> = {
        note: "rounded-xl bg-sky-50 p-3 text-sky-900",
        warning: "rounded-xl bg-amber-50 p-3 text-amber-900",
        definition: "rounded-xl bg-violet-50 p-3 text-violet-900",
        paragraph: "",
      };
      const cls = calloutClass[block.type];
      return {
        jp: (
          <p className={`font-jp whitespace-pre-line leading-relaxed ${cls}`}>
            {renderJapaneseText(block.jp, block.furigana_tokens, showFurigana)}
          </p>
        ),
        vi: block.vi ? (
          <p className={`whitespace-pre-line leading-relaxed ${cls}`}>{block.vi}</p>
        ) : (
          <EmptyVi />
        ),
        explanation: block.explanation_vi ? (
          <p className="whitespace-pre-line text-sm text-muted">{block.explanation_vi}</p>
        ) : null,
      };
    }

    case "bullet_list":
    case "numbered_list": {
      const ListTag = block.type === "bullet_list" ? "ul" : "ol";
      const listClass = block.type === "bullet_list" ? "list-disc" : "list-decimal";
      return {
        jp: (
          <ListTag className={`font-jp ${listClass} space-y-1 pl-5`}>
            {block.items_jp.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ListTag>
        ),
        vi: block.items_vi ? (
          <ListTag className={`${listClass} space-y-1 pl-5`}>
            {block.items_vi.map((item, i) => (
              <li key={i}>{item ?? "(chưa dịch)"}</li>
            ))}
          </ListTag>
        ) : (
          <EmptyVi />
        ),
        explanation: block.explanation_vi ? <p className="text-sm text-muted">{block.explanation_vi}</p> : null,
      };
    }

    case "table": {
      const renderTable = (headers: string[], rows: string[][], jpStyle: boolean) => (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className={`w-full text-left text-sm ${jpStyle ? "font-jp" : ""}`}>
            {headers.length > 0 && (
              <thead className="bg-slate-50">
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} className="border-b border-border px-2 py-1.5 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="odd:bg-white even:bg-slate-50/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-border px-2 py-1.5 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      return {
        jp: renderTable(block.headers_jp, block.rows_jp, true),
        vi:
          block.rows_vi && block.rows_vi.length > 0
            ? renderTable(block.headers_vi ?? [], block.rows_vi, false)
            : <EmptyVi />,
        explanation: block.explanation_vi ? <p className="text-sm text-muted">{block.explanation_vi}</p> : null,
      };
    }

    case "formula": {
      return {
        jp: (
          <pre className="overflow-x-auto rounded-lg bg-slate-900 px-3 py-2 font-mono text-sm text-slate-50">
            {block.content}
          </pre>
        ),
        vi: block.vi ? <p className="text-sm leading-relaxed">{block.vi}</p> : null,
        explanation: block.explanation_vi ? <p className="text-sm text-muted">{block.explanation_vi}</p> : null,
      };
    }

    case "image": {
      const src = getExamSourceImageUrl(block.image_path);
      return {
        jp: (
          <figure className="space-y-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={block.caption_jp ?? "Hình minh hoạ"} className="rounded-lg border border-border" />
            {block.caption_jp && <figcaption className="font-jp text-xs text-muted">{block.caption_jp}</figcaption>}
          </figure>
        ),
        vi: block.caption_vi ? <p className="text-sm text-muted">{block.caption_vi}</p> : null,
        explanation: block.explanation_vi ? <p className="text-sm text-muted">{block.explanation_vi}</p> : null,
      };
    }

    default:
      return { jp: null, vi: null, explanation: null };
  }
}

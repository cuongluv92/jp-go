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

type TextRange = { start: number; end: number };

function collectBoldRanges(text: string, phrases: string[] = []): TextRange[] {
  const ranges: TextRange[] = [];
  for (const phrase of phrases) {
    if (!phrase) continue;
    let from = 0;
    while (from < text.length) {
      const start = text.indexOf(phrase, from);
      if (start === -1) break;
      ranges.push({ start, end: start + phrase.length });
      from = start + Math.max(phrase.length, 1);
    }
  }
  return ranges.sort((a, b) => a.start - b.start || a.end - b.end);
}

function overlapsBold(start: number, end: number, ranges: TextRange[]): boolean {
  return ranges.some((range) => range.start < end && range.end > start);
}

function renderPlainSegmentWithBold(
  text: string,
  absoluteStart: number,
  ranges: TextRange[],
  keyPrefix: string,
): ReactNode[] {
  if (!text) return [];
  const absoluteEnd = absoluteStart + text.length;
  const cuts = new Set<number>([absoluteStart, absoluteEnd]);
  for (const range of ranges) {
    if (range.start > absoluteStart && range.start < absoluteEnd) cuts.add(range.start);
    if (range.end > absoluteStart && range.end < absoluteEnd) cuts.add(range.end);
  }
  const points = [...cuts].sort((a, b) => a - b);
  return points.slice(0, -1).map((start, index) => {
    const end = points[index + 1];
    const piece = text.slice(start - absoluteStart, end - absoluteStart);
    return overlapsBold(start, end, ranges) ? (
      <strong key={`${keyPrefix}-${start}`} className="font-bold">
        {piece}
      </strong>
    ) : (
      <Fragment key={`${keyPrefix}-${start}`}>{piece}</Fragment>
    );
  });
}

function renderJapaneseText(
  text: string,
  tokens: FuriganaToken[] = [],
  showFurigana = false,
  boldPhrases: string[] = [],
): ReactNode {
  const boldRanges = collectBoldRanges(text, boldPhrases);
  const segments = showFurigana && tokens.length > 0
    ? segmentJapaneseText(text, [], tokens)
    : [{ text, start: 0, word: null, reading: undefined }];

  return segments.map((segment, index) => {
    const segmentEnd = segment.start + segment.text.length;
    if (segment.reading) {
      const ruby = (
        <ruby>
          {segment.text}
          <rt className="text-[0.58em] font-normal leading-none text-muted">{segment.reading}</rt>
        </ruby>
      );
      return overlapsBold(segment.start, segmentEnd, boldRanges) ? (
        <strong key={`${segment.start}-${index}`} className="font-bold">
          {ruby}
        </strong>
      ) : (
        <Fragment key={`${segment.start}-${index}`}>{ruby}</Fragment>
      );
    }

    return (
      <Fragment key={`${segment.start}-${index}`}>
        {renderPlainSegmentWithBold(segment.text, segment.start, boldRanges, `${segment.start}-${index}`)}
      </Fragment>
    );
  });
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
        jp: (
          <Tag className="font-jp text-lg font-bold">
            {renderJapaneseText(block.jp, block.furigana_tokens, showFurigana, block.bold_jp)}
          </Tag>
        ),
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
            {renderJapaneseText(block.jp, block.furigana_tokens, showFurigana, block.bold_jp)}
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

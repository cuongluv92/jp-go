"use client";

import { Fragment } from "react";
import { StandardColumnWorkspace } from "@/components/exam/column-workspace";
import { segmentJapaneseText } from "@/lib/japanese-text";
import type { FuriganaToken } from "@/lib/exam/content-blocks";
import { Fraction } from "../fraction";
import { diagrams } from "./diagrams";
import type { FormulaPart, FormulaLine, LessonRow } from "./lesson";

type MarkedReadings = FuriganaToken[][];

export type ReadingRow = LessonRow & { readings?: MarkedReadings; tableReadings?: MarkedReadings[][] };

const red = "font-semibold text-red-700 dark:text-red-300";

function MarkedText({ text, readings }: { text: string; readings?: FuriganaToken[][] }) {
  return text.split("**").map((part, index) => {
    const tokens = readings?.[index];
    const content = tokens?.length
      ? segmentJapaneseText(part, [], tokens).map(({ text, reading, start }) =>
          reading ? <ruby key={start}>{text}<rt className="text-[0.65em] text-muted">{reading}</rt></ruby>
            : <Fragment key={start}>{text}</Fragment>)
      : part;
    return index % 2
      ? <strong key={index} className={red}>{content}</strong>
      : <Fragment key={index}>{content}</Fragment>;
  });
}

const formula = "flex flex-wrap items-center gap-x-1.5 gap-y-2 font-serif text-lg";

function EquationParts({ parts }: { parts: FormulaPart[] }) {
  return parts.map((part, index) => typeof part === "string"
    ? <span key={index}>{part.split(/(\[\[.*?\]\])/).map((text, i) =>
        text.startsWith("[[")
          ? <span key={i} className="rounded-sm border border-red-500/60 px-0.5">{text.slice(2, -2)}</span>
          : <MarkedText key={i} text={text} />
      )}</span>
    : <span key={index} className={part.red ? red : undefined}><Fraction
        numerator={<EquationParts parts={part.fraction[0]} />}
        denominator={<EquationParts parts={part.fraction[1]} />}
      /></span>);
}

function Equations({ lines }: { lines: FormulaLine[] }) {
  return <div className="space-y-2 overflow-x-auto">{lines.map((parts, index) =>
    <p key={index} className={formula}><EquationParts parts={parts} /></p>)}</div>;
}

function Formula({ kind, japanese = false }: { japanese?: boolean; kind: NonNullable<Extract<LessonRow, { jp: string }>["formula"]> }) {
  switch (kind) {
    case "ohm":
      return (
        <div className={`space-y-2 ${red}`}>
          <p className={formula}><i>R</i> = <Fraction numerator="V" denominator="I" /> [Ω]</p>
          <p className={formula}><i>I</i> = <Fraction numerator="V" denominator="R" /> [A]</p>
          <p className={formula}><i>V</i> = <i>RI</i> [V]</p>
        </div>
      );
    case "connections":
      return (
        <div className="space-y-2">
          <p className={formula}>R₀ = <span className={red}>R₁ + R₂</span> (Ω)</p>
          <p className={formula}>R₀ = <span className={red}><Fraction numerator="R₁R₂" denominator="R₁ + R₂" /></span> (Ω)</p>
          <p className={formula}>R₀ = <Fraction numerator="R₁R₂" denominator="R₁ + R₂" /> = <Fraction numerator="R₂" denominator={<>1 + <Fraction numerator="R₂" denominator="R₁" /></>} /> (Ω)</p>
          <p className={formula}>R₀ = <span className={red}><Fraction numerator={japanese ? "大きい方の値" : "Giá trị lớn"} denominator={japanese ? "1＋抵抗値の比" : "1 + tỷ số điện trở"} /></span> (Ω)</p>
        </div>
      );
    case "parallelSolution":
      return (
        <div className="space-y-2">
          <p className={formula}>
            <Fraction numerator={<span className="rounded-sm border border-red-500/60 px-0.5">8 + 2R₄</span>} denominator={<>1 + <span className="rounded-sm border border-red-500/60 px-0.5">2</span></>} />
            = <Fraction numerator="8 + 2R₄" denominator="3" />
            = <span className="rounded-sm border border-red-500/60"><Fraction numerator="100" denominator="30" /></span>
            = <Fraction numerator="10" denominator="3" />
          </p>
          <p>8 + 2R₄ = 10</p>
          <p>2R₄ = 2</p>
          <p>R₄ = 1 Ω</p>
        </div>
      );
    case "parallelReference":
      return (
        <div className="space-y-2 overflow-x-auto">
          <p className={formula}>R₀ = <Fraction numerator="(8 + 2R₄)(4 + R₄)" denominator="(8 + 2R₄) + (4 + R₄)" /> (Ω) · (1)</p>
          <p className={formula}>R₀ = <Fraction numerator="V" denominator="I" /> = <Fraction numerator="100" denominator="30" /> = <Fraction numerator="10" denominator="3" /> (Ω) · (2)</p>
        </div>
      );
    case "drop":
      return <p className={formula}><i>Ir</i> = <i>E − V</i> = 1.6 − 1.4 = 0.2 V</p>;
    case "solution":
      return (
        <div className="space-y-2">
          <p className={formula}><i>V</i> = <i>RI</i> = 20 × 5.1 = <strong className={red}>102 V</strong></p>
          <p className={formula}><i>r</i> = <Fraction numerator="E − V" denominator="I" /> = <Fraction numerator="105 − 102" denominator="5.1" /> = <Fraction numerator="3.0" denominator="5.1" /> ≈ <strong className={red}>0.59 Ω</strong></p>
        </div>
      );
  }
}

function PrefixTable({ headers, rows, japanese = false, readings, marked = false }: {
  headers: string[];
  rows: string[][];
  japanese?: boolean;
  readings?: MarkedReadings[][];
  marked?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-surface-muted"><tr>{headers.map(header =>
          <th scope="col" key={header} className="px-2 py-1">{header}</th>)}</tr></thead>
        <tbody>{rows.map(([jp, vi, ...cells], rowIndex) =>
          <tr key={jp} className="border-t border-border">
            <th scope="row" className="px-2 py-1 font-normal">{marked ? <MarkedText text={japanese ? jp : vi} readings={readings?.[rowIndex]?.[0]} /> : japanese ? jp : vi}</th>
            {cells.map((cell, index) => <td key={index} className="whitespace-pre-line px-2 py-1">{marked ? <MarkedText text={cell} readings={readings?.[rowIndex]?.[index + 1]} /> : cell}</td>)}
          </tr>)}</tbody>
      </table>
    </div>
  );
}

export function OhmReader({ rows }: { rows: ReadingRow[] }) {
  return (
    <StandardColumnWorkspace source={(showFurigana) => rows.map((row, key) => {
      if ("diagram" in row) return { key, shared: diagrams[row.diagram] };
      const vietnameseEquations = row.equationsVi ?? row.equations;
      const Text = row.heading ? "h2" : "p";
      const style = row.heading ? "text-base font-bold" : "whitespace-pre-line text-sm leading-relaxed";
      return {
        key,
        jp: <div lang="ja" className="font-jp space-y-2"><Text className={style}><MarkedText text={row.jp} readings={showFurigana ? row.readings : undefined} /></Text>{row.formula && <Formula kind={row.formula} japanese />}{row.equations && <Equations lines={row.equations} />}{row.table && <PrefixTable headers={row.table.jp} rows={row.table.rows} japanese marked={Boolean(row.tableReadings)} readings={showFurigana ? row.tableReadings : undefined} />}</div>,
        vi: <div className="space-y-2"><Text className={style}><MarkedText text={row.vi} /></Text>{row.formula && <Formula kind={row.formula} />}{vietnameseEquations && <Equations lines={vietnameseEquations} />}{row.table && <PrefixTable headers={row.table.vi} rows={row.table.rowsVi ?? row.table.rows} marked={Boolean(row.tableReadings)} />}</div>,
        explanation: row.note && <p className="text-sm leading-relaxed">{row.note}</p>,
      };
    })} />
  );
}

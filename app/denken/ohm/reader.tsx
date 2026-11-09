"use client";

import { Fragment } from "react";
import { StandardColumnWorkspace } from "@/components/exam/column-workspace";
import { segmentJapaneseText } from "@/lib/japanese-text";
import type { FuriganaToken } from "@/lib/exam/content-blocks";
import { Fraction } from "../fraction";
import { diagrams } from "./diagrams";
import type { LessonRow } from "./lesson";

export type ReadingRow = LessonRow & { readings?: FuriganaToken[][] };

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

function Formula({ kind }: { kind: NonNullable<Extract<LessonRow, { jp: string }>["formula"]> }) {
  switch (kind) {
    case "ohm":
      return (
        <div className={`space-y-2 ${red}`}>
          <p className={formula}><i>R</i> = <Fraction numerator="V" denominator="I" /> [Ω]</p>
          <p className={formula}><i>I</i> = <Fraction numerator="V" denominator="R" /> [A]</p>
          <p className={formula}><i>V</i> = <i>RI</i> [V]</p>
        </div>
      );
    case "drop":
      return <p className={formula}><i>Ir</i> = <i>E − V</i> = 1.6 − 1.4 = 0.2 V</p>;
    case "series":
      return <p className={formula}><i>R</i><sub>0</sub> = <i>R</i><sub>1</sub> + <i>R</i><sub>2</sub> [Ω]</p>;
    case "parallel":
      return <p className={formula}><i>R</i><sub>0</sub> = <Fraction numerator={<><i>R</i><sub>1</sub><i>R</i><sub>2</sub></>} denominator={<><i>R</i><sub>1</sub> + <i>R</i><sub>2</sub></>} /> [Ω]</p>;
    case "parallel-alt":
      return (
        <p className={formula}>
          <i>R</i><sub>0</sub> = <Fraction numerator={<><i>R</i><sub>1</sub><i>R</i><sub>2</sub></>} denominator={<><i>R</i><sub>1</sub> + <i>R</i><sub>2</sub></>} />
          {" = "}<Fraction numerator={<i>R</i><sub>2</sub>} denominator={<>1 + <Fraction numerator={<i>R</i><sub>2</sub>} denominator={<i>R</i><sub>1</sub>} /></>} /> [Ω]
        </p>
      );
    case "parallel-ratio":
      return <p className={formula}><i>R</i><sub>0</sub> = <Fraction numerator="大きい方の値" denominator="1 + 抵抗値の比" /> [Ω]</p>;
    case "solution":
      return (
        <div className="space-y-2">
          <p className={formula}><i>V</i> = <i>RI</i> = 20 × 5.1 = <strong className={red}>102 V</strong></p>
          <p className={formula}><i>r</i> = <Fraction numerator="E − V" denominator="I" /> = <Fraction numerator="105 − 102" denominator="5.1" /> = <Fraction numerator="3.0" denominator="5.1" /> ≈ <strong className={red}>0.59 Ω</strong></p>
        </div>
      );
  }
}

export function OhmReader({ rows }: { rows: ReadingRow[] }) {
  return (
    <StandardColumnWorkspace source={(showFurigana) => rows.map((row, key) => {
      if ("diagram" in row) return { key, shared: diagrams[row.diagram] };
      const Text = row.heading ? "h2" : "p";
      const style = row.heading ? "text-base font-bold" : "whitespace-pre-line text-sm leading-relaxed";
      return {
        key,
        jp: <div lang="ja" className="font-jp space-y-2"><Text className={style}><MarkedText text={row.jp} readings={showFurigana ? row.readings : undefined} /></Text>{row.formula && <Formula kind={row.formula} />}</div>,
        vi: <div className="space-y-2"><Text className={style}><MarkedText text={row.vi} /></Text>{row.formula && <Formula kind={row.formula} />}</div>,
        explanation: row.note && <p className="text-sm leading-relaxed">{row.note}</p>,
      };
    })} />
  );
}

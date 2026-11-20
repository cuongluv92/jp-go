import type { ReactNode } from "react";

export function Fraction({ numerator, denominator }: { numerator: ReactNode; denominator: ReactNode }) {
  return (
    <span className="inline-grid align-middle text-center leading-snug">
      <span className="border-b border-current px-2 pb-0.5">{numerator}</span>
      <span className="px-2 pt-0.5">{denominator}</span>
    </span>
  );
}

export function renderFractions(text: string) {
  if (!text.includes("[[")) return text;
  return text.split(/(\[\[[^\[\]~]+~[^\[\]~]+\]\])/u).map((part, index) => {
    if (index % 2 === 0) return part;
    const [numerator, denominator] = part.slice(2, -2).split("~");
    return <Fraction key={index} numerator={numerator} denominator={denominator} />;
  });
}

import { Fraction } from "../fraction";

export function SolutionSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed sm:text-base">
      {steps.map((step) => (
        <li key={step}>
          {step.split(/(\[\[[^\]]+\]\])/).map((chunk, index) => {
            if (!chunk.startsWith("[[")) return chunk;
            const [numerator, denominator] = chunk.slice(2, -2).split("~");
            return <Fraction key={index} numerator={numerator} denominator={denominator} />;
          })}
        </li>
      ))}
    </ol>
  );
}

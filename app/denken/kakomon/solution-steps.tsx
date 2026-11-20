import { renderFractions } from "../fraction";

export function SolutionSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed sm:text-base">
      {steps.map((step) => (
        <li key={step}>
          {renderFractions(step)}
        </li>
      ))}
    </ol>
  );
}

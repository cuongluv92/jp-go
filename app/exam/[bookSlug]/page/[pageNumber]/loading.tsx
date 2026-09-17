import { WideContainer } from "@/components/exam/wide-container";

export default function ExamPageReaderLoading() {
  return (
    <WideContainer>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="h-4 w-64 animate-pulse rounded bg-surface-muted" />
          <div className="h-8 w-40 animate-pulse rounded-lg bg-surface-muted" />
        </div>
        <div className="flex flex-col gap-2.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-6 animate-pulse rounded bg-surface-muted"
              style={{ width: `${70 + ((i * 13) % 25)}%` }}
            />
          ))}
        </div>
      </div>
    </WideContainer>
  );
}

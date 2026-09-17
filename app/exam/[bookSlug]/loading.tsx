import { WideContainer } from "@/components/exam/wide-container";

export default function ExamBookLoading() {
  return (
    <WideContainer>
      <div className="flex flex-col gap-6 py-4">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-48 animate-pulse rounded bg-surface-muted" />
          <div className="h-7 w-56 animate-pulse rounded bg-surface-muted" />
        </div>
        <div className="h-11 w-full animate-pulse rounded-xl bg-surface-muted" />
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 animate-pulse rounded-lg bg-surface-muted" />
          ))}
        </div>
      </div>
    </WideContainer>
  );
}

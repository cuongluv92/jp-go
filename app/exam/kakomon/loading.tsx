import { WideContainer } from "@/components/exam/wide-container";

export default function ExamKakomonListLoading() {
  return (
    <WideContainer>
      <div className="flex flex-col gap-6 py-4">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-48 animate-pulse rounded bg-surface-muted" />
          <div className="h-7 w-56 animate-pulse rounded bg-surface-muted" />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl border border-border bg-surface-muted" />
          ))}
        </div>
      </div>
    </WideContainer>
  );
}

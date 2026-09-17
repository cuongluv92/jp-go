import { WideContainer } from "@/components/exam/wide-container";

export default function ExamTestLoading() {
  return (
    <WideContainer>
      <div className="flex flex-col gap-3 py-4">
        <div className="h-8 w-full animate-pulse rounded-xl bg-surface-muted" />
        <div className="h-64 w-full animate-pulse rounded-2xl bg-surface-muted" />
      </div>
    </WideContainer>
  );
}

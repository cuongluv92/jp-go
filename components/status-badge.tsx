import { LEARNING_STATUS_LABELS, type LearningStatus } from "@/lib/types";

const STYLES: Record<LearningStatus, string> = {
  chua_hoc: "border border-slate-200 bg-slate-100 text-slate-700",
  dang_hoc: "border border-amber-200 bg-amber-50 text-amber-800",
  da_nho: "border border-emerald-200 bg-emerald-50 text-emerald-800",
};

export function StatusBadge({ status }: { status: LearningStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold leading-none ${STYLES[status]}`}>
      {LEARNING_STATUS_LABELS[status]}
    </span>
  );
}

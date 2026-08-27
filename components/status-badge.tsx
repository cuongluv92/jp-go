import { LEARNING_STATUS_LABELS, type LearningStatus } from "@/lib/types";

const STYLES: Record<LearningStatus, string> = {
  chua_hoc: "bg-slate-100 text-slate-600",
  dang_hoc: "bg-amber-100 text-amber-700",
  da_nho: "bg-emerald-100 text-emerald-700",
};

export function StatusBadge({ status }: { status: LearningStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${STYLES[status]}`}>
      {LEARNING_STATUS_LABELS[status]}
    </span>
  );
}

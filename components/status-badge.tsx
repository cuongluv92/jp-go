import { LEARNING_STATUS_LABELS, type LearningStatus } from "@/lib/types";

const STYLES: Record<LearningStatus, string> = {
  chua_hoc: "border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-zinc-200",
  dang_hoc: "border border-amber-200 dark:border-amber-500/25 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300",
  da_nho: "border border-emerald-200 dark:border-emerald-500/25 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
};

export function StatusBadge({ status }: { status: LearningStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold leading-none ${STYLES[status]}`}>
      {LEARNING_STATUS_LABELS[status]}
    </span>
  );
}

import type { JlptLevel } from "@/lib/types";
import { JLPT_TONES } from "@/lib/ui/jlpt-styles";

export function JlptLevelPill({ level, count, active = false, disabled = false }: { level: JlptLevel; count?: number; active?: boolean; disabled?: boolean }) {
  const tone = JLPT_TONES[level];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${active ? tone.active : disabled ? "border-border bg-slate-50 text-muted opacity-60" : tone.idle}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-white" : tone.dot}`} aria-hidden />
      <span>{level}</span>
      {typeof count === "number" && count > 0 && <span className={active ? "text-white/80" : "opacity-70"}>{count}</span>}
    </span>
  );
}

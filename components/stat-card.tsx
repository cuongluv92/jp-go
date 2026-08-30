import type { ReactNode } from "react";

export function StatCard({ label, value, hint }: { label: string; value: ReactNode; hint?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-gradient-accent" />
      <p className="text-xs font-medium text-muted">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
      {hint ? <p className="mt-0.5 text-xs text-muted">{hint}</p> : null}
    </div>
  );
}

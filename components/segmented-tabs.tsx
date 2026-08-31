"use client";

/** Thanh tab dạng segmented control dùng chung cho /plan, /practice, /review — đồng bộ 1 kiểu giao diện xuyên suốt app. */
export function SegmentedTabs<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div
      className="grid gap-1 rounded-2xl border border-border bg-surface p-1 shadow-sm"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-xl py-2.5 text-sm font-semibold transition ${
            value === opt.value ? "bg-accent text-accent-foreground shadow-sm" : "text-muted"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

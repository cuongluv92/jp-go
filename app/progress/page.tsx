"use client";

import { StatCard } from "@/components/stat-card";
import { samplePracticeHistory } from "@/lib/data/activity";
import { computeStats } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { PART_OF_SPEECH_LABELS } from "@/lib/types";

// Không dùng toLocaleDateString: dữ liệu ICU cho tên thứ có thể khác nhau giữa
// server (Node) và trình duyệt, gây lỗi hydration mismatch.
const WEEKDAY_LABELS = ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"];

function formatDateLabel(dateKey: string): string {
  const d = new Date(`${dateKey}T00:00:00`);
  return WEEKDAY_LABELS[d.getDay()];
}

export default function ProgressPage() {
  const { words } = useVocabulary();
  const visible = words.filter((w) => !w.isHidden);
  const stats = computeStats(visible);

  const maxDailyTotal = Math.max(1, ...samplePracticeHistory.map((d) => d.total));
  const maxTopicCount = Math.max(1, ...Object.values(stats.byTopic));
  const maxPosCount = Math.max(1, ...Object.values(stats.byPartOfSpeech).map((v) => v ?? 0));

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold">Tiến độ học tập</h1>
        <p className="mt-1 text-sm text-muted">Tổng quan số từ và kết quả luyện tập.</p>
      </div>

      <section className="grid grid-cols-2 gap-3">
        <StatCard label="Từ đã học" value={stats.learned + stats.learning} hint={`/${stats.total} từ`} />
        <StatCard label="Từ đã nhớ" value={stats.learned} />
        <StatCard label="Cần ôn" value={stats.dueToday} />
        <StatCard label="Chưa bắt đầu" value={stats.notStarted} />
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold">Kết quả luyện tập 7 ngày qua</h2>
        <div className="flex items-end justify-between gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {samplePracticeHistory.map((day) => {
            const heightPct = day.total === 0 ? 4 : Math.max(6, (day.total / maxDailyTotal) * 100);
            const accuracyPct = day.total === 0 ? 0 : Math.round((day.correct / day.total) * 100);
            return (
              <div key={day.date} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px] text-muted">{day.total > 0 ? `${accuracyPct}%` : ""}</span>
                <div className="flex h-24 w-full items-end">
                  <div
                    className="w-full rounded-t-md bg-accent"
                    style={{ height: `${heightPct}%`, opacity: day.total === 0 ? 0.15 : 1 }}
                  />
                </div>
                <span className="text-[10px] font-medium capitalize text-muted">{formatDateLabel(day.date)}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold">Theo chủ đề</h2>
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {Object.entries(stats.byTopic).map(([topic, count]) => (
            <BarRow key={topic} label={topic} count={count} max={maxTopicCount} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold">Theo loại từ</h2>
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {Object.entries(stats.byPartOfSpeech).map(([pos, count]) => (
            <BarRow
              key={pos}
              label={PART_OF_SPEECH_LABELS[pos as keyof typeof PART_OF_SPEECH_LABELS]}
              count={count ?? 0}
              max={maxPosCount}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function BarRow({ label, count, max }: { label: string; count: number; max: number }) {
  const pct = Math.max(4, (count / max) * 100);
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-muted">{label}</span>
        <span className="font-medium">{count}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

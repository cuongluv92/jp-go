"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { getCatalogQualityStats, type CatalogQualityStats } from "@/lib/data/catalog-quality-service";
import { analyzeVocabularyQuality } from "@/lib/data/content-quality";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";

function Ratio({ value, total }: { value: number; total: number }) {
  const good = total > 0 && value === total;
  return <span className={good ? "font-semibold text-emerald-700" : total === 0 ? "text-muted" : "font-semibold text-amber-700"}>{value}/{total}</span>;
}

export function ContentQualityDashboard() {
  const { words, examples } = useVocabulary();
  const report = useMemo(() => analyzeVocabularyQuality(words, examples), [words, examples]);
  const [catalog, setCatalog] = useState<CatalogQualityStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    void getCatalogQualityStats(createClient())
      .then((result) => {
        if (!cancelled) setCatalog(result);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="flex flex-col gap-3">
      <div>
        <h2 className="text-sm font-semibold">Kiểm định chất lượng nội dung</h2>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Đếm trực tiếp từ dữ liệu đang chạy. Mục trùng chỉ được gắn cờ để xem xét, không tự xóa vì một từ có thể có nhiều nghĩa hợp lệ.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Metric label="Từ đang có" value={report.totalWords} tone="neutral" />
        <Metric label="Đủ 3 loại ví dụ" value={report.completeExampleSets} tone={report.completeExampleSets === report.totalWords ? "good" : "warn"} />
        <Metric label="Thiếu ghi chú dùng" value={report.missingUsageNotes} tone={report.missingUsageNotes === 0 ? "good" : "warn"} />
        <Metric label="Chưa phân loại" value={report.unclassified} tone={report.unclassified === 0 ? "good" : "warn"} />
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-surface">
        <table className="w-full min-w-[520px] text-xs">
          <thead className="bg-slate-50 text-left text-muted">
            <tr>
              <th className="px-3 py-2">Cấp</th>
              <th className="px-3 py-2">Từ</th>
              <th className="px-3 py-2">Đủ ví dụ</th>
              <th className="px-3 py-2">Thiếu cách dùng</th>
              <th className="px-3 py-2">Chưa phân loại</th>
            </tr>
          </thead>
          <tbody>
            {report.levels.map((row) => (
              <tr key={row.level} className="border-t border-border">
                <td className="px-3 py-2 font-semibold">{row.level}</td>
                <td className="px-3 py-2">{row.words}</td>
                <td className="px-3 py-2"><Ratio value={row.completeExampleSets} total={row.words} /></td>
                <td className="px-3 py-2">{row.missingUsageNotes}</td>
                <td className="px-3 py-2">{row.unclassified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {catalog ? (
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full min-w-[620px] text-xs">
            <thead className="bg-slate-50 text-left text-muted">
              <tr>
                <th className="px-3 py-2">Cấp</th>
                <th className="px-3 py-2">Ngữ pháp</th>
                <th className="px-3 py-2">Đủ 3 ngữ cảnh</th>
                <th className="px-3 py-2">Có bài tập</th>
                <th className="px-3 py-2">Kanji</th>
                <th className="px-3 py-2">Đủ bộ/nét</th>
                <th className="px-3 py-2">Có bài tập</th>
              </tr>
            </thead>
            <tbody>
              {catalog.levels.map((row) => (
                <tr key={row.level} className="border-t border-border">
                  <td className="px-3 py-2 font-semibold">{row.level}</td>
                  <td className="px-3 py-2">{row.grammar}</td>
                  <td className="px-3 py-2"><Ratio value={row.grammarCompleteExamples} total={row.grammar} /></td>
                  <td className="px-3 py-2"><Ratio value={row.grammarWithQuestions} total={row.grammar} /></td>
                  <td className="px-3 py-2">{row.kanji}</td>
                  <td className="px-3 py-2"><Ratio value={row.kanjiCompleteMetadata} total={row.kanji} /></td>
                  <td className="px-3 py-2"><Ratio value={row.kanjiWithQuestions} total={row.kanji} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">{error ? "Không tải được thống kê Kanji/Ngữ pháp." : "Đang phân tích Kanji và Ngữ pháp..."}</p>
      )}

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
        <p className="font-semibold">Những nhóm cần xử lý tiếp bằng nguồn chuẩn</p>
        <p className="mt-1">{report.incompleteExampleWordIds.length} từ chưa đủ bộ ví dụ đề thi/đời thường/công việc; {report.duplicateEntries.length} nhóm mục từ trùng; {report.repeatedExamples.length} câu ví dụ lặp giữa nhiều từ.</p>
        {catalog && <p>{catalog.grammarNeedsReview} mẫu ngữ pháp và {catalog.kanjiNeedsReview} Kanji đang có nội dung gắn cờ cần duyệt; {catalog.repeatedGrammarExamples} câu ngữ pháp lặp giữa nhiều mẫu.</p>}
        <p className="mt-1">Các số này là lỗi/thiếu dữ liệu có thể đếm được, không phải kết luận rằng mọi câu còn lại đã tự nhiên như người bản xứ.</p>
      </div>

      {report.duplicateEntries.length > 0 && (
        <details className="rounded-xl border border-border bg-surface p-3 text-xs">
          <summary className="cursor-pointer font-semibold">Xem mẫu mục từ cần kiểm tra ({report.duplicateEntries.length})</summary>
          <ul className="mt-2 flex flex-col gap-1 text-muted">
            {report.duplicateEntries.slice(0, 12).map((entry) => (
              <li key={entry.label}>
                <Link href={`/vocabulary/${entry.ids[0]}`} className="font-jp text-accent">{entry.label}</Link> · {entry.ids.length} mục
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}

function Metric({ label, value, tone }: { label: string; value: number; tone: "neutral" | "good" | "warn" }) {
  const style = tone === "good" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : tone === "warn" ? "border-amber-200 bg-amber-50 text-amber-900" : "border-border bg-surface";
  return (
    <div className={`rounded-xl border p-3 ${style}`}>
      <p className="text-xl font-bold">{value.toLocaleString("vi-VN")}</p>
      <p className="mt-0.5 text-[11px]">{label}</p>
    </div>
  );
}

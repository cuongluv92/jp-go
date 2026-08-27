"use client";

import { useMemo, useState } from "react";

import {
  findDuplicatesAgainstExisting,
  findDuplicatesWithinRows,
  validateExcelRow,
} from "@/lib/data/excel-import";
import { sampleImportRows } from "@/lib/data/sample-import-rows";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import {
  JLPT_LEVELS,
  PART_OF_SPEECH_LABELS,
  type ExcelVocabularyRow,
  type JlptLevel,
  type PartOfSpeech,
} from "@/lib/types";

type RowStatus = "hop_le" | "thieu_du_lieu" | "trung_trong_file" | "trung_kho_tu_vung";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-8 pb-6">
      <div>
        <h1 className="text-xl font-bold">Quản lý dữ liệu</h1>
        <p className="mt-1 text-sm text-muted">
          Khu vực quản trị — chuẩn bị cho việc nhập file Excel từ vựng. Các thao tác dưới đây hiện chỉ chạy trên dữ
          liệu mẫu trong phiên làm việc này, chưa lưu vào cơ sở dữ liệu thật.
        </p>
      </div>

      <ImportPreviewSection />
      <ManageWordsSection />
      <AddWordSection />
    </div>
  );
}

function ImportPreviewSection() {
  const { words } = useVocabulary();
  const [rows, setRows] = useState<ExcelVocabularyRow[] | null>(null);

  const analysis = useMemo(() => {
    if (!rows) return null;

    const duplicateKeysInFile = new Set(
      findDuplicatesWithinRows(rows).map((d) => `${d.word}__${d.reading}`),
    );
    const duplicateAgainstExisting = new Set(
      findDuplicatesAgainstExisting(rows, words).map((r) => `${r["Từ vựng"].trim()}__${r["Cách đọc"].trim()}`),
    );

    return rows.map((row) => {
      const validation = validateExcelRow(row);
      const key = `${row["Từ vựng"].trim()}__${row["Cách đọc"].trim()}`;
      let status: RowStatus = "hop_le";
      if (validation.missingColumns.length > 0) status = "thieu_du_lieu";
      else if (duplicateAgainstExisting.has(key)) status = "trung_kho_tu_vung";
      else if (duplicateKeysInFile.has(key)) status = "trung_trong_file";

      return { row, validation, status };
    });
  }, [rows, words]);

  const validCount = analysis?.filter((a) => a.status === "hop_le").length ?? 0;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">1. Nhập file Excel</h2>
      <div className="rounded-2xl border border-dashed border-border bg-surface p-4 text-sm text-muted">
        <p>
          Định dạng cột phải khớp với 16 cột trong file Excel từ vựng (xem <code>lib/types.ts</code>). Chức năng đọc
          file .xlsx thật sẽ được nối vào đây khi file mẫu hoàn thiện.
        </p>
        <label className="mt-3 flex cursor-not-allowed items-center justify-center rounded-xl border border-border bg-slate-50 px-4 py-3 text-xs text-muted">
          <input type="file" accept=".xlsx,.csv" disabled className="hidden" />
          📄 Chọn file Excel (sẽ mở khi có dữ liệu thật)
        </label>
        <button
          type="button"
          onClick={() => setRows(sampleImportRows)}
          className="mt-3 w-full rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground"
        >
          Xem trước với dữ liệu mẫu
        </button>
      </div>

      {analysis && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-muted">
            {analysis.length} dòng · {validCount} dòng hợp lệ · {analysis.length - validCount} dòng cần kiểm tra
          </p>
          <div className="-mx-4 overflow-x-auto px-4">
            <table className="w-full min-w-[520px] border-separate border-spacing-y-2 text-sm">
              <thead>
                <tr className="text-left text-xs text-muted">
                  <th className="pb-1 pr-2">Từ vựng</th>
                  <th className="pb-1 pr-2">Cách đọc</th>
                  <th className="pb-1 pr-2">Nghĩa</th>
                  <th className="pb-1">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {analysis.map(({ row, validation, status }, i) => (
                  <tr key={i} className="rounded-xl bg-surface shadow-sm">
                    <td className="font-jp rounded-l-xl border-y border-l border-border px-2 py-2">
                      {row["Từ vựng"] || "—"}
                    </td>
                    <td className="border-y border-border px-2 py-2">{row["Cách đọc"] || "—"}</td>
                    <td className="border-y border-border px-2 py-2">{row["Nghĩa tiếng Việt"] || "—"}</td>
                    <td className="rounded-r-xl border-y border-r border-border px-2 py-2">
                      <RowStatusBadge status={status} missing={validation.missingColumns} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            disabled
            title="Chưa kích hoạt ở giai đoạn này"
            className="w-full cursor-not-allowed rounded-xl border border-border py-2.5 text-sm font-medium text-muted"
          >
            Nhập {validCount} từ hợp lệ vào kho từ vựng (chưa bật ở giai đoạn này)
          </button>
        </div>
      )}
    </section>
  );
}

function RowStatusBadge({ status, missing }: { status: RowStatus; missing: string[] }) {
  if (status === "hop_le") {
    return <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">Sẵn sàng</span>;
  }
  if (status === "thieu_du_lieu") {
    return (
      <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs text-rose-700" title={missing.join(", ")}>
        Thiếu {missing.length} cột
      </span>
    );
  }
  if (status === "trung_kho_tu_vung") {
    return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">Trùng kho từ vựng</span>;
  }
  return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">Trùng trong file</span>;
}

function ManageWordsSection() {
  const { words, setHidden } = useVocabulary();

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">2. Từ hiện có ({words.length})</h2>
      <ul className="flex flex-col gap-2">
        {words.map((word) => (
          <li
            key={word.id}
            className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-2.5 shadow-sm"
          >
            <div className={word.isHidden ? "opacity-40" : ""}>
              <p className="font-jp text-sm font-semibold">{word.word}</p>
              <p className="text-xs text-muted">
                {word.reading} · {word.meaning}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setHidden(word.id, !word.isHidden)}
              className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-muted"
            >
              {word.isHidden ? "Hiện lại" : "Ẩn"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AddWordSection() {
  const { addWord } = useVocabulary();
  const [form, setForm] = useState({
    word: "",
    reading: "",
    meaning: "",
    level: "N5" as JlptLevel,
    topic: "",
    partOfSpeech: "danh_tu" as PartOfSpeech,
  });
  const [justAdded, setJustAdded] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.word.trim() || !form.reading.trim() || !form.meaning.trim()) return;

    addWord({
      id: `w-manual-${Date.now()}`,
      word: form.word.trim(),
      reading: form.reading.trim(),
      meaning: form.meaning.trim(),
      partOfSpeech: form.partOfSpeech,
      level: form.level,
      topic: form.topic.trim() || "Khác",
      examples: {
        exam: { japanese: "", translation: "" },
        daily: { japanese: "", translation: "" },
        work: { japanese: "", translation: "" },
      },
      usage: {
        structure: "",
        particles: "",
        precedingElements: "",
        followingElements: "",
        conjugation: "",
        notes: "",
      },
      progress: {
        status: "chua_hoc",
        isFavorite: false,
        timesCorrect: 0,
        timesWrong: 0,
        lastReviewedAt: null,
        nextReviewAt: null,
        intervalDays: 1,
        easeFactor: 2.5,
        repetitions: 0,
      },
    });

    setForm({ word: "", reading: "", meaning: "", level: "N5", topic: "", partOfSpeech: "danh_tu" });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">3. Thêm từ mới (demo)</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <input
            required
            placeholder="Từ vựng"
            value={form.word}
            onChange={(e) => setForm((f) => ({ ...f, word: e.target.value }))}
            className="font-jp rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <input
            required
            placeholder="Cách đọc"
            value={form.reading}
            onChange={(e) => setForm((f) => ({ ...f, reading: e.target.value }))}
            className="rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>
        <input
          required
          placeholder="Nghĩa tiếng Việt"
          value={form.meaning}
          onChange={(e) => setForm((f) => ({ ...f, meaning: e.target.value }))}
          className="rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <div className="grid grid-cols-3 gap-2">
          <select
            value={form.partOfSpeech}
            onChange={(e) => setForm((f) => ({ ...f, partOfSpeech: e.target.value as PartOfSpeech }))}
            className="rounded-lg border border-border px-2 py-2 text-xs"
          >
            {Object.entries(PART_OF_SPEECH_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select
            value={form.level}
            onChange={(e) => setForm((f) => ({ ...f, level: e.target.value as JlptLevel }))}
            className="rounded-lg border border-border px-2 py-2 text-xs"
          >
            {JLPT_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <input
            placeholder="Chủ đề"
            value={form.topic}
            onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
            className="rounded-lg border border-border px-2 py-2 text-xs outline-none focus:border-accent"
          />
        </div>
        <button type="submit" className="mt-1 rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground">
          {justAdded ? "Đã thêm ✓" : "Thêm vào kho từ vựng (demo)"}
        </button>
      </form>
    </section>
  );
}

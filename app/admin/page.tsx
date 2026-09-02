"use client";

import { useMemo, useState } from "react";

import { ContentQualityDashboard } from "@/components/content-quality-dashboard";
import {
  exampleRowToExample,
  findDuplicateIdsWithinRows,
  parseVocabWorkbookFile,
  validateVocabRow,
  vocabRowToWord,
} from "@/lib/data/excel-import";
import { buildVocabularyWorkbook, downloadBlob } from "@/lib/data/excel-export";
import { sampleImportExampleRows, sampleImportRows } from "@/lib/data/sample-import-rows";
import { listAllVocabQuestions } from "@/lib/data/vocab-content-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import {
  JLPT_LEVELS,
  PART_OF_SPEECH_LABELS,
  type ExampleExcelRow,
  type JlptLevel,
  type PartOfSpeech,
  type VocabExcelRow,
} from "@/lib/types";

type RowAction = "import" | "update" | "skip";

interface AnalyzedRow {
  row: VocabExcelRow;
  errors: string[];
  warnings: string[];
  isDuplicateInFile: boolean;
  isDuplicateInStore: boolean;
  action: RowAction;
}

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-8 pb-6">
      <div>
        <h1 className="text-xl font-bold">Quản lý dữ liệu</h1>
        <p className="mt-1 text-sm text-muted">
          Nhập/xuất dữ liệu theo đúng schema VOCAB (18 cột) dùng trong app. File nguồn 1800 từ (chỉ có từ + nghĩa)
          chưa đủ các cột này nên chưa nạp vào đây — cần bổ sung cách đọc, loại từ, ví dụ... trước.
        </p>
      </div>

      <ContentQualityDashboard />
      <ImportSection />
      <ExportSection />
      <ManageWordsSection />
      <AddWordSection />
    </div>
  );
}

function analyzeRows(rows: VocabExcelRow[], existingIds: Set<string>): AnalyzedRow[] {
  const duplicateIdsInFile = new Set(findDuplicateIdsWithinRows(rows).map((d) => d.id));

  return rows.map((row) => {
    const { errors, warnings } = validateVocabRow(row);
    const isDuplicateInFile = duplicateIdsInFile.has(row.id.trim());
    const isDuplicateInStore = existingIds.has(row.id.trim());

    let action: RowAction = "import";
    if (errors.length > 0 || isDuplicateInFile) action = "skip";
    else if (isDuplicateInStore) action = "skip"; // mặc định bỏ qua, người dùng tự chọn "Cập nhật" nếu muốn

    return { row, errors, warnings, isDuplicateInFile, isDuplicateInStore, action };
  });
}

function ImportSection() {
  const { words, addWord, updateWord, upsertExamples } = useVocabulary();
  const [rows, setRows] = useState<VocabExcelRow[] | null>(null);
  const [exampleRows, setExampleRows] = useState<ExampleExcelRow[]>([]);
  const [actions, setActions] = useState<Record<number, RowAction>>({});
  const [fileName, setFileName] = useState<string | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);
  const [importedCount, setImportedCount] = useState<number | null>(null);

  const existingIds = useMemo(() => new Set(words.map((w) => w.id)), [words]);

  const analyzed = useMemo(() => {
    if (!rows) return null;
    return analyzeRows(rows, existingIds).map((a, i) => ({ ...a, action: actions[i] ?? a.action }));
  }, [rows, existingIds, actions]);

  function loadRows(newRows: VocabExcelRow[], newExampleRows: ExampleExcelRow[], name: string) {
    setRows(newRows);
    setExampleRows(newExampleRows);
    setFileName(name);
    setParseError(null);
    setImportedCount(null);
    setActions({});
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const { rows: parsedRows, exampleRows: parsedExampleRows } = await parseVocabWorkbookFile(file);
      if (parsedRows.length === 0) {
        setParseError('Không đọc được dòng dữ liệu nào — kiểm tra sheet "VOCAB" và dòng tiêu đề cột.');
        return;
      }
      loadRows(parsedRows, parsedExampleRows, file.name);
    } catch {
      setParseError("Không đọc được file — hãy chắc chắn đây là file .xlsx hợp lệ.");
    }
    e.target.value = "";
  }

  function setAction(index: number, action: RowAction) {
    setActions((prev) => ({ ...prev, [index]: action }));
  }

  function commitImport() {
    if (!analyzed) return;
    let count = 0;
    for (const item of analyzed) {
      if (item.errors.length > 0) continue;
      if (item.action === "import" || item.action === "update") {
        const id = item.row.id.trim();
        if (item.action === "import") addWord(vocabRowToWord(item.row));
        else updateWord(id, vocabRowToWord(item.row));

        const wordExamples = exampleRows.filter((r) => r.vocab_id.trim() === id).map(exampleRowToExample);
        if (wordExamples.length > 0) upsertExamples(wordExamples);

        count += 1;
      }
    }
    setImportedCount(count);
  }

  const importableCount = analyzed?.filter((a) => a.errors.length === 0 && a.action !== "skip").length ?? 0;
  const errorCount = analyzed?.filter((a) => a.errors.length > 0).length ?? 0;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">1. Nhập file Excel (sheet VOCAB)</h2>
      <div className="rounded-2xl border border-dashed border-border bg-surface p-4 text-sm text-muted">
        <p>
          File phải có sheet tên <code>VOCAB</code> với đúng 18 cột (xem <code>lib/types.ts</code> —{" "}
          <code>VOCAB_COLUMNS</code>). Cột danh sách (particle_patterns, usage_patterns, collocations) nối bằng{" "}
          <code>|</code>.
        </p>
        <label className="mt-3 flex cursor-pointer items-center justify-center rounded-xl border border-border bg-slate-50 px-4 py-3 text-xs font-medium text-foreground hover:bg-slate-100">
          <input type="file" accept=".xlsx" onChange={handleFileChange} className="hidden" />
          📄 Chọn file Excel (.xlsx)
        </label>
        <button
          type="button"
          onClick={() => loadRows(sampleImportRows, sampleImportExampleRows, "dữ liệu mẫu")}
          className="mt-2 w-full rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground"
        >
          Hoặc xem trước với dữ liệu mẫu
        </button>
        {parseError && <p className="mt-2 text-rose-600">{parseError}</p>}
      </div>

      {analyzed && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-muted">
            {fileName} · {analyzed.length} dòng · {importableCount} sẽ nhập · {errorCount} lỗi cần sửa
          </p>
          <div className="-mx-4 overflow-x-auto px-4">
            <table className="w-full min-w-[640px] border-separate border-spacing-y-2 text-sm">
              <thead>
                <tr className="text-left text-xs text-muted">
                  <th className="pb-1 pr-2">ID</th>
                  <th className="pb-1 pr-2">Từ vựng</th>
                  <th className="pb-1 pr-2">Nghĩa</th>
                  <th className="pb-1 pr-2">Trạng thái</th>
                  <th className="pb-1">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {analyzed.map((item, i) => (
                  <tr key={i} className="rounded-xl bg-surface shadow-sm">
                    <td className="rounded-l-xl border-y border-l border-border px-2 py-2 text-xs">{item.row.id || "—"}</td>
                    <td className="font-jp border-y border-border px-2 py-2">{item.row.word || "—"}</td>
                    <td className="border-y border-border px-2 py-2">{item.row.meaning_vi || "—"}</td>
                    <td className="border-y border-border px-2 py-2">
                      <RowStatus item={item} />
                    </td>
                    <td className="rounded-r-xl border-y border-r border-border px-2 py-2">
                      {item.errors.length === 0 && (item.isDuplicateInStore || item.isDuplicateInFile) ? (
                        <select
                          value={item.action}
                          disabled={item.isDuplicateInFile}
                          onChange={(e) => setAction(i, e.target.value as RowAction)}
                          className="rounded-lg border border-border px-2 py-1 text-xs"
                        >
                          <option value="skip">Bỏ qua</option>
                          <option value="update">Cập nhật</option>
                        </select>
                      ) : (
                        <span className="text-xs text-muted">{item.errors.length > 0 ? "—" : "Thêm mới"}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            onClick={commitImport}
            disabled={importableCount === 0}
            className="w-full rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground disabled:opacity-40"
          >
            Nhập {importableCount} dòng vào kho từ vựng
          </button>
          {importedCount !== null && (
            <p className="text-center text-xs text-emerald-700">Đã nhập/cập nhật {importedCount} từ.</p>
          )}
        </div>
      )}
    </section>
  );
}

function RowStatus({ item }: { item: AnalyzedRow }) {
  if (item.errors.length > 0) {
    return (
      <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs text-rose-700" title={item.errors.join("; ")}>
        Lỗi ({item.errors.length})
      </span>
    );
  }
  if (item.isDuplicateInFile) {
    return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">Trùng trong file</span>;
  }
  if (item.isDuplicateInStore) {
    return <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">Trùng ID đã có</span>;
  }
  if (item.warnings.length > 0) {
    return (
      <span
        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
        title={item.warnings.join("; ")}
      >
        Sẵn sàng (thiếu {item.warnings.length} cột phụ)
      </span>
    );
  }
  return <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">Sẵn sàng</span>;
}

function ExportSection() {
  const { words, examples } = useVocabulary();
  const [isExporting, setIsExporting] = useState(false);

  async function handleExport() {
    setIsExporting(true);
    try {
      const supabase = createClient();
      const vocabQuestions = await listAllVocabQuestions(supabase);
      const blob = await buildVocabularyWorkbook(words, examples, vocabQuestions);
      downloadBlob(blob, `jp-go-vocabulary-${new Date().toISOString().slice(0, 10)}.xlsx`);
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">2. Xuất Excel</h2>
      <div className="rounded-2xl border border-border bg-surface p-4 text-sm text-muted shadow-sm">
        <p>Xuất toàn bộ dữ liệu hiện tại thành 1 file .xlsx với 4 sheet: VOCAB, EXAMPLES, CONJUGATIONS, QUESTIONS.</p>
        <button
          type="button"
          onClick={handleExport}
          disabled={isExporting}
          className="mt-3 w-full rounded-xl border border-accent py-2.5 text-sm font-semibold text-accent disabled:opacity-50"
        >
          {isExporting ? "Đang tạo file..." : `⬇ Xuất ${words.length} từ ra Excel`}
        </button>
      </div>
    </section>
  );
}

function ManageWordsSection() {
  const { words, setHidden } = useVocabulary();

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">3. Từ hiện có ({words.length})</h2>
      <ul className="flex flex-col gap-2">
        {words.map((word) => (
          <li
            key={word.id}
            className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-2.5 shadow-sm"
          >
            <div className={word.isHidden ? "opacity-40" : ""}>
              <p className="font-jp text-sm font-semibold">{word.word}</p>
              <p className="text-xs text-muted">
                {word.reading} · {word.meaningVi}
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

function slugify(word: string): string {
  return (
    word
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .toLowerCase()
      .replace(/^-+|-+$/g, "") || `w-${Date.now()}`
  );
}

function AddWordSection() {
  const { addWord } = useVocabulary();
  const [form, setForm] = useState({
    word: "",
    reading: "",
    meaningVi: "",
    level: "N5" as JlptLevel,
    partOfSpeech: "noun" as PartOfSpeech,
  });
  const [justAdded, setJustAdded] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.word.trim() || !form.reading.trim() || !form.meaningVi.trim()) return;

    addWord({
      id: `${slugify(form.word)}-${Date.now().toString(36)}`,
      word: form.word.trim(),
      kanji: form.word.trim(),
      reading: form.reading.trim(),
      meaningVi: form.meaningVi.trim(),
      partOfSpeech: form.partOfSpeech,
      verbClass: null,
      transitivity: null,
      particlePatterns: [],
      usagePatterns: [],
      collocations: [],
      register: null,
      usageNote: "",
      commonMistake: "",
      similarWords: "",
      naturalnessNote: "",
      jlpt: form.level,
      // Thêm nhanh qua form nên luôn cần người kiểm tra lại các trường còn thiếu.
      needsReview: true,
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

    setForm({ word: "", reading: "", meaningVi: "", level: "N5", partOfSpeech: "noun" });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">4. Thêm từ mới nhanh (demo)</h2>
      <p className="text-xs text-muted">
        Chỉ nhập nhanh thông tin cơ bản — từ thêm qua đây sẽ được đánh dấu &quot;cần kiểm tra lại&quot; vì còn thiếu
        ví dụ, cách dùng...
      </p>
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
          value={form.meaningVi}
          onChange={(e) => setForm((f) => ({ ...f, meaningVi: e.target.value }))}
          className="rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <div className="grid grid-cols-2 gap-2">
          <select
            value={form.partOfSpeech}
            onChange={(e) => setForm((f) => ({ ...f, partOfSpeech: e.target.value as PartOfSpeech }))}
            className="rounded-lg border border-border px-2 py-2 text-xs"
          >
            {Object.entries(PART_OF_SPEECH_LABELS)
              .filter(([value]) => value !== "unclassified")
              .map(([value, label]) => (
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
        </div>
        <button type="submit" className="mt-1 rounded-xl bg-accent py-2.5 text-sm font-semibold text-accent-foreground">
          {justAdded ? "Đã thêm ✓" : "Thêm vào kho từ vựng"}
        </button>
      </form>
    </section>
  );
}

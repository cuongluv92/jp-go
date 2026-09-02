"use client";

import { useEffect, useState, type FormEvent } from "react";

import { JapaneseSentence } from "@/components/japanese-sentence";
import { PersonalExampleExercise } from "@/components/personal-example-exercise";
import {
  PERSONAL_EXAMPLE_TYPE_LABELS,
  createPersonalExample,
  deletePersonalExample,
  listPersonalExamples,
  updatePersonalExample,
  validatePersonalExampleInput,
  type PersonalExampleInput,
  type PersonalExampleRow,
  type PersonalExampleTarget,
  type PersonalExampleType,
} from "@/lib/data/personal-example-service";
import { createClient } from "@/lib/supabase/client";

const EMPTY_INPUT: PersonalExampleInput = {
  exampleType: "daily",
  sentenceJp: "",
  sentenceVi: "",
  highlightText: "",
  note: "",
};

export function PersonalExamples({
  targetType,
  targetId,
  focusText = "",
}: {
  targetType: PersonalExampleTarget;
  targetId: string;
  focusText?: string;
}) {
  const [userId, setUserId] = useState<string | null>(null);
  const [examples, setExamples] = useState<PersonalExampleRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [input, setInput] = useState<PersonalExampleInput>(EMPTY_INPUT);
  const [saving, setSaving] = useState(false);
  const [exerciseId, setExerciseId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user || cancelled) return;
        const rows = await listPersonalExamples(supabase, user.id, targetType, targetId);
        if (cancelled) return;
        setUserId(user.id);
        setExamples(rows);
      } catch (loadError) {
        if (!cancelled) setError(readableError(loadError));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [targetId, targetType]);

  function closeForm() {
    setFormOpen(false);
    setEditingId(null);
    setInput(EMPTY_INPUT);
    setError(null);
  }

  function startEdit(example: PersonalExampleRow) {
    setEditingId(example.id);
    setInput({
      exampleType: example.example_type,
      sentenceJp: example.sentence_jp,
      sentenceVi: example.sentence_vi,
      highlightText: example.highlight_text,
      note: example.note,
    });
    setFormOpen(true);
    setError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId) return;
    const validationError = validatePersonalExampleInput(input);
    if (validationError) {
      setError(validationError);
      return;
    }

    setSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      if (editingId) {
        const updated = await updatePersonalExample(supabase, userId, editingId, input);
        setExamples((current) => current.map((example) => (example.id === updated.id ? updated : example)));
      } else {
        const created = await createPersonalExample(supabase, userId, targetType, targetId, input);
        setExamples((current) => [created, ...current]);
      }
      closeForm();
    } catch (saveError) {
      setError(readableError(saveError));
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(example: PersonalExampleRow) {
    if (!userId || !window.confirm("Xóa ví dụ cá nhân này?")) return;
    setError(null);
    try {
      await deletePersonalExample(createClient(), userId, example.id);
      setExamples((current) => current.filter((item) => item.id !== example.id));
      if (editingId === example.id) closeForm();
    } catch (deleteError) {
      setError(readableError(deleteError));
    }
  }

  return (
    <section className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold">Ví dụ của tôi</h2>
          <p className="mt-0.5 text-xs text-muted">Tách riêng, không sửa ví dụ gốc.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (formOpen) closeForm();
            else setFormOpen(true);
          }}
          className="rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground"
        >
          {formOpen ? "Đóng" : "+ Thêm ví dụ"}
        </button>
      </div>

      {formOpen && (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 rounded-xl bg-slate-50 p-3">
          <label className="flex flex-col gap-1 text-xs font-medium">
            Loại ví dụ
            <select
              value={input.exampleType}
              onChange={(event) => setInput((current) => ({ ...current, exampleType: event.target.value as PersonalExampleType }))}
              className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
            >
              {Object.entries(PERSONAL_EXAMPLE_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <TextArea
            label="Câu tiếng Nhật *"
            value={input.sentenceJp}
            maxLength={500}
            placeholder="例：明日の会議に参加します。"
            onChange={(value) => setInput((current) => ({ ...current, sentenceJp: value }))}
          />
          <TextArea
            label="Bản dịch"
            value={input.sentenceVi}
            maxLength={1000}
            placeholder="Ví dụ: Tôi sẽ tham gia cuộc họp ngày mai."
            onChange={(value) => setInput((current) => ({ ...current, sentenceVi: value }))}
          />
          <TextInput
            label="Trợ từ / cấu trúc cần chú ý"
            value={input.highlightText}
            maxLength={100}
            placeholder="に参加する"
            onChange={(value) => setInput((current) => ({ ...current, highlightText: value }))}
          />
          <TextArea
            label="Ghi chú"
            value={input.note}
            maxLength={1000}
            placeholder="Hoàn cảnh dùng hoặc điều cần nhớ"
            onChange={(value) => setInput((current) => ({ ...current, note: value }))}
          />
          {error && <p className="text-xs text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground disabled:opacity-50"
          >
            {saving ? "Đang lưu…" : editingId ? "Lưu thay đổi" : "Lưu ví dụ"}
          </button>
        </form>
      )}

      {!formOpen && error && <p className="mt-3 text-xs text-red-600">{error}</p>}
      {loading ? (
        <p className="mt-3 text-xs text-muted">Đang tải ví dụ cá nhân…</p>
      ) : examples.length === 0 ? (
        <p className="mt-3 rounded-xl border border-dashed border-border p-3 text-xs text-muted">Bạn chưa thêm ví dụ nào.</p>
      ) : (
        <div className="mt-3 flex flex-col gap-2">
          {examples.map((example) => (
            <article key={example.id} className="rounded-xl border border-border p-3">
              <div className="flex items-start justify-between gap-2">
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent">
                  {PERSONAL_EXAMPLE_TYPE_LABELS[example.example_type]}
                </span>
                <div className="flex gap-2 text-xs font-semibold">
                  <button type="button" onClick={() => startEdit(example)} className="text-accent">
                    Sửa
                  </button>
                  <button type="button" onClick={() => void handleDelete(example)} className="text-red-600">
                    Xóa
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <JapaneseSentence text={example.sentence_jp} className="text-sm" />
              </div>
              {example.sentence_vi && <p className="mt-1 text-xs text-muted">{example.sentence_vi}</p>}
              {example.highlight_text && (
                <p className="font-jp mt-2 rounded-lg bg-indigo-50 px-2 py-1 text-xs text-indigo-700">Chú ý: {example.highlight_text}</p>
              )}
              {example.note && <p className="mt-1 text-xs text-muted">📝 {example.note}</p>}
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="text-[10px] text-muted">
                  Đúng {example.times_correct} · Sai {example.times_wrong}
                  {example.next_review_at && ` · Ôn ${new Date(example.next_review_at).toLocaleDateString("vi-VN")}`}
                </span>
                <button
                  type="button"
                  onClick={() => setExerciseId((current) => (current === example.id ? null : example.id))}
                  className="text-xs font-semibold text-accent"
                >
                  {exerciseId === example.id ? "Đóng bài tập" : "Tạo bài tập"}
                </button>
              </div>
              {exerciseId === example.id && userId && (
                <PersonalExampleExercise
                  example={example}
                  userId={userId}
                  focusText={focusText}
                  onGraded={(updated) =>
                    setExamples((current) => current.map((item) => (item.id === updated.id ? updated : item)))
                  }
                />
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function TextArea({
  label,
  value,
  maxLength,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  maxLength: number;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs font-medium">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        maxLength={maxLength}
        rows={2}
        placeholder={placeholder}
        className="resize-y rounded-lg border border-border bg-surface px-3 py-2 font-normal"
      />
    </label>
  );
}

function TextInput({
  label,
  value,
  maxLength,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  maxLength: number;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs font-medium">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        maxLength={maxLength}
        placeholder={placeholder}
        className="rounded-lg border border-border bg-surface px-3 py-2 font-normal"
      />
    </label>
  );
}

function readableError(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  return "Không thể lưu ví dụ. Hãy thử lại.";
}

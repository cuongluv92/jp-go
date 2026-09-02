"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { GrammarQuizRunner } from "@/components/grammar-quiz-runner";
import { JapaneseSentence } from "@/components/japanese-sentence";
import { MaziiLink } from "@/components/mazii-link";
import { PersonalExamples } from "@/components/personal-examples";
import { getCached, setCached } from "@/lib/data/client-cache";
import {
  gradeGrammarReview,
  getGrammarDetail,
  type GrammarDetail,
  type GrammarExampleRow,
  type GrammarUsageRow,
} from "@/lib/data/grammar-service";
import { createClient } from "@/lib/supabase/client";

interface GrammarDetailCachedData {
  detail: GrammarDetail | null;
  userId: string | null;
}

function grammarDetailCacheKey(id: string): string {
  return `grammar-detail-${id}`;
}

function examplesForUsage(examples: GrammarExampleRow[], usageId: string | null): GrammarExampleRow[] {
  return examples.filter((e) => e.usage_id === usageId).sort((a, b) => a.example_no - b.example_no);
}

function ExampleList({ examples }: { examples: GrammarExampleRow[] }) {
  return (
    <div className="mt-2">
      {examples.length < 3 && (
        <p className="mb-2 rounded-lg border border-amber-200 bg-amber-50 p-2 text-[11px] text-amber-900">
          Mới có {examples.length}/3 ngữ cảnh đã kiểm tra; chưa tự điền câu còn thiếu.
        </p>
      )}
      <ul className="flex flex-col gap-2">
        {examples.map((ex, i) => (
        <li key={ex.id} className="rounded-lg border border-border bg-surface px-3 py-2">
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold">
            <span className="text-muted">Ví dụ {i + 1}</span>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">
              {ex.example_type === "standard" ? "Chuẩn mẫu" : ex.example_type === "business" ? "Công việc" : "Đời thường"}
            </span>
            {ex.review_status === "needs_review" && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">Cần kiểm tra</span>}
          </div>
          <JapaneseSentence text={ex.example_jp} className="mt-0.5 text-sm text-foreground" />
          <p className="text-xs text-muted">{ex.example_vi}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}

function UsageBlock({ usage, examples }: { usage: GrammarUsageRow; examples: GrammarExampleRow[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <p className="text-sm font-semibold text-foreground">{usage.meaning}</p>
      {usage.connection && (
        <p className="mt-1 text-xs text-muted">
          <span className="font-medium text-foreground">Cách nối:</span> <span className="font-jp">{usage.connection}</span>
        </p>
      )}
      {usage.usage && (
        <p className="mt-0.5 text-xs text-muted">
          <span className="font-medium text-foreground">Cách dùng:</span> {usage.usage}
        </p>
      )}
      {usage.notes && <p className="mt-0.5 whitespace-pre-line text-xs text-muted">{usage.notes}</p>}
      <ExampleList examples={examplesForUsage(examples, usage.id)} />
    </div>
  );
}

export function GrammarDetailClient({ id }: { id: string }) {
  const cached = getCached<GrammarDetailCachedData>(grammarDetailCacheKey(id));
  const [detail, setDetail] = useState<GrammarDetail | null>(cached?.detail ?? null);
  const [userId, setUserId] = useState<string | null>(cached?.userId ?? null);
  const [loading, setLoading] = useState(!cached);
  const [notesExpanded, setNotesExpanded] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizResult, setQuizResult] = useState<{ correct: number; total: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const data = await getGrammarDetail(supabase, id);
      if (cancelled) return;
      setUserId(user?.id ?? null);
      setDetail(data);
      setLoading(false);
      setCached<GrammarDetailCachedData>(grammarDetailCacheKey(id), { detail: data, userId: user?.id ?? null });
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleQuizFinish(correct: number, total: number) {
    setQuizResult({ correct, total });
    if (userId) {
      const supabase = createClient();
      await gradeGrammarReview(supabase, userId, id, correct > total / 2);
    }
  }

  if (loading) return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>;
  if (!detail) return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Không tìm thấy mẫu ngữ pháp.</p>;

  const hasMultipleUsages = detail.usages.length > 0;
  const rootExamples = examplesForUsage(detail.examples, null);
  const hasNotesBlock = !!detail.common_mistake || detail.similar_patterns.length > 0 || !!detail.notes;

  return (
    <div className="flex flex-col gap-5">
      <Link href={`/grammar?level=${detail.level}`} className="text-xs font-medium text-accent">
        ← Danh sách Ngữ pháp {detail.level}
      </Link>

      <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
        <span className="font-jp text-2xl font-bold">{detail.grammar_pattern}</span>
        <span className="text-sm text-muted">{detail.meaning_vi}</span>
        {detail.register && <span className="mt-1 text-xs text-accent">{detail.register}</span>}
        <MaziiLink kind="grammar" query={detail.grammar_pattern} className="mt-2 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-accent" />
      </div>

      {detail.memory_hint_vi && (
        <p className="rounded-xl border border-dashed border-border p-3 text-xs italic text-muted">
          💡 {detail.memory_hint_vi}
        </p>
      )}

      {!hasMultipleUsages && (detail.connection || detail.usage) && (
        <div className="rounded-xl border border-border bg-surface p-3">
          {detail.connection && (
            <p className="text-xs text-muted">
              <span className="font-medium text-foreground">Cách nối:</span> <span className="font-jp">{detail.connection}</span>
            </p>
          )}
          {detail.usage && (
            <p className="mt-0.5 text-xs text-muted">
              <span className="font-medium text-foreground">Cách dùng:</span> {detail.usage}
            </p>
          )}
          <ExampleList examples={rootExamples} />
        </div>
      )}

      {hasMultipleUsages && (
        <div className="flex flex-col gap-2">
          {detail.usages.map((u) => (
            <UsageBlock key={u.id} usage={u} examples={detail.examples} />
          ))}
        </div>
      )}

      {hasNotesBlock && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
          {detail.notes && !hasMultipleUsages && <p className="whitespace-pre-line">{detail.notes}</p>}
          {detail.common_mistake && <p className={detail.notes && !hasMultipleUsages ? "mt-1" : ""}>⚠️ {detail.common_mistake}</p>}
          {detail.similar_patterns.length > 0 && (
            <p className="mt-1">
              <span className="font-semibold">Mẫu gần nghĩa:</span> <span className="font-jp">{detail.similar_patterns.join(" ⇄ ")}</span>
            </p>
          )}
        </div>
      )}

      {detail.relations.length > 0 && (
        <div>
          <button type="button" onClick={() => setNotesExpanded((v) => !v)} className="text-xs font-semibold text-accent">
            {notesExpanded ? "Thu gọn mẫu gần nghĩa ▲" : `Xem ${detail.relations.length} mẫu gần nghĩa/dễ nhầm ▼`}
          </button>
          {notesExpanded && (
            <ul className="mt-2 flex flex-col gap-2">
              {detail.relations.map(({ relation, other }) => (
                <li key={relation.id} className="rounded-lg border border-border bg-surface px-3 py-2">
                  <Link href={`/grammar/${other.id}`} className="font-jp text-sm font-semibold text-accent">
                    {other.grammar_pattern}
                  </Link>
                  <p className="mt-1 text-xs text-muted">{relation.difference_note}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <PersonalExamples targetType="grammar" targetId={detail.id} focusText={detail.grammar_pattern} />

      <div>
        <h2 className="mb-2 text-sm font-semibold text-foreground">Bài tập</h2>
        {detail.questions.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">Chưa có bài tập.</p>
        ) : !quizStarted ? (
          <button
            type="button"
            onClick={() => {
              setQuizStarted(true);
              setQuizResult(null);
            }}
            className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
          >
            Bắt đầu {detail.questions.length} câu hỏi
          </button>
        ) : quizResult ? (
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-sm font-semibold">
              Đúng {quizResult.correct}/{quizResult.total}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuizStarted(false);
                setQuizResult(null);
              }}
              className="rounded-xl border border-accent px-4 py-2 text-sm font-semibold text-accent"
            >
              Làm lại
            </button>
          </div>
        ) : (
          <GrammarQuizRunner questions={detail.questions} onFinish={handleQuizFinish} />
        )}
      </div>
    </div>
  );
}

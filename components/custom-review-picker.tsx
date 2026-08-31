"use client";

import { useEffect, useMemo, useState } from "react";

import { getKanjiLevelCounts, listKanjiByLevel, listWrongKanjiForUser } from "@/lib/data/kanji-service";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { createClient } from "@/lib/supabase/client";
import { JLPT_LEVELS, type JlptLevel, type VocabWord } from "@/lib/types";

type ContentType = "vocab" | "kanji";
type ExerciseMode = "flashcard" | "typing" | "matching";
type Filter = "all" | "favorite" | "wrong";

const FILTER_LABELS: Record<Filter, string> = {
  all: "Tất cả",
  favorite: "Yêu thích",
  wrong: "Hay sai",
};

/**
 * Mục "Tự chọn ôn tập" — ôn bất cứ nội dung nào, bất cứ lúc nào, không phụ
 * thuộc lịch SRS đến hạn. Chọn Loại nội dung → Cấp độ → Phạm vi lọc, rồi
 * bắt đầu ngay (từ vựng: chọn thêm kiểu bài; kanji: vào thẳng bài trắc
 * nghiệm gộp).
 */
export function CustomReviewPicker({
  onStartVocab,
  onStartKanji,
}: {
  onStartVocab: (words: VocabWord[], mode: ExerciseMode) => void;
  onStartKanji: (kanjiIds: string[]) => void;
}) {
  const { words } = useVocabulary();
  const [contentType, setContentType] = useState<ContentType>("vocab");
  const [level, setLevel] = useState<JlptLevel>("N3");
  const [filter, setFilter] = useState<Filter>("all");
  const [kanjiCountsByLevel, setKanjiCountsByLevel] = useState<Record<JlptLevel, number> | null>(null);
  const [kanjiIds, setKanjiIds] = useState<string[]>([]);
  const [kanjiLoading, setKanjiLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const counts = await getKanjiLevelCounts(supabase);
      if (!cancelled) setKanjiCountsByLevel(counts);
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const vocabCountByLevel = useMemo(() => {
    const map = {} as Record<JlptLevel, number>;
    for (const lv of JLPT_LEVELS) map[lv] = words.filter((w) => w.jlpt === lv && !w.isHidden).length;
    return map;
  }, [words]);

  const availableLevels =
    contentType === "vocab"
      ? JLPT_LEVELS.filter((lv) => vocabCountByLevel[lv] > 0)
      : JLPT_LEVELS.filter((lv) => (kanjiCountsByLevel?.[lv] ?? 0) > 0);

  function selectContentType(type: ContentType) {
    setContentType(type);
    setFilter("all");
    const levels = type === "vocab" ? JLPT_LEVELS.filter((lv) => vocabCountByLevel[lv] > 0) : JLPT_LEVELS.filter((lv) => (kanjiCountsByLevel?.[lv] ?? 0) > 0);
    if (levels.length > 0 && !levels.includes(level)) setLevel(levels[0]);
  }

  const filteredVocabWords = useMemo(() => {
    const base = words.filter((w) => w.jlpt === level && !w.isHidden);
    if (filter === "favorite") return base.filter((w) => w.progress.isFavorite);
    if (filter === "wrong") return base.filter((w) => w.progress.timesWrong > 0);
    return base;
  }, [words, level, filter]);

  // Kanji cần fetch async theo level + filter đang chọn.
  useEffect(() => {
    if (contentType !== "kanji") return;
    let cancelled = false;
    async function load() {
      setKanjiLoading(true);
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) {
        if (!cancelled) {
          setKanjiIds([]);
          setKanjiLoading(false);
        }
        return;
      }
      const rows = filter === "wrong" ? await listWrongKanjiForUser(supabase, user.id, level) : await listKanjiByLevel(supabase, level);
      if (cancelled) return;
      setKanjiIds(rows.map((r) => r.id));
      setKanjiLoading(false);
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [contentType, level, filter]);

  const itemCount = contentType === "vocab" ? filteredVocabWords.length : kanjiIds.length;
  const filterChoices: Filter[] = contentType === "vocab" ? ["all", "favorite", "wrong"] : ["all", "wrong"];

  return (
    <div className="flex flex-col gap-4">
      <section>
        <h2 className="mb-2 text-sm font-semibold text-foreground">1. Loại nội dung</h2>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => selectContentType("vocab")}
            className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
              contentType === "vocab" ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-foreground"
            }`}
          >
            Từ vựng
          </button>
          <button
            type="button"
            onClick={() => selectContentType("kanji")}
            className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
              contentType === "kanji" ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-foreground"
            }`}
          >
            Kanji
          </button>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold text-foreground">2. Cấp độ</h2>
        <div className="grid grid-cols-5 gap-2">
          {JLPT_LEVELS.map((lv) => {
            const available = availableLevels.includes(lv);
            return (
              <button
                key={lv}
                type="button"
                disabled={!available}
                onClick={() => setLevel(lv)}
                className={`flex flex-col items-center gap-0.5 rounded-xl border px-2 py-2 text-sm font-semibold transition ${
                  level === lv
                    ? "border-accent bg-accent text-accent-foreground"
                    : available
                      ? "border-border bg-surface text-foreground"
                      : "border-border bg-slate-50 text-muted opacity-60"
                }`}
              >
                {lv}
                {!available && <span className="text-[10px] font-normal">sắp có</span>}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-sm font-semibold text-foreground">3. Phạm vi</h2>
        <div className="flex gap-2">
          {filterChoices.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                filter === f ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-foreground"
              }`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-dashed border-border p-3 text-xs text-muted">
        {contentType === "kanji" && kanjiLoading ? (
          <p>Đang tải...</p>
        ) : itemCount === 0 ? (
          <p>Không có mục nào phù hợp lựa chọn hiện tại.</p>
        ) : (
          <p>
            {itemCount} {contentType === "vocab" ? "từ" : "kanji"} phù hợp — sẵn sàng ôn tập.
          </p>
        )}
      </section>

      {contentType === "vocab" ? (
        <section>
          <h2 className="mb-2 text-sm font-semibold text-foreground">4. Chọn kiểu bài & bắt đầu</h2>
          <div className="grid grid-cols-1 gap-2">
            <button
              type="button"
              disabled={itemCount === 0}
              onClick={() => onStartVocab(filteredVocabWords, "flashcard")}
              className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
            >
              Lật thẻ
            </button>
            <button
              type="button"
              disabled={itemCount === 0}
              onClick={() => onStartVocab(filteredVocabWords, "typing")}
              className="rounded-xl border border-accent px-4 py-3 text-sm font-semibold text-accent disabled:opacity-50"
            >
              Nghĩ trước rồi viết tiếng Nhật
            </button>
            <button
              type="button"
              disabled={itemCount === 0}
              onClick={() => onStartVocab(filteredVocabWords, "matching")}
              className="rounded-xl border border-accent px-4 py-3 text-sm font-semibold text-accent disabled:opacity-50"
            >
              Nối từ – nghĩa
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          disabled={itemCount === 0 || kanjiLoading}
          onClick={() => onStartKanji(kanjiIds)}
          className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50"
        >
          Bắt đầu ôn {itemCount} kanji
        </button>
      )}
    </div>
  );
}

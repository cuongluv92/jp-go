"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";
import { applyFlashcardGrade } from "@/lib/srs";
import { createClient } from "@/lib/supabase/client";
import type { FlashcardGrade, LearningProgress, LearningStatus, VocabExample, VocabWord } from "@/lib/types";

/**
 * Nguồn dữ liệu từ vựng cho toàn bộ UI. Nội dung tĩnh (word/kanji/reading/
 * meaning/examples...) vẫn đóng gói dạng JSON trong app (`sample-words.json`)
 * — chưa đưa vào Supabase ở giai đoạn này. Chỉ `progress` (đã học, yêu
 * thích, lịch SRS...) của từng người dùng mới đồng bộ qua bảng
 * `jp_word_progress`, khớp `auth.uid()` hiện tại — đổi thiết bị vẫn thấy
 * cùng tiến độ.
 *
 * `addWord`/`updateWord` (dùng khi nhập Excel ở trang Admin) hiện vẫn chỉ
 * sửa nội dung tĩnh trong state React (mất khi tải lại trang) — nội dung từ
 * vựng chưa có bảng Supabase riêng, đây là giới hạn đã biết của giai đoạn
 * hạ tầng này, không phải lỗi.
 */
interface VocabularyContextValue {
  words: VocabWord[];
  examples: VocabExample[];
  getWordById: (id: string) => VocabWord | undefined;
  toggleFavorite: (id: string) => void;
  setStatus: (id: string, status: LearningStatus) => void;
  gradeFlashcard: (id: string, grade: FlashcardGrade) => void;
  addWord: (word: VocabWord) => void;
  updateWord: (id: string, patch: Partial<VocabWord>) => void;
  setHidden: (id: string, hidden: boolean) => void;
  /** Thay toàn bộ 3 ví dụ của các từ có mặt trong `newExamples` (dùng khi thêm/nhập lại 1 từ). */
  upsertExamples: (newExamples: VocabExample[]) => void;
}

const VocabularyContext = createContext<VocabularyContextValue | null>(null);

interface WordProgressRow {
  word_id: string;
  status: LearningStatus;
  is_favorite: boolean;
  is_hidden: boolean;
  times_correct: number;
  times_wrong: number;
  last_reviewed_at: string | null;
  next_review_at: string | null;
  interval_days: number;
  ease_factor: number;
  repetitions: number;
}

function rowToProgress(row: WordProgressRow): LearningProgress {
  return {
    status: row.status,
    isFavorite: row.is_favorite,
    timesCorrect: row.times_correct,
    timesWrong: row.times_wrong,
    lastReviewedAt: row.last_reviewed_at,
    nextReviewAt: row.next_review_at,
    intervalDays: row.interval_days,
    easeFactor: row.ease_factor,
    repetitions: row.repetitions,
  };
}

function progressToRow(userId: string, wordId: string, progress: LearningProgress, isHidden: boolean) {
  return {
    user_id: userId,
    word_id: wordId,
    status: progress.status,
    is_favorite: progress.isFavorite,
    is_hidden: isHidden,
    times_correct: progress.timesCorrect,
    times_wrong: progress.timesWrong,
    last_reviewed_at: progress.lastReviewedAt,
    next_review_at: progress.nextReviewAt,
    interval_days: progress.intervalDays,
    ease_factor: progress.easeFactor,
    repetitions: progress.repetitions,
  };
}

export function VocabularyProvider({ children }: { children: ReactNode }) {
  const [words, setWords] = useState<VocabWord[]>(sampleWords);
  const [examples, setExamples] = useState<VocabExample[]>(sampleExamples);
  const userIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const supabase = createClient();

    async function loadProgress() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user || cancelled) return;
      userIdRef.current = user.id;

      const { data: rows } = await supabase.from("jp_word_progress").select("*").eq("user_id", user.id);
      if (!rows || cancelled) return;

      const byWordId = new Map<string, WordProgressRow>(rows.map((r: WordProgressRow) => [r.word_id, r]));
      setWords((prev) =>
        prev.map((w) => {
          const row = byWordId.get(w.id);
          if (!row) return w;
          return { ...w, progress: rowToProgress(row), isHidden: row.is_hidden };
        }),
      );
    }

    void loadProgress();
    return () => {
      cancelled = true;
    };
  }, []);

  const syncProgress = useCallback((wordId: string, progress: LearningProgress, isHidden: boolean) => {
    const userId = userIdRef.current;
    if (!userId) return;
    const supabase = createClient();
    void supabase.from("jp_word_progress").upsert(progressToRow(userId, wordId, progress, isHidden), {
      onConflict: "user_id,word_id",
    });
  }, []);

  const updateWord = useCallback((id: string, patch: Partial<VocabWord>) => {
    setWords((prev) => prev.map((w) => (w.id === id ? { ...w, ...patch } : w)));
  }, []);

  const toggleFavorite = useCallback(
    (id: string) => {
      setWords((prev) =>
        prev.map((w) => {
          if (w.id !== id) return w;
          const progress = { ...w.progress, isFavorite: !w.progress.isFavorite };
          syncProgress(id, progress, w.isHidden ?? false);
          return { ...w, progress };
        }),
      );
    },
    [syncProgress],
  );

  const setStatus = useCallback(
    (id: string, status: LearningStatus) => {
      setWords((prev) =>
        prev.map((w) => {
          if (w.id !== id) return w;
          const progress = { ...w.progress, status };
          syncProgress(id, progress, w.isHidden ?? false);
          return { ...w, progress };
        }),
      );
    },
    [syncProgress],
  );

  const gradeFlashcard = useCallback(
    (id: string, grade: FlashcardGrade) => {
      setWords((prev) =>
        prev.map((w) => {
          if (w.id !== id) return w;
          const progress = applyFlashcardGrade(w.progress, grade);
          syncProgress(id, progress, w.isHidden ?? false);
          return { ...w, progress };
        }),
      );
    },
    [syncProgress],
  );

  const addWord = useCallback((word: VocabWord) => {
    setWords((prev) => [word, ...prev]);
  }, []);

  const setHidden = useCallback(
    (id: string, hidden: boolean) => {
      setWords((prev) =>
        prev.map((w) => {
          if (w.id !== id) return w;
          syncProgress(id, w.progress, hidden);
          return { ...w, isHidden: hidden };
        }),
      );
    },
    [syncProgress],
  );

  const upsertExamples = useCallback((newExamples: VocabExample[]) => {
    // Ví dụ cũng là nội dung tĩnh (chưa có bảng Supabase riêng) — giữ hành vi
    // cũ: chỉ áp dụng trong state React của phiên hiện tại, không đồng bộ.
    setExamples((prev) => {
      const affectedIds = new Set(newExamples.map((e) => e.vocabId));
      return [...prev.filter((e) => !affectedIds.has(e.vocabId)), ...newExamples];
    });
  }, []);

  const getWordById = useCallback((id: string) => words.find((w) => w.id === id), [words]);

  const value = useMemo(
    () => ({
      words,
      examples,
      getWordById,
      toggleFavorite,
      setStatus,
      gradeFlashcard,
      addWord,
      updateWord,
      setHidden,
      upsertExamples,
    }),
    [words, examples, getWordById, toggleFavorite, setStatus, gradeFlashcard, addWord, updateWord, setHidden, upsertExamples],
  );

  return <VocabularyContext.Provider value={value}>{children}</VocabularyContext.Provider>;
}

export function useVocabulary(): VocabularyContextValue {
  const ctx = useContext(VocabularyContext);
  if (!ctx) throw new Error("useVocabulary phải được dùng bên trong <VocabularyProvider>");
  return ctx;
}

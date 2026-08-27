"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import { sampleWords } from "@/lib/data/sample-words";
import { applyFlashcardGrade } from "@/lib/srs";
import type { FlashcardGrade, LearningStatus, VocabWord } from "@/lib/types";

/**
 * Nguồn dữ liệu từ vựng cho toàn bộ UI, hiện đang chạy trên dữ liệu mẫu trong
 * bộ nhớ (state React, mất khi tải lại trang). Đây là điểm duy nhất cần thay
 * thế khi tích hợp Supabase thật: đổi `useState(sampleWords)` bằng dữ liệu lấy
 * từ Supabase, và đổi các hàm cập nhật bên dưới thành gọi API/Supabase — các
 * trang UI gọi qua `useVocabulary()` nên không cần sửa lại.
 */
interface VocabularyContextValue {
  words: VocabWord[];
  getWordById: (id: string) => VocabWord | undefined;
  toggleFavorite: (id: string) => void;
  setStatus: (id: string, status: LearningStatus) => void;
  gradeFlashcard: (id: string, grade: FlashcardGrade) => void;
  addWord: (word: VocabWord) => void;
  updateWord: (id: string, patch: Partial<VocabWord>) => void;
  setHidden: (id: string, hidden: boolean) => void;
}

const VocabularyContext = createContext<VocabularyContextValue | null>(null);

export function VocabularyProvider({ children }: { children: ReactNode }) {
  const [words, setWords] = useState<VocabWord[]>(sampleWords);

  const updateWord = useCallback((id: string, patch: Partial<VocabWord>) => {
    setWords((prev) => prev.map((w) => (w.id === id ? { ...w, ...patch } : w)));
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setWords((prev) =>
      prev.map((w) => (w.id === id ? { ...w, progress: { ...w.progress, isFavorite: !w.progress.isFavorite } } : w)),
    );
  }, []);

  const setStatus = useCallback((id: string, status: LearningStatus) => {
    setWords((prev) => prev.map((w) => (w.id === id ? { ...w, progress: { ...w.progress, status } } : w)));
  }, []);

  const gradeFlashcard = useCallback((id: string, grade: FlashcardGrade) => {
    setWords((prev) =>
      prev.map((w) => (w.id === id ? { ...w, progress: applyFlashcardGrade(w.progress, grade) } : w)),
    );
  }, []);

  const addWord = useCallback((word: VocabWord) => {
    setWords((prev) => [word, ...prev]);
  }, []);

  const setHidden = useCallback((id: string, hidden: boolean) => {
    setWords((prev) => prev.map((w) => (w.id === id ? { ...w, isHidden: hidden } : w)));
  }, []);

  const getWordById = useCallback((id: string) => words.find((w) => w.id === id), [words]);

  const value = useMemo(
    () => ({ words, getWordById, toggleFavorite, setStatus, gradeFlashcard, addWord, updateWord, setHidden }),
    [words, getWordById, toggleFavorite, setStatus, gradeFlashcard, addWord, updateWord, setHidden],
  );

  return <VocabularyContext.Provider value={value}>{children}</VocabularyContext.Provider>;
}

export function useVocabulary(): VocabularyContextValue {
  const ctx = useContext(VocabularyContext);
  if (!ctx) throw new Error("useVocabulary phải được dùng bên trong <VocabularyProvider>");
  return ctx;
}

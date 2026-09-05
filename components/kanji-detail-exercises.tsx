"use client";

import { useEffect, useState } from "react";

import { DetailExercisePanel } from "@/components/detail-exercise-panel";
import { getKanjiContextExercises, type ContextExerciseItem } from "@/lib/data/context-exercises";
import { getKanjiDetail, type KanjiDetail } from "@/lib/data/kanji-service";
import { getCuratedN5ExercisesForTargets } from "@/lib/data/n5-curated-exercises";
import { createClient } from "@/lib/supabase/client";

export function KanjiDetailExercises({ id }: { id: string }) {
  const [detail, setDetail] = useState<KanjiDetail | null>(null);
  const [contextItems, setContextItems] = useState<ContextExerciseItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const value = await getKanjiDetail(supabase, id);
      if (!value || cancelled) return;
      const context = value.level === "N5" ? await getKanjiContextExercises(supabase, value.id, value.kanji_character, 4) : [];
      if (!cancelled) {
        setDetail(value);
        setContextItems(context);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!detail || detail.level !== "N5") return null;

  const targets = [detail.kanji_character, ...detail.words.map((word) => word.word_jp)];
  const practiceItems = getCuratedN5ExercisesForTargets(targets, {
    domain: "kanji",
    modes: ["practice"],
    contains: true,
    limit: 2,
  });
  const challengeItems = getCuratedN5ExercisesForTargets(targets, {
    domain: "kanji",
    modes: ["challenge"],
    contains: true,
    limit: 3,
  });

  return (
    <DetailExercisePanel
      title={`Bài tập Kanji · ${detail.kanji_character}`}
      description="Kanji được kiểm tra trong từ và câu thật, ưu tiên chữ dễ nhầm và ngữ cảnh. Không hỏi Hán Việt, ON/KUN hay nghĩa chữ trực tiếp."
      contextItems={contextItems}
      practiceItems={practiceItems}
      challengeItems={challengeItems}
    />
  );
}

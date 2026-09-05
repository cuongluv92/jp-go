"use client";

import { useEffect, useState } from "react";

import { DetailExercisePanel } from "@/components/detail-exercise-panel";
import { getKanjiContextExercises, type ContextExerciseItem } from "@/lib/data/context-exercises";
import { buildKanjiFallbackChallenge } from "@/lib/data/detail-challenge-builders";
import { getKanjiDetail, type KanjiDetail } from "@/lib/data/kanji-service";
import { getN5KanjiExtraContexts } from "@/lib/data/n5-kanji-extra-contexts";
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
      const rawContext = value.level === "N5" ? await getKanjiContextExercises(supabase, value.id, value.kanji_character, 4) : [];
      const sourceAligned = rawContext.filter((item) => !item.prompt.includes("クラス"));
      const supplements = value.level === "N5" ? getN5KanjiExtraContexts(value.id, value.kanji_character) : [];
      const merged = Array.from(new Map([...sourceAligned, ...supplements].map((item) => [item.prompt, item])).values()).slice(0, 4);
      if (!cancelled) {
        setDetail(value);
        setContextItems(merged);
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
  const curatedChallenge = getCuratedN5ExercisesForTargets(targets, {
    domain: "kanji",
    modes: ["challenge"],
    contains: true,
    limit: 2,
  });
  const fallbackChallenge = buildKanjiFallbackChallenge(contextItems, detail.kanji_character, detail.id);
  const challengeItems = Array.from(
    new Map([...curatedChallenge, ...(fallbackChallenge ? [fallbackChallenge] : [])].map((item) => [item.id, item])).values(),
  ).slice(0, 2);

  return (
    <DetailExercisePanel
      title={`Bài tập Kanji · ${detail.kanji_character}`}
      description="Mỗi chữ có 4 câu Kanji trong từ/câu thật + luyện viết phía trên + Challenge nhiều ngữ cảnh. Không hỏi Hán Việt, ON/KUN hay nghĩa chữ trực tiếp."
      contextItems={contextItems}
      practiceItems={practiceItems}
      challengeItems={challengeItems}
    />
  );
}

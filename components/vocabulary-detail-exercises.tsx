"use client";

import { DetailExercisePanel } from "@/components/detail-exercise-panel";
import { buildVocabContextExercises } from "@/lib/data/context-exercises";
import { getCuratedN5ExercisesForTargets } from "@/lib/data/n5-curated-exercises";
import { getExamplesForWord } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";

export function VocabularyDetailExercises({ id }: { id: string }) {
  const { getWordById, examples } = useVocabulary();
  const word = getWordById(id);
  if (!word || word.jlpt !== "N5") return null;

  const wordExamples = getExamplesForWord(examples, word.id);
  const contextItems = buildVocabContextExercises(wordExamples, 3);
  const targets = [word.word, word.dictionaryForm, word.kanji].filter(Boolean);
  const practiceItems = getCuratedN5ExercisesForTargets(targets, {
    domain: "vocab",
    modes: ["practice"],
    contains: true,
    limit: 2,
  });
  const challengeItems = getCuratedN5ExercisesForTargets(targets, {
    domain: "vocab",
    modes: ["challenge"],
    contains: true,
    limit: 3,
  });

  return (
    <DetailExercisePanel
      title={`Bài tập · ${word.word}`}
      description="Luyện ngay cách dùng của từ trong câu thật. Không hỏi nghĩa/đọc rời rạc; câu khó hơn nằm luôn ở phần Challenge cuối bộ."
      contextItems={contextItems}
      practiceItems={practiceItems}
      challengeItems={challengeItems}
    />
  );
}

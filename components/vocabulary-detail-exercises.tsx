"use client";

import { DetailExercisePanel } from "@/components/detail-exercise-panel";
import { buildVocabContextExercises, buildVocabScenarioExercises } from "@/lib/data/context-exercises";
import { buildVocabFallbackChallenge } from "@/lib/data/detail-challenge-builders";
import { getCuratedN5ExercisesForTargets } from "@/lib/data/n5-curated-exercises";
import { getExamplesForWord } from "@/lib/data/selectors";
import { useVocabulary } from "@/lib/data/vocabulary-context";

export function VocabularyDetailExercises({ id }: { id: string }) {
  const { getWordById, examples } = useVocabulary();
  const word = getWordById(id);
  if (!word || word.jlpt !== "N5") return null;

  const wordExamples = getExamplesForWord(examples, word.id);
  const contextItems = buildVocabContextExercises(wordExamples, 3);
  const scenarioItems = buildVocabScenarioExercises(wordExamples, word.word, 2);
  const targets = [word.word, word.dictionaryForm, word.kanji].filter((value): value is string => Boolean(value));
  const curatedPractice = getCuratedN5ExercisesForTargets(targets, {
    domain: "vocab",
    modes: ["practice"],
    contains: true,
    limit: 1,
  });
  const curatedChallenge = getCuratedN5ExercisesForTargets(targets, {
    domain: "vocab",
    modes: ["challenge"],
    contains: true,
    limit: 2,
  });
  const fallbackChallenge = buildVocabFallbackChallenge(wordExamples, word.word);

  const practiceItems = Array.from(new Map([...scenarioItems, ...curatedPractice].map((item) => [item.id, item])).values());
  const challengeItems = Array.from(
    new Map([...curatedChallenge, ...(fallbackChallenge ? [fallbackChallenge] : [])].map((item) => [item.id, item])).values(),
  ).slice(0, 2);

  return (
    <DetailExercisePanel
      title={`Bài tập · ${word.word}`}
      description="Mỗi từ có tối thiểu 5 bài dùng 3 ví dụ đã kiểm định; Challenge cũng nằm ngay cuối bộ và bắt xử lý nhiều ngữ cảnh, không hỏi nghĩa/đọc rời rạc."
      contextItems={contextItems}
      practiceItems={practiceItems}
      challengeItems={challengeItems}
    />
  );
}

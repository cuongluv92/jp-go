"use client";

import { DetailExercisePanel } from "@/components/detail-exercise-panel";
import { buildVocabContextExercises, buildVocabScenarioExercises } from "@/lib/data/context-exercises";
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
  const challengeItems = getCuratedN5ExercisesForTargets(targets, {
    domain: "vocab",
    modes: ["challenge"],
    contains: true,
    limit: 3,
  });

  const practiceItems = Array.from(new Map([...scenarioItems, ...curatedPractice].map((item) => [item.id, item])).values());

  return (
    <DetailExercisePanel
      title={`Bài tập · ${word.word}`}
      description="Tối thiểu 5 bài dùng ngay 3 ví dụ đã kiểm định: điền theo ngữ cảnh + chọn câu phù hợp tình huống. Nếu có câu phân biệt/sửa lỗi khó hơn, Challenge nằm ngay cuối bộ này."
      contextItems={contextItems}
      practiceItems={practiceItems}
      challengeItems={challengeItems}
    />
  );
}

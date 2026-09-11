export const LESSON_SIZES = {
  vocabulary: 20,
  kanji: 10,
  grammar: 6,
} as const;

export function getLessonCount(totalItems: number, lessonSize: number): number {
  if (totalItems <= 0 || lessonSize <= 0) return 0;
  return Math.ceil(totalItems / lessonSize);
}

export function clampLesson(lesson: number, totalItems: number, lessonSize: number): number {
  const totalLessons = getLessonCount(totalItems, lessonSize);
  if (totalLessons === 0) return 1;
  return Math.min(Math.max(Math.trunc(lesson) || 1, 1), totalLessons);
}

export function getLessonRange(totalItems: number, lesson: number, lessonSize: number) {
  const safeLesson = clampLesson(lesson, totalItems, lessonSize);
  const startIndex = Math.max(0, (safeLesson - 1) * lessonSize);
  const endIndex = Math.min(totalItems, startIndex + lessonSize);
  return {
    lesson: safeLesson,
    startIndex,
    endIndex,
    startNumber: totalItems === 0 ? 0 : startIndex + 1,
    endNumber: endIndex,
    count: Math.max(0, endIndex - startIndex),
  };
}

export function sliceLesson<T>(items: T[], lesson: number, lessonSize: number): T[] {
  const range = getLessonRange(items.length, lesson, lessonSize);
  return items.slice(range.startIndex, range.endIndex);
}

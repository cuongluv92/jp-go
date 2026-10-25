/**
 * Reference links for published first-stage (1次) exams.
 *
 * Kakomonn keeps question pages in sequential numeric blocks per exam year.
 * The first-question URLs and year lists were checked against Kakomonn
 * (https://denkisekou2.kakomonn.com/list). Do NOT use for 2次 essays.
 *
 * These are links to external explanations, not a certification that their
 * answer agrees with JP-GO. Keep the source attribution visible in the UI.
 */
const KAKOMONN_FIRST_QUESTION_ID: Record<string, { firstId: number; count: number }> = {
  "h30-2denki-1ji-late": { firstId: 40071, count: 64 },
  "r1-2denki-1ji-early": { firstId: 43826, count: 64 },
  "r1-2denki-1ji-late": { firstId: 46504, count: 64 },
  "r2-2denki-1ji-late": { firstId: 52965, count: 64 },
  "r3-2denki-1ji-early": { firstId: 56822, count: 64 },
  "r3-2denki-1ji-late": { firstId: 63785, count: 64 },
  "r4-2denki-1ji-early": { firstId: 66182, count: 64 },
  "r4-2denki-1ji-late": { firstId: 68482, count: 64 },
  "r5-2denki-1ji-early": { firstId: 71985, count: 64 },
  "r5-2denki-1ji-late": { firstId: 74943, count: 64 },
  "r6-2denki-1ji-early": { firstId: 81141, count: 62 },
  "r6-2denki-1ji-late": { firstId: 81203, count: 62 },
  "r7-2denki-1ji-early": { firstId: 86853, count: 62 },
  "r7-2denki-1ji-late": { firstId: 90695, count: 62 },
  "r8-2denki-1ji-early": { firstId: 93977, count: 62 },
};

/** Return null for unpublished/unsupported exam years or malformed numbers. */
export function getKakomonnQuestionUrl(testSlug: string, questionNumber: number): string | null {
  const exam = KAKOMONN_FIRST_QUESTION_ID[testSlug];
  if (!exam || !Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > exam.count) {
    return null;
  }
  return `https://denkisekou2.kakomonn.com/questions/${exam.firstId + questionNumber - 1}`;
}

import { getConjugation, normalizeDictionaryForm } from "@/lib/conjugation";
import type { JlptLevel, VocabExample, VocabWord } from "@/lib/types";

export type SkillPracticeKind = "meaning" | "word" | "reading" | "context" | "comprehension" | "conjugation";

export interface SkillPracticeQuestion {
  vocabId: string;
  kind: SkillPracticeKind;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SkillPracticeSet {
  questions: SkillPracticeQuestion[];
  availableKinds: SkillPracticeKind[];
  countsByKind: Partial<Record<SkillPracticeKind, number>>;
}

export const SKILL_KIND_LABELS: Record<SkillPracticeKind, string> = {
  meaning: "Chọn nghĩa",
  word: "Nhớ mặt chữ",
  reading: "Đọc Kanji",
  context: "Điền theo ngữ cảnh",
  comprehension: "Hiểu câu",
  conjugation: "Chia từ",
};

// Chỉ cần một kho ứng viên đủ rộng cho buổi tối đa 20 câu; không dựng hàng
// nghìn object câu hỏi trên điện thoại mỗi lần người dùng bấm bắt đầu.
const POOL_LIMIT = 80;

function shuffle<T>(items: T[], random: () => number): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function uniqueValues(values: string[]): string[] {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

function surface(word: VocabWord): string {
  return normalizeDictionaryForm(word.dictionaryForm || word.word);
}

function explanation(word: VocabWord): string {
  return `${surface(word)}（${normalizeDictionaryForm(word.reading)}）: ${word.meaningVi}`;
}

function distractors(
  word: VocabWord,
  words: VocabWord[],
  value: (candidate: VocabWord) => string,
  random: () => number,
): string[] {
  const correct = value(word);
  const sameType = words.filter((candidate) => candidate.id !== word.id && candidate.partOfSpeech === word.partOfSpeech);
  return uniqueValues([...shuffle(sameType, random), ...shuffle(words, random)].map(value))
    .filter((candidate) => candidate !== correct)
    .slice(0, 3);
}

function choiceQuestion(
  word: VocabWord,
  kind: SkillPracticeKind,
  prompt: string,
  correct: string,
  wrong: string[],
  random: () => number,
  detail = explanation(word),
): SkillPracticeQuestion | null {
  if (uniqueValues(wrong).length < 3) return null;
  const options = shuffle([correct, ...uniqueValues(wrong).slice(0, 3)], random);
  return {
    vocabId: word.id,
    kind,
    prompt,
    options,
    correctIndex: options.indexOf(correct),
    explanation: detail,
  };
}

function buildMeaningPool(words: VocabWord[], random: () => number): SkillPracticeQuestion[] {
  return shuffle(words, random).slice(0, POOL_LIMIT)
    .map((word) =>
      choiceQuestion(
        word,
        "meaning",
        `「${surface(word)}」の意味はどれですか。`,
        word.meaningVi,
        distractors(word, words, (candidate) => candidate.meaningVi, random),
        random,
      ),
    )
    .filter((question): question is SkillPracticeQuestion => question !== null);
}

function buildWordPool(words: VocabWord[], random: () => number): SkillPracticeQuestion[] {
  return shuffle(words, random).slice(0, POOL_LIMIT)
    .map((word) =>
      choiceQuestion(
        word,
        "word",
        `Từ nào có nghĩa “${word.meaningVi}”?`,
        surface(word),
        distractors(word, words, surface, random),
        random,
      ),
    )
    .filter((question): question is SkillPracticeQuestion => question !== null);
}

function buildReadingPool(words: VocabWord[], random: () => number): SkillPracticeQuestion[] {
  const candidates = words.filter((word) => /[一-鿿]/u.test(surface(word)) && normalizeDictionaryForm(word.reading) !== surface(word));
  return shuffle(candidates, random).slice(0, POOL_LIMIT)
    .map((word) =>
      choiceQuestion(
        word,
        "reading",
        `「${surface(word)}」の読み方はどれですか。`,
        normalizeDictionaryForm(word.reading),
        distractors(word, candidates, (candidate) => normalizeDictionaryForm(candidate.reading), random),
        random,
      ),
    )
    .filter((question): question is SkillPracticeQuestion => question !== null);
}

function buildContextPool(
  examples: VocabExample[],
  wordsById: Map<string, VocabWord>,
  random: () => number,
): SkillPracticeQuestion[] {
  const usable = examples.filter((example) => example.clozeJp.includes("_____") && example.answer.trim());
  return shuffle(usable, random).slice(0, POOL_LIMIT)
    .map((example) => {
      const word = wordsById.get(example.vocabId);
      if (!word) return null;
      const otherAnswers = shuffle(
        usable.filter((candidate) => {
          const otherWord = wordsById.get(candidate.vocabId);
          return candidate.answer !== example.answer && otherWord?.partOfSpeech === word.partOfSpeech;
        }),
        random,
      ).map((candidate) => candidate.answer);
      const fallbackAnswers = shuffle(usable, random).map((candidate) => candidate.answer);
      return choiceQuestion(
        word,
        "context",
        example.clozeJp,
        example.answer,
        uniqueValues([...otherAnswers, ...fallbackAnswers]).filter((answer) => answer !== example.answer),
        random,
        `${example.exampleJp} — ${example.exampleVi}\n${explanation(word)}`,
      );
    })
    .filter((question): question is SkillPracticeQuestion => question !== null);
}

function buildComprehensionPool(
  examples: VocabExample[],
  wordsById: Map<string, VocabWord>,
  random: () => number,
): SkillPracticeQuestion[] {
  const usable = examples.filter((example) => example.exampleJp.trim() && example.exampleVi.trim());
  return shuffle(usable, random).slice(0, POOL_LIMIT)
    .map((example) => {
      const word = wordsById.get(example.vocabId);
      if (!word) return null;
      const wrong = shuffle(usable, random)
        .filter((candidate) => candidate.exampleVi !== example.exampleVi)
        .map((candidate) => candidate.exampleVi);
      return choiceQuestion(
        word,
        "comprehension",
        `Câu nào gần nghĩa nhất?\n${example.exampleJp}`,
        example.exampleVi,
        wrong,
        random,
        `${example.exampleJp} — ${example.exampleVi}\n${explanation(word)}`,
      );
    })
    .filter((question): question is SkillPracticeQuestion => question !== null);
}

const VERB_FORM_LABELS = [
  ["masuForm", "ます形"],
  ["teForm", "て形"],
  ["naiForm", "ない形"],
  ["taForm", "た形"],
  ["potentialForm", "可能形"],
  ["volitionalForm", "意向形"],
  ["passiveForm", "受身形"],
  ["causativeForm", "使役形"],
  ["conditionalForm", "ば形"],
] as const;

const ADJECTIVE_FORM_LABELS = [
  ["negativeForm", "否定形"],
  ["pastForm", "過去形"],
  ["negativePastForm", "過去否定形"],
  ["teForm", "て形"],
  ["conditionalForm", "条件形"],
] as const;

function buildConjugationPool(words: VocabWord[], random: () => number): SkillPracticeQuestion[] {
  return shuffle(words, random).slice(0, POOL_LIMIT)
    .map((word) => {
      try {
        const conjugation = getConjugation(word);
        if (!conjugation) return null;
        const formEntries: Array<{ label: string; value: string }> =
          conjugation.kind === "verb"
            ? VERB_FORM_LABELS.map(([key, label]) => ({ label, value: conjugation[key] }))
            : ADJECTIVE_FORM_LABELS.map(([key, label]) => ({ label, value: conjugation[key] }));
        const selected = formEntries[Math.floor(random() * formEntries.length)];
        const correct = selected.value;
        const otherValues = uniqueValues(formEntries.map((entry) => entry.value).filter((value) => value !== correct));
        return choiceQuestion(
          word,
          "conjugation",
          `「${surface(word)}」の${selected.label}はどれですか。`,
          correct,
          otherValues,
          random,
          `${selected.label}: ${correct}\n${explanation(word)}`,
        );
      } catch {
        // Nội dung có verb_class không khớp mặt chữ phải được đưa vào QA,
        // không để một dòng lỗi làm hỏng cả buổi luyện tập.
        return null;
      }
    })
    .filter((question): question is SkillPracticeQuestion => question !== null);
}

/**
 * Tạo một buổi luyện cân bằng nhiều kỹ năng. Mỗi dạng lấy luân phiên nên
 * không còn một đề chỉ lặp một mẫu câu đơn giản; đồng thời không sinh dạng
 * trợ từ/ngữ pháp nếu dữ liệu chưa đủ căn cứ.
 */
export function generateSkillPractice(
  level: JlptLevel,
  words: VocabWord[],
  examples: VocabExample[],
  count = 15,
  random: () => number = Math.random,
): SkillPracticeSet {
  const levelWords = words.filter((word) => word.jlpt === level && !word.isHidden);
  const ids = new Set(levelWords.map((word) => word.id));
  const levelExamples = examples.filter((example) => ids.has(example.vocabId));
  const wordsById = new Map(levelWords.map((word) => [word.id, word]));

  const pools: Record<SkillPracticeKind, SkillPracticeQuestion[]> = {
    meaning: buildMeaningPool(levelWords, random),
    word: buildWordPool(levelWords, random),
    reading: buildReadingPool(levelWords, random),
    context: buildContextPool(levelExamples, wordsById, random),
    comprehension: buildComprehensionPool(levelExamples, wordsById, random),
    conjugation: buildConjugationPool(levelWords, random),
  };
  const availableKinds = (Object.keys(pools) as SkillPracticeKind[]).filter((kind) => pools[kind].length > 0);
  const questions: SkillPracticeQuestion[] = [];
  const usedVocabIds = new Set<string>();

  // Vòng đầu ưu tiên mỗi từ chỉ xuất hiện một lần trong cả buổi.
  while (questions.length < count) {
    let added = false;
    for (const kind of availableKinds) {
      const index = pools[kind].findIndex((question) => !usedVocabIds.has(question.vocabId));
      if (index < 0) continue;
      const [question] = pools[kind].splice(index, 1);
      questions.push(question);
      usedVocabIds.add(question.vocabId);
      added = true;
      if (questions.length >= count) break;
    }
    if (!added) break;
  }

  // Kho dữ liệu rất nhỏ vẫn được phép lặp từ, nhưng không lặp nguyên câu hỏi.
  if (questions.length < count) {
    const usedPrompts = new Set(questions.map((question) => question.prompt));
    const remaining = shuffle(
      availableKinds.flatMap((kind) => pools[kind]).filter((question) => !usedPrompts.has(question.prompt)),
      random,
    );
    questions.push(...remaining.slice(0, count - questions.length));
  }

  const countsByKind: Partial<Record<SkillPracticeKind, number>> = {};
  for (const question of questions) countsByKind[question.kind] = (countsByKind[question.kind] ?? 0) + 1;
  return { questions: shuffle(questions, random), availableKinds, countsByKind };
}

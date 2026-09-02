import { normalizeDictionaryForm } from "@/lib/conjugation";
import { GENERATABLE_KINDS, type BlueprintSection, type JlptBlueprint } from "@/lib/jlpt-blueprint";
import type { GrammarQuestionRow } from "@/lib/data/grammar-service";
import type { VocabExample, VocabWord } from "@/lib/types";

export interface GeneratedQuestion {
  vocabId?: string;
  prompt: string;
  options?: string[];
  correctIndex?: number;
  answer?: string;
  explanation?: string;
}

function generateGrammarQuestions(
  count: number,
  questions: GrammarQuestionRow[],
  kind: "grammar1" | "grammar2",
): GeneratedQuestion[] | null {
  const candidates = questions.filter((question) => {
    const isComposition = question.question_type === "reorder_sentence";
    if ((kind === "grammar2") !== isComposition) return false;
    const choices = [question.choice_1, question.choice_2, question.choice_3, question.choice_4].filter(
      (choice): choice is string => Boolean(choice?.trim()),
    );
    const isTyped = choices.length === 0 && Boolean(question.correct_answer.trim());
    return isTyped || (choices.length === 4 && new Set(choices).size === 4 && choices.includes(question.correct_answer));
  });
  const generated = shuffle(candidates)
    .slice(0, count)
    .map((question) => {
      const choices = [question.choice_1, question.choice_2, question.choice_3, question.choice_4].filter(
        (choice): choice is string => Boolean(choice?.trim()),
      );
      const options = choices.length === 4 ? shuffle(choices) : undefined;
      const context = [
        question.grammar_pattern && `${question.grammar_pattern}: ${question.grammar_meaning_vi ?? ""}`.trim(),
        question.grammar_connection && `Cách nối: ${question.grammar_connection}`,
        question.explanation_vi,
        `Đáp án: ${question.correct_answer}`,
      ].filter(Boolean).join("\n");
      return {
        prompt: question.question_text,
        options,
        correctIndex: options?.indexOf(question.correct_answer),
        answer: options ? undefined : question.correct_answer,
        explanation: context,
      } satisfies GeneratedQuestion;
    });
  return generated.length === count ? generated : null;
}

export interface GeneratedSection {
  kind: BlueprintSection["kind"];
  title: string;
  questions: GeneratedQuestion[];
  /** false = chưa đủ nội dung có căn cứ để sinh phần này. */
  available: boolean;
}

export interface GeneratedTest {
  sections: GeneratedSection[];
  totalQuestions: number;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function uniqueBy<T>(items: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const value = key(item);
    if (!value || seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

function wordSurface(word: VocabWord): string {
  return normalizeDictionaryForm(word.dictionaryForm || word.word);
}

function explanationForWord(word: VocabWord): string {
  return `${wordSurface(word)}（${normalizeDictionaryForm(word.reading)}）: ${word.meaningVi}`;
}

function distractorsForWord(word: VocabWord, words: VocabWord[], value: (candidate: VocabWord) => string): string[] {
  const correct = value(word);
  const sameType = words.filter((candidate) => candidate.id !== word.id && candidate.partOfSpeech === word.partOfSpeech);
  return uniqueBy([...shuffle(sameType), ...shuffle(words)], value)
    .filter((candidate) => value(candidate) !== correct)
    .map(value)
    .slice(0, 3);
}

function buildChoice(word: VocabWord, prompt: string, correct: string, distractors: string[]): GeneratedQuestion | null {
  if (distractors.length < 3) return null;
  const options = shuffle([correct, ...distractors]);
  return {
    vocabId: word.id,
    prompt,
    options,
    correctIndex: options.indexOf(correct),
    explanation: explanationForWord(word),
  };
}

function generateKanjiReadingQuestions(count: number, words: VocabWord[]): GeneratedQuestion[] | null {
  const candidates = uniqueBy(
    words.filter((word) => /[一-鿿]/u.test(wordSurface(word)) && normalizeDictionaryForm(word.reading) !== wordSurface(word)),
    (word) => `${wordSurface(word)}\u0000${normalizeDictionaryForm(word.reading)}`,
  );
  const questions = shuffle(candidates)
    .map((word) =>
      buildChoice(
        word,
        `「${wordSurface(word)}」の読み方はどれですか。`,
        normalizeDictionaryForm(word.reading),
        distractorsForWord(word, candidates, (candidate) => normalizeDictionaryForm(candidate.reading)),
      ),
    )
    .filter((question): question is GeneratedQuestion => question !== null)
    .slice(0, count);
  return questions.length === count ? questions : null;
}

function generateKanjiWritingQuestions(count: number, words: VocabWord[]): GeneratedQuestion[] | null {
  const candidates = uniqueBy(
    words.filter((word) => /[一-鿿]/u.test(wordSurface(word)) && normalizeDictionaryForm(word.reading) !== wordSurface(word)),
    wordSurface,
  );
  const questions = shuffle(candidates)
    .map((word) =>
      buildChoice(
        word,
        `「${normalizeDictionaryForm(word.reading)}」— ${word.meaningVi}。正しい表記はどれですか。`,
        wordSurface(word),
        distractorsForWord(word, candidates, wordSurface),
      ),
    )
    .filter((question): question is GeneratedQuestion => question !== null)
    .slice(0, count);
  return questions.length === count ? questions : null;
}

/** Sinh câu 文脈規定; nhiễu ưu tiên cùng từ loại rồi mới dùng từ loại khác. */
function generateContextVocabQuestions(count: number, examples: VocabExample[], wordsById: Map<string, VocabWord>): GeneratedQuestion[] | null {
  const usableExamples = uniqueBy(
    examples.filter((example) => example.clozeJp.includes("_____") && example.answer.trim().length > 0),
    (example) => example.clozeJp,
  );
  if (usableExamples.length < count || usableExamples.length < 4) return null;

  const chosen = shuffle(usableExamples).slice(0, count);
  const questions = chosen.map((example) => {
    const word = wordsById.get(example.vocabId);
    if (!word) return null;
    const sameType = usableExamples.filter((candidate) => {
      const candidateWord = wordsById.get(candidate.vocabId);
      return candidate.answer !== example.answer && candidateWord?.partOfSpeech === word.partOfSpeech;
    });
    const distractors = uniqueBy([...shuffle(sameType), ...shuffle(usableExamples)], (candidate) => candidate.answer)
      .filter((candidate) => candidate.answer !== example.answer)
      .map((candidate) => candidate.answer)
      .slice(0, 3);
    if (distractors.length < 3) return null;
    const options = shuffle([example.answer, ...distractors]);
    return {
      vocabId: example.vocabId,
      prompt: example.clozeJp,
      options,
      correctIndex: options.indexOf(example.answer),
      explanation: `${example.exampleJp} — ${example.exampleVi}\n${explanationForWord(word)}`,
    } satisfies GeneratedQuestion;
  });
  if (questions.some((question) => question === null)) return null;
  return questions as GeneratedQuestion[];
}

/** Sinh một đề từ nội dung đúng cấp độ; phần thiếu dữ liệu được đánh dấu rõ, không bịa. */
export function generatePracticeTest(
  blueprint: JlptBlueprint,
  words: VocabWord[],
  examples: VocabExample[],
  grammarQuestions: GrammarQuestionRow[] = [],
): GeneratedTest {
  const levelWords = words.filter((word) => word.jlpt === blueprint.level && !word.isHidden);
  const levelWordIds = new Set(levelWords.map((word) => word.id));
  const levelExamples = examples.filter((example) => levelWordIds.has(example.vocabId));
  const wordsById = new Map(levelWords.map((word) => [word.id, word]));

  const sections: GeneratedSection[] = blueprint.sections.map((section) => {
    if (!GENERATABLE_KINDS.includes(section.kind)) {
      return {
        kind: section.kind,
        title: section.title,
        questions: [],
        available: false,
      };
    }
    const questions = section.kind === "grammar1" || section.kind === "grammar2"
      ? generateGrammarQuestions(section.questionCount, grammarQuestions, section.kind)
      : section.kind === "kanji_reading"
        ? generateKanjiReadingQuestions(section.questionCount, levelWords)
        : section.kind === "kanji_writing"
          ? generateKanjiWritingQuestions(section.questionCount, levelWords)
          : generateContextVocabQuestions(section.questionCount, levelExamples, wordsById);
    if (!questions)
      return {
        kind: section.kind,
        title: section.title,
        questions: [],
        available: false,
      };
    return {
      kind: section.kind,
      title: section.title,
      questions,
      available: true,
    };
  });

  return {
    sections,
    totalQuestions: sections.reduce((sum, section) => sum + section.questions.length, 0),
  };
}

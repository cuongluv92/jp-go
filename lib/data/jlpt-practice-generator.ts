import { GENERATABLE_KINDS, type BlueprintSection, type JlptBlueprint } from "@/lib/jlpt-blueprint";
import type { VocabExample, VocabWord } from "@/lib/types";

export interface GeneratedQuestion {
  vocabId: string;
  prompt: string;
  options: string[];
  correctIndex: number;
}

export interface GeneratedSection {
  kind: BlueprintSection["kind"];
  title: string;
  questions: GeneratedQuestion[];
  /** false = chưa đủ nội dung (kanji/ngữ pháp/đoạn văn đọc hiểu...) để tự sinh phần này. */
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

/**
 * Sinh câu hỏi trắc nghiệm dạng "文脈規定" (điền từ đúng vào câu theo ngữ
 * cảnh) từ `VocabExample.clozeJp`/`answer` có sẵn — đáp án nhiễu lấy từ
 * `answer` của các ví dụ khác (không bịa quan hệ nghĩa/đồng nghĩa).
 */
function generateContextVocabQuestions(count: number, examples: VocabExample[]): GeneratedQuestion[] | null {
  const usableExamples = examples.filter((e) => e.clozeJp.includes("_____") && e.answer.trim().length > 0);
  if (usableExamples.length < count || usableExamples.length < 4) return null;

  const chosen = shuffle(usableExamples).slice(0, count);
  return chosen.map((example) => {
    const distractorPool = usableExamples.filter((e) => e.answer !== example.answer);
    const distractors = shuffle(distractorPool)
      .map((e) => e.answer)
      .filter((answer, index, arr) => arr.indexOf(answer) === index)
      .slice(0, 3);
    const options = shuffle([example.answer, ...distractors]);
    return {
      vocabId: example.vocabId,
      prompt: example.clozeJp,
      options,
      correctIndex: options.indexOf(example.answer),
    };
  });
}

/** Sinh 1 đề luyện tập theo `blueprint`, dùng nội dung từ vựng của đúng cấp độ trong blueprint. */
export function generatePracticeTest(blueprint: JlptBlueprint, words: VocabWord[], examples: VocabExample[]): GeneratedTest {
  const levelWordIds = new Set(words.filter((w) => w.jlpt === blueprint.level && !w.isHidden).map((w) => w.id));
  const levelExamples = examples.filter((e) => levelWordIds.has(e.vocabId));

  const sections: GeneratedSection[] = blueprint.sections.map((section) => {
    if (!GENERATABLE_KINDS.includes(section.kind)) {
      return { kind: section.kind, title: section.title, questions: [], available: false };
    }
    const questions = generateContextVocabQuestions(section.questionCount, levelExamples);
    if (!questions) return { kind: section.kind, title: section.title, questions: [], available: false };
    return { kind: section.kind, title: section.title, questions, available: true };
  });

  return { sections, totalQuestions: sections.reduce((sum, s) => sum + s.questions.length, 0) };
}

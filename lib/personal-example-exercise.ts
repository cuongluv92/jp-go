import { normalizeJapaneseAnswer } from "@/lib/japanese-text";

export type PersonalExerciseMode = "cloze" | "particle" | "order" | "jp_to_vi" | "vi_to_jp";

export interface PersonalExercise {
  mode: PersonalExerciseMode;
  prompt: string;
  answer: string;
  options?: string[];
  chunks?: string[];
}

const PARTICLES = ["は", "が", "を", "に", "で", "へ", "と", "から", "まで", "より", "の", "も"];

function deterministicShuffle(items: string[], seedText: string): string[] {
  const result = [...items];
  let seed = Array.from(seedText).reduce((sum, char) => sum + (char.codePointAt(0) ?? 0), 0);
  for (let index = result.length - 1; index > 0; index -= 1) {
    seed = (seed * 9301 + 49297) % 233280;
    const swapIndex = seed % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  if (result.join("") === items.join("") && result.length > 1) result.reverse();
  return result;
}

export function splitJapaneseChunks(sentence: string): string[] {
  const chunks = sentence.match(/.*?(?:から|まで|より|は|が|を|に|で|へ|と|の|も|、|。|！|？|$)/g)?.filter(Boolean) ?? [];
  if (chunks.length >= 2) return chunks;
  const chars = Array.from(sentence);
  const size = Math.max(2, Math.ceil(chars.length / 4));
  return Array.from({ length: Math.ceil(chars.length / size) }, (_, index) => chars.slice(index * size, (index + 1) * size).join(""));
}

export function availablePersonalExerciseModes(sentenceJp: string, sentenceVi: string, focusText: string): PersonalExerciseMode[] {
  const modes: PersonalExerciseMode[] = ["order"];
  if (focusText && sentenceJp.includes(focusText)) modes.unshift("cloze");
  if (PARTICLES.some((particle) => sentenceJp.includes(particle))) modes.push("particle");
  if (sentenceVi.trim()) modes.push("jp_to_vi", "vi_to_jp");
  return modes;
}

export function buildPersonalExercise(
  mode: PersonalExerciseMode,
  sentenceJp: string,
  sentenceVi: string,
  focusText: string,
): PersonalExercise {
  if (mode === "cloze") {
    const answer = focusText && sentenceJp.includes(focusText) ? focusText : "";
    return { mode, prompt: answer ? sentenceJp.replace(answer, "＿＿＿") : sentenceJp, answer };
  }
  if (mode === "particle") {
    const answer = PARTICLES.find((particle) => sentenceJp.includes(particle)) ?? "";
    const distractors = PARTICLES.filter((particle) => particle !== answer).slice(0, 3);
    return {
      mode,
      prompt: answer ? sentenceJp.replace(answer, "（　）") : sentenceJp,
      answer,
      options: deterministicShuffle([answer, ...distractors], sentenceJp),
    };
  }
  if (mode === "order") {
    const chunks = splitJapaneseChunks(sentenceJp);
    return { mode, prompt: "Sắp xếp thành câu đúng", answer: sentenceJp, chunks: deterministicShuffle(chunks, sentenceJp) };
  }
  if (mode === "jp_to_vi") return { mode, prompt: sentenceJp, answer: sentenceVi };
  return { mode, prompt: sentenceVi, answer: sentenceJp };
}

export function isPersonalExerciseAnswerCorrect(value: string, exercise: PersonalExercise): boolean {
  return normalizeJapaneseAnswer(value) === normalizeJapaneseAnswer(exercise.answer);
}

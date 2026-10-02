import type { ContentBlock, ExerciseBlock } from "./content-blocks";

export interface StaticSougouPageSeed {
  sectionCode: string;
  content_blocks: ContentBlock[];
  notes_vi?: string;
}

type ExerciseSeed = Omit<
  ExerciseBlock,
  "question_furigana_tokens" | "choices_furigana_tokens" | "solution_furigana_tokens"
>;

export function ex(seed: ExerciseSeed): ExerciseBlock {
  return {
    question_furigana_tokens: [],
    choices_furigana_tokens: [],
    solution_furigana_tokens: [],
    ...seed,
  };
}

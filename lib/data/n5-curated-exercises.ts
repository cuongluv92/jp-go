import practice01 from "@/quality/n5_practice_bank/n5_practice_set_01.json";
import practice02 from "@/quality/n5_practice_bank/n5_practice_set_02.json";
import practice03 from "@/quality/n5_practice_bank/n5_practice_set_03.json";
import practice03Qa from "@/quality/n5_practice_bank/n5_practice_set_03_qa_resolutions.json";
import challenge01 from "@/quality/n5_practice_bank/n5_challenge_set_01.json";
import challenge02 from "@/quality/n5_practice_bank/n5_challenge_set_02.json";
import challenge02Qa from "@/quality/n5_practice_bank/n5_challenge_set_02_qa_resolutions.json";
import challenge03 from "@/quality/n5_practice_bank/n5_challenge_set_03.json";
import challenge03Qa from "@/quality/n5_practice_bank/n5_challenge_set_03_qa_resolutions.json";

export type CuratedExerciseMode = "practice" | "challenge";

export interface CuratedN5Exercise {
  id: string;
  mode: CuratedExerciseMode;
  domain: string;
  subtype: string;
  difficulty: 1 | 2 | 3;
  instruction_ja?: string;
  instruction_vi?: string;
  stimulus_ja?: string;
  prompt_ja?: string;
  choices?: string[];
  correct_answer: string | string[];
  accepted_answers?: string[];
  explanation_vi?: string;
  targets?: string[];
  skills?: string[];
  lesson_refs?: number[];
}

interface AuthoringDoc {
  items: CuratedN5Exercise[];
}

interface QaDoc {
  replacements?: CuratedN5Exercise[];
}

const AUTHORING_DOCS = [practice01, practice02, practice03, challenge01, challenge02, challenge03] as unknown as AuthoringDoc[];
const QA_DOCS = [practice03Qa, challenge02Qa, challenge03Qa] as unknown as QaDoc[];

function normalizeTarget(value: string): string {
  return value
    .normalize("NFKC")
    .replace(/[\s（）()［］[\]・／/＋+、,。.!！?？~～]/g, "")
    .replace(/です|ます$/u, "")
    .trim();
}

const replacements = new Map<string, CuratedN5Exercise>();
for (const doc of QA_DOCS) {
  for (const item of doc.replacements ?? []) replacements.set(item.id, item);
}

export const CURATED_N5_DETAIL_EXERCISES: CuratedN5Exercise[] = AUTHORING_DOCS.flatMap((doc) => doc.items).map(
  (item) => replacements.get(item.id) ?? item,
);

export function getCuratedN5ExercisesForTargets(
  targets: string[],
  options: { domain?: string; modes?: CuratedExerciseMode[]; limit?: number; contains?: boolean } = {},
): CuratedN5Exercise[] {
  const wanted = targets.map(normalizeTarget).filter(Boolean);
  if (wanted.length === 0) return [];
  const modes = options.modes ?? ["practice", "challenge"];
  const matched = CURATED_N5_DETAIL_EXERCISES.filter((item) => {
    if (!modes.includes(item.mode)) return false;
    if (options.domain && item.domain !== options.domain && item.domain !== "integrated" && item.domain !== "dialogue") return false;
    return (item.targets ?? []).some((rawTarget) => {
      const target = normalizeTarget(rawTarget);
      if (!target) return false;
      if (wanted.includes(target)) return true;
      if (!options.contains || target.length < 2) return false;
      return wanted.some((candidate) => candidate.length >= 2 && (candidate.includes(target) || target.includes(candidate)));
    });
  });

  const unique = Array.from(new Map(matched.map((item) => [item.id, item])).values());
  unique.sort((a, b) => a.difficulty - b.difficulty || (a.mode === "challenge" ? 1 : -1));
  return unique.slice(0, options.limit ?? unique.length);
}

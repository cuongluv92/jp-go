import { getConjugation, normalizeDictionaryForm } from "@/lib/conjugation";
import type { Conjugation, VocabWord } from "@/lib/types";

type VerbForm = Extract<Conjugation, { kind: "verb" }>;
type AdvancedKey =
  | "potentialForm"
  | "volitionalForm"
  | "passiveForm"
  | "causativeForm"
  | "causativePassiveForm"
  | "imperativeForm";

const UNAVAILABLE = "—";
const SPECIAL_HONORIFIC_RU = new Set(["下さる", "くださる", "なさる", "いらっしゃる", "おっしゃる"]);

function hideForms(form: VerbForm, keys: AdvancedKey[]): VerbForm {
  const next = { ...form };
  for (const key of keys) next[key] = UNAVAILABLE;
  return next;
}

/**
 * Lọc các dạng tuy tạo được bằng quy tắc hình thái nhưng dễ sai cách dùng
 * của chính entry đang học. UI sẽ hiển thị — thay vì dạy một dạng gây hiểu nhầm.
 */
export function getContextualConjugation(entry: VocabWord): Conjugation | null {
  const base = getConjugation(entry);
  if (!base || base.kind !== "verb") return base;

  const dictionaryForm = normalizeDictionaryForm(entry.dictionaryForm || entry.word);
  const usageNote = entry.usageNote ?? "";
  let result = base;

  // する ở construction cảm giác/tri giác: 音・におい・味がする.
  if (dictionaryForm === "する" && entry.particlePatterns.some((pattern) => pattern.includes("Nがする"))) {
    result = hideForms(result, [
      "potentialForm",
      "volitionalForm",
      "passiveForm",
      "causativeForm",
      "causativePassiveForm",
      "imperativeForm",
    ]);
  }

  // Với 尊敬語, 受身/使役 máy móc dễ đổi nghĩa hoặc thành cách nói không nên dạy.
  if (usageNote.includes("尊敬語")) {
    result = hideForms(result, ["passiveForm", "causativeForm", "causativePassiveForm"]);
    if (SPECIAL_HONORIFIC_RU.has(dictionaryForm)) result = hideForms(result, ["potentialForm"]);
  }

  // おる trong entry này là 謙譲語 của いる; おられる rất dễ bị hiểu thành 尊敬語.
  if (dictionaryForm === "おる" && usageNote.includes("謙譲語")) {
    result = hideForms(result, [
      "potentialForm",
      "passiveForm",
      "causativeForm",
      "causativePassiveForm",
      "imperativeForm",
    ]);
  }

  return result;
}

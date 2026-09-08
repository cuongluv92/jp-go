import type { Conjugation, IAdjectiveConjugation, NaAdjectiveConjugation, PartOfSpeech, VerbClass, VerbConjugation } from "@/lib/types";

const GODAN_MASU_STEM: Record<string, string> = {
  う: "い", く: "き", ぐ: "ぎ", す: "し", つ: "ち", ぬ: "に", ぶ: "び", む: "み", る: "り",
};
const GODAN_A_STEM: Record<string, string> = {
  う: "わ", く: "か", ぐ: "が", す: "さ", つ: "た", ぬ: "な", ぶ: "ば", む: "ま", る: "ら",
};
const GODAN_E_STEM: Record<string, string> = {
  う: "え", く: "け", ぐ: "げ", す: "せ", つ: "て", ぬ: "ね", ぶ: "べ", む: "め", る: "れ",
};
const GODAN_VOLITIONAL_STEM: Record<string, string> = {
  う: "お", く: "こ", ぐ: "ご", す: "そ", つ: "と", ぬ: "の", ぶ: "ぼ", む: "も", る: "ろ",
};

const HONORIFIC_RU_SPECIALS: Record<string, { masuForm: string; imperativeForm: string }> = {
  下さる: { masuForm: "下さいます", imperativeForm: "下さい" },
  くださる: { masuForm: "くださいます", imperativeForm: "ください" },
  なさる: { masuForm: "なさいます", imperativeForm: "なさい" },
  いらっしゃる: { masuForm: "いらっしゃいます", imperativeForm: "いらっしゃい" },
  おっしゃる: { masuForm: "おっしゃいます", imperativeForm: "おっしゃい" },
};

const TRAILING_SENSE_MARKERS = /[①-⑳]+$/u;
const VARIANT_SEPARATOR = /[・／]/u;
const UNAVAILABLE_FORM = "—";

export function normalizeDictionaryForm(value: string): string {
  return value.trim().replace(TRAILING_SENSE_MARKERS, "");
}

function splitVariants(value: string): string[] {
  return normalizeDictionaryForm(value).split(VARIANT_SEPARATOR).map((part) => part.trim()).filter(Boolean);
}

function godanTeTaSuffix(lastKana: string): { te: string; ta: string } {
  switch (lastKana) {
    case "く": return { te: "いて", ta: "いた" };
    case "ぐ": return { te: "いで", ta: "いだ" };
    case "す": return { te: "して", ta: "した" };
    case "う":
    case "つ":
    case "る": return { te: "って", ta: "った" };
    case "ぬ":
    case "ぶ":
    case "む": return { te: "んで", ta: "んだ" };
    default: throw new Error(`Không nhận diện được đuôi động từ godan: ${lastKana}`);
  }
}

/** 行く, うまくいく và auxiliary て/で行く・て/でいく dùng って/った. */
function usesIkuTeTaException(dictionaryForm: string): boolean {
  return (
    dictionaryForm === "行く" ||
    dictionaryForm === "いく" ||
    dictionaryForm === "うまくいく" ||
    dictionaryForm === "上手くいく" ||
    /(?:て|で)(?:行く|いく)$/u.test(dictionaryForm)
  );
}

function conjugateGodan(dictionaryForm: string): VerbConjugation {
  const stem = dictionaryForm.slice(0, -1);
  const last = dictionaryForm.slice(-1);
  const masuStem = GODAN_MASU_STEM[last];
  const aStem = GODAN_A_STEM[last];
  const eStem = GODAN_E_STEM[last];
  const volitionalStem = GODAN_VOLITIONAL_STEM[last];
  if (!masuStem || !aStem || !eStem || !volitionalStem) {
    throw new Error(`"${dictionaryForm}" không phải động từ godan hợp lệ (đuôi "${last}")`);
  }

  const { te, ta } = usesIkuTeTaException(dictionaryForm) ? { te: "って", ta: "った" } : godanTeTaSuffix(last);
  const honorific = HONORIFIC_RU_SPECIALS[dictionaryForm];
  const isAru = dictionaryForm === "ある";
  return {
    kind: "verb",
    dictionaryForm,
    masuForm: honorific?.masuForm ?? `${stem}${masuStem}ます`,
    teForm: `${stem}${te}`,
    naiForm: isAru ? "ない" : `${stem}${aStem}ない`,
    naiTaForm: isAru ? "なかった" : `${stem}${aStem}なかった`,
    taForm: `${stem}${ta}`,
    potentialForm: isAru ? UNAVAILABLE_FORM : `${stem}${eStem}る`,
    volitionalForm: `${stem}${volitionalStem}う`,
    passiveForm: isAru ? UNAVAILABLE_FORM : `${stem}${aStem}れる`,
    causativeForm: isAru ? UNAVAILABLE_FORM : `${stem}${aStem}せる`,
    causativePassiveForm: isAru ? UNAVAILABLE_FORM : `${stem}${aStem}せられる`,
    imperativeForm: honorific?.imperativeForm ?? `${stem}${eStem}`,
    conditionalForm: `${stem}${eStem}ば`,
  };
}

function conjugateIchidan(dictionaryForm: string): VerbConjugation {
  const stem = dictionaryForm.slice(0, -1);
  return {
    kind: "verb", dictionaryForm,
    masuForm: `${stem}ます`, teForm: `${stem}て`, naiForm: `${stem}ない`, naiTaForm: `${stem}なかった`, taForm: `${stem}た`,
    potentialForm: `${stem}られる`, volitionalForm: `${stem}よう`, passiveForm: `${stem}られる`, causativeForm: `${stem}させる`,
    causativePassiveForm: `${stem}させられる`, imperativeForm: `${stem}ろ`, conditionalForm: `${stem}れば`,
  };
}

function conjugateSuru(dictionaryForm: string): VerbConjugation {
  const stem = dictionaryForm.endsWith("する") ? dictionaryForm.slice(0, -2) : "";
  const potentialStem = stem.endsWith("を") ? `${stem.slice(0, -1)}が` : stem;
  return {
    kind: "verb", dictionaryForm,
    masuForm: `${stem}します`, teForm: `${stem}して`, naiForm: `${stem}しない`, naiTaForm: `${stem}しなかった`, taForm: `${stem}した`,
    potentialForm: `${potentialStem}できる`, volitionalForm: `${stem}しよう`, passiveForm: `${stem}される`, causativeForm: `${stem}させる`,
    causativePassiveForm: `${stem}させられる`, imperativeForm: `${stem}しろ`, conditionalForm: `${stem}すれば`,
  };
}

function conjugateKuru(dictionaryForm: string): VerbConjugation {
  const stem = dictionaryForm.endsWith("来る") ? dictionaryForm.slice(0, -2) : "";
  return {
    kind: "verb", dictionaryForm,
    masuForm: `${stem}来ます`, teForm: `${stem}来て`, naiForm: `${stem}来ない`, naiTaForm: `${stem}来なかった`, taForm: `${stem}来た`,
    potentialForm: `${stem}来られる`, volitionalForm: `${stem}来よう`, passiveForm: `${stem}来られる`, causativeForm: `${stem}来させる`,
    causativePassiveForm: `${stem}来させられる`, imperativeForm: `${stem}来い`, conditionalForm: `${stem}来れば`,
  };
}

function conjugateSingleVerb(dictionaryForm: string, verbClass: VerbClass): VerbConjugation {
  switch (verbClass) {
    case "godan": return conjugateGodan(dictionaryForm);
    case "ichidan": return conjugateIchidan(dictionaryForm);
    case "suru": return conjugateSuru(dictionaryForm);
    case "kuru": return conjugateKuru(dictionaryForm);
    default: throw new Error(`Thiếu verbClass cho động từ "${dictionaryForm}"`);
  }
}

function joinVerbVariants(forms: VerbConjugation[]): VerbConjugation {
  const join = (key: keyof VerbConjugation) => forms.map((form) => String(form[key])).join("／");
  return {
    kind: "verb",
    dictionaryForm: join("dictionaryForm"), masuForm: join("masuForm"), teForm: join("teForm"), naiForm: join("naiForm"),
    naiTaForm: join("naiTaForm"), taForm: join("taForm"), potentialForm: join("potentialForm"), volitionalForm: join("volitionalForm"),
    passiveForm: join("passiveForm"), causativeForm: join("causativeForm"), causativePassiveForm: join("causativePassiveForm"),
    imperativeForm: join("imperativeForm"), conditionalForm: join("conditionalForm"),
  };
}

export function conjugateVerb(dictionaryForm: string, verbClass: VerbClass): VerbConjugation {
  const forms = splitVariants(dictionaryForm).map((variant) => conjugateSingleVerb(variant, verbClass));
  if (forms.length === 0) throw new Error(`Dạng từ điển rỗng: "${dictionaryForm}"`);
  return forms.length === 1 ? forms[0] : joinVerbVariants(forms);
}

const II_DERIVED_LEXEMES = new Set(["かっこいい", "ちょうどいい"]);
const II_PHRASE_ENDING = /(?:が|に|の|は|も|で)いい$/u;

function iAdjectiveStem(dictionaryForm: string): string {
  if (dictionaryForm === "良い" || dictionaryForm === "いい") return "よ";
  if (dictionaryForm.endsWith("良い")) return `${dictionaryForm.slice(0, -2)}よ`;
  if (II_DERIVED_LEXEMES.has(dictionaryForm) || II_PHRASE_ENDING.test(dictionaryForm)) return `${dictionaryForm.slice(0, -2)}よ`;
  return dictionaryForm.slice(0, -1);
}

export function conjugateIAdjective(dictionaryForm: string): IAdjectiveConjugation {
  dictionaryForm = normalizeDictionaryForm(dictionaryForm);
  const stem = iAdjectiveStem(dictionaryForm);
  return {
    kind: "i_adjective", dictionaryForm,
    negativeForm: `${stem}くない`, pastForm: `${stem}かった`, negativePastForm: `${stem}くなかった`,
    teForm: `${stem}くて`, conditionalForm: `${stem}ければ`,
  };
}

export function conjugateNaAdjective(stem: string): NaAdjectiveConjugation {
  stem = normalizeDictionaryForm(stem).replace(/[なだ]$/u, "");
  return {
    kind: "na_adjective", dictionaryForm: `${stem}だ`, negativeForm: `${stem}ではない`, pastForm: `${stem}だった`,
    negativePastForm: `${stem}ではなかった`, teForm: `${stem}で`, conditionalForm: `${stem}なら`,
  };
}

export function getConjugation(entry: { word: string; dictionaryForm?: string; partOfSpeech: PartOfSpeech; verbClass: VerbClass }): Conjugation | null {
  const dictionaryForm = normalizeDictionaryForm(entry.dictionaryForm || entry.word);
  if (entry.partOfSpeech === "verb" && entry.verbClass) return conjugateVerb(dictionaryForm, entry.verbClass);
  if (entry.partOfSpeech === "i_adjective") return conjugateIAdjective(dictionaryForm);
  if (entry.partOfSpeech === "na_adjective") return conjugateNaAdjective(dictionaryForm);
  return null;
}

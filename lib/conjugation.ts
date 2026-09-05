import type { Conjugation, IAdjectiveConjugation, NaAdjectiveConjugation, PartOfSpeech, VerbClass, VerbConjugation } from "@/lib/types";

/**
 * Bộ máy chia động từ/tính từ tiếng Nhật — đầy đủ các thể thường dùng để học
 * (không chỉ 6-7 thể cơ bản): 辞書形/ます形/て形/ない形/なかった形/た形/可能形/
 * 意向形/受身形/使役形/使役受身形/命令形/ば形. Theo quy tắc âm tiện (音便)
 * chuẩn — không cắt chuỗi máy móc. `verbClass` luôn được truyền vào (không tự
 * suy đoán từ chính tả) vì động từ 一段/五段 tận cùng bằng る không thể phân
 * biệt chỉ bằng mặt chữ (vd 食べる là 一段, 帰る là 五段).
 */

const GODAN_MASU_STEM: Record<string, string> = {
  う: "い",
  く: "き",
  ぐ: "ぎ",
  す: "し",
  つ: "ち",
  ぬ: "に",
  ぶ: "び",
  む: "み",
  る: "り",
};

/** あ段: dùng cho ない形/なかった形/受身形/使役形/使役受身形 (う → わ, không phải あ). */
const GODAN_A_STEM: Record<string, string> = {
  う: "わ",
  く: "か",
  ぐ: "が",
  す: "さ",
  つ: "た",
  ぬ: "な",
  ぶ: "ば",
  む: "ま",
  る: "ら",
};

/** え段: dùng cho 可能形/命令形/ば形. */
const GODAN_E_STEM: Record<string, string> = {
  う: "え",
  く: "け",
  ぐ: "げ",
  す: "せ",
  つ: "て",
  ぬ: "ね",
  ぶ: "べ",
  む: "め",
  る: "れ",
};

const GODAN_VOLITIONAL_STEM: Record<string, string> = {
  う: "お",
  く: "こ",
  ぐ: "ご",
  す: "そ",
  つ: "と",
  ぬ: "の",
  ぶ: "ぼ",
  む: "も",
  る: "ろ",
};

/**
 * 五段ラ行 nhưng ます形/命令形 có dạng kính ngữ cố định đặc biệt.
 * Các thể còn lại (おっしゃらない／いらっしゃって...) theo quy tắc ラ行.
 */
const HONORIFIC_RU_SPECIALS: Record<string, { masuForm: string; imperativeForm: string }> = {
  "下さる": { masuForm: "下さいます", imperativeForm: "下さい" },
  "くださる": { masuForm: "くださいます", imperativeForm: "ください" },
  "なさる": { masuForm: "なさいます", imperativeForm: "なさい" },
  "いらっしゃる": { masuForm: "いらっしゃいます", imperativeForm: "いらっしゃい" },
  "おっしゃる": { masuForm: "おっしゃいます", imperativeForm: "おっしゃい" },
};

const TRAILING_SENSE_MARKERS = /[①-⑳]+$/u;

/** Bỏ nhãn phân biệt nghĩa khỏi bề mặt hiển thị trước khi chia từ. */
export function normalizeDictionaryForm(value: string): string {
  return value.trim().replace(TRAILING_SENSE_MARKERS, "");
}

/** Âm tiện của て形/た形 theo nhóm phụ âm cuối, dùng chung logic cho cả hai. */
function godanTeTaSuffix(lastKana: string): { te: string; ta: string } {
  switch (lastKana) {
    case "く":
      return { te: "いて", ta: "いた" };
    case "ぐ":
      return { te: "いで", ta: "いだ" };
    case "す":
      return { te: "して", ta: "した" };
    case "う":
    case "つ":
    case "る":
      return { te: "って", ta: "った" };
    case "ぬ":
    case "ぶ":
    case "む":
      return { te: "んで", ta: "んだ" };
    default:
      throw new Error(`Không nhận diện được đuôi động từ godan: ${lastKana}`);
  }
}

/**
 * 行く và các cụm て行く／ていく dùng 行って／いって, không phải 行いて／いいて.
 * Chỉ nhận dạng đúng các bề mặt 行く hoặc auxiliary て/で + いく để tránh
 * biến mọi từ kết thúc bằng chuỗi "いく" thành ngoại lệ.
 */
function usesIkuTeTaException(dictionaryForm: string): boolean {
  return (
    dictionaryForm === "行く" ||
    dictionaryForm.endsWith("て行く") ||
    dictionaryForm.endsWith("で行く") ||
    dictionaryForm === "いく" ||
    dictionaryForm.endsWith("ていく") ||
    dictionaryForm.endsWith("でいく")
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

  return {
    kind: "verb",
    dictionaryForm,
    masuForm: honorific?.masuForm ?? `${stem}${masuStem}ます`,
    teForm: `${stem}${te}`,
    // ある là ngoại lệ: phủ định là ない/なかった, không phải あらない/あらなかった.
    naiForm: dictionaryForm === "ある" ? "ない" : `${stem}${aStem}ない`,
    naiTaForm: dictionaryForm === "ある" ? "なかった" : `${stem}${aStem}なかった`,
    taForm: `${stem}${ta}`,
    potentialForm: `${stem}${eStem}る`,
    volitionalForm: `${stem}${volitionalStem}う`,
    passiveForm: `${stem}${aStem}れる`,
    causativeForm: `${stem}${aStem}せる`,
    causativePassiveForm: `${stem}${aStem}せられる`,
    imperativeForm: honorific?.imperativeForm ?? `${stem}${eStem}`,
    conditionalForm: `${stem}${eStem}ば`,
  };
}

function conjugateIchidan(dictionaryForm: string): VerbConjugation {
  const stem = dictionaryForm.slice(0, -1); // bỏ る
  return {
    kind: "verb",
    dictionaryForm,
    masuForm: `${stem}ます`,
    teForm: `${stem}て`,
    naiForm: `${stem}ない`,
    naiTaForm: `${stem}なかった`,
    taForm: `${stem}た`,
    potentialForm: `${stem}られる`,
    volitionalForm: `${stem}よう`,
    // 一段動詞: 受身形 và 可能形 trùng nhau về mặt chữ (られる), phân biệt bằng ngữ cảnh.
    passiveForm: `${stem}られる`,
    causativeForm: `${stem}させる`,
    causativePassiveForm: `${stem}させられる`,
    imperativeForm: `${stem}ろ`,
    conditionalForm: `${stem}れば`,
  };
}

function conjugateSuru(dictionaryForm: string): VerbConjugation {
  // Từ ghép + する (vd 確認する) chỉ chia phần する; する đứng một mình thì stem rỗng.
  const stem = dictionaryForm.endsWith("する") ? dictionaryForm.slice(0, -2) : "";
  return {
    kind: "verb",
    dictionaryForm,
    masuForm: `${stem}します`,
    teForm: `${stem}して`,
    naiForm: `${stem}しない`,
    naiTaForm: `${stem}しなかった`,
    taForm: `${stem}した`,
    potentialForm: `${stem}できる`,
    volitionalForm: `${stem}しよう`,
    passiveForm: `${stem}される`,
    causativeForm: `${stem}させる`,
    causativePassiveForm: `${stem}させられる`,
    imperativeForm: `${stem}しろ`,
    conditionalForm: `${stem}すれば`,
  };
}

function conjugateKuru(dictionaryForm: string): VerbConjugation {
  // 来る bất quy tắc: đọc thay đổi theo từng dạng chia (来[き]ます, 来[こ]ない...).
  const stem = dictionaryForm.endsWith("来る") ? dictionaryForm.slice(0, -2) : "";
  return {
    kind: "verb",
    dictionaryForm,
    masuForm: `${stem}来ます`,
    teForm: `${stem}来て`,
    naiForm: `${stem}来ない`,
    naiTaForm: `${stem}来なかった`,
    taForm: `${stem}来た`,
    potentialForm: `${stem}来られる`,
    volitionalForm: `${stem}来よう`,
    passiveForm: `${stem}来られる`,
    causativeForm: `${stem}来させる`,
    causativePassiveForm: `${stem}来させられる`,
    imperativeForm: `${stem}来い`,
    conditionalForm: `${stem}来れば`,
  };
}

export function conjugateVerb(dictionaryForm: string, verbClass: VerbClass): VerbConjugation {
  const normalized = normalizeDictionaryForm(dictionaryForm);
  switch (verbClass) {
    case "godan":
      return conjugateGodan(normalized);
    case "ichidan":
      return conjugateIchidan(normalized);
    case "suru":
      return conjugateSuru(normalized);
    case "kuru":
      return conjugateKuru(normalized);
    default:
      throw new Error(`Thiếu verbClass cho động từ "${dictionaryForm}"`);
  }
}

/** 良い/いい là ngoại lệ duy nhất trong い形容詞: chia theo gốc よ, không theo mặt chữ 良い. */
const I_ADJECTIVE_EXCEPTIONS: Record<string, string> = {
  良い: "よ",
  いい: "よ",
};

export function conjugateIAdjective(dictionaryForm: string): IAdjectiveConjugation {
  dictionaryForm = normalizeDictionaryForm(dictionaryForm);
  const stem = I_ADJECTIVE_EXCEPTIONS[dictionaryForm] ?? dictionaryForm.slice(0, -1);
  return {
    kind: "i_adjective",
    dictionaryForm,
    negativeForm: `${stem}くない`,
    pastForm: `${stem}かった`,
    negativePastForm: `${stem}くなかった`,
    teForm: `${stem}くて`,
    conditionalForm: `${stem}ければ`,
  };
}

/** `stem` là gốc な形容詞 chưa gắn だ, vd "静か" (không phải "静かだ"). */
export function conjugateNaAdjective(stem: string): NaAdjectiveConjugation {
  stem = normalizeDictionaryForm(stem).replace(/[なだ]$/u, "");
  return {
    kind: "na_adjective",
    dictionaryForm: `${stem}だ`,
    negativeForm: `${stem}ではない`,
    pastForm: `${stem}だった`,
    negativePastForm: `${stem}ではなかった`,
    teForm: `${stem}で`,
    conditionalForm: `${stem}なら`,
  };
}

/**
 * Trả về bảng chia phù hợp với loại từ, hoặc `null` nếu loại từ đó không có
 * cách chia (danh từ, phó từ, liên từ, trợ từ, biểu hiện — theo mục 9 yêu cầu).
 */
export function getConjugation(entry: { word: string; dictionaryForm?: string; partOfSpeech: PartOfSpeech; verbClass: VerbClass }): Conjugation | null {
  const dictionaryForm = normalizeDictionaryForm(entry.dictionaryForm || entry.word);
  if (entry.partOfSpeech === "verb" && entry.verbClass) {
    return conjugateVerb(dictionaryForm, entry.verbClass);
  }
  if (entry.partOfSpeech === "i_adjective") {
    return conjugateIAdjective(dictionaryForm);
  }
  if (entry.partOfSpeech === "na_adjective") {
    return conjugateNaAdjective(dictionaryForm);
  }
  return null;
}

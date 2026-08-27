import type {
  Conjugation,
  IAdjectiveConjugation,
  NaAdjectiveConjugation,
  PartOfSpeech,
  VerbClass,
  VerbConjugation,
} from "@/lib/types";

/**
 * Bộ máy chia động từ/tính từ tiếng Nhật, theo quy tắc âm tiện (音便) chuẩn —
 * không cắt chuỗi máy móc. `verbClass` luôn được truyền vào (không tự suy đoán
 * từ chính tả) vì động từ 一段/五段 tận cùng bằng る không thể phân biệt chỉ
 * bằng mặt chữ (vd 食べる là 一段, 帰る là 五段).
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

const GODAN_NAI_STEM: Record<string, string> = {
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

const GODAN_POTENTIAL_STEM: Record<string, string> = {
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

function conjugateGodan(dictionaryForm: string): VerbConjugation {
  const stem = dictionaryForm.slice(0, -1);
  const last = dictionaryForm.slice(-1);

  const masuStem = GODAN_MASU_STEM[last];
  const naiStem = GODAN_NAI_STEM[last];
  const potentialStem = GODAN_POTENTIAL_STEM[last];
  const volitionalStem = GODAN_VOLITIONAL_STEM[last];
  if (!masuStem || !naiStem || !potentialStem || !volitionalStem) {
    throw new Error(`"${dictionaryForm}" không phải động từ godan hợp lệ (đuôi "${last}")`);
  }

  // Ngoại lệ bất quy tắc: 行く chia て/た theo う/つ/る (行って/行った), không theo quy tắc く thường.
  const { te, ta } = dictionaryForm === "行く" ? { te: "って", ta: "った" } : godanTeTaSuffix(last);

  return {
    kind: "verb",
    dictionaryForm,
    masuForm: `${stem}${masuStem}ます`,
    teForm: `${stem}${te}`,
    naiForm: `${stem}${naiStem}ない`,
    taForm: `${stem}${ta}`,
    potentialForm: `${stem}${potentialStem}る`,
    volitionalForm: `${stem}${volitionalStem}う`,
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
    taForm: `${stem}た`,
    potentialForm: `${stem}られる`,
    volitionalForm: `${stem}よう`,
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
    taForm: `${stem}した`,
    potentialForm: `${stem}できる`,
    volitionalForm: `${stem}しよう`,
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
    taForm: `${stem}来た`,
    potentialForm: `${stem}来られる`,
    volitionalForm: `${stem}来よう`,
  };
}

export function conjugateVerb(dictionaryForm: string, verbClass: VerbClass): VerbConjugation {
  switch (verbClass) {
    case "godan":
      return conjugateGodan(dictionaryForm);
    case "ichidan":
      return conjugateIchidan(dictionaryForm);
    case "suru":
      return conjugateSuru(dictionaryForm);
    case "kuru":
      return conjugateKuru(dictionaryForm);
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
  const stem = I_ADJECTIVE_EXCEPTIONS[dictionaryForm] ?? dictionaryForm.slice(0, -1);
  return {
    kind: "i_adjective",
    dictionaryForm,
    negativeForm: `${stem}くない`,
    pastForm: `${stem}かった`,
    negativePastForm: `${stem}くなかった`,
    teForm: `${stem}くて`,
  };
}

/** `stem` là gốc な形容詞 chưa gắn だ, vd "静か" (không phải "静かだ"). */
export function conjugateNaAdjective(stem: string): NaAdjectiveConjugation {
  return {
    kind: "na_adjective",
    dictionaryForm: `${stem}だ`,
    negativeForm: `${stem}ではない`,
    pastForm: `${stem}だった`,
    negativePastForm: `${stem}ではなかった`,
    teForm: `${stem}で`,
  };
}

/**
 * Trả về bảng chia phù hợp với loại từ, hoặc `null` nếu loại từ đó không có
 * cách chia (danh từ, phó từ, liên từ, trợ từ, biểu hiện — theo mục 9 yêu cầu).
 */
export function getConjugation(entry: {
  word: string;
  partOfSpeech: PartOfSpeech;
  verbClass: VerbClass;
}): Conjugation | null {
  if (entry.partOfSpeech === "verb" && entry.verbClass) {
    return conjugateVerb(entry.word, entry.verbClass);
  }
  if (entry.partOfSpeech === "i_adjective") {
    return conjugateIAdjective(entry.word);
  }
  if (entry.partOfSpeech === "na_adjective") {
    return conjugateNaAdjective(entry.word);
  }
  return null;
}

import type { VocabWord } from "@/lib/types";

import { TANGO_N3_VERB_COLLOCATIONS } from "./tango-n3-verb-collocations";
import { TANGO_N3_VERB_COLLOCATIONS_2 } from "./tango-n3-verb-collocations-2";
import { TANGO_N3_VERB_COLLOCATIONS_3 } from "./tango-n3-verb-collocations-3";

const SENSE_MARKERS = /[①-⑳]+$/u;
const PURE_KANA = /^[\p{Script=Hiragana}\p{Script=Katakana}ー・]+$/u;

const REVIEWED_VERB_COLLOCATIONS: Record<string, string[]> = {
  ...TANGO_N3_VERB_COLLOCATIONS,
  ...TANGO_N3_VERB_COLLOCATIONS_2,
  ...TANGO_N3_VERB_COLLOCATIONS_3,
};

/**
 * Override có kiểm định cho bộ 単語 N3 tĩnh.
 * File JSON gốc được sinh tự động từ Excel nên không sửa tay trực tiếp.
 * Chỉ thêm mục khi đã xác minh ngôn ngữ; không dùng heuristic để đoán 自/他・nhóm động từ.
 */
export const TANGO_N3_WORD_OVERRIDES: Record<string, Partial<VocabWord>> = {
  achirakochira: {
    partOfSpeech: "expression",
    needsReview: false,
    usageNote:
      "あちらこちら = đây đó/khắp nơi. Có tính chất chỉ phương hướng và có thể dùng kiểu danh từ/đại từ (あちらこちらに・あちらこちらの) hoặc trạng ngữ; vì schema chỉ chọn một nhãn, lưu là 表現 để không ép thành 副詞 thuần.",
    naturalnessNote: "",
  },
  amari: {
    needsReview: false,
    usageNote:
      "余り（あまり）ở entry này là danh từ: phần dư/phần còn lại. Phân biệt với phó từ あまり〜ない = không… lắm.",
    naturalnessNote: "",
  },
  itazura: {
    needsReview: false,
    usageNote:
      "いたずら ở entry này học nghĩa danh từ: trò nghịch/nghịch ngợm. Từ này cũng có cách dùng kiểu 形容動詞 như いたずらな子; không vì vậy mà đổi mọi cách dùng sang な形容詞.",
    naturalnessNote: "",
  },
  eco: {
    needsReview: false,
    usageNote:
      "エコ là dạng rút gọn thông dụng của エコロジー. Reading của chính headword là エコ; thường dùng trong các cụm như エコバッグ・エコカー・エコな生活.",
    naturalnessNote: "",
  },
  oshaberi: {
    needsReview: false,
    usageNote:
      "おしゃべり có cả cách dùng danh từ (おしゃべりする = tán gẫu) và kiểu 形容動詞 (おしゃべりな人 = người hay nói). Entry này giữ nghĩa danh từ chính.",
    naturalnessNote: "",
  },
  kara: {
    needsReview: false,
    usageNote:
      "空（から）ở entry này là danh từ chỉ trạng thái trống/rỗng. Bổ nghĩa danh từ bằng の: 空の箱; không nói 空な箱.",
    naturalnessNote: "",
  },
  kanshin1: {
    needsReview: false,
    usageNote:
      "感心 có cách dùng danh từ/サ変 (感心する = cảm phục) và cũng có 形容動詞 như 感心な子. Entry này giữ nghĩa danh từ chính nhưng ghi rõ cả hai cách dùng.",
    naturalnessNote: "",
  },
  jama: {
    needsReview: false,
    usageNote:
      "邪魔 là ［名・形動］: 邪魔をする／邪魔になる và 邪魔な物 đều tự nhiên. Entry này giữ nhãn 名詞, còn cách dùng な được ghi rõ ở đây.",
    naturalnessNote: "",
  },
  hougaku: { needsReview: false, naturalnessNote: "" },
  toshishita: { needsReview: false, naturalnessNote: "" },

  instantshokuhin: { reading: "インスタントしょくひん" },
  manaita: { reading: "まないた" },
  shikataganai: { reading: "しかたがない", dictionaryForm: "しかたがない" },
  daga: { reading: "だが／ですが" },
  are: { reading: "あれ／あれっ" },

  kaku1: { word: "かく①", dictionaryForm: "かく", reading: "かく" },
  kaku2: { word: "かく②", dictionaryForm: "かく", reading: "かく" },

  shaberu: {
    transitivity: "transitive",
    particlePatterns: ["人としゃべる", "内容をしゃべる"],
    usageNote:
      "喋る（しゃべる）は国語辞典では他動詞。人としゃべる の と は相手を示し、内容をしゃべる のように を も取れる。",
  },
  machigau: {
    transitivity: "intransitive",
    usageNote:
      "間違う は本来 自動詞。現代語では 答えを間違う・道を間違う のように他動詞的にも非常によく使うため、を があるだけで別の他動詞と決めつけない。",
  },
  gorannireru: {
    word: "ご覧に入れる",
    dictionaryForm: "ご覧に入れる",
    reading: "ごらんにいれる",
    particlePatterns: ["〜をご覧に入れる"],
    usageNote: "ご覧に入れる は『見せる』の謙譲語。お目にかける と同じ方向の敬語表現。",
  },
};

export function applyTangoN3WordOverride(input: VocabWord): VocabWord {
  const override = TANGO_N3_WORD_OVERRIDES[input.id] ?? {};
  const cleanWord = input.word.replace(SENSE_MARKERS, "");
  const sourceReading = input.reading.trim().replace(SENSE_MARKERS, "");
  const safeKanaReading = !sourceReading && PURE_KANA.test(cleanWord) ? cleanWord : sourceReading;
  const reviewedCollocations = override.collocations ?? REVIEWED_VERB_COLLOCATIONS[input.id] ?? input.collocations;

  return {
    ...input,
    reading: safeKanaReading,
    ...override,
    collocations: reviewedCollocations,
  };
}

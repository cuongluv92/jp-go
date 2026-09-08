import { describe, expect, it } from "vitest";

import { getContextualConjugation } from "@/lib/conjugation-context";
import type { VocabWord } from "@/lib/types";

const baseWord = {
  id: "test",
  word: "する",
  dictionaryForm: "する",
  kanji: "",
  reading: "する",
  meaningVi: "làm",
  partOfSpeech: "verb",
  verbClass: "suru",
  transitivity: null,
  particlePatterns: [],
  usagePatterns: [],
  collocations: [],
  register: "neutral",
  usageNote: "",
  commonMistake: "",
  similarWords: "",
  naturalnessNote: "",
  jlpt: "N4",
  needsReview: false,
  progress: {
    status: "chua_hoc",
    isFavorite: false,
    timesCorrect: 0,
    timesWrong: 0,
    lastReviewedAt: null,
    nextReviewAt: null,
    intervalDays: 1,
    easeFactor: 2.5,
    repetitions: 0,
  },
} satisfies VocabWord;

function verbForm(word: VocabWord) {
  const result = getContextualConjugation(word);
  expect(result?.kind).toBe("verb");
  if (!result || result.kind !== "verb") throw new Error("expected verb conjugation");
  return result;
}

describe("context-aware conjugation", () => {
  it("ẩn advanced forms của 音・におい・味がする nhưng giữ các dạng cơ bản", () => {
    const result = verbForm({
      ...baseWord,
      meaningVi: "có tiếng, mùi, vị",
      transitivity: "intransitive",
      particlePatterns: ["Nがする"],
      usageNote: "音・におい・味などを感じる用法。",
    });
    expect(result.masuForm).toBe("します");
    expect(result.taForm).toBe("した");
    expect(result.conditionalForm).toBe("すれば");
    expect(result.potentialForm).toBe("—");
    expect(result.volitionalForm).toBe("—");
    expect(result.passiveForm).toBe("—");
    expect(result.causativeForm).toBe("—");
    expect(result.causativePassiveForm).toBe("—");
    expect(result.imperativeForm).toBe("—");
  });

  it("tránh 受身/使役 máy móc với 尊敬語", () => {
    const result = verbForm({
      ...baseWord,
      word: "おっしゃる",
      dictionaryForm: "おっしゃる",
      reading: "おっしゃる",
      meaningVi: "nói (kính ngữ)",
      verbClass: "godan",
      transitivity: "transitive",
      usageNote: "言う の尊敬語。",
    });
    expect(result.masuForm).toBe("おっしゃいます");
    expect(result.imperativeForm).toBe("おっしゃい");
    expect(result.potentialForm).toBe("—");
    expect(result.passiveForm).toBe("—");
    expect(result.causativeForm).toBe("—");
    expect(result.causativePassiveForm).toBe("—");
  });

  it("vẫn giữ 可能形 hữu ích của ご覧になる nhưng ẩn dạng dễ thành song kính ngữ", () => {
    const result = verbForm({
      ...baseWord,
      word: "ご覧になる",
      dictionaryForm: "ご覧になる",
      reading: "ごらんになる",
      meaningVi: "xem (kính ngữ)",
      verbClass: "godan",
      transitivity: "transitive",
      usageNote: "見る の尊敬語。",
    });
    expect(result.potentialForm).toBe("ご覧になれる");
    expect(result.passiveForm).toBe("—");
    expect(result.causativeForm).toBe("—");
    expect(result.causativePassiveForm).toBe("—");
  });

  it("không dạy おられる như bị động của おる khi entry là 謙譲語", () => {
    const result = verbForm({
      ...baseWord,
      word: "おる",
      dictionaryForm: "おる",
      reading: "おる",
      meaningVi: "ở (khiêm nhường)",
      verbClass: "godan",
      transitivity: "intransitive",
      usageNote: "いる の謙譲語。",
    });
    expect(result.conditionalForm).toBe("おれば");
    expect(result.potentialForm).toBe("—");
    expect(result.passiveForm).toBe("—");
    expect(result.causativeForm).toBe("—");
    expect(result.causativePassiveForm).toBe("—");
    expect(result.imperativeForm).toBe("—");
  });
});

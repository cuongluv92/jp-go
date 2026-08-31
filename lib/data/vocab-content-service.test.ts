import { describe, expect, it } from "vitest";

import { dbVocabRowToWord, fillGroupSimilarWords, vocabExampleRowToExample, type VocabRow } from "@/lib/data/vocab-content-service";

function makeRow(overrides: Partial<VocabRow> = {}): VocabRow {
  return {
    id: "id-1",
    level: "N5",
    lesson_no: 2,
    entry_type: "word",
    word_jp: "これ",
    reading_furigana: "これ",
    meaning_vi: "cái này, đây",
    usage_note_vi: null,
    group_key: null,
    word_class: null,
    source_page: 14,
    source_text: "これ",
    source_type: "pdf",
    review_status: "ok",
    corrected_text: null,
    correction_note: null,
    created_at: "2026-01-01T00:00:00Z",
    ...overrides,
  };
}

describe("dbVocabRowToWord", () => {
  it("map đúng các trường cơ bản, tái sử dụng usageNote cho usage_note_vi", () => {
    const word = dbVocabRowToWord(makeRow({ usage_note_vi: "vật ở gần người nói" }));
    expect(word.id).toBe("id-1");
    expect(word.word).toBe("これ");
    expect(word.reading).toBe("これ");
    expect(word.meaningVi).toBe("cái này, đây");
    expect(word.usageNote).toBe("vật ở gần người nói");
    expect(word.jlpt).toBe("N5");
    expect(word.lessonNo).toBe(2);
    expect(word.entryType).toBe("word");
  });

  it("usage_note_vi null thì usageNote để trống, không suy diễn thêm", () => {
    const word = dbVocabRowToWord(makeRow({ usage_note_vi: null }));
    expect(word.usageNote).toBe("");
  });

  it("needsReview lấy đúng từ review_status", () => {
    expect(dbVocabRowToWord(makeRow({ review_status: "ok" })).needsReview).toBe(false);
    expect(dbVocabRowToWord(makeRow({ review_status: "needs_review" })).needsReview).toBe(true);
  });

  it("kanji field chỉ điền khi word_jp có ký tự Hán, từ thuần kana để trống", () => {
    expect(dbVocabRowToWord(makeRow({ word_jp: "教師" })).kanji).toBe("教師");
    expect(dbVocabRowToWord(makeRow({ word_jp: "これ" })).kanji).toBe("");
  });

  it("entry_type phrase → partOfSpeech mặc định expression, word → noun", () => {
    expect(dbVocabRowToWord(makeRow({ entry_type: "phrase" })).partOfSpeech).toBe("expression");
    expect(dbVocabRowToWord(makeRow({ entry_type: "word" })).partOfSpeech).toBe("noun");
  });

  it("N2 trở đi: lesson_no null → lessonNo undefined, word_class được map thẳng qua wordClass", () => {
    const word = dbVocabRowToWord(makeRow({ level: "N2", lesson_no: null, word_class: "動詞" }));
    expect(word.lessonNo).toBeUndefined();
    expect(word.wordClass).toBe("動詞");
  });

  it("progress mặc định là chưa học, không lẫn tiến độ giữa các từ", () => {
    const word = dbVocabRowToWord(makeRow());
    expect(word.progress.status).toBe("chua_hoc");
    expect(word.progress.repetitions).toBe(0);
  });
});

describe("fillGroupSimilarWords", () => {
  it("điền similarWords cho các từ cùng group_key, không lẫn nhóm khác", () => {
    const words = [
      dbVocabRowToWord(makeRow({ id: "1", word_jp: "これ", group_key: "chỉ_định_vật:これ_それ_あれ" })),
      dbVocabRowToWord(makeRow({ id: "2", word_jp: "それ", group_key: "chỉ_định_vật:これ_それ_あれ" })),
      dbVocabRowToWord(makeRow({ id: "3", word_jp: "あれ", group_key: "chỉ_định_vật:これ_それ_あれ" })),
      dbVocabRowToWord(makeRow({ id: "4", word_jp: "教師", group_key: "đồng_nghĩa_giáo_viên:教師_先生" })),
      dbVocabRowToWord(makeRow({ id: "5", word_jp: "先生", group_key: "đồng_nghĩa_giáo_viên:教師_先生" })),
    ];
    const filled = fillGroupSimilarWords(words);
    expect(filled[0].similarWords).toContain("それ");
    expect(filled[0].similarWords).toContain("あれ");
    expect(filled[0].similarWords).not.toContain("これ");
    expect(filled[3].similarWords).toContain("先生");
    expect(filled[3].similarWords).not.toContain("これ");
  });

  it("từ không có group_key thì similarWords giữ nguyên (rỗng)", () => {
    const words = [dbVocabRowToWord(makeRow({ group_key: null }))];
    expect(fillGroupSimilarWords(words)[0].similarWords).toBe("");
  });
});

describe("vocabExampleRowToExample", () => {
  it("map đúng câu ví dụ, cloze_jp/answer null thì fallback về example_jp/rỗng", () => {
    const ex = vocabExampleRowToExample({
      id: "e1",
      vocab_id: "id-1",
      example_jp: "これは本です。",
      example_vi: "Đây là quyển sách.",
      cloze_jp: null,
      answer: null,
      source_type: "generated",
    });
    expect(ex.vocabId).toBe("id-1");
    expect(ex.exampleJp).toBe("これは本です。");
    expect(ex.clozeJp).toBe("これは本です。");
    expect(ex.answer).toBe("");
  });

  it("giữ nguyên cloze_jp/answer khi có sẵn", () => {
    const ex = vocabExampleRowToExample({
      id: "e2",
      vocab_id: "id-1",
      example_jp: "これは本です。",
      example_vi: "Đây là quyển sách.",
      cloze_jp: "これは_____です。",
      answer: "本",
      source_type: "generated",
    });
    expect(ex.clozeJp).toBe("これは_____です。");
    expect(ex.answer).toBe("本");
  });
});

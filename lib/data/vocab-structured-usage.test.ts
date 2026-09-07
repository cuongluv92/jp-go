import { describe, expect, it } from "vitest";

import { dbVocabRowToWord, type VocabRow } from "@/lib/data/vocab-content-service";

const row: VocabRow = {
  id: "n3-1",
  level: "N3",
  lesson_no: null,
  entry_type: "word",
  word_jp: "起こす",
  dictionary_form: "起こす",
  reading_furigana: "おこす",
  meaning_vi: "gây ra; đánh thức",
  usage_note_vi: "Ngoại động từ nhóm I.",
  particle_patterns: ["Nを + 起こす"],
  usage_patterns: ["辞書形: 起こす", "て形・た形・ない形は「五段」として活用"],
  collocations: ["事故を起こす", "問題を起こす"],
  group_key: null,
  word_class: "動詞",
  verb_class: "godan",
  transitivity: "transitive",
  source_page: null,
  source_text: null,
  source_type: "generated",
  review_status: "ok",
  corrected_text: null,
  correction_note: null,
  created_at: "2026-09-07T00:00:00Z",
};

describe("structured vocabulary usage metadata", () => {
  it("maps reviewed DB arrays into the vocabulary detail model", () => {
    const word = dbVocabRowToWord(row);
    expect(word.particlePatterns).toEqual(["Nを + 起こす"]);
    expect(word.usagePatterns).toEqual(["辞書形: 起こす", "て形・た形・ない形は「五段」として活用"]);
    expect(word.collocations).toEqual(["事故を起こす", "問題を起こす"]);
  });

  it("keeps older rows compatible when the structured arrays are absent", () => {
    const word = dbVocabRowToWord({ ...row, particle_patterns: undefined, usage_patterns: undefined, collocations: undefined });
    expect(word.particlePatterns).toEqual([]);
    expect(word.usagePatterns).toEqual([]);
    expect(word.collocations).toEqual([]);
  });
});

import { NextResponse } from "next/server";

import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";

const PAGE_SIZE = 200;
const wordsById = new Map(sampleWords.map((word) => [word.id, word] as const));

export async function GET(
  _request: Request,
  context: { params: Promise<{ page: string }> },
) {
  const { page: pageRaw } = await context.params;
  const page = Math.max(0, Number(pageRaw) || 0);
  const offset = page * PAGE_SIZE;
  const rows = sampleExamples.slice(offset, offset + PAGE_SIZE).map((example) => {
    const word = wordsById.get(example.vocabId);
    return {
      vocabId: example.vocabId,
      word: word?.word,
      dictionaryForm: word?.dictionaryForm,
      kanji: word?.kanji,
      reading: word?.reading,
      meaningVi: word?.meaningVi,
      partOfSpeech: word?.partOfSpeech,
      verbClass: word?.verbClass,
      transitivity: word?.transitivity,
      particlePatterns: word?.particlePatterns,
      usagePatterns: word?.usagePatterns,
      collocations: word?.collocations,
      register: word?.register,
      usageNote: word?.usageNote,
      commonMistake: word?.commonMistake,
      similarWords: word?.similarWords,
      naturalnessNote: word?.naturalnessNote,
      exampleNo: example.exampleNo,
      exampleType: example.exampleType,
      exampleJp: example.exampleJp,
      exampleVi: example.exampleVi,
      clozeJp: example.clozeJp,
      answer: example.answer,
      focusNote: example.focusNote,
    };
  });
  return NextResponse.json({ total: sampleExamples.length, page, pageSize: PAGE_SIZE, offset, rows });
}

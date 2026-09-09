import { NextRequest, NextResponse } from "next/server";

import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";

const wordsById = new Map(sampleWords.map((word) => [word.id, word] as const));

export async function GET(request: NextRequest) {
  const offset = Math.max(0, Number(request.nextUrl.searchParams.get("offset") ?? 0) || 0);
  const limit = Math.min(250, Math.max(1, Number(request.nextUrl.searchParams.get("limit") ?? 100) || 100));
  const rows = sampleExamples.slice(offset, offset + limit).map((example) => {
    const word = wordsById.get(example.vocabId);
    return {
      vocabId: example.vocabId,
      word: word?.word,
      dictionaryForm: word?.dictionaryForm,
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
  return NextResponse.json({ total: sampleExamples.length, offset, limit, rows });
}

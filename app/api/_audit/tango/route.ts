import { NextRequest, NextResponse } from "next/server";

import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";

const normalize = (value: string) =>
  value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s。、！？!?・,.'’"“”「」『』（）()［］\[\]…—\-]/g, "");

function groupedDuplicates<T>(
  rows: T[],
  keyOf: (row: T) => string,
  previewOf: (row: T) => unknown,
) {
  const groups = new Map<string, T[]>();
  for (const row of rows) {
    const key = keyOf(row);
    if (!key) continue;
    const bucket = groups.get(key) ?? [];
    bucket.push(row);
    groups.set(key, bucket);
  }
  return [...groups.entries()]
    .filter(([, group]) => group.length > 1)
    .map(([key, group]) => ({ key, count: group.length, rows: group.map(previewOf) }));
}

export async function GET(request: NextRequest) {
  const kind = request.nextUrl.searchParams.get("kind") ?? "summary";
  const offset = Math.max(0, Number(request.nextUrl.searchParams.get("offset") ?? 0) || 0);
  const limit = Math.min(250, Math.max(1, Number(request.nextUrl.searchParams.get("limit") ?? 100) || 100));

  if (kind === "words") {
    return NextResponse.json({ total: sampleWords.length, offset, limit, rows: sampleWords.slice(offset, offset + limit) });
  }

  if (kind === "examples") {
    return NextResponse.json({ total: sampleExamples.length, offset, limit, rows: sampleExamples.slice(offset, offset + limit) });
  }

  const wordIds = new Set(sampleWords.map((word) => word.id));
  const byVocab = new Map<string, typeof sampleExamples>();
  for (const example of sampleExamples) {
    const bucket = byVocab.get(example.vocabId) ?? [];
    bucket.push(example);
    byVocab.set(example.vocabId, bucket);
  }

  const badCoverage = sampleWords
    .map((word) => {
      const rows = byVocab.get(word.id) ?? [];
      const types = rows.map((row) => row.exampleType).sort();
      const nos = rows.map((row) => row.exampleNo).sort();
      return {
        id: word.id,
        word: word.word,
        count: rows.length,
        types,
        nos,
      };
    })
    .filter(
      (row) =>
        row.count !== 3 ||
        row.types.join("|") !== "business|daily|exam" ||
        row.nos.join("|") !== "1|2|3",
    );

  const orphanExamples = sampleExamples.filter((example) => !wordIds.has(example.vocabId));
  const clozeFailures = sampleExamples
    .map((example, index) => ({
      index,
      vocabId: example.vocabId,
      exampleNo: example.exampleNo,
      exampleJp: example.exampleJp,
      clozeJp: example.clozeJp,
      answer: example.answer,
      blankCount: example.clozeJp.split("_____").length - 1,
      restored: example.clozeJp.replace("_____", example.answer),
    }))
    .filter((row) => row.blankCount !== 1 || row.restored !== row.exampleJp);

  const emptyWordFields = sampleWords
    .map((word) => ({
      id: word.id,
      word: word.word,
      empty: [
        !word.word && "word",
        !word.reading && "reading",
        !word.meaningVi && "meaningVi",
        !word.partOfSpeech && "partOfSpeech",
      ].filter(Boolean),
    }))
    .filter((row) => row.empty.length > 0);

  const emptyExampleFields = sampleExamples
    .map((example, index) => ({
      index,
      vocabId: example.vocabId,
      exampleNo: example.exampleNo,
      empty: [
        !example.exampleJp && "exampleJp",
        !example.exampleVi && "exampleVi",
        !example.clozeJp && "clozeJp",
        !example.answer && "answer",
      ].filter(Boolean),
    }))
    .filter((row) => row.empty.length > 0);

  const exactExampleDuplicates = groupedDuplicates(
    sampleExamples,
    (row) => row.exampleJp,
    (row) => ({ vocabId: row.vocabId, exampleNo: row.exampleNo, exampleType: row.exampleType, exampleJp: row.exampleJp }),
  );
  const normalizedExampleDuplicates = groupedDuplicates(
    sampleExamples,
    (row) => normalize(row.exampleJp),
    (row) => ({ vocabId: row.vocabId, exampleNo: row.exampleNo, exampleType: row.exampleType, exampleJp: row.exampleJp }),
  );
  const normalizedWordDuplicates = groupedDuplicates(
    sampleWords,
    (row) => `${normalize(row.word)}|${normalize(row.reading)}`,
    (row) => ({ id: row.id, word: row.word, reading: row.reading, meaningVi: row.meaningVi, partOfSpeech: row.partOfSpeech }),
  );

  const needsReviewWords = sampleWords.filter((word) => word.needsReview).map((word) => ({ id: word.id, word: word.word, reading: word.reading, meaningVi: word.meaningVi }));
  const wrongJlpt = sampleWords.filter((word) => word.jlpt !== "N3").map((word) => ({ id: word.id, word: word.word, jlpt: word.jlpt }));

  const suspiciousBusiness = sampleExamples
    .filter((example) => example.exampleType === "business")
    .filter((example) => /(?:じゃん|だよね|だよ[。！]?|だね[。！]?|だぞ|だぜ|ちゃう|ちゃった|ごめん(?:ね)?|またね|何で|なんで)/.test(example.exampleJp))
    .map((example) => ({ vocabId: example.vocabId, exampleJp: example.exampleJp, exampleVi: example.exampleVi }));

  return NextResponse.json({
    counts: {
      words: sampleWords.length,
      examples: sampleExamples.length,
      exam: sampleExamples.filter((row) => row.exampleType === "exam").length,
      daily: sampleExamples.filter((row) => row.exampleType === "daily").length,
      business: sampleExamples.filter((row) => row.exampleType === "business").length,
    },
    structural: {
      badCoverageCount: badCoverage.length,
      orphanExampleCount: orphanExamples.length,
      clozeFailureCount: clozeFailures.length,
      emptyWordFieldCount: emptyWordFields.length,
      emptyExampleFieldCount: emptyExampleFields.length,
      needsReviewWordCount: needsReviewWords.length,
      wrongJlptCount: wrongJlpt.length,
    },
    duplicates: {
      exactExampleGroupCount: exactExampleDuplicates.length,
      normalizedExampleGroupCount: normalizedExampleDuplicates.length,
      normalizedWordGroupCount: normalizedWordDuplicates.length,
    },
    suspiciousBusinessCount: suspiciousBusiness.length,
    samples: {
      badCoverage: badCoverage.slice(0, 100),
      orphanExamples: orphanExamples.slice(0, 100),
      clozeFailures: clozeFailures.slice(0, 100),
      emptyWordFields: emptyWordFields.slice(0, 100),
      emptyExampleFields: emptyExampleFields.slice(0, 100),
      needsReviewWords: needsReviewWords.slice(0, 100),
      wrongJlpt: wrongJlpt.slice(0, 100),
      exactExampleDuplicates: exactExampleDuplicates.slice(0, 100),
      normalizedExampleDuplicates: normalizedExampleDuplicates.slice(0, 100),
      normalizedWordDuplicates: normalizedWordDuplicates.slice(0, 100),
      suspiciousBusiness: suspiciousBusiness.slice(0, 100),
    },
  });
}

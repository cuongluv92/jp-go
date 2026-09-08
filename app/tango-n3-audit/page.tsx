import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";

export const dynamic = "force-static";

function normalizeJapanese(text: string) {
  return text.replace(/[。！？!?、\s]/gu, "").trim();
}

function countBy<T>(items: T[], key: (item: T) => string) {
  const map = new Map<string, number>();
  for (const item of items) map.set(key(item), (map.get(key(item)) ?? 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function logSection(name: string, value: unknown) {
  console.log(`TANGO_N3_${name}`, JSON.stringify(value));
}

export default function TangoN3AuditPage() {
  const examplesByWord = new Map<string, typeof sampleExamples>();
  for (const example of sampleExamples) {
    const current = examplesByWord.get(example.vocabId) ?? [];
    current.push(example);
    examplesByWord.set(example.vocabId, current);
  }

  const reviewWords = sampleWords.filter((word) => word.needsReview);
  const duplicateWordReading = countBy(sampleWords, (word) => `${word.word}\u0000${word.reading}`).filter(([, count]) => count > 1);
  const exactExampleDuplicates = countBy(sampleExamples, (example) => example.exampleJp).filter(([, count]) => count > 1);
  const nearExampleDuplicates = countBy(sampleExamples, (example) => normalizeJapanese(example.exampleJp)).filter(([, count]) => count > 1);
  const translationDuplicates = countBy(sampleExamples, (example) => example.exampleVi.trim()).filter(([, count]) => count > 1);

  const badExampleDistribution = sampleWords.filter((word) => {
    const examples = examplesByWord.get(word.id) ?? [];
    return examples.length !== 3 || examples.map((e) => e.exampleType).sort().join("|") !== "business|daily|exam";
  });
  const clozeMismatch = sampleExamples.filter((example) => example.clozeJp.replace("_____", example.answer) !== example.exampleJp);
  const blankExamples = sampleExamples.filter((example) => !example.exampleJp.trim() || !example.exampleVi.trim() || !example.clozeJp.trim() || !example.answer.trim());

  const verbs = sampleWords.filter((word) => word.partOfSpeech === "verb");
  const remainingVerbCollocations = verbs.filter((word) => word.collocations.length === 0).map((word) => ({
    id: word.id,
    word: word.word,
    reading: word.reading,
    meaning: word.meaningVi,
    vclass: word.verbClass,
    trans: word.transitivity,
    particles: word.particlePatterns,
    examples: (examplesByWord.get(word.id) ?? []).map((example) => `${example.exampleType}:${example.exampleJp}`),
  }));

  const blankReadingWords = sampleWords.filter((word) => !word.reading.trim()).map((word) => ({
    id: word.id,
    word: word.word,
    meaning: word.meaningVi,
    pos: word.partOfSpeech,
  }));
  const markedHeadwords = sampleWords.filter((word) => /[①-⑳]/u.test(word.word)).map((word) => ({ id: word.id, word: word.word, reading: word.reading, meaning: word.meaningVi, pos: word.partOfSpeech }));

  const summary = {
    words: sampleWords.length,
    examples: sampleExamples.length,
    reviewCount: reviewWords.length,
    badExampleDistributionCount: badExampleDistribution.length,
    clozeMismatchCount: clozeMismatch.length,
    blankExamplesCount: blankExamples.length,
    blankReadingCount: blankReadingWords.length,
    duplicateWordReadingGroups: duplicateWordReading.length,
    exactExampleDuplicateGroups: exactExampleDuplicates.length,
    nearExampleDuplicateGroups: nearExampleDuplicates.length,
    translationDuplicateGroups: translationDuplicates.length,
    verbs: verbs.length,
    verbMissingClassCount: verbs.filter((word) => !word.verbClass).length,
    verbMissingTransitivityCount: verbs.filter((word) => !word.transitivity).length,
    verbMissingParticlesCount: verbs.filter((word) => word.particlePatterns.length === 0).length,
    verbMissingCollocationsCount: remainingVerbCollocations.length,
    markedHeadwordCount: markedHeadwords.length,
  };

  logSection("SUMMARY", summary);
  logSection("REVIEWS_REMAINING", reviewWords.map((word) => ({ id: word.id, word: word.word, reading: word.reading, note: word.naturalnessNote || word.usageNote })));
  for (let i = 0; i < remainingVerbCollocations.length; i += 10) logSection(`COLLOC_REMAIN_${String(i / 10 + 1).padStart(2, "0")}`, remainingVerbCollocations.slice(i, i + 10));
  for (let i = 0; i < blankReadingWords.length; i += 20) logSection(`READING_REMAIN_${String(i / 20 + 1).padStart(2, "0")}`, blankReadingWords.slice(i, i + 20));
  logSection("MARKED_HEADWORDS", markedHeadwords);
  logSection("DUP_EXAMPLES_REMAIN", exactExampleDuplicates);

  return <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(summary, null, 2)}</pre>;
}

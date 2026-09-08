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

export default function TangoN3AuditPage() {
  const examplesByWord = new Map<string, typeof sampleExamples>();
  for (const example of sampleExamples) {
    const current = examplesByWord.get(example.vocabId) ?? [];
    current.push(example);
    examplesByWord.set(example.vocabId, current);
  }

  const reviewWords = sampleWords
    .filter((word) => word.needsReview || /cần|xác nhận|không chắc|chưa chắc|người bản ngữ/iu.test(`${word.usageNote} ${word.naturalnessNote}`))
    .map((word) => ({ id: word.id, word: word.word, reading: word.reading, pos: word.partOfSpeech, note: word.naturalnessNote || word.usageNote }));

  const duplicateWordReading = countBy(sampleWords, (word) => `${word.word}\u0000${word.reading}`).filter(([, count]) => count > 1);
  const exactExampleDuplicates = countBy(sampleExamples, (example) => example.exampleJp).filter(([, count]) => count > 1);
  const nearExampleDuplicates = countBy(sampleExamples, (example) => normalizeJapanese(example.exampleJp)).filter(([, count]) => count > 1);
  const translationDuplicates = countBy(sampleExamples, (example) => example.exampleVi.trim()).filter(([, count]) => count > 1);

  const badExampleDistribution = sampleWords
    .filter((word) => {
      const examples = examplesByWord.get(word.id) ?? [];
      const types = examples.map((example) => example.exampleType).sort().join("|");
      return examples.length !== 3 || types !== "business|daily|exam";
    })
    .map((word) => word.id);

  const clozeMismatch = sampleExamples
    .filter((example) => example.clozeJp.replace("_____", example.answer) !== example.exampleJp)
    .map((example) => `${example.vocabId}#${example.exampleNo}`);

  const blankExamples = sampleExamples
    .filter((example) => !example.exampleJp.trim() || !example.exampleVi.trim() || !example.clozeJp.trim() || !example.answer.trim())
    .map((example) => `${example.vocabId}#${example.exampleNo}`);

  const verbs = sampleWords.filter((word) => word.partOfSpeech === "verb");
  const verbMissingClass = verbs.filter((word) => !word.verbClass).map((word) => ({ id: word.id, word: word.word }));
  const verbMissingTransitivity = verbs.filter((word) => !word.transitivity).map((word) => ({ id: word.id, word: word.word, note: word.usageNote }));
  const verbMissingParticles = verbs.filter((word) => word.particlePatterns.length === 0).map((word) => ({ id: word.id, word: word.word }));
  const verbMissingCollocations = verbs.filter((word) => word.collocations.length === 0).map((word) => ({ id: word.id, word: word.word }));

  const nonVerbWithVerbClass = sampleWords
    .filter((word) => word.partOfSpeech !== "verb" && word.verbClass)
    .map((word) => ({ id: word.id, word: word.word, pos: word.partOfSpeech, verbClass: word.verbClass }));

  const suspiciousIAdjectives = sampleWords
    .filter((word) => word.partOfSpeech === "i_adjective" && !word.word.endsWith("い"))
    .map((word) => ({ id: word.id, word: word.word, reading: word.reading }));

  const dailyExamples = sampleExamples.filter((example) => example.exampleType === "daily");
  const conversationalDaily = dailyExamples.filter((example) => /(?:よ|ね|よね|んだ|んだよ|じゃん|かな|かも|って|だよ)[。！!?]?$/u.test(example.exampleJp)).length;
  const politeDaily = dailyExamples.filter((example) => /(?:です|ます|でした|ました|ません)[。！？!?]?$/u.test(example.exampleJp)).length;

  const wrapperPrefixes = [
    "授業で「", "教科書には「", "問題文には「", "会議で「", "打ち合わせで「", "お客様に「", "先輩から「", "電話で「", "朝礼で「", "先生は「", "担当者は「", "作文に「", "読解文には「", "社内メールには「"
  ];
  const wrapperCandidates = sampleExamples
    .filter((example) => wrapperPrefixes.some((prefix) => example.exampleJp.includes(prefix)))
    .map((example) => ({ id: `${example.vocabId}#${example.exampleNo}`, jp: example.exampleJp, vi: example.exampleVi }));

  const posDistribution = countBy(sampleWords, (word) => word.partOfSpeech);
  const transitivityDistribution = countBy(verbs, (word) => word.transitivity ?? "null");

  const summary = {
    words: sampleWords.length,
    examples: sampleExamples.length,
    posDistribution,
    transitivityDistribution,
    reviewCount: reviewWords.length,
    reviewWords: reviewWords.slice(0, 200),
    badExampleDistributionCount: badExampleDistribution.length,
    badExampleDistribution: badExampleDistribution.slice(0, 100),
    clozeMismatchCount: clozeMismatch.length,
    clozeMismatch: clozeMismatch.slice(0, 100),
    blankExamplesCount: blankExamples.length,
    duplicateWordReadingGroups: duplicateWordReading.length,
    duplicateWordReading: duplicateWordReading.slice(0, 100),
    exactExampleDuplicateGroups: exactExampleDuplicates.length,
    exactExampleDuplicates: exactExampleDuplicates.slice(0, 100),
    nearExampleDuplicateGroups: nearExampleDuplicates.length,
    nearExampleDuplicates: nearExampleDuplicates.slice(0, 100),
    translationDuplicateGroups: translationDuplicates.length,
    translationDuplicates: translationDuplicates.slice(0, 100),
    verbs: verbs.length,
    verbMissingClassCount: verbMissingClass.length,
    verbMissingClass: verbMissingClass.slice(0, 100),
    verbMissingTransitivityCount: verbMissingTransitivity.length,
    verbMissingTransitivity: verbMissingTransitivity.slice(0, 100),
    verbMissingParticlesCount: verbMissingParticles.length,
    verbMissingParticles: verbMissingParticles.slice(0, 100),
    verbMissingCollocationsCount: verbMissingCollocations.length,
    verbMissingCollocations: verbMissingCollocations.slice(0, 100),
    nonVerbWithVerbClassCount: nonVerbWithVerbClass.length,
    nonVerbWithVerbClass: nonVerbWithVerbClass.slice(0, 100),
    suspiciousIAdjectiveCount: suspiciousIAdjectives.length,
    suspiciousIAdjectives: suspiciousIAdjectives.slice(0, 100),
    wrapperCandidateCount: wrapperCandidates.length,
    wrapperCandidates: wrapperCandidates.slice(0, 100),
    dailyExamples: dailyExamples.length,
    conversationalDaily,
    politeDaily,
  };

  console.log("TANGO_N3_AUDIT", JSON.stringify(summary));

  return <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(summary, null, 2)}</pre>;
}

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
    badExampleDistributionCount: badExampleDistribution.length,
    clozeMismatchCount: clozeMismatch.length,
    blankExamplesCount: blankExamples.length,
    duplicateWordReadingGroups: duplicateWordReading.length,
    exactExampleDuplicateGroups: exactExampleDuplicates.length,
    nearExampleDuplicateGroups: nearExampleDuplicates.length,
    translationDuplicateGroups: translationDuplicates.length,
    verbs: verbs.length,
    verbMissingClassCount: verbMissingClass.length,
    verbMissingTransitivityCount: verbMissingTransitivity.length,
    verbMissingParticlesCount: verbMissingParticles.length,
    verbMissingCollocationsCount: verbMissingCollocations.length,
    nonVerbWithVerbClassCount: nonVerbWithVerbClass.length,
    suspiciousIAdjectiveCount: suspiciousIAdjectives.length,
    wrapperCandidateCount: wrapperCandidates.length,
    dailyExamples: dailyExamples.length,
    conversationalDaily,
    politeDaily,
  };

  logSection("SUMMARY", summary);
  logSection("REVIEWS", reviewWords);
  logSection("DUP_WORDS", duplicateWordReading);
  logSection("DUP_EXAMPLES", exactExampleDuplicates);
  logSection("DUP_TRANSLATIONS", translationDuplicates.slice(0, 200));
  logSection("VERB_ISSUES", { verbMissingClass, verbMissingTransitivity, verbMissingParticles, verbMissingCollocations });
  logSection("CLASS_ISSUES", { nonVerbWithVerbClass, suspiciousIAdjectives });
  logSection("WRAPPERS", wrapperCandidates);
  logSection("STRUCTURE", { badExampleDistribution, clozeMismatch, blankExamples, nearExampleDuplicates });

  return <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(summary, null, 2)}</pre>;
}

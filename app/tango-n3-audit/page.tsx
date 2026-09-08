import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";
import { getConjugation } from "@/lib/conjugation";

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

  const translationDuplicateKeys = countBy(sampleExamples, (example) => example.exampleVi.trim()).filter(([, count]) => count > 1);
  const translationDuplicateRefs = translationDuplicateKeys.map(([vi]) => ({
    vi,
    refs: sampleExamples.filter((example) => example.exampleVi.trim() === vi).map((example) => {
      const word = sampleWords.find((item) => item.id === example.vocabId);
      return { id: `${example.vocabId}#${example.exampleNo}`, word: word?.word, type: example.exampleType, jp: example.exampleJp };
    }),
  }));

  const badExampleDistribution = sampleWords.filter((word) => {
    const examples = examplesByWord.get(word.id) ?? [];
    return examples.length !== 3 || examples.map((e) => e.exampleType).sort().join("|") !== "business|daily|exam";
  });
  const clozeMismatch = sampleExamples.filter((example) => example.clozeJp.replace("_____", example.answer) !== example.exampleJp);
  const blankExamples = sampleExamples.filter((example) => !example.exampleJp.trim() || !example.exampleVi.trim() || !example.clozeJp.trim() || !example.answer.trim());

  const verbs = sampleWords.filter((word) => word.partOfSpeech === "verb");
  const iAdjectives = sampleWords.filter((word) => word.partOfSpeech === "i_adjective");
  const naAdjectives = sampleWords.filter((word) => word.partOfSpeech === "na_adjective");
  const remainingVerbCollocations = verbs.filter((word) => word.collocations.length === 0);

  const conjugationErrors: Array<{ id: string; word: string; pos: string; error: string }> = [];
  for (const word of [...verbs, ...iAdjectives, ...naAdjectives]) {
    try {
      getConjugation(word);
    } catch (error) {
      conjugationErrors.push({ id: word.id, word: word.word, pos: word.partOfSpeech, error: error instanceof Error ? error.message : String(error) });
    }
  }

  const blankReadingWords = sampleWords.filter((word) => !word.reading.trim());
  const markedHeadwords = sampleWords.filter((word) => /[①-⑳]/u.test(word.word)).map((word) => ({
    id: word.id,
    word: word.word,
    dictionaryForm: word.dictionaryForm ?? null,
    reading: word.reading,
    meaning: word.meaningVi,
    pos: word.partOfSpeech,
  }));

  const daily = sampleExamples.filter((e) => e.exampleType === "daily");
  const business = sampleExamples.filter((e) => e.exampleType === "business");
  const exam = sampleExamples.filter((e) => e.exampleType === "exam");

  const toneRules: Array<[string, RegExp]> = [
    ["よね", /よね[。！？!?]?$/u],
    ["じゃん", /じゃん[。！？!?]?$/u],
    ["かな", /かな[。！？!?]?$/u],
    ["んだ", /んだ(?:よ|ね)?[。！？!?]?$/u],
    ["だよ", /だよ[。！？!?]?$/u],
    ["だね", /だね[。！？!?]?$/u],
    ["よ", /(?<!です|ます)よ[。！？!?]?$/u],
    ["ね", /(?<!です|ます)ね[。！？!?]?$/u],
  ];
  const dailyToneCounts = toneRules.map(([label, re]) => [label, daily.filter((e) => re.test(e.exampleJp)).length]);

  const tooCasualForBusiness = business.filter((e) => /(?:じゃん|ちゃった|だよ|だね|かな|んだよ|てるよ|てるね)[。！？!?]?$/u.test(e.exampleJp));
  const tooCasualForExam = exam.filter((e) => /(?:じゃん|ちゃった|だよ|だね|かな|んだよ|てるよ|てるね)[。！？!?]?$/u.test(e.exampleJp));
  const tooFormalForDaily = daily.filter((e) => /(?:でございます|いたします|しております|でしょうか|くださいませ|いただけますでしょうか)/u.test(e.exampleJp));
  const personalBusiness = business.filter((e) => /(?:友達|彼女|彼氏|妻|夫|母|父|兄|姉|弟|妹|猫|犬|家族)/u.test(e.exampleJp));

  const businessStyleCounts = [
    ["しております", business.filter((e) => /しております。?$/u.test(e.exampleJp)).length],
    ["いたします", business.filter((e) => /いたします。?$/u.test(e.exampleJp)).length],
    ["です", business.filter((e) => /です。?$/u.test(e.exampleJp)).length],
    ["ます", business.filter((e) => /ます。?$/u.test(e.exampleJp)).length],
    ["plain", business.filter((e) => /(?:だ|た|る|ない|いる|ある)。?$/u.test(e.exampleJp)).length],
  ];

  const collocationBlankByPos = countBy(sampleWords.filter((w) => w.collocations.length === 0), (w) => w.partOfSpeech);
  const particleBlankByPos = countBy(sampleWords.filter((w) => w.particlePatterns.length === 0), (w) => w.partOfSpeech);

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
    translationDuplicateGroups: translationDuplicateRefs.length,
    verbs: verbs.length,
    iAdjectives: iAdjectives.length,
    naAdjectives: naAdjectives.length,
    verbMissingClassCount: verbs.filter((word) => !word.verbClass).length,
    verbMissingTransitivityCount: verbs.filter((word) => !word.transitivity).length,
    verbMissingParticlesCount: verbs.filter((word) => word.particlePatterns.length === 0).length,
    verbMissingCollocationsCount: remainingVerbCollocations.length,
    conjugationErrorCount: conjugationErrors.length,
    markedHeadwordCount: markedHeadwords.length,
    businessCasualCandidateCount: tooCasualForBusiness.length,
    examCasualCandidateCount: tooCasualForExam.length,
    dailyOverformalCandidateCount: tooFormalForDaily.length,
    personalBusinessCandidateCount: personalBusiness.length,
    dailyToneCounts,
    businessStyleCounts,
    collocationBlankByPos,
    particleBlankByPos,
  };

  logSection("SUMMARY", summary);
  logSection("TRANSLATION_DUP_REFS", translationDuplicateRefs);
  logSection("BUSINESS_CASUAL", tooCasualForBusiness.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp, vi: e.exampleVi })));
  logSection("EXAM_CASUAL", tooCasualForExam.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp, vi: e.exampleVi })));
  logSection("DAILY_OVERFORMAL", tooFormalForDaily.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp, vi: e.exampleVi })));
  logSection("PERSONAL_BUSINESS", personalBusiness.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp, vi: e.exampleVi })));
  logSection("CONJ_ERRORS", conjugationErrors);
  logSection("MARKED_HEADWORDS", markedHeadwords);

  return <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(summary, null, 2)}</pre>;
}

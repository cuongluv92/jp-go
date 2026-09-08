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
  const duplicateWordKeys = countBy(sampleWords, (word) => word.word.replace(/[①-⑳]+$/u, "")).filter(([, count]) => count > 1);
  const duplicateWordRefs = duplicateWordKeys.map(([surface]) => ({
    surface,
    refs: sampleWords.filter((word) => word.word.replace(/[①-⑳]+$/u, "") === surface).map((word) => ({ id: word.id, word: word.word, reading: word.reading, meaning: word.meaningVi, pos: word.partOfSpeech })),
  }));

  const exactExampleDuplicates = countBy(sampleExamples, (example) => example.exampleJp).filter(([, count]) => count > 1);
  const nearExampleDuplicates = countBy(sampleExamples, (example) => normalizeJapanese(example.exampleJp)).filter(([, count]) => count > 1);
  const translationDuplicateKeys = countBy(sampleExamples, (example) => example.exampleVi.trim()).filter(([, count]) => count > 1);

  const badExampleDistribution = sampleWords.filter((word) => {
    const examples = examplesByWord.get(word.id) ?? [];
    return examples.length !== 3 || examples.map((e) => e.exampleType).sort().join("|") !== "business|daily|exam";
  });
  const clozeMismatch = sampleExamples.filter((example) => example.clozeJp.replace("_____", example.answer) !== example.exampleJp);
  const blankExamples = sampleExamples.filter((example) => !example.exampleJp.trim() || !example.exampleVi.trim() || !example.clozeJp.trim() || !example.answer.trim());

  const verbs = sampleWords.filter((word) => word.partOfSpeech === "verb");
  const iAdjectives = sampleWords.filter((word) => word.partOfSpeech === "i_adjective");
  const naAdjectives = sampleWords.filter((word) => word.partOfSpeech === "na_adjective");
  const functionWords = sampleWords.filter((word) => ["adverb", "conjunction", "expression"].includes(word.partOfSpeech));

  const conjugationErrors: Array<{ id: string; word: string; pos: string; error: string }> = [];
  for (const word of [...verbs, ...iAdjectives, ...naAdjectives]) {
    try {
      getConjugation(word);
    } catch (error) {
      conjugationErrors.push({ id: word.id, word: word.word, pos: word.partOfSpeech, error: error instanceof Error ? error.message : String(error) });
    }
  }

  const blankReadingWords = sampleWords.filter((word) => !word.reading.trim());
  const readingScriptIssues = sampleWords.filter((word) => /[\p{Script=Han}A-Za-z0-9]/u.test(word.reading)).map((word) => ({ id: word.id, word: word.word, reading: word.reading, meaning: word.meaningVi, pos: word.partOfSpeech }));
  const meaningJapaneseIssues = sampleWords.filter((word) => /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(word.meaningVi)).map((word) => ({ id: word.id, word: word.word, meaning: word.meaningVi }));
  const translationJapaneseIssues = sampleExamples.filter((e) => /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(e.exampleVi)).map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, vi: e.exampleVi }));

  const nounMorphologyCandidates = sampleWords.filter((word) => word.partOfSpeech === "noun" && (
    /する$/u.test(word.word) ||
    /(?:な形容詞|形容動詞|副詞|サ変|動詞|連語|感動詞)/u.test(`${word.usageNote} ${word.naturalnessNote}`)
  )).map((word) => ({
    id: word.id,
    word: word.word,
    reading: word.reading,
    meaning: word.meaningVi,
    particles: word.particlePatterns,
    usage: word.usageNote,
    naturalness: word.naturalnessNote,
  }));

  const adjectiveRows = [...iAdjectives, ...naAdjectives].map((word) => ({
    id: word.id,
    word: word.word,
    dictionaryForm: word.dictionaryForm ?? null,
    reading: word.reading,
    meaning: word.meaningVi,
    pos: word.partOfSpeech,
    particles: word.particlePatterns,
    collocations: word.collocations,
    usage: word.usageNote,
    examples: (examplesByWord.get(word.id) ?? []).map((e) => `${e.exampleType}:${e.exampleJp}`),
  }));
  const functionRows = functionWords.map((word) => ({
    id: word.id,
    word: word.word,
    reading: word.reading,
    meaning: word.meaningVi,
    pos: word.partOfSpeech,
    particles: word.particlePatterns,
    usage: word.usageNote,
    examples: (examplesByWord.get(word.id) ?? []).map((e) => `${e.exampleType}:${e.exampleJp}`),
  }));

  const daily = sampleExamples.filter((e) => e.exampleType === "daily");
  const business = sampleExamples.filter((e) => e.exampleType === "business");
  const exam = sampleExamples.filter((e) => e.exampleType === "exam");
  const tooCasualForBusiness = business.filter((e) => /(?:じゃん|ちゃった|だよ|だね|かな|んだよ|てるよ|てるね)[。！？!?]?$/u.test(e.exampleJp));
  const tooCasualForExam = exam.filter((e) => /(?:じゃん|ちゃった|だよ|だね|かな|んだよ|てるよ|てるね)[。！？!?]?$/u.test(e.exampleJp));
  const tooFormalForDaily = daily.filter((e) => /(?:でございます|いたします|しております|でしょうか|くださいませ|いただけますでしょうか)/u.test(e.exampleJp));

  const summary = {
    words: sampleWords.length,
    examples: sampleExamples.length,
    reviewCount: reviewWords.length,
    badExampleDistributionCount: badExampleDistribution.length,
    clozeMismatchCount: clozeMismatch.length,
    blankExamplesCount: blankExamples.length,
    blankReadingCount: blankReadingWords.length,
    readingScriptIssueCount: readingScriptIssues.length,
    meaningJapaneseIssueCount: meaningJapaneseIssues.length,
    translationJapaneseIssueCount: translationJapaneseIssues.length,
    duplicateWordReadingGroups: duplicateWordReading.length,
    duplicateSurfaceGroups: duplicateWordRefs.length,
    exactExampleDuplicateGroups: exactExampleDuplicates.length,
    nearExampleDuplicateGroups: nearExampleDuplicates.length,
    translationDuplicateGroups: translationDuplicateKeys.length,
    verbs: verbs.length,
    iAdjectives: iAdjectives.length,
    naAdjectives: naAdjectives.length,
    functionWords: functionWords.length,
    verbMissingClassCount: verbs.filter((word) => !word.verbClass).length,
    verbMissingTransitivityCount: verbs.filter((word) => !word.transitivity).length,
    verbMissingParticlesCount: verbs.filter((word) => word.particlePatterns.length === 0).length,
    verbMissingCollocationsCount: verbs.filter((word) => word.collocations.length === 0).length,
    conjugationErrorCount: conjugationErrors.length,
    nounMorphologyCandidateCount: nounMorphologyCandidates.length,
    businessCasualCandidateCount: tooCasualForBusiness.length,
    examCasualCandidateCount: tooCasualForExam.length,
    dailyOverformalCandidateCount: tooFormalForDaily.length,
  };

  logSection("SUMMARY", summary);
  logSection("DUP_SURFACES", duplicateWordRefs);
  logSection("READING_SCRIPT_ISSUES", readingScriptIssues);
  logSection("MEANING_JP_ISSUES", meaningJapaneseIssues);
  logSection("TRANSLATION_JP_ISSUES", translationJapaneseIssues);
  logSection("NOUN_MORPH_CANDIDATES", nounMorphologyCandidates);
  logSection("REGISTER_CANDIDATES", {
    business: tooCasualForBusiness.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
    exam: tooCasualForExam.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
    dailyFormal: tooFormalForDaily.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
  });
  logSection("CONJ_ERRORS", conjugationErrors);
  for (let i = 0; i < adjectiveRows.length; i += 12) logSection(`ADJECTIVES_${String(i / 12 + 1).padStart(2, "0")}`, adjectiveRows.slice(i, i + 12));
  for (let i = 0; i < functionRows.length; i += 15) logSection(`FUNCTIONS_${String(i / 15 + 1).padStart(2, "0")}`, functionRows.slice(i, i + 15));

  return <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(summary, null, 2)}</pre>;
}

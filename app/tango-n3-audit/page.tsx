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
  const byWord = new Map<string, typeof sampleExamples>();
  for (const e of sampleExamples) {
    const rows = byWord.get(e.vocabId) ?? [];
    rows.push(e);
    byWord.set(e.vocabId, rows);
  }

  const reviewWords = sampleWords.filter((w) => w.needsReview);
  const duplicateWordReading = countBy(sampleWords, (w) => `${w.word}\u0000${w.reading}`).filter(([, n]) => n > 1);
  const exactExampleDuplicates = countBy(sampleExamples, (e) => e.exampleJp).filter(([, n]) => n > 1);
  const nearExampleDuplicates = countBy(sampleExamples, (e) => normalizeJapanese(e.exampleJp)).filter(([, n]) => n > 1);
  const badExampleDistribution = sampleWords.filter((w) => {
    const rows = byWord.get(w.id) ?? [];
    return rows.length !== 3 || rows.map((e) => e.exampleType).sort().join("|") !== "business|daily|exam";
  });
  const clozeMismatch = sampleExamples.filter((e) => e.clozeJp.replace("_____", e.answer) !== e.exampleJp);
  const blankExamples = sampleExamples.filter((e) => !e.exampleJp.trim() || !e.exampleVi.trim() || !e.clozeJp.trim() || !e.answer.trim());

  const verbs = sampleWords.filter((w) => w.partOfSpeech === "verb");
  const iAdjectives = sampleWords.filter((w) => w.partOfSpeech === "i_adjective");
  const naAdjectives = sampleWords.filter((w) => w.partOfSpeech === "na_adjective");
  const functionWords = sampleWords.filter((w) => ["adverb", "conjunction", "expression"].includes(w.partOfSpeech));
  const conjugationErrors: Array<{ id: string; word: string; error: string }> = [];
  for (const w of [...verbs, ...iAdjectives, ...naAdjectives]) {
    try { getConjugation(w); } catch (error) {
      conjugationErrors.push({ id: w.id, word: w.word, error: error instanceof Error ? error.message : String(error) });
    }
  }

  const readingScriptIssues = sampleWords.filter((w) => /[\p{Script=Han}A-Za-z0-9]/u.test(w.reading));
  const meaningJapaneseIssues = sampleWords.filter((w) => /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(w.meaningVi));
  const translationJapaneseIssues = sampleExamples.filter((e) => /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(e.exampleVi));
  const badCollocations = sampleWords.filter((w) => w.collocations.some((c) => !c.trim() || c.includes("〜"))).map((w) => ({ id: w.id, word: w.word, collocations: w.collocations }));
  const duplicateCollocationsInsideWord = sampleWords.filter((w) => new Set(w.collocations).size !== w.collocations.length).map((w) => ({ id: w.id, word: w.word, collocations: w.collocations }));

  const business = sampleExamples.filter((e) => e.exampleType === "business");
  const exam = sampleExamples.filter((e) => e.exampleType === "exam");
  const daily = sampleExamples.filter((e) => e.exampleType === "daily");
  const businessCasual = business.filter((e) => /(?:じゃん|ちゃった|だよ|だね|かな|んだよ|てるよ|てるね)[。！？!?]?$/u.test(e.exampleJp));
  const examCasual = exam.filter((e) => /(?:じゃん|ちゃった|だよ|だね|かな|んだよ|てるよ|てるね)[。！？!?]?$/u.test(e.exampleJp));
  const dailyFormal = daily.filter((e) => /(?:でございます|いたします|しております|でしょうか|くださいませ|いただけますでしょうか)/u.test(e.exampleJp));

  const compactRows = (words: typeof sampleWords) => words.map((w) => {
    const rows = byWord.get(w.id) ?? [];
    const dailyEx = rows.find((e) => e.exampleType === "daily");
    const businessEx = rows.find((e) => e.exampleType === "business");
    return { id: w.id, word: w.word, meaning: w.meaningVi, pos: w.partOfSpeech, daily: dailyEx?.exampleJp ?? "", business: businessEx?.exampleJp ?? "" };
  });

  const adjectiveRows = compactRows([...iAdjectives, ...naAdjectives]);
  const functionRows = compactRows(functionWords);

  const summary = {
    words: sampleWords.length,
    examples: sampleExamples.length,
    reviewCount: reviewWords.length,
    badExampleDistributionCount: badExampleDistribution.length,
    clozeMismatchCount: clozeMismatch.length,
    blankExamplesCount: blankExamples.length,
    blankReadingCount: sampleWords.filter((w) => !w.reading.trim()).length,
    readingScriptIssueCount: readingScriptIssues.length,
    meaningJapaneseIssueCount: meaningJapaneseIssues.length,
    translationJapaneseIssueCount: translationJapaneseIssues.length,
    duplicateWordReadingGroups: duplicateWordReading.length,
    exactExampleDuplicateGroups: exactExampleDuplicates.length,
    nearExampleDuplicateGroups: nearExampleDuplicates.length,
    verbMissingClassCount: verbs.filter((w) => !w.verbClass).length,
    verbMissingTransitivityCount: verbs.filter((w) => !w.transitivity).length,
    verbMissingParticlesCount: verbs.filter((w) => w.particlePatterns.length === 0).length,
    verbMissingCollocationsCount: verbs.filter((w) => w.collocations.length === 0).length,
    conjugationErrorCount: conjugationErrors.length,
    badCollocationCount: badCollocations.length,
    duplicateCollocationInsideWordCount: duplicateCollocationsInsideWord.length,
    businessCasualCandidateCount: businessCasual.length,
    examCasualCandidateCount: examCasual.length,
    dailyOverformalCandidateCount: dailyFormal.length,
  };

  logSection("SUMMARY", summary);
  logSection("MEANING_JP_ISSUES", meaningJapaneseIssues.map((w) => ({ id: w.id, word: w.word, meaning: w.meaningVi })));
  logSection("COLLOCATION_ISSUES", { badCollocations, duplicateCollocationsInsideWord });
  logSection("REGISTER_CANDIDATES", {
    business: businessCasual.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
    exam: examCasual.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
    dailyFormal: dailyFormal.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
  });
  logSection("CONJ_ERRORS", conjugationErrors);
  for (let i = 0; i < adjectiveRows.length; i += 6) logSection(`ADJ_CONTEXT_${String(i / 6 + 1).padStart(2, "0")}`, adjectiveRows.slice(i, i + 6));
  for (let i = 0; i < functionRows.length; i += 8) logSection(`FUNC_CONTEXT_${String(i / 8 + 1).padStart(2, "0")}`, functionRows.slice(i, i + 8));

  return <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(summary, null, 2)}</pre>;
}

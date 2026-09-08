import { sampleExamples } from "@/lib/data/sample-examples";
import { sampleWords } from "@/lib/data/sample-words";
import { getConjugation } from "@/lib/conjugation";
import { getContextualConjugation } from "@/lib/conjugation-context";

export const dynamic = "force-static";

const SENSE_MARKER = /[①-⑳]+$/u;
const WORK_CONTEXT = /(会社|職場|業務|会議|部署|部長|課長|上司|部下|同僚|社員|工場|作業|製品|商品|顧客|お客様|取引|契約|納期|出荷|納品|在庫|倉庫|事務|営業|勤務|出張|研修|報告|資料|書類|メール|電話|面接|採用|入社|退職|シフト|プロジェクト|システム|サービス|店員|ホテル|受付|予約|工事|現場|機械|設備|安全|品質|売上|予算|コスト|注文|請求|会計|説明会|企画|開発|生産|担当|当社|弊社|御社|社内|朝礼|店舗|経営|発表|手続き|投資|支店|本社|出勤|早退|残業|勤務先|取引先|新人|接客|客先|納期|工程|広告|制作|運営)/u;
const PERSONAL_CONTEXT = /(家族|母|父|姉|兄|弟|妹|祖父|祖母|叔父|叔母|友達|恋人|彼氏|彼女|子供|赤ちゃん|犬|猫|映画|旅行|休日|休みの日|家で|自宅|学校|宿題|誕生日|公園|買い物|風呂|散歩|遊び|結婚|写真|海|山|雪|歌|漫画|梅干し|料理|デート)/u;
const CASUAL_END = /(?:じゃん|ちゃった|だよ|だね|かな|んだよ|てるよ|てるね)[。！？!?]?$/u;
const DAILY_FORMAL = /(?:でございます|いたします|しております|でしょうか|くださいませ|いただけますでしょうか)/u;

function normalizeJapanese(text: string) {
  return text.replace(/[。！？!?、\s]/gu, "").trim();
}

function countBy<T>(items: T[], key: (item: T) => string) {
  const map = new Map<string, number>();
  for (const item of items) map.set(key(item), (map.get(key(item)) ?? 0) + 1);
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function logSection(name: string, value: unknown) {
  console.log(`INDEPENDENT_TANGO_N3_${name}`, JSON.stringify(value));
}

function chunks<T>(items: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

export default function TangoN3AuditPage() {
  const byWord = new Map<string, typeof sampleExamples>();
  for (const e of sampleExamples) {
    const rows = byWord.get(e.vocabId) ?? [];
    rows.push(e);
    byWord.set(e.vocabId, rows);
  }

  const idDuplicates = countBy(sampleWords, (w) => w.id).filter(([, n]) => n > 1);
  const surfaceReadingGroups = new Map<string, typeof sampleWords>();
  for (const w of sampleWords) {
    const key = `${w.word.replace(SENSE_MARKER, "")}\u0000${w.reading}`;
    const rows = surfaceReadingGroups.get(key) ?? [];
    rows.push(w);
    surfaceReadingGroups.set(key, rows);
  }
  const sameSurface = [...surfaceReadingGroups.values()].filter((rows) => rows.length > 1);

  const badDistribution = sampleWords.filter((w) => {
    const rows = byWord.get(w.id) ?? [];
    return rows.length !== 3 || rows.map((e) => e.exampleType).sort().join("|") !== "business|daily|exam" || rows.map((e) => e.exampleNo).sort().join("|") !== "1|2|3";
  });
  const clozeMismatch = sampleExamples.filter((e) => e.clozeJp.replace("_____", e.answer) !== e.exampleJp);
  const blankCountIssue = sampleExamples.filter((e) => (e.clozeJp.match(/_____/g) ?? []).length !== 1);
  const blankFields = sampleExamples.filter((e) => !e.exampleJp.trim() || !e.exampleVi.trim() || !e.clozeJp.trim() || !e.answer.trim());
  const exactExampleDuplicates = countBy(sampleExamples, (e) => e.exampleJp).filter(([, n]) => n > 1);
  const nearExampleDuplicates = countBy(sampleExamples, (e) => normalizeJapanese(e.exampleJp)).filter(([, n]) => n > 1);

  const verbs = sampleWords.filter((w) => w.partOfSpeech === "verb");
  const adjectives = sampleWords.filter((w) => w.partOfSpeech === "i_adjective" || w.partOfSpeech === "na_adjective");
  const conjErrors: Array<{ id: string; word: string; error: string }> = [];
  const contextualConjErrors: Array<{ id: string; word: string; error: string }> = [];
  for (const w of [...verbs, ...adjectives]) {
    try { getConjugation(w); } catch (error) {
      conjErrors.push({ id: w.id, word: w.word, error: error instanceof Error ? error.message : String(error) });
    }
    try { getContextualConjugation(w); } catch (error) {
      contextualConjErrors.push({ id: w.id, word: w.word, error: error instanceof Error ? error.message : String(error) });
    }
  }

  const senseDictionaryIssues = sampleWords.filter((w) => SENSE_MARKER.test(w.word) && (!w.dictionaryForm || SENSE_MARKER.test(w.dictionaryForm)));
  const reviewWords = sampleWords.filter((w) => w.needsReview);
  const verbMetadataIssues = verbs.filter((w) => !w.verbClass || !w.transitivity || w.particlePatterns.length === 0 || w.collocations.length === 0);
  const duplicateCollocations = sampleWords.filter((w) => new Set(w.collocations).size !== w.collocations.length);

  const business = sampleExamples.filter((e) => e.exampleType === "business");
  const daily = sampleExamples.filter((e) => e.exampleType === "daily");
  const exam = sampleExamples.filter((e) => e.exampleType === "exam");
  const businessPersonalNoWork = business.filter((e) => PERSONAL_CONTEXT.test(e.exampleJp) && !WORK_CONTEXT.test(e.exampleJp));
  const businessNoWorkMarker = business.filter((e) => !WORK_CONTEXT.test(e.exampleJp));
  const businessCasual = business.filter((e) => CASUAL_END.test(e.exampleJp));
  const examCasual = exam.filter((e) => CASUAL_END.test(e.exampleJp));
  const dailyFormal = daily.filter((e) => DAILY_FORMAL.test(e.exampleJp));

  const templateGroups = countBy(sampleExamples, (e) => e.clozeJp.replace(/[0-9０-９]+/gu, "#")).filter(([, n]) => n >= 3);

  const honorificIds = new Set(["itadaku1","itadaku2","ukagau1","ukagau2","itasu","mairu","haikensuru","orimasu","irassharu","ossharu","meshiagaru","goranninaru","omenikakaru","gorannireru"]);
  const honorificConjugations = sampleWords
    .filter((w) => honorificIds.has(w.id) || /(尊敬語|謙譲語)/u.test(w.usageNote))
    .map((w) => ({ id: w.id, word: w.word, dictionaryForm: w.dictionaryForm ?? w.word, conjugation: getContextualConjugation(w) }));

  const summary = {
    words: sampleWords.length,
    examples: sampleExamples.length,
    reviewCount: reviewWords.length,
    duplicateIdGroups: idDuplicates.length,
    sameSurfaceReadingGroups: sameSurface.length,
    badDistributionCount: badDistribution.length,
    clozeMismatchCount: clozeMismatch.length,
    blankCountIssueCount: blankCountIssue.length,
    blankFieldsCount: blankFields.length,
    exactExampleDuplicateGroups: exactExampleDuplicates.length,
    nearExampleDuplicateGroups: nearExampleDuplicates.length,
    conjugationErrorCount: conjErrors.length,
    contextualConjugationErrorCount: contextualConjErrors.length,
    senseDictionaryIssueCount: senseDictionaryIssues.length,
    verbMetadataIssueCount: verbMetadataIssues.length,
    duplicateCollocationWordCount: duplicateCollocations.length,
    businessPersonalNoWorkCount: businessPersonalNoWork.length,
    businessNoWorkMarkerCount: businessNoWorkMarker.length,
    businessCasualCandidateCount: businessCasual.length,
    examCasualCandidateCount: examCasual.length,
    dailyFormalCandidateCount: dailyFormal.length,
    templateGroupCount: templateGroups.length,
  };

  logSection("SUMMARY", summary);
  logSection("SAME_SURFACE", sameSurface.map((rows) => rows.map((w) => ({ id: w.id, word: w.word, reading: w.reading, meaning: w.meaningVi, dictionaryForm: w.dictionaryForm ?? null }))));
  logSection("STRUCTURE_ISSUES", {
    reviewWords: reviewWords.map((w) => ({ id: w.id, word: w.word })),
    idDuplicates,
    badDistribution: badDistribution.map((w) => ({ id: w.id, word: w.word })),
    clozeMismatch: clozeMismatch.map((e) => `${e.vocabId}#${e.exampleNo}`),
    blankCountIssue: blankCountIssue.map((e) => `${e.vocabId}#${e.exampleNo}`),
    senseDictionaryIssues: senseDictionaryIssues.map((w) => ({ id: w.id, word: w.word, dictionaryForm: w.dictionaryForm ?? null })),
    verbMetadataIssues: verbMetadataIssues.map((w) => ({ id: w.id, word: w.word, verbClass: w.verbClass, transitivity: w.transitivity, particles: w.particlePatterns, collocations: w.collocations })),
  });
  logSection("DUPLICATES", { exactExampleDuplicates, nearExampleDuplicates, duplicateCollocations: duplicateCollocations.map((w) => ({ id: w.id, word: w.word, collocations: w.collocations })) });
  logSection("REGISTER", {
    businessCasual: businessCasual.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
    examCasual: examCasual.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
    dailyFormal: dailyFormal.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })),
  });
  logSection("CONJ_ERRORS", { conjErrors, contextualConjErrors });
  logSection("HONORIFIC_CONJ", honorificConjugations);
  logSection("TEMPLATE_GROUPS", templateGroups.slice(0, 80));

  for (const [i, rows] of chunks(businessPersonalNoWork, 40).entries()) {
    logSection(`BUSINESS_PERSONAL_${String(i + 1).padStart(2, "0")}`, rows.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp, vi: e.exampleVi })));
  }
  for (const [i, rows] of chunks(businessNoWorkMarker, 50).entries()) {
    logSection(`BUSINESS_NO_WORK_${String(i + 1).padStart(2, "0")}`, rows.map((e) => ({ id: `${e.vocabId}#${e.exampleNo}`, jp: e.exampleJp })));
  }

  return <pre style={{ whiteSpace: "pre-wrap", fontSize: 12 }}>{JSON.stringify(summary, null, 2)}</pre>;
}

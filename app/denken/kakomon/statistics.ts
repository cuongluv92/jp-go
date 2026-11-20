import { bookPageHref } from "../index-lookup";
import { lesson } from "../ohm/lesson";
import references from "./repeat-references.json";
import { denkenExamHref, denkenPastExams, denkenQuestionHref, questionLabel } from "./catalog";

export type QuestionReference = {
  href: string;
  label: string;
  year: number;
  topic: string;
};

type TopicRow = {
  title: string;
  japanese: string;
  href: string;
  questions: number[];
};

type ExamRow = {
  href: string;
  label: string;
  year: number;
  count: number;
};

export type RepeatKind = "same" | "similar";
type RepeatPair = { first: number; second: number; kind: RepeatKind; reviewed?: true };

export type SubjectStatistics = {
  subject: string;
  exams: ExamRow[];
  questions: QuestionReference[];
  topics: TopicRow[];
  repeats: RepeatPair[];
};

function normalize(text: string) {
  return text.normalize("NFKC").replace(/[−‐‑]/g, "-").replace(/[\s、。]/g, "");
}

function normalizeStem(text: string) {
  return normalize(text)
    .replace(/^\([ab]\)/, "")
    .replace(/(?:次の\(1\)[~～〜ー-]\(5\)のうちから一つ選べ|を(?:次のうちから一つ)?選べ|は次のうちどれか)[?？]*$/, "");
}

function trigrams(text: string) {
  const grams = new Set<string>();
  for (let start = 0; start + 3 <= text.length; start++) grams.add(text.slice(start, start + 3));
  return grams;
}

function sharedCount<T>(first: Set<T>, second: Set<T>) {
  let count = 0;
  for (const value of first) if (second.has(value)) count++;
  return count;
}

type QuestionText = {
  stem: string;
  withVisual: boolean;
  grams: Set<string>;
  choices: Set<string>;
};

function prepareQuestionText(question: { question_jp: string; choices?: { choice_jp: string }[] }): QuestionText {
  const stem = normalizeStem(question.question_jp);
  const choices = (question.choices ?? []).map(({ choice_jp }) => normalize(choice_jp));
  return {
    stem,
    withVisual: [stem, ...choices].some((text) => /図|グラフ|波形|(?:次|下|上|右|左|別)の?表|表(?:[0-9]|の|に|を|から|で)/.test(text)),
    grams: trigrams(stem),
    choices: new Set(choices),
  };
}

function compareText(first: QuestionText, second: QuestionText): RepeatKind | undefined {
  if (first.stem.length < 28 || second.stem.length < 28 || first.choices.size !== 5 || second.choices.size !== 5) return;
  const sharedChoices = sharedCount(first.choices, second.choices);
  if (sharedChoices < 3) return;
  if (first.stem === second.stem && sharedChoices === 5 && !first.withVisual && !second.withVisual) return "same";

  const totalGrams = first.grams.size + second.grams.size;
  const threshold = sharedChoices === 5 ? 0.72 : 0.84;
  if ((2 * Math.min(first.grams.size, second.grams.size)) / totalGrams < threshold) return;
  if ((2 * sharedCount(first.grams, second.grams)) / totalGrams >= threshold) return "similar";
}

type Subject = (typeof denkenPastExams)[number]["subject"];
const subjectOrder: Subject[] = ["riron", "denryoku", "kikai", "houki"];

export function getDenkenStatistics(): SubjectStatistics[] {
  return subjectOrder.map((subject) => {
    const catalog = denkenPastExams.filter((exam) => exam.subject === subject).sort((a, b) =>
      b.year - a.year || Number(b.sessionLabel === "下期") - Number(a.sessionLabel === "下期")
    );
    const exams: ExamRow[] = [];
    const questions: QuestionReference[] = [];
    const texts: QuestionText[] = [];
    const byEditionAndKey = new Map<string, number>();
    const topics = new Map<number, TopicRow>();

    for (const exam of catalog) {
      exams.push({
        href: `${denkenExamHref}/${exam.test.slug}`,
        label: exam.sessionLabel ?? "Đề năm",
        year: exam.year,
        count: exam.questions.length,
      });
      for (const row of exam.questions) {
        const index = questions.length;
        byEditionAndKey.set(`${exam.edition}/${row.key}`, index);
        questions.push({
          href: denkenQuestionHref(exam.test.slug, row.key),
          label: [exam.year, exam.sessionLabel, `Câu ${questionLabel(row.key)}`].filter(Boolean).join(" · "),
          year: exam.year,
          topic: row.topic,
        });
        texts.push(prepareQuestionText(row.question));
        for (const { page, title } of row.theory) {
          if (!topics.has(page)) {
            const heading = lesson[page]?.find((line) => "heading" in line && line.heading && line.vi);
            const name = heading && "vi" in heading ? heading.vi.replaceAll("**", "").split(" · ")[0] : title;
            topics.set(page, { title: page === 107 ? "Điện dung của tụ điện" : name, japanese: title, href: bookPageHref(page), questions: [] });
          }
          topics.get(page)!.questions.push(index);
        }
      }
    }

    const repeats = new Map<string, RepeatPair>();
    for (const [editionA, keyA, editionB, keyB, kind, evidence] of references[subject]) {
      const a = byEditionAndKey.get(`${editionA}/${keyA}`);
      const b = byEditionAndKey.get(`${editionB}/${keyB}`);
      if (a === undefined || b === undefined || questions[a].year === questions[b].year) continue;
      const first = Math.min(a, b);
      const second = Math.max(a, b);
      repeats.set(`${first}:${second}`, { first, second, kind: kind === "same" ? "same" : "similar", reviewed: evidence === "reviewed" ? true : undefined });
    }
    for (let first = 0; first < texts.length; first++) {
      for (let second = first + 1; second < texts.length; second++) {
        if (questions[first].year === questions[second].year) continue;
        const kind = compareText(texts[first], texts[second]);
        const key = `${first}:${second}`;
        const prior = repeats.get(key);
        if (kind && (!prior || (kind === "same" && !prior.reviewed))) repeats.set(key, { first, second, kind });
      }
    }
    return { subject: catalog[0].test.title.split(" · ")[1], exams, questions, topics: [...topics.values()], repeats: [...repeats.values()].sort((a, b) => a.first - b.first || a.second - b.second) };
  });
}

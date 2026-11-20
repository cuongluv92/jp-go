import type { ExamQuestion, ExamTest } from "@/lib/exam/types";
import { lessons } from "../contents";
import riron21 from "./h21/riron.json";
import denryoku21 from "./h21/denryoku.json";
import kikai21 from "./h21/kikai.json";
import houki21 from "./h21/houki.json";
import riron22 from "./h22/riron.json";
import denryoku22 from "./h22/denryoku.json";
import kikai22 from "./h22/kikai.json";
import houki22 from "./h22/houki.json";
import riron23 from "./h23/riron.json";
import denryoku23 from "./h23/denryoku.json";
import kikai23 from "./h23/kikai.json";
import houki23 from "./h23/houki.json";
import riron24 from "./h24/riron.json";
import denryoku24 from "./h24/denryoku.json";
import kikai24 from "./h24/kikai.json";
import houki24 from "./h24/houki.json";
import riron25 from "./h25/riron.json";
import denryoku25 from "./h25/denryoku.json";
import kikai25 from "./h25/kikai.json";
import houki25 from "./h25/houki.json";
import riron26 from "./h26/riron.json";
import denryoku26 from "./h26/denryoku.json";
import kikai26 from "./h26/kikai.json";
import houki26 from "./h26/houki.json";
import riron27 from "./h27/riron.json";
import denryoku27 from "./h27/denryoku.json";
import kikai27 from "./h27/kikai.json";
import houki27 from "./h27/houki.json";
import riron28 from "./h28/riron.json";
import denryoku28 from "./h28/denryoku.json";
import kikai28 from "./h28/kikai.json";
import houki28 from "./h28/houki.json";
import riron29 from "./h29/riron.json";
import denryoku29 from "./h29/denryoku.json";
import kikai29 from "./h29/kikai.json";
import houki29 from "./h29/houki.json";
import riron30 from "./h30/riron.json";
import denryoku30 from "./h30/denryoku.json";
import kikai30 from "./h30/kikai.json";
import houki30 from "./h30/houki.json";
import rironR1 from "./r1/riron.json";
import denryokuR1 from "./r1/denryoku.json";
import kikaiR1 from "./r1/kikai.json";
import houkiR1 from "./r1/houki.json";
import rironR2 from "./r2/riron.json";
import denryokuR2 from "./r2/denryoku.json";
import kikaiR2 from "./r2/kikai.json";
import houkiR2 from "./r2/houki.json";
import rironR3 from "./r3/riron.json";
import denryokuR3 from "./r3/denryoku.json";
import kikaiR3 from "./r3/kikai.json";
import houkiR3 from "./r3/houki.json";
import rironR4Early from "./r4-early/riron.json";
import denryokuR4Early from "./r4-early/denryoku.json";
import kikaiR4Early from "./r4-early/kikai.json";
import houkiR4Early from "./r4-early/houki.json";
import rironR4Late from "./r4-late/riron.json";
import denryokuR4Late from "./r4-late/denryoku.json";
import kikaiR4Late from "./r4-late/kikai.json";
import houkiR4Late from "./r4-late/houki.json";

import rironR5Early from "./r5-early/riron.json";
import denryokuR5Early from "./r5-early/denryoku.json";
import kikaiR5Early from "./r5-early/kikai.json";
import houkiR5Early from "./r5-early/houki.json";
import rironR5Late from "./r5-late/riron.json";
import denryokuR5Late from "./r5-late/denryoku.json";
import kikaiR5Late from "./r5-late/kikai.json";
import houkiR5Late from "./r5-late/houki.json";

import rironR6Early from "./r6-early/riron.json";
import denryokuR6Early from "./r6-early/denryoku.json";
import kikaiR6Early from "./r6-early/kikai.json";
import houkiR6Early from "./r6-early/houki.json";
import rironR6Late from "./r6-late/riron.json";
import denryokuR6Late from "./r6-late/denryoku.json";
import kikaiR6Late from "./r6-late/kikai.json";
import houkiR6Late from "./r6-late/houki.json";

import rironR7Early from "./r7-early/riron.json";
import denryokuR7Early from "./r7-early/denryoku.json";
import kikaiR7Early from "./r7-early/kikai.json";
import houkiR7Early from "./r7-early/houki.json";
import rironR7Late from "./r7-late/riron.json";
import denryokuR7Late from "./r7-late/denryoku.json";
import kikaiR7Late from "./r7-late/kikai.json";
import houkiR7Late from "./r7-late/houki.json";

export const denkenExamHref = "/denken/kakomon";

const denkenOfficialAnswers: Readonly<Partial<Record<number, string>>> = {
  2009: "https://www.shiken.or.jp/chief/upload/20090906_ch_third_a01.pdf",
  2010: "https://www.shiken.or.jp/chief/upload/20100905_ch_third_a01.pdf",
  2011: "https://www.shiken.or.jp/chief/upload/20110904_ch_third_a01.pdf",
  2012: "https://www.shiken.or.jp/chief/upload/20120909_ch_third_a01.pdf",
  2013: "https://www.shiken.or.jp/chief/upload/20130901_ch_third_a01.pdf",
  2014: "https://www.shiken.or.jp/chief/upload/20140907_ch_third_a01.pdf",
  2015: "https://www.shiken.or.jp/chief/upload/20150906_ch_third_a01.pdf",
  2016: "https://www.shiken.or.jp/chief/upload/20160904_ch_third_a01.pdf",
  2017: "https://www.shiken.or.jp/chief/upload/20170903_ch_third_a01.pdf",
  2018: "https://www.shiken.or.jp/chief/upload/20180902_ch_third_a01.pdf",
  2019: "https://www.shiken.or.jp/chief/upload/20190901_ch_third_a01.pdf",
  2020: "https://www.shiken.or.jp/chief/upload/20200913_ch_third_a01.pdf",
  2021: "https://www.shiken.or.jp/chief/upload/20210822_ch_third_a01.pdf",
};

const testId = "denken-h21-riron";
const questionId = `${testId}-06`;

const question6: ExamQuestion = {
  id: questionId,
  test_id: testId,
  question_number: 6,
  question_jp: "抵抗値が異なる抵抗 R₁［Ω］と R₂［Ω］を図1のように直列に接続し，30［V］の直流電圧を加えたところ，回路に流れる電流は6［A］であった。次に，この抵抗 R₁［Ω］と R₂［Ω］を図2のように並列に接続し，30［V］の直流電圧を加えたところ，回路に流れる電流は25［A］であった。このとき，抵抗 R₁［Ω］，R₂［Ω］のうち小さい方の抵抗［Ω］の値として，正しいのは次のうちどれか。",
  question_vi: "Mắc nối tiếp hai điện trở R₁ [Ω] và R₂ [Ω] có giá trị khác nhau như hình 1. Khi đặt điện áp một chiều 30 V, dòng điện chạy trong mạch là 6 A. Tiếp theo, mắc song song hai điện trở này như hình 2 và vẫn đặt điện áp một chiều 30 V, dòng điện chạy trong mạch là 25 A. Giá trị của điện trở nhỏ hơn trong hai điện trở R₁ và R₂ là bao nhiêu ôm?",
  question_furigana_tokens: [
    ["抵抗値", "ていこうち"], ["異", "こと"], ["抵抗", "ていこう"], ["図", "ず"],
    ["直列", "ちょくれつ"], ["接続", "せつぞく"], ["直流電圧", "ちょくりゅうでんあつ"],
    ["加", "くわ"], ["回路", "かいろ"], ["流", "なが"], ["電流", "でんりゅう"],
    ["次", "つぎ"], ["並列", "へいれつ"], ["小", "ちい"], ["方", "ほう"], ["値", "あたい"], ["正", "ただ"],
  ].map(([surface, reading]) => ({ surface, reading })),
  question_image_path: "/denken/kakomon/h21-riron-06.webp",
  answer_jp: "（4）2 Ω",
  answer_vi: "Điện trở nhỏ hơn là 2 Ω. Điện trở còn lại là 3 Ω.",
  answer_furigana_tokens: [],
  explanation_vi: null,
  explanation_jp: null,
  is_flagged_default: false,
  sort_order: 6,
  choices: ["1", "1.2", "1.5", "2", "3"].map((value, index) => ({
    id: `${questionId}-${index + 1}`,
    question_id: questionId,
    choice_label: String(index + 1),
    choice_jp: `${value} Ω`,
    choice_vi: `${value.replace(".", ",")} Ω`,
    choice_furigana_tokens: [],
    is_correct: index === 3,
    sort_order: index,
  })),
  references: [],
};

type QuestionContent = {
  key: string;
  topic: string;
  titleJp: string;
  questionJp: string;
  questionVi: string;
  solution: string[];
  theory: number[];
  pages: number[];
  answer: number | "all";
  choicesJp: string[];
  choicesVi: (string | null)[];
  readings: (string | number)[][];
  choiceReadings: (string | number)[][][];
};

type PastQuestion = {
  key: string;
  question: ExamQuestion;
  topic: string;
  theory: { page: number; title: string }[];
  source: { href: string; label: string };
  originalPages: { href: string; label: string }[];
  solution?: string[];
};

const theoryTitles = new Map<number, string>();
for (const chapters of Object.values(lessons)) {
  for (const chapter of chapters) {
    for (const row of chapter.split("\n")) {
      const match = /^(\d+) (?:[\d-]+ )?(.+?)(?: といえば|$)/.exec(row);
      if (match) theoryTitles.set(Number(match[1]), match[2]);
    }
  }
}
theoryTitles.set(3, "オームの法則");
theoryTitles.set(347, "タービン発電機の冷却方式");
theoryTitles.set(429, "電圧・周波数の維持");
theoryTitles.set(430, "保安規程");

const subjects = {
  riron: "理論 (Lý thuyết)",
  denryoku: "電力 (Hệ thống điện)",
  kikai: "機械 (Máy điện và ứng dụng)",
  houki: "法規 (Pháp quy)",
} as const;

function expandReadings(text: string, readings: (string | number)[][]) {
  return readings.map(([offset, length, reading]) => ({
    surface: text.slice(Number(offset), Number(offset) + Number(length)),
    reading: String(reading),
    start: Number(offset),
  }));
}

type ExamSession = {
  slug: string;
  label: string;
  solutionsSuffix: string;
  officialAnswer: string;
};

const r4EarlySession: ExamSession = {
  slug: "early",
  label: "上期",
  solutionsSuffix: "-1",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/20220821_ch_third_a01.pdf",
};

const r4LateSession: ExamSession = {
  slug: "late",
  label: "下期",
  solutionsSuffix: "-2",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/20230326_ch_third_a01.pdf",
};

const r5EarlySession: ExamSession = {
  slug: "early",
  label: "上期",
  solutionsSuffix: "-1",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/20230820_ch_third_a01.pdf",
};

const r5LateSession: ExamSession = {
  slug: "late",
  label: "下期",
  solutionsSuffix: "-2",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/20240324_ch_third_a01.pdf",
};

const r6EarlySession: ExamSession = {
  slug: "early",
  label: "上期",
  solutionsSuffix: "-1",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/20240818_ch_third_a01.pdf",
};

const r6LateSession: ExamSession = {
  slug: "late",
  label: "下期",
  solutionsSuffix: "-2",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/2024_3_2.pdf",
};

const r7EarlySession: ExamSession = {
  slug: "early",
  label: "上期",
  solutionsSuffix: "-1",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf",
};

const r7LateSession: ExamSession = {
  slug: "late",
  label: "下期",
  solutionsSuffix: "-2",
  officialAnswer: "https://www.shiken.or.jp/chief/upload/20260322_ch_third_a01.pdf",
};

function makeExam(
  eraYear: number,
  subject: keyof typeof subjects,
  rows: QuestionContent[],
  era: "h" | "r" = "h",
  session?: ExamSession,
) {
  const year = (era === "h" ? 1988 : 2018) + eraYear;
  const eraEdition = `${era}${eraYear}`;
  const edition = session ? `${eraEdition}-${session.slug}` : eraEdition;
  const solutionsEdition = eraEdition + (session?.solutionsSuffix ?? "");
  const eraLabel = era === "h" ? `平成${eraYear}年度` : `令和${eraYear === 1 ? "元" : eraYear}年度`;
  const examLabel = session ? `${eraLabel} ${session.label}` : eraLabel;
  const slug = `${edition}-${subject}`;
  const id = `denken-${slug}`;
  const title = `${examLabel} · ${subjects[subject]}`;
  const pilot = edition === "h21" && subject === "riron";
  const test: ExamTest = {
    id, slug, title,
    test_year: String(year),
    exam_stage: null,
    test_type: "kakomon",
    question_count: rows.length + Number(pilot),
    duration_minutes: subject === "houki" ? 65 : 90,
    status: "published",
    sort_order: 0,
    created_at: "",
    updated_at: "",
  };

  const questions: PastQuestion[] = rows.map((row) => {
    const number = Number.parseInt(row.key, 10);
    const part = row.key.at(-1);
    const qid = `${id}-${row.key.padStart(2, "0")}`;
    const stem = row.questionJp || row.titleJp;
    const question: ExamQuestion = {
      id: qid,
      test_id: id,
      question_number: part === "a" || part === "b" ? number * 10 + (part === "a" ? 1 : 2) : number,
      question_jp: stem,
      question_vi: row.questionVi,
      question_furigana_tokens: expandReadings(stem, row.readings),
      question_image_path: null,
      answer_jp: null,
      answer_vi: null,
      answer_furigana_tokens: [],
      explanation_vi: null,
      explanation_jp: null,
      is_flagged_default: false,
      sort_order: 0,
      choices: row.choicesJp.map((choice, index) => ({
        id: `${qid}-${index + 1}`,
        question_id: qid,
        choice_label: String(index + 1),
        choice_jp: choice,
        choice_vi: row.choicesVi[index],
        choice_furigana_tokens: expandReadings(choice, row.choiceReadings[index]),
        is_correct: row.answer === "all" || index + 1 === row.answer,
        sort_order: index,
      })),
      references: [],
    };

    return {
      key: row.key,
      question,
      topic: row.topic,
      theory: row.theory.map((page) => ({ page, title: theoryTitles.get(page) ?? "" })),
      source: row.answer === "all"
        ? { href: "https://www.shiken.or.jp/chief/upload/20140907_ch_third_a01.pdf", label: `Đáp án chính thức · ${edition.toUpperCase()} 問${number}` }
        : { href: `https://denken-ou.com/${subject}${solutionsEdition}-${number}/`, label: `Lời giải Nhật · ${session ? examLabel : edition.toUpperCase()} 問${number}` },
      originalPages: row.pages.map((page) => ({
        href: `/denken/kakomon/${edition}/${subject}/${String(page).padStart(2, "0")}.webp`,
        label: `Trang ${page} của đề gốc`,
      })),
      solution: row.solution,
    };
  });

  if (pilot) {
    questions.splice(5, 0, {
      key: "6",
      question: question6,
      topic: "Định luật Ohm và điện trở nối tiếp, song song",
      theory: [
        { page: 3, title: "Định luật Ohm" },
        { page: 5, title: "Điện trở tương đương nối tiếp và song song" },
      ],
      source: { href: "https://eleking.net/denken3/d3rq/d3rq-h21a06.html", label: "Lời giải Nhật · H21 理論 問6" },
      originalPages: [],
    });
  }

  return {
    test, questions, subject, eraYear, year, eraLabel, edition, examLabel,
    sessionLabel: session?.label,
    officialAnswer: session?.officialAnswer ?? denkenOfficialAnswers[year],
  };
}

export const denkenPastExams = [
  makeExam(21, "riron", riron21),
  makeExam(21, "denryoku", denryoku21),
  makeExam(21, "kikai", kikai21),
  makeExam(21, "houki", houki21),
  makeExam(22, "riron", riron22),
  makeExam(22, "denryoku", denryoku22),
  makeExam(22, "kikai", kikai22),
  makeExam(22, "houki", houki22),
  makeExam(23, "riron", riron23),
  makeExam(23, "denryoku", denryoku23),
  makeExam(23, "kikai", kikai23),
  makeExam(23, "houki", houki23),
  makeExam(24, "riron", riron24),
  makeExam(24, "denryoku", denryoku24),
  makeExam(24, "kikai", kikai24),
  makeExam(24, "houki", houki24),
  makeExam(25, "riron", riron25),
  makeExam(25, "denryoku", denryoku25),
  makeExam(25, "kikai", kikai25),
  makeExam(25, "houki", houki25),
  makeExam(26, "riron", riron26),
  makeExam(26, "denryoku", denryoku26),
  makeExam(26, "kikai", kikai26.map((row) => ({ ...row, answer: row.answer === "all" ? ("all" as const) : Number(row.answer) }))),
  makeExam(26, "houki", houki26),
  makeExam(27, "riron", riron27),
  makeExam(27, "denryoku", denryoku27),
  makeExam(27, "kikai", kikai27),
  makeExam(27, "houki", houki27),
  makeExam(28, "riron", riron28),
  makeExam(28, "denryoku", denryoku28),
  makeExam(28, "kikai", kikai28),
  makeExam(28, "houki", houki28),
  makeExam(29, "riron", riron29),
  makeExam(29, "denryoku", denryoku29),
  makeExam(29, "kikai", kikai29),
  makeExam(29, "houki", houki29),
  makeExam(30, "riron", riron30),
  makeExam(30, "denryoku", denryoku30),
  makeExam(30, "kikai", kikai30),
  makeExam(30, "houki", houki30),
  makeExam(1, "riron", rironR1, "r"),
  makeExam(1, "denryoku", denryokuR1, "r"),
  makeExam(1, "kikai", kikaiR1, "r"),
  makeExam(1, "houki", houkiR1, "r"),
  makeExam(2, "riron", rironR2, "r"),
  makeExam(2, "denryoku", denryokuR2, "r"),
  makeExam(2, "kikai", kikaiR2, "r"),
  makeExam(2, "houki", houkiR2, "r"),
  makeExam(3, "riron", rironR3, "r"),
  makeExam(3, "denryoku", denryokuR3, "r"),
  makeExam(3, "kikai", kikaiR3, "r"),
  makeExam(3, "houki", houkiR3, "r"),
  makeExam(4, "riron", rironR4Early, "r", r4EarlySession),
  makeExam(4, "denryoku", denryokuR4Early, "r", r4EarlySession),
  makeExam(4, "kikai", kikaiR4Early, "r", r4EarlySession),
  makeExam(4, "houki", houkiR4Early, "r", r4EarlySession),
  makeExam(4, "riron", rironR4Late, "r", r4LateSession),
  makeExam(4, "denryoku", denryokuR4Late, "r", r4LateSession),
  makeExam(4, "kikai", kikaiR4Late, "r", r4LateSession),
  makeExam(4, "houki", houkiR4Late, "r", r4LateSession),
  makeExam(5, "riron", rironR5Early, "r", r5EarlySession),
  makeExam(5, "denryoku", denryokuR5Early, "r", r5EarlySession),
  makeExam(5, "kikai", kikaiR5Early, "r", r5EarlySession),
  makeExam(5, "houki", houkiR5Early, "r", r5EarlySession),
  makeExam(5, "riron", rironR5Late, "r", r5LateSession),
  makeExam(5, "denryoku", denryokuR5Late, "r", r5LateSession),
  makeExam(5, "kikai", kikaiR5Late, "r", r5LateSession),
  makeExam(5, "houki", houkiR5Late, "r", r5LateSession),
  makeExam(6, "riron", rironR6Early, "r", r6EarlySession),
  makeExam(6, "denryoku", denryokuR6Early, "r", r6EarlySession),
  makeExam(6, "kikai", kikaiR6Early, "r", r6EarlySession),
  makeExam(6, "houki", houkiR6Early, "r", r6EarlySession),
  makeExam(6, "riron", rironR6Late, "r", r6LateSession),
  makeExam(6, "denryoku", denryokuR6Late, "r", r6LateSession),
  makeExam(6, "kikai", kikaiR6Late, "r", r6LateSession),
  makeExam(6, "houki", houkiR6Late, "r", r6LateSession),
  makeExam(7, "riron", rironR7Early, "r", r7EarlySession),
  makeExam(7, "denryoku", denryokuR7Early, "r", r7EarlySession),
  makeExam(7, "kikai", kikaiR7Early, "r", r7EarlySession),
  makeExam(7, "houki", houkiR7Early, "r", r7EarlySession),
  makeExam(7, "riron", rironR7Late, "r", r7LateSession),
  makeExam(7, "denryoku", denryokuR7Late, "r", r7LateSession),
  makeExam(7, "kikai", kikaiR7Late, "r", r7LateSession),
  makeExam(7, "houki", houkiR7Late, "r", r7LateSession),
];

export function denkenQuestionHref(testSlug: string, key: string) {
  return `${denkenExamHref}/${testSlug}?cau=${key}`;
}

export function questionLabel(key: string) {
  return key.replace(/([ab])$/, "($1)");
}

export function pastQuestionsForBookPage(page: number) {
  return denkenPastExams.flatMap(({ test, questions }) => questions
    .filter(({ theory }) => theory.some((ref) => ref.page === page))
    .map(({ key, topic }) => ({
      href: denkenQuestionHref(test.slug, key),
      title: `${test.title} · Câu ${questionLabel(key)}`,
      topic,
    })));
}

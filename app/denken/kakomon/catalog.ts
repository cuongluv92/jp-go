import type { ExamQuestion, ExamTest } from "@/lib/exam/types";
import { lessons } from "../contents";
import riron21 from "./h21/riron.json";
import denryoku21 from "./h21/denryoku.json";
import kikai21 from "./h21/kikai.json";
import houki21 from "./h21/houki.json";

export const denkenExamHref = "/denken/kakomon";

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
  answer: number;
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

function makeExam(eraYear: number, subject: keyof typeof subjects, rows: QuestionContent[]) {
  const slug = `h${eraYear}-${subject}`;
  const id = `denken-${slug}`;
  const title = `平成${eraYear}年度 · ${subjects[subject]}`;
  const pilot = eraYear === 21 && subject === "riron";
  const test: ExamTest = {
    id, slug, title,
    test_year: String(1988 + eraYear),
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
        is_correct: index + 1 === row.answer,
        sort_order: index,
      })),
      references: [],
    };

    return {
      key: row.key,
      question,
      topic: row.topic,
      theory: row.theory.map((page) => ({ page, title: theoryTitles.get(page) ?? "" })),
      source: { href: `https://denken-ou.com/${subject}h${eraYear}-${number}/`, label: `Lời giải Nhật · H${eraYear} 問${number}` },
      originalPages: row.pages.map((page) => ({
        href: `/denken/kakomon/h${eraYear}/${subject}/${String(page).padStart(2, "0")}.webp`,
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

  return { test, questions, subject, eraYear };
}

export const denkenPastExams = [
  makeExam(21, "riron", riron21),
  makeExam(21, "denryoku", denryoku21),
  makeExam(21, "kikai", kikai21),
  makeExam(21, "houki", houki21),
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

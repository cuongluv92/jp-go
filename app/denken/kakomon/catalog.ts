import type { ExamQuestion, ExamTest } from "@/lib/exam/types";

export const denkenExamHref = "/denken/kakomon";

const testId = "denken-h21-riron";
const questionId = `${testId}-06`;

export const h21Riron: ExamTest = {
  id: testId,
  slug: "h21-riron",
  title: "平成21年度 · 理論 (Lý thuyết)",
  test_year: "2009",
  exam_stage: null,
  test_type: "kakomon",
  question_count: 1,
  duration_minutes: null,
  status: "published",
  sort_order: 0,
  created_at: "",
  updated_at: "",
};

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

export const denkenPastExams = [{
  test: h21Riron,
  questions: [{
    question: question6,
    topic: "Định luật Ohm và điện trở nối tiếp, song song",
    theory: [
      { page: 3, title: "Định luật Ohm" },
      { page: 5, title: "Điện trở tương đương nối tiếp và song song" },
    ],
    source: { href: "https://eleking.net/denken3/d3rq/d3rq-h21a06.html", label: "Lời giải Nhật · H21 理論 問6" },
  }],
}];

export function denkenQuestionHref(testSlug: string, questionNumber: number) {
  return `${denkenExamHref}/${testSlug}?cau=${questionNumber}`;
}

export function pastQuestionsForBookPage(page: number) {
  return denkenPastExams.flatMap(({ test, questions }) => questions
    .filter(({ theory }) => theory.some((ref) => ref.page === page))
    .map(({ question, topic }) => ({
      href: denkenQuestionHref(test.slug, question.question_number),
      title: `${test.title} · Câu ${question.question_number}`,
      topic,
    })));
}

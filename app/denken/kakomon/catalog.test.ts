import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { lesson } from "../ohm/lesson";
import { denkenPastExams, denkenQuestionHref, pastQuestionsForBookPage } from "./catalog";

const officialKeys: Record<string, string> = {
  "h21-riron": "4322442215354311325254",
  "h21-denryoku": "24225432454325342542",
  "h21-kikai": "2245411521324233423445",
  "h21-houki": "3415324145513224",
  "h22-riron": "2142543445514524341332",
  "h22-denryoku": "54232313514432345324",
  "h22-kikai": "4121541345332233212123",
  "h22-houki": "3145332514424552",
  "h23-riron": "3252244323151322145144",
  "h23-denryoku": "24411415112553545234",
  "h23-kikai": "4134312333451121531253",
  "h23-houki": "2245213215324334",
  "h24-riron": "3451243431325254453241",
};

const firstMultipartQuestion = { riron: 15, denryoku: 15, kikai: 15, houki: 11 };
const lastMultipartQuestion = { riron: 18, denryoku: 17, kikai: 18, houki: 13 };

describe("Denken past exams", () => {
  it.each(denkenPastExams.map((exam) => [exam.test.slug, exam] as const))(
    "%s matches the official answer key and links to existing source and theory pages",
    (slug, { questions, test }) => {
      const keys = questions.map(({ question }) => question.choices.filter((choice) => choice.is_correct));
      expect(keys.map(([choice]) => choice.choice_label).join("")).toBe(officialKeys[slug]);
      expect(new Set(questions.map(({ key }) => key)).size).toBe(test.question_count);
      for (const { key, question, originalPages, theory, solution } of questions) {
        expect(question.choices).toHaveLength(5);
        expect(question.choices.filter((choice) => choice.is_correct)).toHaveLength(1);
        for (const choice of question.choices) {
          expect(choice.choice_jp.trim()).not.toBe("");
          expect(choice.choice_vi?.trim()).toBeTruthy();
        }
        expect(question.question_jp).toBeTruthy();
        expect(question.question_vi).toBeTruthy();
        expect(theory.length).toBeGreaterThan(0);
        if (key === "6" && slug === "h21-riron") {
          expect(existsSync(`public${question.question_image_path}`)).toBe(true);
        } else {
          expect(solution?.length).toBeGreaterThan(1);
          expect(originalPages.length).toBeGreaterThan(0);
          for (const { href } of originalPages) expect(existsSync(`public${href}`)).toBe(true);
        }
        for (const { page } of theory) {
          expect(lesson[page]).toBeTruthy();
          expect(pastQuestionsForBookPage(page).map(({ href }) => href)).toContain(denkenQuestionHref(slug, key));
        }
      }
    },
  );

  it.each(denkenPastExams.map((exam) => [exam.test.slug, exam] as const))(
    "%s includes both parts of every multipart question in the official order",
    (_, { questions, subject }) => {
      const first = firstMultipartQuestion[subject];
      const last = lastMultipartQuestion[subject];
      const expected = Array.from({ length: last - first + 1 }, (_, index) => first + index)
        .flatMap((number) => [`${number}a`, `${number}b`]);
      const multipart = questions.filter(({ key }) => /[ab]$/.test(key));
      expect(multipart.map(({ key }) => key)).toEqual(expected);
      for (const { key, question } of multipart) {
        expect(question.question_jp).toMatch(new RegExp(`(?:^|\\n)\\(${key.at(-1)}\\)`));
      }
    },
  );

  it("keeps both H21 theory ammeter experiments and their answer in the original order", () => {
    const exam = denkenPastExams.find(({ test }) => test.slug === "h21-riron");
    const row = exam?.questions.find(({ key }) => key === "14");
    expect(row?.question.question_vi).toContain("10 V");
    expect(row?.question.question_vi).toContain("50 Hz");
    expect(row?.question.question_vi).toContain("500 Ω");
    expect(row?.question.choices.find(({ is_correct }) => is_correct)).toMatchObject({
      choice_label: "3",
      choice_vi: "(ア) 100 mA · (イ) 0 mA",
    });
    expect(row?.solution?.join(" ")).toContain("0,200 A");
  });
});

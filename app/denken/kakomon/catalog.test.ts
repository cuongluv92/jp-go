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
};

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
});

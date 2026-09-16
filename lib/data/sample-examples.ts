import type { VocabExample } from "@/lib/types";

import examplesData from "./sample-examples.json";
import { applyTangoN3ExampleOverride } from "./tango-n3-example-overrides";
import { applyTangoN3ContextExampleOverride } from "./tango-n3-example-overrides-context";
import { applyTangoN3FinalContextOverride } from "./tango-n3-example-overrides-final";
import { applyTangoN3Final2Override } from "./tango-n3-example-overrides-final2";
import { applyTangoN3Final3Override } from "./tango-n3-example-overrides-final3";
import { applyTangoN3Final4Override } from "./tango-n3-example-overrides-final4";
import { applyTangoN3Final5Override } from "./tango-n3-example-overrides-final5";
import { applyTangoN3Final6Override } from "./tango-n3-example-overrides-final6";

/**
 * Đúng 3 ví dụ / từ (1 = exam, 2 = daily, 3 = business), khớp `vocabId` với
 * `sample-words.ts`. JSON gốc được sinh tự động; sửa hậu kiểm được áp qua
 * các lớp override để giữ lịch sử và tránh chỉnh tay file lớn.
 *
 * Mỗi override là hàm thuần (input: VocabExample) => VocabExample, độc lập
 * theo từng phần tử — gộp thành 1 lượt duyệt mảng duy nhất (thay vì 8 lượt
 * `.map()` nối tiếp) để giảm số lần cấp phát mảng trung gian khi module này
 * được nạp, thứ tự áp dụng override giữ nguyên như cũ.
 */
const rawSampleExamples = examplesData as unknown as VocabExample[];

const OVERRIDES = [
  applyTangoN3ExampleOverride,
  applyTangoN3ContextExampleOverride,
  applyTangoN3FinalContextOverride,
  applyTangoN3Final2Override,
  applyTangoN3Final3Override,
  applyTangoN3Final4Override,
  applyTangoN3Final5Override,
  applyTangoN3Final6Override,
] as const;

export const sampleExamples: VocabExample[] = rawSampleExamples.map((example) =>
  OVERRIDES.reduce((current, override) => override(current), example),
);

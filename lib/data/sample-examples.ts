import type { VocabExample } from "@/lib/types";

import examplesData from "./sample-examples.json";
import { applyTangoN3ExampleOverride } from "./tango-n3-example-overrides";
import { applyTangoN3ContextExampleOverride } from "./tango-n3-example-overrides-context";
import { applyTangoN3FinalContextOverride } from "./tango-n3-example-overrides-final";
import { applyTangoN3Final2Override } from "./tango-n3-example-overrides-final2";

/**
 * Đúng 3 ví dụ / từ (1 = exam, 2 = daily, 3 = business), khớp `vocabId` với
 * `sample-words.ts`. JSON gốc được sinh tự động; sửa hậu kiểm được áp qua
 * các lớp override để giữ lịch sử và tránh chỉnh tay file lớn.
 */
const rawSampleExamples = examplesData as unknown as VocabExample[];

export const sampleExamples: VocabExample[] = rawSampleExamples
  .map(applyTangoN3ExampleOverride)
  .map(applyTangoN3ContextExampleOverride)
  .map(applyTangoN3FinalContextOverride)
  .map(applyTangoN3Final2Override);

import type { VocabExample } from "@/lib/types";

import examplesData from "./sample-examples.json";
import { applyTangoN3ExampleOverride } from "./tango-n3-example-overrides";

/**
 * Đúng 3 ví dụ / từ (1 = exam, 2 = daily, 3 = business), khớp `vocabId` với
 * `sample-words.ts`. JSON gốc được sinh tự động; sửa hậu kiểm được áp qua
 * `tango-n3-example-overrides.ts` để giữ lịch sử và tránh chỉnh tay file lớn.
 */
const rawSampleExamples = examplesData as unknown as VocabExample[];

export const sampleExamples: VocabExample[] = rawSampleExamples.map(applyTangoN3ExampleOverride);

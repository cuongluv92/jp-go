import type { VocabExample } from "@/lib/types";

import examplesData from "./sample-examples.json";

/**
 * Đúng 3 ví dụ / từ (1 = exam, 2 = daily, 3 = business), khớp `vocabId` với
 * `lib/data/sample-words.ts`. Dữ liệu nằm ở `sample-examples.json` (lý do xem
 * ghi chú trong `sample-words.ts`). Sinh tự động cùng `sample-words.ts` — không
 * sửa tay trực tiếp, sửa ở nguồn rồi sinh lại.
 */
export const sampleExamples: VocabExample[] = examplesData as unknown as VocabExample[];

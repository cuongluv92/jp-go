import type { VocabWord } from "@/lib/types";

import wordsData from "./sample-words.json";

/**
 * Toàn bộ 1798 từ vựng N3 biên soạn từ file gốc. Mỗi từ có đúng 3 ví dụ tương ứng
 * trong `sample-examples.ts` (exam/daily/business), cloze đã được kiểm chứng
 * `clozeJp.replace("_____", answer) === exampleJp`.
 *
 * Dữ liệu nằm ở `sample-words.json` (không phải literal TS) vì mảng ~1800 object
 * union-type khiến trình biên dịch TypeScript vượt giới hạn kiểm tra kiểu
 * (TS2590: "Expression produces a union type that is too complex to represent").
 * Sinh tự động từ các file Excel batch — sửa ở nguồn rồi sinh lại, không sửa tay trực tiếp.
 */
export const sampleWords: VocabWord[] = wordsData as unknown as VocabWord[];

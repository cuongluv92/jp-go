import type { VocabWord } from "@/lib/types";

import wordsData from "./sample-words.json";
import { TANGO_N3_WORD_ADDITIONS } from "./tango-n3-word-additions";
import { applyTangoN3WordOverride } from "./tango-n3-word-overrides";

/**
 * Toàn bộ 1799 từ vựng N3 biên soạn từ file gốc (1798 từ trong JSON gốc +
 * 1 từ bị rơi mất khi biên soạn, xem tango-n3-word-additions.ts). Mỗi từ có
 * đúng 3 ví dụ tương ứng trong `sample-examples.ts` (exam/daily/business),
 * cloze đã được kiểm chứng.
 *
 * JSON gốc được sinh tự động từ các file Excel batch. Các sửa hậu kiểm không viết
 * tay vào JSON lớn mà áp qua `tango-n3-word-overrides.ts` để truy vết từng thay đổi.
 */
const rawSampleWords = wordsData as unknown as VocabWord[];

export const sampleWords: VocabWord[] = [...rawSampleWords.map(applyTangoN3WordOverride), ...TANGO_N3_WORD_ADDITIONS];

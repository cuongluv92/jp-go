import { TANGO_N3_USAGE_NOTES_1 } from "./tango-n3-usage-notes-1";
import { TANGO_N3_USAGE_NOTES_2 } from "./tango-n3-usage-notes-2";
import { TANGO_N3_USAGE_NOTES_3 } from "./tango-n3-usage-notes-3";
import { TANGO_N3_USAGE_NOTES_4 } from "./tango-n3-usage-notes-4";
import { TANGO_N3_USAGE_NOTES_5 } from "./tango-n3-usage-notes-5";
import { TANGO_N3_USAGE_NOTES_6 } from "./tango-n3-usage-notes-6";
import { TANGO_N3_USAGE_NOTES_7 } from "./tango-n3-usage-notes-7";
import { TANGO_N3_USAGE_NOTES_8 } from "./tango-n3-usage-notes-8";
import { TANGO_N3_USAGE_NOTES_9 } from "./tango-n3-usage-notes-9";

/**
 * Gộp các đợt bổ sung usageNote/commonMistake/similarWords/naturalnessNote
 * cho Tango N3 (mỗi đợt ~150 từ, xem tango-n3-usage-notes-N.ts). Tách theo
 * đợt để dễ review từng lần thay vì 1 file khổng lồ; file này chỉ gộp lại
 * theo id để tango-n3-word-overrides.ts dùng chung 1 lượt merge.
 */
export const TANGO_N3_USAGE_NOTES: Record<
  string,
  { usageNote?: string; commonMistake?: string; similarWords?: string; naturalnessNote?: string }
> = {
  ...TANGO_N3_USAGE_NOTES_1,
  ...TANGO_N3_USAGE_NOTES_2,
  ...TANGO_N3_USAGE_NOTES_3,
  ...TANGO_N3_USAGE_NOTES_4,
  ...TANGO_N3_USAGE_NOTES_5,
  ...TANGO_N3_USAGE_NOTES_6,
  ...TANGO_N3_USAGE_NOTES_7,
  ...TANGO_N3_USAGE_NOTES_8,
  ...TANGO_N3_USAGE_NOTES_9,
};

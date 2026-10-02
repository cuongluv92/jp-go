import type { StaticSougouPageSeed } from "./sougou-static-common";
import { STATIC_SOUGOU_PAGES_17_26 } from "./sougou-static-pages-17-26";
import { STATIC_SOUGOU_PAGES_27_36 } from "./sougou-static-pages-27-36";
import { STATIC_SOUGOU_PAGES_37_46 } from "./sougou-static-pages-37-46";
import { STATIC_SOUGOU_PAGES_47_54 } from "./sougou-static-pages-47-54";

export const STATIC_SOUGOU_PAGES: Record<number, StaticSougouPageSeed> = {
  ...STATIC_SOUGOU_PAGES_17_26,
  ...STATIC_SOUGOU_PAGES_27_36,
  ...STATIC_SOUGOU_PAGES_37_46,
  ...STATIC_SOUGOU_PAGES_47_54,
};

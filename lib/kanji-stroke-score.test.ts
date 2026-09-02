import { describe, expect, it } from "vitest";

import { scoreKanjiStroke } from "@/lib/kanji-stroke-score";

const guide = Array.from({ length: 11 }, (_, index) => ({ x: index, y: 0 }));

describe("scoreKanjiStroke", () => {
  it("chấp nhận nét gần mẫu và đúng hướng", () => {
    expect(scoreKanjiStroke(guide.map((p) => ({ x: p.x, y: 0.3 })), guide).accepted).toBe(true);
  });

  it("từ chối nét đi ngược hướng", () => {
    const score = scoreKanjiStroke([...guide].reverse(), guide);
    expect(score.directionCorrect).toBe(false);
    expect(score.accepted).toBe(false);
  });
});

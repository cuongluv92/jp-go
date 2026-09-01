import { describe, expect, it } from "vitest";

import {
  buildMultiTypeStudyDays,
  buildStudyDays,
  computePlanPace,
  computeStreak,
  distributeEvenly,
  monthsToDays,
} from "@/lib/study-plan";

describe("distributeEvenly", () => {
  it("chia đều khi total chia hết cho days", () => {
    expect(distributeEvenly(100, 10)).toEqual(Array(10).fill(10));
  });

  it("tổng luôn đúng bằng total kể cả khi không chia hết", () => {
    const counts = distributeEvenly(1798, 60);
    expect(counts.reduce((a, b) => a + b, 0)).toBe(1798);
    expect(counts).toHaveLength(60);
  });

  it("mọi ngày chênh nhau tối đa 1 mục và phần dư không dồn vào ngày cuối", () => {
    const counts = distributeEvenly(12, 5);
    expect(counts).toEqual([2, 2, 3, 2, 3]);
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
  });

  it("khớp tải học N2 90 ngày đã chốt", () => {
    const vocab = distributeEvenly(1193, 90);
    const kanji = distributeEvenly(406, 90);
    const grammar = distributeEvenly(112, 90);

    expect(vocab.filter((n) => n === 14)).toHaveLength(23);
    expect(vocab.filter((n) => n === 13)).toHaveLength(67);
    expect(kanji.filter((n) => n === 5)).toHaveLength(46);
    expect(kanji.filter((n) => n === 4)).toHaveLength(44);
    expect(grammar.filter((n) => n === 2)).toHaveLength(22);
    expect(grammar.filter((n) => n === 1)).toHaveLength(68);
  });

  it("khớp tải học N4 30 ngày đã chốt", () => {
    const vocab = distributeEvenly(942, 30);
    const kanji = distributeEvenly(208, 30);
    const grammar = distributeEvenly(92, 30);

    expect(vocab.filter((n) => n === 32)).toHaveLength(12);
    expect(vocab.filter((n) => n === 31)).toHaveLength(18);
    expect(kanji.filter((n) => n === 7)).toHaveLength(28);
    expect(kanji.filter((n) => n === 6)).toHaveLength(2);
    expect(grammar.filter((n) => n === 4)).toHaveLength(2);
    expect(grammar.filter((n) => n === 3)).toHaveLength(28);
  });

  it("total = 0 trả về toàn số 0", () => {
    expect(distributeEvenly(0, 5)).toEqual([0, 0, 0, 0, 0]);
  });

  it("total nhỏ hơn days: ngày có bài được rải đều thay vì dồn cuối", () => {
    const counts = distributeEvenly(3, 10);
    expect(counts).toEqual([0, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    expect(counts.reduce((a, b) => a + b, 0)).toBe(3);
  });
});

describe("buildStudyDays", () => {
  it("cắt đúng danh sách id theo từng ngày, giữ nguyên thứ tự và tải cân bằng", () => {
    const ids = Array.from({ length: 12 }, (_, i) => `w${i}`);
    const days = buildStudyDays(ids, 5);
    expect(days).toHaveLength(5);
    expect(days.flat()).toEqual(ids);
    expect(days.map((d) => d.length)).toEqual([2, 2, 3, 2, 3]);
  });
});

describe("buildMultiTypeStudyDays", () => {
  it("mỗi ngày có đủ cả 3 loại theo đúng tỉ lệ khi chọn phạm vi Tất cả", () => {
    const vocab = Array.from({ length: 30 }, (_, i) => `v${i}`);
    const kanji = Array.from({ length: 10 }, (_, i) => `k${i}`);
    const grammar = Array.from({ length: 5 }, (_, i) => `g${i}`);
    const result = buildMultiTypeStudyDays({ vocab, kanji, grammar }, 5);

    expect(result).toHaveLength(5);
    expect(result.flatMap((d) => d.wordIds)).toEqual(vocab);
    expect(result.flatMap((d) => d.kanjiIds)).toEqual(kanji);
    expect(result.flatMap((d) => d.grammarIds)).toEqual(grammar);
    // Ngày đầu (không phải ngày cuối) phải có đủ cả 3 loại, không phải chỉ 1 loại.
    expect(result[0].wordIds.length).toBeGreaterThan(0);
    expect(result[0].kanjiIds.length).toBeGreaterThan(0);
    expect(result[0].grammarIds.length).toBeGreaterThan(0);
  });

  it("thiếu 1 loại nội dung (chưa có kanji/ngữ pháp) vẫn chạy được, trả mảng rỗng cho loại đó", () => {
    const result = buildMultiTypeStudyDays({ vocab: ["v1", "v2"], kanji: [], grammar: [] }, 2);
    expect(result.every((d) => d.kanjiIds.length === 0 && d.grammarIds.length === 0)).toBe(true);
  });
});

describe("monthsToDays", () => {
  it("quy đổi 1/2/3 tháng sang 30/60/90 ngày", () => {
    expect(monthsToDays(1)).toBe(30);
    expect(monthsToDays(2)).toBe(60);
    expect(monthsToDays(3)).toBe(90);
  });
});

describe("computeStreak", () => {
  const now = new Date("2026-01-10T12:00:00Z");

  it("không có ngày nào hoàn thành thì streak = 0", () => {
    expect(computeStreak([], now)).toBe(0);
  });

  it("học liên tục đến hôm nay tính đúng số ngày", () => {
    const completed = [
      "2026-01-10T08:00:00Z",
      "2026-01-09T08:00:00Z",
      "2026-01-08T08:00:00Z",
    ];
    expect(computeStreak(completed, now)).toBe(3);
  });

  it("chưa học hôm nay nhưng hôm qua liên tục vẫn tính streak", () => {
    const completed = ["2026-01-09T08:00:00Z", "2026-01-08T08:00:00Z"];
    expect(computeStreak(completed, now)).toBe(2);
  });

  it("bị đứt quãng thì streak dừng lại đúng chỗ đứt", () => {
    const completed = ["2026-01-10T08:00:00Z", "2026-01-08T08:00:00Z"];
    expect(computeStreak(completed, now)).toBe(1);
  });

  it("nghỉ từ 2 ngày trước trở lên thì streak = 0", () => {
    const completed = ["2026-01-07T08:00:00Z"];
    expect(computeStreak(completed, now)).toBe(0);
  });
});

describe("computePlanPace", () => {
  const startedAt = "2026-01-01T00:00:00Z";

  it("đúng tiến độ khi số ngày đã hoàn thành = số ngày đã trôi qua (trừ hôm nay)", () => {
    const now = new Date("2026-01-06T12:00:00Z").getTime(); // ngày thứ 6 kể từ startedAt → expected = 5
    const pace = computePlanPace(startedAt, 30, 5, now);
    expect(pace.daysElapsed).toBe(6);
    expect(pace.expectedCompletedByNow).toBe(5);
    expect(pace.paceDiff).toBe(0);
  });

  it("chậm tiến độ khi hoàn thành ít hơn kỳ vọng", () => {
    const now = new Date("2026-01-11T12:00:00Z").getTime(); // expected = 10
    const pace = computePlanPace(startedAt, 30, 4, now);
    expect(pace.paceDiff).toBe(-6);
  });

  it("vượt tiến độ khi hoàn thành nhiều hơn kỳ vọng", () => {
    const now = new Date("2026-01-03T12:00:00Z").getTime(); // expected = 2
    const pace = computePlanPace(startedAt, 30, 5, now);
    expect(pace.paceDiff).toBe(3);
  });

  it("kỳ vọng không vượt quá total_days của lộ trình", () => {
    const now = new Date("2026-06-01T12:00:00Z").getTime(); // đã qua rất lâu so với lộ trình 30 ngày
    const pace = computePlanPace(startedAt, 30, 30, now);
    expect(pace.expectedCompletedByNow).toBe(30);
    expect(pace.paceDiff).toBe(0);
  });
});

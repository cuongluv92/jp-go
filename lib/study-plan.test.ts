import { describe, expect, it } from "vitest";

import { buildStudyDays, computeStreak, distributeEvenly, monthsToDays } from "@/lib/study-plan";

describe("distributeEvenly", () => {
  it("chia đều khi total chia hết cho days", () => {
    expect(distributeEvenly(100, 10)).toEqual(Array(10).fill(10));
  });

  it("tổng luôn đúng bằng total kể cả khi không chia hết", () => {
    const counts = distributeEvenly(1798, 60);
    expect(counts.reduce((a, b) => a + b, 0)).toBe(1798);
    expect(counts).toHaveLength(60);
  });

  it("chênh lệch giữa 2 ngày bất kỳ tối đa 1 (không dồn ngày quá tải, ngày quá ít)", () => {
    const counts = distributeEvenly(1798, 60);
    expect(Math.max(...counts) - Math.min(...counts)).toBeLessThanOrEqual(1);
  });

  it("total = 0 trả về toàn số 0", () => {
    expect(distributeEvenly(0, 5)).toEqual([0, 0, 0, 0, 0]);
  });

  it("total nhỏ hơn days vẫn phân bổ hợp lý", () => {
    const counts = distributeEvenly(3, 10);
    expect(counts.reduce((a, b) => a + b, 0)).toBe(3);
    expect(Math.max(...counts)).toBeLessThanOrEqual(1);
  });
});

describe("buildStudyDays", () => {
  it("cắt đúng danh sách id theo từng ngày, giữ nguyên thứ tự", () => {
    const ids = Array.from({ length: 10 }, (_, i) => `w${i}`);
    const days = buildStudyDays(ids, 5);
    expect(days).toHaveLength(5);
    expect(days.flat()).toEqual(ids);
    expect(days.every((d) => d.length === 2)).toBe(true);
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

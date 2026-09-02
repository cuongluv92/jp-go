export type MaziiSearchKind = "word" | "kanji" | "grammar";

export function buildMaziiWebUrl(kind: MaziiSearchKind, query: string): string {
  return `https://mazii.net/vi-VN/search/${kind}/javi/${encodeURIComponent(query.trim())}`;
}

export function isAppleTouchDevice(userAgent: string, platform: string, maxTouchPoints: number): boolean {
  return /iPhone|iPad|iPod/u.test(userAgent) || (platform === "MacIntel" && maxTouchPoints > 1);
}

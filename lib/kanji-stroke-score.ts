export interface StrokePoint {
  x: number;
  y: number;
}

export interface StrokeScore {
  score: number;
  directionCorrect: boolean;
  accepted: boolean;
}

function distance(a: StrokePoint, b: StrokePoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function nearestDistance(point: StrokePoint, guide: StrokePoint[]): number {
  return Math.min(...guide.map((candidate) => distance(point, candidate)));
}

export function scoreKanjiStroke(drawn: StrokePoint[], guide: StrokePoint[]): StrokeScore {
  if (drawn.length < 2 || guide.length < 2) return { score: 0, directionCorrect: false, accepted: false };
  const sampledDrawn = drawn.filter((_, index) => index % Math.max(1, Math.floor(drawn.length / 18)) === 0);
  const averageDistance = sampledDrawn.reduce((sum, point) => sum + nearestDistance(point, guide), 0) / sampledDrawn.length;
  const forward = distance(drawn[0], guide[0]) + distance(drawn.at(-1)!, guide.at(-1)!);
  const reverse = distance(drawn[0], guide.at(-1)!) + distance(drawn.at(-1)!, guide[0]);
  const directionCorrect = forward <= reverse;
  const endpointPenalty = Math.min(30, forward * 1.2);
  const directionPenalty = directionCorrect ? 0 : 25;
  const score = Math.max(0, Math.min(100, Math.round(100 - averageDistance * 4 - endpointPenalty - directionPenalty)));
  return { score, directionCorrect, accepted: score >= 55 && directionCorrect };
}

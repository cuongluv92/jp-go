"use client";

import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

import { saveKanjiStrokeProgress } from "@/lib/data/kanji-stroke-service";
import { scoreKanjiStroke, type StrokePoint } from "@/lib/kanji-stroke-score";
import { createClient } from "@/lib/supabase/client";

const KANJIVG_RELEASE = "r20260714";
const KANJIVG_BASE_URL = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@${KANJIVG_RELEASE}/kanji`;

type Mode = "watch" | "trace";
type Speed = "slow" | "normal" | "fast";
type Point = StrokePoint;

interface StrokeData {
  paths: string[];
  numbers: Array<{ value: string; transform: string }>;
}

const SPEED_MS: Record<Speed, number> = {
  slow: 1600,
  normal: 1050,
  fast: 650,
};

export function kanjiVgFilename(character: string): string | null {
  const codePoint = Array.from(character.trim())[0]?.codePointAt(0);
  return codePoint === undefined ? null : `${codePoint.toString(16).padStart(5, "0")}.svg`;
}

function parseKanjiVg(svgText: string): StrokeData {
  const document = new DOMParser().parseFromString(svgText, "image/svg+xml");
  if (document.querySelector("parsererror")) throw new Error("KanjiVG XML is invalid");

  const strokeGroup = document.querySelector('[id*="StrokePaths_"]');
  const numberGroup = document.querySelector('[id*="StrokeNumbers_"]');
  const paths = Array.from(strokeGroup?.querySelectorAll("path") ?? [])
    .map((path) => path.getAttribute("d"))
    .filter((path): path is string => Boolean(path));
  const numbers = Array.from(numberGroup?.querySelectorAll("text") ?? []).flatMap((text) => {
    const transform = text.getAttribute("transform");
    const value = text.textContent?.trim();
    return transform && value ? [{ transform, value }] : [];
  });

  if (paths.length === 0) throw new Error("KanjiVG has no stroke paths");
  return { paths, numbers };
}

function PracticeGrid() {
  return (
    <g aria-hidden="true" className="stroke-slate-200" strokeWidth="0.65" strokeDasharray="3 3">
      <path d="M54.5 4V105M4 54.5H105M18.8 18.8L90.2 90.2M90.2 18.8L18.8 90.2" />
      <rect x="4" y="4" width="101" height="101" rx="3" fill="none" strokeDasharray="none" />
    </g>
  );
}

export function KanjiStrokePractice({ character, userId }: { character: string; userId: string | null }) {
  const [data, setData] = useState<StrokeData | null>(null);
  const [error, setError] = useState(false);
  const [mode, setMode] = useState<Mode>("watch");
  const [activeStroke, setActiveStroke] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState<Speed>("normal");
  const [showNumbers, setShowNumbers] = useState(true);
  const [showGuide, setShowGuide] = useState(true);
  const [drawnLines, setDrawnLines] = useState<Point[][]>([]);
  const [grading, setGrading] = useState(true);
  const [gradedStroke, setGradedStroke] = useState(0);
  const [strokeScores, setStrokeScores] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [savedResult, setSavedResult] = useState<{ score: number; best: number; count: number } | null>(null);
  const [animationRun, setAnimationRun] = useState(0);
  const drawingRef = useRef(false);
  const boardRef = useRef<SVGSVGElement>(null);
  const guidePathRefs = useRef<Array<SVGPathElement | null>>([]);
  const currentLineRef = useRef<Point[]>([]);

  const filename = useMemo(() => kanjiVgFilename(character), [character]);

  useEffect(() => {
    if (!filename) return;

    const controller = new AbortController();
    fetch(`${KANJIVG_BASE_URL}/${filename}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`KanjiVG request failed: ${response.status}`);
        return response.text();
      })
      .then((svgText) => setData(parseKanjiVg(svgText)))
      .catch((fetchError: unknown) => {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") return;
        setError(true);
      });

    return () => controller.abort();
  }, [filename]);

  useEffect(() => {
    if (!playing || !data) return;
    const timer = window.setTimeout(() => {
      if (activeStroke >= data.paths.length - 1) {
        setPlaying(false);
      } else {
        setActiveStroke((stroke) => stroke + 1);
      }
    }, SPEED_MS[speed]);
    return () => window.clearTimeout(timer);
  }, [activeStroke, data, playing, speed]);

  function restart(autoPlay = true) {
    setActiveStroke(0);
    setAnimationRun((run) => run + 1);
    setPlaying(autoPlay);
  }

  function pointFromEvent(event: ReactPointerEvent<SVGSVGElement>): Point {
    const rect = boardRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: Math.max(0, Math.min(109, ((event.clientX - rect.left) / rect.width) * 109)),
      y: Math.max(0, Math.min(109, ((event.clientY - rect.top) / rect.height) * 109)),
    };
  }

  function startDrawing(event: ReactPointerEvent<SVGSVGElement>) {
    if (mode !== "trace" || (grading && data && gradedStroke >= data.paths.length)) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drawingRef.current = true;
    const point = pointFromEvent(event);
    currentLineRef.current = [point];
    setDrawnLines((lines) => [...lines, [point]]);
  }

  function continueDrawing(event: ReactPointerEvent<SVGSVGElement>) {
    if (!drawingRef.current || mode !== "trace") return;
    const point = pointFromEvent(event);
    currentLineRef.current = [...currentLineRef.current, point];
    setDrawnLines((lines) => {
      if (lines.length === 0) return [[point]];
      const next = [...lines];
      next[next.length - 1] = [...next[next.length - 1], point];
      return next;
    });
  }

  async function stopDrawing() {
    drawingRef.current = false;
    if (!grading || !data || currentLineRef.current.length < 2) return;
    const guidePath = guidePathRefs.current[gradedStroke];
    if (!guidePath) return;
    const length = guidePath.getTotalLength();
    const guide = Array.from({ length: 26 }, (_, index) => {
      const point = guidePath.getPointAtLength((length * index) / 25);
      return { x: point.x, y: point.y };
    });
    const result = scoreKanjiStroke(currentLineRef.current, guide);
    if (!result.accepted) {
      setDrawnLines((lines) => lines.slice(0, -1));
      setFeedback(
        result.directionCorrect
          ? `Nét ${gradedStroke + 1} chưa sát mẫu (${result.score} điểm). Hãy viết lại.`
          : `Nét ${gradedStroke + 1} đang ngược hướng. Hãy viết lại.`,
      );
      currentLineRef.current = [];
      return;
    }

    const nextScores = [...strokeScores, result.score];
    setStrokeScores(nextScores);
    setGradedStroke((value) => value + 1);
    setFeedback(`✓ Nét ${gradedStroke + 1} đúng · ${result.score} điểm`);
    currentLineRef.current = [];
    if (gradedStroke + 1 === data.paths.length) {
      const finalScore = Math.round(nextScores.reduce((sum, score) => sum + score, 0) / nextScores.length);
      setFeedback(`Hoàn thành ${data.paths.length} nét · ${finalScore}/100`);
      if (userId) {
        try {
          const saved = await saveKanjiStrokeProgress(createClient(), userId, character, finalScore);
          setSavedResult({ score: saved.last_score, best: saved.best_score, count: saved.practice_count });
        } catch {
          setSavedResult({ score: finalScore, best: finalScore, count: 1 });
          setFeedback(`Hoàn thành ${data.paths.length} nét · ${finalScore}/100 · Chưa đồng bộ được kết quả`);
        }
      } else {
        setSavedResult({ score: finalScore, best: finalScore, count: 1 });
      }
    }
  }

  function resetTrace() {
    setDrawnLines([]);
    setGradedStroke(0);
    setStrokeScores([]);
    setFeedback(null);
    setSavedResult(null);
    currentLineRef.current = [];
  }

  if (error || !filename) {
    return (
      <section className="rounded-2xl border border-border bg-surface p-4">
        <h2 className="text-sm font-semibold">Tập viết theo thứ tự nét</h2>
        <p className="mt-2 text-xs text-muted">Chưa tải được dữ liệu nét của chữ này. Các phần học khác vẫn dùng bình thường.</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold">Tập viết theo thứ tự nét</h2>
          <p className="mt-0.5 text-xs text-muted">{data ? `${data.paths.length} nét` : "Đang tải dữ liệu nét…"}</p>
        </div>
        <div className="flex rounded-lg bg-accent-soft p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setMode("watch");
              setPlaying(false);
            }}
            className={`rounded-md px-3 py-1.5 ${mode === "watch" ? "bg-surface text-accent shadow-sm" : "text-muted"}`}
          >
            Xem nét
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("trace");
              setPlaying(false);
              resetTrace();
            }}
            className={`rounded-md px-3 py-1.5 ${mode === "trace" ? "bg-surface text-accent shadow-sm" : "text-muted"}`}
          >
            Tô theo
          </button>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-[19rem] overflow-hidden rounded-2xl bg-slate-50">
        <svg
          ref={boardRef}
          viewBox="0 0 109 109"
          role="img"
          aria-label={mode === "trace" ? `Bảng tập tô chữ ${character}` : `Thứ tự các nét chữ ${character}`}
          className={`aspect-square w-full select-none ${mode === "trace" ? "touch-none cursor-crosshair" : ""}`}
          onPointerDown={startDrawing}
          onPointerMove={continueDrawing}
          onPointerUp={() => void stopDrawing()}
          onPointerCancel={() => void stopDrawing()}
        >
          <PracticeGrid />
          {data && (
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              {data.paths.map((path, index) => {
                const current = mode === "watch" && playing && index === activeStroke;
                const watched = mode === "trace" || index < activeStroke || (!playing && index === activeStroke);
                return (
                  <path
                    key={`${animationRun}-${index}`}
                    ref={(element) => {
                      guidePathRefs.current[index] = element;
                    }}
                    d={path}
                    pathLength={1}
                    className={current ? "animate-kanji-stroke" : ""}
                    stroke={watched ? "#1e293b" : current ? "#4f46e5" : "#cbd5e1"}
                    strokeWidth={current ? 4 : mode === "trace" ? 3.4 : 3}
                    opacity={showGuide ? (mode === "trace" ? 0.34 : 1) : 0}
                    style={current ? { animationDuration: `${SPEED_MS[speed]}ms` } : undefined}
                  />
                );
              })}
              {showGuide && showNumbers &&
                data.numbers.map((number) => (
                  <text key={`${number.value}-${number.transform}`} transform={number.transform} fill="#6366f1" fontSize="7">
                    {number.value}
                  </text>
                ))}
            </g>
          )}
          {mode === "trace" && (
            <g fill="none" stroke="#4f46e5" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round">
              {drawnLines.map((line, index) => (
                <polyline key={index} points={line.map((point) => `${point.x},${point.y}`).join(" ")} />
              ))}
            </g>
          )}
        </svg>
      </div>

      {mode === "watch" ? (
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={!data || activeStroke === 0}
              onClick={() => {
                setPlaying(false);
                setActiveStroke((stroke) => Math.max(0, stroke - 1));
                setAnimationRun((run) => run + 1);
              }}
              className="rounded-xl border border-border px-3 py-2 text-sm font-semibold disabled:opacity-40"
              aria-label="Nét trước"
            >
              ‹
            </button>
            <button
              type="button"
              disabled={!data}
              onClick={() => {
                if (data && activeStroke >= data.paths.length - 1 && !playing) restart(true);
                else setPlaying((value) => !value);
              }}
              className="min-w-28 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground disabled:opacity-40"
            >
              {playing ? "Tạm dừng" : "▶ Chạy nét"}
            </button>
            <button
              type="button"
              disabled={!data || activeStroke >= data.paths.length - 1}
              onClick={() => {
                setPlaying(false);
                setActiveStroke((stroke) => Math.min((data?.paths.length ?? 1) - 1, stroke + 1));
                setAnimationRun((run) => run + 1);
              }}
              className="rounded-xl border border-border px-3 py-2 text-sm font-semibold disabled:opacity-40"
              aria-label="Nét sau"
            >
              ›
            </button>
          </div>
          <div className="flex items-center justify-between gap-2 text-xs">
            <button type="button" onClick={() => restart(false)} className="font-semibold text-accent">
              ↻ Xem lại từ đầu
            </button>
            <label className="flex items-center gap-2 text-muted">
              Tốc độ
              <select
                value={speed}
                onChange={(event) => setSpeed(event.target.value as Speed)}
                className="rounded-lg border border-border bg-surface px-2 py-1.5 text-foreground"
              >
                <option value="slow">Chậm</option>
                <option value="normal">Vừa</option>
                <option value="fast">Nhanh</option>
              </select>
            </label>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setShowGuide((value) => !value)}
              className="rounded-xl border border-border px-3 py-2 text-xs font-semibold"
            >
              {showGuide ? "Ẩn chữ mẫu" : "Hiện chữ mẫu"}
            </button>
            <button
              type="button"
              onClick={resetTrace}
              disabled={drawnLines.length === 0}
              className="rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground disabled:opacity-40"
            >
              Viết lại
            </button>
          </div>
          <label className="flex items-center gap-2 text-xs text-muted">
            <input
              type="checkbox"
              checked={grading}
              onChange={(event) => {
                setGrading(event.target.checked);
                resetTrace();
              }}
            />
            Chấm đúng thứ tự, hướng và độ sát nét
          </label>
          {grading && data && (
            <p className="text-xs text-muted">Nét cần viết: {Math.min(gradedStroke + 1, data.paths.length)}/{data.paths.length}</p>
          )}
          {feedback && (
            <p
              className={`rounded-lg p-2 text-xs ${
                feedback.startsWith("✓") || feedback.startsWith("Hoàn")
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {feedback}
            </p>
          )}
          {savedResult && (
            <p className="rounded-lg bg-indigo-50 p-2 text-xs text-indigo-700">
              Lần này {savedResult.score}/100 · Cao nhất {savedResult.best}/100 · Đã luyện {savedResult.count} lần
            </p>
          )}
        </div>
      )}

      <label className="mt-3 flex items-center gap-2 text-xs text-muted">
        <input type="checkbox" checked={showNumbers} onChange={(event) => setShowNumbers(event.target.checked)} />
        Hiện số thứ tự nét
      </label>
      <p className="mt-3 text-[10px] text-muted">
        Dữ liệu nét:{" "}
        <a href="https://kanjivg.tagaini.net/" target="_blank" rel="noreferrer" className="underline">
          KanjiVG
        </a>{" "}
        · CC BY-SA 3.0
      </p>
    </section>
  );
}

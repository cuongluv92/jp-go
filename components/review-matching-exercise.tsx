"use client";

import { useMemo, useState } from "react";

import { useVocabulary } from "@/lib/data/vocabulary-context";
import type { VocabWord } from "@/lib/types";

const ROUND_SIZE = 6;

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Mini game nối từ ↔ nghĩa, chia thành từng đợt tối đa {@link ROUND_SIZE} cặp. */
export function ReviewMatchingExercise({ words, onComplete }: { words: VocabWord[]; onComplete: () => void }) {
  const { gradeFlashcard } = useVocabulary();
  const rounds = useMemo(() => {
    const chunks: VocabWord[][] = [];
    for (let i = 0; i < words.length; i += ROUND_SIZE) chunks.push(words.slice(i, i + ROUND_SIZE));
    return chunks;
  }, [words]);

  const [roundIndex, setRoundIndex] = useState(0);
  const round = rounds[roundIndex];

  const [leftOrder, setLeftOrder] = useState(() => shuffle(round.map((w) => w.id)));
  const [rightOrder, setRightOrder] = useState(() => shuffle(round.map((w) => w.id)));
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [struggledIds, setStruggledIds] = useState<Set<string>>(new Set());

  const byId = new Map(round.map((w) => [w.id, w]));

  function handlePick(side: "left" | "right", id: string) {
    if (matchedIds.has(id)) return;
    setWrongPair(null);

    if (side === "left") {
      setSelectedLeft(id);
      if (selectedRight) evaluate(id, selectedRight);
      return;
    }
    setSelectedRight(id);
    if (selectedLeft) evaluate(selectedLeft, id);
  }

  function evaluate(leftId: string, rightId: string) {
    if (leftId === rightId) {
      gradeFlashcard(leftId, struggledIds.has(leftId) ? "kho" : "da_nho");
      const nextMatched = new Set(matchedIds);
      nextMatched.add(leftId);
      setMatchedIds(nextMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      if (nextMatched.size === round.length) {
        if (roundIndex + 1 >= rounds.length) {
          onComplete();
        } else {
          const nextRound = rounds[roundIndex + 1];
          setRoundIndex((r) => r + 1);
          setLeftOrder(shuffle(nextRound.map((w) => w.id)));
          setRightOrder(shuffle(nextRound.map((w) => w.id)));
          setMatchedIds(new Set());
          setSelectedLeft(null);
          setSelectedRight(null);
          setWrongPair(null);
        }
      }
    } else {
      setStruggledIds((current) => new Set([...current, leftId]));
      setWrongPair([leftId, rightId]);
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-muted">
        Đợt {roundIndex + 1} / {rounds.length} — đã ghép {matchedIds.size}/{round.length}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {leftOrder.map((id) => {
            const word = byId.get(id)!;
            const isMatched = matchedIds.has(id);
            const isSelected = selectedLeft === id;
            const isWrong = wrongPair?.[0] === id;
            return (
              <button
                key={id}
                type="button"
                disabled={isMatched}
                onClick={() => handlePick("left", id)}
                className={`rounded-xl border px-3 py-3 text-left font-jp text-base font-semibold transition ${
                  isMatched
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700 opacity-60"
                    : isWrong
                      ? "border-rose-300 bg-rose-50"
                      : isSelected
                        ? "border-accent bg-accent/10"
                        : "border-border bg-surface"
                }`}
              >
                {word.word}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {rightOrder.map((id) => {
            const word = byId.get(id)!;
            const isMatched = matchedIds.has(id);
            const isSelected = selectedRight === id;
            const isWrong = wrongPair?.[1] === id;
            return (
              <button
                key={id}
                type="button"
                disabled={isMatched}
                onClick={() => handlePick("right", id)}
                className={`rounded-xl border px-3 py-3 text-left text-sm transition ${
                  isMatched
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700 opacity-60"
                    : isWrong
                      ? "border-rose-300 bg-rose-50"
                      : isSelected
                        ? "border-accent bg-accent/10"
                        : "border-border bg-surface"
                }`}
              >
                {word.meaningVi}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

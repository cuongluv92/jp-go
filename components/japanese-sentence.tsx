"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { getConjugation } from "@/lib/conjugation";
import { useVocabulary } from "@/lib/data/vocabulary-context";
import { segmentJapaneseText } from "@/lib/japanese-text";
import { speakJapanese, type JapaneseSpeechRate } from "@/lib/speech";

export function JapaneseSentence({ text, className = "" }: { text: string; className?: string }) {
  const { words, toggleFavorite } = useVocabulary();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [rate, setRate] = useState<JapaneseSpeechRate>(1);
  const [speaking, setSpeaking] = useState(false);
  const [activeRange, setActiveRange] = useState<[number, number] | null>(null);
  const stopRef = useRef<(() => void) | null>(null);
  const segments = useMemo(() => segmentJapaneseText(text, words), [text, words]);
  const selected = selectedId ? words.find((word) => word.id === selectedId) ?? null : null;

  useEffect(() => () => stopRef.current?.(), []);

  function toggleSpeech() {
    if (speaking) {
      stopRef.current?.();
      setSpeaking(false);
      setActiveRange(null);
      return;
    }
    setSpeaking(true);
    setActiveRange([0, text.length]);
    stopRef.current = speakJapanese(text, {
      rate,
      onBoundary: (index, length) => setActiveRange([index, index + length]),
      onEnd: () => {
        setSpeaking(false);
        setActiveRange(null);
      },
    });
  }

  const conjugation = selected ? getConjugation(selected) : null;

  return (
    <div>
      <div className="flex items-start gap-2">
        <p className={`font-jp flex-1 leading-relaxed ${className}`}>
          {segments.map((segment, index) => {
            const active = activeRange && segment.start < activeRange[1] && segment.start + segment.text.length > activeRange[0];
            return segment.word ? (
              <button
                key={`${segment.start}-${segment.text}`}
                type="button"
                onClick={() => setSelectedId(segment.word!.id)}
                className={`rounded px-0.5 underline decoration-dotted underline-offset-4 ${active ? "bg-amber-200" : "hover:bg-accent-soft"}`}
              >
                {segment.text}
              </button>
            ) : (
              <span key={`${segment.start}-${index}`} className={active ? "rounded bg-amber-200" : ""}>
                {segment.text}
              </span>
            );
          })}
        </p>
        <button
          type="button"
          onClick={toggleSpeech}
          className="shrink-0 rounded-lg border border-border px-2 py-1 text-xs font-semibold text-accent"
        >
          {speaking ? "■" : "🔊"}
        </button>
        <select
          aria-label="Tốc độ phát âm"
          value={rate}
          onChange={(event) => setRate(Number(event.target.value) as JapaneseSpeechRate)}
          className="shrink-0 rounded-lg border border-border bg-surface px-1 py-1 text-xs"
        >
          <option value={0.7}>0.7×</option>
          <option value={1}>1×</option>
          <option value={1.2}>1.2×</option>
        </select>
      </div>

      {selected && (
        <div className="mt-2 rounded-xl border border-accent/30 bg-accent-soft p-3 text-sm">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-jp font-semibold">{selected.word} <span className="font-normal text-muted">{selected.reading}</span></p>
              <p className="mt-0.5">{selected.meaningVi}</p>
            </div>
            <button type="button" onClick={() => setSelectedId(null)} className="text-xs text-muted">✕</button>
          </div>
          {conjugation && (
            <p className="font-jp mt-2 text-xs text-muted">
              {conjugation.kind === "verb"
                ? `ます: ${conjugation.masuForm} · て: ${conjugation.teForm} · ない: ${conjugation.naiForm}`
                : `否定: ${conjugation.negativeForm} · 過去: ${conjugation.pastForm}`}
            </p>
          )}
          <div className="mt-2 flex gap-3 text-xs font-semibold text-accent">
            <Link href={`/vocabulary/${selected.id}`}>Mở chi tiết →</Link>
            <button type="button" onClick={() => toggleFavorite(selected.id)}>
              {selected.progress.isFavorite ? "★ Đã lưu" : "☆ Lưu từ"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

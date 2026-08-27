"use client";

import { speakJapanese } from "@/lib/speech";

export function PronounceButton({ text, className = "" }: { text: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => speakJapanese(text)}
      aria-label={`Phát âm ${text}`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-accent transition hover:bg-accent hover:text-accent-foreground ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9v6h4l5 4V5L8 9H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.5a5 5 0 010 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.8 6.2a8.5 8.5 0 010 11.6" />
      </svg>
    </button>
  );
}

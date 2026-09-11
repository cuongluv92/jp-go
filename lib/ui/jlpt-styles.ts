import type { JlptLevel } from "@/lib/types";

export interface JlptTone {
  active: string;
  idle: string;
  rail: string;
  badge: string;
  dot: string;
}

export const JLPT_TONES: Record<JlptLevel, JlptTone> = {
  N5: {
    active: "border-emerald-600 bg-emerald-600 text-white shadow-sm shadow-emerald-600/20",
    idle: "border-emerald-200 bg-emerald-50/80 text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50",
    rail: "before:bg-emerald-400",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-800",
    dot: "bg-emerald-500",
  },
  N4: {
    active: "border-sky-600 bg-sky-600 text-white shadow-sm shadow-sky-600/20",
    idle: "border-sky-200 bg-sky-50/80 text-sky-800 hover:border-sky-300 hover:bg-sky-50",
    rail: "before:bg-sky-400",
    badge: "border-sky-200 bg-sky-50 text-sky-800",
    dot: "bg-sky-500",
  },
  N3: {
    active: "border-indigo-600 bg-indigo-600 text-white shadow-sm shadow-indigo-600/20",
    idle: "border-indigo-200 bg-indigo-50/80 text-indigo-800 hover:border-indigo-300 hover:bg-indigo-50",
    rail: "before:bg-indigo-400",
    badge: "border-indigo-200 bg-indigo-50 text-indigo-800",
    dot: "bg-indigo-500",
  },
  N2: {
    active: "border-violet-600 bg-violet-600 text-white shadow-sm shadow-violet-600/20",
    idle: "border-violet-200 bg-violet-50/80 text-violet-800 hover:border-violet-300 hover:bg-violet-50",
    rail: "before:bg-violet-400",
    badge: "border-violet-200 bg-violet-50 text-violet-800",
    dot: "bg-violet-500",
  },
  N1: {
    active: "border-rose-600 bg-rose-600 text-white shadow-sm shadow-rose-600/20",
    idle: "border-rose-200 bg-rose-50/80 text-rose-800 hover:border-rose-300 hover:bg-rose-50",
    rail: "before:bg-rose-400",
    badge: "border-rose-200 bg-rose-50 text-rose-800",
    dot: "bg-rose-500",
  },
};

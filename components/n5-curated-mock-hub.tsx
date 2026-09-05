"use client";

import { useMemo, useState } from "react";

import { QuizRunner, type QuizItem } from "@/components/quiz-runner";
import {
  N5_LISTENING_FAMILY_LABELS,
  N5_LISTENING_MOCK,
  N5_TEXT_MINI_MOCKS,
  N5_TEXT_SECTION_ORDER,
  type N5JlptMockItem,
  type N5JlptMockSet,
} from "@/lib/data/n5-jlpt-mock-bank";
import { savePracticeAttempt, type SectionResult } from "@/lib/data/practice-attempt-service";
import { createClient } from "@/lib/supabase/client";

type HubMode = "menu" | "text" | "listening";

function toQuizItem(item: N5JlptMockItem): QuizItem | null {
  const correctIndex = item.choices.indexOf(item.correct_answer);
  if (correctIndex < 0) return null;
  const prompt = [item.instruction_ja, item.stimulus_ja, item.prompt_ja]
    .filter(Boolean)
    .join("\n\n");
  return {
    prompt,
    options: item.choices,
    correctIndex,
    explanation: item.explanation_vi,
  };
}

function TextMockRunner({
  set,
  userId,
  onExit,
}: {
  set: N5JlptMockSet;
  userId: string | null;
  onExit: () => void;
}) {
  const sections = useMemo(
    () => N5_TEXT_SECTION_ORDER.map((name) => ({
      name,
      items: set.items.filter((item) => item.section === name).map(toQuizItem).filter((item): item is QuizItem => item !== null),
    })).filter((section) => section.items.length > 0),
    [set],
  );
  const [sectionIndex, setSectionIndex] = useState(0);
  const [results, setResults] = useState<SectionResult[]>([]);
  const [done, setDone] = useState(false);
  const current = sections[sectionIndex];

  async function finishSection(correct: number) {
    const next = [...results, { kind: `n5_curated_${current.name}`, title: current.name, correct, total: current.items.length }];
    if (sectionIndex + 1 < sections.length) {
      setResults(next);
      setSectionIndex((value) => value + 1);
      return;
    }
    setResults(next);
    setDone(true);
    if (userId) await savePracticeAttempt(createClient(), userId, "auto_jlpt", "N5", next);
  }

  if (done) {
    const correct = results.reduce((sum, row) => sum + row.correct, 0);
    const total = results.reduce((sum, row) => sum + row.total, 0);
    return (
      <div className="flex flex-col items-center gap-4 py-7 text-center">
        <p className="text-4xl">✅</p>
        <h3 className="text-base font-bold">Hoàn thành {set.title}</h3>
        <p className="text-sm">Đúng {correct}/{total} câu.</p>
        <div className="w-full rounded-xl border border-border bg-surface p-3 text-left text-xs text-muted">
          {results.map((row) => <p key={row.kind}>{row.title}: {row.correct}/{row.total}</p>)}
        </div>
        <button type="button" onClick={onExit} className="w-full rounded-xl border border-accent px-4 py-2.5 text-sm font-semibold text-accent">Chọn bộ khác</button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={onExit} className="text-xs font-semibold text-accent">← Thoát bộ đề</button>
        <span className="text-xs text-muted">Phần {sectionIndex + 1}/{sections.length}</span>
      </div>
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="text-xs text-muted">{set.title}</p>
        <p className="mt-1 font-jp text-sm font-bold">{current.name}</p>
      </div>
      <QuizRunner key={`${set.id}-${current.name}`} items={current.items} onFinish={(correct) => void finishSection(correct)} />
    </div>
  );
}

function getJapaneseVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices().filter((voice) => /^ja[-_]/i.test(voice.lang) || /Japanese/i.test(voice.name));
}

function speakLine(text: string, voice?: SpeechSynthesisVoice): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      resolve();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.92;
    utterance.pitch = 1;
    if (voice) utterance.voice = voice;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

async function speakScript(script: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const voices = getJapaneseVoices();
  const speakerVoice = new Map<string, SpeechSynthesisVoice>();
  let voiceCursor = 0;
  const lines = script.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  for (const line of lines) {
    const match = line.match(/^([^：:]{1,8})[：:]\s*(.+)$/u);
    const speaker = match?.[1] ?? "narrator";
    const text = match?.[2] ?? line;
    let voice = speakerVoice.get(speaker);
    if (!voice && voices.length > 0) {
      voice = voices[voiceCursor % voices.length];
      speakerVoice.set(speaker, voice);
      voiceCursor += 1;
    }
    await speakLine(text, voice ?? voices[0]);
  }
}

function ListeningRunner({
  userId,
  onExit,
}: {
  userId: string | null;
  onExit: () => void;
}) {
  const items = N5_LISTENING_MOCK.items;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const item = items[index];
  const correctIndex = item ? item.choices.indexOf(item.correct_answer) : -1;
  const audioOnlyChoices = item?.problem_family === "quick_response" || item?.problem_family === "verbal_expressions";

  async function finish() {
    setDone(true);
    if (userId) {
      const familyResults = Object.keys(N5_LISTENING_FAMILY_LABELS).map((family) => {
        const familyItems = items.filter((candidate) => candidate.problem_family === family);
        return {
          kind: `n5_listening_${family}`,
          title: N5_LISTENING_FAMILY_LABELS[family] ?? family,
          correct: 0,
          total: familyItems.length,
        };
      });
      // Tổng điểm chính xác được lưu ở hàng tổng; breakdown family giữ tổng số câu để không giả suy ra điểm từng family từ state tối giản này.
      await savePracticeAttempt(createClient(), userId, "auto_jlpt", "N5", [
        { kind: "n5_listening_curated", title: "N5 聴解模試 01", correct: correctCount, total: items.length },
        ...familyResults,
      ]);
    }
  }

  function check() {
    if (selected === null || checked) return;
    if (selected === correctIndex) setCorrectCount((value) => value + 1);
    setChecked(true);
  }

  function next() {
    if (index + 1 >= items.length) {
      void finish();
      return;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setIndex((value) => value + 1);
    setSelected(null);
    setChecked(false);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 py-7 text-center">
        <p className="text-4xl">🎧</p>
        <h3 className="text-base font-bold">Hoàn thành N5 聴解模試 01</h3>
        <p className="text-sm">Đúng {correctCount}/{items.length} câu.</p>
        <p className="text-xs leading-relaxed text-muted">Audio dùng giọng Nhật có sẵn trên thiết bị/trình duyệt, không tải file âm thanh lên Supabase.</p>
        <button type="button" onClick={onExit} className="w-full rounded-xl border border-accent px-4 py-2.5 text-sm font-semibold text-accent">Về danh sách đề</button>
      </div>
    );
  }

  if (!item) return null;
  const familyLabel = N5_LISTENING_FAMILY_LABELS[item.problem_family] ?? item.problem_family;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3 text-xs">
        <button type="button" onClick={onExit} className="font-semibold text-accent">← Thoát nghe</button>
        <span className="text-muted">Câu {index + 1}/{items.length}</span>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4">
        <p className="text-xs font-semibold text-accent">{familyLabel}</p>
        {item.scene_ja && <p className="mt-3 whitespace-pre-line font-jp text-sm leading-relaxed">{item.scene_ja}</p>}
        {item.prompt_ja && item.problem_family !== "quick_response" && <p className="mt-3 whitespace-pre-line font-jp text-sm font-semibold leading-relaxed">{item.prompt_ja}</p>}
        {item.problem_family !== "verbal_expressions" && (
          <button
            type="button"
            onClick={() => void speakScript(item.audio_script_ja ?? item.prompt_ja ?? "")}
            className="mt-4 w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
          >
            ▶ Nghe / nghe lại
          </button>
        )}
      </div>

      <div className="grid gap-2">
        {item.choices.map((choice, choiceIndex) => {
          const active = selected === choiceIndex;
          const right = choiceIndex === correctIndex;
          let style = "border-border bg-surface";
          if (checked && right) style = "border-emerald-400 bg-emerald-50 text-emerald-800";
          else if (checked && active) style = "border-rose-400 bg-rose-50 text-rose-700";
          return (
            <div key={`${item.id}-${choiceIndex}`} className="grid grid-cols-[auto_1fr] gap-2">
              {audioOnlyChoices && (
                <button
                  type="button"
                  onClick={() => void speakScript(choice)}
                  className="rounded-xl border border-border bg-surface px-3 text-sm font-semibold"
                  aria-label={`Nghe lựa chọn ${choiceIndex + 1}`}
                >
                  ▶ {choiceIndex + 1}
                </button>
              )}
              <button
                type="button"
                disabled={checked}
                onClick={() => setSelected(choiceIndex)}
                className={`rounded-xl border px-4 py-3 text-left text-sm ${style}`}
              >
                {audioOnlyChoices && !checked ? `Chọn đáp án ${choiceIndex + 1}` : choice}
              </button>
            </div>
          );
        })}
      </div>

      {checked && (
        <div className={`rounded-xl border p-3 text-sm ${selected === correctIndex ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-rose-300 bg-rose-50 text-rose-800"}`}>
          <p className="font-semibold">{selected === correctIndex ? "Đúng" : `Chưa đúng · ${item.correct_answer}`}</p>
          {item.explanation_vi && <p className="mt-1 text-xs leading-relaxed">{item.explanation_vi}</p>}
        </div>
      )}

      {!checked ? (
        <button type="button" disabled={selected === null} onClick={check} className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-50">Kiểm tra</button>
      ) : (
        <button type="button" onClick={next} className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">{index + 1 >= items.length ? "Hoàn thành" : "Câu tiếp theo →"}</button>
      )}
    </div>
  );
}

export function N5CuratedMockHub({ userId }: { userId: string | null }) {
  const [mode, setMode] = useState<HubMode>("menu");
  const [selectedTextSet, setSelectedTextSet] = useState<N5JlptMockSet | null>(null);

  if (mode === "text" && selectedTextSet) {
    return <TextMockRunner set={selectedTextSet} userId={userId} onExit={() => { setMode("menu"); setSelectedTextSet(null); }} />;
  }
  if (mode === "listening") {
    return <ListeningRunner userId={userId} onExit={() => setMode("menu")} />;
  }

  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-accent/20 bg-accent-soft/40 p-4">
      <div>
        <p className="text-sm font-bold text-foreground">N5 · Bộ đề đã biên soạn & QA</p>
        <p className="mt-1 text-xs leading-relaxed text-muted">Ba mini mock bám các dạng JLPT N5 và một bộ 聴解 đủ 4 family. Đây là nội dung cố định đã kiểm, khác với nút tự ghép đề bên dưới.</p>
      </div>

      <div className="grid gap-2">
        {N5_TEXT_MINI_MOCKS.map((set, index) => (
          <button
            key={set.id}
            type="button"
            onClick={() => { setSelectedTextSet(set); setMode("text"); }}
            className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-left"
          >
            <span>
              <span className="block text-sm font-semibold">Mini JLPT {index + 1}</span>
              <span className="mt-0.5 block text-xs text-muted">文字・語彙 → 文法 → 読解 · {set.items.length} câu</span>
            </span>
            <span className="text-accent">→</span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => setMode("listening")}
          className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-left"
        >
          <span>
            <span className="block text-sm font-semibold">🎧 N5 聴解模試 01</span>
            <span className="mt-0.5 block text-xs text-muted">課題理解 · ポイント理解 · 発話表現 · 即時応答 · {N5_LISTENING_MOCK.items.length} câu</span>
          </span>
          <span className="text-accent">→</span>
        </button>
      </div>
    </section>
  );
}

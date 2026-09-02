export type JapaneseSpeechRate = 0.7 | 1 | 1.2;

export interface JapaneseSpeechOptions {
  rate?: JapaneseSpeechRate;
  onBoundary?: (charIndex: number, charLength: number) => void;
  onEnd?: () => void;
}

/** Phát âm bằng Web Speech API; trả về hàm dừng để component dọn dẹp an toàn. */
export function speakJapanese(text: string, options: JapaneseSpeechOptions = {}): () => void {
  if (typeof window === "undefined") return () => undefined;
  const synth = window.speechSynthesis;
  if (!synth) return () => undefined;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = options.rate ?? 1;
  utterance.onboundary = (event) => options.onBoundary?.(event.charIndex, event.charLength || 1);
  utterance.onend = () => options.onEnd?.();
  utterance.onerror = () => options.onEnd?.();
  synth.cancel();
  synth.speak(utterance);
  return () => synth.cancel();
}

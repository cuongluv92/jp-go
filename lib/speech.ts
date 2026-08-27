/** Phát âm một chuỗi tiếng Nhật bằng Web Speech API của trình duyệt (không cần audio file). */
export function speakJapanese(text: string): void {
  if (typeof window === "undefined") return;
  const synth = window.speechSynthesis;
  if (!synth) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  synth.cancel();
  synth.speak(utterance);
}

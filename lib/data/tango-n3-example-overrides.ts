import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Override ví dụ 単語 N3 đã hậu kiểm. Key = `${vocabId}#${exampleNo}`.
 * Mục tiêu: không để hai từ khác nhau dùng nguyên cùng một câu chỉ vì cùng ngữ cảnh.
 */
export const TANGO_N3_EXAMPLE_OVERRIDES: Record<string, ExampleOverride> = {
  "muryou#1": {
    exampleJp: "このイベントは入場無料です。",
    exampleVi: "Sự kiện này được vào cửa miễn phí.",
    clozeJp: "このイベントは入場_____です。",
    answer: "無料",
    focusNote: "入場無料 — miễn phí vé vào cửa.",
  },
  "sakan#1": {
    exampleJp: "この町では観光業が盛んだ。",
    exampleVi: "Ở thành phố này ngành du lịch rất phát triển.",
    clozeJp: "この町では観光業が_____だ。",
    answer: "盛ん",
    focusNote: "Nが盛んだ — N phát triển/sôi nổi.",
  },
  "kaikei#2": {
    exampleJp: "会計、先に済ませてくるね。",
    exampleVi: "Tớ đi thanh toán trước nhé.",
    clozeJp: "_____、先に済ませてくるね。",
    answer: "会計",
    focusNote: "Daily: 〜てくるね là cách nói hội thoại tự nhiên.",
  },
  "kaku1#1": {
    exampleJp: "緊張すると汗をかくことがある。",
    exampleVi: "Có lúc căng thẳng làm tôi toát mồ hôi.",
    clozeJp: "緊張すると汗を_____ことがある。",
    answer: "かく",
    focusNote: "汗をかく — toát/đổ mồ hôi.",
  },
  "daigakuin#1": {
    exampleJp: "彼は大学院で経済学を研究している。",
    exampleVi: "Anh ấy đang nghiên cứu kinh tế học ở bậc cao học.",
    clozeJp: "彼は_____で経済学を研究している。",
    answer: "大学院",
    focusNote: "大学院で研究する — nghiên cứu ở cao học/sau đại học.",
  },
  "muku_peel#1": {
    exampleJp: "母はじゃがいもの皮をむいている。",
    exampleVi: "Mẹ đang gọt vỏ khoai tây.",
    clozeJp: "母はじゃがいもの皮を_____いる。",
    answer: "むいて",
    focusNote: "皮をむく — gọt/bóc vỏ.",
  },
  "sameru1#1": {
    exampleJp: "目覚まし時計が鳴る前に目が覚めた。",
    exampleVi: "Tôi tỉnh giấc trước khi đồng hồ báo thức reo.",
    clozeJp: "目覚まし時計が鳴る前に目が_____た。",
    answer: "覚め",
    focusNote: "目が覚める — tỉnh giấc.",
  },
  "oagarikudasai1#1": {
    exampleJp: "お料理ができました。どうぞお上がりください。",
    exampleVi: "Món ăn đã xong rồi. Xin mời dùng.",
    clozeJp: "お料理ができました。どうぞ_____。",
    answer: "お上がりください",
    focusNote: "お上がりください — trong ngữ cảnh ăn/uống: xin mời dùng.",
  },
  "oagarikudasai2#1": {
    exampleJp: "寒いですから、どうぞ中へお上がりください。",
    exampleVi: "Trời lạnh, xin mời vào trong.",
    clozeJp: "寒いですから、どうぞ中へ_____。",
    answer: "お上がりください",
    focusNote: "お上がりください — trong ngữ cảnh nhà cửa: xin mời vào.",
  },
};

export function applyTangoN3ExampleOverride(input: VocabExample): VocabExample {
  const override = TANGO_N3_EXAMPLE_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

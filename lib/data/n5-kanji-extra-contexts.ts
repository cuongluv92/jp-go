import type { ContextExerciseItem } from "@/lib/data/context-exercises";

const EXTRA_CONTEXTS: Record<string, Array<{ sentence: string; explanation: string }>> = {
  多: [{ sentence: "この学校は学生が＿いです。", explanation: "学生が多い = có nhiều học sinh/sinh viên." }],
  入: [{ sentence: "部屋に＿ります。", explanation: "入る（はいる）= đi/vào trong." }],
  円: [{ sentence: "この本は五百＿です。", explanation: "五百円（ごひゃくえん）= 500 yên." }],
  力: [{ sentence: "田中さんは＿があります。", explanation: "力があります = có sức/có sức lực." }],
  友: [{ sentence: "＿達と映画を見ました。", explanation: "友達（ともだち）= bạn bè." }],
  古: [{ sentence: "この本は＿いです。", explanation: "古い（ふるい）= cũ." }],
  右: [{ sentence: "次の角を＿へ曲がってください。", explanation: "右（みぎ）へ = sang bên phải." }],
  安: [{ sentence: "この店は＿いです。", explanation: "安い（やすい）= rẻ." }],
  少: [{ sentence: "今日は人が＿ないです。", explanation: "少ない（すくない）= ít." }],
  川: [{ sentence: "子どもが＿で遊んでいます。", explanation: "川（かわ）= sông; 川で遊ぶ = chơi ở sông." }],
  左: [{ sentence: "駅を出て、＿へ行ってください。", explanation: "左（ひだり）へ = sang bên trái." }],
  帰: [{ sentence: "毎日六時に家へ＿ります。", explanation: "帰る（かえる）= về nhà/trở về." }],
  田: [{ sentence: "＿中さんは先生です。", explanation: "田中（たなか） là họ Nhật thường gặp; chữ 田 xuất hiện trong tên thật, không hỏi âm đọc rời." }],
  町: [{ sentence: "この＿は静かです。", explanation: "町（まち）= thị trấn/khu phố." }],
  米: [{ sentence: "スーパーでお＿を買いました。", explanation: "お米（おこめ）= gạo; お米を買う = mua gạo." }],
  聞: [{ sentence: "先生の話をよく＿いてください。", explanation: "聞く（きく）= nghe/hỏi; ở đây là nghe lời thầy/cô." }],
  花: [{ sentence: "母に＿をあげました。", explanation: "花（はな）= hoa; 花をあげる = tặng hoa." }],
  見: [{ sentence: "毎晩テレビを＿ます。", explanation: "見る（みる）= xem/nhìn." }],
  言: [{ sentence: "もう一度＿ってください。", explanation: "言う（いう）= nói; もう一度言ってください = xin hãy nói lại một lần nữa." }],
  読: [{ sentence: "毎朝新聞を＿みます。", explanation: "読む（よむ）= đọc; 新聞を読む = đọc báo." }],
  雨: [{ sentence: "今日は＿です。", explanation: "雨（あめ）= mưa; 今日は雨です = hôm nay trời mưa." }],
  魚: [{ sentence: "晩ご飯に＿を食べました。", explanation: "魚（さかな）= cá; 魚を食べる = ăn cá." }],
};

export function getN5KanjiExtraContexts(kanjiId: string, character: string): ContextExerciseItem[] {
  return (EXTRA_CONTEXTS[character] ?? []).map((item, index) => ({
    id: `kanji-extra-${kanjiId}-${index + 1}`,
    prompt: item.sentence,
    answer: character,
    explanation: item.explanation,
    badge: "Kanji trong ngữ cảnh",
  }));
}

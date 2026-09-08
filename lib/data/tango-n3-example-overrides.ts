import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Override ví dụ 単語 N3 đã hậu kiểm. Key = `${vocabId}#${exampleNo}`.
 * Mục tiêu: giữ câu tự nhiên, tách câu trùng và sửa các cách dùng/Kanji chưa đạt.
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

  "daku#3": {
    exampleJp: "保育スタッフが赤ちゃんを抱いております。",
    exampleVi: "Nhân viên trông trẻ đang bế em bé.",
    clozeJp: "保育スタッフが赤ちゃんを_____いております。",
    answer: "抱",
    focusNote: "抱く（だく）— ôm/bế. Cảm xúc như 不安を抱く thường đọc いだく.",
  },
  "noseru#2": {
    exampleJp: "旅行の写真をSNSに載せたよ。",
    exampleVi: "Tớ đăng ảnh chuyến đi lên mạng xã hội rồi đấy.",
    clozeJp: "旅行の写真をSNSに_____たよ。",
    answer: "載せ",
    focusNote: "記事・写真を載せる — đăng nội dung; phân biệt 皿に料理を乗せる.",
  },
  "tsuujiru#3": {
    exampleJp: "この地域では携帯電話がよく通じます。",
    exampleVi: "Ở khu vực này điện thoại di động bắt sóng khá tốt.",
    clozeJp: "この地域では携帯電話がよく_____ます。",
    answer: "通じ",
    focusNote: "電話が通じる — liên lạc được/có sóng.",
  },
  "tsumoru#3": {
    exampleJp: "倉庫の棚にほこりが積もっております。",
    exampleVi: "Bụi đang bám dày trên kệ trong kho.",
    clozeJp: "倉庫の棚にほこりが_____っております。",
    answer: "積も",
    focusNote: "ほこりが積もる — bụi tích tụ; 経験は通常 経験を積む.",
  },
  "yakunitatsu#3": {
    exampleJp: "この資料は新人教育の役に立つはずです。",
    exampleVi: "Tài liệu này hẳn sẽ hữu ích cho việc đào tạo nhân viên mới.",
    clozeJp: "この資料は新人教育の_____はずです。",
    answer: "役に立つ",
    focusNote: "Nの役に立つ — có ích cho N. 業務に役に立つ より 業務の役に立つ／業務に役立つ が自然.",
  },
  "yabureru#3": {
    exampleJp: "商品の包装が破れております。",
    exampleVi: "Bao bì sản phẩm đang bị rách.",
    clozeJp: "商品の包装が_____ております。",
    answer: "破れ",
    focusNote: "包装が破れる — bao bì bị rách; business context tự nhiên.",
  },
  "taosu#3": {
    exampleJp: "展示用パネルを倒さないよう固定しております。",
    exampleVi: "Chúng tôi cố định tấm bảng trưng bày để nó không bị đổ.",
    clozeJp: "展示用パネルを_____さないよう固定しております。",
    answer: "倒",
    focusNote: "Nを倒す — làm N đổ; dùng trong ngữ cảnh an toàn thực tế.",
  },
  "mukau#3": {
    exampleJp: "担当者は今、取引先へ向かっております。",
    exampleVi: "Người phụ trách hiện đang trên đường đến chỗ đối tác.",
    clozeJp: "担当者は今、取引先へ_____っております。",
    answer: "向か",
    focusNote: "場所へ向かう — đi/hướng tới địa điểm.",
  },

  "gorannireru#1": {
    exampleJp: "資料をご覧に入れます。",
    exampleVi: "Tôi xin trình tài liệu để ngài xem.",
    clozeJp: "資料を_____。",
    answer: "ご覧に入れます",
    focusNote: "ご覧に入れる — 『見せる』の謙譲語.",
  },
  "gorannireru#2": {
    exampleJp: "実物をご覧に入れたいと思います。",
    exampleVi: "Tôi muốn được trình vật thật để anh/chị xem.",
    clozeJp: "実物を_____たいと思います。",
    answer: "ご覧に入れ",
    focusNote: "ご覧に入れる — cách nói khiêm nhường của 見せる.",
  },
  "gorannireru#3": {
    exampleJp: "詳細な資料をご覧に入れる予定です。",
    exampleVi: "Chúng tôi dự định trình tài liệu chi tiết để quý vị xem.",
    clozeJp: "詳細な資料を_____予定です。",
    answer: "ご覧に入れる",
    focusNote: "Business: ご覧に入れる = kính cẩn cho người trên/khách xem.",
  },
};

export function applyTangoN3ExampleOverride(input: VocabExample): VocabExample {
  const override = TANGO_N3_EXAMPLE_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

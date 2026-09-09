import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/** Hậu kiểm đọc tay batch 01-02 (dòng 1-360 runtime). */
const FINAL5_OVERRIDES: Record<string, ExampleOverride> = {
  "aijou#3": {
    exampleJp: "弊社は一つ一つの商品に愛情を込めて製造しています。",
    exampleVi: "Công ty chúng tôi sản xuất từng sản phẩm với tất cả tâm huyết.",
    clozeJp: "弊社は一つ一つの商品に_____を込めて製造しています。",
    answer: "愛情",
  },
  "event#1": {
    exampleJp: "来月、大きなイベントがあります。",
    exampleVi: "Tháng sau có một sự kiện lớn.",
    clozeJp: "来月、大きな_____があります。",
    answer: "イベント",
  },
  "insatsu#3": {
    exampleVi: "Chúng tôi đã đặt in tập giới thiệu tại một đơn vị chuyên môn.",
  },
  "energy#1": {
    exampleVi: "Năng lượng mặt trời là một dạng năng lượng tái tạo.",
  },
  "ogata#3": {
    exampleJp: "大型設備の搬入は来週を予定しています。",
    exampleVi: "Việc đưa thiết bị cỡ lớn vào dự kiến được thực hiện vào tuần sau.",
    clozeJp: "_____設備の搬入は来週を予定しています。",
    answer: "大型",
  },
  "ojigi#2": {
    exampleVi: "Người ta cúi chào mình rất sâu nên tôi hơi ngượng.",
  },
  "katahou#3": {
    exampleJp: "左右のスピーカーの片方から音が出ていません。",
    exampleVi: "Một bên trong cặp loa trái phải không phát ra âm thanh.",
    clozeJp: "左右のスピーカーの_____から音が出ていません。",
    answer: "片方",
  },
  "kazu#2": {
    exampleJp: "意外と数が少ないんだね。",
    exampleVi: "Số lượng ít hơn mình tưởng nhỉ.",
    clozeJp: "意外と_____が少ないんだね。",
    answer: "数",
  },
  "gaman#3": {
    exampleJp: "工事の騒音は一時的ですので、もう少し我慢していただけますか。",
    exampleVi: "Tiếng ồn do thi công chỉ là tạm thời, mong quý khách chịu khó thêm một chút.",
    clozeJp: "工事の騒音は一時的ですので、もう少し_____していただけますか。",
    answer: "我慢",
  },
  "kami#3": {
    exampleJp: "展示会では各国の神を題材にした作品を紹介します。",
    exampleVi: "Tại triển lãm, chúng tôi giới thiệu các tác phẩm lấy các vị thần của nhiều nước làm đề tài.",
    clozeJp: "展示会では各国の_____を題材にした作品を紹介します。",
    answer: "神",
  },
  "kangei#3": {
    exampleJp: "新規のお取引のご相談も歓迎しております。",
    exampleVi: "Chúng tôi luôn hoan nghênh các đề nghị hợp tác mới.",
    clozeJp: "新規のお取引のご相談も_____しております。",
    answer: "歓迎",
  },
  "kansatsu#3": {
    exampleJp: "製造ラインで作業の流れを観察し、改善点を探しています。",
    exampleVi: "Chúng tôi quan sát quy trình làm việc trên dây chuyền sản xuất để tìm điểm cần cải thiện.",
    clozeJp: "製造ラインで作業の流れを_____し、改善点を探しています。",
    answer: "観察",
  },
  "kanji2#2": {
    exampleVi: "Quán này trông khá ổn nhỉ.",
  },
  "kansha#3": {
    exampleVi: "Chúng tôi xin chân thành cảm ơn quý khách đã luôn ủng hộ.",
  },
  "kikime#3": {
    exampleJp: "この洗浄剤の効き目を現場で確認しています。",
    exampleVi: "Chúng tôi đang kiểm tra tác dụng của chất tẩy rửa này tại hiện trường.",
    clozeJp: "この洗浄剤の_____を現場で確認しています。",
    answer: "効き目",
  },
  "kikoku#3": {
    exampleVi: "Chúng tôi xin hướng dẫn thủ tục về nước dành cho nhân viên được cử đi làm việc ở nước ngoài.",
  },
  "kyouryoku#2": {
    exampleJp: "協力してくれてありがとう。本当に助かったよ。",
    exampleVi: "Cảm ơn cậu đã hợp tác nhé. Thật sự giúp mình rất nhiều.",
    clozeJp: "_____してくれてありがとう。本当に助かったよ。",
    answer: "協力",
  },
  "kufuu#3": {
    exampleJp: "コスト削減のため、様々な工夫を重ねています。",
    exampleVi: "Chúng tôi đang liên tục tìm nhiều cách cải tiến để cắt giảm chi phí.",
    clozeJp: "コスト削減のため、様々な_____を重ねています。",
    answer: "工夫",
  },
};

export function applyTangoN3Final5Override(input: VocabExample): VocabExample {
  const override = FINAL5_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

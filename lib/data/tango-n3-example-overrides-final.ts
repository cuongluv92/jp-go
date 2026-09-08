import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/** Các chỉnh sửa cuối sau khi đọc thủ công context daily/business của tính từ và function words. */
const FINAL_CONTEXT_OVERRIDES: Record<string, ExampleOverride> = {
  "kitsui#3": {
    exampleJp: "今月は納期がきついので、作業の優先順位を見直します。",
    exampleVi: "Tháng này thời hạn khá gấp nên chúng tôi sẽ xem lại thứ tự ưu tiên công việc.",
    clozeJp: "今月は納期が_____ので、作業の優先順位を見直します。",
    answer: "きつい",
    focusNote: "納期がきつい — thời hạn gấp/chặt; cách dùng thực tế trong công việc.",
  },
  "mushiatsui#3": {
    exampleJp: "倉庫内が蒸し暑いので、換気を強めました。",
    exampleVi: "Trong kho oi bức nên chúng tôi đã tăng thông gió.",
    clozeJp: "倉庫内が_____ので、換気を強めました。",
    answer: "蒸し暑い",
  },
  "mezurashii#3": {
    exampleJp: "珍しく部長が朝礼に遅れました。",
    exampleVi: "Hiếm khi thấy trưởng phòng đến muộn buổi họp đầu giờ như hôm nay.",
    clozeJp: "_____部長が朝礼に遅れました。",
    answer: "珍しく",
    focusNote: "珍しく — hiếm khi/khác thường so với mọi khi.",
  },
  "shiawase#3": {
    exampleJp: "このサービスでお客様に幸せを感じていただきたいです。",
    exampleVi: "Chúng tôi mong khách hàng cảm nhận được niềm hạnh phúc qua dịch vụ này.",
    clozeJp: "このサービスでお客様に_____を感じていただきたいです。",
    answer: "幸せ",
  },
  "manzoku#2": {
    exampleJp: "今日の結果には満足してる。",
    exampleVi: "Tôi hài lòng với kết quả hôm nay.",
    clozeJp: "今日の結果には_____してる。",
    answer: "満足",
    focusNote: "Nに満足する — hài lòng với N. Daily không cần thêm よ・ね nếu chỉ đang nói trạng thái của mình.",
  },
  "heiwa#3": {
    exampleJp: "今日はトラブルもなく、職場は平和です。",
    exampleVi: "Hôm nay không có sự cố gì, chỗ làm khá yên ổn.",
    clozeJp: "今日はトラブルもなく、職場は_____です。",
    answer: "平和",
    focusNote: "職場は平和だ — cách nói hội thoại về một ngày làm việc yên ổn, không phải thuật ngữ trang trọng.",
  },
  "makka#3": {
    exampleJp: "課長はミスの報告を聞いて、顔を真っ赤にして怒りました。",
    exampleVi: "Trưởng bộ phận nghe báo cáo sai sót thì đỏ bừng mặt vì giận.",
    clozeJp: "課長はミスの報告を聞いて、顔を_____にして怒りました。",
    answer: "真っ赤",
  },
  "mendou#3": {
    exampleJp: "この手続きは面倒ですが、省略できません。",
    exampleVi: "Thủ tục này phiền phức nhưng không thể bỏ qua.",
    clozeJp: "この手続きは_____ですが、省略できません。",
    answer: "面倒",
    focusNote: "面倒だ = phiền phức/rắc rối. Phân biệt 面倒を見る = chăm sóc/trông nom.",
  },
  "surasura#3": {
    exampleJp: "新人が製品説明をすらすらできるようになりました。",
    exampleVi: "Nhân viên mới đã có thể giới thiệu sản phẩm một cách trôi chảy.",
    clozeJp: "新人が製品説明を_____できるようになりました。",
    answer: "すらすら",
  },
  "furafura#3": {
    exampleJp: "社員がふらふらしていたので、休憩を取らせました。",
    exampleVi: "Thấy nhân viên lảo đảo nên tôi đã cho họ nghỉ giải lao.",
    clozeJp: "社員が_____していたので、休憩を取らせました。",
    answer: "ふらふら",
    focusNote: "ふらふらする — lảo đảo/choáng; đặt trong ngữ cảnh an toàn lao động thay vì khuyến khích tiếp tục làm việc.",
  },
  "bonyari#3": {
    exampleJp: "会議の内容をぼんやりとしか覚えていません。",
    exampleVi: "Tôi chỉ nhớ mang máng nội dung cuộc họp.",
    clozeJp: "会議の内容を_____としか覚えていません。",
    answer: "ぼんやり",
  },
};

export function applyTangoN3FinalContextOverride(input: VocabExample): VocabExample {
  const override = FINAL_CONTEXT_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

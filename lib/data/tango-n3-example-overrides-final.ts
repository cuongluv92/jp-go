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

  // Business context: các câu trước đây đúng ngữ pháp nhưng thực chất chỉ là chuyện cá nhân.
  "propose#3": {
    exampleJp: "結婚式場では、プロポーズの演出についての相談も受け付けています。",
    exampleVi: "Tại địa điểm tổ chức cưới, chúng tôi cũng tiếp nhận tư vấn về cách dàn dựng màn cầu hôn.",
    clozeJp: "結婚式場では、_____の演出についての相談も受け付けています。",
    answer: "プロポーズ",
  },
  "drive#3": {
    exampleJp: "観光会社では、海岸沿いをドライブするツアーを企画しています。",
    exampleVi: "Công ty du lịch đang lên kế hoạch cho tour lái xe dọc bờ biển.",
    clozeJp: "観光会社では、海岸沿いを_____するツアーを企画しています。",
    answer: "ドライブ",
  },
  "koibito#3": {
    exampleJp: "結婚相談所では、恋人との関係について相談を受けることもあります。",
    exampleVi: "Tại dịch vụ tư vấn hôn nhân, đôi khi chúng tôi cũng tiếp nhận tư vấn về mối quan hệ với người yêu.",
    clozeJp: "結婚相談所では、_____との関係について相談を受けることもあります。",
    answer: "恋人",
  },
  "shinseki#3": {
    exampleJp: "人事部に、親戚が取引先に勤めていることを申告しました。",
    exampleVi: "Tôi đã khai báo với phòng nhân sự rằng người thân của mình đang làm việc tại một đối tác kinh doanh.",
    clozeJp: "人事部に、_____が取引先に勤めていることを申告しました。",
    answer: "親戚",
  },
  "musume#3": {
    exampleJp: "保育園では、保護者から娘の園での様子について相談を受けました。",
    exampleVi: "Tại nhà trẻ, chúng tôi đã nhận được câu hỏi của phụ huynh về tình hình của con gái họ ở trường.",
    clozeJp: "保育園では、保護者から_____の園での様子について相談を受けました。",
    answer: "娘",
  },
  "ensoku#3": {
    exampleJp: "旅行会社が学校の遠足用にバスを手配しました。",
    exampleVi: "Công ty du lịch đã bố trí xe buýt cho chuyến dã ngoại của trường.",
    clozeJp: "旅行会社が学校の_____用にバスを手配しました。",
    answer: "遠足",
  },
  "kozukai#3": {
    exampleJp: "銀行の金融教育セミナーでは、子供の小遣い管理を例にお金の使い方を説明しています。",
    exampleVi: "Trong hội thảo giáo dục tài chính của ngân hàng, việc quản lý tiền tiêu vặt của trẻ được dùng làm ví dụ để giải thích cách sử dụng tiền.",
    clozeJp: "銀行の金融教育セミナーでは、子供の_____管理を例にお金の使い方を説明しています。",
    answer: "小遣い",
  },
  "tennou#3": {
    exampleJp: "会社の年間カレンダーでは、天皇誕生日を祝日として休業日に設定しています。",
    exampleVi: "Trong lịch năm của công ty, ngày sinh Nhật hoàng được đặt là ngày nghỉ lễ.",
    clozeJp: "会社の年間カレンダーでは、_____誕生日を祝日として休業日に設定しています。",
    answer: "天皇",
  },
  "tip#3": {
    exampleJp: "ホテルでは、チップの受け取りに関する社内規定を確認してください。",
    exampleVi: "Tại khách sạn, hãy kiểm tra quy định nội bộ về việc nhận tiền boa.",
    clozeJp: "ホテルでは、_____の受け取りに関する社内規定を確認してください。",
    answer: "チップ",
  },
  "hebi#3": {
    exampleJp: "工事現場の周辺で蛇が見つかったため、安全確認を行いました。",
    exampleVi: "Vì phát hiện rắn quanh công trường nên chúng tôi đã tiến hành kiểm tra an toàn.",
    clozeJp: "工事現場の周辺で_____が見つかったため、安全確認を行いました。",
    answer: "蛇",
  },
};

export function applyTangoN3FinalContextOverride(input: VocabExample): VocabExample {
  const override = FINAL_CONTEXT_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

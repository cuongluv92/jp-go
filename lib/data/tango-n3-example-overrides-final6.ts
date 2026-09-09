import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Hậu kiểm đọc tay toàn bộ 5.394 ví dụ runtime 単語 N3.
 * Chỉ chứa các sửa chắc chắn về sense, Kanji, collocation, register và bản dịch.
 */
const FINAL6_OVERRIDES: Record<string, ExampleOverride> = {
  "todoke#1": {
    exampleJp: "住所を変えたので、市役所に届けを出した。",
    exampleVi: "Vì đổi địa chỉ nên tôi đã nộp giấy khai báo tại tòa thị chính.",
    clozeJp: "住所を変えたので、市役所に_____を出した。",
    answer: "届け",
  },
  "todoke#2": {
    exampleJp: "その届け、もう役所に出した？",
    exampleVi: "Giấy khai báo đó cậu đã nộp cho cơ quan hành chính chưa?",
    clozeJp: "その_____、もう役所に出した？",
    answer: "届け",
  },
  "todoke#3": {
    exampleJp: "休職に必要な届けを人事部に提出してください。",
    exampleVi: "Vui lòng nộp giấy khai báo cần thiết cho việc tạm nghỉ việc cho phòng nhân sự.",
    clozeJp: "休職に必要な_____を人事部に提出してください。",
    answer: "届け",
  },
  "nama#3": {
    exampleJp: "当店では生の魚を扱うため、温度管理を徹底しています。",
    exampleVi: "Cửa hàng chúng tôi quản lý nhiệt độ nghiêm ngặt vì có xử lý cá tươi sống.",
    clozeJp: "当店では_____の魚を扱うため、温度管理を徹底しています。",
    answer: "生",
  },
  "ninki#3": {
    exampleVi: "Sản phẩm mới đã được ưa chuộng ngay từ sau khi ra mắt.",
  },
  "nouritsu#2": {
    exampleVi: "Cách làm này hơi kém hiệu quả, phải không?",
  },
  "houmon#2": {
    exampleJp: "明日、先生が家を訪問するんだって。",
    exampleVi: "Nghe nói ngày mai thầy cô sẽ đến thăm nhà đấy.",
    clozeJp: "明日、先生が家を_____するんだって。",
    answer: "訪問",
  },
  "mark#3": {
    exampleVi: "Sản phẩm thuộc diện áp dụng có gắn biểu tượng riêng.",
  },
  "meisho#3": {
    exampleVi: "Chúng tôi đã làm brochure giới thiệu các điểm tham quan nổi tiếng trong khu vực.",
  },
  "meirei#3": {
    exampleJp: "本件については、業務命令に従って対応いたします。",
    exampleVi: "Về việc này, chúng tôi sẽ xử lý theo chỉ thị công việc.",
    clozeJp: "本件については、業務_____に従って対応いたします。",
    answer: "命令",
  },
  "yuushou#3": {
    exampleJp: "弊社の開発チームが社内コンテストで優勝しました。",
    exampleVi: "Đội phát triển của công ty chúng tôi đã giành giải nhất trong cuộc thi nội bộ.",
    clozeJp: "弊社の開発チームが社内コンテストで_____しました。",
    answer: "優勝",
  },
  "yuujou#3": {
    exampleJp: "長年一緒に働いた同僚との友情は、退職後も続いています。",
    exampleVi: "Tình bạn với người đồng nghiệp đã làm việc cùng nhiều năm vẫn tiếp tục ngay cả sau khi nghỉ việc.",
    clozeJp: "長年一緒に働いた同僚との_____は、退職後も続いています。",
    answer: "友情",
  },
  "roudou#2": {
    exampleJp: "今日は肉体労働だったから、さすがに疲れた。",
    exampleVi: "Hôm nay làm lao động chân tay nên đúng là mệt thật.",
    clozeJp: "今日は肉体_____だったから、さすがに疲れた。",
    answer: "労働",
  },
  "ojisan#3": {
    exampleJp: "同僚が「うちのおじさん、この会社の元社員なんだ」と話していました。",
    exampleVi: "Một đồng nghiệp nói: “Chú của tôi từng là nhân viên công ty này.”",
    clozeJp: "同僚が「うちの_____、この会社の元社員なんだ」と話していました。",
    answer: "おじさん",
  },
  "obasan#3": {
    exampleJp: "同僚が「うちのおばさん、取引先で働いてるんだ」と話していました。",
    exampleVi: "Một đồng nghiệp nói: “Cô của tôi đang làm việc ở công ty đối tác.”",
    clozeJp: "同僚が「うちの_____、取引先で働いてるんだ」と話していました。",
    answer: "おばさん",
  },
  "classmate#3": {
    exampleJp: "大学時代のクラスメートが、今回の取引先の担当者でした。",
    exampleVi: "Bạn cùng lớp thời đại học của tôi chính là người phụ trách phía đối tác lần này.",
    clozeJp: "大学時代の_____が、今回の取引先の担当者でした。",
    answer: "クラスメート",
  },
  "seikeigeka#1": {
    exampleVi: "Tôi đang phục hồi chức năng ở khoa chấn thương chỉnh hình.",
  },
  "seikeigeka#2": {
    exampleVi: "Cậu giới thiệu giúp khoa chấn thương chỉnh hình nào tốt được không?",
  },
  "seikeigeka#3": {
    exampleVi: "Số ca bệnh trong lĩnh vực chấn thương chỉnh hình đang tăng lên.",
  },
  "kokuou#3": {
    exampleJp: "国王の公式訪問に合わせ、ホテルでは特別警備を実施しました。",
    exampleVi: "Nhân chuyến thăm chính thức của quốc vương, khách sạn đã thực hiện chế độ an ninh đặc biệt.",
    clozeJp: "_____の公式訪問に合わせ、ホテルでは特別警備を実施しました。",
    answer: "国王",
  },
  "sankaku#3": {
    exampleJp: "材料を三角に切る工程を追加しました。",
    exampleVi: "Chúng tôi đã thêm công đoạn cắt vật liệu thành hình tam giác.",
    clozeJp: "材料を_____に切る工程を追加しました。",
    answer: "三角",
  },
  "taiiku#3": {
    exampleJp: "学校では体育の授業で使う器具を新しく購入しました。",
    exampleVi: "Nhà trường đã mua mới dụng cụ dùng trong giờ thể dục.",
    clozeJp: "学校では_____の授業で使う器具を新しく購入しました。",
    answer: "体育",
  },
  "sumou#3": {
    exampleJp: "旅行会社では、外国人向けの相撲観戦ツアーを販売しています。",
    exampleVi: "Công ty du lịch đang bán tour xem sumo dành cho khách nước ngoài.",
    clozeJp: "旅行会社では、外国人向けの_____観戦ツアーを販売しています。",
    answer: "相撲",
  },
  "shishutsu#3": {
    exampleJp: "会社の支出を削減する取り組みを進めています。",
    exampleVi: "Chúng tôi đang triển khai các biện pháp cắt giảm chi tiêu của công ty.",
    clozeJp: "会社の_____を削減する取り組みを進めています。",
    answer: "支出",
  },
  "tada#3": {
    exampleJp: "同僚に「この社内セミナー、ただで参加できるよ」と教えました。",
    exampleVi: "Tôi nói với đồng nghiệp: “Hội thảo nội bộ này tham gia miễn phí đấy.”",
    clozeJp: "同僚に「この社内セミナー、_____で参加できるよ」と教えました。",
    answer: "ただ",
  },
  "zou#3": {
    exampleJp: "動物園では象の健康状態を毎朝確認しています。",
    exampleVi: "Tại sở thú, nhân viên kiểm tra tình trạng sức khỏe của voi mỗi sáng.",
    clozeJp: "動物園では_____の健康状態を毎朝確認しています。",
    answer: "象",
  },
  "tora#3": {
    exampleJp: "動物園では虎の飼育エリアを毎日点検しています。",
    exampleVi: "Tại sở thú, khu nuôi hổ được kiểm tra hằng ngày.",
    clozeJp: "動物園では_____の飼育エリアを毎日点検しています。",
    answer: "虎",
  },
  "fuusoku#1": {
    exampleJp: "今日の風速はかなり高い。",
    exampleVi: "Tốc độ gió hôm nay khá cao.",
    clozeJp: "今日の_____はかなり高い。",
    answer: "風速",
  },
  "koro#3": {
    exampleJp: "来月頃には完成する見込みです。",
    clozeJp: "来月_____には完成する見込みです。",
    answer: "頃",
  },
  "jikoku#1": {
    exampleVi: "Tôi đã kiểm tra giờ khởi hành.",
  },
  "jikoku#2": {
    exampleVi: "Đừng nhầm giờ nhé.",
  },
  "jikoku#3": {
    exampleVi: "Giờ đến nơi có thể thay đổi.",
  },
  "oyatsu#3": {
    exampleJp: "社員食堂では午後のおやつも販売しています。",
    exampleVi: "Căng-tin công ty cũng bán đồ ăn nhẹ vào buổi chiều.",
    clozeJp: "社員食堂では午後の_____も販売しています。",
    answer: "おやつ",
  },
  "hamigaki#3": {
    exampleJp: "介護施設では、利用者の歯磨きをスタッフが見守っています。",
    exampleVi: "Tại cơ sở chăm sóc, nhân viên giám sát việc đánh răng của người sử dụng dịch vụ.",
    clozeJp: "介護施設では、利用者の_____をスタッフが見守っています。",
    answer: "歯磨き",
  },
  "hanko#3": {
    exampleJp: "契約書の所定欄に判こを押してください。",
    exampleVi: "Vui lòng đóng dấu vào ô quy định trên hợp đồng.",
    clozeJp: "契約書の所定欄に_____を押してください。",
    answer: "判こ",
  },
  "stand#1": {
    exampleVi: "Tôi đã đặt đèn bàn lên bàn.",
  },
  "stand#2": {
    exampleVi: "Đèn bàn này sáng thật nhỉ.",
  },
  "stand#3": {
    exampleVi: "Chúng tôi đã trang bị đèn bàn tiết kiệm điện trong công ty.",
  },
  "ataru#3": {
    exampleJp: "予測が当たるか、販売データで検証しています。",
    exampleVi: "Chúng tôi đang kiểm chứng bằng dữ liệu bán hàng xem dự báo có đúng hay không.",
    clozeJp: "予測が_____か、販売データで検証しています。",
    answer: "当たる",
  },
  "tojiru#1": {
    exampleVi: "Vui lòng đóng sách lại.",
  },
  "toru_catch#3": {
    exampleJp: "漁業会社では、決められた区域で魚を捕っています。",
    exampleVi: "Công ty đánh bắt thủy sản bắt cá trong khu vực được quy định.",
    clozeJp: "漁業会社では、決められた区域で魚を_____います。",
    answer: "捕って",
  },
  "nagareru#3": {
    exampleJp: "店内に音楽が流れる時間帯を設定しています。",
    exampleVi: "Chúng tôi thiết lập khung giờ phát nhạc trong cửa hàng.",
    clozeJp: "店内に音楽が_____時間帯を設定しています。",
    answer: "流れる",
  },
  "naru_fruit#3": {
    exampleJp: "農園では、りんごがよく生るように剪定を行っています。",
    exampleVi: "Tại nông trại, chúng tôi tỉa cành để cây táo sai quả.",
    clozeJp: "農園では、りんごがよく_____ように剪定を行っています。",
    answer: "生る",
  },
  "hakaru#2": {
    exampleJp: "部屋の広さを測って、家具のサイズを決めた。",
    exampleVi: "Tôi đo kích thước căn phòng rồi quyết định kích cỡ đồ nội thất.",
    clozeJp: "部屋の広さを_____、家具のサイズを決めた。",
    answer: "測って",
  },
  "hakaru#3": {
    exampleJp: "製品の寸法を測って検査記録に残します。",
    exampleVi: "Chúng tôi đo kích thước sản phẩm và ghi vào biên bản kiểm tra.",
    clozeJp: "製品の寸法を_____検査記録に残します。",
    answer: "測って",
  },
  "sekkaku#3": {
    exampleVi: "Dù quý vị đã mất công đề xuất, lần này chúng tôi xin tạm chưa triển khai.",
  },
};

export function applyTangoN3Final6Override(input: VocabExample): VocabExample {
  const override = FINAL6_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

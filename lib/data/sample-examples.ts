import type { VocabExample } from "@/lib/types";

/**
 * Đúng 3 ví dụ / từ (1 = exam, 2 = daily, 3 = business), khớp `vocabId` với
 * `lib/data/sample-words.ts`. UI chỉ hiển thị số thứ tự 1/2/3, không hiển thị
 * exampleType — nhưng vẫn lưu lại để sau này lọc theo ngữ cảnh khi làm quiz.
 */
export const sampleExamples: VocabExample[] = [
  // 会議
  {
    vocabId: "kaigi",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "明日の会議は何時からですか。",
    exampleVi: "Cuộc họp ngày mai bắt đầu từ mấy giờ?",
    clozeJp: "明日の_____は何時からですか。",
    answer: "会議",
  },
  {
    vocabId: "kaigi",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "今日、会議が長引いて疲れた。",
    exampleVi: "Hôm nay cuộc họp kéo dài nên mệt quá.",
    clozeJp: "今日、_____が長引いて疲れた。",
    answer: "会議",
  },
  {
    vocabId: "kaigi",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "午後の会議に必要な資料を準備しておいてください。",
    exampleVi: "Hãy chuẩn bị trước tài liệu cần cho cuộc họp buổi chiều.",
    clozeJp: "午後の_____に必要な資料を準備しておいてください。",
    answer: "会議",
  },

  // 書く
  {
    vocabId: "kaku",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "試験の答えを漢字で書いてください。",
    exampleVi: "Hãy viết đáp án của bài thi bằng chữ Hán.",
    clozeJp: "試験の答えを漢字で_____ください。",
    answer: "書いて",
  },
  {
    vocabId: "kaku",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "このペン、字がきれいに書けるね。",
    exampleVi: "Cây bút này viết chữ đẹp ghê.",
    clozeJp: "このペン、字がきれいに_____ね。",
    answer: "書ける",
  },
  {
    vocabId: "kaku",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "会議の内容をメモに書いておきました。",
    exampleVi: "Tôi đã ghi lại nội dung cuộc họp vào giấy note.",
    clozeJp: "会議の内容をメモに_____おきました。",
    answer: "書いて",
  },

  // 食べる
  {
    vocabId: "taberu",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "朝ご飯はもう食べましたか。",
    exampleVi: "Bạn đã ăn sáng chưa?",
    clozeJp: "朝ご飯はもう_____か。",
    answer: "食べました",
  },
  {
    vocabId: "taberu",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "お腹すいた、何か食べたいな。",
    exampleVi: "Đói bụng quá, muốn ăn gì đó ghê.",
    clozeJp: "お腹すいた、何か_____な。",
    answer: "食べたい",
  },
  {
    vocabId: "taberu",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "会食で何を食べるか、先方に確認しておきます。",
    exampleVi: "Tôi sẽ xác nhận trước với đối tác xem sẽ ăn gì trong buổi tiệc.",
    clozeJp: "会食で何を_____か、先方に確認しておきます。",
    answer: "食べる",
  },

  // 確認する
  {
    vocabId: "kakunin-suru",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "内容をもう一度確認してください。",
    exampleVi: "Vui lòng xác nhận lại nội dung một lần nữa.",
    clozeJp: "内容をもう一度_____ください。",
    answer: "確認して",
  },
  {
    vocabId: "kakunin-suru",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "電気消したか確認した?",
    exampleVi: "Đã kiểm tra tắt điện chưa?",
    clozeJp: "電気消したか_____?",
    answer: "確認した",
  },
  {
    vocabId: "kakunin-suru",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "資料に誤りがないか確認いたします。",
    exampleVi: "Tôi sẽ kiểm tra xem tài liệu có sai sót gì không.",
    clozeJp: "資料に誤りがないか_____いたします。",
    answer: "確認",
  },

  // 来る
  {
    vocabId: "kuru",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "明日、何時に来ますか。",
    exampleVi: "Ngày mai bạn đến lúc mấy giờ?",
    clozeJp: "明日、何時に_____か。",
    answer: "来ます",
  },
  {
    vocabId: "kuru",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "あ、バスが来た!",
    exampleVi: "A, xe buýt đến rồi!",
    clozeJp: "あ、バスが_____!",
    answer: "来た",
  },
  {
    vocabId: "kuru",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "お客様が来る前に会議室を片付けておいてください。",
    exampleVi: "Vui lòng dọn phòng họp trước khi khách đến.",
    clozeJp: "お客様が_____前に会議室を片付けておいてください。",
    answer: "来る",
  },

  // 高い
  {
    vocabId: "takai",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "この地域は物価が高いです。",
    exampleVi: "Khu vực này vật giá đắt đỏ.",
    clozeJp: "この地域は物価が_____です。",
    answer: "高い",
  },
  {
    vocabId: "takai",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "あのビル、めっちゃ高くない?",
    exampleVi: "Tòa nhà đó cao dữ vậy?",
    clozeJp: "あのビル、めっちゃ_____?",
    answer: "高くない",
  },
  {
    vocabId: "takai",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "このプランは他社より少し高いですが、品質は保証します。",
    exampleVi: "Gói này đắt hơn một chút so với công ty khác, nhưng chúng tôi đảm bảo chất lượng.",
    clozeJp: "このプランは他社より少し_____ですが、品質は保証します。",
    answer: "高い",
  },

  // 静か
  {
    vocabId: "shizuka",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "図書館の中は静かにしてください。",
    exampleVi: "Trong thư viện xin giữ yên tĩnh.",
    clozeJp: "図書館の中は_____にしてください。",
    answer: "静か",
  },
  {
    vocabId: "shizuka",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "このカフェ、意外と静かでいいね。",
    exampleVi: "Quán cà phê này bất ngờ yên tĩnh, thích ghê.",
    clozeJp: "このカフェ、意外と_____でいいね。",
    answer: "静か",
  },
  {
    vocabId: "shizuka",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "オンライン会議中は静かな場所から参加してください。",
    exampleVi: "Trong lúc họp online, vui lòng tham gia từ một nơi yên tĩnh.",
    clozeJp: "オンライン会議中は_____な場所から参加してください。",
    answer: "静か",
  },

  // そろそろ
  {
    vocabId: "sorosoro",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "そろそろ出発の時間です。",
    exampleVi: "Đã đến lúc phải xuất phát rồi.",
    clozeJp: "_____出発の時間です。",
    answer: "そろそろ",
  },
  {
    vocabId: "sorosoro",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "そろそろ帰ろうか。",
    exampleVi: "Chắc mình về thôi nhỉ.",
    clozeJp: "_____帰ろうか。",
    answer: "そろそろ",
  },
  {
    vocabId: "sorosoro",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "そろそろ会議を始めましょう。",
    exampleVi: "Chúng ta bắt đầu cuộc họp thôi.",
    clozeJp: "_____会議を始めましょう。",
    answer: "そろそろ",
  },

  // 申し訳ございません
  {
    vocabId: "moushiwake-gozaimasen",
    exampleNo: 1,
    exampleType: "exam",
    exampleJp: "ご迷惑をおかけして申し訳ございません。",
    exampleVi: "Tôi thành thật xin lỗi vì đã gây phiền phức cho quý vị.",
    clozeJp: "ご迷惑をおかけして_____。",
    answer: "申し訳ございません",
  },
  {
    vocabId: "moushiwake-gozaimasen",
    exampleNo: 2,
    exampleType: "daily",
    exampleJp: "遅れて申し訳ございません。",
    exampleVi: "Xin lỗi vì tôi đến muộn ạ.",
    clozeJp: "遅れて_____。",
    answer: "申し訳ございません",
  },
  {
    vocabId: "moushiwake-gozaimasen",
    exampleNo: 3,
    exampleType: "business",
    exampleJp: "資料に誤りがあり、申し訳ございませんでした。",
    exampleVi: "Tài liệu có sai sót, tôi thành thật xin lỗi quý vị.",
    clozeJp: "資料に誤りがあり、_____でした。",
    answer: "申し訳ございません",
  },
];


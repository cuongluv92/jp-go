import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Override ví dụ 単語 N3 đã hậu kiểm. Key = `${vocabId}#${exampleNo}`.
 * Mục tiêu: giữ câu tự nhiên, tách câu trùng và sửa các cách dùng/Kanji/chức năng ngữ dụng chưa đạt.
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
    focusNote: "Daily: 〜てくるね là cách nói hội thoại tự nhiên trong tình huống này.",
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

  "gomen#1": {
    exampleJp: "遅刻したので、友達に「ごめん」と謝った。",
    exampleVi: "Vì đến muộn nên tôi đã nói 'xin lỗi' với bạn.",
    clozeJp: "遅刻したので、友達に「_____」と謝った。",
    answer: "ごめん",
    focusNote: "ごめん — lời xin lỗi thân mật; không dùng như lời xin lỗi chuẩn với khách hàng/上司.",
  },
  "gomen#3": {
    exampleJp: "同僚に「ごめん、確認を忘れた」と謝った。",
    exampleVi: "Tôi xin lỗi một đồng nghiệp: 'Xin lỗi, tôi quên kiểm tra mất rồi.'",
    clozeJp: "同僚に「_____、確認を忘れた」と謝った。",
    answer: "ごめん",
    focusNote: "Trong công việc chỉ tự nhiên với đồng nghiệp đủ thân; với 上司・顧客 dùng すみません／申し訳ありません.",
  },
  "kaiten#1": {
    exampleJp: "この椅子は360度回転する。",
    exampleVi: "Chiếc ghế này xoay được 360 độ.",
    clozeJp: "この椅子は360度_____する。",
    answer: "回転",
    focusNote: "回転する — quay/xoay.",
  },
  "itasu#2": {
    exampleJp: "ホテルで「すぐに確認いたします」と言われた。",
    exampleVi: "Ở khách sạn, tôi được nhân viên nói: 'Chúng tôi sẽ kiểm tra ngay ạ.'",
    clozeJp: "ホテルで「すぐに確認_____」と言われた。",
    answer: "いたします",
    focusNote: "いたす là khiêm nhường ngữ nên vẫn trang trọng ngay trong tình huống đời thường như khách sạn/dịch vụ.",
  },
  "ukagau2#2": {
    exampleJp: "美容院に「午後三時に伺ってもいいですか」と電話した。",
    exampleVi: "Tôi gọi cho tiệm làm tóc hỏi: 'Tôi đến lúc 3 giờ chiều có được không ạ?'",
    clozeJp: "美容院に「午後三時に_____もいいですか」と電話した。",
    answer: "伺って",
    focusNote: "伺う — khiêm nhường ngữ của 行く／来る; có thể dùng trong việc riêng khi nói lịch sự với cửa hàng/dịch vụ.",
  },
  "degozaimasu#2": {
    exampleJp: "ホテルで「こちらが朝食会場でございます」と案内された。",
    exampleVi: "Ở khách sạn, tôi được hướng dẫn: 'Đây là khu vực ăn sáng ạ.'",
    clozeJp: "ホテルで「こちらが朝食会場_____」と案内された。",
    answer: "でございます",
    focusNote: "でございます là cách nói rất lịch sự; daily ở đây là tình huống khách gặp nhân viên dịch vụ, không phải hội thoại bạn bè.",
  },
  "sumanai#3": {
    exampleJp: "部長は部下に「急な変更ですまない」と声をかけた。",
    exampleVi: "Trưởng phòng nói với cấp dưới: 'Xin lỗi vì thay đổi đột ngột.'",
    clozeJp: "部長は部下に「急な変更で_____」と声をかけた。",
    answer: "すまない",
    focusNote: "すまない là dạng không lịch sự của すみません; tự nhiên khi người trên nói với người dưới/thân, không dùng với khách.",
  },

  "himo#1": {
    exampleJp: "段ボール箱をひもでしっかり結んだ。",
    exampleVi: "Tôi buộc chặt thùng carton bằng dây.",
    clozeJp: "段ボール箱を_____でしっかり結んだ。",
    answer: "ひも",
    focusNote: "ひもで結ぶ — buộc bằng dây; tách khỏi ví dụ 縛る để tránh học hai từ bằng cùng một câu.",
  },
  "kandenchi#2": {
    exampleJp: "リモコンの乾電池、もう切れてる。",
    exampleVi: "Pin khô của điều khiển hết rồi.",
    clozeJp: "リモコンの_____、もう切れてる。",
    answer: "乾電池",
    focusNote: "乾電池 — pin khô/pin rời; câu daily không cần thêm よ・ね nếu ngữ cảnh chỉ là thông báo.",
  },
  "kuwaeru#2": {
    exampleJp: "最後に塩を少し加えてみて。",
    exampleVi: "Cuối cùng thử thêm một chút muối vào nhé.",
    clozeJp: "最後に塩を少し_____みて。",
    answer: "加えて",
    focusNote: "加える — thêm một thành phần/yếu tố vào cái đang có.",
  },
  "tasu#2": {
    exampleJp: "水が少ないから、もう少し足して。",
    exampleVi: "Nước hơi ít, thêm một chút nữa đi.",
    clozeJp: "水が少ないから、もう少し_____。",
    answer: "足して",
    focusNote: "足す — bù/thêm lượng còn thiếu; phân biệt sắc thái với 加える.",
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

  "sofu#3": {
    exampleJp: "創業者である祖父から会社を引き継ぎました。",
    exampleVi: "Tôi đã tiếp quản công ty từ ông tôi, người sáng lập công ty.",
    clozeJp: "創業者である_____から会社を引き継ぎました。",
    answer: "祖父",
    focusNote: "Business: dùng trong câu chuyện kế nghiệp/doanh nghiệp gia đình, không ép một câu gia đình thuần túy vào nhãn business.",
  },
  "sobo#3": {
    exampleJp: "祖母が始めた店を、今は私が経営しています。",
    exampleVi: "Cửa hàng do bà tôi mở giờ do tôi điều hành.",
    clozeJp: "_____が始めた店を、今は私が経営しています。",
    answer: "祖母",
    focusNote: "Ngữ cảnh công việc tự nhiên: nói về nguồn gốc cửa hàng gia đình.",
  },
  "choujo#3": {
    exampleJp: "社長の長女が来年から会社を継ぐ予定です。",
    exampleVi: "Con gái trưởng của giám đốc dự kiến sẽ kế nghiệp công ty từ năm sau.",
    clozeJp: "社長の_____が来年から会社を継ぐ予定です。",
    answer: "長女",
    focusNote: "長女 — con gái trưởng; business context là thông tin kế nghiệp.",
  },
  "okazu#3": {
    exampleJp: "社員食堂では日替わりのおかずを三種類用意しています。",
    exampleVi: "Căng-tin công ty chuẩn bị ba món ăn kèm thay đổi theo ngày.",
    clozeJp: "社員食堂では日替わりの_____を三種類用意しています。",
    answer: "おかず",
    focusNote: "Business context thực tế: 社員食堂.",
  },
  "hoeru#3": {
    exampleJp: "警備犬が知らない人にほえることがあります。",
    exampleVi: "Chó bảo vệ đôi khi sủa người lạ.",
    clozeJp: "警備犬が知らない人に_____ことがあります。",
    answer: "ほえる",
    focusNote: "警備犬が人にほえる — ngữ cảnh công việc/an ninh tự nhiên.",
  },
  "otonashii#3": {
    exampleJp: "この犬はおとなしいので、診察しやすいです。",
    exampleVi: "Con chó này hiền nên khá dễ khám.",
    clozeJp: "この犬は_____ので、診察しやすいです。",
    answer: "おとなしい",
    focusNote: "Ngữ cảnh phòng khám thú y; không cần biến tính từ thành câu business máy móc.",
  },
  "kawaisou#3": {
    exampleJp: "困っている新人をかわいそうに思うだけでなく、業務を手伝いました。",
    exampleVi: "Tôi không chỉ thấy thương nhân viên mới đang gặp khó mà còn giúp họ làm việc.",
    clozeJp: "困っている新人を_____に思うだけでなく、業務を手伝いました。",
    answer: "かわいそう",
    focusNote: "かわいそうに思う — thấy tội/thương; dùng trong ngữ cảnh đồng nghiệp nhưng vẫn là cảm xúc đời thường.",
  },
  "suteki#3": {
    exampleJp: "受付の方が素敵な笑顔で迎えてくれました。",
    exampleVi: "Nhân viên lễ tân đã đón chúng tôi bằng một nụ cười rất duyên.",
    clozeJp: "受付の方が_____笑顔で迎えてくれました。",
    answer: "素敵な",
    focusNote: "素敵な笑顔 — nụ cười đẹp/duyên; business context tự nhiên khi nói về dịch vụ tiếp khách.",
  },
  "sokkuri#3": {
    exampleJp: "新しいロゴが競合他社のデザインにそっくりです。",
    exampleVi: "Logo mới trông giống hệt thiết kế của công ty đối thủ.",
    clozeJp: "新しいロゴが競合他社のデザインに_____です。",
    answer: "そっくり",
    focusNote: "Nにそっくりだ — giống hệt N; business context thiết kế/thương hiệu.",
  },
  "binbou#3": {
    exampleJp: "創業当時は社長も貧乏で、自宅の一室を事務所にしていました。",
    exampleVi: "Khi mới khởi nghiệp, giám đốc cũng nghèo và dùng một phòng trong nhà làm văn phòng.",
    clozeJp: "創業当時は社長も_____で、自宅の一室を事務所にしていました。",
    answer: "貧乏",
    focusNote: "Business context là hồi tưởng giai đoạn khởi nghiệp; không dùng 貧乏 như thuật ngữ kinh doanh trang trọng.",
  },
  "chichioya#3": {
    exampleJp: "育児商品の企画会議で、父親の立場から意見を述べました。",
    exampleVi: "Trong cuộc họp lên kế hoạch sản phẩm chăm sóc trẻ, tôi phát biểu từ góc nhìn của một người cha.",
    clozeJp: "育児商品の企画会議で、_____の立場から意見を述べました。",
    answer: "父親",
    focusNote: "Business context thực tế: sản phẩm/企画 và góc nhìn người dùng.",
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

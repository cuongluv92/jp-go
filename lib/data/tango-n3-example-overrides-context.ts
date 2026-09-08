import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Hậu kiểm ngữ cảnh cho 単語 N3.
 * Chỉ sửa những câu đúng ngữ pháp nhưng không đạt mục tiêu daily/business thực tế,
 * hoặc có cách kết hợp từ chưa tự nhiên. Không thêm よ・ね theo công thức.
 */
const TANGO_N3_CONTEXT_EXAMPLE_OVERRIDES: Record<string, ExampleOverride> = {
  "erai#3": {
    exampleJp: "役職が上がって偉くなっても、部下の意見を聞く姿勢が大切です。",
    exampleVi: "Dù lên chức và có địa vị cao hơn, việc lắng nghe ý kiến cấp dưới vẫn rất quan trọng.",
    clozeJp: "役職が上がって_____なっても、部下の意見を聞く姿勢が大切です。",
    answer: "偉く",
    focusNote: "偉くなる — trở nên có địa vị/chức vị cao hơn.",
  },
  "okashii1#3": {
    exampleJp: "懇親会で部長がおかしい話をして、みんなを笑わせました。",
    exampleVi: "Trong buổi giao lưu, trưởng phòng kể một câu chuyện hài hước khiến mọi người bật cười.",
    clozeJp: "懇親会で部長が_____話をして、みんなを笑わせました。",
    answer: "おかしい",
    focusNote: "おかしい① — buồn cười/hài hước, khác おかしい② = bất thường.",
  },
  "osoroshii#3": {
    exampleJp: "工場で恐ろしい事故を起こさないよう、安全確認を徹底しています。",
    exampleVi: "Chúng tôi kiểm tra an toàn nghiêm ngặt để không xảy ra tai nạn đáng sợ trong nhà máy.",
    clozeJp: "工場で_____事故を起こさないよう、安全確認を徹底しています。",
    answer: "恐ろしい",
  },
  "kayui#3": {
    exampleJp: "作業中に手がかゆくなったので、保護手袋を交換しました。",
    exampleVi: "Trong lúc làm việc tay tôi bị ngứa nên đã thay găng bảo hộ.",
    clozeJp: "作業中に手が_____なったので、保護手袋を交換しました。",
    answer: "かゆく",
  },
  "kusai#3": {
    exampleJp: "倉庫が臭かったので、換気設備を点検しました。",
    exampleVi: "Vì kho có mùi hôi nên chúng tôi đã kiểm tra hệ thống thông gió.",
    clozeJp: "倉庫が_____ので、換気設備を点検しました。",
    answer: "臭かった",
  },
  "kuyashii#3": {
    exampleJp: "受注を逃して悔しいですが、原因を分析して次に生かします。",
    exampleVi: "Tôi rất tiếc vì để tuột đơn hàng, nhưng sẽ phân tích nguyên nhân để rút kinh nghiệm cho lần sau.",
    clozeJp: "受注を逃して_____ですが、原因を分析して次に生かします。",
    answer: "悔しい",
  },
  "koi#3": {
    exampleJp: "試作品は味が濃いため、配合を調整します。",
    exampleVi: "Vì mẫu thử có vị quá đậm nên chúng tôi sẽ điều chỉnh tỷ lệ pha trộn.",
    clozeJp: "試作品は味が_____ため、配合を調整します。",
    answer: "濃い",
  },
  "komakai#3": {
    exampleJp: "細かい点まで確認してから資料を提出してください。",
    exampleVi: "Hãy kiểm tra cả những chi tiết nhỏ rồi mới nộp tài liệu.",
    clozeJp: "_____点まで確認してから資料を提出してください。",
    answer: "細かい",
  },
  "shiokarai#3": {
    exampleJp: "試作品が塩辛かったので、味付けを調整しました。",
    exampleVi: "Vì mẫu thử bị mặn nên chúng tôi đã điều chỉnh gia vị.",
    clozeJp: "試作品が_____ので、味付けを調整しました。",
    answer: "塩辛かった",
  },
  "shikakui#3": {
    exampleJp: "この部品は四角いので、向きを確認して取り付けてください。",
    exampleVi: "Bộ phận này có dạng vuông, hãy kiểm tra hướng rồi lắp vào.",
    clozeJp: "この部品は_____ので、向きを確認して取り付けてください。",
    answer: "四角い",
  },
  "suppai#3": {
    exampleJp: "この試作品は少し酸っぱいので、配合を見直します。",
    exampleVi: "Mẫu thử này hơi chua nên chúng tôi sẽ xem lại tỷ lệ pha trộn.",
    clozeJp: "この試作品は少し_____ので、配合を見直します。",
    answer: "酸っぱい",
  },
  "tsurai#3": {
    exampleJp: "繁忙期はつらいですが、交代で休憩を取っています。",
    exampleVi: "Mùa cao điểm khá vất vả, nhưng chúng tôi thay phiên nhau nghỉ giải lao.",
    clozeJp: "繁忙期は_____ですが、交代で休憩を取っています。",
    answer: "つらい",
  },
  "natsukashii#3": {
    exampleJp: "昔の製品カタログを見ると、懐かしい気持ちになります。",
    exampleVi: "Nhìn catalog sản phẩm cũ khiến tôi có cảm giác hoài niệm.",
    clozeJp: "昔の製品カタログを見ると、_____気持ちになります。",
    answer: "懐かしい",
  },
  "nurui#3": {
    exampleJp: "お客様からスープがぬるいと指摘があり、作り直しました。",
    exampleVi: "Khách phản ánh súp bị nguội nên chúng tôi đã làm lại.",
    clozeJp: "お客様からスープが_____と指摘があり、作り直しました。",
    answer: "ぬるい",
  },
  "mazushii#3": {
    exampleJp: "経済的に貧しい地域への支援を続けています。",
    exampleVi: "Chúng tôi tiếp tục hỗ trợ những khu vực khó khăn về kinh tế.",
    clozeJp: "経済的に_____地域への支援を続けています。",
    answer: "貧しい",
  },
  "mottainai#3": {
    exampleJp: "まだ使える部品を捨てるのはもったいないです。",
    exampleVi: "Vứt những linh kiện vẫn còn dùng được thì thật lãng phí.",
    clozeJp: "まだ使える部品を捨てるのは_____です。",
    answer: "もったいない",
  },
  "monosugoi#3": {
    exampleJp: "注文数がものすごい勢いで増えています。",
    exampleVi: "Số đơn hàng đang tăng với tốc độ khủng khiếp.",
    clozeJp: "注文数が_____勢いで増えています。",
    answer: "ものすごい",
  },
  "toku#3": {
    exampleJp: "まとめて購入した方が得です。",
    exampleVi: "Mua gộp một lần sẽ có lợi hơn.",
    clozeJp: "まとめて購入した方が_____です。",
    answer: "得",
  },
  "samazama#3": {
    exampleJp: "展示会でさまざまな商品を紹介しています。",
    exampleVi: "Chúng tôi giới thiệu nhiều loại sản phẩm khác nhau tại triển lãm.",
    clozeJp: "展示会で_____商品を紹介しています。",
    answer: "さまざまな",
  },
  "jimi#3": {
    exampleJp: "この作業は地味ですが、品質を守るために重要です。",
    exampleVi: "Công việc này khá âm thầm nhưng rất quan trọng để bảo đảm chất lượng.",
    clozeJp: "この作業は_____ですが、品質を守るために重要です。",
    answer: "地味",
  },
  "juuyou#3": {
    exampleJp: "品質管理は非常に重要です。",
    exampleVi: "Quản lý chất lượng là việc cực kỳ quan trọng.",
    clozeJp: "品質管理は非常に_____です。",
    answer: "重要",
  },
  "shoukyokuteki#3": {
    exampleJp: "会議で消極的な態度を取ってしまいました。",
    exampleVi: "Trong cuộc họp tôi đã thể hiện thái độ khá thụ động.",
    clozeJp: "会議で_____態度を取ってしまいました。",
    answer: "消極的な",
  },
  "shinsen#3": {
    exampleJp: "新鮮な視点を企画に取り入れたいです。",
    exampleVi: "Tôi muốn đưa một góc nhìn mới mẻ vào kế hoạch.",
    clozeJp: "_____視点を企画に取り入れたいです。",
    answer: "新鮮な",
  },
  "supesharu#3": {
    exampleJp: "今回はスペシャルな特典をご用意しました。",
    exampleVi: "Lần này chúng tôi đã chuẩn bị một ưu đãi đặc biệt.",
    clozeJp: "今回は_____特典をご用意しました。",
    answer: "スペシャルな",
  },
  "zeitaku#3": {
    exampleJp: "ホテルでは少しぜいたくなプランも用意しています。",
    exampleVi: "Khách sạn cũng có chuẩn bị những gói dịch vụ hơi sang trọng một chút.",
    clozeJp: "ホテルでは少し_____プランも用意しています。",
    answer: "ぜいたくな",
  },
  "tanjun#3": {
    exampleJp: "手続きをできるだけ単純な流れに整理しました。",
    exampleVi: "Chúng tôi đã sắp xếp quy trình thành luồng đơn giản nhất có thể.",
    clozeJp: "手続きをできるだけ_____流れに整理しました。",
    answer: "単純な",
  },
  "fuan#3": {
    exampleJp: "新しいシステムの導入が少し不安です。",
    exampleVi: "Tôi hơi lo về việc đưa hệ thống mới vào sử dụng.",
    clozeJp: "新しいシステムの導入が少し_____です。",
    answer: "不安",
  },
  "fushigi#3": {
    exampleJp: "この不具合が再現しないのは不思議です。",
    exampleVi: "Thật khó hiểu khi lỗi này không tái hiện lại.",
    clozeJp: "この不具合が再現しないのは_____です。",
    answer: "不思議",
  },
  "heiwa#3": {
    exampleJp: "職場の雰囲気は平和で、相談もしやすいです。",
    exampleVi: "Bầu không khí nơi làm việc yên bình nên cũng dễ trao đổi, xin ý kiến.",
    clozeJp: "職場の雰囲気は_____で、相談もしやすいです。",
    answer: "平和",
  },
  "massao#3": {
    exampleJp: "売上の急減を見て、担当者は真っ青になりました。",
    exampleVi: "Thấy doanh số sụt mạnh, người phụ trách tái mét mặt.",
    clozeJp: "売上の急減を見て、担当者は_____になりました。",
    answer: "真っ青",
  },
  "manzoku#3": {
    exampleJp: "お客様に満足していただけるサービスを目指します。",
    exampleVi: "Chúng tôi hướng tới dịch vụ có thể làm khách hàng hài lòng.",
    clozeJp: "お客様に_____していただけるサービスを目指します。",
    answer: "満足",
  },
  "meiwaku#3": {
    exampleJp: "周りに迷惑をかけないよう、通路に物を置かないでください。",
    exampleVi: "Để không gây phiền cho người xung quanh, xin đừng đặt đồ ở lối đi.",
    clozeJp: "周りに_____をかけないよう、通路に物を置かないでください。",
    answer: "迷惑",
  },
  "yuushuu#3": {
    exampleJp: "優秀な社員が育つ環境を作りたいです。",
    exampleVi: "Chúng tôi muốn tạo môi trường để những nhân viên xuất sắc có thể trưởng thành.",
    clozeJp: "_____社員が育つ環境を作りたいです。",
    answer: "優秀な",
  },
  "yutaka#3": {
    exampleJp: "福利厚生を充実させ、社員の生活を豊かにしたいです。",
    exampleVi: "Chúng tôi muốn cải thiện phúc lợi để đời sống nhân viên phong phú hơn.",
    clozeJp: "福利厚生を充実させ、社員の生活を_____にしたいです。",
    answer: "豊か",
  },
  "wagamama#3": {
    exampleJp: "職場でわがままに振る舞うのはよくありません。",
    exampleVi: "Cư xử ích kỷ theo ý mình ở nơi làm việc là không tốt.",
    clozeJp: "職場で_____に振る舞うのはよくありません。",
    answer: "わがまま",
  },

  "achirakochira#2": {
    exampleJp: "休みの日はあちらこちらへ出かけるのが好き。",
    exampleVi: "Ngày nghỉ tôi thích đi đây đi đó.",
    clozeJp: "休みの日は_____へ出かけるのが好き。",
    answer: "あちらこちら",
  },
  "achirakochira#3": {
    exampleJp: "会場のあちらこちらに案内板を設置しました。",
    exampleVi: "Chúng tôi đã đặt bảng hướng dẫn ở nhiều chỗ trong hội trường.",
    clozeJp: "会場の_____に案内板を設置しました。",
    answer: "あちらこちら",
  },
  "gobusata#2": {
    exampleJp: "ほんとにご無沙汰！元気だった？",
    exampleVi: "Lâu quá không gặp! Dạo này khỏe không?",
    clozeJp: "ほんとに_____！元気だった？",
    answer: "ご無沙汰",
  },
  "ichiji#3": {
    exampleJp: "システムを一時停止して、点検を行います。",
    exampleVi: "Chúng tôi sẽ tạm dừng hệ thống để kiểm tra.",
    clozeJp: "システムを_____停止して、点検を行います。",
    answer: "一時",
  },
  "sotto#3": {
    exampleJp: "新人には答えを教えすぎず、そっと見守ることも大切です。",
    exampleVi: "Với nhân viên mới, đôi khi cũng cần âm thầm quan sát thay vì chỉ hết mọi đáp án.",
    clozeJp: "新人には答えを教えすぎず、_____見守ることも大切です。",
    answer: "そっと",
  },
  "sonouchi#3": {
    exampleJp: "新機能については、そのうち社内で発表されるでしょう。",
    exampleVi: "Tính năng mới có lẽ sẽ được công bố nội bộ trong thời gian tới.",
    clozeJp: "新機能については、_____社内で発表されるでしょう。",
    answer: "そのうち",
  },
  "nande#3": {
    exampleJp: "同僚に「何でこの数値が変わったの？」と聞かれました。",
    exampleVi: "Một đồng nghiệp hỏi tôi: 'Sao con số này lại thay đổi vậy?'",
    clozeJp: "同僚に「_____この数値が変わったの？」と聞かれました。",
    answer: "何で",
    focusNote: "何で = tại sao, khá khẩu ngữ; business ở đây là hội thoại nội bộ với đồng nghiệp, không phải lời nói với khách.",
  },
  "nenjuu#3": {
    exampleJp: "この工場は年中稼働しています。",
    exampleVi: "Nhà máy này hoạt động quanh năm.",
    clozeJp: "この工場は_____稼働しています。",
    answer: "年中",
  },
  "nonbiri#3": {
    exampleJp: "繁忙期が終わったので、今日は少しのんびり作業できます。",
    exampleVi: "Mùa cao điểm đã qua nên hôm nay có thể làm việc thong thả hơn một chút.",
    clozeJp: "繁忙期が終わったので、今日は少し_____作業できます。",
    answer: "のんびり",
  },
  "burabura#3": {
    exampleJp: "休憩中、腕をぶらぶらさせて肩をほぐしました。",
    exampleVi: "Trong giờ nghỉ, tôi thả lỏng hai tay và làm giãn vai.",
    clozeJp: "休憩中、腕を_____させて肩をほぐしました。",
    answer: "ぶらぶら",
  },
  "marude#3": {
    exampleJp: "新しい画面は、まるで別の製品のように見えます。",
    exampleVi: "Màn hình mới trông cứ như một sản phẩm hoàn toàn khác.",
    clozeJp: "新しい画面は、_____別の製品のように見えます。",
    answer: "まるで",
  },
  "matane#3": {
    exampleJp: "親しい同僚に「じゃあ、またね」と言って退社しました。",
    exampleVi: "Tôi chào một đồng nghiệp thân 'thế nhé, hẹn gặp lại' rồi ra về.",
    clozeJp: "親しい同僚に「じゃあ、_____」と言って退社しました。",
    answer: "またね",
    focusNote: "またね là thân mật; trong công việc chỉ dùng với đồng nghiệp đủ thân, không dùng với khách/上司.",
  },
  "are#3": {
    exampleJp: "会議中、資料が見つからず「あれ、どこだ？」と探しました。",
    exampleVi: "Trong cuộc họp tôi không tìm thấy tài liệu nên lẩm bẩm 'ơ, ở đâu rồi nhỉ?' và đi tìm.",
    clozeJp: "会議中、資料が見つからず「_____、どこだ？」と探しました。",
    answer: "あれ",
  },
  "kamaimasen#3": {
    exampleJp: "日程を変更してもかまいませんか。",
    exampleVi: "Tôi thay đổi lịch có được không?",
    clozeJp: "日程を変更しても_____か。",
    answer: "かまいません",
  },
  "oagarikudasai1#3": {
    exampleJp: "お客様に「どうぞお菓子をお上がりください」と勧めました。",
    exampleVi: "Tôi mời khách: 'Xin mời dùng bánh ạ.'",
    clozeJp: "お客様に「どうぞお菓子を_____」と勧めました。",
    answer: "お上がりください",
  },
  "oagarikudasai2#3": {
    exampleJp: "訪問先で「どうぞお上がりください」と言われました。",
    exampleVi: "Tại nơi đến thăm, tôi được mời: 'Xin mời vào ạ.'",
    clozeJp: "訪問先で「どうぞ_____」と言われました。",
    answer: "お上がりください",
  },
  "sorewaikemasenne#3": {
    exampleJp: "社員が体調不良を訴えたので、「それはいけませんね。今日は休んでください」と伝えました。",
    exampleVi: "Một nhân viên báo không khỏe nên tôi nói: 'Thế thì không ổn rồi. Hôm nay hãy nghỉ đi.'",
    clozeJp: "社員が体調不良を訴えたので、「_____。今日は休んでください」と伝えました。",
    answer: "それはいけませんね",
  },
  "osakini#3": {
    exampleJp: "今日はお先に失礼します。",
    exampleVi: "Hôm nay tôi xin phép về trước.",
    clozeJp: "今日は_____失礼します。",
    answer: "お先に",
    focusNote: "お先に失礼します — câu chào rất thông dụng khi rời chỗ làm trước người khác.",
  },
};

export function applyTangoN3ContextExampleOverride(input: VocabExample): VocabExample {
  const override = TANGO_N3_CONTEXT_EXAMPLE_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

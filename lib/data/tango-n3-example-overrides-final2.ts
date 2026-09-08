import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Hậu kiểm độc lập lần cuối: giảm các mẫu câu sinh hàng loạt và làm rõ
 * những ví dụ business còn mơ hồ về ngữ cảnh công việc/dịch vụ.
 */
const FINAL2_OVERRIDES: Record<string, ExampleOverride> = {
  // Business: chuyển các câu đời tư/mơ hồ sang ngữ cảnh công việc thực sự.
  "driveinn#3": {
    exampleJp: "出張中、高速道路沿いのドライブインで休憩しました。",
    exampleVi: "Trong chuyến công tác, tôi đã nghỉ tại một trạm dừng chân ven đường cao tốc.",
    clozeJp: "出張中、高速道路沿いの_____で休憩しました。",
    answer: "ドライブイン",
  },
  "musuko#3": {
    exampleJp: "社長の息子が新しい事業責任者として入社しました。",
    exampleVi: "Con trai của giám đốc đã vào công ty với vai trò người phụ trách mảng kinh doanh mới.",
    clozeJp: "社長の_____が新しい事業責任者として入社しました。",
    answer: "息子",
  },
  "rope#3": {
    exampleJp: "高所作業では、安全基準を満たした丈夫なロープを使用しています。",
    exampleVi: "Khi làm việc trên cao, chúng tôi sử dụng dây thừng chắc chắn đáp ứng tiêu chuẩn an toàn.",
    clozeJp: "高所作業では、安全基準を満たした丈夫な_____を使用しています。",
    answer: "ロープ",
  },
  "shuukyou#3": {
    exampleJp: "社員やお客様の宗教上の理由による食事制限に配慮しています。",
    exampleVi: "Chúng tôi lưu ý đến các hạn chế ăn uống vì lý do tôn giáo của nhân viên và khách hàng.",
    clozeJp: "社員やお客様の_____上の理由による食事制限に配慮しています。",
    answer: "宗教",
  },
  "fubo#3": {
    exampleJp: "学校では、父母会からのご意見を運営の参考にしています。",
    exampleVi: "Nhà trường tham khảo ý kiến từ hội phụ huynh trong công tác vận hành.",
    clozeJp: "学校では、_____会からのご意見を運営の参考にしています。",
    answer: "父母",
  },

  // Daily: phá mẫu "X、貸して。" lặp hàng loạt bằng collocation/cách dùng tự nhiên hơn.
  "megusuri#2": {
    exampleJp: "目が乾いたから、目薬をさした。",
    exampleVi: "Mắt bị khô nên tôi đã nhỏ thuốc nhỏ mắt.",
    clozeJp: "目が乾いたから、_____をさした。",
    answer: "目薬",
  },
  "enogu#2": {
    exampleJp: "青い絵の具がなくなったから、買い足した。",
    exampleVi: "Màu vẽ xanh hết rồi nên tôi mua thêm.",
    clozeJp: "青い_____がなくなったから、買い足した。",
    answer: "絵の具",
  },
  "obon#2": {
    exampleJp: "お盆にお茶を載せて、居間まで運んだ。",
    exampleVi: "Tôi đặt trà lên khay rồi mang vào phòng khách.",
    clozeJp: "_____にお茶を載せて、居間まで運んだ。",
    answer: "お盆",
  },
  "saji#2": {
    exampleJp: "砂糖をさじ一杯だけ入れた。",
    exampleVi: "Tôi chỉ cho vào một thìa đường.",
    clozeJp: "砂糖を_____一杯だけ入れた。",
    answer: "さじ",
  },
  "senpuuki#2": {
    exampleJp: "暑いから、扇風機つけてもいい？",
    exampleVi: "Nóng quá, bật quạt lên được không?",
    clozeJp: "暑いから、_____つけてもいい？",
    answer: "扇風機",
  },
  "towel#2": {
    exampleJp: "シャワーのあと、新しいタオルを使った。",
    exampleVi: "Sau khi tắm, tôi dùng một chiếc khăn mới.",
    clozeJp: "シャワーのあと、新しい_____を使った。",
    answer: "タオル",
  },
  "bucket#2": {
    exampleJp: "ベランダを掃除するから、バケツに水をくんで。",
    exampleVi: "Tôi sắp dọn ban công, múc nước vào xô giúp nhé.",
    clozeJp: "ベランダを掃除するから、_____に水をくんで。",
    answer: "バケツ",
  },
  "pin#2": {
    exampleJp: "この写真、ピンで壁に留めてもいい？",
    exampleVi: "Tấm ảnh này, ghim lên tường bằng ghim được không?",
    clozeJp: "この写真、_____で壁に留めてもいい？",
    answer: "ピン",
  },
  "hose#2": {
    exampleJp: "庭の花にホースで水をやった。",
    exampleVi: "Tôi tưới hoa trong vườn bằng vòi nước.",
    clozeJp: "庭の花に_____で水をやった。",
    answer: "ホース",
  },
  "lighter#2": {
    exampleJp: "ライター、どこに置いたっけ？",
    exampleVi: "Cái bật lửa mình để đâu rồi nhỉ?",
    clozeJp: "_____、どこに置いたっけ？",
    answer: "ライター",
  },
  "jougi#2": {
    exampleJp: "この線、定規を使ってまっすぐ引いて。",
    exampleVi: "Đường này dùng thước kẻ cho thẳng nhé.",
    clozeJp: "この線、_____を使ってまっすぐ引いて。",
    answer: "定規",
  },
  "dentaku#2": {
    exampleJp: "合計を出すのに電卓を使った。",
    exampleVi: "Tôi dùng máy tính để tính tổng.",
    clozeJp: "合計を出すのに_____を使った。",
    answer: "電卓",
  },

  // Daily: phá mẫu "そのX、可愛いね。".
  "hougen#2": {
    exampleJp: "その方言、聞いているとなんだか親しみを感じる。",
    exampleVi: "Nghe phương ngữ đó tự nhiên tôi thấy có cảm giác thân thuộc.",
    clozeJp: "その_____、聞いているとなんだか親しみを感じる。",
    answer: "方言",
  },
  "usagi#2": {
    exampleJp: "うさぎが耳をぴくぴく動かしている。",
    exampleVi: "Con thỏ đang cử động đôi tai liên tục.",
    clozeJp: "_____が耳をぴくぴく動かしている。",
    answer: "うさぎ",
  },
  "pajama#2": {
    exampleJp: "新しいパジャマ、着心地がすごくいい。",
    exampleVi: "Bộ đồ ngủ mới mặc rất thoải mái.",
    clozeJp: "新しい_____、着心地がすごくいい。",
    answer: "パジャマ",
  },
  "blouse#2": {
    exampleJp: "そのブラウス、春らしくてよく似合ってるね。",
    exampleVi: "Chiếc áo blouse đó trông rất hợp mùa xuân và rất hợp với bạn.",
    clozeJp: "その_____、春らしくてよく似合ってるね。",
    answer: "ブラウス",
  },
  "necklace#2": {
    exampleJp: "そのネックレス、今日の服にすごく合ってる。",
    exampleVi: "Sợi dây chuyền đó rất hợp với bộ đồ hôm nay.",
    clozeJp: "その_____、今日の服にすごく合ってる。",
    answer: "ネックレス",
  },
  "bag#2": {
    exampleJp: "このバッグ、見た目よりたくさん入るね。",
    exampleVi: "Cái túi này đựng được nhiều hơn vẻ ngoài nhỉ.",
    clozeJp: "この_____、見た目よりたくさん入るね。",
    answer: "バッグ",
  },
  "ribbon#2": {
    exampleJp: "プレゼントに赤いリボンを結んだ。",
    exampleVi: "Tôi buộc một chiếc nơ đỏ vào món quà.",
    clozeJp: "プレゼントに赤い_____を結んだ。",
    answer: "リボン",
  },
  "case#2": {
    exampleJp: "スマホのケースを新しいのに替えた。",
    exampleVi: "Tôi đã đổi ốp điện thoại sang cái mới.",
    clozeJp: "スマホの_____を新しいのに替えた。",
    answer: "ケース",
  },

  // Daily: phá mẫu "このX、美味しいね。".
  "sausage#2": {
    exampleJp: "朝ごはんにソーセージを焼いた。",
    exampleVi: "Tôi nướng xúc xích cho bữa sáng.",
    clozeJp: "朝ごはんに_____を焼いた。",
    answer: "ソーセージ",
  },
  "cheese#2": {
    exampleJp: "このチーズ、パンと一緒に食べるとよく合うね。",
    exampleVi: "Phô mai này ăn cùng bánh mì rất hợp nhỉ.",
    clozeJp: "この_____、パンと一緒に食べるとよく合うね。",
    answer: "チーズ",
  },
  "pasta#2": {
    exampleJp: "今日は家でパスタを作ってみた。",
    exampleVi: "Hôm nay tôi thử làm mì Ý ở nhà.",
    clozeJp: "今日は家で_____を作ってみた。",
    answer: "パスタ",
  },
  "mame#2": {
    exampleJp: "この豆、煮るとほくほくするね。",
    exampleVi: "Loại đậu này nấu lên bùi nhỉ.",
    clozeJp: "この_____、煮るとほくほくするね。",
    answer: "豆",
  },
  "wine#2": {
    exampleJp: "このワイン、香りがすごくいいね。",
    exampleVi: "Rượu vang này có mùi thơm rất dễ chịu nhỉ.",
    clozeJp: "この_____、香りがすごくいいね。",
    answer: "ワイン",
  },
  "jelly#2": {
    exampleJp: "冷蔵庫にゼリーがあるよ。",
    exampleVi: "Trong tủ lạnh có thạch đấy.",
    clozeJp: "冷蔵庫に_____があるよ。",
    answer: "ゼリー",
  },
  "sauce#2": {
    exampleJp: "このソース、少し辛いけど料理に合う。",
    exampleVi: "Nước sốt này hơi cay nhưng hợp với món ăn.",
    clozeJp: "この_____、少し辛いけど料理に合う。",
    answer: "ソース",
  },
  "miso#2": {
    exampleJp: "みそを少し足したら、味がちょうどよくなった。",
    exampleVi: "Thêm một chút miso vào thì vị vừa đẹp.",
    clozeJp: "_____を少し足したら、味がちょうどよくなった。",
    answer: "みそ",
  },

  // Daily: giảm thêm ba nhóm template 5 lần.
  "kaichuudentou#2": {
    exampleJp: "停電に備えて、懐中電灯を玄関に置いてある。",
    exampleVi: "Để phòng mất điện, tôi để đèn pin ở lối vào.",
    clozeJp: "停電に備えて、_____を玄関に置いてある。",
    answer: "懐中電灯",
  },
  "shoukaki#2": {
    exampleJp: "家の消火器、使用期限を確認した？",
    exampleVi: "Bình chữa cháy ở nhà, bạn đã kiểm tra hạn sử dụng chưa?",
    clozeJp: "家の_____、使用期限を確認した？",
    answer: "消火器",
  },
  "ondokei#2": {
    exampleJp: "部屋に温度計を置いている。",
    exampleVi: "Tôi đặt một nhiệt kế trong phòng.",
    clozeJp: "部屋に_____を置いている。",
    answer: "温度計",
  },
  "tochi#2": {
    exampleJp: "この土地、駅から近いのに静かだね。",
    exampleVi: "Mảnh đất này gần ga mà vẫn yên tĩnh nhỉ.",
    clozeJp: "この_____、駅から近いのに静かだね。",
    answer: "土地",
  },
  "campus#2": {
    exampleJp: "キャンパスの中にカフェがいくつもある。",
    exampleVi: "Trong khuôn viên trường có mấy quán cà phê.",
    clozeJp: "_____の中にカフェがいくつもある。",
    answer: "キャンパス",
  },
  "tanbo#2": {
    exampleJp: "田んぼに水が入ると、景色がきれいだね。",
    exampleVi: "Khi ruộng lúa có nước, phong cảnh đẹp nhỉ.",
    clozeJp: "_____に水が入ると、景色がきれいだね。",
    answer: "田んぼ",
  },
  "fukusayou#2": {
    exampleJp: "薬を飲んでから、副作用は出てない？",
    exampleVi: "Sau khi uống thuốc, có bị tác dụng phụ gì không?",
    clozeJp: "薬を飲んでから、_____は出てない？",
    answer: "副作用",
  },
  "hai#2": {
    exampleJp: "検査で肺に異常はないと言われた。",
    exampleVi: "Khi kiểm tra, tôi được nói là phổi không có gì bất thường.",
    clozeJp: "検査で_____に異常はないと言われた。",
    answer: "肺",
  },
  "ooame#2": {
    exampleJp: "昨日の大雨で電車が止まったね。",
    exampleVi: "Hôm qua vì mưa lớn mà tàu dừng chạy nhỉ.",
    clozeJp: "昨日の_____で電車が止まったね。",
    answer: "大雨",
  },
};

export function applyTangoN3Final2Override(input: VocabExample): VocabExample {
  const override = FINAL2_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

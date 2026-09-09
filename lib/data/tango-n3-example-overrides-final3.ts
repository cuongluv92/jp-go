import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Hậu kiểm độc lập vòng 3: phá các khuôn câu còn lặp >=3 lần trong runtime
 * sau khi che target word. Mỗi câu được viết lại theo collocation/ngữ cảnh riêng,
 * không thêm よ・ね hay kính ngữ theo quota.
 */
const FINAL3_OVERRIDES: Record<string, ExampleOverride> = {
  "scarf#2": { exampleJp: "そのスカーフ、秋のコートによく合ってるね。", exampleVi: "Chiếc khăn quàng đó rất hợp với áo khoác mùa thu nhỉ.", clozeJp: "その_____、秋のコートによく合ってるね。", answer: "スカーフ" },
  "brooch#2": { exampleJp: "そのブローチ、光が当たるときれいだね。", exampleVi: "Chiếc ghim cài áo đó khi gặp ánh sáng trông đẹp nhỉ.", clozeJp: "その_____、光が当たるときれいだね。", answer: "ブローチ" },
  "sensu#2": { exampleJp: "暑いから、その扇子ちょっと借りてもいい？", exampleVi: "Nóng quá, cho mình mượn chiếc quạt xếp đó một chút được không?", clozeJp: "暑いから、その_____ちょっと借りてもいい？", answer: "扇子" },
  "toriniku#2": { exampleJp: "このとり肉、弱火で煮たからすごく柔らかい。", exampleVi: "Thịt gà này được ninh lửa nhỏ nên rất mềm.", clozeJp: "この_____、弱火で煮たからすごく柔らかい。", answer: "とり肉" },
  "pork#2": { exampleJp: "このポーク、箸で切れるくらい柔らかいね。", exampleVi: "Thịt heo này mềm đến mức dùng đũa cũng cắt được nhỉ.", clozeJp: "この_____、箸で切れるくらい柔らかいね。", answer: "ポーク" },
  "makura#2": { exampleJp: "新しい枕、思ったより柔らかくて寝やすい。", exampleVi: "Chiếc gối mới mềm hơn mình tưởng nên khá dễ ngủ.", clozeJp: "新しい_____、思ったより柔らかくて寝やすい。", answer: "枕" },
  "medal#2": { exampleJp: "このメダル、ずっしりしていて本格的だね。", exampleVi: "Tấm huy chương này nặng chắc tay, trông rất xịn nhỉ.", clozeJp: "この_____、ずっしりしていて本格的だね。", answer: "メダル" },
  "belt#2": { exampleJp: "そのベルト、今日の服に合ってるね。", exampleVi: "Chiếc thắt lưng đó hợp với bộ đồ hôm nay nhỉ.", clozeJp: "その_____、今日の服に合ってるね。", answer: "ベルト" },
  "yane#3": { exampleJp: "建物の屋根は、台風シーズン前に専門業者が点検します。", exampleVi: "Mái của tòa nhà được đơn vị chuyên môn kiểm tra trước mùa bão.", clozeJp: "建物の_____は、台風シーズン前に専門業者が点検します。", answer: "屋根" },
  "chain#3": { exampleJp: "搬送装置のチェーンは、作業開始前に摩耗を確認してください。", exampleVi: "Với xích của thiết bị vận chuyển, hãy kiểm tra độ mòn trước khi bắt đầu làm việc.", clozeJp: "搬送装置の_____は、作業開始前に摩耗を確認してください。", answer: "チェーン" },
  "sumou#2": { exampleJp: "相撲、子どものころからよく見てる。", exampleVi: "Mình xem sumo thường xuyên từ hồi còn nhỏ.", clozeJp: "_____、子どものころからよく見てる。", answer: "相撲" },
  "tsuri#2": { exampleJp: "最近、休みの日は釣りに行くことが多い。", exampleVi: "Dạo này vào ngày nghỉ mình thường đi câu cá.", clozeJp: "最近、休みの日は_____に行くことが多い。", answer: "釣り" },
  "yuushuu#1": { exampleJp: "彼女はとても優秀な研究者です。", exampleVi: "Cô ấy là một nhà nghiên cứu rất xuất sắc.", clozeJp: "彼女はとても_____研究者です。", answer: "優秀な" },
  "wagamama#1": { exampleJp: "わがままな態度は周りの人を困らせます。", exampleVi: "Thái độ ích kỷ, chỉ làm theo ý mình sẽ gây khó xử cho những người xung quanh.", clozeJp: "_____態度は周りの人を困らせます。", answer: "わがままな" },
  "hanko#2": { exampleJp: "判こ、玄関の引き出しに入れておいたよ。", exampleVi: "Con dấu mình để sẵn trong ngăn kéo ở cửa ra vào rồi đấy.", clozeJp: "_____、玄関の引き出しに入れておいたよ。", answer: "判こ" },
  "digicame#2": { exampleJp: "旅行用にデジカメの充電をしておいた。", exampleVi: "Mình đã sạc sẵn máy ảnh kỹ thuật số để đi du lịch.", clozeJp: "旅行用に_____の充電をしておいた。", answer: "デジカメ" },
  "bag#1": { exampleJp: "旅行に使える大きなバッグを探しています。", exampleVi: "Tôi đang tìm một chiếc túi lớn có thể dùng khi đi du lịch.", clozeJp: "旅行に使える大きな_____を探しています。", answer: "バッグ" },
  "kagu#1": { exampleJp: "引っ越しに合わせて家具をそろえた。", exampleVi: "Tôi đã sắm đồ nội thất nhân dịp chuyển nhà.", clozeJp: "引っ越しに合わせて_____をそろえた。", answer: "家具" },
  "omataseshimashita#2": { exampleJp: "お待たせしました。席の準備ができました。", exampleVi: "Xin lỗi đã để quý khách chờ. Chỗ ngồi đã chuẩn bị xong rồi ạ.", clozeJp: "_____。席の準備ができました。", answer: "お待たせしました" },
  "gomeiwakuookakeshimashita#2": { exampleJp: "修理の人に「昨日はご迷惑をおかけしました」と伝えた。", exampleVi: "Tôi đã nói với người đến sửa rằng: “Hôm qua tôi đã làm phiền anh/chị.”", clozeJp: "修理の人に「昨日は_____」と伝えた。", answer: "ご迷惑をおかけしました" },
  "semi#2": { exampleJp: "今日のゼミ、発表が多くて疲れた。", exampleVi: "Buổi seminar hôm nay có nhiều phần thuyết trình nên mệt thật.", clozeJp: "今日の_____、発表が多くて疲れた。", answer: "ゼミ" },
  "joushiki#1": { exampleJp: "公共の場所で静かにするのは常識です。", exampleVi: "Giữ yên lặng ở nơi công cộng là điều thường thức.", clozeJp: "公共の場所で静かにするのは_____です。", answer: "常識" },
  "allergy#2": { exampleJp: "アレルギーがあるから、この料理の材料を確認したい。", exampleVi: "Vì mình bị dị ứng nên muốn kiểm tra nguyên liệu của món này.", clozeJp: "_____があるから、この料理の材料を確認したい。", answer: "アレルギー" },
  "koshi#2": { exampleJp: "腰が痛くて、今日は長く座っていられない。", exampleVi: "Lưng dưới bị đau nên hôm nay mình không thể ngồi lâu được.", clozeJp: "_____が痛くて、今日は長く座っていられない。", answer: "腰" },
  "koumuin#1": { exampleJp: "兄は市役所で公務員として働いています。", exampleVi: "Anh trai tôi làm công chức tại tòa thị chính.", clozeJp: "兄は市役所で_____として働いています。", answer: "公務員" },
  "tennou#2": { exampleJp: "天皇に関するニュースが朝から報道されている。", exampleVi: "Tin tức liên quan đến Thiên hoàng được đưa tin từ sáng.", clozeJp: "_____に関するニュースが朝から報道されている。", answer: "天皇" },
  "joyuu#1": { exampleJp: "その女優は海外でも高く評価されている。", exampleVi: "Nữ diễn viên đó cũng được đánh giá cao ở nước ngoài.", clozeJp: "その_____は海外でも高く評価されている。", answer: "女優" },
  "onsen#1": { exampleJp: "旅行の最後に温泉に入った。", exampleVi: "Cuối chuyến đi tôi đã ngâm mình ở suối nước nóng.", clozeJp: "旅行の最後に_____に入った。", answer: "温泉" },
  "pork#3": { exampleJp: "当店ではポークを低温でじっくり調理しています。", exampleVi: "Tại cửa hàng chúng tôi, thịt heo được nấu chậm ở nhiệt độ thấp.", clozeJp: "当店では_____を低温でじっくり調理しています。", answer: "ポーク" },
  "sunglasses#3": { exampleJp: "売り場ではサングラスの試着用サンプルもご用意しています。", exampleVi: "Tại quầy bán hàng, chúng tôi cũng chuẩn bị mẫu kính râm để khách thử.", clozeJp: "売り場では_____の試着用サンプルもご用意しています。", answer: "サングラス" },
  "backpack#3": { exampleJp: "新作リュックは来週から全国の店舗で販売します。", exampleVi: "Ba lô mẫu mới sẽ được bán tại các cửa hàng trên toàn quốc từ tuần sau.", clozeJp: "新作_____は来週から全国の店舗で販売します。", answer: "リュック" },
  "muffler#2": { exampleJp: "寒いからマフラー巻いていこう。", exampleVi: "Trời lạnh nên quàng khăn rồi đi thôi.", clozeJp: "寒いから_____巻いていこう。", answer: "マフラー" },
  "monooki#2": { exampleJp: "物置がいっぱいだから、週末に整理しよう。", exampleVi: "Kho chứa đồ đầy rồi nên cuối tuần dọn lại nhé.", clozeJp: "_____がいっぱいだから、週末に整理しよう。", answer: "物置" },
  "jelly#3": { exampleJp: "新商品のゼリーは冷蔵コーナーで販売しています。", exampleVi: "Sản phẩm thạch mới đang được bán tại quầy hàng lạnh.", clozeJp: "新商品の_____は冷蔵コーナーで販売しています。", answer: "ゼリー" },
  "glass#3": { exampleJp: "割れやすいグラスは専用箱に入れて発送してください。", exampleVi: "Vui lòng cho những chiếc ly dễ vỡ vào hộp chuyên dụng trước khi gửi đi.", clozeJp: "割れやすい_____は専用箱に入れて発送してください。", answer: "グラス" },
  "pasta#1": { exampleJp: "トマトソースのパスタを作った。", exampleVi: "Tôi đã làm mì Ý sốt cà chua.", clozeJp: "トマトソースの_____を作った。", answer: "パスタ" },
  "binsen#2": { exampleJp: "この便せん、手紙を書くのが楽しくなりそう。", exampleVi: "Giấy viết thư này trông như sẽ khiến việc viết thư thú vị hơn.", clozeJp: "この_____、手紙を書くのが楽しくなりそう。", answer: "便せん" },
  "dannboru#2": { exampleJp: "引っ越しに使う段ボール、まだ残ってる？", exampleVi: "Thùng các-tông dùng để chuyển nhà vẫn còn chứ?", clozeJp: "引っ越しに使う_____、まだ残ってる？", answer: "段ボール" },
  "gomeiwakuookakeshimashita#1": { exampleJp: "ご迷惑をおかけしましたことをお詫び申し上げます。", exampleVi: "Chúng tôi thành thật xin lỗi vì đã gây phiền hà.", clozeJp: "_____ことをお詫び申し上げます。", answer: "ご迷惑をおかけしました" },
};

export function applyTangoN3Final3Override(input: VocabExample): VocabExample {
  const override = FINAL3_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

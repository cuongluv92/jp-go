-- Hoàn thiện 3 ngữ cảnh cho toàn bộ N5 bài 5.
-- Giữ ví dụ đời thường số 2; thêm câu JLPT số 1 và công việc số 3.

create unique index if not exists uq_jp_vocab_examples_vocab_no
  on public.jp_vocab_examples(vocab_id, example_no);

with classifications(word_jp, word_class, dictionary_form) as (values
  ('今','名詞','今'),('何曜日','名詞','何曜日'),('午前','名詞','午前'),('午後','名詞','午後'),('半','名詞','半'),
  ('土曜日','名詞','土曜日'),('夕方','名詞','夕方'),('日曜日','名詞','日曜日'),('昼','名詞','昼'),('月曜日','名詞','月曜日'),
  ('朝','名詞','朝'),('木曜日','名詞','木曜日'),('水曜日','名詞','水曜日'),('火曜日','名詞','火曜日'),('金曜日','名詞','金曜日'),
  ('～から','助詞','から'),('～と～','助詞','と'),('～まで','助詞','まで'),('一昨日','名詞','一昨日'),('今夜','名詞','今夜'),
  ('今日','名詞','今日'),('今晩','名詞','今晩'),('今朝','名詞','今朝'),('休み','名詞','休み'),('休む','動詞','休む'),
  ('会議','名詞','会議'),('何分','名詞','何分'),('何時','名詞','何時'),('働く','動詞','働く'),('勉強する','動詞','勉強する'),
  ('夜','名詞','夜'),('寝る','動詞','寝る'),('明後日','名詞','明後日'),('明日','名詞','明日'),('昨日','名詞','昨日'),
  ('昼休み','名詞','昼休み'),('晩','名詞','晩'),('毎日','名詞','毎日'),('毎晩','名詞','毎晩'),('毎朝','名詞','毎朝'),
  ('終わる','動詞','終わる'),('試験','名詞','試験'),('起きる','動詞','起きる')
)
update public.jp_vocab v set word_class=c.word_class,dictionary_form=c.dictionary_form
from classifications c where v.level='N5' and v.lesson_no=5 and v.word_jp=c.word_jp;

-- Hai mục 今 và 何時 trong dữ liệu gốc dùng trùng một câu; đổi câu của 今.
update public.jp_vocab_examples e set
  example_jp='今、昼休みです。', example_vi='Bây giờ đang là giờ nghỉ trưa.',
  cloze_jp='_____、昼休みです。', answer='今', difficulty=1,
  focus_note='今 đứng đầu câu để chỉ đúng thời điểm hiện tại.'
from public.jp_vocab v
where e.vocab_id=v.id and v.level='N5' and v.lesson_no=5
  and v.word_jp='今' and e.example_no=2;

with curated(word_jp,example_no,example_type,example_jp,example_vi,cloze_jp,answer,difficulty,focus_note) as (values
  ('今',1,'exam','今、図書館で日本語を勉強しています。','Bây giờ tôi đang học tiếng Nhật ở thư viện.','_____、図書館で日本語を勉強しています。','今',1,'今 đứng đầu câu để chỉ thời điểm hiện tại.'),
  ('今',3,'business','今、担当者に納期を確認しています。','Hiện tôi đang xác nhận thời hạn giao hàng với người phụ trách.','_____、担当者に納期を確認しています。','今',2,'今 có thể dùng để báo trạng thái công việc đang diễn ra.'),
  ('何曜日',1,'exam','図書館が休みなのは何曜日ですか。','Thư viện nghỉ vào thứ mấy?','図書館が休みなのは_____ですか。','何曜日',1,'何曜日 dùng hỏi thứ trong tuần.'),
  ('何曜日',3,'business','定例会議は何曜日がよろしいですか。','Cuộc họp định kỳ vào thứ mấy thì thuận tiện?','定例会議は_____がよろしいですか。','何曜日',2,'よろしいですか làm câu hỏi lịch sự hơn.'),
  ('午前',1,'exam','病院の受付は午前九時からです。','Quầy tiếp nhận bệnh viện mở từ 9 giờ sáng.','病院の受付は_____九時からです。','午前',1,'午前 đứng trước giờ từ 0 giờ đến trước 12 giờ.'),
  ('午前',3,'business','資料は午前中にメールで送ります。','Tôi sẽ gửi tài liệu qua email trong buổi sáng.','資料は_____中にメールで送ります。','午前',2,'午前中に chỉ thời hạn trong buổi sáng.'),
  ('午後',1,'exam','授業は午後一時半に始まります。','Tiết học bắt đầu lúc 1 giờ 30 chiều.','授業は_____一時半に始まります。','午後',1,'午後 đứng trước giờ sau 12 giờ trưa.'),
  ('午後',3,'business','午後三時から取引先と打ち合わせがあります。','Từ 3 giờ chiều có buổi trao đổi với đối tác.','_____三時から取引先と打ち合わせがあります。','午後',2,'Giờ bắt đầu đi với から.'),
  ('半',1,'exam','電車は七時半に駅を出ます。','Tàu rời ga lúc 7 giờ rưỡi.','電車は七時_____に駅を出ます。','半',1,'Số giờ + 半 là rưỡi.'),
  ('半',3,'business','打ち合わせは一時間半かかりました。','Buổi trao đổi kéo dài một tiếng rưỡi.','打ち合わせは一時間_____かかりました。','半',2,'Khoảng thời gian + 半 chỉ thêm nửa đơn vị.'),
  ('土曜日',1,'exam','土曜日に家族と公園へ行きます。','Thứ Bảy tôi đi công viên cùng gia đình.','_____に家族と公園へ行きます。','土曜日',1,'Ngày thực hiện hành động thường đi với に.'),
  ('土曜日',3,'business','今週の土曜日は工場が休みです。','Thứ Bảy tuần này nhà máy nghỉ.','今週の_____は工場が休みです。','土曜日',2,'今週の + thứ xác định ngày trong tuần.'),
  ('夕方',1,'exam','夕方になると、この道は混みます。','Đến chiều tối, con đường này đông.','_____になると、この道は混みます。','夕方',2,'Nになると diễn tả khi tới một thời điểm.'),
  ('夕方',3,'business','夕方までに見積書を完成させます。','Tôi sẽ hoàn thành báo giá trước chiều tối.','_____までに見積書を完成させます。','夕方',2,'までに nêu hạn cuối hoàn thành.'),
  ('日曜日',1,'exam','日曜日は銀行が開いていません。','Chủ Nhật ngân hàng không mở cửa.','_____は銀行が開いていません。','日曜日',1,'は nêu ngày làm chủ đề.'),
  ('日曜日',3,'business','日曜日の作業には事前申請が必要です。','Công việc vào Chủ Nhật cần đăng ký trước.','_____の作業には事前申請が必要です。','日曜日',3,'Nの作業 diễn tả công việc vào ngày đó.'),
  ('昼',1,'exam','昼は食堂でカレーを食べました。','Buổi trưa tôi ăn cà ri ở nhà ăn.','_____は食堂でカレーを食べました。','昼',1,'Địa điểm ăn đi với で.'),
  ('昼',3,'business','昼までにこの図面を確認してください。','Vui lòng kiểm tra bản vẽ này trước buổi trưa.','_____までにこの図面を確認してください。','昼',2,'昼までに là trước hạn buổi trưa.'),
  ('月曜日',1,'exam','学校は月曜日から始まります。','Trường bắt đầu từ thứ Hai.','学校は_____から始まります。','月曜日',1,'Ngày bắt đầu đi với から.'),
  ('月曜日',3,'business','月曜日の朝に進捗を報告します。','Tôi sẽ báo cáo tiến độ vào sáng thứ Hai.','_____の朝に進捗を報告します。','月曜日',2,'Thứ + の朝 diễn tả buổi sáng của ngày đó.'),
  ('朝',1,'exam','朝、駅まで二十分歩きます。','Buổi sáng tôi đi bộ 20 phút tới ga.','_____、駅まで二十分歩きます。','朝',1,'朝 có thể đứng đầu câu không cần に.'),
  ('朝',3,'business','朝の会議で今日の予定を確認しました。','Trong cuộc họp sáng, chúng tôi đã xác nhận lịch hôm nay.','_____の会議で今日の予定を確認しました。','朝',2,'朝の + danh từ chỉ sự việc vào buổi sáng.'),
  ('木曜日',1,'exam','木曜日に日本語のテストがあります。','Thứ Năm có bài kiểm tra tiếng Nhật.','_____に日本語のテストがあります。','木曜日',1,'Ngày có sự kiện đi với に.'),
  ('木曜日',3,'business','納品日は来週の木曜日です。','Ngày giao hàng là thứ Năm tuần sau.','納品日は来週の_____です。','木曜日',2,'来週の + thứ xác định lịch giao hàng.'),
  ('水曜日',1,'exam','水曜日は授業が三つあります。','Thứ Tư có ba tiết học.','_____は授業が三つあります。','水曜日',1,'は nêu ngày làm chủ đề.'),
  ('水曜日',3,'business','水曜日までに申請書を提出してください。','Vui lòng nộp đơn trước thứ Tư.','_____までに申請書を提出してください。','水曜日',2,'までに nêu hạn chót.'),
  ('火曜日',1,'exam','火曜日の午後に病院へ行きます。','Chiều thứ Ba tôi đi bệnh viện.','_____の午後に病院へ行きます。','火曜日',1,'Thứ + の午後 diễn tả chiều của ngày đó.'),
  ('火曜日',3,'business','火曜日は担当者が出張しています。','Thứ Ba người phụ trách đi công tác.','_____は担当者が出張しています。','火曜日',2,'出張しています nói trạng thái đang đi công tác.'),
  ('金曜日',1,'exam','金曜日に友達と映画を見る予定です。','Thứ Sáu tôi dự định xem phim với bạn.','_____に友達と映画を見る予定です。','金曜日',1,'Vる予定です diễn tả dự định.'),
  ('金曜日',3,'business','報告書は金曜日までに提出します。','Tôi sẽ nộp báo cáo trước thứ Sáu.','報告書は_____までに提出します。','金曜日',2,'Hạn nộp dùng までに.'),
  ('～から',1,'exam','図書館は九時から開いています。','Thư viện mở cửa từ 9 giờ.','図書館は九時_____開いています。','から',1,'から đánh dấu thời điểm bắt đầu.'),
  ('～から',3,'business','会議は午後二時から始めます。','Cuộc họp sẽ bắt đầu từ 2 giờ chiều.','会議は午後二時_____始めます。','から',2,'Giờ bắt đầu của lịch họp đi với から.'),
  ('～と～',1,'exam','机の上に本と辞書があります。','Trên bàn có sách và từ điển.','机の上に本_____辞書があります。','と',1,'と nối đầy đủ hai danh từ.'),
  ('～と～',3,'business','部長と担当者にメールを送りました。','Tôi đã gửi email cho trưởng phòng và người phụ trách.','部長_____担当者にメールを送りました。','と',2,'と nối hai người nhận cùng vai trò.'),
  ('～まで',1,'exam','駅までバスで十五分かかります。','Đi xe buýt đến ga mất 15 phút.','駅_____バスで十五分かかります。','まで',1,'まで đánh dấu điểm đến hoặc giới hạn.'),
  ('～まで',3,'business','受付は午後五時までです。','Quầy tiếp nhận làm việc đến 5 giờ chiều.','受付は午後五時_____です。','まで',2,'Thời điểm kết thúc đi với まで.'),
  ('一昨日',1,'exam','一昨日、図書館でこの本を借りました。','Hôm kia tôi mượn cuốn sách này ở thư viện.','_____、図書館でこの本を借りました。','一昨日',1,'一昨日 thường đứng đầu câu không cần に.'),
  ('一昨日',3,'business','一昨日送ったメールを確認してください。','Vui lòng kiểm tra email tôi gửi hôm kia.','_____送ったメールを確認してください。','一昨日',2,'Từ chỉ ngày bổ nghĩa trực tiếp cho hành động.'),
  ('今夜',1,'exam','今夜は雨が降るでしょう。','Đêm nay có lẽ trời sẽ mưa.','_____は雨が降るでしょう。','今夜',2,'でしょう diễn tả dự đoán.'),
  ('今夜',3,'business','今夜、システムの点検を行います。','Đêm nay sẽ tiến hành kiểm tra hệ thống.','_____、システムの点検を行います。','今夜',2,'行います là cách trang trọng của します.'),
  ('今日',1,'exam','今日は昨日より暖かいです。','Hôm nay ấm hơn hôm qua.','_____は昨日より暖かいです。','今日',1,'より đánh dấu mốc so sánh.'),
  ('今日',3,'business','今日中に回答をお願いします。','Vui lòng phản hồi trong hôm nay.','_____中に回答をお願いします。','今日',2,'今日中に là trong ngày hôm nay.'),
  ('今晩',1,'exam','今晩、家で日本語を復習します。','Tối nay tôi ôn tiếng Nhật ở nhà.','_____、家で日本語を復習します。','今晩',1,'今晩 chỉ buổi tối hôm nay.'),
  ('今晩',3,'business','今晩の会食は七時からです。','Bữa ăn công việc tối nay bắt đầu từ 7 giờ.','_____の会食は七時からです。','今晩',2,'今晩の + danh từ chỉ sự kiện tối nay.'),
  ('今朝',1,'exam','今朝、駅で先生に会いました。','Sáng nay tôi gặp giáo viên ở ga.','_____、駅で先生に会いました。','今朝',1,'今朝 thường không đi với に.'),
  ('今朝',3,'business','今朝届いた部品を検品しました。','Tôi đã kiểm tra linh kiện được giao sáng nay.','_____届いた部品を検品しました。','今朝',2,'今朝 bổ nghĩa cho 届いた.'),
  ('休み',1,'exam','夏休みに北海道へ旅行しました。','Kỳ nghỉ hè tôi đã đi du lịch Hokkaido.','夏_____に北海道へ旅行しました。','休み',1,'Danh từ ghép 夏休み là kỳ nghỉ hè.'),
  ('休み',3,'business','来週、私用で一日休みを取ります。','Tuần sau tôi xin nghỉ một ngày vì việc riêng.','来週、私用で一日_____を取ります。','休み',2,'休みを取る là xin/nghỉ phép.'),
  ('休む',1,'exam','熱があるので、学校を休みました。','Vì bị sốt nên tôi đã nghỉ học.','熱があるので、学校を_____。','休みました',2,'Nơi/tổ chức nghỉ đi với を; dạng lịch sự quá khứ là 休みました.'),
  ('休む',3,'business','体調が悪い場合は、無理をせず休んでください。','Nếu sức khỏe không tốt, đừng cố và hãy nghỉ.','体調が悪い場合は、無理をせず_____ください。','休んで',2,'休む đổi sang thể て là 休んで.'),
  ('会議',1,'exam','会議の前に資料を読みました。','Tôi đã đọc tài liệu trước cuộc họp.','_____の前に資料を読みました。','会議',1,'Nの前に diễn tả trước sự kiện.'),
  ('会議',3,'business','午後の会議で新しい計画を説明します。','Tôi sẽ giải thích kế hoạch mới trong cuộc họp chiều.','午後の_____で新しい計画を説明します。','会議',2,'Nơi/sự kiện diễn ra hành động đi với で.'),
  ('何分',1,'exam','ここから駅まで何分かかりますか。','Từ đây đến ga mất bao nhiêu phút?','ここから駅まで_____かかりますか。','何分',1,'何分 + かかりますか hỏi thời lượng.'),
  ('何分',3,'business','作業には何分ぐらい必要ですか。','Công việc cần khoảng bao nhiêu phút?','作業には_____ぐらい必要ですか。','何分',2,'ぐらい dùng hỏi thời lượng ước chừng.'),
  ('何時',1,'exam','毎朝何時に家を出ますか。','Mỗi sáng bạn ra khỏi nhà lúc mấy giờ?','毎朝_____に家を出ますか。','何時',1,'Giờ thực hiện hành động đi với に.'),
  ('何時',3,'business','明日の打ち合わせは何時に始めますか。','Buổi trao đổi ngày mai bắt đầu lúc mấy giờ?','明日の打ち合わせは_____に始めますか。','何時',2,'何時に hỏi thời điểm bắt đầu.'),
  ('働く',1,'exam','父は銀行で働いています。','Bố tôi làm việc ở ngân hàng.','父は銀行で_____います。','働いて',1,'Nơi làm việc đi với で; 働く → 働いて.'),
  ('働く',3,'business','安全に働くために、手順を守ってください。','Để làm việc an toàn, vui lòng tuân thủ quy trình.','安全に_____ために、手順を守ってください。','働く',2,'Vるために diễn tả mục đích.'),
  ('勉強する',1,'exam','日本へ行く前に、日本語を勉強しました。','Trước khi đi Nhật, tôi đã học tiếng Nhật.','日本へ行く前に、日本語を_____。','勉強しました',2,'Đối tượng học đi với を.'),
  ('勉強する',3,'business','研修で品質管理について勉強します。','Trong khóa đào tạo, tôi học về quản lý chất lượng.','研修で品質管理について_____。','勉強します',2,'Nについて勉強する là học về chủ đề N.'),
  ('夜',1,'exam','夜は静かに本を読みます。','Ban đêm tôi yên lặng đọc sách.','_____は静かに本を読みます。','夜',1,'夜は nêu thói quen vào ban đêm.'),
  ('夜',3,'business','夜の作業では安全確認が特に大切です。','Trong công việc ban đêm, kiểm tra an toàn đặc biệt quan trọng.','_____の作業では安全確認が特に大切です。','夜',3,'夜の作業 chỉ ca/công việc ban đêm.'),
  ('寝る',1,'exam','昨日は十一時に寝ました。','Hôm qua tôi ngủ lúc 11 giờ.','昨日は十一時に_____。','寝ました',1,'Giờ đi ngủ đi với に.'),
  ('寝る',3,'business','明日の出張に備えて、今日は早く寝ます。','Để chuẩn bị cho chuyến công tác ngày mai, hôm nay tôi ngủ sớm.','明日の出張に備えて、今日は早く_____。','寝ます',2,'Nに備えて là chuẩn bị cho N.'),
  ('明後日',1,'exam','明後日、友達が日本へ来ます。','Ngày kia bạn tôi sẽ đến Nhật.','_____、友達が日本へ来ます。','明後日',1,'明後日 thường không cần trợ từ に.'),
  ('明後日',3,'business','明後日までに見積書をお送りします。','Tôi sẽ gửi báo giá trước ngày kia.','_____までに見積書をお送りします。','明後日',2,'までに nêu hạn cuối; お送りします là cách khiêm nhường.'),
  ('明日',1,'exam','明日は朝から雨が降るそうです。','Nghe nói ngày mai trời mưa từ sáng.','_____は朝から雨が降るそうです。','明日',2,'そうです truyền đạt thông tin nghe được.'),
  ('明日',3,'business','明日の午後、工場を見学します。','Chiều mai tôi sẽ tham quan nhà máy.','_____の午後、工場を見学します。','明日',2,'明日の午後 chỉ buổi chiều ngày mai.'),
  ('昨日',1,'exam','昨日買った本はとても面白いです。','Cuốn sách mua hôm qua rất thú vị.','_____買った本はとても面白いです。','昨日',2,'Mệnh đề trước danh từ bổ nghĩa cho 本.'),
  ('昨日',3,'business','昨日の会議の議事録を共有しました。','Tôi đã chia sẻ biên bản cuộc họp hôm qua.','_____の会議の議事録を共有しました。','昨日',2,'昨日の + danh từ chỉ sự kiện hôm qua.'),
  ('昼休み',1,'exam','昼休みに友達と食堂へ行きました。','Giờ nghỉ trưa tôi đi nhà ăn với bạn.','_____に友達と食堂へ行きました。','昼休み',1,'Khoảng thời gian thực hiện hành động đi với に.'),
  ('昼休み',3,'business','昼休みは十二時から一時までです。','Giờ nghỉ trưa từ 12 giờ đến 1 giờ.','_____は十二時から一時までです。','昼休み',1,'から～まで diễn tả khoảng thời gian.'),
  ('晩',1,'exam','晩ご飯の後で宿題をします。','Sau bữa tối tôi làm bài tập.','_____ご飯の後で宿題をします。','晩',1,'晩ご飯 là bữa tối; Nの後で là sau N.'),
  ('晩',3,'business','その日の晩に作業結果をまとめました。','Tối hôm đó tôi đã tổng hợp kết quả công việc.','その日の_____に作業結果をまとめました。','晩',2,'その日の晩 chỉ buổi tối của ngày đã nhắc.'),
  ('毎日',1,'exam','健康のために毎日三十分歩いています。','Vì sức khỏe, mỗi ngày tôi đi bộ 30 phút.','健康のために_____三十分歩いています。','毎日',1,'毎日 không cần trợ từ に.'),
  ('毎日',3,'business','設備の温度を毎日記録してください。','Vui lòng ghi lại nhiệt độ thiết bị mỗi ngày.','設備の温度を_____記録してください。','毎日',2,'毎日 bổ nghĩa trực tiếp cho hành động lặp lại.'),
  ('毎晩',1,'exam','母は毎晩ニュースを見ます。','Mẹ tôi xem tin tức mỗi tối.','母は_____ニュースを見ます。','毎晩',1,'毎晩 không cần に khi nói thói quen.'),
  ('毎晩',3,'business','夜間運転のデータを毎晩確認します。','Mỗi tối tôi kiểm tra dữ liệu vận hành ban đêm.','夜間運転のデータを_____確認します。','毎晩',2,'Dùng để nói công việc lặp lại hằng tối.'),
  ('毎朝',1,'exam','私は毎朝六時に起きます。','Tôi thức dậy lúc 6 giờ mỗi sáng.','私は_____六時に起きます。','毎朝',1,'毎朝 không cần に.'),
  ('毎朝',3,'business','毎朝、チームで作業予定を確認します。','Mỗi sáng cả nhóm xác nhận kế hoạch công việc.','_____、チームで作業予定を確認します。','毎朝',2,'Dùng cho hoạt động định kỳ mỗi sáng.'),
  ('終わる',1,'exam','授業は午後四時に終わります。','Tiết học kết thúc lúc 4 giờ chiều.','授業は午後四時に_____。','終わります',1,'終わる là tự động từ; sự việc đi với は/が.'),
  ('終わる',3,'business','点検が終わったら、結果を報告してください。','Khi kiểm tra xong, vui lòng báo cáo kết quả.','点検が_____、結果を報告してください。','終わったら',2,'Vたら diễn tả sau khi điều kiện hoàn thành.'),
  ('試験',1,'exam','来週、日本語の試験を受けます。','Tuần sau tôi sẽ thi tiếng Nhật.','来週、日本語の_____を受けます。','試験',1,'試験を受ける là dự thi.'),
  ('試験',3,'business','採用試験の結果はメールで連絡します。','Kết quả kỳ thi tuyển dụng sẽ được thông báo qua email.','採用_____の結果はメールで連絡します。','試験',2,'採用試験 là kỳ thi tuyển dụng.'),
  ('起きる',1,'exam','旅行の日は朝五時に起きました。','Ngày đi du lịch tôi thức dậy lúc 5 giờ sáng.','旅行の日は朝五時に_____。','起きました',1,'起きる là động từ nhóm 2; quá khứ lịch sự 起きました.'),
  ('起きる',3,'business','問題が起きた場合は、すぐ上司に報告してください。','Nếu xảy ra vấn đề, hãy báo ngay cho cấp trên.','問題が_____場合は、すぐ上司に報告してください。','起きた',3,'問題が起きる nghĩa là vấn đề xảy ra.' )
)
insert into public.jp_vocab_examples
 (vocab_id,example_no,example_type,example_jp,example_vi,cloze_jp,answer,difficulty,focus_note,source_type)
select v.id,c.example_no,c.example_type,c.example_jp,c.example_vi,c.cloze_jp,c.answer,c.difficulty,c.focus_note,'generated'
from curated c join public.jp_vocab v on v.level='N5' and v.lesson_no=5 and v.word_jp=c.word_jp
on conflict (vocab_id,example_no) do update set
 example_type=excluded.example_type,example_jp=excluded.example_jp,example_vi=excluded.example_vi,
 cloze_jp=excluded.cloze_jp,answer=excluded.answer,difficulty=excluded.difficulty,
 focus_note=excluded.focus_note,source_type=excluded.source_type;

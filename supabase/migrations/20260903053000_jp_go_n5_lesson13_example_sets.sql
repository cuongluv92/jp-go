-- Hoàn thiện bộ 3 ngữ cảnh cho N5 bài 13 (26 mục).
update public.jp_vocab set
 word_class=case when word_jp in ('買い物する','結婚する','[公園を～]散歩する') then '動名詞'
  when word_jp in ('迎える','[喫茶店を～]出る','[喫茶店に～]入る','遊ぶ','[手紙を～]出す','泳ぐ') then '動詞'
  when word_jp in ('眠い','寂しい','欲しい') then 'い形容詞'
  when word_jp in ('なにか','どこか','また') then '副詞' else '名詞' end,
 dictionary_form=case when word_jp='[公園を～]散歩する' then '散歩する' when word_jp='[喫茶店を～]出る' then '出る'
  when word_jp='[喫茶店に～]入る' then '入る' when word_jp='[手紙を～]出す' then '出す' else word_jp end
where level='N5' and lesson_no=13;

with curated(word_jp,example_no,example_jp,example_vi,cloze_jp,answer) as (values
 ('買い物する',1,'母と駅前で買い物してから帰りました。','Tôi mua sắm cùng mẹ trước ga rồi về nhà.','母と駅前で_____から帰りました。','買い物して'),
 ('買い物する',3,'出張に必要な物を会社の近くで買い物します。','Tôi mua đồ cần cho chuyến công tác gần công ty.','出張に必要な物を会社の近くで_____。','買い物します'),
 ('結婚する',1,'姉は大学を卒業してから結婚しました。','Chị tôi kết hôn sau khi tốt nghiệp đại học.','姉は大学を卒業してから_____。','結婚しました'),
 ('結婚する',3,'同僚が来月結婚するので、皆でお祝いします。','Đồng nghiệp kết hôn tháng sau nên mọi người sẽ chúc mừng.','同僚が来月_____ので、皆でお祝いします。','結婚する'),
 ('[公園を～]散歩する',1,'天気がよかったので、犬と公園を散歩しました。','Vì trời đẹp nên tôi đi dạo công viên cùng chó.','天気がよかったので、犬と公園を_____。','散歩しました'),
 ('[公園を～]散歩する',3,'昼休みに会社の近くの公園を散歩します。','Giờ nghỉ trưa tôi đi dạo công viên gần công ty.','昼休みに会社の近くの公園を_____。','散歩します'),
 ('牛丼',1,'時間がなかったので、駅前で牛丼を食べました。','Vì không có thời gian nên tôi ăn cơm bò trước ga.','時間がなかったので、駅前で_____を食べました。','牛丼'),
 ('牛丼',3,'残業する社員のために牛丼を注文しました。','Tôi đặt cơm bò cho nhân viên làm thêm.','残業する社員のために_____を注文しました。','牛丼'),
 ('つり',1,'父に教えてもらって、初めて海でつりをしました。','Được bố dạy, tôi lần đầu câu cá ở biển.','父に教えてもらって、初めて海で_____をしました。','つり'),
 ('つり',3,'会社の交流会でつり大会を開きました。','Công ty tổ chức cuộc thi câu cá trong buổi giao lưu.','会社の交流会で_____大会を開きました。','つり'),
 ('プール',1,'夏休みには毎朝プールで泳ぎました。','Nghỉ hè sáng nào tôi cũng bơi ở bể bơi.','夏休みには毎朝_____で泳ぎました。','プール'),
 ('プール',3,'社員が利用できるプールの案内を配りました。','Tôi phát hướng dẫn về bể bơi nhân viên có thể sử dụng.','社員が利用できる_____の案内を配りました。','プール'),
 ('市役所',1,'引っ越したので、市役所で住所を変更しました。','Vì chuyển nhà nên tôi đổi địa chỉ tại tòa thị chính.','引っ越したので、_____で住所を変更しました。','市役所'),
 ('市役所',3,'申請書を市役所へ提出してきました。','Tôi đã nộp đơn tại tòa thị chính.','申請書を_____へ提出してきました。','市役所'),
 ('なにか',1,'冷蔵庫になにか食べる物がありますか。','Trong tủ lạnh có gì ăn không?','冷蔵庫に_____食べる物がありますか。','なにか'),
 ('なにか',3,'資料になにか問題があれば知らせてください。','Nếu tài liệu có vấn đề gì hãy báo tôi.','資料に_____問題があれば知らせてください。','なにか'),
 ('迎える',1,'留学から帰る姉を家族で空港へ迎えに行きます。','Gia đình tôi ra sân bay đón chị về từ du học.','留学から帰る姉を家族で空港へ_____に行きます。','迎え'),
 ('迎える',3,'海外のお客様を受付で迎えました。','Tôi đón khách nước ngoài tại lễ tân.','海外のお客様を受付で_____。','迎えました'),
 ('スキー',1,'雪がたくさん降ったので、週末にスキーへ行きます。','Tuyết rơi nhiều nên cuối tuần tôi đi trượt tuyết.','雪がたくさん降ったので、週末に_____へ行きます。','スキー'),
 ('スキー',3,'社員旅行で利用するスキー場を予約しました。','Tôi đặt khu trượt tuyết cho chuyến du lịch công ty.','社員旅行で利用する_____場を予約しました。','スキー'),
 ('経済',1,'新聞を読んで、日本の経済について学びます。','Tôi đọc báo và học về kinh tế Nhật.','新聞を読んで、日本の_____について学びます。','経済'),
 ('経済',3,'会議で世界経済の変化について説明しました。','Tôi giải thích biến động kinh tế thế giới trong cuộc họp.','会議で世界_____の変化について説明しました。','経済'),
 ('また',1,'この本を読み終わったら、また図書館で借ります。','Đọc xong cuốn này tôi sẽ lại mượn ở thư viện.','この本を読み終わったら、_____図書館で借ります。','また'),
 ('また',3,'内容を確認して、また明日ご連絡します。','Tôi kiểm tra nội dung rồi ngày mai liên hệ lại.','内容を確認して、_____明日ご連絡します。','また'),
 ('眠い',1,'昨夜遅くまで勉強したので、とても眠いです。','Tối qua học khuya nên tôi rất buồn ngủ.','昨夜遅くまで勉強したので、とても_____です。','眠い'),
 ('眠い',3,'眠いときは機械を操作しないでください。','Khi buồn ngủ không được vận hành máy.','_____ときは機械を操作しないでください。','眠い'),
 ('[喫茶店を～]出る',1,'雨がやんだので、喫茶店を出ました。','Mưa tạnh nên tôi ra khỏi quán cà phê.','雨がやんだので、喫茶店を_____。','出ました'),
 ('[喫茶店を～]出る',3,'次の訪問に間に合うよう、会社を早く出ます。','Tôi rời công ty sớm để kịp chuyến thăm tiếp theo.','次の訪問に間に合うよう、会社を早く_____。','出ます'),
 ('刺身',1,'新鮮な魚が買えたので、家で刺身を作りました。','Mua được cá tươi nên tôi làm sashimi ở nhà.','新鮮な魚が買えたので、家で_____を作りました。','刺身'),
 ('刺身',3,'会食の店に刺身が苦手な方がいると伝えました。','Tôi báo nhà hàng rằng có người không ăn được sashimi.','会食の店に_____が苦手な方がいると伝えました。','刺身'),
 ('どこか',1,'休みの日に家族とどこか静かな所へ行きたいです。','Ngày nghỉ tôi muốn cùng gia đình đi nơi nào yên tĩnh.','休みの日に家族と_____静かな所へ行きたいです。','どこか'),
 ('どこか',3,'資料のどこかに間違いがないか確認します。','Tôi kiểm tra xem tài liệu có sai ở đâu không.','資料の_____に間違いがないか確認します。','どこか'),
 ('[喫茶店に～]入る',1,'雨が降ってきたので、近くの喫茶店に入りました。','Trời bắt đầu mưa nên tôi vào quán cà phê gần đó.','雨が降ってきたので、近くの喫茶店に_____。','入りました'),
 ('[喫茶店に～]入る',3,'工場に入る前に、安全帽をかぶってください。','Hãy đội mũ bảo hộ trước khi vào nhà máy.','工場に_____前に、安全帽をかぶってください。','入る'),
 ('遊ぶ',1,'宿題が終わってから、友達と外で遊びました。','Làm xong bài tập tôi chơi ngoài trời cùng bạn.','宿題が終わってから、友達と外で_____。','遊びました'),
 ('遊ぶ',3,'休憩室では遊ばず、次の作業を準備してください。','Trong phòng nghỉ không đùa nghịch, hãy chuẩn bị công việc tiếp theo.','休憩室では_____、次の作業を準備してください。','遊ばず'),
 ('校長',1,'入学式で校長が新入生に話をしました。','Hiệu trưởng nói chuyện với học sinh mới tại lễ nhập học.','入学式で_____が新入生に話をしました。','校長'),
 ('校長',3,'地域の学校の校長が工場見学に来られました。','Hiệu trưởng trường địa phương tới tham quan nhà máy.','地域の学校の_____が工場見学に来られました。','校長'),
 ('寂しい',1,'友達が国へ帰ってしまい、寂しくなりました。','Bạn về nước nên tôi thấy buồn.','友達が国へ帰ってしまい、_____なりました。','寂しく'),
 ('寂しい',3,'送別会が終わると少し寂しい気持ちになりました。','Khi tiệc chia tay kết thúc tôi thấy hơi buồn.','送別会が終わると少し_____気持ちになりました。','寂しい'),
 ('美術',1,'妹は絵が好きで、大学で美術を学んでいます。','Em gái thích vẽ và học mỹ thuật ở đại học.','妹は絵が好きで、大学で_____を学んでいます。','美術'),
 ('美術',3,'会社の受付に地元の美術作品を展示しました。','Công ty trưng bày tác phẩm mỹ thuật địa phương ở lễ tân.','会社の受付に地元の_____作品を展示しました。','美術'),
 ('川',1,'大雨の後は川に近づかないでください。','Sau mưa lớn không được đến gần sông.','大雨の後は_____に近づかないでください。','川'),
 ('川',3,'工場の近くの川で水質調査を行いました。','Chúng tôi khảo sát chất lượng nước sông gần nhà máy.','工場の近くの_____で水質調査を行いました。','川'),
 ('[手紙を～]出す',1,'祖母の誕生日に手紙を出しました。','Tôi gửi thư vào sinh nhật bà.','祖母の誕生日に手紙を_____。','出しました'),
 ('[手紙を～]出す',3,'本日中にお客様へ案内状を出します。','Hôm nay tôi gửi thư hướng dẫn cho khách.','本日中にお客様へ案内状を_____。','出します'),
 ('牛乳',1,'毎朝、パンと一緒に牛乳を飲んでいます。','Mỗi sáng tôi uống sữa cùng bánh mì.','毎朝、パンと一緒に_____を飲んでいます。','牛乳'),
 ('牛乳',3,'社員食堂で使う牛乳を毎朝受け取ります。','Mỗi sáng chúng tôi nhận sữa dùng tại nhà ăn nhân viên.','社員食堂で使う_____を毎朝受け取ります。','牛乳'),
 ('泳ぐ',1,'海で泳げるように、毎週練習しています。','Tôi luyện mỗi tuần để có thể bơi ở biển.','海で_____ように、毎週練習しています。','泳げる'),
 ('泳ぐ',3,'安全のため、許可のない場所では泳がないでください。','Vì an toàn, không bơi ở nơi chưa được phép.','安全のため、許可のない場所では_____でください。','泳がない'),
 ('欲しい',1,'誕生日には新しい辞書が欲しいです。','Sinh nhật tôi muốn một cuốn từ điển mới.','誕生日には新しい辞書が_____です。','欲しい'),
 ('欲しい',3,'作業を早くするため、もう一台パソコンが欲しいです。','Để làm việc nhanh hơn, tôi muốn thêm một máy tính.','作業を早くするため、もう一台パソコンが_____です。','欲しい')
)
insert into public.jp_vocab_examples(vocab_id,example_no,example_type,example_jp,example_vi,cloze_jp,answer,difficulty,focus_note,source_type)
select v.id,c.example_no,case c.example_no when 1 then 'exam' else 'business' end,c.example_jp,c.example_vi,c.cloze_jp,c.answer,
 case c.example_no when 1 then 1 else 2 end,case c.example_no when 1 then 'Ngữ cảnh JLPT và cấu trúc cơ bản.' else 'Cách dùng thực tế trong công việc.' end,'generated'
from curated c join public.jp_vocab v on v.level='N5' and v.lesson_no=13 and v.word_jp=c.word_jp
on conflict(vocab_id,example_no) do update set example_type=excluded.example_type,example_jp=excluded.example_jp,example_vi=excluded.example_vi,
 cloze_jp=excluded.cloze_jp,answer=excluded.answer,difficulty=excluded.difficulty,focus_note=excluded.focus_note,source_type=excluded.source_type;

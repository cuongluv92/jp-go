-- Hoàn thiện bộ 3 ngữ cảnh cho N5 bài 10 (32 mục).

with classifications(word_jp,word_class,dictionary_form) as (values
 ('上','名詞','上'),('地下','名詞','地下'),('池','名詞','池'),('下','名詞','下'),('犬','名詞','犬'),('後ろ','名詞','後ろ'),
 ('近く','名詞','近く'),('公園','名詞','公園'),('有る','動詞','有る'),('男の人','名詞','男の人'),('テーブル','名詞','テーブル'),
 ('猫','名詞','猫'),('左','名詞','左'),('～や～など','助詞','や～など'),('色々','な形容詞','色々'),('木','名詞','木'),
 ('～や','名詞','屋'),('男の子','名詞','男の子'),('物','名詞','物'),('中','名詞','中'),('外','名詞','外'),('居る','動詞','居る'),
 ('冷蔵庫','名詞','冷蔵庫'),('隣','名詞','隣'),('右','名詞','右'),('箱','名詞','箱'),('間','名詞','間'),('前','名詞','前'),
 ('ベッド','名詞','ベッド'),('本屋','名詞','本屋'),('女の子','名詞','女の子'),('女の人','名詞','女の人')
)
update public.jp_vocab v set word_class=c.word_class,dictionary_form=c.dictionary_form
from classifications c where v.level='N5' and v.lesson_no=10 and v.word_jp=c.word_jp;

with fixes(word_jp,example_jp,example_vi,cloze_jp,answer) as (values
 ('有る','この町には古いお寺があります。','Thị trấn này có một ngôi chùa cổ.','この町には古いお寺が_____。','あります')
)
update public.jp_vocab_examples e set example_jp=f.example_jp,example_vi=f.example_vi,cloze_jp=f.cloze_jp,answer=f.answer,difficulty=1
from fixes f join public.jp_vocab v on v.level='N5' and v.lesson_no=10 and v.word_jp=f.word_jp
where e.vocab_id=v.id and e.example_no=2;

with curated(word_jp,example_no,example_jp,example_vi,cloze_jp,answer) as (values
 ('上',1,'棚の上に置いた辞書を取ってください。','Hãy lấy cuốn từ điển đặt trên kệ.','棚の_____に置いた辞書を取ってください。','上'),
 ('上',3,'机の上には個人情報を置かないでください。','Không để thông tin cá nhân trên bàn.','机の_____には個人情報を置かないでください。','上'),
 ('地下',1,'雨の日は地下を通って駅まで行けます。','Ngày mưa có thể đi dưới hầm tới ga.','雨の日は_____を通って駅まで行けます。','地下'),
 ('地下',3,'資料は本社の地下倉庫に保管されています。','Tài liệu được cất trong kho tầng hầm trụ sở.','資料は本社の_____倉庫に保管されています。','地下'),
 ('池',1,'公園の池で子どもたちが魚を見ています。','Bọn trẻ đang xem cá ở hồ công viên.','公園の_____で子どもたちが魚を見ています。','池'),
 ('池',3,'工場の近くの池から水を採取して調べました。','Chúng tôi lấy nước từ hồ gần nhà máy để kiểm tra.','工場の近くの_____から水を採取して調べました。','池'),
 ('下',1,'橋の下を小さな船が通っていきました。','Một chiếc thuyền nhỏ đi qua dưới cầu.','橋の_____を小さな船が通っていきました。','下'),
 ('下',3,'非常口の下に荷物を置かないでください。','Không đặt hành lý phía dưới cửa thoát hiểm.','非常口の_____に荷物を置かないでください。','下'),
 ('犬',1,'道で見つけた犬の飼い主を探しています。','Chúng tôi đang tìm chủ của con chó thấy trên đường.','道で見つけた_____の飼い主を探しています。','犬'),
 ('犬',3,'盲導犬を連れたお客様をご案内しました。','Tôi đã hướng dẫn khách đi cùng chó dẫn đường.','盲導_____を連れたお客様をご案内しました。','犬'),
 ('後ろ',1,'写真を撮るので、背の高い人は後ろに立ってください。','Vì chụp ảnh, người cao hãy đứng phía sau.','写真を撮るので、背の高い人は_____に立ってください。','後ろ'),
 ('後ろ',3,'契約書の後ろに参考資料を付けました。','Tôi đính kèm tài liệu tham khảo phía sau hợp đồng.','契約書の_____に参考資料を付けました。','後ろ'),
 ('近く',1,'学校の近くに新しい図書館ができました。','Một thư viện mới đã mở gần trường.','学校の_____に新しい図書館ができました。','近く'),
 ('近く',3,'出張先の近くで利用できるホテルを探します。','Tôi tìm khách sạn có thể dùng gần nơi công tác.','出張先の_____で利用できるホテルを探します。','近く'),
 ('公園',1,'天気がよかったので、公園で昼ご飯を食べました。','Vì trời đẹp nên tôi ăn trưa ở công viên.','天気がよかったので、_____で昼ご飯を食べました。','公園'),
 ('公園',3,'会社の近くの公園で清掃活動を行いました。','Chúng tôi tổ chức dọn vệ sinh tại công viên gần công ty.','会社の近くの_____で清掃活動を行いました。','公園'),
 ('有る',1,'駅の反対側に銀行が有ると聞きました。','Tôi nghe nói phía đối diện ga có ngân hàng.','駅の反対側に銀行が_____と聞きました。','有る'),
 ('有る',3,'会議室に空きが有るか確認してください。','Hãy kiểm tra xem còn phòng họp trống không.','会議室に空きが_____か確認してください。','有る'),
 ('男の人',1,'入口に立っている男の人は新しい先生です。','Người đàn ông đứng ở cửa vào là giáo viên mới.','入口に立っている_____は新しい先生です。','男の人'),
 ('男の人',3,'青い制服の男の人が担当者です。','Người đàn ông mặc đồng phục xanh là người phụ trách.','青い制服の_____が担当者です。','男の人'),
 ('テーブル',1,'窓のそばのテーブルで一緒に食べませんか。','Chúng ta cùng ăn ở bàn gần cửa sổ nhé?','窓のそばの_____で一緒に食べませんか。','テーブル'),
 ('テーブル',3,'会議用のテーブルを円形に並べました。','Tôi xếp bàn họp thành hình tròn.','会議用の_____を円形に並べました。','テーブル'),
 ('猫',1,'屋根の上で寝ている猫を見つけました。','Tôi nhìn thấy con mèo đang ngủ trên mái.','屋根の上で寝ている_____を見つけました。','猫'),
 ('猫',3,'事務所の前に迷子の猫がいたので保護しました。','Có mèo lạc trước văn phòng nên chúng tôi đã giữ an toàn.','事務所の前に迷子の_____がいたので保護しました。','猫'),
 ('左',1,'二つ目の角を左に曲がると、病院があります。','Rẽ trái ở góc thứ hai sẽ thấy bệnh viện.','二つ目の角を_____に曲がると、病院があります。','左'),
 ('左',3,'受付はエレベーターを降りて左にございます。','Quầy lễ tân ở bên trái khi ra khỏi thang máy.','受付はエレベーターを降りて_____にございます。','左'),
 ('～や～など',1,'旅行には服や薬などを持っていきます。','Khi du lịch tôi mang quần áo, thuốc và những thứ khác.','旅行には服_____を持っていきます。','や薬など'),
 ('～や～など',3,'申請には身分証明書や印鑑などが必要です。','Đăng ký cần giấy tờ tùy thân, con dấu và những thứ khác.','申請には身分証明書_____が必要です。','や印鑑など'),
 ('色々',1,'留学して、色々な国の友達ができました。','Đi du học, tôi kết bạn với nhiều nước.','留学して、_____な国の友達ができました。','色々'),
 ('色々',3,'問題について色々な立場から検討しました。','Chúng tôi xem xét vấn đề từ nhiều góc độ.','問題について_____な立場から検討しました。','色々'),
 ('木',1,'庭に植えた木が、今年初めて花を咲かせました。','Cây trồng trong vườn năm nay lần đầu ra hoa.','庭に植えた_____が、今年初めて花を咲かせました。','木'),
 ('木',3,'この机は地域で育った木から作られています。','Chiếc bàn này làm từ gỗ trồng trong vùng.','この机は地域で育った_____から作られています。','木'),
 ('～や',1,'駅前の花屋で母への花を選びました。','Tôi chọn hoa tặng mẹ ở tiệm hoa trước ga.','駅前の花_____で母への花を選びました。','屋'),
 ('～や',3,'会社の近くの弁当屋へ注文しました。','Tôi đặt hàng ở tiệm cơm hộp gần công ty.','会社の近くの弁当_____へ注文しました。','屋'),
 ('男の子',1,'公園で泣いていた男の子を交番へ連れていきました。','Tôi đưa cậu bé khóc ở công viên tới đồn cảnh sát.','公園で泣いていた_____を交番へ連れていきました。','男の子'),
 ('男の子',3,'見学に来た男の子に工場の仕事を説明しました。','Tôi giải thích công việc nhà máy cho cậu bé tới tham quan.','見学に来た_____に工場の仕事を説明しました。','男の子'),
 ('物',1,'旅行に必要な物を前の日に準備しました。','Tôi chuẩn bị những thứ cần cho chuyến đi từ hôm trước.','旅行に必要な_____を前の日に準備しました。','物'),
 ('物',3,'通路には物を置かないようにしてください。','Vui lòng không để đồ vật ở lối đi.','通路には_____を置かないようにしてください。','物'),
 ('中',1,'雨が降ってきたので、建物の中に入りました。','Trời bắt đầu mưa nên tôi vào trong tòa nhà.','雨が降ってきたので、建物の_____に入りました。','中'),
 ('中',3,'箱の中の商品数をもう一度確認します。','Tôi kiểm tra lại số sản phẩm trong hộp.','箱の_____の商品数をもう一度確認します。','中'),
 ('外',1,'授業中は教室の外へ出ないでください。','Trong giờ học không ra ngoài lớp.','授業中は教室の_____へ出ないでください。','外'),
 ('外',3,'営業時間外の電話は警備室につながります。','Cuộc gọi ngoài giờ làm việc sẽ nối tới phòng bảo vệ.','営業時間_____の電話は警備室につながります。','外'),
 ('居る',1,'教室に誰も居なかったので、廊下で待ちました。','Không có ai trong lớp nên tôi đợi ở hành lang.','教室に誰も_____ので、廊下で待ちました。','居なかった'),
 ('居る',3,'担当者が事務所に居るか確認します。','Tôi kiểm tra người phụ trách có ở văn phòng không.','担当者が事務所に_____か確認します。','居る'),
 ('冷蔵庫',1,'残った料理は冷蔵庫に入れておきましょう。','Hãy cất món còn lại vào tủ lạnh.','残った料理は_____に入れておきましょう。','冷蔵庫'),
 ('冷蔵庫',3,'休憩室の冷蔵庫には名前を書いて入れてください。','Hãy ghi tên trước khi bỏ đồ vào tủ lạnh phòng nghỉ.','休憩室の_____には名前を書いて入れてください。','冷蔵庫'),
 ('隣',1,'図書館の隣にある喫茶店で友達を待ちました。','Tôi đợi bạn ở quán cà phê bên cạnh thư viện.','図書館の_____にある喫茶店で友達を待ちました。','隣'),
 ('隣',3,'隣の部署と協力して新しい企画を進めます。','Chúng tôi phối hợp bộ phận bên cạnh triển khai dự án mới.','_____の部署と協力して新しい企画を進めます。','隣'),
 ('右',1,'信号を右に曲がれば、駅が見えます。','Rẽ phải ở đèn giao thông sẽ thấy ga.','信号を_____に曲がれば、駅が見えます。','右'),
 ('右',3,'資料の右上に日付を記入してください。','Hãy điền ngày ở góc trên bên phải tài liệu.','資料の_____上に日付を記入してください。','右'),
 ('箱',1,'届いた箱を開ける前に、名前を確認しました。','Tôi kiểm tra tên trước khi mở hộp được giao.','届いた_____を開ける前に、名前を確認しました。','箱'),
 ('箱',3,'壊れやすい部品は丈夫な箱に入れて送ります。','Linh kiện dễ vỡ được gửi trong hộp chắc chắn.','壊れやすい部品は丈夫な_____に入れて送ります。','箱'),
 ('間',1,'夏休みの間、祖父母の家に泊まりました。','Trong kỳ nghỉ hè, tôi ở nhà ông bà.','夏休みの_____、祖父母の家に泊まりました。','間'),
 ('間',3,'会議の間は携帯電話を使わないでください。','Không dùng điện thoại trong cuộc họp.','会議の_____は携帯電話を使わないでください。','間'),
 ('前',1,'寝る前に、明日の予定を確認します。','Trước khi ngủ tôi kiểm tra lịch ngày mai.','寝る_____に、明日の予定を確認します。','前'),
 ('前',3,'面接の前に必要な書類をそろえてください。','Hãy chuẩn bị đủ giấy tờ trước phỏng vấn.','面接の_____に必要な書類をそろえてください。','前'),
 ('ベッド',1,'疲れていたので、服のままベッドで寝てしまいました。','Vì mệt nên tôi ngủ quên trên giường khi vẫn mặc quần áo.','疲れていたので、服のまま_____で寝てしまいました。','ベッド'),
 ('ベッド',3,'宿泊施設のベッドに不具合がないか確認しました。','Tôi kiểm tra giường tại nơi lưu trú có vấn đề không.','宿泊施設の_____に不具合がないか確認しました。','ベッド'),
 ('本屋',1,'探している辞書がなかったので、別の本屋へ行きました。','Không có từ điển cần tìm nên tôi sang hiệu sách khác.','探している辞書がなかったので、別の_____へ行きました。','本屋'),
 ('本屋',3,'駅の本屋で仕事に必要な専門書を購入しました。','Tôi mua sách chuyên môn cần cho công việc ở hiệu sách tại ga.','駅の_____で仕事に必要な専門書を購入しました。','本屋'),
 ('女の子',1,'赤い帽子をかぶった女の子が妹です。','Cô bé đội mũ đỏ là em gái tôi.','赤い帽子をかぶった_____が妹です。','女の子'),
 ('女の子',3,'職場見学に来た女の子から質問を受けました。','Tôi nhận câu hỏi từ cô bé tới tham quan nơi làm việc.','職場見学に来た_____から質問を受けました。','女の子'),
 ('女の人',1,'道を教えてくれた女の人にお礼を言いました。','Tôi cảm ơn người phụ nữ đã chỉ đường.','道を教えてくれた_____にお礼を言いました。','女の人'),
 ('女の人',3,'受付にいる女の人が新しい担当者です。','Người phụ nữ ở quầy lễ tân là người phụ trách mới.','受付にいる_____が新しい担当者です。','女の人')
)
insert into public.jp_vocab_examples
 (vocab_id,example_no,example_type,example_jp,example_vi,cloze_jp,answer,difficulty,focus_note,source_type)
select v.id,c.example_no,case c.example_no when 1 then 'exam' else 'business' end,c.example_jp,c.example_vi,c.cloze_jp,c.answer,
 case c.example_no when 1 then 1 else 2 end,case c.example_no when 1 then 'Ngữ cảnh JLPT và cấu trúc cơ bản.' else 'Cách dùng thực tế trong công việc.' end,'generated'
from curated c join public.jp_vocab v on v.level='N5' and v.lesson_no=10 and v.word_jp=c.word_jp
on conflict (vocab_id,example_no) do update set example_type=excluded.example_type,example_jp=excluded.example_jp,
 example_vi=excluded.example_vi,cloze_jp=excluded.cloze_jp,answer=excluded.answer,difficulty=excluded.difficulty,
 focus_note=excluded.focus_note,source_type=excluded.source_type;

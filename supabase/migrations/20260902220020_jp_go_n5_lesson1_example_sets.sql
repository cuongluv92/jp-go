-- Hoàn thiện bộ 3 ngữ cảnh cho toàn bộ 38 mục từ N5 bài 1.
-- Giữ nguyên ví dụ đời thường số 2; chỉ thêm số 1 (dạng thi) và số 3
-- (công việc thực tế). Dữ liệu idempotent để chạy lại không tạo bản sao.

create unique index if not exists uq_jp_vocab_examples_vocab_no
  on public.jp_vocab_examples(vocab_id, example_no);

with curated(word_jp, example_no, example_type, example_jp, example_vi, cloze_jp, answer, difficulty, focus_note, source_type) as (values
  ('～から来ました', 1, 'exam', 'ミラーさんはアメリカから来ました。', 'Anh Miller đến từ Mỹ.', 'ミラーさんはアメリカから_____。', '来ました', 1, 'Nơi xuất phát đi với から; 来ました là dạng quá khứ lịch sự của 来ます.', 'generated'),
  ('～から来ました', 3, 'business', '新しく入ったリーさんは中国から来ました。', 'Anh Lee mới vào công ty đến từ Trung Quốc.', '新しく入ったリーさんは中国から_____。', '来ました', 2, 'Dùng trong phần giới thiệu nhân sự mới; nói quốc gia + から来ました.', 'generated'),

  ('～人', 1, 'exam', 'マリアさんはブラジル人です。', 'Chị Maria là người Brazil.', 'マリアさんはブラジル_____です。', '人', 1, 'Tên nước + 人（じん）chỉ quốc tịch.', 'generated'),
  ('～人', 3, 'business', 'こちらはベトナム人のグエンさんです。', 'Đây là anh Nguyễn, người Việt Nam.', 'こちらはベトナム_____のグエンさんです。', '人', 2, 'Cách giới thiệu đồng nghiệp: quốc tịch + 人 + の + tên.', 'generated'),

  ('～語', 1, 'exam', 'この学校では日本語を勉強します。', 'Ở trường này chúng tôi học tiếng Nhật.', 'この学校では日本_____を勉強します。', '語', 1, 'Tên nước + 語（ご）chỉ ngôn ngữ.', 'generated'),
  ('～語', 3, 'business', '会議の資料は英語で書いてあります。', 'Tài liệu cuộc họp được viết bằng tiếng Anh.', '会議の資料は英_____で書いてあります。', '語', 2, 'Ngôn ngữ dùng làm phương tiện đi với trợ từ で.', 'generated'),

  ('あなた', 1, 'exam', 'あなたの国はどこですか。', 'Đất nước của bạn là ở đâu?', '_____の国はどこですか。', 'あなた', 1, 'あなた là đại từ ngôi hai; trong hội thoại thường ưu tiên gọi tên người nghe.', 'generated'),
  ('あなた', 3, 'business', 'あなたの社員番号を入力してください。', 'Vui lòng nhập mã nhân viên của bạn.', '_____の社員番号を入力してください。', 'あなた', 2, 'Trong biểu mẫu/hướng dẫn có thể dùng あなた; khi nói trực tiếp nên gọi tên + さん.', 'generated'),

  ('あの人（あの方）', 1, 'exam', 'あの人はどこの会社の人ですか。', 'Người kia là người của công ty nào?', '_____はどこの会社の人ですか。', 'あの人', 1, 'あの人 chỉ người ở xa cả người nói lẫn người nghe.', 'generated'),
  ('あの人（あの方）', 3, 'business', '受付にいるあの方は新しいお客様です。', 'Vị ở quầy lễ tân là khách hàng mới.', '受付にいる_____は新しいお客様です。', 'あの方', 2, 'Trong công việc dùng あの方 thay あの人 để lịch sự hơn.', 'generated'),

  ('アメリカ', 1, 'exam', '姉はアメリカで英語を勉強しています。', 'Chị tôi đang học tiếng Anh ở Mỹ.', '姉は_____で英語を勉強しています。', 'アメリカ', 1, 'Địa điểm diễn ra hành động đi với で.', 'generated'),
  ('アメリカ', 3, 'business', '来月、アメリカの会社とオンライン会議があります。', 'Tháng sau có cuộc họp trực tuyến với một công ty Mỹ.', '来月、_____の会社とオンライン会議があります。', 'アメリカ', 2, 'Tên nước + の bổ nghĩa cho 会社.', 'generated'),

  ('いいえ', 1, 'exam', 'いいえ、私は学生ではありません。', 'Không, tôi không phải là học sinh.', '_____、私は学生ではありません。', 'いいえ', 1, 'いいえ mở đầu câu trả lời phủ định; theo sau thường là ～ではありません.', 'generated'),
  ('いいえ', 3, 'business', 'いいえ、その資料はまだ届いていません。', 'Không, tài liệu đó vẫn chưa tới.', '_____、その資料はまだ届いていません。', 'いいえ', 2, 'Trong trả lời công việc, thêm nội dung giải thích sau いいえ để tránh quá cụt.', 'generated'),

  ('イギリス', 1, 'exam', '姉はイギリスで英語を勉強しています。', 'Chị tôi đang học tiếng Anh ở Anh.', '姉は_____で英語を勉強しています。', 'イギリス', 1, 'Tên nước là địa điểm hành động nên đi với で.', 'generated'),
  ('イギリス', 3, 'business', 'イギリスの支店へこのメールを送ってください。', 'Hãy gửi email này tới chi nhánh ở Anh.', '_____の支店へこのメールを送ってください。', 'イギリス', 2, 'Tên nước + の bổ nghĩa cho 支店.', 'generated'),

  ('エンジニア', 1, 'exam', '兄は自動車のエンジニアです。', 'Anh trai tôi là kỹ sư ô tô.', '兄は自動車の_____です。', 'エンジニア', 1, 'Lĩnh vực + の + エンジニア.', 'generated'),
  ('エンジニア', 3, 'business', '新しいエンジニアが来週チームに入ります。', 'Một kỹ sư mới sẽ gia nhập nhóm vào tuần sau.', '新しい_____が来週チームに入ります。', 'エンジニア', 2, 'Cách nói tự nhiên khi thông báo nhân sự mới.', 'generated'),

  ('お仕事は何ですか', 1, 'exam', '田中さん、お仕事は何ですか。', 'Anh Tanaka làm nghề gì?', '田中さん、_____。', 'お仕事は何ですか', 1, 'お仕事 dùng お để lịch sự hơn 仕事.', 'generated'),
  ('お仕事は何ですか', 3, 'business', 'アンケートに「お仕事は何ですか」と書いてあります。', 'Trong phiếu khảo sát có ghi “Công việc của bạn là gì?”.', 'アンケートに「_____」と書いてあります。', 'お仕事は何ですか', 2, 'Khi hỏi trực tiếp nên dùng với người mới gặp, không hỏi cấp trên một cách tùy tiện.', 'generated'),

  ('お名前をもう一度お願いします', 1, 'exam', 'よく聞こえません。お名前をもう一度お願いします。', 'Tôi không nghe rõ. Xin hãy nhắc lại tên một lần nữa.', 'よく聞こえません。_____。', 'お名前をもう一度お願いします', 1, 'もう一度 là “một lần nữa”; お願いします làm yêu cầu mềm và lịch sự.', 'generated'),
  ('お名前をもう一度お願いします', 3, 'business', '電話が遠いので、お名前をもう一度お願いします。', 'Vì điện thoại nghe không rõ, xin hãy nhắc lại tên một lần nữa.', '電話が遠いので、_____。', 'お名前をもう一度お願いします', 2, 'Cụm dùng thực tế khi tiếp điện thoại và chưa nghe rõ tên.', 'generated'),

  ('そうですか', 1, 'exam', '「山田さんは来ません。」「そうですか。」', '“Anh Yamada không đến.” “Vậy à.”', '「山田さんは来ません。」「_____。」', 'そうですか', 1, 'そうですか thể hiện đã tiếp nhận thông tin mới, không nhất thiết là một câu hỏi thật.', 'generated'),
  ('そうですか', 3, 'business', '「会議は三時からです。」「そうですか。分かりました。」', '“Cuộc họp bắt đầu từ ba giờ.” “Vậy à. Tôi hiểu rồi.”', '「会議は三時からです。」「_____。分かりました。」', 'そうですか', 2, 'Trong công việc nên nối với 分かりました để xác nhận đã hiểu.', 'generated'),

  ('だれ（どなた）', 1, 'exam', '教室にいる人はだれですか。', 'Người ở trong lớp là ai?', '教室にいる人は_____ですか。', 'だれ', 1, 'だれ dùng hỏi “ai”; どなた là cách lịch sự.', 'generated'),
  ('だれ（どなた）', 3, 'business', '受付にいらっしゃる方はどなたですか。', 'Vị đang ở quầy lễ tân là ai vậy ạ?', '受付にいらっしゃる方は_____ですか。', 'どなた', 2, 'Hỏi về khách hoặc người lớn tuổi nên dùng どなた.', 'generated'),

  ('どうぞよろしくお願いします', 1, 'exam', '初めまして、マリアです。どうぞよろしくお願いします。', 'Rất hân hạnh, tôi là Maria. Mong được giúp đỡ.', '初めまして、マリアです。_____。', 'どうぞよろしくお願いします', 1, 'Câu kết chuẩn khi tự giới thiệu lần đầu.', 'generated'),
  ('どうぞよろしくお願いします', 3, 'business', '今日からこのチームで働きます。どうぞよろしくお願いします。', 'Từ hôm nay tôi làm việc trong nhóm này. Mong mọi người giúp đỡ.', '今日からこのチームで働きます。_____。', 'どうぞよろしくお願いします', 2, 'Dùng tự nhiên khi vào công ty hoặc chuyển sang nhóm mới.', 'generated'),

  ('はい', 1, 'exam', '「田中さんですか。」「はい、そうです。」', '“Bạn là Tanaka phải không?” “Vâng, đúng vậy.”', '「田中さんですか。」「_____、そうです。」', 'はい', 1, 'はい dùng xác nhận hoặc báo rằng mình đang nghe.', 'generated'),
  ('はい', 3, 'business', 'はい、資料を確認しました。', 'Vâng, tôi đã kiểm tra tài liệu.', '_____、資料を確認しました。', 'はい', 2, 'Sau はい nên nói rõ việc đã xác nhận thay vì chỉ trả lời cụt.', 'generated'),

  ('ベトナム', 1, 'exam', 'ベトナムは東南アジアにあります。', 'Việt Nam nằm ở Đông Nam Á.', '_____は東南アジアにあります。', 'ベトナム', 1, 'Nơi tồn tại đi với にあります.', 'generated'),
  ('ベトナム', 3, 'business', '来月、ベトナムの工場へ出張します。', 'Tháng sau tôi sẽ đi công tác tới nhà máy ở Việt Nam.', '来月、_____の工場へ出張します。', 'ベトナム', 2, 'Tên nước + の bổ nghĩa cho 工場.', 'generated'),

  ('中国', 1, 'exam', '中国は日本の西にあります。', 'Trung Quốc nằm ở phía tây Nhật Bản.', '_____は日本の西にあります。', '中国', 1, 'Vị trí tồn tại dùng ～にあります.', 'generated'),
  ('中国', 3, 'business', '中国の取引先からメールが来ました。', 'Có email gửi đến từ đối tác Trung Quốc.', '_____の取引先からメールが来ました。', '中国', 2, 'Tên nước + の + 取引先 chỉ đối tác thuộc quốc gia đó.', 'generated'),

  ('会社員', 1, 'exam', '父は東京の会社員です。', 'Bố tôi là nhân viên một công ty ở Tokyo.', '父は東京の_____です。', '会社員', 1, '会社員 nói nghề nghiệp chung; 社員 thường chỉ nhân viên của một công ty cụ thể.', 'generated'),
  ('会社員', 3, 'business', '申込書の職業欄に「会社員」と書きました。', 'Tôi ghi “nhân viên công ty” vào mục nghề nghiệp của đơn.', '申込書の職業欄に「_____」と書きました。', '会社員', 2, '会社員 thường được dùng ở mục nghề nghiệp trên biểu mẫu.', 'generated'),

  ('先生', 1, 'exam', '分からない漢字を先生に聞きました。', 'Tôi đã hỏi giáo viên chữ Kanji không hiểu.', '分からない漢字を_____に聞きました。', '先生', 1, 'Người được hỏi đi với に; không tự gọi nghề của mình là 先生.', 'generated'),
  ('先生', 3, 'business', '研修の先生に質問があります。', 'Tôi có câu hỏi dành cho giảng viên buổi đào tạo.', '研修の_____に質問があります。', '先生', 2, 'Có thể gọi người hướng dẫn hoặc giảng viên là 先生.', 'generated'),

  ('出身', 1, 'exam', '田中さんは大阪出身です。', 'Anh Tanaka quê ở Osaka.', '田中さんは大阪_____です。', '出身', 1, 'Địa danh + 出身です là cách nói tự nhiên về quê quán.', 'generated'),
  ('出身', 3, 'business', '自己紹介で出身と担当を話しました。', 'Trong phần tự giới thiệu tôi đã nói quê quán và phần việc phụ trách.', '自己紹介で_____と担当を話しました。', '出身', 2, '出身 có thể dùng trong tự giới thiệu nơi làm việc, nhưng không bắt buộc.', 'generated'),

  ('医者', 1, 'exam', '病気のときは医者に行きます。', 'Khi bị bệnh tôi đi khám bác sĩ.', '病気のときは_____に行きます。', '医者', 1, '医者 là bác sĩ; nơi khám là 病院.', 'generated'),
  ('医者', 3, 'business', '会社の健康診断で医者に相談しました。', 'Tôi đã trao đổi với bác sĩ trong đợt khám sức khỏe của công ty.', '会社の健康診断で_____に相談しました。', '医者', 2, 'Người được hỏi ý kiến đi với に相談します.', 'generated'),

  ('大学', 1, 'exam', '妹は東京の大学で勉強しています。', 'Em gái tôi đang học ở một trường đại học tại Tokyo.', '妹は東京の_____で勉強しています。', '大学', 1, 'Nơi học đi với で; 大学生 là sinh viên đại học.', 'generated'),
  ('大学', 3, 'business', '大学と会社が一緒に新しい技術を研究しています。', 'Trường đại học và công ty đang cùng nghiên cứu công nghệ mới.', '_____と会社が一緒に新しい技術を研究しています。', '大学', 3, '大学 có thể chỉ tổ chức hợp tác với doanh nghiệp, không chỉ tòa nhà.', 'generated'),

  ('失礼ですが', 1, 'exam', '失礼ですが、おいくつですか。', 'Xin lỗi, bạn bao nhiêu tuổi?', '_____、おいくつですか。', '失礼ですが', 1, 'Đặt trước câu hỏi có thể mang tính riêng tư để làm mềm lời hỏi.', 'generated'),
  ('失礼ですが', 3, 'business', '失礼ですが、もう一度会社名をお願いします。', 'Xin lỗi, xin hãy nhắc lại tên công ty một lần nữa.', '_____、もう一度会社名をお願いします。', '失礼ですが', 2, 'Cách mở lời lịch sự khi hỏi lại khách hàng hoặc đối tác.', 'generated'),

  ('学生', 1, 'exam', '駅の前に学生が三人います。', 'Có ba học sinh ở trước nhà ga.', '駅の前に_____が三人います。', '学生', 1, 'Đếm người dùng số + 人; 学生 có thể là học sinh hoặc sinh viên tùy bối cảnh.', 'generated'),
  ('学生', 3, 'business', 'この店では学生もアルバイトをしています。', 'Ở cửa hàng này cũng có học sinh, sinh viên làm thêm.', 'この店では_____もアルバイトをしています。', '学生', 2, '学生 + も cho biết ngoài nhóm khác còn có cả sinh viên.', 'generated'),

  ('彼', 1, 'exam', '彼は毎朝七時に家を出ます。', 'Anh ấy rời nhà lúc bảy giờ mỗi sáng.', '_____は毎朝七時に家を出ます。', '彼', 1, '彼 có thể là “anh ấy” hoặc “bạn trai” tùy ngữ cảnh.', 'generated'),
  ('彼', 3, 'business', '彼は営業の担当です。', 'Anh ấy phụ trách kinh doanh.', '_____は営業の担当です。', '彼', 2, 'Trong công việc, khi người nghe biết đối tượng thì 彼 dùng để nhắc tới nam giới đó.', 'generated'),

  ('彼女', 1, 'exam', '彼女は駅の近くに住んでいます。', 'Cô ấy sống gần nhà ga.', '_____は駅の近くに住んでいます。', '彼女', 1, '彼女 có thể là “cô ấy” hoặc “bạn gái” tùy ngữ cảnh.', 'generated'),
  ('彼女', 3, 'business', '彼女は新しいプロジェクトのリーダーです。', 'Cô ấy là trưởng dự án mới.', '_____は新しいプロジェクトのリーダーです。', '彼女', 2, 'Dùng khi người nghe đã biết người nữ đang được nhắc tới.', 'generated'),

  ('教師', 1, 'exam', '母は高校の教師です。', 'Mẹ tôi là giáo viên trung học phổ thông.', '母は高校の_____です。', '教師', 1, '教師 là tên nghề; khi gọi trực tiếp người dạy mình dùng 先生.', 'generated'),
  ('教師', 3, 'business', 'この研修では日本語教師が会話を教えます。', 'Trong khóa đào tạo này, giáo viên tiếng Nhật dạy hội thoại.', 'この研修では日本語_____が会話を教えます。', '教師', 2, 'Tên môn + 教師 chỉ nghề nghiệp chuyên môn.', 'generated'),

  ('日本', 1, 'exam', '日本には四つの大きな島があります。', 'Nhật Bản có bốn hòn đảo lớn.', '_____には四つの大きな島があります。', '日本', 1, 'Nơi có sự vật dùng ～には～があります.', 'generated'),
  ('日本', 3, 'business', '日本の本社から新しい資料が届きました。', 'Tài liệu mới đã được gửi tới từ trụ sở chính ở Nhật.', '_____の本社から新しい資料が届きました。', '日本', 2, 'Tên nước + の bổ nghĩa cho 本社.', 'generated'),

  ('留学生', 1, 'exam', 'このクラスには留学生が五人います。', 'Lớp này có năm du học sinh.', 'このクラスには_____が五人います。', '留学生', 1, '留学生 là người học ở nước ngoài; đếm bằng 人.', 'generated'),
  ('留学生', 3, 'business', '会社見学に留学生が来ました。', 'Các du học sinh đã đến tham quan công ty.', '会社見学に_____が来ました。', '留学生', 2, '会社見学に来る là đến để tham quan doanh nghiệp.', 'generated'),

  ('病院', 1, 'exam', '熱がありますから、病院へ行きます。', 'Vì bị sốt nên tôi đi bệnh viện.', '熱がありますから、_____へ行きます。', '病院', 1, 'Đi tới bệnh viện dùng 病院へ／に行きます.', 'generated'),
  ('病院', 3, 'business', '体調が悪いので、午後は病院へ行きます。', 'Vì không khỏe nên buổi chiều tôi sẽ đi bệnh viện.', '体調が悪いので、午後は_____へ行きます。', '病院', 2, 'Cách thông báo lý do rời công ty; nói rõ thời gian và nơi đến.', 'generated'),

  ('皆さん', 1, 'exam', '皆さんはもう宿題を出しましたか。', 'Các bạn đã nộp bài tập chưa?', '_____はもう宿題を出しましたか。', '皆さん', 1, '皆さん gọi một nhóm người một cách lịch sự, không dùng để tự chỉ nhóm mình.', 'generated'),
  ('皆さん', 3, 'business', '皆さん、会議を始めます。', 'Mọi người, chúng ta bắt đầu cuộc họp.', '_____、会議を始めます。', '皆さん', 2, 'Dùng để gọi sự chú ý của cả nhóm trước thông báo.', 'generated'),

  ('研究者', 1, 'exam', 'その研究者は新しい薬を作りました。', 'Nhà nghiên cứu đó đã tạo ra một loại thuốc mới.', 'その_____は新しい薬を作りました。', '研究者', 2, 'Danh từ chỉ người: 研究 + 者（しゃ）.', 'generated'),
  ('研究者', 3, 'business', '新しい製品について研究者に意見を聞きました。', 'Tôi đã hỏi ý kiến nhà nghiên cứu về sản phẩm mới.', '新しい製品について_____に意見を聞きました。', '研究者', 3, 'Người được hỏi ý kiến đi với に; chủ đề đi với について.', 'generated'),

  ('社員', 1, 'exam', 'この会社には社員が百人います。', 'Công ty này có một trăm nhân viên.', 'この会社には_____が百人います。', '社員', 1, '社員 chỉ người thuộc một công ty cụ thể; 会社員 là nghề nghiệp.', 'generated'),
  ('社員', 3, 'business', '社員は入口で社員証を見せてください。', 'Nhân viên vui lòng xuất trình thẻ nhân viên ở lối vào.', '_____は入口で社員証を見せてください。', '社員', 2, '社員 thường đi với từ ghép như 社員証, 社員食堂.', 'generated'),

  ('私', 1, 'exam', '私は毎日電車で学校へ行きます。', 'Hằng ngày tôi đi học bằng tàu điện.', '_____は毎日電車で学校へ行きます。', '私', 1, '私は nêu chủ đề là bản thân người nói.', 'generated'),
  ('私', 3, 'business', 'そのメールは私が送ります。', 'Email đó để tôi gửi.', 'そのメールは_____が送ります。', '私', 2, '私が nhấn mạnh chính người nói sẽ thực hiện hành động.', 'generated'),

  ('私たち', 1, 'exam', '私たちは同じクラスで日本語を勉強しています。', 'Chúng tôi học tiếng Nhật trong cùng một lớp.', '_____は同じクラスで日本語を勉強しています。', '私たち', 1, '私たち có thể là “chúng tôi” hoặc “chúng ta” tùy việc có gồm người nghe hay không.', 'generated'),
  ('私たち', 3, 'business', '私たちのチームはこの製品を作っています。', 'Nhóm chúng tôi đang sản xuất sản phẩm này.', '_____のチームはこの製品を作っています。', '私たち', 2, '私たちの + danh từ biểu thị sự thuộc về nhóm người nói.', 'generated'),

  ('運転手', 1, 'exam', 'バスの運転手に駅の名前を聞きました。', 'Tôi đã hỏi tài xế xe buýt tên nhà ga.', 'バスの_____に駅の名前を聞きました。', '運転手', 1, 'Phương tiện + の + 運転手, ví dụ バスの運転手.', 'generated'),
  ('運転手', 3, 'business', '運転手に荷物の届け先を伝えました。', 'Tôi đã báo địa chỉ giao hàng cho tài xế.', '_____に荷物の届け先を伝えました。', '運転手', 3, 'Người nhận thông tin đi với に; 届け先 là địa chỉ giao hàng.', 'generated'),

  ('銀行員', 1, 'exam', '姉は駅の近くの銀行で銀行員をしています。', 'Chị tôi làm nhân viên ngân hàng ở ngân hàng gần ga.', '姉は駅の近くの銀行で_____をしています。', '銀行員', 2, 'Nghề nghiệp + をしています là “làm nghề…”.', 'generated'),
  ('銀行員', 3, 'business', '口座について銀行員に聞きました。', 'Tôi đã hỏi nhân viên ngân hàng về tài khoản.', '口座について_____に聞きました。', '銀行員', 2, 'Người được hỏi đi với に; nội dung hỏi đi với について.', 'generated'),

  ('韓国', 1, 'exam', '韓国は日本に近いです。', 'Hàn Quốc gần Nhật Bản.', '_____は日本に近いです。', '韓国', 1, 'Đối tượng làm mốc với 近い thường đi với に.', 'generated'),
  ('韓国', 3, 'business', '韓国の取引先と午後から会議があります。', 'Chiều nay có cuộc họp với đối tác Hàn Quốc.', '_____の取引先と午後から会議があります。', '韓国', 2, 'Tên nước + の + 取引先; đối tác cùng họp đi với と.', 'generated')
)
insert into public.jp_vocab_examples
  (vocab_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, difficulty, focus_note, source_type)
select v.id, c.example_no, c.example_type, c.example_jp, c.example_vi, c.cloze_jp, c.answer, c.difficulty, c.focus_note, c.source_type
from curated c
join public.jp_vocab v
  on v.level = 'N5' and v.lesson_no = 1 and v.word_jp = c.word_jp
on conflict (vocab_id, example_no) do update set
  example_type = excluded.example_type,
  example_jp = excluded.example_jp,
  example_vi = excluded.example_vi,
  cloze_jp = excluded.cloze_jp,
  answer = excluded.answer,
  difficulty = excluded.difficulty,
  focus_note = excluded.focus_note,
  source_type = excluded.source_type;


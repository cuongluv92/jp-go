-- Hoàn thiện bộ 3 ngữ cảnh cho toàn bộ 38 mục từ N5 bài 3.
-- Đồng thời sửa các cách đọc/nghĩa rõ ràng chưa chuẩn trong dữ liệu nguồn.
-- Dữ liệu idempotent: chạy lại sẽ cập nhật đúng vị trí, không tạo bản sao.

update public.jp_vocab
set
  word_jp = 'バス停',
  reading_furigana = 'バスてい',
  meaning_vi = 'trạm xe buýt',
  usage_note_vi = '停（てい）nghĩa là điểm dừng; cách viết chuẩn là バス停.'
where level = 'N5'
  and lesson_no = 3
  and word_jp = 'バスてい';

with corrections(word_jp, reading_furigana, meaning_vi, usage_note_vi) as (values
  ('あそこ', 'あそこ', 'chỗ kia; đằng kia', 'Chỉ nơi xa cả người nói và người nghe.'),
  ('あちら', 'あちら', 'phía kia; đằng kia', 'Cách lịch sự của あそこ; cũng có thể dùng để chỉ người hoặc phía lựa chọn.'),
  ('ここ', 'ここ', 'chỗ này; ở đây', 'Chỉ nơi gần người nói.'),
  ('こちら', 'こちら', 'phía này; ở đây; vị này', 'Cách lịch sự của ここ; cũng dùng để giới thiệu người hoặc vật.'),
  ('そこ', 'そこ', 'chỗ đó; ở đó', 'Chỉ nơi gần người nghe hoặc nơi vừa được nhắc tới.'),
  ('そちら', 'そちら', 'phía đó; chỗ của anh/chị', 'Cách lịch sự của そこ; có thể chỉ địa điểm hoặc phía người nghe.'),
  ('どこ', 'どこ', 'ở đâu; chỗ nào', 'Từ nghi vấn hỏi địa điểm.'),
  ('どちら', 'どちら', 'phía nào; ở đâu; cái nào trong hai', 'Cách lịch sự của どこ; cũng dùng khi chọn giữa hai phương án.'),
  ('フロント', 'フロント', 'quầy lễ tân khách sạn', 'Thường dùng cho quầy tiếp tân của khách sạn; công ty và cơ quan thường dùng 受付.'),
  ('受付', 'うけつけ', 'quầy tiếp tân; nơi tiếp nhận thủ tục', 'Dùng tại công ty, bệnh viện, sự kiện và cơ quan.'),
  ('いえ', 'いえ', 'nhà; ngôi nhà', 'Thiên về ngôi nhà hoặc nơi cư trú; うち thiên về nhà mình/gia đình mình trong hội thoại.'),
  ('うち', 'うち', 'nhà mình; gia đình mình', 'Cách nói gần gũi về nhà hoặc gia đình của người nói.'),
  ('お国', 'おくに', 'đất nước; quê hương của anh/chị', 'Cách nói lịch sự khi hỏi hoặc nói về đất nước của người khác.'),
  ('お手洗い', 'おてあらい', 'nhà vệ sinh', 'Cách nói lịch sự hơn トイレ.'),
  ('デパート', 'デパート', 'cửa hàng bách hóa', 'Dạng rút gọn của デパートメントストア; thường là cửa hàng lớn nhiều tầng.'),
  ('トイレ', 'トイレ', 'nhà vệ sinh', 'Cách nói thông dụng; trong tình huống lịch sự có thể dùng お手洗い.'),
  ('円', 'えん', 'yên; đơn vị tiền Nhật Bản', 'Đứng sau số tiền, ví dụ 500円（ごひゃくえん）.')
)
update public.jp_vocab v
set
  reading_furigana = c.reading_furigana,
  meaning_vi = c.meaning_vi,
  usage_note_vi = c.usage_note_vi
from corrections c
where v.level = 'N5'
  and v.lesson_no = 3
  and v.word_jp = c.word_jp;

with curated(word_jp, example_no, example_type, example_jp, example_vi, cloze_jp, answer, difficulty, focus_note, source_type) as (values
  ('あそこ', 1, 'exam', 'あそこに白い建物があります。', 'Có một tòa nhà màu trắng ở đằng kia.', '_____に白い建物があります。', 'あそこ', 1, 'Nơi tồn tại đi với に; あそこ chỉ nơi xa cả hai bên.', 'generated'),
  ('あそこ', 2, 'daily', 'あそこで少し休みましょう。', 'Chúng ta nghỉ một lát ở đằng kia nhé.', '_____で少し休みましょう。', 'あそこ', 1, 'Nơi diễn ra hành động 休む đi với で.', 'generated'),
  ('あそこ', 3, 'business', 'コピー機はあそこにあります。', 'Máy photocopy ở đằng kia.', 'コピー機は_____にあります。', 'あそこ', 1, 'Địa điểm của đồ vật dùng ～にあります.', 'generated'),

  ('あちら', 1, 'exam', '駅はあちらです。', 'Nhà ga ở phía kia.', '駅は_____です。', 'あちら', 1, 'あちら là cách chỉ hướng lịch sự hơn あそこ.', 'generated'),
  ('あちら', 2, 'daily', '海はあちらの方です。', 'Biển ở phía đằng kia.', '海は_____の方です。', 'あちら', 2, 'あちらの方 nhấn mạnh phương hướng.', 'generated'),
  ('あちら', 3, 'business', '受付はあちらでございます。', 'Quầy tiếp tân ở phía kia ạ.', '受付は_____でございます。', 'あちら', 2, 'でございます là cách trang trọng của です khi hướng dẫn khách.', 'generated'),

  ('エレベーター', 1, 'exam', 'エレベーターで三階へ行きます。', 'Tôi đi thang máy lên tầng ba.', '_____で三階へ行きます。', 'エレベーター', 1, 'Phương tiện di chuyển đi với で.', 'generated'),
  ('エレベーター', 2, 'daily', '荷物が重いので、エレベーターを使います。', 'Vì hành lý nặng nên tôi dùng thang máy.', '荷物が重いので、_____を使います。', 'エレベーター', 2, 'Đồ vật hoặc thiết bị được dùng đi với を.', 'generated'),
  ('エレベーター', 3, 'business', 'お客様をエレベーターまで案内しました。', 'Tôi đã dẫn khách tới thang máy.', 'お客様を_____まで案内しました。', 'エレベーター', 2, 'Điểm cuối của việc hướng dẫn đi với まで.', 'generated'),

  ('ここ', 1, 'exam', 'ここに名前を書いてください。', 'Vui lòng viết tên vào đây.', '_____に名前を書いてください。', 'ここ', 1, 'Nơi ghi nội dung đi với に.', 'generated'),
  ('ここ', 2, 'daily', 'ここで写真を撮りましょう。', 'Chúng ta chụp ảnh ở đây nhé.', '_____で写真を撮りましょう。', 'ここ', 1, 'Nơi thực hiện hành động đi với で.', 'generated'),
  ('ここ', 3, 'business', 'ここは社員だけが入れる部屋です。', 'Đây là phòng chỉ nhân viên mới được vào.', '_____は社員だけが入れる部屋です。', 'ここ', 2, 'だけ giới hạn đối tượng; 入れる là “có thể vào”.', 'generated'),

  ('こちら', 1, 'exam', '駅はこちらです。', 'Nhà ga ở phía này.', '駅は_____です。', 'こちら', 1, 'こちら là cách lịch sự chỉ hướng về phía người nói.', 'generated'),
  ('こちら', 2, 'daily', 'こちらのケーキのほうが好きです。', 'Tôi thích chiếc bánh bên này hơn.', '_____のケーキのほうが好きです。', 'こちら', 2, 'Nのほうが diễn tả phương án được thích hơn.', 'generated'),
  ('こちら', 3, 'business', 'こちらが本日の資料です。', 'Đây là tài liệu của hôm nay.', '_____が本日の資料です。', 'こちら', 2, 'こちらが dùng để giới thiệu vật một cách lịch sự.', 'generated'),

  ('そこ', 1, 'exam', 'そこに傘を置かないでください。', 'Vui lòng đừng đặt ô ở đó.', '_____に傘を置かないでください。', 'そこ', 1, '～ないでください là yêu cầu không làm việc gì.', 'generated'),
  ('そこ', 2, 'daily', 'そこで待っていてください。', 'Hãy chờ ở đó nhé.', '_____で待っていてください。', 'そこ', 1, 'Nơi chờ đi với で; ～ていてください yêu cầu tiếp tục trạng thái.', 'generated'),
  ('そこ', 3, 'business', 'その箱はそこに置いてください。', 'Vui lòng đặt chiếc hộp đó ở chỗ đó.', 'その箱は_____に置いてください。', 'そこ', 1, 'Đích đặt đồ đi với に.', 'generated'),

  ('そちら', 1, 'exam', 'そちらの道をまっすぐ行ってください。', 'Hãy đi thẳng theo con đường phía đó.', '_____の道をまっすぐ行ってください。', 'そちら', 2, 'そちらの + danh từ chỉ phía gần người nghe.', 'generated'),
  ('そちら', 2, 'daily', 'そちらは雨が降っていますか。', 'Chỗ bạn trời có đang mưa không?', '_____は雨が降っていますか。', 'そちら', 2, 'そちら có thể chỉ nơi người nghe đang ở.', 'generated'),
  ('そちら', 3, 'business', '資料はそちらの会社へ送りました。', 'Tôi đã gửi tài liệu tới công ty của anh/chị.', '資料は_____の会社へ送りました。', 'そちら', 2, 'そちらの会社 là cách lịch sự nói “công ty phía anh/chị”.', 'generated'),

  ('どこ', 1, 'exam', '田中さんはどこに住んでいますか。', 'Anh Tanaka sống ở đâu?', '田中さんは_____に住んでいますか。', 'どこ', 1, 'Nơi cư trú đi với に.', 'generated'),
  ('どこ', 2, 'daily', '携帯をどこに置いたか忘れました。', 'Tôi quên mất đã để điện thoại ở đâu.', '携帯を_____に置いたか忘れました。', 'どこ', 2, '疑問語 + か tạo mệnh đề nghi vấn gián tiếp.', 'generated'),
  ('どこ', 3, 'business', '次の会議はどこで行いますか。', 'Cuộc họp tiếp theo sẽ tổ chức ở đâu?', '次の会議は_____で行いますか。', 'どこ', 2, 'Hỏi nơi diễn ra sự kiện dùng どこで.', 'generated'),

  ('どちら', 1, 'exam', '駅はどちらですか。', 'Nhà ga ở hướng nào ạ?', '駅は_____ですか。', 'どちら', 1, 'どちら là cách hỏi hướng lịch sự.', 'generated'),
  ('どちら', 2, 'daily', 'コーヒーとお茶、どちらがいいですか。', 'Cà phê và trà, bạn chọn loại nào?', 'コーヒーとお茶、_____がいいですか。', 'どちら', 2, 'どちら hỏi lựa chọn giữa hai phương án.', 'generated'),
  ('どちら', 3, 'business', 'どちらの会社からいらっしゃいましたか。', 'Anh/chị đến từ công ty nào ạ?', '_____の会社からいらっしゃいましたか。', 'どちら', 3, 'いらっしゃいました là cách kính trọng của 来ました.', 'generated'),

  ('フロント', 1, 'exam', 'ホテルの鍵をフロントでもらいました。', 'Tôi nhận chìa khóa khách sạn tại quầy lễ tân.', 'ホテルの鍵を_____でもらいました。', 'フロント', 1, 'Nơi nhận đồ đi với で.', 'generated'),
  ('フロント', 2, 'daily', '荷物をフロントに預けました。', 'Tôi đã gửi hành lý tại quầy lễ tân.', '荷物を_____に預けました。', 'フロント', 2, 'Nơi hoặc người giữ hộ đồ đi với に.', 'generated'),
  ('フロント', 3, 'business', 'チェックインは一階のフロントでお願いします。', 'Vui lòng làm thủ tục nhận phòng tại quầy lễ tân tầng một.', 'チェックインは一階の_____でお願いします。', 'フロント', 2, 'Khách sạn dùng フロント; nơi làm thủ tục đi với で.', 'generated'),

  ('受付', 1, 'exam', '病院の受付で名前を書きました。', 'Tôi đã viết tên tại quầy tiếp nhận của bệnh viện.', '病院の_____で名前を書きました。', '受付', 1, 'Nơi làm thủ tục đi với で.', 'generated'),
  ('受付', 2, 'daily', 'イベントの受付でパンフレットをもらいました。', 'Tôi nhận tờ giới thiệu tại quầy tiếp đón sự kiện.', 'イベントの_____でパンフレットをもらいました。', '受付', 2, '受付 dùng cho nơi tiếp nhận tại sự kiện.', 'generated'),
  ('受付', 3, 'business', '受付でお客様をお待ちしています。', 'Tôi đang đợi khách tại quầy tiếp tân.', '_____でお客様をお待ちしています。', '受付', 2, 'お待ちしています là cách khiêm nhường/lịch sự của 待っています.', 'generated'),

  ('階段', 1, 'exam', '階段を上がると、右に教室があります。', 'Đi lên cầu thang thì bên phải có phòng học.', '_____を上がると、右に教室があります。', '階段', 2, 'Lộ trình di chuyển đi với を: 階段を上がる.', 'generated'),
  ('階段', 2, 'daily', '健康のため、駅では階段を使います。', 'Vì sức khỏe, ở nhà ga tôi dùng cầu thang bộ.', '健康のため、駅では_____を使います。', '階段', 2, 'ため diễn tả mục đích; 階段を使う là dùng cầu thang.', 'generated'),
  ('階段', 3, 'business', '火事のときは階段を使って避難してください。', 'Khi có hỏa hoạn, hãy dùng cầu thang bộ để sơ tán.', '火事のときは_____を使って避難してください。', '階段', 3, '階段を使って避難する là dùng cầu thang để sơ tán.', 'generated'),

  ('いえ', 1, 'exam', '私のいえは駅の近くです。', 'Nhà tôi ở gần nhà ga.', '私の_____は駅の近くです。', 'いえ', 1, 'Nの近く diễn tả vị trí gần N.', 'generated'),
  ('いえ', 2, 'daily', '今日は早くいえに帰りたいです。', 'Hôm nay tôi muốn về nhà sớm.', '今日は早く_____に帰りたいです。', 'いえ', 1, 'Đích trở về đi với に; ～たい diễn tả mong muốn.', 'generated'),
  ('いえ', 3, 'business', '在宅勤務の日は、いえで仕事をします。', 'Ngày làm việc tại nhà, tôi làm việc ở nhà.', '在宅勤務の日は、_____で仕事をします。', 'いえ', 2, 'Nơi làm việc đi với で; 在宅勤務 là làm việc tại nhà.', 'generated'),

  ('いくら', 1, 'exam', 'この時計はいくらでしたか。', 'Chiếc đồng hồ này giá bao nhiêu?', 'この時計は_____でしたか。', 'いくら', 1, 'いくら dùng hỏi giá tiền.', 'generated'),
  ('いくら', 2, 'daily', '全部でいくらですか。', 'Tổng cộng là bao nhiêu tiền?', '全部で_____ですか。', 'いくら', 1, '全部で hỏi tổng số tiền của tất cả món.', 'generated'),
  ('いくら', 3, 'business', 'この部品は一個いくらですか。', 'Linh kiện này giá bao nhiêu một cái?', 'この部品は一個_____ですか。', 'いくら', 2, 'Số lượng + いくら dùng hỏi đơn giá.', 'generated'),

  ('うち', 1, 'exam', '日曜日はうちにいます。', 'Chủ nhật tôi ở nhà.', '日曜日は_____にいます。', 'うち', 1, 'Nơi người nói ở đi với にいます.', 'generated'),
  ('うち', 2, 'daily', '今度、うちに遊びに来ませんか。', 'Lần tới bạn đến nhà tôi chơi nhé?', '今度、_____に遊びに来ませんか。', 'うち', 2, 'うち thường mang sắc thái thân mật về nhà mình.', 'generated'),
  ('うち', 3, 'business', '今日はうちでオンライン会議に参加します。', 'Hôm nay tôi tham gia họp trực tuyến ở nhà.', '今日は_____でオンライン会議に参加します。', 'うち', 2, 'Nơi tham gia họp đi với で; cuộc họp đi với に参加する.', 'generated'),

  ('エスカレーター', 1, 'exam', 'エスカレーターで二階へ上がります。', 'Tôi đi thang cuốn lên tầng hai.', '_____で二階へ上がります。', 'エスカレーター', 1, 'Phương tiện đi lên đi với で.', 'generated'),
  ('エスカレーター', 2, 'daily', '駅のエスカレーターは混んでいました。', 'Thang cuốn ở ga đã rất đông.', '駅の_____は混んでいました。', 'エスカレーター', 1, '混んでいる diễn tả đông người.', 'generated'),
  ('エスカレーター', 3, 'business', '点検中ですので、エスカレーターは使えません。', 'Vì đang kiểm tra nên không thể dùng thang cuốn.', '点検中ですので、_____は使えません。', 'エスカレーター', 2, '点検中 là đang kiểm tra; 使えません là không thể sử dụng.', 'generated'),

  ('お国', 1, 'exam', '失礼ですが、お国はどちらですか。', 'Xin phép hỏi, anh/chị đến từ nước nào?', '失礼ですが、_____はどちらですか。', 'お国', 1, 'Câu hỏi lịch sự về đất nước của người nghe.', 'generated'),
  ('お国', 2, 'daily', 'ご家族はお国にいらっしゃいますか。', 'Gia đình anh/chị đang ở quê nhà phải không?', 'ご家族は_____にいらっしゃいますか。', 'お国', 3, 'お国 chỉ quê nhà của người nghe; いらっしゃる là kính ngữ của いる.', 'generated'),
  ('お国', 3, 'business', 'お国によって必要な書類が違います。', 'Giấy tờ cần thiết khác nhau tùy theo quốc gia của anh/chị.', '_____によって必要な書類が違います。', 'お国', 3, 'Nによって diễn tả sự khác nhau tùy theo N.', 'generated'),

  ('お手洗い', 1, 'exam', 'お手洗いは二階にあります。', 'Nhà vệ sinh ở tầng hai.', '_____は二階にあります。', 'お手洗い', 1, 'Cách nói lịch sự về nhà vệ sinh.', 'generated'),
  ('お手洗い', 2, 'daily', 'すみません、お手洗いを借りてもいいですか。', 'Xin lỗi, tôi có thể dùng nhờ nhà vệ sinh không?', 'すみません、_____を借りてもいいですか。', 'お手洗い', 2, '～てもいいですか dùng xin phép.', 'generated'),
  ('お手洗い', 3, 'business', 'お手洗いは廊下の突き当たりにございます。', 'Nhà vệ sinh ở cuối hành lang ạ.', '_____は廊下の突き当たりにございます。', 'お手洗い', 3, 'ございます là cách lịch sự của あります khi hướng dẫn khách.', 'generated'),

  ('スーパー', 1, 'exam', '駅の前に新しいスーパーができました。', 'Một siêu thị mới đã mở trước nhà ga.', '駅の前に新しい_____ができました。', 'スーパー', 2, '店ができる có nghĩa cửa hàng được mở/xây mới.', 'generated'),
  ('スーパー', 2, 'daily', '仕事の帰りにスーパーで牛乳を買いました。', 'Trên đường đi làm về tôi mua sữa ở siêu thị.', '仕事の帰りに_____で牛乳を買いました。', 'スーパー', 1, 'Nơi mua hàng đi với で.', 'generated'),
  ('スーパー', 3, 'business', 'この商品は全国のスーパーで売られています。', 'Sản phẩm này được bán tại các siêu thị trên toàn quốc.', 'この商品は全国の_____で売られています。', 'スーパー', 3, '売られています là thể bị động, diễn tả đang được bán.', 'generated'),

  ('センター', 1, 'exam', '市民センターで日本語を勉強しています。', 'Tôi đang học tiếng Nhật tại trung tâm cộng đồng.', '市民_____で日本語を勉強しています。', 'センター', 2, 'センター thường đứng sau từ chỉ chức năng, như 市民センター.', 'generated'),
  ('センター', 2, 'daily', '荷物を配送センターへ取りに行きました。', 'Tôi đã đến trung tâm giao hàng để lấy bưu kiện.', '荷物を配送_____へ取りに行きました。', 'センター', 3, 'Vます bỏ ます + に行く diễn tả đi để làm việc gì.', 'generated'),
  ('センター', 3, 'business', '研修は駅前のセンターで行います。', 'Buổi đào tạo sẽ được tổ chức tại trung tâm trước ga.', '研修は駅前の_____で行います。', 'センター', 2, 'Nơi tổ chức hoạt động đi với で.', 'generated'),

  ('デパート', 1, 'exam', 'デパートの七階にレストランがあります。', 'Có nhà hàng ở tầng bảy của cửa hàng bách hóa.', '_____の七階にレストランがあります。', 'デパート', 1, 'Tầng thuộc tòa nhà dùng Nの + số tầng.', 'generated'),
  ('デパート', 2, 'daily', '母の誕生日プレゼントをデパートで買いました。', 'Tôi mua quà sinh nhật cho mẹ ở cửa hàng bách hóa.', '母の誕生日プレゼントを_____で買いました。', 'デパート', 1, 'Nơi mua hàng đi với で.', 'generated'),
  ('デパート', 3, 'business', '来月、デパートで新商品のイベントがあります。', 'Tháng sau có sự kiện sản phẩm mới tại cửa hàng bách hóa.', '来月、_____で新商品のイベントがあります。', 'デパート', 2, 'Nơi diễn ra sự kiện đi với で.', 'generated'),

  ('トイレ', 1, 'exam', '駅のトイレは改札の中にあります。', 'Nhà vệ sinh ở ga nằm bên trong cửa soát vé.', '駅の_____は改札の中にあります。', 'トイレ', 2, 'Vị trí tồn tại đi với にあります.', 'generated'),
  ('トイレ', 2, 'daily', '子どもが急にトイレへ行きたいと言いました。', 'Đứa trẻ đột nhiên nói muốn đi vệ sinh.', '子どもが急に_____へ行きたいと言いました。', 'トイレ', 2, 'トイレへ行く là cách nói thông dụng.', 'generated'),
  ('トイレ', 3, 'business', 'トイレを清掃していますので、隣の階をご利用ください。', 'Nhà vệ sinh đang được vệ sinh, vui lòng dùng tầng kế bên.', '_____を清掃していますので、隣の階をご利用ください。', 'トイレ', 3, 'ご利用ください là cách lịch sự yêu cầu khách sử dụng.', 'generated'),

  ('バス停', 1, 'exam', 'バス停で十分待ちました。', 'Tôi đã đợi mười phút ở trạm xe buýt.', '_____で十分待ちました。', 'バス停', 1, 'Nơi chờ xe đi với で; 十分 ở đây đọc じゅっぷん.', 'generated'),
  ('バス停', 2, 'daily', '家から一番近いバス停まで歩きます。', 'Tôi đi bộ từ nhà tới trạm xe buýt gần nhất.', '家から一番近い_____まで歩きます。', 'バス停', 2, 'Điểm cuối đi với まで.', 'generated'),
  ('バス停', 3, 'business', '会社の送迎バスはこのバス停に止まります。', 'Xe đưa đón của công ty dừng tại trạm xe buýt này.', '会社の送迎バスはこの_____に止まります。', 'バス停', 2, 'Điểm xe dừng đi với に.', 'generated'),

  ('ビル', 1, 'exam', 'あの高いビルはホテルです。', 'Tòa nhà cao kia là khách sạn.', 'あの高い_____はホテルです。', 'ビル', 1, 'ビル thường chỉ tòa nhà cao dùng cho văn phòng hoặc thương mại.', 'generated'),
  ('ビル', 2, 'daily', '駅前のビルに新しい店が入りました。', 'Một cửa hàng mới đã mở trong tòa nhà trước ga.', '駅前の_____に新しい店が入りました。', 'ビル', 2, '店がビルに入る nói cửa hàng thuê/mở trong tòa nhà.', 'generated'),
  ('ビル', 3, 'business', '弊社はこのビルの五階にあります。', 'Công ty chúng tôi ở tầng năm tòa nhà này.', '弊社はこの_____の五階にあります。', 'ビル', 3, '弊社 là cách khiêm nhường nói về công ty mình.', 'generated'),

  ('事務所', 1, 'exam', '学校の事務所は一階にあります。', 'Văn phòng của trường ở tầng một.', '学校の_____は一階にあります。', '事務所', 1, 'Vị trí của văn phòng đi với にあります.', 'generated'),
  ('事務所', 2, 'daily', '忘れ物を事務所に届けました。', 'Tôi đã mang đồ thất lạc tới văn phòng.', '忘れ物を_____に届けました。', '事務所', 2, 'Nơi nhận đồ được mang tới đi với に.', 'generated'),
  ('事務所', 3, 'business', '事務所に戻ったら、メールを確認します。', 'Khi trở lại văn phòng, tôi sẽ kiểm tra email.', '_____に戻ったら、メールを確認します。', '事務所', 2, 'Nơi quay lại đi với に; ～たら diễn tả sau khi.', 'generated'),

  ('会社', 1, 'exam', '兄は自動車の会社で働いています。', 'Anh tôi làm việc tại một công ty ô tô.', '兄は自動車の_____で働いています。', '会社', 1, 'Nơi làm việc đi với で.', 'generated'),
  ('会社', 2, 'daily', '駅から会社まで歩いて十分です。', 'Đi bộ từ ga tới công ty mất mười phút.', '駅から_____まで歩いて十分です。', '会社', 1, 'から～まで nêu điểm đầu và điểm cuối.', 'generated'),
  ('会社', 3, 'business', '来月、新しい会社と契約します。', 'Tháng sau chúng tôi sẽ ký hợp đồng với một công ty mới.', '来月、新しい_____と契約します。', '会社', 2, 'Đối tác ký hợp đồng đi với と.', 'generated'),

  ('会議室', 1, 'exam', '会議室に椅子が十脚あります。', 'Có mười chiếc ghế trong phòng họp.', '_____に椅子が十脚あります。', '会議室', 2, 'Ghế có thể đếm bằng 脚（きゃく）.', 'generated'),
  ('会議室', 2, 'daily', '会議室に傘を忘れました。', 'Tôi để quên ô trong phòng họp.', '_____に傘を忘れました。', '会議室', 1, 'Nơi bỏ quên đồ đi với に.', 'generated'),
  ('会議室', 3, 'business', '三時から会議室を予約しました。', 'Tôi đã đặt phòng họp từ ba giờ.', '三時から_____を予約しました。', '会議室', 2, 'Phòng được đặt trước đi với を.', 'generated'),

  ('円', 1, 'exam', 'この切手は八十五円です。', 'Con tem này giá 85 yên.', 'この切手は八十五_____です。', '円', 1, '円 đứng ngay sau số tiền.', 'generated'),
  ('円', 2, 'daily', 'コンビニで五百円のお弁当を買いました。', 'Tôi mua một hộp cơm 500 yên ở cửa hàng tiện lợi.', 'コンビニで五百_____のお弁当を買いました。', '円', 1, 'Số tiền + 円 + の bổ nghĩa cho món hàng.', 'generated'),
  ('円', 3, 'business', '交通費は一日千円までです。', 'Chi phí đi lại được tính tối đa 1.000 yên mỗi ngày.', '交通費は一日千_____までです。', '円', 2, 'まで sau số tiền chỉ mức tối đa.', 'generated'),

  ('喫茶店', 1, 'exam', '喫茶店で友達を待ちました。', 'Tôi đã đợi bạn ở quán cà phê.', '_____で友達を待ちました。', '喫茶店', 1, 'Nơi chờ đi với で; người được đợi đi với を.', 'generated'),
  ('喫茶店', 2, 'daily', '休みの日は近所の喫茶店で本を読みます。', 'Ngày nghỉ tôi đọc sách ở quán cà phê gần nhà.', '休みの日は近所の_____で本を読みます。', '喫茶店', 2, 'Nơi diễn ra hành động đi với で.', 'generated'),
  ('喫茶店', 3, 'business', '打ち合わせの前に喫茶店で資料を確認しました。', 'Trước buổi trao đổi, tôi kiểm tra tài liệu ở quán cà phê.', '打ち合わせの前に_____で資料を確認しました。', '喫茶店', 2, 'Nの前に diễn tả trước sự kiện N.', 'generated'),

  ('図書館', 1, 'exam', '図書館では静かにしてください。', 'Trong thư viện vui lòng giữ yên lặng.', '_____では静かにしてください。', '図書館', 1, 'では nêu phạm vi áp dụng quy tắc.', 'generated'),
  ('図書館', 2, 'daily', '借りた本を図書館に返しに行きます。', 'Tôi đi thư viện để trả sách đã mượn.', '借りた本を_____に返しに行きます。', '図書館', 2, 'Đích đến đi với に; 返しに行く là đi để trả.', 'generated'),
  ('図書館', 3, 'business', '市場調査のため、図書館で古い新聞を調べました。', 'Để khảo sát thị trường, tôi tra báo cũ tại thư viện.', '市場調査のため、_____で古い新聞を調べました。', '図書館', 3, 'Nのため diễn tả mục đích; nơi tra cứu đi với で.', 'generated'),

  ('学校', 1, 'exam', '毎朝八時半に学校へ行きます。', 'Mỗi sáng tôi đến trường lúc 8 giờ 30.', '毎朝八時半に_____へ行きます。', '学校', 1, 'Đích di chuyển đi với へ hoặc に.', 'generated'),
  ('学校', 2, 'daily', '子どもの学校から電話がありました。', 'Có điện thoại từ trường của con tôi.', '子どもの_____から電話がありました。', '学校', 1, 'Nơi gọi đến đi với から.', 'generated'),
  ('学校', 3, 'business', '来週、会社説明のため学校を訪問します。', 'Tuần sau tôi sẽ đến trường để giới thiệu về công ty.', '来週、会社説明のため_____を訪問します。', '学校', 2, '訪問する dùng trực tiếp với を; Nのため diễn tả mục đích.', 'generated'),

  ('教室', 1, 'exam', '教室に学生が二十人います。', 'Có 20 học sinh trong lớp học.', '_____に学生が二十人います。', '教室', 1, 'Nơi có người đi với にいます.', 'generated'),
  ('教室', 2, 'daily', '授業のあと、教室にノートを忘れました。', 'Sau giờ học tôi để quên vở trong lớp.', '授業のあと、_____にノートを忘れました。', '教室', 1, 'Nơi bỏ quên đồ đi với に.', 'generated'),
  ('教室', 3, 'business', '研修の教室は三階に変更されました。', 'Phòng học của buổi đào tạo đã được đổi sang tầng ba.', '研修の_____は三階に変更されました。', '教室', 3, '変更されました là thể bị động, nghĩa là đã được thay đổi.', 'generated'),

  ('映画館', 1, 'exam', '映画館は駅の隣にあります。', 'Rạp chiếu phim ở cạnh nhà ga.', '_____は駅の隣にあります。', '映画館', 1, 'Vị trí tồn tại đi với にあります.', 'generated'),
  ('映画館', 2, 'daily', '久しぶりに映画館で映画を見ました。', 'Lâu rồi tôi mới xem phim tại rạp.', '久しぶりに_____で映画を見ました。', '映画館', 1, 'Nơi xem phim đi với で.', 'generated'),
  ('映画館', 3, 'business', '新しい広告を映画館で流します。', 'Chúng tôi sẽ phát quảng cáo mới tại rạp chiếu phim.', '新しい広告を_____で流します。', '映画館', 2, 'Nơi phát quảng cáo đi với で; 広告を流す là phát quảng cáo.', 'generated'),

  ('部屋', 1, 'exam', '部屋の中に机と椅子があります。', 'Trong phòng có bàn và ghế.', '_____の中に机と椅子があります。', '部屋', 1, 'Nの中 chỉ bên trong N.', 'generated'),
  ('部屋', 2, 'daily', '週末に部屋をきれいに掃除しました。', 'Cuối tuần tôi đã dọn phòng sạch sẽ.', '週末に_____をきれいに掃除しました。', '部屋', 1, '部屋を掃除する là dọn phòng.', 'generated'),
  ('部屋', 3, 'business', '面接は奥の部屋で行います。', 'Buổi phỏng vấn sẽ diễn ra trong phòng phía trong.', '面接は奥の_____で行います。', '部屋', 2, 'Nơi tổ chức buổi phỏng vấn đi với で.', 'generated'),

  ('郵便局', 1, 'exam', '郵便局で切手を買いました。', 'Tôi mua tem tại bưu điện.', '_____で切手を買いました。', '郵便局', 1, 'Nơi mua tem đi với で.', 'generated'),
  ('郵便局', 2, 'daily', '昼休みに郵便局へ荷物を出しに行きました。', 'Giờ nghỉ trưa tôi đến bưu điện gửi bưu kiện.', '昼休みに_____へ荷物を出しに行きました。', '郵便局', 2, '荷物を出しに行く là đi gửi bưu kiện.', 'generated'),
  ('郵便局', 3, 'business', '契約書を郵便局から速達で送りました。', 'Tôi đã gửi hợp đồng bằng chuyển phát nhanh từ bưu điện.', '契約書を_____から速達で送りました。', '郵便局', 2, 'Nơi gửi đi với から; phương thức gửi đi với で.', 'generated'),

  ('銀行', 1, 'exam', '銀行は九時から三時までです。', 'Ngân hàng mở cửa từ 9 giờ đến 3 giờ.', '_____は九時から三時までです。', '銀行', 1, 'から～まで diễn tả khoảng thời gian hoạt động.', 'generated'),
  ('銀行', 2, 'daily', '給料が入ったので、銀行でお金を下ろしました。', 'Vì đã nhận lương nên tôi rút tiền ở ngân hàng.', '給料が入ったので、_____でお金を下ろしました。', '銀行', 2, '銀行でお金を下ろす là rút tiền tại ngân hàng.', 'generated'),
  ('銀行', 3, 'business', '会社の口座について銀行に確認しました。', 'Tôi đã xác nhận với ngân hàng về tài khoản công ty.', '会社の口座について_____に確認しました。', '銀行', 3, 'Nに確認する là xác nhận với N; chủ đề đi với について.', 'generated'),

  ('食堂', 1, 'exam', '学校の食堂は安くておいしいです。', 'Nhà ăn của trường rẻ và ngon.', '学校の_____は安くておいしいです。', '食堂', 1, 'Dạng ～くて nối hai tính từ đuôi い.', 'generated'),
  ('食堂', 2, 'daily', '今日は食堂でカレーを食べました。', 'Hôm nay tôi ăn cà ri ở nhà ăn.', '今日は_____でカレーを食べました。', '食堂', 1, 'Nơi ăn đi với で.', 'generated'),
  ('食堂', 3, 'business', '社員食堂は十二時から混みます。', 'Nhà ăn nhân viên bắt đầu đông từ 12 giờ.', '社員_____は十二時から混みます。', '食堂', 2, '社員食堂 là nhà ăn dành cho nhân viên.', 'generated'),

  ('駅', 1, 'exam', '駅までバスで行きます。', 'Tôi đi xe buýt tới nhà ga.', '_____までバスで行きます。', '駅', 1, 'Điểm cuối đi với まで; phương tiện đi với で.', 'generated'),
  ('駅', 2, 'daily', '駅で友達と待ち合わせました。', 'Tôi đã hẹn gặp bạn tại nhà ga.', '_____で友達と待ち合わせました。', '駅', 2, '待ち合わせる là hẹn gặp; nơi hẹn đi với で.', 'generated'),
  ('駅', 3, 'business', 'お客様を駅まで迎えに行きます。', 'Tôi sẽ ra nhà ga đón khách.', 'お客様を_____まで迎えに行きます。', '駅', 2, '迎えに行く là đi đón; điểm đến đi với まで.', 'generated')
)
insert into public.jp_vocab_examples
  (vocab_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, difficulty, focus_note, source_type)
select
  v.id,
  c.example_no,
  c.example_type,
  c.example_jp,
  c.example_vi,
  c.cloze_jp,
  c.answer,
  c.difficulty,
  c.focus_note,
  c.source_type
from curated c
join public.jp_vocab v
  on v.level = 'N5'
  and v.lesson_no = 3
  and v.word_jp = c.word_jp
on conflict (vocab_id, example_no) do update set
  example_type = excluded.example_type,
  example_jp = excluded.example_jp,
  example_vi = excluded.example_vi,
  cloze_jp = excluded.cloze_jp,
  answer = excluded.answer,
  difficulty = excluded.difficulty,
  focus_note = excluded.focus_note,
  source_type = excluded.source_type;

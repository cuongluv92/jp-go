-- Hoàn thiện bộ 3 ngữ cảnh cho N5 bài 4 và sửa phân loại từ.
-- Tách 易しい (dễ) và 優しい (hiền/tốt bụng): cùng cách đọc nhưng là hai từ khác nghĩa.
-- Dữ liệu idempotent: chạy lại sẽ cập nhật đúng vị trí, không tạo bản sao.

update public.jp_vocab
set
  word_jp = '易しい',
  meaning_vi = 'dễ; không khó',
  usage_note_vi = '易しい nói về mức độ dễ của bài, nội dung hoặc thao tác; không dùng để khen tính cách con người.',
  word_class = 'い形容詞',
  dictionary_form = '易しい',
  corrected_text = '易しい',
  correction_note = 'Tách mục nguồn 易しい/優しい vì hai chữ cùng đọc やさしい nhưng khác nghĩa.'
where level = 'N5'
  and lesson_no = 4
  and word_jp = '易しい/優しい';

insert into public.jp_vocab
  (level, lesson_no, entry_type, word_jp, reading_furigana, meaning_vi,
   usage_note_vi, group_key, source_page, source_text, source_type,
   review_status, corrected_text, correction_note, word_class, dictionary_form)
values
  ('N5', 4, 'word', '優しい', 'やさしい', 'hiền; dịu dàng; tốt bụng',
   '優しい nói về tính cách, thái độ hoặc cách diễn đạt nhẹ nhàng; không mang nghĩa “dễ”.',
   'yasashii-homophones', 16, '易しい/優しい', 'pdf', 'ok', '優しい',
   'Tách mục nguồn 易しい/優しい vì hai chữ cùng đọc やさしい nhưng khác nghĩa.',
   'い形容詞', '優しい')
on conflict (level, lesson_no, word_jp, reading_furigana) do update set
  meaning_vi = excluded.meaning_vi,
  usage_note_vi = excluded.usage_note_vi,
  group_key = excluded.group_key,
  source_text = excluded.source_text,
  corrected_text = excluded.corrected_text,
  correction_note = excluded.correction_note,
  word_class = excluded.word_class,
  dictionary_form = excluded.dictionary_form;

update public.jp_vocab
set group_key = 'yasashii-homophones'
where level = 'N5' and lesson_no = 4 and word_jp = '易しい';

with classifications(word_jp, word_class) as (values
  ('いい（よい）', 'い形容詞'), ('イケメン', '名詞'), ('便利', 'な形容詞'),
  ('元気', 'な形容詞'), ('冷たい', 'い形容詞'), ('古い', 'い形容詞'),
  ('大きい', 'い形容詞'), ('大切', 'な形容詞'), ('寒い', 'い形容詞'),
  ('小さい', 'い形容詞'), ('忙しい', 'い形容詞'), ('悪い', 'い形容詞'),
  ('新しい', 'い形容詞'), ('易しい', 'い形容詞'), ('優しい', 'い形容詞'),
  ('暑い', 'い形容詞'), ('暇', 'な形容詞'), ('有名', 'な形容詞'),
  ('熱い', 'い形容詞'), ('綺麗', 'な形容詞'), ('親切', 'な形容詞'),
  ('賑やか', 'な形容詞'), ('難しい', 'い形容詞'), ('静か', 'な形容詞'),
  ('～が、～', '接続詞'), ('あまり', '副詞'), ('お仕事', '名詞'),
  ('そして', '接続詞'), ('どう', '副詞'), ('とても', '副詞'),
  ('パスポート', '名詞'), ('低い', 'い形容詞'), ('勉強', '動名詞'),
  ('可愛い', 'い形容詞'), ('安い', 'い形容詞'), ('寂しい', 'い形容詞'),
  ('富士山', '名詞'), ('山', '名詞'), ('所', '名詞'), ('料理', '動名詞'),
  ('明るい', 'い形容詞'), ('暗い', 'い形容詞'), ('桜', '名詞'),
  ('楽しい', 'い形容詞'), ('機械', '名詞'), ('物価', '名詞'),
  ('生活', '動名詞'), ('町', '名詞'), ('白い', 'い形容詞'),
  ('着物', '名詞'), ('美味しい', 'い形容詞'), ('花', '名詞'),
  ('赤い', 'い形容詞'), ('青い', 'い形容詞'), ('面白い', 'い形容詞'),
  ('食べ物', '名詞'), ('高い', 'い形容詞'), ('黒い', 'い形容詞')
)
update public.jp_vocab v
set word_class = c.word_class
from classifications c
where v.level = 'N5' and v.lesson_no = 4 and v.word_jp = c.word_jp;

update public.jp_vocab
set
  reading_furigana = 'おしごと',
  usage_note_vi = 'お仕事 là cách nói lịch sự của 仕事 khi hỏi hoặc nhắc tới công việc của người khác.'
where level = 'N5' and lesson_no = 4 and word_jp = 'お仕事';

update public.jp_vocab
set
  usage_note_vi = 'いい biến đổi theo gốc よ-: よくない, よかった, よくて.',
  dictionary_form = 'いい'
where level = 'N5' and lesson_no = 4 and word_jp = 'いい（よい）';

update public.jp_vocab
set
  usage_note_vi = 'Từ nói về ngoại hình nam giới trong hội thoại thân mật; tránh dùng để đánh giá đồng nghiệp hoặc khách hàng trong tình huống trang trọng.'
where level = 'N5' and lesson_no = 4 and word_jp = 'イケメン';

update public.jp_vocab
set entry_type = 'phrase'
where level = 'N5' and lesson_no = 4 and word_jp = '～が、～';

with curated(word_jp, example_no, example_type, example_jp, example_vi, cloze_jp, answer, difficulty, focus_note, source_type) as (values
  ('いい（よい）', 1, 'exam', 'この方法は前の方法よりいいです。', 'Phương pháp này tốt hơn phương pháp trước.', 'この方法は前の方法より_____です。', 'いい', 1, 'Mốc so sánh đi với より; dạng phủ định của いい là よくない.', 'generated'),
  ('いい（よい）', 2, 'daily', '今日は天気がいいので、散歩しましょう。', 'Hôm nay thời tiết đẹp nên chúng ta đi dạo nhé.', '今日は天気が_____ので、散歩しましょう。', 'いい', 1, '天気がいい là cách kết hợp tự nhiên để nói thời tiết đẹp.', 'generated'),
  ('いい（よい）', 3, 'business', 'この案で進めてもいいですか。', 'Chúng ta tiến hành theo phương án này được không?', 'この案で進めても_____ですか。', 'いい', 2, '～てもいいですか dùng xin phép hoặc xác nhận phương án.', 'generated'),

  ('イケメン', 1, 'exam', '姉はあの俳優をイケメンだと言いました。', 'Chị tôi nói nam diễn viên kia đẹp trai.', '姉はあの俳優を_____だと言いました。', 'イケメン', 2, 'イケメンだ là cách nói thân mật; nội dung trích dẫn đi với と言う.', 'generated'),
  ('イケメン', 2, 'daily', '新しい店員さん、イケメンだったよ。', 'Nhân viên mới đẹp trai đấy.', '新しい店員さん、_____だったよ。', 'イケメン', 2, 'Cách nói hội thoại thân mật; だった là quá khứ của だ.', 'generated'),
  ('イケメン', 3, 'business', '職場では、外見だけで人をイケメンと評価しないほうがいいです。', 'Ở nơi làm việc, không nên chỉ dựa vào ngoại hình để đánh giá ai đó là đẹp trai.', '職場では、外見だけで人を_____と評価しないほうがいいです。', 'イケメン', 3, 'Không phù hợp để đánh giá đồng nghiệp/khách hàng trong giao tiếp trang trọng.', 'generated'),

  ('便利', 1, 'exam', '駅に近いので、この町は便利です。', 'Vì gần ga nên thị trấn này thuận tiện.', '駅に近いので、この町は_____です。', '便利', 1, '便利 là tính từ đuôi な; trước danh từ dùng 便利な.', 'generated'),
  ('便利', 2, 'daily', 'このアプリは電車の時間を調べるのに便利です。', 'Ứng dụng này tiện để tra giờ tàu.', 'このアプリは電車の時間を調べるのに_____です。', '便利', 2, 'Vるのに便利だ diễn tả tiện cho việc làm gì.', 'generated'),
  ('便利', 3, 'business', 'オンライン会議は遠い支店との打ち合わせに便利です。', 'Họp trực tuyến tiện cho việc trao đổi với chi nhánh ở xa.', 'オンライン会議は遠い支店との打ち合わせに_____です。', '便利', 2, 'Nに便利だ diễn tả tiện cho mục đích N.', 'generated'),

  ('元気', 1, 'exam', '祖父は七十歳ですが、とても元気です。', 'Ông tôi đã 70 tuổi nhưng vẫn rất khỏe.', '祖父は七十歳ですが、とても_____です。', '元気', 1, '元気 là tính từ đuôi な; nối tương phản bằng が.', 'generated'),
  ('元気', 2, 'daily', '風邪が治って、元気になりました。', 'Tôi khỏi cảm và đã khỏe lại.', '風邪が治って、_____になりました。', '元気', 2, 'Tính từ đuôi な + になる diễn tả trở nên.', 'generated'),
  ('元気', 3, 'business', '田中さんは今日も元気に働いています。', 'Hôm nay anh Tanaka vẫn làm việc đầy năng lượng.', '田中さんは今日も_____に働いています。', '元気', 2, '元気に bổ nghĩa cho động từ 働く.', 'generated'),

  ('冷たい', 1, 'exam', '冷たい水を一杯ください。', 'Cho tôi một cốc nước lạnh.', '_____水を一杯ください。', '冷たい', 1, '冷たい dùng cho vật có nhiệt độ lạnh hoặc cảm giác lạnh khi chạm.', 'generated'),
  ('冷たい', 2, 'daily', '暑い日は冷たい麦茶がおいしいです。', 'Ngày nóng thì trà lúa mạch lạnh rất ngon.', '暑い日は_____麦茶がおいしいです。', '冷たい', 1, '冷たい đứng trực tiếp trước danh từ 麦茶.', 'generated'),
  ('冷たい', 3, 'business', '冷たい商品は冷蔵庫に入れてください。', 'Hàng cần giữ lạnh vui lòng cho vào tủ lạnh.', '_____商品は冷蔵庫に入れてください。', '冷たい', 2, 'Dùng cho sản phẩm ở trạng thái lạnh; phân biệt với thời tiết 寒い.', 'generated'),

  ('古い', 1, 'exam', 'この寺は千年前からある古い建物です。', 'Ngôi chùa này là công trình cổ có từ một nghìn năm trước.', 'この寺は千年前からある_____建物です。', '古い', 2, '古い nói đồ vật/công trình có tuổi đời lâu; không dùng cho tuổi người.', 'generated'),
  ('古い', 2, 'daily', '古い写真を見て、子どもの頃を思い出しました。', 'Nhìn ảnh cũ, tôi nhớ lại thời thơ ấu.', '_____写真を見て、子どもの頃を思い出しました。', '古い', 2, '古い写真 là ảnh được chụp từ lâu.', 'generated'),
  ('古い', 3, 'business', '古いデータは削除する前に保存してください。', 'Dữ liệu cũ hãy lưu lại trước khi xóa.', '_____データは削除する前に保存してください。', '古い', 2, 'Vる前に diễn tả làm việc này trước việc kia.', 'generated'),

  ('大きい', 1, 'exam', '象は犬より大きいです。', 'Voi lớn hơn chó.', '象は犬より_____です。', '大きい', 1, 'Mốc so sánh đi với より.', 'generated'),
  ('大きい', 2, 'daily', '大きい鍋でカレーを作りました。', 'Tôi đã nấu cà ri bằng một chiếc nồi lớn.', '_____鍋でカレーを作りました。', '大きい', 1, 'Dạng 大きい + danh từ thông dụng; cũng có dạng 大きな.', 'generated'),
  ('大きい', 3, 'business', 'この荷物は大きいので、二人で運びましょう。', 'Kiện hàng này lớn nên hai người cùng vận chuyển nhé.', 'この荷物は_____ので、二人で運びましょう。', '大きい', 2, 'ので nêu lý do; 二人で nói hai người cùng thực hiện.', 'generated'),

  ('大切', 1, 'exam', '健康はお金より大切だと思います。', 'Tôi nghĩ sức khỏe quan trọng hơn tiền bạc.', '健康はお金より_____だと思います。', '大切', 2, '大切 là tính từ đuôi な; trong mệnh đề trích dẫn dùng 大切だ.', 'generated'),
  ('大切', 2, 'daily', 'これは祖母からもらった大切な写真です。', 'Đây là bức ảnh quý giá tôi nhận từ bà.', 'これは祖母からもらった_____な写真です。', '大切', 2, 'Trước danh từ dùng 大切な; nghĩa có thể là quan trọng hoặc quý giá.', 'generated'),
  ('大切', 3, 'business', 'お客様の情報は大切に管理してください。', 'Thông tin khách hàng hãy được quản lý cẩn thận.', 'お客様の情報は_____に管理してください。', '大切', 2, '大切に + động từ diễn tả làm việc gì một cách trân trọng/cẩn thận.', 'generated'),

  ('寒い', 1, 'exam', '北海道の冬はとても寒いです。', 'Mùa đông Hokkaido rất lạnh.', '北海道の冬はとても_____です。', '寒い', 1, '寒い dùng cho thời tiết, không khí hoặc cảm giác toàn thân.', 'generated'),
  ('寒い', 2, 'daily', '今朝は寒かったので、厚いコートを着ました。', 'Sáng nay lạnh nên tôi mặc áo khoác dày.', '今朝は_____ので、厚いコートを着ました。', '寒かった', 2, 'Quá khứ của 寒い là 寒かった.', 'generated'),
  ('寒い', 3, 'business', '倉庫は寒いので、上着を持ってきてください。', 'Kho lạnh nên hãy mang theo áo khoác.', '倉庫は_____ので、上着を持ってきてください。', '寒い', 2, 'Nói môi trường/lạnh toàn thân dùng 寒い, không dùng 冷たい.', 'generated'),

  ('小さい', 1, 'exam', 'この箱はあの箱より小さいです。', 'Chiếc hộp này nhỏ hơn chiếc hộp kia.', 'この箱はあの箱より_____です。', '小さい', 1, 'So sánh dùng Nより小さい.', 'generated'),
  ('小さい', 2, 'daily', '小さい財布を旅行に持って行きました。', 'Tôi mang chiếc ví nhỏ theo chuyến du lịch.', '_____財布を旅行に持って行きました。', '小さい', 1, 'Dạng 小さい + danh từ; cũng có dạng 小さな.', 'generated'),
  ('小さい', 3, 'business', '文字が小さいので、資料を直してください。', 'Chữ nhỏ nên vui lòng sửa lại tài liệu.', '文字が_____ので、資料を直してください。', '小さい', 2, 'Kích thước chữ dùng 小さい.', 'generated'),

  ('忙しい', 1, 'exam', '月曜日は仕事が忙しくて、昼ご飯を食べる時間がありません。', 'Thứ Hai công việc bận nên không có thời gian ăn trưa.', '月曜日は仕事が_____、昼ご飯を食べる時間がありません。', '忙しくて', 2, 'Nối tính từ đuôi い bằng cách đổi い thành くて.', 'generated'),
  ('忙しい', 2, 'daily', '今週は忙しいですが、日曜日は休めそうです。', 'Tuần này bận nhưng có vẻ Chủ nhật tôi nghỉ được.', '今週は_____ですが、日曜日は休めそうです。', '忙しい', 2, '忙しいですが nối hai ý tương phản.', 'generated'),
  ('忙しい', 3, 'business', 'ただ今忙しいので、後ほどお電話します。', 'Hiện tôi đang bận nên lát nữa sẽ gọi lại.', 'ただ今_____ので、後ほどお電話します。', '忙しい', 2, '後ほど là cách nói lịch sự của “lát nữa”.', 'generated'),

  ('悪い', 1, 'exam', '昨日は天気が悪くて、飛行機が遅れました。', 'Hôm qua thời tiết xấu nên máy bay bị trễ.', '昨日は天気が_____、飛行機が遅れました。', '悪くて', 2, 'Dạng nối của 悪い là 悪くて.', 'generated'),
  ('悪い', 2, 'daily', 'ごめん、遅れたのは私が悪いです。', 'Xin lỗi, việc đến muộn là lỗi của tôi.', 'ごめん、遅れたのは私が_____です。', '悪い', 2, '私が悪い có nghĩa “tôi có lỗi”.', 'generated'),
  ('悪い', 3, 'business', '機械の調子が悪いので、使用を止めました。', 'Máy hoạt động không tốt nên chúng tôi đã dừng sử dụng.', '機械の調子が_____ので、使用を止めました。', '悪い', 2, '調子が悪い là tình trạng/hoạt động không tốt.', 'generated'),

  ('新しい', 1, 'exam', '駅の近くに新しい図書館ができました。', 'Một thư viện mới đã mở gần nhà ga.', '駅の近くに_____図書館ができました。', '新しい', 1, '新しい đứng trực tiếp trước danh từ.', 'generated'),
  ('新しい', 2, 'daily', '新しい靴を履いて出かけました。', 'Tôi mang đôi giày mới đi ra ngoài.', '_____靴を履いて出かけました。', '新しい', 1, 'Giày đi với động từ 履く.', 'generated'),
  ('新しい', 3, 'business', '来月から新しいシステムを使います。', 'Từ tháng sau chúng tôi sẽ dùng hệ thống mới.', '来月から_____システムを使います。', '新しい', 1, 'から chỉ thời điểm bắt đầu áp dụng.', 'generated'),

  ('易しい', 1, 'exam', 'この問題は子どもにも易しいです。', 'Bài này ngay cả trẻ em cũng thấy dễ.', 'この問題は子どもにも_____です。', '易しい', 2, '易しい nói mức độ không khó; ～にも nghĩa là ngay cả với.', 'generated'),
  ('易しい', 2, 'daily', 'この本は言葉が易しくて読みやすいです。', 'Cuốn sách này dùng từ dễ nên dễ đọc.', 'この本は言葉が_____読みやすいです。', '易しくて', 2, '易しくて là dạng nối; 読みやすい là dễ đọc.', 'generated'),
  ('易しい', 3, 'business', '新人にも易しい言葉で説明してください。', 'Hãy giải thích bằng từ ngữ dễ hiểu cả với người mới.', '新人にも_____言葉で説明してください。', '易しい', 2, '易しい言葉 là từ ngữ đơn giản, dễ hiểu.', 'generated'),

  ('優しい', 1, 'exam', '私の先生は厳しいですが、困ったときは優しいです。', 'Thầy tôi nghiêm khắc nhưng rất tốt bụng khi tôi gặp khó khăn.', '私の先生は厳しいですが、困ったときは_____です。', '優しい', 2, '優しい mô tả tính cách/thái độ, không mang nghĩa “dễ”.', 'generated'),
  ('優しい', 2, 'daily', '道を教えてくれた人はとても優しかったです。', 'Người chỉ đường cho tôi rất tốt bụng.', '道を教えてくれた人はとても_____です。', '優しかった', 2, 'Quá khứ của 優しい là 優しかった.', 'generated'),
  ('優しい', 3, 'business', 'お客様には優しい言葉で案内してください。', 'Hãy hướng dẫn khách bằng lời lẽ nhẹ nhàng.', 'お客様には_____言葉で案内してください。', '優しい', 2, '優しい言葉 là lời lẽ nhẹ nhàng, dễ chịu.', 'generated'),

  ('暑い', 1, 'exam', '日本の夏は暑くて、雨も多いです。', 'Mùa hè Nhật Bản nóng và cũng mưa nhiều.', '日本の夏は_____、雨も多いです。', '暑くて', 1, '暑い dùng cho thời tiết; dạng nối là 暑くて.', 'generated'),
  ('暑い', 2, 'daily', '部屋が暑いので、窓を開けてもいいですか。', 'Phòng nóng nên tôi mở cửa sổ được không?', '部屋が_____ので、窓を開けてもいいですか。', '暑い', 1, '暑い nói nhiệt độ môi trường; ～てもいいですか xin phép.', 'generated'),
  ('暑い', 3, 'business', '工場の中は暑いので、水をよく飲んでください。', 'Trong nhà máy nóng nên hãy thường xuyên uống nước.', '工場の中は_____ので、水をよく飲んでください。', '暑い', 2, 'Cảnh báo môi trường nóng dùng 暑い, không dùng 熱い.', 'generated'),

  ('暇', 1, 'exam', '暇なとき、図書館で本を読みます。', 'Khi rảnh tôi đọc sách ở thư viện.', '_____なとき、図書館で本を読みます。', '暇', 1, 'Trước danh từ とき dùng 暇な.', 'generated'),
  ('暇', 2, 'daily', '今夜は暇だから、一緒に映画を見ない？', 'Tối nay tôi rảnh, cùng xem phim không?', '今夜は_____だから、一緒に映画を見ない？', '暇', 2, 'Hội thoại thân mật dùng 暇だから.', 'generated'),
  ('暇', 3, 'business', '午後は比較的暇なので、資料を整理します。', 'Buổi chiều tương đối rảnh nên tôi sẽ sắp xếp tài liệu.', '午後は比較的_____なので、資料を整理します。', '暇', 3, '比較的 nghĩa là tương đối; khi nói với cấp trên thường ưu tiên お時間があります.', 'generated'),

  ('有名', 1, 'exam', '京都は古い寺で有名です。', 'Kyoto nổi tiếng với những ngôi chùa cổ.', '京都は古い寺で_____です。', '有名', 1, 'Nで有名だ nghĩa là nổi tiếng về N.', 'generated'),
  ('有名', 2, 'daily', 'この店は大きいケーキで有名です。', 'Cửa hàng này nổi tiếng với bánh cỡ lớn.', 'この店は大きいケーキで_____です。', '有名', 1, 'Lý do/đặc điểm nổi tiếng đi với で.', 'generated'),
  ('有名', 3, 'business', '弊社は省エネ製品で有名です。', 'Công ty chúng tôi nổi tiếng với sản phẩm tiết kiệm năng lượng.', '弊社は省エネ製品で_____です。', '有名', 3, '弊社 là cách khiêm nhường nói về công ty mình.', 'generated'),

  ('熱い', 1, 'exam', 'このスープは熱いので、気をつけてください。', 'Món súp này nóng nên hãy cẩn thận.', 'このスープは_____ので、気をつけてください。', '熱い', 1, '熱い dùng cho vật có nhiệt độ cao khi chạm/ăn uống.', 'generated'),
  ('熱い', 2, 'daily', '熱いお茶を飲んで体が温まりました。', 'Tôi uống trà nóng và cơ thể ấm lên.', '_____お茶を飲んで体が温まりました。', '熱い', 2, 'Nói đồ uống nóng dùng 熱い, không dùng 暑い.', 'generated'),
  ('熱い', 3, 'business', '機械が熱いときは、手で触らないでください。', 'Khi máy nóng, vui lòng không chạm bằng tay.', '機械が_____ときは、手で触らないでください。', '熱い', 2, 'Cảnh báo bề mặt nóng dùng 熱い.', 'generated'),

  ('綺麗', 1, 'exam', '山の上から綺麗な海が見えました。', 'Từ trên núi tôi nhìn thấy biển rất đẹp.', '山の上から_____な海が見えました。', '綺麗', 2, '綺麗 kết thúc bằng い nhưng là tính từ đuôi な.', 'generated'),
  ('綺麗', 2, 'daily', '部屋を綺麗にしてから、友達を呼びました。', 'Tôi dọn phòng sạch rồi mới mời bạn tới.', '部屋を_____にしてから、友達を呼びました。', '綺麗', 2, '綺麗にする nghĩa là làm cho sạch/đẹp.', 'generated'),
  ('綺麗', 3, 'business', 'お客様が来る前に、受付を綺麗にしてください。', 'Trước khi khách tới, hãy dọn quầy tiếp tân sạch đẹp.', 'お客様が来る前に、受付を_____にしてください。', '綺麗', 2, 'Nを綺麗にする là làm cho N sạch đẹp.', 'generated'),

  ('親切', 1, 'exam', '駅員さんが親切に道を教えてくれました。', 'Nhân viên nhà ga đã tận tình chỉ đường cho tôi.', '駅員さんが_____に道を教えてくれました。', '親切', 2, '親切に bổ nghĩa cho cách thực hiện hành động.', 'generated'),
  ('親切', 2, 'daily', '隣の人はいつも親切です。', 'Người hàng xóm lúc nào cũng tốt bụng.', '隣の人はいつも_____です。', '親切', 1, '親切 thường mô tả hành động quan tâm, giúp đỡ người khác.', 'generated'),
  ('親切', 3, 'business', '受付の方が親切に対応してくださいました。', 'Nhân viên lễ tân đã hỗ trợ tôi rất tận tình.', '受付の方が_____に対応してくださいました。', '親切', 3, '～てくださいました thể hiện sự biết ơn về hành động của người khác.', 'generated'),

  ('賑やか', 1, 'exam', '祭りの日は町がとても賑やかになります。', 'Ngày lễ hội, thị trấn trở nên rất náo nhiệt.', '祭りの日は町がとても_____になります。', '賑やか', 2, 'Tính từ đuôi な + になる diễn tả sự thay đổi.', 'generated'),
  ('賑やか', 2, 'daily', '子どもたちが来て、家が賑やかになりました。', 'Bọn trẻ đến làm căn nhà trở nên rộn ràng.', '子どもたちが来て、家が_____になりました。', '賑やか', 2, '賑やか thiên về đông vui, có nhiều âm thanh tích cực.', 'generated'),
  ('賑やか', 3, 'business', '昼休みになると、社員食堂は賑やかです。', 'Đến giờ nghỉ trưa, nhà ăn nhân viên rất nhộn nhịp.', '昼休みになると、社員食堂は_____です。', '賑やか', 2, '～になると diễn tả khi tới thời điểm thì trạng thái xuất hiện.', 'generated'),

  ('難しい', 1, 'exam', 'この漢字は読み方が難しいです。', 'Chữ Kanji này có cách đọc khó.', 'この漢字は読み方が_____です。', '難しい', 1, 'Phần khó được nêu bằng Nが難しい.', 'generated'),
  ('難しい', 2, 'daily', '一人でこの家具を作るのは難しかったです。', 'Tự làm món đồ này một mình rất khó.', '一人でこの家具を作るのは_____です。', '難しかった', 2, 'Quá khứ của 難しい là 難しかった.', 'generated'),
  ('難しい', 3, 'business', '今日中に終わらせるのは難しいと思います。', 'Tôi nghĩ khó có thể hoàn thành trong hôm nay.', '今日中に終わらせるのは_____と思います。', '難しい', 2, 'Cách nói mềm khi báo tiến độ khó đạt; 今日中 là trong hôm nay.', 'generated'),

  ('静か', 1, 'exam', '図書館では静かに本を読んでください。', 'Trong thư viện hãy đọc sách yên lặng.', '図書館では_____に本を読んでください。', '静か', 1, '静かに bổ nghĩa cho động từ.', 'generated'),
  ('静か', 2, 'daily', '夜の公園は静かで落ち着きます。', 'Công viên ban đêm yên tĩnh và dễ chịu.', '夜の公園は_____で落ち着きます。', '静か', 2, 'Dạng nối của tính từ đuôi な là 静かで.', 'generated'),
  ('静か', 3, 'business', '集中したいので、静かな会議室を予約しました。', 'Vì muốn tập trung nên tôi đã đặt phòng họp yên tĩnh.', '集中したいので、_____な会議室を予約しました。', '静か', 2, 'Trước danh từ dùng 静かな.', 'generated'),

  ('～が、～', 1, 'exam', '日本語は難しいですが、面白いです。', 'Tiếng Nhật khó nhưng thú vị.', '日本語は難しいです_____、面白いです。', 'が', 1, 'が nối hai vế có ý tương phản; lịch sự hơn けど trong hội thoại.', 'generated'),
  ('～が、～', 2, 'daily', '行きたいですが、今日は時間がありません。', 'Tôi muốn đi nhưng hôm nay không có thời gian.', '行きたいです_____、今日は時間がありません。', 'が', 1, 'Đặt が sau thể lịch sự để nối ý trái ngược.', 'generated'),
  ('～が、～', 3, 'business', '申し訳ありませんが、もう一度説明してください。', 'Rất xin lỗi, nhưng vui lòng giải thích lại một lần nữa.', '申し訳ありません_____、もう一度説明してください。', 'が', 2, 'Trong công việc が còn làm mềm lời mở đầu trước yêu cầu.', 'generated'),

  ('あまり', 1, 'exam', '私は辛い食べ物をあまり食べません。', 'Tôi không ăn đồ cay nhiều lắm.', '私は辛い食べ物を_____食べません。', 'あまり', 1, 'あまり đi với dạng phủ định để nói “không… lắm”.', 'generated'),
  ('あまり', 2, 'daily', 'この映画はあまり面白くなかったです。', 'Bộ phim này không thú vị lắm.', 'この映画は_____面白くなかったです。', 'あまり', 2, 'あまり + phủ định quá khứ 面白くなかった.', 'generated'),
  ('あまり', 3, 'business', '今週はあまり時間がありません。', 'Tuần này tôi không có nhiều thời gian.', '今週は_____時間がありません。', 'あまり', 1, 'Không dùng あまり với câu khẳng định theo nghĩa cơ bản N5.', 'generated'),

  ('お仕事', 1, 'exam', 'お仕事は何時に終わりますか。', 'Công việc của anh/chị kết thúc lúc mấy giờ?', '_____は何時に終わりますか。', 'お仕事', 1, 'お仕事 là cách lịch sự nói về công việc của người nghe.', 'generated'),
  ('お仕事', 2, 'daily', '最近、お仕事はどうですか。', 'Dạo này công việc của anh/chị thế nào?', '最近、_____はどうですか。', 'お仕事', 1, 'Câu hỏi lịch sự, tự nhiên với người quen.', 'generated'),
  ('お仕事', 3, 'business', 'お仕事で日本語を使いますか。', 'Anh/chị có dùng tiếng Nhật trong công việc không?', '_____で日本語を使いますか。', 'お仕事', 1, '仕事で dùng で để chỉ phạm vi/bối cảnh sử dụng.', 'generated'),

  ('そして', 1, 'exam', '朝ご飯を食べました。そして、学校へ行きました。', 'Tôi ăn sáng. Sau đó tôi đến trường.', '朝ご飯を食べました。_____、学校へ行きました。', 'そして', 1, 'そして nối hai câu theo trình tự hoặc bổ sung thông tin.', 'generated'),
  ('そして', 2, 'daily', '野菜を切ります。そして、鍋に入れます。', 'Cắt rau. Sau đó cho vào nồi.', '野菜を切ります。_____、鍋に入れます。', 'そして', 1, 'Dùng để nối các bước theo thứ tự.', 'generated'),
  ('そして', 3, 'business', '資料を確認してください。そして、問題があれば連絡してください。', 'Hãy kiểm tra tài liệu. Sau đó, nếu có vấn đề hãy liên hệ.', '資料を確認してください。_____、問題があれば連絡してください。', 'そして', 2, 'そして nối hai chỉ dẫn; trong văn bản trang trọng có thể dùng その後.', 'generated'),

  ('どう', 1, 'exam', '日本の生活はどうですか。', 'Cuộc sống ở Nhật thế nào?', '日本の生活は_____ですか。', 'どう', 1, 'どうですか hỏi cảm nhận hoặc tình trạng.', 'generated'),
  ('どう', 2, 'daily', '髪を短く切ったけど、どう？', 'Tôi cắt tóc ngắn rồi, thấy thế nào?', '髪を短く切ったけど、_____？', 'どう', 2, 'Trong hội thoại thân mật có thể chỉ nói どう？.', 'generated'),
  ('どう', 3, 'business', '新しいデザインについて、どう思いますか。', 'Anh/chị nghĩ thế nào về thiết kế mới?', '新しいデザインについて、_____思いますか。', 'どう', 2, 'どう思いますか hỏi ý kiến; chủ đề đi với について.', 'generated'),

  ('とても', 1, 'exam', 'この町は静かで、とても住みやすいです。', 'Thị trấn này yên tĩnh và rất dễ sống.', 'この町は静かで、_____住みやすいです。', 'とても', 2, 'とても bổ nghĩa cho tính từ ở dạng khẳng định.', 'generated'),
  ('とても', 2, 'daily', '昨日見た映画はとても面白かったです。', 'Bộ phim xem hôm qua rất thú vị.', '昨日見た映画は_____面白かったです。', 'とても', 1, 'とても đứng trước tính từ để tăng mức độ.', 'generated'),
  ('とても', 3, 'business', 'この資料はとても分かりやすいです。', 'Tài liệu này rất dễ hiểu.', 'この資料は_____分かりやすいです。', 'とても', 2, '分かりやすい là dễ hiểu; とても nhấn mạnh mức độ.', 'generated'),

  ('どれ', 1, 'exam', '三つのかばんの中で、あなたのはどれですか。', 'Trong ba chiếc cặp, chiếc nào là của bạn?', '三つのかばんの中で、あなたのは_____ですか。', 'どれ', 1, 'どれ đứng độc lập để hỏi một vật trong từ ba lựa chọn trở lên.', 'generated'),
  ('どれ', 2, 'daily', 'ケーキ、どれを食べたい？', 'Bạn muốn ăn chiếc bánh nào?', 'ケーキ、_____を食べたい？', 'どれ', 1, 'どれ có thể đi với trợ từ を; không đặt trực tiếp trước danh từ.', 'generated'),
  ('どれ', 3, 'business', 'こちらの案の中で、どれが一番いいですか。', 'Trong các phương án này, phương án nào tốt nhất?', 'こちらの案の中で、_____が一番いいですか。', 'どれ', 2, 'Nの中でどれが一番～ hỏi lựa chọn tốt nhất trong nhóm.', 'generated'),

  ('どんな', 1, 'exam', '田中さんはどんな人ですか。', 'Anh Tanaka là người như thế nào?', '田中さんは_____人ですか。', 'どんな', 1, 'どんな phải đứng trước danh từ.', 'generated'),
  ('どんな', 2, 'daily', '週末はどんなことをして過ごしますか。', 'Cuối tuần bạn thường làm những gì?', '週末は_____ことをして過ごしますか。', 'どんな', 2, 'どんなこと hỏi loại hoạt động/nội dung.', 'generated'),
  ('どんな', 3, 'business', 'お客様はどんな商品を探していますか。', 'Khách hàng đang tìm loại sản phẩm như thế nào?', 'お客様は_____商品を探していますか。', 'どんな', 2, 'どんな + danh từ hỏi đặc điểm hoặc loại mong muốn.', 'generated'),

  ('パスポート', 1, 'exam', '外国へ行くとき、パスポートが必要です。', 'Khi ra nước ngoài cần có hộ chiếu.', '外国へ行くとき、_____が必要です。', 'パスポート', 1, 'Vật cần thiết đi với が必要です.', 'generated'),
  ('パスポート', 2, 'daily', '旅行の前にパスポートの期限を確認しました。', 'Trước chuyến đi tôi đã kiểm tra hạn hộ chiếu.', '旅行の前に_____の期限を確認しました。', 'パスポート', 2, 'パスポートの期限 là thời hạn hiệu lực của hộ chiếu.', 'generated'),
  ('パスポート', 3, 'business', '受付でパスポートをコピーさせていただきます。', 'Tại quầy tiếp tân, xin phép cho chúng tôi sao chụp hộ chiếu.', '受付で_____をコピーさせていただきます。', 'パスポート', 3, '～させていただきます là cách xin phép trang trọng trong dịch vụ.', 'generated'),

  ('低い', 1, 'exam', 'この山は富士山より低いです。', 'Ngọn núi này thấp hơn núi Phú Sĩ.', 'この山は富士山より_____です。', '低い', 1, 'Mốc so sánh đi với より.', 'generated'),
  ('低い', 2, 'daily', 'この椅子は少し低くて座りにくいです。', 'Chiếc ghế này hơi thấp nên khó ngồi.', 'この椅子は少し_____座りにくいです。', '低くて', 2, 'Dạng nối của 低い là 低くて.', 'generated'),
  ('低い', 3, 'business', 'この机は作業台より低いです。', 'Chiếc bàn này thấp hơn bàn thao tác.', 'この机は作業台より_____です。', '低い', 2, 'Chiều cao thấp dùng 低い; so sánh dùng より.', 'generated'),

  ('勉強', 1, 'exam', '毎日二時間、日本語の勉強をしています。', 'Mỗi ngày tôi học tiếng Nhật hai giờ.', '毎日二時間、日本語の_____をしています。', '勉強', 1, '勉強をする và 勉強する đều đúng.', 'generated'),
  ('勉強', 2, 'daily', '試験の前に友達と勉強しました。', 'Trước kỳ thi tôi đã học cùng bạn.', '試験の前に友達と_____しました。', '勉強', 1, '勉強する dùng như động từ; người cùng học đi với と.', 'generated'),
  ('勉強', 3, 'business', '仕事のあと、資格の勉強をしています。', 'Sau giờ làm tôi đang học để lấy chứng chỉ.', '仕事のあと、資格の_____をしています。', '勉強', 2, '資格の勉強 là học để thi/lấy chứng chỉ.', 'generated'),

  ('可愛い', 1, 'exam', '妹は小さくて可愛い犬を飼っています。', 'Em gái tôi nuôi một chú chó nhỏ dễ thương.', '妹は小さくて_____犬を飼っています。', '可愛い', 1, '可愛い đứng trực tiếp trước danh từ.', 'generated'),
  ('可愛い', 2, 'daily', 'この服、色も形も可愛いね。', 'Bộ quần áo này cả màu lẫn kiểu đều dễ thương nhỉ.', 'この服、色も形も_____ね。', '可愛い', 2, 'NもNも diễn tả cả hai đều có đặc điểm.', 'generated'),
  ('可愛い', 3, 'business', 'この商品の可愛いデザインは若い人に人気です。', 'Thiết kế dễ thương của sản phẩm này được người trẻ yêu thích.', 'この商品の_____デザインは若い人に人気です。', '可愛い', 2, 'Nに人気だ nghĩa là được nhóm N yêu thích.', 'generated'),

  ('安い', 1, 'exam', 'この店は駅前の店より野菜が安いです。', 'Rau ở cửa hàng này rẻ hơn cửa hàng trước ga.', 'この店は駅前の店より野菜が_____です。', '安い', 1, 'Mặt hàng được đánh giá đi với が; mốc so sánh đi với より.', 'generated'),
  ('安い', 2, 'daily', '安い切符をインターネットで探しました。', 'Tôi tìm vé rẻ trên mạng.', '_____切符をインターネットで探しました。', '安い', 1, '安い nói giá thấp; phương tiện tìm kiếm đi với で.', 'generated'),
  ('安い', 3, 'business', 'まとめて注文すると、少し安くなります。', 'Nếu đặt chung số lượng lớn thì giá sẽ rẻ hơn một chút.', 'まとめて注文すると、少し_____なります。', '安く', 2, '安くなる là trở nên rẻ hơn; ～と diễn tả kết quả tự nhiên.', 'generated'),

  ('寂しい', 1, 'exam', '家族と離れて暮らすのは寂しいです。', 'Sống xa gia đình thật cô đơn.', '家族と離れて暮らすのは_____です。', '寂しい', 2, 'Vるのは寂しい đánh giá cảm xúc đối với một việc.', 'generated'),
  ('寂しい', 2, 'daily', '友達が帰って、一人になると寂しくなりました。', 'Bạn về rồi, khi còn một mình tôi thấy cô đơn.', '友達が帰って、一人になると_____なりました。', '寂しく', 2, '寂しくなる là trở nên/cảm thấy cô đơn.', 'generated'),
  ('寂しい', 3, 'business', '長く一緒に働いた同僚が退職するので、寂しいです。', 'Tôi buồn vì đồng nghiệp làm cùng lâu năm sẽ nghỉ việc.', '長く一緒に働いた同僚が退職するので、_____です。', '寂しい', 2, 'Có thể dùng để bày tỏ tiếc nuối chân thành khi đồng nghiệp rời đi.', 'generated'),

  ('富士山', 1, 'exam', '晴れた日は東京から富士山が見えます。', 'Ngày trời quang có thể nhìn thấy núi Phú Sĩ từ Tokyo.', '晴れた日は東京から_____が見えます。', '富士山', 1, 'Điểm nhìn đi với から; vật nhìn thấy đi với が.', 'generated'),
  ('富士山', 2, 'daily', 'いつか家族と富士山に登りたいです。', 'Một ngày nào đó tôi muốn leo núi Phú Sĩ cùng gia đình.', 'いつか家族と_____に登りたいです。', '富士山', 1, 'Núi được leo đi với に hoặc を.', 'generated'),
  ('富士山', 3, 'business', '出張の新幹線から富士山が見えました。', 'Tôi nhìn thấy núi Phú Sĩ từ tàu Shinkansen trong chuyến công tác.', '出張の新幹線から_____が見えました。', '富士山', 2, '出張の新幹線 chỉ chuyến tàu đi công tác; điểm nhìn đi với から.', 'generated'),

  ('山', 1, 'exam', '山の上は町より気温が低いです。', 'Trên núi có nhiệt độ thấp hơn trong thị trấn.', '_____の上は町より気温が低いです。', '山', 2, '山の上 là khu vực trên núi; so sánh dùng より.', 'generated'),
  ('山', 2, 'daily', '秋に友達と山へ紅葉を見に行きました。', 'Mùa thu tôi cùng bạn lên núi ngắm lá đỏ.', '秋に友達と_____へ紅葉を見に行きました。', '山', 2, '紅葉を見に行く là đi ngắm lá đỏ.', 'generated'),
  ('山', 3, 'business', '新しい工場は山の近くにあります。', 'Nhà máy mới nằm gần núi.', '新しい工場は_____の近くにあります。', '山', 1, 'Nの近くにある diễn tả vị trí gần N.', 'generated'),

  ('所', 1, 'exam', '駅の近くに静かな所があります。', 'Gần nhà ga có một nơi yên tĩnh.', '駅の近くに静かな_____があります。', '所', 1, '所（ところ）chỉ nơi/chỗ mang tính khái quát.', 'generated'),
  ('所', 2, 'daily', 'ここは景色が綺麗で、私の好きな所です。', 'Nơi đây phong cảnh đẹp và là chỗ tôi yêu thích.', 'ここは景色が綺麗で、私の好きな_____です。', '所', 2, 'Mệnh đề 私の好きな bổ nghĩa cho 所.', 'generated'),
  ('所', 3, 'business', '打ち合わせができる所を予約しました。', 'Tôi đã đặt một chỗ có thể họp trao đổi.', '打ち合わせができる_____を予約しました。', '所', 2, 'Mệnh đề khả năng できる bổ nghĩa cho 所.', 'generated'),

  ('料理', 1, 'exam', '母は日本料理を作るのが上手です。', 'Mẹ tôi giỏi nấu món Nhật.', '母は日本_____を作るのが上手です。', '料理', 2, 'Tên quốc gia + 料理 chỉ nền ẩm thực/món ăn của nước đó.', 'generated'),
  ('料理', 2, 'daily', '週末に家族と料理を作りました。', 'Cuối tuần tôi nấu ăn cùng gia đình.', '週末に家族と_____を作りました。', '料理', 1, '料理を作る là nấu món ăn; cũng có thể nói 料理する.', 'generated'),
  ('料理', 3, 'business', '歓迎会の料理を三十人分予約しました。', 'Tôi đã đặt món cho 30 người trong tiệc chào mừng.', '歓迎会の_____を三十人分予約しました。', '料理', 2, 'Số người + 分 chỉ phần dành cho số người đó.', 'generated'),

  ('明るい', 1, 'exam', '南の部屋は窓が大きくて明るいです。', 'Phòng phía nam có cửa sổ lớn và sáng.', '南の部屋は窓が大きくて_____です。', '明るい', 1, '明るい nói không gian có nhiều ánh sáng.', 'generated'),
  ('明るい', 2, 'daily', '朝、カーテンを開けると部屋が明るくなりました。', 'Buổi sáng mở rèm ra thì căn phòng sáng lên.', '朝、カーテンを開けると部屋が_____なりました。', '明るく', 2, '明るくなる diễn tả trở nên sáng.', 'generated'),
  ('明るい', 3, 'business', 'この照明に変えると、作業場が明るくなります。', 'Đổi sang đèn này thì nơi làm việc sẽ sáng hơn.', 'この照明に変えると、作業場が_____なります。', '明るく', 2, 'Tính từ đuôi い đổi thành ～くなる để nói thay đổi trạng thái.', 'generated'),

  ('暗い', 1, 'exam', 'この道は夜になると暗いです。', 'Con đường này tối khi đêm xuống.', 'この道は夜になると_____です。', '暗い', 1, '暗い dùng cho nơi thiếu ánh sáng hoặc bầu không khí u ám.', 'generated'),
  ('暗い', 2, 'daily', '部屋が暗いから、電気をつけて。', 'Phòng tối nên bật đèn lên nhé.', '部屋が_____から、電気をつけて。', '暗い', 1, 'Cách nói thân mật; 電気をつける là bật đèn.', 'generated'),
  ('暗い', 3, 'business', '倉庫が暗いので、照明を追加しました。', 'Kho tối nên chúng tôi đã lắp thêm đèn.', '倉庫が_____ので、照明を追加しました。', '暗い', 2, 'ので nêu lý do khách quan; 照明を追加する là bổ sung chiếu sáng.', 'generated'),

  ('桜', 1, 'exam', '日本では春に桜が咲きます。', 'Ở Nhật, hoa anh đào nở vào mùa xuân.', '日本では春に_____が咲きます。', '桜', 1, 'Hoa nở dùng 花が咲く.', 'generated'),
  ('桜', 2, 'daily', '川のそばで桜の写真を撮りました。', 'Tôi chụp ảnh hoa anh đào bên bờ sông.', '川のそばで_____の写真を撮りました。', '桜', 1, '桜の写真 là ảnh chụp hoa/cây anh đào.', 'generated'),
  ('桜', 3, 'business', '会社の窓から満開の桜が見えます。', 'Từ cửa sổ công ty có thể nhìn thấy hoa anh đào nở rộ.', '会社の窓から満開の_____が見えます。', '桜', 2, '満開の桜 là hoa anh đào nở rộ.', 'generated'),

  ('楽しい', 1, 'exam', '友達と旅行した三日間はとても楽しかったです。', 'Ba ngày đi du lịch với bạn rất vui.', '友達と旅行した三日間はとても_____です。', '楽しかった', 2, 'Quá khứ của 楽しい là 楽しかった.', 'generated'),
  ('楽しい', 2, 'daily', 'みんなで料理を作るのは楽しいです。', 'Nấu ăn cùng mọi người rất vui.', 'みんなで料理を作るのは_____です。', '楽しい', 1, 'Vるのは楽しい dùng đánh giá một hoạt động là vui.', 'generated'),
  ('楽しい', 3, 'business', '新人研修は大変でしたが、楽しかったです。', 'Khóa đào tạo nhân viên mới vất vả nhưng vui.', '新人研修は大変でしたが、_____です。', '楽しかった', 2, 'が nối hai đánh giá tương phản.', 'generated'),

  ('機械', 1, 'exam', 'この機械は一時間に百個の商品を作ります。', 'Máy này sản xuất 100 sản phẩm mỗi giờ.', 'この_____は一時間に百個の商品を作ります。', '機械', 2, 'Khoảng thời gian + に + số lượng diễn tả năng suất.', 'generated'),
  ('機械', 2, 'daily', '駅で切符を買う機械の使い方が分かりません。', 'Tôi không biết cách dùng máy mua vé ở ga.', '駅で切符を買う_____の使い方が分かりません。', '機械', 2, 'Nの使い方 là cách sử dụng N.', 'generated'),
  ('機械', 3, 'business', '機械を動かす前に、安全を確認してください。', 'Trước khi vận hành máy, hãy kiểm tra an toàn.', '_____を動かす前に、安全を確認してください。', '機械', 2, '機械を動かす là vận hành máy; Vる前に là trước khi.', 'generated'),

  ('物価', 1, 'exam', 'この町は家賃は高いですが、物価は安いです。', 'Thị trấn này tiền thuê nhà cao nhưng mặt bằng giá rẻ.', 'この町は家賃は高いですが、_____は安いです。', '物価', 2, '物価が高い／安い nói mặt bằng giá cả chung.', 'generated'),
  ('物価', 2, 'daily', '最近、物価が上がって生活が大変です。', 'Gần đây giá cả tăng khiến cuộc sống khó khăn.', '最近、_____が上がって生活が大変です。', '物価', 2, '物価が上がる là giá cả chung tăng.', 'generated'),
  ('物価', 3, 'business', '海外出張の前に、現地の物価を調べました。', 'Trước chuyến công tác nước ngoài, tôi đã tìm hiểu giá cả địa phương.', '海外出張の前に、現地の_____を調べました。', '物価', 3, '現地の物価 là mức giá tại địa phương/điểm đến.', 'generated'),

  ('生活', 1, 'exam', '日本の生活に少しずつ慣れました。', 'Tôi dần quen với cuộc sống ở Nhật.', '日本の_____に少しずつ慣れました。', '生活', 2, 'Nに慣れる là quen với N.', 'generated'),
  ('生活', 2, 'daily', '早寝早起きの生活を始めました。', 'Tôi bắt đầu nếp sống ngủ sớm dậy sớm.', '早寝早起きの_____を始めました。', '生活', 2, '生活 có thể chỉ nếp sinh hoạt hằng ngày.', 'generated'),
  ('生活', 3, 'business', '仕事と生活のバランスは大切です。', 'Sự cân bằng giữa công việc và cuộc sống rất quan trọng.', '仕事と_____のバランスは大切です。', '生活', 2, '仕事と生活のバランス tương đương cân bằng công việc-cuộc sống.', 'generated'),

  ('町', 1, 'exam', 'この町には古い寺がたくさんあります。', 'Thị trấn này có nhiều ngôi chùa cổ.', 'この_____には古い寺がたくさんあります。', '町', 1, 'Nơi có sự vật dùng Nには～があります.', 'generated'),
  ('町', 2, 'daily', '休みの日に町をゆっくり歩きました。', 'Ngày nghỉ tôi thong thả đi bộ quanh phố.', '休みの日に_____をゆっくり歩きました。', '町', 1, 'Khu vực di chuyển qua đi với を.', 'generated'),
  ('町', 3, 'business', '町の商店と一緒にイベントを開きます。', 'Chúng tôi tổ chức sự kiện cùng các cửa hàng trong thị trấn.', '_____の商店と一緒にイベントを開きます。', '町', 2, '町の商店 chỉ cửa hàng địa phương; ～と一緒に là cùng với.', 'generated'),

  ('白い', 1, 'exam', '雪で山が白くなりました。', 'Tuyết làm ngọn núi trở nên trắng.', '雪で山が_____なりました。', '白く', 2, '白くなる là trở nên trắng.', 'generated'),
  ('白い', 2, 'daily', '白いシャツにコーヒーをこぼしました。', 'Tôi làm đổ cà phê lên áo sơ mi trắng.', '_____シャツにコーヒーをこぼしました。', '白い', 1, 'Bề mặt bị đổ lên đi với に.', 'generated'),
  ('白い', 3, 'business', '白い封筒をお客様に渡してください。', 'Hãy đưa phong bì trắng cho khách.', '_____封筒をお客様に渡してください。', '白い', 1, 'Người nhận đi với に trong Nを人に渡す.', 'generated'),

  ('着物', 1, 'exam', '成人式で姉は赤い着物を着ました。', 'Chị tôi mặc kimono đỏ trong lễ trưởng thành.', '成人式で姉は赤い_____を着ました。', '着物', 2, '着物 đi với động từ 着る.', 'generated'),
  ('着物', 2, 'daily', '京都で初めて着物を着て歩きました。', 'Ở Kyoto tôi lần đầu mặc kimono đi dạo.', '京都で初めて_____を着て歩きました。', '着物', 1, '着物を着る là mặc kimono.', 'generated'),
  ('着物', 3, 'business', '海外のお客様に着物の歴史を説明しました。', 'Tôi đã giải thích lịch sử kimono cho khách nước ngoài.', '海外のお客様に_____の歴史を説明しました。', '着物', 2, 'Người được giải thích đi với に; nội dung đi với を.', 'generated'),

  ('美味しい', 1, 'exam', 'この料理は冷めても美味しいです。', 'Món này dù nguội vẫn ngon.', 'この料理は冷めても_____です。', '美味しい', 2, '～ても diễn tả dù ở điều kiện đó thì kết quả vẫn giữ nguyên.', 'generated'),
  ('美味しい', 2, 'daily', '駅前で美味しいラーメン屋を見つけました。', 'Tôi tìm thấy một quán ramen ngon trước ga.', '駅前で_____ラーメン屋を見つけました。', '美味しい', 1, '美味しい đứng trước danh từ để mô tả món/quán có đồ ăn ngon.', 'generated'),
  ('美味しい', 3, 'business', '社員食堂の新しいメニューは美味しいと評判です。', 'Thực đơn mới của nhà ăn nhân viên được đánh giá là ngon.', '社員食堂の新しいメニューは_____と評判です。', '美味しい', 3, '～と評判です nghĩa là được đánh giá/có tiếng là.', 'generated'),

  ('花', 1, 'exam', '庭に赤や白の花が咲いています。', 'Trong vườn đang nở hoa đỏ và trắng.', '庭に赤や白の_____が咲いています。', '花', 2, 'Màu sắc có thể nối bằng や; 花が咲く là hoa nở.', 'generated'),
  ('花', 2, 'daily', '母の誕生日に花を贈りました。', 'Tôi tặng hoa vào sinh nhật mẹ.', '母の誕生日に_____を贈りました。', '花', 1, '花を贈る là tặng hoa; 贈る thường dùng cho quà tặng.', 'generated'),
  ('花', 3, 'business', '受付に季節の花を飾りました。', 'Tôi trang trí hoa theo mùa tại quầy lễ tân.', '受付に季節の_____を飾りました。', '花', 2, 'Nơi trang trí đi với に; 花を飾る là trưng hoa.', 'generated'),

  ('赤い', 1, 'exam', '信号が赤いときは、道を渡ってはいけません。', 'Khi đèn đỏ thì không được qua đường.', '信号が_____ときは、道を渡ってはいけません。', '赤い', 2, '～てはいけません diễn tả cấm làm việc gì.', 'generated'),
  ('赤い', 2, 'daily', '赤いマフラーをして出かけました。', 'Tôi quàng khăn đỏ rồi ra ngoài.', '_____マフラーをして出かけました。', '赤い', 1, 'Khăn quàng thường đi với する hoặc 巻く.', 'generated'),
  ('赤い', 3, 'business', '赤いボタンは非常停止です。', 'Nút màu đỏ là nút dừng khẩn cấp.', '_____ボタンは非常停止です。', '赤い', 2, '非常停止 là dừng khẩn cấp; màu dùng để nhận diện nút.', 'generated'),

  ('青い', 1, 'exam', '晴れた日は空が青く見えます。', 'Ngày trời quang, bầu trời trông xanh.', '晴れた日は空が_____見えます。', '青く', 2, 'Tính từ đuôi い đổi thành ～く + 見える để nói trông có vẻ.', 'generated'),
  ('青い', 2, 'daily', '海で青い魚を見ました。', 'Tôi nhìn thấy cá màu xanh ở biển.', '海で_____魚を見ました。', '青い', 1, '青い đứng trực tiếp trước danh từ.', 'generated'),
  ('青い', 3, 'business', '青いファイルに契約書が入っています。', 'Hợp đồng nằm trong tập hồ sơ màu xanh.', '_____ファイルに契約書が入っています。', '青い', 1, 'NにNが入っている diễn tả vật nằm trong đồ chứa.', 'generated'),

  ('面白い', 1, 'exam', 'この本は難しいですが、内容は面白いです。', 'Cuốn sách này khó nhưng nội dung thú vị.', 'この本は難しいですが、内容は_____です。', '面白い', 1, '面白い nói nội dung thú vị hoặc gây cười tùy ngữ cảnh.', 'generated'),
  ('面白い', 2, 'daily', '友達から面白い話を聞きました。', 'Tôi nghe một câu chuyện thú vị từ bạn.', '友達から_____話を聞きました。', '面白い', 1, '面白い話 có thể là chuyện thú vị hoặc chuyện vui.', 'generated'),
  ('面白い', 3, 'business', '会議で面白いアイデアが出ました。', 'Trong cuộc họp đã xuất hiện một ý tưởng thú vị.', '会議で_____アイデアが出ました。', '面白い', 2, 'アイデアが出る là có/nảy ra ý tưởng.', 'generated'),

  ('食べ物', 1, 'exam', '日本の食べ物で何が一番好きですか。', 'Trong các món Nhật, bạn thích món nào nhất?', '日本の_____で何が一番好きですか。', '食べ物', 1, 'Phạm vi so sánh đi với で.', 'generated'),
  ('食べ物', 2, 'daily', '冷蔵庫に食べ物がほとんどありません。', 'Trong tủ lạnh hầu như không có đồ ăn.', '冷蔵庫に_____がほとんどありません。', '食べ物', 2, 'ほとんど + phủ định nghĩa là hầu như không.', 'generated'),
  ('食べ物', 3, 'business', '食べ物を扱う前に、手を洗ってください。', 'Trước khi xử lý thực phẩm, hãy rửa tay.', '_____を扱う前に、手を洗ってください。', '食べ物', 2, '食べ物を扱う là xử lý/tiếp xúc thực phẩm.', 'generated'),

  ('高い', 1, 'exam', '富士山は日本で一番高い山です。', 'Núi Phú Sĩ là ngọn núi cao nhất Nhật Bản.', '富士山は日本で一番_____山です。', '高い', 1, 'Nの中で一番高い diễn tả cao nhất trong phạm vi.', 'generated'),
  ('高い', 2, 'daily', 'この店は少し高いですが、料理がおいしいです。', 'Quán này hơi đắt nhưng đồ ăn ngon.', 'この店は少し_____ですが、料理がおいしいです。', '高い', 1, '高い có thể nghĩa là cao hoặc đắt tùy danh từ/ngữ cảnh.', 'generated'),
  ('高い', 3, 'business', '原料が高くなったので、商品の値段を見直します。', 'Vì nguyên liệu đắt lên nên chúng tôi sẽ xem xét lại giá sản phẩm.', '原料が_____なったので、商品の値段を見直します。', '高く', 3, '高くなる là trở nên đắt/cao; 値段を見直す là xem xét lại giá.', 'generated'),

  ('黒い', 1, 'exam', '黒い雲が出てきたので、雨が降りそうです。', 'Mây đen xuất hiện nên trời có vẻ sắp mưa.', '_____雲が出てきたので、雨が降りそうです。', '黒い', 2, '～そうです sau gốc động từ diễn tả có vẻ sắp xảy ra.', 'generated'),
  ('黒い', 2, 'daily', '今日は黒い靴を履いています。', 'Hôm nay tôi đang đi giày màu đen.', '今日は_____靴を履いています。', '黒い', 1, 'Màu sắc + danh từ; giày đi với 履く.', 'generated'),
  ('黒い', 3, 'business', '契約書には黒いペンで署名してください。', 'Vui lòng ký hợp đồng bằng bút màu đen.', '契約書には_____ペンで署名してください。', '黒い', 2, 'Dụng cụ ký đi với で; văn bản được ký đi với に.', 'generated')
)
insert into public.jp_vocab_examples
  (vocab_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, difficulty, focus_note, source_type)
select
  v.id, c.example_no, c.example_type, c.example_jp, c.example_vi,
  c.cloze_jp, c.answer, c.difficulty, c.focus_note, c.source_type
from curated c
join public.jp_vocab v
  on v.level = 'N5' and v.lesson_no = 4 and v.word_jp = c.word_jp
on conflict (vocab_id, example_no) do update set
  example_type = excluded.example_type,
  example_jp = excluded.example_jp,
  example_vi = excluded.example_vi,
  cloze_jp = excluded.cloze_jp,
  answer = excluded.answer,
  difficulty = excluded.difficulty,
  focus_note = excluded.focus_note,
  source_type = excluded.source_type;

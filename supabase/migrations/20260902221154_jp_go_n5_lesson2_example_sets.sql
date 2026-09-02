-- Hoàn thiện và làm mới bộ 3 ngữ cảnh cho toàn bộ 45 mục từ N5 bài 2.
-- Ví dụ số 1: đọc hiểu/dạng thi; số 2: đời thường; số 3: công việc.
-- Dữ liệu idempotent: chạy lại sẽ cập nhật đúng vị trí, không tạo bản sao.

with corrections(word_jp, reading_furigana, meaning_vi, usage_note_vi) as (values
  ('あの～', 'あの', '... kia', 'Đứng ngay trước danh từ; chỉ vật hoặc người ở xa cả người nói và người nghe.'),
  ('この～', 'この', '... này', 'Đứng ngay trước danh từ; chỉ vật hoặc người ở gần người nói.'),
  ('その～', 'その', '... đó', 'Đứng ngay trước danh từ; chỉ vật hoặc người ở gần người nghe hoặc vừa được nhắc tới.'),
  ('アイフォン', 'アイフォン', 'iPhone', 'Tên sản phẩm; trong văn bản tiếng Nhật hiện đại thường viết là iPhone.'),
  ('カード', 'カード', 'thẻ; thiệp', 'Có thể chỉ thẻ hoặc thiệp; cần dựa vào từ đứng trước và ngữ cảnh để xác định nghĩa.'),
  ('ほんの気持ち', 'ほんのきもち', 'chút lòng thành; món quà nhỏ thay lời cảm ơn', 'Cách nói khiêm nhường khi tặng một món quà nhỏ.'),
  ('何', 'なに／なん', 'cái gì; gì', 'Đọc là なん trước です, だ, trợ từ đếm và một số âm; các trường hợp khác thường đọc なに.'),
  ('充電器', 'じゅうでんき', 'bộ sạc, cục sạc', 'Thiết bị dùng để sạc điện thoại, máy tính hoặc pin.'),
  ('携帯', 'けいたい', 'điện thoại di động', 'Trong hội thoại, 携帯 thường là cách nói rút gọn của 携帯電話.'),
  ('違います', 'ちがいます', 'khác; không đúng; không phải', 'Dạng lịch sự của 違う; thường đi với Nと違います khi nói “khác với N”.')
)
update public.jp_vocab v
set
  reading_furigana = c.reading_furigana,
  meaning_vi = c.meaning_vi,
  usage_note_vi = c.usage_note_vi
from corrections c
where v.level = 'N5'
  and v.lesson_no = 2
  and v.word_jp = c.word_jp;

update public.jp_vocab
set
  word_class = '動詞',
  dictionary_form = '違う',
  verb_class = 'godan',
  transitivity = 'intransitive'
where level = 'N5'
  and lesson_no = 2
  and word_jp = '違います';

with curated(word_jp, example_no, example_type, example_jp, example_vi, cloze_jp, answer, difficulty, focus_note, source_type) as (values
  ('あの～', 1, 'exam', 'あの建物は図書館です。', 'Tòa nhà kia là thư viện.', '_____建物は図書館です。', 'あの', 1, 'あの đứng trước danh từ 建物 và chỉ vật ở xa cả hai bên.', 'generated'),
  ('あの～', 2, 'daily', 'あの店のパンはおいしいですよ。', 'Bánh mì của cửa hàng kia ngon đấy.', '_____店のパンはおいしいですよ。', 'あの', 1, 'あの + danh từ; không dùng あの một mình thay cho đồ vật.', 'generated'),
  ('あの～', 3, 'business', 'あの資料を会議室へ持ってきてください。', 'Hãy mang tài liệu kia vào phòng họp.', '_____資料を会議室へ持ってきてください。', 'あの', 2, 'Dùng あの資料 khi cả người nói và người nghe đều nhìn thấy tài liệu ở xa.', 'generated'),

  ('あれ', 1, 'exam', '遠くに見えるあれは何ですか。', 'Thứ nhìn thấy đằng xa kia là gì?', '遠くに見える_____は何ですか。', 'あれ', 2, 'あれ đứng độc lập, không đặt trực tiếp trước danh từ.', 'generated'),
  ('あれ', 2, 'daily', '山の上に見えるあれはお寺です。', 'Cái nhìn thấy trên núi kia là ngôi chùa.', '山の上に見える_____はお寺です。', 'あれ', 2, 'Dùng あれ cho vật ở xa cả người nói và người nghe.', 'generated'),
  ('あれ', 3, 'business', 'あれは来月使う新しい機械です。', 'Kia là chiếc máy mới sẽ dùng vào tháng sau.', '_____は来月使う新しい機械です。', 'あれ', 2, 'あれ thay cho đồ vật đã được chỉ ra; không cần danh từ theo sau.', 'generated'),

  ('この～', 1, 'exam', 'この電車は東京へ行きますか。', 'Chuyến tàu này có đi Tokyo không?', '_____電車は東京へ行きますか。', 'この', 1, 'この phải đi cùng danh từ, ở đây là 電車.', 'generated'),
  ('この～', 2, 'daily', 'このケーキ、一緒に食べませんか。', 'Cùng ăn chiếc bánh này nhé?', '_____ケーキ、一緒に食べませんか。', 'この', 1, 'この chỉ vật ở gần người nói; ～ませんか là lời rủ.', 'generated'),
  ('この～', 3, 'business', 'この書類に名前を書いてください。', 'Vui lòng viết tên vào giấy tờ này.', '_____書類に名前を書いてください。', 'この', 1, 'Nơi ghi nội dung đi với に: 書類に名前を書く.', 'generated'),

  ('これ', 1, 'exam', 'これはだれの傘ですか。', 'Đây là ô của ai?', '_____はだれの傘ですか。', 'これ', 1, 'これ đứng độc lập để chỉ vật gần người nói.', 'generated'),
  ('これ', 2, 'daily', 'これ、駅で買ったお土産です。', 'Đây là quà tôi mua ở nhà ga.', '_____、駅で買ったお土産です。', 'これ', 2, 'Trong hội thoại có thể lược は sau これ để lời nói tự nhiên hơn.', 'generated'),
  ('これ', 3, 'business', 'これは今日の会議で使う資料です。', 'Đây là tài liệu dùng trong cuộc họp hôm nay.', '_____は今日の会議で使う資料です。', 'これ', 2, 'Mệnh đề 今日の会議で使う bổ nghĩa cho 資料.', 'generated'),

  ('その～', 1, 'exam', 'その赤いかばんは山田さんのです。', 'Chiếc cặp màu đỏ đó là của anh Yamada.', '_____赤いかばんは山田さんのです。', 'その', 1, 'その đứng trước cả cụm danh từ 赤いかばん.', 'generated'),
  ('その～', 2, 'daily', 'その写真、いつ撮ったんですか。', 'Bức ảnh đó được chụp khi nào vậy?', '_____写真、いつ撮ったんですか。', 'その', 2, 'その có thể chỉ vật gần người nghe hoặc nội dung đang được nói tới.', 'generated'),
  ('その～', 3, 'business', 'その番号をこちらに入力してください。', 'Vui lòng nhập số đó vào đây.', '_____番号をこちらに入力してください。', 'その', 2, 'その番号 chỉ số mà người nghe đang có hoặc hai bên vừa nhắc tới.', 'generated'),

  ('それ', 1, 'exam', 'それは日本語で何ですか。', 'Cái đó trong tiếng Nhật gọi là gì?', '_____は日本語で何ですか。', 'それ', 1, 'それ đứng độc lập; ngôn ngữ dùng để nói đi với で.', 'generated'),
  ('それ', 2, 'daily', 'それ、少し見せてもらえますか。', 'Bạn cho tôi xem cái đó một chút được không?', '_____、少し見せてもらえますか。', 'それ', 2, 'それ chỉ vật gần người nghe; 見せてもらえますか là cách nhờ lịch sự.', 'generated'),
  ('それ', 3, 'business', 'それはお客様に送る商品です。', 'Đó là sản phẩm sẽ gửi cho khách hàng.', '_____はお客様に送る商品です。', 'それ', 2, 'Người nhận đi với に trong お客様に送る.', 'generated'),

  ('アイフォン', 1, 'exam', '兄のアイフォンは机の上にあります。', 'iPhone của anh tôi ở trên bàn.', '兄の_____は机の上にあります。', 'アイフォン', 1, 'Vị trí tồn tại của đồ vật dùng ～にあります.', 'generated'),
  ('アイフォン', 2, 'daily', '新しいアイフォンで家族の写真を撮りました。', 'Tôi đã chụp ảnh gia đình bằng chiếc iPhone mới.', '新しい_____で家族の写真を撮りました。', 'アイフォン', 1, 'Công cụ dùng để chụp ảnh đi với で.', 'generated'),
  ('アイフォン', 3, 'business', '会社のアイフォンに仕事のアプリを入れました。', 'Tôi đã cài ứng dụng công việc vào iPhone của công ty.', '会社の_____に仕事のアプリを入れました。', 'アイフォン', 2, 'Thiết bị được cài ứng dụng đi với に.', 'generated'),

  ('カード', 1, 'exam', '図書館で本を借りるとき、このカードを使います。', 'Khi mượn sách ở thư viện, tôi dùng thẻ này.', '図書館で本を借りるとき、この_____を使います。', 'カード', 2, 'カード là từ chung; ngữ cảnh cho biết đây là thẻ thư viện.', 'generated'),
  ('カード', 2, 'daily', '誕生日に友達からカードをもらいました。', 'Tôi nhận được một tấm thiệp từ bạn vào sinh nhật.', '誕生日に友達から_____をもらいました。', 'カード', 2, 'カード cũng có thể mang nghĩa thiệp; người cho đi với から.', 'generated'),
  ('カード', 3, 'business', '受付でこのカードを見せてください。', 'Vui lòng xuất trình thẻ này tại quầy lễ tân.', '受付でこの_____を見せてください。', 'カード', 1, 'Nơi thực hiện hành động đi với で.', 'generated'),

  ('かばん', 1, 'exam', '椅子の下に黒いかばんがあります。', 'Có một chiếc cặp màu đen dưới ghế.', '椅子の下に黒い_____があります。', 'かばん', 1, 'Đồ vật tồn tại dùng あります; vị trí đi với に.', 'generated'),
  ('かばん', 2, 'daily', '電車にかばんを忘れてしまいました。', 'Tôi lỡ để quên cặp trên tàu.', '電車に_____を忘れてしまいました。', 'かばん', 2, 'Nơi bỏ quên đồ đi với に; ～てしまいました thể hiện sự đáng tiếc.', 'generated'),
  ('かばん', 3, 'business', '大切な書類をこのかばんに入れました。', 'Tôi đã cho tài liệu quan trọng vào chiếc cặp này.', '大切な書類をこの_____に入れました。', 'かばん', 2, 'Vật chứa nhận đồ đi với に trong NをNに入れる.', 'generated'),

  ('カメラ', 1, 'exam', '旅行で新しいカメラを使いました。', 'Tôi đã dùng máy ảnh mới trong chuyến du lịch.', '旅行で新しい_____を使いました。', 'カメラ', 1, 'Đồ vật được sử dụng đi với を.', 'generated'),
  ('カメラ', 2, 'daily', '旅行の前にカメラの電池を充電しました。', 'Trước chuyến đi, tôi đã sạc pin máy ảnh.', '旅行の前に_____の電池を充電しました。', 'カメラ', 2, 'カメラの電池 là pin thuộc máy ảnh.', 'generated'),
  ('カメラ', 3, 'business', 'このカメラで製品の写真を撮ります。', 'Tôi sẽ chụp ảnh sản phẩm bằng máy ảnh này.', 'この_____で製品の写真を撮ります。', 'カメラ', 1, 'Phương tiện chụp ảnh đi với で.', 'generated'),

  ('クレジットカード', 1, 'exam', 'この店ではクレジットカードが使えます。', 'Ở cửa hàng này có thể dùng thẻ tín dụng.', 'この店では_____が使えます。', 'クレジットカード', 2, '使えます là thể khả năng: có thể sử dụng.', 'generated'),
  ('クレジットカード', 2, 'daily', 'この店ではクレジットカードで払えますか。', 'Ở cửa hàng này có thể thanh toán bằng thẻ tín dụng không?', 'この店では_____で払えますか。', 'クレジットカード', 2, 'Phương thức thanh toán đi với で; では nêu phạm vi cửa hàng.', 'generated'),
  ('クレジットカード', 3, 'business', '出張のホテル代を会社のクレジットカードで払いました。', 'Tôi đã trả tiền khách sạn chuyến công tác bằng thẻ tín dụng công ty.', '出張のホテル代を会社の_____で払いました。', 'クレジットカード', 3, '会社の thẻ hiện sở hữu; phương thức thanh toán đi với で.', 'generated'),

  ('シャープペンシル', 1, 'exam', '机の上にシャープペンシルが二本あります。', 'Có hai chiếc bút chì kim trên bàn.', '机の上に_____が二本あります。', 'シャープペンシル', 1, 'Đếm bút bằng 本（ほん／ぼん／ぽん）.', 'generated'),
  ('シャープペンシル', 2, 'daily', 'シャープペンシルの芯がなくなりました。', 'Bút chì kim đã hết ngòi.', '_____の芯がなくなりました。', 'シャープペンシル', 2, '芯（しん）là ruột/ngòi bút chì kim.', 'generated'),
  ('シャープペンシル', 3, 'business', '図面にメモするとき、シャープペンシルを使います。', 'Khi ghi chú lên bản vẽ, tôi dùng bút chì kim.', '図面にメモするとき、_____を使います。', 'シャープペンシル', 2, 'Nơi ghi chú đi với に; dụng cụ được dùng đi với を.', 'generated'),

  ('スリッパ', 1, 'exam', 'この部屋ではスリッパを履いてください。', 'Trong phòng này vui lòng đi dép trong nhà.', 'この部屋では_____を履いてください。', 'スリッパ', 1, 'Dép, giày và tất thường đi với động từ 履く.', 'generated'),
  ('スリッパ', 2, 'daily', '玄関でスリッパに履き替えてください。', 'Vui lòng thay sang dép trong nhà ở lối vào.', '玄関で_____に履き替えてください。', 'スリッパ', 2, 'Đồ thay sang đi với に trong Nに履き替える.', 'generated'),
  ('スリッパ', 3, 'business', '工場の事務所ではスリッパに履き替えます。', 'Ở văn phòng của nhà máy, chúng tôi thay sang dép trong nhà.', '工場の事務所では_____に履き替えます。', 'スリッパ', 2, 'Nơi áp dụng quy tắc được nêu bằng では.', 'generated'),

  ('そう', 1, 'exam', '「これは田中さんの本ですか。」「はい、そうです。」', '“Đây là sách của anh Tanaka phải không?” “Vâng, đúng vậy.”', '「これは田中さんの本ですか。」「はい、_____です。」', 'そう', 1, 'そう thay cho nội dung vừa được hỏi để xác nhận.', 'generated'),
  ('そう', 2, 'daily', 'そうですね、今日は早く帰りましょう。', 'Đúng nhỉ, hôm nay chúng ta về sớm nhé.', '_____ですね、今日は早く帰りましょう。', 'そう', 2, 'そうですね biểu thị đồng tình hoặc đang suy nghĩ trước khi trả lời.', 'generated'),
  ('そう', 3, 'business', '「会議は二時からですね。」「はい、そうです。」', '“Cuộc họp bắt đầu lúc hai giờ nhỉ?” “Vâng, đúng vậy.”', '「会議は二時からですね。」「はい、_____です。」', 'そう', 1, 'Dùng そうです để xác nhận thông tin vừa được nhắc lại.', 'generated'),

  ('テレビ', 1, 'exam', '父は毎晩テレビでニュースを見ます。', 'Tối nào bố tôi cũng xem tin tức trên tivi.', '父は毎晩_____でニュースを見ます。', 'テレビ', 1, 'Phương tiện xem nội dung đi với で.', 'generated'),
  ('テレビ', 2, 'daily', '晩ご飯を食べながらテレビを見ました。', 'Tôi vừa ăn tối vừa xem tivi.', '晩ご飯を食べながら_____を見ました。', 'テレビ', 2, 'Vます bỏ ます + ながら diễn tả hai hành động đồng thời.', 'generated'),
  ('テレビ', 3, 'business', '会議室のテレビに資料を映します。', 'Tôi sẽ chiếu tài liệu lên tivi trong phòng họp.', '会議室の_____に資料を映します。', 'テレビ', 2, 'Màn hình nhận hình ảnh đi với に trong Nに映す.', 'generated'),

  ('ノート', 1, 'exam', '先生の話をノートに書きました。', 'Tôi đã ghi lời thầy cô nói vào vở.', '先生の話を_____に書きました。', 'ノート', 1, 'Nơi ghi nội dung đi với に.', 'generated'),
  ('ノート', 2, 'daily', '大事なことをノートにメモしました。', 'Tôi đã ghi chú điều quan trọng vào vở.', '大事なことを_____にメモしました。', 'ノート', 2, 'ノートにメモする là cách kết hợp tự nhiên.', 'generated'),
  ('ノート', 3, 'business', '打ち合わせの内容をノートにまとめました。', 'Tôi đã tổng hợp nội dung trao đổi vào sổ.', '打ち合わせの内容を_____にまとめました。', 'ノート', 3, 'Nをノートにまとめる là tổng hợp nội dung vào sổ.', 'generated'),

  ('パソコン', 1, 'exam', 'パソコンで日本語の宿題をします。', 'Tôi làm bài tập tiếng Nhật bằng máy tính.', '_____で日本語の宿題をします。', 'パソコン', 1, 'Công cụ thực hiện hành động đi với で.', 'generated'),
  ('パソコン', 2, 'daily', '家のパソコンで映画を見ました。', 'Tôi đã xem phim bằng máy tính ở nhà.', '家の_____で映画を見ました。', 'パソコン', 1, '家のパソコン là máy tính ở nhà/của gia đình.', 'generated'),
  ('パソコン', 3, 'business', '会社のパソコンに新しいソフトを入れました。', 'Tôi đã cài phần mềm mới vào máy tính công ty.', '会社の_____に新しいソフトを入れました。', 'パソコン', 2, 'Thiết bị được cài phần mềm đi với に.', 'generated'),

  ('ヘッドフォン', 1, 'exam', '電車の中ではヘッドフォンで音楽を聞きます。', 'Trên tàu tôi nghe nhạc bằng tai nghe.', '電車の中では_____で音楽を聞きます。', 'ヘッドフォン', 1, 'Dụng cụ dùng để nghe đi với で.', 'generated'),
  ('ヘッドフォン', 2, 'daily', '夜はヘッドフォンで音楽を聞きます。', 'Buổi tối tôi nghe nhạc bằng tai nghe.', '夜は_____で音楽を聞きます。', 'ヘッドフォン', 1, 'ヘッドフォンで聞く nói phương tiện dùng để nghe.', 'generated'),
  ('ヘッドフォン', 3, 'business', 'オンライン会議ではヘッドフォンを使ってください。', 'Trong cuộc họp trực tuyến, vui lòng dùng tai nghe.', 'オンライン会議では_____を使ってください。', 'ヘッドフォン', 2, 'Nを使う: sử dụng đồ vật N.', 'generated'),

  ('ペン', 1, 'exam', '青いペンで答えを書きました。', 'Tôi đã viết câu trả lời bằng bút xanh.', '青い_____で答えを書きました。', 'ペン', 1, 'Dụng cụ viết đi với で.', 'generated'),
  ('ペン', 2, 'daily', 'ペンを貸してくれませんか。', 'Bạn cho tôi mượn bút được không?', '_____を貸してくれませんか。', 'ペン', 1, 'Nを貸してくれませんか là cách nhờ người khác cho mượn N.', 'generated'),
  ('ペン', 3, 'business', 'こちらのペンで書類にサインしてください。', 'Vui lòng ký vào giấy tờ bằng chiếc bút này.', 'こちらの_____で書類にサインしてください。', 'ペン', 2, 'Dụng cụ đi với で; nơi ký đi với に.', 'generated'),

  ('ボールペン', 1, 'exam', '机の上のボールペンはだれのですか。', 'Chiếc bút bi trên bàn là của ai?', '机の上の_____はだれのですか。', 'ボールペン', 1, 'だれのですか hỏi chủ sở hữu của đồ vật.', 'generated'),
  ('ボールペン', 2, 'daily', 'このボールペンは書きやすいです。', 'Chiếc bút bi này dễ viết.', 'この_____は書きやすいです。', 'ボールペン', 2, 'Vます bỏ ます + やすい diễn tả dễ thực hiện hành động.', 'generated'),
  ('ボールペン', 3, 'business', '申込書は黒いボールペンで書いてください。', 'Vui lòng điền đơn bằng bút bi màu đen.', '申込書は黒い_____で書いてください。', 'ボールペン', 2, 'Dụng cụ dùng để điền biểu mẫu đi với で.', 'generated'),

  ('ほんの気持ち', 1, 'exam', 'ほんの気持ちですが、旅行のお土産です。', 'Chỉ là chút lòng thành, đây là quà từ chuyến du lịch.', '_____ですが、旅行のお土産です。', 'ほんの気持ち', 2, 'ほんの気持ちですが làm lời tặng quà khiêm nhường.', 'generated'),
  ('ほんの気持ち', 2, 'daily', 'ほんの気持ちです。よかったら受け取ってください。', 'Chỉ là chút lòng thành. Nếu được thì xin hãy nhận.', '_____です。よかったら受け取ってください。', 'ほんの気持ち', 2, 'Dùng khi món quà nhỏ nhưng muốn thể hiện tấm lòng.', 'generated'),
  ('ほんの気持ち', 3, 'business', 'ほんの気持ちですが、皆さんで召し上がってください。', 'Chỉ là chút lòng thành, mời mọi người cùng dùng.', '_____ですが、皆さんで召し上がってください。', 'ほんの気持ち', 3, '召し上がってください là cách kính trọng khi mời người khác ăn.', 'generated'),

  ('何', 1, 'exam', '箱の中に何がありますか。', 'Trong hộp có gì?', '箱の中に_____がありますか。', '何', 1, 'Trước が đọc 何 là なに.', 'generated'),
  ('何', 2, 'daily', '今日は何を食べたいですか。', 'Hôm nay bạn muốn ăn gì?', '今日は_____を食べたいですか。', '何', 1, 'Trước を đọc 何 là なに.', 'generated'),
  ('何', 3, 'business', '会議で何を説明しますか。', 'Trong cuộc họp sẽ giải thích điều gì?', '会議で_____を説明しますか。', '何', 2, '何を hỏi đối tượng của hành động; ở đây đọc なにを.', 'generated'),

  ('傘', 1, 'exam', '雨が降っていますから、傘を持って行きます。', 'Vì trời đang mưa nên tôi mang ô đi.', '雨が降っていますから、_____を持って行きます。', '傘', 1, '傘を持って行く là mang ô đi tới nơi khác.', 'generated'),
  ('傘', 2, 'daily', '急に雨が降って、コンビニで傘を買いました。', 'Trời bất ngờ mưa nên tôi mua ô ở cửa hàng tiện lợi.', '急に雨が降って、コンビニで_____を買いました。', '傘', 2, 'Nơi mua đồ đi với で.', 'generated'),
  ('傘', 3, 'business', '入口の傘立てに傘を置いてください。', 'Vui lòng để ô vào giá ô ở lối vào.', '入口の傘立てに_____を置いてください。', '傘', 2, 'Nを場所に置く: đặt N tại một vị trí.', 'generated'),

  ('充電器', 1, 'exam', '旅行に携帯の充電器を持って行きます。', 'Tôi mang bộ sạc điện thoại theo khi đi du lịch.', '旅行に携帯の_____を持って行きます。', '充電器', 1, 'Thiết bị + の + 充電器 chỉ bộ sạc dành cho thiết bị đó.', 'generated'),
  ('充電器', 2, 'daily', '充電器を忘れて、携帯の電池がなくなりました。', 'Tôi quên bộ sạc nên điện thoại hết pin.', '_____を忘れて、携帯の電池がなくなりました。', '充電器', 2, '充電器を忘れる là quên mang bộ sạc.', 'generated'),
  ('充電器', 3, 'business', '会議室にパソコンの充電器を忘れました。', 'Tôi để quên bộ sạc máy tính trong phòng họp.', '会議室にパソコンの_____を忘れました。', '充電器', 2, 'Nơi bỏ quên đồ đi với に.', 'generated'),

  ('名刺', 1, 'exam', '名刺に会社の住所が書いてあります。', 'Địa chỉ công ty được ghi trên danh thiếp.', '_____に会社の住所が書いてあります。', '名刺', 2, 'NにNが書いてあります diễn tả nội dung được ghi sẵn.', 'generated'),
  ('名刺', 2, 'daily', '父の古い名刺を引き出しで見つけました。', 'Tôi tìm thấy danh thiếp cũ của bố trong ngăn kéo.', '父の古い_____を引き出しで見つけました。', '名刺', 2, 'Nơi tìm thấy đồ đi với で.', 'generated'),
  ('名刺', 3, 'business', '初めて会ったお客様と名刺を交換しました。', 'Tôi đã trao đổi danh thiếp với khách hàng lần đầu gặp.', '初めて会ったお客様と_____を交換しました。', '名刺', 2, '名刺を交換する là cụm cố định; người trao đổi cùng đi với と.', 'generated'),

  ('帽子', 1, 'exam', '暑い日は帽子をかぶります。', 'Ngày nóng tôi đội mũ.', '暑い日は_____をかぶります。', '帽子', 1, 'Mũ đi với động từ かぶる, không dùng 履く.', 'generated'),
  ('帽子', 2, 'daily', '日差しが強いので、帽子をかぶりました。', 'Vì nắng gắt nên tôi đã đội mũ.', '日差しが強いので、_____をかぶりました。', '帽子', 2, '帽子をかぶる là kết hợp đúng cho hành động đội mũ.', 'generated'),
  ('帽子', 3, 'business', '工場では会社の帽子をかぶります。', 'Trong nhà máy, chúng tôi đội mũ của công ty.', '工場では会社の_____をかぶります。', '帽子', 2, 'では nêu phạm vi áp dụng quy định tại nơi làm việc.', 'generated'),

  ('手帳', 1, 'exam', '来週の予定を手帳に書きました。', 'Tôi đã ghi lịch tuần sau vào sổ tay.', '来週の予定を_____に書きました。', '手帳', 1, 'Nơi ghi lịch đi với に.', 'generated'),
  ('手帳', 2, 'daily', '手帳に家族の予定を書いています。', 'Tôi ghi lịch của gia đình vào sổ tay.', '_____に家族の予定を書いています。', '手帳', 1, '手帳に予定を書く là cách kết hợp thông dụng.', 'generated'),
  ('手帳', 3, 'business', 'お客様との約束を手帳で確認しました。', 'Tôi đã kiểm tra lịch hẹn với khách trong sổ tay.', 'お客様との約束を_____で確認しました。', '手帳', 2, '手帳で確認する dùng で để chỉ phương tiện tra cứu.', 'generated'),

  ('携帯', 1, 'exam', '電車の中で携帯を見ている人が多いです。', 'Trên tàu có nhiều người đang xem điện thoại.', '電車の中で_____を見ている人が多いです。', '携帯', 2, '携帯 là cách nói rút gọn thông dụng của 携帯電話.', 'generated'),
  ('携帯', 2, 'daily', '寝る前に携帯を充電します。', 'Trước khi ngủ tôi sạc điện thoại.', '寝る前に_____を充電します。', '携帯', 1, 'Nを充電する: sạc thiết bị N.', 'generated'),
  ('携帯', 3, 'business', '仕事中は携帯をマナーモードにしてください。', 'Trong giờ làm việc, vui lòng để điện thoại ở chế độ im lặng.', '仕事中は_____をマナーモードにしてください。', '携帯', 2, 'Nを状態にする: chuyển N sang trạng thái đó.', 'generated'),

  ('新聞', 1, 'exam', '祖父は毎朝新聞を読みます。', 'Ông tôi đọc báo mỗi sáng.', '祖父は毎朝_____を読みます。', '新聞', 1, '新聞を読む là kết hợp cơ bản.', 'generated'),
  ('新聞', 2, 'daily', '喫茶店で新聞を読みながらコーヒーを飲みました。', 'Tôi vừa đọc báo vừa uống cà phê ở quán.', '喫茶店で_____を読みながらコーヒーを飲みました。', '新聞', 2, '読みながら diễn tả đọc báo đồng thời làm việc khác.', 'generated'),
  ('新聞', 3, 'business', '今日の新聞に会社の記事が載りました。', 'Bài viết về công ty đã xuất hiện trên báo hôm nay.', '今日の_____に会社の記事が載りました。', '新聞', 3, 'Nに記事が載る: bài viết được đăng trên N.', 'generated'),

  ('時計', 1, 'exam', '教室の時計は五分遅れています。', 'Đồng hồ trong lớp chậm năm phút.', '教室の_____は五分遅れています。', '時計', 2, '時計が遅れる là đồng hồ chạy chậm.', 'generated'),
  ('時計', 2, 'daily', 'この時計は祖父からもらったものです。', 'Chiếc đồng hồ này là món tôi nhận từ ông.', 'この_____は祖父からもらったものです。', '時計', 2, 'Người cho đi với から trong Nからもらう.', 'generated'),
  ('時計', 3, 'business', '会議室の時計を見たら、もう三時でした。', 'Khi nhìn đồng hồ phòng họp thì đã ba giờ rồi.', '会議室の_____を見たら、もう三時でした。', '時計', 2, '～たら ở đây diễn tả khi làm xong thì nhận ra kết quả.', 'generated'),

  ('本', 1, 'exam', '図書館で日本の歴史の本を借りました。', 'Tôi đã mượn sách lịch sử Nhật Bản ở thư viện.', '図書館で日本の歴史の_____を借りました。', '本', 1, '本を借りる là mượn sách; nơi mượn đi với で.', 'generated'),
  ('本', 2, 'daily', '寝る前に少し本を読みます。', 'Trước khi ngủ tôi đọc sách một chút.', '寝る前に少し_____を読みます。', '本', 1, '本を読む là kết hợp cơ bản.', 'generated'),
  ('本', 3, 'business', '仕事で使う本を会社の本棚に戻しました。', 'Tôi đã trả sách dùng cho công việc về giá sách công ty.', '仕事で使う_____を会社の本棚に戻しました。', '本', 2, 'Nを場所に戻す: trả N về vị trí.', 'generated'),

  ('机', 1, 'exam', '机の下に猫がいます。', 'Có một con mèo dưới bàn.', '_____の下に猫がいます。', '机', 1, 'Vị trí dùng Nの下; sinh vật tồn tại dùng います.', 'generated'),
  ('机', 2, 'daily', '子どもが机の上で絵を描いています。', 'Đứa trẻ đang vẽ tranh trên bàn.', '子どもが_____の上で絵を描いています。', '机', 1, 'Nơi diễn ra hành động đi với で.', 'generated'),
  ('机', 3, 'business', '会議が終わったら、机を元の場所に戻してください。', 'Sau khi họp xong, vui lòng trả bàn về vị trí cũ.', '会議が終わったら、_____を元の場所に戻してください。', '机', 2, '元の場所に戻す là đưa về vị trí ban đầu.', 'generated'),

  ('椅子', 1, 'exam', '窓のそばに椅子が二つあります。', 'Có hai chiếc ghế cạnh cửa sổ.', '窓のそばに_____が二つあります。', '椅子', 1, 'Đồ vật nói chung có thể đếm bằng つ.', 'generated'),
  ('椅子', 2, 'daily', '疲れたので、椅子に座って休みました。', 'Vì mệt nên tôi ngồi ghế nghỉ.', '疲れたので、_____に座って休みました。', '椅子', 1, 'Ghế được ngồi lên đi với に: 椅子に座る.', 'generated'),
  ('椅子', 3, 'business', 'お客様のために椅子を一つ用意しました。', 'Tôi đã chuẩn bị một chiếc ghế cho khách.', 'お客様のために_____を一つ用意しました。', '椅子', 2, 'Nのために biểu thị mục đích hoặc người được hưởng lợi.', 'generated'),

  ('消しゴム', 1, 'exam', '鉛筆で書いた字を消しゴムで消しました。', 'Tôi đã xóa chữ viết bằng bút chì bằng cục tẩy.', '鉛筆で書いた字を_____で消しました。', '消しゴム', 2, 'Dụng cụ dùng để xóa đi với で.', 'generated'),
  ('消しゴム', 2, 'daily', '消しゴムが見つからないので、友達に借りました。', 'Vì không tìm thấy tẩy nên tôi mượn bạn.', '_____が見つからないので、友達に借りました。', '消しゴム', 2, 'Người cho mượn đi với に trong Nに借りる.', 'generated'),
  ('消しゴム', 3, 'business', '図面の下書きを消しゴムで消して直しました。', 'Tôi đã tẩy và sửa bản nháp của bản vẽ.', '図面の下書きを_____で消して直しました。', '消しゴム', 2, '消しゴムで消して直す diễn tả rõ hai bước tẩy rồi sửa.', 'generated'),

  ('英語', 1, 'exam', '姉は大学で英語を勉強しています。', 'Chị tôi đang học tiếng Anh ở đại học.', '姉は大学で_____を勉強しています。', '英語', 1, 'Ngôn ngữ được học đi với を.', 'generated'),
  ('英語', 2, 'daily', '海外旅行で少し英語を使いました。', 'Tôi đã dùng một chút tiếng Anh trong chuyến du lịch nước ngoài.', '海外旅行で少し_____を使いました。', '英語', 1, 'Nói sử dụng ngôn ngữ: 英語を使う.', 'generated'),
  ('英語', 3, 'business', '海外のお客様には英語でメールを書きます。', 'Tôi viết email bằng tiếng Anh cho khách hàng nước ngoài.', '海外のお客様には_____でメールを書きます。', '英語', 2, 'Ngôn ngữ dùng để viết đi với で.', 'generated'),

  ('財布', 1, 'exam', '駅で財布を落としてしまいました。', 'Tôi lỡ đánh rơi ví ở nhà ga.', '駅で_____を落としてしまいました。', '財布', 2, '～てしまいました diễn tả việc không mong muốn đã xảy ra.', 'generated'),
  ('財布', 2, 'daily', '買い物のあと、財布に百円しか残っていませんでした。', 'Sau khi mua sắm, trong ví chỉ còn 100 yên.', '買い物のあと、_____に百円しか残っていませんでした。', '財布', 2, 'しか + phủ định mang nghĩa “chỉ còn…”.', 'generated'),
  ('財布', 3, 'business', '会社の机に財布を忘れました。', 'Tôi để quên ví trên bàn ở công ty.', '会社の机に_____を忘れました。', '財布', 1, 'Nơi bỏ quên đồ đi với に.', 'generated'),

  ('車', 1, 'exam', '父は車で会社へ行きます。', 'Bố tôi đi làm bằng ô tô.', '父は_____で会社へ行きます。', '車', 1, 'Phương tiện di chuyển đi với で.', 'generated'),
  ('車', 2, 'daily', '週末は家族と車で海へ行きました。', 'Cuối tuần tôi đi biển bằng ô tô cùng gia đình.', '週末は家族と_____で海へ行きました。', '車', 1, 'Người đi cùng dùng と; phương tiện dùng で.', 'generated'),
  ('車', 3, 'business', '商品を会社の車で運びます。', 'Chúng tôi vận chuyển hàng bằng xe của công ty.', '商品を会社の_____で運びます。', '車', 2, 'Phương tiện vận chuyển đi với で.', 'generated'),

  ('辞書', 1, 'exam', '分からない言葉を辞書で調べます。', 'Tôi tra từ không hiểu bằng từ điển.', '分からない言葉を_____で調べます。', '辞書', 1, '辞書で調べる là tra cứu bằng từ điển.', 'generated'),
  ('辞書', 2, 'daily', 'この辞書は小さくて持ち歩きやすいです。', 'Cuốn từ điển này nhỏ và dễ mang theo.', 'この_____は小さくて持ち歩きやすいです。', '辞書', 2, '持ち歩きやすい nghĩa là dễ mang theo bên mình.', 'generated'),
  ('辞書', 3, 'business', 'この専門用語を辞書で確認しました。', 'Tôi đã kiểm tra thuật ngữ chuyên môn này trong từ điển.', 'この専門用語を_____で確認しました。', '辞書', 3, 'Phương tiện dùng để xác nhận thông tin đi với で.', 'generated'),

  ('違います', 1, 'exam', '「これはあなたの傘ですか。」「いいえ、違います。」', '“Đây là ô của bạn phải không?” “Không, không phải.”', '「これはあなたの傘ですか。」「いいえ、_____。」', '違います', 1, '違います dùng phủ định điều vừa được hỏi mà không cần lặp cả câu.', 'generated'),
  ('違います', 2, 'daily', 'すみません、私の注文と違います。', 'Xin lỗi, món này khác với món tôi đã gọi.', 'すみません、私の注文と_____。', '違います', 2, 'Mốc so sánh đi với と: Nと違います.', 'generated'),
  ('違います', 3, 'business', '注文した数と違いますので、確認してください。', 'Vì số lượng khác với số đã đặt nên vui lòng kiểm tra.', '注文した数と_____ので、確認してください。', '違います', 2, 'Nと違いますので là cách lịch sự nêu sai khác và đề nghị kiểm tra.', 'generated'),

  ('鉛筆', 1, 'exam', '答えは鉛筆で書いてください。', 'Vui lòng viết câu trả lời bằng bút chì.', '答えは_____で書いてください。', '鉛筆', 1, 'Dụng cụ viết đi với で.', 'generated'),
  ('鉛筆', 2, 'daily', '子どもが鉛筆で動物の絵を描きました。', 'Đứa trẻ đã vẽ hình con vật bằng bút chì.', '子どもが_____で動物の絵を描きました。', '鉛筆', 1, 'Dụng cụ vẽ đi với で.', 'generated'),
  ('鉛筆', 3, 'business', '鉛筆で図面に印を付けました。', 'Tôi đã đánh dấu lên bản vẽ bằng bút chì.', '_____で図面に印を付けました。', '鉛筆', 2, '印を付ける là đánh dấu; dụng cụ đi với で.', 'generated'),

  ('鍵', 1, 'exam', '家の鍵をかばんに入れました。', 'Tôi đã cho chìa khóa nhà vào cặp.', '家の_____をかばんに入れました。', '鍵', 1, '家の鍵 là chìa khóa nhà; đồ chứa đi với に.', 'generated'),
  ('鍵', 2, 'daily', '出かける前に鍵をかけたか確認しました。', 'Trước khi ra ngoài tôi kiểm tra xem đã khóa cửa chưa.', '出かける前に_____をかけたか確認しました。', '鍵', 2, '鍵をかける là khóa cửa; ～たか確認する là kiểm tra đã làm chưa.', 'generated'),
  ('鍵', 3, 'business', '最後に帰る人は事務所の鍵をかけてください。', 'Người về cuối cùng vui lòng khóa văn phòng.', '最後に帰る人は事務所の_____をかけてください。', '鍵', 2, '事務所の鍵をかける là khóa cửa văn phòng.', 'generated'),

  ('雑誌', 1, 'exam', '図書館で旅行の雑誌を読みました。', 'Tôi đã đọc tạp chí du lịch ở thư viện.', '図書館で旅行の_____を読みました。', '雑誌', 1, 'Chủ đề + の + 雑誌: tạp chí về chủ đề đó.', 'generated'),
  ('雑誌', 2, 'daily', '美容院で雑誌を読みながら待ちました。', 'Tôi vừa đọc tạp chí vừa chờ ở tiệm làm tóc.', '美容院で_____を読みながら待ちました。', '雑誌', 2, '読みながら待つ là vừa đọc vừa chờ.', 'generated'),
  ('雑誌', 3, 'business', '会社の製品がこの雑誌に紹介されました。', 'Sản phẩm của công ty đã được giới thiệu trên tạp chí này.', '会社の製品がこの_____に紹介されました。', '雑誌', 3, 'Nに紹介される: được giới thiệu trên/trong N.', 'generated'),

  ('電話', 1, 'exam', '母に電話をかけました。', 'Tôi đã gọi điện cho mẹ.', '母に_____をかけました。', '電話', 1, '電話をかける là gọi điện; người nhận đi với に.', 'generated'),
  ('電話', 2, 'daily', '駅に着いたら電話してください。', 'Khi đến nhà ga hãy gọi điện cho tôi.', '駅に着いたら_____してください。', '電話', 1, '電話する có thể dùng như động từ với する.', 'generated'),
  ('電話', 3, 'business', 'お客様から電話がありました。', 'Có điện thoại từ khách hàng.', 'お客様から_____がありました。', '電話', 1, 'Người gọi đi với から trong Nから電話がある.', 'generated'),

  ('靴', 1, 'exam', '新しい靴を履いて学校へ行きました。', 'Tôi đi đôi giày mới đến trường.', '新しい_____を履いて学校へ行きました。', '靴', 1, 'Giày đi với động từ 履く.', 'generated'),
  ('靴', 2, 'daily', 'この靴は軽くて歩きやすいです。', 'Đôi giày này nhẹ và dễ đi.', 'この_____は軽くて歩きやすいです。', '靴', 2, '歩きやすい nghĩa là dễ đi bộ.', 'generated'),
  ('靴', 3, 'business', '工場に入る前に安全靴に履き替えます。', 'Trước khi vào nhà máy, tôi thay sang giày bảo hộ.', '工場に入る前に安全_____に履き替えます。', '靴', 2, '安全靴 là giày bảo hộ; đồ thay sang đi với に.', 'generated'),

  ('靴下', 1, 'exam', '白い靴下を三足買いました。', 'Tôi đã mua ba đôi tất trắng.', '白い_____を三足買いました。', '靴下', 2, 'Đếm giày và tất theo đôi bằng 足（そく）.', 'generated'),
  ('靴下', 2, 'daily', '洗濯した靴下が片方見つかりません。', 'Tôi không tìm thấy một chiếc tất đã giặt.', '洗濯した_____が片方見つかりません。', '靴下', 2, '片方 chỉ một bên trong một đôi.', 'generated'),
  ('靴下', 3, 'business', '制服と一緒に新しい靴下が配られました。', 'Tất mới đã được phát cùng với đồng phục.', '制服と一緒に新しい_____が配られました。', '靴下', 3, '配られました là thể bị động: được phát/phân phát.', 'generated')
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
  and v.lesson_no = 2
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

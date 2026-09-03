-- Hoàn thiện bộ 3 ngữ cảnh cho N5 bài 14 (33 mục).
update public.jp_vocab set word_class=case
 when word_jp in ('手伝う','呼ぶ','[右へ～]曲がる','[電気を～]消す','持つ','[電気を～]つける','急ぐ','止める','[ドアを～]開ける','取る','待つ','[雨が～]降る','話す','[住所を～]教える') then '動詞'
 when word_jp='同じ' then 'な形容詞' else '名詞' end,
 dictionary_form=case when word_jp='[右へ～]曲がる' then '曲がる' when word_jp='[電気を～]消す' then '消す'
 when word_jp='[電気を～]つける' then 'つける' when word_jp='[ドアを～]開ける' then '開ける'
 when word_jp='[雨が～]降る' then '降る' when word_jp='[住所を～]教える' then '教える'
 when word_jp like '～%' then substring(word_jp from 2) else word_jp end where level='N5' and lesson_no=14;

with fixes(word_jp,example_jp,example_vi,cloze_jp,answer) as (values
 ('電気','部屋を出る前に電気を消します。','Tôi tắt điện trước khi ra khỏi phòng.','部屋を出る前に_____を消します。','電気')
)
update public.jp_vocab_examples e set example_jp=f.example_jp,example_vi=f.example_vi,cloze_jp=f.cloze_jp,answer=f.answer
from fixes f join public.jp_vocab v on v.level='N5' and v.lesson_no=14 and v.word_jp=f.word_jp where e.vocab_id=v.id and e.example_no=2;

with curated(word_jp,example_no,example_jp,example_vi,cloze_jp,answer) as (values
 ('意味',1,'辞書で調べても、この文の意味が分かりません。','Tra từ điển rồi tôi vẫn không hiểu nghĩa câu này.','辞書で調べても、この文の_____が分かりません。','意味'),
 ('意味',3,'この記号の意味を新人に説明しました。','Tôi giải thích ý nghĩa ký hiệu này cho nhân viên mới.','この記号の_____を新人に説明しました。','意味'),
 ('布団',1,'天気がいいので、布団を外に干しました。','Trời đẹp nên tôi phơi chăn đệm bên ngoài.','天気がいいので、_____を外に干しました。','布団'),
 ('布団',3,'宿泊者のために新しい布団を用意しました。','Tôi chuẩn bị chăn đệm mới cho người lưu trú.','宿泊者のために新しい_____を用意しました。','布団'),
 ('現金',1,'この店ではカードが使えず、現金が必要です。','Cửa hàng này không dùng thẻ nên cần tiền mặt.','この店ではカードが使えず、_____が必要です。','現金'),
 ('現金',3,'会社の現金は金庫で管理しています。','Tiền mặt công ty được quản lý trong két.','会社の_____は金庫で管理しています。','現金'),
 ('ドア',1,'風が強いので、ドアを閉めてください。','Gió mạnh nên hãy đóng cửa.','風が強いので、_____を閉めてください。','ドア'),
 ('ドア',3,'非常口のドアの前に物を置かないでください。','Không để đồ trước cửa thoát hiểm.','非常口の_____の前に物を置かないでください。','ドア'),
 ('～方',1,'駅への行き方を先生に聞きました。','Tôi hỏi thầy cách đi tới ga.','駅への行き_____を先生に聞きました。','方'),
 ('～方',3,'機械の使い方を動画で説明します。','Tôi hướng dẫn cách dùng máy bằng video.','機械の使い_____を動画で説明します。','方'),
 ('手伝う',1,'忙しそうだったので、母の料理を手伝いました。','Thấy mẹ bận nên tôi giúp nấu ăn.','忙しそうだったので、母の料理を_____。','手伝いました'),
 ('手伝う',3,'作業が遅れている部署を手伝います。','Tôi giúp bộ phận đang chậm tiến độ.','作業が遅れている部署を_____。','手伝います'),
 ('呼ぶ',1,'分からないことがあったので、先生を呼びました。','Có điều không hiểu nên tôi gọi giáo viên.','分からないことがあったので、先生を_____。','呼びました'),
 ('呼ぶ',3,'機械が止まったら、担当者を呼んでください。','Nếu máy dừng hãy gọi người phụ trách.','機械が止まったら、担当者を_____ください。','呼んで'),
 ('[右へ～]曲がる',1,'郵便局の角を右へ曲がると、駅があります。','Rẽ phải ở góc bưu điện sẽ thấy ga.','郵便局の角を右へ_____と、駅があります。','曲がる'),
 ('[右へ～]曲がる',3,'工場の門を出て右へ曲がってください。','Ra khỏi cổng nhà máy rồi hãy rẽ phải.','工場の門を出て右へ_____ください。','曲がって'),
 ('窓',1,'窓から見える山は富士山です。','Ngọn núi nhìn qua cửa sổ là Phú Sĩ.','_____から見える山は富士山です。','窓'),
 ('窓',3,'退社前にすべての窓を閉めてください。','Hãy đóng toàn bộ cửa sổ trước khi về.','退社前にすべての_____を閉めてください。','窓'),
 ('[電気を～]消す',1,'寝る前に台所の電気を消しました。','Tôi tắt đèn bếp trước khi ngủ.','寝る前に台所の電気を_____。','消しました'),
 ('[電気を～]消す',3,'使用していない会議室の電気を消してください。','Hãy tắt điện phòng họp không sử dụng.','使用していない会議室の電気を_____ください。','消して'),
 ('エアコン',1,'暑くなったので、エアコンをつけました。','Trời nóng nên tôi bật điều hòa.','暑くなったので、_____をつけました。','エアコン'),
 ('エアコン',3,'退社時にエアコンが切れているか確認します。','Khi về tôi kiểm tra điều hòa đã tắt chưa.','退社時に_____が切れているか確認します。','エアコン'),
 ('名前',1,'持ち物には必ず名前を書いてください。','Hãy ghi tên lên đồ dùng.','持ち物には必ず_____を書いてください。','名前'),
 ('名前',3,'申請書のお名前に誤りがないかご確認ください。','Xin kiểm tra tên trên đơn có sai không.','申請書のお_____に誤りがないかご確認ください。','名前'),
 ('砂糖',1,'コーヒーに砂糖を二杯入れました。','Tôi cho hai thìa đường vào cà phê.','コーヒーに_____を二杯入れました。','砂糖'),
 ('砂糖',3,'健康のため、商品の砂糖を減らしました。','Vì sức khỏe, chúng tôi giảm đường trong sản phẩm.','健康のため、商品の_____を減らしました。','砂糖'),
 ('持つ',1,'荷物が多いので、この箱を持ってください。','Nhiều hành lý nên hãy cầm hộp này.','荷物が多いので、この箱を_____ください。','持って'),
 ('持つ',3,'入館するときは社員証を持ってきてください。','Khi vào tòa nhà hãy mang thẻ nhân viên.','入館するときは社員証を_____きてください。','持って'),
 ('電気',1,'この機械は電気をたくさん使います。','Máy này dùng nhiều điện.','この機械は_____をたくさん使います。','電気'),
 ('電気',3,'電気代を減らす方法を会議で話し合いました。','Chúng tôi bàn cách giảm tiền điện trong cuộc họp.','_____代を減らす方法を会議で話し合いました。','電気'),
 ('[電気を～]つける',1,'暗くなったので、部屋の電気をつけました。','Trời tối nên tôi bật điện trong phòng.','暗くなったので、部屋の電気を_____。','つけました'),
 ('[電気を～]つける',3,'作業を始める前に照明をつけてください。','Hãy bật đèn trước khi làm việc.','作業を始める前に照明を_____ください。','つけて'),
 ('急ぐ',1,'電車に遅れそうだったので、駅まで急ぎました。','Sắp trễ tàu nên tôi vội tới ga.','電車に遅れそうだったので、駅まで_____。','急ぎました'),
 ('急ぐ',3,'急いで作業すると危険なので、落ち着いてください。','Làm việc vội rất nguy hiểm nên hãy bình tĩnh.','_____作業すると危険なので、落ち着いてください。','急いで'),
 ('止める',1,'店の前に自転車を止めてはいけません。','Không được đỗ xe đạp trước cửa hàng.','店の前に自転車を_____はいけません。','止めて'),
 ('止める',3,'異常な音がしたら、すぐ機械を止めます。','Nếu có tiếng bất thường, tôi dừng máy ngay.','異常な音がしたら、すぐ機械を_____。','止めます'),
 ('[ドアを～]開ける',1,'暑かったので、ベランダのドアを開けました。','Vì nóng nên tôi mở cửa ban công.','暑かったので、ベランダのドアを_____。','開けました'),
 ('[ドアを～]開ける',3,'安全を確認してからドアを開けてください。','Hãy xác nhận an toàn rồi mở cửa.','安全を確認してからドアを_____ください。','開けて'),
 ('封筒',1,'写真を封筒に入れて祖母へ送りました。','Tôi cho ảnh vào phong bì gửi bà.','写真を_____に入れて祖母へ送りました。','封筒'),
 ('封筒',3,'契約書を封筒に入れて担当者へ渡しました。','Tôi bỏ hợp đồng vào phong bì và đưa người phụ trách.','契約書を_____に入れて担当者へ渡しました。','封筒'),
 ('電話番号',1,'迷子になったときのため、母の電話番号を覚えました。','Tôi nhớ số điện thoại mẹ phòng khi bị lạc.','迷子になったときのため、母の_____を覚えました。','電話番号'),
 ('電話番号',3,'緊急連絡先の電話番号を登録してください。','Hãy đăng ký số điện thoại liên lạc khẩn cấp.','緊急連絡先の_____を登録してください。','電話番号'),
 ('切手',1,'外国へ送る手紙には、この切手を貼ってください。','Hãy dán tem này lên thư gửi ra nước ngoài.','外国へ送る手紙には、この_____を貼ってください。','切手'),
 ('切手',3,'郵送用の切手をまとめて購入しました。','Tôi mua một lượt tem dùng gửi bưu điện.','郵送用の_____をまとめて購入しました。','切手'),
 ('同じ',1,'兄と私は同じ日に生まれました。','Anh tôi và tôi sinh cùng ngày.','兄と私は_____日に生まれました。','同じ'),
 ('同じ',3,'図面と同じ寸法か確認してください。','Hãy kiểm tra kích thước có giống bản vẽ không.','図面と_____寸法か確認してください。','同じ'),
 ('塩',1,'このスープは塩が少し足りません。','Món súp này hơi thiếu muối.','このスープは_____が少し足りません。','塩'),
 ('塩',3,'商品の塩分量を表示しています。','Chúng tôi hiển thị lượng muối của sản phẩm.','商品の_____分量を表示しています。','塩'),
 ('取る',1,'棚の上から青い箱を取ってください。','Hãy lấy hộp xanh từ trên kệ.','棚の上から青い箱を_____ください。','取って'),
 ('取る',3,'昼休みは交代で一時間取ります。','Chúng tôi luân phiên nghỉ trưa một giờ.','昼休みは交代で一時間_____。','取ります'),
 ('待つ',1,'友達が来るまで駅の前で待ちました。','Tôi đợi trước ga tới khi bạn tới.','友達が来るまで駅の前で_____。','待ちました'),
 ('待つ',3,'担当者が戻るまで少々お待ちください。','Xin chờ một chút tới khi người phụ trách quay lại.','担当者が戻るまで少々お_____ください。','待ち'),
 ('[雨が～]降る',1,'午後から雨が降るそうなので、傘を持っていきます。','Nghe nói chiều mưa nên tôi mang ô.','午後から雨が_____そうなので、傘を持っていきます。','降る'),
 ('[雨が～]降る',3,'強い雨が降った場合は作業を中止します。','Nếu mưa lớn, công việc sẽ dừng.','強い雨が_____場合は作業を中止します。','降った'),
 ('言葉',1,'知らない言葉をノートに書いて覚えます。','Tôi ghi từ chưa biết vào vở để nhớ.','知らない_____をノートに書いて覚えます。','言葉'),
 ('言葉',3,'専門的な言葉を使わずに説明しました。','Tôi giải thích không dùng từ chuyên môn.','専門的な_____を使わずに説明しました。','言葉'),
 ('住所',1,'引っ越したので、友達に新しい住所を知らせました。','Tôi chuyển nhà nên báo địa chỉ mới cho bạn.','引っ越したので、友達に新しい_____を知らせました。','住所'),
 ('住所',3,'配送先の住所に間違いがないか確認します。','Tôi kiểm tra địa chỉ giao hàng có sai không.','配送先の_____に間違いがないか確認します。','住所'),
 ('話す',1,'日本人の友達と毎日日本語で話しています。','Tôi nói tiếng Nhật hằng ngày với bạn người Nhật.','日本人の友達と毎日日本語で_____います。','話して'),
 ('話す',3,'会議で今後の予定について話しました。','Tôi nói về kế hoạch sắp tới trong cuộc họp.','会議で今後の予定について_____。','話しました'),
 ('読み方',1,'同じ漢字でも読み方が違うことがあります。','Cùng Kanji đôi khi có cách đọc khác.','同じ漢字でも_____が違うことがあります。','読み方'),
 ('読み方',3,'製品名の正しい読み方を一覧にしました。','Tôi lập danh sách cách đọc đúng tên sản phẩm.','製品名の正しい_____を一覧にしました。','読み方'),
 ('チケット',1,'売り切れる前に映画のチケットを予約しました。','Tôi đặt vé phim trước khi bán hết.','売り切れる前に映画の_____を予約しました。','チケット'),
 ('チケット',3,'出張のチケット代は会社が負担します。','Công ty chi trả tiền vé công tác.','出張の_____代は会社が負担します。','チケット'),
 ('[住所を～]教える',1,'友達に新しい住所を教えました。','Tôi cho bạn biết địa chỉ mới.','友達に新しい住所を_____。','教えました'),
 ('[住所を～]教える',3,'配送会社に正しい住所を教えてください。','Hãy cho công ty vận chuyển biết địa chỉ đúng.','配送会社に正しい住所を_____ください。','教えて')
)
insert into public.jp_vocab_examples(vocab_id,example_no,example_type,example_jp,example_vi,cloze_jp,answer,difficulty,focus_note,source_type)
select v.id,c.example_no,case c.example_no when 1 then 'exam' else 'business' end,c.example_jp,c.example_vi,c.cloze_jp,c.answer,
 case c.example_no when 1 then 1 else 2 end,case c.example_no when 1 then 'Ngữ cảnh JLPT và cấu trúc cơ bản.' else 'Cách dùng thực tế trong công việc.' end,'generated'
from curated c join public.jp_vocab v on v.level='N5' and v.lesson_no=14 and v.word_jp=c.word_jp
on conflict(vocab_id,example_no) do update set example_type=excluded.example_type,example_jp=excluded.example_jp,example_vi=excluded.example_vi,
 cloze_jp=excluded.cloze_jp,answer=excluded.answer,difficulty=excluded.difficulty,focus_note=excluded.focus_note,source_type=excluded.source_type;

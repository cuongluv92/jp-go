-- Hoàn tất phân loại N5 và loại bỏ các câu đời thường trùng giữa các mục.

alter table public.jp_vocab drop constraint if exists jp_vocab_word_class_check;
alter table public.jp_vocab add constraint jp_vocab_word_class_check check (
 word_class is null or word_class in
 ('動詞','動名詞','名詞','い形容詞','な形容詞','副詞','接続詞','複合動詞','カタカナ','助詞','代名詞','連体詞','感動詞','表現')
);

update public.jp_vocab set word_class='名詞',dictionary_form=word_jp
where level='N5' and word_class is null;

update public.jp_vocab set word_class='代名詞'
where level='N5' and word_jp in
 ('私','あなた','彼','彼女','私たち','あの人（あの方）','だれ（どなた）','これ','それ','あれ','何',
  'ここ','そこ','あそこ','どこ','こちら','そちら','あちら','どちら','どれ');

update public.jp_vocab set word_class='連体詞'
where level='N5' and word_jp in ('あの～','この～','その～','どんな');

update public.jp_vocab set word_class='感動詞'
where level='N5' and word_jp in ('はい','いいえ','そうですか');

update public.jp_vocab set word_class='表現'
where level='N5' and word_jp in
 ('お名前をもう一度お願いします','どうぞよろしくお願いします','～から来ました','お仕事は何ですか','失礼ですが');

with fixes(lesson_no,word_jp,example_jp,example_vi,cloze_jp,answer) as (values
 (16,'[シャワーを～]浴びる','運動の後でシャワーを浴びます。','Tôi tắm vòi sen sau khi vận động.','運動の後でシャワーを_____ます。','浴び'),
 (18,'弾く','姉は毎晩ピアノを弾きます。','Chị tôi chơi piano mỗi tối.','姉は毎晩ピアノを_____ます。','弾き'),
 (16,'[ボタンを～]押す','降りる前にバスのボタンを押します。','Tôi bấm nút xe buýt trước khi xuống.','降りる前にバスのボタンを_____ます。','押し'),
 (19,'[ホテルに～]泊まる','旅行では駅の近くのホテルに泊まります。','Khi du lịch tôi ở khách sạn gần ga.','旅行では駅の近くのホテルに_____ます。','泊まり'),
 (15,'知っている','私はその店の場所を知っています。','Tôi biết vị trí cửa hàng đó.','私はその店の場所を_____います。','知って'),
 (18,'洗う','料理の前に野菜をよく洗います。','Tôi rửa kỹ rau trước khi nấu.','料理の前に野菜をよく_____ます。','洗い'),
 (22,'[眼鏡を～]かける','本を読むときだけ眼鏡をかけます。','Tôi chỉ đeo kính khi đọc sách.','本を読むときだけ眼鏡を_____ます。','かけ'),
 (16,'入れる','紅茶に少し牛乳を入れます。','Tôi cho một chút sữa vào trà.','紅茶に少し牛乳を_____ます。','入れ'),
 (17,'痛い','昨日から腰が痛いです。','Tôi đau lưng từ hôm qua.','昨日から腰が_____です。','痛い')
)
update public.jp_vocab_examples e set example_jp=f.example_jp,example_vi=f.example_vi,cloze_jp=f.cloze_jp,answer=f.answer
from fixes f join public.jp_vocab v on v.level='N5' and v.lesson_no=f.lesson_no and v.word_jp=f.word_jp
where e.vocab_id=v.id and e.example_no=2;

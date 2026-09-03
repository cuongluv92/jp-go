-- Tách câu mẫu trùng giữa プール và 泳ぐ trong bài 13.
update public.jp_vocab_examples e set
 example_jp='毎週土曜日に千メートル泳ぎます。',
 example_vi='Mỗi thứ Bảy tôi bơi một nghìn mét.',
 cloze_jp='毎週土曜日に千メートル_____ます。',answer='泳ぎ'
from public.jp_vocab v
where e.vocab_id=v.id and v.level='N5' and v.lesson_no=13 and v.word_jp='泳ぐ' and e.example_no=2;

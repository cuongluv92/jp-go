-- Loại bỏ câu trùng phát hiện sau khi hoàn thiện bài 12.
with fixes(word_jp,example_no,example_jp,example_vi,cloze_jp,answer) as (values
 ('空港',3,'空港から会場までの送迎車を手配しました。','Tôi đã bố trí xe đưa đón từ sân bay tới địa điểm.','_____から会場までの送迎車を手配しました。','空港'),
 ('涼しい',2,'朝の公園は涼しいです。','Công viên buổi sáng mát mẻ.','朝の公園は_____です。','涼しい')
)
update public.jp_vocab_examples e set example_jp=f.example_jp,example_vi=f.example_vi,cloze_jp=f.cloze_jp,answer=f.answer
from fixes f join public.jp_vocab v on v.level='N5' and v.lesson_no=12 and v.word_jp=f.word_jp
where e.vocab_id=v.id and e.example_no=f.example_no;

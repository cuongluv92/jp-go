-- Loại bỏ các câu trùng còn lại trong N5 bài 1-10.

with fixes(lesson_no,word_jp,example_no,example_jp,example_vi,cloze_jp,answer) as (values
 (6,'人',2,'駅の前に大勢の人がいます。','Có đông người trước nhà ga.','駅の前に大勢の_____がいます。','人'),
 (10,'下',2,'いすの下にかばんがあります。','Dưới ghế có chiếc cặp.','いすの_____にかばんがあります。','下')
)
update public.jp_vocab_examples e
set example_jp=f.example_jp,example_vi=f.example_vi,cloze_jp=f.cloze_jp,answer=f.answer
from fixes f join public.jp_vocab v
 on v.level='N5' and v.lesson_no=f.lesson_no and v.word_jp=f.word_jp
where e.vocab_id=v.id and e.example_no=f.example_no;

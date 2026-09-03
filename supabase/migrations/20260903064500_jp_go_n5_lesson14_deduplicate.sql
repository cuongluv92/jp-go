-- Loại bỏ câu trùng phát hiện sau khi hoàn thiện bài 14.
with fixes(word_jp,example_jp,example_vi,cloze_jp,answer) as (values
 ('チケット','駅で新幹線のチケットを受け取ります。','Tôi nhận vé Shinkansen tại ga.','駅で新幹線の_____を受け取ります。','チケット'),
 ('[雨が～]降る','朝から強い雨が降っています。','Mưa lớn từ sáng.','朝から強い雨が_____います。','降って')
)
update public.jp_vocab_examples e set example_jp=f.example_jp,example_vi=f.example_vi,cloze_jp=f.cloze_jp,answer=f.answer
from fixes f join public.jp_vocab v on v.level='N5' and v.lesson_no=14 and v.word_jp=f.word_jp
where e.vocab_id=v.id and e.example_no=2;

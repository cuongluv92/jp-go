-- Loại bỏ câu trùng phát hiện sau khi hoàn thiện bài 11.
with fixes(word_jp,example_no,example_jp,example_vi,cloze_jp,answer) as (values
 ('全部で',2,'参加費は全部で三千円です。','Phí tham gia tổng cộng là 3.000 yên.','参加費は_____三千円です。','全部で'),
 ('一人',1,'休日に一人で美術館を見に行きました。','Ngày nghỉ tôi đi xem bảo tàng một mình.','休日に_____で美術館を見に行きました。','一人')
)
update public.jp_vocab_examples e
set example_jp=f.example_jp,example_vi=f.example_vi,cloze_jp=f.cloze_jp,answer=f.answer
from fixes f join public.jp_vocab v on v.level='N5' and v.lesson_no=11 and v.word_jp=f.word_jp
where e.vocab_id=v.id and e.example_no=f.example_no;

-- ============================================================
-- jp-go — Ngữ pháp N4, addendum cho "Vてしまう" (usage 3, trang in 39).
-- ============================================================

insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type)
select '319ce644-4062-4484-ac49-f71caed4ea82', id, 3, 'Đã hoàn thành (trung tính, không có sắc thái tiếc nuối)', 'V-て + しまいました', NULL, NULL, 39, 'pdf'
from jp_grammar where level = 'N4' and grammar_pattern = 'Vてしまう';

insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '319ce644-4062-4484-ac49-f71caed4ea82', 1, 'daily', '宿題を全部やってしまいました。', 'Tôi đã làm xong toàn bộ bài tập về nhà.', '宿題を全部＿＿＿。', 'やってしまいました', 'pdf'
from jp_grammar where level = 'N4' and grammar_pattern = 'Vてしまう';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '319ce644-4062-4484-ac49-f71caed4ea82', 2, 'daily', 'レポートをもう書いてしまいました。', 'Tôi đã viết xong báo cáo rồi.', 'レポートをもう＿＿＿。', '書いてしまいました', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = 'Vてしまう';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '319ce644-4062-4484-ac49-f71caed4ea82', 3, 'daily', '掃除をぜんぶしてしまいました。', 'Tôi đã dọn dẹp xong hết rồi.', '掃除をぜんぶ＿＿＿。', 'してしまいました', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = 'Vてしまう';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '319ce644-4062-4484-ac49-f71caed4ea82', 'fill_blank', 'Điền vào chỗ trống: 宿題を全部＿＿＿。', NULL, NULL, NULL, NULL, 'やってしまいました', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = 'Vてしまう';

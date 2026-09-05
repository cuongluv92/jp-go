-- jp-go N4: remove exact duplicated example sentences while preserving source lesson entries.
-- Idempotent: updates known existing example rows/slots only.

with fixes(id, example_jp, example_vi, cloze_jp, answer, focus_note) as (
values
('5a30149a-ae2f-4893-9419-62fa904657c1'::uuid,
 'この町は人口が多い。',
 'Thành phố này có dân số đông.',
 'この町は＿＿＿が多い。',
 '人口',
 '人口が多い／少ない＝dân số đông/ít.'),
('6a87ce7e-f72e-4443-bd4a-20326494d8c9'::uuid,
 '明日の説明会に出席する。',
 'Tham dự buổi giới thiệu ngày mai.',
 '明日の説明会に＿＿＿。',
 '出席する',
 '会議／説明会／式などに出席する.'),
('ae2d34ef-dad1-49a0-924d-c5a2a6085a12'::uuid,
 '明日の授業を欠席する。',
 'Vắng buổi học ngày mai.',
 '明日の授業を＿＿＿。',
 '欠席する',
 '授業／会議などを欠席する.'),
('cd4b8ef4-8462-43f7-9103-e1a8c53a080a'::uuid,
 '同僚を食事に誘う。',
 'Rủ đồng nghiệp đi ăn.',
 '同僚を食事に＿＿＿。',
 '誘う',
 '人を食事／映画／イベントに誘う.'),
('5defe78d-f101-4b44-b740-1ddf9768d347'::uuid,
 'この単語の発音を確認する。',
 'Kiểm tra cách phát âm của từ này.',
 'この単語の＿＿＿を確認する。',
 '発音',
 '発音を確認する／練習する.'),
('203f5cf4-5196-400a-9534-b58345b69f85'::uuid,
 '重い箱を二人で運ぶ。',
 'Hai người cùng khiêng chiếc hộp nặng.',
 '重い箱を二人で＿＿＿。',
 '運ぶ',
 '荷物／箱／資材などを運ぶ.')
)
update public.jp_vocab_examples e
set example_jp = f.example_jp,
    example_vi = f.example_vi,
    cloze_jp = f.cloze_jp,
    answer = f.answer,
    focus_note = f.focus_note
from fixes f
where e.id = f.id;

-- GENERATED_EXAMPLE_FIXES_BEGIN
with generated_fixes(vocab_id,example_no,example_type,example_jp,example_vi,cloze_jp,answer,difficulty,focus_note) as (
values
('52733857-5c14-4bbe-9c74-be045f53cb01'::uuid,1,'exam',
 '夜は明るくて安全な道を通るようにしています。',
 'Buổi tối tôi cố gắng đi theo những con đường sáng và an toàn.',
 '夜は明るくて＿＿＿な道を通るようにしています。',
 '安全',1,
 '安全だ／安全なN／安全にV。日常の移動で使う。')
)
update public.jp_vocab_examples e
set example_jp = f.example_jp,
    example_vi = f.example_vi,
    cloze_jp = f.cloze_jp,
    answer = f.answer,
    difficulty = f.difficulty,
    focus_note = f.focus_note
from generated_fixes f
where e.vocab_id = f.vocab_id
  and e.example_no = f.example_no
  and e.example_type = f.example_type;
-- GENERATED_EXAMPLE_FIXES_END

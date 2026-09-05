-- jp-go N5/N4 practice-question quality fixes.
-- Deterministic + idempotent. Run after base N5/N4 content has been loaded.

-- ---------------------------------------------------------------------------
-- A. N5 優しい: this was the only N5 vocabulary row with zero questions.
-- ---------------------------------------------------------------------------
insert into public.jp_vocab_questions(
  vocab_id, question_type, question_text,
  choice_1, choice_2, choice_3, choice_4, correct_answer,
  source_type, review_status, explanation_vi, difficulty, skill_tag
)
select v.id, 'choose_meaning', '"優しい" có nghĩa là gì?',
       'hiền; dịu dàng; tốt bụng', 'khó', 'lạnh (thời tiết)', 'đắt; cao',
       'hiền; dịu dàng; tốt bụng', 'generated', 'ok',
       '優しい（やさしい）: hiền; dịu dàng; tốt bụng.', 1, 'vocab_meaning'
from public.jp_vocab v
where v.level='N5' and v.word_jp='優しい' and v.reading_furigana='やさしい'
  and not exists (
    select 1 from public.jp_vocab_questions q
    where q.vocab_id=v.id and q.question_type='choose_meaning'
  );

insert into public.jp_vocab_questions(
  vocab_id, question_type, question_text,
  choice_1, choice_2, choice_3, choice_4, correct_answer,
  source_type, review_status, explanation_vi, difficulty, skill_tag
)
select v.id, 'choose_reading', '"優しい" đọc là gì?',
       'やさしい', 'むずかしい', 'さびしい', 'うれしい',
       'やさしい', 'generated', 'ok',
       '優しい đọc là やさしい.', 1, 'vocab_reading'
from public.jp_vocab v
where v.level='N5' and v.word_jp='優しい' and v.reading_furigana='やさしい'
  and not exists (
    select 1 from public.jp_vocab_questions q
    where q.vocab_id=v.id and q.question_type='choose_reading'
  );

insert into public.jp_vocab_questions(
  vocab_id, question_type, question_text,
  choice_1, choice_2, choice_3, choice_4, correct_answer,
  source_type, review_status, explanation_vi, difficulty, skill_tag
)
select v.id, 'choose_word_from_meaning', 'Từ nào có nghĩa "hiền; dịu dàng; tốt bụng"?',
       '優しい', '難しい', '寒い', '高い',
       '優しい', 'generated', 'ok',
       '優しい（やさしい）: hiền; dịu dàng; tốt bụng.', 1, 'vocab_word'
from public.jp_vocab v
where v.level='N5' and v.word_jp='優しい' and v.reading_furigana='やさしい'
  and not exists (
    select 1 from public.jp_vocab_questions q
    where q.vocab_id=v.id and q.question_type='choose_word_from_meaning'
  );

insert into public.jp_vocab_questions(
  vocab_id, question_type, question_text,
  choice_1, choice_2, choice_3, choice_4, correct_answer,
  source_type, review_status, explanation_vi, difficulty, skill_tag
)
select v.id, 'fill_blank', 'Điền từ còn thiếu: 田中先生は子どもたちにとても_____です。',
       null, null, null, null, '優しい',
       'generated', 'ok',
       '優しい: hiền/dịu dàng/tốt bụng. 「人に優しい」= đối xử dịu dàng/tốt với ai.', 1, 'vocab_context'
from public.jp_vocab v
where v.level='N5' and v.word_jp='優しい' and v.reading_furigana='やさしい'
  and not exists (
    select 1 from public.jp_vocab_questions q
    where q.vocab_id=v.id and q.question_type='fill_blank'
  );

-- N5 バス停 contains the kanji 停 but was missing the reading question.
insert into public.jp_vocab_questions(
  vocab_id, question_type, question_text,
  choice_1, choice_2, choice_3, choice_4, correct_answer,
  source_type, review_status, explanation_vi, difficulty, skill_tag
)
select v.id, 'choose_reading', '"バス停" đọc là gì?',
       'バスてい', 'バスえき', 'バスば', 'バスじょう',
       'バスてい', 'generated', 'ok',
       'バス停 đọc là バスてい.', 1, 'vocab_reading'
from public.jp_vocab v
where v.level='N5' and v.word_jp='バス停' and v.reading_furigana='バスてい'
  and not exists (
    select 1 from public.jp_vocab_questions q
    where q.vocab_id=v.id and q.question_type='choose_reading'
  );

-- ---------------------------------------------------------------------------
-- B. Fix the two N5 multiple-choice rows with duplicated distractors.
-- ---------------------------------------------------------------------------
update public.jp_vocab_questions
set choice_4='rẻ',
    review_status='ok',
    explanation_vi='難しい（むずかしい）: khó.'
where id='81926280-0ae6-45ef-83d0-9238f4e46c12'::uuid
  and question_type='choose_meaning'
  and correct_answer='khó';

update public.jp_vocab_questions
set choice_4='an toàn',
    review_status='ok',
    explanation_vi='危ない（あぶない）: nguy hiểm.'
where id='fb3d4d8f-4310-4fe5-8577-7ad310923ab2'::uuid
  and question_type='choose_meaning'
  and correct_answer='nguy hiểm';

-- ---------------------------------------------------------------------------
-- C. N4 Vてしまう (completion use): it had only fill_blank; add both missing
-- choose_meaning and choose_pattern questions for this exact usage.
-- ---------------------------------------------------------------------------
insert into public.jp_grammar_questions(
  grammar_id, usage_id, question_type, question_text,
  choice_1, choice_2, choice_3, choice_4, correct_answer,
  source_type, review_status, explanation_vi, difficulty, skill_tag
)
select 'eae25fb4-1d8d-4910-a34f-d4bb93063ff2'::uuid,
       '319ce644-4062-4484-ac49-f71caed4ea82'::uuid,
       'choose_meaning',
       '「宿題を全部やってしまいました。」の「てしまいました」はここでどんな意味ですか。',
       'Đã làm xong/hoàn tất', 'Đang làm dở', 'Sắp bắt đầu làm', 'Không cần làm',
       'Đã làm xong/hoàn tất', 'generated', 'ok',
       'Vてしまう có thể diễn tả hành động được hoàn tất; ở câu này là “đã làm xong toàn bộ bài tập”.',
       2, 'grammar_meaning'
where not exists (
  select 1 from public.jp_grammar_questions q
  where q.grammar_id='eae25fb4-1d8d-4910-a34f-d4bb93063ff2'::uuid
    and q.usage_id='319ce644-4062-4484-ac49-f71caed4ea82'::uuid
    and q.question_type='choose_meaning'
);

insert into public.jp_grammar_questions(
  grammar_id, usage_id, question_type, question_text,
  choice_1, choice_2, choice_3, choice_4, correct_answer,
  source_type, review_status, explanation_vi, difficulty, skill_tag
)
select 'eae25fb4-1d8d-4910-a34f-d4bb93063ff2'::uuid,
       '319ce644-4062-4484-ac49-f71caed4ea82'::uuid,
       'choose_pattern',
       'Chọn dạng Vてしまう để diễn tả “Tôi đã làm xong toàn bộ bài tập”: 宿題を全部＿＿＿。',
       'やってしまいました', 'やってみました', 'やっておきました', 'やるつもりです',
       'やってしまいました', 'generated', 'ok',
       'やる → やって + しまいました = やってしまいました.',
       2, 'grammar_pattern'
where not exists (
  select 1 from public.jp_grammar_questions q
  where q.grammar_id='eae25fb4-1d8d-4910-a34f-d4bb93063ff2'::uuid
    and q.usage_id='319ce644-4062-4484-ac49-f71caed4ea82'::uuid
    and q.question_type='choose_pattern'
);

-- ---------------------------------------------------------------------------
-- D. N4 reading practice: remove only tautological kana/katakana-only questions.
-- A reading question is retained for every entry containing kanji; "reading where
-- appropriate" therefore stays complete without asking e.g. やる → やる.
-- ---------------------------------------------------------------------------
delete from public.jp_vocab_questions q
using public.jp_vocab v
where q.vocab_id=v.id
  and v.level='N4'
  and q.question_type='choose_reading'
  and v.word_jp !~ '[一-龯々]';

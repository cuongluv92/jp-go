-- jp-go N4: keep generated meaning questions aligned after reviewed meaning corrections.
-- Run AFTER n4_vocab_certain_meaning_fixes.sql.
-- Idempotent: only vocabulary whose choose_meaning answer differs from current meaning_vi is touched.

-- Update the reverse-direction question first while the old choose_meaning answer still
-- identifies exactly which vocabulary entries changed meaning.
with affected as (
  select distinct v.id, v.word_jp, v.reading_furigana, v.meaning_vi
  from public.jp_vocab v
  join public.jp_vocab_questions qm
    on qm.vocab_id = v.id
   and qm.question_type = 'choose_meaning'
  where v.level = 'N4'
    and qm.correct_answer is distinct from v.meaning_vi
)
update public.jp_vocab_questions q
set question_text = format('Từ nào có nghĩa "%s"?', a.meaning_vi),
    explanation_vi = format('%s（%s）: %s', a.word_jp, a.reading_furigana, a.meaning_vi),
    review_status = 'ok'
from affected a
where q.vocab_id = a.id
  and q.question_type = 'choose_word_from_meaning';

-- Replace the old correct meaning in-place, preserving the three distractors and
-- the position of the correct option.
with affected as (
  select distinct v.id, v.word_jp, v.reading_furigana, v.meaning_vi
  from public.jp_vocab v
  join public.jp_vocab_questions qm
    on qm.vocab_id = v.id
   and qm.question_type = 'choose_meaning'
  where v.level = 'N4'
    and qm.correct_answer is distinct from v.meaning_vi
)
update public.jp_vocab_questions q
set choice_1 = case when q.choice_1 is not distinct from q.correct_answer then a.meaning_vi else q.choice_1 end,
    choice_2 = case when q.choice_2 is not distinct from q.correct_answer then a.meaning_vi else q.choice_2 end,
    choice_3 = case when q.choice_3 is not distinct from q.correct_answer then a.meaning_vi else q.choice_3 end,
    choice_4 = case when q.choice_4 is not distinct from q.correct_answer then a.meaning_vi else q.choice_4 end,
    correct_answer = a.meaning_vi,
    explanation_vi = format('%s（%s）: %s', a.word_jp, a.reading_furigana, a.meaning_vi),
    review_status = 'ok'
from affected a
where q.vocab_id = a.id
  and q.question_type = 'choose_meaning';

-- Hard guards: corrected meanings and both question directions must agree.
do $$
begin
  if exists (
    select 1
    from public.jp_vocab v
    join public.jp_vocab_questions q on q.vocab_id = v.id
    where v.level = 'N4'
      and q.question_type = 'choose_meaning'
      and q.correct_answer is distinct from v.meaning_vi
  ) then
    raise exception 'N4 meaning sync failed: choose_meaning answer differs from jp_vocab.meaning_vi';
  end if;

  if exists (
    select 1
    from public.jp_vocab v
    join public.jp_vocab_questions q on q.vocab_id = v.id
    where v.level = 'N4'
      and q.question_type = 'choose_word_from_meaning'
      and q.question_text is distinct from format('Từ nào có nghĩa "%s"?', v.meaning_vi)
  ) then
    raise exception 'N4 meaning sync failed: choose_word_from_meaning prompt differs from jp_vocab.meaning_vi';
  end if;
end $$;

-- jp-go N5/N4 final practice validation gate.
-- Read-only. Run AFTER all N5/N4 quality SQL files, together with validate_n5_n4_content.sql.
-- Any exception is a hard FAIL for the final handoff.

do $$
begin
  -- Every vocabulary entry needs the three core exercise directions.
  if exists (
    select 1
    from public.jp_vocab v
    where v.level in ('N5','N4')
      and not exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='choose_meaning')
  ) then
    raise exception 'Practice validation: vocabulary missing choose_meaning';
  end if;

  if exists (
    select 1
    from public.jp_vocab v
    where v.level in ('N5','N4')
      and not exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='choose_word_from_meaning')
  ) then
    raise exception 'Practice validation: vocabulary missing choose_word_from_meaning';
  end if;

  if exists (
    select 1
    from public.jp_vocab v
    where v.level in ('N5','N4')
      and not exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='fill_blank')
  ) then
    raise exception 'Practice validation: vocabulary missing fill_blank';
  end if;

  -- Reading is required when the displayed entry contains kanji.
  if exists (
    select 1
    from public.jp_vocab v
    where v.level in ('N5','N4')
      and v.word_jp ~ '[一-龯々]'
      and not exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='choose_reading')
  ) then
    raise exception 'Practice validation: kanji-bearing vocabulary missing choose_reading';
  end if;

  -- Kana/katakana-only reading questions are tautological and should not remain.
  if exists (
    select 1
    from public.jp_vocab v
    join public.jp_vocab_questions q on q.vocab_id=v.id
    where v.level in ('N5','N4')
      and q.question_type='choose_reading'
      and v.word_jp !~ '[一-龯々]'
  ) then
    raise exception 'Practice validation: tautological reading question remains for kana-only vocabulary';
  end if;

  -- Multiple-choice vocabulary questions must have four distinct options and
  -- the correct answer must be one of them.
  if exists (
    select 1
    from public.jp_vocab v
    join public.jp_vocab_questions q on q.vocab_id=v.id
    where v.level in ('N5','N4')
      and q.question_type in ('choose_meaning','choose_reading','choose_word_from_meaning')
      and (
        q.choice_1 is null or q.choice_2 is null or q.choice_3 is null or q.choice_4 is null
        or q.choice_1=q.choice_2 or q.choice_1=q.choice_3 or q.choice_1=q.choice_4
        or q.choice_2=q.choice_3 or q.choice_2=q.choice_4 or q.choice_3=q.choice_4
        or not (
          q.correct_answer is not distinct from q.choice_1
          or q.correct_answer is not distinct from q.choice_2
          or q.correct_answer is not distinct from q.choice_3
          or q.correct_answer is not distinct from q.choice_4
        )
      )
  ) then
    raise exception 'Practice validation: malformed vocabulary multiple-choice question';
  end if;
end $$;

-- Grammar-unit coverage. A unit is either one explicit usage or the parent grammar
-- itself when no usage rows exist.
do $$
begin
  if exists (
    with units as (
      select g.level, g.id grammar_id, u.id usage_id
      from public.jp_grammar g
      join public.jp_grammar_usages u on u.grammar_id=g.id
      where g.level in ('N5','N4')
      union all
      select g.level, g.id, null::uuid
      from public.jp_grammar g
      where g.level in ('N5','N4')
        and not exists (select 1 from public.jp_grammar_usages u where u.grammar_id=g.id)
    )
    select 1 from units u
    where not exists (
      select 1 from public.jp_grammar_questions q
      where q.grammar_id=u.grammar_id
        and q.usage_id is not distinct from u.usage_id
        and q.question_type='fill_blank'
    )
  ) then
    raise exception 'Practice validation: grammar unit missing fill_blank';
  end if;

  if exists (
    with units as (
      select g.level, g.id grammar_id, u.id usage_id
      from public.jp_grammar g
      join public.jp_grammar_usages u on u.grammar_id=g.id
      where g.level='N4'
      union all
      select g.level, g.id, null::uuid
      from public.jp_grammar g
      where g.level='N4'
        and not exists (select 1 from public.jp_grammar_usages u where u.grammar_id=g.id)
    )
    select 1 from units u
    where not exists (
      select 1 from public.jp_grammar_questions q
      where q.grammar_id=u.grammar_id
        and q.usage_id is not distinct from u.usage_id
        and q.question_type='choose_meaning'
    )
       or not exists (
      select 1 from public.jp_grammar_questions q
      where q.grammar_id=u.grammar_id
        and q.usage_id is not distinct from u.usage_id
        and q.question_type='choose_pattern'
    )
  ) then
    raise exception 'Practice validation: N4 grammar unit missing choose_meaning/choose_pattern';
  end if;

  if exists (
    with units as (
      select g.level, g.id grammar_id, u.id usage_id
      from public.jp_grammar g
      join public.jp_grammar_usages u on u.grammar_id=g.id
      where g.level='N5'
      union all
      select g.level, g.id, null::uuid
      from public.jp_grammar g
      where g.level='N5'
        and not exists (select 1 from public.jp_grammar_usages u where u.grammar_id=g.id)
    )
    select 1 from units u
    where not exists (
      select 1 from public.jp_grammar_questions q
      where q.grammar_id=u.grammar_id
        and q.usage_id is not distinct from u.usage_id
        and q.question_type='choose_meaning'
    )
       or not exists (
      select 1 from public.jp_grammar_questions q
      where q.grammar_id=u.grammar_id
        and q.usage_id is not distinct from u.usage_id
        and q.question_type='choose_connection'
    )
  ) then
    raise exception 'Practice validation: N5 grammar unit missing choose_meaning/choose_connection';
  end if;
end $$;

-- Human-readable summary after all hard guards pass.
select v.level,
       count(*) as vocab_count,
       count(*) filter (where exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='choose_meaning')) as with_choose_meaning,
       count(*) filter (where exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='choose_word_from_meaning')) as with_choose_word,
       count(*) filter (where exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='fill_blank')) as with_fill_blank,
       count(*) filter (where v.word_jp ~ '[一-龯々]' and exists (select 1 from public.jp_vocab_questions q where q.vocab_id=v.id and q.question_type='choose_reading')) as kanji_with_reading
from public.jp_vocab v
where v.level in ('N5','N4')
group by v.level
order by v.level;

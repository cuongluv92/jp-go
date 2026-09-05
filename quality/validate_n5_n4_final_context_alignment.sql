-- Final N5/N4 context/alignment gate.
-- Run after all N5/N4 mutation SQL, including zzzz_n5_n4_final_cloze_alignment.sql.
-- Read-only: raises on structural context, duplicate, or cloze-answer regressions.

do $$
declare n int;
begin
  -- Vocabulary: exact three distinct pedagogical roles per word.
  with x as (
    select v.id,v.level,count(e.id) total,
      count(*) filter(where e.example_type='exam') exam_n,
      count(*) filter(where e.example_type='daily') daily_n,
      count(*) filter(where e.example_type='business') business_n
    from public.jp_vocab v left join public.jp_vocab_examples e on e.vocab_id=v.id
    where v.level in ('N5','N4') group by v.id,v.level
  ) select count(*) into n from x where total<>3 or exam_n<>1 or daily_n<>1 or business_n<>1;
  if n<>0 then raise exception 'Vocabulary context-role coverage failed for % rows',n; end if;

  -- Every vocab cloze must reconstruct exactly the reviewed Japanese example.
  select count(*) into n
  from public.jp_vocab_examples e join public.jp_vocab v on v.id=e.vocab_id
  where v.level in ('N5','N4')
    and regexp_replace(regexp_replace(e.cloze_jp,'(_{3,}|＿{3,})',e.answer),'[[:space:]]','','g')
        is distinct from regexp_replace(e.example_jp,'[[:space:]]','','g');
  if n<>0 then raise exception 'Vocabulary cloze reconstruction failed for % examples',n; end if;

  -- No exact sentence reuse within a JLPT level.
  select count(*) into n from (
    select v.level,regexp_replace(btrim(e.example_jp),'[。！？!?]+$','','g') s,count(*) c
    from public.jp_vocab_examples e join public.jp_vocab v on v.id=e.vocab_id
    where v.level in ('N5','N4')
    group by v.level,regexp_replace(btrim(e.example_jp),'[。！？!?]+$','','g') having count(*)>1
  ) d;
  if n<>0 then raise exception 'Exact duplicated vocabulary sentences remain: % groups',n; end if;

  -- Grammar units = usages when present, otherwise grammar-level unit.
  with units as (
    select g.level,g.id grammar_id,u.id usage_id
    from public.jp_grammar g join public.jp_grammar_usages u on u.grammar_id=g.id
    where g.level in ('N5','N4')
    union all
    select g.level,g.id,null::uuid
    from public.jp_grammar g
    where g.level in ('N5','N4') and not exists(select 1 from public.jp_grammar_usages u where u.grammar_id=g.id)
  ), x as (
    select u.level,u.grammar_id,u.usage_id,count(e.id) total,
      count(*) filter(where e.example_type='standard') standard_n,
      count(*) filter(where e.example_type='daily') daily_n,
      count(*) filter(where e.example_type='business') business_n
    from units u left join public.jp_grammar_examples e
      on e.grammar_id=u.grammar_id and e.usage_id is not distinct from u.usage_id
    group by u.level,u.grammar_id,u.usage_id
  ) select count(*) into n from x where total<>3 or standard_n<>1 or daily_n<>1 or business_n<>1;
  if n<>0 then raise exception 'Grammar context-role coverage failed for % units',n; end if;

  select count(*) into n from (
    select g.level,regexp_replace(btrim(e.example_jp),'[。！？!?]+$','','g') s,count(*) c
    from public.jp_grammar_examples e join public.jp_grammar g on g.id=e.grammar_id
    where g.level in ('N5','N4')
    group by g.level,regexp_replace(btrim(e.example_jp),'[。！？!?]+$','','g') having count(*)>1
  ) d;
  if n<>0 then raise exception 'Exact duplicated grammar sentences remain: % groups',n; end if;

  -- Concrete grammar cloze defects found by the final audit may never recur.
  if exists(
    select 1 from public.jp_grammar_examples e join public.jp_grammar g on g.id=e.grammar_id
    where g.level in ('N5','N4')
      and e.cloze_jp ~ '(_{3,}|＿{3,})か[。！？!?]?$' and e.answer ~ 'か$'
  ) then raise exception 'Grammar blank already supplies final か but answer duplicates it'; end if;

  if exists(
    select 1 from public.jp_grammar_examples e join public.jp_grammar g on g.id=e.grammar_id
    where g.level in ('N5','N4')
      and regexp_replace(e.cloze_jp,'(_{3,}|＿{3,})',e.answer) like '%帰りられ%'
  ) then raise exception 'Invalid honorific reconstruction 帰りられ remains'; end if;

  if exists(
    select 1 from public.jp_vocab_examples e join public.jp_vocab v on v.id=e.vocab_id
    where v.level in ('N5','N4') and (
      nullif(btrim(e.example_jp),'') is null or nullif(btrim(e.example_vi),'') is null
      or nullif(btrim(e.cloze_jp),'') is null or nullif(btrim(e.answer),'') is null
    )
  ) then raise exception 'Vocabulary example has missing Japanese/translation/cloze/answer'; end if;

  if exists(
    select 1 from public.jp_grammar_examples e join public.jp_grammar g on g.id=e.grammar_id
    where g.level in ('N5','N4') and (
      nullif(btrim(e.example_jp),'') is null or nullif(btrim(e.example_vi),'') is null
      or nullif(btrim(e.cloze_jp),'') is null or nullif(btrim(e.answer),'') is null
    )
  ) then raise exception 'Grammar example has missing Japanese/translation/cloze/answer'; end if;
end $$;

select 'PASS: N5/N4 final context alignment gate' as result;
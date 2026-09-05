-- Read-only validation for jp-go N5/N4 content quality.
-- Run AFTER copying/applying the curated quality SQL into real Supabase migrations.

-- 1) Vocabulary: exactly one exam/daily/business example per word.
with x as (
  select v.level,v.id,v.word_jp,
         count(e.id) total,
         count(*) filter(where e.example_type='exam') exam_n,
         count(*) filter(where e.example_type='daily') daily_n,
         count(*) filter(where e.example_type='business') business_n
  from public.jp_vocab v
  left join public.jp_vocab_examples e on e.vocab_id=v.id
  where v.level in ('N5','N4')
  group by v.level,v.id,v.word_jp
)
select * from x
where total<>3 or exam_n<>1 or daily_n<>1 or business_n<>1
order by level,word_jp;

-- 2) Vocabulary examples: furigana coverage.
select v.level,
       count(*) as example_count,
       count(*) filter(where jsonb_array_length(coalesce(e.furigana_tokens,'[]'::jsonb))=0) as without_verified_furigana
from public.jp_vocab_examples e
join public.jp_vocab v on v.id=e.vocab_id
where v.level in ('N5','N4')
group by v.level order by v.level;

-- 3) Grammar unit coverage. A grammar with usages is validated per usage;
-- otherwise it is validated at grammar level with usage_id NULL.
with units as (
  select g.level,g.id grammar_id,u.id usage_id,g.grammar_pattern,u.usage_no
  from public.jp_grammar g
  join public.jp_grammar_usages u on u.grammar_id=g.id
  where g.level in ('N5','N4')
  union all
  select g.level,g.id,null::uuid,g.grammar_pattern,null::integer
  from public.jp_grammar g
  where g.level in ('N5','N4')
    and not exists(select 1 from public.jp_grammar_usages u where u.grammar_id=g.id)
), x as (
  select u.*,
         count(e.id) total,
         count(*) filter(where e.example_type='standard') standard_n,
         count(*) filter(where e.example_type='daily') daily_n,
         count(*) filter(where e.example_type='business') business_n
  from units u
  left join public.jp_grammar_examples e
    on e.grammar_id=u.grammar_id
   and e.usage_id is not distinct from u.usage_id
  group by u.level,u.grammar_id,u.usage_id,u.grammar_pattern,u.usage_no
)
select * from x
where total<>3 or standard_n<>1 or daily_n<>1 or business_n<>1
order by level,grammar_pattern,usage_no nulls first;

-- 4) Exact duplicated example sentences inside each level/module.
select 'vocab' module,v.level,e.example_jp,count(*) n
from public.jp_vocab_examples e join public.jp_vocab v on v.id=e.vocab_id
where v.level in ('N5','N4')
group by v.level,e.example_jp having count(*)>1
union all
select 'grammar',g.level,e.example_jp,count(*)
from public.jp_grammar_examples e join public.jp_grammar g on g.id=e.grammar_id
where g.level in ('N5','N4')
group by g.level,e.example_jp having count(*)>1
order by module,level,n desc;

-- 5) Rows still explicitly marked for review.
select 'vocab' module,level,word_jp item,review_status,correction_note
from public.jp_vocab where level in ('N5','N4') and review_status='needs_review'
union all
select 'grammar',level,grammar_pattern,review_status,correction_note
from public.jp_grammar where level in ('N5','N4') and review_status='needs_review'
order by module,level,item;

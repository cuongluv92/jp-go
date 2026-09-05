-- Final pedagogical coverage gate. Run after:
-- 1) kanji_n5_n4_reading_question_fixes.sql
-- 2) zz_kanji_n5_n4_final_compound_coverage.sql
-- 3) kanji_n5_n4_vocab_link_sync.sql

do $$
begin
  if exists (
    select 1 from public.jp_kanji k
    where k.level in ('N5','N4')
      and (select count(*) from public.jp_kanji_words w where w.kanji_id=k.id) < 2
  ) then raise exception 'Kanji has fewer than two representative words'; end if;

  if exists (
    select 1 from public.jp_kanji k
    join public.jp_kanji_readings r on r.kanji_id=k.id and r.is_main
    where k.level in ('N5','N4')
      and not exists (
        select 1 from public.jp_kanji_words w
        where w.kanji_id=k.id and w.reading_id=r.id
      )
  ) then raise exception 'Pedagogical main reading has no representative word'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q
    join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='choose_reading'
      and q.question_text like '%âm chính%'
  ) then raise exception 'Ambiguous singular main-reading wording remains'; end if;

  if exists (
    select 1 from public.jp_kanji_words w
    join public.jp_kanji k on k.id=w.kanji_id
    where k.level in ('N5','N4') and (
      nullif(btrim(w.word_jp),'') is null
      or nullif(btrim(w.word_furigana),'') is null
      or nullif(btrim(w.meaning_vi),'') is null
      or position(k.kanji_character in w.word_jp)=0
    )
  ) then raise exception 'Representative Kanji word is incomplete or does not contain target Kanji'; end if;
end $$;

select k.level,
       count(*) as kanji_count,
       min((select count(*) from public.jp_kanji_words w where w.kanji_id=k.id)) as min_words_per_kanji,
       count(*) filter(where exists(select 1 from public.jp_kanji_readings r where r.kanji_id=k.id and r.is_main)) as with_main_reading
from public.jp_kanji k
where k.level in ('N5','N4')
group by k.level order by k.level desc;
-- Read-only final gate for Kanji N5/N4 after all Kanji quality SQL has run.
-- Raises on any structural/coverage/question/link defect.

do $$
declare
  n5_count int;
  n4_count int;
begin
  select count(*) into n5_count from public.jp_kanji where level='N5';
  select count(*) into n4_count from public.jp_kanji where level='N4';
  if n5_count <> 98 then raise exception 'N5 Kanji count %, expected 98', n5_count; end if;
  if n4_count <> 208 then raise exception 'N4 Kanji count %, expected 208', n4_count; end if;

  if exists (
    select 1 from public.jp_kanji
    where level in ('N5','N4') and (
      nullif(btrim(kanji_character),'') is null or nullif(btrim(han_viet),'') is null
      or nullif(btrim(meaning_vi_summary),'') is null or stroke_count is null or stroke_count <= 0
      or nullif(btrim(radical),'') is null or review_status is distinct from 'ok'
    )
  ) then raise exception 'Kanji required metadata/review_status defect'; end if;

  if exists (
    select 1 from public.jp_kanji k
    where k.level in ('N5','N4') and not exists (
      select 1 from public.jp_kanji_readings r where r.kanji_id=k.id
    )
  ) then raise exception 'Kanji without any reading'; end if;

  if exists (
    select 1 from public.jp_kanji_readings r join public.jp_kanji k on k.id=r.kanji_id
    where k.level in ('N5','N4') and (
      r.reading_type not in ('on','kun') or nullif(btrim(r.reading_kana),'') is null
      or r.review_status is distinct from 'ok'
    )
  ) then raise exception 'Kanji reading field/review_status defect'; end if;

  if exists (
    select r.kanji_id,r.reading_type,r.reading_kana
    from public.jp_kanji_readings r join public.jp_kanji k on k.id=r.kanji_id
    where k.level in ('N5','N4')
    group by r.kanji_id,r.reading_type,r.reading_kana having count(*)>1
  ) then raise exception 'Duplicate Kanji reading'; end if;

  if exists (
    select 1 from public.jp_kanji k
    where k.level in ('N5','N4') and not exists (
      select 1 from public.jp_kanji_readings r where r.kanji_id=k.id and r.is_main
    )
  ) then raise exception 'Kanji without a main reading'; end if;

  if exists (
    select 1 from public.jp_kanji_words w join public.jp_kanji k on k.id=w.kanji_id
    where k.level in ('N5','N4') and (
      nullif(btrim(w.word_jp),'') is null or nullif(btrim(w.word_furigana),'') is null
      or nullif(btrim(w.meaning_vi),'') is null or w.review_status is distinct from 'ok'
      or position(k.kanji_character in w.word_jp)=0
    )
  ) then raise exception 'Kanji word field/target/review_status defect'; end if;

  if exists (
    select 1 from public.jp_kanji_words w
    join public.jp_kanji k on k.id=w.kanji_id
    left join public.jp_kanji_readings r on r.id=w.reading_id
    where k.level in ('N5','N4') and w.reading_id is not null and (r.id is null or r.kanji_id<>w.kanji_id)
  ) then raise exception 'Kanji word points to a reading of another Kanji'; end if;

  if exists (
    select 1 from public.jp_kanji_words w
    join public.jp_kanji k on k.id=w.kanji_id
    left join public.jp_vocab v on v.id::text=w.linked_vocab_id
    where k.level in ('N5','N4') and w.linked_vocab_id is not null
      and (v.id is null or v.word_jp is distinct from w.word_jp or v.reading_furigana is distinct from w.word_furigana)
  ) then raise exception 'Kanji linked_vocab_id does not exactly match word + furigana'; end if;

  if exists (
    select 1 from (
      select k.id,count(q.id) c,
             count(*) filter(where q.question_type='choose_kanji_from_meaning') ck,
             count(*) filter(where q.question_type='choose_reading') cr,
             count(*) filter(where q.question_type='choose_word_meaning') cw,
             count(*) filter(where q.question_type='write_reading') wr
      from public.jp_kanji k left join public.jp_kanji_questions q on q.kanji_id=k.id
      where k.level in ('N5','N4') group by k.id
    ) x where c<>4 or ck<>1 or cr<>1 or cw<>1 or wr<>1
  ) then raise exception 'Kanji question coverage is not exactly 4 required types per Kanji'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and (
      nullif(btrim(q.question_text),'') is null or nullif(btrim(q.correct_answer),'') is null
      or q.review_status is distinct from 'ok'
    )
  ) then raise exception 'Kanji question field/review_status defect'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type in ('choose_kanji_from_meaning','choose_reading','choose_word_meaning')
      and (q.choice_1 is null or q.choice_2 is null or q.choice_3 is null or q.choice_4 is null
        or cardinality(array(select distinct x from unnest(array[q.choice_1,q.choice_2,q.choice_3,q.choice_4]) x where x is not null))<>4
        or not (q.correct_answer=any(array[q.choice_1,q.choice_2,q.choice_3,q.choice_4])))
  ) then raise exception 'Kanji MCQ choices invalid/duplicated/correct answer missing'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='choose_kanji_from_meaning'
      and q.correct_answer is distinct from k.kanji_character
  ) then raise exception 'choose_kanji_from_meaning answer is not the target Kanji'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='choose_reading'
      and not exists (select 1 from public.jp_kanji_readings r where r.kanji_id=k.id and r.reading_kana=q.correct_answer)
  ) then raise exception 'choose_reading answer is not a stored reading'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='choose_reading'
      and q.question_text ilike '%âm ON%'
      and not exists (select 1 from public.jp_kanji_readings r where r.kanji_id=k.id and r.reading_kana=q.correct_answer and r.reading_type='on')
  ) then raise exception 'Question says ON but answer is not ON'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='choose_reading'
      and q.question_text ilike '%âm KUN%'
      and not exists (select 1 from public.jp_kanji_readings r where r.kanji_id=k.id and r.reading_kana=q.correct_answer and r.reading_type='kun')
  ) then raise exception 'Question says KUN but answer is not KUN'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='choose_reading'
      and q.question_text ilike '%âm chính%'
      and not exists (select 1 from public.jp_kanji_readings r where r.kanji_id=k.id and r.reading_kana=q.correct_answer and r.is_main)
  ) then raise exception 'Question says main reading but answer is not marked main'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='choose_word_meaning'
      and not exists (
        select 1 from public.jp_kanji_words w where w.kanji_id=k.id
          and w.word_jp=regexp_replace(q.question_text, '^.*"([^"]+)".*$', '\1')
          and w.meaning_vi=q.correct_answer
      )
  ) then raise exception 'choose_word_meaning does not match an actual Kanji word'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type='write_reading'
      and not exists (
        select 1 from public.jp_kanji_words w where w.kanji_id=k.id
          and w.word_jp=btrim(regexp_replace(q.question_text, '^.*từ:\s*', ''))
          and w.word_furigana=q.correct_answer
      )
  ) then raise exception 'write_reading does not match an actual Kanji word'; end if;

  -- Known source-PDF extraction traps found by the independent KANJIDIC/Kanjipedia audit.
  if exists (
    select 1 from public.jp_kanji k join public.jp_kanji_readings r on r.kanji_id=k.id
    where k.level='N5' and ((k.kanji_character='千' and r.reading_kana='ぜん') or (k.kanji_character='生' and r.reading_kana='じょう')
      or (k.kanji_character='分' and r.reading_kana='ぷん') or (k.kanji_character='本' and r.reading_kana in ('ぼん','ぽん'))
      or (k.kanji_character='下' and r.reading_kana='へ') or (k.kanji_character='子' and r.reading_kana='ご')
      or (k.kanji_character='出' and r.reading_kana='しゅ') or (k.kanji_character='物' and r.reading_kana='ぶっ'))
  ) then raise exception 'Compound-only sound change remains as standalone Kanji reading'; end if;

  if not exists (
    select 1 from public.jp_kanji k join public.jp_kanji_readings r on r.kanji_id=k.id
    where k.level='N4' and k.kanji_character='図' and r.reading_type='on' and r.reading_kana='ト'
  ) then raise exception '図=ト ON-reading correction missing'; end if;
end $$;

select
  k.level,
  count(distinct k.id) as kanji_count,
  count(distinct r.id) as reading_count,
  count(distinct w.id) as word_count,
  count(distinct q.id) as question_count,
  count(distinct w.id) filter(where w.linked_vocab_id is not null) as linked_word_count
from public.jp_kanji k
left join public.jp_kanji_readings r on r.kanji_id=k.id
left join public.jp_kanji_words w on w.kanji_id=k.id
left join public.jp_kanji_questions q on q.kanji_id=k.id
where k.level in ('N5','N4')
group by k.level order by k.level desc;

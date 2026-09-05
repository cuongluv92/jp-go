-- Link Kanji example words to jp_vocab only when word + furigana identify
-- one deterministic target. Ambiguous homographs remain NULL by design.
with matches as (
  select
    w.id as word_id,
    k.level as kanji_level,
    v.id::text as vocab_id,
    v.level as vocab_level,
    count(*) over (partition by w.id) as total_matches,
    count(*) filter (where v.level = k.level) over (partition by w.id) as same_level_matches
  from public.jp_kanji_words w
  join public.jp_kanji k on k.id = w.kanji_id
  join public.jp_vocab v
    on v.word_jp = w.word_jp
   and v.reading_furigana = w.word_furigana
  where k.level in ('N5','N4')
), chosen as (
  select
    word_id,
    max(vocab_id) filter (where vocab_level = kanji_level and same_level_matches = 1) as same_level_vocab_id,
    max(vocab_id) filter (where total_matches = 1) as globally_unique_vocab_id,
    max(same_level_matches) as same_level_matches,
    max(total_matches) as total_matches
  from matches
  group by word_id
), safe as (
  select
    word_id,
    case
      when same_level_matches = 1 then same_level_vocab_id
      when same_level_matches = 0 and total_matches = 1 then globally_unique_vocab_id
      else null
    end as vocab_id
  from chosen
)
update public.jp_kanji_words w
set linked_vocab_id = safe.vocab_id,
    correction_note = case
      when coalesce(w.correction_note,'') = '' then '独立監査: word_jp + furigana の一意一致で語彙項目へ安全にリンク。'
      else w.correction_note
    end
from safe
where w.id = safe.word_id
  and safe.vocab_id is not null
  and w.linked_vocab_id is distinct from safe.vocab_id;

-- Guard: every non-null link in N5/N4 must match both surface and reading.
do $$
begin
  if exists (
    select 1
    from public.jp_kanji_words w
    join public.jp_kanji k on k.id=w.kanji_id
    left join public.jp_vocab v on v.id::text=w.linked_vocab_id
    where k.level in ('N5','N4') and w.linked_vocab_id is not null
      and (v.id is null or v.word_jp is distinct from w.word_jp or v.reading_furigana is distinct from w.word_furigana)
  ) then raise exception 'Unsafe Kanji-to-vocab link detected'; end if;
end $$;

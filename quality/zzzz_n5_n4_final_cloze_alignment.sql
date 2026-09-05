-- Final N5/N4 cloze-answer alignment fixes.
-- Run after zz_n5_n4_final_language_polish.sql and before final validators.
-- Only concrete defects found by independent reconstruction QA are changed.

-- ---------------------------------------------------------------------------
-- Vocabulary: answer + blank must reconstruct a natural complete sentence.
-- ---------------------------------------------------------------------------
update public.jp_vocab_examples
set example_jp='雨がやむまで、ここで待ちます。',
    example_vi='Tôi sẽ đợi ở đây cho đến khi mưa tạnh.',
    cloze_jp='雨が_____まで、ここで待ちます。',
    answer='やむ',
    focus_note='雨がやむ＝mưa tạnh; tự động từ, chủ ngữ thời tiết dùng が.'
where id='ef149d7c-328e-47f1-a1a7-2ef529e1f7f4'::uuid;

update public.jp_vocab_examples
set example_jp='無理をすると、体を壊します。',
    example_vi='Nếu cố quá sức, bạn sẽ làm hại sức khỏe.',
    cloze_jp='_____と、体を壊します。',
    answer='無理をする',
    focus_note='無理をする＝cố quá sức; 無理をしない＝không cố quá sức.'
where id='4b016318-ea22-4f69-9f46-8de885093f9e'::uuid;

-- ---------------------------------------------------------------------------
-- Grammar: when the cloze already contains sentence-final か, the answer must
-- not contain another か. Otherwise the reconstructed prompt becomes かか.
-- ---------------------------------------------------------------------------
with fixes(id,answer,note) as (values
 ('f384ccc7-47a2-4cc9-bfa3-1efe4d9e2d9f'::uuid,'できます','Cloze đã có か; đáp án chỉ điền できます.'),
 ('8458956f-80b6-4436-9c91-972c4108d3dd'::uuid,'お探しです','Cloze đã có か; đáp án chỉ điền お探しです.'),
 ('b1fd8e47-e296-445e-ae2f-90be50213eac'::uuid,'お持ちです','Cloze đã có か; đáp án chỉ điền お持ちです.'),
 ('be8d88de-948c-4629-906d-3048f9f6d795'::uuid,'お困りです','Cloze đã có か; đáp án chỉ điền お困りです.'),
 ('fa1acd3e-9676-47d5-a975-001d69a0a184'::uuid,'召し上がります','Cloze đã có か; đáp án chỉ điền 召し上がります.'),
 ('ba82df68-242e-474d-b8fe-caea1bf3e17e'::uuid,'ご存じです','Cloze đã có か; đáp án chỉ điền ご存じです.'),
 ('0a10533b-1f50-458b-9f3c-b44498f37873'::uuid,'ご存じです','Cloze đã có か; đáp án chỉ điền ご存じです.'),
 ('9faab6ba-2968-4213-bd44-299ef11d8cdb'::uuid,'ご存じです','Cloze đã có か; đáp án chỉ điền ご存じです.'),
 ('53491a11-1fc7-4389-b942-264b659f9868'::uuid,'しています','Cloze đã có か; đáp án chỉ điền しています.')
)
update public.jp_grammar_examples e
set answer=f.answer,
    review_status='ok',
    correction_note=concat_ws('; ',nullif(e.correction_note,''),'Final cloze QA: '||f.note)
from fixes f where e.id=f.id;

-- 尊敬語: 帰る -> 帰られる, not 帰りられる.
update public.jp_grammar_examples
set cloze_jp='＿＿＿か。',
    answer='帰られました',
    review_status='ok',
    correction_note=concat_ws('; ',nullif(correction_note,''),'Final cloze QA: 尊敬語の受身形は 帰る→帰られる。旧 cloze は「帰りられました」を生成していたため修正。')
where id='8d2d70cb-19cd-4c60-a940-696c4ca9416a'::uuid;

-- ---------------------------------------------------------------------------
-- Guards for the concrete failure classes found in this audit.
-- ---------------------------------------------------------------------------
do $$
begin
  if exists (
    select 1
    from public.jp_vocab_examples e join public.jp_vocab v on v.id=e.vocab_id
    where v.level in ('N5','N4')
      and regexp_replace(regexp_replace(e.cloze_jp,'(_{3,}|＿{3,})',e.answer),'[[:space:]]','','g')
          is distinct from regexp_replace(e.example_jp,'[[:space:]]','','g')
  ) then raise exception 'N5/N4 vocabulary cloze + answer does not reconstruct example_jp'; end if;

  if exists (
    select 1 from public.jp_grammar_examples e join public.jp_grammar g on g.id=e.grammar_id
    where g.level in ('N5','N4')
      and e.cloze_jp ~ 'か[。！？!?]?$'
      and e.answer ~ 'か$'
  ) then raise exception 'Grammar cloze already contains か but answer also ends in か'; end if;

  if exists (
    select 1 from public.jp_grammar_examples e join public.jp_grammar g on g.id=e.grammar_id
    where g.level in ('N5','N4')
      and regexp_replace(e.cloze_jp,'(_{3,}|＿{3,})',e.answer) like '%帰りられ%'
  ) then raise exception 'Invalid honorific form 帰りられ remains'; end if;
end $$;
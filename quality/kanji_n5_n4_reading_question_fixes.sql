-- Final independent QA fixes for N5/N4 Kanji.
-- Idempotent and safe to run after the existing Kanji migrations.

-- ---------------------------------------------------------------------------
-- 1) Correct reading classification: 図・ト is ON, not KUN.
--    漢字ペディア lists 音: ズ・ト. Keep ト as the existing app's main reading.
-- ---------------------------------------------------------------------------
update public.jp_kanji_readings r
set reading_type = 'on', reading_kana = 'ト', review_status = 'ok',
    correction_note = '独立監査: 図のトは訓読みではなく音読み。漢字ペディア（音: ズ・ト）に合わせて修正。'
from public.jp_kanji k
where r.kanji_id = k.id and k.level = 'N4' and k.kanji_character = '図'
  and r.reading_type = 'kun' and r.reading_kana = 'と';

update public.jp_kanji_questions q
set correct_answer = 'ト',
    choice_1 = case when choice_1 = 'と' then 'ト' else choice_1 end,
    choice_2 = case when choice_2 = 'と' then 'ト' else choice_2 end,
    choice_3 = case when choice_3 = 'と' then 'ト' else choice_3 end,
    choice_4 = case when choice_4 = 'と' then 'ト' else choice_4 end
from public.jp_kanji k
where q.kanji_id = k.id and k.level = 'N4' and k.kanji_character = '図'
  and q.question_type = 'choose_reading' and q.correct_answer = 'と';

-- ---------------------------------------------------------------------------
-- 2) Compound-specific sound changes must not masquerade as standalone ON/KUN.
--    Keep the real word/furigana, attach it to the canonical base reading when
--    possible, and mark the word irregular. 下手 is lexicalized, so reading_id
--    is intentionally NULL rather than claiming 下 has reading へ.
-- ---------------------------------------------------------------------------

-- 千: 三千 さんぜん ← base セン + rendaku.
update public.jp_kanji_words w
set reading_id = base.id, is_irregular = true, review_status = 'ok',
    correction_note = '独立監査: 三千の「ぜん」は千の独立音読みではなく、センの連濁。語のふりがなは維持。'
from public.jp_kanji k
join public.jp_kanji_readings base on base.kanji_id = k.id and base.reading_type = 'on' and base.reading_kana = 'せん'
where w.kanji_id = k.id and k.level = 'N5' and k.kanji_character = '千'
  and w.word_jp = '三千' and w.word_furigana = 'さんぜん';

-- 生: 誕生 たんじょう ← base ショウ with voicing in the compound.
update public.jp_kanji_words w
set reading_id = base.id, is_irregular = true, review_status = 'ok',
    correction_note = '独立監査: 誕生日の「じょう」は生の独立音読みではなく、ショウの語中変化。'
from public.jp_kanji k
join public.jp_kanji_readings base on base.kanji_id = k.id and base.reading_type = 'on' and base.reading_kana = 'しょう'
where w.kanji_id = k.id and k.level = 'N5' and k.kanji_character = '生'
  and w.word_jp = '誕生日' and w.word_furigana = 'たんじょうび';

-- 分: 何分 なんぷん ← base フン + p-sound change after ん.
update public.jp_kanji_words w
set reading_id = base.id, is_irregular = true, review_status = 'ok',
    correction_note = '独立監査: 何分の「ぷん」は分の独立音読みではなく、フンの助数詞内の音変化。'
from public.jp_kanji k
join public.jp_kanji_readings base on base.kanji_id = k.id and base.reading_type = 'on' and base.reading_kana = 'ふん'
where w.kanji_id = k.id and k.level = 'N5' and k.kanji_character = '分'
  and w.word_jp = '何分' and w.word_furigana = 'なんぷん';

-- 本: 一本 いっぽん ← base ホン + counter sound change.
update public.jp_kanji_words w
set reading_id = base.id, is_irregular = true, review_status = 'ok',
    correction_note = '独立監査: 一本の「ぽん」は本の独立音読みではなく、ホンの助数詞内の音変化。'
from public.jp_kanji k
join public.jp_kanji_readings base on base.kanji_id = k.id and base.reading_type = 'on' and base.reading_kana = 'ほん'
where w.kanji_id = k.id and k.level = 'N5' and k.kanji_character = '本'
  and w.word_jp = '一本' and w.word_furigana = 'いっぽん';

-- 子: 双子 ふたご ← base こ with voicing in lexical compound.
update public.jp_kanji_words w
set reading_id = base.id, is_irregular = true, review_status = 'ok',
    correction_note = '独立監査: 双子の「ご」は子の独立訓読みではなく、こが語中で濁音化した形。'
from public.jp_kanji k
join public.jp_kanji_readings base on base.kanji_id = k.id and base.reading_type = 'kun' and base.reading_kana = 'こ'
where w.kanji_id = k.id and k.level = 'N5' and k.kanji_character = '子'
  and w.word_jp = '双子' and w.word_furigana = 'ふたご';

-- 物: 物価 ぶっか ← base ブツ +促音化.
update public.jp_kanji_words w
set reading_id = base.id, is_irregular = true, review_status = 'ok',
    correction_note = '独立監査: 物価の「ぶっ」は物の独立音読みではなく、ブツの促音化。'
from public.jp_kanji k
join public.jp_kanji_readings base on base.kanji_id = k.id and base.reading_type = 'on' and base.reading_kana = 'ぶつ'
where w.kanji_id = k.id and k.level = 'N5' and k.kanji_character = '物'
  and w.word_jp = '物価' and w.word_furigana = 'ぶっか';

-- 下手 is a lexicalized reading; do not invent 下=へ as ON.
update public.jp_kanji_words w
set reading_id = null, is_irregular = true, review_status = 'ok',
    correction_note = '独立監査: 下手（へた）は語として覚える特殊な読み。下の音読み「へ」として扱わない。'
from public.jp_kanji k
where w.kanji_id = k.id and k.level = 'N5' and k.kanji_character = '下'
  and w.word_jp = '下手な' and w.word_furigana = 'へたな';

-- Delete only the compound-specific/non-dictionary reading rows after words are detached.
-- 中=ジュウ and 社=ジャ are intentionally retained: 漢字ペディア lists them as valid readings.
delete from public.jp_kanji_readings r using public.jp_kanji k
where r.kanji_id = k.id and k.level = 'N5'
  and ((k.kanji_character='千' and r.reading_type='on' and r.reading_kana='ぜん')
    or (k.kanji_character='生' and r.reading_type='on' and r.reading_kana='じょう')
    or (k.kanji_character='分' and r.reading_type='on' and r.reading_kana='ぷん')
    or (k.kanji_character='本' and r.reading_type='on' and r.reading_kana in ('ぼん','ぽん'))
    or (k.kanji_character='下' and r.reading_type='on' and r.reading_kana='へ')
    or (k.kanji_character='子' and r.reading_type='kun' and r.reading_kana='ご')
    or (k.kanji_character='出' and r.reading_type='on' and r.reading_kana='しゅ')
    or (k.kanji_character='物' and r.reading_type='on' and r.reading_kana='ぶっ'));

-- ---------------------------------------------------------------------------
-- 3) Questions: remove false “main” claim from N5 ON questions whose answer is
--    valid ON but explicitly non-main in our data.
-- ---------------------------------------------------------------------------
update public.jp_kanji_questions q
set question_text = replace(q.question_text, 'âm ON (chính)', 'âm ON')
from public.jp_kanji k
where q.kanji_id = k.id and k.level = 'N5' and q.question_type = 'choose_reading'
  and q.question_text like '%âm ON (chính)%'
  and exists (
    select 1 from public.jp_kanji_readings r
    where r.kanji_id=k.id and r.reading_type='on' and r.reading_kana=q.correct_answer and r.is_main=false
  )
  and not exists (
    select 1 from public.jp_kanji_readings r
    where r.kanji_id=k.id and r.reading_kana=q.correct_answer and r.is_main=true
  );

-- ---------------------------------------------------------------------------
-- 4) Word-question alignment: questions must refer to actual jp_kanji_words.
-- ---------------------------------------------------------------------------
update public.jp_kanji_questions q
set question_text='"主人公" có nghĩa là gì?',
    correct_answer='nhân vật chính',
    choice_1='nhân vật chính', choice_2='chồng (của người khác)', choice_3='người quản lý', choice_4='nhân viên mới'
where q.id='d710972e-4a2a-47a6-886b-de180310326a';

update public.jp_kanji_questions q
set question_text='Viết cách đọc (hiragana) của từ: 主人公', correct_answer='しゅじんこう'
where q.id='d46dfc7b-9e7d-4bdb-ae1e-4044a87e5f95';

update public.jp_kanji_questions q
set question_text='"辺り" có nghĩa là gì?',
    correct_answer='vùng xung quanh, gần đây',
    choice_1='vùng xung quanh, gần đây', choice_2='trung tâm', choice_3='lối vào', choice_4='phía bên kia'
where q.id='07d7189c-2f31-47d7-913d-043c6ff078c5';

update public.jp_kanji_questions q
set question_text='Viết cách đọc (hiragana) của từ: 辺り', correct_answer='あたり'
where q.id='29558198-4323-4736-aff6-135f4e54dc53';

-- ---------------------------------------------------------------------------
-- 5) Replace duplicated / stock distractors with four distinct, unambiguous choices.
-- ---------------------------------------------------------------------------
update public.jp_kanji_questions set choice_1='ふ', choice_2='ぼ', choice_3='こう', choice_4='じ'
where id='16864a70-d260-4a9d-93e7-ca293e4303ba' and correct_answer='ふ';
update public.jp_kanji_questions set choice_1='せい', choice_2='こう', choice_3='そう', choice_4='せん'
where id='395a4b0d-36d5-4631-92bf-177170b20b8e' and correct_answer='せい';
update public.jp_kanji_questions set choice_1='けん', choice_2='こう', choice_3='げん', choice_4='しん'
where id='a7e73e8a-3e24-4302-bd5a-a5671d273ea9' and correct_answer='けん';

update public.jp_kanji_questions set choice_1='おなじ', choice_2='あつい', choice_3='ちかい', choice_4='ながい'
where id='df52a216-080d-42d5-ab2b-752aef8f2662' and correct_answer='おなじ';
update public.jp_kanji_questions set choice_1='ば', choice_2='や', choice_3='ま', choice_4='の'
where id='7fcc60bc-432b-4907-af83-355f6b8f1484' and correct_answer='ば';
update public.jp_kanji_questions set choice_1='かんがえる', choice_2='しらべる', choice_3='おぼえる', choice_4='つたえる'
where id='44b070b3-9117-4ab9-a5f1-0024ae4a3ff7' and correct_answer='かんがえる';

update public.jp_kanji_questions set choice_1='đèn giao thông', choice_2='số hiệu', choice_3='nhà ga', choice_4='biển báo'
where id='4bdd3229-1936-4408-a244-6eba60536490' and correct_answer='đèn giao thông';
update public.jp_kanji_questions set choice_1='màu trắng', choice_2='màu đen', choice_3='màu đỏ', choice_4='màu xanh'
where id='40afa764-b5f4-462d-8d71-3653599e5c19' and correct_answer='màu trắng';
update public.jp_kanji_questions set choice_1='tàu điện ngầm', choice_2='xe buýt', choice_3='tàu cao tốc', choice_4='xe điện'
where id='c7ddcbb0-3c0c-4e2b-afb8-84ddbdc2e703' and correct_answer='tàu điện ngầm';

-- Remove the repeated “trắng tinh” stock distractor from the remaining affected rows.
update public.jp_kanji_questions set choice_1='vị khách, khách hàng', choice_2='người chủ', choice_3='nhân viên', choice_4='người thân'
where id='b7d41928-afbf-4190-9365-9dfa5a10460f' and correct_answer='vị khách, khách hàng';
update public.jp_kanji_questions set choice_1='mọi người', choice_2='một mình', choice_3='đồng nghiệp', choice_4='người thân'
where id='58119911-5130-40dc-ab0e-7130926bb434' and correct_answer='mọi người';
update public.jp_kanji_questions set choice_1='số hiệu', choice_2='địa chỉ', choice_3='giá tiền', choice_4='thời gian'
where id='dc3ffadb-aef9-4521-9655-48e3fb1ffe3e' and correct_answer='số hiệu';
update public.jp_kanji_questions set choice_1='con ngựa', choice_2='con bò', choice_3='con chó', choice_4='con mèo'
where id='2900ba02-ddfe-46c6-a28f-c6ec9f18f7d0' and correct_answer='con ngựa';

-- Hard guards: abort if this file leaves its known target issues unresolved.
do $$
begin
  if exists (
    select 1 from public.jp_kanji k join public.jp_kanji_readings r on r.kanji_id=k.id
    where k.level='N5' and ((k.kanji_character='千' and r.reading_kana='ぜん') or (k.kanji_character='生' and r.reading_kana='じょう')
      or (k.kanji_character='分' and r.reading_kana='ぷん') or (k.kanji_character='本' and r.reading_kana in ('ぼん','ぽん'))
      or (k.kanji_character='下' and r.reading_kana='へ') or (k.kanji_character='子' and r.reading_kana='ご')
      or (k.kanji_character='出' and r.reading_kana='しゅ') or (k.kanji_character='物' and r.reading_kana='ぶっ'))
  ) then raise exception 'Kanji compound-only reading cleanup incomplete'; end if;

  if exists (
    select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
    where k.level in ('N5','N4') and q.question_type in ('choose_kanji_from_meaning','choose_reading','choose_word_meaning')
      and cardinality(array(select distinct x from unnest(array[q.choice_1,q.choice_2,q.choice_3,q.choice_4]) x where x is not null)) < 4
  ) then raise exception 'Kanji MCQ duplicate choices remain'; end if;
end $$;

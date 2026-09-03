-- Resolve source-PDF inconsistencies and fill the only kanji with no example word.

-- 広: ひろる is not a valid reading; the intended reading is ひろがる.
update public.jp_kanji_readings as reading
set
  reading_kana = 'ひろがる',
  review_status = 'ok',
  correction_note = 'Đã sửa lỗi nguồn ひろる thành dạng từ điển chuẩn ひろがる (広がる).'
from public.jp_kanji as kanji
where reading.kanji_id = kanji.id
  and kanji.level = 'N4'
  and kanji.kanji_character = '広'
  and reading.reading_type = 'kun'
  and reading.reading_kana = 'ひろる';

insert into public.jp_kanji_words
  (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, source_type, review_status, correction_note)
select kanji.id, reading.id, '広がる', 'ひろがる', 'mở rộng, lan rộng', 'generated', 'ok',
       'Bổ sung ví dụ đúng cho âm kun ひろがる.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as reading on reading.kanji_id = kanji.id
where kanji.level = 'N4'
  and kanji.kanji_character = '広'
  and reading.reading_type = 'kun'
  and reading.reading_kana = 'ひろがる'
  and not exists (
    select 1 from public.jp_kanji_words word
    where word.kanji_id = kanji.id and word.word_jp = '広がる' and word.word_furigana = 'ひろがる'
  );

insert into public.jp_kanji_words
  (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, source_type, review_status, correction_note)
select kanji.id, reading.id, '広告', 'こうこく', 'quảng cáo', 'generated', 'ok',
       'Bổ sung ví dụ thông dụng cho âm on コウ.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as reading on reading.kanji_id = kanji.id
where kanji.level = 'N4'
  and kanji.kanji_character = '広'
  and reading.reading_type = 'on'
  and reading.reading_kana = 'コウ'
  and not exists (
    select 1 from public.jp_kanji_words word
    where word.kanji_id = kanji.id and word.word_jp = '広告' and word.word_furigana = 'こうこく'
  );

-- 終: keep 終わり with おわる and give おえる its own correct example.
update public.jp_kanji_words as word
set
  reading_id = target_reading.id,
  review_status = 'ok',
  correction_note = 'Đã chuyển 終わり về nhóm âm おわる; không còn gắn nhầm với おえる.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as target_reading
  on target_reading.kanji_id = kanji.id
  and target_reading.reading_type = 'kun'
  and target_reading.reading_kana = 'おわる'
where word.kanji_id = kanji.id
  and kanji.level = 'N4'
  and kanji.kanji_character = '終'
  and word.word_jp = '終わり'
  and word.word_furigana = 'おわり';

update public.jp_kanji_readings as reading
set
  review_status = 'ok',
  correction_note = 'おえる là âm kun hợp lệ; đã bổ sung đúng từ 終える.'
from public.jp_kanji as kanji
where reading.kanji_id = kanji.id
  and kanji.level = 'N4'
  and kanji.kanji_character = '終'
  and reading.reading_type = 'kun'
  and reading.reading_kana = 'おえる';

insert into public.jp_kanji_words
  (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, source_type, review_status, correction_note)
select kanji.id, reading.id, '終える', 'おえる', 'làm xong, kết thúc việc gì', 'generated', 'ok',
       'Bổ sung đúng ví dụ cho âm kun おえる.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as reading on reading.kanji_id = kanji.id
where kanji.level = 'N4'
  and kanji.kanji_character = '終'
  and reading.reading_type = 'kun'
  and reading.reading_kana = 'おえる'
  and not exists (
    select 1 from public.jp_kanji_words word
    where word.kanji_id = kanji.id and word.word_jp = '終える' and word.word_furigana = 'おえる'
  );

-- 十: 十分な uses じゅう; keep valid じっ and attach a matching example.
update public.jp_kanji_words as word
set
  reading_id = target_reading.id,
  review_status = 'ok',
  correction_note = 'Đã chuyển 十分な về âm じゅう; nghĩa đầy đủ đọc じゅうぶん.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as target_reading
  on target_reading.kanji_id = kanji.id
  and target_reading.reading_type = 'on'
  and target_reading.reading_kana = 'じゅう'
where word.kanji_id = kanji.id
  and kanji.level = 'N5'
  and kanji.kanji_character = '十'
  and word.word_jp = '十分な'
  and word.word_furigana = 'じゅうぶんな';

update public.jp_kanji_readings as reading
set
  review_status = 'ok',
  correction_note = 'じっ là âm on hợp lệ; đã thay ví dụ bị gắn nhầm bằng 十回（じっかい）.'
from public.jp_kanji as kanji
where reading.kanji_id = kanji.id
  and kanji.level = 'N5'
  and kanji.kanji_character = '十'
  and reading.reading_type = 'on'
  and reading.reading_kana = 'じっ';

insert into public.jp_kanji_words
  (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, source_type, review_status, correction_note)
select kanji.id, reading.id, '十回', 'じっかい', 'mười lần', 'generated', 'ok',
       'Bổ sung ví dụ đúng cho âm on じっ.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as reading on reading.kanji_id = kanji.id
where kanji.level = 'N5'
  and kanji.kanji_character = '十'
  and reading.reading_type = 'on'
  and reading.reading_kana = 'じっ'
  and not exists (
    select 1 from public.jp_kanji_words word
    where word.kanji_id = kanji.id and word.word_jp = '十回' and word.word_furigana = 'じっかい'
  );

-- 辺 was the only kanji without any example words.
insert into public.jp_kanji_words
  (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, source_type, review_status, correction_note)
select kanji.id, reading.id, '辺り', 'あたり', 'vùng xung quanh, gần đây', 'generated', 'ok',
       'Bổ sung ví dụ thông dụng cho âm kun あたり.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as reading on reading.kanji_id = kanji.id
where kanji.level = 'N4'
  and kanji.kanji_character = '辺'
  and reading.reading_type = 'kun'
  and reading.reading_kana = 'あたり'
  and not exists (
    select 1 from public.jp_kanji_words word
    where word.kanji_id = kanji.id and word.word_jp = '辺り' and word.word_furigana = 'あたり'
  );

insert into public.jp_kanji_words
  (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, source_type, review_status, correction_note)
select kanji.id, reading.id, '周辺', 'しゅうへん', 'khu vực xung quanh', 'generated', 'ok',
       'Bổ sung ví dụ thông dụng cho âm on ヘン.'
from public.jp_kanji as kanji
join public.jp_kanji_readings as reading on reading.kanji_id = kanji.id
where kanji.level = 'N4'
  and kanji.kanji_character = '辺'
  and reading.reading_type = 'on'
  and reading.reading_kana = 'ヘン'
  and not exists (
    select 1 from public.jp_kanji_words word
    where word.kanji_id = kanji.id and word.word_jp = '周辺' and word.word_furigana = 'しゅうへん'
  );

-- The 18 N5 pilot rows now have complete metadata and no unresolved child flags.
update public.jp_kanji as kanji
set
  review_status = 'ok',
  correction_note = coalesce(kanji.correction_note, 'Đã rà lại metadata, cách đọc, từ ghép và bài tập Kanji N5.')
where kanji.level = 'N5'
  and kanji.review_status = 'needs_review'
  and kanji.stroke_count is not null
  and nullif(btrim(kanji.radical), '') is not null
  and not exists (
    select 1 from public.jp_kanji_readings reading
    where reading.kanji_id = kanji.id and reading.review_status = 'needs_review'
  )
  and not exists (
    select 1 from public.jp_kanji_words word
    where word.kanji_id = kanji.id and word.review_status = 'needs_review'
  );

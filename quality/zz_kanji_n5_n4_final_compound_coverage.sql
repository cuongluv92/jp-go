-- Final Kanji N5/N4 pedagogical completion.
-- Run AFTER kanji_n5_n4_reading_question_fixes.sql and BEFORE vocab link sync + validator.
-- Idempotent: every inserted representative word is protected by NOT EXISTS.

-- Avoid implying that a Kanji has one uniquely correct “main” reading.
update public.jp_kanji_questions q
set question_text = replace(q.question_text, 'có âm chính là gì?', 'có cách đọc nào đúng?')
from public.jp_kanji k
where q.kanji_id=k.id and k.level in ('N5','N4') and q.question_type='choose_reading'
  and q.question_text like '%có âm chính là gì?%';
update public.jp_kanji_questions q
set question_text = replace(q.question_text, 'có âm ON (chính) là gì?', 'có âm ON nào đúng?')
from public.jp_kanji k
where q.kanji_id=k.id and k.level in ('N5','N4') and q.question_type='choose_reading'
  and q.question_text like '%có âm ON (chính) là gì?%';
update public.jp_kanji_questions q
set question_text = replace(q.question_text, 'có âm KUN (chính) là gì?', 'có âm KUN nào đúng?')
from public.jp_kanji k
where q.kanji_id=k.id and k.level in ('N5','N4') and q.question_type='choose_reading'
  and q.question_text like '%có âm KUN (chính) là gì?%';

-- Prefer the reading learners actually meet in common N4 vocabulary. Less-common
-- dictionary readings are retained, only their pedagogical priority is lowered.
with pref(kanji_character, old_type, old_reading, new_type, new_reading) as (
 values
  ('主','kun','おも','on','シュ'),('便','kun','たより','on','ベン'),
  ('公','kun','おおやけ','on','コウ'),('原','kun','はら','on','ゲン'),
  ('去','kun','さる','on','キョ'),('宿','kun','やど','on','シュク'),
  ('政','kun','まつりごと','on','セイ'),('有','kun','ある','on','ユウ'),
  ('野','kun','の','on','ヤ'),('飯','kun','めし','on','ハン')
)
update public.jp_kanji_readings r
set is_main = case when r.reading_type=p.new_type and r.reading_kana=p.new_reading then true
                   when r.reading_type=p.old_type and r.reading_kana=p.old_reading then false else r.is_main end,
    correction_note = case when r.reading_type=p.new_type and r.reading_kana=p.new_reading
      then '最終監査: N4で実際に出会う頻度・既存語例を優先した代表読み。旧読み自体は削除しない。'
      else '最終監査: 辞書上は正しい読みだが、N4の代表読みとしては優先度を下げた。' end
from public.jp_kanji k, pref p
where r.kanji_id=k.id and k.level='N4' and k.kanji_character=p.kanji_character
  and ((r.reading_type=p.new_type and r.reading_kana=p.new_reading)
    or (r.reading_type=p.old_type and r.reading_kana=p.old_reading));

update public.jp_kanji_questions set question_text='Kanji 主 (CHỦ) có cách đọc nào đúng?',correct_answer='シュ',choice_1='シュ',choice_2='シュウ',choice_3='ジュ',choice_4='ショ' where id='264beb58-3361-46f7-9750-eefc5dff9e06';
update public.jp_kanji_questions set question_text='Kanji 便 (TIỆN) có cách đọc nào đúng?',correct_answer='ベン',choice_1='ベン',choice_2='ゲン',choice_3='デン',choice_4='セン' where id='5252a561-e875-4a12-a16b-6aa9a54eedb9';
update public.jp_kanji_questions set question_text='Kanji 公 (CÔNG) có cách đọc nào đúng?',correct_answer='コウ',choice_1='コウ',choice_2='ゴウ',choice_3='クウ',choice_4='キョウ' where id='9ab12bef-e1ce-4ca0-87a3-75e1d073e0fd';
update public.jp_kanji_questions set question_text='Kanji 原 (NGUYÊN) có cách đọc nào đúng?',correct_answer='ゲン',choice_1='ゲン',choice_2='ケン',choice_3='ゴン',choice_4='ガン' where id='91a84158-b382-4cde-850f-bb3629160c32';
update public.jp_kanji_questions set question_text='Kanji 去 (KHỨ) có cách đọc nào đúng?',correct_answer='キョ',choice_1='キョ',choice_2='キュウ',choice_3='コウ',choice_4='キョウ' where id='04eaf29c-aaac-4e35-a304-019d264a7f56';
update public.jp_kanji_questions set question_text='Kanji 宿 (TÚC) có cách đọc nào đúng?',correct_answer='シュク',choice_1='シュク',choice_2='シュウ',choice_3='ジュク',choice_4='ショク' where id='dfff1f4f-84ff-4cc1-ab53-1731693c0771';
update public.jp_kanji_questions set question_text='Kanji 政 (CHÍNH) có cách đọc nào đúng?',correct_answer='セイ',choice_1='セイ',choice_2='サイ',choice_3='セン',choice_4='セキ' where id='0491fae5-3dc9-4c47-bb8d-00fb10ef149c';
update public.jp_kanji_questions set question_text='Kanji 有 (HỮU) có cách đọc nào đúng?',correct_answer='ユウ',choice_1='ユウ',choice_2='ヨウ',choice_3='ユ',choice_4='ユク' where id='6aadabd1-4c74-4b12-a282-cbbb33de8273';
update public.jp_kanji_questions set question_text='Kanji 野 (DÃ) có cách đọc nào đúng?',correct_answer='ヤ',choice_1='ヤ',choice_2='ヨ',choice_3='ユ',choice_4='ワ' where id='bc4a2776-9e7b-4da8-bf60-ed90f5922fc2';
update public.jp_kanji_questions set question_text='Kanji 飯 (PHẠN) có cách đọc nào đúng?',correct_answer='ハン',choice_1='ハン',choice_2='バン',choice_3='ハク',choice_4='ホン' where id='fb582113-1f0a-4809-a913-3d313784f8af';

-- Every N5/N4 Kanji gets at least two representative real words. This is a
-- learner-oriented set, not an exhaustive dictionary dump.
with additions(level,kanji_character,word_jp,word_furigana,meaning_vi) as (values
('N4','不','不便','ふべん','bất tiện'),('N4','京','京都','きょうと','Kyoto'),('N4','低','最低','さいてい','thấp nhất; tệ nhất'),
('N4','写','写す','うつす','chép; sao chép; chụp lại'),('N4','冬','冬休み','ふゆやすみ','kỳ nghỉ đông'),('N4','利','利用','りよう','sử dụng'),
('N4','勉','勉強','べんきょう','học tập'),('N4','区','地区','ちく','khu vực'),('N4','去','過去','かこ','quá khứ'),
('N4','史','日本史','にほんし','lịch sử Nhật Bản'),('N4','同','同時','どうじ','đồng thời; cùng lúc'),('N4','問','質問','しつもん','câu hỏi'),
('N4','声','大声','おおごえ','tiếng lớn; giọng to'),('N4','夏','夏休み','なつやすみ','kỳ nghỉ hè'),('N4','妻','夫妻','ふさい','vợ chồng'),
('N4','宅','宅配便','たくはいびん','dịch vụ giao hàng tận nhà'),('N4','宿','宿泊','しゅくはく','lưu trú; ngủ lại'),('N4','寒','寒さ','さむさ','cái lạnh; độ lạnh'),
('N4','工','工事','こうじ','công trình; thi công'),('N4','市','市場','しじょう','thị trường'),('N4','府','大阪府','おおさかふ','phủ Osaka'),
('N4','弱','弱点','じゃくてん','điểm yếu'),('N4','後','後半','こうはん','nửa sau'),('N4','才','才能','さいのう','tài năng'),
('N4','政','政府','せいふ','chính phủ'),('N4','数','数','かず','số; con số'),('N4','族','民族','みんぞく','dân tộc'),
('N4','早','早朝','そうちょう','sáng sớm'),('N4','映','上映','じょうえい','chiếu (phim)'),('N4','春','春休み','はるやすみ','kỳ nghỉ xuân'),
('N4','晴','晴天','せいてん','trời quang; thời tiết đẹp'),('N4','暑','暑さ','あつさ','cái nóng; độ nóng'),('N4','有','有料','ゆうりょう','có tính phí'),
('N4','村','村人','むらびと','người trong làng'),('N4','歴','経歴','けいれき','quá trình; lý lịch'),('N4','油','油','あぶら','dầu'),
('N4','済','経済学','けいざいがく','kinh tế học'),('N4','湖','湖畔','こはん','bờ hồ'),('N4','漢','漢語','かんご','từ Hán-Nhật'),
('N4','玉','玉ねぎ','たまねぎ','hành tây'),('N4','王','王様','おうさま','nhà vua'),('N4','画','漫画','まんが','truyện tranh'),
('N4','界','業界','ぎょうかい','ngành; giới nghề nghiệp'),('N4','皿','皿洗い','さらあらい','việc rửa bát đĩa'),('N4','県','県庁','けんちょう','trụ sở chính quyền tỉnh'),
('N4','短','短期','たんき','ngắn hạn'),('N4','秋','秋風','あきかぜ','gió thu'),('N4','科','教科','きょうか','môn học'),
('N4','究','研究室','けんきゅうしつ','phòng nghiên cứu'),('N4','緑','緑茶','りょくちゃ','trà xanh'),('N4','練','練習する','れんしゅうする','luyện tập; thực hành'),
('N4','羽','羽毛','うもう','lông vũ'),('N4','考','考え','かんがえ','suy nghĩ; ý kiến'),('N4','若','若者','わかもの','người trẻ'),
('N4','英','英国','えいこく','nước Anh'),('N4','草','草原','そうげん','đồng cỏ'),('N4','荷','手荷物','てにもつ','hành lý xách tay'),
('N4','薬','薬局','やっきょく','nhà thuốc'),('N4','虫','昆虫','こんちゅう','côn trùng'),('N4','衣','衣類','いるい','quần áo; y phục'),
('N4','谷','谷間','たにま','khe núi; thung lũng'),('N4','質','品質','ひんしつ','chất lượng'),('N4','走','競走','きょうそう','cuộc chạy đua'),
('N4','軽','軽食','けいしょく','bữa ăn nhẹ'),('N4','送','送信','そうしん','gửi; truyền tin'),('N4','速','速度','そくど','tốc độ'),
('N4','遠','遠足','えんそく','chuyến dã ngoại'),('N4','酒','日本酒','にほんしゅ','rượu sake Nhật'),('N4','里','里','さと','làng quê; quê nhà'),
('N4','鉄','鉄道','てつどう','đường sắt'),('N4','雪','大雪','おおゆき','tuyết lớn'),('N4','雲','雨雲','あまぐも','mây mưa'),
('N4','静','静けさ','しずけさ','sự yên tĩnh'),('N4','飯','炊飯器','すいはんき','nồi cơm điện'),('N4','馬','馬車','ばしゃ','xe ngựa'),
('N4','験','経験','けいけん','kinh nghiệm'),('N4','鳴','鳴き声','なきごえ','tiếng kêu; tiếng hót'),('N4','麦','小麦','こむぎ','lúa mì'),
('N4','黄','黄緑','きみどり','màu vàng lục'),
('N5','力','能力','のうりょく','năng lực'),('N5','友','友人','ゆうじん','bạn; bạn bè'),('N5','古','中古','ちゅうこ','đồ cũ; đã qua sử dụng'),
('N5','右','右側','みぎがわ','phía bên phải'),('N5','多','多数','たすう','số lượng lớn; nhiều'),('N5','寺','寺院','じいん','chùa; tự viện'),
('N5','川','川岸','かわぎし','bờ sông'),('N5','左','左側','ひだりがわ','phía bên trái'),('N5','町','町内','ちょうない','trong khu phố; trong thị trấn'),
('N5','米','白米','はくまい','gạo trắng'),('N5','雨','大雨','おおあめ','mưa lớn'),('N5','魚','金魚','きんぎょ','cá vàng'),
('N4','計','計る','はかる','đo; tính'),('N4','旅','旅','たび','chuyến đi; hành trình')
)
insert into public.jp_kanji_words(kanji_id,reading_id,word_jp,word_furigana,meaning_vi,is_irregular,source_type,review_status,correction_note)
select k.id,null,a.word_jp,a.word_furigana,a.meaning_vi,false,'generated','ok',
 '最終監査: N5/N4の漢字学習で代表語が1語だけにならないよう、一般的で実用的な語例を追加。'
from additions a join public.jp_kanji k on k.level=a.level and k.kanji_character=a.kanji_character
where not exists(select 1 from public.jp_kanji_words w where w.kanji_id=k.id and w.word_jp=a.word_jp and w.word_furigana=a.word_furigana);

-- Attach additions that intentionally demonstrate retained main KUN readings.
with map(kanji_character,word_jp,word_furigana,reading_kana) as (values
 ('数','数','かず','かず'),('里','里','さと','さと'),('写','写す','うつす','うつす'),
 ('玉','玉ねぎ','たまねぎ','たま'),('油','油','あぶら','あぶら'),('計','計る','はかる','はかる'),('旅','旅','たび','たび')
)
update public.jp_kanji_words w set reading_id=r.id
from public.jp_kanji k join map m on m.kanji_character=k.kanji_character
join public.jp_kanji_readings r on r.kanji_id=k.id and r.reading_type='kun' and r.reading_kana=m.reading_kana
where k.level='N4' and w.kanji_id=k.id and w.word_jp=m.word_jp and w.word_furigana=m.word_furigana;

do $$ begin
 if exists(select 1 from public.jp_kanji k where k.level in ('N5','N4') and (select count(*) from public.jp_kanji_words w where w.kanji_id=k.id)<2)
 then raise exception 'Kanji representative-word coverage is below 2'; end if;
 if exists(select 1 from public.jp_kanji k join public.jp_kanji_readings r on r.kanji_id=k.id and r.is_main
   where k.level in ('N5','N4') and not exists(select 1 from public.jp_kanji_words w where w.kanji_id=k.id and w.reading_id=r.id))
 then raise exception 'A pedagogical main reading has no representative word'; end if;
 if exists(select 1 from public.jp_kanji_questions q join public.jp_kanji k on k.id=q.kanji_id
   where k.level in ('N5','N4') and q.question_type='choose_reading' and q.question_text like '%âm chính%')
 then raise exception 'Ambiguous singular main-reading wording remains'; end if;
end $$;
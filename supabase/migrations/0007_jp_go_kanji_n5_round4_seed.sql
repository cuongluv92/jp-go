-- ============================================================
-- jp-go — Kanji N5 đợt 4: 聞,新,肉,魚,牛,茶,物,花,買,読 (trang 9)
-- + 手,少,間,内,田,町,電,気,山,川 (trang 10) của PDF "Tổng hợp
-- kiến thức N5" (Dũng Mori). Đồng thời bổ sung âm ケン (on) + 4 từ
-- ghép cho kanji 見 (đã tạo ở round3) — nội dung của 見 bị ngắt
-- qua trang, phần còn lại nằm ở đầu trang 9. Additive, idempotent.
-- ============================================================

-- ---------- bổ sung âm ケン cho 見 (đã tạo ở migration round3) ----------
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
values ('1300ffa4-f34e-461e-af30-4012dd7b2171', '1d01272b-d154-4965-b645-27cb9200622c', 'on', 'けん', true, 9, 'ok')
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '1300ffa4-f34e-461e-af30-4012dd7b2171', '見学します', 'けんがくします', 'kiến học, kiến giảng', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '1300ffa4-f34e-461e-af30-4012dd7b2171', '意見', 'いけん', 'ý kiến', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '1300ffa4-f34e-461e-af30-4012dd7b2171', '発見します', 'はっけんします', 'phát kiến, tìm ra', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '1300ffa4-f34e-461e-af30-4012dd7b2171', '拝見します', 'はいけんします', 'khiêm nhường ngữ của 見ます', false, 9, 'pdf', 'ok');

-- ---------- 聞 (VĂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('dd9ab49c-f269-41b8-a690-1136adaea0e1', 'N5', '聞', 'VĂN', 'nghe, tin tức', 14, '耳', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'de6cd167-0862-4881-ae03-05d3cdece891', id, 'kun', 'き', true, 9, 'ok' from jp_kanji where id = 'dd9ab49c-f269-41b8-a690-1136adaea0e1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '979703f3-845a-426e-900a-29b88065fdda', id, 'on', 'ぶん', true, 9, 'ok' from jp_kanji where id = 'dd9ab49c-f269-41b8-a690-1136adaea0e1'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('dd9ab49c-f269-41b8-a690-1136adaea0e1', 'de6cd167-0862-4881-ae03-05d3cdece891', '聞きます', 'ききます', 'nghe', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('dd9ab49c-f269-41b8-a690-1136adaea0e1', 'de6cd167-0862-4881-ae03-05d3cdece891', '聞こえます', 'きこえます', 'nghe thấy', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('dd9ab49c-f269-41b8-a690-1136adaea0e1', '979703f3-845a-426e-900a-29b88065fdda', '新聞', 'しんぶん', 'báo', false, 9, 'pdf', 'ok');

-- ---------- 新 (TÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('24a22681-d63b-4503-8e1c-13838c500853', 'N5', '新', 'TÂN', 'mới', 13, NULL, 9, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '346cdaf6-f72a-4154-a650-e55f0dd71661', id, 'kun', 'あたら', true, 9, 'ok' from jp_kanji where id = '24a22681-d63b-4503-8e1c-13838c500853'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7c61f11b-a2b7-4b4e-bd94-6c649e3ad984', id, 'on', 'しん', true, 9, 'ok' from jp_kanji where id = '24a22681-d63b-4503-8e1c-13838c500853'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('24a22681-d63b-4503-8e1c-13838c500853', '346cdaf6-f72a-4154-a650-e55f0dd71661', '新しい', 'あたらしい', 'mới', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('24a22681-d63b-4503-8e1c-13838c500853', '7c61f11b-a2b7-4b4e-bd94-6c649e3ad984', '新幹線', 'しんかんせん', 'tàu điện Shinkansen', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('24a22681-d63b-4503-8e1c-13838c500853', '7c61f11b-a2b7-4b4e-bd94-6c649e3ad984', '新聞社', 'しんぶんしゃ', 'tòa soạn báo', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('24a22681-d63b-4503-8e1c-13838c500853', '7c61f11b-a2b7-4b4e-bd94-6c649e3ad984', '新年会', 'しんねんかい', 'tiệc mừng năm mới', false, 9, 'pdf', 'ok');

-- ---------- 肉 (NHỤC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('d4a08084-f9d1-4399-93f5-760009b28a66', 'N5', '肉', 'NHỤC', 'thịt', 6, '肉', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '15757f2b-26fc-4e56-81c0-7c6d24746792', id, 'on', 'にく', true, 9, 'ok' from jp_kanji where id = 'd4a08084-f9d1-4399-93f5-760009b28a66'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d4a08084-f9d1-4399-93f5-760009b28a66', '15757f2b-26fc-4e56-81c0-7c6d24746792', '肉', 'にく', 'thịt', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d4a08084-f9d1-4399-93f5-760009b28a66', '15757f2b-26fc-4e56-81c0-7c6d24746792', '豚肉', 'ぶたにく', 'thịt lợn', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d4a08084-f9d1-4399-93f5-760009b28a66', '15757f2b-26fc-4e56-81c0-7c6d24746792', 'とり肉', 'とりにく', 'thịt gà', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d4a08084-f9d1-4399-93f5-760009b28a66', '15757f2b-26fc-4e56-81c0-7c6d24746792', '牛肉', 'ぎゅうにく', 'thịt bò', false, 9, 'pdf', 'ok');

-- ---------- 魚 (NGƯ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('96a3d57b-a4d0-4589-a4f1-2b6e3d031308', 'N5', '魚', 'NGƯ', 'cá', 11, '魚', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '2a5082d3-1142-4b64-9ef1-48b62a44bc8a', id, 'kun', 'うお', false, 9, 'ok' from jp_kanji where id = '96a3d57b-a4d0-4589-a4f1-2b6e3d031308'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '30b79faf-ef36-4981-b6c6-dac66b93cae6', id, 'kun', 'さかな', true, 9, 'ok' from jp_kanji where id = '96a3d57b-a4d0-4589-a4f1-2b6e3d031308'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c65eb8ca-5b1f-4134-96c1-6126ef1b9bdc', id, 'on', 'ぎょ', false, 9, 'ok' from jp_kanji where id = '96a3d57b-a4d0-4589-a4f1-2b6e3d031308'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('96a3d57b-a4d0-4589-a4f1-2b6e3d031308', '30b79faf-ef36-4981-b6c6-dac66b93cae6', '魚', 'さかな', 'con cá', false, 9, 'pdf', 'ok');

-- ---------- 牛 (NGƯU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('1d02de3b-dcae-4389-88b0-9fe579c6e0c2', 'N5', '牛', 'NGƯU', 'bò', 4, '牛', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '17c4cd4e-b10b-4302-8cba-6a949a35ce61', id, 'kun', 'うし', true, 9, 'ok' from jp_kanji where id = '1d02de3b-dcae-4389-88b0-9fe579c6e0c2'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'b5436604-792b-4fe3-a82c-0984cbe3d70e', id, 'on', 'ぎゅう', true, 9, 'ok' from jp_kanji where id = '1d02de3b-dcae-4389-88b0-9fe579c6e0c2'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d02de3b-dcae-4389-88b0-9fe579c6e0c2', '17c4cd4e-b10b-4302-8cba-6a949a35ce61', '牡牛座', 'おうしざ', 'chòm sao Kim Ngưu', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d02de3b-dcae-4389-88b0-9fe579c6e0c2', 'b5436604-792b-4fe3-a82c-0984cbe3d70e', '牛乳', 'ぎゅうにゅう', 'sữa bò', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d02de3b-dcae-4389-88b0-9fe579c6e0c2', 'b5436604-792b-4fe3-a82c-0984cbe3d70e', '牛どん', 'ぎゅうどん', 'cơm thịt bò', false, 9, 'pdf', 'ok');

-- ---------- 茶 (TRÀ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('cf521479-7017-4eda-9f9e-dab6b2ba2042', 'N5', '茶', 'TRÀ', 'trà', 9, NULL, 9, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7b843bc5-1950-4cdf-a649-96f7286ac0d5', id, 'on', 'ちゃ', true, 9, 'ok' from jp_kanji where id = 'cf521479-7017-4eda-9f9e-dab6b2ba2042'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'e6737f2e-0c5d-4b26-8b72-bba3d1e356bf', id, 'on', 'さ', false, 9, 'ok' from jp_kanji where id = 'cf521479-7017-4eda-9f9e-dab6b2ba2042'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('cf521479-7017-4eda-9f9e-dab6b2ba2042', '7b843bc5-1950-4cdf-a649-96f7286ac0d5', 'お茶', 'おちゃ', 'trà xanh', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('cf521479-7017-4eda-9f9e-dab6b2ba2042', '7b843bc5-1950-4cdf-a649-96f7286ac0d5', '紅茶', 'こうちゃ', 'hồng trà', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('cf521479-7017-4eda-9f9e-dab6b2ba2042', 'e6737f2e-0c5d-4b26-8b72-bba3d1e356bf', '喫茶店', 'きっさてん', 'quán cafe', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('cf521479-7017-4eda-9f9e-dab6b2ba2042', '7b843bc5-1950-4cdf-a649-96f7286ac0d5', '茶色', 'ちゃいろ', 'màu nâu', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('cf521479-7017-4eda-9f9e-dab6b2ba2042', 'e6737f2e-0c5d-4b26-8b72-bba3d1e356bf', '茶道', 'さどう', 'Trà đạo', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('cf521479-7017-4eda-9f9e-dab6b2ba2042', '7b843bc5-1950-4cdf-a649-96f7286ac0d5', 'お茶をたてます', 'おちゃをたてます', 'pha trà', false, 9, 'pdf', 'ok');

-- ---------- 物 (VẬT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', 'N5', '物', 'VẬT', 'đồ vật, vật', 8, NULL, 9, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', id, 'kun', 'もの', true, 9, 'ok' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '03fe6a13-4b60-4f7e-bba3-42412e519019', id, 'on', 'ぶつ', true, 9, 'ok' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'e04b6ba4-a25d-4d51-a4b7-4c5c17db38a4', id, 'on', 'もつ', false, 9, 'ok' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '3fab736a-e8b2-40aa-b6d8-a9c0a3806610', id, 'on', 'ぶっ', false, 9, 'ok' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '果物', 'くだもの', 'hoa quả', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '食べ物', 'たべもの', 'đồ ăn', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '飲み物', 'のみもの', 'đồ uống', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '物', 'もの', 'đồ vật', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '買い物します', 'かいものします', 'mua sắm', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '着物', 'きもの', 'kimono', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '建物', 'たてもの', 'tòa nhà', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '品物', 'しなもの', 'hàng hóa', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '忘れ物', 'わすれもの', 'đồ để quên', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '乗り物', 'のりもの', 'phương tiện đi lại', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '本物', 'ほんもの', 'hàng thật', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '95dee760-51d0-44a8-9fbc-2d2ae5f7e263', '洗濯物', 'せんたくもの', 'đồ để giặt', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', 'e04b6ba4-a25d-4d51-a4b7-4c5c17db38a4', '荷物', 'にもつ', 'hành lý', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '03fe6a13-4b60-4f7e-bba3-42412e519019', '動物', 'どうぶつ', 'động vật', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a', '3fab736a-e8b2-40aa-b6d8-a9c0a3806610', '物価', 'ぶっか', 'vật giá, giá cả', false, 9, 'pdf', 'ok');

-- ---------- 花 (HOA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('58af428d-f3ed-4780-a45e-d8d4317877cf', 'N5', '花', 'HOA', 'hoa', 7, '艸', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7653daa5-a57c-4ee6-b50a-ed7a24a26a2b', id, 'kun', 'はな', true, 9, 'ok' from jp_kanji where id = '58af428d-f3ed-4780-a45e-d8d4317877cf'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'dd66b143-e83c-4d11-8bb2-0d63a32a8e0a', id, 'on', 'か', false, 9, 'ok' from jp_kanji where id = '58af428d-f3ed-4780-a45e-d8d4317877cf'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('58af428d-f3ed-4780-a45e-d8d4317877cf', '7653daa5-a57c-4ee6-b50a-ed7a24a26a2b', '花見', 'はなみ', 'ngắm hoa anh đào', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('58af428d-f3ed-4780-a45e-d8d4317877cf', '7653daa5-a57c-4ee6-b50a-ed7a24a26a2b', '花', 'はな', 'hoa', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('58af428d-f3ed-4780-a45e-d8d4317877cf', '7653daa5-a57c-4ee6-b50a-ed7a24a26a2b', '生け花', 'いけばな', 'nghệ thuật cắm hoa', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('58af428d-f3ed-4780-a45e-d8d4317877cf', '7653daa5-a57c-4ee6-b50a-ed7a24a26a2b', '花火', 'はなび', 'pháo hoa', false, 9, 'pdf', 'ok');

-- ---------- 買 (MÃI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('e4760ba3-5e21-4a4b-9d47-173877a7788e', 'N5', '買', 'MÃI', 'mua', 12, NULL, 9, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7d829aa2-d16f-405f-a5c1-d73921a48870', id, 'kun', 'か', true, 9, 'ok' from jp_kanji where id = 'e4760ba3-5e21-4a4b-9d47-173877a7788e'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '67ef8523-de75-4b88-8aee-df38e1e70602', id, 'on', 'ばい', false, 9, 'ok' from jp_kanji where id = 'e4760ba3-5e21-4a4b-9d47-173877a7788e'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('e4760ba3-5e21-4a4b-9d47-173877a7788e', '7d829aa2-d16f-405f-a5c1-d73921a48870', '買います', 'かいます', 'mua', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('e4760ba3-5e21-4a4b-9d47-173877a7788e', '7d829aa2-d16f-405f-a5c1-d73921a48870', '買い物します', 'かいものします', 'mua sắm, shopping', false, 9, 'pdf', 'ok');

-- ---------- 読 (ĐỘC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('d82f83a6-0653-4173-92ae-408191416fd1', 'N5', '読', 'ĐỘC', 'đọc', 14, NULL, 9, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '110d1c44-ed09-466f-a924-9a668841ff4e', id, 'kun', 'よ', true, 9, 'ok' from jp_kanji where id = 'd82f83a6-0653-4173-92ae-408191416fd1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '683db587-c421-40e8-9182-2c42cd3e3a49', id, 'on', 'どく', false, 9, 'ok' from jp_kanji where id = 'd82f83a6-0653-4173-92ae-408191416fd1'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d82f83a6-0653-4173-92ae-408191416fd1', '110d1c44-ed09-466f-a924-9a668841ff4e', '読みます', 'よみます', 'đọc', false, 9, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d82f83a6-0653-4173-92ae-408191416fd1', '110d1c44-ed09-466f-a924-9a668841ff4e', '読み方', 'よみかた', 'cách đọc', false, 9, 'pdf', 'ok');

-- ---------- 手 (THỦ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', 'N5', '手', 'THỦ', 'tay', 4, '手', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', id, 'kun', 'て', true, 10, 'ok' from jp_kanji where id = 'd8f9817b-2068-4a84-9a06-51509bb978cb'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '00848abe-2f1d-4f39-bfcc-ded05e0e587d', id, 'on', 'ず', false, 10, 'ok' from jp_kanji where id = 'd8f9817b-2068-4a84-9a06-51509bb978cb'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '40bf0a27-f6fc-4805-9289-08392c551dd7', id, 'on', 'しゅ', false, 10, 'ok' from jp_kanji where id = 'd8f9817b-2068-4a84-9a06-51509bb978cb'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '手帳', 'てちょう', 'cuốn sổ tay', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', 'お手洗い', 'おてあらい', 'nhà vệ sinh', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '手紙', 'てがみ', 'lá thư', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '手', 'て', 'tay', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '下手な', 'へたな', 'kém, dở', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '切手', 'きって', 'con tem', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '相手', 'あいて', 'đối tác, đối phương', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '手に入れます', 'てにいれます', 'có được, đạt được', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '1f959fd8-d59d-4f5a-9a7e-07b4dcdf983e', '手袋', 'てぶくろ', 'bao tay', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '00848abe-2f1d-4f39-bfcc-ded05e0e587d', '上手な', 'じょうずな', 'giỏi, thông thạo', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '40bf0a27-f6fc-4805-9289-08392c551dd7', '歌手', 'かしゅ', 'ca sĩ', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d8f9817b-2068-4a84-9a06-51509bb978cb', '40bf0a27-f6fc-4805-9289-08392c551dd7', '運転手', 'うんてんしゅ', 'người lái xe', false, 10, 'pdf', 'ok');

-- ---------- 少 (THIỂU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5', 'N5', '少', 'THIỂU', 'ít', 4, '小', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '60040884-5ee7-434d-8631-9f8fcefd397a', id, 'kun', 'すく', false, 10, 'ok' from jp_kanji where id = 'a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5ed218bd-c988-4632-80d2-b8c68b1f4490', id, 'kun', 'すこ', true, 10, 'ok' from jp_kanji where id = 'a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '51d9ad70-8903-4535-906e-9f4b30263b1f', id, 'on', 'しょう', true, 10, 'ok' from jp_kanji where id = 'a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5', '5ed218bd-c988-4632-80d2-b8c68b1f4490', '少し', 'すこし', 'một chút, một ít', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5', '60040884-5ee7-434d-8631-9f8fcefd397a', '少ない', 'すくない', 'ít, không nhiều', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5', '51d9ad70-8903-4535-906e-9f4b30263b1f', '少々お待ちください', 'しょうしょうおまちください', 'xin hãy chờ một chút', false, 10, 'pdf', 'ok');

-- ---------- 間 (GIAN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('01fae6c8-ca49-4ec4-a63a-6d22be7df7c4', 'N5', '間', 'GIAN', 'khoảng, thời gian', 12, '門', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f53e0ac9-21d7-41da-b0b4-f9343f4e658b', id, 'kun', 'あいだ', true, 10, 'ok' from jp_kanji where id = '01fae6c8-ca49-4ec4-a63a-6d22be7df7c4'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'b4fbd51e-0ef3-4719-a0bb-1c51ceac5acb', id, 'kun', 'ま', false, 10, 'ok' from jp_kanji where id = '01fae6c8-ca49-4ec4-a63a-6d22be7df7c4'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '6ee22c10-1d49-4601-904a-5329c591cb29', id, 'on', 'かん', true, 10, 'ok' from jp_kanji where id = '01fae6c8-ca49-4ec4-a63a-6d22be7df7c4'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('01fae6c8-ca49-4ec4-a63a-6d22be7df7c4', 'f53e0ac9-21d7-41da-b0b4-f9343f4e658b', '間', 'あいだ', 'ở giữa', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('01fae6c8-ca49-4ec4-a63a-6d22be7df7c4', 'b4fbd51e-0ef3-4719-a0bb-1c51ceac5acb', '間に合います', 'まにあいます', 'kịp (giờ)', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('01fae6c8-ca49-4ec4-a63a-6d22be7df7c4', 'b4fbd51e-0ef3-4719-a0bb-1c51ceac5acb', '昼間', 'ひるま', 'thời gian trưa', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('01fae6c8-ca49-4ec4-a63a-6d22be7df7c4', 'b4fbd51e-0ef3-4719-a0bb-1c51ceac5acb', '仲間', 'なかま', 'đồng nghiệp', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('01fae6c8-ca49-4ec4-a63a-6d22be7df7c4', '6ee22c10-1d49-4601-904a-5329c591cb29', '時間', 'じかん', 'thời gian', false, 10, 'pdf', 'ok');

-- ---------- 内 (NỘI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('bfa7692a-8029-4d1c-a49d-cc932ad0ef1f', 'N5', '内', 'NỘI', 'bên trong', 4, NULL, 10, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '02befc17-a791-4ef9-94bf-c3142dc0d880', id, 'kun', 'うち', true, 10, 'ok' from jp_kanji where id = 'bfa7692a-8029-4d1c-a49d-cc932ad0ef1f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd2207183-3824-4f78-89e7-f1162fffcdf8', id, 'on', 'ない', true, 10, 'ok' from jp_kanji where id = 'bfa7692a-8029-4d1c-a49d-cc932ad0ef1f'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('bfa7692a-8029-4d1c-a49d-cc932ad0ef1f', '02befc17-a791-4ef9-94bf-c3142dc0d880', '内', 'うち', 'nội, bên trong', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('bfa7692a-8029-4d1c-a49d-cc932ad0ef1f', 'd2207183-3824-4f78-89e7-f1162fffcdf8', '家内', 'かない', 'trong nhà', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('bfa7692a-8029-4d1c-a49d-cc932ad0ef1f', 'd2207183-3824-4f78-89e7-f1162fffcdf8', '案内', 'あんない', 'hướng dẫn', false, 10, 'pdf', 'ok');

-- ---------- 田 (ĐIỀN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('5b4c4fa5-5d09-4c16-b572-93dc85d921ac', 'N5', '田', 'ĐIỀN', 'ruộng', 5, '田', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1fd78fe2-c6f5-45d0-9aa2-2fb4f4012874', id, 'kun', 'た', true, 10, 'ok' from jp_kanji where id = '5b4c4fa5-5d09-4c16-b572-93dc85d921ac'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5b4c4fa5-5d09-4c16-b572-93dc85d921ac', '1fd78fe2-c6f5-45d0-9aa2-2fb4f4012874', '本田駅', 'ほんだえき', 'nhà ga Honda', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5b4c4fa5-5d09-4c16-b572-93dc85d921ac', '1fd78fe2-c6f5-45d0-9aa2-2fb4f4012874', '田舎', 'いなか', 'vùng nông thôn', true, 10, 'pdf', 'ok');

-- ---------- 町 (ĐINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('1b41805a-64fd-4cfa-bb3b-c139ef1b691c', 'N5', '町', 'ĐINH', 'phố, thị trấn', 7, '田', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c5d86a50-7e8d-4618-b374-aff545cb092d', id, 'kun', 'まち', true, 10, 'ok' from jp_kanji where id = '1b41805a-64fd-4cfa-bb3b-c139ef1b691c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '93e7b6f3-9267-4a87-a925-b2692bae7c3a', id, 'on', 'ちょう', false, 10, 'ok' from jp_kanji where id = '1b41805a-64fd-4cfa-bb3b-c139ef1b691c'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1b41805a-64fd-4cfa-bb3b-c139ef1b691c', 'c5d86a50-7e8d-4618-b374-aff545cb092d', '町', 'まち', 'con phố, thị trấn', false, 10, 'pdf', 'ok');

-- ---------- 電 (ĐIỆN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', 'N5', '電', 'ĐIỆN', 'điện', 13, '雨', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '57aad5fe-3678-46e8-934e-cfc3301707f7', id, 'on', 'でん', true, 10, 'ok' from jp_kanji where id = 'b71cd6e3-e223-4bef-8038-11c3e653a6e1'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '電気', 'でんき', 'điện', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '電話', 'でんわ', 'điện thoại', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '電車', 'でんしゃ', 'tàu điện', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '電池', 'でんち', 'cục pin', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '電子辞書', 'でんしじしょ', 'từ điển điện tử', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '電話します', 'でんわします', 'gọi điện thoại', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '懐中電灯', 'かいちゅうでんとう', 'đèn pin', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b71cd6e3-e223-4bef-8038-11c3e653a6e1', '57aad5fe-3678-46e8-934e-cfc3301707f7', '電源', 'でんげん', 'nguồn điện', false, 10, 'pdf', 'ok');

-- ---------- 気 (KHÍ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', 'N5', '気', 'KHÍ', 'khí, tinh thần', 6, NULL, 10, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '370712d5-3abc-4f86-bf8b-061a4d966349', id, 'on', 'き', true, 10, 'ok' from jp_kanji where id = '8994546b-d102-46a6-a8e2-21214cab1adf'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', 'お元気で', 'おげんきで', 'anh/chị giữ sức khỏe', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '天気', 'てんき', 'thời tiết', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '病気', 'びょうき', 'bị ốm', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '気を付けます', 'きをつけます', 'chú ý', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '気分', 'きぶん', 'tâm tư, tinh thần', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '人気', 'にんき', 'được yêu thích', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '気持ち', 'きもち', 'cảm xúc, tâm trạng', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '気が強い', 'きがつよい', 'cứng rắn, cứng cỏi', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '天気予報', 'てんきよほう', 'dự báo thời tiết', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8994546b-d102-46a6-a8e2-21214cab1adf', '370712d5-3abc-4f86-bf8b-061a4d966349', '空気', 'くうき', 'không khí', false, 10, 'pdf', 'ok');

-- ---------- 山 (SƠN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('2a829e22-1457-41b9-aa54-310dc9e985b3', 'N5', '山', 'SƠN', 'núi', 3, '山', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1287e362-1723-4e4c-ac52-1978d471cee3', id, 'kun', 'やま', true, 10, 'ok' from jp_kanji where id = '2a829e22-1457-41b9-aa54-310dc9e985b3'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '14f74a60-57fb-4f78-9ab8-8adea19de4cc', id, 'on', 'さん', false, 10, 'ok' from jp_kanji where id = '2a829e22-1457-41b9-aa54-310dc9e985b3'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2a829e22-1457-41b9-aa54-310dc9e985b3', '1287e362-1723-4e4c-ac52-1978d471cee3', '山', 'やま', 'ngọn núi', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2a829e22-1457-41b9-aa54-310dc9e985b3', '1287e362-1723-4e4c-ac52-1978d471cee3', '山登り', 'やまのぼり', 'việc leo núi', false, 10, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2a829e22-1457-41b9-aa54-310dc9e985b3', '14f74a60-57fb-4f78-9ab8-8adea19de4cc', '富士山', 'ふじさん', 'núi Phú Sỹ', true, 10, 'pdf', 'ok');

-- ---------- 川 (XUYÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('d4e06ce2-72ec-4d1a-9bce-31d15c9e0a58', 'N5', '川', 'XUYÊN', 'sông', 3, '川', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1e027517-61d1-4e77-b31c-cc2e3a310c84', id, 'kun', 'かわ', true, 10, 'ok' from jp_kanji where id = 'd4e06ce2-72ec-4d1a-9bce-31d15c9e0a58'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('d4e06ce2-72ec-4d1a-9bce-31d15c9e0a58', '1e027517-61d1-4e77-b31c-cc2e3a310c84', '川', 'かわ', 'con sông', false, 10, 'pdf', 'ok');


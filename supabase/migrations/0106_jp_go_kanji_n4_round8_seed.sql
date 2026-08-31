-- ============================================================
-- jp-go — Kanji N4, round 8 (17 kanji, trang in 9).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- 発(PHÁT) chiếm 2 dòng liên tiếp trong PDF, đã gộp 1 kanji đủ 5 từ.
-- ============================================================

-- ---------- 星 (TINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('dd939544-5202-4be5-9267-5cd211a901c9', 'N4', '星', 'TINH', 'ngôi sao', 9, '日', '星 có bộ 日(ánh sáng) trên 生(sinh ra) — ánh sáng sinh ra từ xa, là ngôi sao.', NULL, '{"昼","皇"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'cbeef850-5719-4279-a467-d2ad32bf3225', id, 'kun', 'ほし', true, 9, 'ok', NULL from jp_kanji where id = 'dd939544-5202-4be5-9267-5cd211a901c9'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('dd939544-5202-4be5-9267-5cd211a901c9', 'cbeef850-5719-4279-a467-d2ad32bf3225', '星', 'ほし', 'sao', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('dd939544-5202-4be5-9267-5cd211a901c9', 'cbeef850-5719-4279-a467-d2ad32bf3225', '星占い', 'ほしうらい', 'bói sao, bói tử vi', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '44298b99-199d-4e30-b2a7-c4b94ecbddaf', id, 'on', 'シ', false, 9, 'ok', NULL from jp_kanji where id = 'dd939544-5202-4be5-9267-5cd211a901c9'
on conflict (id) do nothing;

-- ---------- 風 (PHONG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('81f9452c-feef-4720-8e66-1e0758a614bb', 'N4', '風', 'PHONG', 'gió, phong cách', 9, '風', '風 là hình cánh buồm trong khung — gió thổi làm buồm căng.', NULL, '{"凡","同"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a260ce48-6a78-4507-a127-4d375c50f38a', id, 'kun', 'かぜ', true, 9, 'ok', NULL from jp_kanji where id = '81f9452c-feef-4720-8e66-1e0758a614bb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('81f9452c-feef-4720-8e66-1e0758a614bb', 'a260ce48-6a78-4507-a127-4d375c50f38a', '風', 'かぜ', 'gió', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd4fcdc44-110b-43af-9daf-6601dd93bf8e', id, 'on', 'フウ', false, 9, 'ok', NULL from jp_kanji where id = '81f9452c-feef-4720-8e66-1e0758a614bb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('81f9452c-feef-4720-8e66-1e0758a614bb', 'd4fcdc44-110b-43af-9daf-6601dd93bf8e', '台風', 'たいふう', 'cơn bão', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6f05aa29-2625-4680-a71c-42cd4c0e1120', id, 'on', 'フ', false, 9, 'ok', NULL from jp_kanji where id = '81f9452c-feef-4720-8e66-1e0758a614bb'
on conflict (id) do nothing;

-- ---------- 然 (NHIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9b4d0bc6-0d1b-4abe-9678-b4688cd91363', 'N4', '然', 'NHIÊN', 'như vậy, tự nhiên', 12, '灬', '然 có bộ 灬(lửa) ở dưới — đốt (然) là hành động tự nhiên, đương nhiên xảy ra.', NULL, '{"燃","熱"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c13173a8-4de9-41d7-8296-420b6ef9ad5c', id, 'kun', NULL, false, 9, 'ok', NULL from jp_kanji where id = '9b4d0bc6-0d1b-4abe-9678-b4688cd91363'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '44034d5b-912f-45da-9d89-15d1310f437d', id, 'on', 'ゼン', true, 9, 'ok', NULL from jp_kanji where id = '9b4d0bc6-0d1b-4abe-9678-b4688cd91363'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9b4d0bc6-0d1b-4abe-9678-b4688cd91363', '44034d5b-912f-45da-9d89-15d1310f437d', '全然', 'ぜんぜん', 'hoàn toàn', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eb2b696a-cbff-4a75-a34e-c3224c1d98b6', id, 'on', 'ネン', false, 9, 'ok', NULL from jp_kanji where id = '9b4d0bc6-0d1b-4abe-9678-b4688cd91363'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9b4d0bc6-0d1b-4abe-9678-b4688cd91363', 'eb2b696a-cbff-4a75-a34e-c3224c1d98b6', '自然', 'しぜん', 'tự nhiên', false, 9, 'pdf', 'ok', NULL);

-- ---------- 油 (DU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d3232378-46dc-48cd-ae0c-680647ebba96', 'N4', '油', 'DU', 'dầu, mỡ', 8, '氵', '油 có bộ 氵(chất lỏng) bên trái — dầu là 1 chất lỏng.', NULL, '{"由","袖"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '47a26479-db63-4351-80bb-fbc53e2fda9e', id, 'kun', 'あぶら', true, 9, 'ok', NULL from jp_kanji where id = 'd3232378-46dc-48cd-ae0c-680647ebba96'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fd23c3f8-8b38-4a5c-8a68-e26fdbcff69e', id, 'on', 'ユ', false, 9, 'ok', NULL from jp_kanji where id = 'd3232378-46dc-48cd-ae0c-680647ebba96'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d3232378-46dc-48cd-ae0c-680647ebba96', 'fd23c3f8-8b38-4a5c-8a68-e26fdbcff69e', '石油', 'せきゆ', 'dầu thô, dầu mỏ', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '243dc74b-5b24-4b8d-9552-c57bf1eb1b9a', id, 'on', 'ユウ', false, 9, 'ok', NULL from jp_kanji where id = 'd3232378-46dc-48cd-ae0c-680647ebba96'
on conflict (id) do nothing;

-- ---------- 原 (NGUYÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('bc73bb6a-0b98-4173-aa96-9d2187944043', 'N4', '原', 'NGUYÊN', 'ban đầu, cánh đồng, nguồn gốc', 10, '厂', '原 có bộ 厂(vách đá) trên đầu — dòng suối (泉) chảy từ vách đá ra, là nguồn gốc.', NULL, '{"源","願"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '02420f5e-655f-47a8-a14a-771b3ef56475', id, 'kun', 'はら', true, 9, 'ok', NULL from jp_kanji where id = 'bc73bb6a-0b98-4173-aa96-9d2187944043'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '98513fa7-07f7-48d4-b37c-703c95a52384', id, 'on', 'ゲン', false, 9, 'ok', NULL from jp_kanji where id = 'bc73bb6a-0b98-4173-aa96-9d2187944043'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bc73bb6a-0b98-4173-aa96-9d2187944043', '98513fa7-07f7-48d4-b37c-703c95a52384', '原料', 'げんりょう', 'nguyên liệu', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bc73bb6a-0b98-4173-aa96-9d2187944043', '98513fa7-07f7-48d4-b37c-703c95a52384', '原因', 'げんいん', 'nguyên nhân', false, 9, 'pdf', 'ok', NULL);

-- ---------- 皿 (MÃNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d72b1a5b-72a3-43f1-bd83-3dc938541534', 'N4', '皿', 'MÃNH', 'cái đĩa, cái chén', 5, '皿', '皿 là hình vẽ 1 cái đĩa nhìn từ trên xuống.', NULL, '{"血","盆"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '168688c9-e6b1-40c4-8f1e-267623c15499', id, 'kun', 'さら', true, 9, 'ok', NULL from jp_kanji where id = 'd72b1a5b-72a3-43f1-bd83-3dc938541534'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d72b1a5b-72a3-43f1-bd83-3dc938541534', '168688c9-e6b1-40c4-8f1e-267623c15499', 'お皿', 'おさら', 'cái đĩa', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8cb8df87-98dd-44fb-bdd3-c0fb18f9d6e6', id, 'on', 'シ', false, 9, 'ok', NULL from jp_kanji where id = 'd72b1a5b-72a3-43f1-bd83-3dc938541534'
on conflict (id) do nothing;

-- ---------- 発 (PHÁT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('5e2cc7ef-edab-4871-bb64-1edfe9842686', 'N4', '発', 'PHÁT', 'phát ra, xuất phát, phát hiện', 9, '癶', '発 có bộ 癶(2 bàn chân bước ra) — bước ra ngoài là xuất phát, phát đi.', NULL, '{"登","廃"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '32039407-8cfd-473a-b775-9f850770f8d6', id, 'kun', NULL, false, 9, 'ok', NULL from jp_kanji where id = '5e2cc7ef-edab-4871-bb64-1edfe9842686'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '22a13429-c86e-4442-87d3-b0eb0ab080e2', id, 'on', 'ハツ', true, 9, 'ok', NULL from jp_kanji where id = '5e2cc7ef-edab-4871-bb64-1edfe9842686'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5e2cc7ef-edab-4871-bb64-1edfe9842686', '22a13429-c86e-4442-87d3-b0eb0ab080e2', '発表', 'はっぴょう', 'phát biểu, thuyết trình', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5e2cc7ef-edab-4871-bb64-1edfe9842686', '22a13429-c86e-4442-87d3-b0eb0ab080e2', '発見する', 'はっけんする', 'tìm ra, phát hiện', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5e2cc7ef-edab-4871-bb64-1edfe9842686', '22a13429-c86e-4442-87d3-b0eb0ab080e2', '発明する', 'はつめいする', 'phát minh', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5e2cc7ef-edab-4871-bb64-1edfe9842686', '22a13429-c86e-4442-87d3-b0eb0ab080e2', '出発する', 'しゅっぱつする', 'xuất phát, bắt đầu', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5e2cc7ef-edab-4871-bb64-1edfe9842686', '22a13429-c86e-4442-87d3-b0eb0ab080e2', '発音', 'はつおん', 'phát âm', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e676ca92-d466-4997-8573-cd1d0f6980bf', id, 'on', 'ホツ', false, 9, 'ok', NULL from jp_kanji where id = '5e2cc7ef-edab-4871-bb64-1edfe9842686'
on conflict (id) do nothing;

-- ---------- 便 (TIỆN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('44cb59d8-23b5-4132-b1a1-3353f02d1473', 'N4', '便', 'TIỆN', 'thuận tiện, tin tức, chuyến (xe/bay)', 9, '亻', '便 có bộ 亻(người) bên trái — người ta sửa đổi (更) để mọi việc thuận tiện hơn.', NULL, '{"更","硬"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'edfc8d72-ef18-4edc-9124-8bc6ebcbe086', id, 'kun', 'たより', true, 9, 'ok', NULL from jp_kanji where id = '44cb59d8-23b5-4132-b1a1-3353f02d1473'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '18f3603c-5a6d-457f-9bdd-6a81dcad107f', id, 'on', 'ビン', false, 9, 'ok', NULL from jp_kanji where id = '44cb59d8-23b5-4132-b1a1-3353f02d1473'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('44cb59d8-23b5-4132-b1a1-3353f02d1473', '18f3603c-5a6d-457f-9bdd-6a81dcad107f', '郵便局', 'ゆうびんきょく', 'bưu điện', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8187609f-40c5-47c4-bae2-bd3d5f491c01', id, 'on', 'ベン', false, 9, 'ok', NULL from jp_kanji where id = '44cb59d8-23b5-4132-b1a1-3353f02d1473'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('44cb59d8-23b5-4132-b1a1-3353f02d1473', '8187609f-40c5-47c4-bae2-bd3d5f491c01', '便利', 'べんり', 'thuận tiện, tiện lợi', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('44cb59d8-23b5-4132-b1a1-3353f02d1473', '8187609f-40c5-47c4-bae2-bd3d5f491c01', '不便な', 'ふべんな', 'bất tiện', false, 9, 'pdf', 'ok', NULL);

-- ---------- 利 (LỢI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('104a7e89-c66f-4b4f-88a9-a773834fe1e1', 'N4', '利', 'LỢI', 'lợi ích, có lợi', 7, '刂', '利 có bộ 刂(con dao) bên phải — dao sắc cắt lúa (禾) nhanh, có lợi.', NULL, '{"梨","刊"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'dce703c7-376b-48d3-8253-55599cad0373', id, 'kun', NULL, false, 9, 'ok', NULL from jp_kanji where id = '104a7e89-c66f-4b4f-88a9-a773834fe1e1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'bb118ab0-5e1e-4fd9-8f3d-5b91c7ced0f2', id, 'on', 'リ', true, 9, 'ok', NULL from jp_kanji where id = '104a7e89-c66f-4b4f-88a9-a773834fe1e1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('104a7e89-c66f-4b4f-88a9-a773834fe1e1', 'bb118ab0-5e1e-4fd9-8f3d-5b91c7ced0f2', '利用する', 'りようする', 'sử dụng, lợi dụng', false, 9, 'pdf', 'ok', NULL);

-- ---------- 不 (BẤT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('46d5b307-5c67-4534-91fb-6d7002e0cabc', 'N4', '不', 'BẤT', 'không, phủ định', 4, '一', '不 giống hình chữ 一 gãy đôi — phủ định, không.', NULL, '{"否","杯"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1f59e921-456e-4483-8681-cdf33fb328a1', id, 'kun', NULL, false, 9, 'ok', NULL from jp_kanji where id = '46d5b307-5c67-4534-91fb-6d7002e0cabc'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2c078e57-6ae6-46ee-b0ed-5f53f38401e5', id, 'on', 'フ', true, 9, 'ok', NULL from jp_kanji where id = '46d5b307-5c67-4534-91fb-6d7002e0cabc'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('46d5b307-5c67-4534-91fb-6d7002e0cabc', '2c078e57-6ae6-46ee-b0ed-5f53f38401e5', '不思議な', 'ふしぎな', 'kỳ lạ, ảo', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9d26df1f-2748-464f-8a3e-2d3363e3667a', id, 'on', 'ブ', false, 9, 'ok', NULL from jp_kanji where id = '46d5b307-5c67-4534-91fb-6d7002e0cabc'
on conflict (id) do nothing;

-- ---------- 静 (TĨNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ec495e6b-fe79-4bdc-87bd-35c2ca2eb223', 'N4', '静', 'TĨNH', 'yên tĩnh, im lặng', 14, '青', '静 có bộ 青(xanh, trong trẻo) bên trái — không gian trong trẻo, yên tĩnh.', NULL, '{"情","清"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '092f1055-54f5-409c-8b5b-979c0c3c17d3', id, 'kun', 'しずか', true, 9, 'ok', NULL from jp_kanji where id = 'ec495e6b-fe79-4bdc-87bd-35c2ca2eb223'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ec495e6b-fe79-4bdc-87bd-35c2ca2eb223', '092f1055-54f5-409c-8b5b-979c0c3c17d3', '静かな', 'しずかな', 'yên tĩnh, im lặng', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '939baabc-0a2d-4642-ad7d-cdacd74dd647', id, 'on', 'セイ', false, 9, 'ok', NULL from jp_kanji where id = 'ec495e6b-fe79-4bdc-87bd-35c2ca2eb223'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a343831c-d12b-4459-a287-5057bb7bd1d3', id, 'on', 'ジョウ', false, 9, 'ok', NULL from jp_kanji where id = 'ec495e6b-fe79-4bdc-87bd-35c2ca2eb223'
on conflict (id) do nothing;

-- ---------- 同 (ĐỒNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('eaf8cc3c-95e8-47b8-9d39-feeaf62be874', 'N4', '同', 'ĐỒNG', 'giống nhau, cùng', 6, '口', '同 có bộ 口(miệng) ở dưới — mọi người cùng nói (口) 1 tiếng, đồng lòng, giống nhau.', NULL, '{"洞","銅"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'caad79ca-d57f-41ee-8d6f-2a0b2e7f172e', id, 'kun', 'おなじ', true, 9, 'ok', NULL from jp_kanji where id = 'eaf8cc3c-95e8-47b8-9d39-feeaf62be874'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('eaf8cc3c-95e8-47b8-9d39-feeaf62be874', 'caad79ca-d57f-41ee-8d6f-2a0b2e7f172e', '同じ', 'おなじ', 'giống', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8a014723-5e1d-4f50-8214-a8c0c57739ab', id, 'on', 'ドウ', false, 9, 'ok', NULL from jp_kanji where id = 'eaf8cc3c-95e8-47b8-9d39-feeaf62be874'
on conflict (id) do nothing;

-- ---------- 有 (HỮU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ea318de3-54c4-419e-b4dd-35c5865ec7bf', 'N4', '有', 'HỮU', 'có, sở hữu', 6, '月', '有 có bộ 月(thịt) dưới bàn tay 一 — cầm được miếng thịt trong tay, tức là có.', NULL, '{"育","肉"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2e0770b0-2c6c-46d7-adb2-2fe722f9a806', id, 'kun', 'ある', true, 9, 'ok', NULL from jp_kanji where id = 'ea318de3-54c4-419e-b4dd-35c5865ec7bf'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5c3898c5-34d6-484d-b21e-9aacb7e95363', id, 'on', 'ユウ', false, 9, 'ok', NULL from jp_kanji where id = 'ea318de3-54c4-419e-b4dd-35c5865ec7bf'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ea318de3-54c4-419e-b4dd-35c5865ec7bf', '5c3898c5-34d6-484d-b21e-9aacb7e95363', '有名な', 'ゆうめいな', 'nổi tiếng', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '079b51bc-7c8b-4f69-9aa7-89667b2ea03e', id, 'on', 'ウ', false, 9, 'ok', NULL from jp_kanji where id = 'ea318de3-54c4-419e-b4dd-35c5865ec7bf'
on conflict (id) do nothing;

-- ---------- 親 (THÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('57ddef81-eccd-408d-943f-3ca4a70497c0', 'N4', '親', 'THÂN', 'cha mẹ, thân thiết', 16, '見', '親 có bộ 見(nhìn) bên phải — cha mẹ luôn đứng nhìn theo (見) con cái từ xa (立+木).', NULL, '{"新","視"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7540fd85-729a-4c05-8648-3610dbed6500', id, 'kun', 'おや', true, 9, 'ok', NULL from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('57ddef81-eccd-408d-943f-3ca4a70497c0', '7540fd85-729a-4c05-8648-3610dbed6500', '親', 'おや', 'cha mẹ', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c72cba2c-2348-4561-8fd2-8c3c2c84d17b', id, 'kun', 'したしい', false, 9, 'ok', NULL from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '778af6b5-9175-46c4-a37d-851e396e4e9c', id, 'kun', 'したしむ', false, 9, 'ok', NULL from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eacbf693-a08c-4f65-805a-715d28dc423d', id, 'on', 'シン', false, 9, 'ok', NULL from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('57ddef81-eccd-408d-943f-3ca4a70497c0', 'eacbf693-a08c-4f65-805a-715d28dc423d', '親切な', 'しんせつな', 'thân thiện', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('57ddef81-eccd-408d-943f-3ca4a70497c0', 'eacbf693-a08c-4f65-805a-715d28dc423d', '両親', 'りょうしん', 'cha mẹ', false, 9, 'pdf', 'ok', NULL);

-- ---------- 細 (TẾ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('f0e5cb98-e8cb-4373-8935-3a4f0077120c', 'N4', '細', 'TẾ', 'nhỏ, chi tiết, mỏng mảnh', 11, '糸', '細 có bộ 糸(sợi tơ) bên trái — sợi tơ mảnh, nhỏ, chi tiết.', NULL, '{"紳","累"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0c87f8ba-f1fe-4e52-a528-ff694e6774a7', id, 'kun', 'こまかい', true, 9, 'ok', NULL from jp_kanji where id = 'f0e5cb98-e8cb-4373-8935-3a4f0077120c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f0e5cb98-e8cb-4373-8935-3a4f0077120c', '0c87f8ba-f1fe-4e52-a528-ff694e6774a7', '細かい', 'こまかい', 'chi tiết, (tiền) lẻ', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '82f858e5-c27f-42cb-a0b3-38416dab1a37', id, 'kun', 'ほそい', false, 9, 'ok', NULL from jp_kanji where id = 'f0e5cb98-e8cb-4373-8935-3a4f0077120c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f0e5cb98-e8cb-4373-8935-3a4f0077120c', '82f858e5-c27f-42cb-a0b3-38416dab1a37', '細い', 'ほそい', 'mỏng, hẹp', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eab1cd1c-f683-4650-88f0-f68b0457050e', id, 'on', 'サイ', false, 9, 'ok', NULL from jp_kanji where id = 'f0e5cb98-e8cb-4373-8935-3a4f0077120c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f0e5cb98-e8cb-4373-8935-3a4f0077120c', 'eab1cd1c-f683-4650-88f0-f68b0457050e', 'IPS細胞', 'アイピーエスさいぼう', 'tế bào IPS', false, 9, 'pdf', 'ok', NULL);

-- ---------- 駅 (DỊCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ce9cc566-adfa-4f8e-a862-8b1e616ec728', 'N4', '駅', 'DỊCH', 'nhà ga', 14, '馬', '駅 có bộ 馬(ngựa) bên trái — trạm đổi ngựa thời xưa, nay là nhà ga.', NULL, '{"訳","尺"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '84fbbc24-206a-4118-afc8-81eef6c1546f', id, 'kun', NULL, false, 9, 'ok', NULL from jp_kanji where id = 'ce9cc566-adfa-4f8e-a862-8b1e616ec728'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ae39adbd-2be5-454e-8936-68294b16439d', id, 'on', 'エキ', true, 9, 'ok', NULL from jp_kanji where id = 'ce9cc566-adfa-4f8e-a862-8b1e616ec728'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ce9cc566-adfa-4f8e-a862-8b1e616ec728', 'ae39adbd-2be5-454e-8936-68294b16439d', '駅', 'えき', 'nhà ga', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ce9cc566-adfa-4f8e-a862-8b1e616ec728', 'ae39adbd-2be5-454e-8936-68294b16439d', '駅員', 'えきいん', 'nhân viên nhà ga', false, 9, 'pdf', 'ok', NULL);

-- ---------- 店 (ĐIẾM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1', 'N4', '店', 'ĐIẾM', 'cửa hàng', 8, '广', '店 có bộ 广(mái che) trên đầu — 1 mái che có chỗ ngồi (占) bán hàng, là cửa hàng.', NULL, '{"占","庁"}', 9, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd791ef5b-b94d-4a1e-94bb-860fdcf31d56', id, 'kun', 'みせ', true, 9, 'ok', NULL from jp_kanji where id = '9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1', 'd791ef5b-b94d-4a1e-94bb-860fdcf31d56', '店', 'みせ', 'cửa hàng', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b19c8791-9f05-4149-b4f6-fbfbf8a94fb5', id, 'on', 'テン', false, 9, 'ok', NULL from jp_kanji where id = '9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1', 'b19c8791-9f05-4149-b4f6-fbfbf8a94fb5', '喫茶店', 'きっさてん', 'quán cà phê', false, 9, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1', 'b19c8791-9f05-4149-b4f6-fbfbf8a94fb5', '支店', 'してん', 'chi nhánh', false, 9, 'pdf', 'ok', NULL);

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 星 (TINH) có âm chính là gì?', 'サイ', 'しずか', 'ほし', 'はら', 'ほし', 'generated' from jp_kanji where id = 'dd939544-5202-4be5-9267-5cd211a901c9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ngôi sao"?', '発', '然', '星', '細', '星', 'generated' from jp_kanji where id = 'dd939544-5202-4be5-9267-5cd211a901c9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"星" có nghĩa là gì?', 'chi tiết, (tiền) lẻ', 'cái đĩa', 'gió', 'sao', 'sao', 'generated' from jp_kanji where id = 'dd939544-5202-4be5-9267-5cd211a901c9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 星占い', 'ほしうらい', 'generated' from jp_kanji where id = 'dd939544-5202-4be5-9267-5cd211a901c9';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 風 (PHONG) có âm chính là gì?', 'ホツ', 'ほし', 'かぜ', 'したしむ', 'かぜ', 'generated' from jp_kanji where id = '81f9452c-feef-4720-8e66-1e0758a614bb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "gió, phong cách"?', '風', '便', '同', '有', '風', 'generated' from jp_kanji where id = '81f9452c-feef-4720-8e66-1e0758a614bb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"風" có nghĩa là gì?', 'gió', 'chi tiết, (tiền) lẻ', 'bói sao, bói tử vi', 'kỳ lạ, ảo', 'gió', 'generated' from jp_kanji where id = '81f9452c-feef-4720-8e66-1e0758a614bb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 台風', 'たいふう', 'generated' from jp_kanji where id = '81f9452c-feef-4720-8e66-1e0758a614bb';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 然 (NHIÊN) có âm chính là gì?', 'ゼン', 'さら', 'ほそい', 'シ', 'ゼン', 'generated' from jp_kanji where id = '9b4d0bc6-0d1b-4abe-9678-b4688cd91363';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "như vậy, tự nhiên"?', '然', '親', '原', '利', '然', 'generated' from jp_kanji where id = '9b4d0bc6-0d1b-4abe-9678-b4688cd91363';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"全然" có nghĩa là gì?', 'mỏng, hẹp', 'hoàn toàn', 'nhà ga', 'quán cà phê', 'hoàn toàn', 'generated' from jp_kanji where id = '9b4d0bc6-0d1b-4abe-9678-b4688cd91363';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 自然', 'しぜん', 'generated' from jp_kanji where id = '9b4d0bc6-0d1b-4abe-9678-b4688cd91363';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 油 (DU) có âm chính là gì?', 'はら', 'ジョウ', 'おなじ', 'あぶら', 'あぶら', 'generated' from jp_kanji where id = 'd3232378-46dc-48cd-ae0c-680647ebba96';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dầu, mỡ"?', '便', '静', '油', '親', '油', 'generated' from jp_kanji where id = 'd3232378-46dc-48cd-ae0c-680647ebba96';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"石油" có nghĩa là gì?', 'thuận tiện, tiện lợi', 'dầu thô, dầu mỏ', 'phát biểu, thuyết trình', 'phát âm', 'dầu thô, dầu mỏ', 'generated' from jp_kanji where id = 'd3232378-46dc-48cd-ae0c-680647ebba96';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 石油', 'せきゆ', 'generated' from jp_kanji where id = 'd3232378-46dc-48cd-ae0c-680647ebba96';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 原 (NGUYÊN) có âm chính là gì?', 'ほそい', 'テン', 'はら', 'リ', 'はら', 'generated' from jp_kanji where id = 'bc73bb6a-0b98-4173-aa96-9d2187944043';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ban đầu, cánh đồng, nguồn gốc"?', '油', '然', '原', '不', '原', 'generated' from jp_kanji where id = 'bc73bb6a-0b98-4173-aa96-9d2187944043';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"原料" có nghĩa là gì?', 'nguyên liệu', 'chi nhánh', 'nhân viên nhà ga', 'nguyên nhân', 'nguyên liệu', 'generated' from jp_kanji where id = 'bc73bb6a-0b98-4173-aa96-9d2187944043';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 原因', 'げんいん', 'generated' from jp_kanji where id = 'bc73bb6a-0b98-4173-aa96-9d2187944043';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 皿 (MÃNH) có âm chính là gì?', 'ある', 'ビン', 'あぶら', 'さら', 'さら', 'generated' from jp_kanji where id = 'd72b1a5b-72a3-43f1-bd83-3dc938541534';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cái đĩa, cái chén"?', '不', '発', '皿', '静', '皿', 'generated' from jp_kanji where id = 'd72b1a5b-72a3-43f1-bd83-3dc938541534';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お皿" có nghĩa là gì?', 'chi nhánh', 'cái đĩa', 'nguyên liệu', 'phát biểu, thuyết trình', 'cái đĩa', 'generated' from jp_kanji where id = 'd72b1a5b-72a3-43f1-bd83-3dc938541534';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お皿', 'おさら', 'generated' from jp_kanji where id = 'd72b1a5b-72a3-43f1-bd83-3dc938541534';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 発 (PHÁT) có âm chính là gì?', 'したしい', 'ハツ', 'エキ', 'ゲン', 'ハツ', 'generated' from jp_kanji where id = '5e2cc7ef-edab-4871-bb64-1edfe9842686';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "phát ra, xuất phát, phát hiện"?', '原', '発', '利', '同', '発', 'generated' from jp_kanji where id = '5e2cc7ef-edab-4871-bb64-1edfe9842686';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"発表" có nghĩa là gì?', 'nguyên liệu', 'tế bào IPS', 'quán cà phê', 'phát biểu, thuyết trình', 'phát biểu, thuyết trình', 'generated' from jp_kanji where id = '5e2cc7ef-edab-4871-bb64-1edfe9842686';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 発見する', 'はっけんする', 'generated' from jp_kanji where id = '5e2cc7ef-edab-4871-bb64-1edfe9842686';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 便 (TIỆN) có âm chính là gì?', 'したしむ', 'ウ', 'ベン', 'たより', 'たより', 'generated' from jp_kanji where id = '44cb59d8-23b5-4132-b1a1-3353f02d1473';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thuận tiện, tin tức, chuyến (xe/bay)"?', '同', '静', '有', '便', '便', 'generated' from jp_kanji where id = '44cb59d8-23b5-4132-b1a1-3353f02d1473';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"郵便局" có nghĩa là gì?', 'bói sao, bói tử vi', 'cha mẹ', 'tìm ra, phát hiện', 'bưu điện', 'bưu điện', 'generated' from jp_kanji where id = '44cb59d8-23b5-4132-b1a1-3353f02d1473';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 便利', 'べんり', 'generated' from jp_kanji where id = '44cb59d8-23b5-4132-b1a1-3353f02d1473';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 利 (LỢI) có âm chính là gì?', 'かぜ', 'おや', 'ユウ', 'リ', 'リ', 'generated' from jp_kanji where id = '104a7e89-c66f-4b4f-88a9-a773834fe1e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lợi ích, có lợi"?', '細', '同', '利', '親', '利', 'generated' from jp_kanji where id = '104a7e89-c66f-4b4f-88a9-a773834fe1e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"利用する" có nghĩa là gì?', 'cha mẹ', 'yên tĩnh, im lặng', 'bất tiện', 'sử dụng, lợi dụng', 'sử dụng, lợi dụng', 'generated' from jp_kanji where id = '104a7e89-c66f-4b4f-88a9-a773834fe1e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 利用する', 'りようする', 'generated' from jp_kanji where id = '104a7e89-c66f-4b4f-88a9-a773834fe1e1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 不 (BẤT) có âm chính là gì?', 'シ', 'フ', 'したしむ', 'ユウ', 'フ', 'generated' from jp_kanji where id = '46d5b307-5c67-4534-91fb-6d7002e0cabc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "không, phủ định"?', '店', '不', '有', '便', '不', 'generated' from jp_kanji where id = '46d5b307-5c67-4534-91fb-6d7002e0cabc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"不思議な" có nghĩa là gì?', 'xuất phát, bắt đầu', 'phát minh', 'kỳ lạ, ảo', 'nguyên nhân', 'kỳ lạ, ảo', 'generated' from jp_kanji where id = '46d5b307-5c67-4534-91fb-6d7002e0cabc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 不思議な', 'ふしぎな', 'generated' from jp_kanji where id = '46d5b307-5c67-4534-91fb-6d7002e0cabc';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 静 (TĨNH) có âm chính là gì?', 'エキ', 'ユウ', 'サイ', 'しずか', 'しずか', 'generated' from jp_kanji where id = 'ec495e6b-fe79-4bdc-87bd-35c2ca2eb223';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "yên tĩnh, im lặng"?', '静', '星', '駅', '風', '静', 'generated' from jp_kanji where id = 'ec495e6b-fe79-4bdc-87bd-35c2ca2eb223';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"静かな" có nghĩa là gì?', 'nổi tiếng', 'yên tĩnh, im lặng', 'phát âm', 'bất tiện', 'yên tĩnh, im lặng', 'generated' from jp_kanji where id = 'ec495e6b-fe79-4bdc-87bd-35c2ca2eb223';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 静かな', 'しずかな', 'generated' from jp_kanji where id = 'ec495e6b-fe79-4bdc-87bd-35c2ca2eb223';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 同 (ĐỒNG) có âm chính là gì?', 'ユウ', 'ブ', 'ユウ', 'おなじ', 'おなじ', 'generated' from jp_kanji where id = 'eaf8cc3c-95e8-47b8-9d39-feeaf62be874';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giống nhau, cùng"?', '店', '便', '同', '皿', '同', 'generated' from jp_kanji where id = 'eaf8cc3c-95e8-47b8-9d39-feeaf62be874';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"同じ" có nghĩa là gì?', 'cái đĩa', 'cơn bão', 'giống', 'bưu điện', 'giống', 'generated' from jp_kanji where id = 'eaf8cc3c-95e8-47b8-9d39-feeaf62be874';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 同じ', 'おなじ', 'generated' from jp_kanji where id = 'eaf8cc3c-95e8-47b8-9d39-feeaf62be874';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 有 (HỮU) có âm chính là gì?', 'ブ', 'ある', 'リ', 'あぶら', 'ある', 'generated' from jp_kanji where id = 'ea318de3-54c4-419e-b4dd-35c5865ec7bf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "có, sở hữu"?', '有', '細', '店', '原', '有', 'generated' from jp_kanji where id = 'ea318de3-54c4-419e-b4dd-35c5865ec7bf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"有名な" có nghĩa là gì?', 'nổi tiếng', 'tế bào IPS', 'cha mẹ', 'tự nhiên', 'nổi tiếng', 'generated' from jp_kanji where id = 'ea318de3-54c4-419e-b4dd-35c5865ec7bf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 有名な', 'ゆうめいな', 'generated' from jp_kanji where id = 'ea318de3-54c4-419e-b4dd-35c5865ec7bf';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 親 (THÂN) có âm chính là gì?', 'ユウ', 'たより', 'おや', 'テン', 'おや', 'generated' from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cha mẹ, thân thiết"?', '風', '便', '店', '親', '親', 'generated' from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"親" có nghĩa là gì?', 'nguyên nhân', 'hoàn toàn', 'cha mẹ', 'sử dụng, lợi dụng', 'cha mẹ', 'generated' from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 親切な', 'しんせつな', 'generated' from jp_kanji where id = '57ddef81-eccd-408d-943f-3ca4a70497c0';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 細 (TẾ) có âm chính là gì?', 'サイ', 'ドウ', 'こまかい', 'ほそい', 'こまかい', 'generated' from jp_kanji where id = 'f0e5cb98-e8cb-4373-8935-3a4f0077120c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhỏ, chi tiết, mỏng mảnh"?', '不', '駅', '静', '細', '細', 'generated' from jp_kanji where id = 'f0e5cb98-e8cb-4373-8935-3a4f0077120c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"細かい" có nghĩa là gì?', 'kỳ lạ, ảo', 'cha mẹ', 'quán cà phê', 'chi tiết, (tiền) lẻ', 'chi tiết, (tiền) lẻ', 'generated' from jp_kanji where id = 'f0e5cb98-e8cb-4373-8935-3a4f0077120c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 細い', 'ほそい', 'generated' from jp_kanji where id = 'f0e5cb98-e8cb-4373-8935-3a4f0077120c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 駅 (DỊCH) có âm chính là gì?', 'フウ', 'ほし', 'ビン', 'エキ', 'エキ', 'generated' from jp_kanji where id = 'ce9cc566-adfa-4f8e-a862-8b1e616ec728';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhà ga"?', '星', '風', '油', '駅', '駅', 'generated' from jp_kanji where id = 'ce9cc566-adfa-4f8e-a862-8b1e616ec728';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"駅" có nghĩa là gì?', 'yên tĩnh, im lặng', 'nhà ga', 'dầu thô, dầu mỏ', 'cha mẹ', 'nhà ga', 'generated' from jp_kanji where id = 'ce9cc566-adfa-4f8e-a862-8b1e616ec728';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 駅員', 'えきいん', 'generated' from jp_kanji where id = 'ce9cc566-adfa-4f8e-a862-8b1e616ec728';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 店 (ĐIẾM) có âm chính là gì?', 'フウ', 'ゼン', 'テン', 'みせ', 'みせ', 'generated' from jp_kanji where id = '9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cửa hàng"?', '店', '皿', '不', '然', '店', 'generated' from jp_kanji where id = '9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"店" có nghĩa là gì?', 'thân thiện', 'gió', 'cửa hàng', 'dầu thô, dầu mỏ', 'cửa hàng', 'generated' from jp_kanji where id = '9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 喫茶店', 'きっさてん', 'generated' from jp_kanji where id = '9bb3884e-c6d7-4c9e-9c69-6d1ac8d2d2d1';


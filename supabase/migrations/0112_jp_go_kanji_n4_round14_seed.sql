-- ============================================================
-- jp-go — Kanji N4, round 14 (17 kanji, trang in 15).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- TRANG CUỐI phần Kanji (漢字 spans trang in 1-15 theo spec).
-- ============================================================

-- ---------- 道 (ĐẠO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('b33ed8cd-c169-4ad7-b1d3-2a4389509520', 'N4', '道', 'ĐẠO', 'đường, con đường, đạo lý', 12, '辶', '道 có bộ 辶(chuyển động) bên ngoài — đi trên con đường (首, đầu) để tới đích.', NULL, '{"導","通"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fd29a5b2-3587-45e7-99c2-498da3885de9', id, 'kun', 'みち', true, 15, 'ok', NULL from jp_kanji where id = 'b33ed8cd-c169-4ad7-b1d3-2a4389509520'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b33ed8cd-c169-4ad7-b1d3-2a4389509520', 'fd29a5b2-3587-45e7-99c2-498da3885de9', '道', 'みち', 'đường, con đường', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f7b28424-23e1-4d32-8083-a2d884fcb9d8', id, 'on', 'ドウ', false, 15, 'ok', NULL from jp_kanji where id = 'b33ed8cd-c169-4ad7-b1d3-2a4389509520'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b33ed8cd-c169-4ad7-b1d3-2a4389509520', 'f7b28424-23e1-4d32-8083-a2d884fcb9d8', '道具', 'どうぐ', 'dụng cụ', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b33ed8cd-c169-4ad7-b1d3-2a4389509520', 'f7b28424-23e1-4d32-8083-a2d884fcb9d8', '水道', 'すいどう', 'nước máy', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b33ed8cd-c169-4ad7-b1d3-2a4389509520', 'f7b28424-23e1-4d32-8083-a2d884fcb9d8', '剣道', 'けんどう', 'kiếm đạo', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b33ed8cd-c169-4ad7-b1d3-2a4389509520', 'f7b28424-23e1-4d32-8083-a2d884fcb9d8', '柔道', 'じゅうどう', 'võ Judo', false, 15, 'pdf', 'ok', NULL);

-- ---------- 村 (THÔN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c79b4d3c-5e35-427c-b6da-7361f55f926e', 'N4', '村', 'THÔN', 'làng, thôn', 7, '木', '村 có bộ 木(cây) bên trái — làng quê nhiều cây cối.', NULL, '{"材","林"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0c510c36-57cd-4531-8892-5c01520965a6', id, 'kun', 'むら', true, 15, 'ok', NULL from jp_kanji where id = 'c79b4d3c-5e35-427c-b6da-7361f55f926e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c79b4d3c-5e35-427c-b6da-7361f55f926e', '0c510c36-57cd-4531-8892-5c01520965a6', '村', 'むら', 'làng', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '991de0d6-8ed3-45e2-b945-f18968d42060', id, 'on', 'ソン', false, 15, 'ok', NULL from jp_kanji where id = 'c79b4d3c-5e35-427c-b6da-7361f55f926e'
on conflict (id) do nothing;

-- ---------- 区 (KHU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('00a5047a-842b-43e0-94f2-6ade0c806dbe', 'N4', '区', 'KHU', 'khu vực, quận, huyện', 4, '匸', '区 có bộ 匸(ranh giới) bao quanh — khu vực được phân chia ranh giới.', NULL, '{"匹","巨"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1a8075fa-a139-48da-aee4-ab60341a63f2', id, 'kun', NULL, false, 15, 'ok', NULL from jp_kanji where id = '00a5047a-842b-43e0-94f2-6ade0c806dbe'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'bb643156-80bf-4f51-92d7-1a6e9da481c9', id, 'on', 'ク', true, 15, 'ok', NULL from jp_kanji where id = '00a5047a-842b-43e0-94f2-6ade0c806dbe'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('00a5047a-842b-43e0-94f2-6ade0c806dbe', 'bb643156-80bf-4f51-92d7-1a6e9da481c9', '区', 'く', 'khu, quận, huyện', false, 15, 'pdf', 'ok', NULL);

-- ---------- 市 (THỊ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('f829bd26-5eeb-4fbc-8026-ed4184416fe8', 'N4', '市', 'THỊ', 'thành phố, chợ', 5, '巾', '市 có bộ 巾(vải, khăn) ở dưới — nơi buôn bán vải vóc, thành phố, chợ.', NULL, '{"布","姉"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1b3a368b-4da4-4457-8a3e-1a9e685a3b0e', id, 'kun', 'いち', false, 15, 'ok', NULL from jp_kanji where id = 'f829bd26-5eeb-4fbc-8026-ed4184416fe8'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '80959340-7ce4-43d0-a918-5ce5edc3ab2b', id, 'on', 'シ', true, 15, 'ok', NULL from jp_kanji where id = 'f829bd26-5eeb-4fbc-8026-ed4184416fe8'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f829bd26-5eeb-4fbc-8026-ed4184416fe8', '80959340-7ce4-43d0-a918-5ce5edc3ab2b', '市役所', 'しやくしょ', 'toà thị chính', false, 15, 'pdf', 'ok', NULL);

-- ---------- 都 (ĐÔ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('8b29f310-274b-40a3-af1f-cb8b18273e3c', 'N4', '都', 'ĐÔ', 'đô thị, thủ đô', 11, '阝', '都 có bộ 阝(khu vực, thành ấp) bên phải — đô thị, thủ đô.', NULL, '{"者","部"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3de35c16-d8a8-4fef-bae3-a0c3ddcb0af6', id, 'kun', 'みやこ', false, 15, 'ok', NULL from jp_kanji where id = '8b29f310-274b-40a3-af1f-cb8b18273e3c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '10960bdb-2f25-4635-9517-3ab4688455d4', id, 'on', 'ツ', false, 15, 'ok', NULL from jp_kanji where id = '8b29f310-274b-40a3-af1f-cb8b18273e3c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8b29f310-274b-40a3-af1f-cb8b18273e3c', '10960bdb-2f25-4635-9517-3ab4688455d4', '都合', 'つごう', 'thuận tiện', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '56b6192d-f780-4c1c-afdd-26732b3e0000', id, 'on', 'ト', true, 15, 'ok', NULL from jp_kanji where id = '8b29f310-274b-40a3-af1f-cb8b18273e3c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8b29f310-274b-40a3-af1f-cb8b18273e3c', '56b6192d-f780-4c1c-afdd-26732b3e0000', '都会', 'とかい', 'thành phố', false, 15, 'pdf', 'ok', NULL);

-- ---------- 県 (HUYỆN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('86f8ebea-ede0-4262-8fa7-ce8364848364', 'N4', '県', 'HUYỆN', 'tỉnh (đơn vị hành chính)', 9, '目', '県 có bộ 目(mắt) ở trên — đơn vị hành chính tỉnh, huyện được giám sát.', NULL, '{"具","懸"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a2c50f5a-6a3b-45d0-b92d-22deea47c301', id, 'kun', NULL, false, 15, 'ok', NULL from jp_kanji where id = '86f8ebea-ede0-4262-8fa7-ce8364848364'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '56940c63-4be2-45d2-85b8-f76996fb5d19', id, 'on', 'ケン', true, 15, 'ok', NULL from jp_kanji where id = '86f8ebea-ede0-4262-8fa7-ce8364848364'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('86f8ebea-ede0-4262-8fa7-ce8364848364', '56940c63-4be2-45d2-85b8-f76996fb5d19', '県', 'けん', 'tỉnh', false, 15, 'pdf', 'ok', NULL);

-- ---------- 府 (PHỦ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('bc5372b1-79c1-4902-96f3-0ba20cfa853a', 'N4', '府', 'PHỦ', 'phủ (đơn vị hành chính)', 8, '广', '府 có bộ 广(mái nhà, nhà lớn) — cơ quan chính phủ, phủ.', NULL, '{"符","腐"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1d7ccbd4-fc51-4b86-a4a6-ffd83249da99', id, 'kun', NULL, false, 15, 'ok', NULL from jp_kanji where id = 'bc5372b1-79c1-4902-96f3-0ba20cfa853a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '32ba38bb-bb99-49cd-8fb3-abde094c07d6', id, 'on', 'フ', true, 15, 'ok', NULL from jp_kanji where id = 'bc5372b1-79c1-4902-96f3-0ba20cfa853a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bc5372b1-79c1-4902-96f3-0ba20cfa853a', '32ba38bb-bb99-49cd-8fb3-abde094c07d6', '府', 'ふ', 'phủ', false, 15, 'pdf', 'ok', NULL);

-- ---------- 京 (KINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('fec4d5c0-99e0-4e93-817d-4777a4016bc8', 'N4', '京', 'KINH', 'kinh đô, thủ đô', 8, '亠', '京 là hình vẽ tòa lâu đài cao — chỉ kinh đô, thủ đô.', NULL, '{"景","涼"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2f3a1da8-1ce2-408a-af36-076d64abd2e1', id, 'kun', NULL, false, 15, 'ok', NULL from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '959b2725-b00b-4bc3-9b30-a197ae67cfac', id, 'on', 'キョウ', true, 15, 'ok', NULL from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('fec4d5c0-99e0-4e93-817d-4777a4016bc8', '959b2725-b00b-4bc3-9b30-a197ae67cfac', '東京', 'とうきょう', 'Tokyo', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f6ac168e-9b72-4c30-a069-b7809d3ec29b', id, 'on', 'ケイ', false, 15, 'ok', NULL from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fcac6d56-9706-45e6-b8b2-8a1c7d362741', id, 'on', 'キン', false, 15, 'ok', NULL from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8'
on conflict (id) do nothing;

-- ---------- 衣 (Y) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9d6ca376-c63f-479c-97bf-fd017a12e6ef', 'N4', '衣', 'Y', 'quần áo, y phục', 6, '衣', '衣 là hình vẽ cổ áo — chỉ quần áo, y phục.', NULL, '{"依","哀"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a1d93f0e-a230-4c79-ad58-a3203f81e75b', id, 'kun', NULL, false, 15, 'ok', NULL from jp_kanji where id = '9d6ca376-c63f-479c-97bf-fd017a12e6ef'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a096b598-1ec4-459e-8c0c-3ab1999b36af', id, 'on', 'イ', true, 15, 'ok', NULL from jp_kanji where id = '9d6ca376-c63f-479c-97bf-fd017a12e6ef'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9d6ca376-c63f-479c-97bf-fd017a12e6ef', 'a096b598-1ec4-459e-8c0c-3ab1999b36af', '衣服', 'いふく', 'y phục, quần áo', false, 15, 'pdf', 'ok', NULL);

-- ---------- 光 (QUANG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9329ebc5-72ac-4720-a4e6-b58c94283bbd', 'N4', '光', 'QUANG', 'ánh sáng', 6, '儿', '光 có bộ 儿(chân người) ở dưới — người cầm ngọn lửa phát ra ánh sáng.', NULL, '{"先","兆"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c3d460e5-a699-4eb1-b6fb-5ba6845c79c8', id, 'kun', 'ひかり', true, 15, 'ok', NULL from jp_kanji where id = '9329ebc5-72ac-4720-a4e6-b58c94283bbd'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9329ebc5-72ac-4720-a4e6-b58c94283bbd', 'c3d460e5-a699-4eb1-b6fb-5ba6845c79c8', '光', 'ひかり', 'ánh sáng', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5b9205ef-275d-44f1-9e8d-37febb49d069', id, 'on', 'コウ', false, 15, 'ok', NULL from jp_kanji where id = '9329ebc5-72ac-4720-a4e6-b58c94283bbd'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9329ebc5-72ac-4720-a4e6-b58c94283bbd', '5b9205ef-275d-44f1-9e8d-37febb49d069', '日光', 'にっこう', 'ánh mặt trời', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9329ebc5-72ac-4720-a4e6-b58c94283bbd', '5b9205ef-275d-44f1-9e8d-37febb49d069', '観光地', 'かんこうち', 'địa điểm tham quan', false, 15, 'pdf', 'ok', NULL);

-- ---------- 雲 (VÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('48dda687-0db3-4021-9a95-b9e21f28bdd4', 'N4', '雲', 'VÂN', 'mây', 12, '雨', '雲 có bộ 雨(mưa) ở trên — mây kéo đến báo hiệu mưa.', NULL, '{"電","雪"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd3b8f291-4a9c-4bf1-8b65-7cefd32c1987', id, 'kun', 'くも', true, 15, 'ok', NULL from jp_kanji where id = '48dda687-0db3-4021-9a95-b9e21f28bdd4'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('48dda687-0db3-4021-9a95-b9e21f28bdd4', 'd3b8f291-4a9c-4bf1-8b65-7cefd32c1987', '雲', 'くも', 'mây', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '17d95a6a-07a8-4a10-a315-00523eeea747', id, 'on', 'ウン', false, 15, 'ok', NULL from jp_kanji where id = '48dda687-0db3-4021-9a95-b9e21f28bdd4'
on conflict (id) do nothing;

-- ---------- 王 (VƯƠNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('18701f71-5d62-49ae-adf0-f70d2fef3afe', 'N4', '王', 'VƯƠNG', 'vua, vương', 4, '玉', '王 là hình vẽ cây rìu tượng trưng quyền lực — chỉ vua, vương.', NULL, '{"玉","主"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '20e7964c-aa7b-41da-aa43-961e1fbd8c6a', id, 'kun', NULL, false, 15, 'ok', NULL from jp_kanji where id = '18701f71-5d62-49ae-adf0-f70d2fef3afe'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd037e374-904b-4958-8010-335e6c0eda55', id, 'on', 'オウ', true, 15, 'ok', NULL from jp_kanji where id = '18701f71-5d62-49ae-adf0-f70d2fef3afe'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('18701f71-5d62-49ae-adf0-f70d2fef3afe', 'd037e374-904b-4958-8010-335e6c0eda55', '国王', 'こくおう', 'vua', false, 15, 'pdf', 'ok', NULL);

-- ---------- 草 (THẢO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('91b3564c-f718-4cf8-adee-848781e549d0', 'N4', '草', 'THẢO', 'cỏ', 9, '艹', '草 có bộ 艹(cỏ) ở trên — chỉ cỏ, cây cỏ.', NULL, '{"早","苦"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7c5c1131-070e-4371-b05b-fb687f9fe5c2', id, 'kun', 'くさ', true, 15, 'ok', NULL from jp_kanji where id = '91b3564c-f718-4cf8-adee-848781e549d0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('91b3564c-f718-4cf8-adee-848781e549d0', '7c5c1131-070e-4371-b05b-fb687f9fe5c2', '草', 'くさ', 'cỏ', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '13004923-c8ad-4be4-9e42-43ccf93573d8', id, 'on', 'ソウ', false, 15, 'ok', NULL from jp_kanji where id = '91b3564c-f718-4cf8-adee-848781e549d0'
on conflict (id) do nothing;

-- ---------- 湖 (HỒ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('47bff031-2747-40ff-b0a0-adf3da2635d8', 'N4', '湖', 'HỒ', 'hồ', 12, '氵', '湖 có bộ 氵(nước) bên trái — vùng nước lớn (古, xưa) tạo thành hồ.', NULL, '{"胡","古"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1e602fb3-9654-45a7-bdef-e47b771e2a91', id, 'kun', 'みずうみ', true, 15, 'ok', NULL from jp_kanji where id = '47bff031-2747-40ff-b0a0-adf3da2635d8'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('47bff031-2747-40ff-b0a0-adf3da2635d8', '1e602fb3-9654-45a7-bdef-e47b771e2a91', '湖', 'みずうみ', 'hồ', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '80a6d94f-d4b8-4680-b4c3-2e4ca7a810fe', id, 'on', 'コ', false, 15, 'ok', NULL from jp_kanji where id = '47bff031-2747-40ff-b0a0-adf3da2635d8'
on conflict (id) do nothing;

-- ---------- 谷 (CỐC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('f1c500d2-6f32-4694-a1ee-4eb98765a3f1', 'N4', '谷', 'CỐC', 'thung lũng', 7, '谷', '谷 là hình vẽ khe núi giữa hai vách đá — chỉ thung lũng.', NULL, '{"浴","俗"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '234a8024-837d-4086-ab62-e2df8b4084e7', id, 'kun', 'たに', true, 15, 'ok', NULL from jp_kanji where id = 'f1c500d2-6f32-4694-a1ee-4eb98765a3f1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f1c500d2-6f32-4694-a1ee-4eb98765a3f1', '234a8024-837d-4086-ab62-e2df8b4084e7', '谷', 'たに', 'thung lũng', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b7120b42-680b-4775-bcdb-2f987c2993c2', id, 'on', 'コク', false, 15, 'ok', NULL from jp_kanji where id = 'f1c500d2-6f32-4694-a1ee-4eb98765a3f1'
on conflict (id) do nothing;

-- ---------- 虫 (TRÙNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58', 'N4', '虫', 'TRÙNG', 'côn trùng', 6, '虫', '虫 là hình vẽ con sâu/côn trùng — chỉ côn trùng.', NULL, '{"虹","蛍"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e5750308-e8b8-4857-a221-a9b1b38178df', id, 'kun', 'むし', true, 15, 'ok', NULL from jp_kanji where id = '7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58', 'e5750308-e8b8-4857-a221-a9b1b38178df', '虫', 'むし', 'côn trùng', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '66b27075-c20d-408b-8645-57bba7200de2', id, 'on', 'チュウ', false, 15, 'ok', NULL from jp_kanji where id = '7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58'
on conflict (id) do nothing;

-- ---------- 羽 (VŨ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('cc993a50-211f-4fed-8326-b1506828940b', 'N4', '羽', 'VŨ', 'lông vũ, cánh', 6, '羽', '羽 là hình vẽ đôi cánh chim — chỉ lông vũ, cánh.', NULL, '{"羊","習"}', 15, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a6f4ad63-5e73-494b-9b2a-71d8a6d76988', id, 'kun', 'は', false, 15, 'ok', NULL from jp_kanji where id = 'cc993a50-211f-4fed-8326-b1506828940b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9518906b-4695-4dc7-9b17-9cd9a069294c', id, 'kun', 'はね', true, 15, 'ok', NULL from jp_kanji where id = 'cc993a50-211f-4fed-8326-b1506828940b'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cc993a50-211f-4fed-8326-b1506828940b', '9518906b-4695-4dc7-9b17-9cd9a069294c', '羽', 'はね', 'cánh', false, 15, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b7a37119-1201-4dca-bc81-502cc7c0e2f7', id, 'on', 'ウ', false, 15, 'ok', NULL from jp_kanji where id = 'cc993a50-211f-4fed-8326-b1506828940b'
on conflict (id) do nothing;

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 道 (ĐẠO) có âm chính là gì?', 'ウ', 'みち', 'イ', 'むし', 'みち', 'generated' from jp_kanji where id = 'b33ed8cd-c169-4ad7-b1d3-2a4389509520';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đường, con đường, đạo lý"?', '県', '雲', '道', '京', '道', 'generated' from jp_kanji where id = 'b33ed8cd-c169-4ad7-b1d3-2a4389509520';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"道" có nghĩa là gì?', 'địa điểm tham quan', 'mây', 'tỉnh', 'đường, con đường', 'đường, con đường', 'generated' from jp_kanji where id = 'b33ed8cd-c169-4ad7-b1d3-2a4389509520';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 道具', 'どうぐ', 'generated' from jp_kanji where id = 'b33ed8cd-c169-4ad7-b1d3-2a4389509520';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 村 (THÔN) có âm chính là gì?', 'イ', 'みずうみ', 'コク', 'むら', 'むら', 'generated' from jp_kanji where id = 'c79b4d3c-5e35-427c-b6da-7361f55f926e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "làng, thôn"?', '県', '村', '王', '光', '村', 'generated' from jp_kanji where id = 'c79b4d3c-5e35-427c-b6da-7361f55f926e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"村" có nghĩa là gì?', 'địa điểm tham quan', 'làng', 'khu, quận, huyện', 'thung lũng', 'làng', 'generated' from jp_kanji where id = 'c79b4d3c-5e35-427c-b6da-7361f55f926e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 村', 'むら', 'generated' from jp_kanji where id = 'c79b4d3c-5e35-427c-b6da-7361f55f926e';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 区 (KHU) có âm chính là gì?', 'キン', 'ク', 'コウ', 'チュウ', 'ク', 'generated' from jp_kanji where id = '00a5047a-842b-43e0-94f2-6ade0c806dbe';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "khu vực, quận, huyện"?', '京', '虫', '谷', '区', '区', 'generated' from jp_kanji where id = '00a5047a-842b-43e0-94f2-6ade0c806dbe';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"区" có nghĩa là gì?', 'kiếm đạo', 'khu, quận, huyện', 'đường, con đường', 'cánh', 'khu, quận, huyện', 'generated' from jp_kanji where id = '00a5047a-842b-43e0-94f2-6ade0c806dbe';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 区', 'く', 'generated' from jp_kanji where id = '00a5047a-842b-43e0-94f2-6ade0c806dbe';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 市 (THỊ) có âm chính là gì?', 'みずうみ', 'は', 'シ', 'キョウ', 'シ', 'generated' from jp_kanji where id = 'f829bd26-5eeb-4fbc-8026-ed4184416fe8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thành phố, chợ"?', '市', '村', '都', '道', '市', 'generated' from jp_kanji where id = 'f829bd26-5eeb-4fbc-8026-ed4184416fe8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"市役所" có nghĩa là gì?', 'ánh mặt trời', 'kiếm đạo', 'đường, con đường', 'toà thị chính', 'toà thị chính', 'generated' from jp_kanji where id = 'f829bd26-5eeb-4fbc-8026-ed4184416fe8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 市役所', 'しやくしょ', 'generated' from jp_kanji where id = 'f829bd26-5eeb-4fbc-8026-ed4184416fe8';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 都 (ĐÔ) có âm chính là gì?', 'ト', 'ケン', 'オウ', 'ソウ', 'ト', 'generated' from jp_kanji where id = '8b29f310-274b-40a3-af1f-cb8b18273e3c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đô thị, thủ đô"?', '都', '羽', '京', '市', '都', 'generated' from jp_kanji where id = '8b29f310-274b-40a3-af1f-cb8b18273e3c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"都合" có nghĩa là gì?', 'côn trùng', 'thuận tiện', 'ánh mặt trời', 'y phục, quần áo', 'thuận tiện', 'generated' from jp_kanji where id = '8b29f310-274b-40a3-af1f-cb8b18273e3c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 都会', 'とかい', 'generated' from jp_kanji where id = '8b29f310-274b-40a3-af1f-cb8b18273e3c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 県 (HUYỆN) có âm chính là gì?', 'フ', 'ウン', 'ツ', 'ケン', 'ケン', 'generated' from jp_kanji where id = '86f8ebea-ede0-4262-8fa7-ce8364848364';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tỉnh (đơn vị hành chính)"?', '村', '道', '京', '県', '県', 'generated' from jp_kanji where id = '86f8ebea-ede0-4262-8fa7-ce8364848364';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"県" có nghĩa là gì?', 'Tokyo', 'thung lũng', 'cỏ', 'tỉnh', 'tỉnh', 'generated' from jp_kanji where id = '86f8ebea-ede0-4262-8fa7-ce8364848364';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 県', 'けん', 'generated' from jp_kanji where id = '86f8ebea-ede0-4262-8fa7-ce8364848364';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 府 (PHỦ) có âm chính là gì?', 'シ', 'ドウ', 'みずうみ', 'フ', 'フ', 'generated' from jp_kanji where id = 'bc5372b1-79c1-4902-96f3-0ba20cfa853a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "phủ (đơn vị hành chính)"?', '羽', '王', '府', '雲', '府', 'generated' from jp_kanji where id = 'bc5372b1-79c1-4902-96f3-0ba20cfa853a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"府" có nghĩa là gì?', 'thung lũng', 'địa điểm tham quan', 'phủ', 'cỏ', 'phủ', 'generated' from jp_kanji where id = 'bc5372b1-79c1-4902-96f3-0ba20cfa853a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 府', 'ふ', 'generated' from jp_kanji where id = 'bc5372b1-79c1-4902-96f3-0ba20cfa853a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 京 (KINH) có âm chính là gì?', 'キョウ', 'いち', 'ウン', 'チュウ', 'キョウ', 'generated' from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "kinh đô, thủ đô"?', '京', '県', '羽', '虫', '京', 'generated' from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"東京" có nghĩa là gì?', 'đường, con đường', 'ánh sáng', 'Tokyo', 'y phục, quần áo', 'Tokyo', 'generated' from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 東京', 'とうきょう', 'generated' from jp_kanji where id = 'fec4d5c0-99e0-4e93-817d-4777a4016bc8';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 衣 (Y) có âm chính là gì?', 'みやこ', 'イ', 'は', 'ウ', 'イ', 'generated' from jp_kanji where id = '9d6ca376-c63f-479c-97bf-fd017a12e6ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "quần áo, y phục"?', '衣', '村', '草', '都', '衣', 'generated' from jp_kanji where id = '9d6ca376-c63f-479c-97bf-fd017a12e6ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"衣服" có nghĩa là gì?', 'địa điểm tham quan', 'y phục, quần áo', 'Tokyo', 'ánh sáng', 'y phục, quần áo', 'generated' from jp_kanji where id = '9d6ca376-c63f-479c-97bf-fd017a12e6ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 衣服', 'いふく', 'generated' from jp_kanji where id = '9d6ca376-c63f-479c-97bf-fd017a12e6ef';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 光 (QUANG) có âm chính là gì?', 'ソウ', 'ひかり', 'シ', 'ケイ', 'ひかり', 'generated' from jp_kanji where id = '9329ebc5-72ac-4720-a4e6-b58c94283bbd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ánh sáng"?', '光', '王', '衣', '谷', '光', 'generated' from jp_kanji where id = '9329ebc5-72ac-4720-a4e6-b58c94283bbd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"光" có nghĩa là gì?', 'cỏ', 'khu, quận, huyện', 'phủ', 'ánh sáng', 'ánh sáng', 'generated' from jp_kanji where id = '9329ebc5-72ac-4720-a4e6-b58c94283bbd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 日光', 'にっこう', 'generated' from jp_kanji where id = '9329ebc5-72ac-4720-a4e6-b58c94283bbd';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 雲 (VÂN) có âm chính là gì?', 'ツ', 'むら', 'くも', 'コ', 'くも', 'generated' from jp_kanji where id = '48dda687-0db3-4021-9a95-b9e21f28bdd4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mây"?', '王', '雲', '衣', '羽', '雲', 'generated' from jp_kanji where id = '48dda687-0db3-4021-9a95-b9e21f28bdd4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"雲" có nghĩa là gì?', 'phủ', 'dụng cụ', 'Tokyo', 'mây', 'mây', 'generated' from jp_kanji where id = '48dda687-0db3-4021-9a95-b9e21f28bdd4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 雲', 'くも', 'generated' from jp_kanji where id = '48dda687-0db3-4021-9a95-b9e21f28bdd4';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 王 (VƯƠNG) có âm chính là gì?', 'ウン', 'オウ', 'くも', 'キョウ', 'オウ', 'generated' from jp_kanji where id = '18701f71-5d62-49ae-adf0-f70d2fef3afe';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vua, vương"?', '市', '京', '雲', '王', '王', 'generated' from jp_kanji where id = '18701f71-5d62-49ae-adf0-f70d2fef3afe';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"国王" có nghĩa là gì?', 'vua', 'tỉnh', 'thung lũng', 'cỏ', 'vua', 'generated' from jp_kanji where id = '18701f71-5d62-49ae-adf0-f70d2fef3afe';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 国王', 'こくおう', 'generated' from jp_kanji where id = '18701f71-5d62-49ae-adf0-f70d2fef3afe';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 草 (THẢO) có âm chính là gì?', 'くさ', 'ウン', 'くも', 'ソン', 'くさ', 'generated' from jp_kanji where id = '91b3564c-f718-4cf8-adee-848781e549d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cỏ"?', '県', '草', '衣', '区', '草', 'generated' from jp_kanji where id = '91b3564c-f718-4cf8-adee-848781e549d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"草" có nghĩa là gì?', 'cỏ', 'thuận tiện', 'đường, con đường', 'toà thị chính', 'cỏ', 'generated' from jp_kanji where id = '91b3564c-f718-4cf8-adee-848781e549d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 草', 'くさ', 'generated' from jp_kanji where id = '91b3564c-f718-4cf8-adee-848781e549d0';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 湖 (HỒ) có âm chính là gì?', 'チュウ', 'みち', 'ク', 'みずうみ', 'みずうみ', 'generated' from jp_kanji where id = '47bff031-2747-40ff-b0a0-adf3da2635d8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hồ"?', '羽', '湖', '虫', '村', '湖', 'generated' from jp_kanji where id = '47bff031-2747-40ff-b0a0-adf3da2635d8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"湖" có nghĩa là gì?', 'hồ', 'vua', 'phủ', 'làng', 'hồ', 'generated' from jp_kanji where id = '47bff031-2747-40ff-b0a0-adf3da2635d8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 湖', 'みずうみ', 'generated' from jp_kanji where id = '47bff031-2747-40ff-b0a0-adf3da2635d8';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 谷 (CỐC) có âm chính là gì?', 'ウン', 'いち', 'たに', 'むし', 'たに', 'generated' from jp_kanji where id = 'f1c500d2-6f32-4694-a1ee-4eb98765a3f1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thung lũng"?', '市', '谷', '道', '京', '谷', 'generated' from jp_kanji where id = 'f1c500d2-6f32-4694-a1ee-4eb98765a3f1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"谷" có nghĩa là gì?', 'phủ', 'kiếm đạo', 'mây', 'thung lũng', 'thung lũng', 'generated' from jp_kanji where id = 'f1c500d2-6f32-4694-a1ee-4eb98765a3f1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 谷', 'たに', 'generated' from jp_kanji where id = 'f1c500d2-6f32-4694-a1ee-4eb98765a3f1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 虫 (TRÙNG) có âm chính là gì?', 'キョウ', 'みずうみ', 'むし', 'ケン', 'むし', 'generated' from jp_kanji where id = '7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "côn trùng"?', '京', '光', '衣', '虫', '虫', 'generated' from jp_kanji where id = '7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"虫" có nghĩa là gì?', 'nước máy', 'hồ', 'dụng cụ', 'côn trùng', 'côn trùng', 'generated' from jp_kanji where id = '7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 虫', 'むし', 'generated' from jp_kanji where id = '7a4ab2d3-3928-4fbb-9cd1-443c02f8ce58';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 羽 (VŨ) có âm chính là gì?', 'フ', 'はね', 'みずうみ', 'キン', 'はね', 'generated' from jp_kanji where id = 'cc993a50-211f-4fed-8326-b1506828940b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lông vũ, cánh"?', '市', '雲', '羽', '都', '羽', 'generated' from jp_kanji where id = 'cc993a50-211f-4fed-8326-b1506828940b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"羽" có nghĩa là gì?', 'ánh sáng', 'nước máy', 'đường, con đường', 'cánh', 'cánh', 'generated' from jp_kanji where id = 'cc993a50-211f-4fed-8326-b1506828940b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 羽', 'はね', 'generated' from jp_kanji where id = 'cc993a50-211f-4fed-8326-b1506828940b';


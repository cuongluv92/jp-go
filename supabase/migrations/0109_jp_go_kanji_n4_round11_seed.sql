-- ============================================================
-- jp-go — Kanji N4, round 11 (15 kanji, trang in 12).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- 地 (ĐỊA) xuất hiện cuối trang nhưng chưa có readings (trải sang
-- trang 13) — CHƯA seed ở round này, hoàn thiện ở round sau.
-- ============================================================

-- ---------- 経 (KINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('cd8067ae-494b-4077-9dee-a30a5484d292', 'N4', '経', 'KINH', 'trải qua, kinh doanh', 11, '糸', '経 có bộ 糸(sợi tơ) bên trái — sợi chỉ xuyên suốt qua thời gian, trải qua.', NULL, '{"径","軽"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'daec03a2-5ce5-49df-b8b1-241975b05550', id, 'kun', 'へる', false, 12, 'ok', NULL from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c9bb92ed-58d9-4296-92c3-6d84060834f0', id, 'kun', 'たつ', false, 12, 'ok', NULL from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3c04c065-dde9-4696-a36c-0132d0fcdfeb', id, 'on', 'ケイ', true, 12, 'ok', NULL from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cd8067ae-494b-4077-9dee-a30a5484d292', '3c04c065-dde9-4696-a36c-0132d0fcdfeb', '経歴', 'けいれき', 'lý lịch, quá trình làm việc', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a12b8481-5a7a-4e37-9154-ad95c3a4cfd4', id, 'on', 'キョウ', false, 12, 'ok', NULL from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cd8067ae-494b-4077-9dee-a30a5484d292', 'a12b8481-5a7a-4e37-9154-ad95c3a4cfd4', '経験', 'けいけん', 'kinh nghiệm', false, 12, 'pdf', 'ok', NULL);

-- ---------- 済 (TẾ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1ca7958a-db3e-41f4-b4b3-f1d09ea92e67', 'N4', '済', 'TẾ', 'hoàn tất, cứu tế, kinh tế', 11, '氵', '済 có bộ 氵(nước) bên trái — vượt qua dòng nước là hoàn tất, xong xuôi.', NULL, '{"斉","剤"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6f0d174d-0c54-47cc-bffa-ef8e65e68265', id, 'kun', 'すむ', false, 12, 'ok', NULL from jp_kanji where id = '1ca7958a-db3e-41f4-b4b3-f1d09ea92e67'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '273a27b1-0115-4e7d-a5bc-a2a3b1115b0b', id, 'kun', 'すまない', false, 12, 'ok', NULL from jp_kanji where id = '1ca7958a-db3e-41f4-b4b3-f1d09ea92e67'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9ed9d0a2-8cff-4bda-84bf-8cdc5c8df95b', id, 'on', 'サイ', true, 12, 'ok', NULL from jp_kanji where id = '1ca7958a-db3e-41f4-b4b3-f1d09ea92e67'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1ca7958a-db3e-41f4-b4b3-f1d09ea92e67', '9ed9d0a2-8cff-4bda-84bf-8cdc5c8df95b', '経済', 'けいざい', 'kinh tế', false, 12, 'pdf', 'ok', NULL);

-- ---------- 政 (CHÍNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d9994e41-92df-4f7f-b3f5-5944fedff33c', 'N4', '政', 'CHÍNH', 'chính trị, chính sự', 9, '攵', '政 có bộ 攵(hành động, cai quản) bên phải — dùng quyền lực để chỉnh đốn (正) việc nước.', NULL, '{"正","整"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e1dbeb34-19b2-43f3-9e5f-03d174ddfc06', id, 'kun', 'まつりごと', true, 12, 'ok', NULL from jp_kanji where id = 'd9994e41-92df-4f7f-b3f5-5944fedff33c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '02b30993-1995-4ced-95db-e367984b20cc', id, 'on', 'セイ', false, 12, 'ok', NULL from jp_kanji where id = 'd9994e41-92df-4f7f-b3f5-5944fedff33c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d9994e41-92df-4f7f-b3f5-5944fedff33c', '02b30993-1995-4ced-95db-e367984b20cc', '政治', 'せいじ', 'chính trị', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0427bd9c-55d5-4d9d-9e6b-a093b834acfc', id, 'on', 'ショウ', false, 12, 'ok', NULL from jp_kanji where id = 'd9994e41-92df-4f7f-b3f5-5944fedff33c'
on conflict (id) do nothing;

-- ---------- 歴 (LỊCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4c1dcb9b-6861-4a82-a233-e2481ae8df15', 'N4', '歴', 'LỊCH', 'lịch sử, trải qua', 14, '止', '歴 có bộ 止(dừng chân) ở dưới — dừng lại từng mốc thời gian đã qua, là lịch sử.', NULL, '{"暦","厳"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a549c684-9ac3-4dbc-bcc9-22722066986e', id, 'kun', NULL, false, 12, 'ok', NULL from jp_kanji where id = '4c1dcb9b-6861-4a82-a233-e2481ae8df15'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'da267230-d836-4ea1-9062-880d67e685ec', id, 'on', 'レキ', true, 12, 'ok', NULL from jp_kanji where id = '4c1dcb9b-6861-4a82-a233-e2481ae8df15'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4c1dcb9b-6861-4a82-a233-e2481ae8df15', 'da267230-d836-4ea1-9062-880d67e685ec', '歴史', 'れきし', 'lịch sử', false, 12, 'pdf', 'ok', NULL);

-- ---------- 史 (SỬ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('08de1857-eb0c-435d-82e6-2c8433afa35c', 'N4', '史', 'SỬ', 'lịch sử, sử sách', 5, '口', '史 có bộ 口(miệng, ghi chép) — người xưa dùng miệng kể/ghi lại sử sách.', NULL, '{"吏","使"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '284d4abc-6a63-4e1b-b42f-6afd71080466', id, 'kun', NULL, false, 12, 'ok', NULL from jp_kanji where id = '08de1857-eb0c-435d-82e6-2c8433afa35c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3f17fc12-48aa-4255-a5ff-1632fbbe533a', id, 'on', 'シ', true, 12, 'ok', NULL from jp_kanji where id = '08de1857-eb0c-435d-82e6-2c8433afa35c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('08de1857-eb0c-435d-82e6-2c8433afa35c', '3f17fc12-48aa-4255-a5ff-1632fbbe533a', '歴史', 'れきし', 'lịch sử', false, 12, 'pdf', 'ok', NULL);

-- ---------- 育 (DỤC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('cb53384d-9c9b-4e08-98cc-92075c4e9792', 'N4', '育', 'DỤC', 'nuôi dưỡng, giáo dục', 8, '月', '育 có bộ 月(肉, thịt) ở dưới — nuôi lớn thân thể (肉) của trẻ nhỏ.', NULL, '{"肉","充"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5fa846c7-9dc9-4479-8b7b-da3532dad0ff', id, 'kun', 'そだつ', false, 12, 'ok', NULL from jp_kanji where id = 'cb53384d-9c9b-4e08-98cc-92075c4e9792'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'dbfde2f2-911c-43f7-b60e-83a454c5371b', id, 'kun', 'そだてる', true, 12, 'ok', NULL from jp_kanji where id = 'cb53384d-9c9b-4e08-98cc-92075c4e9792'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cb53384d-9c9b-4e08-98cc-92075c4e9792', 'dbfde2f2-911c-43f7-b60e-83a454c5371b', '育てる', 'そだてる', 'nuôi nấng, dạy dỗ', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f07a973e-c4a5-49bf-a64f-52bc0087b4f7', id, 'on', 'イク', false, 12, 'ok', NULL from jp_kanji where id = 'cb53384d-9c9b-4e08-98cc-92075c4e9792'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cb53384d-9c9b-4e08-98cc-92075c4e9792', 'f07a973e-c4a5-49bf-a64f-52bc0087b4f7', '教育', 'きょういく', 'giáo dục', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cb53384d-9c9b-4e08-98cc-92075c4e9792', 'f07a973e-c4a5-49bf-a64f-52bc0087b4f7', '体育館', 'たいいくかん', 'nhà thi đấu, phòng thể chất', false, 12, 'pdf', 'ok', NULL);

-- ---------- 料 (LIỆU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('08727af0-36e3-4fec-a7a7-7f6299d1e1ef', 'N4', '料', 'LIỆU', 'nguyên liệu, phí, chi phí', 10, '斗', '料 có bộ 斗(cái đấu đong) bên phải — đong đo lúa gạo (米) để tính phí, nguyên liệu.', NULL, '{"科","斜"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b4d588c1-b2a5-4c08-a903-b9e88f06fa67', id, 'kun', NULL, false, 12, 'ok', NULL from jp_kanji where id = '08727af0-36e3-4fec-a7a7-7f6299d1e1ef'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '67e25db8-c22c-4fc9-84b5-2cad106bfe97', id, 'on', 'リョウ', true, 12, 'ok', NULL from jp_kanji where id = '08727af0-36e3-4fec-a7a7-7f6299d1e1ef'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('08727af0-36e3-4fec-a7a7-7f6299d1e1ef', '67e25db8-c22c-4fc9-84b5-2cad106bfe97', '料理', 'りょうり', 'món ăn, việc nấu ăn', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('08727af0-36e3-4fec-a7a7-7f6299d1e1ef', '67e25db8-c22c-4fc9-84b5-2cad106bfe97', '資料', 'しりょう', 'tài liệu', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('08727af0-36e3-4fec-a7a7-7f6299d1e1ef', '67e25db8-c22c-4fc9-84b5-2cad106bfe97', '原料', 'げんりょう', 'nguyên liệu', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('08727af0-36e3-4fec-a7a7-7f6299d1e1ef', '67e25db8-c22c-4fc9-84b5-2cad106bfe97', '材料', 'ざいりょう', 'vật liệu, nguyên liệu', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('08727af0-36e3-4fec-a7a7-7f6299d1e1ef', '67e25db8-c22c-4fc9-84b5-2cad106bfe97', '無料', 'むりょう', 'miễn phí', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('08727af0-36e3-4fec-a7a7-7f6299d1e1ef', '67e25db8-c22c-4fc9-84b5-2cad106bfe97', '給料', 'きゅうりょう', 'tiền lương', false, 12, 'pdf', 'ok', NULL);

-- ---------- 理 (LÍ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1c0478cd-4bcb-400b-af9a-d8143e522521', 'N4', '理', 'LÍ', 'lý lẽ, xử lý, sắp xếp', 11, '王', '理 có bộ 王(玉, ngọc) bên trái — mài ngọc (理) theo đúng vân, đúng lý lẽ tự nhiên.', NULL, '{"埋","裏"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'bdd61af4-f039-4d59-be39-4ead7ef6194c', id, 'kun', NULL, false, 12, 'ok', NULL from jp_kanji where id = '1c0478cd-4bcb-400b-af9a-d8143e522521'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '811dba09-fb27-4009-9730-589f19646ec8', id, 'on', 'リ', true, 12, 'ok', NULL from jp_kanji where id = '1c0478cd-4bcb-400b-af9a-d8143e522521'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1c0478cd-4bcb-400b-af9a-d8143e522521', '811dba09-fb27-4009-9730-589f19646ec8', '無理な', 'むりな', 'quá sức, không thể', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1c0478cd-4bcb-400b-af9a-d8143e522521', '811dba09-fb27-4009-9730-589f19646ec8', '修理する', 'しゅうりする', 'sửa chữa', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1c0478cd-4bcb-400b-af9a-d8143e522521', '811dba09-fb27-4009-9730-589f19646ec8', '整理する', 'せいりする', 'sàng lọc, sắp xếp', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1c0478cd-4bcb-400b-af9a-d8143e522521', '811dba09-fb27-4009-9730-589f19646ec8', '理由', 'りゆう', 'lý do', false, 12, 'pdf', 'ok', NULL);

-- ---------- 味 (VỊ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('982b1d78-885b-4e55-87de-7fc9400705c2', 'N4', '味', 'VỊ', 'vị, hương vị, ý nghĩa', 8, '口', '味 có bộ 口(miệng) bên trái — nếm bằng miệng để cảm nhận vị.', NULL, '{"昧","妹"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8653314c-f3bd-4a33-9cdd-f4d8abfee51e', id, 'kun', 'あじわう', true, 12, 'ok', NULL from jp_kanji where id = '982b1d78-885b-4e55-87de-7fc9400705c2'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('982b1d78-885b-4e55-87de-7fc9400705c2', '8653314c-f3bd-4a33-9cdd-f4d8abfee51e', '味', 'あじ', 'vị', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c9016610-40a8-4fd2-9e70-8571c7c5432d', id, 'on', 'ミ', false, 12, 'ok', NULL from jp_kanji where id = '982b1d78-885b-4e55-87de-7fc9400705c2'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('982b1d78-885b-4e55-87de-7fc9400705c2', 'c9016610-40a8-4fd2-9e70-8571c7c5432d', '意味', 'いみ', 'ý nghĩa', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('982b1d78-885b-4e55-87de-7fc9400705c2', 'c9016610-40a8-4fd2-9e70-8571c7c5432d', '興味', 'きょうみ', 'hứng thú', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('982b1d78-885b-4e55-87de-7fc9400705c2', 'c9016610-40a8-4fd2-9e70-8571c7c5432d', '趣味', 'しゅみ', 'sở thích', false, 12, 'pdf', 'ok', NULL);

-- ---------- 飯 (PHẠN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('59eea59b-9838-48a9-b3ab-a69940616a59', 'N4', '飯', 'PHẠN', 'cơm, bữa ăn', 12, '食', '飯 có bộ 食(ăn) bên trái — bữa cơm là để ăn.', NULL, '{"飲","館"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8321fff4-8596-44cd-a713-c57b38c18008', id, 'kun', 'めし', true, 12, 'ok', NULL from jp_kanji where id = '59eea59b-9838-48a9-b3ab-a69940616a59'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e5ee2db4-2f81-4293-abd8-bf6275694ab0', id, 'on', 'ハン', false, 12, 'ok', NULL from jp_kanji where id = '59eea59b-9838-48a9-b3ab-a69940616a59'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('59eea59b-9838-48a9-b3ab-a69940616a59', 'e5ee2db4-2f81-4293-abd8-bf6275694ab0', 'ご飯', 'ごはん', 'cơm', false, 12, 'pdf', 'ok', NULL);

-- ---------- 野 (DÃ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('2c3fafa6-475d-49b1-9a38-09f0ace2f582', 'N4', '野', 'DÃ', 'cánh đồng, tự nhiên, dã', 11, '里', '野 có bộ 里(làng quê) bên trái — vùng đất hoang dã ngoài làng quê.', NULL, '{"埜","予"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '336710c9-2431-4400-a375-8265891be6ff', id, 'kun', 'の', true, 12, 'ok', NULL from jp_kanji where id = '2c3fafa6-475d-49b1-9a38-09f0ace2f582'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fff98875-62d8-4c0d-b525-23b34265be80', id, 'on', 'ヤ', false, 12, 'ok', NULL from jp_kanji where id = '2c3fafa6-475d-49b1-9a38-09f0ace2f582'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('2c3fafa6-475d-49b1-9a38-09f0ace2f582', 'fff98875-62d8-4c0d-b525-23b34265be80', '野菜', 'やさい', 'rau củ', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('2c3fafa6-475d-49b1-9a38-09f0ace2f582', 'fff98875-62d8-4c0d-b525-23b34265be80', '野球', 'やきゅう', 'bóng chày', false, 12, 'pdf', 'ok', NULL);

-- ---------- 酒 (TỬU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('a5659dbb-08a0-4f7a-9807-c2e0dc1af525', 'N4', '酒', 'TỬU', 'rượu', 10, '氵', '酒 có bộ 氵(chất lỏng) bên trái — rượu là 1 chất lỏng lên men.', NULL, '{"酉","酌"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd5fc25b7-1dba-4c81-8120-af6778d287a2', id, 'kun', 'さけ', true, 12, 'ok', NULL from jp_kanji where id = 'a5659dbb-08a0-4f7a-9807-c2e0dc1af525'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a5659dbb-08a0-4f7a-9807-c2e0dc1af525', 'd5fc25b7-1dba-4c81-8120-af6778d287a2', 'お酒', 'おさけ', 'rượu', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ef0b9538-5970-479a-93d9-bbc09f42b535', id, 'on', 'シュ', false, 12, 'ok', NULL from jp_kanji where id = 'a5659dbb-08a0-4f7a-9807-c2e0dc1af525'
on conflict (id) do nothing;

-- ---------- 品 (PHẨM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('67f1c6d6-d05c-4729-baa3-283f150bf68d', 'N4', '品', 'PHẨM', 'hàng hóa, phẩm chất', 9, '口', '品 gồm 3 chữ 口(miệng/khoang chứa) xếp chồng — nhiều món hàng xếp thành phẩm loại.', NULL, '{"区","呂"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1e64d537-d32a-4f8f-abf2-69fa06001f5a', id, 'kun', 'しな', true, 12, 'ok', NULL from jp_kanji where id = '67f1c6d6-d05c-4729-baa3-283f150bf68d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('67f1c6d6-d05c-4729-baa3-283f150bf68d', '1e64d537-d32a-4f8f-abf2-69fa06001f5a', '品物', 'しなもの', 'hàng hoá', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3b174252-be91-4ccb-987d-81362a10d5df', id, 'on', 'ヒン', false, 12, 'ok', NULL from jp_kanji where id = '67f1c6d6-d05c-4729-baa3-283f150bf68d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('67f1c6d6-d05c-4729-baa3-283f150bf68d', '3b174252-be91-4ccb-987d-81362a10d5df', '製品', 'せいひん', 'sản phẩm', false, 12, 'pdf', 'ok', NULL);

-- ---------- 麦 (MẠCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('a5fdb436-a996-46b6-988c-e34e836cb334', 'N4', '麦', 'MẠCH', 'lúa mạch, lúa mì', 7, '麦', '麦 là hình vẽ cây lúa mạch với rễ dài — loại cây lương thực.', NULL, '{"表","夌"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ec3499f4-bce1-4ceb-b717-49dfc4820c24', id, 'kun', 'むぎ', true, 12, 'ok', NULL from jp_kanji where id = 'a5fdb436-a996-46b6-988c-e34e836cb334'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a5fdb436-a996-46b6-988c-e34e836cb334', 'ec3499f4-bce1-4ceb-b717-49dfc4820c24', '麦', 'むぎ', 'lúa mạch', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eae89dea-e0b6-4469-aad9-5ebe83deb7f5', id, 'on', NULL, false, 12, 'ok', NULL from jp_kanji where id = 'a5fdb436-a996-46b6-988c-e34e836cb334'
on conflict (id) do nothing;

-- ---------- 船 (THUYỀN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0', 'N4', '船', 'THUYỀN', 'thuyền, tàu', 11, '舟', '船 có bộ 舟(thuyền) bên trái — phương tiện đi trên nước.', NULL, '{"般","航"}', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7c794cd6-5c67-4c61-b024-64f754feb055', id, 'kun', 'ふね', true, 12, 'ok', NULL from jp_kanji where id = '8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0', '7c794cd6-5c67-4c61-b024-64f754feb055', '船', 'ふね', 'tàu, thuyền', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '667d0c52-1a1e-4149-abc7-b866b2755f4e', id, 'kun', 'ふな', false, 12, 'ok', NULL from jp_kanji where id = '8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0', '667d0c52-1a1e-4149-abc7-b866b2755f4e', '船便', 'ふなびん', 'gửi bằng đường biển', false, 12, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'aec1d93d-1931-4c01-94ca-0406cb01d339', id, 'on', 'セン', false, 12, 'ok', NULL from jp_kanji where id = '8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0'
on conflict (id) do nothing;

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 経 (KINH) có âm chính là gì?', 'ヒン', 'ケイ', 'キョウ', 'すまない', 'ケイ', 'generated' from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trải qua, kinh doanh"?', '味', '済', '経', '史', '経', 'generated' from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"経歴" có nghĩa là gì?', 'lý lịch, quá trình làm việc', 'món ăn, việc nấu ăn', 'miễn phí', 'lịch sử', 'lý lịch, quá trình làm việc', 'generated' from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 経験', 'けいけん', 'generated' from jp_kanji where id = 'cd8067ae-494b-4077-9dee-a30a5484d292';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 済 (TẾ) có âm chính là gì?', 'ショウ', 'サイ', 'ヤ', 'しな', 'サイ', 'generated' from jp_kanji where id = '1ca7958a-db3e-41f4-b4b3-f1d09ea92e67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hoàn tất, cứu tế, kinh tế"?', '野', '歴', '済', '政', '済', 'generated' from jp_kanji where id = '1ca7958a-db3e-41f4-b4b3-f1d09ea92e67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"経済" có nghĩa là gì?', 'kinh tế', 'sở thích', 'gửi bằng đường biển', 'ý nghĩa', 'kinh tế', 'generated' from jp_kanji where id = '1ca7958a-db3e-41f4-b4b3-f1d09ea92e67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 経済', 'けいざい', 'generated' from jp_kanji where id = '1ca7958a-db3e-41f4-b4b3-f1d09ea92e67';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 政 (CHÍNH) có âm chính là gì?', 'サイ', 'ショウ', 'たつ', 'まつりごと', 'まつりごと', 'generated' from jp_kanji where id = 'd9994e41-92df-4f7f-b3f5-5944fedff33c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chính trị, chính sự"?', '歴', '政', '史', '味', '政', 'generated' from jp_kanji where id = 'd9994e41-92df-4f7f-b3f5-5944fedff33c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"政治" có nghĩa là gì?', 'chính trị', 'nuôi nấng, dạy dỗ', 'giáo dục', 'sàng lọc, sắp xếp', 'chính trị', 'generated' from jp_kanji where id = 'd9994e41-92df-4f7f-b3f5-5944fedff33c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 政治', 'せいじ', 'generated' from jp_kanji where id = 'd9994e41-92df-4f7f-b3f5-5944fedff33c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 歴 (LỊCH) có âm chính là gì?', 'セン', 'レキ', 'リョウ', 'キョウ', 'レキ', 'generated' from jp_kanji where id = '4c1dcb9b-6861-4a82-a233-e2481ae8df15';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lịch sử, trải qua"?', '飯', '歴', '理', '味', '歴', 'generated' from jp_kanji where id = '4c1dcb9b-6861-4a82-a233-e2481ae8df15';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"歴史" có nghĩa là gì?', 'vật liệu, nguyên liệu', 'ý nghĩa', 'lịch sử', 'tàu, thuyền', 'lịch sử', 'generated' from jp_kanji where id = '4c1dcb9b-6861-4a82-a233-e2481ae8df15';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 歴史', 'れきし', 'generated' from jp_kanji where id = '4c1dcb9b-6861-4a82-a233-e2481ae8df15';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 史 (SỬ) có âm chính là gì?', 'ハン', 'シ', 'すむ', 'ふな', 'シ', 'generated' from jp_kanji where id = '08de1857-eb0c-435d-82e6-2c8433afa35c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lịch sử, sử sách"?', '史', '経', '育', '麦', '史', 'generated' from jp_kanji where id = '08de1857-eb0c-435d-82e6-2c8433afa35c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"歴史" có nghĩa là gì?', 'vật liệu, nguyên liệu', 'nguyên liệu', 'lịch sử', 'gửi bằng đường biển', 'lịch sử', 'generated' from jp_kanji where id = '08de1857-eb0c-435d-82e6-2c8433afa35c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 歴史', 'れきし', 'generated' from jp_kanji where id = '08de1857-eb0c-435d-82e6-2c8433afa35c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 育 (DỤC) có âm chính là gì?', 'ショウ', 'そだてる', 'まつりごと', 'ミ', 'そだてる', 'generated' from jp_kanji where id = 'cb53384d-9c9b-4e08-98cc-92075c4e9792';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nuôi dưỡng, giáo dục"?', '済', '政', '育', '品', '育', 'generated' from jp_kanji where id = 'cb53384d-9c9b-4e08-98cc-92075c4e9792';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"育てる" có nghĩa là gì?', 'quá sức, không thể', 'nuôi nấng, dạy dỗ', 'lý lịch, quá trình làm việc', 'gửi bằng đường biển', 'nuôi nấng, dạy dỗ', 'generated' from jp_kanji where id = 'cb53384d-9c9b-4e08-98cc-92075c4e9792';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 教育', 'きょういく', 'generated' from jp_kanji where id = 'cb53384d-9c9b-4e08-98cc-92075c4e9792';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 料 (LIỆU) có âm chính là gì?', 'リ', 'たつ', 'シュ', 'リョウ', 'リョウ', 'generated' from jp_kanji where id = '08727af0-36e3-4fec-a7a7-7f6299d1e1ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nguyên liệu, phí, chi phí"?', '済', '船', '理', '料', '料', 'generated' from jp_kanji where id = '08727af0-36e3-4fec-a7a7-7f6299d1e1ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"料理" có nghĩa là gì?', 'bóng chày', 'kinh tế', 'rau củ', 'món ăn, việc nấu ăn', 'món ăn, việc nấu ăn', 'generated' from jp_kanji where id = '08727af0-36e3-4fec-a7a7-7f6299d1e1ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 資料', 'しりょう', 'generated' from jp_kanji where id = '08727af0-36e3-4fec-a7a7-7f6299d1e1ef';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 理 (LÍ) có âm chính là gì?', 'すむ', 'めし', 'リ', 'たつ', 'リ', 'generated' from jp_kanji where id = '1c0478cd-4bcb-400b-af9a-d8143e522521';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lý lẽ, xử lý, sắp xếp"?', '品', '理', '済', '経', '理', 'generated' from jp_kanji where id = '1c0478cd-4bcb-400b-af9a-d8143e522521';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"無理な" có nghĩa là gì?', 'quá sức, không thể', 'kinh tế', 'rau củ', 'gửi bằng đường biển', 'quá sức, không thể', 'generated' from jp_kanji where id = '1c0478cd-4bcb-400b-af9a-d8143e522521';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 修理する', 'しゅうりする', 'generated' from jp_kanji where id = '1c0478cd-4bcb-400b-af9a-d8143e522521';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 味 (VỊ) có âm chính là gì?', 'セン', 'あじわう', 'イク', 'ミ', 'あじわう', 'generated' from jp_kanji where id = '982b1d78-885b-4e55-87de-7fc9400705c2';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vị, hương vị, ý nghĩa"?', '味', '船', '済', '政', '味', 'generated' from jp_kanji where id = '982b1d78-885b-4e55-87de-7fc9400705c2';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"味" có nghĩa là gì?', 'kinh nghiệm', 'rượu', 'quá sức, không thể', 'vị', 'vị', 'generated' from jp_kanji where id = '982b1d78-885b-4e55-87de-7fc9400705c2';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 意味', 'いみ', 'generated' from jp_kanji where id = '982b1d78-885b-4e55-87de-7fc9400705c2';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 飯 (PHẠN) có âm chính là gì?', 'の', 'サイ', 'ミ', 'めし', 'めし', 'generated' from jp_kanji where id = '59eea59b-9838-48a9-b3ab-a69940616a59';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cơm, bữa ăn"?', '船', '飯', '酒', '味', '飯', 'generated' from jp_kanji where id = '59eea59b-9838-48a9-b3ab-a69940616a59';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"ご飯" có nghĩa là gì?', 'lý lịch, quá trình làm việc', 'rượu', 'hứng thú', 'cơm', 'cơm', 'generated' from jp_kanji where id = '59eea59b-9838-48a9-b3ab-a69940616a59';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: ご飯', 'ごはん', 'generated' from jp_kanji where id = '59eea59b-9838-48a9-b3ab-a69940616a59';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 野 (DÃ) có âm chính là gì?', 'キョウ', 'そだてる', 'シ', 'の', 'の', 'generated' from jp_kanji where id = '2c3fafa6-475d-49b1-9a38-09f0ace2f582';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cánh đồng, tự nhiên, dã"?', '野', '味', '史', '政', '野', 'generated' from jp_kanji where id = '2c3fafa6-475d-49b1-9a38-09f0ace2f582';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"野菜" có nghĩa là gì?', 'tàu, thuyền', 'lý lịch, quá trình làm việc', 'miễn phí', 'rau củ', 'rau củ', 'generated' from jp_kanji where id = '2c3fafa6-475d-49b1-9a38-09f0ace2f582';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 野球', 'やきゅう', 'generated' from jp_kanji where id = '2c3fafa6-475d-49b1-9a38-09f0ace2f582';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 酒 (TỬU) có âm chính là gì?', 'そだてる', 'サイ', 'さけ', 'セン', 'さけ', 'generated' from jp_kanji where id = 'a5659dbb-08a0-4f7a-9807-c2e0dc1af525';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "rượu"?', '酒', '味', '料', '理', '酒', 'generated' from jp_kanji where id = 'a5659dbb-08a0-4f7a-9807-c2e0dc1af525';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お酒" có nghĩa là gì?', 'rượu', 'món ăn, việc nấu ăn', 'vật liệu, nguyên liệu', 'cơm', 'rượu', 'generated' from jp_kanji where id = 'a5659dbb-08a0-4f7a-9807-c2e0dc1af525';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お酒', 'おさけ', 'generated' from jp_kanji where id = 'a5659dbb-08a0-4f7a-9807-c2e0dc1af525';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 品 (PHẨM) có âm chính là gì?', 'ふな', 'めし', 'しな', 'セン', 'しな', 'generated' from jp_kanji where id = '67f1c6d6-d05c-4729-baa3-283f150bf68d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hàng hóa, phẩm chất"?', '政', '品', '歴', '酒', '品', 'generated' from jp_kanji where id = '67f1c6d6-d05c-4729-baa3-283f150bf68d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"品物" có nghĩa là gì?', 'sửa chữa', 'kinh nghiệm', 'lịch sử', 'hàng hoá', 'hàng hoá', 'generated' from jp_kanji where id = '67f1c6d6-d05c-4729-baa3-283f150bf68d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 製品', 'せいひん', 'generated' from jp_kanji where id = '67f1c6d6-d05c-4729-baa3-283f150bf68d';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 麦 (MẠCH) có âm chính là gì?', 'しな', 'へる', 'ミ', 'むぎ', 'むぎ', 'generated' from jp_kanji where id = 'a5fdb436-a996-46b6-988c-e34e836cb334';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lúa mạch, lúa mì"?', '育', '政', '麦', '酒', '麦', 'generated' from jp_kanji where id = 'a5fdb436-a996-46b6-988c-e34e836cb334';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"麦" có nghĩa là gì?', 'lúa mạch', 'lịch sử', 'tài liệu', 'bóng chày', 'lúa mạch', 'generated' from jp_kanji where id = 'a5fdb436-a996-46b6-988c-e34e836cb334';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 麦', 'むぎ', 'generated' from jp_kanji where id = 'a5fdb436-a996-46b6-988c-e34e836cb334';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 船 (THUYỀN) có âm chính là gì?', 'すまない', 'キョウ', 'セン', 'ふね', 'ふね', 'generated' from jp_kanji where id = '8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thuyền, tàu"?', '船', '済', '料', '麦', '船', 'generated' from jp_kanji where id = '8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"船" có nghĩa là gì?', 'tàu, thuyền', 'tiền lương', 'vật liệu, nguyên liệu', 'sửa chữa', 'tàu, thuyền', 'generated' from jp_kanji where id = '8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 船便', 'ふなびん', 'generated' from jp_kanji where id = '8c0d678d-7b6a-41f6-9bb8-f62b9984a6d0';


-- ============================================================
-- jp-go — Kanji N4, round 4 (15 kanji, trang in 5).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- ============================================================

-- ---------- 族 (TỘC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e40d2f22-6567-4053-b5fe-ed585fb5e905', 'N4', '族', 'TỘC', 'dòng họ, dân tộc', 11, '方', '族 có bộ 方(hướng) và 矢(mũi tên) — những người cùng hướng về 1 gốc là 1 dòng tộc.', NULL, '{"旗","施"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f87d78b0-7c77-47c5-af7c-1c5f1beb7f00', id, 'kun', NULL, false, 5, 'ok', NULL from jp_kanji where id = 'e40d2f22-6567-4053-b5fe-ed585fb5e905'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '60cfa158-9b48-47e7-9ee4-6e88687808e1', id, 'on', 'ゾク', true, 5, 'ok', NULL from jp_kanji where id = 'e40d2f22-6567-4053-b5fe-ed585fb5e905'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e40d2f22-6567-4053-b5fe-ed585fb5e905', '60cfa158-9b48-47e7-9ee4-6e88687808e1', '家族', 'かぞく', 'gia đình', false, 5, 'pdf', 'ok', NULL);

-- ---------- 毎 (MỖI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d4293eb4-698a-406a-a4ab-e67f77736934', 'N4', '毎', 'MỖI', 'mỗi, hàng (ngày/tháng...)', 6, '毋', '毎 gần giống 母(mẹ) — mỗi ngày mẹ đều chăm sóc con.', NULL, '{"母","海"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b3745246-f652-4e84-aaf9-cc8df786df15', id, 'kun', NULL, false, 5, 'ok', NULL from jp_kanji where id = 'd4293eb4-698a-406a-a4ab-e67f77736934'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2c40fe38-0c5f-48b2-9c03-a8ac67151da0', id, 'on', 'マイ', true, 5, 'ok', NULL from jp_kanji where id = 'd4293eb4-698a-406a-a4ab-e67f77736934'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d4293eb4-698a-406a-a4ab-e67f77736934', '2c40fe38-0c5f-48b2-9c03-a8ac67151da0', '毎朝', 'まいあさ', 'mỗi sáng', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d4293eb4-698a-406a-a4ab-e67f77736934', '2c40fe38-0c5f-48b2-9c03-a8ac67151da0', '毎日', 'まいにち', 'mỗi ngày', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d4293eb4-698a-406a-a4ab-e67f77736934', '2c40fe38-0c5f-48b2-9c03-a8ac67151da0', '毎月', 'まいつき', 'mỗi tháng', false, 5, 'pdf', 'ok', NULL);

-- ---------- 朝 (TRIỀU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('bc21b7ae-a17c-48a8-99cf-53d608a8b936', 'N4', '朝', 'TRIỀU', 'buổi sáng, triều đại', 12, '月', '朝 có bộ 月(mặt trăng) bên phải — mặt trời mọc, trăng chưa lặn hẳn, là lúc bình minh.', NULL, '{"潮","廟"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9b2847c5-a8e4-4e20-92bf-76d3f9c83a16', id, 'kun', 'あさ', true, 5, 'ok', NULL from jp_kanji where id = 'bc21b7ae-a17c-48a8-99cf-53d608a8b936'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bc21b7ae-a17c-48a8-99cf-53d608a8b936', '9b2847c5-a8e4-4e20-92bf-76d3f9c83a16', '朝', 'あさ', 'buổi sáng', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bc21b7ae-a17c-48a8-99cf-53d608a8b936', '9b2847c5-a8e4-4e20-92bf-76d3f9c83a16', '朝ごはん', 'あさごはん', 'bữa sáng', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1273ae33-c528-4c0f-af4e-b477da845299', id, 'on', 'チョウ', false, 5, 'ok', NULL from jp_kanji where id = 'bc21b7ae-a17c-48a8-99cf-53d608a8b936'
on conflict (id) do nothing;

-- ---------- 昼 (TRÚ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('2ddc7560-922d-4d2f-b931-709ac7f042e8', 'N4', '昼', 'TRÚ', 'buổi trưa, ban ngày', 9, '日', '昼 có bộ 日(mặt trời) ở dưới — mặt trời lên đỉnh đầu là buổi trưa.', NULL, '{"書","尽"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '278d35a1-99fe-4ad7-b4de-7b4d0cbbd543', id, 'kun', 'ひる', true, 5, 'ok', NULL from jp_kanji where id = '2ddc7560-922d-4d2f-b931-709ac7f042e8'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('2ddc7560-922d-4d2f-b931-709ac7f042e8', '278d35a1-99fe-4ad7-b4de-7b4d0cbbd543', '昼', 'ひる', 'buổi trưa', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('2ddc7560-922d-4d2f-b931-709ac7f042e8', '278d35a1-99fe-4ad7-b4de-7b4d0cbbd543', '昼ごはん', 'ひるごはん', 'bữa trưa', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('2ddc7560-922d-4d2f-b931-709ac7f042e8', '278d35a1-99fe-4ad7-b4de-7b4d0cbbd543', '昼休み', 'ひるやすみ', 'nghỉ trưa', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '41f72eb6-057b-4570-84d5-c7378f16c19e', id, 'on', 'チュウ', false, 5, 'ok', NULL from jp_kanji where id = '2ddc7560-922d-4d2f-b931-709ac7f042e8'
on conflict (id) do nothing;

-- ---------- 晩 (VÃN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4d320dab-8d38-43c6-a65e-607d6268b482', 'N4', '晩', 'VÃN', 'buổi tối', 12, '日', '晩 có bộ 日(mặt trời) bên trái — mặt trời sắp lặn muộn (免, muộn) là buổi tối.', NULL, '{"勉","免"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0339f60f-7318-4647-85e3-87339018cfe6', id, 'kun', NULL, false, 5, 'ok', NULL from jp_kanji where id = '4d320dab-8d38-43c6-a65e-607d6268b482'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f9370533-99eb-4b59-8fa6-2f5b36549dab', id, 'on', 'バン', true, 5, 'ok', NULL from jp_kanji where id = '4d320dab-8d38-43c6-a65e-607d6268b482'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4d320dab-8d38-43c6-a65e-607d6268b482', 'f9370533-99eb-4b59-8fa6-2f5b36549dab', '晩', 'ばん', 'buổi tối', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4d320dab-8d38-43c6-a65e-607d6268b482', 'f9370533-99eb-4b59-8fa6-2f5b36549dab', '毎晩', 'まいばん', 'mỗi tối', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4d320dab-8d38-43c6-a65e-607d6268b482', 'f9370533-99eb-4b59-8fa6-2f5b36549dab', '晩ごはん', 'ばんごはん', 'bữa tối', false, 5, 'pdf', 'ok', NULL);

-- ---------- 夜 (DẠ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('04f5d3f2-fb7a-4d78-b72d-1339a1652832', 'N4', '夜', 'DẠ', 'ban đêm', 8, '夕', '夜 có bộ 夕(chiều tối) — khi trời tối hẳn xuống là ban đêm.', NULL, '{"液","夢"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '798ce3e7-b5c8-4fa1-98e6-057109031182', id, 'kun', 'よる', true, 5, 'ok', NULL from jp_kanji where id = '04f5d3f2-fb7a-4d78-b72d-1339a1652832'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('04f5d3f2-fb7a-4d78-b72d-1339a1652832', '798ce3e7-b5c8-4fa1-98e6-057109031182', '夜', 'よる', 'buổi đêm', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5a7ac59b-8a0b-4140-aac4-3aa3f7f784fa', id, 'on', 'ヤ', false, 5, 'ok', NULL from jp_kanji where id = '04f5d3f2-fb7a-4d78-b72d-1339a1652832'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('04f5d3f2-fb7a-4d78-b72d-1339a1652832', '5a7ac59b-8a0b-4140-aac4-3aa3f7f784fa', '今夜', 'こんや', 'đêm nay', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('04f5d3f2-fb7a-4d78-b72d-1339a1652832', '5a7ac59b-8a0b-4140-aac4-3aa3f7f784fa', '夜行バス', 'やこうバス', 'xe bus chạy đêm', false, 5, 'pdf', 'ok', NULL);

-- ---------- 午 (NGỌ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5', 'N4', '午', 'NGỌ', 'giữa trưa', 4, '十', '午 giống chữ 十 kéo dài — mốc giữa ngày, giống kim đồng hồ chỉ 12 giờ trưa.', NULL, '{"牛","許"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '06d5f9c7-7622-4459-8c67-2bf6aa39f26b', id, 'kun', NULL, false, 5, 'ok', NULL from jp_kanji where id = '3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5c40095a-199d-4b7f-a389-2143791cf61a', id, 'on', 'ゴ', true, 5, 'ok', NULL from jp_kanji where id = '3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5', '5c40095a-199d-4b7f-a389-2143791cf61a', '午前', 'ごぜん', 'buổi sáng', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5', '5c40095a-199d-4b7f-a389-2143791cf61a', '午後', 'ごご', 'buổi chiều', false, 5, 'pdf', 'ok', NULL);

-- ---------- 後 (HẬU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ba6355cb-4c0c-482d-a494-b66065abde3a', 'N4', '後', 'HẬU', 'sau, phía sau', 9, '彳', '後 có bộ 彳(bước chân nhỏ) — bước chậm lại phía sau người khác.', NULL, '{"従","得"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '196c5d1d-929f-48e4-9b1a-f32f20571115', id, 'kun', 'あと', false, 5, 'ok', NULL from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a931b3d9-38a2-44a4-80da-f9f22fdffe94', id, 'kun', 'うしろ', false, 5, 'ok', NULL from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'abcd5794-d427-47ed-aaf4-e0c3c789f5c8', id, 'on', 'ゴ', true, 5, 'ok', NULL from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ba6355cb-4c0c-482d-a494-b66065abde3a', 'abcd5794-d427-47ed-aaf4-e0c3c789f5c8', '午後', 'ごご', 'buổi chiều', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3a0fc75f-f92b-45a9-9dde-7284b929a12f', id, 'on', 'コウ', false, 5, 'ok', NULL from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a'
on conflict (id) do nothing;

-- ---------- 前 (TIỀN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('895ead3d-ba16-4210-9f25-a1823496e5e0', 'N4', '前', 'TIỀN', 'trước, phía trước', 9, '刂', '前 có bộ 刂(dao) trên 月(thuyền) — hình ảnh mũi thuyền đi trước, phía trước.', NULL, '{"歬","剪"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4dc7f9d2-07ee-4c48-959e-420edf503f6c', id, 'kun', 'まえ', true, 5, 'ok', NULL from jp_kanji where id = '895ead3d-ba16-4210-9f25-a1823496e5e0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('895ead3d-ba16-4210-9f25-a1823496e5e0', '4dc7f9d2-07ee-4c48-959e-420edf503f6c', 'お名前', 'おなまえ', 'tên', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('895ead3d-ba16-4210-9f25-a1823496e5e0', '4dc7f9d2-07ee-4c48-959e-420edf503f6c', '前', 'まえ', 'trước', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('895ead3d-ba16-4210-9f25-a1823496e5e0', '4dc7f9d2-07ee-4c48-959e-420edf503f6c', '駅前', 'えきまえ', 'trước nhà ga', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c0c5fa00-bc26-4bea-b66e-c050c8e673e1', id, 'on', 'ゼン', false, 5, 'ok', NULL from jp_kanji where id = '895ead3d-ba16-4210-9f25-a1823496e5e0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('895ead3d-ba16-4210-9f25-a1823496e5e0', 'c0c5fa00-bc26-4bea-b66e-c050c8e673e1', '午前', 'ごぜん', 'buổi sáng', false, 5, 'pdf', 'ok', NULL);

-- ---------- 週 (CHU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('944b05d7-76e3-42c7-b93b-f6be7b51b1af', 'N4', '週', 'CHU', 'tuần lễ', 11, '辶', '週 có bộ 辶(đi) bao quanh 周(vòng tròn) — 1 vòng quay là 1 tuần lễ.', NULL, '{"周","調"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5aaf570a-90ab-4510-9dbc-9334420ff972', id, 'kun', NULL, false, 5, 'ok', NULL from jp_kanji where id = '944b05d7-76e3-42c7-b93b-f6be7b51b1af'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a6bdfdf7-39e0-4f0a-aa12-216c6144f4a9', id, 'on', 'シュウ', true, 5, 'ok', NULL from jp_kanji where id = '944b05d7-76e3-42c7-b93b-f6be7b51b1af'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('944b05d7-76e3-42c7-b93b-f6be7b51b1af', 'a6bdfdf7-39e0-4f0a-aa12-216c6144f4a9', '先週', 'せんしゅう', 'tuần trước', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('944b05d7-76e3-42c7-b93b-f6be7b51b1af', 'a6bdfdf7-39e0-4f0a-aa12-216c6144f4a9', '今週', 'こんしゅう', 'tuần này', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('944b05d7-76e3-42c7-b93b-f6be7b51b1af', 'a6bdfdf7-39e0-4f0a-aa12-216c6144f4a9', '来週', 'らいしゅう', 'tuần sau', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('944b05d7-76e3-42c7-b93b-f6be7b51b1af', 'a6bdfdf7-39e0-4f0a-aa12-216c6144f4a9', '週末', 'しゅうまつ', 'cuối tuần', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('944b05d7-76e3-42c7-b93b-f6be7b51b1af', 'a6bdfdf7-39e0-4f0a-aa12-216c6144f4a9', '再来週', 'さらいしゅう', 'tuần sau nữa', false, 5, 'pdf', 'ok', NULL);

-- ---------- 試 (THÍ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('90c95710-fdad-4c88-a8c9-9cc126fd4b05', 'N4', '試', 'THÍ', 'thử, thi', 13, '言', '試 có bộ 言(lời nói) — dùng lời để thử thách, kiểm tra (thi).', NULL, '{"式","誠"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '22c996bf-d1ae-4fc9-b5f4-bab38f6deb01', id, 'kun', 'こころみる', false, 5, 'ok', NULL from jp_kanji where id = '90c95710-fdad-4c88-a8c9-9cc126fd4b05'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7da16265-7afa-460f-b304-ad14f7916ead', id, 'kun', 'ためす', false, 5, 'ok', NULL from jp_kanji where id = '90c95710-fdad-4c88-a8c9-9cc126fd4b05'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '92faca49-02bb-48e7-9d16-463eac6f0a3d', id, 'on', 'シ', true, 5, 'ok', NULL from jp_kanji where id = '90c95710-fdad-4c88-a8c9-9cc126fd4b05'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('90c95710-fdad-4c88-a8c9-9cc126fd4b05', '92faca49-02bb-48e7-9d16-463eac6f0a3d', '試験', 'しけん', 'kỳ thi', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('90c95710-fdad-4c88-a8c9-9cc126fd4b05', '92faca49-02bb-48e7-9d16-463eac6f0a3d', '試合', 'しあい', 'trận đấu', false, 5, 'pdf', 'ok', NULL);

-- ---------- 験 (NGHIỆM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e7447699-8362-40f7-a2bb-c7458ff30664', 'N4', '験', 'NGHIỆM', 'thí nghiệm, kiểm nghiệm', 18, '馬', '験 có bộ 馬(ngựa) — thời xưa thử ngựa (kiểm nghiệm) trước khi dùng.', NULL, '{"験","馬"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '035eb2ab-b9f8-44ab-b515-702a95b6e675', id, 'kun', NULL, false, 5, 'ok', NULL from jp_kanji where id = 'e7447699-8362-40f7-a2bb-c7458ff30664'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd7baa13c-43da-4234-ae9e-9335d130ff94', id, 'on', 'ケン', true, 5, 'ok', NULL from jp_kanji where id = 'e7447699-8362-40f7-a2bb-c7458ff30664'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e7447699-8362-40f7-a2bb-c7458ff30664', 'd7baa13c-43da-4234-ae9e-9335d130ff94', '実験', 'じっけん', 'thí nghiệm', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '688862c1-6e42-4fb7-b29d-f2659442e181', id, 'on', 'ゲン', false, 5, 'ok', NULL from jp_kanji where id = 'e7447699-8362-40f7-a2bb-c7458ff30664'
on conflict (id) do nothing;

-- ---------- 映 (ÁNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c66faca9-ba86-4690-850d-4db6b6c026f5', 'N4', '映', 'ÁNH', 'chiếu, phản chiếu', 9, '日', '映 có bộ 日(mặt trời) bên trái — ánh sáng mặt trời chiếu, phản chiếu lên vật.', NULL, '{"英","決"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '934ed9d9-bf0c-410c-8862-02d79269e945', id, 'kun', 'うつる', false, 5, 'ok', NULL from jp_kanji where id = 'c66faca9-ba86-4690-850d-4db6b6c026f5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b7ca067c-ad95-43fb-8e9a-a2983f9581f5', id, 'kun', 'うつす', false, 5, 'ok', NULL from jp_kanji where id = 'c66faca9-ba86-4690-850d-4db6b6c026f5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fc846f41-357d-469b-99a7-c9f2d13c9b33', id, 'on', 'エイ', true, 5, 'ok', NULL from jp_kanji where id = 'c66faca9-ba86-4690-850d-4db6b6c026f5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c66faca9-ba86-4690-850d-4db6b6c026f5', 'fc846f41-357d-469b-99a7-c9f2d13c9b33', '映画', 'えいが', 'phim, bộ phim', false, 5, 'pdf', 'ok', NULL);

-- ---------- 画 (HỌA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('6811b596-c6a7-4964-a239-05754c8cb451', 'N4', '画', 'HỌA', 'tranh vẽ, kế hoạch', 8, '田', '画 có bộ 田(ruộng) — khung ruộng vuông vắn giống 1 bức tranh được đóng khung.', NULL, '{"曲","由"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '020a08b3-5c1e-4d54-992c-a3bb6f1322b3', id, 'kun', NULL, false, 5, 'ok', NULL from jp_kanji where id = '6811b596-c6a7-4964-a239-05754c8cb451'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2c635ab9-bc5c-4e7d-8c70-4df47c5894fe', id, 'on', 'ガ', true, 5, 'ok', NULL from jp_kanji where id = '6811b596-c6a7-4964-a239-05754c8cb451'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6811b596-c6a7-4964-a239-05754c8cb451', '2c635ab9-bc5c-4e7d-8c70-4df47c5894fe', '映画館', 'えいがかん', 'rạp chiếu phim', false, 5, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e07cdfef-32a0-40b7-b78e-6fc98f7303b3', id, 'on', 'カク', false, 5, 'ok', NULL from jp_kanji where id = '6811b596-c6a7-4964-a239-05754c8cb451'
on conflict (id) do nothing;

-- ---------- 宿 (TÚC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4d5418f1-a489-45e7-940b-1f79206ed2e5', 'N4', '宿', 'TÚC', 'trọ, nghỉ lại, bài tập (宿題)', 11, '宀', '宿 có bộ 宀(mái nhà) trên 百人 — hình ảnh nhiều người trọ chung dưới 1 mái nhà.', NULL, '{"缩","橘"}', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '15938767-19b8-4958-88c4-ea4a597d3fa1', id, 'kun', 'やど', true, 5, 'ok', NULL from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b60c0f84-dfe3-4cf4-af3a-d17f98cfee30', id, 'kun', 'やどる', false, 5, 'ok', NULL from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8ce7ec9b-2764-4941-b8bc-e35bce3f22c2', id, 'kun', 'やどす', false, 5, 'ok', NULL from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0b1e5333-4816-4ed7-be59-7f7c899716ad', id, 'on', 'シュク', false, 5, 'ok', NULL from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4d5418f1-a489-45e7-940b-1f79206ed2e5', '0b1e5333-4816-4ed7-be59-7f7c899716ad', '宿題', 'しゅくだい', 'bài tập về nhà', false, 5, 'pdf', 'ok', NULL);

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 族 (TỘC) có âm chính là gì?', 'よる', 'マイ', 'エイ', 'ゾク', 'ゾク', 'generated' from jp_kanji where id = 'e40d2f22-6567-4053-b5fe-ed585fb5e905';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dòng họ, dân tộc"?', '午', '後', '映', '族', '族', 'generated' from jp_kanji where id = 'e40d2f22-6567-4053-b5fe-ed585fb5e905';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"家族" có nghĩa là gì?', 'gia đình', 'thí nghiệm', 'tuần sau nữa', 'mỗi tháng', 'gia đình', 'generated' from jp_kanji where id = 'e40d2f22-6567-4053-b5fe-ed585fb5e905';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 家族', 'かぞく', 'generated' from jp_kanji where id = 'e40d2f22-6567-4053-b5fe-ed585fb5e905';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 毎 (MỖI) có âm chính là gì?', 'ためす', 'バン', 'ゾク', 'マイ', 'マイ', 'generated' from jp_kanji where id = 'd4293eb4-698a-406a-a4ab-e67f77736934';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mỗi, hàng (ngày/tháng...)"?', '族', '試', '毎', '験', '毎', 'generated' from jp_kanji where id = 'd4293eb4-698a-406a-a4ab-e67f77736934';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"毎朝" có nghĩa là gì?', 'mỗi sáng', 'tuần trước', 'buổi sáng', 'xe bus chạy đêm', 'mỗi sáng', 'generated' from jp_kanji where id = 'd4293eb4-698a-406a-a4ab-e67f77736934';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 毎日', 'まいにち', 'generated' from jp_kanji where id = 'd4293eb4-698a-406a-a4ab-e67f77736934';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 朝 (TRIỀU) có âm chính là gì?', 'カク', 'あと', 'あさ', 'シュウ', 'あさ', 'generated' from jp_kanji where id = 'bc21b7ae-a17c-48a8-99cf-53d608a8b936';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "buổi sáng, triều đại"?', '午', '朝', '族', '毎', '朝', 'generated' from jp_kanji where id = 'bc21b7ae-a17c-48a8-99cf-53d608a8b936';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"朝" có nghĩa là gì?', 'buổi sáng', 'kỳ thi', 'đêm nay', 'cuối tuần', 'buổi sáng', 'generated' from jp_kanji where id = 'bc21b7ae-a17c-48a8-99cf-53d608a8b936';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 朝ごはん', 'あさごはん', 'generated' from jp_kanji where id = 'bc21b7ae-a17c-48a8-99cf-53d608a8b936';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 昼 (TRÚ) có âm chính là gì?', 'ゼン', 'カク', 'ひる', 'まえ', 'ひる', 'generated' from jp_kanji where id = '2ddc7560-922d-4d2f-b931-709ac7f042e8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "buổi trưa, ban ngày"?', '昼', '後', '朝', '午', '昼', 'generated' from jp_kanji where id = '2ddc7560-922d-4d2f-b931-709ac7f042e8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"昼" có nghĩa là gì?', 'rạp chiếu phim', 'bữa sáng', 'buổi trưa', 'bữa trưa', 'buổi trưa', 'generated' from jp_kanji where id = '2ddc7560-922d-4d2f-b931-709ac7f042e8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 昼ごはん', 'ひるごはん', 'generated' from jp_kanji where id = '2ddc7560-922d-4d2f-b931-709ac7f042e8';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 晩 (VÃN) có âm chính là gì?', 'チョウ', 'バン', 'やど', 'ゾク', 'バン', 'generated' from jp_kanji where id = '4d320dab-8d38-43c6-a65e-607d6268b482';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "buổi tối"?', '毎', '晩', '朝', '夜', '晩', 'generated' from jp_kanji where id = '4d320dab-8d38-43c6-a65e-607d6268b482';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"晩" có nghĩa là gì?', 'bữa tối', 'buổi sáng', 'buổi tối', 'buổi trưa', 'buổi tối', 'generated' from jp_kanji where id = '4d320dab-8d38-43c6-a65e-607d6268b482';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 毎晩', 'まいばん', 'generated' from jp_kanji where id = '4d320dab-8d38-43c6-a65e-607d6268b482';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 夜 (DẠ) có âm chính là gì?', 'シュウ', 'チョウ', 'よる', 'エイ', 'よる', 'generated' from jp_kanji where id = '04f5d3f2-fb7a-4d78-b72d-1339a1652832';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ban đêm"?', '午', '朝', '毎', '夜', '夜', 'generated' from jp_kanji where id = '04f5d3f2-fb7a-4d78-b72d-1339a1652832';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"夜" có nghĩa là gì?', 'buổi đêm', 'buổi chiều', 'thí nghiệm', 'bữa trưa', 'buổi đêm', 'generated' from jp_kanji where id = '04f5d3f2-fb7a-4d78-b72d-1339a1652832';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 今夜', 'こんや', 'generated' from jp_kanji where id = '04f5d3f2-fb7a-4d78-b72d-1339a1652832';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 午 (NGỌ) có âm chính là gì?', 'ゴ', 'やどる', 'ヤ', 'あさ', 'ゴ', 'generated' from jp_kanji where id = '3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giữa trưa"?', '午', '昼', '前', '朝', '午', 'generated' from jp_kanji where id = '3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"午前" có nghĩa là gì?', 'tuần trước', 'bài tập về nhà', 'buổi sáng', 'tuần sau nữa', 'buổi sáng', 'generated' from jp_kanji where id = '3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 午後', 'ごご', 'generated' from jp_kanji where id = '3f1ea500-c4e6-4a0b-9ce5-766d9fe250c5';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 後 (HẬU) có âm chính là gì?', 'ひる', 'ためす', 'うつる', 'ゴ', 'ゴ', 'generated' from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sau, phía sau"?', '映', '験', '昼', '後', '後', 'generated' from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"午後" có nghĩa là gì?', 'bữa trưa', 'mỗi tháng', 'buổi chiều', 'mỗi sáng', 'buổi chiều', 'generated' from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 午後', 'ごご', 'generated' from jp_kanji where id = 'ba6355cb-4c0c-482d-a494-b66065abde3a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 前 (TIỀN) có âm chính là gì?', 'ひる', 'ゲン', 'コウ', 'まえ', 'まえ', 'generated' from jp_kanji where id = '895ead3d-ba16-4210-9f25-a1823496e5e0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trước, phía trước"?', '夜', '画', '毎', '前', '前', 'generated' from jp_kanji where id = '895ead3d-ba16-4210-9f25-a1823496e5e0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お名前" có nghĩa là gì?', 'tuần trước', 'mỗi ngày', 'thí nghiệm', 'tên', 'tên', 'generated' from jp_kanji where id = '895ead3d-ba16-4210-9f25-a1823496e5e0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 前', 'まえ', 'generated' from jp_kanji where id = '895ead3d-ba16-4210-9f25-a1823496e5e0';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 週 (CHU) có âm chính là gì?', 'ガ', 'うしろ', 'よる', 'シュウ', 'シュウ', 'generated' from jp_kanji where id = '944b05d7-76e3-42c7-b93b-f6be7b51b1af';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tuần lễ"?', '前', '毎', '週', '晩', '週', 'generated' from jp_kanji where id = '944b05d7-76e3-42c7-b93b-f6be7b51b1af';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"先週" có nghĩa là gì?', 'rạp chiếu phim', 'tuần trước', 'buổi chiều', 'mỗi sáng', 'tuần trước', 'generated' from jp_kanji where id = '944b05d7-76e3-42c7-b93b-f6be7b51b1af';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 今週', 'こんしゅう', 'generated' from jp_kanji where id = '944b05d7-76e3-42c7-b93b-f6be7b51b1af';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 試 (THÍ) có âm chính là gì?', 'ゲン', 'ひる', 'シ', 'ゴ', 'シ', 'generated' from jp_kanji where id = '90c95710-fdad-4c88-a8c9-9cc126fd4b05';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thử, thi"?', '験', '晩', '試', '後', '試', 'generated' from jp_kanji where id = '90c95710-fdad-4c88-a8c9-9cc126fd4b05';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"試験" có nghĩa là gì?', 'xe bus chạy đêm', 'trước nhà ga', 'kỳ thi', 'bữa sáng', 'kỳ thi', 'generated' from jp_kanji where id = '90c95710-fdad-4c88-a8c9-9cc126fd4b05';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 試合', 'しあい', 'generated' from jp_kanji where id = '90c95710-fdad-4c88-a8c9-9cc126fd4b05';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 験 (NGHIỆM) có âm chính là gì?', 'あさ', 'シュウ', 'ケン', 'うつす', 'ケン', 'generated' from jp_kanji where id = 'e7447699-8362-40f7-a2bb-c7458ff30664';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thí nghiệm, kiểm nghiệm"?', '午', '験', '映', '晩', '験', 'generated' from jp_kanji where id = 'e7447699-8362-40f7-a2bb-c7458ff30664';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"実験" có nghĩa là gì?', 'cuối tuần', 'bữa trưa', 'trận đấu', 'thí nghiệm', 'thí nghiệm', 'generated' from jp_kanji where id = 'e7447699-8362-40f7-a2bb-c7458ff30664';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 実験', 'じっけん', 'generated' from jp_kanji where id = 'e7447699-8362-40f7-a2bb-c7458ff30664';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 映 (ÁNH) có âm chính là gì?', 'エイ', 'ひる', 'ケン', 'やど', 'エイ', 'generated' from jp_kanji where id = 'c66faca9-ba86-4690-850d-4db6b6c026f5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chiếu, phản chiếu"?', '後', '宿', '前', '映', '映', 'generated' from jp_kanji where id = 'c66faca9-ba86-4690-850d-4db6b6c026f5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"映画" có nghĩa là gì?', 'trận đấu', 'trước nhà ga', 'phim, bộ phim', 'gia đình', 'phim, bộ phim', 'generated' from jp_kanji where id = 'c66faca9-ba86-4690-850d-4db6b6c026f5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 映画', 'えいが', 'generated' from jp_kanji where id = 'c66faca9-ba86-4690-850d-4db6b6c026f5';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 画 (HỌA) có âm chính là gì?', 'チョウ', 'よる', 'こころみる', 'ガ', 'ガ', 'generated' from jp_kanji where id = '6811b596-c6a7-4964-a239-05754c8cb451';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tranh vẽ, kế hoạch"?', '午', '画', '験', '前', '画', 'generated' from jp_kanji where id = '6811b596-c6a7-4964-a239-05754c8cb451';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"映画館" có nghĩa là gì?', 'rạp chiếu phim', 'nghỉ trưa', 'bài tập về nhà', 'buổi sáng', 'rạp chiếu phim', 'generated' from jp_kanji where id = '6811b596-c6a7-4964-a239-05754c8cb451';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 映画館', 'えいがかん', 'generated' from jp_kanji where id = '6811b596-c6a7-4964-a239-05754c8cb451';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 宿 (TÚC) có âm chính là gì?', 'やどす', 'ケン', 'やど', 'ひる', 'やど', 'generated' from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trọ, nghỉ lại, bài tập (宿題)"?', '午', '宿', '映', '験', '宿', 'generated' from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"宿題" có nghĩa là gì?', 'bài tập về nhà', 'rạp chiếu phim', 'tuần sau nữa', 'nghỉ trưa', 'bài tập về nhà', 'generated' from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 宿題', 'しゅくだい', 'generated' from jp_kanji where id = '4d5418f1-a489-45e7-940b-1f79206ed2e5';


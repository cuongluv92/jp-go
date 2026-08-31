-- ============================================================
-- jp-go — Kanji N4, round 6 (16 kanji mới, trang in 7).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- Bổ sung On-reading còn thiếu cho 主 (CHỦ, đã seed round 5) vì
-- kanji này trải sang đầu trang 7 — KHÔNG tạo dòng jp_kanji mới,
-- chỉ insert thêm jp_kanji_readings/jp_kanji_words tham chiếu qua
-- kanji_character đã có.
-- ============================================================

-- ---------- Bổ sung On-reading cho 主 (CHỦ) ----------
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6cf0d91e-187d-40e1-b6b9-0e15ddfc1a7c', id, 'on', 'シュ', true, 7, 'ok', NULL from jp_kanji where level = 'N4' and kanji_character = '主'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) select id, '6cf0d91e-187d-40e1-b6b9-0e15ddfc1a7c', 'ご主人', 'ごしゅじん', 'chồng (của người khác)', false, 7, 'pdf', 'ok', NULL from jp_kanji where level = 'N4' and kanji_character = '主';
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd00410a3-ccb7-4400-88a8-46660ee17b9b', id, 'on', 'ス', false, 7, 'ok', NULL from jp_kanji where level = 'N4' and kanji_character = '主'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) select id, 'd00410a3-ccb7-4400-88a8-46660ee17b9b', '主人公', 'しゅじんこう', 'nhân vật chính', false, 7, 'pdf', 'ok', NULL from jp_kanji where level = 'N4' and kanji_character = '主';

-- ---------- 奥 (ÁO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('5fd82a0d-e464-42a8-939c-4f14ccd2f8ee', 'N4', '奥', 'ÁO', 'sâu bên trong, hậu phòng', 12, '大', '奥 có bộ 大(to lớn) trên 米 — không gian sâu bên trong ngôi nhà lớn.', NULL, '{"屋","與"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'aca7ab29-31f3-4956-9792-85019d9b0ad2', id, 'kun', 'おく', true, 7, 'ok', NULL from jp_kanji where id = '5fd82a0d-e464-42a8-939c-4f14ccd2f8ee'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5fd82a0d-e464-42a8-939c-4f14ccd2f8ee', 'aca7ab29-31f3-4956-9792-85019d9b0ad2', '奥さん', 'おくさん', 'vợ', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5fd82a0d-e464-42a8-939c-4f14ccd2f8ee', 'aca7ab29-31f3-4956-9792-85019d9b0ad2', '奥様', 'おくさま', 'vợ (của người khác)', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7e98884b-c27f-49c8-81ae-a3be825870a8', id, 'on', 'オウ', false, 7, 'ok', NULL from jp_kanji where id = '5fd82a0d-e464-42a8-939c-4f14ccd2f8ee'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1f15b8de-ed66-4ebc-a4de-d8075f96c6a8', id, 'on', 'イク', false, 7, 'ok', NULL from jp_kanji where id = '5fd82a0d-e464-42a8-939c-4f14ccd2f8ee'
on conflict (id) do nothing;

-- ---------- 妻 (THÊ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('338a7486-9580-4e8e-af9d-ef5720c30b5e', 'N4', '妻', 'THÊ', 'vợ', 8, '女', '妻 có bộ 女(người phụ nữ) ở dưới — người phụ nữ trong nhà, là vợ.', NULL, '{"妾","妥"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8ced6a7a-28bd-4a4a-8e7b-c084f2efc7ca', id, 'kun', 'つま', true, 7, 'ok', NULL from jp_kanji where id = '338a7486-9580-4e8e-af9d-ef5720c30b5e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('338a7486-9580-4e8e-af9d-ef5720c30b5e', '8ced6a7a-28bd-4a4a-8e7b-c084f2efc7ca', '妻', 'つま', 'vợ (của mình)', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a34cfed0-8cad-4a4e-887c-338aaa6d3030', id, 'on', 'サイ', false, 7, 'ok', NULL from jp_kanji where id = '338a7486-9580-4e8e-af9d-ef5720c30b5e'
on conflict (id) do nothing;

-- ---------- 兄 (HUYNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('8eda6c2f-fab5-4009-814a-9a44602b2786', 'N4', '兄', 'HUYNH', 'anh trai', 5, '儿', '兄 có bộ 儿(chân người) dưới 口(miệng) — người anh hay dùng miệng (lời nói) để dạy bảo em.', NULL, '{"克","元"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7280a692-992a-4348-a208-6f91daf77945', id, 'kun', 'あに', true, 7, 'ok', NULL from jp_kanji where id = '8eda6c2f-fab5-4009-814a-9a44602b2786'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8eda6c2f-fab5-4009-814a-9a44602b2786', '7280a692-992a-4348-a208-6f91daf77945', '兄', 'あに', 'anh trai', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8eda6c2f-fab5-4009-814a-9a44602b2786', '7280a692-992a-4348-a208-6f91daf77945', 'お兄さん', 'おにいさん', 'anh trai (cách nói người khác)', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1df568a2-0291-4b65-a927-5a9f6a18d55b', id, 'on', 'ケイ', false, 7, 'ok', NULL from jp_kanji where id = '8eda6c2f-fab5-4009-814a-9a44602b2786'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8eda6c2f-fab5-4009-814a-9a44602b2786', '1df568a2-0291-4b65-a927-5a9f6a18d55b', '兄弟', 'きょうだい', 'anh em', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1a96f92e-f32a-45bb-8ae5-4ddd4a151727', id, 'on', 'キョウ', false, 7, 'ok', NULL from jp_kanji where id = '8eda6c2f-fab5-4009-814a-9a44602b2786'
on conflict (id) do nothing;

-- ---------- 弟 (ĐỆ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1', 'N4', '弟', 'ĐỆ', 'em trai', 7, '弓', '弟 có bộ 弓(cây cung) — người em học theo thứ tự, như dây cung quấn theo nấc.', NULL, '{"第","夷"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'dbfa94b6-f4e6-4d6e-b1e3-a4e811cabf1e', id, 'kun', 'おとうと', true, 7, 'ok', NULL from jp_kanji where id = '5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1', 'dbfa94b6-f4e6-4d6e-b1e3-a4e811cabf1e', '弟', 'おとうと', 'em trai', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1', 'dbfa94b6-f4e6-4d6e-b1e3-a4e811cabf1e', '弟さん', 'おとうとさん', 'em trai (cách nói người khác)', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ae34342c-9786-4d87-8bfc-72c4859940fe', id, 'on', 'テイ', false, 7, 'ok', NULL from jp_kanji where id = '5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1', 'ae34342c-9786-4d87-8bfc-72c4859940fe', '兄弟', 'きょうだい', 'anh em', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5a8dc244-2567-4110-a453-d6f8d0458471', id, 'on', 'ダイ', false, 7, 'ok', NULL from jp_kanji where id = '5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1'
on conflict (id) do nothing;

-- ---------- 姉 (TỈ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('b384e8db-7e20-4b28-ad0e-dd41a0436e9d', 'N4', '姉', 'TỈ', 'chị gái', 8, '女', '姉 có bộ 女(phụ nữ) bên trái — người phụ nữ lớn tuổi hơn trong nhà, là chị.', NULL, '{"妹","肺"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '61c49b13-8dfd-446f-9971-5f930eb0aec6', id, 'kun', 'あね', true, 7, 'ok', NULL from jp_kanji where id = 'b384e8db-7e20-4b28-ad0e-dd41a0436e9d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b384e8db-7e20-4b28-ad0e-dd41a0436e9d', '61c49b13-8dfd-446f-9971-5f930eb0aec6', '姉', 'あね', 'chị gái', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b384e8db-7e20-4b28-ad0e-dd41a0436e9d', '61c49b13-8dfd-446f-9971-5f930eb0aec6', 'お姉さん', 'おねえさん', 'chị gái (cách nói người khác)', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c8a70cdb-3b73-4979-9ebd-2be72e9fb4de', id, 'on', 'シ', false, 7, 'ok', NULL from jp_kanji where id = 'b384e8db-7e20-4b28-ad0e-dd41a0436e9d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b384e8db-7e20-4b28-ad0e-dd41a0436e9d', 'c8a70cdb-3b73-4979-9ebd-2be72e9fb4de', '姉妹', 'しまい', 'chị em', false, 7, 'pdf', 'ok', NULL);

-- ---------- 妹 (MUỘI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5', 'N4', '妹', 'MUỘI', 'em gái', 8, '女', '妹 có bộ 女(phụ nữ) bên trái — người phụ nữ nhỏ tuổi hơn trong nhà, là em gái.', NULL, '{"姉","味"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6170e504-a4ff-47dd-81cf-16e4406a698c', id, 'kun', 'いもうと', true, 7, 'ok', NULL from jp_kanji where id = '7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5', '6170e504-a4ff-47dd-81cf-16e4406a698c', '妹', 'いもうと', 'em gái', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5', '6170e504-a4ff-47dd-81cf-16e4406a698c', '妹さん', 'いもうとさん', 'em gái (cách nói người khác)', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c51a7e40-6097-40d0-bbb4-269d287d0354', id, 'on', 'マイ', false, 7, 'ok', NULL from jp_kanji where id = '7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5', 'c51a7e40-6097-40d0-bbb4-269d287d0354', '姉妹', 'しまい', 'chị em', false, 7, 'pdf', 'ok', NULL);

-- ---------- 春 (XUÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('35c198cc-0013-4437-b01c-11cb67ca504e', 'N4', '春', 'XUÂN', 'mùa xuân', 9, '日', '春 có bộ 日(mặt trời) ở dưới — ánh nắng ấm áp đầu năm là mùa xuân.', NULL, '{"泰","奏"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f4cd7362-22b7-4439-99d9-4f8363a54fe4', id, 'kun', 'はる', true, 7, 'ok', NULL from jp_kanji where id = '35c198cc-0013-4437-b01c-11cb67ca504e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('35c198cc-0013-4437-b01c-11cb67ca504e', 'f4cd7362-22b7-4439-99d9-4f8363a54fe4', '春', 'はる', 'mùa xuân', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '46d050e6-5fe7-45d7-bf9c-a35ea4c273c0', id, 'on', 'シュン', false, 7, 'ok', NULL from jp_kanji where id = '35c198cc-0013-4437-b01c-11cb67ca504e'
on conflict (id) do nothing;

-- ---------- 夏 (HẠ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e049bef4-27af-4b79-b727-dd7f40bf9a22', 'N4', '夏', 'HẠ', 'mùa hè', 10, '夂', '夏 có bộ 夂(bước chân chậm) ở dưới — trời nóng nên bước đi chậm rãi.', NULL, '{"変","复"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'dbe6219f-8297-48d8-a5f9-7d50265f4e3f', id, 'kun', 'なつ', true, 7, 'ok', NULL from jp_kanji where id = 'e049bef4-27af-4b79-b727-dd7f40bf9a22'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e049bef4-27af-4b79-b727-dd7f40bf9a22', 'dbe6219f-8297-48d8-a5f9-7d50265f4e3f', '夏', 'なつ', 'mùa hè', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '220e49f4-83dc-40b4-a591-94c6d7f288f2', id, 'on', 'カ', false, 7, 'ok', NULL from jp_kanji where id = 'e049bef4-27af-4b79-b727-dd7f40bf9a22'
on conflict (id) do nothing;

-- ---------- 秋 (THU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9e161b6f-fef7-4797-bc74-739a979cffdf', 'N4', '秋', 'THU', 'mùa thu', 9, '禾', '秋 có bộ 禾(lúa) bên trái — mùa gặt lúa vàng là mùa thu.', NULL, '{"愁","穐"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '369156c2-d582-4ef0-934a-d79cc6803576', id, 'kun', 'あき', true, 7, 'ok', NULL from jp_kanji where id = '9e161b6f-fef7-4797-bc74-739a979cffdf'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9e161b6f-fef7-4797-bc74-739a979cffdf', '369156c2-d582-4ef0-934a-d79cc6803576', '秋', 'あき', 'mùa thu', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '434e83f7-ae90-46c2-b46d-705e2d2a70c4', id, 'on', 'シュウ', false, 7, 'ok', NULL from jp_kanji where id = '9e161b6f-fef7-4797-bc74-739a979cffdf'
on conflict (id) do nothing;

-- ---------- 冬 (ĐÔNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('b79ee373-fee3-48cd-bda3-bd766bbce707', 'N4', '冬', 'ĐÔNG', 'mùa đông', 5, '冫', '冬 có bộ 冫(băng giá) ở dưới — trời lạnh đóng băng là mùa đông.', NULL, '{"終","務"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'be14bfe0-aa40-4f4f-a2f3-6b87e28a6b83', id, 'kun', 'ふゆ', true, 7, 'ok', NULL from jp_kanji where id = 'b79ee373-fee3-48cd-bda3-bd766bbce707'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b79ee373-fee3-48cd-bda3-bd766bbce707', 'be14bfe0-aa40-4f4f-a2f3-6b87e28a6b83', '冬', 'ふゆ', 'mùa đông', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4450e332-6572-4053-a210-5cb920f0ba3f', id, 'on', 'トウ', false, 7, 'ok', NULL from jp_kanji where id = 'b79ee373-fee3-48cd-bda3-bd766bbce707'
on conflict (id) do nothing;

-- ---------- 雪 (TUYẾT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('fc57b316-3ecd-4df6-b7c3-115e1b83a96f', 'N4', '雪', 'TUYẾT', 'tuyết', 11, '雨', '雪 có bộ 雨(mưa) trên đầu — mưa gặp lạnh đóng thành tuyết.', NULL, '{"雲","電"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9a91ef01-4da3-4fe2-a11f-e1256567939d', id, 'kun', 'ゆき', true, 7, 'ok', NULL from jp_kanji where id = 'fc57b316-3ecd-4df6-b7c3-115e1b83a96f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('fc57b316-3ecd-4df6-b7c3-115e1b83a96f', '9a91ef01-4da3-4fe2-a11f-e1256567939d', '雪', 'ゆき', 'tuyết', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '110c96f3-b42a-40d4-b8d5-4c5a5f2a37d1', id, 'on', 'セツ', false, 7, 'ok', NULL from jp_kanji where id = 'fc57b316-3ecd-4df6-b7c3-115e1b83a96f'
on conflict (id) do nothing;

-- ---------- 海 (HẢI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e14f2a28-a5f8-49bb-8f25-1ae740ff06aa', 'N4', '海', 'HẢI', 'biển', 9, '氵', '海 có bộ 氵(nước) bên trái — vùng nước rộng lớn là biển.', NULL, '{"毎","悔"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3c226ed3-1a48-43d2-b5d6-7e75a6f1da79', id, 'kun', 'うみ', true, 7, 'ok', NULL from jp_kanji where id = 'e14f2a28-a5f8-49bb-8f25-1ae740ff06aa'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e14f2a28-a5f8-49bb-8f25-1ae740ff06aa', '3c226ed3-1a48-43d2-b5d6-7e75a6f1da79', '海', 'うみ', 'biển', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'dace2885-6eee-44f0-993e-85f53955017b', id, 'on', 'カイ', false, 7, 'ok', NULL from jp_kanji where id = 'e14f2a28-a5f8-49bb-8f25-1ae740ff06aa'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e14f2a28-a5f8-49bb-8f25-1ae740ff06aa', 'dace2885-6eee-44f0-993e-85f53955017b', '海外', 'かいがい', 'nước ngoài', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e14f2a28-a5f8-49bb-8f25-1ae740ff06aa', 'dace2885-6eee-44f0-993e-85f53955017b', '海岸', 'かいがん', 'bờ biển', false, 7, 'pdf', 'ok', NULL);

-- ---------- 天 (THIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c39f4787-cc59-44ab-9080-6074d2d13987', 'N4', '天', 'THIÊN', 'trời, bầu trời', 4, '大', '天 có bộ 大(to lớn) với 1 nét ngang trên đầu — thứ to lớn nhất bao trùm là bầu trời.', NULL, '{"夫","太"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6ece050c-31ea-4739-919c-584afd325fa8', id, 'kun', NULL, false, 7, 'ok', NULL from jp_kanji where id = 'c39f4787-cc59-44ab-9080-6074d2d13987'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2cb0daee-866f-4fa3-ac27-556529615558', id, 'on', 'テン', true, 7, 'ok', NULL from jp_kanji where id = 'c39f4787-cc59-44ab-9080-6074d2d13987'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c39f4787-cc59-44ab-9080-6074d2d13987', '2cb0daee-866f-4fa3-ac27-556529615558', '天気', 'てんき', 'thời tiết', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c39f4787-cc59-44ab-9080-6074d2d13987', '2cb0daee-866f-4fa3-ac27-556529615558', '天気予報', 'てんきよほう', 'dự báo thời tiết', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c39f4787-cc59-44ab-9080-6074d2d13987', '2cb0daee-866f-4fa3-ac27-556529615558', '天才', 'てんさい', 'thiên tài, người tài', false, 7, 'pdf', 'ok', NULL);

-- ---------- 空 (KHÔNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6', 'N4', '空', 'KHÔNG', 'trống, bầu trời, hàng không', 8, '穴', '空 có bộ 穴(cái hang, lỗ trống) trên đầu — khoảng không trống rỗng như bầu trời.', NULL, '{"究","突"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '93acb883-e6d7-44a6-b5bc-834e899746b4', id, 'kun', 'そら', true, 7, 'ok', NULL from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6', '93acb883-e6d7-44a6-b5bc-834e899746b4', '空', 'そら', 'bầu trời', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '62fa2eb5-cdbc-4e57-ac2a-2cda4f2c6472', id, 'kun', 'から', false, 7, 'ok', NULL from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6', '62fa2eb5-cdbc-4e57-ac2a-2cda4f2c6472', '空', 'から', 'trống rỗng', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5bfe71ef-bd5f-487e-ad0a-ecef661d6810', id, 'kun', 'あく', false, 7, 'ok', NULL from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0c501d2f-f9a2-443e-b177-6a28c01804cd', id, 'kun', 'あける', false, 7, 'ok', NULL from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fa42f9ad-7c26-4c2b-9388-efd13bf0b8ec', id, 'on', 'クウ', false, 7, 'ok', NULL from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6', 'fa42f9ad-7c26-4c2b-9388-efd13bf0b8ec', '航空便', 'こうくうびん', 'đường hàng không', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6', 'fa42f9ad-7c26-4c2b-9388-efd13bf0b8ec', '空港', 'くうこう', 'sân bay', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6', 'fa42f9ad-7c26-4c2b-9388-efd13bf0b8ec', '空気', 'くうき', 'không khí', false, 7, 'pdf', 'ok', NULL);

-- ---------- 暑 (THỬ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e940785f-6329-40ad-bda3-72e65dda4655', 'N4', '暑', 'THỬ', 'nóng (thời tiết)', 12, '日', '暑 có bộ 日(mặt trời) trên đầu — mặt trời gay gắt là trời nóng.', NULL, '{"署","者"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f6503d49-876b-46e7-a6e8-484c9e9699b6', id, 'kun', 'あつい', true, 7, 'ok', NULL from jp_kanji where id = 'e940785f-6329-40ad-bda3-72e65dda4655'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e940785f-6329-40ad-bda3-72e65dda4655', 'f6503d49-876b-46e7-a6e8-484c9e9699b6', '暑い', 'あつい', 'nóng', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e6ebbf7a-4f30-414e-b0d4-a834abeaf823', id, 'on', 'ショ', false, 7, 'ok', NULL from jp_kanji where id = 'e940785f-6329-40ad-bda3-72e65dda4655'
on conflict (id) do nothing;

-- ---------- 寒 (HÀN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('aca91c94-79c1-4f08-9a1a-2d14892f563a', 'N4', '寒', 'HÀN', 'lạnh', 12, '宀', '寒 có bộ 宀(mái nhà) trên đầu — trời lạnh phải trốn dưới mái nhà.', NULL, '{"塞","寛"}', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'af4d3eae-88cc-4852-8e4d-4eef3a663994', id, 'kun', 'さむい', true, 7, 'ok', NULL from jp_kanji where id = 'aca91c94-79c1-4f08-9a1a-2d14892f563a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('aca91c94-79c1-4f08-9a1a-2d14892f563a', 'af4d3eae-88cc-4852-8e4d-4eef3a663994', '寒い', 'さむい', 'lạnh', false, 7, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1bda344c-76b2-4607-8cef-e476e40e7044', id, 'on', 'カン', false, 7, 'ok', NULL from jp_kanji where id = 'aca91c94-79c1-4f08-9a1a-2d14892f563a'
on conflict (id) do nothing;

-- ---------- Bài tập generated (chỉ cho 16 kanji mới, không sinh lại cho 主) ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 奥 (ÁO) có âm chính là gì?', 'いもうと', 'おとうと', 'おく', 'ゆき', 'おく', 'generated' from jp_kanji where id = '5fd82a0d-e464-42a8-939c-4f14ccd2f8ee';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sâu bên trong, hậu phòng"?', '雪', '秋', '夏', '奥', '奥', 'generated' from jp_kanji where id = '5fd82a0d-e464-42a8-939c-4f14ccd2f8ee';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"奥さん" có nghĩa là gì?', 'vợ', 'anh trai (cách nói người khác)', 'em gái (cách nói người khác)', 'mùa hè', 'vợ', 'generated' from jp_kanji where id = '5fd82a0d-e464-42a8-939c-4f14ccd2f8ee';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 奥様', 'おくさま', 'generated' from jp_kanji where id = '5fd82a0d-e464-42a8-939c-4f14ccd2f8ee';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 妻 (THÊ) có âm chính là gì?', 'トウ', 'つま', 'あける', 'おとうと', 'つま', 'generated' from jp_kanji where id = '338a7486-9580-4e8e-af9d-ef5720c30b5e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vợ"?', '冬', '空', '妻', '海', '妻', 'generated' from jp_kanji where id = '338a7486-9580-4e8e-af9d-ef5720c30b5e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"妻" có nghĩa là gì?', 'nóng', 'lạnh', 'vợ (của mình)', 'anh trai', 'vợ (của mình)', 'generated' from jp_kanji where id = '338a7486-9580-4e8e-af9d-ef5720c30b5e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 妻', 'つま', 'generated' from jp_kanji where id = '338a7486-9580-4e8e-af9d-ef5720c30b5e';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 兄 (HUYNH) có âm chính là gì?', 'あに', 'ふゆ', 'オウ', 'カン', 'あに', 'generated' from jp_kanji where id = '8eda6c2f-fab5-4009-814a-9a44602b2786';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "anh trai"?', '弟', '兄', '天', '妹', '兄', 'generated' from jp_kanji where id = '8eda6c2f-fab5-4009-814a-9a44602b2786';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"兄" có nghĩa là gì?', 'bờ biển', 'anh trai', 'mùa hè', 'đường hàng không', 'anh trai', 'generated' from jp_kanji where id = '8eda6c2f-fab5-4009-814a-9a44602b2786';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お兄さん', 'おにいさん', 'generated' from jp_kanji where id = '8eda6c2f-fab5-4009-814a-9a44602b2786';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 弟 (ĐỆ) có âm chính là gì?', 'つま', 'ケイ', 'あに', 'おとうと', 'おとうと', 'generated' from jp_kanji where id = '5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "em trai"?', '姉', '暑', '奥', '弟', '弟', 'generated' from jp_kanji where id = '5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"弟" có nghĩa là gì?', 'nóng', 'mùa đông', 'em trai', 'chị em', 'em trai', 'generated' from jp_kanji where id = '5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 弟さん', 'おとうとさん', 'generated' from jp_kanji where id = '5f1c9b28-7eef-45b3-98c5-d6b7cc4834a1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 姉 (TỈ) có âm chính là gì?', 'あき', 'キョウ', 'カ', 'あね', 'あね', 'generated' from jp_kanji where id = 'b384e8db-7e20-4b28-ad0e-dd41a0436e9d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chị gái"?', '兄', '寒', '姉', '弟', '姉', 'generated' from jp_kanji where id = 'b384e8db-7e20-4b28-ad0e-dd41a0436e9d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"姉" có nghĩa là gì?', 'lạnh', 'chị em', 'chị gái', 'nước ngoài', 'chị gái', 'generated' from jp_kanji where id = 'b384e8db-7e20-4b28-ad0e-dd41a0436e9d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お姉さん', 'おねえさん', 'generated' from jp_kanji where id = 'b384e8db-7e20-4b28-ad0e-dd41a0436e9d';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 妹 (MUỘI) có âm chính là gì?', 'ダイ', 'うみ', 'ショ', 'いもうと', 'いもうと', 'generated' from jp_kanji where id = '7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "em gái"?', '妹', '春', '冬', '姉', '妹', 'generated' from jp_kanji where id = '7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"妹" có nghĩa là gì?', 'mùa hè', 'trống rỗng', 'em gái', 'biển', 'em gái', 'generated' from jp_kanji where id = '7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 妹さん', 'いもうとさん', 'generated' from jp_kanji where id = '7ac480f4-6b3b-48d9-8f3b-26ccb7a070e5';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 春 (XUÂN) có âm chính là gì?', 'サイ', 'いもうと', 'あき', 'はる', 'はる', 'generated' from jp_kanji where id = '35c198cc-0013-4437-b01c-11cb67ca504e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mùa xuân"?', '雪', '兄', '春', '海', '春', 'generated' from jp_kanji where id = '35c198cc-0013-4437-b01c-11cb67ca504e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"春" có nghĩa là gì?', 'mùa xuân', 'vợ (của người khác)', 'anh trai (cách nói người khác)', 'thiên tài, người tài', 'mùa xuân', 'generated' from jp_kanji where id = '35c198cc-0013-4437-b01c-11cb67ca504e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 春', 'はる', 'generated' from jp_kanji where id = '35c198cc-0013-4437-b01c-11cb67ca504e';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 夏 (HẠ) có âm chính là gì?', 'なつ', 'あつい', 'カ', 'さむい', 'なつ', 'generated' from jp_kanji where id = 'e049bef4-27af-4b79-b727-dd7f40bf9a22';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mùa hè"?', '雪', '海', '妻', '夏', '夏', 'generated' from jp_kanji where id = 'e049bef4-27af-4b79-b727-dd7f40bf9a22';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"夏" có nghĩa là gì?', 'vợ', 'anh trai (cách nói người khác)', 'mùa hè', 'vợ (của người khác)', 'mùa hè', 'generated' from jp_kanji where id = 'e049bef4-27af-4b79-b727-dd7f40bf9a22';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 夏', 'なつ', 'generated' from jp_kanji where id = 'e049bef4-27af-4b79-b727-dd7f40bf9a22';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 秋 (THU) có âm chính là gì?', 'トウ', 'ダイ', 'シ', 'あき', 'あき', 'generated' from jp_kanji where id = '9e161b6f-fef7-4797-bc74-739a979cffdf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mùa thu"?', '暑', '秋', '奥', '弟', '秋', 'generated' from jp_kanji where id = '9e161b6f-fef7-4797-bc74-739a979cffdf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"秋" có nghĩa là gì?', 'vợ', 'em trai', 'đường hàng không', 'mùa thu', 'mùa thu', 'generated' from jp_kanji where id = '9e161b6f-fef7-4797-bc74-739a979cffdf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 秋', 'あき', 'generated' from jp_kanji where id = '9e161b6f-fef7-4797-bc74-739a979cffdf';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 冬 (ĐÔNG) có âm chính là gì?', 'カイ', 'シュウ', 'ふゆ', 'シ', 'ふゆ', 'generated' from jp_kanji where id = 'b79ee373-fee3-48cd-bda3-bd766bbce707';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mùa đông"?', '冬', '奥', '姉', '妻', '冬', 'generated' from jp_kanji where id = 'b79ee373-fee3-48cd-bda3-bd766bbce707';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"冬" có nghĩa là gì?', 'anh trai (cách nói người khác)', 'vợ', 'mùa đông', 'chị gái (cách nói người khác)', 'mùa đông', 'generated' from jp_kanji where id = 'b79ee373-fee3-48cd-bda3-bd766bbce707';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 冬', 'ふゆ', 'generated' from jp_kanji where id = 'b79ee373-fee3-48cd-bda3-bd766bbce707';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 雪 (TUYẾT) có âm chính là gì?', 'つま', 'あに', 'ゆき', 'クウ', 'ゆき', 'generated' from jp_kanji where id = 'fc57b316-3ecd-4df6-b7c3-115e1b83a96f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tuyết"?', '雪', '冬', '姉', '兄', '雪', 'generated' from jp_kanji where id = 'fc57b316-3ecd-4df6-b7c3-115e1b83a96f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"雪" có nghĩa là gì?', 'tuyết', 'bờ biển', 'dự báo thời tiết', 'chị em', 'tuyết', 'generated' from jp_kanji where id = 'fc57b316-3ecd-4df6-b7c3-115e1b83a96f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 雪', 'ゆき', 'generated' from jp_kanji where id = 'fc57b316-3ecd-4df6-b7c3-115e1b83a96f';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 海 (HẢI) có âm chính là gì?', 'カ', 'おく', 'ゆき', 'うみ', 'うみ', 'generated' from jp_kanji where id = 'e14f2a28-a5f8-49bb-8f25-1ae740ff06aa';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "biển"?', '海', '雪', '秋', '暑', '海', 'generated' from jp_kanji where id = 'e14f2a28-a5f8-49bb-8f25-1ae740ff06aa';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"海" có nghĩa là gì?', 'vợ', 'biển', 'tuyết', 'anh em', 'biển', 'generated' from jp_kanji where id = 'e14f2a28-a5f8-49bb-8f25-1ae740ff06aa';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 海外', 'かいがい', 'generated' from jp_kanji where id = 'e14f2a28-a5f8-49bb-8f25-1ae740ff06aa';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 天 (THIÊN) có âm chính là gì?', 'テイ', 'いもうと', 'テン', 'さむい', 'テン', 'generated' from jp_kanji where id = 'c39f4787-cc59-44ab-9080-6074d2d13987';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trời, bầu trời"?', '冬', '空', '天', '弟', '天', 'generated' from jp_kanji where id = 'c39f4787-cc59-44ab-9080-6074d2d13987';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"天気" có nghĩa là gì?', 'mùa đông', 'chị gái (cách nói người khác)', 'anh em', 'thời tiết', 'thời tiết', 'generated' from jp_kanji where id = 'c39f4787-cc59-44ab-9080-6074d2d13987';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 天気予報', 'てんきよほう', 'generated' from jp_kanji where id = 'c39f4787-cc59-44ab-9080-6074d2d13987';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 空 (KHÔNG) có âm chính là gì?', 'おく', 'ケイ', 'そら', 'キョウ', 'そら', 'generated' from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trống, bầu trời, hàng không"?', '雪', '海', '空', '夏', '空', 'generated' from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"空" có nghĩa là gì?', 'dự báo thời tiết', 'bầu trời', 'mùa thu', 'em gái', 'bầu trời', 'generated' from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 空', 'から', 'generated' from jp_kanji where id = 'c3b79c8f-d53e-4051-ba69-a80b0ef3cfd6';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 暑 (THỬ) có âm chính là gì?', 'はる', 'テン', 'あつい', 'ケイ', 'あつい', 'generated' from jp_kanji where id = 'e940785f-6329-40ad-bda3-72e65dda4655';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nóng (thời tiết)"?', '天', '冬', '暑', '兄', '暑', 'generated' from jp_kanji where id = 'e940785f-6329-40ad-bda3-72e65dda4655';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"暑い" có nghĩa là gì?', 'anh trai (cách nói người khác)', 'nóng', 'bầu trời', 'mùa đông', 'nóng', 'generated' from jp_kanji where id = 'e940785f-6329-40ad-bda3-72e65dda4655';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 暑い', 'あつい', 'generated' from jp_kanji where id = 'e940785f-6329-40ad-bda3-72e65dda4655';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 寒 (HÀN) có âm chính là gì?', 'あね', 'さむい', 'つま', 'トウ', 'さむい', 'generated' from jp_kanji where id = 'aca91c94-79c1-4f08-9a1a-2d14892f563a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lạnh"?', '奥', '夏', '兄', '寒', '寒', 'generated' from jp_kanji where id = 'aca91c94-79c1-4f08-9a1a-2d14892f563a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"寒い" có nghĩa là gì?', 'sân bay', 'lạnh', 'mùa xuân', 'nước ngoài', 'lạnh', 'generated' from jp_kanji where id = 'aca91c94-79c1-4f08-9a1a-2d14892f563a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 寒い', 'さむい', 'generated' from jp_kanji where id = 'aca91c94-79c1-4f08-9a1a-2d14892f563a';


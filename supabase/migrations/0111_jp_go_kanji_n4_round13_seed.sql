-- ============================================================
-- jp-go — Kanji N4, round 13 (15 kanji, trang in 14).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- ============================================================

-- ---------- 黒 (HẮC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('777d2325-d5dd-43fc-8c0f-bdee9e07481f', 'N4', '黒', 'HẮC', 'màu đen', 11, '黒', '黒 có bộ 灬(lửa) ở dưới — khói lửa (灬) ám lên thành màu đen.', NULL, '{"里","黙"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '474166d5-d5ab-4bb1-9b8e-39494cb0c72d', id, 'kun', 'くろ', true, 14, 'ok', NULL from jp_kanji where id = '777d2325-d5dd-43fc-8c0f-bdee9e07481f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('777d2325-d5dd-43fc-8c0f-bdee9e07481f', '474166d5-d5ab-4bb1-9b8e-39494cb0c72d', '黒', 'くろ', 'màu đen', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('777d2325-d5dd-43fc-8c0f-bdee9e07481f', '474166d5-d5ab-4bb1-9b8e-39494cb0c72d', '黒い', 'くろい', 'đen', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('777d2325-d5dd-43fc-8c0f-bdee9e07481f', '474166d5-d5ab-4bb1-9b8e-39494cb0c72d', '真っ黒', 'まっくろ', 'đen kịt', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '83ec0473-f780-40dc-b9ce-f815409d6420', id, 'on', 'コク', false, 14, 'ok', NULL from jp_kanji where id = '777d2325-d5dd-43fc-8c0f-bdee9e07481f'
on conflict (id) do nothing;

-- ---------- 赤 (XÍCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('699db4e8-5d62-4d39-93c2-15673429f9d5', 'N4', '赤', 'XÍCH', 'màu đỏ', 7, '赤', '赤 có bộ 大(lớn) ở trên và lửa (biến thể) ở dưới — lửa lớn có màu đỏ.', NULL, '{"亦","赦"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fc7084e3-3109-47d0-bef5-d4145d81d8dd', id, 'kun', 'あか', true, 14, 'ok', NULL from jp_kanji where id = '699db4e8-5d62-4d39-93c2-15673429f9d5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('699db4e8-5d62-4d39-93c2-15673429f9d5', 'fc7084e3-3109-47d0-bef5-d4145d81d8dd', '赤', 'あか', 'màu đỏ', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('699db4e8-5d62-4d39-93c2-15673429f9d5', 'fc7084e3-3109-47d0-bef5-d4145d81d8dd', '赤い', 'あかい', 'đỏ', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('699db4e8-5d62-4d39-93c2-15673429f9d5', 'fc7084e3-3109-47d0-bef5-d4145d81d8dd', '赤ちゃん', 'あかちゃん', 'em bé', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3e151f1e-b44b-439a-ac49-148936258fd1', id, 'on', 'セキ', false, 14, 'ok', NULL from jp_kanji where id = '699db4e8-5d62-4d39-93c2-15673429f9d5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'aa37152e-8ca5-48d9-b3ce-a514a7d62ef1', id, 'on', 'シャク', false, 14, 'ok', NULL from jp_kanji where id = '699db4e8-5d62-4d39-93c2-15673429f9d5'
on conflict (id) do nothing;

-- ---------- 青 (THANH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('400d59e7-96c6-46ff-9686-3b38e00d8564', 'N4', '青', 'THANH', 'màu xanh dương', 8, '青', '青 có bộ 月(biến thể của 円/丹) ở dưới — màu xanh của bầu trời trong.', NULL, '{"清","晴"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2b12c846-16ec-4cd5-8b24-df8fc8fb4828', id, 'kun', 'あお', true, 14, 'ok', NULL from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('400d59e7-96c6-46ff-9686-3b38e00d8564', '2b12c846-16ec-4cd5-8b24-df8fc8fb4828', '青', 'あお', 'màu xanh dương', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0b4ae557-ec1d-4b0b-93d5-01b9da857a9d', id, 'kun', 'あおい', false, 14, 'ok', NULL from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('400d59e7-96c6-46ff-9686-3b38e00d8564', '0b4ae557-ec1d-4b0b-93d5-01b9da857a9d', '青い', 'あおい', 'xanh dương', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a458b21c-830e-4937-a5cc-a4357723b7ba', id, 'on', 'セイ', false, 14, 'ok', NULL from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '919bedeb-25f3-427b-bf19-b8788c6aca40', id, 'on', 'ショウ', false, 14, 'ok', NULL from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564'
on conflict (id) do nothing;

-- ---------- 緑 (LỤC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('67e9006b-2f73-44b6-add7-50044bc8412b', 'N4', '緑', 'LỤC', 'màu xanh lá', 14, '糸', '緑 có bộ 糸(sợi tơ) bên trái — tơ nhuộm màu xanh lá.', NULL, '{"録","縁"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'df3b2d7f-46f5-47f4-a8ae-b59df55c1d69', id, 'kun', 'みどり', true, 14, 'ok', NULL from jp_kanji where id = '67e9006b-2f73-44b6-add7-50044bc8412b'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('67e9006b-2f73-44b6-add7-50044bc8412b', 'df3b2d7f-46f5-47f4-a8ae-b59df55c1d69', '緑', 'みどり', 'màu xanh lá', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ce0da400-1723-45be-b6ed-71062f0c748a', id, 'on', 'リョク', false, 14, 'ok', NULL from jp_kanji where id = '67e9006b-2f73-44b6-add7-50044bc8412b'
on conflict (id) do nothing;

-- ---------- 黄 (HOÀNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7e92f9bf-79d1-4dd8-b452-2bdccba4e06e', 'N4', '黄', 'HOÀNG', 'màu vàng', 11, '黄', '黄 là hình vẽ người đeo miếng ngọc màu vàng — chỉ màu vàng.', NULL, '{"横","広"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1667f1e8-adb1-4d63-bd18-f949bacf00f8', id, 'kun', 'き', true, 14, 'ok', NULL from jp_kanji where id = '7e92f9bf-79d1-4dd8-b452-2bdccba4e06e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7e92f9bf-79d1-4dd8-b452-2bdccba4e06e', '1667f1e8-adb1-4d63-bd18-f949bacf00f8', '黄色', 'きいろ', 'màu vàng', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4d921a05-e21f-40cc-9e8c-f54324edae12', id, 'on', 'オウ', false, 14, 'ok', NULL from jp_kanji where id = '7e92f9bf-79d1-4dd8-b452-2bdccba4e06e'
on conflict (id) do nothing;

-- ---------- 色 (SẮC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('69b95d9b-e179-4daa-9cd3-f8af8ddeed07', 'N4', '色', 'SẮC', 'màu sắc', 6, '色', '色 có bộ 刀(dao, biến thể) ở trên và 卩(người quỳ) ở dưới — sắc diện, màu sắc.', NULL, '{"絶","巴"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '35d43cf6-3268-4b52-bdd3-24ac6c91dc20', id, 'kun', 'いろ', true, 14, 'ok', NULL from jp_kanji where id = '69b95d9b-e179-4daa-9cd3-f8af8ddeed07'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('69b95d9b-e179-4daa-9cd3-f8af8ddeed07', '35d43cf6-3268-4b52-bdd3-24ac6c91dc20', '色', 'いろ', 'màu sắc', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('69b95d9b-e179-4daa-9cd3-f8af8ddeed07', '35d43cf6-3268-4b52-bdd3-24ac6c91dc20', '茶色', 'ちゃいろ', 'màu nâu', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '59b2a3ea-8793-4875-8dc2-71f0d50ca913', id, 'on', 'シキ', false, 14, 'ok', 'Cách đọc ghép đặc biệt (jukujikun), không tách rời theo âm ON liệt kê thông thường.' from jp_kanji where id = '69b95d9b-e179-4daa-9cd3-f8af8ddeed07'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('69b95d9b-e179-4daa-9cd3-f8af8ddeed07', '59b2a3ea-8793-4875-8dc2-71f0d50ca913', '景色', 'けしき', 'phong cảnh', true, 14, 'pdf', 'ok', 'Đọc ghép đặc biệt, không suy trực tiếp từ âm ON liệt kê.');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('69b95d9b-e179-4daa-9cd3-f8af8ddeed07', '59b2a3ea-8793-4875-8dc2-71f0d50ca913', '金色', 'こんじき', 'màu vàng kim', true, 14, 'pdf', 'ok', 'Đọc ghép đặc biệt, không suy trực tiếp từ âm ON liệt kê.');
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'da03068d-9bbf-4b42-874e-3948a956530b', id, 'on', 'ショク', false, 14, 'ok', NULL from jp_kanji where id = '69b95d9b-e179-4daa-9cd3-f8af8ddeed07'
on conflict (id) do nothing;

-- ---------- 丸 (HOÀN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('09b92995-16a8-4700-85e9-0f7d1222f66c', 'N4', '丸', 'HOÀN', 'vòng tròn, viên tròn', 3, '丶', '丸 là biến thể của 九 thêm nét chấm — viên tròn nhỏ.', NULL, '{"九","丹"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '85bcf849-ff82-4c7c-82fe-953d320f9197', id, 'kun', 'まる', true, 14, 'ok', NULL from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('09b92995-16a8-4700-85e9-0f7d1222f66c', '85bcf849-ff82-4c7c-82fe-953d320f9197', '丸', 'まる', 'vòng tròn', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'df4d2bc6-99ab-49ca-9548-707c5504d7f6', id, 'kun', 'まるい', false, 14, 'ok', NULL from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('09b92995-16a8-4700-85e9-0f7d1222f66c', 'df4d2bc6-99ab-49ca-9548-707c5504d7f6', '丸い', 'まるい', 'tròn', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9f267e4f-1783-4293-8a1f-52dd4a54ed32', id, 'kun', 'まるめる', false, 14, 'ok', NULL from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6f89785d-6ff0-44a7-9e7e-aeac1b93e153', id, 'on', 'ガン', false, 14, 'ok', NULL from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c'
on conflict (id) do nothing;

-- ---------- 心 (TÂM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('bd84f98a-b973-48fb-bba8-b5462d75f917', 'N4', '心', 'TÂM', 'tâm, trái tim, tấm lòng', 4, '心', '心 là hình vẽ trái tim — chỉ tâm trí, tấm lòng.', NULL, '{"必","忘"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7f342689-0d74-4317-a06f-db1385b2d338', id, 'kun', 'こころ', true, 14, 'ok', NULL from jp_kanji where id = 'bd84f98a-b973-48fb-bba8-b5462d75f917'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bd84f98a-b973-48fb-bba8-b5462d75f917', '7f342689-0d74-4317-a06f-db1385b2d338', '心から', 'こころから', 'từ tận trái tim', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '25c1fbcd-afc3-4d6f-8059-950be1fb46ee', id, 'on', 'シン', false, 14, 'ok', NULL from jp_kanji where id = 'bd84f98a-b973-48fb-bba8-b5462d75f917'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bd84f98a-b973-48fb-bba8-b5462d75f917', '25c1fbcd-afc3-4d6f-8059-950be1fb46ee', '熱心', 'ねっしん', 'nhiệt tình', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bd84f98a-b973-48fb-bba8-b5462d75f917', '25c1fbcd-afc3-4d6f-8059-950be1fb46ee', '心配する', 'しんぱいする', 'lo lắng', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bd84f98a-b973-48fb-bba8-b5462d75f917', '25c1fbcd-afc3-4d6f-8059-950be1fb46ee', '安心する', 'あんしんする', 'yên tâm', false, 14, 'pdf', 'ok', NULL);

-- ---------- 自 (TỰ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1e0d1f5e-ca85-479c-9e22-2ac5df45050a', 'N4', '自', 'TỰ', 'tự bản thân, tự nhiên', 6, '自', '自 là hình vẽ cái mũi — người xưa chỉ vào mũi khi nói về bản thân mình.', NULL, '{"白","目"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7d3ed35d-dd3d-42de-9878-b893073724f9', id, 'kun', 'みずから', false, 14, 'ok', NULL from jp_kanji where id = '1e0d1f5e-ca85-479c-9e22-2ac5df45050a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fc5b9cb2-d0d3-4228-9328-ea2a9f76e824', id, 'on', 'シ', false, 14, 'ok', NULL from jp_kanji where id = '1e0d1f5e-ca85-479c-9e22-2ac5df45050a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1e0d1f5e-ca85-479c-9e22-2ac5df45050a', 'fc5b9cb2-d0d3-4228-9328-ea2a9f76e824', '自然', 'しぜん', 'tự nhiên', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'be4ffd1a-b29e-40ed-b306-9cfb31cbdf5b', id, 'on', 'ジ', true, 14, 'ok', NULL from jp_kanji where id = '1e0d1f5e-ca85-479c-9e22-2ac5df45050a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1e0d1f5e-ca85-479c-9e22-2ac5df45050a', 'be4ffd1a-b29e-40ed-b306-9cfb31cbdf5b', '自分', 'じぶん', 'bản thân mình', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1e0d1f5e-ca85-479c-9e22-2ac5df45050a', 'be4ffd1a-b29e-40ed-b306-9cfb31cbdf5b', '自由', 'じゆう', 'tự do', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1e0d1f5e-ca85-479c-9e22-2ac5df45050a', 'be4ffd1a-b29e-40ed-b306-9cfb31cbdf5b', '自転車', 'じてんしゃ', 'xe đạp', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1e0d1f5e-ca85-479c-9e22-2ac5df45050a', 'be4ffd1a-b29e-40ed-b306-9cfb31cbdf5b', '自動車', 'じどうしゃ', 'xe ô tô', false, 14, 'pdf', 'ok', NULL);

-- ---------- 声 (THANH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d2374242-4860-4d80-b9c7-0ad2a76d3b80', 'N4', '声', 'THANH', 'tiếng, âm thanh', 7, '士', '声 có bộ 士 ở trên — âm thanh phát ra khi nói.', NULL, '{"士","壱"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '91326455-cb12-44c5-906c-ecb2b374b650', id, 'kun', 'こえ', true, 14, 'ok', NULL from jp_kanji where id = 'd2374242-4860-4d80-b9c7-0ad2a76d3b80'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d2374242-4860-4d80-b9c7-0ad2a76d3b80', '91326455-cb12-44c5-906c-ecb2b374b650', '声', 'こえ', 'tiếng', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '98b781db-9f4a-4896-8307-488fcaa6f33b', id, 'on', 'セイ', false, 14, 'ok', NULL from jp_kanji where id = 'd2374242-4860-4d80-b9c7-0ad2a76d3b80'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8f88088e-29b7-4bfe-90d1-905e26c36692', id, 'on', 'ショウ', false, 14, 'ok', NULL from jp_kanji where id = 'd2374242-4860-4d80-b9c7-0ad2a76d3b80'
on conflict (id) do nothing;

-- ---------- 服 (PHỤC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c08a5f04-a5f5-4756-8786-02162947ce3b', 'N4', '服', 'PHỤC', 'quần áo, phục tùng', 8, '月', '服 có bộ 月(肉, thân thể) bên trái — quần áo mặc lên thân thể.', NULL, '{"報","部"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '00854a63-d354-4bc6-b65c-17e057bb4688', id, 'kun', NULL, false, 14, 'ok', NULL from jp_kanji where id = 'c08a5f04-a5f5-4756-8786-02162947ce3b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '06713cde-48e1-4994-af88-88d623167652', id, 'on', 'フク', true, 14, 'ok', NULL from jp_kanji where id = 'c08a5f04-a5f5-4756-8786-02162947ce3b'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c08a5f04-a5f5-4756-8786-02162947ce3b', '06713cde-48e1-4994-af88-88d623167652', '服', 'ふく', 'quần áo', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c08a5f04-a5f5-4756-8786-02162947ce3b', '06713cde-48e1-4994-af88-88d623167652', '洋服', 'ようふく', 'Âu phục', false, 14, 'pdf', 'ok', NULL);

-- ---------- 毛 (MAO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('a5370ef1-1d1e-4640-8090-2e8402ace1d1', 'N4', '毛', 'MAO', 'lông, tóc, len', 4, '毛', '毛 là hình vẽ sợi lông — chỉ lông, tóc.', NULL, '{"手","尾"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '467a0cdf-a204-4cce-8e43-27c99486f24f', id, 'kun', 'け', true, 14, 'ok', NULL from jp_kanji where id = 'a5370ef1-1d1e-4640-8090-2e8402ace1d1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a5370ef1-1d1e-4640-8090-2e8402ace1d1', '467a0cdf-a204-4cce-8e43-27c99486f24f', '毛', 'け', 'lông', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a5370ef1-1d1e-4640-8090-2e8402ace1d1', '467a0cdf-a204-4cce-8e43-27c99486f24f', '毛糸', 'けいと', 'sợi len', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd8970c5d-368a-4ccd-b66c-c5d51f4c19be', id, 'on', 'モウ', false, 14, 'ok', NULL from jp_kanji where id = 'a5370ef1-1d1e-4640-8090-2e8402ace1d1'
on conflict (id) do nothing;

-- ---------- 糸 (MỊCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('71854f31-7c52-4993-9a7f-8b221fb0336a', 'N4', '糸', 'MỊCH', 'sợi chỉ, sợi tơ', 6, '糸', '糸 là hình vẽ cuộn tơ — chỉ sợi chỉ, sợi tơ.', NULL, '{"系","紀"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3827b77a-959f-4028-97a1-ca524d93e669', id, 'kun', 'いと', true, 14, 'ok', NULL from jp_kanji where id = '71854f31-7c52-4993-9a7f-8b221fb0336a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('71854f31-7c52-4993-9a7f-8b221fb0336a', '3827b77a-959f-4028-97a1-ca524d93e669', '糸', 'いと', 'sợi chỉ', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('71854f31-7c52-4993-9a7f-8b221fb0336a', '3827b77a-959f-4028-97a1-ca524d93e669', '毛糸', 'けいと', 'sợi len', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3bcf36f0-fa56-495f-b4e2-f1ebb2166241', id, 'on', 'シ', false, 14, 'ok', NULL from jp_kanji where id = '71854f31-7c52-4993-9a7f-8b221fb0336a'
on conflict (id) do nothing;

-- ---------- 科 (KHOA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('47eabcb4-16c8-4ab1-84a0-aa91e83c78bb', 'N4', '科', 'KHOA', 'môn học, khoa, ngành', 9, '禾', '科 có bộ 禾(lúa) bên trái — phân loại (斗, cái đấu đong) thành môn khoa học.', NULL, '{"料","秒"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a6df7dc8-7e64-45b7-a39b-3776ad44aacf', id, 'kun', NULL, false, 14, 'ok', NULL from jp_kanji where id = '47eabcb4-16c8-4ab1-84a0-aa91e83c78bb'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4c8a06a5-408e-4ed7-bf5f-78be1948da75', id, 'on', 'カ', true, 14, 'ok', NULL from jp_kanji where id = '47eabcb4-16c8-4ab1-84a0-aa91e83c78bb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('47eabcb4-16c8-4ab1-84a0-aa91e83c78bb', '4c8a06a5-408e-4ed7-bf5f-78be1948da75', '科学', 'かがく', 'khoa học', false, 14, 'pdf', 'ok', NULL);

-- ---------- 鳴 (MINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('59fab9cb-b598-4945-8b9d-87c34ef73cc8', 'N4', '鳴', 'MINH', 'kêu, hót (động vật)', 14, '鳥', '鳴 có bộ 鳥(chim) bên phải — chim (鳥) kêu bằng miệng (口).', NULL, '{"鳥","嗚"}', 14, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'abe19a59-767a-43ea-93a2-ab4036d9135c', id, 'kun', 'なる', true, 14, 'ok', NULL from jp_kanji where id = '59fab9cb-b598-4945-8b9d-87c34ef73cc8'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('59fab9cb-b598-4945-8b9d-87c34ef73cc8', 'abe19a59-767a-43ea-93a2-ab4036d9135c', '鳴る', 'なる', 'reo, kêu, hót', false, 14, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b005f821-627a-4601-a73e-ee1f1f098d8b', id, 'on', 'メイ', false, 14, 'ok', NULL from jp_kanji where id = '59fab9cb-b598-4945-8b9d-87c34ef73cc8'
on conflict (id) do nothing;

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 黒 (HẮC) có âm chính là gì?', 'ショウ', 'くろ', 'セイ', 'き', 'くろ', 'generated' from jp_kanji where id = '777d2325-d5dd-43fc-8c0f-bdee9e07481f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "màu đen"?', '緑', '黄', '黒', '色', '黒', 'generated' from jp_kanji where id = '777d2325-d5dd-43fc-8c0f-bdee9e07481f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"黒" có nghĩa là gì?', 'màu xanh lá', 'màu đen', 'em bé', 'xe đạp', 'màu đen', 'generated' from jp_kanji where id = '777d2325-d5dd-43fc-8c0f-bdee9e07481f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 黒い', 'くろい', 'generated' from jp_kanji where id = '777d2325-d5dd-43fc-8c0f-bdee9e07481f';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 赤 (XÍCH) có âm chính là gì?', 'シ', 'セキ', 'あか', 'ショウ', 'あか', 'generated' from jp_kanji where id = '699db4e8-5d62-4d39-93c2-15673429f9d5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "màu đỏ"?', '赤', '黄', '声', '毛', '赤', 'generated' from jp_kanji where id = '699db4e8-5d62-4d39-93c2-15673429f9d5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"赤" có nghĩa là gì?', 'màu đỏ', 'màu nâu', 'tự nhiên', 'màu xanh dương', 'màu đỏ', 'generated' from jp_kanji where id = '699db4e8-5d62-4d39-93c2-15673429f9d5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 赤い', 'あかい', 'generated' from jp_kanji where id = '699db4e8-5d62-4d39-93c2-15673429f9d5';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 青 (THANH) có âm chính là gì?', 'あお', 'ショウ', 'シン', 'け', 'あお', 'generated' from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "màu xanh dương"?', '青', '丸', '糸', '自', '青', 'generated' from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"青" có nghĩa là gì?', 'màu xanh dương', 'vòng tròn', 'đen kịt', 'màu vàng', 'màu xanh dương', 'generated' from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 青い', 'あおい', 'generated' from jp_kanji where id = '400d59e7-96c6-46ff-9686-3b38e00d8564';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 緑 (LỤC) có âm chính là gì?', 'みどり', 'モウ', 'シキ', 'ジ', 'みどり', 'generated' from jp_kanji where id = '67e9006b-2f73-44b6-add7-50044bc8412b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "màu xanh lá"?', '心', '赤', '緑', '科', '緑', 'generated' from jp_kanji where id = '67e9006b-2f73-44b6-add7-50044bc8412b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"緑" có nghĩa là gì?', 'màu đỏ', 'vòng tròn', 'màu xanh lá', 'lo lắng', 'màu xanh lá', 'generated' from jp_kanji where id = '67e9006b-2f73-44b6-add7-50044bc8412b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 緑', 'みどり', 'generated' from jp_kanji where id = '67e9006b-2f73-44b6-add7-50044bc8412b';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 黄 (HOÀNG) có âm chính là gì?', 'まるい', 'セイ', 'き', 'け', 'き', 'generated' from jp_kanji where id = '7e92f9bf-79d1-4dd8-b452-2bdccba4e06e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "màu vàng"?', '黄', '黒', '服', '糸', '黄', 'generated' from jp_kanji where id = '7e92f9bf-79d1-4dd8-b452-2bdccba4e06e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"黄色" có nghĩa là gì?', 'màu sắc', 'màu xanh dương', 'sợi len', 'màu vàng', 'màu vàng', 'generated' from jp_kanji where id = '7e92f9bf-79d1-4dd8-b452-2bdccba4e06e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 黄色', 'きいろ', 'generated' from jp_kanji where id = '7e92f9bf-79d1-4dd8-b452-2bdccba4e06e';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 色 (SẮC) có âm chính là gì?', 'リョク', 'いと', 'いろ', 'あお', 'いろ', 'generated' from jp_kanji where id = '69b95d9b-e179-4daa-9cd3-f8af8ddeed07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "màu sắc"?', '色', '緑', '心', '赤', '色', 'generated' from jp_kanji where id = '69b95d9b-e179-4daa-9cd3-f8af8ddeed07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"色" có nghĩa là gì?', 'lo lắng', 'màu sắc', 'màu vàng kim', 'màu xanh dương', 'màu sắc', 'generated' from jp_kanji where id = '69b95d9b-e179-4daa-9cd3-f8af8ddeed07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 茶色', 'ちゃいろ', 'generated' from jp_kanji where id = '69b95d9b-e179-4daa-9cd3-f8af8ddeed07';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 丸 (HOÀN) có âm chính là gì?', 'こころ', 'ショウ', 'まるめる', 'まる', 'まる', 'generated' from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vòng tròn, viên tròn"?', '色', '声', '鳴', '丸', '丸', 'generated' from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"丸" có nghĩa là gì?', 'màu vàng kim', 'vòng tròn', 'xe ô tô', 'tròn', 'vòng tròn', 'generated' from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 丸い', 'まるい', 'generated' from jp_kanji where id = '09b92995-16a8-4700-85e9-0f7d1222f66c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 心 (TÂM) có âm chính là gì?', 'いろ', 'オウ', 'こころ', 'メイ', 'こころ', 'generated' from jp_kanji where id = 'bd84f98a-b973-48fb-bba8-b5462d75f917';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tâm, trái tim, tấm lòng"?', '心', '赤', '科', '丸', '心', 'generated' from jp_kanji where id = 'bd84f98a-b973-48fb-bba8-b5462d75f917';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"心から" có nghĩa là gì?', 'đen kịt', 'từ tận trái tim', 'tự do', 'xanh dương', 'từ tận trái tim', 'generated' from jp_kanji where id = 'bd84f98a-b973-48fb-bba8-b5462d75f917';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 熱心', 'ねっしん', 'generated' from jp_kanji where id = 'bd84f98a-b973-48fb-bba8-b5462d75f917';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 自 (TỰ) có âm chính là gì?', 'ジ', 'セイ', 'き', 'モウ', 'ジ', 'generated' from jp_kanji where id = '1e0d1f5e-ca85-479c-9e22-2ac5df45050a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tự bản thân, tự nhiên"?', '丸', '緑', '毛', '自', '自', 'generated' from jp_kanji where id = '1e0d1f5e-ca85-479c-9e22-2ac5df45050a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"自然" có nghĩa là gì?', 'tròn', 'reo, kêu, hót', 'tự nhiên', 'tự do', 'tự nhiên', 'generated' from jp_kanji where id = '1e0d1f5e-ca85-479c-9e22-2ac5df45050a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 自分', 'じぶん', 'generated' from jp_kanji where id = '1e0d1f5e-ca85-479c-9e22-2ac5df45050a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 声 (THANH) có âm chính là gì?', 'こえ', 'シャク', 'コク', 'セキ', 'こえ', 'generated' from jp_kanji where id = 'd2374242-4860-4d80-b9c7-0ad2a76d3b80';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tiếng, âm thanh"?', '声', '服', '鳴', '黒', '声', 'generated' from jp_kanji where id = 'd2374242-4860-4d80-b9c7-0ad2a76d3b80';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"声" có nghĩa là gì?', 'màu đen', 'vòng tròn', 'màu nâu', 'tiếng', 'tiếng', 'generated' from jp_kanji where id = 'd2374242-4860-4d80-b9c7-0ad2a76d3b80';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 声', 'こえ', 'generated' from jp_kanji where id = 'd2374242-4860-4d80-b9c7-0ad2a76d3b80';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 服 (PHỤC) có âm chính là gì?', 'セキ', 'シキ', 'ショウ', 'フク', 'フク', 'generated' from jp_kanji where id = 'c08a5f04-a5f5-4756-8786-02162947ce3b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "quần áo, phục tùng"?', '服', '丸', '声', '科', '服', 'generated' from jp_kanji where id = 'c08a5f04-a5f5-4756-8786-02162947ce3b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"服" có nghĩa là gì?', 'tròn', 'đen kịt', 'quần áo', 'xe ô tô', 'quần áo', 'generated' from jp_kanji where id = 'c08a5f04-a5f5-4756-8786-02162947ce3b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 洋服', 'ようふく', 'generated' from jp_kanji where id = 'c08a5f04-a5f5-4756-8786-02162947ce3b';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 毛 (MAO) có âm chính là gì?', 'こえ', 'け', 'フク', 'まるい', 'け', 'generated' from jp_kanji where id = 'a5370ef1-1d1e-4640-8090-2e8402ace1d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lông, tóc, len"?', '赤', '青', '毛', '色', '毛', 'generated' from jp_kanji where id = 'a5370ef1-1d1e-4640-8090-2e8402ace1d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"毛" có nghĩa là gì?', 'xanh dương', 'tròn', 'lông', 'từ tận trái tim', 'lông', 'generated' from jp_kanji where id = 'a5370ef1-1d1e-4640-8090-2e8402ace1d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 毛糸', 'けいと', 'generated' from jp_kanji where id = 'a5370ef1-1d1e-4640-8090-2e8402ace1d1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 糸 (MỊCH) có âm chính là gì?', 'オウ', 'カ', 'いと', 'シャク', 'いと', 'generated' from jp_kanji where id = '71854f31-7c52-4993-9a7f-8b221fb0336a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sợi chỉ, sợi tơ"?', '糸', '青', '黒', '自', '糸', 'generated' from jp_kanji where id = '71854f31-7c52-4993-9a7f-8b221fb0336a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"糸" có nghĩa là gì?', 'đen kịt', 'sợi chỉ', 'màu xanh lá', 'màu vàng kim', 'sợi chỉ', 'generated' from jp_kanji where id = '71854f31-7c52-4993-9a7f-8b221fb0336a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 毛糸', 'けいと', 'generated' from jp_kanji where id = '71854f31-7c52-4993-9a7f-8b221fb0336a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 科 (KHOA) có âm chính là gì?', 'カ', 'セイ', 'モウ', 'こころ', 'カ', 'generated' from jp_kanji where id = '47eabcb4-16c8-4ab1-84a0-aa91e83c78bb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "môn học, khoa, ngành"?', '赤', '黄', '服', '科', '科', 'generated' from jp_kanji where id = '47eabcb4-16c8-4ab1-84a0-aa91e83c78bb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"科学" có nghĩa là gì?', 'bản thân mình', 'quần áo', 'em bé', 'khoa học', 'khoa học', 'generated' from jp_kanji where id = '47eabcb4-16c8-4ab1-84a0-aa91e83c78bb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 科学', 'かがく', 'generated' from jp_kanji where id = '47eabcb4-16c8-4ab1-84a0-aa91e83c78bb';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 鳴 (MINH) có âm chính là gì?', 'みずから', 'いと', 'あお', 'なる', 'なる', 'generated' from jp_kanji where id = '59fab9cb-b598-4945-8b9d-87c34ef73cc8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "kêu, hót (động vật)"?', '科', '自', '服', '鳴', '鳴', 'generated' from jp_kanji where id = '59fab9cb-b598-4945-8b9d-87c34ef73cc8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"鳴る" có nghĩa là gì?', 'sợi len', 'xanh dương', 'reo, kêu, hót', 'Âu phục', 'reo, kêu, hót', 'generated' from jp_kanji where id = '59fab9cb-b598-4945-8b9d-87c34ef73cc8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 鳴る', 'なる', 'generated' from jp_kanji where id = '59fab9cb-b598-4945-8b9d-87c34ef73cc8';


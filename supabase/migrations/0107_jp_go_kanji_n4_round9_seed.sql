-- ============================================================
-- jp-go — Kanji N4, round 9 (17 kanji, trang in 10).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- Vài từ ghép trùng kanji đã seed trước (主人公,動物園,旅館,台所,
-- 台風,天才) — cách PDF liệt kê chéo bình thường, giữ nguyên.
-- ============================================================

-- ---------- 池 (TRÌ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('83e97c80-3400-40d5-a4e8-6a2541640ccc', 'N4', '池', 'TRÌ', 'ao, hồ', 6, '氵', '池 có bộ 氵(nước) bên trái — vũng nước nhỏ là ao, hồ.', NULL, '{"地","他"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6e63ca9b-c583-41d7-8907-e9470d295384', id, 'kun', 'いけ', true, 10, 'ok', NULL from jp_kanji where id = '83e97c80-3400-40d5-a4e8-6a2541640ccc'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('83e97c80-3400-40d5-a4e8-6a2541640ccc', '6e63ca9b-c583-41d7-8907-e9470d295384', '池', 'いけ', 'ao', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '78c88580-bbeb-4b2f-b5ac-670e78652b47', id, 'on', 'チ', false, 10, 'ok', NULL from jp_kanji where id = '83e97c80-3400-40d5-a4e8-6a2541640ccc'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('83e97c80-3400-40d5-a4e8-6a2541640ccc', '78c88580-bbeb-4b2f-b5ac-670e78652b47', '電池', 'でんち', 'cục pin', false, 10, 'pdf', 'ok', NULL);

-- ---------- 公 (CÔNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7bbec73a-8c75-4493-a965-2d75c85220eb', 'N4', '公', 'CÔNG', 'công cộng, công khai', 4, '八', '公 có bộ 八(chia đều) trên đầu — chia đều cho mọi người là việc công.', NULL, '{"分","松"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c589b0e0-e051-4d05-9ef8-4aea59d0c2ea', id, 'kun', 'おおやけ', true, 10, 'ok', NULL from jp_kanji where id = '7bbec73a-8c75-4493-a965-2d75c85220eb'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4ebae386-a81b-4502-96b8-d46b0b7b6b2b', id, 'on', 'コウ', false, 10, 'ok', NULL from jp_kanji where id = '7bbec73a-8c75-4493-a965-2d75c85220eb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7bbec73a-8c75-4493-a965-2d75c85220eb', '4ebae386-a81b-4502-96b8-d46b0b7b6b2b', '公園', 'こうえん', 'công viên', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7bbec73a-8c75-4493-a965-2d75c85220eb', '4ebae386-a81b-4502-96b8-d46b0b7b6b2b', '主人公', 'しゅじんこう', 'nhân vật chính', false, 10, 'pdf', 'ok', NULL);

-- ---------- 園 (VIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e85c8937-f53a-4e6e-a51b-2768e67d124c', 'N4', '園', 'VIÊN', 'vườn, khu vườn', 13, '囗', '園 có bộ 囗(bao quanh) — khu đất được rào lại trồng cây, là vườn.', NULL, '{"国","囲"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '69ce687d-feb5-472d-8807-882070de8a68', id, 'kun', NULL, false, 10, 'ok', NULL from jp_kanji where id = 'e85c8937-f53a-4e6e-a51b-2768e67d124c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '68adce3f-d745-4ef9-871c-15395ac60690', id, 'on', 'エン', true, 10, 'ok', NULL from jp_kanji where id = 'e85c8937-f53a-4e6e-a51b-2768e67d124c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e85c8937-f53a-4e6e-a51b-2768e67d124c', '68adce3f-d745-4ef9-871c-15395ac60690', '動物園', 'どうぶつえん', 'vườn bách thú', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e85c8937-f53a-4e6e-a51b-2768e67d124c', '68adce3f-d745-4ef9-871c-15395ac60690', '幼稚園', 'ようちえん', 'trường mẫu giáo', false, 10, 'pdf', 'ok', NULL);

-- ---------- 洋 (DƯƠNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('41d3e99d-6a4c-43d5-b659-c8682831c7e7', 'N4', '洋', 'DƯƠNG', 'phương Tây, đại dương', 9, '氵', '洋 có bộ 氵(nước) bên trái — đại dương rộng lớn (羊, cừu — hình ảnh sóng gợn), gắn với văn hóa phương Tây du nhập qua biển.', NULL, '{"羊","洗"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5dd721ed-67bb-409b-bc28-ce244d65b0ed', id, 'kun', NULL, false, 10, 'ok', NULL from jp_kanji where id = '41d3e99d-6a4c-43d5-b659-c8682831c7e7'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'dd8c266c-5cc9-48a4-837c-cbd5c0fac06c', id, 'on', 'ヨウ', true, 10, 'ok', NULL from jp_kanji where id = '41d3e99d-6a4c-43d5-b659-c8682831c7e7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('41d3e99d-6a4c-43d5-b659-c8682831c7e7', 'dd8c266c-5cc9-48a4-837c-cbd5c0fac06c', '洋服', 'ようふく', 'quần áo phương Tây', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('41d3e99d-6a4c-43d5-b659-c8682831c7e7', 'dd8c266c-5cc9-48a4-837c-cbd5c0fac06c', '洋食', 'ようしょく', 'món ăn Tây', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('41d3e99d-6a4c-43d5-b659-c8682831c7e7', 'dd8c266c-5cc9-48a4-837c-cbd5c0fac06c', '西洋化する', 'せいようかする', 'Tây hóa', false, 10, 'pdf', 'ok', NULL);

-- ---------- 辺 (BIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('28936357-40ee-4cc0-b57e-a4bb2b99a5a8', 'N4', '辺', 'BIÊN', 'vùng, bên cạnh', 5, '辶', '辺 có bộ 辶(đi) — đi men theo (đường) bên cạnh, ven vùng.', NULL, '{"返","近"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '93fd9c9d-15fb-409f-8186-a4d2645a0b73', id, 'kun', 'あたり', true, 10, 'ok', NULL from jp_kanji where id = '28936357-40ee-4cc0-b57e-a4bb2b99a5a8'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '035ee47f-02b1-4ad0-b676-f960a83db9cd', id, 'on', 'ヘン', false, 10, 'ok', NULL from jp_kanji where id = '28936357-40ee-4cc0-b57e-a4bb2b99a5a8'
on conflict (id) do nothing;

-- ---------- 交 (GIAO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('0cbe6b48-a3f4-42c9-bc57-fe961dc63d23', 'N4', '交', 'GIAO', 'giao nhau, giao tiếp', 6, '亠', '交 giống hình 2 chân bắt chéo nhau — giao nhau, giao thoa.', NULL, '{"校","効"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '63c52ecb-a658-41b6-ae0f-8049b252c8a0', id, 'kun', 'まじわる', false, 10, 'ok', NULL from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9737d424-ed13-40e9-8ba3-c004a4be1072', id, 'kun', 'まじえる', false, 10, 'ok', NULL from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e4112ad1-6dfd-415b-990d-009fc6150d68', id, 'kun', 'まじる', false, 10, 'ok', NULL from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '84b740b9-5adf-434d-8867-4eb7970bef24', id, 'kun', 'まざる', false, 10, 'ok', NULL from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b1fedfa5-25d7-4e7c-acaa-cf2920d9f276', id, 'kun', 'まぜる', false, 10, 'ok', NULL from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2f04318c-19eb-449e-8880-9598bf81535b', id, 'kun', 'かわす', false, 10, 'ok', NULL from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '30a55316-aad8-4f52-97ae-88b90940d6b7', id, 'on', 'コウ', true, 10, 'ok', NULL from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0cbe6b48-a3f4-42c9-bc57-fe961dc63d23', '30a55316-aad8-4f52-97ae-88b90940d6b7', '交通', 'こうつう', 'giao thông', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0cbe6b48-a3f4-42c9-bc57-fe961dc63d23', '30a55316-aad8-4f52-97ae-88b90940d6b7', '交差点', 'こうさてん', 'chỗ giao nhau', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0cbe6b48-a3f4-42c9-bc57-fe961dc63d23', '30a55316-aad8-4f52-97ae-88b90940d6b7', '交番', 'こうばん', 'đồn cảnh sát', false, 10, 'pdf', 'ok', NULL);

-- ---------- 漢 (HÁN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('afc6be18-529b-49dc-94a8-62993c3df7c0', 'N4', '漢', 'HÁN', 'Hán (Trung Quốc, chữ Hán)', 13, '氵', '漢 có bộ 氵(nước) bên trái — tên 1 con sông lớn ở Trung Quốc, sau chỉ nền văn hóa Hán.', NULL, '{"漠","難"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ded6cc55-35b6-492b-afbd-2bd49c47fbba', id, 'kun', NULL, false, 10, 'ok', NULL from jp_kanji where id = 'afc6be18-529b-49dc-94a8-62993c3df7c0'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b57ca6b9-c797-41a4-ba2e-68ca294de3a4', id, 'on', 'カン', true, 10, 'ok', NULL from jp_kanji where id = 'afc6be18-529b-49dc-94a8-62993c3df7c0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('afc6be18-529b-49dc-94a8-62993c3df7c0', 'b57ca6b9-c797-41a4-ba2e-68ca294de3a4', '漢字', 'かんじ', 'chữ Kanji', false, 10, 'pdf', 'ok', NULL);

-- ---------- 数 (SỐ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('23a70059-b559-4b9f-8df9-e00efb302d32', 'N4', '数', 'SỐ', 'số, đếm', 13, '攵', '数 có bộ 攵(gõ nhẹ, hành động) bên phải — đếm bằng cách gõ, tính số.', NULL, '{"敗","楼"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'dd5fec18-abf3-48f4-84d7-8cf42012ef4c', id, 'kun', 'かず', true, 10, 'ok', NULL from jp_kanji where id = '23a70059-b559-4b9f-8df9-e00efb302d32'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3b3841a7-8ed0-4c0b-bd42-59a29198d860', id, 'kun', 'かぞえる', false, 10, 'ok', NULL from jp_kanji where id = '23a70059-b559-4b9f-8df9-e00efb302d32'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('23a70059-b559-4b9f-8df9-e00efb302d32', '3b3841a7-8ed0-4c0b-bd42-59a29198d860', '数える', 'かぞえる', 'đếm, tính', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '957d2ec8-9f6b-46d3-a0d9-edb52ee36bbb', id, 'on', 'スウ', false, 10, 'ok', NULL from jp_kanji where id = '23a70059-b559-4b9f-8df9-e00efb302d32'
on conflict (id) do nothing;

-- ---------- 旅 (LỮ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('84a6af5e-f255-40fe-b1e6-ae0145306158', 'N4', '旅', 'LỮ', 'du lịch, lữ hành', 10, '方', '旅 có bộ 方(hướng) bên trái — đi theo nhiều hướng khác nhau là du lịch.', NULL, '{"族","旋"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f4cb0ad2-3cec-4c87-93ba-c36a3d1148ec', id, 'kun', 'たび', true, 10, 'ok', NULL from jp_kanji where id = '84a6af5e-f255-40fe-b1e6-ae0145306158'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd9b56cd0-229f-4afb-b081-6682db12708f', id, 'on', 'リョ', false, 10, 'ok', NULL from jp_kanji where id = '84a6af5e-f255-40fe-b1e6-ae0145306158'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a6af5e-f255-40fe-b1e6-ae0145306158', 'd9b56cd0-229f-4afb-b081-6682db12708f', '旅行', 'りょこう', 'du lịch', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a6af5e-f255-40fe-b1e6-ae0145306158', 'd9b56cd0-229f-4afb-b081-6682db12708f', '旅館', 'りょかん', 'nhà trọ kiểu Nhật', false, 10, 'pdf', 'ok', NULL);

-- ---------- 薬 (DƯỢC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('8816a857-dcd9-442a-85de-9464413ce720', 'N4', '薬', 'DƯỢC', 'thuốc', 16, '艹', '薬 có bộ 艹(cỏ) trên đầu — thuốc xưa được bào chế từ cây cỏ.', NULL, '{"楽","策"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f1b580de-37ed-4152-b5e7-2601d7351c1d', id, 'kun', 'くすり', true, 10, 'ok', NULL from jp_kanji where id = '8816a857-dcd9-442a-85de-9464413ce720'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('8816a857-dcd9-442a-85de-9464413ce720', 'f1b580de-37ed-4152-b5e7-2601d7351c1d', '薬', 'くすり', 'thuốc', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'de691da2-9f56-48cb-b5a6-0f1ca87ad3c1', id, 'on', 'ヤク', false, 10, 'ok', NULL from jp_kanji where id = '8816a857-dcd9-442a-85de-9464413ce720'
on conflict (id) do nothing;

-- ---------- 台 (ĐÀI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9091c2f6-773e-4d53-870a-04d210edcf3c', 'N4', '台', 'ĐÀI', 'đài, bệ, cái (đếm máy móc)', 5, '口', '台 có bộ 口(miệng/khung) ở dưới — bệ đỡ, đài đứng vững.', NULL, '{"治","始"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b6349cb8-3d5a-4b5e-aeec-9c54cb80238f', id, 'on', 'ダイ', true, 10, 'ok', NULL from jp_kanji where id = '9091c2f6-773e-4d53-870a-04d210edcf3c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9091c2f6-773e-4d53-870a-04d210edcf3c', 'b6349cb8-3d5a-4b5e-aeec-9c54cb80238f', '台所', 'だいどころ', 'nhà bếp', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7c1086e8-43cd-44b0-a26a-0543a2d6b8fc', id, 'on', 'タイ', false, 10, 'ok', NULL from jp_kanji where id = '9091c2f6-773e-4d53-870a-04d210edcf3c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9091c2f6-773e-4d53-870a-04d210edcf3c', '7c1086e8-43cd-44b0-a26a-0543a2d6b8fc', '台風', 'たいふう', 'cơn bão', false, 10, 'pdf', 'ok', NULL);

-- ---------- 里 (LÍ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('35b59a2b-7d4b-4987-aa60-dbe246e6c8ae', 'N4', '里', 'LÍ', 'dặm (đơn vị đo), làng quê', 7, '里', '里 có bộ 田(ruộng) trên 土(đất) — 1 vùng đất ruộng là làng quê, đơn vị đo khoảng cách xưa.', NULL, '{"理","野"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5f0678b4-b07c-4577-9e07-8dea58db4273', id, 'kun', 'さと', true, 10, 'ok', NULL from jp_kanji where id = '35b59a2b-7d4b-4987-aa60-dbe246e6c8ae'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '30dd0a3f-6a95-4fa7-8bc4-0776f5dd0fa2', id, 'on', 'リ', false, 10, 'ok', NULL from jp_kanji where id = '35b59a2b-7d4b-4987-aa60-dbe246e6c8ae'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('35b59a2b-7d4b-4987-aa60-dbe246e6c8ae', '30dd0a3f-6a95-4fa7-8bc4-0776f5dd0fa2', '万里の長城', 'ばんりのちょうじょう', 'Vạn Lý Trường Thành', false, 10, 'pdf', 'ok', NULL);

-- ---------- 才 (TÀI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('dce83ef0-ce91-4052-ab51-d0d8a49f4340', 'N4', '才', 'TÀI', 'tài năng, tuổi (đếm tuổi)', 3, '扌', '才 giống chữ 手(tay) rút gọn — bàn tay khéo léo, có tài.', NULL, '{"寸","村"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd9549452-6e54-45e6-9e45-98798d7bd4e5', id, 'kun', NULL, false, 10, 'ok', NULL from jp_kanji where id = 'dce83ef0-ce91-4052-ab51-d0d8a49f4340'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3918bde6-1091-4d00-8d5a-d0f2fa0ccb54', id, 'on', 'サイ', true, 10, 'ok', NULL from jp_kanji where id = 'dce83ef0-ce91-4052-ab51-d0d8a49f4340'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('dce83ef0-ce91-4052-ab51-d0d8a49f4340', '3918bde6-1091-4d00-8d5a-d0f2fa0ccb54', '天才', 'てんさい', 'thiên tài, người tài', false, 10, 'pdf', 'ok', NULL);

-- ---------- 去 (KHỨ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4c226a43-1789-4532-bf2c-4ca6836a64a9', 'N4', '去', 'KHỨ', 'đi qua, quá khứ', 5, '厶', '去 có bộ 厶(riêng tư) dưới 土(đất) — rời khỏi mảnh đất của mình, ra đi.', NULL, '{"法","却"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '580c6485-dc14-419c-a85d-96500a7446f0', id, 'kun', 'さる', true, 10, 'ok', NULL from jp_kanji where id = '4c226a43-1789-4532-bf2c-4ca6836a64a9'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'aa5dc297-7e77-496e-b1a0-c32b29d7bdb0', id, 'on', 'キョ', false, 10, 'ok', NULL from jp_kanji where id = '4c226a43-1789-4532-bf2c-4ca6836a64a9'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4c226a43-1789-4532-bf2c-4ca6836a64a9', 'aa5dc297-7e77-496e-b1a0-c32b29d7bdb0', '去年', 'きょねん', 'năm ngoái', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6b07a37f-d25e-4aff-9f0a-6432c1081288', id, 'on', 'コ', false, 10, 'ok', NULL from jp_kanji where id = '4c226a43-1789-4532-bf2c-4ca6836a64a9'
on conflict (id) do nothing;

-- ---------- 若 (NHƯỢC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('5285aa58-142a-411a-b20b-fb93c1c7dc52', 'N4', '若', 'NHƯỢC', 'trẻ, non trẻ', 8, '艹', '若 có bộ 艹(cỏ) trên đầu — cây cỏ non, mềm, ý chỉ còn trẻ.', NULL, '{"苦","草"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4955cad7-a5d3-4d0b-8189-9ab796bb00fb', id, 'kun', 'わかい', true, 10, 'ok', NULL from jp_kanji where id = '5285aa58-142a-411a-b20b-fb93c1c7dc52'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5285aa58-142a-411a-b20b-fb93c1c7dc52', '4955cad7-a5d3-4d0b-8189-9ab796bb00fb', '若い', 'わかい', 'trẻ', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8c7c8532-0d51-4455-acb9-8cda8cd31853', id, 'on', NULL, false, 10, 'ok', NULL from jp_kanji where id = '5285aa58-142a-411a-b20b-fb93c1c7dc52'
on conflict (id) do nothing;

-- ---------- 短 (ĐOẢN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('fd1780a8-efb3-4d6d-9126-5e5585ba5a94', 'N4', '短', 'ĐOẢN', 'ngắn', 12, '矢', '短 có bộ 矢(mũi tên) bên trái — mũi tên ngắn hơn cây cung.', NULL, '{"知","豆"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1508ffcd-e659-4f96-b49a-a5ec121473b2', id, 'kun', 'みじかい', true, 10, 'ok', NULL from jp_kanji where id = 'fd1780a8-efb3-4d6d-9126-5e5585ba5a94'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('fd1780a8-efb3-4d6d-9126-5e5585ba5a94', '1508ffcd-e659-4f96-b49a-a5ec121473b2', '短い', 'みじかい', 'ngắn', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '858a3d59-2c0d-4bc1-afbc-b294ce9d44be', id, 'on', 'タン', false, 10, 'ok', NULL from jp_kanji where id = 'fd1780a8-efb3-4d6d-9126-5e5585ba5a94'
on conflict (id) do nothing;

-- ---------- 弱 (NHƯỢC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('19521d1b-9100-4f87-b351-8f7f02a1229d', 'N4', '弱', 'NHƯỢC', 'yếu, yếu đuối', 10, '弓', '弱 có 2 bộ 弓(cây cung) song song, lông vũ rũ xuống — hình ảnh yếu ớt, không căng được.', NULL, '{"強","張"}', 10, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '338d89ca-a022-4a02-8168-365ff5c7de03', id, 'kun', 'よわい', true, 10, 'ok', NULL from jp_kanji where id = '19521d1b-9100-4f87-b351-8f7f02a1229d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('19521d1b-9100-4f87-b351-8f7f02a1229d', '338d89ca-a022-4a02-8168-365ff5c7de03', '弱い', 'よわい', 'yếu', false, 10, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '04a0d51b-1db5-49b7-b900-a8162e8b420c', id, 'on', 'ジャク', false, 10, 'ok', NULL from jp_kanji where id = '19521d1b-9100-4f87-b351-8f7f02a1229d'
on conflict (id) do nothing;

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 池 (TRÌ) có âm chính là gì?', 'いけ', 'ヤク', 'コウ', 'ヨウ', 'いけ', 'generated' from jp_kanji where id = '83e97c80-3400-40d5-a4e8-6a2541640ccc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ao, hồ"?', '園', '辺', '里', '池', '池', 'generated' from jp_kanji where id = '83e97c80-3400-40d5-a4e8-6a2541640ccc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"池" có nghĩa là gì?', 'nhân vật chính', 'nhà bếp', 'vườn bách thú', 'ao', 'ao', 'generated' from jp_kanji where id = '83e97c80-3400-40d5-a4e8-6a2541640ccc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 電池', 'でんち', 'generated' from jp_kanji where id = '83e97c80-3400-40d5-a4e8-6a2541640ccc';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 公 (CÔNG) có âm chính là gì?', 'タン', 'さる', 'ジャク', 'おおやけ', 'おおやけ', 'generated' from jp_kanji where id = '7bbec73a-8c75-4493-a965-2d75c85220eb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "công cộng, công khai"?', '短', '公', '旅', '里', '公', 'generated' from jp_kanji where id = '7bbec73a-8c75-4493-a965-2d75c85220eb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"公園" có nghĩa là gì?', 'ngắn', 'chữ Kanji', 'công viên', 'vườn bách thú', 'công viên', 'generated' from jp_kanji where id = '7bbec73a-8c75-4493-a965-2d75c85220eb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 主人公', 'しゅじんこう', 'generated' from jp_kanji where id = '7bbec73a-8c75-4493-a965-2d75c85220eb';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 園 (VIÊN) có âm chính là gì?', 'まじわる', 'エン', 'わかい', 'たび', 'エン', 'generated' from jp_kanji where id = 'e85c8937-f53a-4e6e-a51b-2768e67d124c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vườn, khu vườn"?', '園', '漢', '短', '洋', '園', 'generated' from jp_kanji where id = 'e85c8937-f53a-4e6e-a51b-2768e67d124c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"動物園" có nghĩa là gì?', 'cơn bão', 'thuốc', 'nhà trọ kiểu Nhật', 'vườn bách thú', 'vườn bách thú', 'generated' from jp_kanji where id = 'e85c8937-f53a-4e6e-a51b-2768e67d124c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 幼稚園', 'ようちえん', 'generated' from jp_kanji where id = 'e85c8937-f53a-4e6e-a51b-2768e67d124c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 洋 (DƯƠNG) có âm chính là gì?', 'コウ', 'ヘン', 'ヨウ', 'リョ', 'ヨウ', 'generated' from jp_kanji where id = '41d3e99d-6a4c-43d5-b659-c8682831c7e7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "phương Tây, đại dương"?', '洋', '交', '若', '台', '洋', 'generated' from jp_kanji where id = '41d3e99d-6a4c-43d5-b659-c8682831c7e7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"洋服" có nghĩa là gì?', 'vườn bách thú', 'đồn cảnh sát', 'trẻ', 'quần áo phương Tây', 'quần áo phương Tây', 'generated' from jp_kanji where id = '41d3e99d-6a4c-43d5-b659-c8682831c7e7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 洋食', 'ようしょく', 'generated' from jp_kanji where id = '41d3e99d-6a4c-43d5-b659-c8682831c7e7';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 辺 (BIÊN) có âm chính là gì?', 'おおやけ', 'ヘン', 'スウ', 'あたり', 'あたり', 'generated' from jp_kanji where id = '28936357-40ee-4cc0-b57e-a4bb2b99a5a8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vùng, bên cạnh"?', '才', '公', '薬', '辺', '辺', 'generated' from jp_kanji where id = '28936357-40ee-4cc0-b57e-a4bb2b99a5a8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"辺" có nghĩa là gì?', 'nhân vật chính', 'vùng, bên cạnh', 'cơn bão', 'Tây hóa', 'vùng, bên cạnh', 'generated' from jp_kanji where id = '28936357-40ee-4cc0-b57e-a4bb2b99a5a8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 辺', 'あたり', 'generated' from jp_kanji where id = '28936357-40ee-4cc0-b57e-a4bb2b99a5a8';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 交 (GIAO) có âm chính là gì?', 'スウ', 'おおやけ', 'リョ', 'コウ', 'コウ', 'generated' from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giao nhau, giao tiếp"?', '旅', '台', '洋', '交', '交', 'generated' from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"交通" có nghĩa là gì?', 'giao thông', 'du lịch', 'cục pin', 'chỗ giao nhau', 'giao thông', 'generated' from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 交差点', 'こうさてん', 'generated' from jp_kanji where id = '0cbe6b48-a3f4-42c9-bc57-fe961dc63d23';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 漢 (HÁN) có âm chính là gì?', 'エン', 'よわい', 'タン', 'カン', 'カン', 'generated' from jp_kanji where id = 'afc6be18-529b-49dc-94a8-62993c3df7c0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "Hán (Trung Quốc, chữ Hán)"?', '漢', '交', '洋', '園', '漢', 'generated' from jp_kanji where id = 'afc6be18-529b-49dc-94a8-62993c3df7c0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"漢字" có nghĩa là gì?', 'Tây hóa', 'chữ Kanji', 'trường mẫu giáo', 'công viên', 'chữ Kanji', 'generated' from jp_kanji where id = 'afc6be18-529b-49dc-94a8-62993c3df7c0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 漢字', 'かんじ', 'generated' from jp_kanji where id = 'afc6be18-529b-49dc-94a8-62993c3df7c0';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 数 (SỐ) có âm chính là gì?', 'リ', 'かず', 'エン', 'いけ', 'かず', 'generated' from jp_kanji where id = '23a70059-b559-4b9f-8df9-e00efb302d32';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "số, đếm"?', '数', '公', '台', '若', '数', 'generated' from jp_kanji where id = '23a70059-b559-4b9f-8df9-e00efb302d32';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"数える" có nghĩa là gì?', 'ngắn', 'đếm, tính', 'món ăn Tây', 'cơn bão', 'đếm, tính', 'generated' from jp_kanji where id = '23a70059-b559-4b9f-8df9-e00efb302d32';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 数える', 'かぞえる', 'generated' from jp_kanji where id = '23a70059-b559-4b9f-8df9-e00efb302d32';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 旅 (LỮ) có âm chính là gì?', 'タイ', 'ヘン', 'まじえる', 'たび', 'たび', 'generated' from jp_kanji where id = '84a6af5e-f255-40fe-b1e6-ae0145306158';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "du lịch, lữ hành"?', '若', '旅', '池', '辺', '旅', 'generated' from jp_kanji where id = '84a6af5e-f255-40fe-b1e6-ae0145306158';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"旅行" có nghĩa là gì?', 'chữ Kanji', 'trường mẫu giáo', 'du lịch', 'nhân vật chính', 'du lịch', 'generated' from jp_kanji where id = '84a6af5e-f255-40fe-b1e6-ae0145306158';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 旅館', 'りょかん', 'generated' from jp_kanji where id = '84a6af5e-f255-40fe-b1e6-ae0145306158';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 薬 (DƯỢC) có âm chính là gì?', 'くすり', 'わかい', 'タン', 'まざる', 'くすり', 'generated' from jp_kanji where id = '8816a857-dcd9-442a-85de-9464413ce720';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thuốc"?', '里', '洋', '漢', '薬', '薬', 'generated' from jp_kanji where id = '8816a857-dcd9-442a-85de-9464413ce720';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"薬" có nghĩa là gì?', 'Tây hóa', 'món ăn Tây', 'trường mẫu giáo', 'thuốc', 'thuốc', 'generated' from jp_kanji where id = '8816a857-dcd9-442a-85de-9464413ce720';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 薬', 'くすり', 'generated' from jp_kanji where id = '8816a857-dcd9-442a-85de-9464413ce720';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 台 (ĐÀI) có âm chính là gì?', 'いけ', 'あたり', 'まざる', 'ダイ', 'ダイ', 'generated' from jp_kanji where id = '9091c2f6-773e-4d53-870a-04d210edcf3c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đài, bệ, cái (đếm máy móc)"?', '短', '薬', '旅', '台', '台', 'generated' from jp_kanji where id = '9091c2f6-773e-4d53-870a-04d210edcf3c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"台所" có nghĩa là gì?', 'nhà trọ kiểu Nhật', 'thuốc', 'ngắn', 'nhà bếp', 'nhà bếp', 'generated' from jp_kanji where id = '9091c2f6-773e-4d53-870a-04d210edcf3c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 台風', 'たいふう', 'generated' from jp_kanji where id = '9091c2f6-773e-4d53-870a-04d210edcf3c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 里 (LÍ) có âm chính là gì?', 'コウ', 'さと', 'かぞえる', 'エン', 'さと', 'generated' from jp_kanji where id = '35b59a2b-7d4b-4987-aa60-dbe246e6c8ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dặm (đơn vị đo), làng quê"?', '里', '薬', '若', '洋', '里', 'generated' from jp_kanji where id = '35b59a2b-7d4b-4987-aa60-dbe246e6c8ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"万里の長城" có nghĩa là gì?', 'chỗ giao nhau', 'Tây hóa', 'nhà bếp', 'Vạn Lý Trường Thành', 'Vạn Lý Trường Thành', 'generated' from jp_kanji where id = '35b59a2b-7d4b-4987-aa60-dbe246e6c8ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 万里の長城', 'ばんりのちょうじょう', 'generated' from jp_kanji where id = '35b59a2b-7d4b-4987-aa60-dbe246e6c8ae';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 才 (TÀI) có âm chính là gì?', 'サイ', 'コ', 'あたり', 'キョ', 'サイ', 'generated' from jp_kanji where id = 'dce83ef0-ce91-4052-ab51-d0d8a49f4340';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tài năng, tuổi (đếm tuổi)"?', '若', '去', '公', '才', '才', 'generated' from jp_kanji where id = 'dce83ef0-ce91-4052-ab51-d0d8a49f4340';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"天才" có nghĩa là gì?', 'món ăn Tây', 'công viên', 'thiên tài, người tài', 'ngắn', 'thiên tài, người tài', 'generated' from jp_kanji where id = 'dce83ef0-ce91-4052-ab51-d0d8a49f4340';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 天才', 'てんさい', 'generated' from jp_kanji where id = 'dce83ef0-ce91-4052-ab51-d0d8a49f4340';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 去 (KHỨ) có âm chính là gì?', 'スウ', 'さる', 'ヨウ', 'リ', 'さる', 'generated' from jp_kanji where id = '4c226a43-1789-4532-bf2c-4ca6836a64a9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đi qua, quá khứ"?', '池', '才', '数', '去', '去', 'generated' from jp_kanji where id = '4c226a43-1789-4532-bf2c-4ca6836a64a9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"去年" có nghĩa là gì?', 'năm ngoái', 'du lịch', 'vườn bách thú', 'đồn cảnh sát', 'năm ngoái', 'generated' from jp_kanji where id = '4c226a43-1789-4532-bf2c-4ca6836a64a9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 去年', 'きょねん', 'generated' from jp_kanji where id = '4c226a43-1789-4532-bf2c-4ca6836a64a9';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 若 (NHƯỢC) có âm chính là gì?', 'ジャク', 'いけ', 'わかい', 'コウ', 'わかい', 'generated' from jp_kanji where id = '5285aa58-142a-411a-b20b-fb93c1c7dc52';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trẻ, non trẻ"?', '若', '弱', '池', '才', '若', 'generated' from jp_kanji where id = '5285aa58-142a-411a-b20b-fb93c1c7dc52';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"若い" có nghĩa là gì?', 'trường mẫu giáo', 'thuốc', 'trẻ', 'thiên tài, người tài', 'trẻ', 'generated' from jp_kanji where id = '5285aa58-142a-411a-b20b-fb93c1c7dc52';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 若い', 'わかい', 'generated' from jp_kanji where id = '5285aa58-142a-411a-b20b-fb93c1c7dc52';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 短 (ĐOẢN) có âm chính là gì?', 'みじかい', 'たび', 'くすり', 'かず', 'みじかい', 'generated' from jp_kanji where id = 'fd1780a8-efb3-4d6d-9126-5e5585ba5a94';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ngắn"?', '交', '薬', '短', '園', '短', 'generated' from jp_kanji where id = 'fd1780a8-efb3-4d6d-9126-5e5585ba5a94';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"短い" có nghĩa là gì?', 'ngắn', 'đồn cảnh sát', 'nhân vật chính', 'quần áo phương Tây', 'ngắn', 'generated' from jp_kanji where id = 'fd1780a8-efb3-4d6d-9126-5e5585ba5a94';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 短い', 'みじかい', 'generated' from jp_kanji where id = 'fd1780a8-efb3-4d6d-9126-5e5585ba5a94';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 弱 (NHƯỢC) có âm chính là gì?', 'チ', 'カン', 'よわい', 'ダイ', 'よわい', 'generated' from jp_kanji where id = '19521d1b-9100-4f87-b351-8f7f02a1229d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "yếu, yếu đuối"?', '里', '交', '辺', '弱', '弱', 'generated' from jp_kanji where id = '19521d1b-9100-4f87-b351-8f7f02a1229d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"弱い" có nghĩa là gì?', 'năm ngoái', 'chữ Kanji', 'yếu', 'chỗ giao nhau', 'yếu', 'generated' from jp_kanji where id = '19521d1b-9100-4f87-b351-8f7f02a1229d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 弱い', 'よわい', 'generated' from jp_kanji where id = '19521d1b-9100-4f87-b351-8f7f02a1229d';


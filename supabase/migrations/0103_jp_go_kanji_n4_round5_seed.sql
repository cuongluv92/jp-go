-- ============================================================
-- jp-go — Kanji N4, round 5 (15 kanji, trang in 6).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- ============================================================

-- ---------- 題 (ĐỀ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4ab6fa6e-d6af-4019-bf5a-7f61ef33397f', 'N4', '題', 'ĐỀ', 'đề bài, chủ đề', 18, '頁', '題 có bộ 頁(đầu, trang) — đề bài luôn đứng ở đầu trang.', NULL, '{"類","額"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1f4aa134-2003-41e1-b153-3b8b089a5f07', id, 'kun', NULL, false, 6, 'ok', NULL from jp_kanji where id = '4ab6fa6e-d6af-4019-bf5a-7f61ef33397f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f7fa121f-3c94-475c-b108-38f61773b4f9', id, 'on', 'ダイ', true, 6, 'ok', NULL from jp_kanji where id = '4ab6fa6e-d6af-4019-bf5a-7f61ef33397f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab6fa6e-d6af-4019-bf5a-7f61ef33397f', 'f7fa121f-3c94-475c-b108-38f61773b4f9', '問題', 'もんだい', 'vấn đề', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab6fa6e-d6af-4019-bf5a-7f61ef33397f', 'f7fa121f-3c94-475c-b108-38f61773b4f9', '飲み放題', 'のみほうだい', 'buffet đồ uống', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab6fa6e-d6af-4019-bf5a-7f61ef33397f', 'f7fa121f-3c94-475c-b108-38f61773b4f9', '食べ放題', 'たべほうだい', 'buffet đồ ăn', false, 6, 'pdf', 'ok', NULL);

-- ---------- 紙 (CHỈ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('23f0b40d-cde0-4292-9f21-db10c4fccf69', 'N4', '紙', 'CHỈ', 'giấy', 10, '糸', '紙 có bộ 糸(sợi tơ) — giấy xưa được làm từ sợi tơ, sợi cây ép mỏng.', NULL, '{"終","経"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '38d5440c-b9d0-4370-af5c-cf0ab19b2f43', id, 'kun', 'かみ', true, 6, 'ok', NULL from jp_kanji where id = '23f0b40d-cde0-4292-9f21-db10c4fccf69'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('23f0b40d-cde0-4292-9f21-db10c4fccf69', '38d5440c-b9d0-4370-af5c-cf0ab19b2f43', '紙', 'かみ', 'giấy', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('23f0b40d-cde0-4292-9f21-db10c4fccf69', '38d5440c-b9d0-4370-af5c-cf0ab19b2f43', '手紙', 'てがみ', 'thư', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '733759af-09b9-4c06-9d73-d600cc48f2e8', id, 'on', 'シ', false, 6, 'ok', NULL from jp_kanji where id = '23f0b40d-cde0-4292-9f21-db10c4fccf69'
on conflict (id) do nothing;

-- ---------- 英 (ANH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9e6bee30-ca97-46c1-915a-f67e0d70935c', 'N4', '英', 'ANH', 'Anh (quốc), tài giỏi', 8, '艹', '英 có bộ 艹(cỏ) trên đầu — bông hoa đẹp nhất, ví như người tài giỏi.', NULL, '{"映","央"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '93376d8a-1da2-4213-bc6e-0e267a500461', id, 'kun', NULL, false, 6, 'ok', NULL from jp_kanji where id = '9e6bee30-ca97-46c1-915a-f67e0d70935c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5e9cc062-375c-4653-bd82-b97887372fe5', id, 'on', 'エイ', true, 6, 'ok', NULL from jp_kanji where id = '9e6bee30-ca97-46c1-915a-f67e0d70935c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9e6bee30-ca97-46c1-915a-f67e0d70935c', '5e9cc062-375c-4653-bd82-b97887372fe5', '英語', 'えいご', 'tiếng Anh', false, 6, 'pdf', 'ok', NULL);

-- ---------- 語 (NGỮ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d3882906-bc02-44b5-a722-ab1dabea2b07', 'N4', '語', 'NGỮ', 'ngôn ngữ, lời nói', 14, '言', '語 có bộ 言(lời nói) — ngôn ngữ được tạo nên từ lời nói.', NULL, '{"話","誤"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8c1d5c4d-72ce-402d-bd23-3be82b12a8ff', id, 'kun', 'かたる', false, 6, 'ok', NULL from jp_kanji where id = 'd3882906-bc02-44b5-a722-ab1dabea2b07'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eae5a45e-2461-4901-81b6-1ba40e760b71', id, 'kun', 'かたらう', false, 6, 'ok', NULL from jp_kanji where id = 'd3882906-bc02-44b5-a722-ab1dabea2b07'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6f40469f-cacd-402a-a96f-c9b7c42d5fb7', id, 'on', 'ゴ', true, 6, 'ok', NULL from jp_kanji where id = 'd3882906-bc02-44b5-a722-ab1dabea2b07'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d3882906-bc02-44b5-a722-ab1dabea2b07', '6f40469f-cacd-402a-a96f-c9b7c42d5fb7', '何語', 'なにご', 'ngôn ngữ nào', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d3882906-bc02-44b5-a722-ab1dabea2b07', '6f40469f-cacd-402a-a96f-c9b7c42d5fb7', '日本語', 'にほんご', 'tiếng Nhật', false, 6, 'pdf', 'ok', NULL);

-- ---------- 待 (ĐÃI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3d06df59-0d35-4f6b-a130-7b3abf08987e', 'N4', '待', 'ĐÃI', 'chờ đợi, đối đãi', 9, '彳', '待 có bộ 彳(bước chân) — đứng chờ đợi ai đó trên đường.', NULL, '{"持","特"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4d6735f9-cf7e-44ae-a5c7-ba580c5b02e1', id, 'kun', 'まつ', true, 6, 'ok', NULL from jp_kanji where id = '3d06df59-0d35-4f6b-a130-7b3abf08987e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3d06df59-0d35-4f6b-a130-7b3abf08987e', '4d6735f9-cf7e-44ae-a5c7-ba580c5b02e1', '待つ', 'まつ', 'đợi', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3d06df59-0d35-4f6b-a130-7b3abf08987e', '4d6735f9-cf7e-44ae-a5c7-ba580c5b02e1', 'お待ちください', 'おまちください', 'xin hãy đợi', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3d06df59-0d35-4f6b-a130-7b3abf08987e', '4d6735f9-cf7e-44ae-a5c7-ba580c5b02e1', 'お待たせしました', 'おまたせしました', 'cảm ơn vì đã chờ đợi', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e9a68947-c2df-4631-9cde-df22d9f3cdbf', id, 'on', 'タイ', false, 6, 'ok', NULL from jp_kanji where id = '3d06df59-0d35-4f6b-a130-7b3abf08987e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3d06df59-0d35-4f6b-a130-7b3abf08987e', 'e9a68947-c2df-4631-9cde-df22d9f3cdbf', '招待する', 'しょうたいする', 'chiêu đãi, mời', false, 6, 'pdf', 'ok', NULL);

-- ---------- 開 (KHAI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ae20e714-7d86-45fa-83cc-20e3106f6202', 'N4', '開', 'KHAI', 'mở, khai mở', 12, '門', '開 có bộ 門(cánh cửa) — mở toang cánh cửa ra.', NULL, '{"閉","間"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8416afeb-a354-4222-9d35-7d4e0b4286f6', id, 'kun', 'あく', true, 6, 'ok', NULL from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ae20e714-7d86-45fa-83cc-20e3106f6202', '8416afeb-a354-4222-9d35-7d4e0b4286f6', '開く', 'あく', '(cái gì đó) mở', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fb7e9d65-7bfb-49ee-ac6a-78a3cc81985e', id, 'kun', 'あける', false, 6, 'ok', NULL from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ae20e714-7d86-45fa-83cc-20e3106f6202', 'fb7e9d65-7bfb-49ee-ac6a-78a3cc81985e', '開ける', 'あける', 'mở ra (cái gì đó)', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd197054f-5617-4a10-b541-07002446238a', id, 'kun', 'ひらく', false, 6, 'ok', NULL from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ae20e714-7d86-45fa-83cc-20e3106f6202', 'd197054f-5617-4a10-b541-07002446238a', '開く', 'ひらく', '(cái gì đó) mở', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0aa5ea46-72fe-4ed9-8a15-7395c24eceab', id, 'kun', 'ひらける', false, 6, 'ok', NULL from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ae20e714-7d86-45fa-83cc-20e3106f6202', '0aa5ea46-72fe-4ed9-8a15-7395c24eceab', '開ける', 'ひらける', '(cái gì đó) mở', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3c3fa06d-9d60-492e-bacf-40cc7920df47', id, 'on', 'カイ', false, 6, 'ok', NULL from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ae20e714-7d86-45fa-83cc-20e3106f6202', '3c3fa06d-9d60-492e-bacf-40cc7920df47', '開発する', 'かいはつする', 'khai phá, phát triển', false, 6, 'pdf', 'ok', NULL);

-- ---------- 閉 (BẾ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('258c610e-8acf-49ca-91bb-f24b1d67afae', 'N4', '閉', 'BẾ', 'đóng, đóng cửa', 11, '門', '閉 có bộ 門(cánh cửa) và 才(chốt) — chốt cửa lại là đóng.', NULL, '{"開","閲"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '62831397-fa96-4a9f-85b3-d45909cec496', id, 'kun', 'しめる', true, 6, 'ok', NULL from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('258c610e-8acf-49ca-91bb-f24b1d67afae', '62831397-fa96-4a9f-85b3-d45909cec496', '閉める', 'しめる', 'đóng (cái gì đó)', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '94d72df7-c40d-482c-81c3-5577d6160441', id, 'kun', 'しまる', false, 6, 'ok', NULL from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('258c610e-8acf-49ca-91bb-f24b1d67afae', '94d72df7-c40d-482c-81c3-5577d6160441', '閉まる', 'しまる', 'đóng lại', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ccc526e9-86da-45c3-bbea-4a3e123ef5cd', id, 'kun', 'とじる', false, 6, 'ok', NULL from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('258c610e-8acf-49ca-91bb-f24b1d67afae', 'ccc526e9-86da-45c3-bbea-4a3e123ef5cd', '閉じる', 'とじる', '(cái gì đó) đóng lại', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0decd7e5-f8e7-4367-bb47-528731e26c1b', id, 'on', 'ヘイ', false, 6, 'ok', NULL from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae'
on conflict (id) do nothing;

-- ---------- 持 (TRÌ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('557568c2-a541-448b-9ffb-c95603a2f8cc', 'N4', '持', 'TRÌ', 'cầm, giữ, mang', 9, '扌', '持 có bộ 扌(bàn tay) — dùng tay để cầm, giữ, mang.', NULL, '{"待","特"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f2fea144-016c-47d1-8331-e001c787dc44', id, 'kun', 'もつ', true, 6, 'ok', NULL from jp_kanji where id = '557568c2-a541-448b-9ffb-c95603a2f8cc'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('557568c2-a541-448b-9ffb-c95603a2f8cc', 'f2fea144-016c-47d1-8331-e001c787dc44', '持つ', 'もつ', 'mang, cầm, có', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('557568c2-a541-448b-9ffb-c95603a2f8cc', 'f2fea144-016c-47d1-8331-e001c787dc44', '持っていく', 'もっていく', 'mang đi', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('557568c2-a541-448b-9ffb-c95603a2f8cc', 'f2fea144-016c-47d1-8331-e001c787dc44', '持ってくる', 'もってくる', 'mang đến', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('557568c2-a541-448b-9ffb-c95603a2f8cc', 'f2fea144-016c-47d1-8331-e001c787dc44', '気持ち', 'きもち', 'cảm xúc', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1e337916-8945-4dce-a4bf-8b84013e7208', id, 'on', NULL, false, 6, 'ok', NULL from jp_kanji where id = '557568c2-a541-448b-9ffb-c95603a2f8cc'
on conflict (id) do nothing;

-- ---------- 使 (SỬ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d28cc2da-c432-4d4a-ba1a-485ba07495cb', 'N4', '使', 'SỬ', 'sử dụng, sai khiến', 8, '亻', '使 có bộ 亻(người) bên trái — người dùng, sử dụng vật gì đó.', NULL, '{"便","史"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'cdf2089d-ff4e-44ff-b993-67d0584c82b7', id, 'kun', 'つかう', true, 6, 'ok', NULL from jp_kanji where id = 'd28cc2da-c432-4d4a-ba1a-485ba07495cb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d28cc2da-c432-4d4a-ba1a-485ba07495cb', 'cdf2089d-ff4e-44ff-b993-67d0584c82b7', '使う', 'つかう', 'sử dụng', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9a59016e-5535-464e-b5b2-82fb43bfbae4', id, 'on', 'シ', false, 6, 'ok', NULL from jp_kanji where id = 'd28cc2da-c432-4d4a-ba1a-485ba07495cb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d28cc2da-c432-4d4a-ba1a-485ba07495cb', '9a59016e-5535-464e-b5b2-82fb43bfbae4', '使用禁止', 'しようきんし', 'cấm sử dụng', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d28cc2da-c432-4d4a-ba1a-485ba07495cb', '9a59016e-5535-464e-b5b2-82fb43bfbae4', '使用中', 'しようちゅう', 'đang sử dụng', false, 6, 'pdf', 'ok', NULL);

-- ---------- 止 (CHỈ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e129593c-1e13-4d9a-845a-9005404b9667', 'N4', '止', 'CHỈ', 'dừng lại, ngăn cấm', 4, '止', '止 là hình vẽ 1 bàn chân dừng lại — ngăn không bước tiếp.', NULL, '{"正","歩"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd12541d6-df95-4a8b-9d17-5c1024d82f6a', id, 'kun', 'とめる', true, 6, 'ok', NULL from jp_kanji where id = 'e129593c-1e13-4d9a-845a-9005404b9667'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e129593c-1e13-4d9a-845a-9005404b9667', 'd12541d6-df95-4a8b-9d17-5c1024d82f6a', '止める', 'とめる', 'ngăn, dừng (cái gì đó)', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'be5aa813-3e8b-4e4e-ba43-ef01e2fc353a', id, 'kun', 'とまる', false, 6, 'ok', NULL from jp_kanji where id = 'e129593c-1e13-4d9a-845a-9005404b9667'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e129593c-1e13-4d9a-845a-9005404b9667', 'be5aa813-3e8b-4e4e-ba43-ef01e2fc353a', '止まる', 'とまる', '(cái gì đó) dừng lại', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2e16b03e-5b59-4eef-8e57-1052a894143b', id, 'on', 'シ', false, 6, 'ok', NULL from jp_kanji where id = 'e129593c-1e13-4d9a-845a-9005404b9667'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e129593c-1e13-4d9a-845a-9005404b9667', '2e16b03e-5b59-4eef-8e57-1052a894143b', '中止', 'ちゅうし', 'ngừng, hủy bỏ', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e129593c-1e13-4d9a-845a-9005404b9667', '2e16b03e-5b59-4eef-8e57-1052a894143b', '立入禁止', 'たちいりきんし', 'cấm vào', false, 6, 'pdf', 'ok', NULL);

-- ---------- 住 (TRÚ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e762df70-a887-458b-99a7-c352a99c9a5b', 'N4', '住', 'TRÚ', 'ở, sinh sống', 7, '亻', '住 có bộ 亻(người) bên trái — nơi người ta ở, sinh sống lâu dài (主, chủ).', NULL, '{"注","柱"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '867b8ec6-c4be-4b6f-876c-ac744b7971dd', id, 'kun', 'すむ', true, 6, 'ok', NULL from jp_kanji where id = 'e762df70-a887-458b-99a7-c352a99c9a5b'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e762df70-a887-458b-99a7-c352a99c9a5b', '867b8ec6-c4be-4b6f-876c-ac744b7971dd', '住む', 'すむ', 'sống', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e5071be1-6772-474e-a47b-264ddf7d6852', id, 'kun', 'すまう', false, 6, 'ok', NULL from jp_kanji where id = 'e762df70-a887-458b-99a7-c352a99c9a5b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fd0f972f-3bcd-4152-8948-35fe2ef58567', id, 'on', 'ジュウ', false, 6, 'ok', NULL from jp_kanji where id = 'e762df70-a887-458b-99a7-c352a99c9a5b'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e762df70-a887-458b-99a7-c352a99c9a5b', 'fd0f972f-3bcd-4152-8948-35fe2ef58567', '住所', 'じゅうしょ', 'địa chỉ', false, 6, 'pdf', 'ok', NULL);

-- ---------- 降 (GIÁNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('f04ff391-1019-475d-968c-c4f452f53179', 'N4', '降', 'GIÁNG', 'rơi, xuống, hạ xuống', 10, '阝', '降 có bộ 阝(dốc núi) — đi xuống dốc núi, hạ xuống.', NULL, '{"陸","隆"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6292bcc7-af0e-46bd-b4cf-4a062cd3074e', id, 'kun', 'おりる', true, 6, 'ok', NULL from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f04ff391-1019-475d-968c-c4f452f53179', '6292bcc7-af0e-46bd-b4cf-4a062cd3074e', '降りる', 'おりる', 'xuống khỏi, rút khỏi', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '108143bc-c769-4e46-8044-f311446d0dbc', id, 'kun', 'おろす', false, 6, 'ok', NULL from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f04ff391-1019-475d-968c-c4f452f53179', '108143bc-c769-4e46-8044-f311446d0dbc', '降ろす', 'おろす', 'thả xuống, rút tiền', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a020fde4-e108-4221-a829-38ba13af90e7', id, 'kun', 'ふる', false, 6, 'ok', NULL from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f04ff391-1019-475d-968c-c4f452f53179', 'a020fde4-e108-4221-a829-38ba13af90e7', '降る', 'ふる', 'rơi (mưa)', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c63f3ed2-8a7b-470f-abdf-98bccbc120c2', id, 'kun', 'ふり', false, 6, 'ok', NULL from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'bcc656a2-221f-424c-ae31-fef16773f928', id, 'on', 'コウ', false, 6, 'ok', NULL from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179'
on conflict (id) do nothing;

-- ---------- 私 (TƯ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('cfc23bf2-bb07-4c94-a548-26047543c7ea', 'N4', '私', 'TƯ', 'tôi, riêng tư', 7, '禾', '私 có bộ 禾(lúa) — phần lúa riêng (厶) của mỗi người, ý chỉ ''của tôi'', cái riêng tư.', NULL, '{"秋","科"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0aba3521-9fa3-4112-a947-d1d7153eedf3', id, 'kun', 'わたし', true, 6, 'ok', NULL from jp_kanji where id = 'cfc23bf2-bb07-4c94-a548-26047543c7ea'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cfc23bf2-bb07-4c94-a548-26047543c7ea', '0aba3521-9fa3-4112-a947-d1d7153eedf3', '私', 'わたし', 'tôi', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c72c37a9-d597-423c-b6fe-388fbe2e06f7', id, 'kun', 'わたくし', false, 6, 'ok', NULL from jp_kanji where id = 'cfc23bf2-bb07-4c94-a548-26047543c7ea'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('cfc23bf2-bb07-4c94-a548-26047543c7ea', 'c72c37a9-d597-423c-b6fe-388fbe2e06f7', '私', 'わたくし', 'tôi (cách nói trang trọng)', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '40fb9382-f4fa-4625-a522-025a080f37ec', id, 'on', 'シ', false, 6, 'ok', NULL from jp_kanji where id = 'cfc23bf2-bb07-4c94-a548-26047543c7ea'
on conflict (id) do nothing;

-- ---------- 夫 (PHU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3e755c14-da02-4fe0-8548-28d1b785cf59', 'N4', '夫', 'PHU', 'chồng, đàn ông trưởng thành', 4, '大', '夫 giống chữ 大(to lớn) có thêm 1 nét ngang trên đầu — người đàn ông trưởng thành, là chồng.', NULL, '{"天","失"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6d296bc7-920b-428f-8a09-514d5b2a95f0', id, 'kun', 'おっと', true, 6, 'ok', NULL from jp_kanji where id = '3e755c14-da02-4fe0-8548-28d1b785cf59'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3e755c14-da02-4fe0-8548-28d1b785cf59', '6d296bc7-920b-428f-8a09-514d5b2a95f0', '夫', 'おっと', 'chồng (của mình)', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3b823613-ecfa-440c-8218-49fe6caaae6b', id, 'on', 'フ', false, 6, 'ok', NULL from jp_kanji where id = '3e755c14-da02-4fe0-8548-28d1b785cf59'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3e755c14-da02-4fe0-8548-28d1b785cf59', '3b823613-ecfa-440c-8218-49fe6caaae6b', '大丈夫', 'だいじょうぶ', 'ổn rồi, không sao đâu', false, 6, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fb75fe4e-e84b-42d5-82d8-f536ad5c95f7', id, 'on', 'フウ', false, 6, 'ok', NULL from jp_kanji where id = '3e755c14-da02-4fe0-8548-28d1b785cf59'
on conflict (id) do nothing;

-- ---------- 主 (CHỦ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('821cac4a-cf16-4950-aabb-8ebfcd5572f6', 'N4', '主', 'CHỦ', 'chủ, chính, chủ yếu', 5, '丶', '主 giống hình ngọn nến (丶) trên đế đèn (王) — ngọn lửa chủ đạo, trung tâm.', NULL, '{"王","住"}', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2a7de2d3-91f2-42e5-beac-ad369ff507a7', id, 'kun', 'おも', true, 6, 'ok', NULL from jp_kanji where id = '821cac4a-cf16-4950-aabb-8ebfcd5572f6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5f2aa5dd-2f92-4239-a9b9-655d4f9e68c0', id, 'kun', 'ぬし', false, 6, 'ok', NULL from jp_kanji where id = '821cac4a-cf16-4950-aabb-8ebfcd5572f6'
on conflict (id) do nothing;

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 題 (ĐỀ) có âm chính là gì?', 'ひらける', 'すむ', 'しまる', 'ダイ', 'ダイ', 'generated' from jp_kanji where id = '4ab6fa6e-d6af-4019-bf5a-7f61ef33397f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đề bài, chủ đề"?', '持', '私', '題', '待', '題', 'generated' from jp_kanji where id = '4ab6fa6e-d6af-4019-bf5a-7f61ef33397f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"問題" có nghĩa là gì?', 'buffet đồ uống', 'địa chỉ', 'tiếng Anh', 'vấn đề', 'vấn đề', 'generated' from jp_kanji where id = '4ab6fa6e-d6af-4019-bf5a-7f61ef33397f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 飲み放題', 'のみほうだい', 'generated' from jp_kanji where id = '4ab6fa6e-d6af-4019-bf5a-7f61ef33397f';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 紙 (CHỈ) có âm chính là gì?', 'かみ', 'ふり', 'あく', 'エイ', 'かみ', 'generated' from jp_kanji where id = '23f0b40d-cde0-4292-9f21-db10c4fccf69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giấy"?', '使', '夫', '紙', '開', '紙', 'generated' from jp_kanji where id = '23f0b40d-cde0-4292-9f21-db10c4fccf69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"紙" có nghĩa là gì?', 'chiêu đãi, mời', 'cảm ơn vì đã chờ đợi', 'mang, cầm, có', 'giấy', 'giấy', 'generated' from jp_kanji where id = '23f0b40d-cde0-4292-9f21-db10c4fccf69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 手紙', 'てがみ', 'generated' from jp_kanji where id = '23f0b40d-cde0-4292-9f21-db10c4fccf69';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 英 (ANH) có âm chính là gì?', 'しめる', 'とめる', 'エイ', 'もつ', 'エイ', 'generated' from jp_kanji where id = '9e6bee30-ca97-46c1-915a-f67e0d70935c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "Anh (quốc), tài giỏi"?', '住', '語', '英', '私', '英', 'generated' from jp_kanji where id = '9e6bee30-ca97-46c1-915a-f67e0d70935c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"英語" có nghĩa là gì?', 'đóng (cái gì đó)', 'tiếng Anh', 'ổn rồi, không sao đâu', 'ngăn, dừng (cái gì đó)', 'tiếng Anh', 'generated' from jp_kanji where id = '9e6bee30-ca97-46c1-915a-f67e0d70935c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 英語', 'えいご', 'generated' from jp_kanji where id = '9e6bee30-ca97-46c1-915a-f67e0d70935c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 語 (NGỮ) có âm chính là gì?', 'おっと', 'しめる', 'シ', 'ゴ', 'ゴ', 'generated' from jp_kanji where id = 'd3882906-bc02-44b5-a722-ab1dabea2b07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ngôn ngữ, lời nói"?', '待', '住', '語', '開', '語', 'generated' from jp_kanji where id = 'd3882906-bc02-44b5-a722-ab1dabea2b07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"何語" có nghĩa là gì?', 'chiêu đãi, mời', 'chồng (của mình)', 'đợi', 'ngôn ngữ nào', 'ngôn ngữ nào', 'generated' from jp_kanji where id = 'd3882906-bc02-44b5-a722-ab1dabea2b07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 日本語', 'にほんご', 'generated' from jp_kanji where id = 'd3882906-bc02-44b5-a722-ab1dabea2b07';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 待 (ĐÃI) có âm chính là gì?', 'エイ', 'かたる', 'ひらける', 'まつ', 'まつ', 'generated' from jp_kanji where id = '3d06df59-0d35-4f6b-a130-7b3abf08987e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chờ đợi, đối đãi"?', '英', '題', '待', '私', '待', 'generated' from jp_kanji where id = '3d06df59-0d35-4f6b-a130-7b3abf08987e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"待つ" có nghĩa là gì?', 'đợi', '(cái gì đó) mở', 'tiếng Nhật', 'cảm ơn vì đã chờ đợi', 'đợi', 'generated' from jp_kanji where id = '3d06df59-0d35-4f6b-a130-7b3abf08987e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お待ちください', 'おまちください', 'generated' from jp_kanji where id = '3d06df59-0d35-4f6b-a130-7b3abf08987e';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 開 (KHAI) có âm chính là gì?', 'あく', 'ひらく', 'すむ', 'コウ', 'あく', 'generated' from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mở, khai mở"?', '語', '使', '開', '題', '開', 'generated' from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"開く" có nghĩa là gì?', '(cái gì đó) mở', 'rơi (mưa)', 'đợi', 'buffet đồ uống', '(cái gì đó) mở', 'generated' from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 開ける', 'あける', 'generated' from jp_kanji where id = 'ae20e714-7d86-45fa-83cc-20e3106f6202';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 閉 (BẾ) có âm chính là gì?', 'フ', 'しめる', 'おりる', 'すむ', 'しめる', 'generated' from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đóng, đóng cửa"?', '語', '夫', '題', '閉', '閉', 'generated' from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"閉める" có nghĩa là gì?', 'đóng (cái gì đó)', 'khai phá, phát triển', 'ngôn ngữ nào', 'mang, cầm, có', 'đóng (cái gì đó)', 'generated' from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 閉まる', 'しまる', 'generated' from jp_kanji where id = '258c610e-8acf-49ca-91bb-f24b1d67afae';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 持 (TRÌ) có âm chính là gì?', 'もつ', 'タイ', 'かたらう', 'フ', 'もつ', 'generated' from jp_kanji where id = '557568c2-a541-448b-9ffb-c95603a2f8cc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cầm, giữ, mang"?', '主', '開', '持', '夫', '持', 'generated' from jp_kanji where id = '557568c2-a541-448b-9ffb-c95603a2f8cc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"持つ" có nghĩa là gì?', 'cấm sử dụng', 'xin hãy đợi', 'cảm xúc', 'mang, cầm, có', 'mang, cầm, có', 'generated' from jp_kanji where id = '557568c2-a541-448b-9ffb-c95603a2f8cc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 持っていく', 'もっていく', 'generated' from jp_kanji where id = '557568c2-a541-448b-9ffb-c95603a2f8cc';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 使 (SỬ) có âm chính là gì?', 'ぬし', 'おりる', 'フウ', 'つかう', 'つかう', 'generated' from jp_kanji where id = 'd28cc2da-c432-4d4a-ba1a-485ba07495cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sử dụng, sai khiến"?', '夫', '私', '使', '紙', '使', 'generated' from jp_kanji where id = 'd28cc2da-c432-4d4a-ba1a-485ba07495cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"使う" có nghĩa là gì?', '(cái gì đó) mở', 'mở ra (cái gì đó)', 'sử dụng', 'ngừng, hủy bỏ', 'sử dụng', 'generated' from jp_kanji where id = 'd28cc2da-c432-4d4a-ba1a-485ba07495cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 使用禁止', 'しようきんし', 'generated' from jp_kanji where id = 'd28cc2da-c432-4d4a-ba1a-485ba07495cb';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 止 (CHỈ) có âm chính là gì?', 'あける', 'コウ', 'おりる', 'とめる', 'とめる', 'generated' from jp_kanji where id = 'e129593c-1e13-4d9a-845a-9005404b9667';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dừng lại, ngăn cấm"?', '使', '止', '閉', '開', '止', 'generated' from jp_kanji where id = 'e129593c-1e13-4d9a-845a-9005404b9667';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"止める" có nghĩa là gì?', 'ngăn, dừng (cái gì đó)', 'mang đi', 'đợi', 'thư', 'ngăn, dừng (cái gì đó)', 'generated' from jp_kanji where id = 'e129593c-1e13-4d9a-845a-9005404b9667';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 止まる', 'とまる', 'generated' from jp_kanji where id = 'e129593c-1e13-4d9a-845a-9005404b9667';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 住 (TRÚ) có âm chính là gì?', 'とめる', 'しまる', 'しめる', 'すむ', 'すむ', 'generated' from jp_kanji where id = 'e762df70-a887-458b-99a7-c352a99c9a5b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ở, sinh sống"?', '止', '私', '英', '住', '住', 'generated' from jp_kanji where id = 'e762df70-a887-458b-99a7-c352a99c9a5b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"住む" có nghĩa là gì?', 'thư', 'cấm vào', 'mang đến', 'sống', 'sống', 'generated' from jp_kanji where id = 'e762df70-a887-458b-99a7-c352a99c9a5b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 住所', 'じゅうしょ', 'generated' from jp_kanji where id = 'e762df70-a887-458b-99a7-c352a99c9a5b';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 降 (GIÁNG) có âm chính là gì?', 'ゴ', 'おりる', 'わたし', 'コウ', 'おりる', 'generated' from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "rơi, xuống, hạ xuống"?', '使', '英', '降', '夫', '降', 'generated' from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"降りる" có nghĩa là gì?', '(cái gì đó) đóng lại', 'xuống khỏi, rút khỏi', 'đợi', '(cái gì đó) mở', 'xuống khỏi, rút khỏi', 'generated' from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 降ろす', 'おろす', 'generated' from jp_kanji where id = 'f04ff391-1019-475d-968c-c4f452f53179';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 私 (TƯ) có âm chính là gì?', 'わたし', 'コウ', 'まつ', 'とじる', 'わたし', 'generated' from jp_kanji where id = 'cfc23bf2-bb07-4c94-a548-26047543c7ea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tôi, riêng tư"?', '夫', '英', '題', '私', '私', 'generated' from jp_kanji where id = 'cfc23bf2-bb07-4c94-a548-26047543c7ea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"私" có nghĩa là gì?', 'mở ra (cái gì đó)', 'đang sử dụng', 'tôi', 'mang, cầm, có', 'tôi', 'generated' from jp_kanji where id = 'cfc23bf2-bb07-4c94-a548-26047543c7ea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 私', 'わたくし', 'generated' from jp_kanji where id = 'cfc23bf2-bb07-4c94-a548-26047543c7ea';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 夫 (PHU) có âm chính là gì?', 'とめる', 'おっと', 'かたらう', 'かみ', 'おっと', 'generated' from jp_kanji where id = '3e755c14-da02-4fe0-8548-28d1b785cf59';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chồng, đàn ông trưởng thành"?', '降', '夫', '閉', '止', '夫', 'generated' from jp_kanji where id = '3e755c14-da02-4fe0-8548-28d1b785cf59';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"夫" có nghĩa là gì?', 'cấm sử dụng', 'xuống khỏi, rút khỏi', 'chồng (của mình)', 'mang đến', 'chồng (của mình)', 'generated' from jp_kanji where id = '3e755c14-da02-4fe0-8548-28d1b785cf59';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 大丈夫', 'だいじょうぶ', 'generated' from jp_kanji where id = '3e755c14-da02-4fe0-8548-28d1b785cf59';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 主 (CHỦ) có âm chính là gì?', 'おも', 'おっと', 'あく', 'かみ', 'おも', 'generated' from jp_kanji where id = '821cac4a-cf16-4950-aabb-8ebfcd5572f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chủ, chính, chủ yếu"?', '英', '私', '語', '主', '主', 'generated' from jp_kanji where id = '821cac4a-cf16-4950-aabb-8ebfcd5572f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"主" có nghĩa là gì?', 'chủ, chính, chủ yếu', 'mang đi', 'xin hãy đợi', '(cái gì đó) dừng lại', 'chủ, chính, chủ yếu', 'generated' from jp_kanji where id = '821cac4a-cf16-4950-aabb-8ebfcd5572f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 主', 'おも', 'generated' from jp_kanji where id = '821cac4a-cf16-4950-aabb-8ebfcd5572f6';


-- ============================================================
-- jp-go — Kanji N4, round 3 (13 kanji, trang in 4).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- 室 (THẤT) trải cả 2 cột cùng trang, đã gộp thành 1 kanji.
-- ============================================================

-- ---------- 売 (MẠI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('0e8a0ed3-a4cb-472e-b936-bda968f171f7', 'N4', '売', 'MẠI', 'bán', 7, '士', '売 có bộ 士 trên đầu — người bán hàng (士) đứng bán ở chợ.', NULL, '{"読","続"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b6765ea3-359b-451d-915a-9127dafe7a09', id, 'kun', 'うる', true, 4, 'ok', NULL from jp_kanji where id = '0e8a0ed3-a4cb-472e-b936-bda968f171f7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0e8a0ed3-a4cb-472e-b936-bda968f171f7', 'b6765ea3-359b-451d-915a-9127dafe7a09', '売る', 'うる', 'bán', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0e8a0ed3-a4cb-472e-b936-bda968f171f7', 'b6765ea3-359b-451d-915a-9127dafe7a09', '売り場', 'うりば', 'quầy hàng, sạp hàng', true, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4b6b12d5-e2d0-4991-a5c3-ff3791204b88', id, 'kun', 'うれる', false, 4, 'ok', NULL from jp_kanji where id = '0e8a0ed3-a4cb-472e-b936-bda968f171f7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0e8a0ed3-a4cb-472e-b936-bda968f171f7', '4b6b12d5-e2d0-4991-a5c3-ff3791204b88', '売れる', 'うれる', 'bán chạy, nổi tiếng', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c86dac3c-4468-4784-97c3-3187ac9610f3', id, 'on', 'バイ', false, 4, 'ok', NULL from jp_kanji where id = '0e8a0ed3-a4cb-472e-b936-bda968f171f7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0e8a0ed3-a4cb-472e-b936-bda968f171f7', 'c86dac3c-4468-4784-97c3-3187ac9610f3', '自動販売機', 'じどうはんばいき', 'máy bán hàng tự động', false, 4, 'pdf', 'ok', NULL);

-- ---------- 働 (ĐỘNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4078caf7-ebe3-4b2b-8bfe-0745b615c0d6', 'N4', '働', 'ĐỘNG', 'lao động, làm việc', 13, '亻', '働 = 人(亻) + 動 — con người (亻) chuyển động (動) là đang lao động.', NULL, '{"動","働"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e4079e72-db7a-4180-8f79-4dc6551919e8', id, 'kun', 'はたらく', true, 4, 'ok', NULL from jp_kanji where id = '4078caf7-ebe3-4b2b-8bfe-0745b615c0d6'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4078caf7-ebe3-4b2b-8bfe-0745b615c0d6', 'e4079e72-db7a-4180-8f79-4dc6551919e8', '働く', 'はたらく', 'làm việc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4078caf7-ebe3-4b2b-8bfe-0745b615c0d6', 'e4079e72-db7a-4180-8f79-4dc6551919e8', '働きすぎ', 'はたらきすぎ', 'làm việc quá sức', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fabce98c-7e90-471c-8aae-aa0ef1c6aa05', id, 'on', 'ドウ', false, 4, 'ok', NULL from jp_kanji where id = '4078caf7-ebe3-4b2b-8bfe-0745b615c0d6'
on conflict (id) do nothing;

-- ---------- 勉 (MIỄN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3fbe2132-f379-4670-92d3-38b741f952cb', 'N4', '勉', 'MIỄN', 'cố gắng, chăm chỉ (học tập)', 9, '力', '勉 có bộ 力 (sức lực) — dồn hết sức lực vào việc học.', NULL, '{"免","勤"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '30bb6b8b-2777-4e05-b4f1-85c05a028bdf', id, 'kun', NULL, false, 4, 'ok', NULL from jp_kanji where id = '3fbe2132-f379-4670-92d3-38b741f952cb'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f40b4f09-89e1-4e1d-a414-72cfc07f4f06', id, 'on', 'ベン', true, 4, 'ok', NULL from jp_kanji where id = '3fbe2132-f379-4670-92d3-38b741f952cb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3fbe2132-f379-4670-92d3-38b741f952cb', 'f40b4f09-89e1-4e1d-a414-72cfc07f4f06', '勉強する', 'べんきょうする', 'học', false, 4, 'pdf', 'ok', NULL);

-- ---------- 強 (CƯỜNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('06246c40-c2eb-44e3-9e9e-74092cd4fa61', 'N4', '強', 'CƯỜNG', 'mạnh, khỏe, ép buộc', 11, '弓', '強 có bộ 弓 (cây cung) — cần sức mạnh để giương cung.', NULL, '{"弱","引"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c4909b01-8d4c-4fc0-8421-ae19c8fcaa2a', id, 'kun', 'つよい', true, 4, 'ok', NULL from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('06246c40-c2eb-44e3-9e9e-74092cd4fa61', 'c4909b01-8d4c-4fc0-8421-ae19c8fcaa2a', '強い', 'つよい', 'khỏe, bền, mạnh mẽ', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4e0dedc3-c5c5-410f-8843-b9b970877ab7', id, 'kun', 'しいる', false, 4, 'ok', NULL from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'aa77b0f7-090b-4fdb-b4bf-7aa1de01dca3', id, 'kun', 'つよめる', false, 4, 'ok', NULL from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7155234e-f7dc-47f9-bb73-7af6452ea82c', id, 'kun', 'つよまる', false, 4, 'ok', NULL from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2a7527ac-b52d-47c0-a455-f8b3678ee5f6', id, 'on', 'キョウ', true, 4, 'ok', NULL from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('06246c40-c2eb-44e3-9e9e-74092cd4fa61', '2a7527ac-b52d-47c0-a455-f8b3678ee5f6', '勉強する', 'べんきょうする', 'học', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e12dcc34-ec12-4346-8a44-e42c0e7bef64', id, 'on', 'ゴウ', false, 4, 'ok', NULL from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61'
on conflict (id) do nothing;

-- ---------- 泳 (VỊNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('01b616c6-fec6-4c28-8300-6121bdc03a85', 'N4', '泳', 'VỊNH', 'bơi', 8, '氵', '泳 có bộ 氵(nước) — phải có nước mới bơi (泳ぐ) được.', NULL, '{"永","泊"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '655b7cfa-7989-4e14-be19-4ccb50e4dee5', id, 'kun', 'およぐ', true, 4, 'ok', NULL from jp_kanji where id = '01b616c6-fec6-4c28-8300-6121bdc03a85'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('01b616c6-fec6-4c28-8300-6121bdc03a85', '655b7cfa-7989-4e14-be19-4ccb50e4dee5', '泳ぐ', 'およぐ', 'bơi', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '639f757b-7b05-4804-a1fa-d767ee08fa22', id, 'on', 'エイ', false, 4, 'ok', NULL from jp_kanji where id = '01b616c6-fec6-4c28-8300-6121bdc03a85'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('01b616c6-fec6-4c28-8300-6121bdc03a85', '639f757b-7b05-4804-a1fa-d767ee08fa22', '水泳', 'すいえい', 'bơi lội, môn bơi lội', false, 4, 'pdf', 'ok', NULL);

-- ---------- 部 (BỘ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('5bbc40a5-7618-4c44-b30e-5d3418096dfb', 'N4', '部', 'BỘ', 'bộ phận, phòng ban', 11, '阝', '部 có bộ 阝(vùng đất) bên phải — mỗi bộ phận như 1 vùng đất riêng trong tổ chức.', NULL, '{"郡","都"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7d1a4742-433b-497f-8b10-61730d5934e5', id, 'kun', NULL, false, 4, 'ok', NULL from jp_kanji where id = '5bbc40a5-7618-4c44-b30e-5d3418096dfb'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a55ed434-bdcf-4040-9a0f-340b5a6e7344', id, 'on', 'ブ', true, 4, 'ok', NULL from jp_kanji where id = '5bbc40a5-7618-4c44-b30e-5d3418096dfb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5bbc40a5-7618-4c44-b30e-5d3418096dfb', 'a55ed434-bdcf-4040-9a0f-340b5a6e7344', '部屋', 'へや', 'phòng', true, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5bbc40a5-7618-4c44-b30e-5d3418096dfb', 'a55ed434-bdcf-4040-9a0f-340b5a6e7344', '全部', 'ぜんぶ', 'toàn bộ', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5bbc40a5-7618-4c44-b30e-5d3418096dfb', 'a55ed434-bdcf-4040-9a0f-340b5a6e7344', '部長', 'ぶちょう', 'trưởng phòng', false, 4, 'pdf', 'ok', NULL);

-- ---------- 屋 (ỐC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('b04bfde8-908d-41ed-ac58-cae569fd1ae8', 'N4', '屋', 'ỐC', 'nhà, mái nhà, tiệm', 9, '尸', '屋 có bộ 尸(mái che, thân người nằm) — hình ảnh mái nhà che chở bên trên.', NULL, '{"尾","居"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6c322c37-d8a1-4581-9733-13eebc60b742', id, 'kun', 'や', true, 4, 'ok', NULL from jp_kanji where id = 'b04bfde8-908d-41ed-ac58-cae569fd1ae8'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b04bfde8-908d-41ed-ac58-cae569fd1ae8', '6c322c37-d8a1-4581-9733-13eebc60b742', '部屋', 'へや', 'phòng', true, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '979735a4-c58a-4d61-956a-0a82ebbb65a4', id, 'on', 'オク', false, 4, 'ok', NULL from jp_kanji where id = 'b04bfde8-908d-41ed-ac58-cae569fd1ae8'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b04bfde8-908d-41ed-ac58-cae569fd1ae8', '979735a4-c58a-4d61-956a-0a82ebbb65a4', '屋上', 'おくじょう', 'mái nhà, tầng thượng', false, 4, 'pdf', 'ok', NULL);

-- ---------- 室 (THẤT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('2935b07f-e273-4e3e-960f-a126d1b9bd4c', 'N4', '室', 'THẤT', 'phòng, buồng', 9, '宀', '室 có bộ 宀(mái nhà) trên 至 — 1 gian phòng dưới mái nhà lớn.', NULL, '{"宝","客"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '823fd3f7-61bd-4f1f-bba2-c77ceba71b4a', id, 'kun', 'むろ', false, 4, 'ok', NULL from jp_kanji where id = '2935b07f-e273-4e3e-960f-a126d1b9bd4c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd5f1dc56-e3b4-4ade-86ed-3ae06ae494dd', id, 'on', 'シツ', true, 4, 'ok', NULL from jp_kanji where id = '2935b07f-e273-4e3e-960f-a126d1b9bd4c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('2935b07f-e273-4e3e-960f-a126d1b9bd4c', 'd5f1dc56-e3b4-4ade-86ed-3ae06ae494dd', '和室', 'わしつ', 'phòng kiểu Nhật', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('2935b07f-e273-4e3e-960f-a126d1b9bd4c', 'd5f1dc56-e3b4-4ade-86ed-3ae06ae494dd', '号室', 'ごうしつ', 'số phòng', false, 4, 'pdf', 'ok', NULL);

-- ---------- 場 (TRƯỜNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('6810d4f0-0c38-45f0-9f3d-358452f47a55', 'N4', '場', 'TRƯỜNG', 'nơi, chỗ, sân bãi', 12, '土', '場 có bộ 土(đất) — 1 khoảng đất trống dùng làm nơi, chỗ, sân bãi.', NULL, '{"湯","揚"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7e87ba7f-1337-4758-baff-2b430fd77949', id, 'kun', 'ば', true, 4, 'ok', NULL from jp_kanji where id = '6810d4f0-0c38-45f0-9f3d-358452f47a55'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6810d4f0-0c38-45f0-9f3d-358452f47a55', '7e87ba7f-1337-4758-baff-2b430fd77949', '乗り場', 'のりば', 'điểm lên - xuống xe', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6810d4f0-0c38-45f0-9f3d-358452f47a55', '7e87ba7f-1337-4758-baff-2b430fd77949', '場所', 'ばしょ', 'địa điểm', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6810d4f0-0c38-45f0-9f3d-358452f47a55', '7e87ba7f-1337-4758-baff-2b430fd77949', '置き場', 'おきば', 'nơi để, chỗ để', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b3c09627-12f4-47ea-9f8e-556aa3f181b3', id, 'on', 'ジョウ', false, 4, 'ok', NULL from jp_kanji where id = '6810d4f0-0c38-45f0-9f3d-358452f47a55'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6810d4f0-0c38-45f0-9f3d-358452f47a55', 'b3c09627-12f4-47ea-9f8e-556aa3f181b3', '駐車場', 'ちゅうしゃじょう', 'bãi đỗ xe', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6810d4f0-0c38-45f0-9f3d-358452f47a55', 'b3c09627-12f4-47ea-9f8e-556aa3f181b3', '市場調査', 'しじょうちょうさ', 'điều tra thị trường', false, 4, 'pdf', 'ok', NULL);

-- ---------- 所 (SỞ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', 'N4', '所', 'SỞ', 'nơi, chỗ, cơ quan', 8, '戸', '所 có bộ 戸(cửa) bên trái — nơi có cửa ra vào là 1 chỗ, 1 địa điểm cụ thể.', NULL, '{"近","析"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b4cea4e7-83cb-4ee3-91b2-13c56bb3cb49', id, 'kun', 'ところ', true, 4, 'ok', NULL from jp_kanji where id = '7f4e031f-83ca-460e-bdc3-f86d20c4c82a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', 'b4cea4e7-83cb-4ee3-91b2-13c56bb3cb49', '所', 'ところ', 'nơi, chỗ', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', 'b4cea4e7-83cb-4ee3-91b2-13c56bb3cb49', '台所', 'だいどころ', 'nhà bếp', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', 'b4cea4e7-83cb-4ee3-91b2-13c56bb3cb49', '元の所', 'もとのところ', 'chỗ cũ, vị trí cũ', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '36a9b1d4-7d7e-48a6-8eb3-300ece083aeb', id, 'on', 'ショ', false, 4, 'ok', NULL from jp_kanji where id = '7f4e031f-83ca-460e-bdc3-f86d20c4c82a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', '36a9b1d4-7d7e-48a6-8eb3-300ece083aeb', '事務所', 'じむしょ', 'văn phòng', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', '36a9b1d4-7d7e-48a6-8eb3-300ece083aeb', '住所', 'じゅうしょ', 'địa chỉ', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', '36a9b1d4-7d7e-48a6-8eb3-300ece083aeb', '市役所', 'しやくしょ', 'tòa thị chính', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7f4e031f-83ca-460e-bdc3-f86d20c4c82a', '36a9b1d4-7d7e-48a6-8eb3-300ece083aeb', '近所', 'きんじょ', 'hàng xóm, lân cận', false, 4, 'pdf', 'ok', NULL);

-- ---------- 図 (ĐỒ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('151f1e41-cb81-4247-a926-80e3b56e532e', 'N4', '図', 'ĐỒ', 'hình vẽ, bản đồ, sơ đồ', 7, '囗', '図 có bộ 囗(bao quanh) — khung bao quanh 1 hình vẽ, sơ đồ.', NULL, '{"国","因"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c1a6f90c-814e-479b-b40a-36469581738b', id, 'kun', 'と', true, 4, 'ok', NULL from jp_kanji where id = '151f1e41-cb81-4247-a926-80e3b56e532e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('151f1e41-cb81-4247-a926-80e3b56e532e', 'c1a6f90c-814e-479b-b40a-36469581738b', '図書館', 'としょかん', 'thư viện', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '946b5239-28dc-466d-b525-dee9300d0ef4', id, 'on', 'ズ', false, 4, 'ok', NULL from jp_kanji where id = '151f1e41-cb81-4247-a926-80e3b56e532e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('151f1e41-cb81-4247-a926-80e3b56e532e', '946b5239-28dc-466d-b525-dee9300d0ef4', '図', 'ず', 'hình minh họa', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('151f1e41-cb81-4247-a926-80e3b56e532e', '946b5239-28dc-466d-b525-dee9300d0ef4', '地図', 'ちず', 'bản đồ', false, 4, 'pdf', 'ok', NULL);

-- ---------- 館 (QUÁN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('15971c8d-976f-4885-b76b-8658074ac792', 'N4', '館', 'QUÁN', 'quán, tòa nhà công cộng lớn', 16, '飠', '館 có bộ 飠(ăn uống) — quán trọ, nhà khách xưa gắn liền với chỗ ăn uống nghỉ ngơi.', NULL, '{"官","管"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '21e5c33e-c3b7-47d4-b3e4-b4b4501dda8c', id, 'kun', NULL, false, 4, 'ok', NULL from jp_kanji where id = '15971c8d-976f-4885-b76b-8658074ac792'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ab66503a-dec7-44b9-bf6f-bdea443f5804', id, 'on', 'カン', true, 4, 'ok', NULL from jp_kanji where id = '15971c8d-976f-4885-b76b-8658074ac792'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('15971c8d-976f-4885-b76b-8658074ac792', 'ab66503a-dec7-44b9-bf6f-bdea443f5804', '旅館', 'りょかん', 'nhà trọ kiểu Nhật', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('15971c8d-976f-4885-b76b-8658074ac792', 'ab66503a-dec7-44b9-bf6f-bdea443f5804', '美術館', 'びじゅつかん', 'bảo tàng mỹ thuật', false, 4, 'pdf', 'ok', NULL);

-- ---------- 家 (GIA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('eb855249-3385-4d00-9cce-a29aef088ccb', 'N4', '家', 'GIA', 'nhà, gia đình, chuyên gia (hậu tố)', 10, '宀', '家 có bộ 宀(mái nhà) trên 豕(con lợn) — thời xưa nuôi lợn dưới nhà là biểu tượng của 1 gia đình.', NULL, '{"宅","室"}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c4e79985-c8fb-442d-aec1-b164309001ee', id, 'kun', 'いえ', true, 4, 'ok', NULL from jp_kanji where id = 'eb855249-3385-4d00-9cce-a29aef088ccb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('eb855249-3385-4d00-9cce-a29aef088ccb', 'c4e79985-c8fb-442d-aec1-b164309001ee', '家', 'いえ', 'nhà', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5172ab1e-91bc-40ab-8a1c-7727b359b03b', id, 'kun', 'や', false, 4, 'ok', NULL from jp_kanji where id = 'eb855249-3385-4d00-9cce-a29aef088ccb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('eb855249-3385-4d00-9cce-a29aef088ccb', '5172ab1e-91bc-40ab-8a1c-7727b359b03b', '家賃', 'やちん', 'tiền nhà', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7fdc6427-46f4-4547-a553-4b65efab7e95', id, 'on', 'カ', false, 4, 'ok', NULL from jp_kanji where id = 'eb855249-3385-4d00-9cce-a29aef088ccb'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('eb855249-3385-4d00-9cce-a29aef088ccb', '7fdc6427-46f4-4547-a553-4b65efab7e95', '家族', 'かぞく', 'gia đình', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('eb855249-3385-4d00-9cce-a29aef088ccb', '7fdc6427-46f4-4547-a553-4b65efab7e95', '家内', 'かない', 'vợ mình', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('eb855249-3385-4d00-9cce-a29aef088ccb', '7fdc6427-46f4-4547-a553-4b65efab7e95', '家具', 'かぐ', 'dụng cụ, đồ đạc trong gia đình', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('eb855249-3385-4d00-9cce-a29aef088ccb', '7fdc6427-46f4-4547-a553-4b65efab7e95', '小説家', 'しょうせつか', 'tiểu thuyết gia', false, 4, 'pdf', 'ok', NULL);

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 売 (MẠI) có âm chính là gì?', 'うる', 'むろ', 'ドウ', 'ショ', 'うる', 'generated' from jp_kanji where id = '0e8a0ed3-a4cb-472e-b936-bda968f171f7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bán"?', '売', '館', '家', '働', '売', 'generated' from jp_kanji where id = '0e8a0ed3-a4cb-472e-b936-bda968f171f7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"売る" có nghĩa là gì?', 'bán', 'thư viện', 'điểm lên - xuống xe', 'dụng cụ, đồ đạc trong gia đình', 'bán', 'generated' from jp_kanji where id = '0e8a0ed3-a4cb-472e-b936-bda968f171f7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 売り場', 'うりば', 'generated' from jp_kanji where id = '0e8a0ed3-a4cb-472e-b936-bda968f171f7';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 働 (ĐỘNG) có âm chính là gì?', 'キョウ', 'はたらく', 'ドウ', 'うれる', 'はたらく', 'generated' from jp_kanji where id = '4078caf7-ebe3-4b2b-8bfe-0745b615c0d6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lao động, làm việc"?', '働', '所', '強', '室', '働', 'generated' from jp_kanji where id = '4078caf7-ebe3-4b2b-8bfe-0745b615c0d6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"働く" có nghĩa là gì?', 'điểm lên - xuống xe', 'điều tra thị trường', 'tòa thị chính', 'làm việc', 'làm việc', 'generated' from jp_kanji where id = '4078caf7-ebe3-4b2b-8bfe-0745b615c0d6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 働きすぎ', 'はたらきすぎ', 'generated' from jp_kanji where id = '4078caf7-ebe3-4b2b-8bfe-0745b615c0d6';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 勉 (MIỄN) có âm chính là gì?', 'エイ', 'ベン', 'つよめる', 'およぐ', 'ベン', 'generated' from jp_kanji where id = '3fbe2132-f379-4670-92d3-38b741f952cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cố gắng, chăm chỉ (học tập)"?', '売', '室', '家', '勉', '勉', 'generated' from jp_kanji where id = '3fbe2132-f379-4670-92d3-38b741f952cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"勉強する" có nghĩa là gì?', 'bơi', 'phòng', 'học', 'mái nhà, tầng thượng', 'học', 'generated' from jp_kanji where id = '3fbe2132-f379-4670-92d3-38b741f952cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 勉強する', 'べんきょうする', 'generated' from jp_kanji where id = '3fbe2132-f379-4670-92d3-38b741f952cb';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 強 (CƯỜNG) có âm chính là gì?', 'つよまる', 'や', 'つよい', 'ベン', 'つよい', 'generated' from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mạnh, khỏe, ép buộc"?', '強', '部', '泳', '売', '強', 'generated' from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"強い" có nghĩa là gì?', 'khỏe, bền, mạnh mẽ', 'văn phòng', 'hàng xóm, lân cận', 'mái nhà, tầng thượng', 'khỏe, bền, mạnh mẽ', 'generated' from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 勉強する', 'べんきょうする', 'generated' from jp_kanji where id = '06246c40-c2eb-44e3-9e9e-74092cd4fa61';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 泳 (VỊNH) có âm chính là gì?', 'ゴウ', 'ズ', 'ば', 'およぐ', 'およぐ', 'generated' from jp_kanji where id = '01b616c6-fec6-4c28-8300-6121bdc03a85';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bơi"?', '働', '泳', '場', '館', '泳', 'generated' from jp_kanji where id = '01b616c6-fec6-4c28-8300-6121bdc03a85';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"泳ぐ" có nghĩa là gì?', 'mái nhà, tầng thượng', 'bảo tàng mỹ thuật', 'bơi', 'địa điểm', 'bơi', 'generated' from jp_kanji where id = '01b616c6-fec6-4c28-8300-6121bdc03a85';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 水泳', 'すいえい', 'generated' from jp_kanji where id = '01b616c6-fec6-4c28-8300-6121bdc03a85';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 部 (BỘ) có âm chính là gì?', 'ブ', 'およぐ', 'オク', 'ズ', 'ブ', 'generated' from jp_kanji where id = '5bbc40a5-7618-4c44-b30e-5d3418096dfb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bộ phận, phòng ban"?', '家', '場', '図', '部', '部', 'generated' from jp_kanji where id = '5bbc40a5-7618-4c44-b30e-5d3418096dfb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"部屋" có nghĩa là gì?', 'bảo tàng mỹ thuật', 'bãi đỗ xe', 'phòng', 'bán chạy, nổi tiếng', 'phòng', 'generated' from jp_kanji where id = '5bbc40a5-7618-4c44-b30e-5d3418096dfb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 全部', 'ぜんぶ', 'generated' from jp_kanji where id = '5bbc40a5-7618-4c44-b30e-5d3418096dfb';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 屋 (ỐC) có âm chính là gì?', 'はたらく', 'およぐ', 'や', 'むろ', 'や', 'generated' from jp_kanji where id = 'b04bfde8-908d-41ed-ac58-cae569fd1ae8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhà, mái nhà, tiệm"?', '所', '屋', '泳', '働', '屋', 'generated' from jp_kanji where id = 'b04bfde8-908d-41ed-ac58-cae569fd1ae8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"部屋" có nghĩa là gì?', 'nhà trọ kiểu Nhật', 'phòng', 'bãi đỗ xe', 'chỗ cũ, vị trí cũ', 'phòng', 'generated' from jp_kanji where id = 'b04bfde8-908d-41ed-ac58-cae569fd1ae8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 屋上', 'おくじょう', 'generated' from jp_kanji where id = 'b04bfde8-908d-41ed-ac58-cae569fd1ae8';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 室 (THẤT) có âm chính là gì?', 'シツ', 'ところ', 'ブ', 'およぐ', 'シツ', 'generated' from jp_kanji where id = '2935b07f-e273-4e3e-960f-a126d1b9bd4c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "phòng, buồng"?', '家', '室', '泳', '働', '室', 'generated' from jp_kanji where id = '2935b07f-e273-4e3e-960f-a126d1b9bd4c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"和室" có nghĩa là gì?', 'phòng kiểu Nhật', 'nhà', 'thư viện', 'địa chỉ', 'phòng kiểu Nhật', 'generated' from jp_kanji where id = '2935b07f-e273-4e3e-960f-a126d1b9bd4c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 号室', 'ごうしつ', 'generated' from jp_kanji where id = '2935b07f-e273-4e3e-960f-a126d1b9bd4c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 場 (TRƯỜNG) có âm chính là gì?', 'や', 'ば', 'およぐ', 'や', 'ば', 'generated' from jp_kanji where id = '6810d4f0-0c38-45f0-9f3d-358452f47a55';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nơi, chỗ, sân bãi"?', '売', '室', '働', '場', '場', 'generated' from jp_kanji where id = '6810d4f0-0c38-45f0-9f3d-358452f47a55';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"乗り場" có nghĩa là gì?', 'gia đình', 'phòng', 'bán', 'điểm lên - xuống xe', 'điểm lên - xuống xe', 'generated' from jp_kanji where id = '6810d4f0-0c38-45f0-9f3d-358452f47a55';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 場所', 'ばしょ', 'generated' from jp_kanji where id = '6810d4f0-0c38-45f0-9f3d-358452f47a55';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 所 (SỞ) có âm chính là gì?', 'ズ', 'や', 'オク', 'ところ', 'ところ', 'generated' from jp_kanji where id = '7f4e031f-83ca-460e-bdc3-f86d20c4c82a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nơi, chỗ, cơ quan"?', '館', '屋', '売', '所', '所', 'generated' from jp_kanji where id = '7f4e031f-83ca-460e-bdc3-f86d20c4c82a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"所" có nghĩa là gì?', 'máy bán hàng tự động', 'nhà trọ kiểu Nhật', 'quầy hàng, sạp hàng', 'nơi, chỗ', 'nơi, chỗ', 'generated' from jp_kanji where id = '7f4e031f-83ca-460e-bdc3-f86d20c4c82a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 台所', 'だいどころ', 'generated' from jp_kanji where id = '7f4e031f-83ca-460e-bdc3-f86d20c4c82a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 図 (ĐỒ) có âm chính là gì?', 'カン', 'エイ', 'いえ', 'と', 'と', 'generated' from jp_kanji where id = '151f1e41-cb81-4247-a926-80e3b56e532e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hình vẽ, bản đồ, sơ đồ"?', '屋', '売', '勉', '図', '図', 'generated' from jp_kanji where id = '151f1e41-cb81-4247-a926-80e3b56e532e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"図書館" có nghĩa là gì?', 'thư viện', 'chỗ cũ, vị trí cũ', 'quầy hàng, sạp hàng', 'bảo tàng mỹ thuật', 'thư viện', 'generated' from jp_kanji where id = '151f1e41-cb81-4247-a926-80e3b56e532e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 図', 'ず', 'generated' from jp_kanji where id = '151f1e41-cb81-4247-a926-80e3b56e532e';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 館 (QUÁN) có âm chính là gì?', 'や', 'いえ', 'カン', 'キョウ', 'カン', 'generated' from jp_kanji where id = '15971c8d-976f-4885-b76b-8658074ac792';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "quán, tòa nhà công cộng lớn"?', '館', '売', '強', '家', '館', 'generated' from jp_kanji where id = '15971c8d-976f-4885-b76b-8658074ac792';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"旅館" có nghĩa là gì?', 'bơi lội, môn bơi lội', 'quầy hàng, sạp hàng', 'nhà trọ kiểu Nhật', 'hàng xóm, lân cận', 'nhà trọ kiểu Nhật', 'generated' from jp_kanji where id = '15971c8d-976f-4885-b76b-8658074ac792';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 美術館', 'びじゅつかん', 'generated' from jp_kanji where id = '15971c8d-976f-4885-b76b-8658074ac792';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 家 (GIA) có âm chính là gì?', 'ショ', 'ゴウ', 'いえ', 'や', 'いえ', 'generated' from jp_kanji where id = 'eb855249-3385-4d00-9cce-a29aef088ccb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhà, gia đình, chuyên gia (hậu tố)"?', '家', '泳', '館', '屋', '家', 'generated' from jp_kanji where id = 'eb855249-3385-4d00-9cce-a29aef088ccb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"家" có nghĩa là gì?', 'bơi', 'hàng xóm, lân cận', 'vợ mình', 'nhà', 'nhà', 'generated' from jp_kanji where id = 'eb855249-3385-4d00-9cce-a29aef088ccb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 家賃', 'やちん', 'generated' from jp_kanji where id = 'eb855249-3385-4d00-9cce-a29aef088ccb';


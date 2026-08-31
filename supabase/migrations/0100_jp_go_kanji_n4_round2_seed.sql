-- ============================================================
-- jp-go — Kanji N4, round 2 (10 kanji, trang in 3).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- 終: phát hiện mâu thuẫn nhãn âm おえる với từ ví dụ 終わり trong
-- PDF gốc — đánh dấu needs_review, không tự ý sửa.
-- ============================================================

-- ---------- 終 (CHUNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('10288880-4c22-471f-8ec7-e551dda771f7', 'N4', '終', 'CHUNG', 'kết thúc, chấm dứt', 11, '糸', '終 có bộ 糸 (sợi chỉ) — sợi chỉ cuối cùng, hết chỉ là kết thúc.', NULL, '{"紙","経"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6d8528bb-ed2b-445a-b849-2836a9c2c42e', id, 'kun', 'おわる', true, 3, 'ok', NULL from jp_kanji where id = '10288880-4c22-471f-8ec7-e551dda771f7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('10288880-4c22-471f-8ec7-e551dda771f7', '6d8528bb-ed2b-445a-b849-2836a9c2c42e', '終わる', 'おわる', 'kết thúc', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '453c2ab1-3746-4347-ad3c-6d38a497eba3', id, 'kun', 'おえる', false, 3, 'needs_review', 'PDF ghi nhãn âm おえる (kun thứ 2 của 終) nhưng từ ví dụ kèm theo lại là ''終わり'' (đọc おわり, cùng âm với kun thứ nhất おわる), không phải ''終える'' (đọc おえる, nghĩa ''làm xong việc gì''). Giữ nguyên đúng như PDF ghi, đề xuất kiểm tra lại — nhiều khả năng PDF nguồn bị lỗi in ấn/đánh máy giữa 終わり và 終える.' from jp_kanji where id = '10288880-4c22-471f-8ec7-e551dda771f7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('10288880-4c22-471f-8ec7-e551dda771f7', '453c2ab1-3746-4347-ad3c-6d38a497eba3', '終わり', 'おわり', 'sự kết thúc', false, 3, 'pdf', 'needs_review', 'PDF ghi nhãn âm おえる (kun thứ 2 của 終) nhưng từ ví dụ kèm theo lại là ''終わり'' (đọc おわり, cùng âm với kun thứ nhất おわる), không phải ''終える'' (đọc おえる, nghĩa ''làm xong việc gì''). Giữ nguyên đúng như PDF ghi, đề xuất kiểm tra lại — nhiều khả năng PDF nguồn bị lỗi in ấn/đánh máy giữa 終わり và 終える.');
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '853e23e4-6340-446e-8f46-bdb96668dce8', id, 'on', 'シュウ', false, 3, 'ok', NULL from jp_kanji where id = '10288880-4c22-471f-8ec7-e551dda771f7'
on conflict (id) do nothing;

-- ---------- 社 (XÃ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c2a6400a-5348-472a-bac8-b4be04dbeac9', 'N4', '社', 'XÃ', 'công ty, đền thờ, xã hội', 7, '示', '社 có bộ 示 (thần linh) bên trái — nơi thờ cúng (đền, 神社) cũng là gốc nghĩa ''tổ chức, công ty''.', NULL, '{"祈","礼"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '49553ed7-94a8-4ae0-9b1d-f2850fc7909d', id, 'kun', 'やしろ', false, 3, 'ok', NULL from jp_kanji where id = 'c2a6400a-5348-472a-bac8-b4be04dbeac9'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e56b08ca-1b54-454a-b0c1-49ce6abf4786', id, 'on', 'シャ', true, 3, 'ok', NULL from jp_kanji where id = 'c2a6400a-5348-472a-bac8-b4be04dbeac9'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c2a6400a-5348-472a-bac8-b4be04dbeac9', 'e56b08ca-1b54-454a-b0c1-49ce6abf4786', '本社', 'ほんしゃ', 'trụ sở chính', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c2a6400a-5348-472a-bac8-b4be04dbeac9', 'e56b08ca-1b54-454a-b0c1-49ce6abf4786', '旅行社', 'りょこうしゃ', 'công ty du lịch', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6a6462e5-8350-4608-9cfe-78d93981957f', id, 'on', 'ジャ', false, 3, 'ok', NULL from jp_kanji where id = 'c2a6400a-5348-472a-bac8-b4be04dbeac9'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c2a6400a-5348-472a-bac8-b4be04dbeac9', '6a6462e5-8350-4608-9cfe-78d93981957f', '神社', 'じんじゃ', 'đền thờ, miếu', false, 3, 'pdf', 'ok', NULL);

-- ---------- 銀 (NGÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3911adda-ae09-40cc-8c1b-b88ad8f9f77b', 'N4', '銀', 'NGÂN', 'bạc, tiền tệ, ngân hàng', 14, '金', '銀 có bộ 金 (kim loại) — bạc là 1 loại kim loại quý, gắn với ngân hàng.', NULL, '{"録","鏡"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '47fbff18-fa59-4f6c-a0f7-e24210748e44', id, 'kun', NULL, false, 3, 'ok', NULL from jp_kanji where id = '3911adda-ae09-40cc-8c1b-b88ad8f9f77b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '326f6574-a385-4eed-8a68-0be166115d95', id, 'on', 'ギン', true, 3, 'ok', NULL from jp_kanji where id = '3911adda-ae09-40cc-8c1b-b88ad8f9f77b'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3911adda-ae09-40cc-8c1b-b88ad8f9f77b', '326f6574-a385-4eed-8a68-0be166115d95', '銀行', 'ぎんこう', 'ngân hàng', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3911adda-ae09-40cc-8c1b-b88ad8f9f77b', '326f6574-a385-4eed-8a68-0be166115d95', '銀行員', 'ぎんこういん', 'nhân viên ngân hàng', false, 3, 'pdf', 'ok', NULL);

-- ---------- 病 (BỆNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('45db901d-cf4b-42fd-acac-6b3d81ff8b08', 'N4', '病', 'BỆNH', 'bệnh, ốm đau', 10, '疒', '病 có bộ 疒 (bệnh tật) bao ngoài — hình ảnh người nằm trên giường bệnh.', NULL, '{"痛","疲"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c658e46b-95f6-4be9-800c-d6d3ce789d86', id, 'kun', NULL, false, 3, 'ok', NULL from jp_kanji where id = '45db901d-cf4b-42fd-acac-6b3d81ff8b08'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e5c8bd48-590f-4fc4-9129-3c4ff8ceb664', id, 'on', 'ビョウ', true, 3, 'ok', NULL from jp_kanji where id = '45db901d-cf4b-42fd-acac-6b3d81ff8b08'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('45db901d-cf4b-42fd-acac-6b3d81ff8b08', 'e5c8bd48-590f-4fc4-9129-3c4ff8ceb664', '病院', 'びょういん', 'bệnh viện', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('45db901d-cf4b-42fd-acac-6b3d81ff8b08', 'e5c8bd48-590f-4fc4-9129-3c4ff8ceb664', '病気', 'びょうき', 'bệnh tật, ốm', false, 3, 'pdf', 'ok', NULL);

-- ---------- 院 (VIỆN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('36759251-3b7c-4b3c-8c37-9de94ea7ae67', 'N4', '院', 'VIỆN', 'viện, cơ sở lớn (bệnh viện, học viện)', 10, '阝', '院 có bộ 阝(こざとへん, gò đất) — khuôn viên lớn có tường bao quanh như 1 viện.', NULL, '{"陰","陽"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0362df18-8454-4d3b-b1fb-5103aa7168df', id, 'kun', NULL, false, 3, 'ok', NULL from jp_kanji where id = '36759251-3b7c-4b3c-8c37-9de94ea7ae67'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ed610ac7-7a24-4951-b7f5-794bae542c97', id, 'on', 'イン', true, 3, 'ok', NULL from jp_kanji where id = '36759251-3b7c-4b3c-8c37-9de94ea7ae67'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('36759251-3b7c-4b3c-8c37-9de94ea7ae67', 'ed610ac7-7a24-4951-b7f5-794bae542c97', '美容院', 'びよういん', 'tiệm làm tóc, salon', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('36759251-3b7c-4b3c-8c37-9de94ea7ae67', 'ed610ac7-7a24-4951-b7f5-794bae542c97', '大学院', 'だいがくいん', 'cao học', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('36759251-3b7c-4b3c-8c37-9de94ea7ae67', 'ed610ac7-7a24-4951-b7f5-794bae542c97', '入院する', 'にゅういんする', 'nhập viện', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('36759251-3b7c-4b3c-8c37-9de94ea7ae67', 'ed610ac7-7a24-4951-b7f5-794bae542c97', '退院する', 'たいいんする', 'ra viện', false, 3, 'pdf', 'ok', NULL);

-- ---------- 世 (THẾ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d5d0d974-15ab-44db-a9d4-5528dcb30765', 'N4', '世', 'THẾ', 'đời, thế hệ, thế giới', 5, '一', '世 là hình 3 chữ 十 nối liền — biểu thị 30 năm, tức 1 thế hệ (đời người).', NULL, '{"巷","枼"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '851b88ed-e98e-4e99-a970-54e0d6067f09', id, 'kun', 'よ', false, 3, 'ok', NULL from jp_kanji where id = 'd5d0d974-15ab-44db-a9d4-5528dcb30765'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '713cfcda-1e36-4806-b618-cba0f5999b8f', id, 'on', 'セ', true, 3, 'ok', NULL from jp_kanji where id = 'd5d0d974-15ab-44db-a9d4-5528dcb30765'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d5d0d974-15ab-44db-a9d4-5528dcb30765', '713cfcda-1e36-4806-b618-cba0f5999b8f', '世話', 'せわ', 'sự chăm sóc', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c4e07de4-12a2-48e9-acf5-c0658399ec97', id, 'on', 'セイ', false, 3, 'ok', NULL from jp_kanji where id = 'd5d0d974-15ab-44db-a9d4-5528dcb30765'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d5d0d974-15ab-44db-a9d4-5528dcb30765', 'c4e07de4-12a2-48e9-acf5-c0658399ec97', '世界', 'せかい', 'thế giới', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d5d0d974-15ab-44db-a9d4-5528dcb30765', 'c4e07de4-12a2-48e9-acf5-c0658399ec97', '世界中', 'せかいじゅう', 'khắp thế giới', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d5d0d974-15ab-44db-a9d4-5528dcb30765', 'c4e07de4-12a2-48e9-acf5-c0658399ec97', '世界遺産', 'せかいいさん', 'di sản thế giới', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d5d0d974-15ab-44db-a9d4-5528dcb30765', 'c4e07de4-12a2-48e9-acf5-c0658399ec97', '世界初', 'せかいはつ', 'đầu tiên trên thế giới', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d5d0d974-15ab-44db-a9d4-5528dcb30765', 'c4e07de4-12a2-48e9-acf5-c0658399ec97', '世紀', 'せいき', 'thế kỷ', false, 3, 'pdf', 'ok', NULL);

-- ---------- 界 (GIỚI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1', 'N4', '界', 'GIỚI', 'giới, phạm vi, ranh giới', 9, '田', '界 có bộ 田 (ruộng) trên 介 — ranh giới giữa các thửa ruộng.', NULL, '{"畑","留"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ec198e6d-ae0c-4255-9d18-5a3909a9f1fe', id, 'kun', NULL, false, 3, 'ok', NULL from jp_kanji where id = '9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8dd6896b-403f-4b72-9a08-1b148646d4fd', id, 'on', 'カイ', true, 3, 'ok', NULL from jp_kanji where id = '9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1', '8dd6896b-403f-4b72-9a08-1b148646d4fd', '世界', 'せかい', 'thế giới', false, 3, 'pdf', 'ok', NULL);

-- ---------- 教 (GIÁO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('9ab993cd-f322-4fa4-83a2-dcfdd745af47', 'N4', '教', 'GIÁO', 'dạy học, tôn giáo', 11, '攵', '教 có bộ 攵 (cầm roi/gõ nhẹ) bên phải — hình ảnh thầy giáo dạy dỗ, uốn nắn học trò.', NULL, '{"数","敗"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9b8b9e66-5ca2-4c11-9053-7a21053b0404', id, 'kun', 'おしえる', true, 3, 'ok', NULL from jp_kanji where id = '9ab993cd-f322-4fa4-83a2-dcfdd745af47'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9ab993cd-f322-4fa4-83a2-dcfdd745af47', '9b8b9e66-5ca2-4c11-9053-7a21053b0404', '教える', 'おしえる', 'giảng dạy', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '99dde651-b3b6-43c6-a781-20a2c84b0b72', id, 'kun', 'おそわる', false, 3, 'ok', NULL from jp_kanji where id = '9ab993cd-f322-4fa4-83a2-dcfdd745af47'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9ab993cd-f322-4fa4-83a2-dcfdd745af47', '99dde651-b3b6-43c6-a781-20a2c84b0b72', '教わる', 'おそわる', 'học, được dạy (từ ai đó)', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6224d2b0-bdc0-4cc5-a7f8-048322c19aaa', id, 'on', 'キョウ', true, 3, 'ok', NULL from jp_kanji where id = '9ab993cd-f322-4fa4-83a2-dcfdd745af47'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9ab993cd-f322-4fa4-83a2-dcfdd745af47', '6224d2b0-bdc0-4cc5-a7f8-048322c19aaa', '教師', 'きょうし', 'giáo viên', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9ab993cd-f322-4fa4-83a2-dcfdd745af47', '6224d2b0-bdc0-4cc5-a7f8-048322c19aaa', '教室', 'きょうしつ', 'phòng học', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('9ab993cd-f322-4fa4-83a2-dcfdd745af47', '6224d2b0-bdc0-4cc5-a7f8-048322c19aaa', '教育', 'きょういく', 'giáo dục', false, 3, 'pdf', 'ok', NULL);

-- ---------- 研 (NGHIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('5a33d4eb-4b5f-466d-8d0f-d8dfb29628db', 'N4', '研', 'NGHIÊN', 'nghiên cứu, mài giũa', 9, '石', '研 có bộ 石 (đá) — mài đá để nghiên cứu, tìm hiểu kỹ càng.', NULL, '{"石","破"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '954e1eae-790e-4013-8fb9-ee224b0a8c05', id, 'kun', NULL, false, 3, 'ok', NULL from jp_kanji where id = '5a33d4eb-4b5f-466d-8d0f-d8dfb29628db'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0d471aa8-dbac-4240-a80f-7a167f9c06ec', id, 'on', 'ケン', true, 3, 'ok', NULL from jp_kanji where id = '5a33d4eb-4b5f-466d-8d0f-d8dfb29628db'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5a33d4eb-4b5f-466d-8d0f-d8dfb29628db', '0d471aa8-dbac-4240-a80f-7a167f9c06ec', '研究する', 'けんきゅうする', 'nghiên cứu', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5a33d4eb-4b5f-466d-8d0f-d8dfb29628db', '0d471aa8-dbac-4240-a80f-7a167f9c06ec', '研究者', 'けんきゅうしゃ', 'nhà nghiên cứu', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('5a33d4eb-4b5f-466d-8d0f-d8dfb29628db', '0d471aa8-dbac-4240-a80f-7a167f9c06ec', '研究室', 'けんきゅうしつ', 'phòng nghiên cứu', false, 3, 'pdf', 'ok', NULL);

-- ---------- 究 (CỨU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ddb30744-9137-4ea9-80d4-4881430d0646', 'N4', '究', 'CỨU', 'tìm tòi, nghiên cứu tới cùng', 7, '穴', '究 có bộ 穴 (hang, lỗ) — chui sâu vào hang để tìm tòi, khám phá tận cùng.', NULL, '{"空","突"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '292faeb4-b8ae-4fcc-bec5-0da41e064a78', id, 'kun', NULL, false, 3, 'ok', NULL from jp_kanji where id = 'ddb30744-9137-4ea9-80d4-4881430d0646'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c748a82d-854a-4596-8889-dd1c4a17fb80', id, 'on', 'キュウ', true, 3, 'ok', NULL from jp_kanji where id = 'ddb30744-9137-4ea9-80d4-4881430d0646'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ddb30744-9137-4ea9-80d4-4881430d0646', 'c748a82d-854a-4596-8889-dd1c4a17fb80', '研究する', 'けんきゅうする', 'nghiên cứu', false, 3, 'pdf', 'ok', NULL);

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 終 (CHUNG) có âm chính là gì?', 'おわる', 'ケン', 'キュウ', 'おそわる', 'おわる', 'generated' from jp_kanji where id = '10288880-4c22-471f-8ec7-e551dda771f7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "kết thúc, chấm dứt"?', '界', '病', '社', '終', '終', 'generated' from jp_kanji where id = '10288880-4c22-471f-8ec7-e551dda771f7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"終わる" có nghĩa là gì?', 'giảng dạy', 'nhà nghiên cứu', 'kết thúc', 'cao học', 'kết thúc', 'generated' from jp_kanji where id = '10288880-4c22-471f-8ec7-e551dda771f7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 終わり', 'おわり', 'generated' from jp_kanji where id = '10288880-4c22-471f-8ec7-e551dda771f7';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 社 (XÃ) có âm chính là gì?', 'イン', 'シャ', 'ジャ', 'ビョウ', 'シャ', 'generated' from jp_kanji where id = 'c2a6400a-5348-472a-bac8-b4be04dbeac9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "công ty, đền thờ, xã hội"?', '社', '銀', '世', '教', '社', 'generated' from jp_kanji where id = 'c2a6400a-5348-472a-bac8-b4be04dbeac9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"本社" có nghĩa là gì?', 'học, được dạy (từ ai đó)', 'giáo dục', 'công ty du lịch', 'trụ sở chính', 'trụ sở chính', 'generated' from jp_kanji where id = 'c2a6400a-5348-472a-bac8-b4be04dbeac9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 旅行社', 'りょこうしゃ', 'generated' from jp_kanji where id = 'c2a6400a-5348-472a-bac8-b4be04dbeac9';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 銀 (NGÂN) có âm chính là gì?', 'ギン', 'シャ', 'キュウ', 'セ', 'ギン', 'generated' from jp_kanji where id = '3911adda-ae09-40cc-8c1b-b88ad8f9f77b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bạc, tiền tệ, ngân hàng"?', '界', '研', '終', '銀', '銀', 'generated' from jp_kanji where id = '3911adda-ae09-40cc-8c1b-b88ad8f9f77b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"銀行" có nghĩa là gì?', 'nghiên cứu', 'giáo viên', 'di sản thế giới', 'ngân hàng', 'ngân hàng', 'generated' from jp_kanji where id = '3911adda-ae09-40cc-8c1b-b88ad8f9f77b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 銀行員', 'ぎんこういん', 'generated' from jp_kanji where id = '3911adda-ae09-40cc-8c1b-b88ad8f9f77b';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 病 (BỆNH) có âm chính là gì?', 'おえる', 'やしろ', 'カイ', 'ビョウ', 'ビョウ', 'generated' from jp_kanji where id = '45db901d-cf4b-42fd-acac-6b3d81ff8b08';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bệnh, ốm đau"?', '院', '病', '終', '研', '病', 'generated' from jp_kanji where id = '45db901d-cf4b-42fd-acac-6b3d81ff8b08';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"病院" có nghĩa là gì?', 'nghiên cứu', 'trụ sở chính', 'bệnh viện', 'thế giới', 'bệnh viện', 'generated' from jp_kanji where id = '45db901d-cf4b-42fd-acac-6b3d81ff8b08';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 病気', 'びょうき', 'generated' from jp_kanji where id = '45db901d-cf4b-42fd-acac-6b3d81ff8b08';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 院 (VIỆN) có âm chính là gì?', 'ジャ', 'イン', 'おしえる', 'カイ', 'イン', 'generated' from jp_kanji where id = '36759251-3b7c-4b3c-8c37-9de94ea7ae67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "viện, cơ sở lớn (bệnh viện, học viện)"?', '教', '院', '病', '世', '院', 'generated' from jp_kanji where id = '36759251-3b7c-4b3c-8c37-9de94ea7ae67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"美容院" có nghĩa là gì?', 'đầu tiên trên thế giới', 'phòng nghiên cứu', 'nhà nghiên cứu', 'tiệm làm tóc, salon', 'tiệm làm tóc, salon', 'generated' from jp_kanji where id = '36759251-3b7c-4b3c-8c37-9de94ea7ae67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 大学院', 'だいがくいん', 'generated' from jp_kanji where id = '36759251-3b7c-4b3c-8c37-9de94ea7ae67';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 世 (THẾ) có âm chính là gì?', 'シュウ', 'セ', 'よ', 'おわる', 'セ', 'generated' from jp_kanji where id = 'd5d0d974-15ab-44db-a9d4-5528dcb30765';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đời, thế hệ, thế giới"?', '社', '究', '世', '院', '世', 'generated' from jp_kanji where id = 'd5d0d974-15ab-44db-a9d4-5528dcb30765';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"世話" có nghĩa là gì?', 'bệnh tật, ốm', 'sự chăm sóc', 'giáo viên', 'bệnh viện', 'sự chăm sóc', 'generated' from jp_kanji where id = 'd5d0d974-15ab-44db-a9d4-5528dcb30765';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 世界', 'せかい', 'generated' from jp_kanji where id = 'd5d0d974-15ab-44db-a9d4-5528dcb30765';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 界 (GIỚI) có âm chính là gì?', 'カイ', 'おわる', 'キュウ', 'おしえる', 'カイ', 'generated' from jp_kanji where id = '9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giới, phạm vi, ranh giới"?', '界', '世', '究', '社', '界', 'generated' from jp_kanji where id = '9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"世界" có nghĩa là gì?', 'thế giới', 'nghiên cứu', 'bệnh tật, ốm', 'trụ sở chính', 'thế giới', 'generated' from jp_kanji where id = '9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 世界', 'せかい', 'generated' from jp_kanji where id = '9e9f6bf8-30f1-459e-a5d4-a5fcbac5f2c1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 教 (GIÁO) có âm chính là gì?', 'おそわる', 'おしえる', 'セイ', 'やしろ', 'おしえる', 'generated' from jp_kanji where id = '9ab993cd-f322-4fa4-83a2-dcfdd745af47';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dạy học, tôn giáo"?', '世', '教', '社', '究', '教', 'generated' from jp_kanji where id = '9ab993cd-f322-4fa4-83a2-dcfdd745af47';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"教える" có nghĩa là gì?', 'giảng dạy', 'ra viện', 'học, được dạy (từ ai đó)', 'nghiên cứu', 'giảng dạy', 'generated' from jp_kanji where id = '9ab993cd-f322-4fa4-83a2-dcfdd745af47';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 教わる', 'おそわる', 'generated' from jp_kanji where id = '9ab993cd-f322-4fa4-83a2-dcfdd745af47';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 研 (NGHIÊN) có âm chính là gì?', 'おそわる', 'ケン', 'ビョウ', 'よ', 'ケン', 'generated' from jp_kanji where id = '5a33d4eb-4b5f-466d-8d0f-d8dfb29628db';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nghiên cứu, mài giũa"?', '社', '病', '究', '研', '研', 'generated' from jp_kanji where id = '5a33d4eb-4b5f-466d-8d0f-d8dfb29628db';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"研究する" có nghĩa là gì?', 'nghiên cứu', 'sự kết thúc', 'ngân hàng', 'nhân viên ngân hàng', 'nghiên cứu', 'generated' from jp_kanji where id = '5a33d4eb-4b5f-466d-8d0f-d8dfb29628db';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 研究者', 'けんきゅうしゃ', 'generated' from jp_kanji where id = '5a33d4eb-4b5f-466d-8d0f-d8dfb29628db';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 究 (CỨU) có âm chính là gì?', 'ビョウ', 'セイ', 'おそわる', 'キュウ', 'キュウ', 'generated' from jp_kanji where id = 'ddb30744-9137-4ea9-80d4-4881430d0646';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tìm tòi, nghiên cứu tới cùng"?', '社', '病', '究', '教', '究', 'generated' from jp_kanji where id = 'ddb30744-9137-4ea9-80d4-4881430d0646';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"研究する" có nghĩa là gì?', 'công ty du lịch', 'nhà nghiên cứu', 'nghiên cứu', 'phòng học', 'nghiên cứu', 'generated' from jp_kanji where id = 'ddb30744-9137-4ea9-80d4-4881430d0646';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 研究する', 'けんきゅうする', 'generated' from jp_kanji where id = 'ddb30744-9137-4ea9-80d4-4881430d0646';


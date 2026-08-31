-- ============================================================
-- jp-go — Kanji N4, round 7 (17 kanji, trang in 8).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- ============================================================

-- ---------- 早 (TẢO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('46052a2f-c461-489f-ac34-76218984ce85', 'N4', '早', 'TẢO', 'sớm', 6, '日', '早 có bộ 日(mặt trời) trên đầu — mặt trời vừa lên là còn sớm.', NULL, '{"旦","草"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b2d0d7a4-fa89-407f-be4a-8814d01d69f5', id, 'kun', 'はやい', true, 8, 'ok', NULL from jp_kanji where id = '46052a2f-c461-489f-ac34-76218984ce85'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('46052a2f-c461-489f-ac34-76218984ce85', 'b2d0d7a4-fa89-407f-be4a-8814d01d69f5', '早い', 'はやい', 'sớm', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eb0c2814-58ce-4e83-b093-6e2d1cc9b3b4', id, 'on', 'ソウ', false, 8, 'ok', NULL from jp_kanji where id = '46052a2f-c461-489f-ac34-76218984ce85'
on conflict (id) do nothing;

-- ---------- 速 (TỐC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c334bb13-e98a-4819-b470-c9cf7f4f7ff0', 'N4', '速', 'TỐC', 'nhanh, tốc độ', 10, '辶', '速 có bộ 辶(đi) — đi nhanh, tốc độ.', NULL, '{"束","遠"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '22228c06-283d-4a57-ab3c-a5ed8f5c916f', id, 'kun', 'はやい', true, 8, 'ok', NULL from jp_kanji where id = 'c334bb13-e98a-4819-b470-c9cf7f4f7ff0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c334bb13-e98a-4819-b470-c9cf7f4f7ff0', '22228c06-283d-4a57-ab3c-a5ed8f5c916f', '速い', 'はやい', 'nhanh chóng', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6d40ac11-bb24-4ffb-8c8e-2372509b43f8', id, 'on', 'ソク', false, 8, 'ok', NULL from jp_kanji where id = 'c334bb13-e98a-4819-b470-c9cf7f4f7ff0'
on conflict (id) do nothing;

-- ---------- 遅 (TRÌ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c5935297-5f4b-40f7-bd68-d7f30918e545', 'N4', '遅', 'TRÌ', 'muộn, chậm trễ', 12, '辶', '遅 có bộ 辶(đi) — đi chậm nên hay bị muộn.', NULL, '{"犀","尾"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9701e3cf-cead-419c-8173-647101e4b9b2', id, 'kun', 'おそい', true, 8, 'ok', NULL from jp_kanji where id = 'c5935297-5f4b-40f7-bd68-d7f30918e545'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c5935297-5f4b-40f7-bd68-d7f30918e545', '9701e3cf-cead-419c-8173-647101e4b9b2', '遅い', 'おそい', 'muộn, chậm', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c3ddc763-23b5-413d-a7bc-281478bce204', id, 'kun', 'おくれる', false, 8, 'ok', NULL from jp_kanji where id = 'c5935297-5f4b-40f7-bd68-d7f30918e545'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c5935297-5f4b-40f7-bd68-d7f30918e545', 'c3ddc763-23b5-413d-a7bc-281478bce204', '遅れる', 'おくれる', 'bị trễ, đến muộn', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '24557518-4474-4d47-bb5e-61dbb0d7d665', id, 'on', 'チ', false, 8, 'ok', NULL from jp_kanji where id = 'c5935297-5f4b-40f7-bd68-d7f30918e545'
on conflict (id) do nothing;

-- ---------- 重 (TRỌNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('18759c63-497d-4ade-bc5a-baa8cfcc7c8a', 'N4', '重', 'TRỌNG', 'nặng, coi trọng', 9, '里', '重 có bộ 里(dặm đường) — đi xa mang vác đồ nặng.', NULL, '{"里","動"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5051fa41-725f-4106-abf7-91b5ffcf1abc', id, 'kun', 'おもい', true, 8, 'ok', NULL from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('18759c63-497d-4ade-bc5a-baa8cfcc7c8a', '5051fa41-725f-4106-abf7-91b5ffcf1abc', '重い', 'おもい', 'nặng', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('18759c63-497d-4ade-bc5a-baa8cfcc7c8a', '5051fa41-725f-4106-abf7-91b5ffcf1abc', '重さ', 'おもさ', 'sức nặng', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f3a9ece1-b793-4265-a062-f732bf06d3a9', id, 'kun', 'かさねる', false, 8, 'ok', NULL from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '9c4690a6-11b7-4934-b39a-7bb3bf9344b1', id, 'kun', 'かさなる', false, 8, 'ok', NULL from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5407e381-3f5d-43c9-8fe6-be0bd3bb3349', id, 'on', 'ジュウ', false, 8, 'ok', NULL from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a'
on conflict (id) do nothing;

-- ---------- 軽 (KHINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d2c5f110-86fc-445a-90bd-6980da3f3cb1', 'N4', '軽', 'KHINH', 'nhẹ, xem nhẹ', 12, '車', '軽 có bộ 車(xe) — xe nhẹ chạy nhanh hơn.', NULL, '{"経","径"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6703fb1d-a177-49bb-9c8d-309e10dadb57', id, 'kun', 'かるい', true, 8, 'ok', NULL from jp_kanji where id = 'd2c5f110-86fc-445a-90bd-6980da3f3cb1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d2c5f110-86fc-445a-90bd-6980da3f3cb1', '6703fb1d-a177-49bb-9c8d-309e10dadb57', '軽い', 'かるい', 'nhẹ', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8e6204a5-5b45-416f-ab78-6d0cc8d49003', id, 'kun', 'かろやか', false, 8, 'ok', NULL from jp_kanji where id = 'd2c5f110-86fc-445a-90bd-6980da3f3cb1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c0cd270e-c119-4c7f-9794-17be06391466', id, 'on', 'ケイ', false, 8, 'ok', NULL from jp_kanji where id = 'd2c5f110-86fc-445a-90bd-6980da3f3cb1'
on conflict (id) do nothing;

-- ---------- 近 (CẬN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('bd73c930-2a9b-43a7-beef-6b4bc46fb741', 'N4', '近', 'CẬN', 'gần', 7, '辶', '近 có bộ 辶(đi) — đi 1 đoạn ngắn (斤) là gần.', NULL, '{"折","所"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3620259e-3216-489f-90db-e4c463cbcf36', id, 'kun', 'ちかい', true, 8, 'ok', NULL from jp_kanji where id = 'bd73c930-2a9b-43a7-beef-6b4bc46fb741'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bd73c930-2a9b-43a7-beef-6b4bc46fb741', '3620259e-3216-489f-90db-e4c463cbcf36', '近い', 'ちかい', 'gần', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '662033aa-e344-4956-bb92-6b0baa85adb3', id, 'on', 'キン', false, 8, 'ok', NULL from jp_kanji where id = 'bd73c930-2a9b-43a7-beef-6b4bc46fb741'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bd73c930-2a9b-43a7-beef-6b4bc46fb741', '662033aa-e344-4956-bb92-6b0baa85adb3', '最近', 'さいきん', 'gần đây (thời gian)', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8468dcea-fd7a-4767-a800-38e9023a71ad', id, 'on', 'コン', false, 8, 'ok', NULL from jp_kanji where id = 'bd73c930-2a9b-43a7-beef-6b4bc46fb741'
on conflict (id) do nothing;

-- ---------- 遠 (VIỄN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('a46677b9-5f11-4f19-97db-0dd8bcd8a63d', 'N4', '遠', 'VIỄN', 'xa', 13, '辶', '遠 có bộ 辶(đi) — phải đi đoạn đường dài (袁) mới tới, tức là xa.', NULL, '{"園","還"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1749dcd9-68a9-4a85-9f4d-d58132a5c05e', id, 'kun', 'とおい', true, 8, 'ok', NULL from jp_kanji where id = 'a46677b9-5f11-4f19-97db-0dd8bcd8a63d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a46677b9-5f11-4f19-97db-0dd8bcd8a63d', '1749dcd9-68a9-4a85-9f4d-d58132a5c05e', '遠い', 'とおい', 'xa', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b23e9724-71c1-471d-b44f-64607cd6fe43', id, 'on', 'エン', false, 8, 'ok', NULL from jp_kanji where id = 'a46677b9-5f11-4f19-97db-0dd8bcd8a63d'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '01ac99dc-c9d4-4222-b57b-3b3d18a3870e', id, 'on', 'オン', false, 8, 'ok', NULL from jp_kanji where id = 'a46677b9-5f11-4f19-97db-0dd8bcd8a63d'
on conflict (id) do nothing;

-- ---------- 質 (CHẤT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c5377e9a-73c5-48d2-85cb-feb9d0018df1', 'N4', '質', 'CHẤT', 'chất lượng, chất vấn', 15, '貝', '質 có bộ 貝(tiền, của cải) ở dưới — của cải thật chất là tài sản.', NULL, '{"貨","資"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '945c6e67-773e-4f1a-83a4-ec2d125a6ca7', id, 'kun', NULL, false, 8, 'ok', NULL from jp_kanji where id = 'c5377e9a-73c5-48d2-85cb-feb9d0018df1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f4dabbf0-ed01-4e49-a5ac-4e53dfd797c7', id, 'on', 'シツ', true, 8, 'ok', NULL from jp_kanji where id = 'c5377e9a-73c5-48d2-85cb-feb9d0018df1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c5377e9a-73c5-48d2-85cb-feb9d0018df1', 'f4dabbf0-ed01-4e49-a5ac-4e53dfd797c7', '質問する', 'しつもんする', 'hỏi', false, 8, 'pdf', 'ok', NULL);

-- ---------- 問 (VẤN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1baa9082-5dc9-4510-97a1-97f3d0fdd09f', 'N4', '問', 'VẤN', 'hỏi, câu hỏi', 11, '口', '問 có bộ 口(miệng) ở dưới cánh cổng 門 — đứng ngoài cổng dùng miệng hỏi thăm.', NULL, '{"間","開"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '111dd7b7-7766-44ea-8a4b-39e7d3b27414', id, 'kun', 'とう', false, 8, 'ok', NULL from jp_kanji where id = '1baa9082-5dc9-4510-97a1-97f3d0fdd09f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3fa52214-690a-4833-a2dd-e17ba99e3139', id, 'kun', 'とい', false, 8, 'ok', NULL from jp_kanji where id = '1baa9082-5dc9-4510-97a1-97f3d0fdd09f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1413cdbc-ad5b-4b45-8707-b0933232fa34', id, 'on', 'モン', true, 8, 'ok', NULL from jp_kanji where id = '1baa9082-5dc9-4510-97a1-97f3d0fdd09f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1baa9082-5dc9-4510-97a1-97f3d0fdd09f', '1413cdbc-ad5b-4b45-8707-b0933232fa34', '問題', 'もんだい', 'vấn đề', false, 8, 'pdf', 'ok', NULL);

-- ---------- 答 (ĐÁP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('0cbd9b6d-bd35-44d1-80a0-329bc221b6bf', 'N4', '答', 'ĐÁP', 'trả lời, đáp lại', 12, '竹', '答 có bộ 竹(tre) trên đầu — thời xưa viết câu trả lời lên thẻ tre.', NULL, '{"合","塔"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '46367c3f-59d1-4111-bacf-4da21b6c9219', id, 'kun', 'こたえ', true, 8, 'ok', NULL from jp_kanji where id = '0cbd9b6d-bd35-44d1-80a0-329bc221b6bf'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0cbd9b6d-bd35-44d1-80a0-329bc221b6bf', '46367c3f-59d1-4111-bacf-4da21b6c9219', '答え', 'こたえ', 'câu trả lời', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4e8b5c83-916d-4e45-9f1c-a477596f849a', id, 'kun', 'こたえる', false, 8, 'ok', NULL from jp_kanji where id = '0cbd9b6d-bd35-44d1-80a0-329bc221b6bf'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0cbd9b6d-bd35-44d1-80a0-329bc221b6bf', '4e8b5c83-916d-4e45-9f1c-a477596f849a', '答える', 'こたえる', 'trả lời', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f84e2ee7-ab24-4759-9019-7e62899064e2', id, 'on', 'トウ', false, 8, 'ok', NULL from jp_kanji where id = '0cbd9b6d-bd35-44d1-80a0-329bc221b6bf'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0cbd9b6d-bd35-44d1-80a0-329bc221b6bf', 'f84e2ee7-ab24-4759-9019-7e62899064e2', '回答', 'かいとう', 'trả lời', false, 8, 'pdf', 'ok', NULL);

-- ---------- 作 (TÁC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('0ac327d7-eead-44c3-bd72-e6dfb8754135', 'N4', '作', 'TÁC', 'làm, chế tạo', 7, '亻', '作 có bộ 亻(người) bên trái — người làm ra, chế tạo ra vật gì đó.', NULL, '{"昨","他"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '27836aa3-d754-48c9-9b46-8ecbf59b9c92', id, 'kun', 'つくる', true, 8, 'ok', NULL from jp_kanji where id = '0ac327d7-eead-44c3-bd72-e6dfb8754135'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0ac327d7-eead-44c3-bd72-e6dfb8754135', '27836aa3-d754-48c9-9b46-8ecbf59b9c92', '作る', 'つくる', 'làm, chế biến', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b2d43455-727c-4fc1-8834-565ab482cfee', id, 'on', 'サク', false, 8, 'ok', NULL from jp_kanji where id = '0ac327d7-eead-44c3-bd72-e6dfb8754135'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0ac327d7-eead-44c3-bd72-e6dfb8754135', 'b2d43455-727c-4fc1-8834-565ab482cfee', '作文', 'さくぶん', 'bài văn', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '38d4cb40-d6da-4308-b4a7-e1724fea0468', id, 'on', 'サ', false, 8, 'ok', NULL from jp_kanji where id = '0ac327d7-eead-44c3-bd72-e6dfb8754135'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0ac327d7-eead-44c3-bd72-e6dfb8754135', '38d4cb40-d6da-4308-b4a7-e1724fea0468', '操作', 'そうさ', 'thao tác, vận hành', false, 8, 'pdf', 'ok', NULL);

-- ---------- 思 (TƯ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d54c3844-4f13-4ad3-8418-5b971e51ce1f', 'N4', '思', 'TƯ', 'nghĩ, suy nghĩ', 9, '心', '思 có bộ 心(trái tim) ở dưới — dùng trái tim và cái đầu (田) để suy nghĩ.', NULL, '{"恩","田"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4bb4c4ff-4b5a-4e0b-80e3-6c4194d1312d', id, 'kun', 'おもう', true, 8, 'ok', NULL from jp_kanji where id = 'd54c3844-4f13-4ad3-8418-5b971e51ce1f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d54c3844-4f13-4ad3-8418-5b971e51ce1f', '4bb4c4ff-4b5a-4e0b-80e3-6c4194d1312d', '思う', 'おもう', 'nghĩ', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '32acddfe-a8d3-458a-8044-0a5bf828ce07', id, 'kun', 'おもいだす', false, 8, 'ok', NULL from jp_kanji where id = 'd54c3844-4f13-4ad3-8418-5b971e51ce1f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d54c3844-4f13-4ad3-8418-5b971e51ce1f', '32acddfe-a8d3-458a-8044-0a5bf828ce07', '思い出す', 'おもいだす', 'nhớ lại', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '95c17e1a-cc37-4930-9768-421e0b088615', id, 'on', 'シ', false, 8, 'ok', NULL from jp_kanji where id = 'd54c3844-4f13-4ad3-8418-5b971e51ce1f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d54c3844-4f13-4ad3-8418-5b971e51ce1f', '95c17e1a-cc37-4930-9768-421e0b088615', '不思議な', 'ふしぎな', 'kỳ lạ, ảo', false, 8, 'pdf', 'ok', NULL);

-- ---------- 始 (THỦY) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('87bd4fce-00da-4b48-897b-c8b1998dcf5c', 'N4', '始', 'THỦY', 'bắt đầu', 8, '女', '始 có bộ 女(phụ nữ) bên trái — người mẹ (女) sinh con (台) là khởi đầu của 1 đời người.', NULL, '{"治","胎"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '78415743-bf71-4043-b081-a0ba5f087708', id, 'kun', 'はじめる', true, 8, 'ok', NULL from jp_kanji where id = '87bd4fce-00da-4b48-897b-c8b1998dcf5c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('87bd4fce-00da-4b48-897b-c8b1998dcf5c', '78415743-bf71-4043-b081-a0ba5f087708', '始める', 'はじめる', 'bắt đầu', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '542aa99a-267d-4c0d-b70d-9cba885156a8', id, 'kun', 'はじまる', false, 8, 'ok', NULL from jp_kanji where id = '87bd4fce-00da-4b48-897b-c8b1998dcf5c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('87bd4fce-00da-4b48-897b-c8b1998dcf5c', '542aa99a-267d-4c0d-b70d-9cba885156a8', '始まる', 'はじまる', 'bắt đầu (tự động)', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eb171b24-b2c1-428d-bebc-6cd8d40aab03', id, 'on', 'シ', false, 8, 'ok', NULL from jp_kanji where id = '87bd4fce-00da-4b48-897b-c8b1998dcf5c'
on conflict (id) do nothing;

-- ---------- 着 (TRỚ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('b2bcfc24-5091-481a-8199-fd81afaac795', 'N4', '着', 'TRỚ', 'mặc, đến nơi, bám vào', 12, '目', '着 có bộ 目(mắt) ở dưới — nhìn thấy đích đến (đến nơi) hoặc nhìn thấy quần áo (mặc).', NULL, '{"差","羊"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '29dbdd3b-26af-4796-975c-cfc7106e4d85', id, 'kun', 'きる', true, 8, 'ok', NULL from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b2bcfc24-5091-481a-8199-fd81afaac795', '29dbdd3b-26af-4796-975c-cfc7106e4d85', '着る', 'きる', 'mặc', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b2bcfc24-5091-481a-8199-fd81afaac795', '29dbdd3b-26af-4796-975c-cfc7106e4d85', '上着', 'うわぎ', 'áo khoác', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b2bcfc24-5091-481a-8199-fd81afaac795', '29dbdd3b-26af-4796-975c-cfc7106e4d85', '下着', 'したぎ', 'đồ lót', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b2bcfc24-5091-481a-8199-fd81afaac795', '29dbdd3b-26af-4796-975c-cfc7106e4d85', '着物', 'きもの', 'trang phục Kimono', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0803e6b4-2a8d-4d47-bd11-96ac2dd3f6e7', id, 'kun', 'つく', false, 8, 'ok', NULL from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b2bcfc24-5091-481a-8199-fd81afaac795', '0803e6b4-2a8d-4d47-bd11-96ac2dd3f6e7', '着く', 'つく', 'đến nơi', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '95781115-3b59-4d45-93d1-8443c4a5c237', id, 'kun', 'つける', false, 8, 'ok', NULL from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '03a27c57-9819-4171-aa48-75737e5b130c', id, 'on', 'チャク', false, 8, 'ok', NULL from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b2bcfc24-5091-481a-8199-fd81afaac795', '03a27c57-9819-4171-aa48-75737e5b130c', '到着する', 'とうちゃくする', 'đến nơi', false, 8, 'pdf', 'ok', NULL);

-- ---------- 集 (TẬP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('864a9b54-4287-4c21-95c6-e15c3f5acd0f', 'N4', '集', 'TẬP', 'tập hợp, tụ tập', 12, '隹', '集 có bộ 隹(chim) trên 木(cây) — đàn chim tụ tập, đậu trên cây.', NULL, '{"雑","焦"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8dbd7355-3422-4071-a143-66a70a7f178a', id, 'kun', 'あつめる', true, 8, 'ok', NULL from jp_kanji where id = '864a9b54-4287-4c21-95c6-e15c3f5acd0f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('864a9b54-4287-4c21-95c6-e15c3f5acd0f', '8dbd7355-3422-4071-a143-66a70a7f178a', '集める', 'あつめる', 'tập hợp, sưu tầm', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '439ad149-2465-4fec-ab64-224c42ee4c0b', id, 'kun', 'あつまる', false, 8, 'ok', NULL from jp_kanji where id = '864a9b54-4287-4c21-95c6-e15c3f5acd0f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('864a9b54-4287-4c21-95c6-e15c3f5acd0f', '439ad149-2465-4fec-ab64-224c42ee4c0b', '集まる', 'あつまる', 'tập trung, tụ tập', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e36f905a-bc31-4cc6-b416-e02a61eecc52', id, 'on', 'シュウ', false, 8, 'ok', NULL from jp_kanji where id = '864a9b54-4287-4c21-95c6-e15c3f5acd0f'
on conflict (id) do nothing;

-- ---------- 練 (LUYỆN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('e319128f-9d66-4fc9-af96-6d9f0b9509f6', 'N4', '練', 'LUYỆN', 'luyện tập, rèn luyện', 14, '糸', '練 có bộ 糸(sợi tơ) — luyện, xe sợi tơ nhiều lần cho mềm, bền.', NULL, '{"連","湅"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6d2e6c0c-67fb-4472-aadd-54785083495c', id, 'kun', 'ねる', false, 8, 'ok', NULL from jp_kanji where id = 'e319128f-9d66-4fc9-af96-6d9f0b9509f6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1e5b2aa6-366c-4167-a5c2-95e16f6e7952', id, 'kun', 'ねり', false, 8, 'ok', NULL from jp_kanji where id = 'e319128f-9d66-4fc9-af96-6d9f0b9509f6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'af749ee5-a27c-47c5-b478-947dd6b393d7', id, 'on', 'レン', true, 8, 'ok', NULL from jp_kanji where id = 'e319128f-9d66-4fc9-af96-6d9f0b9509f6'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('e319128f-9d66-4fc9-af96-6d9f0b9509f6', 'af749ee5-a27c-47c5-b478-947dd6b393d7', '練習', 'れんしゅう', 'luyện tập', false, 8, 'pdf', 'ok', NULL);

-- ---------- 晴 (TÌNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('83730594-6426-453b-91b0-8dc43ed3f906', 'N4', '晴', 'TÌNH', 'nắng, quang đãng', 12, '日', '晴 có bộ 日(mặt trời) bên trái — mặt trời tỏ rõ (青, xanh trong) là trời nắng.', NULL, '{"清","青"}', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd30ce818-3953-49fe-9fed-11375674aa95', id, 'kun', 'はれる', true, 8, 'ok', NULL from jp_kanji where id = '83730594-6426-453b-91b0-8dc43ed3f906'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('83730594-6426-453b-91b0-8dc43ed3f906', 'd30ce818-3953-49fe-9fed-11375674aa95', '晴れる', 'はれる', 'nắng', false, 8, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6e79dda3-a763-4165-86fc-4b10da8d80be', id, 'kun', 'はらす', false, 8, 'ok', NULL from jp_kanji where id = '83730594-6426-453b-91b0-8dc43ed3f906'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c957af0b-b075-4348-966e-f7371db21cf0', id, 'on', 'セイ', false, 8, 'ok', NULL from jp_kanji where id = '83730594-6426-453b-91b0-8dc43ed3f906'
on conflict (id) do nothing;

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 早 (TẢO) có âm chính là gì?', 'トウ', 'はやい', 'あつまる', 'とい', 'はやい', 'generated' from jp_kanji where id = '46052a2f-c461-489f-ac34-76218984ce85';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sớm"?', '着', '軽', '早', '作', '早', 'generated' from jp_kanji where id = '46052a2f-c461-489f-ac34-76218984ce85';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"早い" có nghĩa là gì?', 'bị trễ, đến muộn', 'nhớ lại', 'gần', 'sớm', 'sớm', 'generated' from jp_kanji where id = '46052a2f-c461-489f-ac34-76218984ce85';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 早い', 'はやい', 'generated' from jp_kanji where id = '46052a2f-c461-489f-ac34-76218984ce85';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 速 (TỐC) có âm chính là gì?', 'つく', 'はやい', 'キン', 'きる', 'はやい', 'generated' from jp_kanji where id = 'c334bb13-e98a-4819-b470-c9cf7f4f7ff0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhanh, tốc độ"?', '着', '速', '練', '遠', '速', 'generated' from jp_kanji where id = 'c334bb13-e98a-4819-b470-c9cf7f4f7ff0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"速い" có nghĩa là gì?', 'nhanh chóng', 'bài văn', 'sức nặng', 'nắng', 'nhanh chóng', 'generated' from jp_kanji where id = 'c334bb13-e98a-4819-b470-c9cf7f4f7ff0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 速い', 'はやい', 'generated' from jp_kanji where id = 'c334bb13-e98a-4819-b470-c9cf7f4f7ff0';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 遅 (TRÌ) có âm chính là gì?', 'はじめる', 'おそい', 'エン', 'おもう', 'おそい', 'generated' from jp_kanji where id = 'c5935297-5f4b-40f7-bd68-d7f30918e545';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "muộn, chậm trễ"?', '着', '集', '問', '遅', '遅', 'generated' from jp_kanji where id = 'c5935297-5f4b-40f7-bd68-d7f30918e545';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"遅い" có nghĩa là gì?', 'muộn, chậm', 'trả lời', 'nghĩ', 'câu trả lời', 'muộn, chậm', 'generated' from jp_kanji where id = 'c5935297-5f4b-40f7-bd68-d7f30918e545';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 遅れる', 'おくれる', 'generated' from jp_kanji where id = 'c5935297-5f4b-40f7-bd68-d7f30918e545';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 重 (TRỌNG) có âm chính là gì?', 'おもい', 'おくれる', 'とおい', 'はれる', 'おもい', 'generated' from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nặng, coi trọng"?', '晴', '速', '重', '軽', '重', 'generated' from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"重い" có nghĩa là gì?', 'sớm', 'nghĩ', 'bắt đầu (tự động)', 'nặng', 'nặng', 'generated' from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 重さ', 'おもさ', 'generated' from jp_kanji where id = '18759c63-497d-4ade-bc5a-baa8cfcc7c8a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 軽 (KHINH) có âm chính là gì?', 'サク', 'とう', 'はじめる', 'かるい', 'かるい', 'generated' from jp_kanji where id = 'd2c5f110-86fc-445a-90bd-6980da3f3cb1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhẹ, xem nhẹ"?', '質', '遅', '近', '軽', '軽', 'generated' from jp_kanji where id = 'd2c5f110-86fc-445a-90bd-6980da3f3cb1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"軽い" có nghĩa là gì?', 'gần đây (thời gian)', 'bài văn', 'nhẹ', 'đồ lót', 'nhẹ', 'generated' from jp_kanji where id = 'd2c5f110-86fc-445a-90bd-6980da3f3cb1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 軽い', 'かるい', 'generated' from jp_kanji where id = 'd2c5f110-86fc-445a-90bd-6980da3f3cb1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 近 (CẬN) có âm chính là gì?', 'つける', 'セイ', 'はらす', 'ちかい', 'ちかい', 'generated' from jp_kanji where id = 'bd73c930-2a9b-43a7-beef-6b4bc46fb741';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "gần"?', '問', '集', '近', '速', '近', 'generated' from jp_kanji where id = 'bd73c930-2a9b-43a7-beef-6b4bc46fb741';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"近い" có nghĩa là gì?', 'gần', 'câu trả lời', 'gần đây (thời gian)', 'nhanh chóng', 'gần', 'generated' from jp_kanji where id = 'bd73c930-2a9b-43a7-beef-6b4bc46fb741';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 最近', 'さいきん', 'generated' from jp_kanji where id = 'bd73c930-2a9b-43a7-beef-6b4bc46fb741';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 遠 (VIỄN) có âm chính là gì?', 'おもいだす', 'ねる', 'とおい', 'チ', 'とおい', 'generated' from jp_kanji where id = 'a46677b9-5f11-4f19-97db-0dd8bcd8a63d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "xa"?', '練', '遠', '晴', '遅', '遠', 'generated' from jp_kanji where id = 'a46677b9-5f11-4f19-97db-0dd8bcd8a63d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"遠い" có nghĩa là gì?', 'trang phục Kimono', 'sớm', 'xa', 'vấn đề', 'xa', 'generated' from jp_kanji where id = 'a46677b9-5f11-4f19-97db-0dd8bcd8a63d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 遠い', 'とおい', 'generated' from jp_kanji where id = 'a46677b9-5f11-4f19-97db-0dd8bcd8a63d';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 質 (CHẤT) có âm chính là gì?', 'シツ', 'セイ', 'ソウ', 'はれる', 'シツ', 'generated' from jp_kanji where id = 'c5377e9a-73c5-48d2-85cb-feb9d0018df1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chất lượng, chất vấn"?', '答', '問', '質', '始', '質', 'generated' from jp_kanji where id = 'c5377e9a-73c5-48d2-85cb-feb9d0018df1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"質問する" có nghĩa là gì?', 'mặc', 'gần', 'đến nơi', 'hỏi', 'hỏi', 'generated' from jp_kanji where id = 'c5377e9a-73c5-48d2-85cb-feb9d0018df1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 質問する', 'しつもんする', 'generated' from jp_kanji where id = 'c5377e9a-73c5-48d2-85cb-feb9d0018df1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 問 (VẤN) có âm chính là gì?', 'ケイ', 'シュウ', 'かさねる', 'モン', 'モン', 'generated' from jp_kanji where id = '1baa9082-5dc9-4510-97a1-97f3d0fdd09f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hỏi, câu hỏi"?', '軽', '着', '作', '問', '問', 'generated' from jp_kanji where id = '1baa9082-5dc9-4510-97a1-97f3d0fdd09f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"問題" có nghĩa là gì?', 'vấn đề', 'muộn, chậm', 'hỏi', 'luyện tập', 'vấn đề', 'generated' from jp_kanji where id = '1baa9082-5dc9-4510-97a1-97f3d0fdd09f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 問題', 'もんだい', 'generated' from jp_kanji where id = '1baa9082-5dc9-4510-97a1-97f3d0fdd09f';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 答 (ĐÁP) có âm chính là gì?', 'エン', 'こたえ', 'はじまる', 'おもい', 'こたえ', 'generated' from jp_kanji where id = '0cbd9b6d-bd35-44d1-80a0-329bc221b6bf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trả lời, đáp lại"?', '答', '着', '練', '重', '答', 'generated' from jp_kanji where id = '0cbd9b6d-bd35-44d1-80a0-329bc221b6bf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"答え" có nghĩa là gì?', 'câu trả lời', 'muộn, chậm', 'đến nơi', 'đồ lót', 'câu trả lời', 'generated' from jp_kanji where id = '0cbd9b6d-bd35-44d1-80a0-329bc221b6bf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 答える', 'こたえる', 'generated' from jp_kanji where id = '0cbd9b6d-bd35-44d1-80a0-329bc221b6bf';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 作 (TÁC) có âm chính là gì?', 'ケイ', 'はじまる', 'つくる', 'モン', 'つくる', 'generated' from jp_kanji where id = '0ac327d7-eead-44c3-bd72-e6dfb8754135';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "làm, chế tạo"?', '作', '軽', '遅', '問', '作', 'generated' from jp_kanji where id = '0ac327d7-eead-44c3-bd72-e6dfb8754135';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"作る" có nghĩa là gì?', 'đến nơi', 'làm, chế biến', 'nắng', 'gần', 'làm, chế biến', 'generated' from jp_kanji where id = '0ac327d7-eead-44c3-bd72-e6dfb8754135';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 作文', 'さくぶん', 'generated' from jp_kanji where id = '0ac327d7-eead-44c3-bd72-e6dfb8754135';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 思 (TƯ) có âm chính là gì?', 'シュウ', 'はらす', 'あつめる', 'おもう', 'おもう', 'generated' from jp_kanji where id = 'd54c3844-4f13-4ad3-8418-5b971e51ce1f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nghĩ, suy nghĩ"?', '遠', '思', '作', '晴', '思', 'generated' from jp_kanji where id = 'd54c3844-4f13-4ad3-8418-5b971e51ce1f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"思う" có nghĩa là gì?', 'mặc', 'nặng', 'đồ lót', 'nghĩ', 'nghĩ', 'generated' from jp_kanji where id = 'd54c3844-4f13-4ad3-8418-5b971e51ce1f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 思い出す', 'おもいだす', 'generated' from jp_kanji where id = 'd54c3844-4f13-4ad3-8418-5b971e51ce1f';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 始 (THỦY) có âm chính là gì?', 'ケイ', 'ねり', 'はじめる', 'おもう', 'はじめる', 'generated' from jp_kanji where id = '87bd4fce-00da-4b48-897b-c8b1998dcf5c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bắt đầu"?', '遠', '始', '思', '質', '始', 'generated' from jp_kanji where id = '87bd4fce-00da-4b48-897b-c8b1998dcf5c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"始める" có nghĩa là gì?', 'xa', 'áo khoác', 'luyện tập', 'bắt đầu', 'bắt đầu', 'generated' from jp_kanji where id = '87bd4fce-00da-4b48-897b-c8b1998dcf5c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 始まる', 'はじまる', 'generated' from jp_kanji where id = '87bd4fce-00da-4b48-897b-c8b1998dcf5c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 着 (TRỚ) có âm chính là gì?', 'あつめる', 'ケイ', 'きる', 'コン', 'きる', 'generated' from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mặc, đến nơi, bám vào"?', '着', '遅', '早', '遠', '着', 'generated' from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"着る" có nghĩa là gì?', 'hỏi', 'kỳ lạ, ảo', 'mặc', 'tập trung, tụ tập', 'mặc', 'generated' from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 上着', 'うわぎ', 'generated' from jp_kanji where id = 'b2bcfc24-5091-481a-8199-fd81afaac795';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 集 (TẬP) có âm chính là gì?', 'サク', 'あつめる', 'はじまる', 'トウ', 'あつめる', 'generated' from jp_kanji where id = '864a9b54-4287-4c21-95c6-e15c3f5acd0f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tập hợp, tụ tập"?', '集', '作', '遅', '晴', '集', 'generated' from jp_kanji where id = '864a9b54-4287-4c21-95c6-e15c3f5acd0f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"集める" có nghĩa là gì?', 'trả lời', 'vấn đề', 'tập hợp, sưu tầm', 'mặc', 'tập hợp, sưu tầm', 'generated' from jp_kanji where id = '864a9b54-4287-4c21-95c6-e15c3f5acd0f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 集まる', 'あつまる', 'generated' from jp_kanji where id = '864a9b54-4287-4c21-95c6-e15c3f5acd0f';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 練 (LUYỆN) có âm chính là gì?', 'レン', 'ジュウ', 'チ', 'きる', 'レン', 'generated' from jp_kanji where id = 'e319128f-9d66-4fc9-af96-6d9f0b9509f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "luyện tập, rèn luyện"?', '早', '練', '質', '近', '練', 'generated' from jp_kanji where id = 'e319128f-9d66-4fc9-af96-6d9f0b9509f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"練習" có nghĩa là gì?', 'luyện tập', 'gần đây (thời gian)', 'nắng', 'sức nặng', 'luyện tập', 'generated' from jp_kanji where id = 'e319128f-9d66-4fc9-af96-6d9f0b9509f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 練習', 'れんしゅう', 'generated' from jp_kanji where id = 'e319128f-9d66-4fc9-af96-6d9f0b9509f6';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 晴 (TÌNH) có âm chính là gì?', 'はれる', 'おそい', 'おもい', 'かさなる', 'はれる', 'generated' from jp_kanji where id = '83730594-6426-453b-91b0-8dc43ed3f906';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nắng, quang đãng"?', '重', '遠', '速', '晴', '晴', 'generated' from jp_kanji where id = '83730594-6426-453b-91b0-8dc43ed3f906';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"晴れる" có nghĩa là gì?', 'trang phục Kimono', 'bắt đầu', 'vấn đề', 'nắng', 'nắng', 'generated' from jp_kanji where id = '83730594-6426-453b-91b0-8dc43ed3f906';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 晴れる', 'はれる', 'generated' from jp_kanji where id = '83730594-6426-453b-91b0-8dc43ed3f906';


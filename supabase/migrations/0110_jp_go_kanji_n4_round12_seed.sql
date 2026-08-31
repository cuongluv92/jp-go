-- ============================================================
-- jp-go — Kanji N4, round 12 (16 kanji, trang in 13).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- 地 (ĐỊA) hoàn thiện readings bị hoãn từ round 11 (trang 12).
-- 番 (PHIÊN) trải 2 cột trong cùng trang in 13 — gộp thành 1 kanji.
-- ============================================================

-- ---------- 地 (ĐỊA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c83816a1-d5c2-4639-b67b-11c643e038ef', 'N4', '地', 'ĐỊA', 'đất, mặt đất, địa lý', 6, '土', '地 có bộ 土(đất) bên trái — nói về mặt đất, địa lý.', NULL, '{"池","他"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3230cd11-457a-4b8c-a752-79e629603657', id, 'on', 'ジ', false, 13, 'ok', NULL from jp_kanji where id = 'c83816a1-d5c2-4639-b67b-11c643e038ef'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c83816a1-d5c2-4639-b67b-11c643e038ef', '3230cd11-457a-4b8c-a752-79e629603657', '地震', 'じしん', 'động đất', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '77b9e710-df3f-44b9-922b-584d66456c63', id, 'on', 'チ', true, 13, 'ok', NULL from jp_kanji where id = 'c83816a1-d5c2-4639-b67b-11c643e038ef'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c83816a1-d5c2-4639-b67b-11c643e038ef', '77b9e710-df3f-44b9-922b-584d66456c63', '地下', 'ちか', 'tầng hầm', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c83816a1-d5c2-4639-b67b-11c643e038ef', '77b9e710-df3f-44b9-922b-584d66456c63', '地下鉄', 'ちかてつ', 'tàu điện ngầm', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c83816a1-d5c2-4639-b67b-11c643e038ef', '77b9e710-df3f-44b9-922b-584d66456c63', '地球', 'ちきゅう', 'Trái đất', false, 13, 'pdf', 'ok', NULL);

-- ---------- 鉄 (THIẾT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('f193de7b-c413-478c-8d2a-6311cf408ce4', 'N4', '鉄', 'THIẾT', 'sắt, thép, đường sắt', 13, '金', '鉄 có bộ 金(kim loại) bên trái — sắt thép là kim loại (金) mất (失) tạp chất.', NULL, '{"銭","鋭"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c6f96610-99e4-4ead-b5ba-1a038892590f', id, 'kun', NULL, false, 13, 'ok', NULL from jp_kanji where id = 'f193de7b-c413-478c-8d2a-6311cf408ce4'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd31fee89-ecae-401e-8b76-2cd592a8d4ae', id, 'on', 'テツ', true, 13, 'ok', NULL from jp_kanji where id = 'f193de7b-c413-478c-8d2a-6311cf408ce4'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f193de7b-c413-478c-8d2a-6311cf408ce4', 'd31fee89-ecae-401e-8b76-2cd592a8d4ae', '地下鉄', 'ちかてつ', 'tàu điện ngầm', false, 13, 'pdf', 'ok', NULL);

-- ---------- 特 (ĐẶC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('84c394d1-0ee8-40fa-92b7-d9170a259d86', 'N4', '特', 'ĐẶC', 'đặc biệt, riêng biệt', 10, '牛', '特 có bộ 牛(con bò) bên trái — con bò đặc biệt (寺) được chọn riêng.', NULL, '{"持","待"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b746d7a4-8bb3-41b4-a22c-5610c627c631', id, 'kun', NULL, false, 13, 'ok', NULL from jp_kanji where id = '84c394d1-0ee8-40fa-92b7-d9170a259d86'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b6c3f082-0515-4d55-8056-1244da14286e', id, 'on', 'トク', true, 13, 'ok', NULL from jp_kanji where id = '84c394d1-0ee8-40fa-92b7-d9170a259d86'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84c394d1-0ee8-40fa-92b7-d9170a259d86', 'b6c3f082-0515-4d55-8056-1244da14286e', '特に', 'とくに', 'nhất là, đặc biệt là', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84c394d1-0ee8-40fa-92b7-d9170a259d86', 'b6c3f082-0515-4d55-8056-1244da14286e', '特別', 'とくべつ', 'đặc biệt', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84c394d1-0ee8-40fa-92b7-d9170a259d86', 'b6c3f082-0515-4d55-8056-1244da14286e', '特急', 'とっきゅう', 'hoả tốc, thần tốc', false, 13, 'pdf', 'ok', NULL);

-- ---------- 客 (KHÁCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3d0fad74-ff9e-43d5-9b98-c38c597514d0', 'N4', '客', 'KHÁCH', 'khách, vị khách', 9, '宀', '客 có bộ 宀(mái nhà) trên đầu — người khách (各) đến dưới mái nhà mình.', NULL, '{"各","額"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a4b32484-6d54-48ef-813a-2d155e4a30cb', id, 'kun', NULL, false, 13, 'ok', NULL from jp_kanji where id = '3d0fad74-ff9e-43d5-9b98-c38c597514d0'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '354b9d37-40f3-4925-96e2-c970a323b6e5', id, 'on', 'キャク', true, 13, 'ok', NULL from jp_kanji where id = '3d0fad74-ff9e-43d5-9b98-c38c597514d0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3d0fad74-ff9e-43d5-9b98-c38c597514d0', '354b9d37-40f3-4925-96e2-c970a323b6e5', 'お客さん', 'おきゃくさん', 'vị khách, khách hàng', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3d0fad74-ff9e-43d5-9b98-c38c597514d0', '354b9d37-40f3-4925-96e2-c970a323b6e5', 'お客様', 'おきゃくさま', 'quý khách hàng', false, 13, 'pdf', 'ok', NULL);

-- ---------- 様 (DẠNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('f7cd583a-c350-4f69-a16d-850c40a8d62c', 'N4', '様', 'DẠNG', 'hình dạng, kiểu cách; (kính ngữ)', 14, '木', '様 có bộ 木(cây) bên trái — hình dáng, kiểu dạng (羊) được tạo ra.', NULL, '{"洋","詳"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '56cff6a5-32e0-45ec-804a-2a9c73821f31', id, 'kun', 'さま', true, 13, 'ok', NULL from jp_kanji where id = 'f7cd583a-c350-4f69-a16d-850c40a8d62c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f7cd583a-c350-4f69-a16d-850c40a8d62c', '56cff6a5-32e0-45ec-804a-2a9c73821f31', '皆様', 'みなさま', 'mọi người', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f7cd583a-c350-4f69-a16d-850c40a8d62c', '56cff6a5-32e0-45ec-804a-2a9c73821f31', '奥様', 'おくさま', 'vợ (vợ người khác)', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '91ae7a42-24df-4cca-8da2-ec2822d2d13a', id, 'on', 'ヨウ', false, 13, 'ok', NULL from jp_kanji where id = 'f7cd583a-c350-4f69-a16d-850c40a8d62c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f7cd583a-c350-4f69-a16d-850c40a8d62c', '91ae7a42-24df-4cca-8da2-ec2822d2d13a', '様子', 'ようす', 'dáng vẻ, bộ dạng', false, 13, 'pdf', 'ok', NULL);

-- ---------- 荷 (HÀ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('0adc7a2c-31ad-45f5-9c24-66fd0d09d39a', 'N4', '荷', 'HÀ', 'hành lý, gánh nặng', 10, '艹', '荷 có bộ 艹(cỏ, thực vật) trên đầu — sen (荷) cũng dùng để chỉ gánh nặng, hành lý.', NULL, '{"何","苛"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'da82b5e8-b89f-4e6b-be5c-43ae46e91e22', id, 'kun', 'に', true, 13, 'ok', NULL from jp_kanji where id = '0adc7a2c-31ad-45f5-9c24-66fd0d09d39a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('0adc7a2c-31ad-45f5-9c24-66fd0d09d39a', 'da82b5e8-b89f-4e6b-be5c-43ae46e91e22', '荷物', 'にもつ', 'hành lý', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '753ab3e1-c0c5-44d0-9373-19d44ad48cee', id, 'on', NULL, false, 13, 'ok', NULL from jp_kanji where id = '0adc7a2c-31ad-45f5-9c24-66fd0d09d39a'
on conflict (id) do nothing;

-- ---------- 馬 (MÃ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1a451f4b-f563-440d-9f02-2a52170c502a', 'N4', '馬', 'MÃ', 'con ngựa', 10, '馬', '馬 là hình vẽ con ngựa với 4 chân và bờm — chỉ con ngựa.', NULL, '{"駅","験"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a3ef43a7-934f-4377-b0ff-88b587882494', id, 'kun', 'うま', true, 13, 'ok', NULL from jp_kanji where id = '1a451f4b-f563-440d-9f02-2a52170c502a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1a451f4b-f563-440d-9f02-2a52170c502a', 'a3ef43a7-934f-4377-b0ff-88b587882494', '馬', 'うま', 'con ngựa', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '28c84788-6494-42d3-af3e-31b3b2401a4a', id, 'on', NULL, false, 13, 'ok', NULL from jp_kanji where id = '1a451f4b-f563-440d-9f02-2a52170c502a'
on conflict (id) do nothing;

-- ---------- 番 (PHIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf', 'N4', '番', 'PHIÊN', 'số thứ tự, phiên trực', 12, '田', '番 có bộ 田(ruộng) ở dưới — chia ruộng (田) theo thứ tự, số hiệu, phiên trực.', NULL, '{"審","翻"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e47c7591-b288-4961-bfb3-2d90f20d6b63', id, 'kun', NULL, false, 13, 'ok', NULL from jp_kanji where id = '7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '94629815-032f-48c3-8eef-34e09ecc036b', id, 'on', 'バン', true, 13, 'ok', NULL from jp_kanji where id = '7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf', '94629815-032f-48c3-8eef-34e09ecc036b', '番号', 'ばんごう', 'số hiệu', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf', '94629815-032f-48c3-8eef-34e09ecc036b', '暗証番号', 'あんしょうばんごう', 'mã PIN', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf', '94629815-032f-48c3-8eef-34e09ecc036b', '交番', 'こうばん', 'đồn cảnh sát', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf', '94629815-032f-48c3-8eef-34e09ecc036b', '番組', 'ばんぐみ', 'chương trình tivi', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf', '94629815-032f-48c3-8eef-34e09ecc036b', '順番', 'じゅんばん', 'thứ tự', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf', '94629815-032f-48c3-8eef-34e09ecc036b', '番線', 'ばんせん', 'sân ga số ~ / tuyến tàu số ~', false, 13, 'pdf', 'ok', NULL);

-- ---------- 号 (HIỆU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('6b93a2d8-12e0-4711-bfc3-e469c58934dc', 'N4', '号', 'HIỆU', 'ký hiệu, số hiệu, tín hiệu', 5, '口', '号 có bộ 口(miệng) bên dưới — hô hào (号) để ra tín hiệu, ký hiệu.', NULL, '{"可","句"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '022e3fa2-7b34-43ae-91fa-90ee77730444', id, 'kun', NULL, false, 13, 'ok', NULL from jp_kanji where id = '6b93a2d8-12e0-4711-bfc3-e469c58934dc'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8c138e0f-bb9a-41c9-9e42-6351d0fba997', id, 'on', 'ゴウ', true, 13, 'ok', NULL from jp_kanji where id = '6b93a2d8-12e0-4711-bfc3-e469c58934dc'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6b93a2d8-12e0-4711-bfc3-e469c58934dc', '8c138e0f-bb9a-41c9-9e42-6351d0fba997', '信号', 'しんごう', 'đèn giao thông', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('6b93a2d8-12e0-4711-bfc3-e469c58934dc', '8c138e0f-bb9a-41c9-9e42-6351d0fba997', '号室', 'ごうしつ', 'số phòng', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c714823d-3412-4162-b8df-647aec7ec810', id, 'on', 'コウ', false, 13, 'ok', NULL from jp_kanji where id = '6b93a2d8-12e0-4711-bfc3-e469c58934dc'
on conflict (id) do nothing;

-- ---------- 写 (TẢ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3a549c28-2a0a-4a1a-8489-ecc791dd35f3', 'N4', '写', 'TẢ', 'sao chép, chụp (ảnh)', 5, '冂', '写 giản thể từ 寫 — sao chép, chụp lại hình ảnh.', NULL, '{"冗","冠"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e25ace49-5390-431d-bc2c-11bf13262e99', id, 'kun', 'うつる', false, 13, 'ok', NULL from jp_kanji where id = '3a549c28-2a0a-4a1a-8489-ecc791dd35f3'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a2e2bfb7-eb30-4f06-9281-e6ccafb4d93e', id, 'kun', 'うつす', true, 13, 'ok', NULL from jp_kanji where id = '3a549c28-2a0a-4a1a-8489-ecc791dd35f3'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '484b2cdc-6159-422b-b691-6de73b996388', id, 'on', 'シャ', false, 13, 'ok', NULL from jp_kanji where id = '3a549c28-2a0a-4a1a-8489-ecc791dd35f3'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3a549c28-2a0a-4a1a-8489-ecc791dd35f3', '484b2cdc-6159-422b-b691-6de73b996388', '写真', 'しゃしん', 'ảnh, bức ảnh', false, 13, 'pdf', 'ok', NULL);

-- ---------- 真 (CHÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('53ce3339-7ce9-4eea-ae9c-5ca8881e9f90', 'N4', '真', 'CHÂN', 'chân thật, chính giữa', 10, '目', '真 có bộ 目(mắt) ở trên — nhìn thẳng bằng mắt (目) thấy điều chân thật.', NULL, '{"直","具"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '15647a39-7bd4-400b-8a98-f014f1c42ecd', id, 'kun', 'ま', true, 13, 'ok', NULL from jp_kanji where id = '53ce3339-7ce9-4eea-ae9c-5ca8881e9f90'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('53ce3339-7ce9-4eea-ae9c-5ca8881e9f90', '15647a39-7bd4-400b-8a98-f014f1c42ecd', '真ん中', 'まんなか', 'chính giữa', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('53ce3339-7ce9-4eea-ae9c-5ca8881e9f90', '15647a39-7bd4-400b-8a98-f014f1c42ecd', '真っ白', 'まっしろ', 'trắng tinh', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2508a364-b5a0-4286-9d2b-0d6561dee5c7', id, 'on', 'シン', false, 13, 'ok', NULL from jp_kanji where id = '53ce3339-7ce9-4eea-ae9c-5ca8881e9f90'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('53ce3339-7ce9-4eea-ae9c-5ca8881e9f90', '2508a364-b5a0-4286-9d2b-0d6561dee5c7', '写真', 'しゃしん', 'ảnh, bức ảnh', false, 13, 'pdf', 'ok', NULL);

-- ---------- 計 (KẾ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('57757982-2d72-4200-ac4f-b5391b3e585d', 'N4', '計', 'KẾ', 'tính toán, đo lường, kế hoạch', 9, '言', '計 có bộ 言(lời nói) bên trái — dùng lời nói (言) để đếm (十), tính toán.', NULL, '{"討","訂"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3ffc8e53-91d3-403d-b7fb-a5ac845b578e', id, 'kun', 'はかる', true, 13, 'ok', NULL from jp_kanji where id = '57757982-2d72-4200-ac4f-b5391b3e585d'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a987178d-5885-466b-bdf1-e53efff3e4dd', id, 'on', 'ケイ', false, 13, 'ok', NULL from jp_kanji where id = '57757982-2d72-4200-ac4f-b5391b3e585d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('57757982-2d72-4200-ac4f-b5391b3e585d', 'a987178d-5885-466b-bdf1-e53efff3e4dd', '時計', 'とけい', 'đồng hồ', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('57757982-2d72-4200-ac4f-b5391b3e585d', 'a987178d-5885-466b-bdf1-e53efff3e4dd', '目覚まし時計', 'めざましどけい', 'đồng hồ báo thức', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('57757982-2d72-4200-ac4f-b5391b3e585d', 'a987178d-5885-466b-bdf1-e53efff3e4dd', '体温計', 'たいおんけい', 'nhiệt kế', false, 13, 'pdf', 'ok', NULL);

-- ---------- 宅 (TRẠCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('091d56ca-3f9f-4820-89a3-b2924ff102ce', 'N4', '宅', 'TRẠCH', 'nhà ở, nơi cư trú', 6, '宀', '宅 có bộ 宀(mái nhà) trên đầu — nơi ở, nhà riêng dưới một mái nhà (乇).', NULL, '{"宇","宗"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f32073e7-5303-449f-b738-18dca5462932', id, 'kun', NULL, false, 13, 'ok', NULL from jp_kanji where id = '091d56ca-3f9f-4820-89a3-b2924ff102ce'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4f4726d6-104e-4893-98df-68f1ea2e4995', id, 'on', 'タク', true, 13, 'ok', NULL from jp_kanji where id = '091d56ca-3f9f-4820-89a3-b2924ff102ce'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('091d56ca-3f9f-4820-89a3-b2924ff102ce', '4f4726d6-104e-4893-98df-68f1ea2e4995', 'お宅', 'おたく', 'Nhà (người khác)', false, 13, 'pdf', 'ok', NULL);

-- ---------- 玉 (NGỌC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7c19e1a7-a063-4a97-a91a-3277ca552643', 'N4', '玉', 'NGỌC', 'ngọc, viên tròn', 5, '玉', '玉 là hình vẽ viên ngọc được xâu bằng dây — chỉ ngọc quý.', NULL, '{"王","主"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c99ef4f3-a710-4615-abd4-4ab969f63c02', id, 'kun', 'たま', true, 13, 'ok', NULL from jp_kanji where id = '7c19e1a7-a063-4a97-a91a-3277ca552643'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '72964de3-aba9-4dc4-b866-96dc6c30239d', id, 'kun', 'だま', false, 13, 'ok', NULL from jp_kanji where id = '7c19e1a7-a063-4a97-a91a-3277ca552643'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7c19e1a7-a063-4a97-a91a-3277ca552643', '72964de3-aba9-4dc4-b866-96dc6c30239d', 'お年玉', 'おとしだま', 'tiền lì xì', false, 13, 'pdf', 'ok', NULL);

-- ---------- 工 (CÔNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4f80380f-615f-4231-9662-5872ab23909f', 'N4', '工', 'CÔNG', 'công việc, thợ, công trình', 3, '工', '工 là hình vẽ cái thước thợ — công cụ lao động, công việc.', NULL, '{"士","干"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1d36bcaa-4f35-4c61-ac70-174773496090', id, 'on', 'ク', false, 13, 'ok', NULL from jp_kanji where id = '4f80380f-615f-4231-9662-5872ab23909f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '47d029c5-e764-4fff-b956-5cf5fe143bd9', id, 'on', 'コウ', true, 13, 'ok', NULL from jp_kanji where id = '4f80380f-615f-4231-9662-5872ab23909f'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4f80380f-615f-4231-9662-5872ab23909f', '47d029c5-e764-4fff-b956-5cf5fe143bd9', '工場', 'こうじょう', 'nhà máy', false, 13, 'pdf', 'ok', NULL);

-- ---------- 白 (BẠCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1fe446e1-7f15-4ac9-bb96-f67d772b3d69', 'N4', '白', 'BẠCH', 'màu trắng, sáng tỏ', 5, '白', '白 là hình vẽ tia sáng phát ra từ đầu ngọn nến — chỉ màu trắng, sáng tỏ.', NULL, '{"百","自"}', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4dd2f0d9-c347-46a6-bf1d-017c12419ec3', id, 'kun', 'しろ', true, 13, 'ok', NULL from jp_kanji where id = '1fe446e1-7f15-4ac9-bb96-f67d772b3d69'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1fe446e1-7f15-4ac9-bb96-f67d772b3d69', '4dd2f0d9-c347-46a6-bf1d-017c12419ec3', '白', 'しろ', 'màu trắng', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1fe446e1-7f15-4ac9-bb96-f67d772b3d69', '4dd2f0d9-c347-46a6-bf1d-017c12419ec3', '白い', 'しろい', 'trắng', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1fe446e1-7f15-4ac9-bb96-f67d772b3d69', '4dd2f0d9-c347-46a6-bf1d-017c12419ec3', '真っ白', 'まっしろ', 'trắng tinh', false, 13, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'eb60035e-f034-421c-916a-ed4fb73b3dcb', id, 'on', 'ハク', false, 13, 'ok', NULL from jp_kanji where id = '1fe446e1-7f15-4ac9-bb96-f67d772b3d69'
on conflict (id) do nothing;

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 地 (ĐỊA) có âm chính là gì?', 'うつる', 'たま', 'さま', 'チ', 'チ', 'generated' from jp_kanji where id = 'c83816a1-d5c2-4639-b67b-11c643e038ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đất, mặt đất, địa lý"?', '馬', '白', '地', '様', '地', 'generated' from jp_kanji where id = 'c83816a1-d5c2-4639-b67b-11c643e038ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"地震" có nghĩa là gì?', 'trắng', 'động đất', 'con ngựa', 'sân ga số ~ / tuyến tàu số ~', 'động đất', 'generated' from jp_kanji where id = 'c83816a1-d5c2-4639-b67b-11c643e038ef';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 地下', 'ちか', 'generated' from jp_kanji where id = 'c83816a1-d5c2-4639-b67b-11c643e038ef';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 鉄 (THIẾT) có âm chính là gì?', 'タク', 'に', 'トク', 'テツ', 'テツ', 'generated' from jp_kanji where id = 'f193de7b-c413-478c-8d2a-6311cf408ce4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sắt, thép, đường sắt"?', '荷', '写', '玉', '鉄', '鉄', 'generated' from jp_kanji where id = 'f193de7b-c413-478c-8d2a-6311cf408ce4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"地下鉄" có nghĩa là gì?', 'trắng tinh', 'tàu điện ngầm', 'hoả tốc, thần tốc', 'trắng tinh', 'tàu điện ngầm', 'generated' from jp_kanji where id = 'f193de7b-c413-478c-8d2a-6311cf408ce4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 地下鉄', 'ちかてつ', 'generated' from jp_kanji where id = 'f193de7b-c413-478c-8d2a-6311cf408ce4';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 特 (ĐẶC) có âm chính là gì?', 'タク', 'トク', 'ゴウ', 'ま', 'トク', 'generated' from jp_kanji where id = '84c394d1-0ee8-40fa-92b7-d9170a259d86';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đặc biệt, riêng biệt"?', '計', '荷', '号', '特', '特', 'generated' from jp_kanji where id = '84c394d1-0ee8-40fa-92b7-d9170a259d86';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"特に" có nghĩa là gì?', 'dáng vẻ, bộ dạng', 'nhiệt kế', 'tầng hầm', 'nhất là, đặc biệt là', 'nhất là, đặc biệt là', 'generated' from jp_kanji where id = '84c394d1-0ee8-40fa-92b7-d9170a259d86';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 特別', 'とくべつ', 'generated' from jp_kanji where id = '84c394d1-0ee8-40fa-92b7-d9170a259d86';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 客 (KHÁCH) có âm chính là gì?', 'ジ', 'キャク', 'たま', 'コウ', 'キャク', 'generated' from jp_kanji where id = '3d0fad74-ff9e-43d5-9b98-c38c597514d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "khách, vị khách"?', '客', '特', '荷', '番', '客', 'generated' from jp_kanji where id = '3d0fad74-ff9e-43d5-9b98-c38c597514d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お客さん" có nghĩa là gì?', 'quý khách hàng', 'trắng tinh', 'số phòng', 'vị khách, khách hàng', 'vị khách, khách hàng', 'generated' from jp_kanji where id = '3d0fad74-ff9e-43d5-9b98-c38c597514d0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お客様', 'おきゃくさま', 'generated' from jp_kanji where id = '3d0fad74-ff9e-43d5-9b98-c38c597514d0';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 様 (DẠNG) có âm chính là gì?', 'に', 'さま', 'トク', 'キャク', 'さま', 'generated' from jp_kanji where id = 'f7cd583a-c350-4f69-a16d-850c40a8d62c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hình dạng, kiểu cách; (kính ngữ)"?', '様', '玉', '宅', '真', '様', 'generated' from jp_kanji where id = 'f7cd583a-c350-4f69-a16d-850c40a8d62c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"皆様" có nghĩa là gì?', 'con ngựa', 'mọi người', 'chương trình tivi', 'trắng tinh', 'mọi người', 'generated' from jp_kanji where id = 'f7cd583a-c350-4f69-a16d-850c40a8d62c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 奥様', 'おくさま', 'generated' from jp_kanji where id = 'f7cd583a-c350-4f69-a16d-850c40a8d62c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 荷 (HÀ) có âm chính là gì?', 'タク', 'に', 'コウ', 'ジ', 'に', 'generated' from jp_kanji where id = '0adc7a2c-31ad-45f5-9c24-66fd0d09d39a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hành lý, gánh nặng"?', '荷', '客', '番', '特', '荷', 'generated' from jp_kanji where id = '0adc7a2c-31ad-45f5-9c24-66fd0d09d39a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"荷物" có nghĩa là gì?', 'trắng', 'sân ga số ~ / tuyến tàu số ~', 'hành lý', 'vợ (vợ người khác)', 'hành lý', 'generated' from jp_kanji where id = '0adc7a2c-31ad-45f5-9c24-66fd0d09d39a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 荷物', 'にもつ', 'generated' from jp_kanji where id = '0adc7a2c-31ad-45f5-9c24-66fd0d09d39a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 馬 (MÃ) có âm chính là gì?', 'ゴウ', 'うつす', 'うま', 'しろ', 'うま', 'generated' from jp_kanji where id = '1a451f4b-f563-440d-9f02-2a52170c502a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "con ngựa"?', '番', '鉄', '荷', '馬', '馬', 'generated' from jp_kanji where id = '1a451f4b-f563-440d-9f02-2a52170c502a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"馬" có nghĩa là gì?', 'tiền lì xì', 'trắng', 'con ngựa', 'trắng tinh', 'con ngựa', 'generated' from jp_kanji where id = '1a451f4b-f563-440d-9f02-2a52170c502a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 馬', 'うま', 'generated' from jp_kanji where id = '1a451f4b-f563-440d-9f02-2a52170c502a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 番 (PHIÊN) có âm chính là gì?', 'ケイ', 'シン', 'バン', 'コウ', 'バン', 'generated' from jp_kanji where id = '7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "số thứ tự, phiên trực"?', '番', '馬', '荷', '宅', '番', 'generated' from jp_kanji where id = '7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"番号" có nghĩa là gì?', 'trắng tinh', 'tàu điện ngầm', 'số hiệu', 'mã PIN', 'số hiệu', 'generated' from jp_kanji where id = '7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 暗証番号', 'あんしょうばんごう', 'generated' from jp_kanji where id = '7c880bd0-45bf-47dd-8314-1b8bfb3d6fdf';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 号 (HIỆU) có âm chính là gì?', 'しろ', 'だま', 'うつす', 'ゴウ', 'ゴウ', 'generated' from jp_kanji where id = '6b93a2d8-12e0-4711-bfc3-e469c58934dc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ký hiệu, số hiệu, tín hiệu"?', '写', '白', '号', '荷', '号', 'generated' from jp_kanji where id = '6b93a2d8-12e0-4711-bfc3-e469c58934dc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"信号" có nghĩa là gì?', 'đèn giao thông', 'trắng tinh', 'trắng tinh', 'động đất', 'đèn giao thông', 'generated' from jp_kanji where id = '6b93a2d8-12e0-4711-bfc3-e469c58934dc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 号室', 'ごうしつ', 'generated' from jp_kanji where id = '6b93a2d8-12e0-4711-bfc3-e469c58934dc';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 写 (TẢ) có âm chính là gì?', 'さま', 'うつす', 'シャ', 'ジ', 'うつす', 'generated' from jp_kanji where id = '3a549c28-2a0a-4a1a-8489-ecc791dd35f3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sao chép, chụp (ảnh)"?', '荷', '工', '特', '写', '写', 'generated' from jp_kanji where id = '3a549c28-2a0a-4a1a-8489-ecc791dd35f3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"写真" có nghĩa là gì?', 'ảnh, bức ảnh', 'số phòng', 'quý khách hàng', 'dáng vẻ, bộ dạng', 'ảnh, bức ảnh', 'generated' from jp_kanji where id = '3a549c28-2a0a-4a1a-8489-ecc791dd35f3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 写真', 'しゃしん', 'generated' from jp_kanji where id = '3a549c28-2a0a-4a1a-8489-ecc791dd35f3';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 真 (CHÂN) có âm chính là gì?', 'コウ', 'ま', 'しろ', 'さま', 'ま', 'generated' from jp_kanji where id = '53ce3339-7ce9-4eea-ae9c-5ca8881e9f90';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chân thật, chính giữa"?', '荷', '宅', '真', '写', '真', 'generated' from jp_kanji where id = '53ce3339-7ce9-4eea-ae9c-5ca8881e9f90';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"真ん中" có nghĩa là gì?', 'chính giữa', 'số hiệu', 'đồn cảnh sát', 'nhất là, đặc biệt là', 'chính giữa', 'generated' from jp_kanji where id = '53ce3339-7ce9-4eea-ae9c-5ca8881e9f90';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 真っ白', 'まっしろ', 'generated' from jp_kanji where id = '53ce3339-7ce9-4eea-ae9c-5ca8881e9f90';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 計 (KẾ) có âm chính là gì?', 'キャク', 'はかる', 'ケイ', 'シャ', 'はかる', 'generated' from jp_kanji where id = '57757982-2d72-4200-ac4f-b5391b3e585d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tính toán, đo lường, kế hoạch"?', '写', '工', '計', '鉄', '計', 'generated' from jp_kanji where id = '57757982-2d72-4200-ac4f-b5391b3e585d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"時計" có nghĩa là gì?', 'vợ (vợ người khác)', 'nhất là, đặc biệt là', 'đồng hồ báo thức', 'đồng hồ', 'đồng hồ', 'generated' from jp_kanji where id = '57757982-2d72-4200-ac4f-b5391b3e585d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 目覚まし時計', 'めざましどけい', 'generated' from jp_kanji where id = '57757982-2d72-4200-ac4f-b5391b3e585d';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 宅 (TRẠCH) có âm chính là gì?', 'ハク', 'コウ', 'チ', 'タク', 'タク', 'generated' from jp_kanji where id = '091d56ca-3f9f-4820-89a3-b2924ff102ce';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhà ở, nơi cư trú"?', '荷', '玉', '宅', '号', '宅', 'generated' from jp_kanji where id = '091d56ca-3f9f-4820-89a3-b2924ff102ce';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お宅" có nghĩa là gì?', 'Nhà (người khác)', 'tàu điện ngầm', 'ảnh, bức ảnh', 'đồng hồ', 'Nhà (người khác)', 'generated' from jp_kanji where id = '091d56ca-3f9f-4820-89a3-b2924ff102ce';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お宅', 'おたく', 'generated' from jp_kanji where id = '091d56ca-3f9f-4820-89a3-b2924ff102ce';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 玉 (NGỌC) có âm chính là gì?', 'はかる', 'トク', 'コウ', 'たま', 'たま', 'generated' from jp_kanji where id = '7c19e1a7-a063-4a97-a91a-3277ca552643';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ngọc, viên tròn"?', '玉', '地', '号', '馬', '玉', 'generated' from jp_kanji where id = '7c19e1a7-a063-4a97-a91a-3277ca552643';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お年玉" có nghĩa là gì?', 'hoả tốc, thần tốc', 'ảnh, bức ảnh', 'tiền lì xì', 'tàu điện ngầm', 'tiền lì xì', 'generated' from jp_kanji where id = '7c19e1a7-a063-4a97-a91a-3277ca552643';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お年玉', 'おとしだま', 'generated' from jp_kanji where id = '7c19e1a7-a063-4a97-a91a-3277ca552643';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 工 (CÔNG) có âm chính là gì?', 'うま', 'コウ', 'しろ', 'チ', 'コウ', 'generated' from jp_kanji where id = '4f80380f-615f-4231-9662-5872ab23909f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "công việc, thợ, công trình"?', '工', '計', '様', '写', '工', 'generated' from jp_kanji where id = '4f80380f-615f-4231-9662-5872ab23909f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"工場" có nghĩa là gì?', 'tiền lì xì', 'trắng', 'thứ tự', 'nhà máy', 'nhà máy', 'generated' from jp_kanji where id = '4f80380f-615f-4231-9662-5872ab23909f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 工場', 'こうじょう', 'generated' from jp_kanji where id = '4f80380f-615f-4231-9662-5872ab23909f';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 白 (BẠCH) có âm chính là gì?', 'しろ', 'うつす', 'に', 'バン', 'しろ', 'generated' from jp_kanji where id = '1fe446e1-7f15-4ac9-bb96-f67d772b3d69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "màu trắng, sáng tỏ"?', '地', '白', '特', '客', '白', 'generated' from jp_kanji where id = '1fe446e1-7f15-4ac9-bb96-f67d772b3d69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"白" có nghĩa là gì?', 'đặc biệt', 'trắng tinh', 'màu trắng', 'trắng tinh', 'màu trắng', 'generated' from jp_kanji where id = '1fe446e1-7f15-4ac9-bb96-f67d772b3d69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 白い', 'しろい', 'generated' from jp_kanji where id = '1fe446e1-7f15-4ac9-bb96-f67d772b3d69';


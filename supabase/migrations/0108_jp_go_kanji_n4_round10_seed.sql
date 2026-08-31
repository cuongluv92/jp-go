-- ============================================================
-- jp-go — Kanji N4, round 10 (15 kanji, trang in 11).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- 広: nhãn kun 'ひろる' không hợp lệ về ngữ pháp — needs_review.
-- 楽: xếp lại đúng cặp nhãn-từ theo âm chuẩn (ラク+楽な, ガク+音楽)
-- vì PDF có dấu hiệu xếp ngược 2 nhãn này.
-- ============================================================

-- ---------- 正 (CHÍNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c6749ac3-b22f-49ce-bcd1-30c2482ffba5', 'N4', '正', 'CHÍNH', 'đúng, chính xác, ngay thẳng', 5, '止', '正 có bộ 止(dừng) trên 一 — dừng đúng vạch mốc là chính xác.', NULL, '{"政","証"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2629da7b-710b-4f0d-a089-2d9a41b2f138', id, 'kun', 'ただしい', true, 11, 'ok', NULL from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c6749ac3-b22f-49ce-bcd1-30c2482ffba5', '2629da7b-710b-4f0d-a089-2d9a41b2f138', '正しい', 'ただしい', 'đúng, chính xác', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b5d9e454-b66d-4e6c-81cf-89df8563102c', id, 'kun', 'まさ', false, 11, 'ok', NULL from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8f0ccf5a-bf2e-450d-a4d5-742b80de5367', id, 'on', 'ショウ', false, 11, 'ok', NULL from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c6749ac3-b22f-49ce-bcd1-30c2482ffba5', '8f0ccf5a-bf2e-450d-a4d5-742b80de5367', 'お正月', 'おしょうがつ', 'Tết, năm mới', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '354d60d6-e3b0-4f98-985c-1d1bd313272f', id, 'on', 'セイ', false, 11, 'ok', NULL from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5'
on conflict (id) do nothing;

-- ---------- 広 (QUẢNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('204f94e7-4c2c-44d2-b9f0-5622f834df88', 'N4', '広', 'QUẢNG', 'rộng, rộng rãi', 5, '广', '広 có bộ 广(mái nhà lớn) — mái nhà rộng lớn, thoáng đãng.', NULL, '{"拡","鉱"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd8e2f098-0023-48d5-ad6a-ada0112864ee', id, 'kun', 'ひろい', true, 11, 'ok', NULL from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('204f94e7-4c2c-44d2-b9f0-5622f834df88', 'd8e2f098-0023-48d5-ad6a-ada0112864ee', '広い', 'ひろい', 'rộng, rộng lớn', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6c29c395-c5ab-46aa-b5d3-ea81b6649efe', id, 'kun', 'ひろる', false, 11, 'needs_review', 'PDF ghi nhãn kun ''ひろ・る'' cho 広 nhưng đây không phải dạng động từ tiếng Nhật hợp lệ (nhiều khả năng đúng là ひろがる/広がる, ''lan rộng ra''). Giữ nguyên như đọc được từ PDF, không tự suy đoán sửa, đề xuất kiểm tra lại nguồn.' from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '60148f12-ac24-47c4-a340-6d3ce6ea38c4', id, 'kun', 'ひろめる', false, 11, 'ok', NULL from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('204f94e7-4c2c-44d2-b9f0-5622f834df88', '60148f12-ac24-47c4-a340-6d3ce6ea38c4', '広める', 'ひろめる', 'mở rộng, quảng bá', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f16438ac-aed3-4db1-bd38-33396632434c', id, 'on', 'コウ', false, 11, 'ok', NULL from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88'
on conflict (id) do nothing;

-- ---------- 低 (ĐÊ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('f66ab5ea-165e-420a-a7d3-245e2e92110d', 'N4', '低', 'ĐÊ', 'thấp', 7, '亻', '低 có bộ 亻(người) bên trái — người cúi thấp xuống.', NULL, '{"底","抵"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd9f3371c-8060-4864-bb8d-d44575e2c1b3', id, 'kun', 'ひくい', true, 11, 'ok', NULL from jp_kanji where id = 'f66ab5ea-165e-420a-a7d3-245e2e92110d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('f66ab5ea-165e-420a-a7d3-245e2e92110d', 'd9f3371c-8060-4864-bb8d-d44575e2c1b3', '低い', 'ひくい', 'thấp', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e1cdb3dd-da84-468d-a772-8124c4e9110a', id, 'on', 'テイ', false, 11, 'ok', NULL from jp_kanji where id = 'f66ab5ea-165e-420a-a7d3-245e2e92110d'
on conflict (id) do nothing;

-- ---------- 楽 (LẠC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('baaccfb1-e1cc-493e-94f4-87a272fe4d9e', 'N4', '楽', 'LẠC', 'vui vẻ, thoải mái, âm nhạc', 13, '木', '楽 có bộ 木(cây) ở dưới — nhạc cụ làm từ gỗ (木), chơi nhạc là niềm vui.', NULL, '{"薬","薬"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '61507153-3daf-41f6-83ef-8c5c05d40fb7', id, 'kun', 'たのしい', true, 11, 'ok', NULL from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('baaccfb1-e1cc-493e-94f4-87a272fe4d9e', '61507153-3daf-41f6-83ef-8c5c05d40fb7', '楽しい', 'たのしい', 'vui tươi', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0c6985b0-4cf4-4155-9164-2a6d2507e56e', id, 'kun', 'たのしむ', false, 11, 'ok', NULL from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('baaccfb1-e1cc-493e-94f4-87a272fe4d9e', '0c6985b0-4cf4-4155-9164-2a6d2507e56e', '楽しむ', 'たのしむ', 'tận hưởng', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c43273cc-64cf-4e1f-b8b7-2ded981b3d8c', id, 'on', 'ラク', false, 11, 'ok', NULL from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('baaccfb1-e1cc-493e-94f4-87a272fe4d9e', 'c43273cc-64cf-4e1f-b8b7-2ded981b3d8c', '楽な', 'らくな', 'thoải mái, dễ chịu', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '95d132a1-9600-481c-8c26-01f63a9328ab', id, 'on', 'ガク', false, 11, 'ok', NULL from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('baaccfb1-e1cc-493e-94f4-87a272fe4d9e', '95d132a1-9600-481c-8c26-01f63a9328ab', '音楽', 'おんがく', 'âm nhạc', false, 11, 'pdf', 'ok', NULL);

-- ---------- 太 (THÁI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c', 'N4', '太', 'THÁI', 'béo, to, mập', 4, '大', '太 giống chữ 大(to) có thêm chấm — to hơn cả 大, ý chỉ béo, mập.', NULL, '{"犬","大"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2357b16e-bd91-4f30-bfb3-5e1363b4cf07', id, 'kun', 'ふとい', true, 11, 'ok', NULL from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c', '2357b16e-bd91-4f30-bfb3-5e1363b4cf07', '太い', 'ふとい', 'béo, mập', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ccaa57c3-b4cb-4d26-a951-bd1fcc453be6', id, 'kun', 'ふとる', false, 11, 'ok', NULL from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c', 'ccaa57c3-b4cb-4d26-a951-bd1fcc453be6', '太る', 'ふとる', 'béo lên', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '5ed72457-75a2-4754-8280-82cb8ee7975e', id, 'on', 'タイ', false, 11, 'ok', NULL from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c', '5ed72457-75a2-4754-8280-82cb8ee7975e', '太陽', 'たいよう', 'mặt trời', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7aba2e8e-dedc-4ceb-8f2e-4141dbd34038', id, 'on', 'タ', false, 11, 'ok', NULL from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c'
on conflict (id) do nothing;

-- ---------- 運 (VẬN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('bffdb2bb-e200-4ccf-ae79-5ad4fc294829', 'N4', '運', 'VẬN', 'vận chuyển, vận may', 12, '辶', '運 có bộ 辶(đi) — di chuyển, vận chuyển đồ đi.', NULL, '{"連","軍"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b5aed1d7-ca8d-4ffb-a4bf-336776410558', id, 'kun', 'はこぶ', true, 11, 'ok', NULL from jp_kanji where id = 'bffdb2bb-e200-4ccf-ae79-5ad4fc294829'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bffdb2bb-e200-4ccf-ae79-5ad4fc294829', 'b5aed1d7-ca8d-4ffb-a4bf-336776410558', '運ぶ', 'はこぶ', 'vận chuyển', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '8ed8663b-109a-4a21-8b41-297703a98b3a', id, 'on', 'ウン', false, 11, 'ok', NULL from jp_kanji where id = 'bffdb2bb-e200-4ccf-ae79-5ad4fc294829'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bffdb2bb-e200-4ccf-ae79-5ad4fc294829', '8ed8663b-109a-4a21-8b41-297703a98b3a', '運転', 'うんてん', 'lái xe', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('bffdb2bb-e200-4ccf-ae79-5ad4fc294829', '8ed8663b-109a-4a21-8b41-297703a98b3a', '運転手', 'うんてんしゅ', 'tài xế', false, 11, 'pdf', 'ok', NULL);

-- ---------- 合 (HỢP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', 'N4', '合', 'HỢP', 'hợp, phù hợp, kết hợp', 6, '口', '合 có bộ 口(miệng) ở dưới — 2 miệng khớp lại vừa vặn, hợp nhau.', NULL, '{"会","谷"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '34197245-7fa7-4d8f-9997-8a171d3257d4', id, 'kun', 'あう', true, 11, 'ok', NULL from jp_kanji where id = 'ed33ef6b-7d96-471e-87a6-631ffbb18238'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', '34197245-7fa7-4d8f-9997-8a171d3257d4', '合う', 'あう', 'phù hợp, vừa vặn', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', '34197245-7fa7-4d8f-9997-8a171d3257d4', '間に合う', 'まにあう', 'kịp thời', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', '34197245-7fa7-4d8f-9997-8a171d3257d4', '助け合う', 'たすけあう', 'giúp đỡ lẫn nhau', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', '34197245-7fa7-4d8f-9997-8a171d3257d4', '知り合う', 'しりあう', 'quen biết', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', '34197245-7fa7-4d8f-9997-8a171d3257d4', '具合', 'ぐあい', 'tâm trạng, tình trạng', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '66ebc71e-fe21-459e-b57a-78abcc0898ef', id, 'on', 'ガッ', false, 11, 'ok', NULL from jp_kanji where id = 'ed33ef6b-7d96-471e-87a6-631ffbb18238'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', '66ebc71e-fe21-459e-b57a-78abcc0898ef', '都合', 'つごう', 'thuận tiện', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '97c8ed0a-2c23-44c5-ae15-48785f98afd5', id, 'on', 'ゴウ', false, 11, 'ok', NULL from jp_kanji where id = 'ed33ef6b-7d96-471e-87a6-631ffbb18238'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ed33ef6b-7d96-471e-87a6-631ffbb18238', '97c8ed0a-2c23-44c5-ae15-48785f98afd5', '合格', 'ごうかく', 'thi đỗ', false, 11, 'pdf', 'ok', NULL);

-- ---------- 当 (ĐƯƠNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('894dc231-43a5-444b-88e2-76037c8627d1', 'N4', '当', 'ĐƯƠNG', 'trúng, đương nhiên, cái đó', 6, '小', '当 có bộ 小(nhỏ) trên đầu — điểm nhỏ trúng đích.', NULL, '{"肖","尚"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '22ea5601-497c-4b48-bab9-457c54a1a31b', id, 'kun', 'あたり', false, 11, 'ok', NULL from jp_kanji where id = '894dc231-43a5-444b-88e2-76037c8627d1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd79ec9b9-e0bf-4c12-8455-18f5e60f5b91', id, 'kun', 'あたる', true, 11, 'ok', NULL from jp_kanji where id = '894dc231-43a5-444b-88e2-76037c8627d1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('894dc231-43a5-444b-88e2-76037c8627d1', 'd79ec9b9-e0bf-4c12-8455-18f5e60f5b91', '当たる', 'あたる', 'trúng', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fa806929-4d21-4289-bb4b-44cf88a7efd0', id, 'on', 'トウ', false, 11, 'ok', NULL from jp_kanji where id = '894dc231-43a5-444b-88e2-76037c8627d1'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('894dc231-43a5-444b-88e2-76037c8627d1', 'fa806929-4d21-4289-bb4b-44cf88a7efd0', 'お弁当', 'おべんとう', 'cơm hộp', false, 11, 'pdf', 'ok', NULL);

-- ---------- 考 (KHẢO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('236dce10-4d1c-4c55-9e0f-33bfed0dfdb0', 'N4', '考', 'KHẢO', 'suy nghĩ, xem xét', 6, '耂', '考 có bộ 耂(người già) trên đầu — người già thường suy nghĩ sâu xa.', NULL, '{"老","孝"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '02a697c2-559d-459f-b073-0dba1f91d522', id, 'kun', 'かんがえる', true, 11, 'ok', NULL from jp_kanji where id = '236dce10-4d1c-4c55-9e0f-33bfed0dfdb0'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('236dce10-4d1c-4c55-9e0f-33bfed0dfdb0', '02a697c2-559d-459f-b073-0dba1f91d522', '考える', 'かんがえる', 'suy nghĩ', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0f0b76c5-803f-4226-bb4f-c7dd2e50b68a', id, 'on', 'コウ', false, 11, 'ok', NULL from jp_kanji where id = '236dce10-4d1c-4c55-9e0f-33bfed0dfdb0'
on conflict (id) do nothing;

-- ---------- 走 (TẨU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1b467b3b-d932-476a-893b-411320e104ae', 'N4', '走', 'TẨU', 'chạy', 7, '走', '走 là hình người vung tay chạy — bộ 走 tự nó chỉ hành động chạy.', NULL, '{"赴","徒"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '673b2581-69e0-4fd5-bfd4-2f2acfc9c4d0', id, 'kun', 'はしる', true, 11, 'ok', NULL from jp_kanji where id = '1b467b3b-d932-476a-893b-411320e104ae'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1b467b3b-d932-476a-893b-411320e104ae', '673b2581-69e0-4fd5-bfd4-2f2acfc9c4d0', '走る', 'はしる', 'chạy', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0ea69ca7-69ba-4efe-ac7c-404660655465', id, 'on', 'ソウ', false, 11, 'ok', NULL from jp_kanji where id = '1b467b3b-d932-476a-893b-411320e104ae'
on conflict (id) do nothing;

-- ---------- 治 (TRỊ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('722bb009-7108-420e-99a6-f8112fb3a8ca', 'N4', '治', 'TRỊ', 'chữa trị, cai trị', 8, '氵', '治 có bộ 氵(nước) bên trái — trị thủy (kiểm soát nước lũ) là hình thức cai trị đầu tiên.', NULL, '{"冶","始"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '07adc0bc-acfe-4f3c-9fa7-4b8a1c3934a3', id, 'kun', 'おさめる', false, 11, 'ok', NULL from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fa423b2b-028a-4fb4-a144-20da64059d8c', id, 'kun', 'なおす', true, 11, 'ok', NULL from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('722bb009-7108-420e-99a6-f8112fb3a8ca', 'fa423b2b-028a-4fb4-a144-20da64059d8c', '治す', 'なおす', 'chữa, trị bệnh', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c13c3f4d-7240-4d37-9869-bbe4ba585cdb', id, 'on', 'ジ', false, 11, 'ok', NULL from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('722bb009-7108-420e-99a6-f8112fb3a8ca', 'c13c3f4d-7240-4d37-9869-bbe4ba585cdb', '政治', 'せいじ', 'chính trị', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7743b904-ee81-4541-8007-e00632bb0c42', id, 'on', 'チ', false, 11, 'ok', NULL from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca'
on conflict (id) do nothing;

-- ---------- 通 (THÔNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c70d9aab-763a-4bcb-abec-64ec2e8cd617', 'N4', '通', 'THÔNG', 'thông qua, đi qua, thông thạo', 10, '辶', '通 có bộ 辶(đi) — đi xuyên qua (甬, con đường) là thông suốt.', NULL, '{"痛","踊"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2fd77391-4c6a-479f-8095-7f1a828656d6', id, 'kun', 'かよう', true, 11, 'ok', NULL from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c70d9aab-763a-4bcb-abec-64ec2e8cd617', '2fd77391-4c6a-479f-8095-7f1a828656d6', '通う', 'かよう', 'đi học, đi học', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '585edff4-c741-45f7-b28a-15faef883d9c', id, 'kun', 'とおる', false, 11, 'ok', NULL from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c70d9aab-763a-4bcb-abec-64ec2e8cd617', '585edff4-c741-45f7-b28a-15faef883d9c', '通る', 'とおる', 'chạy (tàu xe), đi qua', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a6d21f1a-57c2-4932-96f5-0ab562bad05c', id, 'on', 'ツウ', false, 11, 'ok', NULL from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c70d9aab-763a-4bcb-abec-64ec2e8cd617', 'a6d21f1a-57c2-4932-96f5-0ab562bad05c', '普通', 'ふつう', 'thông thường', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'cde8e95d-3b12-49b8-88b9-0c0bcfa53f10', id, 'on', 'ヅウ', false, 11, 'ok', NULL from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617'
on conflict (id) do nothing;

-- ---------- 知 (TRI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3233b65e-c4e5-4a7e-92d8-e18c0e8ca961', 'N4', '知', 'TRI', 'biết, hiểu biết', 8, '矢', '知 có bộ 矢(mũi tên) bên trái — nói (口) trúng đích như mũi tên, tức là biết rõ.', NULL, '{"智","短"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '2361cc0b-91a7-448b-acdb-d550dc1e4d60', id, 'kun', 'しる', true, 11, 'ok', NULL from jp_kanji where id = '3233b65e-c4e5-4a7e-92d8-e18c0e8ca961'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3233b65e-c4e5-4a7e-92d8-e18c0e8ca961', '2361cc0b-91a7-448b-acdb-d550dc1e4d60', '知る', 'しる', 'biết', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4207b685-cceb-4a4c-947b-16cba0244236', id, 'kun', 'しらせる', false, 11, 'ok', NULL from jp_kanji where id = '3233b65e-c4e5-4a7e-92d8-e18c0e8ca961'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3233b65e-c4e5-4a7e-92d8-e18c0e8ca961', '4207b685-cceb-4a4c-947b-16cba0244236', 'お知らせ', 'おしらせ', 'thông báo', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '11388c31-b45f-42e8-a317-a28f1b20b531', id, 'on', 'チ', false, 11, 'ok', NULL from jp_kanji where id = '3233b65e-c4e5-4a7e-92d8-e18c0e8ca961'
on conflict (id) do nothing;

-- ---------- 文 (VĂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('d513fc51-f794-47e6-ac74-43022d792ed7', 'N4', '文', 'VĂN', 'văn, văn bản, câu văn', 4, '文', '文 là hình vẽ những nét hoa văn đan xen — chữ viết, văn chương.', NULL, '{"父","支"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '440f7a89-897b-4ea3-b906-4c456460dce0', id, 'kun', NULL, false, 11, 'ok', NULL from jp_kanji where id = 'd513fc51-f794-47e6-ac74-43022d792ed7'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'de578bb2-5fe0-495b-bcd3-ed3b308bcdd9', id, 'on', 'モン', false, 11, 'ok', NULL from jp_kanji where id = 'd513fc51-f794-47e6-ac74-43022d792ed7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d513fc51-f794-47e6-ac74-43022d792ed7', 'de578bb2-5fe0-495b-bcd3-ed3b308bcdd9', 'ご注文', 'ごちゅうもん', 'đặt hàng, gọi món', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'aad452f4-e05f-48f8-9390-a0b15c9aac4b', id, 'on', 'ブン', true, 11, 'ok', NULL from jp_kanji where id = 'd513fc51-f794-47e6-ac74-43022d792ed7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d513fc51-f794-47e6-ac74-43022d792ed7', 'aad452f4-e05f-48f8-9390-a0b15c9aac4b', '文法', 'ぶんぽう', 'ngữ pháp', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d513fc51-f794-47e6-ac74-43022d792ed7', 'aad452f4-e05f-48f8-9390-a0b15c9aac4b', '作文', 'さくぶん', 'bài văn', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d513fc51-f794-47e6-ac74-43022d792ed7', 'aad452f4-e05f-48f8-9390-a0b15c9aac4b', '論文', 'ろんぶん', 'luận văn', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('d513fc51-f794-47e6-ac74-43022d792ed7', 'aad452f4-e05f-48f8-9390-a0b15c9aac4b', '文化', 'ぶんか', 'văn hóa', false, 11, 'pdf', 'ok', NULL);

-- ---------- 化 (HÓA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('94995782-110d-4ab3-813f-966583f960ce', 'N4', '化', 'HÓA', 'hóa, biến đổi thành', 4, '匕', '化 có 2 nét giống người đứng và người ngã — biến đổi từ dạng này sang dạng khác.', NULL, '{"花","貨"}', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '543afd06-9115-4c5f-99b3-169d32cd8a50', id, 'kun', 'ばける', false, 11, 'ok', NULL from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b345c5e2-2d03-4688-aae6-60c6cea4873e', id, 'kun', 'ばかす', false, 11, 'ok', NULL from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3da8d1f5-af0d-4ef5-996c-ad15ff840c6e', id, 'on', 'カ', true, 11, 'ok', NULL from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('94995782-110d-4ab3-813f-966583f960ce', '3da8d1f5-af0d-4ef5-996c-ad15ff840c6e', '西洋化する', 'せいようかする', 'Tây hóa', false, 11, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'ce5a6cc8-76d8-4ddd-ba15-6ad03cb998b2', id, 'on', 'ケ', false, 11, 'ok', NULL from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('94995782-110d-4ab3-813f-966583f960ce', 'ce5a6cc8-76d8-4ddd-ba15-6ad03cb998b2', '化粧', 'けしょう', 'trang điểm', false, 11, 'pdf', 'ok', NULL);

-- ---------- Bài tập generated ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 正 (CHÍNH) có âm chính là gì?', 'ひろい', 'ケ', 'タイ', 'ただしい', 'ただしい', 'generated' from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đúng, chính xác, ngay thẳng"?', '正', '走', '考', '楽', '正', 'generated' from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"正しい" có nghĩa là gì?', 'thông báo', 'đúng, chính xác', 'trang điểm', 'béo lên', 'đúng, chính xác', 'generated' from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お正月', 'おしょうがつ', 'generated' from jp_kanji where id = 'c6749ac3-b22f-49ce-bcd1-30c2482ffba5';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 広 (QUẢNG) có âm chính là gì?', 'ひろい', 'ラク', 'チ', 'タイ', 'ひろい', 'generated' from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "rộng, rộng rãi"?', '広', '考', '運', '楽', '広', 'generated' from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"広い" có nghĩa là gì?', 'rộng, rộng lớn', 'biết', 'chạy (tàu xe), đi qua', 'kịp thời', 'rộng, rộng lớn', 'generated' from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 広める', 'ひろめる', 'generated' from jp_kanji where id = '204f94e7-4c2c-44d2-b9f0-5622f834df88';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 低 (ĐÊ) có âm chính là gì?', 'ひくい', 'しらせる', 'ばかす', 'ジ', 'ひくい', 'generated' from jp_kanji where id = 'f66ab5ea-165e-420a-a7d3-245e2e92110d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thấp"?', '通', '低', '広', '走', '低', 'generated' from jp_kanji where id = 'f66ab5ea-165e-420a-a7d3-245e2e92110d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"低い" có nghĩa là gì?', 'vui tươi', 'thấp', 'thông báo', 'đi học, đi học', 'thấp', 'generated' from jp_kanji where id = 'f66ab5ea-165e-420a-a7d3-245e2e92110d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 低い', 'ひくい', 'generated' from jp_kanji where id = 'f66ab5ea-165e-420a-a7d3-245e2e92110d';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 楽 (LẠC) có âm chính là gì?', 'コウ', 'チ', 'はこぶ', 'たのしい', 'たのしい', 'generated' from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vui vẻ, thoải mái, âm nhạc"?', '低', '太', '楽', '広', '楽', 'generated' from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"楽しい" có nghĩa là gì?', 'đi học, đi học', 'vui tươi', 'thi đỗ', 'thấp', 'vui tươi', 'generated' from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 楽しむ', 'たのしむ', 'generated' from jp_kanji where id = 'baaccfb1-e1cc-493e-94f4-87a272fe4d9e';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 太 (THÁI) có âm chính là gì?', 'ふとい', 'ジ', 'セイ', 'はしる', 'ふとい', 'generated' from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "béo, to, mập"?', '低', '運', '楽', '太', '太', 'generated' from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"太い" có nghĩa là gì?', 'Tây hóa', 'béo, mập', 'chạy (tàu xe), đi qua', 'mặt trời', 'béo, mập', 'generated' from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 太る', 'ふとる', 'generated' from jp_kanji where id = '674c0c68-e7d0-4140-ae8f-4d7a3a65ea0c';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 運 (VẬN) có âm chính là gì?', 'ソウ', 'はこぶ', 'とおる', 'テイ', 'はこぶ', 'generated' from jp_kanji where id = 'bffdb2bb-e200-4ccf-ae79-5ad4fc294829';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vận chuyển, vận may"?', '楽', '低', '運', '太', '運', 'generated' from jp_kanji where id = 'bffdb2bb-e200-4ccf-ae79-5ad4fc294829';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"運ぶ" có nghĩa là gì?', 'vận chuyển', 'béo, mập', 'tận hưởng', 'thi đỗ', 'vận chuyển', 'generated' from jp_kanji where id = 'bffdb2bb-e200-4ccf-ae79-5ad4fc294829';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 運転', 'うんてん', 'generated' from jp_kanji where id = 'bffdb2bb-e200-4ccf-ae79-5ad4fc294829';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 合 (HỢP) có âm chính là gì?', 'テイ', 'カ', 'あう', 'コウ', 'あう', 'generated' from jp_kanji where id = 'ed33ef6b-7d96-471e-87a6-631ffbb18238';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hợp, phù hợp, kết hợp"?', '文', '太', '合', '知', '合', 'generated' from jp_kanji where id = 'ed33ef6b-7d96-471e-87a6-631ffbb18238';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"合う" có nghĩa là gì?', 'thuận tiện', 'trang điểm', 'phù hợp, vừa vặn', 'suy nghĩ', 'phù hợp, vừa vặn', 'generated' from jp_kanji where id = 'ed33ef6b-7d96-471e-87a6-631ffbb18238';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 間に合う', 'まにあう', 'generated' from jp_kanji where id = 'ed33ef6b-7d96-471e-87a6-631ffbb18238';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 当 (ĐƯƠNG) có âm chính là gì?', 'あたる', 'ひくい', 'はこぶ', 'ひろる', 'あたる', 'generated' from jp_kanji where id = '894dc231-43a5-444b-88e2-76037c8627d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trúng, đương nhiên, cái đó"?', '運', '広', '当', '走', '当', 'generated' from jp_kanji where id = '894dc231-43a5-444b-88e2-76037c8627d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"当たる" có nghĩa là gì?', 'trúng', 'tài xế', 'Tây hóa', 'vui tươi', 'trúng', 'generated' from jp_kanji where id = '894dc231-43a5-444b-88e2-76037c8627d1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お弁当', 'おべんとう', 'generated' from jp_kanji where id = '894dc231-43a5-444b-88e2-76037c8627d1';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 考 (KHẢO) có âm chính là gì?', 'かんがえる', 'しらせる', 'チ', 'チ', 'かんがえる', 'generated' from jp_kanji where id = '236dce10-4d1c-4c55-9e0f-33bfed0dfdb0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "suy nghĩ, xem xét"?', '正', '考', '当', '知', '考', 'generated' from jp_kanji where id = '236dce10-4d1c-4c55-9e0f-33bfed0dfdb0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"考える" có nghĩa là gì?', 'mở rộng, quảng bá', 'vận chuyển', 'suy nghĩ', 'biết', 'suy nghĩ', 'generated' from jp_kanji where id = '236dce10-4d1c-4c55-9e0f-33bfed0dfdb0';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 考える', 'かんがえる', 'generated' from jp_kanji where id = '236dce10-4d1c-4c55-9e0f-33bfed0dfdb0';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 走 (TẨU) có âm chính là gì?', 'ゴウ', 'ソウ', 'はしる', 'タ', 'はしる', 'generated' from jp_kanji where id = '1b467b3b-d932-476a-893b-411320e104ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chạy"?', '走', '低', '広', '当', '走', 'generated' from jp_kanji where id = '1b467b3b-d932-476a-893b-411320e104ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"走る" có nghĩa là gì?', 'phù hợp, vừa vặn', 'rộng, rộng lớn', 'đi học, đi học', 'chạy', 'chạy', 'generated' from jp_kanji where id = '1b467b3b-d932-476a-893b-411320e104ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 走る', 'はしる', 'generated' from jp_kanji where id = '1b467b3b-d932-476a-893b-411320e104ae';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 治 (TRỊ) có âm chính là gì?', 'コウ', 'なおす', 'ウン', 'ふとる', 'なおす', 'generated' from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chữa trị, cai trị"?', '走', '正', '広', '治', '治', 'generated' from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"治す" có nghĩa là gì?', 'chữa, trị bệnh', 'thông báo', 'thấp', 'âm nhạc', 'chữa, trị bệnh', 'generated' from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 政治', 'せいじ', 'generated' from jp_kanji where id = '722bb009-7108-420e-99a6-f8112fb3a8ca';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 通 (THÔNG) có âm chính là gì?', 'タ', 'ばける', 'コウ', 'かよう', 'かよう', 'generated' from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thông qua, đi qua, thông thạo"?', '走', '楽', '化', '通', '通', 'generated' from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"通う" có nghĩa là gì?', 'thông thường', 'đi học, đi học', 'phù hợp, vừa vặn', 'mặt trời', 'đi học, đi học', 'generated' from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 通る', 'とおる', 'generated' from jp_kanji where id = 'c70d9aab-763a-4bcb-abec-64ec2e8cd617';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 知 (TRI) có âm chính là gì?', 'しる', 'はしる', 'まさ', 'ばかす', 'しる', 'generated' from jp_kanji where id = '3233b65e-c4e5-4a7e-92d8-e18c0e8ca961';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "biết, hiểu biết"?', '知', '通', '運', '治', '知', 'generated' from jp_kanji where id = '3233b65e-c4e5-4a7e-92d8-e18c0e8ca961';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"知る" có nghĩa là gì?', 'chữa, trị bệnh', 'biết', 'thi đỗ', 'đặt hàng, gọi món', 'biết', 'generated' from jp_kanji where id = '3233b65e-c4e5-4a7e-92d8-e18c0e8ca961';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お知らせ', 'おしらせ', 'generated' from jp_kanji where id = '3233b65e-c4e5-4a7e-92d8-e18c0e8ca961';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 文 (VĂN) có âm chính là gì?', 'ガッ', 'ブン', 'ガク', 'セイ', 'ブン', 'generated' from jp_kanji where id = 'd513fc51-f794-47e6-ac74-43022d792ed7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "văn, văn bản, câu văn"?', '治', '通', '走', '文', '文', 'generated' from jp_kanji where id = 'd513fc51-f794-47e6-ac74-43022d792ed7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"ご注文" có nghĩa là gì?', 'thuận tiện', 'chữa, trị bệnh', 'cơm hộp', 'đặt hàng, gọi món', 'đặt hàng, gọi món', 'generated' from jp_kanji where id = 'd513fc51-f794-47e6-ac74-43022d792ed7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 文法', 'ぶんぽう', 'generated' from jp_kanji where id = 'd513fc51-f794-47e6-ac74-43022d792ed7';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 化 (HÓA) có âm chính là gì?', 'カ', 'おさめる', 'ヅウ', 'ただしい', 'カ', 'generated' from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hóa, biến đổi thành"?', '考', '化', '運', '治', '化', 'generated' from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"西洋化する" có nghĩa là gì?', 'chữa, trị bệnh', 'thấp', 'Tây hóa', 'kịp thời', 'Tây hóa', 'generated' from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 化粧', 'けしょう', 'generated' from jp_kanji where id = '94995782-110d-4ab3-813f-966583f960ce';


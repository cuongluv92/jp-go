-- ============================================================
-- jp-go — Kanji N2, BUILD ĐẦU TIÊN của cấp N2 (thí điểm 10 kanji
-- đại diện). Nguồn: PDF "Tổng hợp kiến thức N2" (Dũng Mori),
-- PART 1 - 漢字, trang in 2.
--
-- KHÁC N5: PDF N2 không có nhãn On/Kun tách cột, không có dòng
-- "cách đọc gốc" riêng của kanji — chỉ có sẵn từ ghép + furigana đầy
-- đủ. Đã tự tách phần furigana đúng ứng với riêng kanji đang xét (đối
-- chiếu nhiều từ ghép cùng kanji để xác nhận nhất quán) rồi tự phân
-- loại on/kun theo kiến thức Hán tự chuẩn — không bịa âm không có
-- trong PDF (vd 領/桃/免/晩 PDF chỉ cho 1 âm on, không thêm kun dù
-- kanji có thể có kun trong từ điển đầy đủ).
--
-- 逃 (trốn, kun に từ 逃げる/逃がす và kun の từ 逃す/逃れる là 2 NHÓM
-- âm kun khác nhau, không gộp nhầm) và 桃 (quả đào) là cặp cùng Hán
-- Việt "ĐÀO" khác kanji — ghi chú common_mistake/similar_kanji chéo
-- nhau để test tính năng phân biệt mẫu dễ nhầm.
--
-- Additive, idempotent theo unique (level, kanji_character).
-- ============================================================

-- ---------- 井 (TỊNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('7fc27a0d-4150-4331-b9a3-f6c02a200465', 'N2', '井', 'TỊNH', 'giếng', NULL, NULL, '井 vốn là hình cái giếng nhìn từ trên xuống (khung gỗ bắt chéo).', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e2928d70-76fc-40b5-bd65-6a6cfcb64cba', id, 'kun', 'い', true, 2, 'ok', NULL from jp_kanji where id = '7fc27a0d-4150-4331-b9a3-f6c02a200465' on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd31ff072-5c32-4131-a6a3-dd0c1e63d18b', id, 'on', 'じょう', true, 2, 'ok', NULL from jp_kanji where id = '7fc27a0d-4150-4331-b9a3-f6c02a200465' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7fc27a0d-4150-4331-b9a3-f6c02a200465', 'e2928d70-76fc-40b5-bd65-6a6cfcb64cba', '井戸', 'いど', 'cái giếng', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7fc27a0d-4150-4331-b9a3-f6c02a200465', 'e2928d70-76fc-40b5-bd65-6a6cfcb64cba', '井戸水', 'いどすい', 'nước giếng', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('7fc27a0d-4150-4331-b9a3-f6c02a200465', 'd31ff072-5c32-4131-a6a3-dd0c1e63d18b', '天井', 'てんじょう', 'trần nhà', false, 2, 'pdf', 'ok', NULL);

-- ---------- 冷 (LÃNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1a2f86ce-c275-4c0f-afd9-c10d17af188e', 'N2', '冷', 'LÃNH', 'lạnh', NULL, NULL, '冷 = 冫(băng) + 令(lệnh) — hơi lạnh như băng tuân theo lệnh mà đến.', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4c573a88-1370-4a7f-b349-19e0333b7b61', id, 'on', 'れい', true, 2, 'ok', NULL from jp_kanji where id = '1a2f86ce-c275-4c0f-afd9-c10d17af188e' on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0d43af8e-63ec-4764-894f-6afdbb656667', id, 'kun', 'ひ', true, 2, 'ok', NULL from jp_kanji where id = '1a2f86ce-c275-4c0f-afd9-c10d17af188e' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1a2f86ce-c275-4c0f-afd9-c10d17af188e', '4c573a88-1370-4a7f-b349-19e0333b7b61', '冷静', 'れいせい', 'bình tĩnh', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1a2f86ce-c275-4c0f-afd9-c10d17af188e', '4c573a88-1370-4a7f-b349-19e0333b7b61', '冷蔵庫', 'れいぞうこ', 'tủ lạnh', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1a2f86ce-c275-4c0f-afd9-c10d17af188e', '4c573a88-1370-4a7f-b349-19e0333b7b61', '冷凍する', 'れいとうする', 'làm đông lạnh', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1a2f86ce-c275-4c0f-afd9-c10d17af188e', '4c573a88-1370-4a7f-b349-19e0333b7b61', '冷徹な', 'れいてつな', 'sắc bén, sáng suốt', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1a2f86ce-c275-4c0f-afd9-c10d17af188e', '0d43af8e-63ec-4764-894f-6afdbb656667', '冷やかす', 'ひやかす', 'trêu chọc', false, 2, 'pdf', 'ok', NULL);

-- ---------- 逃 (ĐÀO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('a619c4ce-92aa-427a-a5c0-dabbb1953c71', 'N2', '逃', 'ĐÀO', 'trốn, chạy trốn', NULL, NULL, '逃 = 辶(đi) + 兆(triệu, chia tách) — chạy tách khỏi, tức là trốn.', '逃 (trốn) rất dễ nhầm với 桃 (quả đào) — cùng Hán Việt "ĐÀO" nhưng nghĩa và bộ thủ khác hẳn (辶 đi vs 木 cây).', '{"桃"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '76d2ce37-e19e-47de-9cdd-bce25d3c5b95', id, 'on', 'とう', true, 2, 'ok', NULL from jp_kanji where id = 'a619c4ce-92aa-427a-a5c0-dabbb1953c71' on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0c37e663-8faf-48d5-b0ef-14e4468e77d9', id, 'kun', 'に', true, 2, 'ok', NULL from jp_kanji where id = 'a619c4ce-92aa-427a-a5c0-dabbb1953c71' on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '1d7b4605-8f10-4bd3-b1f8-a8470ddf7b16', id, 'kun', 'の', true, 2, 'ok', NULL from jp_kanji where id = 'a619c4ce-92aa-427a-a5c0-dabbb1953c71' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a619c4ce-92aa-427a-a5c0-dabbb1953c71', '76d2ce37-e19e-47de-9cdd-bce25d3c5b95', '逃走する', 'とうそうする', 'chạy trốn', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a619c4ce-92aa-427a-a5c0-dabbb1953c71', '76d2ce37-e19e-47de-9cdd-bce25d3c5b95', '逃亡', 'とうぼう', 'bỏ trốn', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a619c4ce-92aa-427a-a5c0-dabbb1953c71', '0c37e663-8faf-48d5-b0ef-14e4468e77d9', '逃がす', 'にがす', 'tha', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a619c4ce-92aa-427a-a5c0-dabbb1953c71', '0c37e663-8faf-48d5-b0ef-14e4468e77d9', '逃げる', 'にげる', 'chạy mất', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a619c4ce-92aa-427a-a5c0-dabbb1953c71', '1d7b4605-8f10-4bd3-b1f8-a8470ddf7b16', '逃す', 'のがす', 'vuột mất', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a619c4ce-92aa-427a-a5c0-dabbb1953c71', '1d7b4605-8f10-4bd3-b1f8-a8470ddf7b16', '逃れる', 'のがれる', 'trốn tránh', false, 2, 'pdf', 'ok', NULL);

-- ---------- 民 (DÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('ee46abe9-b40a-4700-a4d7-c5a1a3b044fb', 'N2', '民', 'DÂN', 'dân, nhân dân', NULL, NULL, '民 hay xuất hiện trong các từ Hán-Hán ghép với nghĩa "người dân/nhân dân".', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b57aae49-8c09-4ef9-bc82-a2ff93131525', id, 'on', 'みん', true, 2, 'ok', NULL from jp_kanji where id = 'ee46abe9-b40a-4700-a4d7-c5a1a3b044fb' on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f3897c5f-2b6c-4c21-90d4-3569d0a47afd', id, 'kun', 'たみ', true, 2, 'ok', NULL from jp_kanji where id = 'ee46abe9-b40a-4700-a4d7-c5a1a3b044fb' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ee46abe9-b40a-4700-a4d7-c5a1a3b044fb', 'b57aae49-8c09-4ef9-bc82-a2ff93131525', '民意', 'みんい', 'lòng dân', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ee46abe9-b40a-4700-a4d7-c5a1a3b044fb', 'b57aae49-8c09-4ef9-bc82-a2ff93131525', '国民性', 'こくみんせい', 'tính dân tộc', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ee46abe9-b40a-4700-a4d7-c5a1a3b044fb', 'b57aae49-8c09-4ef9-bc82-a2ff93131525', '移民', 'いみん', 'dân di cư', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ee46abe9-b40a-4700-a4d7-c5a1a3b044fb', 'f3897c5f-2b6c-4c21-90d4-3569d0a47afd', '民', 'たみ', 'dân', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ee46abe9-b40a-4700-a4d7-c5a1a3b044fb', 'b57aae49-8c09-4ef9-bc82-a2ff93131525', '民主', 'みんしゅ', 'dân chủ', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('ee46abe9-b40a-4700-a4d7-c5a1a3b044fb', 'b57aae49-8c09-4ef9-bc82-a2ff93131525', '民間', 'みんかん', 'tư nhân', false, 2, 'pdf', 'ok', NULL);

-- ---------- 眠 (MIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('1df128cb-ff73-452c-bff1-ed7b4c036e77', 'N2', '眠', 'MIÊN', 'ngủ', NULL, NULL, '眠 = 目(mắt) + 民(dân) — nhắm mắt lại là ngủ.', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '6cf579fa-afc3-4b38-bea4-085d4ad03ec1', id, 'kun', 'ねむ', true, 2, 'ok', NULL from jp_kanji where id = '1df128cb-ff73-452c-bff1-ed7b4c036e77' on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd670a14d-9a36-41a1-bf8a-5e74c0692a94', id, 'on', 'みん', true, 2, 'ok', NULL from jp_kanji where id = '1df128cb-ff73-452c-bff1-ed7b4c036e77' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1df128cb-ff73-452c-bff1-ed7b4c036e77', '6cf579fa-afc3-4b38-bea4-085d4ad03ec1', '眠る', 'ねむる', 'ngủ', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1df128cb-ff73-452c-bff1-ed7b4c036e77', 'd670a14d-9a36-41a1-bf8a-5e74c0692a94', '睡眠不足', 'すいみんぶそく', 'thiếu ngủ', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1df128cb-ff73-452c-bff1-ed7b4c036e77', 'd670a14d-9a36-41a1-bf8a-5e74c0692a94', '仮眠', 'かみん', 'chợp mắt', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('1df128cb-ff73-452c-bff1-ed7b4c036e77', '6cf579fa-afc3-4b38-bea4-085d4ad03ec1', '居眠り', 'いねむり', 'ngủ gật', false, 2, 'pdf', 'ok', NULL);

-- ---------- 領 (LĨNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('a341617a-f7b1-4c1b-8852-f7eb0e97b258', 'N2', '領', 'LĨNH', 'lãnh, lãnh thổ/lĩnh vực', NULL, NULL, '領 hay đi với 統/占/横 để chỉ chủ quyền, đất đai, quyền quản lý.', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '23b8a7c5-0dbc-4f97-b733-069c9fd35e95', id, 'on', 'りょう', true, 2, 'ok', NULL from jp_kanji where id = 'a341617a-f7b1-4c1b-8852-f7eb0e97b258' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a341617a-f7b1-4c1b-8852-f7eb0e97b258', '23b8a7c5-0dbc-4f97-b733-069c9fd35e95', '大統領', 'だいとうりょう', 'tổng thống', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a341617a-f7b1-4c1b-8852-f7eb0e97b258', '23b8a7c5-0dbc-4f97-b733-069c9fd35e95', '領収書', 'りょうしゅうしょ', 'biên lai', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a341617a-f7b1-4c1b-8852-f7eb0e97b258', '23b8a7c5-0dbc-4f97-b733-069c9fd35e95', '領土', 'りょうど', 'lãnh thổ', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a341617a-f7b1-4c1b-8852-f7eb0e97b258', '23b8a7c5-0dbc-4f97-b733-069c9fd35e95', '占領する', 'せんりょうする', 'chiếm', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a341617a-f7b1-4c1b-8852-f7eb0e97b258', '23b8a7c5-0dbc-4f97-b733-069c9fd35e95', '横領', 'おうりょう', 'biển thủ', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a341617a-f7b1-4c1b-8852-f7eb0e97b258', '23b8a7c5-0dbc-4f97-b733-069c9fd35e95', '領域', 'りょういき', 'chu vi, lĩnh vực', false, 2, 'pdf', 'ok', NULL);

-- ---------- 兆 (TRIỆU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('967ab242-764c-41e8-96ce-a4a7b653b2ae', 'N2', '兆', 'TRIỆU', 'dấu hiệu; số triệu (đơn vị đếm 10^12)', NULL, NULL, '兆 vừa có nghĩa "điềm báo, dấu hiệu" (kun きざし) vừa là đơn vị số rất lớn (on ちょう).', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '59833941-9128-4152-b384-7ed2095c7d79', id, 'kun', 'きざ', true, 2, 'ok', NULL from jp_kanji where id = '967ab242-764c-41e8-96ce-a4a7b653b2ae' on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '125b76ca-74eb-4447-bab0-9f55e36f20a3', id, 'on', 'ちょう', true, 2, 'ok', NULL from jp_kanji where id = '967ab242-764c-41e8-96ce-a4a7b653b2ae' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('967ab242-764c-41e8-96ce-a4a7b653b2ae', '59833941-9128-4152-b384-7ed2095c7d79', '兆し', 'きざし', 'dấu hiệu', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('967ab242-764c-41e8-96ce-a4a7b653b2ae', '125b76ca-74eb-4447-bab0-9f55e36f20a3', '一兆円', 'いっちょうえん', 'một nghìn tỷ yên', false, 2, 'pdf', 'ok', NULL);

-- ---------- 桃 (ĐÀO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('c5deb0f8-7903-4d8d-9134-20a3eec6932c', 'N2', '桃', 'ĐÀO', 'quả đào', NULL, NULL, '桃 = 木(cây) + 兆 — cây cho quả đào. Phân biệt với 逃 (trốn, bộ 辶).', '桃 (quả đào, bộ 木) dễ nhầm với 逃 (trốn, bộ 辶) — cùng Hán Việt "ĐÀO".', '{"逃"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '576949b4-f33f-422e-9dd7-49b127c4a083', id, 'on', 'とう', true, 2, 'ok', NULL from jp_kanji where id = 'c5deb0f8-7903-4d8d-9134-20a3eec6932c' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c5deb0f8-7903-4d8d-9134-20a3eec6932c', '576949b4-f33f-422e-9dd7-49b127c4a083', '白桃', 'はくとう', 'quả đào trắng', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('c5deb0f8-7903-4d8d-9134-20a3eec6932c', '576949b4-f33f-422e-9dd7-49b127c4a083', '扁桃腺', 'へんとうせん', 'amidan', false, 2, 'pdf', 'ok', NULL);

-- ---------- 免 (MIỄN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4eb87d66-699a-4a7b-bf52-f5a49b50ea6c', 'N2', '免', 'MIỄN', 'miễn, tránh (miễn trừ, miễn thuế)', NULL, NULL, '免 hay đi với 許/税/疫 để chỉ việc được miễn trừ, cho phép.', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'f4fa982f-16c7-4581-b864-4534961bb977', id, 'on', 'めん', true, 2, 'ok', NULL from jp_kanji where id = '4eb87d66-699a-4a7b-bf52-f5a49b50ea6c' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4eb87d66-699a-4a7b-bf52-f5a49b50ea6c', 'f4fa982f-16c7-4581-b864-4534961bb977', '免許', 'めんきょ', 'giấy phép', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4eb87d66-699a-4a7b-bf52-f5a49b50ea6c', 'f4fa982f-16c7-4581-b864-4534961bb977', '免税店', 'めんぜいてん', 'cửa hàng miễn thuế', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4eb87d66-699a-4a7b-bf52-f5a49b50ea6c', 'f4fa982f-16c7-4581-b864-4534961bb977', '免疫力', 'めんえきりょく', 'khả năng miễn dịch', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4eb87d66-699a-4a7b-bf52-f5a49b50ea6c', 'f4fa982f-16c7-4581-b864-4534961bb977', '運転免許証', 'うんてんめんきょしょう', 'bằng lái xe', false, 2, 'pdf', 'ok', NULL);

-- ---------- 晩 (VÃN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('91a689eb-6b67-48ea-a8a0-678915f84ac5', 'N2', '晩', 'VÃN', 'buổi tối', NULL, NULL, '晩 = 日(mặt trời) + 免 — mặt trời lặn, tức là về tối.', NULL, '{}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'a762c7c7-db9c-4de2-9543-840a5878a77a', id, 'on', 'ばん', true, 2, 'ok', NULL from jp_kanji where id = '91a689eb-6b67-48ea-a8a0-678915f84ac5' on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('91a689eb-6b67-48ea-a8a0-678915f84ac5', 'a762c7c7-db9c-4de2-9543-840a5878a77a', '毎晩', 'まいばん', 'mỗi tối', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('91a689eb-6b67-48ea-a8a0-678915f84ac5', 'a762c7c7-db9c-4de2-9543-840a5878a77a', '晩ご飯', 'ばんごはん', 'cơm tối', false, 2, 'pdf', 'ok', NULL);

-- ---------- jp_kanji_questions: PDF không có 問題 cho phần Kanji, toàn bộ generated ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"井" đọc là gì (trong từ "井戸")?', 'じょう', 'い', 'たみ', 'きざ', 'い', 'generated' from jp_kanji where id = '7fc27a0d-4150-4331-b9a3-f6c02a200465';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giếng"?', '民', '晩', '桃', '井', '井', 'generated' from jp_kanji where id = '7fc27a0d-4150-4331-b9a3-f6c02a200465';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"井戸" (いど) nghĩa là gì?', 'cái giếng', 'amidan', 'dân chủ', 'bằng lái xe', 'cái giếng', 'generated' from jp_kanji where id = '7fc27a0d-4150-4331-b9a3-f6c02a200465';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 井戸水 (nước giếng)', 'いどすい', 'generated' from jp_kanji where id = '7fc27a0d-4150-4331-b9a3-f6c02a200465';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"冷" đọc là gì (trong từ "冷静")?', 'とう', 'みん', 'ねむ', 'れい', 'れい', 'generated' from jp_kanji where id = '1a2f86ce-c275-4c0f-afd9-c10d17af188e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lạnh"?', '眠', '免', '冷', '井', '冷', 'generated' from jp_kanji where id = '1a2f86ce-c275-4c0f-afd9-c10d17af188e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"冷静" (れいせい) nghĩa là gì?', 'biên lai', 'mỗi tối', 'bình tĩnh', 'nước giếng', 'bình tĩnh', 'generated' from jp_kanji where id = '1a2f86ce-c275-4c0f-afd9-c10d17af188e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 冷蔵庫 (tủ lạnh)', 'れいぞうこ', 'generated' from jp_kanji where id = '1a2f86ce-c275-4c0f-afd9-c10d17af188e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"逃" đọc là gì (trong từ "逃走する")?', 'とう', 'ちょう', 'ねむ', 'ひ', 'とう', 'generated' from jp_kanji where id = 'a619c4ce-92aa-427a-a5c0-dabbb1953c71';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trốn, chạy trốn"?', '兆', '逃', '領', '冷', '逃', 'generated' from jp_kanji where id = 'a619c4ce-92aa-427a-a5c0-dabbb1953c71';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"逃走する" (とうそうする) nghĩa là gì?', 'khả năng miễn dịch', 'vuột mất', 'cửa hàng miễn thuế', 'chạy trốn', 'chạy trốn', 'generated' from jp_kanji where id = 'a619c4ce-92aa-427a-a5c0-dabbb1953c71';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 逃亡 (bỏ trốn)', 'とうぼう', 'generated' from jp_kanji where id = 'a619c4ce-92aa-427a-a5c0-dabbb1953c71';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"民" đọc là gì (trong từ "民意")?', 'めん', 'とう', 'みん', 'じょう', 'みん', 'generated' from jp_kanji where id = 'ee46abe9-b40a-4700-a4d7-c5a1a3b044fb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dân, nhân dân"?', '眠', '逃', '桃', '民', '民', 'generated' from jp_kanji where id = 'ee46abe9-b40a-4700-a4d7-c5a1a3b044fb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"民意" (みんい) nghĩa là gì?', 'dân di cư', 'tổng thống', 'lòng dân', 'quả đào trắng', 'lòng dân', 'generated' from jp_kanji where id = 'ee46abe9-b40a-4700-a4d7-c5a1a3b044fb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 国民性 (tính dân tộc)', 'こくみんせい', 'generated' from jp_kanji where id = 'ee46abe9-b40a-4700-a4d7-c5a1a3b044fb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"眠" đọc là gì (trong từ "眠る")?', 'ねむ', 'とう', 'に', 'じょう', 'ねむ', 'generated' from jp_kanji where id = '1df128cb-ff73-452c-bff1-ed7b4c036e77';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ngủ"?', '桃', '井', '眠', '兆', '眠', 'generated' from jp_kanji where id = '1df128cb-ff73-452c-bff1-ed7b4c036e77';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"眠る" (ねむる) nghĩa là gì?', 'dấu hiệu', 'ngủ', 'khả năng miễn dịch', 'tổng thống', 'ngủ', 'generated' from jp_kanji where id = '1df128cb-ff73-452c-bff1-ed7b4c036e77';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 睡眠不足 (thiếu ngủ)', 'すいみんぶそく', 'generated' from jp_kanji where id = '1df128cb-ff73-452c-bff1-ed7b4c036e77';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"領" đọc là gì (trong từ "大統領")?', 'りょう', 'に', 'きざ', 'たみ', 'りょう', 'generated' from jp_kanji where id = 'a341617a-f7b1-4c1b-8852-f7eb0e97b258';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lãnh, lãnh thổ/lĩnh vực"?', '桃', '晩', '民', '領', '領', 'generated' from jp_kanji where id = 'a341617a-f7b1-4c1b-8852-f7eb0e97b258';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"大統領" (だいとうりょう) nghĩa là gì?', 'dân chủ', 'tổng thống', 'cơm tối', 'trốn tránh', 'tổng thống', 'generated' from jp_kanji where id = 'a341617a-f7b1-4c1b-8852-f7eb0e97b258';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 領収書 (biên lai)', 'りょうしゅうしょ', 'generated' from jp_kanji where id = 'a341617a-f7b1-4c1b-8852-f7eb0e97b258';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"兆" đọc là gì (trong từ "兆し")?', 'たみ', 'きざ', 'りょう', 'とう', 'きざ', 'generated' from jp_kanji where id = '967ab242-764c-41e8-96ce-a4a7b653b2ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dấu hiệu; số triệu (đơn vị đếm 10^12)"?', '逃', '桃', '晩', '兆', '兆', 'generated' from jp_kanji where id = '967ab242-764c-41e8-96ce-a4a7b653b2ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"兆し" (きざし) nghĩa là gì?', 'dấu hiệu', 'tính dân tộc', 'ngủ', 'thiếu ngủ', 'dấu hiệu', 'generated' from jp_kanji where id = '967ab242-764c-41e8-96ce-a4a7b653b2ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 一兆円 (một nghìn tỷ yên)', 'いっちょうえん', 'generated' from jp_kanji where id = '967ab242-764c-41e8-96ce-a4a7b653b2ae';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"桃" đọc là gì (trong từ "白桃")?', 'とう', 'に', 'い', 'ばん', 'とう', 'generated' from jp_kanji where id = 'c5deb0f8-7903-4d8d-9134-20a3eec6932c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "quả đào"?', '冷', '民', '桃', '免', '桃', 'generated' from jp_kanji where id = 'c5deb0f8-7903-4d8d-9134-20a3eec6932c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"白桃" (はくとう) nghĩa là gì?', 'quả đào trắng', 'ngủ gật', 'cái giếng', 'tha', 'quả đào trắng', 'generated' from jp_kanji where id = 'c5deb0f8-7903-4d8d-9134-20a3eec6932c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 扁桃腺 (amidan)', 'へんとうせん', 'generated' from jp_kanji where id = 'c5deb0f8-7903-4d8d-9134-20a3eec6932c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"免" đọc là gì (trong từ "免許")?', 'ばん', 'めん', 'ちょう', 'じょう', 'めん', 'generated' from jp_kanji where id = '4eb87d66-699a-4a7b-bf52-f5a49b50ea6c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "miễn, tránh (miễn trừ, miễn thuế)"?', '晩', '井', '領', '免', '免', 'generated' from jp_kanji where id = '4eb87d66-699a-4a7b-bf52-f5a49b50ea6c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"免許" (めんきょ) nghĩa là gì?', 'chợp mắt', 'cửa hàng miễn thuế', 'giấy phép', 'khả năng miễn dịch', 'giấy phép', 'generated' from jp_kanji where id = '4eb87d66-699a-4a7b-bf52-f5a49b50ea6c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 免税店 (cửa hàng miễn thuế)', 'めんぜいてん', 'generated' from jp_kanji where id = '4eb87d66-699a-4a7b-bf52-f5a49b50ea6c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_reading', '"晩" đọc là gì (trong từ "毎晩")?', 'れい', 'とう', 'ばん', 'たみ', 'ばん', 'generated' from jp_kanji where id = '91a689eb-6b67-48ea-a8a0-678915f84ac5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "buổi tối"?', '領', '井', '晩', '桃', '晩', 'generated' from jp_kanji where id = '91a689eb-6b67-48ea-a8a0-678915f84ac5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) select id, 'choose_word_meaning', '"毎晩" (まいばん) nghĩa là gì?', 'cửa hàng miễn thuế', 'mỗi tối', 'biển thủ', 'chạy mất', 'mỗi tối', 'generated' from jp_kanji where id = '91a689eb-6b67-48ea-a8a0-678915f84ac5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type) select id, 'write_reading', 'Đọc từ sau: 晩ご飯 (cơm tối)', 'ばんごはん', 'generated' from jp_kanji where id = '91a689eb-6b67-48ea-a8a0-678915f84ac5';

-- Tổng 40 câu hỏi generated cho 10 kanji.

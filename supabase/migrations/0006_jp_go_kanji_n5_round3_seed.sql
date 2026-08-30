-- ============================================================
-- jp-go — Kanji N5 đợt 3: 今,分,半,時,年,本,休,帰 (trang 7) +
-- 行,来,校,車,書,食,飲,見 (trang 8) của PDF "Tổng hợp kiến thức
-- N5" (Dũng Mori). Additive, idempotent qua ON CONFLICT.
-- ============================================================

-- ---------- 今 (KIM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'N5', '今', 'KIM', 'bây giờ, hiện tại', 4, '人', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'bceabe55-dabd-4bb2-9e62-ff1727d49f4f', id, 'kun', 'いま', true, 7, 'ok' from jp_kanji where id = '17f0e795-e335-45d8-a2ad-a294273e4715'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'b0497da0-0a9b-4cd8-abe3-c8e13a6eac9a', id, 'on', 'こん', true, 7, 'ok' from jp_kanji where id = '17f0e795-e335-45d8-a2ad-a294273e4715'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'bceabe55-dabd-4bb2-9e62-ff1727d49f4f', '今', 'いま', 'bây giờ, hiện tại', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'bceabe55-dabd-4bb2-9e62-ff1727d49f4f', '今にも', 'いまにも', 'sắp (xảy ra gì đó)', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'bceabe55-dabd-4bb2-9e62-ff1727d49f4f', 'たった今', 'たったいま', 'vừa nãy', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'bceabe55-dabd-4bb2-9e62-ff1727d49f4f', 'ただ今', 'ただいま', 'ngay lúc này', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'b0497da0-0a9b-4cd8-abe3-c8e13a6eac9a', '今晩', 'こんばん', 'tối nay', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'b0497da0-0a9b-4cd8-abe3-c8e13a6eac9a', '今週', 'こんしゅう', 'tuần này', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'b0497da0-0a9b-4cd8-abe3-c8e13a6eac9a', '今月', 'こんげつ', 'tháng này', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'b0497da0-0a9b-4cd8-abe3-c8e13a6eac9a', '今度', 'こんど', 'lần này', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('17f0e795-e335-45d8-a2ad-a294273e4715', 'b0497da0-0a9b-4cd8-abe3-c8e13a6eac9a', '今夜', 'こんや', 'đêm nay', false, 7, 'pdf', 'ok');

-- ---------- 分 (PHÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', 'N5', '分', 'PHÂN', 'phút, phần, chia', 4, '刀', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '0a01b3e0-c727-4417-a9db-7a956aeb4484', id, 'kun', 'わ', false, 7, 'ok' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '3e3a85b3-84b9-49e0-bcb8-686172f8736e', id, 'on', 'ふん', true, 7, 'ok' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f69a7c5c-eabe-4b84-84b8-1699727e36a4', id, 'on', 'ぶん', false, 7, 'ok' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd577a41e-41aa-4b3c-837e-c2dd3a73a498', id, 'on', 'ぷん', false, 7, 'ok' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', '3e3a85b3-84b9-49e0-bcb8-686172f8736e', '分', 'ふん', 'phút', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', 'd577a41e-41aa-4b3c-837e-c2dd3a73a498', '何分', 'なんぷん', 'mấy phút', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', 'f69a7c5c-eabe-4b84-84b8-1699727e36a4', '自分で', 'じぶんで', 'tự mình', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', 'f69a7c5c-eabe-4b84-84b8-1699727e36a4', '気分', 'きぶん', 'tâm tình, tinh thần', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', 'f69a7c5c-eabe-4b84-84b8-1699727e36a4', '十分', 'じゅうぶん', 'đầy đủ, hoàn toàn', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', 'f69a7c5c-eabe-4b84-84b8-1699727e36a4', '四分の一', 'よんぶんのいち', '1/4', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5d3a390-b4ef-4e81-aa64-f333661e2d01', 'f69a7c5c-eabe-4b84-84b8-1699727e36a4', '半分', 'はんぶん', 'một nửa', false, 7, 'pdf', 'ok');

-- ---------- 半 (BÁN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('369af613-2206-41a8-bc85-30cc33c34b3f', 'N5', '半', 'BÁN', 'nửa, rưỡi', 5, NULL, 7, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c4bfafc7-37fb-496a-8835-517c3ffa174d', id, 'on', 'はん', true, 7, 'ok' from jp_kanji where id = '369af613-2206-41a8-bc85-30cc33c34b3f'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('369af613-2206-41a8-bc85-30cc33c34b3f', 'c4bfafc7-37fb-496a-8835-517c3ffa174d', '半', 'はん', 'bán, một nửa, rưỡi', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('369af613-2206-41a8-bc85-30cc33c34b3f', 'c4bfafc7-37fb-496a-8835-517c3ffa174d', '半分', 'はんぶん', 'một nửa', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('369af613-2206-41a8-bc85-30cc33c34b3f', 'c4bfafc7-37fb-496a-8835-517c3ffa174d', '半年', 'はんとし', 'nửa năm', false, 7, 'pdf', 'ok');

-- ---------- 時 (THỜI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('63ad9875-b854-4254-90a6-f8c540f4573d', 'N5', '時', 'THỜI', 'giờ, thời gian', 10, '日', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '35b3c719-6de7-4eac-abfa-df565810a775', id, 'kun', 'とき', true, 7, 'ok' from jp_kanji where id = '63ad9875-b854-4254-90a6-f8c540f4573d'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f5ec8341-7c9f-498b-a624-2ce3300c4e6b', id, 'on', 'じ', true, 7, 'ok' from jp_kanji where id = '63ad9875-b854-4254-90a6-f8c540f4573d'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('63ad9875-b854-4254-90a6-f8c540f4573d', '35b3c719-6de7-4eac-abfa-df565810a775', '時計', 'とけい', 'đồng hồ', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('63ad9875-b854-4254-90a6-f8c540f4573d', '35b3c719-6de7-4eac-abfa-df565810a775', '時々', 'ときどき', 'thỉnh thoảng', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('63ad9875-b854-4254-90a6-f8c540f4573d', 'f5ec8341-7c9f-498b-a624-2ce3300c4e6b', '時', 'じ', 'giờ', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('63ad9875-b854-4254-90a6-f8c540f4573d', 'f5ec8341-7c9f-498b-a624-2ce3300c4e6b', '何時', 'なんじ', 'mấy giờ', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('63ad9875-b854-4254-90a6-f8c540f4573d', 'f5ec8341-7c9f-498b-a624-2ce3300c4e6b', '時間', 'じかん', 'thời gian', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('63ad9875-b854-4254-90a6-f8c540f4573d', 'f5ec8341-7c9f-498b-a624-2ce3300c4e6b', '時刻表', 'じこくひょう', 'thời gian biểu', false, 7, 'pdf', 'ok');

-- ---------- 年 (NIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', 'N5', '年', 'NIÊN', 'năm', 6, NULL, 7, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '6edc2e62-3531-46ac-9c9a-f35b2d06a2e8', id, 'kun', 'とし', true, 7, 'ok' from jp_kanji where id = '91dab8de-7213-4b46-be27-24a54c28d9f8'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1a8289ee-210c-4cdb-89b7-0fc6096ec69f', id, 'on', 'ねん', true, 7, 'ok' from jp_kanji where id = '91dab8de-7213-4b46-be27-24a54c28d9f8'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', '6edc2e62-3531-46ac-9c9a-f35b2d06a2e8', '半年', 'はんとし', 'nửa năm', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', '1a8289ee-210c-4cdb-89b7-0fc6096ec69f', '来年', 'らいねん', 'năm sau', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', '1a8289ee-210c-4cdb-89b7-0fc6096ec69f', '去年', 'きょねん', 'năm trước', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', '1a8289ee-210c-4cdb-89b7-0fc6096ec69f', '一年', 'いちねん', 'một năm', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', '1a8289ee-210c-4cdb-89b7-0fc6096ec69f', '何年', 'なんねん', 'năm nào', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', '1a8289ee-210c-4cdb-89b7-0fc6096ec69f', '年賀状', 'ねんがじょう', 'thiệp chúc tết', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('91dab8de-7213-4b46-be27-24a54c28d9f8', '1a8289ee-210c-4cdb-89b7-0fc6096ec69f', '再来年', 'さらいねん', 'năm sau nữa', false, 7, 'pdf', 'ok');

-- ---------- 本 (BẢN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', 'N5', '本', 'BẢN', 'sách, gốc, cây (đếm vật dài)', 5, '木', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1b4b8291-37ab-4e71-ad4c-9def9e551406', id, 'kun', 'もと', false, 7, 'ok' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '50214af6-9d4a-4c31-8ea6-ab1d7fdc482f', id, 'on', 'ほん', true, 7, 'ok' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '283cc714-0acf-4f01-944a-6bc8a2df3aee', id, 'on', 'ぼん', false, 7, 'ok' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '2e2b1fe1-9553-401e-b39d-ecf54aab0189', id, 'on', 'ぽん', false, 7, 'ok' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', '50214af6-9d4a-4c31-8ea6-ab1d7fdc482f', '日本', 'にほん', 'Nhật Bản', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', '50214af6-9d4a-4c31-8ea6-ab1d7fdc482f', '本', 'ほん', 'quyển sách', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', '50214af6-9d4a-4c31-8ea6-ab1d7fdc482f', '本田駅', 'ほんだえき', 'nhà ga Honda', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', '50214af6-9d4a-4c31-8ea6-ab1d7fdc482f', '本社', 'ほんしゃ', 'trụ sở chính công ty', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', '50214af6-9d4a-4c31-8ea6-ab1d7fdc482f', '本物', 'ほんもの', 'hàng thật', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', '50214af6-9d4a-4c31-8ea6-ab1d7fdc482f', '絵本', 'えほん', 'sách có tranh', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('20b874e7-79b9-4221-a41a-2b1ee73c2356', '2e2b1fe1-9553-401e-b39d-ecf54aab0189', '一本', 'いっぽん', 'một chai, 1 cây', false, 7, 'pdf', 'ok');

-- ---------- 休 (HƯU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('53fca3b3-b50c-409e-bb11-33eeaa3420e6', 'N5', '休', 'HƯU', 'nghỉ', 6, '人', 7, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5a38a902-a987-4097-9186-05cbfa1ead2c', id, 'kun', 'やす', true, 7, 'ok' from jp_kanji where id = '53fca3b3-b50c-409e-bb11-33eeaa3420e6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '338cb1a2-7a7c-4bca-8fa4-747d35f2830d', id, 'on', 'きゅう', true, 7, 'ok' from jp_kanji where id = '53fca3b3-b50c-409e-bb11-33eeaa3420e6'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('53fca3b3-b50c-409e-bb11-33eeaa3420e6', '5a38a902-a987-4097-9186-05cbfa1ead2c', '休み', 'やすみ', 'nghỉ; vắng mặt', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('53fca3b3-b50c-409e-bb11-33eeaa3420e6', '5a38a902-a987-4097-9186-05cbfa1ead2c', '昼休み', 'ひるやすみ', 'nghỉ trưa', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('53fca3b3-b50c-409e-bb11-33eeaa3420e6', '5a38a902-a987-4097-9186-05cbfa1ead2c', '休みます', 'やすみます', 'nghỉ ngơi', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('53fca3b3-b50c-409e-bb11-33eeaa3420e6', '338cb1a2-7a7c-4bca-8fa4-747d35f2830d', '休憩します', 'きゅうけいします', 'nghỉ giải lao', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('53fca3b3-b50c-409e-bb11-33eeaa3420e6', '338cb1a2-7a7c-4bca-8fa4-747d35f2830d', '連休', 'れんきゅう', 'kỳ nghỉ', false, 7, 'pdf', 'ok');

-- ---------- 帰 (QUY) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('095ad391-e23f-4b91-8bf0-a1eed35a0fc6', 'N5', '帰', 'QUY', 'về, trở về', 10, NULL, 7, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '984e5180-f133-4d72-86ba-a96d556b4dfb', id, 'kun', 'かえ', true, 7, 'ok' from jp_kanji where id = '095ad391-e23f-4b91-8bf0-a1eed35a0fc6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '972bff1c-5094-4d4d-ab64-4a8b36c395c0', id, 'on', 'き', false, 7, 'ok' from jp_kanji where id = '095ad391-e23f-4b91-8bf0-a1eed35a0fc6'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('095ad391-e23f-4b91-8bf0-a1eed35a0fc6', '984e5180-f133-4d72-86ba-a96d556b4dfb', '帰ります', 'かえります', 'về (nhà)', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('095ad391-e23f-4b91-8bf0-a1eed35a0fc6', '984e5180-f133-4d72-86ba-a96d556b4dfb', 'お帰りなさい', 'おかえりなさい', 'mừng trở về!', false, 7, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('095ad391-e23f-4b91-8bf0-a1eed35a0fc6', '984e5180-f133-4d72-86ba-a96d556b4dfb', '帰り', 'かえり', 'sự trở về', false, 7, 'pdf', 'ok');

-- ---------- 行 (HÀNH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', 'N5', '行', 'HÀNH', 'đi, hành động', 6, '行', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1ac70c0a-08f4-4bec-a1c6-daf32f2f47f4', id, 'kun', 'い', true, 8, 'ok' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c1da2834-10e0-491a-94cb-2b6824bc35c2', id, 'kun', 'おこな', false, 8, 'ok' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', id, 'on', 'こう', true, 8, 'ok' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '92a8a3e1-6eee-4b33-a62a-8f67bc06b44c', id, 'on', 'ぎょう', false, 8, 'ok' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '1ac70c0a-08f4-4bec-a1c6-daf32f2f47f4', '行きます', 'いきます', 'đi', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '1ac70c0a-08f4-4bec-a1c6-daf32f2f47f4', '持って行きます', 'もっていきます', 'mang đi theo', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '1ac70c0a-08f4-4bec-a1c6-daf32f2f47f4', '連れて行きます', 'つれていきます', 'dẫn đi theo', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', 'c1da2834-10e0-491a-94cb-2b6824bc35c2', '行います', 'おこないます', 'tổ chức, tiến hành', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', '銀行', 'ぎんこう', 'ngân hàng', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', '急行', 'きゅうこう', 'tốc hành', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', '飛行機', 'ひこうき', 'máy bay', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', '旅行', 'りょこう', 'du lịch', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', '宇宙飛行士', 'うちゅうひこうし', 'nhà du hành vũ trụ', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', '夜行バス', 'やこうバス', 'xe bus đi xuyên đêm', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0a1adeec-6f67-4fc3-ab4a-02363f3cce44', '5d429cc4-8ed5-4a6e-bc6c-77e43167bf5e', '旅行社', 'りょこうしゃ', 'công ty du lịch', false, 8, 'pdf', 'ok');

-- ---------- 来 (LAI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', 'N5', '来', 'LAI', 'đến, tới, sau (thời gian)', 7, NULL, 8, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '61da4fcf-8f06-4f3b-860d-510d7639081f', id, 'kun', 'き', true, 8, 'ok' from jp_kanji where id = 'afd75b3e-82a3-4c74-b642-84b339266c40'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1f12c019-42a7-4e39-b113-dd483242874c', id, 'kun', 'く', false, 8, 'ok' from jp_kanji where id = 'afd75b3e-82a3-4c74-b642-84b339266c40'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5b0c1a18-95e1-41d9-97fa-184946d7475c', id, 'on', 'らい', true, 8, 'ok' from jp_kanji where id = 'afd75b3e-82a3-4c74-b642-84b339266c40'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '61da4fcf-8f06-4f3b-860d-510d7639081f', '〜から来ました', '〜からきました', 'đến từ -', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '61da4fcf-8f06-4f3b-860d-510d7639081f', '来ます', 'きます', 'đến', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '61da4fcf-8f06-4f3b-860d-510d7639081f', '持って来ます', 'もってきます', 'mang đến', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '61da4fcf-8f06-4f3b-860d-510d7639081f', '出来事', 'できごと', 'sự kiện, việc đã diễn ra', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '5b0c1a18-95e1-41d9-97fa-184946d7475c', '来年', 'らいねん', 'năm sau', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '5b0c1a18-95e1-41d9-97fa-184946d7475c', '将来', 'しょうらい', 'tương lai', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '5b0c1a18-95e1-41d9-97fa-184946d7475c', '再来週', 'さらいしゅう', 'tuần sau nữa', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '5b0c1a18-95e1-41d9-97fa-184946d7475c', '再来月', 'さらいげつ', 'tháng sau nữa', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('afd75b3e-82a3-4c74-b642-84b339266c40', '5b0c1a18-95e1-41d9-97fa-184946d7475c', '再来年', 'さらいねん', 'năm sau nữa', false, 8, 'pdf', 'ok');

-- ---------- 校 (HIỆU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('3941f7dc-8482-459c-b718-6e2ac961423d', 'N5', '校', 'HIỆU', 'trường học', 10, '木', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '4398c5a9-f1af-4135-b53b-fdafa8ce8de5', id, 'on', 'こう', true, 8, 'ok' from jp_kanji where id = '3941f7dc-8482-459c-b718-6e2ac961423d'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3941f7dc-8482-459c-b718-6e2ac961423d', '4398c5a9-f1af-4135-b53b-fdafa8ce8de5', '学校', 'がっこう', 'trường học', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3941f7dc-8482-459c-b718-6e2ac961423d', '4398c5a9-f1af-4135-b53b-fdafa8ce8de5', '高校', 'こうこう', 'trường THPT', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3941f7dc-8482-459c-b718-6e2ac961423d', '4398c5a9-f1af-4135-b53b-fdafa8ce8de5', '小学校', 'しょうがっこう', 'trường tiểu học', false, 8, 'pdf', 'ok');

-- ---------- 車 (XA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', 'N5', '車', 'XA', 'xe', 7, '車', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '11ce110f-5a07-4ca3-a92e-26fedd9aa06a', id, 'kun', 'くるま', true, 8, 'ok' from jp_kanji where id = 'c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'ba102eb0-1413-4524-92cf-1f865dd3072d', id, 'on', 'しゃ', true, 8, 'ok' from jp_kanji where id = 'c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', '11ce110f-5a07-4ca3-a92e-26fedd9aa06a', '車', 'くるま', 'xe ô tô', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', 'ba102eb0-1413-4524-92cf-1f865dd3072d', '電車', 'でんしゃ', 'tàu điện', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', 'ba102eb0-1413-4524-92cf-1f865dd3072d', '自転車', 'じてんしゃ', 'xe đạp', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', 'ba102eb0-1413-4524-92cf-1f865dd3072d', '自動車', 'じどうしゃ', 'xe ô tô', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', 'ba102eb0-1413-4524-92cf-1f865dd3072d', '駐車場', 'ちゅうしゃじょう', 'nơi đỗ xe', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', 'ba102eb0-1413-4524-92cf-1f865dd3072d', '駐車違反', 'ちゅうしゃいはん', 'đỗ xe trái quy định', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3', 'ba102eb0-1413-4524-92cf-1f865dd3072d', '汽車', 'きしゃ', 'tàu hỏa', false, 8, 'pdf', 'ok');

-- ---------- 書 (THƯ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', 'N5', '書', 'THƯ', 'viết, sách, văn bản', 10, NULL, 8, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c6a0327e-e8e9-4658-a081-72ccf069fff6', id, 'kun', 'か', true, 8, 'ok' from jp_kanji where id = 'b6670085-1f24-4e9f-9f8d-9b6c776d06a9'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '86b7ba51-1512-49c4-b3f4-aea02c7aca09', id, 'on', 'しょ', true, 8, 'ok' from jp_kanji where id = 'b6670085-1f24-4e9f-9f8d-9b6c776d06a9'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', 'c6a0327e-e8e9-4658-a081-72ccf069fff6', '書きます', 'かきます', 'viết', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', '86b7ba51-1512-49c4-b3f4-aea02c7aca09', '辞書', 'じしょ', 'từ điển', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', '86b7ba51-1512-49c4-b3f4-aea02c7aca09', '図書館', 'としょかん', 'thư viện', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', '86b7ba51-1512-49c4-b3f4-aea02c7aca09', '電子辞書', 'でんしじしょ', 'từ điển điện tử', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', '86b7ba51-1512-49c4-b3f4-aea02c7aca09', '説明書', 'せつめいしょ', 'sách hướng dẫn', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', '86b7ba51-1512-49c4-b3f4-aea02c7aca09', '保証書', 'ほしょうしょ', 'giấy bảo hành', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b6670085-1f24-4e9f-9f8d-9b6c776d06a9', '86b7ba51-1512-49c4-b3f4-aea02c7aca09', '領収書', 'りょうしゅうしょ', 'hóa đơn, biên lai', false, 8, 'pdf', 'ok');

-- ---------- 食 (THỰC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'N5', '食', 'THỰC', 'ăn, thức ăn', 9, '食', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'db792881-bd30-4cec-b10c-7e9d5a65ca97', id, 'kun', 'た', true, 8, 'ok' from jp_kanji where id = '2fbee4d1-5af4-4019-b10a-ed96bc1b5f44'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'db2fb09c-c39d-4b70-ac7a-f8269d8b8632', id, 'on', 'しょく', true, 8, 'ok' from jp_kanji where id = '2fbee4d1-5af4-4019-b10a-ed96bc1b5f44'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'db792881-bd30-4cec-b10c-7e9d5a65ca97', '食べます', 'たべます', 'ăn', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'db792881-bd30-4cec-b10c-7e9d5a65ca97', '食べ物', 'たべもの', 'đồ ăn', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'db2fb09c-c39d-4b70-ac7a-f8269d8b8632', '食堂', 'しょくどう', 'nhà ăn', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'db2fb09c-c39d-4b70-ac7a-f8269d8b8632', '食事します', 'しょくじします', 'ăn uống', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'db2fb09c-c39d-4b70-ac7a-f8269d8b8632', '定食', 'ていしょく', 'phần ăn theo suất', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'db2fb09c-c39d-4b70-ac7a-f8269d8b8632', '和食', 'わしょく', 'món ăn Nhật Bản', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2fbee4d1-5af4-4019-b10a-ed96bc1b5f44', 'db2fb09c-c39d-4b70-ac7a-f8269d8b8632', '洋食', 'ようしょく', 'món ăn Âu', false, 8, 'pdf', 'ok');

-- ---------- 飲 (ẨM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('2db5262b-6016-4fbe-a7a5-834082657d5c', 'N5', '飲', 'ẨM', 'uống', 12, NULL, 8, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'e2f6e5ad-bcdb-43a3-941a-b8437a6083f0', id, 'kun', 'の', true, 8, 'ok' from jp_kanji where id = '2db5262b-6016-4fbe-a7a5-834082657d5c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1de88c95-1146-4a31-839c-6bbf9fd113fd', id, 'on', 'いん', false, 8, 'ok' from jp_kanji where id = '2db5262b-6016-4fbe-a7a5-834082657d5c'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db5262b-6016-4fbe-a7a5-834082657d5c', 'e2f6e5ad-bcdb-43a3-941a-b8437a6083f0', '飲みます', 'のみます', 'uống', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db5262b-6016-4fbe-a7a5-834082657d5c', 'e2f6e5ad-bcdb-43a3-941a-b8437a6083f0', '飲み物', 'のみもの', 'đồ uống', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db5262b-6016-4fbe-a7a5-834082657d5c', 'e2f6e5ad-bcdb-43a3-941a-b8437a6083f0', '飲み放題', 'のみほうだい', 'buffet đồ uống', false, 8, 'pdf', 'ok');

-- ---------- 見 (KIẾN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', 'N5', '見', 'KIẾN', 'nhìn, xem, thấy', 7, '見', 8, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5c8c1223-2de9-4643-90a6-28a302605dc2', id, 'kun', 'み', true, 8, 'ok' from jp_kanji where id = '1d01272b-d154-4965-b645-27cb9200622c'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', '見せてください', 'みせてください', 'hãy cho tôi xem', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', '見ます', 'みます', 'xem, nhìn', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', 'お花見', 'おはなみ', 'ngắm hoa anh đào', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', '見えます', 'みえます', 'nhìn thấy', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', '夢を見ます', 'ゆめをみます', 'mơ giấc mơ', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', '見つけます', 'みつけます', 'tìm thấy', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', '見つかります', 'みつかります', 'được tìm thấy', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', 'お見合い', 'おみあい', 'buổi xem mặt', false, 8, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1d01272b-d154-4965-b645-27cb9200622c', '5c8c1223-2de9-4643-90a6-28a302605dc2', 'お見舞い', 'おみまい', 'thăm người ốm', false, 8, 'pdf', 'ok');


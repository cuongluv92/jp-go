-- ============================================================
-- jp-go — Kanji N5 đợt 2: 百,千,万 (trang 4) + 円,日,月,火,水,木,
-- 金,土,人 (trang 5) + 先,生,学,方,何 (trang 6) của PDF "Tổng hợp
-- kiến thức N5" (Dũng Mori). Additive, idempotent qua ON CONFLICT.
-- ============================================================

-- ---------- 百 (BÁCH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('a444ab05-f181-44f3-a60a-0680b0568b07', 'N5', '百', 'BÁCH', 'trăm, số 100', 6, '白', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '86d8d7f7-31f9-42cf-8a5c-da2e05767b70', id, 'on', 'ひゃく', true, 4, 'ok' from jp_kanji where id = 'a444ab05-f181-44f3-a60a-0680b0568b07'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '3639ee94-7991-4989-b1d3-7416b2e32869', id, 'on', 'びゃく', false, 4, 'ok' from jp_kanji where id = 'a444ab05-f181-44f3-a60a-0680b0568b07'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a444ab05-f181-44f3-a60a-0680b0568b07', '86d8d7f7-31f9-42cf-8a5c-da2e05767b70', '百', 'ひゃく', 'một trăm', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a444ab05-f181-44f3-a60a-0680b0568b07', '86d8d7f7-31f9-42cf-8a5c-da2e05767b70', '二百', 'にひゃく', 'hai trăm', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a444ab05-f181-44f3-a60a-0680b0568b07', '86d8d7f7-31f9-42cf-8a5c-da2e05767b70', '八百', 'はっぴゃく', 'tám trăm', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a444ab05-f181-44f3-a60a-0680b0568b07', '3639ee94-7991-4989-b1d3-7416b2e32869', '三百', 'さんびゃく', 'ba trăm', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a444ab05-f181-44f3-a60a-0680b0568b07', '3639ee94-7991-4989-b1d3-7416b2e32869', '六百', 'ろっぴゃく', 'sáu trăm', false, 4, 'pdf', 'ok');

-- ---------- 千 (THIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('fdc6edae-e1c1-40c2-acca-7e566caf3acd', 'N5', '千', 'THIÊN', 'nghìn, số 1000', 3, '十', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '689663b5-a36e-4f6b-970f-2d7cf0f2d66a', id, 'on', 'せん', true, 4, 'ok' from jp_kanji where id = 'fdc6edae-e1c1-40c2-acca-7e566caf3acd'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'fe67c235-ca9d-4ef2-801d-f757e4202912', id, 'on', 'ぜん', false, 4, 'ok' from jp_kanji where id = 'fdc6edae-e1c1-40c2-acca-7e566caf3acd'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fdc6edae-e1c1-40c2-acca-7e566caf3acd', '689663b5-a36e-4f6b-970f-2d7cf0f2d66a', '千', 'せん', 'một nghìn', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fdc6edae-e1c1-40c2-acca-7e566caf3acd', '689663b5-a36e-4f6b-970f-2d7cf0f2d66a', '二千', 'にせん', 'hai nghìn', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fdc6edae-e1c1-40c2-acca-7e566caf3acd', '689663b5-a36e-4f6b-970f-2d7cf0f2d66a', '八千', 'はっせん', 'tám nghìn', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fdc6edae-e1c1-40c2-acca-7e566caf3acd', 'fe67c235-ca9d-4ef2-801d-f757e4202912', '三千', 'さんぜん', 'ba nghìn', false, 4, 'pdf', 'ok');

-- ---------- 万 (VẠN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('c94ceac1-3c3a-4b4a-94a5-6055c9c48786', 'N5', '万', 'VẠN', 'vạn, mười nghìn', 3, NULL, 4, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '0da75958-68ef-41af-aa8d-bc27aa7611c6', id, 'on', 'まん', true, 4, 'ok' from jp_kanji where id = 'c94ceac1-3c3a-4b4a-94a5-6055c9c48786'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '75b4a64b-2cf0-4b2d-9a86-78659dc672d0', id, 'on', 'ばん', false, 4, 'ok' from jp_kanji where id = 'c94ceac1-3c3a-4b4a-94a5-6055c9c48786'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c94ceac1-3c3a-4b4a-94a5-6055c9c48786', '0da75958-68ef-41af-aa8d-bc27aa7611c6', '万', 'まん', 'vạn (mười nghìn)', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c94ceac1-3c3a-4b4a-94a5-6055c9c48786', '0da75958-68ef-41af-aa8d-bc27aa7611c6', '千万', 'せんまん', '10 triệu', false, 4, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c94ceac1-3c3a-4b4a-94a5-6055c9c48786', '75b4a64b-2cf0-4b2d-9a86-78659dc672d0', '万里の長城', 'ばんりのちょうじょう', 'Vạn Lý Trường Thành', false, 4, 'pdf', 'ok');

-- ---------- 円 (VIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('5375ee2b-dad7-44c7-a8d3-b4facac72fcb', 'N5', '円', 'VIÊN', 'đồng yên, hình tròn', 4, NULL, 5, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '17a5a31d-90a8-447f-b625-93b74aff3a4c', id, 'on', 'えん', true, 5, 'ok' from jp_kanji where id = '5375ee2b-dad7-44c7-a8d3-b4facac72fcb'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5375ee2b-dad7-44c7-a8d3-b4facac72fcb', '17a5a31d-90a8-447f-b625-93b74aff3a4c', '円', 'えん', 'yên', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5375ee2b-dad7-44c7-a8d3-b4facac72fcb', '17a5a31d-90a8-447f-b625-93b74aff3a4c', '五円', 'ごえん', '5 yên', false, 5, 'pdf', 'ok');

-- ---------- 日 (NHẬT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', 'N5', '日', 'NHẬT', 'ngày, mặt trời', 4, '日', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '336bf2b4-5a62-4bad-8fd9-6e85799108e5', id, 'kun', 'ひ', true, 5, 'ok' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '0e9b4c86-bf20-42a4-b809-bbeb0ed6405e', id, 'kun', 'び', false, 5, 'ok' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'a3ba61fa-1d45-4e05-bf0a-3a888961d995', id, 'kun', 'か', false, 5, 'ok' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '06f10b9f-2bff-4183-9050-78b15324dcd5', id, 'on', 'にち', true, 5, 'ok' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7ebed29f-554d-4b09-b25b-5f5d13542a30', id, 'on', 'じつ', false, 5, 'ok' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '336bf2b4-5a62-4bad-8fd9-6e85799108e5', '母の日', 'ははのひ', 'ngày của Mẹ', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '336bf2b4-5a62-4bad-8fd9-6e85799108e5', '一日', 'ついたち', 'ngày mùng 1', true, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '0e9b4c86-bf20-42a4-b809-bbeb0ed6405e', '月曜日', 'げつようび', 'thứ 2', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '0e9b4c86-bf20-42a4-b809-bbeb0ed6405e', '日曜日', 'にちようび', 'chủ nhật', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '0e9b4c86-bf20-42a4-b809-bbeb0ed6405e', '何曜日', 'なんようび', 'thứ mấy', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', 'a3ba61fa-1d45-4e05-bf0a-3a888961d995', '二日', 'ふつか', 'ngày mùng 2', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', 'a3ba61fa-1d45-4e05-bf0a-3a888961d995', '十日', 'とおか', 'ngày mùng 10', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '06f10b9f-2bff-4183-9050-78b15324dcd5', '日本', 'にほん', 'Nhật Bản', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '06f10b9f-2bff-4183-9050-78b15324dcd5', '日本語', 'にほんご', 'tiếng Nhật', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '06f10b9f-2bff-4183-9050-78b15324dcd5', '毎日', 'まいにち', 'mỗi ngày, hằng ngày', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '06f10b9f-2bff-4183-9050-78b15324dcd5', '日曜大工', 'にちようだいく', 'làm mộc chủ nhật', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '7ebed29f-554d-4b09-b25b-5f5d13542a30', '日記', 'にっき', 'nhật ký', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2db9ba96-707d-4661-938c-60f5734250fd', '7ebed29f-554d-4b09-b25b-5f5d13542a30', '平日', 'へいじつ', 'ngày thường', false, 5, 'pdf', 'ok');

-- ---------- 月 (NGUYỆT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', 'N5', '月', 'NGUYỆT', 'tháng, mặt trăng', 4, '月', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '8a07f930-87f8-40aa-98a7-787d1a2fbbd2', id, 'kun', 'つき', true, 5, 'ok' from jp_kanji where id = '2b4e8cda-7d2f-4020-91e6-b86b77e8d885'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7ba202ce-927d-4232-8b0c-1adc8bbdc889', id, 'on', 'げつ', true, 5, 'ok' from jp_kanji where id = '2b4e8cda-7d2f-4020-91e6-b86b77e8d885'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'e9fa871b-b4a7-4400-8a0b-89d8cf51f231', id, 'on', 'がつ', false, 5, 'ok' from jp_kanji where id = '2b4e8cda-7d2f-4020-91e6-b86b77e8d885'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', '8a07f930-87f8-40aa-98a7-787d1a2fbbd2', '月', 'つき', 'mặt trăng', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', '7ba202ce-927d-4232-8b0c-1adc8bbdc889', '月曜日', 'げつようび', 'thứ 2', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', '7ba202ce-927d-4232-8b0c-1adc8bbdc889', '今月', 'こんげつ', 'tháng này', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', '7ba202ce-927d-4232-8b0c-1adc8bbdc889', '来月', 'らいげつ', 'tháng sau', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', '7ba202ce-927d-4232-8b0c-1adc8bbdc889', '〜か月', 'かげつ', '- tháng (khoảng thời gian)', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', 'e9fa871b-b4a7-4400-8a0b-89d8cf51f231', '〜月', 'がつ', '- tháng (tên tháng)', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2b4e8cda-7d2f-4020-91e6-b86b77e8d885', 'e9fa871b-b4a7-4400-8a0b-89d8cf51f231', '何月', 'なんがつ', 'tháng mấy', false, 5, 'pdf', 'ok');

-- ---------- 火 (HỎA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('4c013562-c82c-4723-a49e-d02d69a241a5', 'N5', '火', 'HỎA', 'lửa', 4, '火', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '51a81683-ff29-49d4-8d77-f2b5b37c2fa9', id, 'kun', 'ひ', true, 5, 'ok' from jp_kanji where id = '4c013562-c82c-4723-a49e-d02d69a241a5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd1800c3b-1f4f-457a-be3b-498bf677ebde', id, 'on', 'か', true, 5, 'ok' from jp_kanji where id = '4c013562-c82c-4723-a49e-d02d69a241a5'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('4c013562-c82c-4723-a49e-d02d69a241a5', '51a81683-ff29-49d4-8d77-f2b5b37c2fa9', '火', 'ひ', 'lửa', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('4c013562-c82c-4723-a49e-d02d69a241a5', '51a81683-ff29-49d4-8d77-f2b5b37c2fa9', '花火', 'はなび', 'pháo hoa', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('4c013562-c82c-4723-a49e-d02d69a241a5', '51a81683-ff29-49d4-8d77-f2b5b37c2fa9', '火にかけます', 'ひにかけます', 'đun, nấu', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('4c013562-c82c-4723-a49e-d02d69a241a5', 'd1800c3b-1f4f-457a-be3b-498bf677ebde', '火曜日', 'かようび', 'thứ 3', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('4c013562-c82c-4723-a49e-d02d69a241a5', 'd1800c3b-1f4f-457a-be3b-498bf677ebde', '火事', 'かじ', 'hỏa hoạn', false, 5, 'pdf', 'ok');

-- ---------- 水 (THỦY) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('6bd179b4-1875-4375-a987-3c4dadd9bc37', 'N5', '水', 'THỦY', 'nước', 4, '水', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f273ae6c-e132-4b07-9d2c-2d8e403a4474', id, 'kun', 'みず', true, 5, 'ok' from jp_kanji where id = '6bd179b4-1875-4375-a987-3c4dadd9bc37'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1d8b032b-38c3-49ac-859e-c38439e16440', id, 'on', 'すい', true, 5, 'ok' from jp_kanji where id = '6bd179b4-1875-4375-a987-3c4dadd9bc37'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('6bd179b4-1875-4375-a987-3c4dadd9bc37', 'f273ae6c-e132-4b07-9d2c-2d8e403a4474', '水', 'みず', 'nước', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('6bd179b4-1875-4375-a987-3c4dadd9bc37', '1d8b032b-38c3-49ac-859e-c38439e16440', '水曜日', 'すいようび', 'thứ 4', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('6bd179b4-1875-4375-a987-3c4dadd9bc37', '1d8b032b-38c3-49ac-859e-c38439e16440', '水道', 'すいどう', 'đường ống nước', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('6bd179b4-1875-4375-a987-3c4dadd9bc37', '1d8b032b-38c3-49ac-859e-c38439e16440', '水泳', 'すいえい', 'bơi lội', false, 5, 'pdf', 'ok');

-- ---------- 木 (MỘC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('3b00bab8-bb71-49b4-a48a-aab1f70bf566', 'N5', '木', 'MỘC', 'cây, gỗ', 4, '木', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd62a2231-779a-46c1-8174-43b38289d539', id, 'kun', 'き', true, 5, 'ok' from jp_kanji where id = '3b00bab8-bb71-49b4-a48a-aab1f70bf566'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'fc863e32-e8f1-4cc3-8b23-e229a6d62351', id, 'on', 'ぼく', false, 5, 'ok' from jp_kanji where id = '3b00bab8-bb71-49b4-a48a-aab1f70bf566'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'eb7e03c3-4331-4dff-953d-178eae777b9e', id, 'on', 'もく', true, 5, 'ok' from jp_kanji where id = '3b00bab8-bb71-49b4-a48a-aab1f70bf566'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b00bab8-bb71-49b4-a48a-aab1f70bf566', 'd62a2231-779a-46c1-8174-43b38289d539', '木', 'き', 'cái cây', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b00bab8-bb71-49b4-a48a-aab1f70bf566', 'eb7e03c3-4331-4dff-953d-178eae777b9e', '木曜日', 'もくようび', 'thứ 5', false, 5, 'pdf', 'ok');

-- ---------- 金 (KIM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'N5', '金', 'KIM', 'vàng, tiền, kim loại', 8, '金', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '442b7928-bb11-4121-8428-838127a7813c', id, 'kun', 'かね', true, 5, 'ok' from jp_kanji where id = '78e376fa-81ba-4232-87ba-729a612c9fa3'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'ef76c226-2186-4a4b-8325-4c7bd55507b5', id, 'on', 'きん', true, 5, 'ok' from jp_kanji where id = '78e376fa-81ba-4232-87ba-729a612c9fa3'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', '442b7928-bb11-4121-8428-838127a7813c', 'お金', 'おかね', 'tiền', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', '442b7928-bb11-4121-8428-838127a7813c', '細かいお金', 'こまかいおかね', 'tiền lẻ', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'ef76c226-2186-4a4b-8325-4c7bd55507b5', '金曜日', 'きんようび', 'thứ 6', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'ef76c226-2186-4a4b-8325-4c7bd55507b5', '金額', 'きんがく', 'số tiền', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'ef76c226-2186-4a4b-8325-4c7bd55507b5', '現金', 'げんきん', 'tiền mặt', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'ef76c226-2186-4a4b-8325-4c7bd55507b5', '罰金', 'ばっきん', 'phạt tiền', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'ef76c226-2186-4a4b-8325-4c7bd55507b5', '貯金', 'ちょきん', 'tiết kiệm tiền', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'ef76c226-2186-4a4b-8325-4c7bd55507b5', '金色', 'きんいろ', 'màu vàng kim', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('78e376fa-81ba-4232-87ba-729a612c9fa3', 'ef76c226-2186-4a4b-8325-4c7bd55507b5', '賞金', 'しょうきん', 'tiền thưởng', false, 5, 'pdf', 'ok');

-- ---------- 土 (THỔ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('4208dee4-5d76-4829-9598-08e5dcdccd69', 'N5', '土', 'THỔ', 'đất', 3, '土', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd234af9b-0652-4092-9c71-d6f4eb891a6c', id, 'kun', 'つち', true, 5, 'ok' from jp_kanji where id = '4208dee4-5d76-4829-9598-08e5dcdccd69'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '9fe59161-45d2-4f6a-9919-3bcf3ba345d2', id, 'on', 'ど', true, 5, 'ok' from jp_kanji where id = '4208dee4-5d76-4829-9598-08e5dcdccd69'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('4208dee4-5d76-4829-9598-08e5dcdccd69', '9fe59161-45d2-4f6a-9919-3bcf3ba345d2', '土曜日', 'どようび', 'thứ 7', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('4208dee4-5d76-4829-9598-08e5dcdccd69', 'd234af9b-0652-4092-9c71-d6f4eb891a6c', 'お土産', 'おみやげ', 'quà quê', true, 5, 'pdf', 'ok');

-- ---------- 人 (NHÂN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', 'N5', '人', 'NHÂN', 'người', 2, '人', 5, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '45c2fa8a-4ec7-4053-ae5f-560bbb46eac9', id, 'kun', 'ひと', true, 5, 'ok' from jp_kanji where id = '56ded2f5-7b98-4300-a358-9e5f03a988b8'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'bfb66714-3448-462f-b744-3a5310442db1', id, 'on', 'じん', true, 5, 'ok' from jp_kanji where id = '56ded2f5-7b98-4300-a358-9e5f03a988b8'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '90f76db6-4f6b-4202-9eb4-859167752d62', id, 'on', 'にん', false, 5, 'ok' from jp_kanji where id = '56ded2f5-7b98-4300-a358-9e5f03a988b8'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '45c2fa8a-4ec7-4053-ae5f-560bbb46eac9', 'あの人', 'あのひと', 'người kia', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '45c2fa8a-4ec7-4053-ae5f-560bbb46eac9', '人', 'ひと', 'con người', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '45c2fa8a-4ec7-4053-ae5f-560bbb46eac9', '一人で', 'ひとりで', 'một mình, tự mình', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '45c2fa8a-4ec7-4053-ae5f-560bbb46eac9', '大人', 'おとな', 'người lớn', true, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '45c2fa8a-4ec7-4053-ae5f-560bbb46eac9', '恋人', 'こいびと', 'người yêu', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', 'bfb66714-3448-462f-b744-3a5310442db1', 'ベトナム人', 'べとなむじん', 'người Việt Nam', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', 'bfb66714-3448-462f-b744-3a5310442db1', 'ご主人', 'ごしゅじん', 'người chồng', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', 'bfb66714-3448-462f-b744-3a5310442db1', '主人公', 'しゅじんこう', 'nhân vật chính', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', 'bfb66714-3448-462f-b744-3a5310442db1', '成人式', 'せいじんしき', 'Lễ thành nhân', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', 'bfb66714-3448-462f-b744-3a5310442db1', '人口', 'じんこう', 'dân số', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '90f76db6-4f6b-4202-9eb4-859167752d62', '三人', 'さんにん', '3 người', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '90f76db6-4f6b-4202-9eb4-859167752d62', '人気', 'にんき', 'được yêu thích', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '90f76db6-4f6b-4202-9eb4-859167752d62', '人形', 'にんぎょう', 'búp bê', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '90f76db6-4f6b-4202-9eb4-859167752d62', '犯人', 'はんにん', 'thủ phạm', false, 5, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('56ded2f5-7b98-4300-a358-9e5f03a988b8', '90f76db6-4f6b-4202-9eb4-859167752d62', '管理人', 'かんりにん', 'người quản lý', false, 5, 'pdf', 'ok');

-- ---------- 先 (TIÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d', 'N5', '先', 'TIÊN', 'trước, đầu tiên', 6, NULL, 6, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '73863bc0-cb0f-4a11-97ea-cd2753c77010', id, 'kun', 'さき', true, 6, 'ok' from jp_kanji where id = '5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '23bf33f8-b8a9-4f60-a2cd-3ec45707e7f7', id, 'on', 'せん', true, 6, 'ok' from jp_kanji where id = '5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d', '73863bc0-cb0f-4a11-97ea-cd2753c77010', 'お先に', 'おさきに', 'trước', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d', '23bf33f8-b8a9-4f60-a2cd-3ec45707e7f7', '先生', 'せんせい', 'thầy cô', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d', '23bf33f8-b8a9-4f60-a2cd-3ec45707e7f7', '先週', 'せんしゅう', 'tuần trước', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d', '23bf33f8-b8a9-4f60-a2cd-3ec45707e7f7', '先月', 'せんげつ', 'tháng trước', false, 6, 'pdf', 'ok');

-- ---------- 生 (SINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', 'N5', '生', 'SINH', 'sinh, sống', 5, '生', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'b57c6837-5a3c-497f-b0f7-53e01930f14f', id, 'kun', 'い', true, 6, 'ok' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '2fdc96ca-954d-47ee-9cee-326ed986898b', id, 'kun', 'う', false, 6, 'ok' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '4c037395-bed9-4c00-aa20-6c10b52d24fc', id, 'on', 'せい', true, 6, 'ok' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '50507a23-735e-43fd-8080-1f8991d7cf06', id, 'on', 'しょう', false, 6, 'ok' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'cc3670b0-bdb4-4660-988b-4049f2f7b6fb', id, 'on', 'じょう', false, 6, 'ok' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', 'b57c6837-5a3c-497f-b0f7-53e01930f14f', '生け花', 'いけばな', 'ikebana', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', 'b57c6837-5a3c-497f-b0f7-53e01930f14f', '長生き', 'ながいき', 'sống lâu', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', '2fdc96ca-954d-47ee-9cee-326ed986898b', '生まれる', 'うまれる', 'được sinh ra', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', '4c037395-bed9-4c00-aa20-6c10b52d24fc', '学生', 'がくせい', 'học sinh', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', '4c037395-bed9-4c00-aa20-6c10b52d24fc', '生活', 'せいかつ', 'cuộc sống', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', '4c037395-bed9-4c00-aa20-6c10b52d24fc', '大学生', 'だいがくせい', 'sinh viên đại học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', '4c037395-bed9-4c00-aa20-6c10b52d24fc', '生徒', 'せいと', 'học sinh, sinh viên', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', '4c037395-bed9-4c00-aa20-6c10b52d24fc', '小学生', 'しょうがくせい', 'học sinh tiểu học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', '50507a23-735e-43fd-8080-1f8991d7cf06', '一生懸命', 'いっしょうけんめい', 'chăm chỉ hết sức', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e', 'cc3670b0-bdb4-4660-988b-4049f2f7b6fb', '誕生日', 'たんじょうび', 'ngày sinh', false, 6, 'pdf', 'ok');

-- ---------- 学 (HỌC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'N5', '学', 'HỌC', 'học', 8, '子', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f5d0c896-db9b-4370-abc0-49687caeff61', id, 'kun', 'まな', false, 6, 'ok' from jp_kanji where id = '0602f9f2-ff09-4bd7-89bb-f3e78a09c147'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd9e30ef0-a38d-4803-af9a-508387efc1ff', id, 'on', 'がく', true, 6, 'ok' from jp_kanji where id = '0602f9f2-ff09-4bd7-89bb-f3e78a09c147'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '大学', 'だいがく', 'đại học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '学校', 'がっこう', 'trường học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '留学生', 'りゅうがくせい', 'du học sinh', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '見学', 'けんがく', 'kiến học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '大学院', 'だいがくいん', 'cao học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '入学試験', 'にゅうがくしけん', 'kì thi đầu vào', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '中学校', 'ちゅうがっこう', 'trung học cơ sở', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '入学', 'にゅうがく', 'nhập học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '科学', 'かがく', 'khoa học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '医学', 'いがく', 'y học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '文学', 'ぶんがく', 'văn học', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('0602f9f2-ff09-4bd7-89bb-f3e78a09c147', 'd9e30ef0-a38d-4803-af9a-508387efc1ff', '医学部', 'いがくぶ', 'khoa y', false, 6, 'pdf', 'ok');

-- ---------- 方 (PHƯƠNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('46026865-98d0-49fc-91d3-6e86ae80d20c', 'N5', '方', 'PHƯƠNG', 'phía, cách, người (kính ngữ)', 4, '方', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5849d680-6450-4d77-af16-3b1813037830', id, 'kun', 'かた', true, 6, 'ok' from jp_kanji where id = '46026865-98d0-49fc-91d3-6e86ae80d20c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd52196db-3fcb-41eb-9e2c-b9af0474398a', id, 'on', 'ほう', true, 6, 'ok' from jp_kanji where id = '46026865-98d0-49fc-91d3-6e86ae80d20c'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('46026865-98d0-49fc-91d3-6e86ae80d20c', '5849d680-6450-4d77-af16-3b1813037830', 'あの方', 'あのかた', 'vị kia, ngài kia', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('46026865-98d0-49fc-91d3-6e86ae80d20c', '5849d680-6450-4d77-af16-3b1813037830', '読み方', 'よみかた', 'cách đọc', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('46026865-98d0-49fc-91d3-6e86ae80d20c', '5849d680-6450-4d77-af16-3b1813037830', '〜方', 'かた', 'cách -', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('46026865-98d0-49fc-91d3-6e86ae80d20c', '5849d680-6450-4d77-af16-3b1813037830', '夕方', 'ゆうがた', 'hoàng hôn, chiều tối', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('46026865-98d0-49fc-91d3-6e86ae80d20c', 'd52196db-3fcb-41eb-9e2c-b9af0474398a', '〜の方', '〜のほう', 'phía -', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('46026865-98d0-49fc-91d3-6e86ae80d20c', 'd52196db-3fcb-41eb-9e2c-b9af0474398a', '方法', 'ほうほう', 'phương pháp', false, 6, 'pdf', 'ok');

-- ---------- 何 (HÀ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', 'N5', '何', 'HÀ', 'cái gì, bao nhiêu', 7, '人', 6, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5ff25fa3-9df0-4a40-a133-18d298eab15a', id, 'kun', 'なん', true, 6, 'ok' from jp_kanji where id = '7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd166daf7-496c-4f25-8f01-bee06726070a', id, 'kun', 'なに', false, 6, 'ok' from jp_kanji where id = '7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', '5ff25fa3-9df0-4a40-a133-18d298eab15a', '何歳', 'なんさい', 'mấy tuổi', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', 'd166daf7-496c-4f25-8f01-bee06726070a', '何', 'なに', 'cái gì', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', '5ff25fa3-9df0-4a40-a133-18d298eab15a', '何階', 'なんかい', 'tầng mấy', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', '5ff25fa3-9df0-4a40-a133-18d298eab15a', '何時', 'なんじ', 'mấy giờ', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', '5ff25fa3-9df0-4a40-a133-18d298eab15a', '何分', 'なんぷん', 'mấy phút', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', '5ff25fa3-9df0-4a40-a133-18d298eab15a', '何番', 'なんばん', 'số mấy', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', '5ff25fa3-9df0-4a40-a133-18d298eab15a', '何年', 'なんねん', 'năm nào', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', '5ff25fa3-9df0-4a40-a133-18d298eab15a', '何月', 'なんがつ', 'tháng mấy', false, 6, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f', 'd166daf7-496c-4f25-8f01-bee06726070a', '何か', 'なにか', 'cái gì đó', false, 6, 'pdf', 'ok');


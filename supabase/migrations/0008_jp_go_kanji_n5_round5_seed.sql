-- ============================================================
-- jp-go — Kanji N5 đợt 5: 中,外,下,上,左,右,大,小 (trang 11) +
-- 古,高,安,多,男,女,子,父,母,友,名,音,字,雨,寺,米 (trang 12)
-- của PDF "Tổng hợp kiến thức N5" (Dũng Mori). Additive, idempotent.
-- ============================================================

-- ---------- 中 (TRUNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', 'N5', '中', 'TRUNG', 'giữa, trong', 4, '丨', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '600c9bf4-dc7c-41d7-9f2c-55b93a777298', id, 'kun', 'なか', true, 11, 'ok' from jp_kanji where id = '22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '4b6bb07a-6a02-4ecd-be5c-4fe48e0d03ce', id, 'on', 'ちゅう', true, 11, 'ok' from jp_kanji where id = '22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c7d9f22c-eada-4e7e-a384-b45c1e0d51ee', id, 'on', 'じゅう', false, 11, 'ok' from jp_kanji where id = '22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '600c9bf4-dc7c-41d7-9f2c-55b93a777298', '中', 'なか', 'ở giữa', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '600c9bf4-dc7c-41d7-9f2c-55b93a777298', '真ん中', 'まんなか', 'chính giữa', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '600c9bf4-dc7c-41d7-9f2c-55b93a777298', '中身', 'なかみ', 'nội dung bên trong', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '4b6bb07a-6a02-4ecd-be5c-4fe48e0d03ce', '中国', 'ちゅうごく', 'Trung Quốc', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '4b6bb07a-6a02-4ecd-be5c-4fe48e0d03ce', '使用中', 'しようちゅう', 'đang sử dụng', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '4b6bb07a-6a02-4ecd-be5c-4fe48e0d03ce', '募集中', 'ぼしゅうちゅう', 'đang tuyển dụng', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '4b6bb07a-6a02-4ecd-be5c-4fe48e0d03ce', '中学校', 'ちゅうがっこう', 'trường THCS', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', '4b6bb07a-6a02-4ecd-be5c-4fe48e0d03ce', '中止', 'ちゅうし', 'đình chỉ, tạm dừng', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d', 'c7d9f22c-eada-4e7e-a384-b45c1e0d51ee', '世界中', 'せかいじゅう', 'vòng quanh thế giới', false, 11, 'pdf', 'ok');

-- ---------- 外 (NGOẠI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('8a2e6417-d3a7-4f9f-914b-013978b9c319', 'N5', '外', 'NGOẠI', 'bên ngoài', 5, '夕', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '6b7d94b9-2d8c-46a1-92a2-59c274fe7258', id, 'kun', 'そと', true, 11, 'ok' from jp_kanji where id = '8a2e6417-d3a7-4f9f-914b-013978b9c319'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'fbe7e090-f9c6-4517-a030-800f5b78d083', id, 'kun', 'はず', false, 11, 'ok' from jp_kanji where id = '8a2e6417-d3a7-4f9f-914b-013978b9c319'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '641b81eb-82fa-41b0-b9e8-acde8634825e', id, 'on', 'がい', true, 11, 'ok' from jp_kanji where id = '8a2e6417-d3a7-4f9f-914b-013978b9c319'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8a2e6417-d3a7-4f9f-914b-013978b9c319', '6b7d94b9-2d8c-46a1-92a2-59c274fe7258', '外', 'そと', 'bên ngoài', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8a2e6417-d3a7-4f9f-914b-013978b9c319', 'fbe7e090-f9c6-4517-a030-800f5b78d083', '外れます', 'はずれます', 'tuột ra; chệch ra', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8a2e6417-d3a7-4f9f-914b-013978b9c319', 'fbe7e090-f9c6-4517-a030-800f5b78d083', '外します', 'はずします', 'tháo ra, cởi ra', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8a2e6417-d3a7-4f9f-914b-013978b9c319', '641b81eb-82fa-41b0-b9e8-acde8634825e', '外国', 'がいこく', 'nước ngoài', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('8a2e6417-d3a7-4f9f-914b-013978b9c319', '641b81eb-82fa-41b0-b9e8-acde8634825e', '海外', 'かいがい', 'hải ngoại', false, 11, 'pdf', 'ok');

-- ---------- 下 (HẠ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', 'N5', '下', 'HẠ', 'dưới, xuống', 3, '一', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '799824ce-107f-46f9-87e6-fc77d849212c', id, 'kun', 'した', true, 11, 'ok' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '99aae99f-ef9b-42d6-bc84-7538d73d83f4', id, 'kun', 'さ', false, 11, 'ok' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '27a4edd6-4229-48e4-afd5-84c4bfc91b69', id, 'kun', 'お', false, 11, 'ok' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'b7c05f96-462c-4772-ad0d-e8ecaf37b0d6', id, 'on', 'か', true, 11, 'ok' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'e0ea0453-fe44-4e49-a661-f145268c218b', id, 'on', 'げ', false, 11, 'ok' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f5672acb-a3b6-4e58-b397-43eb1614310b', id, 'on', 'へ', false, 11, 'ok' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', '799824ce-107f-46f9-87e6-fc77d849212c', '下', 'した', 'bên dưới', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', '799824ce-107f-46f9-87e6-fc77d849212c', '下着', 'したぎ', 'đồ lót', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', '799824ce-107f-46f9-87e6-fc77d849212c', '靴下', 'くつした', 'tất', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', '99aae99f-ef9b-42d6-bc84-7538d73d83f4', '下げます', 'さげます', 'hạ xuống, giảm đi', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', '99aae99f-ef9b-42d6-bc84-7538d73d83f4', '下がります', 'さがります', 'rơi, lao xuống', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', '27a4edd6-4229-48e4-afd5-84c4bfc91b69', '下ろします', 'おろします', 'rút (tiền)', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', 'b7c05f96-462c-4772-ad0d-e8ecaf37b0d6', '地下', 'ちか', 'dưới lòng đất', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', 'b7c05f96-462c-4772-ad0d-e8ecaf37b0d6', '地下鉄', 'ちかてつ', 'tàu điện ngầm', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', 'b7c05f96-462c-4772-ad0d-e8ecaf37b0d6', '廊下', 'ろうか', 'hành lang', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', 'b7c05f96-462c-4772-ad0d-e8ecaf37b0d6', '以下', 'いか', 'dưới đây', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3b47111b-a8ce-4806-9056-fd846bd1bc88', 'f5672acb-a3b6-4e58-b397-43eb1614310b', '下手な', 'へたな', 'kém, không giỏi', false, 11, 'pdf', 'ok');

-- ---------- 上 (THƯỢNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', 'N5', '上', 'THƯỢNG', 'trên, lên', 3, '一', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '10fd0573-21d9-4251-88d4-fe913bb822d2', id, 'kun', 'うえ', true, 11, 'ok' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'dde8b8ee-13ed-4712-a6cf-ad6c4aa16c70', id, 'kun', 'うわ', false, 11, 'ok' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'fee2d917-e094-4a5c-97ed-cdade414d142', id, 'kun', 'あ', false, 11, 'ok' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '6f0483b3-73ba-496f-a2ae-7704cc77fe29', id, 'kun', 'のぼ', false, 11, 'ok' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '38caaf13-8fef-4e36-b019-6e72b29acc82', id, 'on', 'じょう', true, 11, 'ok' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', '10fd0573-21d9-4251-88d4-fe913bb822d2', '上', 'うえ', 'bên trên', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', 'dde8b8ee-13ed-4712-a6cf-ad6c4aa16c70', '上着', 'うわぎ', 'áo khoác', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', 'fee2d917-e094-4a5c-97ed-cdade414d142', '上がります', 'あがります', 'lên trên, tiến bộ', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', 'fee2d917-e094-4a5c-97ed-cdade414d142', '上げます', 'あげます', 'nâng lên', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', '6f0483b3-73ba-496f-a2ae-7704cc77fe29', '上ります', 'のぼります', 'leo, trèo', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', '6f0483b3-73ba-496f-a2ae-7704cc77fe29', '召し上がります', 'めしあがります', 'ăn, uống (kính ngữ của 食べます)', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', '38caaf13-8fef-4e36-b019-6e72b29acc82', '上手', 'じょうず', 'giỏi, thông thạo', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', '38caaf13-8fef-4e36-b019-6e72b29acc82', '屋上', 'おくじょう', 'mái nhà', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('65da5377-f86d-4ae7-a4b6-1c198b9a4c07', '38caaf13-8fef-4e36-b019-6e72b29acc82', '以上', 'いじょう', 'hơn, nhiều hơn', false, 11, 'pdf', 'ok');

-- ---------- 左 (TẢ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('84f5a966-e0d4-44bc-b75c-e420862ea9ba', 'N5', '左', 'TẢ', 'bên trái', 5, '工', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '340b2938-062b-4345-99c6-a01600a335c4', id, 'kun', 'ひだり', true, 11, 'ok' from jp_kanji where id = '84f5a966-e0d4-44bc-b75c-e420862ea9ba'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('84f5a966-e0d4-44bc-b75c-e420862ea9ba', '340b2938-062b-4345-99c6-a01600a335c4', '左', 'ひだり', 'phía bên trái', false, 11, 'pdf', 'ok');

-- ---------- 右 (HỮU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('c596d376-bb84-4bd8-9561-2af18cf04fca', 'N5', '右', 'HỮU', 'bên phải', 5, '口', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '95e6e888-5c98-49aa-b06f-48e321574dc1', id, 'kun', 'みぎ', true, 11, 'ok' from jp_kanji where id = 'c596d376-bb84-4bd8-9561-2af18cf04fca'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c596d376-bb84-4bd8-9561-2af18cf04fca', '95e6e888-5c98-49aa-b06f-48e321574dc1', '右', 'みぎ', 'phía bên phải', false, 11, 'pdf', 'ok');

-- ---------- 大 (ĐẠI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'N5', '大', 'ĐẠI', 'to, lớn', 3, '大', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c785882f-ac51-4d5c-b165-9d62c1c89380', id, 'kun', 'おお', true, 11, 'ok' from jp_kanji where id = '1a43d56d-7e95-4201-9c6e-f9e24326ae44'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'a743289c-c62b-4dbd-a52a-c9be2437f028', id, 'on', 'だい', true, 11, 'ok' from jp_kanji where id = '1a43d56d-7e95-4201-9c6e-f9e24326ae44'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'e298a5a6-26b1-4301-88c7-5685ddc1e954', id, 'on', 'たい', false, 11, 'ok' from jp_kanji where id = '1a43d56d-7e95-4201-9c6e-f9e24326ae44'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'c785882f-ac51-4d5c-b165-9d62c1c89380', '大きい', 'おおきい', 'to, lớn', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'c785882f-ac51-4d5c-b165-9d62c1c89380', '大きさ', 'おおきさ', 'độ lớn', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'c785882f-ac51-4d5c-b165-9d62c1c89380', '大勢の', 'おおぜいの', 'đông, nhiều -', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'c785882f-ac51-4d5c-b165-9d62c1c89380', '大人', 'おとな', 'người lớn', true, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'a743289c-c62b-4dbd-a52a-c9be2437f028', '大丈夫', 'だいじょうぶ', 'không sao', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'a743289c-c62b-4dbd-a52a-c9be2437f028', 'お大事に', 'おだいじに', 'bảo trọng nhé! (nói với người đang bị bệnh)', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'a743289c-c62b-4dbd-a52a-c9be2437f028', '大好きな', 'だいすきな', 'rất thích, yêu', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'a743289c-c62b-4dbd-a52a-c9be2437f028', '大学院', 'だいがくいん', 'cao học', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'a743289c-c62b-4dbd-a52a-c9be2437f028', '大統領', 'だいとうりょう', 'tổng thống', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'e298a5a6-26b1-4301-88c7-5685ddc1e954', '大変', 'たいへん', 'vất vả, khó khăn', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'e298a5a6-26b1-4301-88c7-5685ddc1e954', '大切', 'たいせつ', 'quan trọng, cần thiết', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1a43d56d-7e95-4201-9c6e-f9e24326ae44', 'e298a5a6-26b1-4301-88c7-5685ddc1e954', '大会', 'たいかい', 'đại hội', false, 11, 'pdf', 'ok');

-- ---------- 小 (TIỂU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('881a6bee-42ad-48a5-a780-cf1595c69db9', 'N5', '小', 'TIỂU', 'nhỏ, bé', 3, '小', 11, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'eeb60481-d669-4206-92f9-c875055e7023', id, 'kun', 'ちい', true, 11, 'ok' from jp_kanji where id = '881a6bee-42ad-48a5-a780-cf1595c69db9'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '751fc421-7606-4fe4-ad4f-fb476d3f5d49', id, 'kun', 'こ', false, 11, 'ok' from jp_kanji where id = '881a6bee-42ad-48a5-a780-cf1595c69db9'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1a46b99e-7207-4c95-83b5-29b505d320f9', id, 'on', 'しょう', true, 11, 'ok' from jp_kanji where id = '881a6bee-42ad-48a5-a780-cf1595c69db9'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('881a6bee-42ad-48a5-a780-cf1595c69db9', 'eeb60481-d669-4206-92f9-c875055e7023', '小さい', 'ちいさい', 'nhỏ, bé', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('881a6bee-42ad-48a5-a780-cf1595c69db9', '751fc421-7606-4fe4-ad4f-fb476d3f5d49', '小さな', 'ちいさな', 'nhỏ, bé', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('881a6bee-42ad-48a5-a780-cf1595c69db9', '1a46b99e-7207-4c95-83b5-29b505d320f9', '小説', 'しょうせつ', 'tiểu thuyết', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('881a6bee-42ad-48a5-a780-cf1595c69db9', '1a46b99e-7207-4c95-83b5-29b505d320f9', '小説家', 'しょうせつか', 'tiểu thuyết gia', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('881a6bee-42ad-48a5-a780-cf1595c69db9', '1a46b99e-7207-4c95-83b5-29b505d320f9', '小学生', 'しょうがくせい', 'học sinh tiểu học', false, 11, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('881a6bee-42ad-48a5-a780-cf1595c69db9', '1a46b99e-7207-4c95-83b5-29b505d320f9', '小学校', 'しょうがっこう', 'trường tiểu học', false, 11, 'pdf', 'ok');

-- ---------- 古 (CỔ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('b3f2c06d-9b1a-4ed5-88a9-df06a6f8982d', 'N5', '古', 'CỔ', 'cũ, cổ', 5, '口', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'b6e9b6db-b3db-4d8e-8f71-cdf723560615', id, 'kun', 'ふる', true, 12, 'ok' from jp_kanji where id = 'b3f2c06d-9b1a-4ed5-88a9-df06a6f8982d'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b3f2c06d-9b1a-4ed5-88a9-df06a6f8982d', 'b6e9b6db-b3db-4d8e-8f71-cdf723560615', '古い', 'ふるい', 'cũ, cổ', false, 12, 'pdf', 'ok');

-- ---------- 高 (CAO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('444834c4-c72a-4762-a500-c575262e9e5b', 'N5', '高', 'CAO', 'cao', 10, '高', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1e437064-58e4-4f72-84a5-eeb5cb9ce32a', id, 'kun', 'たか', true, 12, 'ok' from jp_kanji where id = '444834c4-c72a-4762-a500-c575262e9e5b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'da764072-c53f-4386-9267-6f2956d9470a', id, 'on', 'こう', true, 12, 'ok' from jp_kanji where id = '444834c4-c72a-4762-a500-c575262e9e5b'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('444834c4-c72a-4762-a500-c575262e9e5b', '1e437064-58e4-4f72-84a5-eeb5cb9ce32a', '高い', 'たかい', 'cao', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('444834c4-c72a-4762-a500-c575262e9e5b', '1e437064-58e4-4f72-84a5-eeb5cb9ce32a', '高さ', 'たかさ', 'độ cao', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('444834c4-c72a-4762-a500-c575262e9e5b', 'da764072-c53f-4386-9267-6f2956d9470a', '高校', 'こうこう', 'trường THPT', false, 12, 'pdf', 'ok');

-- ---------- 安 (AN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('bbad927d-93af-41e0-815b-6e77a52ce546', 'N5', '安', 'AN', 'rẻ, an toàn', 6, '宀', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'db04ad17-87a1-4bd0-bd74-8840d37e65a1', id, 'kun', 'やす', true, 12, 'ok' from jp_kanji where id = 'bbad927d-93af-41e0-815b-6e77a52ce546'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7fac83a0-daa2-4ef3-9d88-9b941ceaec7e', id, 'on', 'あん', true, 12, 'ok' from jp_kanji where id = 'bbad927d-93af-41e0-815b-6e77a52ce546'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('bbad927d-93af-41e0-815b-6e77a52ce546', 'db04ad17-87a1-4bd0-bd74-8840d37e65a1', '安い', 'やすい', 'rẻ', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('bbad927d-93af-41e0-815b-6e77a52ce546', '7fac83a0-daa2-4ef3-9d88-9b941ceaec7e', '安心します', 'あんしんします', 'an tâm, yên tâm', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('bbad927d-93af-41e0-815b-6e77a52ce546', '7fac83a0-daa2-4ef3-9d88-9b941ceaec7e', '安全', 'あんぜん', 'an toàn', false, 12, 'pdf', 'ok');

-- ---------- 多 (ĐA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('36f870b0-49f3-4e28-bc97-edf8fc01543f', 'N5', '多', 'ĐA', 'nhiều', 6, '夕', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f69b5ebd-00d6-4887-a8d0-18e74e4b912e', id, 'kun', 'おお', true, 12, 'ok' from jp_kanji where id = '36f870b0-49f3-4e28-bc97-edf8fc01543f'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('36f870b0-49f3-4e28-bc97-edf8fc01543f', 'f69b5ebd-00d6-4887-a8d0-18e74e4b912e', '多い', 'おおい', 'nhiều', false, 12, 'pdf', 'ok');

-- ---------- 男 (NAM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('fb36028f-e675-4842-a394-d18e5557d180', 'N5', '男', 'NAM', 'con trai, nam', 7, '田', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '0689b115-b50e-47c2-a3db-a6e39543ea14', id, 'kun', 'おとこ', true, 12, 'ok' from jp_kanji where id = 'fb36028f-e675-4842-a394-d18e5557d180'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '34b80b4f-b6b3-482a-826d-e7ab0f52fa04', id, 'on', 'だん', true, 12, 'ok' from jp_kanji where id = 'fb36028f-e675-4842-a394-d18e5557d180'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fb36028f-e675-4842-a394-d18e5557d180', '0689b115-b50e-47c2-a3db-a6e39543ea14', '男の人', 'おとこのひと', 'người con trai', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fb36028f-e675-4842-a394-d18e5557d180', '0689b115-b50e-47c2-a3db-a6e39543ea14', '男の子', 'おとこのこ', 'bé trai', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fb36028f-e675-4842-a394-d18e5557d180', '34b80b4f-b6b3-482a-826d-e7ab0f52fa04', '男性', 'だんせい', 'nam giới, nam tính', false, 12, 'pdf', 'ok');

-- ---------- 女 (NỮ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('c5e1ac10-d1ea-489e-808a-17108359bc32', 'N5', '女', 'NỮ', 'con gái, nữ', 3, '女', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '34c37e59-7a84-49db-bbf7-6c99175dc266', id, 'kun', 'おんな', true, 12, 'ok' from jp_kanji where id = 'c5e1ac10-d1ea-489e-808a-17108359bc32'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'ab08df62-09b6-4820-b1b5-35563ae650d3', id, 'on', 'じょ', true, 12, 'ok' from jp_kanji where id = 'c5e1ac10-d1ea-489e-808a-17108359bc32'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5e1ac10-d1ea-489e-808a-17108359bc32', '34c37e59-7a84-49db-bbf7-6c99175dc266', '女の人', 'おんなのひと', 'người con gái', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5e1ac10-d1ea-489e-808a-17108359bc32', '34c37e59-7a84-49db-bbf7-6c99175dc266', '女の子', 'おんなのこ', 'bé gái', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5e1ac10-d1ea-489e-808a-17108359bc32', 'ab08df62-09b6-4820-b1b5-35563ae650d3', '彼女', 'かのじょ', 'bạn gái', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c5e1ac10-d1ea-489e-808a-17108359bc32', 'ab08df62-09b6-4820-b1b5-35563ae650d3', '女性', 'じょせい', 'nữ giới, nữ tính', false, 12, 'pdf', 'ok');

-- ---------- 子 (TỬ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'N5', '子', 'TỬ', 'con, trẻ em', 3, '子', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'ec7b7b7a-50a2-42dc-ae0d-f9f1817f419c', id, 'kun', 'こ', true, 12, 'ok' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '0729d97a-dd2d-47e8-92e8-c35b524e0f6c', id, 'kun', 'ご', false, 12, 'ok' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'fc7f43ab-5ce9-48f7-a724-81012bfa0500', id, 'on', 'し', false, 12, 'ok' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'fbfe1fb8-6a49-4e2a-86b7-06920a620bb9', id, 'on', 'す', false, 12, 'ok' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'ec7b7b7a-50a2-42dc-ae0d-f9f1817f419c', '子ども', 'こども', 'trẻ em', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'ec7b7b7a-50a2-42dc-ae0d-f9f1817f419c', '子どもたち', 'こどもたち', 'bọn trẻ con', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'ec7b7b7a-50a2-42dc-ae0d-f9f1817f419c', '息子', 'むすこ', 'người con trai', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'ec7b7b7a-50a2-42dc-ae0d-f9f1817f419c', 'お子さん', 'おこさん', 'con (của người khác)', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'ec7b7b7a-50a2-42dc-ae0d-f9f1817f419c', '親子どんぶり', 'おやこどんぶり', 'cơm thịt gà và trứng', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', '0729d97a-dd2d-47e8-92e8-c35b524e0f6c', '双子', 'ふたご', 'cặp sinh đôi', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'fc7f43ab-5ce9-48f7-a724-81012bfa0500', '電子辞書', 'でんしじしょ', 'từ điển điện tử', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'fc7f43ab-5ce9-48f7-a724-81012bfa0500', '調子', 'ちょうし', 'tình trạng, trạng thái', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'fc7f43ab-5ce9-48f7-a724-81012bfa0500', '帽子', 'ぼうし', 'cái mũ', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'fc7f43ab-5ce9-48f7-a724-81012bfa0500', 'お菓子', 'おかし', 'kẹo bánh', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f85c3e38-3650-4ede-9782-5c21bf4f0a3b', 'fbfe1fb8-6a49-4e2a-86b7-06920a620bb9', '様子', 'ようす', 'bộ dạng, dáng', false, 12, 'pdf', 'ok');

-- ---------- 父 (PHỤ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('472b1504-dcf3-426c-9651-2e6e4d93208d', 'N5', '父', 'PHỤ', 'bố, cha', 4, '父', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '9a47384c-4179-4188-99cd-a1838decd667', id, 'kun', 'ちち', true, 12, 'ok' from jp_kanji where id = '472b1504-dcf3-426c-9651-2e6e4d93208d'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '97191b1e-92e3-412d-aeed-cb3b004374cb', id, 'on', 'ふ', true, 12, 'ok' from jp_kanji where id = '472b1504-dcf3-426c-9651-2e6e4d93208d'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('472b1504-dcf3-426c-9651-2e6e4d93208d', '9a47384c-4179-4188-99cd-a1838decd667', '父', 'ちち', 'bố, cha', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('472b1504-dcf3-426c-9651-2e6e4d93208d', '97191b1e-92e3-412d-aeed-cb3b004374cb', '祖父', 'そふ', 'ông', false, 12, 'pdf', 'ok');

-- ---------- 母 (MẪU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('ea7e8d3d-552c-4af8-9583-3bb7e40c92e7', 'N5', '母', 'MẪU', 'mẹ', 5, '母', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '34f2e14b-8e61-4ec2-9951-09c88d412784', id, 'kun', 'はは', true, 12, 'ok' from jp_kanji where id = 'ea7e8d3d-552c-4af8-9583-3bb7e40c92e7'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '21692fba-89e2-443b-884e-a3a7febfbad1', id, 'on', 'ぼ', true, 12, 'ok' from jp_kanji where id = 'ea7e8d3d-552c-4af8-9583-3bb7e40c92e7'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('ea7e8d3d-552c-4af8-9583-3bb7e40c92e7', '34f2e14b-8e61-4ec2-9951-09c88d412784', '母', 'はは', 'mẹ', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('ea7e8d3d-552c-4af8-9583-3bb7e40c92e7', '34f2e14b-8e61-4ec2-9951-09c88d412784', '母の日', 'ははのひ', 'ngày của Mẹ', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('ea7e8d3d-552c-4af8-9583-3bb7e40c92e7', '21692fba-89e2-443b-884e-a3a7febfbad1', '祖母', 'そぼ', 'bà', false, 12, 'pdf', 'ok');

-- ---------- 友 (HỮU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('3dc73342-1217-46ed-8851-57f09129460e', 'N5', '友', 'HỮU', 'bạn', 4, '又', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '14c7966e-df46-44c1-930e-4fbfc0033ef6', id, 'kun', 'とも', true, 12, 'ok' from jp_kanji where id = '3dc73342-1217-46ed-8851-57f09129460e'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5a4149e1-4600-4de0-a0ad-1ed16aa037be', id, 'on', 'ゆう', false, 12, 'ok' from jp_kanji where id = '3dc73342-1217-46ed-8851-57f09129460e'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3dc73342-1217-46ed-8851-57f09129460e', '14c7966e-df46-44c1-930e-4fbfc0033ef6', '友達', 'ともだち', 'bạn bè', false, 12, 'pdf', 'ok');

-- ---------- 名 (DANH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('892bbfa0-2ebb-4027-81fc-5cd4a0c6003f', 'N5', '名', 'DANH', 'tên, danh tiếng', 6, '口', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '48e76282-17d6-4cc9-ac58-9e6743a65837', id, 'kun', 'な', true, 12, 'ok' from jp_kanji where id = '892bbfa0-2ebb-4027-81fc-5cd4a0c6003f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '419ef71a-8cba-4e89-889b-d4d2348eeb1c', id, 'on', 'めい', true, 12, 'ok' from jp_kanji where id = '892bbfa0-2ebb-4027-81fc-5cd4a0c6003f'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'ae20fb1d-78c2-4983-a144-62db789d56bb', id, 'on', 'みょう', false, 12, 'ok' from jp_kanji where id = '892bbfa0-2ebb-4027-81fc-5cd4a0c6003f'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('892bbfa0-2ebb-4027-81fc-5cd4a0c6003f', '48e76282-17d6-4cc9-ac58-9e6743a65837', '名前', 'なまえ', 'tên', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('892bbfa0-2ebb-4027-81fc-5cd4a0c6003f', '419ef71a-8cba-4e89-889b-d4d2348eeb1c', '名刺', 'めいし', 'danh thiếp', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('892bbfa0-2ebb-4027-81fc-5cd4a0c6003f', '419ef71a-8cba-4e89-889b-d4d2348eeb1c', '有名', 'ゆうめい', 'nổi tiếng', false, 12, 'pdf', 'ok');

-- ---------- 音 (ÂM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('b85ec633-88f5-4822-8ec4-ddd891b78572', 'N5', '音', 'ÂM', 'âm thanh', 9, '音', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'd6de2507-bc4a-4f18-892e-be76652ec4a0', id, 'kun', 'おと', true, 12, 'ok' from jp_kanji where id = 'b85ec633-88f5-4822-8ec4-ddd891b78572'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c5e5b6f9-28c9-4e20-a1f3-e52104db28c6', id, 'kun', 'ね', false, 12, 'ok' from jp_kanji where id = 'b85ec633-88f5-4822-8ec4-ddd891b78572'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '04a0174b-ac5d-4659-b9f7-b8de014ce304', id, 'on', 'おん', true, 12, 'ok' from jp_kanji where id = 'b85ec633-88f5-4822-8ec4-ddd891b78572'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b85ec633-88f5-4822-8ec4-ddd891b78572', 'd6de2507-bc4a-4f18-892e-be76652ec4a0', '音', 'おと', 'âm thanh', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b85ec633-88f5-4822-8ec4-ddd891b78572', '04a0174b-ac5d-4659-b9f7-b8de014ce304', '音楽', 'おんがく', 'âm nhạc', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b85ec633-88f5-4822-8ec4-ddd891b78572', '04a0174b-ac5d-4659-b9f7-b8de014ce304', '発音', 'はつおん', 'phát âm', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b85ec633-88f5-4822-8ec4-ddd891b78572', '04a0174b-ac5d-4659-b9f7-b8de014ce304', '音楽家', 'おんがくか', 'nhà soạn nhạc', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b85ec633-88f5-4822-8ec4-ddd891b78572', '04a0174b-ac5d-4659-b9f7-b8de014ce304', '録音します', 'ろくおんします', 'ghi âm', false, 12, 'pdf', 'ok');

-- ---------- 字 (TỰ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('2517d53a-c1f6-42b5-ab3b-dd0571f9a755', 'N5', '字', 'TỰ', 'chữ', 6, '子', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '8edf5ded-c557-46a9-bc05-623893554666', id, 'on', 'じ', true, 12, 'ok' from jp_kanji where id = '2517d53a-c1f6-42b5-ab3b-dd0571f9a755'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2517d53a-c1f6-42b5-ab3b-dd0571f9a755', '8edf5ded-c557-46a9-bc05-623893554666', '漢字', 'かんじ', 'chữ Hán', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2517d53a-c1f6-42b5-ab3b-dd0571f9a755', '8edf5ded-c557-46a9-bc05-623893554666', '字', 'じ', 'chữ', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2517d53a-c1f6-42b5-ab3b-dd0571f9a755', '8edf5ded-c557-46a9-bc05-623893554666', 'ローマ字', 'ローマじ', 'chữ phiên âm', false, 12, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2517d53a-c1f6-42b5-ab3b-dd0571f9a755', '8edf5ded-c557-46a9-bc05-623893554666', '習字', 'しゅうじ', 'luyện chữ', false, 12, 'pdf', 'ok');

-- ---------- 雨 (VŨ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('584b876c-e6ac-4846-8a73-1a5b8527986c', 'N5', '雨', 'VŨ', 'mưa', 8, '雨', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '309da5b1-db2b-4153-b9f6-8ff12428a740', id, 'kun', 'あめ', true, 12, 'ok' from jp_kanji where id = '584b876c-e6ac-4846-8a73-1a5b8527986c'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'fca159f2-0767-45b8-b2d4-025de6611e93', id, 'on', 'う', false, 12, 'ok' from jp_kanji where id = '584b876c-e6ac-4846-8a73-1a5b8527986c'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('584b876c-e6ac-4846-8a73-1a5b8527986c', '309da5b1-db2b-4153-b9f6-8ff12428a740', '雨', 'あめ', 'mưa', false, 12, 'pdf', 'ok');

-- ---------- 寺 (TỰ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('28abc479-e459-4a71-b397-ddac0192d340', 'N5', '寺', 'TỰ', 'chùa', 6, '寸', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'aa8b47e0-e366-40fe-abce-0c3fb3c6c994', id, 'kun', 'てら', true, 12, 'ok' from jp_kanji where id = '28abc479-e459-4a71-b397-ddac0192d340'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '8fe23831-ee5e-4282-b9ca-0e9fa7c651e4', id, 'on', 'じ', false, 12, 'ok' from jp_kanji where id = '28abc479-e459-4a71-b397-ddac0192d340'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('28abc479-e459-4a71-b397-ddac0192d340', 'aa8b47e0-e366-40fe-abce-0c3fb3c6c994', 'お寺', 'おてら', 'đền chùa', false, 12, 'pdf', 'ok');

-- ---------- 米 (MỄ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('fa3ea889-b2fb-4eb6-b7de-ba4c555435b9', 'N5', '米', 'MỄ', 'gạo', 6, '米', 12, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1b4f255c-5a97-477a-b442-f23b0ce2ce9a', id, 'kun', 'こめ', true, 12, 'ok' from jp_kanji where id = 'fa3ea889-b2fb-4eb6-b7de-ba4c555435b9'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('fa3ea889-b2fb-4eb6-b7de-ba4c555435b9', '1b4f255c-5a97-477a-b442-f23b0ce2ce9a', '米', 'こめ', 'gạo', false, 12, 'pdf', 'ok');


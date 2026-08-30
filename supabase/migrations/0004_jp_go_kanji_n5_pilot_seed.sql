-- ============================================================
-- jp-go — Kanji N5 thí điểm: 10 kanji bộ số đếm 一~十.
-- Nguồn: PDF "Tổng hợp kiến thức N5" (Dũng Mori), phần Kanji,
-- trang PDF 4 (trang in "1" của mục Kanji). Đọc trực tiếp từ ảnh
-- trang PDF, đối chiếu kiến thức N5 chuẩn cho các nhãn âm nhỏ.
-- Additive, idempotent: mỗi block dùng ON CONFLICT DO NOTHING theo
-- khoá tự nhiên (level, kanji_character) nên chạy lại an toàn.
-- ============================================================

-- ---------- 一 (NHẤT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('ed858c40-c982-447b-a548-89761b0f0825', 'N5', '一', 'NHẤT', 'một, số 1', 1, '一', '一 là một nét ngang duy nhất — giống số 1 nằm ngang.', NULL, '{二,三}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '0f7e6a6d-0037-435a-b84b-915032559a6a', id, 'kun', 'ひと', true, 4, 'ok', NULL from jp_kanji where id = 'ed858c40-c982-447b-a548-89761b0f0825'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '2a64ed12-1d80-4f46-8674-d5793935138e', id, 'on', 'いち', true, 4, 'ok', NULL from jp_kanji where id = 'ed858c40-c982-447b-a548-89761b0f0825'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('ed858c40-c982-447b-a548-89761b0f0825', '0f7e6a6d-0037-435a-b84b-915032559a6a', '一人で', 'ひとりで', 'một mình, tự mình', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('ed858c40-c982-447b-a548-89761b0f0825', '0f7e6a6d-0037-435a-b84b-915032559a6a', '一つ', 'ひとつ', 'một cái, một chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('ed858c40-c982-447b-a548-89761b0f0825', '0f7e6a6d-0037-435a-b84b-915032559a6a', '一日', 'ついたち', 'ngày mùng 1', true, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('ed858c40-c982-447b-a548-89761b0f0825', '2a64ed12-1d80-4f46-8674-d5793935138e', '一', 'いち', 'một', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('ed858c40-c982-447b-a548-89761b0f0825', '2a64ed12-1d80-4f46-8674-d5793935138e', '一生懸命', 'いっしょうけんめい', 'chăm chỉ, cần cù', false, 4, 'pdf', 'ok', NULL);

-- ---------- 二 (NHỊ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('c64a3367-c53b-44bd-9742-709b55838df7', 'N5', '二', 'NHỊ', 'hai, số 2', 2, '二', '二 là hai nét ngang xếp chồng — đếm gạch ngang ra số.', NULL, '{一,三}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'f0ce3c8f-73ed-46ee-a447-de735f6ba701', id, 'kun', 'ふた', true, 4, 'ok', NULL from jp_kanji where id = 'c64a3367-c53b-44bd-9742-709b55838df7'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'f925dc87-0852-40c0-94b1-c1fb4ad883c7', id, 'on', 'に', true, 4, 'ok', NULL from jp_kanji where id = 'c64a3367-c53b-44bd-9742-709b55838df7'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('c64a3367-c53b-44bd-9742-709b55838df7', 'f0ce3c8f-73ed-46ee-a447-de735f6ba701', '二つ', 'ふたつ', 'hai cái, hai chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('c64a3367-c53b-44bd-9742-709b55838df7', 'f0ce3c8f-73ed-46ee-a447-de735f6ba701', '二人', 'ふたり', 'hai người', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('c64a3367-c53b-44bd-9742-709b55838df7', 'f0ce3c8f-73ed-46ee-a447-de735f6ba701', '二日', 'ふつか', 'ngày mùng 2', true, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('c64a3367-c53b-44bd-9742-709b55838df7', 'f925dc87-0852-40c0-94b1-c1fb4ad883c7', '二', 'に', 'hai', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('c64a3367-c53b-44bd-9742-709b55838df7', 'f925dc87-0852-40c0-94b1-c1fb4ad883c7', '二次会', 'にじかい', 'bữa tiệc thứ 2, tăng hai', false, 4, 'pdf', 'ok', NULL);

-- ---------- 三 (TAM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('5a925f32-4cd7-44aa-9669-d5191aff08ac', 'N5', '三', 'TAM', 'ba, số 3', 3, NULL, '三 là ba nét ngang xếp chồng — nhớ theo đúng số nét.', NULL, '{一,二}', 4, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '38780a45-4925-42bb-837d-5a606a39483e', id, 'kun', 'みっ', true, 4, 'ok', NULL from jp_kanji where id = '5a925f32-4cd7-44aa-9669-d5191aff08ac'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'e7598291-591f-4add-92fc-bd6081e5e5d0', id, 'on', 'さん', true, 4, 'ok', NULL from jp_kanji where id = '5a925f32-4cd7-44aa-9669-d5191aff08ac'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('5a925f32-4cd7-44aa-9669-d5191aff08ac', '38780a45-4925-42bb-837d-5a606a39483e', '三日', 'みっか', 'ngày mùng 3', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('5a925f32-4cd7-44aa-9669-d5191aff08ac', '38780a45-4925-42bb-837d-5a606a39483e', '三つ', 'みっつ', 'ba cái, ba chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('5a925f32-4cd7-44aa-9669-d5191aff08ac', 'e7598291-591f-4add-92fc-bd6081e5e5d0', '三', 'さん', 'ba', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('5a925f32-4cd7-44aa-9669-d5191aff08ac', 'e7598291-591f-4add-92fc-bd6081e5e5d0', '三月', 'さんがつ', 'tháng 3', false, 4, 'pdf', 'ok', NULL);

-- ---------- 四 (TỨ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('386f829d-0e50-46a7-ba75-ed47331a2a76', 'N5', '四', 'TỨ', 'bốn, số 4', 5, '囗', '四 giống một ô cửa sổ có nét gấp khúc ở giữa, tượng trưng số 4.', NULL, '{}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '0be3fffb-5583-4142-b4e6-0f77d94458d7', id, 'kun', 'よん', true, 4, 'ok', NULL from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'fb0852a4-92c4-4ee6-81eb-4861b73d6ae4', id, 'kun', 'よっ', false, 4, 'ok', NULL from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '40e56635-cf69-49bd-9079-2d98fbaca6b7', id, 'kun', 'よ', false, 4, 'ok', NULL from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '9ad46b8d-254f-4ce0-9701-bfe4354e11c8', id, 'on', 'し', true, 4, 'ok', NULL from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('386f829d-0e50-46a7-ba75-ed47331a2a76', '0be3fffb-5583-4142-b4e6-0f77d94458d7', '四', 'よん', 'bốn', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('386f829d-0e50-46a7-ba75-ed47331a2a76', 'fb0852a4-92c4-4ee6-81eb-4861b73d6ae4', '四日', 'よっか', 'ngày mùng 4', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('386f829d-0e50-46a7-ba75-ed47331a2a76', '40e56635-cf69-49bd-9079-2d98fbaca6b7', '四つ', 'よっつ', 'bốn cái, bốn chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('386f829d-0e50-46a7-ba75-ed47331a2a76', '9ad46b8d-254f-4ce0-9701-bfe4354e11c8', '四月', 'しがつ', 'tháng 4', false, 4, 'pdf', 'ok', NULL);

-- ---------- 五 (NGŨ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('cd07bc88-7a84-4866-9cf6-86d53c85c577', 'N5', '五', 'NGŨ', 'năm, số 5', 4, NULL, '五 có nét chữ X trong khung — liên tưởng bàn tay 5 ngón.', NULL, '{}', 4, 'pdf', 'needs_review')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '03e11a8a-838b-4bc6-8d06-73aceaa613f0', id, 'kun', 'いつ', true, 4, 'ok', NULL from jp_kanji where id = 'cd07bc88-7a84-4866-9cf6-86d53c85c577'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '03e752d0-4a4d-4834-99c6-cfa2c57df87f', id, 'on', 'ご', true, 4, 'ok', NULL from jp_kanji where id = 'cd07bc88-7a84-4866-9cf6-86d53c85c577'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('cd07bc88-7a84-4866-9cf6-86d53c85c577', '03e11a8a-838b-4bc6-8d06-73aceaa613f0', '五つ', 'いつつ', 'năm cái, năm chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('cd07bc88-7a84-4866-9cf6-86d53c85c577', '03e11a8a-838b-4bc6-8d06-73aceaa613f0', '五日', 'いつか', 'ngày mùng 5', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('cd07bc88-7a84-4866-9cf6-86d53c85c577', '03e752d0-4a4d-4834-99c6-cfa2c57df87f', '五', 'ご', 'năm', false, 4, 'pdf', 'ok', NULL);

-- ---------- 六 (LỤC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('0e0ede27-a407-4683-a703-7418d3509173', 'N5', '六', 'LỤC', 'sáu, số 6', 4, '八', '六 có mái nhà nhỏ với 2 chân — liên tưởng số 6.', NULL, '{}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '9048d4fb-ae51-421c-b0b6-cbc1d3df75f3', id, 'kun', 'むい', true, 4, 'ok', NULL from jp_kanji where id = '0e0ede27-a407-4683-a703-7418d3509173'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'ac92f42c-3a20-4a1c-a4c9-b5b671c7dd65', id, 'kun', 'むっ', false, 4, 'ok', NULL from jp_kanji where id = '0e0ede27-a407-4683-a703-7418d3509173'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'fc6776a9-ce81-4b39-b90a-4f009db18276', id, 'on', 'ろく', true, 4, 'ok', NULL from jp_kanji where id = '0e0ede27-a407-4683-a703-7418d3509173'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('0e0ede27-a407-4683-a703-7418d3509173', '9048d4fb-ae51-421c-b0b6-cbc1d3df75f3', '六日', 'むいか', 'ngày mùng 6', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('0e0ede27-a407-4683-a703-7418d3509173', 'ac92f42c-3a20-4a1c-a4c9-b5b671c7dd65', '六つ', 'むっつ', 'sáu cái, sáu chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('0e0ede27-a407-4683-a703-7418d3509173', 'fc6776a9-ce81-4b39-b90a-4f009db18276', '六', 'ろく', 'sáu', false, 4, 'pdf', 'ok', NULL);

-- ---------- 七 (THẤT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('9dae0bad-67bd-461e-84f3-9620d52aed67', 'N5', '七', 'THẤT', 'bảy, số 7', 2, '一', '七 giống chiếc móc câu cách điệu — liên tưởng số 7.', NULL, '{}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'd37d48d3-7a87-4176-ab8d-6be91c8e821e', id, 'kun', 'なの', true, 4, 'ok', NULL from jp_kanji where id = '9dae0bad-67bd-461e-84f3-9620d52aed67'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '55622fc1-dd9b-412a-9273-acd821adc310', id, 'kun', 'なな', false, 4, 'ok', NULL from jp_kanji where id = '9dae0bad-67bd-461e-84f3-9620d52aed67'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '040120ef-e96e-4274-b180-48aceb21c6c6', id, 'on', 'しち', true, 4, 'ok', NULL from jp_kanji where id = '9dae0bad-67bd-461e-84f3-9620d52aed67'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('9dae0bad-67bd-461e-84f3-9620d52aed67', 'd37d48d3-7a87-4176-ab8d-6be91c8e821e', '七日', 'なのか', 'ngày mùng 7', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('9dae0bad-67bd-461e-84f3-9620d52aed67', '55622fc1-dd9b-412a-9273-acd821adc310', '七つ', 'ななつ', 'bảy cái, bảy chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('9dae0bad-67bd-461e-84f3-9620d52aed67', '040120ef-e96e-4274-b180-48aceb21c6c6', '七月', 'しちがつ', 'tháng 7', false, 4, 'pdf', 'ok', NULL);

-- ---------- 八 (BÁT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('55e33787-0dff-4016-a5b2-83baa1a71ced', 'N5', '八', 'BÁT', 'tám, số 8', 2, '八', '八 là hai nét chéo tách ra hai bên như số 8 mở rộng.', 'Dễ nhầm với 人 nếu viết 2 nét quá đối xứng.', '{人}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '0b031ebf-b192-4411-ae5b-39050ae695ff', id, 'kun', 'やっ', true, 4, 'ok', NULL from jp_kanji where id = '55e33787-0dff-4016-a5b2-83baa1a71ced'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '0919404e-0979-499b-b7b3-a81b490ff7ab', id, 'kun', 'よう', false, 4, 'ok', NULL from jp_kanji where id = '55e33787-0dff-4016-a5b2-83baa1a71ced'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'c4c5a0dd-b328-4cf9-89fd-67991f725ed6', id, 'on', 'はち', true, 4, 'ok', NULL from jp_kanji where id = '55e33787-0dff-4016-a5b2-83baa1a71ced'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('55e33787-0dff-4016-a5b2-83baa1a71ced', '0b031ebf-b192-4411-ae5b-39050ae695ff', '八つ', 'やっつ', 'tám cái, tám chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('55e33787-0dff-4016-a5b2-83baa1a71ced', '0919404e-0979-499b-b7b3-a81b490ff7ab', '八日', 'ようか', 'ngày mùng 8', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('55e33787-0dff-4016-a5b2-83baa1a71ced', 'c4c5a0dd-b328-4cf9-89fd-67991f725ed6', '八', 'はち', 'tám', false, 4, 'pdf', 'ok', NULL);

-- ---------- 九 (CỬU) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('70bdf280-471a-4ee4-bad6-9da88b45aae5', 'N5', '九', 'CỬU', 'chín, số 9', 2, '乙', '九 là nét móc + nét ngang chéo tạo hình số 9 cách điệu.', 'Dễ nhầm với 力 vì nét móc gần giống.', '{力}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'b0f38531-c080-43c9-b759-29e48b08832b', id, 'kun', 'ここの', true, 4, 'ok', NULL from jp_kanji where id = '70bdf280-471a-4ee4-bad6-9da88b45aae5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'b68b516e-a0c9-483c-a3b9-d34246d0d8e2', id, 'on', 'きゅう', true, 4, 'ok', NULL from jp_kanji where id = '70bdf280-471a-4ee4-bad6-9da88b45aae5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'f19460ff-dbe5-4f4a-a8eb-0ca0e570d9e9', id, 'on', 'く', false, 4, 'ok', NULL from jp_kanji where id = '70bdf280-471a-4ee4-bad6-9da88b45aae5'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('70bdf280-471a-4ee4-bad6-9da88b45aae5', 'b0f38531-c080-43c9-b759-29e48b08832b', '九日', 'ここのか', 'ngày mùng 9', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('70bdf280-471a-4ee4-bad6-9da88b45aae5', 'b0f38531-c080-43c9-b759-29e48b08832b', '九つ', 'ここのつ', 'chín cái, chín chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('70bdf280-471a-4ee4-bad6-9da88b45aae5', 'f19460ff-dbe5-4f4a-a8eb-0ca0e570d9e9', '九月', 'くがつ', 'tháng 9', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('70bdf280-471a-4ee4-bad6-9da88b45aae5', 'b68b516e-a0c9-483c-a3b9-d34246d0d8e2', '九', 'きゅう', 'chín', false, 4, 'pdf', 'ok', NULL);

-- ---------- 十 (THẬP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status)
values ('bd228b3e-edfb-48da-b08a-eccff5bcd47b', 'N5', '十', 'THẬP', 'mười, số 10', 2, '十', '十 là dấu cộng (+) — 10 là phép cộng đơn giản nhất.', 'Dễ nhầm với 千 (thiếu/thừa 1 nét phía trên).', '{千}', 4, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '958e98c5-7974-43fe-9aad-b0a1f4b9edd3', id, 'kun', 'とお', true, 4, 'ok', NULL from jp_kanji where id = 'bd228b3e-edfb-48da-b08a-eccff5bcd47b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select '87efe8b4-c2a4-462a-908e-9cdb9d10cc13', id, 'on', 'じゅう', true, 4, 'ok', NULL from jp_kanji where id = 'bd228b3e-edfb-48da-b08a-eccff5bcd47b'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note)
select 'f4dac193-0223-4e83-8995-90eecd12706b', id, 'on', 'じっ', false, 4, 'needs_review', 'PDF ghi nhãn âm ジッ cạnh 十分な nhưng nghĩa đầy đủ/hoàn toàn thường đọc じゅうぶん (âm ジュウ) — xem correction_note ở jp_kanji_words.' from jp_kanji where id = 'bd228b3e-edfb-48da-b08a-eccff5bcd47b'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('bd228b3e-edfb-48da-b08a-eccff5bcd47b', '958e98c5-7974-43fe-9aad-b0a1f4b9edd3', '十日', 'とおか', 'ngày mùng 10', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('bd228b3e-edfb-48da-b08a-eccff5bcd47b', '958e98c5-7974-43fe-9aad-b0a1f4b9edd3', '十', 'とお', 'mười cái, mười chiếc', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('bd228b3e-edfb-48da-b08a-eccff5bcd47b', '87efe8b4-c2a4-462a-908e-9cdb9d10cc13', '十', 'じゅう', 'mười', false, 4, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note)
values ('bd228b3e-edfb-48da-b08a-eccff5bcd47b', 'f4dac193-0223-4e83-8995-90eecd12706b', '十分な', 'じゅうぶんな', 'đầy đủ, hoàn toàn', false, 4, 'pdf', 'needs_review', 'PDF ghi nhãn âm đọc "ジッ" cạnh từ 十分な, nhưng nghĩa "đầy đủ, hoàn toàn" (十分 = jūbun) đọc chuẩn là じゅうぶん (dùng âm ジュウ + 分[ぶん]), không phải じっ (âm じっ chỉ dùng ở từ khác như 十回=じっかい, hoặc 十分 nghĩa "10 phút"=じっぷん — khác nghĩa "đầy đủ" ở đây). Giữ nguyên nhãn như PDF, đề xuất sửa lại âm đọc thành じゅうぶん (ジュウ).');

-- ---------- Bài tập generated (choose_reading / choose_word_meaning /
-- choose_kanji_from_meaning / write_reading) — chỉ dùng dữ liệu thật đã
-- seed ở trên (kanji/âm đọc/từ ghép), không bịa nội dung. match_kanji_word
-- không seed tĩnh — mini-game ghép cặp lấy trực tiếp jp_kanji_words lúc chạy.
-- ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 一 (NHẤT) có âm ON (chính) là gì?', 'じっ', 'に', 'いち', 'さん', 'いち', 'generated' from jp_kanji where id = 'ed858c40-c982-447b-a548-89761b0f0825';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "một, số 1"?', '七', '四', '三', '一', '一', 'generated' from jp_kanji where id = 'ed858c40-c982-447b-a548-89761b0f0825';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"一人で" có nghĩa là gì?', 'hai người', 'ngày mùng 1', 'một mình, tự mình', 'một', 'một mình, tự mình', 'generated' from jp_kanji where id = 'ed858c40-c982-447b-a548-89761b0f0825';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 一つ', 'ひとつ', 'generated' from jp_kanji where id = 'ed858c40-c982-447b-a548-89761b0f0825';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 二 (NHỊ) có âm ON (chính) là gì?', 'ご', 'く', 'に', 'じっ', 'に', 'generated' from jp_kanji where id = 'c64a3367-c53b-44bd-9742-709b55838df7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hai, số 2"?', '二', '八', '一', '六', '二', 'generated' from jp_kanji where id = 'c64a3367-c53b-44bd-9742-709b55838df7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"二つ" có nghĩa là gì?', 'năm cái, năm chiếc', 'hai cái, hai chiếc', 'ngày mùng 3', 'sáu cái, sáu chiếc', 'hai cái, hai chiếc', 'generated' from jp_kanji where id = 'c64a3367-c53b-44bd-9742-709b55838df7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 二人', 'ふたり', 'generated' from jp_kanji where id = 'c64a3367-c53b-44bd-9742-709b55838df7';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 三 (TAM) có âm ON (chính) là gì?', 'さん', 'じっ', 'に', 'はち', 'さん', 'generated' from jp_kanji where id = '5a925f32-4cd7-44aa-9669-d5191aff08ac';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ba, số 3"?', '九', '六', '一', '三', '三', 'generated' from jp_kanji where id = '5a925f32-4cd7-44aa-9669-d5191aff08ac';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"三日" có nghĩa là gì?', 'ngày mùng 7', 'ngày mùng 3', 'ngày mùng 5', 'mười', 'ngày mùng 3', 'generated' from jp_kanji where id = '5a925f32-4cd7-44aa-9669-d5191aff08ac';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 三つ', 'みっつ', 'generated' from jp_kanji where id = '5a925f32-4cd7-44aa-9669-d5191aff08ac';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 四 (TỨ) có âm ON (chính) là gì?', 'いち', 'ご', 'ろく', 'し', 'し', 'generated' from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bốn, số 4"?', '五', '八', '四', '六', '四', 'generated' from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"四" có nghĩa là gì?', 'sáu', 'năm cái, năm chiếc', 'tháng 3', 'bốn', 'bốn', 'generated' from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 四日', 'よっか', 'generated' from jp_kanji where id = '386f829d-0e50-46a7-ba75-ed47331a2a76';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 五 (NGŨ) có âm ON (chính) là gì?', 'ご', 'し', 'く', 'さん', 'ご', 'generated' from jp_kanji where id = 'cd07bc88-7a84-4866-9cf6-86d53c85c577';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "năm, số 5"?', '十', '七', '五', '四', '五', 'generated' from jp_kanji where id = 'cd07bc88-7a84-4866-9cf6-86d53c85c577';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"五つ" có nghĩa là gì?', 'ngày mùng 1', 'tháng 7', 'năm cái, năm chiếc', 'ngày mùng 6', 'năm cái, năm chiếc', 'generated' from jp_kanji where id = 'cd07bc88-7a84-4866-9cf6-86d53c85c577';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 五日', 'いつか', 'generated' from jp_kanji where id = 'cd07bc88-7a84-4866-9cf6-86d53c85c577';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 六 (LỤC) có âm ON (chính) là gì?', 'ろく', 'しち', 'じゅう', 'し', 'ろく', 'generated' from jp_kanji where id = '0e0ede27-a407-4683-a703-7418d3509173';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sáu, số 6"?', '六', '二', '五', '三', '六', 'generated' from jp_kanji where id = '0e0ede27-a407-4683-a703-7418d3509173';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"六日" có nghĩa là gì?', 'tháng 7', 'ngày mùng 7', 'ngày mùng 6', 'ngày mùng 8', 'ngày mùng 6', 'generated' from jp_kanji where id = '0e0ede27-a407-4683-a703-7418d3509173';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 六つ', 'むっつ', 'generated' from jp_kanji where id = '0e0ede27-a407-4683-a703-7418d3509173';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 七 (THẤT) có âm ON (chính) là gì?', 'じっ', 'しち', 'いち', 'に', 'しち', 'generated' from jp_kanji where id = '9dae0bad-67bd-461e-84f3-9620d52aed67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bảy, số 7"?', '七', '八', '二', '四', '七', 'generated' from jp_kanji where id = '9dae0bad-67bd-461e-84f3-9620d52aed67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"七日" có nghĩa là gì?', 'ngày mùng 10', 'mười', 'bốn cái, bốn chiếc', 'ngày mùng 7', 'ngày mùng 7', 'generated' from jp_kanji where id = '9dae0bad-67bd-461e-84f3-9620d52aed67';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 七つ', 'ななつ', 'generated' from jp_kanji where id = '9dae0bad-67bd-461e-84f3-9620d52aed67';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 八 (BÁT) có âm ON (chính) là gì?', 'ご', 'じっ', 'はち', 'く', 'はち', 'generated' from jp_kanji where id = '55e33787-0dff-4016-a5b2-83baa1a71ced';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tám, số 8"?', '四', '七', '三', '八', '八', 'generated' from jp_kanji where id = '55e33787-0dff-4016-a5b2-83baa1a71ced';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"八つ" có nghĩa là gì?', 'chín', 'tám cái, tám chiếc', 'hai người', 'ba cái, ba chiếc', 'tám cái, tám chiếc', 'generated' from jp_kanji where id = '55e33787-0dff-4016-a5b2-83baa1a71ced';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 八日', 'ようか', 'generated' from jp_kanji where id = '55e33787-0dff-4016-a5b2-83baa1a71ced';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 九 (CỬU) có âm ON (chính) là gì?', 'じっ', 'さん', 'ろく', 'きゅう', 'きゅう', 'generated' from jp_kanji where id = '70bdf280-471a-4ee4-bad6-9da88b45aae5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chín, số 9"?', '十', '九', '八', '一', '九', 'generated' from jp_kanji where id = '70bdf280-471a-4ee4-bad6-9da88b45aae5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"九日" có nghĩa là gì?', 'ngày mùng 4', 'một', 'đầy đủ, hoàn toàn', 'ngày mùng 9', 'ngày mùng 9', 'generated' from jp_kanji where id = '70bdf280-471a-4ee4-bad6-9da88b45aae5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 九つ', 'ここのつ', 'generated' from jp_kanji where id = '70bdf280-471a-4ee4-bad6-9da88b45aae5';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 十 (THẬP) có âm ON (chính) là gì?', 'じゅう', 'さん', 'きゅう', 'に', 'じゅう', 'generated' from jp_kanji where id = 'bd228b3e-edfb-48da-b08a-eccff5bcd47b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mười, số 10"?', '九', '三', '十', '八', '十', 'generated' from jp_kanji where id = 'bd228b3e-edfb-48da-b08a-eccff5bcd47b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"十日" có nghĩa là gì?', 'ngày mùng 10', 'ngày mùng 5', 'bảy cái, bảy chiếc', 'sáu', 'ngày mùng 10', 'generated' from jp_kanji where id = 'bd228b3e-edfb-48da-b08a-eccff5bcd47b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 十', 'とお', 'generated' from jp_kanji where id = 'bd228b3e-edfb-48da-b08a-eccff5bcd47b';


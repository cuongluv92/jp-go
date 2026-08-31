-- ============================================================
-- jp-go — Kanji N4, round 1 (PILOT — 10 kanji, trang in 2-3).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 1 - 漢字.
-- Giống format N5 (On/Kun rõ ràng, không cần suy luận như N2).
-- 歌 (CA) trải 2 trang: kun ở trang 2, on カ ở trang 3.
-- ============================================================

-- ---------- 会 (HỘI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', 'N4', '会', 'HỘI', 'hội, gặp gỡ, hiệp hội', 6, '人', '会 giống hình mái nhà che 2 người gặp nhau bên dưới.', NULL, '{"合"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'fca7eb4e-c5fe-4e15-9978-8f50f1a370e0', id, 'kun', 'あう', true, 2, 'ok', NULL from jp_kanji where id = '84a8c91d-acc6-4ba0-a711-d7a71f4fbf64'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', 'fca7eb4e-c5fe-4e15-9978-8f50f1a370e0', '会う', 'あう', 'gặp, gặp nhau', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '71f8955f-1796-4f19-ac1d-48a70250bf5a', id, 'on', 'カイ', true, 2, 'ok', NULL from jp_kanji where id = '84a8c91d-acc6-4ba0-a711-d7a71f4fbf64'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '会社', 'かいしゃ', 'công ty', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '会社員', 'かいしゃいん', 'nhân viên công ty', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '会議', 'かいぎ', 'cuộc họp', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '会議室', 'かいぎしつ', 'phòng họp', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '運動会', 'うんどうかい', 'hội thể thao', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '国会議事堂', 'こっかいぎじどう', 'tòa nhà quốc hội', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '展覧会', 'てんらんかい', 'hội triển lãm', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '教会', 'きょうかい', 'giáo hội, nhà thờ', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '都会', 'とかい', 'thành phố, đô thị', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '機会', 'きかい', 'cơ hội', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '会場', 'かいじょう', 'hội trường', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '社会', 'しゃかい', 'xã hội', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '忘年会', 'ぼうねんかい', 'tiệc cuối năm, tất niên', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '新年会', 'しんねんかい', 'tiệc năm mới', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '二次会', 'にじかい', 'tăng hai', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '発表会', 'はっぴょうかい', 'buổi giới thiệu, buổi ra mắt', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '大会', 'たいかい', 'đại hội', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('84a8c91d-acc6-4ba0-a711-d7a71f4fbf64', '71f8955f-1796-4f19-ac1d-48a70250bf5a', '講演会', 'こうえんかい', 'buổi thuyết trình', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b8839a16-c961-4f5c-9b08-c89be5dad2bd', id, 'on', 'エ', false, 2, 'ok', NULL from jp_kanji where id = '84a8c91d-acc6-4ba0-a711-d7a71f4fbf64'
on conflict (id) do nothing;

-- ---------- 動 (ĐỘNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('72252912-4e98-4626-8fb7-d3971b158687', 'N4', '動', 'ĐỘNG', 'động, cử động, vận động', 11, '力', '動 = 重 (nặng) + 力 (sức lực) — cần sức lực mới làm vật nặng chuyển động.', NULL, '{"働","重"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0abedb23-f788-4cae-b8ae-44d4a441119d', id, 'kun', 'うごく', true, 2, 'ok', NULL from jp_kanji where id = '72252912-4e98-4626-8fb7-d3971b158687'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('72252912-4e98-4626-8fb7-d3971b158687', '0abedb23-f788-4cae-b8ae-44d4a441119d', '動く', 'うごく', 'cử động, di chuyển', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4cd2b328-80d7-4794-8d73-1409b51b8e03', id, 'kun', 'うごかす', false, 2, 'ok', NULL from jp_kanji where id = '72252912-4e98-4626-8fb7-d3971b158687'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('72252912-4e98-4626-8fb7-d3971b158687', '4cd2b328-80d7-4794-8d73-1409b51b8e03', '動かす', 'うごかす', 'làm chuyển động, vận hành', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e5cb0598-87f7-464b-9015-af68341bc615', id, 'on', 'ドウ', true, 2, 'ok', NULL from jp_kanji where id = '72252912-4e98-4626-8fb7-d3971b158687'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('72252912-4e98-4626-8fb7-d3971b158687', 'e5cb0598-87f7-464b-9015-af68341bc615', '自動販売機', 'じどうはんばいき', 'máy bán hàng tự động', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('72252912-4e98-4626-8fb7-d3971b158687', 'e5cb0598-87f7-464b-9015-af68341bc615', '動物', 'どうぶつ', 'động vật', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('72252912-4e98-4626-8fb7-d3971b158687', 'e5cb0598-87f7-464b-9015-af68341bc615', '動物園', 'どうぶつえん', 'sở thú', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('72252912-4e98-4626-8fb7-d3971b158687', 'e5cb0598-87f7-464b-9015-af68341bc615', '自動車', 'じどうしゃ', 'xe ô tô', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('72252912-4e98-4626-8fb7-d3971b158687', 'e5cb0598-87f7-464b-9015-af68341bc615', '運動する', 'うんどうする', 'vận động', false, 2, 'pdf', 'ok', NULL);

-- ---------- 歩 (BỘ) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('3e89ba12-8bac-4013-80c6-a8c1df68cdd7', 'N4', '歩', 'BỘ', 'đi bộ, bước chân', 8, '止', '歩 = 止 (dừng) hơi biến dạng + thêm nét — hình ảnh 2 bước chân nối tiếp nhau.', NULL, '{"止","走"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'b5b7b9b8-74ef-48c4-934a-af40cc5640b3', id, 'kun', 'あゆむ', false, 2, 'ok', NULL from jp_kanji where id = '3e89ba12-8bac-4013-80c6-a8c1df68cdd7'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '3df02da7-c285-467e-b862-4f5ea84488a7', id, 'kun', 'あるく', true, 2, 'ok', NULL from jp_kanji where id = '3e89ba12-8bac-4013-80c6-a8c1df68cdd7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3e89ba12-8bac-4013-80c6-a8c1df68cdd7', '3df02da7-c285-467e-b862-4f5ea84488a7', '歩く', 'あるく', 'đi bộ', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '0a1783d6-e44a-4103-a392-203221454350', id, 'on', 'ホ', true, 2, 'ok', NULL from jp_kanji where id = '3e89ba12-8bac-4013-80c6-a8c1df68cdd7'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('3e89ba12-8bac-4013-80c6-a8c1df68cdd7', '0a1783d6-e44a-4103-a392-203221454350', '散歩する', 'さんぽする', 'đi dạo', false, 2, 'pdf', 'ok', NULL);

-- ---------- 急 (CẤP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a', 'N4', '急', 'CẤP', 'gấp, khẩn cấp, đột nhiên', 9, '心', '急 có bộ 心 (tim) ở dưới — tim đập gấp gáp khi vội vàng.', NULL, '{"息","怠"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '004e2dad-baa4-498f-a9e6-c95f78dff937', id, 'kun', 'いそぐ', true, 2, 'ok', NULL from jp_kanji where id = '4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a', '004e2dad-baa4-498f-a9e6-c95f78dff937', '急ぐ', 'いそぐ', 'khẩn trương, nhanh chóng', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'd065bf58-5bc6-4867-989e-d80550d344ca', id, 'on', 'キュウ', true, 2, 'ok', NULL from jp_kanji where id = '4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a', 'd065bf58-5bc6-4867-989e-d80550d344ca', '急行', 'きゅうこう', 'tốc hành', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a', 'd065bf58-5bc6-4867-989e-d80550d344ca', '特急', 'とっきゅう', 'hỏa tốc, thần tốc', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a', 'd065bf58-5bc6-4867-989e-d80550d344ca', '急に', 'きゅうに', 'đột nhiên, bất chợt', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a', 'd065bf58-5bc6-4867-989e-d80550d344ca', '救急車', 'きゅうきゅうしゃ', 'xe cấp cứu', false, 2, 'pdf', 'ok', NULL);

-- ---------- 切 (THIẾT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('b1f4f53a-d72d-4165-b312-e2ad35923782', 'N4', '切', 'THIẾT', 'cắt, thiết tha, quan trọng', 4, '刀', '切 có bộ 刀 (dao) bên phải — dùng dao để cắt (切る).', NULL, '{"功","刀"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4a3f7e0f-6e0c-4ad0-a16a-a4add3ce0150', id, 'kun', 'きる', true, 2, 'ok', NULL from jp_kanji where id = 'b1f4f53a-d72d-4165-b312-e2ad35923782'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b1f4f53a-d72d-4165-b312-e2ad35923782', '4a3f7e0f-6e0c-4ad0-a16a-a4add3ce0150', '切符', 'きっぷ', 'vé', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b1f4f53a-d72d-4165-b312-e2ad35923782', '4a3f7e0f-6e0c-4ad0-a16a-a4add3ce0150', '切手', 'きって', 'tem', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b1f4f53a-d72d-4165-b312-e2ad35923782', '4a3f7e0f-6e0c-4ad0-a16a-a4add3ce0150', '締め切り', 'しめきり', 'hạn cuối, deadline', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '01cca4b6-f0e7-4fc0-9531-88f7549e517b', id, 'kun', 'きれる', false, 2, 'ok', NULL from jp_kanji where id = 'b1f4f53a-d72d-4165-b312-e2ad35923782'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b1f4f53a-d72d-4165-b312-e2ad35923782', '01cca4b6-f0e7-4fc0-9531-88f7549e517b', '缶切り', 'かんきり', 'đồ khui nắp', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4c046632-8cd7-425c-b3c8-6209b0f1ed28', id, 'on', 'セツ', true, 2, 'ok', NULL from jp_kanji where id = 'b1f4f53a-d72d-4165-b312-e2ad35923782'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b1f4f53a-d72d-4165-b312-e2ad35923782', '4c046632-8cd7-425c-b3c8-6209b0f1ed28', '親切な', 'しんせつな', 'thân thiện', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('b1f4f53a-d72d-4165-b312-e2ad35923782', '4c046632-8cd7-425c-b3c8-6209b0f1ed28', '大切な', 'たいせつな', 'quan trọng', false, 2, 'pdf', 'ok', NULL);

-- ---------- 送 (TỐNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('a8c6a008-f4a7-4a99-81f8-191d50f250f6', 'N4', '送', 'TỐNG', 'gửi, tiễn đưa', 9, '辶', '送 có bộ 辶 (đi) — mang đồ đi để gửi cho ai đó.', NULL, '{"迷","近"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '84b3c66c-1bd3-4a97-9a6f-a8efa58e188e', id, 'kun', 'おくる', true, 2, 'ok', NULL from jp_kanji where id = 'a8c6a008-f4a7-4a99-81f8-191d50f250f6'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('a8c6a008-f4a7-4a99-81f8-191d50f250f6', '84b3c66c-1bd3-4a97-9a6f-a8efa58e188e', '送る', 'おくる', 'gửi', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '4d1d42d0-05cd-4b72-b65d-0ec35c488e6b', id, 'on', 'ソウ', false, 2, 'ok', NULL from jp_kanji where id = 'a8c6a008-f4a7-4a99-81f8-191d50f250f6'
on conflict (id) do nothing;

-- ---------- 習 (TẬP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('536f81e3-62e5-4642-8206-fa88c3d6955d', 'N4', '習', 'TẬP', 'học tập, luyện tập, thói quen', 11, '羽', '習 có bộ 羽 (lông cánh) — chim non học vỗ cánh lặp đi lặp lại.', NULL, '{"羽","翌"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '17fb3e51-dec4-4a3a-a800-1adada271961', id, 'kun', 'ならう', true, 2, 'ok', NULL from jp_kanji where id = '536f81e3-62e5-4642-8206-fa88c3d6955d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('536f81e3-62e5-4642-8206-fa88c3d6955d', '17fb3e51-dec4-4a3a-a800-1adada271961', '習う', 'ならう', 'học', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'adf01838-36ff-4cfa-bba2-d2cd8e285632', id, 'on', 'シュウ', true, 2, 'ok', NULL from jp_kanji where id = '536f81e3-62e5-4642-8206-fa88c3d6955d'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('536f81e3-62e5-4642-8206-fa88c3d6955d', 'adf01838-36ff-4cfa-bba2-d2cd8e285632', '練習', 'れんしゅう', 'luyện tập, thực hành', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('536f81e3-62e5-4642-8206-fa88c3d6955d', 'adf01838-36ff-4cfa-bba2-d2cd8e285632', '予習する', 'よしゅうする', 'soạn bài', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('536f81e3-62e5-4642-8206-fa88c3d6955d', 'adf01838-36ff-4cfa-bba2-d2cd8e285632', '復習する', 'ふくしゅうする', 'ôn tập', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('536f81e3-62e5-4642-8206-fa88c3d6955d', 'adf01838-36ff-4cfa-bba2-d2cd8e285632', '習慣', 'しゅうかん', 'thói quen', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('536f81e3-62e5-4642-8206-fa88c3d6955d', 'adf01838-36ff-4cfa-bba2-d2cd8e285632', '習字', 'しゅうじ', 'luyện chữ', false, 2, 'pdf', 'ok', NULL);

-- ---------- 歌 (CA) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('962fd959-5f05-4561-b502-ee0c50b36709', 'N4', '歌', 'CA', 'ca hát, bài hát', 14, '欠', '歌 có bộ 欠 (há miệng) bên phải — há miệng ra để hát.', NULL, '{"歓","軟"}', 2, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'bbda8a1a-fe9e-4890-9773-ad7d3ed6dc28', id, 'kun', 'うたう', true, 2, 'ok', NULL from jp_kanji where id = '962fd959-5f05-4561-b502-ee0c50b36709'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('962fd959-5f05-4561-b502-ee0c50b36709', 'bbda8a1a-fe9e-4890-9773-ad7d3ed6dc28', '歌', 'うた', 'bài hát', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('962fd959-5f05-4561-b502-ee0c50b36709', 'bbda8a1a-fe9e-4890-9773-ad7d3ed6dc28', '歌う', 'うたう', 'hát', false, 2, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '496bd5c7-16ee-41c9-84ee-f27bf39565c7', id, 'on', 'カ', true, 3, 'ok', NULL from jp_kanji where id = '962fd959-5f05-4561-b502-ee0c50b36709'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('962fd959-5f05-4561-b502-ee0c50b36709', '496bd5c7-16ee-41c9-84ee-f27bf39565c7', '歌手', 'かしゅ', 'ca sĩ', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('962fd959-5f05-4561-b502-ee0c50b36709', '496bd5c7-16ee-41c9-84ee-f27bf39565c7', '歌舞伎', 'かぶき', 'kịch Kabuki', false, 3, 'pdf', 'ok', NULL);

-- ---------- 国 (QUỐC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('305ed556-8698-436e-b578-33f5cfe629f5', 'N4', '国', 'QUỐC', 'quốc gia, nước', 8, '囗', '国 có bộ 囗 (bao vây) bọc ngoài 玉 (ngọc) — đất nước là vùng đất quý được bảo vệ.', NULL, '{"圏","囲"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'e522fb73-2f36-4201-a7de-71693fcc6b56', id, 'kun', 'くに', true, 3, 'ok', NULL from jp_kanji where id = '305ed556-8698-436e-b578-33f5cfe629f5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('305ed556-8698-436e-b578-33f5cfe629f5', 'e522fb73-2f36-4201-a7de-71693fcc6b56', 'お国', 'おくに', 'quốc gia, đất nước', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select 'c4a76359-3ba8-49ea-ae01-8c59f6cdfbb1', id, 'on', 'コク', true, 3, 'ok', NULL from jp_kanji where id = '305ed556-8698-436e-b578-33f5cfe629f5'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('305ed556-8698-436e-b578-33f5cfe629f5', 'c4a76359-3ba8-49ea-ae01-8c59f6cdfbb1', '外国', 'がいこく', 'nước ngoài', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('305ed556-8698-436e-b578-33f5cfe629f5', 'c4a76359-3ba8-49ea-ae01-8c59f6cdfbb1', '韓国', 'かんこく', 'Hàn Quốc', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('305ed556-8698-436e-b578-33f5cfe629f5', 'c4a76359-3ba8-49ea-ae01-8c59f6cdfbb1', '中国', 'ちゅうごく', 'Trung Quốc', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('305ed556-8698-436e-b578-33f5cfe629f5', 'c4a76359-3ba8-49ea-ae01-8c59f6cdfbb1', '国際', 'こくさい', 'quốc tế', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('305ed556-8698-436e-b578-33f5cfe629f5', 'c4a76359-3ba8-49ea-ae01-8c59f6cdfbb1', '国連', 'こくれん', 'liên hợp quốc', false, 3, 'pdf', 'ok', NULL);

-- ---------- 医 (Y) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, mnemonic_hint_vi, common_mistake, similar_kanji, source_page, source_type, review_status) values ('21e9d39f-1c53-4490-90c3-9248d6d26fea', 'N4', '医', 'Y', 'y học, chữa bệnh', 7, '匚', '医 có bộ 匚 (hộp đựng) — hộp đựng dụng cụ y tế của bác sĩ.', NULL, '{"区","矢"}', 3, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '7604367d-a892-4417-9cb6-3685dbd4e623', id, 'kun', NULL, false, 3, 'ok', NULL from jp_kanji where id = '21e9d39f-1c53-4490-90c3-9248d6d26fea'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status, correction_note) select '466841a3-03ed-4b36-878d-96c73499c534', id, 'on', 'イ', true, 3, 'ok', NULL from jp_kanji where id = '21e9d39f-1c53-4490-90c3-9248d6d26fea'
on conflict (id) do nothing;
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('21e9d39f-1c53-4490-90c3-9248d6d26fea', '466841a3-03ed-4b36-878d-96c73499c534', '医者', 'いしゃ', 'bác sĩ', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('21e9d39f-1c53-4490-90c3-9248d6d26fea', '466841a3-03ed-4b36-878d-96c73499c534', '歯医者', 'はいしゃ', 'bác sĩ nha khoa', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('21e9d39f-1c53-4490-90c3-9248d6d26fea', '466841a3-03ed-4b36-878d-96c73499c534', '医学', 'いがく', 'y học', false, 3, 'pdf', 'ok', NULL);
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status, correction_note) values ('21e9d39f-1c53-4490-90c3-9248d6d26fea', '466841a3-03ed-4b36-878d-96c73499c534', '医学部', 'いがくぶ', 'khoa y, ngành y', false, 3, 'pdf', 'ok', NULL);

-- ---------- Bài tập generated (choose_reading / choose_kanji_from_meaning /
-- choose_word_meaning / write_reading) — chỉ dùng dữ liệu thật đã seed. ----------

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 会 (HỘI) có âm chính là gì?', 'エ', 'あう', 'キュウ', 'ならう', 'あう', 'generated' from jp_kanji where id = '84a8c91d-acc6-4ba0-a711-d7a71f4fbf64';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hội, gặp gỡ, hiệp hội"?', '歩', '歌', '動', '会', '会', 'generated' from jp_kanji where id = '84a8c91d-acc6-4ba0-a711-d7a71f4fbf64';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"会う" có nghĩa là gì?', 'đi dạo', 'xã hội', 'quốc gia, đất nước', 'gặp, gặp nhau', 'gặp, gặp nhau', 'generated' from jp_kanji where id = '84a8c91d-acc6-4ba0-a711-d7a71f4fbf64';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 会社', 'かいしゃ', 'generated' from jp_kanji where id = '84a8c91d-acc6-4ba0-a711-d7a71f4fbf64';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 動 (ĐỘNG) có âm chính là gì?', 'うごく', 'セツ', 'ホ', 'ドウ', 'うごく', 'generated' from jp_kanji where id = '72252912-4e98-4626-8fb7-d3971b158687';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "động, cử động, vận động"?', '動', '国', '送', '医', '動', 'generated' from jp_kanji where id = '72252912-4e98-4626-8fb7-d3971b158687';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"動く" có nghĩa là gì?', 'cử động, di chuyển', 'tăng hai', 'liên hợp quốc', 'y học', 'cử động, di chuyển', 'generated' from jp_kanji where id = '72252912-4e98-4626-8fb7-d3971b158687';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 動かす', 'うごかす', 'generated' from jp_kanji where id = '72252912-4e98-4626-8fb7-d3971b158687';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 歩 (BỘ) có âm chính là gì?', 'きれる', 'くに', 'うたう', 'あるく', 'あるく', 'generated' from jp_kanji where id = '3e89ba12-8bac-4013-80c6-a8c1df68cdd7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đi bộ, bước chân"?', '歩', '会', '急', '習', '歩', 'generated' from jp_kanji where id = '3e89ba12-8bac-4013-80c6-a8c1df68cdd7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"歩く" có nghĩa là gì?', 'Trung Quốc', 'liên hợp quốc', 'đi bộ', 'tốc hành', 'đi bộ', 'generated' from jp_kanji where id = '3e89ba12-8bac-4013-80c6-a8c1df68cdd7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 散歩する', 'さんぽする', 'generated' from jp_kanji where id = '3e89ba12-8bac-4013-80c6-a8c1df68cdd7';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 急 (CẤP) có âm chính là gì?', 'ならう', 'いそぐ', 'コク', 'キュウ', 'いそぐ', 'generated' from jp_kanji where id = '4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "gấp, khẩn cấp, đột nhiên"?', '動', '歩', '切', '急', '急', 'generated' from jp_kanji where id = '4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"急ぐ" có nghĩa là gì?', 'sở thú', 'khẩn trương, nhanh chóng', 'liên hợp quốc', 'hỏa tốc, thần tốc', 'khẩn trương, nhanh chóng', 'generated' from jp_kanji where id = '4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 急行', 'きゅうこう', 'generated' from jp_kanji where id = '4ab0edcd-90c1-4f9e-aff0-ffc5d298a23a';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 切 (THIẾT) có âm chính là gì?', 'きる', 'カ', 'イ', 'ドウ', 'きる', 'generated' from jp_kanji where id = 'b1f4f53a-d72d-4165-b312-e2ad35923782';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cắt, thiết tha, quan trọng"?', '急', '歌', '切', '医', '切', 'generated' from jp_kanji where id = 'b1f4f53a-d72d-4165-b312-e2ad35923782';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"切符" có nghĩa là gì?', 'tăng hai', 'quốc tế', 'kịch Kabuki', 'vé', 'vé', 'generated' from jp_kanji where id = 'b1f4f53a-d72d-4165-b312-e2ad35923782';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 切手', 'きって', 'generated' from jp_kanji where id = 'b1f4f53a-d72d-4165-b312-e2ad35923782';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 送 (TỐNG) có âm chính là gì?', 'おくる', 'くに', 'ならう', 'あゆむ', 'おくる', 'generated' from jp_kanji where id = 'a8c6a008-f4a7-4a99-81f8-191d50f250f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "gửi, tiễn đưa"?', '医', '歩', '送', '切', '送', 'generated' from jp_kanji where id = 'a8c6a008-f4a7-4a99-81f8-191d50f250f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"送る" có nghĩa là gì?', 'thành phố, đô thị', 'làm chuyển động, vận hành', 'hỏa tốc, thần tốc', 'gửi', 'gửi', 'generated' from jp_kanji where id = 'a8c6a008-f4a7-4a99-81f8-191d50f250f6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 送る', 'おくる', 'generated' from jp_kanji where id = 'a8c6a008-f4a7-4a99-81f8-191d50f250f6';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 習 (TẬP) có âm chính là gì?', 'いそぐ', 'きる', 'ホ', 'ならう', 'ならう', 'generated' from jp_kanji where id = '536f81e3-62e5-4642-8206-fa88c3d6955d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "học tập, luyện tập, thói quen"?', '動', '歩', '習', '送', '習', 'generated' from jp_kanji where id = '536f81e3-62e5-4642-8206-fa88c3d6955d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"習う" có nghĩa là gì?', 'học', 'hỏa tốc, thần tốc', 'hạn cuối, deadline', 'bác sĩ', 'học', 'generated' from jp_kanji where id = '536f81e3-62e5-4642-8206-fa88c3d6955d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 練習', 'れんしゅう', 'generated' from jp_kanji where id = '536f81e3-62e5-4642-8206-fa88c3d6955d';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 歌 (CA) có âm chính là gì?', 'うたう', 'イ', 'あう', 'ドウ', 'うたう', 'generated' from jp_kanji where id = '962fd959-5f05-4561-b502-ee0c50b36709';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ca hát, bài hát"?', '国', '会', '歌', '習', '歌', 'generated' from jp_kanji where id = '962fd959-5f05-4561-b502-ee0c50b36709';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"歌" có nghĩa là gì?', 'vận động', 'quốc gia, đất nước', 'bài hát', 'hạn cuối, deadline', 'bài hát', 'generated' from jp_kanji where id = '962fd959-5f05-4561-b502-ee0c50b36709';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 歌う', 'うたう', 'generated' from jp_kanji where id = '962fd959-5f05-4561-b502-ee0c50b36709';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 国 (QUỐC) có âm chính là gì?', 'きる', 'キュウ', 'くに', 'うごく', 'くに', 'generated' from jp_kanji where id = '305ed556-8698-436e-b578-33f5cfe629f5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "quốc gia, nước"?', '習', '歩', '急', '国', '国', 'generated' from jp_kanji where id = '305ed556-8698-436e-b578-33f5cfe629f5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お国" có nghĩa là gì?', 'cơ hội', 'thói quen', 'khoa y, ngành y', 'quốc gia, đất nước', 'quốc gia, đất nước', 'generated' from jp_kanji where id = '305ed556-8698-436e-b578-33f5cfe629f5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 外国', 'がいこく', 'generated' from jp_kanji where id = '305ed556-8698-436e-b578-33f5cfe629f5';

insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 医 (Y) có âm chính là gì?', 'カイ', 'うたう', 'イ', 'あゆむ', 'イ', 'generated' from jp_kanji where id = '21e9d39f-1c53-4490-90c3-9248d6d26fea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "y học, chữa bệnh"?', '習', '会', '医', '送', '医', 'generated' from jp_kanji where id = '21e9d39f-1c53-4490-90c3-9248d6d26fea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"医者" có nghĩa là gì?', 'liên hợp quốc', 'bác sĩ', 'tăng hai', 'tòa nhà quốc hội', 'bác sĩ', 'generated' from jp_kanji where id = '21e9d39f-1c53-4490-90c3-9248d6d26fea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 歯医者', 'はいしゃ', 'generated' from jp_kanji where id = '21e9d39f-1c53-4490-90c3-9248d6d26fea';


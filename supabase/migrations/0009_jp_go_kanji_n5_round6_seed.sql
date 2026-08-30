-- ============================================================
-- jp-go — Kanji N5 đợt 6 (cuối): 出,入,立,言,話,力,長,明,暗,元,
-- 好 (trang 13) của PDF "Tổng hợp kiến thức N5" (Dũng Mori).
-- Additive, idempotent qua ON CONFLICT. Hoàn tất toàn bộ phần
-- Kanji N5 (10 trang PDF, tổng ~98 kanji).
-- ============================================================

-- ---------- 出 (XUẤT) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', 'N5', '出', 'XUẤT', 'ra, xuất hiện', 5, '凵', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c927e17b-1e9c-4dd9-afeb-f78d98644e5b', id, 'kun', 'で', true, 13, 'ok' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'a6d0c7b1-6d11-4b81-b457-483ea105ae62', id, 'kun', 'だ', false, 13, 'ok' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7a69ed72-bed2-40c2-8f00-bf951fd0729f', id, 'on', 'しゅつ', true, 13, 'ok' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '9afe5e93-74bb-4910-8c43-957f03a1c5f0', id, 'on', 'しゅ', false, 13, 'ok' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', 'c927e17b-1e9c-4dd9-afeb-f78d98644e5b', 'お出かけ', 'おでかけ', 'ra ngoài', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', 'c927e17b-1e9c-4dd9-afeb-f78d98644e5b', '出ます', 'でます', 'đi ra, xuất hiện', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', 'c927e17b-1e9c-4dd9-afeb-f78d98644e5b', '出かけます', 'でかけます', 'đi ra ngoài', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', 'c927e17b-1e9c-4dd9-afeb-f78d98644e5b', '出口', 'でぐち', 'cửa ra', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', 'a6d0c7b1-6d11-4b81-b457-483ea105ae62', '引き出し', 'ひきだし', 'ngăn kéo', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', 'a6d0c7b1-6d11-4b81-b457-483ea105ae62', '出します', 'だします', 'đưa ra, nộp', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', '7a69ed72-bed2-40c2-8f00-bf951fd0729f', '出張', 'しゅっちょう', 'đi công tác', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', '7a69ed72-bed2-40c2-8f00-bf951fd0729f', '出席します', 'しゅっせきします', 'tham gia', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', '7a69ed72-bed2-40c2-8f00-bf951fd0729f', '輸出します', 'ゆしゅつします', 'xuất khẩu', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('f0390758-228a-4219-ad14-9b9985e408b5', '7a69ed72-bed2-40c2-8f00-bf951fd0729f', '出発します', 'しゅっぱつします', 'xuất phát', false, 13, 'pdf', 'ok');

-- ---------- 入 (NHẬP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', 'N5', '入', 'NHẬP', 'vào, nhập', 2, '入', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '684f3936-5ff6-4306-9844-757cd3f333d5', id, 'kun', 'い', true, 13, 'ok' from jp_kanji where id = 'c330d260-f2d6-4d19-bd77-b4f83cd59bd9'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c4a9839d-68dc-4133-aafc-4e9813e982e3', id, 'kun', 'はい', false, 13, 'ok' from jp_kanji where id = 'c330d260-f2d6-4d19-bd77-b4f83cd59bd9'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '5e9c3f2d-a3d8-41cc-9458-3e7a69479b7d', id, 'on', 'にゅう', true, 13, 'ok' from jp_kanji where id = 'c330d260-f2d6-4d19-bd77-b4f83cd59bd9'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', 'c4a9839d-68dc-4133-aafc-4e9813e982e3', '入ります', 'はいります', 'đi vào, vào', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '684f3936-5ff6-4306-9844-757cd3f333d5', '入れます', 'いれます', 'cho vào', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '684f3936-5ff6-4306-9844-757cd3f333d5', '押し入れ', 'おしいれ', 'tủ tường kiểu Nhật', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '684f3936-5ff6-4306-9844-757cd3f333d5', '入り口', 'いりぐち', 'lối vào', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '684f3936-5ff6-4306-9844-757cd3f333d5', '立入禁止', 'たちいりきんし', 'cấm đi vào', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '5e9c3f2d-a3d8-41cc-9458-3e7a69479b7d', '入力します', 'にゅうりょくします', 'nhập, đưa vào', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '5e9c3f2d-a3d8-41cc-9458-3e7a69479b7d', '輸入します', 'ゆにゅうします', 'nhập khẩu', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '5e9c3f2d-a3d8-41cc-9458-3e7a69479b7d', '入院します', 'にゅういんします', 'nhập viện', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('c330d260-f2d6-4d19-bd77-b4f83cd59bd9', '5e9c3f2d-a3d8-41cc-9458-3e7a69479b7d', '入学します', 'にゅうがくします', 'nhập học', false, 13, 'pdf', 'ok');

-- ---------- 立 (LẬP) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('1276a9bf-da94-4712-baf2-922766a5dd20', 'N5', '立', 'LẬP', 'đứng, thành lập', 5, '立', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '03a26050-da95-408b-8762-08ae95d3f50f', id, 'kun', 'た', true, 13, 'ok' from jp_kanji where id = '1276a9bf-da94-4712-baf2-922766a5dd20'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '575ab335-ee69-4637-aed0-28f6cee54c28', id, 'on', 'りつ', false, 13, 'ok' from jp_kanji where id = '1276a9bf-da94-4712-baf2-922766a5dd20'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1276a9bf-da94-4712-baf2-922766a5dd20', '03a26050-da95-408b-8762-08ae95d3f50f', '立ちます', 'たちます', 'đứng', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1276a9bf-da94-4712-baf2-922766a5dd20', '03a26050-da95-408b-8762-08ae95d3f50f', '役に立ちます', 'やくにたちます', 'có ích', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('1276a9bf-da94-4712-baf2-922766a5dd20', '03a26050-da95-408b-8762-08ae95d3f50f', '組み立てます', 'くみたてます', 'lắp ráp', false, 13, 'pdf', 'ok');

-- ---------- 言 (NGÔN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('5dc41744-d880-420a-856d-4223caf883dc', 'N5', '言', 'NGÔN', 'nói, lời nói', 7, '言', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '0bbade4f-76f5-498c-b9e2-a92504162932', id, 'kun', 'い', true, 13, 'ok' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'bed18776-d83a-4f84-9930-e7cf6c3da2b3', id, 'kun', 'こと', false, 13, 'ok' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '4e72a107-41e4-449a-99a7-00978705a8d5', id, 'on', 'げん', false, 13, 'ok' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '0201a6eb-1d3b-4e3c-bae1-5a5af14c5828', id, 'on', 'ごん', false, 13, 'ok' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5dc41744-d880-420a-856d-4223caf883dc', '0bbade4f-76f5-498c-b9e2-a92504162932', '言います', 'いいます', 'nói', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('5dc41744-d880-420a-856d-4223caf883dc', '0bbade4f-76f5-498c-b9e2-a92504162932', '言い伝え', 'いいつたえ', 'truyền đạt lại', false, 13, 'pdf', 'ok');

-- ---------- 話 (THOẠI) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('adcc4756-f9ef-4f75-a7d1-fa682d05c8a6', 'N5', '話', 'THOẠI', 'nói chuyện, câu chuyện', 13, '言', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'c28a4ecf-e926-49d2-bf61-230c043a21ee', id, 'kun', 'はな', true, 13, 'ok' from jp_kanji where id = 'adcc4756-f9ef-4f75-a7d1-fa682d05c8a6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '214f3ddd-1839-4968-8e0b-ca4296e60ccb', id, 'kun', 'はなし', false, 13, 'ok' from jp_kanji where id = 'adcc4756-f9ef-4f75-a7d1-fa682d05c8a6'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '3d7f5ecb-4901-4244-90e1-7c1981e82719', id, 'on', 'わ', true, 13, 'ok' from jp_kanji where id = 'adcc4756-f9ef-4f75-a7d1-fa682d05c8a6'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('adcc4756-f9ef-4f75-a7d1-fa682d05c8a6', 'c28a4ecf-e926-49d2-bf61-230c043a21ee', '話します', 'はなします', 'nói chuyện', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('adcc4756-f9ef-4f75-a7d1-fa682d05c8a6', '214f3ddd-1839-4968-8e0b-ca4296e60ccb', '話', 'はなし', 'câu chuyện', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('adcc4756-f9ef-4f75-a7d1-fa682d05c8a6', '3d7f5ecb-4901-4244-90e1-7c1981e82719', 'お世話になります', 'おせわになります', 'mong nhận được sự giúp đỡ', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('adcc4756-f9ef-4f75-a7d1-fa682d05c8a6', '3d7f5ecb-4901-4244-90e1-7c1981e82719', '電話', 'でんわ', 'điện thoại', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('adcc4756-f9ef-4f75-a7d1-fa682d05c8a6', '3d7f5ecb-4901-4244-90e1-7c1981e82719', '電話します', 'でんわします', 'gọi điện', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('adcc4756-f9ef-4f75-a7d1-fa682d05c8a6', '3d7f5ecb-4901-4244-90e1-7c1981e82719', '会話', 'かいわ', 'trò chuyện, hội thoại', false, 13, 'pdf', 'ok');

-- ---------- 力 (LỰC) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('6d7641e3-a80a-4bbf-8df8-292c49d8f33e', 'N5', '力', 'LỰC', 'sức lực', 2, '力', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '8f5aef2a-29c2-47e8-9bbf-ac75ead6bd9d', id, 'kun', 'ちから', true, 13, 'ok' from jp_kanji where id = '6d7641e3-a80a-4bbf-8df8-292c49d8f33e'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '24d0853d-09f6-4c65-a447-c198eb39f026', id, 'on', 'りょく', false, 13, 'ok' from jp_kanji where id = '6d7641e3-a80a-4bbf-8df8-292c49d8f33e'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('6d7641e3-a80a-4bbf-8df8-292c49d8f33e', '8f5aef2a-29c2-47e8-9bbf-ac75ead6bd9d', '力', 'ちから', 'sức lực', false, 13, 'pdf', 'ok');

-- ---------- 長 (TRƯỞNG) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('a6d74564-a9c4-4868-a6be-8aec42a7f2ca', 'N5', '長', 'TRƯỞNG', 'dài, trưởng', 8, '長', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '84ad7d63-abae-4096-850c-692f55bc93f3', id, 'kun', 'なが', true, 13, 'ok' from jp_kanji where id = 'a6d74564-a9c4-4868-a6be-8aec42a7f2ca'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'e2bae1a2-3760-4278-af71-f9dec39e44d4', id, 'on', 'ちょう', true, 13, 'ok' from jp_kanji where id = 'a6d74564-a9c4-4868-a6be-8aec42a7f2ca'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a6d74564-a9c4-4868-a6be-8aec42a7f2ca', '84ad7d63-abae-4096-850c-692f55bc93f3', '長い', 'ながい', 'dài', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a6d74564-a9c4-4868-a6be-8aec42a7f2ca', '84ad7d63-abae-4096-850c-692f55bc93f3', '長さ', 'ながさ', 'độ dài', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a6d74564-a9c4-4868-a6be-8aec42a7f2ca', '84ad7d63-abae-4096-850c-692f55bc93f3', '長生き', 'ながいき', 'sống lâu', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a6d74564-a9c4-4868-a6be-8aec42a7f2ca', 'e2bae1a2-3760-4278-af71-f9dec39e44d4', '課長', 'かちょう', 'trưởng nhóm', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a6d74564-a9c4-4868-a6be-8aec42a7f2ca', 'e2bae1a2-3760-4278-af71-f9dec39e44d4', '部長', 'ぶちょう', 'trưởng phòng', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('a6d74564-a9c4-4868-a6be-8aec42a7f2ca', 'e2bae1a2-3760-4278-af71-f9dec39e44d4', '社長', 'しゃちょう', 'giám đốc', false, 13, 'pdf', 'ok');

-- ---------- 明 (MINH) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('b7241328-09c8-47a3-8b46-a78b582fedc1', 'N5', '明', 'MINH', 'sáng, rõ ràng', 8, '日', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f6cf8b26-f2ba-4591-8d12-d026e8c53383', id, 'kun', 'あか', true, 13, 'ok' from jp_kanji where id = 'b7241328-09c8-47a3-8b46-a78b582fedc1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '32cc99b9-92ba-41a8-9b77-ae4bcc5643f3', id, 'kun', 'あ', false, 13, 'ok' from jp_kanji where id = 'b7241328-09c8-47a3-8b46-a78b582fedc1'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '7c53f7d7-99e5-4bde-8a7c-40be6b561f89', id, 'on', 'めい', true, 13, 'ok' from jp_kanji where id = 'b7241328-09c8-47a3-8b46-a78b582fedc1'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b7241328-09c8-47a3-8b46-a78b582fedc1', 'f6cf8b26-f2ba-4591-8d12-d026e8c53383', '明るい', 'あかるい', 'sáng, sáng sủa', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b7241328-09c8-47a3-8b46-a78b582fedc1', '7c53f7d7-99e5-4bde-8a7c-40be6b561f89', '説明します', 'せつめいします', 'giải thích', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b7241328-09c8-47a3-8b46-a78b582fedc1', '7c53f7d7-99e5-4bde-8a7c-40be6b561f89', '説明書', 'せつめいしょ', 'sách hướng dẫn', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('b7241328-09c8-47a3-8b46-a78b582fedc1', '7c53f7d7-99e5-4bde-8a7c-40be6b561f89', '発明', 'はつめい', 'phát minh', false, 13, 'pdf', 'ok');

-- ---------- 暗 (ÁM) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('3511933d-c268-4c15-8328-5d386b654525', 'N5', '暗', 'ÁM', 'tối', 13, '日', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '98fe7853-eaa2-4ef4-92ba-9fc126497869', id, 'kun', 'くら', true, 13, 'ok' from jp_kanji where id = '3511933d-c268-4c15-8328-5d386b654525'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '173162d6-197e-4656-9cf8-6c0799f470bb', id, 'on', 'あん', true, 13, 'ok' from jp_kanji where id = '3511933d-c268-4c15-8328-5d386b654525'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3511933d-c268-4c15-8328-5d386b654525', '98fe7853-eaa2-4ef4-92ba-9fc126497869', '暗い', 'くらい', 'tối', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('3511933d-c268-4c15-8328-5d386b654525', '173162d6-197e-4656-9cf8-6c0799f470bb', '暗証番号', 'あんしょうばんごう', 'mã số bảo mật', false, 13, 'pdf', 'ok');

-- ---------- 元 (NGUYÊN) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('2af6d8fe-db75-49dd-88af-56d65a4728ee', 'N5', '元', 'NGUYÊN', 'gốc, vốn dĩ', 4, '儿', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '1dd846b4-72e1-409f-a6ba-af7ffded3a7d', id, 'kun', 'もと', true, 13, 'ok' from jp_kanji where id = '2af6d8fe-db75-49dd-88af-56d65a4728ee'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'f7d7a37c-657e-40e5-b256-f907b4a34a15', id, 'on', 'げん', true, 13, 'ok' from jp_kanji where id = '2af6d8fe-db75-49dd-88af-56d65a4728ee'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'b4e4c262-2aba-4baa-b2cf-1e914621a0f6', id, 'on', 'がん', false, 13, 'ok' from jp_kanji where id = '2af6d8fe-db75-49dd-88af-56d65a4728ee'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2af6d8fe-db75-49dd-88af-56d65a4728ee', '1dd846b4-72e1-409f-a6ba-af7ffded3a7d', '元のところ', 'もとのところ', 'chỗ cũ', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('2af6d8fe-db75-49dd-88af-56d65a4728ee', 'f7d7a37c-657e-40e5-b256-f907b4a34a15', '元気な', 'げんきな', 'khỏe mạnh', false, 13, 'pdf', 'ok');

-- ---------- 好 (HẢO) ----------
insert into jp_kanji (id, level, kanji_character, han_viet, meaning_vi_summary, stroke_count, radical, source_page, source_type, review_status)
values ('ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea', 'N5', '好', 'HẢO', 'thích, tốt', 6, '女', 13, 'pdf', 'ok')
on conflict (level, kanji_character) do nothing;

insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select 'ae508e15-e158-4c01-b75c-655ee74d9de8', id, 'kun', 'す', true, 13, 'ok' from jp_kanji where id = 'ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea'
on conflict (id) do nothing;
insert into jp_kanji_readings (id, kanji_id, reading_type, reading_kana, is_main, source_page, review_status)
select '6acb99ef-31e2-49d9-a0e9-ef9abb254fa2', id, 'on', 'こう', false, 13, 'ok' from jp_kanji where id = 'ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea'
on conflict (id) do nothing;

insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea', 'ae508e15-e158-4c01-b75c-655ee74d9de8', '好きな', 'すきな', 'thích', false, 13, 'pdf', 'ok');
insert into jp_kanji_words (kanji_id, reading_id, word_jp, word_furigana, meaning_vi, is_irregular, source_page, source_type, review_status)
values ('ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea', 'ae508e15-e158-4c01-b75c-655ee74d9de8', '大好きな', 'だいすきな', 'rất thích, yêu', false, 13, 'pdf', 'ok');


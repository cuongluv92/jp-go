-- ============================================================
-- jp-go — Từ vựng N2, round 28 (migration tổng hợp cuối module).
-- Nguồn: PDF "Tổng hợp kiến thức N2" (Dũng Mori), PART 2 - 語彙.
--
-- 1) Bổ sung từ わくわく (đáp án câu hỏi thật Q6, chưa có trong
--    các round trước vì không nằm trong danh sách từ vựng chính
--    của trang 57/58).
-- 2) Insert 8 câu hỏi trắc nghiệm THẬT (source_type='pdf') lấy
--    trực tiếp từ PDF — đã rà soát toàn bộ trang in 37-61 và chỉ
--    tìm được đúng 8 câu (không phải ~16 như ước tính ban đầu).
--    Xem real_quiz_questions_tracking.md để đối chiếu.
-- ============================================================

-- ---------- Bổ sung từ わくわく (đáp án Q6) ----------
insert into jp_vocab (id, level, lesson_no, entry_type, word_jp, reading_furigana, meaning_vi, usage_note_vi, group_key, word_class, source_page, source_text, source_type, review_status) values ('00100560-cb5a-4d87-bbd4-05065a53d029', 'N2', NULL, 'word', 'わくわく', 'わくわく', 'Háo hức, hồi hộp, mong chờ (một cách vui thích)', NULL, NULL, '副詞', 58, 'わくわく', 'pdf', 'ok')
on conflict (level, word_class, word_jp, reading_furigana) where lesson_no is null do nothing;
insert into jp_vocab_examples (vocab_id, example_jp, example_vi, cloze_jp, answer, source_type) select id, '彼からのプレゼントに胸をわくわくさせて包みを解いた。', 'Tôi mở gói quà một cách háo hức vì món quà từ anh ấy.', '彼からのプレゼントに胸を_____させて包みを解いた。', 'わくわく', 'generated' from jp_vocab where id = '00100560-cb5a-4d87-bbd4-05065a53d029';

-- ---------- 8 câu hỏi trắc nghiệm THẬT (source_type='pdf') ----------
-- Q1 (trang in 43)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('89566933-4d33-4568-8caf-1ad2d411ac4a', 'fill_blank', 'Chọn từ đúng: 勉強して様々な知識を＿＿＿＿＿。', '重ねる', 'ためる', '積む', '蓄える', '蓄える', 'pdf', 43);

-- Q2 (trang in 46)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('087f40c6-2ac9-493f-b7e9-2ff3bbd8c12f', 'fill_blank', 'Chọn từ đúng: 宿題に文法の誤りがあったので、先生に＿＿＿＿＿された。', '訂正', '修正', '処置', '処理', '訂正', 'pdf', 46);

-- Q3 (trang in 52)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('d3edb8ab-b488-4c82-ad1b-b959d350fa9a', 'fill_blank', 'Chọn từ đúng: 頭で考えるよりも、＿＿＿＿＿に試してみるのがいい。', '行為', '現実', '実際', '実物', '実際', 'pdf', 52);

-- Q4 (trang in 53)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('bae16094-866e-4170-a875-34bbb3e96075', 'fill_blank', 'Chọn từ đúng: 写真を見ると＿＿＿＿＿記憶がよみがえる。', 'なつかしい', 'おさない', 'ここちよい', 'おいしい', 'なつかしい', 'pdf', 53);

-- Q5 (trang in 54)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('266c983e-c41f-47d5-a363-103165249e8a', 'fill_blank', 'Chọn từ đúng: ＿＿＿＿＿お時間をいただきありがとうございます。', '偉大な', '真剣な', '主要な', '貴重な', '貴重な', 'pdf', 54);

-- Q6 (trang in 57)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('00100560-cb5a-4d87-bbd4-05065a53d029', 'fill_blank', 'Chọn từ đúng: 彼からのプレゼントに胸を＿＿＿＿＿させて包みを解いた。', '生き生き', 'わくわく', 'せっせと', 'すっきり', 'わくわく', 'pdf', 57);

-- Q7 (trang in 59)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('e5f9c5c9-3d2d-446b-bbd4-b987f14a8dd7', 'fill_blank', 'Chọn từ đúng: 先月注文した商品がまだ届かないので、お店に＿＿＿＿＿。', '問い合わせた', '頼み込んだ', '聞き出した', '打ち上げた', '問い合わせた', 'pdf', 59);

-- Q8 (trang in 61)
insert into jp_vocab_questions (vocab_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type, source_page) values ('73b174c6-5052-4ba8-bd95-95986607449b', 'fill_blank', 'Chọn từ đúng: スマホの普及で人々のライフ＿＿＿＿＿が大きく変わった。', 'サイクル', 'モデル', 'スタイル', 'ライン', 'スタイル', 'pdf', 61);

-- Tổng 8 câu hỏi trắc nghiệm thật (source_type='pdf') + 1 từ mới (わくわく).

-- ============================================================
-- jp-go — Bài tập generated (jp_kanji_questions) cho 88 kanji N5
-- còn lại (ngoài 10 kanji thí điểm 一~十 đã có ở migration 0004).
-- Cùng pattern: choose_reading / choose_kanji_from_meaning /
-- choose_word_meaning / write_reading — chỉ dùng dữ liệu thật đã
-- seed (jp_kanji/jp_kanji_readings/jp_kanji_words), không bịa nội
-- dung. Phân phối nhiễu (distractor) lấy ngẫu nhiên (seed cố định)
-- từ toàn bộ 98 kanji N5 để đa dạng hơn. match_kanji_word không
-- seed tĩnh (mini-game ghép cặp lấy trực tiếp lúc chạy).
-- ============================================================

-- ---------- 万 (VẠN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 万 (VẠN) có âm ON (chính) là gì?', 'まん', 'げ', 'めい', 'しち', 'まん', 'generated' from jp_kanji where id = 'c94ceac1-3c3a-4b4a-94a5-6055c9c48786';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vạn, mười nghìn"?', '左', '校', '万', '学', '万', 'generated' from jp_kanji where id = 'c94ceac1-3c3a-4b4a-94a5-6055c9c48786';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"万" có nghĩa là gì?', 'vạn (mười nghìn)', 'buổi xem mặt', 'một chút, một ít', 'thứ 5', 'vạn (mười nghìn)', 'generated' from jp_kanji where id = 'c94ceac1-3c3a-4b4a-94a5-6055c9c48786';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 千万', 'せんまん', 'generated' from jp_kanji where id = 'c94ceac1-3c3a-4b4a-94a5-6055c9c48786';

-- ---------- 上 (THƯỢNG) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 上 (THƯỢNG) có âm ON (chính) là gì?', 'ぷん', 'きゅう', 'じょう', 'ほん', 'じょう', 'generated' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trên, lên"?', '三', '先', '上', '友', '上', 'generated' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"上" có nghĩa là gì?', 'tiết kiệm tiền', 'báo', 'bên trên', 'nhật ký', 'bên trên', 'generated' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 上着', 'うわぎ', 'generated' from jp_kanji where id = '65da5377-f86d-4ae7-a4b6-1c198b9a4c07';

-- ---------- 下 (HẠ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 下 (HẠ) có âm ON (chính) là gì?', 'か', 'りつ', 'らい', 'じゅう', 'か', 'generated' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dưới, xuống"?', '米', '休', '暗', '下', '下', 'generated' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"下" có nghĩa là gì?', 'thứ 6', 'bên dưới', 'điện thoại', 'giỏi, thông thạo', 'bên dưới', 'generated' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 下着', 'したぎ', 'generated' from jp_kanji where id = '3b47111b-a8ce-4806-9056-fd846bd1bc88';

-- ---------- 中 (TRUNG) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 中 (TRUNG) có âm ON (chính) là gì?', 'がん', 'にく', 'ちゅう', 'おん', 'ちゅう', 'generated' from jp_kanji where id = '22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giữa, trong"?', '中', '八', '肉', '聞', '中', 'generated' from jp_kanji where id = '22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"中" có nghĩa là gì?', 'thứ 4', 'nhỏ, bé', 'món ăn Nhật Bản', 'ở giữa', 'ở giữa', 'generated' from jp_kanji where id = '22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 真ん中', 'まんなか', 'generated' from jp_kanji where id = '22ea2784-8a7d-4a9d-b211-5c76f0c3ec2d';

-- ---------- 人 (NHÂN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 人 (NHÂN) có âm ON (chính) là gì?', 'じん', 'す', 'でん', 'しょう', 'じん', 'generated' from jp_kanji where id = '56ded2f5-7b98-4300-a358-9e5f03a988b8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "người"?', '人', '山', '茶', '生', '人', 'generated' from jp_kanji where id = '56ded2f5-7b98-4300-a358-9e5f03a988b8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"あの人" có nghĩa là gì?', 'bạn gái', 'trước', 'người kia', 'ngày mùng 6', 'người kia', 'generated' from jp_kanji where id = '56ded2f5-7b98-4300-a358-9e5f03a988b8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 人', 'ひと', 'generated' from jp_kanji where id = '56ded2f5-7b98-4300-a358-9e5f03a988b8';

-- ---------- 今 (KIM) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 今 (KIM) có âm ON (chính) là gì?', 'いち', 'しゅ', 'こう', 'こん', 'こん', 'generated' from jp_kanji where id = '17f0e795-e335-45d8-a2ad-a294273e4715';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bây giờ, hiện tại"?', '間', '見', '今', '内', '今', 'generated' from jp_kanji where id = '17f0e795-e335-45d8-a2ad-a294273e4715';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"今" có nghĩa là gì?', 'thịt', 'sự trở về', 'phía -', 'bây giờ, hiện tại', 'bây giờ, hiện tại', 'generated' from jp_kanji where id = '17f0e795-e335-45d8-a2ad-a294273e4715';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 今にも', 'いまにも', 'generated' from jp_kanji where id = '17f0e795-e335-45d8-a2ad-a294273e4715';

-- ---------- 休 (HƯU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 休 (HƯU) có âm ON (chính) là gì?', 'しゅ', 'へ', 'きゅう', 'はん', 'きゅう', 'generated' from jp_kanji where id = '53fca3b3-b50c-409e-bb11-33eeaa3420e6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nghỉ"?', '気', '休', '六', '出', '休', 'generated' from jp_kanji where id = '53fca3b3-b50c-409e-bb11-33eeaa3420e6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"休み" có nghĩa là gì?', 'nhìn thấy', 'thăm người ốm', 'tháng này', 'nghỉ; vắng mặt', 'nghỉ; vắng mặt', 'generated' from jp_kanji where id = '53fca3b3-b50c-409e-bb11-33eeaa3420e6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 昼休み', 'ひるやすみ', 'generated' from jp_kanji where id = '53fca3b3-b50c-409e-bb11-33eeaa3420e6';

-- ---------- 何 (HÀ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 何 (HÀ) có âm KUN (chính) là gì?', 'なん', 'うお', 'こ', 'やす', 'なん', 'generated' from jp_kanji where id = '7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cái gì, bao nhiêu"?', '何', '土', '出', '学', '何', 'generated' from jp_kanji where id = '7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"何歳" có nghĩa là gì?', 'mấy tuổi', 'buffet đồ uống', 'đọc', 'trường THPT', 'mấy tuổi', 'generated' from jp_kanji where id = '7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 何', 'なに', 'generated' from jp_kanji where id = '7f3ee8d0-8fb1-4f76-8a97-8771cfac6c9f';

-- ---------- 元 (NGUYÊN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 元 (NGUYÊN) có âm ON (chính) là gì?', 'しゅ', 'げつ', 'げん', 'しち', 'げん', 'generated' from jp_kanji where id = '2af6d8fe-db75-49dd-88af-56d65a4728ee';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "gốc, vốn dĩ"?', '暗', '元', '金', '雨', '元', 'generated' from jp_kanji where id = '2af6d8fe-db75-49dd-88af-56d65a4728ee';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"元のところ" có nghĩa là gì?', 'cửa ra', 'chỗ cũ', 'hành lang', '- tháng (khoảng thời gian)', 'chỗ cũ', 'generated' from jp_kanji where id = '2af6d8fe-db75-49dd-88af-56d65a4728ee';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 元気な', 'げんきな', 'generated' from jp_kanji where id = '2af6d8fe-db75-49dd-88af-56d65a4728ee';

-- ---------- 先 (TIÊN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 先 (TIÊN) có âm ON (chính) là gì?', 'しょう', 'だん', 'せん', 'ぶん', 'せん', 'generated' from jp_kanji where id = '5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trước, đầu tiên"?', '先', '山', '五', '一', '先', 'generated' from jp_kanji where id = '5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お先に" có nghĩa là gì?', 'trước', 'lần này', 'tiết kiệm tiền', 'hóa đơn, biên lai', 'trước', 'generated' from jp_kanji where id = '5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 先生', 'せんせい', 'generated' from jp_kanji where id = '5cfbc2cf-e8fd-43aa-acda-0597d8b61e1d';

-- ---------- 入 (NHẬP) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 入 (NHẬP) có âm ON (chính) là gì?', 'にゅう', 'こう', 'こん', 'めい', 'にゅう', 'generated' from jp_kanji where id = 'c330d260-f2d6-4d19-bd77-b4f83cd59bd9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vào, nhập"?', '子', '入', '高', '生', '入', 'generated' from jp_kanji where id = 'c330d260-f2d6-4d19-bd77-b4f83cd59bd9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"入ります" có nghĩa là gì?', 'trường tiểu học', 'đi vào, vào', 'dẫn đi theo', 'điện thoại', 'đi vào, vào', 'generated' from jp_kanji where id = 'c330d260-f2d6-4d19-bd77-b4f83cd59bd9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 入れます', 'いれます', 'generated' from jp_kanji where id = 'c330d260-f2d6-4d19-bd77-b4f83cd59bd9';

-- ---------- 内 (NỘI) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 内 (NỘI) có âm ON (chính) là gì?', 'ない', 'ぶっ', 'かん', 'じ', 'ない', 'generated' from jp_kanji where id = 'bfa7692a-8029-4d1c-a49d-cc932ad0ef1f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bên trong"?', '手', '内', '分', '生', '内', 'generated' from jp_kanji where id = 'bfa7692a-8029-4d1c-a49d-cc932ad0ef1f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"内" có nghĩa là gì?', 'pha trà', 'rẻ', 'ngày mùng 6', 'nội, bên trong', 'nội, bên trong', 'generated' from jp_kanji where id = 'bfa7692a-8029-4d1c-a49d-cc932ad0ef1f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 家内', 'かない', 'generated' from jp_kanji where id = 'bfa7692a-8029-4d1c-a49d-cc932ad0ef1f';

-- ---------- 円 (VIÊN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 円 (VIÊN) có âm ON (chính) là gì?', 'えん', 'がつ', 'ぶつ', 'しゃ', 'えん', 'generated' from jp_kanji where id = '5375ee2b-dad7-44c7-a8d3-b4facac72fcb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đồng yên, hình tròn"?', '飲', '円', '話', '町', '円', 'generated' from jp_kanji where id = '5375ee2b-dad7-44c7-a8d3-b4facac72fcb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"円" có nghĩa là gì?', 'phía bên phải', 'yên', 'nhập, đưa vào', 'khoa học', 'yên', 'generated' from jp_kanji where id = '5375ee2b-dad7-44c7-a8d3-b4facac72fcb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 五円', 'ごえん', 'generated' from jp_kanji where id = '5375ee2b-dad7-44c7-a8d3-b4facac72fcb';

-- ---------- 出 (XUẤT) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 出 (XUẤT) có âm ON (chính) là gì?', 'ぽん', 'はち', 'ぶん', 'しゅつ', 'しゅつ', 'generated' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ra, xuất hiện"?', '左', '万', '出', '名', '出', 'generated' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お出かけ" có nghĩa là gì?', 'trụ sở chính công ty', 'ra ngoài', 'hai', 'tháng sau', 'ra ngoài', 'generated' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 出ます', 'でます', 'generated' from jp_kanji where id = 'f0390758-228a-4219-ad14-9b9985e408b5';

-- ---------- 分 (PHÂN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 分 (PHÂN) có âm ON (chính) là gì?', 'ぽん', 'ふん', 'か', 'ちょう', 'ふん', 'generated' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "phút, phần, chia"?', '母', '分', '木', '上', '分', 'generated' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"分" có nghĩa là gì?', 'khoa y', 'phút', 'học sinh tiểu học', '1/4', 'phút', 'generated' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 何分', 'なんぷん', 'generated' from jp_kanji where id = 'c5d3a390-b4ef-4e81-aa64-f333661e2d01';

-- ---------- 力 (LỰC) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 力 (LỰC) có âm ON (chính) là gì?', 'かん', 'か', 'ぎゅう', 'りょく', 'りょく', 'generated' from jp_kanji where id = '6d7641e3-a80a-4bbf-8df8-292c49d8f33e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sức lực"?', '男', '力', '高', '分', '力', 'generated' from jp_kanji where id = '6d7641e3-a80a-4bbf-8df8-292c49d8f33e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"力" có nghĩa là gì?', 'đông, nhiều -', 'đồ ăn', 'sức lực', 'kiến học', 'sức lực', 'generated' from jp_kanji where id = '6d7641e3-a80a-4bbf-8df8-292c49d8f33e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 力', 'ちから', 'generated' from jp_kanji where id = '6d7641e3-a80a-4bbf-8df8-292c49d8f33e';

-- ---------- 千 (THIÊN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 千 (THIÊN) có âm ON (chính) là gì?', 'じっ', 'じゅう', 'ぶん', 'せん', 'せん', 'generated' from jp_kanji where id = 'fdc6edae-e1c1-40c2-acca-7e566caf3acd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nghìn, số 1000"?', '安', '百', '出', '千', '千', 'generated' from jp_kanji where id = 'fdc6edae-e1c1-40c2-acca-7e566caf3acd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"千" có nghĩa là gì?', 'một nghìn', 'đến', 'cục pin', 'phút', 'một nghìn', 'generated' from jp_kanji where id = 'fdc6edae-e1c1-40c2-acca-7e566caf3acd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 二千', 'にせん', 'generated' from jp_kanji where id = 'fdc6edae-e1c1-40c2-acca-7e566caf3acd';

-- ---------- 半 (BÁN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 半 (BÁN) có âm ON (chính) là gì?', 'ちょう', 'はん', 'ぎょう', 'ぶっ', 'はん', 'generated' from jp_kanji where id = '369af613-2206-41a8-bc85-30cc33c34b3f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nửa, rưỡi"?', '千', '力', '手', '半', '半', 'generated' from jp_kanji where id = '369af613-2206-41a8-bc85-30cc33c34b3f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"半" có nghĩa là gì?', 'nhà ăn', 'bán, một nửa, rưỡi', 'năm sau nữa', 'bé trai', 'bán, một nửa, rưỡi', 'generated' from jp_kanji where id = '369af613-2206-41a8-bc85-30cc33c34b3f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 半分', 'はんぶん', 'generated' from jp_kanji where id = '369af613-2206-41a8-bc85-30cc33c34b3f';

-- ---------- 友 (HỮU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 友 (HỮU) có âm ON (chính) là gì?', 'ぎょ', 'あん', 'げ', 'ゆう', 'ゆう', 'generated' from jp_kanji where id = '3dc73342-1217-46ed-8851-57f09129460e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bạn"?', '花', '外', '一', '友', '友', 'generated' from jp_kanji where id = '3dc73342-1217-46ed-8851-57f09129460e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"友達" có nghĩa là gì?', 'bạn bè', 'trưởng phòng', 'một nửa', 'tiếng Nhật', 'bạn bè', 'generated' from jp_kanji where id = '3dc73342-1217-46ed-8851-57f09129460e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 友達', 'ともだち', 'generated' from jp_kanji where id = '3dc73342-1217-46ed-8851-57f09129460e';

-- ---------- 古 (CỔ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 古 (CỔ) có âm KUN (chính) là gì?', 'さ', 'おお', 'うち', 'ふる', 'ふる', 'generated' from jp_kanji where id = 'b3f2c06d-9b1a-4ed5-88a9-df06a6f8982d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cũ, cổ"?', '古', '牛', '九', '下', '古', 'generated' from jp_kanji where id = 'b3f2c06d-9b1a-4ed5-88a9-df06a6f8982d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"古い" có nghĩa là gì?', 'cũ, cổ', 'hai trăm', 'tất', 'trường học', 'cũ, cổ', 'generated' from jp_kanji where id = 'b3f2c06d-9b1a-4ed5-88a9-df06a6f8982d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 古い', 'ふるい', 'generated' from jp_kanji where id = 'b3f2c06d-9b1a-4ed5-88a9-df06a6f8982d';

-- ---------- 右 (HỮU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 右 (HỮU) có âm KUN (chính) là gì?', 'で', 'みぎ', 'す', 'か', 'みぎ', 'generated' from jp_kanji where id = 'c596d376-bb84-4bd8-9561-2af18cf04fca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bên phải"?', '牛', '話', '長', '右', '右', 'generated' from jp_kanji where id = 'c596d376-bb84-4bd8-9561-2af18cf04fca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"右" có nghĩa là gì?', 'đồ ăn', 'phía bên phải', 'bán, một nửa, rưỡi', 'pháo hoa', 'phía bên phải', 'generated' from jp_kanji where id = 'c596d376-bb84-4bd8-9561-2af18cf04fca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 右', 'みぎ', 'generated' from jp_kanji where id = 'c596d376-bb84-4bd8-9561-2af18cf04fca';

-- ---------- 名 (DANH) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 名 (DANH) có âm ON (chính) là gì?', 'めい', 'じっ', 'がん', 'もく', 'めい', 'generated' from jp_kanji where id = '892bbfa0-2ebb-4027-81fc-5cd4a0c6003f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tên, danh tiếng"?', '音', '名', '年', '校', '名', 'generated' from jp_kanji where id = '892bbfa0-2ebb-4027-81fc-5cd4a0c6003f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"名前" có nghĩa là gì?', 'người quản lý', 'tên', 'con phố, thị trấn', 'núi Phú Sỹ', 'tên', 'generated' from jp_kanji where id = '892bbfa0-2ebb-4027-81fc-5cd4a0c6003f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 名刺', 'めいし', 'generated' from jp_kanji where id = '892bbfa0-2ebb-4027-81fc-5cd4a0c6003f';

-- ---------- 土 (THỔ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 土 (THỔ) có âm ON (chính) là gì?', 'ばん', 'ぼ', 'さん', 'ど', 'ど', 'generated' from jp_kanji where id = '4208dee4-5d76-4829-9598-08e5dcdccd69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đất"?', '六', '土', '半', '中', '土', 'generated' from jp_kanji where id = '4208dee4-5d76-4829-9598-08e5dcdccd69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"土曜日" có nghĩa là gì?', 'tháng 4', 'thứ 7', 'trường tiểu học', 'nhà ga Honda', 'thứ 7', 'generated' from jp_kanji where id = '4208dee4-5d76-4829-9598-08e5dcdccd69';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お土産', 'おみやげ', 'generated' from jp_kanji where id = '4208dee4-5d76-4829-9598-08e5dcdccd69';

-- ---------- 外 (NGOẠI) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 外 (NGOẠI) có âm ON (chính) là gì?', 'ご', 'じ', 'ばい', 'がい', 'がい', 'generated' from jp_kanji where id = '8a2e6417-d3a7-4f9f-914b-013978b9c319';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bên ngoài"?', '少', '左', '茶', '外', '外', 'generated' from jp_kanji where id = '8a2e6417-d3a7-4f9f-914b-013978b9c319';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"外" có nghĩa là gì?', 'năm sau nữa', 'vất vả, khó khăn', 'độ cao', 'bên ngoài', 'bên ngoài', 'generated' from jp_kanji where id = '8a2e6417-d3a7-4f9f-914b-013978b9c319';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 外れます', 'はずれます', 'generated' from jp_kanji where id = '8a2e6417-d3a7-4f9f-914b-013978b9c319';

-- ---------- 多 (ĐA) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 多 (ĐA) có âm KUN (chính) là gì?', 'ひと', 'さかな', 'まな', 'おお', 'おお', 'generated' from jp_kanji where id = '36f870b0-49f3-4e28-bc97-edf8fc01543f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhiều"?', '多', '日', '聞', '飲', '多', 'generated' from jp_kanji where id = '36f870b0-49f3-4e28-bc97-edf8fc01543f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"多い" có nghĩa là gì?', 'đèn pin', 'nói', 'đại hội', 'nhiều', 'nhiều', 'generated' from jp_kanji where id = '36f870b0-49f3-4e28-bc97-edf8fc01543f';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 多い', 'おおい', 'generated' from jp_kanji where id = '36f870b0-49f3-4e28-bc97-edf8fc01543f';

-- ---------- 大 (ĐẠI) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 大 (ĐẠI) có âm ON (chính) là gì?', 'ひゃく', 'ぶっ', 'か', 'だい', 'だい', 'generated' from jp_kanji where id = '1a43d56d-7e95-4201-9c6e-f9e24326ae44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "to, lớn"?', '千', '大', '電', '分', '大', 'generated' from jp_kanji where id = '1a43d56d-7e95-4201-9c6e-f9e24326ae44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"大きい" có nghĩa là gì?', 'tổng thống', 'ngày mùng 6', 'to, lớn', 'cơm thịt bò', 'to, lớn', 'generated' from jp_kanji where id = '1a43d56d-7e95-4201-9c6e-f9e24326ae44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 大きさ', 'おおきさ', 'generated' from jp_kanji where id = '1a43d56d-7e95-4201-9c6e-f9e24326ae44';

-- ---------- 女 (NỮ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 女 (NỮ) có âm ON (chính) là gì?', 'らい', 'がく', 'じょ', 'ぎょ', 'じょ', 'generated' from jp_kanji where id = 'c5e1ac10-d1ea-489e-808a-17108359bc32';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "con gái, nữ"?', '右', '元', '女', '小', '女', 'generated' from jp_kanji where id = 'c5e1ac10-d1ea-489e-808a-17108359bc32';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"女の人" có nghĩa là gì?', 'ba cái, ba chiếc', 'kiến học, kiến giảng', 'đi ra, xuất hiện', 'người con gái', 'người con gái', 'generated' from jp_kanji where id = 'c5e1ac10-d1ea-489e-808a-17108359bc32';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 女の子', 'おんなのこ', 'generated' from jp_kanji where id = 'c5e1ac10-d1ea-489e-808a-17108359bc32';

-- ---------- 好 (HẢO) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 好 (HẢO) có âm ON (chính) là gì?', 'みょう', 'ほん', 'ふん', 'こう', 'こう', 'generated' from jp_kanji where id = 'ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thích, tốt"?', '本', '人', '好', '左', '好', 'generated' from jp_kanji where id = 'ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"好きな" có nghĩa là gì?', 'thích', 'việc leo núi', 'nguồn điện', 'đại học', 'thích', 'generated' from jp_kanji where id = 'ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 大好きな', 'だいすきな', 'generated' from jp_kanji where id = 'ddc4a372-9d2f-4c8f-a3ec-dba24d89f3ea';

-- ---------- 子 (TỬ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 子 (TỬ) có âm ON (chính) là gì?', 'さ', 'ぶつ', 'ぜん', 'す', 'す', 'generated' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "con, trẻ em"?', '寺', '三', '子', '暗', '子', 'generated' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"子ども" có nghĩa là gì?', 'nhà ăn', 'năm nào', 'trẻ em', 'phía bên trái', 'trẻ em', 'generated' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 子どもたち', 'こどもたち', 'generated' from jp_kanji where id = 'f85c3e38-3650-4ede-9782-5c21bf4f0a3b';

-- ---------- 字 (TỰ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 字 (TỰ) có âm ON (chính) là gì?', 'か', 'じ', 'いん', 'げん', 'じ', 'generated' from jp_kanji where id = '2517d53a-c1f6-42b5-ab3b-dd0571f9a755';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chữ"?', '本', '左', '車', '字', '字', 'generated' from jp_kanji where id = '2517d53a-c1f6-42b5-ab3b-dd0571f9a755';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"漢字" có nghĩa là gì?', 'chữ Hán', 'sáu cái, sáu chiếc', 'người yêu', 'nam giới, nam tính', 'chữ Hán', 'generated' from jp_kanji where id = '2517d53a-c1f6-42b5-ab3b-dd0571f9a755';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 字', 'じ', 'generated' from jp_kanji where id = '2517d53a-c1f6-42b5-ab3b-dd0571f9a755';

-- ---------- 学 (HỌC) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 学 (HỌC) có âm ON (chính) là gì?', 'りょく', 'げ', 'がく', 'しゅ', 'がく', 'generated' from jp_kanji where id = '0602f9f2-ff09-4bd7-89bb-f3e78a09c147';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "học"?', '上', '学', '食', '長', '学', 'generated' from jp_kanji where id = '0602f9f2-ff09-4bd7-89bb-f3e78a09c147';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"大学" có nghĩa là gì?', 'con (của người khác)', 'bên trên', 'ít, không nhiều', 'đại học', 'đại học', 'generated' from jp_kanji where id = '0602f9f2-ff09-4bd7-89bb-f3e78a09c147';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 学校', 'がっこう', 'generated' from jp_kanji where id = '0602f9f2-ff09-4bd7-89bb-f3e78a09c147';

-- ---------- 安 (AN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 安 (AN) có âm ON (chính) là gì?', 'しゃ', 'ちゅう', 'に', 'あん', 'あん', 'generated' from jp_kanji where id = 'bbad927d-93af-41e0-815b-6e77a52ce546';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "rẻ, an toàn"?', '千', '聞', '安', '花', '安', 'generated' from jp_kanji where id = 'bbad927d-93af-41e0-815b-6e77a52ce546';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"安い" có nghĩa là gì?', 'rẻ', 'mừng trở về!', 'vòng quanh thế giới', 'hoàng hôn, chiều tối', 'rẻ', 'generated' from jp_kanji where id = 'bbad927d-93af-41e0-815b-6e77a52ce546';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 安心します', 'あんしんします', 'generated' from jp_kanji where id = 'bbad927d-93af-41e0-815b-6e77a52ce546';

-- ---------- 寺 (TỰ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 寺 (TỰ) có âm ON (chính) là gì?', 'じ', 'ぎゅう', 'しょう', 'にん', 'じ', 'generated' from jp_kanji where id = '28abc479-e459-4a71-b397-ddac0192d340';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "chùa"?', '見', '寺', '川', '買', '寺', 'generated' from jp_kanji where id = '28abc479-e459-4a71-b397-ddac0192d340';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お寺" có nghĩa là gì?', 'thứ 2', 'báo', 'tháng này', 'đền chùa', 'đền chùa', 'generated' from jp_kanji where id = '28abc479-e459-4a71-b397-ddac0192d340';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お寺', 'おてら', 'generated' from jp_kanji where id = '28abc479-e459-4a71-b397-ddac0192d340';

-- ---------- 小 (TIỂU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 小 (TIỂU) có âm ON (chính) là gì?', 'う', 'しょう', 'ない', 'りょく', 'しょう', 'generated' from jp_kanji where id = '881a6bee-42ad-48a5-a780-cf1595c69db9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhỏ, bé"?', '少', '小', '父', '上', '小', 'generated' from jp_kanji where id = '881a6bee-42ad-48a5-a780-cf1595c69db9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"小さい" có nghĩa là gì?', 'sách hướng dẫn', 'nhỏ, bé', 'ngày mùng 1', 'đồ để quên', 'nhỏ, bé', 'generated' from jp_kanji where id = '881a6bee-42ad-48a5-a780-cf1595c69db9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 小さな', 'ちいさな', 'generated' from jp_kanji where id = '881a6bee-42ad-48a5-a780-cf1595c69db9';

-- ---------- 少 (THIỂU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 少 (THIỂU) có âm ON (chính) là gì?', 'ふ', 'みょう', 'しち', 'しょう', 'しょう', 'generated' from jp_kanji where id = 'a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ít"?', '手', '少', '休', '六', '少', 'generated' from jp_kanji where id = 'a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"少し" có nghĩa là gì?', 'phần ăn theo suất', 'ít, không nhiều', 'quà quê', 'một chút, một ít', 'một chút, một ít', 'generated' from jp_kanji where id = 'a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 少ない', 'すくない', 'generated' from jp_kanji where id = 'a84c0c9d-7f8b-43ce-a74a-2bd07b16a2d5';

-- ---------- 山 (SƠN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 山 (SƠN) có âm ON (chính) là gì?', 'さん', 'みょう', 'ない', 'さ', 'さん', 'generated' from jp_kanji where id = '2a829e22-1457-41b9-aa54-310dc9e985b3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "núi"?', '読', '山', '買', '時', '山', 'generated' from jp_kanji where id = '2a829e22-1457-41b9-aa54-310dc9e985b3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"山" có nghĩa là gì?', 'lối vào', 'ngọn núi', 'du học sinh', 'chăm chỉ hết sức', 'ngọn núi', 'generated' from jp_kanji where id = '2a829e22-1457-41b9-aa54-310dc9e985b3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 山登り', 'やまのぼり', 'generated' from jp_kanji where id = '2a829e22-1457-41b9-aa54-310dc9e985b3';

-- ---------- 川 (XUYÊN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 川 (XUYÊN) có âm KUN (chính) là gì?', 'うわ', 'した', 'おんな', 'かわ', 'かわ', 'generated' from jp_kanji where id = 'd4e06ce2-72ec-4d1a-9bce-31d15c9e0a58';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sông"?', '多', '内', '川', '牛', '川', 'generated' from jp_kanji where id = 'd4e06ce2-72ec-4d1a-9bce-31d15c9e0a58';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"川" có nghĩa là gì?', 'con sông', 'ngày mùng 4', 'cái cây', 'tháng 3', 'con sông', 'generated' from jp_kanji where id = 'd4e06ce2-72ec-4d1a-9bce-31d15c9e0a58';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 川', 'かわ', 'generated' from jp_kanji where id = 'd4e06ce2-72ec-4d1a-9bce-31d15c9e0a58';

-- ---------- 左 (TẢ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 左 (TẢ) có âm KUN (chính) là gì?', 'く', 'おこな', 'ひだり', 'か', 'ひだり', 'generated' from jp_kanji where id = '84f5a966-e0d4-44bc-b75c-e420862ea9ba';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bên trái"?', '水', '生', '校', '左', '左', 'generated' from jp_kanji where id = '84f5a966-e0d4-44bc-b75c-e420862ea9ba';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"左" có nghĩa là gì?', 'tuần trước', 'trường THCS', 'phía bên trái', 'rất thích, yêu', 'phía bên trái', 'generated' from jp_kanji where id = '84f5a966-e0d4-44bc-b75c-e420862ea9ba';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 左', 'ひだり', 'generated' from jp_kanji where id = '84f5a966-e0d4-44bc-b75c-e420862ea9ba';

-- ---------- 帰 (QUY) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 帰 (QUY) có âm ON (chính) là gì?', 'りつ', 'きん', 'き', 'がく', 'き', 'generated' from jp_kanji where id = '095ad391-e23f-4b91-8bf0-a1eed35a0fc6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "về, trở về"?', '帰', '気', '話', '年', '帰', 'generated' from jp_kanji where id = '095ad391-e23f-4b91-8bf0-a1eed35a0fc6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"帰ります" có nghĩa là gì?', 'Trà đạo', 'mua sắm', 'về (nhà)', 'nhập viện', 'về (nhà)', 'generated' from jp_kanji where id = '095ad391-e23f-4b91-8bf0-a1eed35a0fc6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お帰りなさい', 'おかえりなさい', 'generated' from jp_kanji where id = '095ad391-e23f-4b91-8bf0-a1eed35a0fc6';

-- ---------- 年 (NIÊN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 年 (NIÊN) có âm ON (chính) là gì?', 'わ', 'どく', 'まん', 'ねん', 'ねん', 'generated' from jp_kanji where id = '91dab8de-7213-4b46-be27-24a54c28d9f8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "năm"?', '肉', '音', '年', '雨', '年', 'generated' from jp_kanji where id = '91dab8de-7213-4b46-be27-24a54c28d9f8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"半年" có nghĩa là gì?', 'cách -', 'an toàn', 'đi ra ngoài', 'nửa năm', 'nửa năm', 'generated' from jp_kanji where id = '91dab8de-7213-4b46-be27-24a54c28d9f8';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 来年', 'らいねん', 'generated' from jp_kanji where id = '91dab8de-7213-4b46-be27-24a54c28d9f8';

-- ---------- 手 (THỦ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 手 (THỦ) có âm ON (chính) là gì?', 'びゃく', 'ぶん', 'しゅ', 'いち', 'しゅ', 'generated' from jp_kanji where id = 'd8f9817b-2068-4a84-9a06-51509bb978cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tay"?', '本', '十', '手', '肉', '手', 'generated' from jp_kanji where id = 'd8f9817b-2068-4a84-9a06-51509bb978cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"手帳" có nghĩa là gì?', 'cuốn sổ tay', 'tuột ra; chệch ra', 'đang sử dụng', 'rất thích, yêu', 'cuốn sổ tay', 'generated' from jp_kanji where id = 'd8f9817b-2068-4a84-9a06-51509bb978cb';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: お手洗い', 'おてあらい', 'generated' from jp_kanji where id = 'd8f9817b-2068-4a84-9a06-51509bb978cb';

-- ---------- 新 (TÂN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 新 (TÂN) có âm ON (chính) là gì?', 'じゅう', 'しん', 'す', 'にゅう', 'しん', 'generated' from jp_kanji where id = '24a22681-d63b-4503-8e1c-13838c500853';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mới"?', '名', '新', '安', '男', '新', 'generated' from jp_kanji where id = '24a22681-d63b-4503-8e1c-13838c500853';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"新しい" có nghĩa là gì?', 'đồ để giặt', 'hành lý', 'mới', 'có ích', 'mới', 'generated' from jp_kanji where id = '24a22681-d63b-4503-8e1c-13838c500853';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 新幹線', 'しんかんせん', 'generated' from jp_kanji where id = '24a22681-d63b-4503-8e1c-13838c500853';

-- ---------- 方 (PHƯƠNG) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 方 (PHƯƠNG) có âm ON (chính) là gì?', 'ぎょ', 'あん', 'ひゃく', 'ほう', 'ほう', 'generated' from jp_kanji where id = '46026865-98d0-49fc-91d3-6e86ae80d20c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "phía, cách, người (kính ngữ)"?', '寺', '手', '半', '方', '方', 'generated' from jp_kanji where id = '46026865-98d0-49fc-91d3-6e86ae80d20c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"あの方" có nghĩa là gì?', 'xe ô tô', 'bao tay', 'bên ngoài', 'vị kia, ngài kia', 'vị kia, ngài kia', 'generated' from jp_kanji where id = '46026865-98d0-49fc-91d3-6e86ae80d20c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 読み方', 'よみかた', 'generated' from jp_kanji where id = '46026865-98d0-49fc-91d3-6e86ae80d20c';

-- ---------- 日 (NHẬT) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 日 (NHẬT) có âm ON (chính) là gì?', 'まん', 'にち', 'おん', 'こう', 'にち', 'generated' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ngày, mặt trời"?', '日', '九', '読', '三', '日', 'generated' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"母の日" có nghĩa là gì?', 'tuột ra; chệch ra', 'vừa nãy', 'ngày của Mẹ', 'văn học', 'ngày của Mẹ', 'generated' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 一日', 'ついたち', 'generated' from jp_kanji where id = '2db9ba96-707d-4661-938c-60f5734250fd';

-- ---------- 明 (MINH) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 明 (MINH) có âm ON (chính) là gì?', 'か', 'じ', 'めい', 'こう', 'めい', 'generated' from jp_kanji where id = 'b7241328-09c8-47a3-8b46-a78b582fedc1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sáng, rõ ràng"?', '三', '火', '右', '明', '明', 'generated' from jp_kanji where id = 'b7241328-09c8-47a3-8b46-a78b582fedc1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"明るい" có nghĩa là gì?', 'vạn (mười nghìn)', 'nước', 'ngày mùng 3', 'sáng, sáng sủa', 'sáng, sáng sủa', 'generated' from jp_kanji where id = 'b7241328-09c8-47a3-8b46-a78b582fedc1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 説明します', 'せつめいします', 'generated' from jp_kanji where id = 'b7241328-09c8-47a3-8b46-a78b582fedc1';

-- ---------- 時 (THỜI) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 時 (THỜI) có âm ON (chính) là gì?', 'しゅ', 'じ', 'らい', 'ぼく', 'じ', 'generated' from jp_kanji where id = '63ad9875-b854-4254-90a6-f8c540f4573d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "giờ, thời gian"?', '生', '時', '言', '雨', '時', 'generated' from jp_kanji where id = '63ad9875-b854-4254-90a6-f8c540f4573d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"時計" có nghĩa là gì?', 'mấy phút', 'đồng hồ', 'tiền thưởng', 'người kia', 'đồng hồ', 'generated' from jp_kanji where id = '63ad9875-b854-4254-90a6-f8c540f4573d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 時々', 'ときどき', 'generated' from jp_kanji where id = '63ad9875-b854-4254-90a6-f8c540f4573d';

-- ---------- 暗 (ÁM) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 暗 (ÁM) có âm ON (chính) là gì?', 'しょ', 'き', 'す', 'あん', 'あん', 'generated' from jp_kanji where id = '3511933d-c268-4c15-8328-5d386b654525';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tối"?', '暗', '一', '音', '生', '暗', 'generated' from jp_kanji where id = '3511933d-c268-4c15-8328-5d386b654525';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"暗い" có nghĩa là gì?', 'con (của người khác)', 'tất', 'tối', 'sữa bò', 'tối', 'generated' from jp_kanji where id = '3511933d-c268-4c15-8328-5d386b654525';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 暗証番号', 'あんしょうばんごう', 'generated' from jp_kanji where id = '3511933d-c268-4c15-8328-5d386b654525';

-- ---------- 書 (THƯ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 書 (THƯ) có âm ON (chính) là gì?', 'しょ', 'じゅう', 'ぽん', 'めい', 'しょ', 'generated' from jp_kanji where id = 'b6670085-1f24-4e9f-9f8d-9b6c776d06a9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "viết, sách, văn bản"?', '寺', '川', '書', '内', '書', 'generated' from jp_kanji where id = 'b6670085-1f24-4e9f-9f8d-9b6c776d06a9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"書きます" có nghĩa là gì?', 'mang đi theo', 'con người', 'viết', 'cái gì', 'viết', 'generated' from jp_kanji where id = 'b6670085-1f24-4e9f-9f8d-9b6c776d06a9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 辞書', 'じしょ', 'generated' from jp_kanji where id = 'b6670085-1f24-4e9f-9f8d-9b6c776d06a9';

-- ---------- 月 (NGUYỆT) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 月 (NGUYỆT) có âm ON (chính) là gì?', 'げつ', 'きゅう', 'ねん', 'じつ', 'げつ', 'generated' from jp_kanji where id = '2b4e8cda-7d2f-4020-91e6-b86b77e8d885';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "tháng, mặt trăng"?', '書', '立', '年', '月', '月', 'generated' from jp_kanji where id = '2b4e8cda-7d2f-4020-91e6-b86b77e8d885';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"月" có nghĩa là gì?', 'tiệc mừng năm mới', 'hành lang', 'bé trai', 'mặt trăng', 'mặt trăng', 'generated' from jp_kanji where id = '2b4e8cda-7d2f-4020-91e6-b86b77e8d885';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 月曜日', 'げつようび', 'generated' from jp_kanji where id = '2b4e8cda-7d2f-4020-91e6-b86b77e8d885';

-- ---------- 木 (MỘC) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 木 (MỘC) có âm ON (chính) là gì?', 'か', 'す', 'もく', 'ず', 'もく', 'generated' from jp_kanji where id = '3b00bab8-bb71-49b4-a48a-aab1f70bf566';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cây, gỗ"?', '左', '行', '木', '好', '木', 'generated' from jp_kanji where id = '3b00bab8-bb71-49b4-a48a-aab1f70bf566';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"木" có nghĩa là gì?', 'mơ giấc mơ', 'áo khoác', 'được yêu thích', 'cái cây', 'cái cây', 'generated' from jp_kanji where id = '3b00bab8-bb71-49b4-a48a-aab1f70bf566';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 木曜日', 'もくようび', 'generated' from jp_kanji where id = '3b00bab8-bb71-49b4-a48a-aab1f70bf566';

-- ---------- 本 (BẢN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 本 (BẢN) có âm ON (chính) là gì?', 'ばい', 'ほん', 'じゅう', 'いん', 'ほん', 'generated' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sách, gốc, cây (đếm vật dài)"?', '友', '雨', '土', '本', '本', 'generated' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"日本" có nghĩa là gì?', 'Nhật Bản', 'con người', 'đồ vật', 'tiệc mừng năm mới', 'Nhật Bản', 'generated' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 本', 'ほん', 'generated' from jp_kanji where id = '20b874e7-79b9-4221-a41a-2b1ee73c2356';

-- ---------- 来 (LAI) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 来 (LAI) có âm ON (chính) là gì?', 'らい', 'げん', 'けん', 'じょう', 'らい', 'generated' from jp_kanji where id = 'afd75b3e-82a3-4c74-b642-84b339266c40';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đến, tới, sau (thời gian)"?', '新', '時', '来', '車', '来', 'generated' from jp_kanji where id = 'afd75b3e-82a3-4c74-b642-84b339266c40';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"〜から来ました" có nghĩa là gì?', '10 triệu', 'áo khoác', 'đến từ -', 'hàng thật', 'đến từ -', 'generated' from jp_kanji where id = 'afd75b3e-82a3-4c74-b642-84b339266c40';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 来ます', 'きます', 'generated' from jp_kanji where id = 'afd75b3e-82a3-4c74-b642-84b339266c40';

-- ---------- 校 (HIỆU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 校 (HIỆU) có âm ON (chính) là gì?', 'にん', 'しゅ', 'さん', 'こう', 'こう', 'generated' from jp_kanji where id = '3941f7dc-8482-459c-b718-6e2ac961423d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trường học"?', '校', '五', '手', '安', '校', 'generated' from jp_kanji where id = '3941f7dc-8482-459c-b718-6e2ac961423d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"学校" có nghĩa là gì?', 'người lớn', 'trường học', 'thứ 3', 'dưới lòng đất', 'trường học', 'generated' from jp_kanji where id = '3941f7dc-8482-459c-b718-6e2ac961423d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 高校', 'こうこう', 'generated' from jp_kanji where id = '3941f7dc-8482-459c-b718-6e2ac961423d';

-- ---------- 母 (MẪU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 母 (MẪU) có âm ON (chính) là gì?', 'ぼ', 'きん', 'しょ', 'しゅつ', 'ぼ', 'generated' from jp_kanji where id = 'ea7e8d3d-552c-4af8-9583-3bb7e40c92e7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mẹ"?', '母', '米', '八', '木', '母', 'generated' from jp_kanji where id = 'ea7e8d3d-552c-4af8-9583-3bb7e40c92e7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"母" có nghĩa là gì?', 'mẹ', 'mấy tuổi', 'nghỉ trưa', 'thời gian biểu', 'mẹ', 'generated' from jp_kanji where id = 'ea7e8d3d-552c-4af8-9583-3bb7e40c92e7';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 母の日', 'ははのひ', 'generated' from jp_kanji where id = 'ea7e8d3d-552c-4af8-9583-3bb7e40c92e7';

-- ---------- 気 (KHÍ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 気 (KHÍ) có âm ON (chính) là gì?', 'ぶん', 'まん', 'じょう', 'き', 'き', 'generated' from jp_kanji where id = '8994546b-d102-46a6-a8e2-21214cab1adf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "khí, tinh thần"?', '気', '読', '八', '六', '気', 'generated' from jp_kanji where id = '8994546b-d102-46a6-a8e2-21214cab1adf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お元気で" có nghĩa là gì?', 'tàu điện Shinkansen', 'cái cây', 'gọi điện thoại', 'anh/chị giữ sức khỏe', 'anh/chị giữ sức khỏe', 'generated' from jp_kanji where id = '8994546b-d102-46a6-a8e2-21214cab1adf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 天気', 'てんき', 'generated' from jp_kanji where id = '8994546b-d102-46a6-a8e2-21214cab1adf';

-- ---------- 水 (THỦY) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 水 (THỦY) có âm ON (chính) là gì?', 'こう', 'すい', 'ちゃ', 'う', 'すい', 'generated' from jp_kanji where id = '6bd179b4-1875-4375-a987-3c4dadd9bc37';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nước"?', '中', '半', '水', '方', '水', 'generated' from jp_kanji where id = '6bd179b4-1875-4375-a987-3c4dadd9bc37';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"水" có nghĩa là gì?', 'nhà ga Honda', 'mong nhận được sự giúp đỡ', 'năm sau', 'nước', 'nước', 'generated' from jp_kanji where id = '6bd179b4-1875-4375-a987-3c4dadd9bc37';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 水曜日', 'すいようび', 'generated' from jp_kanji where id = '6bd179b4-1875-4375-a987-3c4dadd9bc37';

-- ---------- 火 (HỎA) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 火 (HỎA) có âm ON (chính) là gì?', 'しょう', 'か', 'げつ', 'すい', 'か', 'generated' from jp_kanji where id = '4c013562-c82c-4723-a49e-d02d69a241a5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "lửa"?', '話', '火', '古', '十', '火', 'generated' from jp_kanji where id = '4c013562-c82c-4723-a49e-d02d69a241a5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"火" có nghĩa là gì?', 'gạo', 'lửa', 'mấy giờ', 'cuộc sống', 'lửa', 'generated' from jp_kanji where id = '4c013562-c82c-4723-a49e-d02d69a241a5';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 花火', 'はなび', 'generated' from jp_kanji where id = '4c013562-c82c-4723-a49e-d02d69a241a5';

-- ---------- 父 (PHỤ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 父 (PHỤ) có âm ON (chính) là gì?', 'こう', 'ふ', 'こう', 'ばん', 'ふ', 'generated' from jp_kanji where id = '472b1504-dcf3-426c-9651-2e6e4d93208d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bố, cha"?', '女', '少', '父', '内', '父', 'generated' from jp_kanji where id = '472b1504-dcf3-426c-9651-2e6e4d93208d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"父" có nghĩa là gì?', 'đối tác, đối phương', 'mơ giấc mơ', 'phát minh', 'bố, cha', 'bố, cha', 'generated' from jp_kanji where id = '472b1504-dcf3-426c-9651-2e6e4d93208d';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 祖父', 'そふ', 'generated' from jp_kanji where id = '472b1504-dcf3-426c-9651-2e6e4d93208d';

-- ---------- 牛 (NGƯU) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 牛 (NGƯU) có âm ON (chính) là gì?', 'ぎゅう', 'でん', 'びゃく', 'じゅう', 'ぎゅう', 'generated' from jp_kanji where id = '1d02de3b-dcae-4389-88b0-9fe579c6e0c2';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "bò"?', '気', '雨', '牛', '母', '牛', 'generated' from jp_kanji where id = '1d02de3b-dcae-4389-88b0-9fe579c6e0c2';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"牡牛座" có nghĩa là gì?', 'một chút, một ít', 'sống lâu', 'chòm sao Kim Ngưu', 'phần ăn theo suất', 'chòm sao Kim Ngưu', 'generated' from jp_kanji where id = '1d02de3b-dcae-4389-88b0-9fe579c6e0c2';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 牛乳', 'ぎゅうにゅう', 'generated' from jp_kanji where id = '1d02de3b-dcae-4389-88b0-9fe579c6e0c2';

-- ---------- 物 (VẬT) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 物 (VẬT) có âm ON (chính) là gì?', 'ぶつ', 'じ', 'う', 'ど', 'ぶつ', 'generated' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đồ vật, vật"?', '力', '物', '寺', '字', '物', 'generated' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"果物" có nghĩa là gì?', 'hoa quả', 'nhà soạn nhạc', 'tự mình', 'kimono', 'hoa quả', 'generated' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 食べ物', 'たべもの', 'generated' from jp_kanji where id = '9ccfbc07-c387-47f8-a4ca-3f942b5b4e4a';

-- ---------- 生 (SINH) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 生 (SINH) có âm ON (chính) là gì?', 'ぶっ', 'こう', 'こう', 'せい', 'せい', 'generated' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "sinh, sống"?', '物', '八', '人', '生', '生', 'generated' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"生け花" có nghĩa là gì?', 'tiền', 'ikebana', 'mấy giờ', 'trưởng phòng', 'ikebana', 'generated' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 長生き', 'ながいき', 'generated' from jp_kanji where id = '5fc1a79e-64e4-480a-ac1f-c7cadf9aa94e';

-- ---------- 田 (ĐIỀN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 田 (ĐIỀN) có âm KUN (chính) là gì?', 'はは', 'た', 'ふる', 'ご', 'た', 'generated' from jp_kanji where id = '5b4c4fa5-5d09-4c16-b572-93dc85d921ac';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ruộng"?', '魚', '田', '生', '聞', '田', 'generated' from jp_kanji where id = '5b4c4fa5-5d09-4c16-b572-93dc85d921ac';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"本田駅" có nghĩa là gì?', 'giỏi, thông thạo', 'nhà ga Honda', 'Vạn Lý Trường Thành', 'dưới đây', 'nhà ga Honda', 'generated' from jp_kanji where id = '5b4c4fa5-5d09-4c16-b572-93dc85d921ac';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 田舎', 'いなか', 'generated' from jp_kanji where id = '5b4c4fa5-5d09-4c16-b572-93dc85d921ac';

-- ---------- 男 (NAM) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 男 (NAM) có âm ON (chính) là gì?', 'じ', 'す', 'だん', 'じっ', 'だん', 'generated' from jp_kanji where id = 'fb36028f-e675-4842-a394-d18e5557d180';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "con trai, nam"?', '休', '川', '女', '男', '男', 'generated' from jp_kanji where id = 'fb36028f-e675-4842-a394-d18e5557d180';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"男の人" có nghĩa là gì?', 'người con trai', 'tầng mấy', 'bên ngoài', 'tháng 3', 'người con trai', 'generated' from jp_kanji where id = 'fb36028f-e675-4842-a394-d18e5557d180';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 男の子', 'おとこのこ', 'generated' from jp_kanji where id = 'fb36028f-e675-4842-a394-d18e5557d180';

-- ---------- 町 (ĐINH) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 町 (ĐINH) có âm ON (chính) là gì?', 'ちょう', 'あん', 'でん', 'がく', 'ちょう', 'generated' from jp_kanji where id = '1b41805a-64fd-4cfa-bb3b-c139ef1b691c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "phố, thị trấn"?', '茶', '町', '山', '行', '町', 'generated' from jp_kanji where id = '1b41805a-64fd-4cfa-bb3b-c139ef1b691c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"町" có nghĩa là gì?', 'nhiều', 'trường THPT', 'bạn bè', 'con phố, thị trấn', 'con phố, thị trấn', 'generated' from jp_kanji where id = '1b41805a-64fd-4cfa-bb3b-c139ef1b691c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 町', 'まち', 'generated' from jp_kanji where id = '1b41805a-64fd-4cfa-bb3b-c139ef1b691c';

-- ---------- 百 (BÁCH) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 百 (BÁCH) có âm ON (chính) là gì?', 'いん', 'ぎゅう', 'すい', 'ひゃく', 'ひゃく', 'generated' from jp_kanji where id = 'a444ab05-f181-44f3-a60a-0680b0568b07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trăm, số 100"?', '六', '買', '木', '百', '百', 'generated' from jp_kanji where id = 'a444ab05-f181-44f3-a60a-0680b0568b07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"百" có nghĩa là gì?', 'một trăm', 'chính giữa', 'ngày mùng 2', 'rút (tiền)', 'một trăm', 'generated' from jp_kanji where id = 'a444ab05-f181-44f3-a60a-0680b0568b07';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 二百', 'にひゃく', 'generated' from jp_kanji where id = 'a444ab05-f181-44f3-a60a-0680b0568b07';

-- ---------- 立 (LẬP) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 立 (LẬP) có âm ON (chính) là gì?', 'じ', 'もく', 'りつ', 'りょく', 'りつ', 'generated' from jp_kanji where id = '1276a9bf-da94-4712-baf2-922766a5dd20';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đứng, thành lập"?', '分', '立', '車', '年', '立', 'generated' from jp_kanji where id = '1276a9bf-da94-4712-baf2-922766a5dd20';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"立ちます" có nghĩa là gì?', 'nhân vật chính', 'đứng', 'đền chùa', 'mấy phút', 'đứng', 'generated' from jp_kanji where id = '1276a9bf-da94-4712-baf2-922766a5dd20';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 役に立ちます', 'やくにたちます', 'generated' from jp_kanji where id = '1276a9bf-da94-4712-baf2-922766a5dd20';

-- ---------- 米 (MỄ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 米 (MỄ) có âm KUN (chính) là gì?', 'な', 'こめ', 'ね', 'い', 'こめ', 'generated' from jp_kanji where id = 'fa3ea889-b2fb-4eb6-b7de-ba4c555435b9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "gạo"?', '見', '米', '長', '子', '米', 'generated' from jp_kanji where id = 'fa3ea889-b2fb-4eb6-b7de-ba4c555435b9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"米" có nghĩa là gì?', 'nước ngoài', 'nghỉ ngơi', 'hạ xuống, giảm đi', 'gạo', 'gạo', 'generated' from jp_kanji where id = 'fa3ea889-b2fb-4eb6-b7de-ba4c555435b9';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 米', 'こめ', 'generated' from jp_kanji where id = 'fa3ea889-b2fb-4eb6-b7de-ba4c555435b9';

-- ---------- 聞 (VĂN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 聞 (VĂN) có âm ON (chính) là gì?', 'ぶん', 'ほう', 'ゆう', 'いち', 'ぶん', 'generated' from jp_kanji where id = 'dd9ab49c-f269-41b8-a690-1136adaea0e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nghe, tin tức"?', '話', '方', '聞', '大', '聞', 'generated' from jp_kanji where id = 'dd9ab49c-f269-41b8-a690-1136adaea0e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"聞きます" có nghĩa là gì?', 'dân số', 'y học', 'Vạn Lý Trường Thành', 'nghe', 'nghe', 'generated' from jp_kanji where id = 'dd9ab49c-f269-41b8-a690-1136adaea0e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 聞こえます', 'きこえます', 'generated' from jp_kanji where id = 'dd9ab49c-f269-41b8-a690-1136adaea0e1';

-- ---------- 肉 (NHỤC) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 肉 (NHỤC) có âm ON (chính) là gì?', 'にく', 'こう', 'じ', 'ねん', 'にく', 'generated' from jp_kanji where id = 'd4a08084-f9d1-4399-93f5-760009b28a66';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "thịt"?', '九', '車', '電', '肉', '肉', 'generated' from jp_kanji where id = 'd4a08084-f9d1-4399-93f5-760009b28a66';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"肉" có nghĩa là gì?', '5 yên', 'thịt', 'ngân hàng', 'chữ', 'thịt', 'generated' from jp_kanji where id = 'd4a08084-f9d1-4399-93f5-760009b28a66';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 豚肉', 'ぶたにく', 'generated' from jp_kanji where id = 'd4a08084-f9d1-4399-93f5-760009b28a66';

-- ---------- 花 (HOA) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 花 (HOA) có âm ON (chính) là gì?', 'どく', 'しち', 'か', 'こう', 'か', 'generated' from jp_kanji where id = '58af428d-f3ed-4780-a45e-d8d4317877cf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "hoa"?', '聞', '田', '花', '校', '花', 'generated' from jp_kanji where id = '58af428d-f3ed-4780-a45e-d8d4317877cf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"花見" có nghĩa là gì?', 'ngày mùng 4', 'nhập viện', 'độ cao', 'ngắm hoa anh đào', 'ngắm hoa anh đào', 'generated' from jp_kanji where id = '58af428d-f3ed-4780-a45e-d8d4317877cf';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 花', 'はな', 'generated' from jp_kanji where id = '58af428d-f3ed-4780-a45e-d8d4317877cf';

-- ---------- 茶 (TRÀ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 茶 (TRÀ) có âm ON (chính) là gì?', 'し', 'ず', 'ぶっ', 'ちゃ', 'ちゃ', 'generated' from jp_kanji where id = 'cf521479-7017-4eda-9f9e-dab6b2ba2042';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "trà"?', '木', '字', '休', '茶', '茶', 'generated' from jp_kanji where id = 'cf521479-7017-4eda-9f9e-dab6b2ba2042';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お茶" có nghĩa là gì?', 'tiền thưởng', 'cục pin', 'trà xanh', 'cửa ra', 'trà xanh', 'generated' from jp_kanji where id = 'cf521479-7017-4eda-9f9e-dab6b2ba2042';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 紅茶', 'こうちゃ', 'generated' from jp_kanji where id = 'cf521479-7017-4eda-9f9e-dab6b2ba2042';

-- ---------- 行 (HÀNH) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 行 (HÀNH) có âm ON (chính) là gì?', 'か', 'じ', 'こう', 'ぎゅう', 'こう', 'generated' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đi, hành động"?', '行', '分', '新', '日', '行', 'generated' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"行きます" có nghĩa là gì?', 'hạ xuống, giảm đi', 'xuất phát', 'cái cây', 'đi', 'đi', 'generated' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 持って行きます', 'もっていきます', 'generated' from jp_kanji where id = '0a1adeec-6f67-4fc3-ab4a-02363f3cce44';

-- ---------- 見 (KIẾN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 見 (KIẾN) có âm ON (chính) là gì?', 'でん', 'じょう', 'けん', 'じょう', 'けん', 'generated' from jp_kanji where id = '1d01272b-d154-4965-b645-27cb9200622c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nhìn, xem, thấy"?', '十', '本', '百', '見', '見', 'generated' from jp_kanji where id = '1d01272b-d154-4965-b645-27cb9200622c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"見せてください" có nghĩa là gì?', 'truyền đạt lại', 'trường THPT', 'tàu điện ngầm', 'hãy cho tôi xem', 'hãy cho tôi xem', 'generated' from jp_kanji where id = '1d01272b-d154-4965-b645-27cb9200622c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 見ます', 'みます', 'generated' from jp_kanji where id = '1d01272b-d154-4965-b645-27cb9200622c';

-- ---------- 言 (NGÔN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 言 (NGÔN) có âm ON (chính) là gì?', 'しゅ', 'す', 'ごん', 'ご', 'ごん', 'generated' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nói, lời nói"?', '言', '下', '魚', '内', '言', 'generated' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"言います" có nghĩa là gì?', 'độ lớn', 'vòng quanh thế giới', 'nói', 'ba cái, ba chiếc', 'nói', 'generated' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 言い伝え', 'いいつたえ', 'generated' from jp_kanji where id = '5dc41744-d880-420a-856d-4223caf883dc';

-- ---------- 話 (THOẠI) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 話 (THOẠI) có âm ON (chính) là gì?', 'わ', 'せん', 'しん', 'しょう', 'わ', 'generated' from jp_kanji where id = 'adcc4756-f9ef-4f75-a7d1-fa682d05c8a6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "nói chuyện, câu chuyện"?', '見', '話', '飲', '行', '話', 'generated' from jp_kanji where id = 'adcc4756-f9ef-4f75-a7d1-fa682d05c8a6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"話します" có nghĩa là gì?', 'tầng mấy', 'sữa bò', 'nhập, đưa vào', 'nói chuyện', 'nói chuyện', 'generated' from jp_kanji where id = 'adcc4756-f9ef-4f75-a7d1-fa682d05c8a6';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 話', 'はなし', 'generated' from jp_kanji where id = 'adcc4756-f9ef-4f75-a7d1-fa682d05c8a6';

-- ---------- 読 (ĐỘC) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 読 (ĐỘC) có âm ON (chính) là gì?', 'じょう', 'はん', 'こう', 'どく', 'どく', 'generated' from jp_kanji where id = 'd82f83a6-0653-4173-92ae-408191416fd1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "đọc"?', '大', '行', '車', '読', '読', 'generated' from jp_kanji where id = 'd82f83a6-0653-4173-92ae-408191416fd1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"読みます" có nghĩa là gì?', 'trưởng phòng', 'đọc', 'quà quê', 'học sinh tiểu học', 'đọc', 'generated' from jp_kanji where id = 'd82f83a6-0653-4173-92ae-408191416fd1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 読み方', 'よみかた', 'generated' from jp_kanji where id = 'd82f83a6-0653-4173-92ae-408191416fd1';

-- ---------- 買 (MÃI) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 買 (MÃI) có âm ON (chính) là gì?', 'ばい', 'す', 'しゅ', 'じ', 'ばい', 'generated' from jp_kanji where id = 'e4760ba3-5e21-4a4b-9d47-173877a7788e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mua"?', '買', '牛', '日', '少', '買', 'generated' from jp_kanji where id = 'e4760ba3-5e21-4a4b-9d47-173877a7788e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"買います" có nghĩa là gì?', 'mua', 'con tem', 'học sinh tiểu học', 'không sao', 'mua', 'generated' from jp_kanji where id = 'e4760ba3-5e21-4a4b-9d47-173877a7788e';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 買い物します', 'かいものします', 'generated' from jp_kanji where id = 'e4760ba3-5e21-4a4b-9d47-173877a7788e';

-- ---------- 車 (XA) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 車 (XA) có âm ON (chính) là gì?', 'はち', 'どく', 'さん', 'しゃ', 'しゃ', 'generated' from jp_kanji where id = 'c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "xe"?', '父', '来', '帰', '車', '車', 'generated' from jp_kanji where id = 'c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"車" có nghĩa là gì?', 'xe ô tô', 'bộ dạng, dáng', 'dân số', 'đang sử dụng', 'xe ô tô', 'generated' from jp_kanji where id = 'c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 電車', 'でんしゃ', 'generated' from jp_kanji where id = 'c9ec9a8e-63b7-4d2f-a775-a35e37de6ff3';

-- ---------- 金 (KIM) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 金 (KIM) có âm ON (chính) là gì?', 'しゅ', 'きん', 'じょう', 'こん', 'きん', 'generated' from jp_kanji where id = '78e376fa-81ba-4232-87ba-729a612c9fa3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "vàng, tiền, kim loại"?', '方', '川', '聞', '金', '金', 'generated' from jp_kanji where id = '78e376fa-81ba-4232-87ba-729a612c9fa3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"お金" có nghĩa là gì?', 'người lớn', 'ở giữa', 'ngày mùng 10', 'tiền', 'tiền', 'generated' from jp_kanji where id = '78e376fa-81ba-4232-87ba-729a612c9fa3';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 細かいお金', 'こまかいおかね', 'generated' from jp_kanji where id = '78e376fa-81ba-4232-87ba-729a612c9fa3';

-- ---------- 長 (TRƯỞNG) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 長 (TRƯỞNG) có âm ON (chính) là gì?', 'ぜん', 'しゅつ', 'ちょう', 'しゅ', 'ちょう', 'generated' from jp_kanji where id = 'a6d74564-a9c4-4868-a6be-8aec42a7f2ca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "dài, trưởng"?', '長', '校', '左', '行', '長', 'generated' from jp_kanji where id = 'a6d74564-a9c4-4868-a6be-8aec42a7f2ca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"長い" có nghĩa là gì?', 'cảm xúc, tâm trạng', 'yên', 'mang đi theo', 'dài', 'dài', 'generated' from jp_kanji where id = 'a6d74564-a9c4-4868-a6be-8aec42a7f2ca';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 長さ', 'ながさ', 'generated' from jp_kanji where id = 'a6d74564-a9c4-4868-a6be-8aec42a7f2ca';

-- ---------- 間 (GIAN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 間 (GIAN) có âm ON (chính) là gì?', 'しょく', 'かん', 'じつ', 'こう', 'かん', 'generated' from jp_kanji where id = '01fae6c8-ca49-4ec4-a63a-6d22be7df7c4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "khoảng, thời gian"?', '今', '入', '子', '間', '間', 'generated' from jp_kanji where id = '01fae6c8-ca49-4ec4-a63a-6d22be7df7c4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"間" có nghĩa là gì?', 'xuất khẩu', 'sắp (xảy ra gì đó)', 'ở giữa', 'vất vả, khó khăn', 'ở giữa', 'generated' from jp_kanji where id = '01fae6c8-ca49-4ec4-a63a-6d22be7df7c4';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 間に合います', 'まにあいます', 'generated' from jp_kanji where id = '01fae6c8-ca49-4ec4-a63a-6d22be7df7c4';

-- ---------- 雨 (VŨ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 雨 (VŨ) có âm ON (chính) là gì?', 'しゅつ', 'にゅう', 'う', 'ず', 'う', 'generated' from jp_kanji where id = '584b876c-e6ac-4846-8a73-1a5b8527986c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "mưa"?', '本', '水', '雨', '火', '雨', 'generated' from jp_kanji where id = '584b876c-e6ac-4846-8a73-1a5b8527986c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"雨" có nghĩa là gì?', 'trường THCS', 'mưa', 'ngày mùng 8', 'sách có tranh', 'mưa', 'generated' from jp_kanji where id = '584b876c-e6ac-4846-8a73-1a5b8527986c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 雨', 'あめ', 'generated' from jp_kanji where id = '584b876c-e6ac-4846-8a73-1a5b8527986c';

-- ---------- 電 (ĐIỆN) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 電 (ĐIỆN) có âm ON (chính) là gì?', 'ぷん', 'ゆう', 'がん', 'でん', 'でん', 'generated' from jp_kanji where id = 'b71cd6e3-e223-4bef-8038-11c3e653a6e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "điện"?', '子', '一', '生', '電', '電', 'generated' from jp_kanji where id = 'b71cd6e3-e223-4bef-8038-11c3e653a6e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"電気" có nghĩa là gì?', 'điện', 'tuần này', 'món ăn Âu', '1/4', 'điện', 'generated' from jp_kanji where id = 'b71cd6e3-e223-4bef-8038-11c3e653a6e1';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 電話', 'でんわ', 'generated' from jp_kanji where id = 'b71cd6e3-e223-4bef-8038-11c3e653a6e1';

-- ---------- 音 (ÂM) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 音 (ÂM) có âm ON (chính) là gì?', 'ぶっ', 'おん', 'わ', 'げ', 'おん', 'generated' from jp_kanji where id = 'b85ec633-88f5-4822-8ec4-ddd891b78572';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "âm thanh"?', '音', '三', '田', '雨', '音', 'generated' from jp_kanji where id = 'b85ec633-88f5-4822-8ec4-ddd891b78572';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"音" có nghĩa là gì?', 'lửa', 'nguồn điện', 'âm thanh', 'thỉnh thoảng', 'âm thanh', 'generated' from jp_kanji where id = 'b85ec633-88f5-4822-8ec4-ddd891b78572';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 音楽', 'おんがく', 'generated' from jp_kanji where id = 'b85ec633-88f5-4822-8ec4-ddd891b78572';

-- ---------- 食 (THỰC) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 食 (THỰC) có âm ON (chính) là gì?', 'びゃく', 'ちゅう', 'じゅう', 'しょく', 'しょく', 'generated' from jp_kanji where id = '2fbee4d1-5af4-4019-b10a-ed96bc1b5f44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "ăn, thức ăn"?', '暗', '木', '食', '中', '食', 'generated' from jp_kanji where id = '2fbee4d1-5af4-4019-b10a-ed96bc1b5f44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"食べます" có nghĩa là gì?', 'ăn', 'đồ vật', 'bảy cái, bảy chiếc', 'cái gì đó', 'ăn', 'generated' from jp_kanji where id = '2fbee4d1-5af4-4019-b10a-ed96bc1b5f44';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 食べ物', 'たべもの', 'generated' from jp_kanji where id = '2fbee4d1-5af4-4019-b10a-ed96bc1b5f44';

-- ---------- 飲 (ẨM) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 飲 (ẨM) có âm ON (chính) là gì?', 'しゅ', 'がい', 'もく', 'いん', 'いん', 'generated' from jp_kanji where id = '2db5262b-6016-4fbe-a7a5-834082657d5c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "uống"?', '友', '寺', '飲', '校', '飲', 'generated' from jp_kanji where id = '2db5262b-6016-4fbe-a7a5-834082657d5c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"飲みます" có nghĩa là gì?', 'uống', 'tham gia', 'tháng sau nữa', 'thời gian', 'uống', 'generated' from jp_kanji where id = '2db5262b-6016-4fbe-a7a5-834082657d5c';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 飲み物', 'のみもの', 'generated' from jp_kanji where id = '2db5262b-6016-4fbe-a7a5-834082657d5c';

-- ---------- 高 (CAO) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 高 (CAO) có âm ON (chính) là gì?', 'ほう', 'じっ', 'しょく', 'こう', 'こう', 'generated' from jp_kanji where id = '444834c4-c72a-4762-a500-c575262e9e5b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cao"?', '電', '物', '水', '高', '高', 'generated' from jp_kanji where id = '444834c4-c72a-4762-a500-c575262e9e5b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"高い" có nghĩa là gì?', 'cao', 'ngày của Mẹ', 'dưới lòng đất', 'báo', 'cao', 'generated' from jp_kanji where id = '444834c4-c72a-4762-a500-c575262e9e5b';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 高さ', 'たかさ', 'generated' from jp_kanji where id = '444834c4-c72a-4762-a500-c575262e9e5b';

-- ---------- 魚 (NGƯ) ----------
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_reading', 'Kanji 魚 (NGƯ) có âm ON (chính) là gì?', 'ぎょ', 'じ', 'げん', 'たい', 'ぎょ', 'generated' from jp_kanji where id = '96a3d57b-a4d0-4589-a4f1-2b6e3d031308';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_kanji_from_meaning', 'Kanji nào có nghĩa "cá"?', '七', '中', '魚', '女', '魚', 'generated' from jp_kanji where id = '96a3d57b-a4d0-4589-a4f1-2b6e3d031308';
insert into jp_kanji_questions (kanji_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, 'choose_word_meaning', '"魚" có nghĩa là gì?', 'một mình, tự mình', 'tổng thống', 'con cá', 'tự mình', 'con cá', 'generated' from jp_kanji where id = '96a3d57b-a4d0-4589-a4f1-2b6e3d031308';
insert into jp_kanji_questions (kanji_id, question_type, question_text, correct_answer, source_type)
select id, 'write_reading', 'Viết cách đọc (hiragana) của từ: 魚', 'さかな', 'generated' from jp_kanji where id = '96a3d57b-a4d0-4589-a4f1-2b6e3d031308';


-- ============================================================
-- jp-go — Ngữ pháp N4, round 10 (trang in 47).
-- Nguồn: PDF "Tổng hợp kiến thức N4" (Dũng Mori), PART 3 - 文法.
-- Phần 1: ADDENDUM usage 5-10 cho 謙譲語 Dạng đặc biệt (đã tạo ở round 9).
-- Phần 2: grammar mới です／あります Thể lịch sự đặc biệt (2 usages).
-- ============================================================

-- ---------- ADDENDUM: usage 5-10 cho 謙譲語（Dạng đặc biệt của động từ） ----------
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status)
select '845b4855-87da-4036-8baf-7f846e1c9a47', id, 5, '見ます → 拝見します', '見ます → 拝見します', NULL, NULL, 47, 'pdf', 'ok'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status)
select '83ddd4ab-bd5b-4327-bed4-f8f8d4e51499', id, 6, '言います → 申し上げます', '言います → 申し上げます', NULL, NULL, 47, 'pdf', 'ok'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status)
select '437c1be8-58d4-4284-bde6-f906399de708', id, 7, '食べます／飲みます／もらいます → 召し上がります', '食べます／飲みます／もらいます → 召し上がります', NULL, 'PDF ghi tiêu đề "→召し上がります" nhưng chính ví dụ đi kèm trong PDF lại dùng "いただきます" (B: あ、いただきます。), không phải 召し上がります. 召し上がります là 尊敬語 (đã dùng ở round 8/9 cho 食べます/飲みます→召し上がります của người khác), còn いただきます mới là 謙譲語 chuẩn khi tự hạ mình cho hành động ăn/uống/nhận của bản thân. Đây là mâu thuẫn nội tại ngay trong chính PDF (tiêu đề vs ví dụ) — giữ nguyên tiêu đề như PDF, giữ nguyên ví dụ dùng いただきます, cần đối chiếu sách giấy để xác nhận.', 47, 'pdf', 'needs_review'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status)
select '8552b9ce-ed8c-4126-ad38-42074a890c0b', id, 8, 'あげます → 差し上げます', 'あげます → 差し上げます', NULL, NULL, 47, 'pdf', 'ok'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status)
select '24648bfa-5664-472c-93b5-4815abd57f49', id, 9, '知っています → 存じ上げております', '知っています → 存じ上げております', NULL, NULL, 47, 'pdf', 'ok'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status)
select '0775a767-d44a-4dee-ba3c-f67c166e1ffd', id, 10, '会います → お目にかかります', '会います → お目にかかります', NULL, NULL, 47, 'pdf', 'ok'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';

insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '845b4855-87da-4036-8baf-7f846e1c9a47', 1, 'daily', '先生の作品を拝見しました。', 'Tôi đã xem tác phẩm của thầy.', '先生の作品を＿＿＿。', '拝見しました', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '845b4855-87da-4036-8baf-7f846e1c9a47', 2, 'daily', 'お手紙を拝見しました。', 'Tôi đã xem lá thư của ngài.', 'お手紙を＿＿＿。', '拝見しました', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '845b4855-87da-4036-8baf-7f846e1c9a47', 3, 'daily', '資料を拝見してもよろしいですか。', 'Tôi xem tài liệu được không ạ?', '資料を＿＿＿もよろしいですか。', '拝見して', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '845b4855-87da-4036-8baf-7f846e1c9a47', 'fill_blank', 'Điền vào chỗ trống: 先生の作品を＿＿＿。', NULL, NULL, NULL, NULL, '拝見しました', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '845b4855-87da-4036-8baf-7f846e1c9a47', 'choose_meaning', '「お手紙を拝見しました。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Tôi đã xem lá thư của ngài.', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '845b4855-87da-4036-8baf-7f846e1c9a47', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: 資料を＿＿＿もよろしいですか。', NULL, NULL, NULL, NULL, '拝見して', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '83ddd4ab-bd5b-4327-bed4-f8f8d4e51499', 1, 'daily', 'お礼を申し上げます。', 'Tôi xin gửi lời cảm ơn.', 'お礼を＿＿＿。', '申し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '83ddd4ab-bd5b-4327-bed4-f8f8d4e51499', 2, 'daily', '一言、お祝いを申し上げます。', 'Tôi xin nói một lời chúc mừng.', '一言、お祝いを＿＿＿。', '申し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '83ddd4ab-bd5b-4327-bed4-f8f8d4e51499', 3, 'daily', '結果は後ほど申し上げます。', 'Kết quả tôi sẽ trình bày sau ạ.', '結果は後ほど＿＿＿。', '申し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '83ddd4ab-bd5b-4327-bed4-f8f8d4e51499', 'fill_blank', 'Điền vào chỗ trống: お礼を＿＿＿。', NULL, NULL, NULL, NULL, '申し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '83ddd4ab-bd5b-4327-bed4-f8f8d4e51499', 'choose_meaning', '「一言、お祝いを申し上げます。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Tôi xin nói một lời chúc mừng.', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '83ddd4ab-bd5b-4327-bed4-f8f8d4e51499', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: 結果は後ほど＿＿＿。', NULL, NULL, NULL, NULL, '申し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '437c1be8-58d4-4284-bde6-f906399de708', 1, 'daily', 'A: お水、どうぞ。 B: あ、いただきます。', 'A: Anh uống nước đi ạ! B: Ồ, vâng!', 'A: お水、どうぞ。 B: あ、＿＿＿。', 'いただきます', 'pdf'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '437c1be8-58d4-4284-bde6-f906399de708', 2, 'daily', '先にいただきます。', 'Tôi xin phép dùng trước ạ.', '先に＿＿＿。', 'いただきます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '437c1be8-58d4-4284-bde6-f906399de708', 3, 'daily', 'お土産、遠慮なくいただきます。', 'Quà này, tôi xin nhận không ngại ngùng ạ.', 'お土産、遠慮なく＿＿＿。', 'いただきます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '437c1be8-58d4-4284-bde6-f906399de708', 'fill_blank', 'Điền vào chỗ trống: A: お水、どうぞ。 B: あ、＿＿＿。', NULL, NULL, NULL, NULL, 'いただきます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '437c1be8-58d4-4284-bde6-f906399de708', 'choose_meaning', '「先にいただきます。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Tôi xin phép dùng trước ạ.', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '437c1be8-58d4-4284-bde6-f906399de708', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: お土産、遠慮なく＿＿＿。', NULL, NULL, NULL, NULL, 'いただきます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '8552b9ce-ed8c-4126-ad38-42074a890c0b', 1, 'daily', 'A: あ、こんな本もいいですね。 B: 差し上げますよ。', 'A: Ồ, chị thích cuốn sách này. B: Em tặng chị đó!', 'A: あ、こんな本もいいですね。 B: ＿＿＿よ。', '差し上げます', 'pdf'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '8552b9ce-ed8c-4126-ad38-42074a890c0b', 2, 'daily', '記念に、こちらの品を差し上げます。', 'Để làm kỷ niệm, tôi xin tặng ngài món quà này.', '記念に、こちらの品を＿＿＿。', '差し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '8552b9ce-ed8c-4126-ad38-42074a890c0b', 3, 'daily', '後ほど資料を差し上げます。', 'Lát nữa tôi sẽ gửi tài liệu cho ngài ạ.', '後ほど資料を＿＿＿。', '差し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '8552b9ce-ed8c-4126-ad38-42074a890c0b', 'fill_blank', 'Điền vào chỗ trống: A: あ、こんな本もいいですね。 B: ＿＿＿よ。', NULL, NULL, NULL, NULL, '差し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '8552b9ce-ed8c-4126-ad38-42074a890c0b', 'choose_meaning', '「記念に、こちらの品を差し上げます。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Để làm kỷ niệm, tôi xin tặng ngài món quà này.', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '8552b9ce-ed8c-4126-ad38-42074a890c0b', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: 後ほど資料を＿＿＿。', NULL, NULL, NULL, NULL, '差し上げます', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '24648bfa-5664-472c-93b5-4815abd57f49', 1, 'daily', 'A: ねね、サムちゃんって知ってる？ B: ええ、よく存じ上げております。', 'A: Này, em có biết bé Sam không? B: À, em có biết ạ.', 'A: サムちゃんって知ってる？ B: ええ、よく＿＿＿。', '存じ上げております', 'pdf'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '24648bfa-5664-472c-93b5-4815abd57f49', 2, 'daily', 'お名前は存じ上げております。', 'Tôi có biết tên của ngài ạ.', 'お名前は＿＿＿。', '存じ上げております', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '24648bfa-5664-472c-93b5-4815abd57f49', 3, 'daily', '先生のご活躍はよく存じ上げております。', 'Tôi biết rất rõ về những thành tích của thầy ạ.', '先生のご活躍はよく＿＿＿。', '存じ上げております', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '24648bfa-5664-472c-93b5-4815abd57f49', 'fill_blank', 'Điền vào chỗ trống: A: サムちゃんって知ってる？ B: ええ、よく＿＿＿。', NULL, NULL, NULL, NULL, '存じ上げております', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '24648bfa-5664-472c-93b5-4815abd57f49', 'choose_meaning', '「お名前は存じ上げております。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Tôi có biết tên của ngài ạ.', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '24648bfa-5664-472c-93b5-4815abd57f49', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: 先生のご活躍はよく＿＿＿。', NULL, NULL, NULL, NULL, '存じ上げております', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '0775a767-d44a-4dee-ba3c-f67c166e1ffd', 1, 'daily', 'A: 先日、駅で社長の奥さんにお目にかかりましたよ。きれいな奥さんですね。 B: いや、そんなことないよ。', 'A: Hôm trước em vừa gặp vợ của Giám đốc ở nhà ga. Vợ của Giám đốc thật xinh đẹp đó! B: Không, không có chuyện đó đâu.', 'A: 先日、駅で社長の奥さんに＿＿＿よ。', 'お目にかかりました', 'pdf'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '0775a767-d44a-4dee-ba3c-f67c166e1ffd', 2, 'daily', 'いつかまたお目にかかりたいです。', 'Mong có dịp lại được gặp ngài lần nữa.', 'いつかまた＿＿＿たいです。', 'お目にかかり', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type)
select id, '0775a767-d44a-4dee-ba3c-f67c166e1ffd', 3, 'daily', 'お目にかかれて光栄です。', 'Thật vinh dự khi được gặp ngài.', '＿＿＿て光栄です。', 'お目にかかれ', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '0775a767-d44a-4dee-ba3c-f67c166e1ffd', 'fill_blank', 'Điền vào chỗ trống: A: 先日、駅で社長の奥さんに＿＿＿よ。', NULL, NULL, NULL, NULL, 'お目にかかりました', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '0775a767-d44a-4dee-ba3c-f67c166e1ffd', 'choose_meaning', '「いつかまたお目にかかりたいです。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Mong có dịp lại được gặp ngài lần nữa.', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type)
select id, '0775a767-d44a-4dee-ba3c-f67c166e1ffd', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: ＿＿＿て光栄です。', NULL, NULL, NULL, NULL, 'お目にかかれ', 'generated'
from jp_grammar where level = 'N4' and grammar_pattern = '謙譲語（Dạng đặc biệt của động từ）';

-- ---------- jp_grammar (mới): です／あります Thể lịch sự đặc biệt ----------
insert into jp_grammar (id, level, grammar_pattern, meaning_vi, memory_hint_vi, connection, usage, register, notes, common_mistake, similar_patterns, difference_note, source_page, source_text, source_type, review_status) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 'N4', 'です／あります＋Thể lịch sự đặc biệt（でございます／ございます）', 'です chuyển thành でいらっしゃいます (kính ngữ hỏi người khác) hoặc でございます (lịch sự trung tính); あります chuyển thành ございます', 'でございます/ございます trang trọng hơn です/あります thông thường, thường dùng trong giao tiếp dịch vụ/kinh doanh', NULL, NULL, NULL, NULL, NULL, '{}', NULL, 47, 'です／あります＋Thể lịch sự đặc biệt（でございます／ございます）', 'pdf', 'ok')
on conflict (level, grammar_pattern) do nothing;

-- ---------- jp_grammar_usages (mới) ----------
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status) values ('d1c4cfa5-d0f0-422a-9115-0b437e075066', '05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 1, 'です → でいらっしゃいます／でございます', 'です → でいらっしゃいます（尊敬語, hỏi về người khác）／でございます（lịch sự trung tính）', NULL, 'PDF ghi tiêu đề "です→でございます" (lặp lại 2 dòng liên tiếp) nhưng ví dụ duy nhất đi kèm lại dùng "でいらっしゃいます" (A: ズン先生でいらっしゃいますか。) — でいらっしゃいます là 尊敬語, phù hợp ngữ cảnh hỏi kính trọng về người khác, khác với でございます là thể lịch sự trung tính (thường dùng cho sự vật/bản thân). Giữ nguyên ví dụ PDF dùng でいらっしゃいます, bổ sung 2 ví dụ generated minh họa đúng でございます như tiêu đề ghi — cần đối chiếu sách giấy để xác nhận.', 47, 'pdf', 'needs_review');
insert into jp_grammar_usages (id, grammar_id, usage_no, meaning, connection, usage, notes, source_page, source_type, review_status) values ('68a6bb3a-20e6-4aa0-9ee8-af00a4ae0931', '05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 2, 'あります → ございます', 'あります → ございます', NULL, NULL, 47, 'pdf', 'ok');

-- ---------- jp_grammar_examples + jp_grammar_questions (mới) ----------
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 'd1c4cfa5-d0f0-422a-9115-0b437e075066', 1, 'daily', 'A: ズン先生でいらっしゃいますか。 B: はい、そうです。', 'A: Ngài là thầy Dũng phải không? B: Đúng vậy.', 'A: ズン先生＿＿＿か。', 'でいらっしゃいます', 'pdf');
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 'd1c4cfa5-d0f0-422a-9115-0b437e075066', 2, 'daily', 'こちらが会議室でございます。', 'Đây là phòng họp ạ.', 'こちらが会議室＿＿＿。', 'でございます', 'generated');
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 'd1c4cfa5-d0f0-422a-9115-0b437e075066', 3, 'daily', '私が担当の田中でございます。', 'Tôi là Tanaka, người phụ trách ạ.', '私が担当の田中＿＿＿。', 'でございます', 'generated');
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 'd1c4cfa5-d0f0-422a-9115-0b437e075066', 'fill_blank', 'Điền vào chỗ trống: A: ズン先生＿＿＿か。', NULL, NULL, NULL, NULL, 'でいらっしゃいます', 'generated');
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 'd1c4cfa5-d0f0-422a-9115-0b437e075066', 'choose_meaning', '「こちらが会議室でございます。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Đây là phòng họp ạ.', 'generated');
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', 'd1c4cfa5-d0f0-422a-9115-0b437e075066', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: 私が担当の田中＿＿＿。', NULL, NULL, NULL, NULL, 'でございます', 'generated');
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', '68a6bb3a-20e6-4aa0-9ee8-af00a4ae0931', 1, 'daily', 'A: ビールと唐揚げ定食、お願いします。 B: はい、かしこまりました。他に何かご注文はございますか。', 'A: Xin vui lòng cho tôi suất Karage và bia. B: Vâng, tôi đã rõ rồi ạ. Chị còn muốn gọi gì khác không ạ?', 'B: 他に何かご注文は＿＿＿か。', 'ございます', 'pdf');
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', '68a6bb3a-20e6-4aa0-9ee8-af00a4ae0931', 2, 'daily', 'お手洗いは2階にございます。', 'Nhà vệ sinh ở tầng 2 ạ.', 'お手洗いは2階に＿＿＿。', 'ございます', 'generated');
insert into jp_grammar_examples (grammar_id, usage_id, example_no, example_type, example_jp, example_vi, cloze_jp, answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', '68a6bb3a-20e6-4aa0-9ee8-af00a4ae0931', 3, 'daily', 'ご質問はございますか。', 'Quý khách có câu hỏi gì không ạ?', 'ご質問は＿＿＿か。', 'ございます', 'generated');
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', '68a6bb3a-20e6-4aa0-9ee8-af00a4ae0931', 'fill_blank', 'Điền vào chỗ trống: B: 他に何かご注文は＿＿＿か。', NULL, NULL, NULL, NULL, 'ございます', 'generated');
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', '68a6bb3a-20e6-4aa0-9ee8-af00a4ae0931', 'choose_meaning', '「お手洗いは2階にございます。」nghĩa là gì?', NULL, NULL, NULL, NULL, 'Nhà vệ sinh ở tầng 2 ạ.', 'generated');
insert into jp_grammar_questions (grammar_id, usage_id, question_type, question_text, choice_1, choice_2, choice_3, choice_4, correct_answer, source_type) values ('05b9d7ea-6105-4955-b6f6-26f1de7bc3eb', '68a6bb3a-20e6-4aa0-9ee8-af00a4ae0931', 'choose_pattern', 'Chọn mẫu ngữ pháp đúng cho câu: ご質問は＿＿＿か。', NULL, NULL, NULL, NULL, 'ございます', 'generated');

-- Tổng: addendum 6 usages (vào grammar đã có) + 1 grammar mới + 2 usages mới; tổng examples: 24, tổng questions: 24

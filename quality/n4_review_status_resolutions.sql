-- jp-go N4: resolve the four remaining vocabulary review flags after manual review.
-- Does not delete source rows; it records the reviewed classification/meaning outcome.

-- Fixed expression: treat as phrase/expression, not an adverb guessed from お先に.
update public.jp_vocab
set entry_type = 'phrase',
    word_class = '表現',
    review_status = 'ok',
    correction_note = 'Đã kiểm định: お先にどうぞ là biểu hiện giao tiếp cố định (表現). Giữ nguyên câu, không phân loại là 副詞.'
where id = '18284525-4635-421b-b2a3-d8e29bb921c3'::uuid;

-- Interjection used to call/scold someone.
update public.jp_vocab
set word_class = '感動詞',
    review_status = 'ok',
    correction_note = 'Đã kiểm định: こら là 感動詞 dùng khi gọi/quát/nhắc ai đó; không phải 副詞.'
where id = '4e69620d-e2b3-4cee-88e3-4670bc512c84'::uuid;

-- PDF rows were shifted; meanings are corrected in n4_vocab_certain_meaning_fixes.sql.
update public.jp_vocab
set review_status = 'ok',
    correction_note = 'Đã đối chiếu ngữ nghĩa: 育てる = nuôi/trồng/đào tạo-phát triển; nghĩa PDF cũ “mắng” là lệch dòng.'
where id = '12b9e2c4-399d-428a-affd-2b244fa29028'::uuid;

update public.jp_vocab
set review_status = 'ok',
    correction_note = 'Đã đối chiếu ngữ nghĩa: 頼む = nhờ/yêu cầu/đặt; nghĩa PDF cũ “chăm sóc, nuôi dưỡng” là lệch dòng.'
where id = 'ee1b496b-e100-4ce4-912f-d8e7e9aab458'::uuid;

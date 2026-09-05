-- Final N5/N4 cross-level duplicate polish.
-- Idempotent: updates five known reviewed example IDs only.
-- Goal: no exact Japanese example sentence is reused across N5/N4.

WITH fixes(id, example_jp, example_vi, cloze_jp, answer) AS (
  VALUES
    ('7f752496-4258-4855-aed5-9a1eea6675e2'::uuid,
     'コンテストでは、参加者が三分以内でスピーチをすることになっています。',
     'Trong cuộc thi, người tham gia được quy định phải phát biểu trong vòng ba phút.',
     'コンテストでは、参加者が三分以内で＿＿＿をすることになっています。',
     'スピーチ'),
    ('fedec4f7-e251-4a91-ab28-deee6087e5f1'::uuid,
     '体調が戻るまで、無理に出勤せず上司に連絡してください。',
     'Cho đến khi sức khỏe hồi phục, đừng cố đi làm mà hãy liên lạc với cấp trên.',
     '＿＿＿が戻るまで、無理に出勤せず上司に連絡してください。',
     '体調'),
    ('94735b2c-6e6c-45df-9613-34d40317be54'::uuid,
     'この手続きをするには、本人確認ができる書類が必要です。',
     'Để làm thủ tục này, cần giấy tờ có thể xác nhận danh tính.',
     'この手続きをするには、本人確認ができる書類が＿＿＿です。',
     '必要'),
    ('e1f1fe74-d8d2-432b-a1ce-dcff9b6239c2'::uuid,
     '足元が濡れていると滑って危険なので、すぐに拭いてください。',
     'Nếu khu vực dưới chân bị ướt thì dễ trượt và nguy hiểm, hãy lau ngay.',
     '足元が濡れていると滑って＿＿＿なので、すぐに拭いてください。',
     '危険')
)
UPDATE public.jp_vocab_examples e
SET example_jp = f.example_jp,
    example_vi = f.example_vi,
    cloze_jp = f.cloze_jp,
    answer = f.answer,
    correction_note = concat_ws('; ', nullif(e.correction_note,''), 'Loại trùng nguyên câu xuyên cấp N5/N4; giữ đúng từ mục tiêu và tăng độ phân hóa N4')
FROM fixes f
WHERE e.id = f.id;

UPDATE public.jp_grammar_examples
SET example_jp = 'このアプリを使えば、家でも日本語を練習することができます。',
    example_vi = 'Nếu dùng ứng dụng này, bạn có thể luyện tiếng Nhật ngay cả ở nhà.',
    cloze_jp = 'このアプリを使えば、家でも日本語を練習する＿＿＿。',
    answer = 'ことができます',
    correction_note = concat_ws('; ', nullif(correction_note,''), 'Loại trùng nguyên câu xuyên cấp N5/N4; giữ đúng mẫu ことができます')
WHERE id = 'a2ae1627-4d72-486c-bc23-21543b82269f'::uuid;

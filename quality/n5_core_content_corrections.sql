-- jp-go N5 core content corrections.
-- Chỉ sửa các lỗi đã xác minh chắc chắn: lệch nghĩa/dịch, câu không tự nhiên,
-- hoặc ví dụ không thể hiện đúng cấu trúc. Không mở rộng nội dung ngoài phạm vi lỗi.

with fixes(id, example_jp, example_vi, cloze_jp, answer, note) as (
values
(
 'a2c10064-69df-4dd1-a724-4b3d1d8387d0'::uuid,
 '一日に三回この薬を飲みます。',
 'Tôi uống thuốc này ba lần một ngày.',
 '一日に＿＿＿この薬を飲みます。',
 '三回',
 'Sửa bản dịch: 三回 = ba lần, không phải hai lần'
),
(
 'f723efd3-20c7-449e-aa63-44ca9ceb9835'::uuid,
 '今日中にこの仕事を終わらせます。',
 'Tôi sẽ hoàn thành công việc này trong hôm nay.',
 '今日中＿＿＿この仕事を終わらせます。',
 'に',
 'Sửa 今日中までに không tự nhiên → 今日中に'
),
(
 'ac846f9c-e70e-4a91-bab4-99260c2f5b71'::uuid,
 '私が言う言葉を書いてください。',
 'Hãy viết những từ mà tôi nói.',
 '私が＿＿＿言葉を書いてください。',
 '言う',
 'Sửa ví dụ mệnh đề quan hệ: câu cũ 私が言葉を書いてください không khớp nghĩa và không có mệnh đề bổ nghĩa cho 言葉'
),
(
 '20f23449-3408-43f8-a69c-e564b11a763c'::uuid,
 '今、午前3時半です。',
 'Bây giờ là 3 giờ rưỡi sáng.',
 '今、午前3＿＿＿です。',
 '時半',
 'Sửa bản dịch: 午前 = buổi sáng, không phải buổi chiều'
)
)
update public.jp_grammar_examples e
set example_jp = f.example_jp,
    example_vi = f.example_vi,
    cloze_jp = f.cloze_jp,
    answer = f.answer,
    corrected_text = f.example_jp,
    correction_note = concat_ws('; ', nullif(e.correction_note,''), f.note),
    review_status = 'ok'
from fixes f
where e.id = f.id;

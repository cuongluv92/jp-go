-- jp-go N5: one source example was duplicated across two grammar patterns.
-- The A は～ row also tested ないでください instead of は, so replace it with
-- an example that actually practices the target grammar.

update public.jp_grammar_examples
set example_jp = 'この資料は、今日中に確認してください。',
    example_vi = 'Riêng tài liệu này, hãy kiểm tra trong hôm nay.',
    cloze_jp = 'この資料＿＿＿、今日中に確認してください。',
    answer = 'は',
    corrected_text = 'この資料は、今日中に確認してください。',
    correction_note = 'Sửa ví dụ trùng và lệch mục tiêu: mẫu A は～ phải kiểm tra は, không phải Vないでください.',
    review_status = 'ok'
where id = 'df3ab451-7081-4163-b451-944591ec4d1d'::uuid;

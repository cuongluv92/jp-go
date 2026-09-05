-- jp-go N4: small particle / translation corrections found in final QA.
-- Idempotent replacements on stable vocabulary/example IDs.

-- 欠席する normally takes the event with を: 授業を欠席する／会議を欠席する.
update public.jp_vocab
set usage_note_vi = '授業／会議／式などを欠席する. Sự kiện bị vắng thường đi với を.',
    correction_note = 'Đã sửa particle note: 欠席する thường dùng Nを欠席する, không phải 会議に〜.'
where id in (
  '477eeebb-3f26-4e18-ae28-094529a60106'::uuid,
  '675be3e3-85e6-4de3-883f-5be7a2173ef3'::uuid
);

-- 相談する is consultation/discussion with someone, not generic "nói chuyện".
update public.jp_vocab
set meaning_vi = 'trao đổi; bàn bạc; nhờ tư vấn',
    usage_note_vi = '人に相談する／Nについて相談する. Dùng khi bàn bạc hoặc xin lời khuyên về một vấn đề.',
    correction_note = 'Chuẩn hóa nghĩa/collocation của 相談する.'
where id = '5c57728b-b1d3-43a5-b4b4-05e42d649df6'::uuid;

-- Invitation use of いかがですか: コーヒーはいかがですか = "Anh/chị dùng cà phê không ạ?"
update public.jp_vocab
set meaning_vi = 'thế nào ạ?; anh/chị có dùng/muốn ... không ạ?',
    usage_note_vi = 'どうですか lịch sự hơn. Với đồ ăn/uống, Nはいかがですか thường là lời mời: “Anh/chị dùng N không ạ?”',
    correction_note = 'Bổ sung nghĩa mời/đề nghị thường gặp của いかがですか.'
where id = 'c2725c5f-d88f-4cdf-b4f9-c23bb1ccd5e1'::uuid;

update public.jp_vocab_examples
set example_vi = 'Anh/chị có dùng cà phê không ạ?',
    focus_note = 'Nはいかがですか = lời mời/đề nghị lịch sự.'
where vocab_id = 'c2725c5f-d88f-4cdf-b4f9-c23bb1ccd5e1'::uuid
  and example_jp = 'コーヒーはいかがですか。';

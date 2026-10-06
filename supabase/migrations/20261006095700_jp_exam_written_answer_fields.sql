-- Written/free-response model answers for 2次 exam questions.
-- Kept on jp_exam_questions because these answers belong to the real exam,
-- not to pages of the 総合問題集 textbook.
alter table public.jp_exam_questions
  add column if not exists answer_jp text,
  add column if not exists answer_vi text,
  add column if not exists answer_furigana_tokens jsonb not null default '[]'::jsonb;

comment on column public.jp_exam_questions.answer_jp is
  'Model answer text for written/free-response exam questions.';
comment on column public.jp_exam_questions.answer_vi is
  'Vietnamese translation of the model answer for written/free-response exam questions.';
comment on column public.jp_exam_questions.answer_furigana_tokens is
  'Furigana tokens for answer_jp, same token shape as question_furigana_tokens.';

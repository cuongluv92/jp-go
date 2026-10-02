alter table public.jp_exam_questions
  add column if not exists question_furigana_tokens jsonb not null default '[]'::jsonb;

alter table public.jp_exam_question_choices
  add column if not exists choice_furigana_tokens jsonb not null default '[]'::jsonb;

comment on column public.jp_exam_questions.question_furigana_tokens is
  'Verified furigana tokens for question_jp: [{surface,reading,start}, ...].';

comment on column public.jp_exam_question_choices.choice_furigana_tokens is
  'Verified furigana tokens for choice_jp: [{surface,reading,start}, ...].';

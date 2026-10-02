alter table public.jp_exam_question_choices
  add column if not exists choice_vi text;

comment on column public.jp_exam_question_choices.choice_vi is
  'Vietnamese translation of the Japanese answer choice.';

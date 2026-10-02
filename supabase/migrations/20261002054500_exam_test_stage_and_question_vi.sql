alter table public.jp_exam_tests
  add column if not exists exam_stage text;

alter table public.jp_exam_tests
  drop constraint if exists jp_exam_tests_exam_stage_check;

alter table public.jp_exam_tests
  add constraint jp_exam_tests_exam_stage_check
  check (exam_stage is null or exam_stage in ('1ji','2ji'));

alter table public.jp_exam_questions
  add column if not exists question_vi text;

comment on column public.jp_exam_tests.exam_stage is
  'Exam phase: 1ji = first-stage written exam, 2ji = second-stage/practical exam (including legacy 実地試験).';

comment on column public.jp_exam_questions.question_vi is
  'Vietnamese translation of the original Japanese question. Keep separate from explanation_vi.';

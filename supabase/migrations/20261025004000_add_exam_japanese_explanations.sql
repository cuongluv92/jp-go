-- Keep Japanese explanations separate from the Vietnamese notes.
-- NULL indicates that the Japanese explanation has not been independently reviewed yet.
ALTER TABLE public.jp_exam_questions
  ADD COLUMN IF NOT EXISTS explanation_jp text;

COMMENT ON COLUMN public.jp_exam_questions.explanation_jp IS
  'Original Japanese-language exam explanation, independently reviewed; separate from explanation_vi. Null until verified.';

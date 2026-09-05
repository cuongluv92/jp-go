-- jp-go N5 vocabulary practice: complete malformed MCQs with four distinct choices.
-- Idempotent: updates only the ten audited question IDs that currently have missing choices.

WITH fixes(id, choice_1, choice_2, choice_3, choice_4, correct_answer) AS (
VALUES
  ('9e349b37-a8af-446d-83d9-d00ac294bfd6'::uuid, 'その本', 'この本', 'あの本', 'どの本', 'あの本'),
  ('85f91fd8-bfbe-4d16-ac4f-4981a8072e8a'::uuid, 'それ', 'これ', 'あれ', 'どれ', 'あれ'),
  ('da8ea5b4-7352-4d33-9bc6-62842d4bfc32'::uuid, 'その本', 'この本', 'あの本', 'どの本', 'この本'),
  ('8b7c4c25-7c14-4ea8-a8f2-ebae1d843c99'::uuid, 'あれ', 'それ', 'これ', 'どれ', 'これ'),
  ('3a00a23b-ce8b-4f87-93d6-1e104a3feccf'::uuid, 'この本', 'あの本', 'その本', 'どの本', 'その本'),
  ('e6fc5750-5dad-4651-b2c3-8a188e411d8d'::uuid, 'あれ', 'それ', 'これ', 'どれ', 'それ'),
  ('519ed771-f212-4abd-84f5-4271e0d88d61'::uuid, '高い', '安い', '大きい', '小さい', '安い'),
  ('e67871ba-52da-4e71-a43b-49b5abed7138'::uuid, '明るい', '暗い', '広い', '狭い', '明るい'),
  ('36a3001f-37b8-4c86-b8c6-9aba2c35d084'::uuid, '暗い', '明るい', '広い', '狭い', '暗い'),
  ('de9539cf-da67-4dc4-a4a0-9395c3363e64'::uuid, '安い', '高い', '大きい', '小さい', '高い')
)
UPDATE public.jp_vocab_questions q
SET choice_1 = f.choice_1,
    choice_2 = f.choice_2,
    choice_3 = f.choice_3,
    choice_4 = f.choice_4,
    correct_answer = f.correct_answer
FROM fixes f
WHERE q.id = f.id;

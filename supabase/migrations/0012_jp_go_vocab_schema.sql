-- ============================================================
-- jp-go — Schema module Từ vựng theo cấp độ (N5→N1), nạp dữ liệu trực
-- tiếp từ PDF nguồn (không qua luồng import Excel), theo đúng mô hình đã
-- dùng cho module Kanji (jp_kanji/jp_kanji_words/jp_kanji_questions).
--
-- QUAN TRỌNG — không đụng dữ liệu N3 hiện có: nội dung từ vựng N3 (1798
-- từ) vẫn đóng gói dạng JSON tĩnh trong app (lib/data/sample-words.json +
-- sample-examples.json, xem comment trong jp_word_progress ở migration
-- 0001) — bảng mới ở đây CHỈ dùng cho N5 trở đi, KHÔNG động vào JSON N3,
-- KHÔNG động vào jp_word_progress (SRS từ vựng vẫn dùng chung bảng đó cho
-- cả từ JSON lẫn từ DB, khớp theo word_id dạng text).
--
-- Additive, an toàn chạy lại nhiều lần ("if not exists" + policy dùng
-- "drop policy if exists" trước khi tạo lại).
-- ============================================================

-- ---------- jp_vocab: nội dung từ vựng thật (word_jp/reading/nghĩa từ PDF) ----------
create table if not exists jp_vocab (
  id uuid primary key default gen_random_uuid(),
  level text not null check (level in ('N5', 'N4', 'N3', 'N2', 'N1')),
  lesson_no integer not null,
  entry_type text not null default 'word' check (entry_type in ('word', 'phrase')),
  word_jp text not null,
  reading_furigana text not null,
  meaning_vi text not null,
  usage_note_vi text,
  group_key text,
  source_page integer,
  source_text text,
  source_type text not null default 'pdf' check (source_type in ('pdf', 'generated')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  corrected_text text,
  correction_note text,
  created_at timestamptz not null default now(),
  unique (level, lesson_no, word_jp, reading_furigana)
);
alter table jp_vocab enable row level security;
drop policy if exists "jp_vocab_read_all" on jp_vocab;
create policy "jp_vocab_read_all" on jp_vocab for select using (true);
create index if not exists idx_jp_vocab_level on jp_vocab(level, lesson_no);
create index if not exists idx_jp_vocab_group on jp_vocab(group_key) where group_key is not null;

-- ---------- jp_vocab_examples: câu ví dụ tự sinh (source_type luôn 'generated') ----------
create table if not exists jp_vocab_examples (
  id uuid primary key default gen_random_uuid(),
  vocab_id uuid not null references jp_vocab(id) on delete cascade,
  example_jp text not null,
  example_vi text not null,
  cloze_jp text,
  answer text,
  source_type text not null default 'generated' check (source_type in ('pdf', 'generated')),
  created_at timestamptz not null default now()
);
alter table jp_vocab_examples enable row level security;
drop policy if exists "jp_vocab_examples_read_all" on jp_vocab_examples;
create policy "jp_vocab_examples_read_all" on jp_vocab_examples for select using (true);
create index if not exists idx_jp_vocab_examples_vocab on jp_vocab_examples(vocab_id);

-- ---------- jp_vocab_questions: bài tập tự sinh, luôn generated cho module này ----------
-- match_pair KHÔNG seed tĩnh ở bảng này — mini-game ghép cặp lấy trực tiếp
-- jp_vocab (word_jp/meaning_vi) lúc chạy, đúng cách đã làm với
-- match_kanji_word ở module Kanji (xem comment migration 0003).
create table if not exists jp_vocab_questions (
  id uuid primary key default gen_random_uuid(),
  vocab_id uuid not null references jp_vocab(id) on delete cascade,
  question_type text not null check (
    question_type in ('choose_meaning', 'choose_reading', 'choose_word_from_meaning', 'fill_blank', 'match_pair')
  ),
  question_text text not null,
  choice_1 text,
  choice_2 text,
  choice_3 text,
  choice_4 text,
  correct_answer text not null,
  source_type text not null default 'generated' check (source_type in ('generated')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  created_at timestamptz not null default now()
);
alter table jp_vocab_questions enable row level security;
drop policy if exists "jp_vocab_questions_read_all" on jp_vocab_questions;
create policy "jp_vocab_questions_read_all" on jp_vocab_questions for select using (true);
create index if not exists idx_jp_vocab_questions_vocab on jp_vocab_questions(vocab_id);

-- ============================================================
-- jp-go — Module Kanji: schema mới, hoàn toàn additive.
-- KHÔNG đụng bảng của nhatkytrading, KHÔNG đụng bảng jp_vocab/jp_study_*
-- đã có. Nội dung Kanji (jp_kanji/jp_kanji_readings/jp_kanji_words/
-- jp_kanji_questions) là dữ liệu dùng chung cho mọi user — nạp qua
-- migration/seed từ PDF nguồn, KHÔNG qua client nên chỉ mở RLS select,
-- không có policy insert/update/delete cho client (chỉ service role).
-- jp_kanji_progress là tiến độ riêng theo user, theo đúng khuôn mẫu
-- jp_word_progress ở migration 0001 (RLS user_id = auth.uid()).
-- ============================================================

-- ---------- jp_kanji: 1 kanji ----------
create table if not exists jp_kanji (
  id uuid primary key default gen_random_uuid(),
  level text not null check (level in ('N5', 'N4', 'N3', 'N2', 'N1')),
  kanji_character text not null,
  han_viet text not null,
  meaning_vi_summary text,
  stroke_count integer,
  radical text,
  mnemonic_hint_vi text,
  common_mistake text,
  similar_kanji text[] not null default '{}',
  source_page integer,
  source_text text,
  source_type text not null default 'pdf' check (source_type in ('pdf', 'generated')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  corrected_text text,
  correction_note text,
  created_at timestamptz not null default now(),
  unique (level, kanji_character)
);
alter table jp_kanji enable row level security;
create policy "jp_kanji_read_all" on jp_kanji for select using (true);
create index if not exists idx_jp_kanji_level on jp_kanji(level);

-- ---------- jp_kanji_readings: âm on/kun, tách riêng khỏi jp_kanji ----------
create table if not exists jp_kanji_readings (
  id uuid primary key default gen_random_uuid(),
  kanji_id uuid not null references jp_kanji(id) on delete cascade,
  reading_type text not null check (reading_type in ('on', 'kun')),
  reading_kana text not null,
  is_main boolean not null default false,
  source_page integer,
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  correction_note text,
  created_at timestamptz not null default now()
);
alter table jp_kanji_readings enable row level security;
create policy "jp_kanji_readings_read_all" on jp_kanji_readings for select using (true);
create index if not exists idx_jp_kanji_readings_kanji on jp_kanji_readings(kanji_id);

-- ---------- jp_kanji_words: từ ghép ví dụ ----------
create table if not exists jp_kanji_words (
  id uuid primary key default gen_random_uuid(),
  kanji_id uuid not null references jp_kanji(id) on delete cascade,
  reading_id uuid references jp_kanji_readings(id) on delete set null,
  word_jp text not null,
  word_furigana text,
  meaning_vi text,
  is_irregular boolean not null default false,
  linked_vocab_id text,
  source_page integer,
  source_text text,
  source_type text not null default 'pdf' check (source_type in ('pdf', 'generated')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  corrected_text text,
  correction_note text,
  created_at timestamptz not null default now()
);
alter table jp_kanji_words enable row level security;
create policy "jp_kanji_words_read_all" on jp_kanji_words for select using (true);
create index if not exists idx_jp_kanji_words_kanji on jp_kanji_words(kanji_id);

-- ---------- jp_kanji_questions: bài tập, luôn generated cho module này ----------
create table if not exists jp_kanji_questions (
  id uuid primary key default gen_random_uuid(),
  kanji_id uuid not null references jp_kanji(id) on delete cascade,
  question_type text not null check (
    question_type in ('choose_reading', 'choose_kanji_from_meaning', 'choose_word_meaning', 'write_reading', 'match_kanji_word')
  ),
  question_text text not null,
  choice_1 text,
  choice_2 text,
  choice_3 text,
  choice_4 text,
  correct_answer text not null,
  source_type text not null default 'generated' check (source_type in ('generated', 'pdf')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  created_at timestamptz not null default now()
);
alter table jp_kanji_questions enable row level security;
create policy "jp_kanji_questions_read_all" on jp_kanji_questions for select using (true);
create index if not exists idx_jp_kanji_questions_kanji on jp_kanji_questions(kanji_id);

-- ---------- jp_kanji_progress: tiến độ SRS riêng cho Kanji, theo user ----------
create table if not exists jp_kanji_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kanji_id uuid not null references jp_kanji(id) on delete cascade,
  status text not null default 'chua_hoc' check (status in ('chua_hoc', 'dang_hoc', 'da_nho', 'hay_sai')),
  next_review_at timestamptz,
  correct_count integer not null default 0,
  wrong_count integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (user_id, kanji_id)
);
alter table jp_kanji_progress enable row level security;
create policy "jp_kanji_progress_owner" on jp_kanji_progress
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create index if not exists idx_jp_kanji_progress_user on jp_kanji_progress(user_id);

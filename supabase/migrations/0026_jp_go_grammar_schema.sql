-- ============================================================
-- jp-go — Module Ngữ pháp: schema mới, hoàn toàn additive.
-- KHÔNG đụng bảng của nhatkytrading, KHÔNG đụng jp_vocab*/jp_kanji*/
-- jp_study_*/jp_word_progress đã có. Schema này dùng chung cho MỌI cấp độ
-- N5→N1 (không thiết kế lại khi làm N4/N3/N2/N1 sau này).
--
-- Nội dung (jp_grammar/jp_grammar_usages/jp_grammar_examples/
-- jp_grammar_questions/jp_grammar_relations) là dữ liệu dùng chung cho mọi
-- user — nạp qua migration/seed từ PDF nguồn, KHÔNG qua client, nên chỉ mở
-- RLS select, không có policy insert/update/delete cho client.
-- jp_grammar_reviews là tiến độ SRS riêng theo user, theo đúng khuôn mẫu
-- jp_kanji_progress (lịch 1-5-15, status chua_hoc/dang_hoc/da_nho/hay_sai).
--
-- Additive, an toàn chạy lại nhiều lần ("if not exists").
-- ============================================================

-- ---------- jp_grammar: 1 mẫu ngữ pháp ----------
create table if not exists jp_grammar (
  id uuid primary key default gen_random_uuid(),
  level text not null check (level in ('N5', 'N4', 'N3', 'N2', 'N1')),
  grammar_pattern text not null,
  meaning_vi text not null,
  memory_hint_vi text,
  connection text,
  usage text,
  register text,
  notes text,
  common_mistake text,
  similar_patterns text[] not null default '{}',
  difference_note text,
  source_page integer,
  source_text text,
  source_type text not null default 'pdf' check (source_type in ('pdf', 'generated')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  corrected_text text,
  correction_note text,
  created_at timestamptz not null default now(),
  unique (level, grammar_pattern)
);
alter table jp_grammar enable row level security;
create policy "jp_grammar_read_all" on jp_grammar for select using (true);
create index if not exists idx_jp_grammar_level on jp_grammar(level);

-- ---------- jp_grammar_usages: tách riêng khi 1 mẫu có nhiều usage/nghĩa khác nhau ----------
create table if not exists jp_grammar_usages (
  id uuid primary key default gen_random_uuid(),
  grammar_id uuid not null references jp_grammar(id) on delete cascade,
  usage_no integer not null default 1,
  meaning text not null,
  connection text,
  usage text,
  notes text,
  source_page integer,
  source_type text not null default 'pdf' check (source_type in ('pdf', 'generated')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  created_at timestamptz not null default now()
);
alter table jp_grammar_usages enable row level security;
create policy "jp_grammar_usages_read_all" on jp_grammar_usages for select using (true);
create index if not exists idx_jp_grammar_usages_grammar on jp_grammar_usages(grammar_id);

-- ---------- jp_grammar_examples: mỗi usage phải có đủ 3 ví dụ ----------
-- usage_id NULL nghĩa là mẫu chỉ có 1 usage duy nhất (dùng luôn connection/
-- usage của jp_grammar), không cần tách bảng jp_grammar_usages.
create table if not exists jp_grammar_examples (
  id uuid primary key default gen_random_uuid(),
  grammar_id uuid not null references jp_grammar(id) on delete cascade,
  usage_id uuid references jp_grammar_usages(id) on delete cascade,
  example_no integer not null default 1,
  example_type text not null default 'daily' check (example_type in ('standard', 'daily', 'business')),
  example_jp text not null,
  example_vi text not null,
  cloze_jp text not null,
  answer text not null,
  linked_vocab_id uuid references jp_vocab(id) on delete set null,
  source_type text not null default 'pdf' check (source_type in ('pdf', 'generated')),
  review_status text not null default 'ok' check (review_status in ('ok', 'needs_review')),
  created_at timestamptz not null default now()
);
alter table jp_grammar_examples enable row level security;
create policy "jp_grammar_examples_read_all" on jp_grammar_examples for select using (true);
create index if not exists idx_jp_grammar_examples_grammar on jp_grammar_examples(grammar_id);
create index if not exists idx_jp_grammar_examples_usage on jp_grammar_examples(usage_id);

-- ---------- jp_grammar_questions: bài tập, PDF N5 không có sẵn nên luôn generated ----------
create table if not exists jp_grammar_questions (
  id uuid primary key default gen_random_uuid(),
  grammar_id uuid not null references jp_grammar(id) on delete cascade,
  usage_id uuid references jp_grammar_usages(id) on delete cascade,
  question_type text not null check (
    question_type in ('fill_blank', 'choose_pattern', 'choose_connection', 'reorder_sentence', 'choose_meaning')
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
alter table jp_grammar_questions enable row level security;
create policy "jp_grammar_questions_read_all" on jp_grammar_questions for select using (true);
create index if not exists idx_jp_grammar_questions_grammar on jp_grammar_questions(grammar_id);

-- ---------- jp_grammar_relations: mẫu gần nghĩa/dễ nhầm giữa 2 mẫu ngữ pháp ----------
create table if not exists jp_grammar_relations (
  id uuid primary key default gen_random_uuid(),
  grammar_id_1 uuid not null references jp_grammar(id) on delete cascade,
  grammar_id_2 uuid not null references jp_grammar(id) on delete cascade,
  difference_note text not null,
  source_type text not null default 'generated' check (source_type in ('generated', 'pdf')),
  created_at timestamptz not null default now(),
  check (grammar_id_1 <> grammar_id_2),
  unique (grammar_id_1, grammar_id_2)
);
alter table jp_grammar_relations enable row level security;
create policy "jp_grammar_relations_read_all" on jp_grammar_relations for select using (true);
create index if not exists idx_jp_grammar_relations_1 on jp_grammar_relations(grammar_id_1);
create index if not exists idx_jp_grammar_relations_2 on jp_grammar_relations(grammar_id_2);

-- ---------- jp_grammar_reviews: tiến độ SRS riêng cho Ngữ pháp, theo user ----------
create table if not exists jp_grammar_reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  grammar_id uuid not null references jp_grammar(id) on delete cascade,
  status text not null default 'chua_hoc' check (status in ('chua_hoc', 'dang_hoc', 'da_nho', 'hay_sai')),
  next_review_at timestamptz,
  correct_count integer not null default 0,
  wrong_count integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (user_id, grammar_id)
);
alter table jp_grammar_reviews enable row level security;
create policy "jp_grammar_reviews_owner" on jp_grammar_reviews
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create index if not exists idx_jp_grammar_reviews_user on jp_grammar_reviews(user_id);

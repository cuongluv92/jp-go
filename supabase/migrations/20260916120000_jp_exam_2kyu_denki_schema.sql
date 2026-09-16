-- jp-go: 2級電気工事施工管理 exam-prep module
-- Additive only. Does not touch existing jp_vocab/jp_kanji/jp_grammar/... tables
-- or any nhatkytrading tables. All new tables use the jp_exam_ prefix.
--
-- Content model (see docs/EXAM_CONTENT_IMPORT.md):
--   book -> section (tree, parent_id, unlimited depth) -> page -> content_blocks[]
-- Every content block keeps jp (nguyen van sach) / vi (dich sat) /
-- explanation_vi (giai thich rieng, co the null) strictly separate.

create extension if not exists pg_trgm;

-- ---------------------------------------------------------------------------
-- jp_exam_books
-- ---------------------------------------------------------------------------
create table if not exists jp_exam_books (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  short_title text not null,
  title_jp text not null,
  title_vi text,
  edition text,
  year text,
  publisher text,
  description text,
  sort_order integer not null default 0,
  status text not null default 'active' check (status in ('active', 'draft', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table jp_exam_books is '2kyu denki koji sekou kanri exam-prep books (jp-go exam module). Independent of jp_vocab/jp_kanji/jp_grammar.';

-- ---------------------------------------------------------------------------
-- jp_exam_sections (tree: book > phan lon > chuong > muc > tieu muc ...)
-- ---------------------------------------------------------------------------
create table if not exists jp_exam_sections (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references jp_exam_books(id) on delete cascade,
  parent_id uuid references jp_exam_sections(id) on delete cascade,
  code text,
  title_jp text not null,
  title_vi text,
  start_page integer,
  end_page integer,
  depth integer not null default 0,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint jp_exam_sections_parent_book_fk
    foreign key (parent_id) references jp_exam_sections(id) on delete cascade
);

-- A parent's children must have unique codes; top-level sections (parent_id
-- is null) must have a unique code within their book. Two partial unique
-- indexes because NULL never equals NULL in a plain unique constraint.
create unique index if not exists jp_exam_sections_unique_top_level_code
  on jp_exam_sections (book_id, code)
  where parent_id is null and code is not null;

create unique index if not exists jp_exam_sections_unique_child_code
  on jp_exam_sections (parent_id, code)
  where parent_id is not null and code is not null;

create index if not exists jp_exam_sections_book_id_idx on jp_exam_sections (book_id);
create index if not exists jp_exam_sections_parent_id_idx on jp_exam_sections (parent_id);
create index if not exists jp_exam_sections_search_idx
  on jp_exam_sections using gin (title_jp gin_trgm_ops, title_vi gin_trgm_ops);

comment on column jp_exam_sections.depth is '0 = phan lon (top level under book), increases by 1 per nested level.';

-- ---------------------------------------------------------------------------
-- jp_exam_pages
-- ---------------------------------------------------------------------------
create table if not exists jp_exam_pages (
  id uuid primary key default gen_random_uuid(),
  book_id uuid not null references jp_exam_books(id) on delete cascade,
  section_id uuid references jp_exam_sections(id) on delete set null,
  page_number integer not null,
  page_label text,
  source_image_path text,
  content_blocks jsonb not null default '[]'::jsonb,
  notes_vi text,
  review_status text not null default 'draft' check (review_status in ('draft', 'reviewed', 'needs_fix')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (book_id, page_number)
);

comment on column jp_exam_pages.content_blocks is 'Array of content blocks (heading/paragraph/bullet_list/numbered_list/table/formula/image/note/warning/definition). Each block keeps jp/vi/explanation_vi separate - see docs/EXAM_CONTENT_IMPORT.md.';
comment on column jp_exam_pages.source_image_path is 'Path inside Supabase Storage bucket exam-sources/<book_slug>/<page>.jpg - never base64 in DB.';

-- Flattened, always-in-sync search text extracted from content_blocks: every
-- string field of every block (jp, vi, explanation_vi, content, table
-- headers/rows, list items, ...) concatenated. Array-typed fields keep their
-- JSON punctuation but substrings still match with ILIKE, which is all this
-- needs.
create or replace function jp_exam_pages_extract_search_text(blocks jsonb)
returns text
language sql
immutable
as $$
  select coalesce(string_agg(kv.value, ' '), '')
  from jsonb_array_elements(coalesce(blocks, '[]'::jsonb)) as block
  cross join lateral jsonb_each_text(block) as kv(key, value)
  where kv.key not in ('type', 'level')
$$;

alter table jp_exam_pages
  add column if not exists search_text text
  generated always as (
    jp_exam_pages_extract_search_text(content_blocks)
    || ' ' || coalesce(page_label, '')
    || ' ' || coalesce(notes_vi, '')
  ) stored;

create index if not exists jp_exam_pages_search_idx
  on jp_exam_pages using gin (search_text gin_trgm_ops);
create index if not exists jp_exam_pages_book_id_idx on jp_exam_pages (book_id);
create index if not exists jp_exam_pages_section_id_idx on jp_exam_pages (section_id);

-- ---------------------------------------------------------------------------
-- jp_exam_tests / questions / choices / references (4. 過去問・実戦問題)
-- ---------------------------------------------------------------------------
create table if not exists jp_exam_tests (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  test_year text,
  test_type text not null default 'kakomon' check (test_type in ('kakomon', 'mock', 'practice')),
  question_count integer,
  duration_minutes integer,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists jp_exam_questions (
  id uuid primary key default gen_random_uuid(),
  test_id uuid not null references jp_exam_tests(id) on delete cascade,
  question_number integer not null,
  question_jp text not null,
  question_image_path text,
  explanation_vi text,
  is_flagged_default boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (test_id, question_number)
);

create table if not exists jp_exam_question_choices (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references jp_exam_questions(id) on delete cascade,
  choice_label text not null,
  choice_jp text not null,
  is_correct boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (question_id, choice_label)
);

create table if not exists jp_exam_question_references (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references jp_exam_questions(id) on delete cascade,
  book_id uuid references jp_exam_books(id) on delete set null,
  section_id uuid references jp_exam_sections(id) on delete set null,
  page_id uuid references jp_exam_pages(id) on delete set null,
  note text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  constraint jp_exam_question_references_target_chk
    check (book_id is not null or section_id is not null or page_id is not null)
);

create index if not exists jp_exam_questions_test_id_idx on jp_exam_questions (test_id);
create index if not exists jp_exam_question_choices_question_id_idx on jp_exam_question_choices (question_id);
create index if not exists jp_exam_question_references_question_id_idx on jp_exam_question_references (question_id);
create index if not exists jp_exam_question_references_page_id_idx on jp_exam_question_references (page_id);

-- ---------------------------------------------------------------------------
-- updated_at maintenance
-- ---------------------------------------------------------------------------
create or replace function jp_exam_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists jp_exam_books_set_updated_at on jp_exam_books;
create trigger jp_exam_books_set_updated_at
  before update on jp_exam_books
  for each row execute function jp_exam_set_updated_at();

drop trigger if exists jp_exam_sections_set_updated_at on jp_exam_sections;
create trigger jp_exam_sections_set_updated_at
  before update on jp_exam_sections
  for each row execute function jp_exam_set_updated_at();

drop trigger if exists jp_exam_pages_set_updated_at on jp_exam_pages;
create trigger jp_exam_pages_set_updated_at
  before update on jp_exam_pages
  for each row execute function jp_exam_set_updated_at();

drop trigger if exists jp_exam_tests_set_updated_at on jp_exam_tests;
create trigger jp_exam_tests_set_updated_at
  before update on jp_exam_tests
  for each row execute function jp_exam_set_updated_at();

drop trigger if exists jp_exam_questions_set_updated_at on jp_exam_questions;
create trigger jp_exam_questions_set_updated_at
  before update on jp_exam_questions
  for each row execute function jp_exam_set_updated_at();

-- ---------------------------------------------------------------------------
-- RLS: public read-only. All writes go through the service role key from the
-- import script / admin tooling only - no public write policy is defined on
-- any of these tables (service_role bypasses RLS by design).
-- ---------------------------------------------------------------------------
alter table jp_exam_books enable row level security;
alter table jp_exam_sections enable row level security;
alter table jp_exam_pages enable row level security;
alter table jp_exam_tests enable row level security;
alter table jp_exam_questions enable row level security;
alter table jp_exam_question_choices enable row level security;
alter table jp_exam_question_references enable row level security;

drop policy if exists jp_exam_books_read_all on jp_exam_books;
create policy jp_exam_books_read_all on jp_exam_books for select using (true);

drop policy if exists jp_exam_sections_read_all on jp_exam_sections;
create policy jp_exam_sections_read_all on jp_exam_sections for select using (true);

drop policy if exists jp_exam_pages_read_all on jp_exam_pages;
create policy jp_exam_pages_read_all on jp_exam_pages for select using (true);

drop policy if exists jp_exam_tests_read_all on jp_exam_tests;
create policy jp_exam_tests_read_all on jp_exam_tests for select using (true);

drop policy if exists jp_exam_questions_read_all on jp_exam_questions;
create policy jp_exam_questions_read_all on jp_exam_questions for select using (true);

drop policy if exists jp_exam_question_choices_read_all on jp_exam_question_choices;
create policy jp_exam_question_choices_read_all on jp_exam_question_choices for select using (true);

drop policy if exists jp_exam_question_references_read_all on jp_exam_question_references;
create policy jp_exam_question_references_read_all on jp_exam_question_references for select using (true);

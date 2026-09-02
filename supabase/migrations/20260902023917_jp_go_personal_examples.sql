-- Ví dụ cá nhân do từng người dùng tự thêm cho Từ vựng hoặc Ngữ pháp.
-- Chỉ lưu văn bản; không dùng Supabase Storage.

create table if not exists public.jp_personal_examples (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  target_type text not null check (target_type in ('vocab', 'grammar')),
  target_id text not null check (char_length(target_id) between 1 and 100),
  example_type text not null default 'daily' check (example_type in ('exam', 'daily', 'business')),
  sentence_jp text not null check (char_length(btrim(sentence_jp)) between 1 and 500),
  sentence_vi text not null default '' check (char_length(sentence_vi) <= 1000),
  highlight_text text not null default '' check (char_length(highlight_text) <= 100),
  note text not null default '' check (char_length(note) <= 1000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_jp_personal_examples_owner_target
  on public.jp_personal_examples(user_id, target_type, target_id, created_at desc);

alter table public.jp_personal_examples enable row level security;

revoke all on table public.jp_personal_examples from anon;
grant select, insert, update, delete on table public.jp_personal_examples to authenticated;
grant select, insert, update, delete on table public.jp_personal_examples to service_role;

drop policy if exists "jp personal examples select own" on public.jp_personal_examples;
create policy "jp personal examples select own"
  on public.jp_personal_examples for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "jp personal examples insert own" on public.jp_personal_examples;
create policy "jp personal examples insert own"
  on public.jp_personal_examples for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "jp personal examples update own" on public.jp_personal_examples;
create policy "jp personal examples update own"
  on public.jp_personal_examples for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "jp personal examples delete own" on public.jp_personal_examples;
create policy "jp personal examples delete own"
  on public.jp_personal_examples for delete
  to authenticated
  using ((select auth.uid()) = user_id);

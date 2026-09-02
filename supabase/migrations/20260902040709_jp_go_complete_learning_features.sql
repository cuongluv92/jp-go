-- Bổ sung SRS nhẹ cho ví dụ cá nhân và lưu kết quả luyện nét Kanji.
-- Chỉ lưu số liệu/văn bản nhỏ; không dùng Supabase Storage.

alter table public.jp_personal_examples
  add column if not exists times_correct integer not null default 0 check (times_correct >= 0),
  add column if not exists times_wrong integer not null default 0 check (times_wrong >= 0),
  add column if not exists last_reviewed_at timestamptz,
  add column if not exists next_review_at timestamptz,
  add column if not exists interval_days integer not null default 1 check (interval_days between 1 and 365);

create index if not exists idx_jp_personal_examples_due
  on public.jp_personal_examples(user_id, next_review_at)
  where next_review_at is not null;

create table if not exists public.jp_kanji_stroke_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  kanji_character text not null check (char_length(kanji_character) between 1 and 2),
  practice_count integer not null default 0 check (practice_count >= 0),
  best_score integer not null default 0 check (best_score between 0 and 100),
  last_score integer not null default 0 check (last_score between 0 and 100),
  updated_at timestamptz not null default now(),
  primary key (user_id, kanji_character)
);

alter table public.jp_kanji_stroke_progress enable row level security;
revoke all on table public.jp_kanji_stroke_progress from anon;
grant select, insert, update, delete on table public.jp_kanji_stroke_progress to authenticated;
grant select, insert, update, delete on table public.jp_kanji_stroke_progress to service_role;

drop policy if exists "jp kanji stroke progress select own" on public.jp_kanji_stroke_progress;
create policy "jp kanji stroke progress select own"
  on public.jp_kanji_stroke_progress for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "jp kanji stroke progress insert own" on public.jp_kanji_stroke_progress;
create policy "jp kanji stroke progress insert own"
  on public.jp_kanji_stroke_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "jp kanji stroke progress update own" on public.jp_kanji_stroke_progress;
create policy "jp kanji stroke progress update own"
  on public.jp_kanji_stroke_progress for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "jp kanji stroke progress delete own" on public.jp_kanji_stroke_progress;
create policy "jp kanji stroke progress delete own"
  on public.jp_kanji_stroke_progress for delete to authenticated
  using ((select auth.uid()) = user_id);

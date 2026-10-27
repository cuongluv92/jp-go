-- Immutable progress operations prevent stale tabs from replacing an entire exam.
create table public.jp_exam_progress_events (
  user_id uuid not null references auth.users(id) on delete cascade,
  test_id uuid not null references public.jp_exam_tests(id) on delete cascade,
  event_id text not null check (length(event_id) between 1 and 100),
  data jsonb not null check (jsonb_typeof(data) = 'object' and octet_length(data::text) <= 65536 and data->>'id' = event_id),
  created_at timestamptz not null default now(),
  primary key (user_id, test_id, event_id)
);
alter table public.jp_exam_progress_events enable row level security;
revoke all on public.jp_exam_progress_events from anon, authenticated;
grant select, insert on public.jp_exam_progress_events to authenticated;
create policy "Read own exam operations" on public.jp_exam_progress_events for select to authenticated using ((select auth.uid()) = user_id);
create policy "Append own exam operations" on public.jp_exam_progress_events for insert to authenticated with check ((select auth.uid()) = user_id);

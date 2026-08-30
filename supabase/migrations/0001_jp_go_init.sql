-- ============================================================
-- jp-go — khởi tạo hạ tầng đồng bộ tài khoản (V1).
-- Additive migration. Dùng CHUNG Supabase project với app nhatkytrading
-- nhưng dữ liệu tách biệt tuyệt đối:
--   - Mọi bảng dùng tiền tố `jp_`.
--   - RLS riêng theo auth.uid(), KHÔNG chia sẻ dữ liệu giữa các user.
--   - KHÔNG đụng vào bất kỳ bảng/dữ liệu/policy/Auth nào của nhatkytrading.
--   - An toàn chạy lại nhiều lần (mọi lệnh đều dùng "if not exists").
--
-- QUAN TRỌNG — ĐỌC TRƯỚC KHI CHẠY:
-- Chạy nguyên file này trong Supabase Dashboard → SQL Editor của project
-- đang dùng chung với nhatkytrading. Yêu cầu Supabase Auth (Email) đã được
-- bật (Authentication → Providers → Email).
-- ============================================================

-- ---------- jp_word_progress: tiến độ học từng từ vựng của từng user ----------
create table if not exists jp_word_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  word_id text not null,                 -- khớp VocabWord.id (nội dung từ vẫn đóng gói JSON trong app)
  status text not null default 'chua_hoc' check (status in ('chua_hoc', 'dang_hoc', 'da_nho')),
  is_favorite boolean not null default false,
  is_hidden boolean not null default false,
  times_correct integer not null default 0,
  times_wrong integer not null default 0,
  last_reviewed_at timestamptz,
  next_review_at timestamptz,
  interval_days integer not null default 1,
  ease_factor numeric not null default 2.5,
  repetitions integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (user_id, word_id)
);
create index if not exists idx_jp_word_progress_user on jp_word_progress(user_id);

-- ---------- jp_study_plans: lộ trình học do người dùng cấu hình ----------
create table if not exists jp_study_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  jlpt_level text not null check (jlpt_level in ('N5', 'N4', 'N3', 'N2', 'N1')),
  scope text[] not null default array['vocab'],   -- phần tử: 'vocab' | 'kanji' | 'grammar'
  duration_months integer not null check (duration_months in (1, 2, 3)),
  total_days integer not null,
  started_at date not null default current_date,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists idx_jp_study_plans_user on jp_study_plans(user_id, is_active);

-- ---------- jp_study_days: nội dung chia theo từng ngày của 1 lộ trình ----------
create table if not exists jp_study_days (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references jp_study_plans(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  day_number integer not null,
  word_ids text[] not null default '{}',
  completed_at timestamptz,
  unique (plan_id, day_number)
);
create index if not exists idx_jp_study_days_plan on jp_study_days(plan_id, day_number);

-- ---------- jp_review_schedules: lịch ôn tập 1-5-15 sinh ra khi hoàn thành 1 ngày ----------
create table if not exists jp_review_schedules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  study_day_id uuid not null references jp_study_days(id) on delete cascade,
  stage integer not null check (stage in (5, 15)),
  scheduled_date date not null,
  completed_at timestamptz,
  unique (study_day_id, stage)
);
create index if not exists idx_jp_review_schedules_due on jp_review_schedules(user_id, scheduled_date) where completed_at is null;

-- ---------- jp_practice_attempts: kết quả luyện đề (tự động JLPT hoặc đề riêng) ----------
create table if not exists jp_practice_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  test_type text not null check (test_type in ('auto_jlpt', 'custom')),
  jlpt_level text check (jlpt_level in ('N5', 'N4', 'N3', 'N2', 'N1')),
  sections jsonb not null default '[]',
  score_total integer not null default 0,
  total_questions integer not null default 0,
  taken_at timestamptz not null default now()
);
create index if not exists idx_jp_practice_attempts_user on jp_practice_attempts(user_id, taken_at desc);

-- ---------- jp_custom_tests: đề luyện tập người dùng tự đưa vào (mục 4.2) ----------
create table if not exists jp_custom_tests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  jlpt_level text check (jlpt_level in ('N5', 'N4', 'N3', 'N2', 'N1')),
  content jsonb not null default '[]',
  created_at timestamptz not null default now()
);
create index if not exists idx_jp_custom_tests_user on jp_custom_tests(user_id, created_at desc);

-- ============================================================
-- RLS — mỗi user chỉ thấy/sửa được đúng dữ liệu của chính mình.
-- ============================================================
alter table jp_word_progress enable row level security;
alter table jp_study_plans enable row level security;
alter table jp_study_days enable row level security;
alter table jp_review_schedules enable row level security;
alter table jp_practice_attempts enable row level security;
alter table jp_custom_tests enable row level security;

drop policy if exists "owner access" on jp_word_progress;
create policy "owner access" on jp_word_progress for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "owner access" on jp_study_plans;
create policy "owner access" on jp_study_plans for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "owner access" on jp_study_days;
create policy "owner access" on jp_study_days for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "owner access" on jp_review_schedules;
create policy "owner access" on jp_review_schedules for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "owner access" on jp_practice_attempts;
create policy "owner access" on jp_practice_attempts for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "owner access" on jp_custom_tests;
create policy "owner access" on jp_custom_tests for all using (user_id = auth.uid()) with check (user_id = auth.uid());

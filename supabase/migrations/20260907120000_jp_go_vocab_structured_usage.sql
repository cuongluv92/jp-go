-- Structured vocabulary learning metadata used by the vocabulary detail UI.
-- Live production was migrated with the same DDL before this file was added.

alter table public.jp_vocab
  add column if not exists particle_patterns text[] not null default '{}'::text[],
  add column if not exists usage_patterns text[] not null default '{}'::text[],
  add column if not exists collocations text[] not null default '{}'::text[];

comment on column public.jp_vocab.particle_patterns is
  'Reviewed particle/case patterns for practical vocabulary study';
comment on column public.jp_vocab.usage_patterns is
  'Reviewed grammatical/inflection usage patterns for practical vocabulary study';
comment on column public.jp_vocab.collocations is
  'Reviewed common or example-grounded collocations for practical vocabulary study';

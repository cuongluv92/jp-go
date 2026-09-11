alter table public.jp_grammar_examples
  add column if not exists furigana_tokens jsonb not null default '[]'::jsonb;

do $$ begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'jp_grammar_examples_furigana_tokens_array_chk'
  ) then
    alter table public.jp_grammar_examples
      add constraint jp_grammar_examples_furigana_tokens_array_chk
      check (jsonb_typeof(furigana_tokens) = 'array');
  end if;
end $$;

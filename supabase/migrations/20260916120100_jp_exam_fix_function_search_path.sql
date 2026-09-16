-- Harden jp_exam_* helper functions against the "mutable search_path" lint.
create or replace function jp_exam_pages_extract_search_text(blocks jsonb)
returns text
language sql
immutable
set search_path = pg_catalog
as $$
  select coalesce(string_agg(kv.value, ' '), '')
  from jsonb_array_elements(coalesce(blocks, '[]'::jsonb)) as block
  cross join lateral jsonb_each_text(block) as kv(key, value)
  where kv.key not in ('type', 'level')
$$;

create or replace function jp_exam_set_updated_at()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

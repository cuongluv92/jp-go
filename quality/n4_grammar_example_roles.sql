-- jp-go N4 grammar: normalize the existing 3-example sets.
-- Verified invariant in current DB: every N4 grammar/usage unit has exactly
-- example_no 1, 2, 3. Keep no.2 as daily; no.1 becomes standard; no.3 becomes
-- business. Separate curated files rewrite no.3 where the old sentence is not
-- genuinely workplace/business context.

update public.jp_grammar_examples e
set example_type = case e.example_no
  when 1 then 'standard'
  when 2 then 'daily'
  when 3 then 'business'
end,
correction_note = concat_ws('; ', nullif(e.correction_note,''), 'Chuẩn hóa vai trò ví dụ N4: 1=standard, 2=daily, 3=business')
from public.jp_grammar g
where e.grammar_id = g.id
  and g.level = 'N4'
  and e.example_no in (1,2,3);

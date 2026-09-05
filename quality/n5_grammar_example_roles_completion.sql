-- jp-go N5 grammar: complete standard/daily/business role normalization.
-- Idempotent: only fixes units that currently have exactly
-- example #1=standard, #2=standard, #3=business and no daily example.
-- Content is preserved; only the mislabeled role of example #2 is corrected.

WITH affected_units AS (
  SELECT g.id AS grammar_id, u.id AS usage_id
  FROM public.jp_grammar g
  JOIN public.jp_grammar_usages u ON u.grammar_id = g.id
  WHERE g.level = 'N5'

  UNION ALL

  SELECT g.id AS grammar_id, NULL::uuid AS usage_id
  FROM public.jp_grammar g
  WHERE g.level = 'N5'
    AND NOT EXISTS (
      SELECT 1 FROM public.jp_grammar_usages u WHERE u.grammar_id = g.id
    )
), role_counts AS (
  SELECT
    a.grammar_id,
    a.usage_id,
    count(*) FILTER (WHERE e.example_no = 1 AND e.example_type = 'standard') AS no1_standard,
    count(*) FILTER (WHERE e.example_no = 2 AND e.example_type = 'standard') AS no2_standard,
    count(*) FILTER (WHERE e.example_no = 3 AND e.example_type = 'business') AS no3_business,
    count(*) FILTER (WHERE e.example_type = 'standard') AS standard_n,
    count(*) FILTER (WHERE e.example_type = 'daily') AS daily_n,
    count(*) FILTER (WHERE e.example_type = 'business') AS business_n,
    count(e.id) AS total_n
  FROM affected_units a
  LEFT JOIN public.jp_grammar_examples e
    ON e.grammar_id = a.grammar_id
   AND e.usage_id IS NOT DISTINCT FROM a.usage_id
  GROUP BY a.grammar_id, a.usage_id
), targets AS (
  SELECT grammar_id, usage_id
  FROM role_counts
  WHERE total_n = 3
    AND no1_standard = 1
    AND no2_standard = 1
    AND no3_business = 1
    AND standard_n = 2
    AND daily_n = 0
    AND business_n = 1
)
UPDATE public.jp_grammar_examples e
SET example_type = 'daily',
    correction_note = concat_ws(
      '; ',
      nullif(e.correction_note, ''),
      'Chuẩn hóa vai trò N5: example_no=2 là daily'
    )
FROM targets t
WHERE e.grammar_id = t.grammar_id
  AND e.usage_id IS NOT DISTINCT FROM t.usage_id
  AND e.example_no = 2
  AND e.example_type = 'standard';

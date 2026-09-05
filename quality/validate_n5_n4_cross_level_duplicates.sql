-- Read-only regression gate for exact sentence reuse across N5/N4.
-- Repeated vocabulary/grammar concepts across levels are allowed, but their learner-facing
-- Japanese example sentences must not be exact copies.

DO $$
DECLARE
  n integer;
BEGIN
  SELECT count(*) INTO n
  FROM (
    SELECT e.example_jp
    FROM public.jp_vocab_examples e
    JOIN public.jp_vocab v ON v.id=e.vocab_id
    WHERE v.level IN ('N5','N4')
      AND nullif(btrim(e.example_jp),'') IS NOT NULL
    GROUP BY e.example_jp
    HAVING count(*) > 1
  ) d;
  IF n <> 0 THEN
    RAISE EXCEPTION 'Cross-level validation: exact duplicated vocabulary example sentences remain: % groups', n;
  END IF;

  SELECT count(*) INTO n
  FROM (
    SELECT e.example_jp
    FROM public.jp_grammar_examples e
    JOIN public.jp_grammar g ON g.id=e.grammar_id
    WHERE g.level IN ('N5','N4')
      AND nullif(btrim(e.example_jp),'') IS NOT NULL
    GROUP BY e.example_jp
    HAVING count(*) > 1
  ) d;
  IF n <> 0 THEN
    RAISE EXCEPTION 'Cross-level validation: exact duplicated grammar example sentences remain: % groups', n;
  END IF;

  RAISE NOTICE 'PASS: no exact N5/N4 cross-level vocabulary or grammar example duplicates.';
END $$;

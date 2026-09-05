-- FINAL READ-ONLY QUALITY GATE — jp-go N5/N4
-- Run AFTER the curated quality files have been copied into/applied as one real migration.
-- PASS = this file finishes without RAISE EXCEPTION.
-- It does not modify data.

DO $$
DECLARE
  n integer;
BEGIN
  -- -----------------------------------------------------------------------
  -- 1. Fixed source inventory. These counts are the reviewed current source.
  -- -----------------------------------------------------------------------
  SELECT count(*) INTO n FROM public.jp_vocab WHERE level='N5';
  IF n <> 850 THEN RAISE EXCEPTION 'N5 vocab count: expected 850, got %', n; END IF;

  SELECT count(*) INTO n FROM public.jp_vocab WHERE level='N4';
  IF n <> 942 THEN RAISE EXCEPTION 'N4 vocab count: expected 942, got %', n; END IF;

  SELECT count(*) INTO n FROM public.jp_grammar WHERE level='N5';
  IF n <> 98 THEN RAISE EXCEPTION 'N5 grammar pattern count: expected 98, got %', n; END IF;

  SELECT count(*) INTO n FROM public.jp_grammar WHERE level='N4';
  IF n <> 92 THEN RAISE EXCEPTION 'N4 grammar pattern count: expected 92, got %', n; END IF;

  WITH units AS (
    SELECT g.level,g.id grammar_id,u.id usage_id
    FROM public.jp_grammar g JOIN public.jp_grammar_usages u ON u.grammar_id=g.id
    WHERE g.level IN ('N5','N4')
    UNION ALL
    SELECT g.level,g.id,NULL::uuid
    FROM public.jp_grammar g
    WHERE g.level IN ('N5','N4')
      AND NOT EXISTS (SELECT 1 FROM public.jp_grammar_usages u WHERE u.grammar_id=g.id)
  )
  SELECT count(*) INTO n FROM units WHERE level='N5';
  IF n <> 118 THEN RAISE EXCEPTION 'N5 grammar unit count: expected 118, got %', n; END IF;

  WITH units AS (
    SELECT g.level,g.id grammar_id,u.id usage_id
    FROM public.jp_grammar g JOIN public.jp_grammar_usages u ON u.grammar_id=g.id
    WHERE g.level IN ('N5','N4')
    UNION ALL
    SELECT g.level,g.id,NULL::uuid
    FROM public.jp_grammar g
    WHERE g.level IN ('N5','N4')
      AND NOT EXISTS (SELECT 1 FROM public.jp_grammar_usages u WHERE u.grammar_id=g.id)
  )
  SELECT count(*) INTO n FROM units WHERE level='N4';
  IF n <> 129 THEN RAISE EXCEPTION 'N4 grammar unit count: expected 129, got %', n; END IF;

  -- -----------------------------------------------------------------------
  -- 2. Vocabulary base fields.
  -- -----------------------------------------------------------------------
  IF EXISTS (
    SELECT 1 FROM public.jp_vocab
    WHERE level IN ('N5','N4')
      AND (coalesce(word_jp,'')='' OR coalesce(reading_furigana,'')=''
           OR coalesce(meaning_vi,'')='' OR coalesce(word_class,'')=''
           OR coalesce(dictionary_form,'')='')
  ) THEN RAISE EXCEPTION 'N5/N4 vocab has empty required base fields'; END IF;

  IF EXISTS (
    SELECT 1 FROM public.jp_vocab
    WHERE level IN ('N5','N4') AND review_status='needs_review'
  ) THEN RAISE EXCEPTION 'N5/N4 vocab still has needs_review rows'; END IF;

  -- -----------------------------------------------------------------------
  -- 3. Vocabulary examples: exactly 3, with fixed role 1/2/3.
  -- -----------------------------------------------------------------------
  WITH x AS (
    SELECT v.level,v.id,
           count(e.id) total,
           count(*) FILTER (WHERE e.example_type='exam') exam_n,
           count(*) FILTER (WHERE e.example_type='daily') daily_n,
           count(*) FILTER (WHERE e.example_type='business') business_n
    FROM public.jp_vocab v
    LEFT JOIN public.jp_vocab_examples e ON e.vocab_id=v.id
    WHERE v.level IN ('N5','N4')
    GROUP BY v.level,v.id
  )
  SELECT count(*) INTO n FROM x
  WHERE total<>3 OR exam_n<>1 OR daily_n<>1 OR business_n<>1;
  IF n <> 0 THEN RAISE EXCEPTION 'Vocabulary 3-example coverage failed for % words', n; END IF;

  SELECT count(*) INTO n
  FROM public.jp_vocab_examples e JOIN public.jp_vocab v ON v.id=e.vocab_id
  WHERE v.level IN ('N5','N4')
    AND NOT (
      (e.example_no=1 AND e.example_type='exam') OR
      (e.example_no=2 AND e.example_type='daily') OR
      (e.example_no=3 AND e.example_type='business')
    );
  IF n <> 0 THEN RAISE EXCEPTION 'Vocabulary example_no/example_type mismatch: % rows', n; END IF;

  SELECT count(*) INTO n
  FROM public.jp_vocab_examples e JOIN public.jp_vocab v ON v.id=e.vocab_id
  WHERE v.level IN ('N5','N4')
    AND (coalesce(e.example_jp,'')='' OR coalesce(e.example_vi,'')=''
         OR coalesce(e.cloze_jp,'')='' OR coalesce(e.answer,'')=''
         OR e.difficulty NOT BETWEEN 1 AND 3
         OR (e.cloze_jp NOT LIKE '%＿%' AND e.cloze_jp NOT LIKE '%\_%' ESCAPE '\'));
  IF n <> 0 THEN RAISE EXCEPTION 'Vocabulary example required-field/cloze validation failed: % rows', n; END IF;

  SELECT count(*) INTO n FROM (
    SELECT e.vocab_id,e.example_no,count(*) c
    FROM public.jp_vocab_examples e JOIN public.jp_vocab v ON v.id=e.vocab_id
    WHERE v.level IN ('N5','N4')
    GROUP BY e.vocab_id,e.example_no HAVING count(*)<>1
  ) d;
  IF n <> 0 THEN RAISE EXCEPTION 'Duplicate/missing vocabulary example_no slots: %', n; END IF;

  -- Exact sentence repetition is not allowed. Repeated source vocabulary across
  -- lessons is allowed; its examples must still be different.
  SELECT count(*) INTO n FROM (
    SELECT v.level,e.example_jp,count(*) c
    FROM public.jp_vocab_examples e JOIN public.jp_vocab v ON v.id=e.vocab_id
    WHERE v.level IN ('N5','N4')
    GROUP BY v.level,e.example_jp HAVING count(*)>1
  ) d;
  IF n <> 0 THEN RAISE EXCEPTION 'Exact duplicated vocabulary example sentences remain: % groups', n; END IF;

  -- Explicit token arrays are optional because JapaneseSentence derives safe
  -- readings from reviewed reading_furigana too. If tokens exist, they must be valid.
  SELECT count(*) INTO n
  FROM public.jp_vocab_examples e JOIN public.jp_vocab v ON v.id=e.vocab_id
  WHERE v.level IN ('N5','N4')
    AND e.furigana_tokens IS NOT NULL
    AND jsonb_typeof(e.furigana_tokens) <> 'array';
  IF n <> 0 THEN RAISE EXCEPTION 'Invalid furigana_tokens JSON type: % rows', n; END IF;

  SELECT count(*) INTO n
  FROM public.jp_vocab_examples e JOIN public.jp_vocab v ON v.id=e.vocab_id
  CROSS JOIN LATERAL jsonb_array_elements(coalesce(e.furigana_tokens,'[]'::jsonb)) token
  WHERE v.level IN ('N5','N4')
    AND (jsonb_typeof(token)<>'object'
         OR coalesce(token->>'surface','')=''
         OR coalesce(token->>'reading','')='');
  IF n <> 0 THEN RAISE EXCEPTION 'Malformed explicit furigana token objects: %', n; END IF;

  -- -----------------------------------------------------------------------
  -- 4. Grammar: validate per usage when usages exist, otherwise grammar-level.
  -- -----------------------------------------------------------------------
  WITH units AS (
    SELECT g.level,g.id grammar_id,u.id usage_id
    FROM public.jp_grammar g JOIN public.jp_grammar_usages u ON u.grammar_id=g.id
    WHERE g.level IN ('N5','N4')
    UNION ALL
    SELECT g.level,g.id,NULL::uuid
    FROM public.jp_grammar g
    WHERE g.level IN ('N5','N4')
      AND NOT EXISTS (SELECT 1 FROM public.jp_grammar_usages u WHERE u.grammar_id=g.id)
  ), x AS (
    SELECT u.level,u.grammar_id,u.usage_id,
           count(e.id) total,
           count(*) FILTER (WHERE e.example_type='standard') standard_n,
           count(*) FILTER (WHERE e.example_type='daily') daily_n,
           count(*) FILTER (WHERE e.example_type='business') business_n
    FROM units u
    LEFT JOIN public.jp_grammar_examples e
      ON e.grammar_id=u.grammar_id AND e.usage_id IS NOT DISTINCT FROM u.usage_id
    GROUP BY u.level,u.grammar_id,u.usage_id
  )
  SELECT count(*) INTO n FROM x
  WHERE total<>3 OR standard_n<>1 OR daily_n<>1 OR business_n<>1;
  IF n <> 0 THEN RAISE EXCEPTION 'Grammar 3-example coverage failed for % units', n; END IF;

  SELECT count(*) INTO n
  FROM public.jp_grammar_examples e JOIN public.jp_grammar g ON g.id=e.grammar_id
  WHERE g.level IN ('N5','N4')
    AND (coalesce(e.example_jp,'')='' OR coalesce(e.example_vi,'')=''
         OR coalesce(e.cloze_jp,'')='' OR coalesce(e.answer,'')='');
  IF n <> 0 THEN RAISE EXCEPTION 'Grammar example required fields missing: % rows', n; END IF;

  IF EXISTS (
    SELECT 1 FROM public.jp_grammar g
    WHERE g.level IN ('N5','N4') AND g.review_status='needs_review'
  ) THEN RAISE EXCEPTION 'N5/N4 grammar patterns still have needs_review'; END IF;

  IF EXISTS (
    SELECT 1 FROM public.jp_grammar_examples e JOIN public.jp_grammar g ON g.id=e.grammar_id
    WHERE g.level IN ('N5','N4') AND e.review_status='needs_review'
  ) THEN RAISE EXCEPTION 'N5/N4 grammar examples still have needs_review'; END IF;

  SELECT count(*) INTO n FROM (
    SELECT g.level,e.example_jp,count(*) c
    FROM public.jp_grammar_examples e JOIN public.jp_grammar g ON g.id=e.grammar_id
    WHERE g.level IN ('N5','N4')
    GROUP BY g.level,e.example_jp HAVING count(*)>1
  ) d;
  IF n <> 0 THEN RAISE EXCEPTION 'Exact duplicated grammar example sentences remain: % groups', n; END IF;

  RAISE NOTICE 'PASS: N5/N4 final content gate completed successfully.';
END $$;

-- Informational only: repeated source vocabulary keys are kept when the same
-- source word appears again in another lesson or represents another sense.
-- This result is NOT a failure; exact repeated sentences are already forbidden above.
SELECT level,word_jp,reading_furigana,count(*) occurrences,array_agg(lesson_no ORDER BY lesson_no) lessons
FROM public.jp_vocab
WHERE level IN ('N5','N4')
GROUP BY level,word_jp,reading_furigana
HAVING count(*)>1
ORDER BY level,word_jp;

# N5/N4 final apply order

This is the canonical order for the audited N5/N4 content package. Do not run the validators between mutation stages. Production application should be done as one reviewed batch, followed immediately by all final validators.

## 1. N4 vocabulary example coverage

Run all lesson files in lesson order. These add the missing `exam` and `business` examples while preserving the existing `daily` example.

1. `n4_vocab_lesson26_examples.sql`
2. `n4_vocab_lesson27_examples.sql`
3. `n4_vocab_lesson28_examples.sql`
4. `n4_vocab_lesson29_examples.sql`
5. `n4_vocab_lesson30_examples.sql`
6. `n4_vocab_lesson31_examples.sql`
7. `n4_vocab_lesson32_examples.sql`
8. `n4_vocab_lessons33_34_examples.sql`
9. `n4_vocab_lessons35_36_examples.sql`
10. `n4_vocab_lessons37_38_examples.sql`
11. `n4_vocab_lessons39_40_examples.sql`
12. `n4_vocab_lesson41_examples.sql`
13. `n4_vocab_lesson42_examples.sql`
14. `n4_vocab_lessons43_44_examples.sql`
15. `n4_vocab_lessons45_46_examples.sql`
16. `n4_vocab_lessons47_48_examples.sql`
17. `n4_vocab_lessons49_50_examples.sql`

## 2. Grammar roles and reviewed business examples

1. `n4_grammar_example_roles.sql`
2. `n4_grammar_business_part1.sql`
3. `n4_grammar_business_part2.sql`
4. `n5_grammar_business_quality.sql`
5. `n5_grammar_example_roles_completion.sql`

## 3. Core language/data corrections

1. `n5_core_content_corrections.sql`
2. `n4_grammar_core_corrections.sql`
3. `n5_grammar_duplicate_and_alignment_fix.sql`
4. `n4_vocab_certain_meaning_fixes.sql`
5. `n4_vocab_duplicate_example_fixes.sql`
6. `n4_vocab_particle_and_translation_fixes.sql`
7. `n4_review_status_resolutions.sql`
8. `n5_n4_verb_class_completion.sql`

## 4. Practice/question synchronization

Meaning changes must be complete before question synchronization.

1. `n4_vocab_question_meaning_sync.sql`
2. `n5_n4_question_quality_fixes.sql`
3. `n5_vocab_mcq_completion.sql`

## 5. Kanji corrections and representative word coverage

1. `kanji_n5_n4_reading_question_fixes.sql`
2. `zz_kanji_n5_n4_final_compound_coverage.sql`
3. `kanji_n5_n4_vocab_link_sync.sql`

The Kanji package intentionally does **not** attempt to import every dictionary compound for every secondary/rare reading. The audited learner-facing invariant is: every N5/N4 Kanji has at least two representative real words, and every reading prioritized for learning/questions has a representative word. Rare but valid dictionary readings can remain without a dedicated example rather than forcing advanced vocabulary into N5/N4.

## 6. Final language/cloze polish — run last among mutations

1. `zz_n5_n4_final_language_polish.sql`
2. `zzzz_n5_n4_final_cloze_alignment.sql`
3. `zzzzz_n5_n4_cross_level_duplicate_polish.sql`

The last polish file removes exact sentence reuse across N5/N4 after all earlier wording/cloze corrections have settled.

## 7. Final read-only validators

Run all of these after every mutation above:

1. `validate_n5_n4_content.sql`
2. `validate_n5_n4_practice.sql`
3. `validate_n5_n4_final_context_alignment.sql`
4. `validate_kanji_n5_n4.sql`
5. `validate_kanji_n5_n4_final_coverage.sql`
6. `validate_n5_n4_cross_level_duplicates.sql`

Any raised exception means **NOT READY**. Do not merge/deploy/import until all validators pass and the GitHub validation workflow passes lint, typecheck, test, and build.

# N5 practice bank — status

Branch: `chatgpt/n5-n4-content-quality`

This is an authoring/QA area. Nothing here has been applied to production Supabase.

## Current authored bank

| File | Mode | Authored items |
|---|---|---:|
| `n5_practice_set_01.json` | 練習 | 26 |
| `n5_challenge_set_01.json` | チャレンジ | 26 |
| `n5_jlpt_mini_mock_01.json` | JLPT模試 | 34 |
| `n5_practice_set_02.json` | 練習 | 30 |
| `n5_challenge_set_02.json` | チャレンジ | 30 |
| `n5_jlpt_mini_mock_02.json` | JLPT模試 | 34 |
| **Total effective authored items** |  | **180** |

QA replacements do not add to the item total; they supersede a same-ID authoring row.

## QA resolution files

- `n5_jlpt_mini_mock_01_qa_resolutions.json`
  - resolves ambiguity in N5-J01-033 by explicitly requiring arrival before class start.
- `n5_challenge_set_02_qa_resolutions.json`
  - N5-C02-001: removes unverified `新幹線/普通` vocabulary and uses verified `電車/バス`.
  - N5-C02-002: replaces a grammatical-but-stiff correction with natural N5 `人がたくさん住んでいます` / `人が多いです`.
  - N5-C02-013: fixes a Japanese prompt field that had accidentally contained Vietnamese.

Final materialization/import MUST apply QA replacements by ID and MUST NOT import superseded authoring rows.

## What the 180-item milestone proves

### 練習
The new practice layer can avoid isolated dictionary flashcards while remaining N5:
- particles and collocations in paired/multi-blank contexts
- transitive/intransitive contrasts
- similar/homophonous words and kanji in context
- verb/adjective transformations inside real sentences
- permission/prohibition/request/dialogue tasks
- state/action distinctions with `～ています`
- obligation vs non-obligation
- `ほしい` vs `～たい`
- counters and quantity reasoning
- directional compounds (`持って行く／持って来る`)
- transport sequences (`乗る／乗り換える／降りる`)
- short reading and information use

### チャレンジ
Difficulty comes from reasoning/production, not from importing N3/N2:
- single- and multi-error correction
- particle + tense repair in the same sentence
- near-grammar contrast
- viewpoint transformation (`くれる／もらう`)
- sentence composition with an extra distractor
- multi-condition time/budget/route inference
- free-response multi-clause production
- polysemy through collocation (`出す`, `出る`)
- kanji choice through sentence meaning rather than isolated reading recall

### JLPT模試
The mock layer intentionally keeps the official N5 families, including simple recognition forms that were rejected from regular practice:

Vocabulary:
- Kanji reading
- Orthography
- Contextually-defined expressions
- Paraphrases

Grammar:
- Selecting grammar form
- Sentence composition
- Text grammar

Reading:
- Short passages
- Mid-size passages
- Information retrieval

Listening is not yet authored in this text bank and must remain a separate phase because it needs audio/script/distractor QA.

## Current source alignment

Authoring has been checked against live N5 source rows (read-only queries only):
- 850 N5 vocabulary entries across lessons 1–25
- current N5 grammar inventory in `jp_grammar`
- source vocabulary/grammar were read for target selection; no production write was performed.

## Hard rules before expansion/import

1. Practice/Challenge must not regress into isolated “what does X mean/read?” drills.
2. JLPT mock must use only official item families.
3. Challenge stays linguistically N5 even when reasoning is difficult.
4. Plausible distractors only; no joke/nonsense distractors used just to fill four choices.
5. MCQ needs one defensible answer.
6. Free response needs explicit accepted answers where multiple natural forms are expected.
7. Repeated target knowledge must return through a different task, not a copied template.
8. Reading must include inference/information combination, not only keyword extraction.
9. Every authoring batch gets Japanese QA before final materialization.
10. No production migration until the N5 bank is complete, normalized, validated, and independently checked.

## Validation

`validate_n5_practice_bank.mjs` is the structural gate for the authoring files. It applies same-ID QA replacements and checks duplicate IDs, review flags, answer/choice consistency, JLPT family boundaries, and anti-monotony constraints.

This validator is structural only. It does not replace manual Japanese review.

## Completion status

**N5 PRACTICE BANK: IN PROGRESS — NOT READY FOR IMPORT YET.**

The 180-item milestone is the first curated foundation, not a claim that N5 exercise coverage is complete.

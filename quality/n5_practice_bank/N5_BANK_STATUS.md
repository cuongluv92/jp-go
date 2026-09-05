# N5 practice bank — status

Branch: `chatgpt/n5-n4-content-quality`

This is an authoring/QA area. Nothing in this bank has been applied to production Supabase.

## Current curated authored bank

| File group | Mode | Effective authored items |
|---|---|---:|
| `n5_practice_set_01..03.json` | 練習 | 86 |
| `n5_challenge_set_01..03.json` | チャレンジ | 86 |
| `n5_jlpt_mini_mock_01..03.json` | JLPT text mock | 102 |
| `n5_listening_mock_01.json` | JLPT listening mock | 32 |
| **Total effective authored items** |  | **306** |

QA resolution files replace same-ID authoring rows and do **not** increase the effective count.

## What has now been added

### 練習 — 86
The regular practice layer avoids isolated dictionary flashcards and covers:
- particles/collocations in real sentences
- similar-word and kanji contrasts
- verb/adjective transformation
- request/permission/prohibition
- obligation vs non-obligation
- `ほしい` vs `Vたい`
- counters, time and quantity reasoning
- directional compounds such as `持って行く／持って来る`
- transport sequences such as `乗る／乗り換える／降りる`
- short reading and practical information use

### チャレンジ — 86
Difficulty comes from N5 reasoning rather than N3/N2 vocabulary:
- error correction
- multi-error repair
- particle + tense repair
- near-grammar contrast
- viewpoint (`くれる／もらう`)
- sentence reconstruction
- multi-condition time/budget/route reasoning
- production/free response
- contextual kanji selection
- polysemy/collocation

### JLPT text mocks — 102
Three 34-item mini mocks cover all official N5 text families:

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

Mock 03 was specifically expanded to cover previously thinner N5 grammar such as:
- `あまり～ない`
- `Vなくてもいい`
- `Vなければなりません`
- `Vたことがあります`
- `Vたり、Vたりします`
- `Vる前に`

### JLPT listening mock — 32
`n5_listening_mock_01.json` covers all four official N5 listening families, 8 items each:
- 課題理解 / task-based comprehension
- ポイント理解 / comprehension of key points
- 発話表現 / verbal expressions
- 即時応答 / quick response

Listening items contain `audio_script_ja` as authoring/QA source. The transcript must be hidden in the real attempt; audio/TTS production is a later mechanical step.

The first listening QA pass also replaced the quick-response items where two natural responses could otherwise both be defensible. MCQ now targets one best communicative response.

## Existing core DB coverage (read-only audit)

The curated 306-item layer supplements, rather than replaces, the existing base question banks:

- N5 vocabulary source: **850** entries.
- N5 grammar source: **98 patterns / 118 usage units**.
- N5 kanji source: **98 kanji**.
- N5 kanji questions currently have **98/98 coverage for each of four basic types**:
  - `choose_kanji_from_meaning`
  - `choose_reading`
  - `choose_word_meaning`
  - `write_reading`
- N5 grammar base questions already cover all 118 usage units for the core meaning/connection/fill-blank layers.
- The prepared quality SQL resolves the known N5 vocabulary question hole for `優しい` and other practice-bank cleanup, but it has **not** been applied to production.

This means we do **not** need to create another 98×4 isolated Kanji drill bank merely to inflate counts; the new authored layer should keep focusing on contextual, integrated and exam-like use.

## QA / validation

`validate_n5_practice_bank.mjs` now validates:
- duplicate IDs
- unresolved review flags
- answer/choice consistency
- duplicate choices
- official JLPT text-family boundaries
- official JLPT listening-family boundaries
- required listening scripts
- required scene data for 発話表現
- anti-flashcard rules for 練習/Challenge
- minimum non-MCQ/integrated ratios for Challenge

The validator is now called directly by `.github/workflows/n5-n4-final-validation.yml`, so every push to the quality branch is forced through it before the remaining lint/typecheck/test/build pipeline.

## Important remaining work before import

Content structure is much stronger now, but N5 is **not yet marked import-ready** until all of these are true:

1. Latest GitHub Actions run passes the N5 bank validator + lint + typecheck + tests + build.
2. Listening scripts receive a final Japanese-only read-through before TTS/audio generation.
3. Final materialization applies all same-ID QA replacements and never imports superseded rows.
4. The prepared N5/N4 quality SQL hard gates pass in staging/local before production.
5. Audio generation/storage is designed so it does not unnecessarily consume Supabase storage; scripts can be generated first and audio assets added only when the app is ready to serve them.
6. No production migration/deploy occurs until the final handoff step.

## Completion status

**N5 PRACTICE BANK: CONTENT EXPANDED TO 306 CURATED ITEMS; LISTENING STRUCTURE NOW COVERED; FINAL QA/IMPORT GATE STILL REQUIRED.**

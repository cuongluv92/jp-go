# N5 practice bank — authoring standard

Scope: N5 only. This folder is content-first preparation for later Codex import/UI work. Do not apply it to production Supabase yet.

## 1. Four modes

### 練習 / practice
Build usable knowledge through context. Do not ask isolated flashcard questions such as “X means what?” or “How is X read?” unless the item is explicitly part of JLPT 模試.

Primary item families:
- context cloze
- particle/collocation contrast
- near-word contrast
- transitive/intransitive contrast
- kanji-in-context contrast
- controlled dialogue response
- sentence transformation
- short reading / information use

### チャレンジ / challenge
Difficulty must come from reasoning and production while staying inside N5 vocabulary/grammar. Do not make it “hard” by importing N3/N2 language.

Minimum expectations per set:
- at least 30% non-MCQ or multi-step
- at least 25% test two or more skills together
- error correction, transformation, contrast and inference must be present
- distractors must be plausible Japanese, not nonsense fillers

### JLPT模試 / jlpt_mock
Follow the official N5 text item families:

Vocabulary:
1. Kanji reading
2. Orthography
3. Contextually-defined expressions
4. Paraphrases

Grammar:
1. Sentential grammar 1 — selecting grammar form
2. Sentential grammar 2 — sentence composition
3. Text grammar

Reading:
1. Short passages
2. Mid-size passages
3. Information retrieval

### 聴解模試 / listening_mock
Follow the official N5 listening families:
1. Task-based comprehension / 課題理解
2. Comprehension of key points / ポイント理解
3. Verbal expressions / 発話表現
4. Quick response / 即時応答

Authoring rules for listening:
- `audio_script_ja` is QA/source material and must be hidden while the learner answers.
- Task-based items must require choosing an action, order, destination, deadline, route, etc., not merely recognizing one word.
- Key-point items must make the learner select the requested reason/preference/main point from a coherent utterance.
- Verbal-expression items must include a clear `scene_ja`; future UI may render an illustration, but the authored scene must already establish only one best expression.
- Quick-response items must have exactly one best response. Do not include both an equally natural acceptance and rejection as separate choices.
- Distractors should be natural Japanese but wrong for the communicative function; avoid joke/nonsense strings.
- Audio production/TTS comes after script QA. Do not treat visible text as listening in the final app.

## 2. Anti-monotony rules

A question is rejected if it can be answered only by seeing one isolated word and recalling a dictionary pair, except in `jlpt_mock` where that item family is part of the official format.

Reject:
- repeated “この言葉の意味は？” patterns in practice/challenge
- repeated “読み方は？” patterns in practice/challenge
- templates that only substitute one noun while keeping the same sentence
- distractors that are obviously impossible by grammar or semantic category
- questions with more than one defensible answer
- questions whose difficulty comes from vocabulary above N5 rather than from reasoning
- listening items whose transcript gives away the answer only through one isolated keyword when a richer task is appropriate

Prefer:
- the same knowledge returning later through a different task
- a word first used in context, later tested for particle/collocation, then later contrasted with a near word
- grammar tested through meaning + connection + actual sentence production
- kanji tested inside real words/sentences rather than isolated ON/KUN recall
- listening that tests action, reason, sequence, viewpoint, time/budget or social response

## 3. Difficulty

- 1 = guided N5 practice
- 2 = JLPT-like N5 reasoning
- 3 = challenge: production, correction, close contrasts, multi-condition inference

Difficulty 3 must remain linguistically N5. JLPT text/listening mocks should normally remain difficulty 1–2.

## 4. Item schema used by JSON files

Each item uses stable fields where applicable:

- `id`
- `mode`: `practice` | `challenge` | `jlpt_mock` | `listening_mock`
- `domain`: `vocab` | `kanji` | `grammar` | `dialogue` | `reading` | `integrated`
- `subtype`
- `problem_family` for official mock families
- `difficulty`: 1..3
- `instruction_ja`
- `instruction_vi` (practice/challenge only when useful)
- `stimulus_ja`
- `prompt_ja`
- `scene_ja` for verbal-expression listening items
- `audio_script_ja` for listening authoring
- `choices`: optional array
- `correct_answer`: string or array
- `accepted_answers`: optional array for free response
- `explanation_vi`
- `targets`: explicit target vocabulary/grammar/kanji
- `skills`
- `lesson_refs`: N5 lesson numbers where relevant

Passage/information items may share a `group_id` and the same `stimulus_ja`.

## 5. Quality gate before import

For every set:
1. Japanese is natural and grammatically correct.
2. Target knowledge is genuinely N5.
3. Exactly one answer is intended for MCQ.
4. Free-response accepted answers are explicit.
5. No exact duplicate prompt.
6. No repeated low-information template family dominates a set.
7. Reading questions include at least some inference/information-combination items, not only keyword copy.
8. `jlpt_mock` and `listening_mock` use only official N5 families.
9. `challenge` does not become an N3 test.
10. Listening scripts are hidden in answer mode and reviewed before audio generation.
11. Content is reviewed before any production migration.

## 6. Official alignment note

The current official JLPT N5 structure uses 20 minutes for Language Knowledge (Vocabulary), 40 minutes for Language Knowledge (Grammar)・Reading, and 30 minutes for Listening. N5 vocabulary has Kanji reading, Orthography, Contextually-defined expressions and Paraphrases; grammar has Selecting grammar form, Sentence composition and Text grammar; reading has Short passages, Mid-size passages and Information retrieval. Listening has Task-based comprehension, Comprehension of key points, Verbal expressions and Quick response.

This folder uses those official families for `jlpt_mock`/`listening_mock`, while `practice` and `challenge` deliberately add richer learning tasks.

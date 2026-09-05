# N5 practice bank — authoring standard

Scope: N5 only. Content-first preparation for later Codex import/UI work. Do not apply it to production Supabase yet.

## 1. Learner-facing placement

There are only two main learner-facing exercise surfaces:

1. **Detail page exercise block** under every vocabulary item, Kanji, and grammar usage.
2. **Luyện tập** page for cumulative review by Day / Lesson / vocabulary chunk, plus JLPT practice.

`challenge` remains an internal content mode/difficulty label, but it is **not a separate top-level learner destination**. Challenge items are rendered inside the relevant vocabulary/Kanji/grammar detail exercise block after normal contextual practice.

See `N5_EXERCISE_PLACEMENT_SPEC.md` for the final placement rules.

## 2. Detail-page exercise principle

The learning content already shows meaning, readings, ON/KUN, Hán Việt, connection/form, nuance and examples. Therefore the exercise block must test **use**, not re-ask the explanation.

Forbidden outside official JLPT mock:
- `この言葉の意味は？`
- isolated vocabulary reading recall
- `Hán Việt của Kanji này là gì?`
- `Âm ON/KUN là gì?`
- `Kanji này nghĩa là gì?`
- trivial Kanji composition such as `学 + 校 = ?`
- `Mẫu ngữ pháp này nghĩa là gì?`
- standalone formula-definition matching

Preferred detail-page tasks:
- context cloze
- particle/collocation contrast
- near-word contrast
- transitive/intransitive contrast
- Kanji-in-context contrast
- controlled dialogue response
- error detection/correction
- sentence transformation
- sentence composition/reordering
- short contextual inference
- production without choices

## 3. Vocabulary detail target

Normally 5–8 useful questions per vocabulary item. Do not force every subtype onto every word.

Good progression:
1. context use
2. particle/collocation
3. natural sentence choice
4. near-word/homophone contrast where relevant
5. dialogue or repair
6. controlled transformation
7. 1–2 Challenge items combining multiple known skills

## 4. Kanji detail target

Normally 5–7 contextual questions per Kanji plus optional handwriting.

Preferred:
- correct Kanji inside a sentence
- similar-Kanji contrast in context
- real N5 word containing the Kanji
- reading inside a real word/sentence
- compound/word usage
- Challenge paired sentences with confusing Kanji
- handwriting/stroke production

ON/KUN, Hán Việt, radical, stroke count and meanings remain learning information, not the main drill.

## 5. Grammar detail target

Normally 6–10 questions per grammar usage.

Preferred progression:
1. complete pattern in context
2. correct connection/form
3. particle/form interaction
4. situation-based use
5. contrast with a nearby N5 pattern
6. error correction
7. sentence reordering/composition
8. transformation
9. dialogue/mini-passage use
10. Challenge combining grammar with vocabulary/tense/particle/another learned pattern

Meaning and formula are explained above; exercises test use.

## 6. Challenge authoring

Difficulty must come from reasoning and production while staying inside N5 vocabulary/grammar. Do not make N5 “hard” by importing N3/N2 language.

For any challenge-heavy block:
- at least 30% non-MCQ or multi-step
- at least 25% test two or more skills together
- include correction, transformation, contrast or inference
- distractors must be plausible Japanese, not nonsense fillers

Challenge items are attached to the relevant learning item whenever possible.

## 7. Luyện tập page

The Practice page is cumulative review, not isolated single-item drilling.

Primary groupings:
- Day 1 / Day 2 / Day 3 ... according to the roadmap
- Lesson 1 / Lesson 2 / Lesson 3 ...
- vocabulary 1–10 / 11–20 / 21–30 ...
- cumulative Day 1–3 / Lessons 1–5 / first 50 words
- weak points / mistakes / today’s SRS
- JLPT mini mock / listening mock / later full mock

A normal cumulative session should mix vocabulary, grammar, Kanji, dialogue/error-repair, and short reading/information use.

Do not mechanically ask one fixed question per word in order. Reuse difficult targets only through a different task type.

## 8. JLPT mock

Official N5 text families:

Vocabulary:
1. Kanji reading
2. Orthography
3. Contextually-defined expressions
4. Paraphrases

Grammar:
1. Selecting grammar form
2. Sentence composition
3. Text grammar

Reading:
1. Short passages
2. Mid-size passages
3. Information retrieval

Official N5 listening families:
1. Task-based comprehension / 課題理解
2. Comprehension of key points / ポイント理解
3. Verbal expressions / 発話表現
4. Quick response / 即時応答

Simple recognition such as Kanji reading/orthography is allowed here because it is part of the real exam format. This exception must not leak into ordinary detail-page exercises.

## 9. Listening authoring rules

- `audio_script_ja` is hidden while answering.
- Task-based items test action/order/destination/deadline/route, not one-word recognition.
- Key-point items test reason/preference/main point.
- Verbal-expression items require a clear scene with one best expression.
- Quick-response items require exactly one best response.
- Distractors should be natural Japanese but wrong for the communicative function.
- Audio/TTS production comes only after script QA.

## 10. Difficulty

- 1 = guided N5 context practice
- 2 = JLPT-like N5 reasoning
- 3 = Challenge: production, correction, close contrasts, multi-condition inference

Difficulty 3 must remain linguistically N5.

## 11. Item schema

Stable fields where applicable:
- `id`
- `mode`: `practice` | `challenge` | `jlpt_mock` | `listening_mock`
- `domain`: `vocab` | `kanji` | `grammar` | `dialogue` | `reading` | `integrated`
- `subtype`
- `problem_family`
- `difficulty`
- `instruction_ja`
- `instruction_vi`
- `stimulus_ja`
- `prompt_ja`
- `scene_ja`
- `audio_script_ja`
- `choices`
- `correct_answer`
- `accepted_answers`
- `explanation_vi`
- `targets`
- `skills`
- `lesson_refs`
- future placement/link fields such as target vocabulary/Kanji/grammar IDs

## 12. Quality gate before import

Every authored item must pass:
1. natural Japanese
2. genuine N5 scope
3. one defensible MCQ answer
4. explicit accepted answers for free response
5. no exact duplicate prompt
6. no low-information template domination
7. reading includes inference/information combination
8. mock uses only official N5 families
9. Challenge does not become N3
10. detail drills do not regress into definition/reading flashcards
11. listening script reviewed before audio
12. content reviewed before production migration

## 13. SRS rule

Wrong answers should return later through a different task:
- context error → new context
- particle/collocation error → same target, new sentence
- Kanji confusion → contrast pair
- grammar-form error → transformation or correction

Do not repeat the exact prompt unless intentionally checking immediate correction.

## 14. Final learning logic

**Learning page** shows the information.

**Detail exercise block** proves the learner can USE that item.

**Luyện tập** proves the learner can RETRIEVE and COMBINE a completed Day/Lesson/10-word chunk.

**JLPT mock inside Luyện tập** proves the learner can handle the exam format.

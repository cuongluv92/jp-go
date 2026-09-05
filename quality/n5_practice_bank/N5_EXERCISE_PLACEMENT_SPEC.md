# N5 exercise placement spec — final direction

Branch: `chatgpt/n5-n4-content-quality`

This document defines WHERE N5 exercises appear in the app. It supersedes the earlier idea of a standalone Challenge area.

## 1. Two learner-facing surfaces only

### A. Detail page of each learning item
Every vocabulary item, Kanji, and grammar usage has its own detailed exercise block directly under the learning content.

Challenge is NOT a separate destination. Challenge questions for that item are included inside the same exercise block and unlock/appear after the learner handles the normal questions.

### B. `Luyện tập` page
The Practice page is for cumulative review and exam-style work after a learning chunk has been completed.

It can be entered by:
- Day 1 / Day 2 / Day 3 ... according to the study roadmap
- Lesson 1 / Lesson 2 / Lesson 3 ...
- first 10 vocabulary items / next 10 / next 10 ...
- a completed grammar/Kanji chunk
- cumulative mixed review
- JLPT mini mock / listening mock / later full mock

The Practice page is NOT the place for isolated single-word drills.

---

## 2. Vocabulary detail page

Under each vocabulary entry, show `Bài tập từ này`.

Target: normally 5–8 useful questions per vocabulary item, selected according to what is actually meaningful for that word. Do not force every subtype onto every word.

Preferred families:
1. context cloze using a natural sentence
2. particle/collocation choice
3. choose the most natural usage sentence
4. near-word or homophone contrast where relevant
5. dialogue response using the target word
6. sentence repair when there is a common learner error
7. controlled sentence transformation
8. Challenge item combining the word with grammar/particle/context

Forbidden as normal detail-page drills:
- `この言葉の意味は？`
- isolated reading recall
- direct Japanese↔Vietnamese dictionary pair recall
- four obviously unrelated distractors

The learner should finish the block knowing how the word behaves in a sentence, not merely what it translates to.

### Example: 優しい
Normal:
- `田中先生は、分からないところを何度も説明してくれる＿＿先生です。`
- contrast `優しい / 易しい`
- select the sentence where 優しい is used naturally

Challenge:
- two short contexts requiring `優しい` and `易しい` separately without choices
- repair a sentence where the wrong Kanji/meaning is used

---

## 3. Kanji detail page

Under each Kanji entry, show `Bài tập Kanji này`.

Target: normally 5–7 contextual questions per Kanji, plus handwriting when appropriate.

Preferred families:
1. choose the correct Kanji inside a sentence
2. distinguish visually/semantically similar Kanji in context
3. choose the correct real word containing the Kanji for a sentence
4. reading inside a real word or sentence, not isolated ON/KUN recall
5. compound/word usage tied to existing N5 vocabulary
6. Challenge: two or more confusing Kanji across paired sentences
7. handwriting/stroke practice as an optional production task

Forbidden:
- `Hán Việt của chữ này là gì?`
- `Âm ON là gì?`
- `Âm KUN là gì?`
- `Kanji này nghĩa là gì?`
- `ghép 学 + 校 = ?`-style trivial composition
- isolated reading unless it is inside JLPT mock format

ON/KUN, Hán Việt, meanings, radical and readings remain LEARNING INFORMATION on the detail page, not the main exercise question.

### Example: 待
Normal:
- `駅で友達を＿＿っています。` → 待
- contrast `待 / 持`
- choose the real word/sentence where 待 is required

Challenge:
- paired sentences where the learner must place 待 and 持 without choices
- one sentence also requiring the correct particle or verb form

---

## 4. Grammar detail page

Under every grammar usage, show `Bài tập ngữ pháp này`.

Target: normally 6–10 questions per grammar usage because grammar needs deeper practice than a single word.

Preferred progression:
1. complete the pattern inside a meaningful sentence
2. choose the correct connection/form
3. particle/form interaction
4. situation-based use
5. contrast with a nearby N5 pattern
6. error detection and correction
7. sentence reordering/composition
8. controlled transformation
9. short dialogue or mini-passage use
10. Challenge combining the grammar with vocabulary, tense, particle or another already-learned pattern

Forbidden:
- `Mẫu này nghĩa là gì?`
- `Công thức của mẫu này là gì?` as a standalone memorization question
- direct Vietnamese definition matching

Meaning, connection, nuance and examples remain the explanation above the exercise block. Exercises must test USE.

### Example: Vてください
Normal:
- `ここに名前を＿＿ください。` using 書く
- choose a situation where the request is natural
- repair an incorrect verb form

Challenge:
- transform a plain action into a polite request without choices
- distinguish `Vてください / Vてもいいですか / Vてはいけません` in three different situations

---

## 5. Exercise block behavior on detail pages

Recommended UI:

`Bài tập`  `0/6`

- show one question at a time
- after answer: concise explanation and furigana where useful
- Next question
- progress 1/6, 2/6 ...
- normal questions first, then `Challenge` questions in the SAME block
- wrong answers are saved to review/SRS
- do not dump 6–10 questions vertically on the page at once

Suggested difficulty flow:
- first 2–3: contextual guided practice
- middle 2–3: application/contrast
- final 1–2: Challenge / production / repair

The learner does not need a separate Challenge menu.

---

## 6. `Luyện tập` page = cumulative review

This page summarizes what has already been studied.

Primary selectors:

### By roadmap day
- Day 1
- Day 2
- Day 3
- ...

The question pool uses only vocabulary/Kanji/grammar assigned up to that day, with a small amount of spaced review from earlier days.

### By lesson
- Bài 1
- Bài 2
- Bài 3
- ...

Each lesson review mixes vocabulary + grammar + Kanji from that lesson and prerequisite knowledge.

### By vocabulary chunk
- Từ 1–10
- Từ 11–20
- Từ 21–30
- ...

This is useful when the learning roadmap displays vocabulary in chunks of ten.

### Mixed cumulative review
Examples:
- Day 1–3 review
- Lessons 1–5 review
- first 50 words review
- weak points / mistakes
- today’s SRS

### JLPT area inside `Luyện tập`
Keep exam preparation here, not under every individual item:
- Vocabulary mock
- Grammar/Reading mock
- Listening mock
- Mini JLPT
- later Full N5 mock

Official JLPT recognition families may include simple kanji reading/orthography because the exam requires them. This exception does NOT leak back into ordinary detail-page exercises.

---

## 7. Cumulative session composition

For a normal summary session of about 20 questions:
- 5 vocabulary-in-context
- 4 particle/collocation/usage
- 4 grammar
- 3 Kanji-in-context
- 2 dialogue/error-repair
- 2 short reading/information-use

For a 10-word chunk, do not ask one question per word in fixed order. Mix the ten targets and reuse selected difficult targets through a second, different question type.

A word can therefore appear twice in a cumulative session only when the two tasks test different knowledge, e.g. context use first and particle/collocation later.

---

## 8. SRS and weak-point behavior

Detail-page mistakes and cumulative-practice mistakes feed the same review memory.

If the learner misses:
- meaning-in-context → later ask usage in a different sentence
- particle/collocation → later ask the same word with a new context
- Kanji confusion → later contrast the confusing pair
- grammar form → later use transformation or error correction

Do NOT repeat the exact same prompt unless intentionally verifying immediate correction.

---

## 9. Final rule

Learning page shows the information.
Exercise block proves the learner can USE that information.
Practice page proves the learner can RETRIEVE and COMBINE it after a chunk of study.
JLPT mock proves the learner can handle the EXAM format.

Do not turn any of these into isolated `what does this mean/read?` flashcard loops.

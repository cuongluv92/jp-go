#!/usr/bin/env node

/**
 * Structural/content-shape gate for the authored N5 practice bank.
 *
 * This does NOT replace Japanese-language review. It prevents mechanical drift:
 * - duplicate IDs
 * - unresolved review rows after QA replacements
 * - invalid MCQ answers
 * - invented item families inside JLPT text/listening mocks
 * - isolated flashcard-style tasks leaking into practice/challenge
 * - Challenge sets becoming mostly recognition MCQ
 * - listening rows missing an audio authoring script
 *
 * Run from repository root:
 *   node quality/n5_practice_bank/validate_n5_practice_bank.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));

const SET_RE = /^n5_(practice_set|challenge_set|jlpt_mini_mock|listening_mock)_\d+\.json$/;
const QA_RE = /_qa_resolutions\.json$/;

const OFFICIAL_N5_TEXT_MOCK_FAMILIES = new Set([
  'kanji_reading',
  'orthography',
  'contextually_defined_expression',
  'paraphrase',
  'sentential_grammar_form',
  'sentence_composition',
  'text_grammar',
  'short_passage',
  'mid_size_passage',
  'information_retrieval',
]);

const OFFICIAL_N5_LISTENING_FAMILIES = new Set([
  'task_based_comprehension',
  'key_point_comprehension',
  'verbal_expressions',
  'quick_response',
]);

const FORBIDDEN_PRACTICE_CHALLENGE_SUBTYPES = new Set([
  'isolated_meaning',
  'isolated_reading',
  'isolated_kanji_reading',
  'isolated_on_kun',
  'simple_kanji_composition',
  'copy_kanji',
]);

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
}

function fail(errors, message) {
  errors.push(message);
}

const files = fs.readdirSync(dir).filter((f) => SET_RE.test(f)).sort();
const qaFiles = fs.readdirSync(dir).filter((f) => QA_RE.test(f)).sort();

if (files.length === 0) {
  console.error('No N5 bank set files found.');
  process.exit(1);
}

const replacementById = new Map();
for (const file of qaFiles) {
  const doc = readJson(file);
  for (const item of doc.replacements ?? []) {
    if (!item?.id) throw new Error(`${file}: replacement missing id`);
    if (replacementById.has(item.id)) {
      throw new Error(`${file}: duplicate QA replacement for ${item.id}`);
    }
    replacementById.set(item.id, item);
  }
}

const errors = [];
const ids = new Set();
const sets = [];
let total = 0;

for (const file of files) {
  const doc = readJson(file);
  const items = (doc.items ?? []).map((item) => replacementById.get(item.id) ?? item);
  const mode = doc.mode;

  if (!['practice', 'challenge', 'jlpt_mock', 'listening_mock'].includes(mode)) {
    fail(errors, `${file}: invalid mode ${mode}`);
  }

  let nonMcq = 0;
  let integrated = 0;

  for (const item of items) {
    total += 1;

    if (!item.id) {
      fail(errors, `${file}: item without id`);
      continue;
    }
    if (ids.has(item.id)) fail(errors, `${file}: duplicate id ${item.id}`);
    ids.add(item.id);

    if (item.review_status === 'review' || item.review_status === 'needs_review') {
      fail(errors, `${file}: unresolved review item ${item.id}`);
    }

    const hasJapaneseAuthoringText = Boolean(
      item.stimulus_ja || item.prompt_ja || item.audio_script_ja || item.scene_ja,
    );
    if (!hasJapaneseAuthoringText) {
      fail(errors, `${file}: ${item.id} has no Japanese authoring text`);
    }
    if (item.difficulty != null && ![1, 2, 3].includes(item.difficulty)) {
      fail(errors, `${file}: ${item.id} invalid difficulty ${item.difficulty}`);
    }
    if (item.correct_answer == null) {
      fail(errors, `${file}: ${item.id} missing correct_answer`);
    }

    const hasChoices = Array.isArray(item.choices) && item.choices.length > 0;
    if (!hasChoices) nonMcq += 1;
    if (item.domain === 'integrated' || (item.skills?.length ?? 0) >= 4) integrated += 1;

    if (hasChoices && typeof item.correct_answer === 'string') {
      if (!item.choices.includes(item.correct_answer)) {
        fail(errors, `${file}: ${item.id} correct_answer is not one of choices`);
      }
      if (new Set(item.choices).size !== item.choices.length) {
        fail(errors, `${file}: ${item.id} has duplicate choices`);
      }
    }

    if (mode === 'jlpt_mock') {
      if (!OFFICIAL_N5_TEXT_MOCK_FAMILIES.has(item.problem_family)) {
        fail(errors, `${file}: ${item.id} non-official N5 text mock family ${item.problem_family}`);
      }
      if (item.difficulty === 3) {
        fail(errors, `${file}: ${item.id} mock item marked challenge difficulty 3`);
      }
    } else if (mode === 'listening_mock') {
      if (!OFFICIAL_N5_LISTENING_FAMILIES.has(item.problem_family)) {
        fail(errors, `${file}: ${item.id} non-official N5 listening family ${item.problem_family}`);
      }
      if (!item.audio_script_ja) {
        fail(errors, `${file}: ${item.id} listening item missing audio_script_ja`);
      }
      if (item.problem_family === 'verbal_expressions' && !item.scene_ja) {
        fail(errors, `${file}: ${item.id} verbal expression missing scene_ja`);
      }
      if (item.difficulty === 3) {
        fail(errors, `${file}: ${item.id} listening mock item marked challenge difficulty 3`);
      }
    } else {
      if (FORBIDDEN_PRACTICE_CHALLENGE_SUBTYPES.has(item.subtype)) {
        fail(errors, `${file}: ${item.id} forbidden isolated flashcard subtype ${item.subtype}`);
      }
      if (item.problem_family === 'kanji_reading' || item.problem_family === 'orthography') {
        fail(errors, `${file}: ${item.id} official recognition family leaked outside jlpt_mock`);
      }
    }
  }

  if (mode === 'challenge' && items.length > 0) {
    const nonMcqRatio = nonMcq / items.length;
    const integratedRatio = integrated / items.length;
    if (nonMcqRatio < 0.30) {
      fail(errors, `${file}: challenge non-MCQ ratio ${(nonMcqRatio * 100).toFixed(1)}% < 30%`);
    }
    if (integratedRatio < 0.20) {
      fail(errors, `${file}: challenge integrated proxy ${(integratedRatio * 100).toFixed(1)}% < 20%`);
    }
  }

  if (mode === 'listening_mock' && items.length > 0) {
    const familyCounts = new Map();
    for (const item of items) {
      familyCounts.set(item.problem_family, (familyCounts.get(item.problem_family) ?? 0) + 1);
    }
    for (const family of OFFICIAL_N5_LISTENING_FAMILIES) {
      if (!familyCounts.get(family)) {
        fail(errors, `${file}: listening family ${family} has zero items`);
      }
    }
  }

  sets.push({ file, mode, count: items.length, nonMcq, integrated });
}

for (const [id] of replacementById) {
  if (!ids.has(id)) {
    fail(errors, `QA replacement ${id} does not match any authored item`);
  }
}

console.log(`N5 practice bank: ${total} effective items across ${sets.length} sets`);
for (const s of sets) {
  console.log(`- ${s.file}: ${s.count} (${s.mode}), non-MCQ=${s.nonMcq}, integrated-proxy=${s.integrated}`);
}
console.log(`QA replacements applied: ${replacementById.size}`);

if (errors.length) {
  console.error(`\nFAILED with ${errors.length} issue(s):`);
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log('\nPASS: structural N5 bank quality gate. Japanese-language review is still required separately.');

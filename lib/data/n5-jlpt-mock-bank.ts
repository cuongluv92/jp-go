import mock01 from "@/quality/n5_practice_bank/n5_jlpt_mini_mock_01.json";
import mock01Qa from "@/quality/n5_practice_bank/n5_jlpt_mini_mock_01_qa_resolutions.json";
import mock02 from "@/quality/n5_practice_bank/n5_jlpt_mini_mock_02.json";
import mock03 from "@/quality/n5_practice_bank/n5_jlpt_mini_mock_03.json";
import mock03Qa from "@/quality/n5_practice_bank/n5_jlpt_mini_mock_03_qa_resolutions.json";
import listening01 from "@/quality/n5_practice_bank/n5_listening_mock_01.json";
import listening01Qa from "@/quality/n5_practice_bank/n5_listening_mock_01_qa_resolutions.json";

export interface N5JlptMockItem {
  id: string;
  section?: string;
  problem_family: string;
  difficulty: number;
  instruction_ja?: string;
  stimulus_ja?: string;
  scene_ja?: string;
  prompt_ja?: string;
  target_text?: string;
  audio_script_ja?: string;
  choices: string[];
  pieces?: string[];
  correct_order?: string[];
  star_position?: number;
  correct_answer: string;
  explanation_vi?: string;
  targets?: string[];
  skills?: string[];
  lesson_refs?: number[];
}

type RawN5JlptMockItem = Omit<N5JlptMockItem, "choices"> & { choices?: string[] };

interface TextMockDoc {
  set_id: string;
  title_ja: string;
  items: RawN5JlptMockItem[];
}

interface ListeningMockDoc {
  set_id: string;
  title_ja: string;
  title_vi?: string;
  items: RawN5JlptMockItem[];
}

interface QaDoc {
  replacements?: RawN5JlptMockItem[];
}

export interface N5JlptMockSet {
  id: string;
  title: string;
  items: N5JlptMockItem[];
}

function normalizeItem(item: RawN5JlptMockItem): N5JlptMockItem {
  const choices = item.choices ?? item.pieces ?? [];
  if (!choices.includes(item.correct_answer)) {
    throw new Error(`N5 mock item ${item.id}: correct answer is not selectable`);
  }
  return { ...item, choices };
}

function applyReplacements<T extends TextMockDoc | ListeningMockDoc>(doc: T, qa?: QaDoc): N5JlptMockSet {
  const replacements = new Map((qa?.replacements ?? []).map((item) => [item.id, item]));
  return {
    id: doc.set_id,
    title: doc.title_ja,
    items: doc.items.map((item) => normalizeItem(replacements.get(item.id) ?? item)),
  };
}

export const N5_TEXT_MINI_MOCKS: N5JlptMockSet[] = [
  applyReplacements(mock01 as unknown as TextMockDoc, mock01Qa as unknown as QaDoc),
  applyReplacements(mock02 as unknown as TextMockDoc),
  applyReplacements(mock03 as unknown as TextMockDoc, mock03Qa as unknown as QaDoc),
];

export const N5_LISTENING_MOCK: N5JlptMockSet = applyReplacements(
  listening01 as unknown as ListeningMockDoc,
  listening01Qa as unknown as QaDoc,
);

export const N5_TEXT_SECTION_ORDER = ["文字・語彙", "文法", "読解"] as const;

export const N5_LISTENING_FAMILY_LABELS: Record<string, string> = {
  task_based_comprehension: "課題理解 · Hiểu nhiệm vụ",
  key_point_comprehension: "ポイント理解 · Nắm thông tin chính",
  verbal_expressions: "発話表現 · Chọn cách nói phù hợp",
  quick_response: "即時応答 · Phản xạ trả lời",
};

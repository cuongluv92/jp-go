-- Nền dữ liệu cho kiểm tra chất lượng nội dung. Thay đổi additive, không xóa
-- dữ liệu; các trường chưa được biên tập giữ NULL thay vì suy đoán.

alter table public.jp_vocab
  add column if not exists dictionary_form text,
  add column if not exists verb_class text,
  add column if not exists transitivity text;

update public.jp_vocab
set dictionary_form = regexp_replace(trim(word_jp), '[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]+$', '')
where dictionary_form is null or dictionary_form = '';

-- Chỉ tự điền các nhóm có thể xác định chắc từ hình thức; động từ đuôi る
-- cần biên tập thủ công vì có thể là 一段 hoặc 五段.
update public.jp_vocab
set verb_class = case
  when dictionary_form in ('来る', 'くる') then 'kuru'
  when dictionary_form ~ 'する$' then 'suru'
  when dictionary_form ~ '[うくぐすつぬぶむ]$' then 'godan'
  else verb_class
end
where verb_class is null and word_class in ('動詞', '複合動詞');

alter table public.jp_vocab drop constraint if exists jp_vocab_verb_class_check;
alter table public.jp_vocab add constraint jp_vocab_verb_class_check
  check (verb_class is null or verb_class in ('godan', 'ichidan', 'suru', 'kuru'));
alter table public.jp_vocab drop constraint if exists jp_vocab_transitivity_check;
alter table public.jp_vocab add constraint jp_vocab_transitivity_check
  check (transitivity is null or transitivity in ('transitive', 'intransitive'));

alter table public.jp_vocab_examples
  add column if not exists example_no smallint default 2,
  add column if not exists example_type text default 'daily',
  add column if not exists difficulty smallint default 1,
  add column if not exists focus_note text,
  add column if not exists furigana_tokens jsonb not null default '[]'::jsonb;

update public.jp_vocab_examples
set example_no = coalesce(example_no, 2),
    example_type = coalesce(example_type, 'daily'),
    difficulty = coalesce(difficulty, 1);

alter table public.jp_vocab_examples drop constraint if exists jp_vocab_examples_example_no_check;
alter table public.jp_vocab_examples add constraint jp_vocab_examples_example_no_check check (example_no between 1 and 3);
alter table public.jp_vocab_examples drop constraint if exists jp_vocab_examples_example_type_check;
alter table public.jp_vocab_examples add constraint jp_vocab_examples_example_type_check check (example_type in ('exam', 'daily', 'business'));
alter table public.jp_vocab_examples drop constraint if exists jp_vocab_examples_difficulty_check;
alter table public.jp_vocab_examples add constraint jp_vocab_examples_difficulty_check check (difficulty between 1 and 3);

alter table public.jp_vocab_questions
  add column if not exists explanation_vi text,
  add column if not exists difficulty smallint default 1,
  add column if not exists skill_tag text;
alter table public.jp_vocab_questions drop constraint if exists jp_vocab_questions_difficulty_check;
alter table public.jp_vocab_questions add constraint jp_vocab_questions_difficulty_check check (difficulty between 1 and 3);

alter table public.jp_kanji_questions
  add column if not exists explanation_vi text,
  add column if not exists difficulty smallint default 1,
  add column if not exists skill_tag text;
alter table public.jp_kanji_questions drop constraint if exists jp_kanji_questions_difficulty_check;
alter table public.jp_kanji_questions add constraint jp_kanji_questions_difficulty_check check (difficulty between 1 and 3);

alter table public.jp_grammar_questions
  add column if not exists explanation_vi text,
  add column if not exists difficulty smallint default 1,
  add column if not exists skill_tag text;
alter table public.jp_grammar_questions drop constraint if exists jp_grammar_questions_difficulty_check;
alter table public.jp_grammar_questions add constraint jp_grammar_questions_difficulty_check check (difficulty between 1 and 3);

-- Các lỗi nội dung đã đối chiếu thấy chắc chắn trong đợt kiểm tra này.
update public.jp_grammar
set grammar_pattern = replace(grammar_pattern, 'Vたてあります', 'Vてあります'),
    source_text = replace(source_text, 'Vたてあります', 'Vてあります'),
    correction_note = concat_ws('; ', nullif(correction_note, ''), 'Sửa typo Vたてあります → Vてあります'),
    corrected_text = replace(grammar_pattern, 'Vたてあります', 'Vてあります')
where grammar_pattern like '%Vたてあります%';

update public.jp_grammar_questions
set question_text = replace(question_text, 'Vたてあります', 'Vてあります'),
    choice_1 = replace(choice_1, 'Vたてあります', 'Vてあります'),
    choice_2 = replace(choice_2, 'Vたてあります', 'Vてあります'),
    choice_3 = replace(choice_3, 'Vたてあります', 'Vてあります'),
    choice_4 = replace(choice_4, 'Vたてあります', 'Vてあります'),
    correct_answer = replace(correct_answer, 'Vたてあります', 'Vてあります')
where concat_ws(' ', question_text, choice_1, choice_2, choice_3, choice_4, correct_answer) like '%Vたてあります%';

update public.jp_grammar_examples
set example_vi = 'Bạn có thể nói với anh Wang là “Gọi cho tôi sau” được không?',
    correction_note = concat_ws('; ', nullif(correction_note, ''), 'Tên ワン được dịch nhất quán là Wang'),
    corrected_text = example_jp
where example_jp = 'ワンさんに「後で電話をください」と伝えていただけませんか。'
  and example_vi = 'Bạn có thể nói với Quang là “Gọi cho tôi sau” được không?';

update public.jp_grammar_examples
set example_jp = 'この料理は美味しいけど、少し高いです。',
    example_vi = 'Món này ngon nhưng hơi đắt.',
    cloze_jp = 'この料理は美味しい＿＿＿、少し高いです。',
    answer = 'けど',
    correction_note = concat_ws('; ', nullif(correction_note, ''), 'Ví dụ cũ không chứa mẫu けど'),
    corrected_text = 'この料理は美味しいけど、少し高いです。'
where example_jp = 'この料理美味しい?'
  and example_vi = 'Món ăn này ngon không?';

update public.jp_vocab_examples
set example_jp = '田中さんは日本人です。',
    example_vi = 'Anh Tanaka là người Nhật.',
    cloze_jp = '田中さんは日本_____です。',
    answer = '人',
    focus_note = 'Hậu tố ～人 chỉ quốc tịch/người thuộc một nước; tránh nhầm 何人 là “mấy người” hoặc “người nước nào” theo cách đọc.',
    difficulty = 1
where example_jp = 'あなたは何人ですか。'
  and vocab_id in (
    select id from public.jp_vocab
    where level = 'N5' and word_jp = '～人' and reading_furigana = 'じん'
  );

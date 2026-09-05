-- jp-go N5/N4 final human-language polish.
-- Run LAST among N5/N4 quality SQL files. Deterministic + idempotent.
-- Only rows with a concrete reviewed issue are changed; no broad stylistic rewriting.

-- ---------------------------------------------------------------------------
-- N5 grammar business examples: remove awkward noun-time constructions while
-- preserving the exact target grammar/cloze.
-- ---------------------------------------------------------------------------
update public.jp_grammar_examples
set example_jp='昨日使った会議室は静かでした。',
    example_vi='Phòng họp tôi dùng hôm qua rất yên tĩnh.',
    cloze_jp='昨日使った会議室は静か＿＿＿。',
    answer='でした',
    corrected_text='昨日使った会議室は静かでした。',
    review_status='ok',
    correction_note=concat_ws('; ', nullif(correction_note,''), 'Final polish: 「昨日の会議室」→「昨日使った会議室」 để quan hệ thời gian tự nhiên, vẫn luyện な形容詞 quá khứ.')
where id='f815c3fc-458f-4fc2-b824-964dab5d477e'::uuid;

update public.jp_grammar_examples
set example_jp='昨日は仕事が忙しかったです。',
    example_vi='Hôm qua công việc rất bận.',
    cloze_jp='昨日は仕事が忙し＿＿＿です。',
    answer='かった',
    corrected_text='昨日は仕事が忙しかったです。',
    review_status='ok',
    correction_note=concat_ws('; ', nullif(correction_note,''), 'Final polish: 「作業が忙しい」より自然な「仕事が忙しい」へ修正し、い形容詞過去の焦点を維持。')
where id='c43f9517-ab86-434a-b4da-de63c798d8cf'::uuid;

-- Translation precision: 取引先 is broader than “công ty khách hàng”.
update public.jp_grammar_examples
set example_vi='Buổi chiều tôi sẽ đến chỗ đối tác/khách hàng.',
    correction_note=concat_ws('; ', nullif(correction_note,''), 'Final polish: 取引先 を “đối tác/khách hàng” として訳し、意味を狭めすぎない。')
where id='a5cbdaa7-085e-44d6-909a-6b9b266d3d7a'::uuid
  and example_jp='午後、取引先へ行きます。';

update public.jp_grammar_examples
set example_vi='Tôi định bắt đầu dùng hệ thống mới từ tháng sau.',
    correction_note=concat_ws('; ', nullif(correction_note,''), 'Final polish: ～ようと思っています = ý định đang có; bỏ sắc thái “đã dự định” không cần thiết.')
where id='f42dd3e2-407f-4a42-9e0c-63382e4ca4cd'::uuid
  and example_jp='来月から新しいシステムを使おうと思っています。';

-- 呼ぶ normally takes the destination/event with に in this context.
update public.jp_grammar_examples
set example_jp='私は部長に会議に呼ばれました。',
    example_vi='Tôi được trưởng phòng gọi vào cuộc họp.',
    cloze_jp='私は部長に会議に＿＿＿。',
    answer='呼ばれました',
    corrected_text='私は部長に会議に呼ばれました。',
    review_status='ok',
    correction_note=concat_ws('; ', nullif(correction_note,''), 'Final polish: 「会議へ呼ばれる」→一般的で自然な「会議に呼ばれる」。')
where id='f1729948-20bd-4270-a042-4b106f86ff80'::uuid;

-- ---------------------------------------------------------------------------
-- N4 vocabulary examples inserted by the lesson quality files.
-- jp_vocab_examples intentionally has no review/correction metadata columns;
-- update only columns that actually exist in the production schema.
-- ---------------------------------------------------------------------------
-- 空を飛びます: keep the target phrase intact and make the workplace context natural.
update public.jp_vocab_examples
set example_jp='点検用のドローンが空を飛びます。',
    example_vi='Drone dùng để kiểm tra bay trên bầu trời.',
    cloze_jp='点検用のドローンが＿＿＿。',
    answer='空を飛びます',
    focus_note='空を飛ぶ＝bay trên bầu trời; 点検用のドローン là drone dùng cho kiểm tra.'
where vocab_id='4ee88e09-4d03-4f22-896c-737796d67fe2'::uuid
  and example_type='business';

-- 昔: natural company-history phrasing.
update public.jp_vocab_examples
set example_jp='この会社は、昔は小さな町工場でした。',
    example_vi='Công ty này trước đây từng là một xưởng nhỏ.',
    cloze_jp='この会社は、＿＿＿は小さな町工場でした。',
    answer='昔',
    focus_note='昔は～だった＝trước đây từng là ~; 町工場＝xưởng/nhà máy nhỏ địa phương.'
where vocab_id='0e118dcf-5dd1-4f80-a726-70d1cda9f31f'::uuid
  and example_type='business';

-- 出来る: 前 means “in front of”, not “before”.
update public.jp_vocab_examples
set example_vi='Nghe nói phía trước nhà ga sẽ có một thư viện mới.'
where vocab_id='8aaabfc0-957b-4df0-bd1a-113713f1384a'::uuid
  and example_type='exam';

-- 鳥: 対策する is less natural here than 対策をする at N4 level.
update public.jp_vocab_examples
set example_jp='鳥が設備の中に入らないように対策をします。',
    example_vi='Chúng tôi sẽ thực hiện biện pháp để chim không bay vào bên trong thiết bị.',
    cloze_jp='＿＿＿が設備の中に入らないように対策をします。',
    answer='鳥',
    focus_note='鳥が入らないように対策をする＝thực hiện biện pháp để chim không vào.'
where vocab_id='a91a149f-0628-42e7-8971-5164b63e8ab3'::uuid
  and example_type='business';

-- 花火: event is held near/along the river, not literally “in the river”.
update public.jp_vocab_examples e
set example_jp='夏になると、この川の近くで花火大会があります。',
    example_vi='Khi mùa hè đến, gần con sông này có lễ hội pháo hoa.',
    cloze_jp='夏になると、この川の近くで＿＿＿大会があります。',
    answer='花火',
    focus_note='花火大会がある／花火を見る。場所には「川の近くで」などを使う。'
where e.vocab_id='3df62dfc-7874-4b6d-a59a-2d4b1f5f5e3c'::uuid
  and e.example_type='exam';

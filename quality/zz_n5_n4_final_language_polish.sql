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
update public.jp_vocab_examples
set example_jp='夏になると、この川の近くで花火大会があります。',
    example_vi='Khi mùa hè đến, gần con sông này có lễ hội pháo hoa.',
    cloze_jp='夏になると、この川の近くで＿＿＿大会があります。',
    answer='花火',
    focus_note='花火大会がある／花火を見る。場所には「川の近くで」などを使う。'
where vocab_id='3df62dfc-7874-4b6d-a59a-2d4b1f5f5e3c'::uuid
  and example_type='exam';

-- 偉い: avoid the redundant 「偉い立場の人」.
update public.jp_vocab_examples
set example_jp='社長は会社で一番偉い人です。',
    example_vi='Giám đốc là người có vị trí cao nhất trong công ty.',
    cloze_jp='社長は会社で一番＿＿＿人です。',
    answer='偉い',
    focus_note='偉い＝có địa vị cao/đáng nể/giỏi tùy ngữ cảnh; không đồng nghĩa đơn thuần với chức danh.'
where vocab_id='675c3fdb-80ad-451e-bba9-0d506fcc5c48'::uuid
  and example_type='business';

-- 熱心: move the adverb to the natural position.
update public.jp_vocab_examples
set example_jp='新人は熱心に仕事を覚えています。',
    example_vi='Nhân viên mới đang rất chăm chỉ học việc.',
    cloze_jp='新人は＿＿＿に仕事を覚えています。',
    answer='熱心',
    focus_note='熱心に＋V／Nに熱心だ＝chăm chú, nhiệt tình.'
where vocab_id='f03f11d3-a45f-4c98-a90c-c0ff1e009f05'::uuid
  and example_type='business';

-- 予習: one normally previews content, not a physical document itself.
update public.jp_vocab_examples
set example_jp='研修の内容を前日に予習しておきます。',
    example_vi='Tôi sẽ xem trước nội dung đào tạo vào ngày hôm trước.',
    cloze_jp='研修の内容を前日に＿＿＿おきます。',
    answer='予習して',
    focus_note='授業／研修の内容を予習する＝xem/học trước nội dung.'
where vocab_id='9d542abd-6f03-45cb-94e0-7c8ff1237ac7'::uuid
  and example_type='business';

-- 人形: 「新しい人形の商品」 is awkward; make the product phrase natural.
update public.jp_vocab_examples
set example_jp='展示会で新商品の人形を紹介します。',
    example_vi='Tại triển lãm, chúng tôi sẽ giới thiệu mẫu búp bê mới.',
    cloze_jp='展示会で新商品の＿＿＿を紹介します。',
    answer='人形',
    focus_note='人形の商品 → 商品の人形／新商品の人形; 人形を展示・紹介する.'
where vocab_id='4e71e0bc-3840-4c4b-b1e1-e824926fc961'::uuid
  and example_type='business';

-- 展覧会: use it for an exhibition, not a normal new-product trade show.
update public.jp_vocab_examples
set example_jp='会社のロビーで写真の展覧会を開きます。',
    example_vi='Chúng tôi tổ chức triển lãm ảnh tại sảnh công ty.',
    cloze_jp='会社のロビーで写真の＿＿＿を開きます。',
    answer='展覧会',
    focus_note='展覧会＝triển lãm tác phẩm/nghệ thuật; triển lãm thương mại sản phẩm thường dùng 展示会.'
where vocab_id='496c4cfa-b7a3-4aad-a6b9-53ee0b735bbb'::uuid
  and example_type='business';

-- 咳をする: 「大きな咳」 is less natural than explicitly controlling coughing.
update public.jp_vocab_examples
set example_jp='図書館では、できるだけ咳をしないように気をつけました。',
    example_vi='Trong thư viện, tôi cố gắng hết sức để không ho.',
    cloze_jp='図書館では、できるだけ＿＿＿ように気をつけました。',
    answer='咳をしない',
    focus_note='咳をする＝ho; 咳が出る＝bị/có cơn ho.'
where vocab_id='bad4070c-4dd7-41f2-af3e-36723e9c37f2'::uuid
  and example_type='exam';

-- 白: “leave blank” is 空欄; keep 白 as the actual colour meaning.
update public.jp_vocab_examples
set example_jp='資料の背景は白のままにしてください。',
    example_vi='Hãy giữ nền của tài liệu màu trắng.',
    cloze_jp='資料の背景は＿＿＿のままにしてください。',
    answer='白',
    focus_note='白＝màu trắng; 「để trống ô」 thường là 空欄のままにする.'
where vocab_id='669f149e-919a-4bc3-9e03-3330a85329f0'::uuid
  and example_type='business';

-- 治る: 体調 itself does not normally “heal”; illness/injury does.
update public.jp_vocab_examples
set example_jp='風邪が治ってから出勤してください。',
    example_vi='Hãy đi làm lại sau khi khỏi cảm.',
    cloze_jp='風邪が＿＿＿から出勤してください。',
    answer='治って',
    focus_note='病気／けが／風邪が治る; 「体調が治る」より「体調が戻る／よくなる」が自然.'
where vocab_id='63b7b3f7-51a1-4294-828d-4b3e2912000d'::uuid
  and example_type='business';

-- 似てる: keep the colloquial target inside natural quoted speech, not mixed with a polite instruction.
update public.jp_vocab_examples
set example_jp='「この二つの部品、似てるね」と同僚が言いました。',
    example_vi='Đồng nghiệp nói: “Hai linh kiện này giống nhau nhỉ.”',
    cloze_jp='「この二つの部品、＿＿＿ね」と同僚が言いました。',
    answer='似てる',
    focus_note='似てる＝似ている khẩu ngữ; trong văn phong lịch sự dùng 似ています.'
where vocab_id='a3a743e6-425a-4ef7-84dd-92c26b347f58'::uuid
  and example_type='business';

-- 仕方: avoid the unnatural sequence 解き方が分からず、仕方を聞く.
update public.jp_vocab_examples
set example_jp='この機械の操作の仕方を先生に聞きました。',
    example_vi='Tôi hỏi thầy cách vận hành chiếc máy này.',
    cloze_jp='この機械の操作の＿＿＿を先生に聞きました。',
    answer='仕方',
    focus_note='Nの仕方／Vます形＋方＝cách làm; 仕方がない＝không còn cách nào.'
where vocab_id='b03a600a-fda7-48f5-af88-5342a38ab1b0'::uuid
  and example_type='exam';

-- 洋服: contrast ordinary clothes naturally with designated workwear.
update public.jp_vocab_examples
set example_jp='普段の洋服ではなく、指定の作業着を着てください。',
    example_vi='Đừng mặc quần áo thường; hãy mặc đồ làm việc được chỉ định.',
    cloze_jp='普段の＿＿＿ではなく、指定の作業着を着てください。',
    answer='洋服',
    focus_note='洋服＝quần áo kiểu Tây/quần áo thường trong đối lập với 和服; ở đây đối lập với 作業着 theo ngữ cảnh.'
where vocab_id='d1b68f15-2b76-43c7-921e-0a94aaf3e754'::uuid
  and example_type='business';

-- 大会: 「改善事例大会」 is not a stable general collocation; use a normal company sports event.
update public.jp_vocab_examples
set example_jp='会社のスポーツ大会で進行を担当します。',
    example_vi='Tôi phụ trách điều hành chương trình tại hội thao của công ty.',
    cloze_jp='会社のスポーツ＿＿＿で進行を担当します。',
    answer='大会',
    focus_note='大会＝giải/đại hội/cuộc thi quy mô; スポーツ大会 is a common workplace/community collocation.'
where vocab_id='bf24e8ca-96c7-4585-b6f5-c043b40027ee'::uuid
  and example_type='business';

-- ドライブ: make the company-car policy sentence grammatical and direct.
update public.jp_vocab_examples
set example_jp='社用車でドライブするなど、私用で使ってはいけません。',
    example_vi='Không được dùng xe công ty cho mục đích cá nhân như đi lái xe chơi.',
    cloze_jp='社用車で＿＿＿するなど、私用で使ってはいけません。',
    answer='ドライブ',
    focus_note='ドライブする／ドライブに行く; 社用車の私用を禁じる自然な業務文脈.'
where vocab_id='6100cf25-19df-4976-bc37-8f26cb8ea626'::uuid
  and example_type='business';

-- お供します: attach お供する to the person/trip naturally.
update public.jp_vocab_examples
set example_jp='社長の出張にお供します。',
    example_vi='Tôi sẽ tháp tùng giám đốc trong chuyến công tác.',
    cloze_jp='社長の出張に＿＿＿。',
    answer='お供します',
    focus_note='人の外出／出張にお供する＝tháp tùng; 「人をお供する」は不自然.'
where vocab_id='0ed68746-3a1a-47b6-8e0f-548076f32dde'::uuid
  and example_type='business';

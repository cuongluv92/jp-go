-- jp-go N5/N4 verb-class completion.
-- Reviewed manually for the ambiguous ～る verbs; do NOT replace with a generic
-- "i/e before る => ichidan" heuristic because verbs such as 帰る/走る/滑る are godan.
-- Idempotent: deterministic replacements only on N5/N4.

-- ---------------------------------------------------------------------------
-- A. Entries that are fixed expressions / already-conjugated expressions.
-- They should not be fed into the conjugation engine as dictionary verbs.
-- ---------------------------------------------------------------------------
update public.jp_vocab
set entry_type='phrase', word_class='表現', verb_class=null,
    correction_note='Dạng biểu hiện/câu cố định; không đưa vào bảng chia động từ như từ điển.'
where id in (
  'e57f2b3f-6dc1-4ea6-a86a-846c4bc967e4'::uuid, -- 住んでいる
  '6d1c1220-5060-452d-8af8-a492bf6cbd1b'::uuid, -- 知っている
  'ca7b96c3-cd97-4384-85ee-32466db76910'::uuid, -- どうなさいますか
  '2c8e73a9-a574-4d01-a79a-0b74db87c026'::uuid, -- お待たせしました
  'a3a743e6-425a-4ef7-84dd-92c26b347f58'::uuid  -- 似てる (colloquial contraction)
);

-- ---------------------------------------------------------------------------
-- B. Normalize dictionary forms that otherwise break the conjugation engine.
-- ---------------------------------------------------------------------------
update public.jp_vocab set dictionary_form='ある'
where level='N5' and word_jp='有る' and reading_furigana='ある';

update public.jp_vocab set dictionary_form='見る'
where id='e595b358-15f0-452b-b942-d33e4bfe6a3e'::uuid; -- 見る・診る share the same conjugation

update public.jp_vocab set dictionary_form='測る'
where id='64631b45-1eb5-4608-8bbf-031fa4f42946'::uuid; -- 測る・量る share godan conjugation

update public.jp_vocab set dictionary_form='連れて来る'
where id='b0cd8181-9158-40b5-a660-dcc4af4105a3'::uuid; -- 連れてくる

update public.jp_vocab set dictionary_form='帰って来る'
where id='2a259359-7581-4f59-92d6-7d3cb37c917e'::uuid; -- 帰ってくる

-- ---------------------------------------------------------------------------
-- C. N5 irregular する / 来る families.
-- ---------------------------------------------------------------------------
update public.jp_vocab
set verb_class='suru'
where level='N5' and word_class='動詞' and dictionary_form like '%する';

update public.jp_vocab
set verb_class='kuru'
where level='N5' and word_class='動詞'
  and dictionary_form in ('来る','持って来る','連れて来る');

-- N5 reviewed 一段 verbs. Bracketed source entries use their cleaned dictionary_form.
update public.jp_vocab
set verb_class='ichidan'
where level='N5' and word_class='動詞' and dictionary_form in (
  '寝る','起きる','見る','食べる','かける','あげる','借りる','教える','居る','出る','迎える','開ける',
  'つける','止める','辞める','あびる','のりかえる','おりる','入れる','出かける','忘れる','覚える','できる',
  '捨てる','調べる','集める','気を付ける','負ける','足りる','きる','生まれる','変える','疲れる','いれる',
  'くれる','目が覚める','考える'
);

-- Every remaining N5 dictionary verb has been reviewed as 五段 (including 帰る/入る/要る etc.).
update public.jp_vocab
set verb_class='godan'
where level='N5' and word_class='動詞' and verb_class is null;

-- ---------------------------------------------------------------------------
-- D. N4 来る compound + manually reviewed 一段 list.
-- Existing non-～る N4 verbs and する verbs were already classified upstream.
-- ---------------------------------------------------------------------------
update public.jp_vocab
set verb_class='kuru'
where level='N4' and word_class='動詞' and dictionary_form='帰って来る';

update public.jp_vocab
set verb_class='ichidan'
where level='N4' and word_class='動詞' and dictionary_form in (
  '見る','遅れる','出来る','建てる','聞こえる','見える','売れる','割れる','取り替える','壊れる','外れる','折れる',
  '汚れる','消える','片付ける','破れる','間違える','まとめる','並べる','夢を見る','掛ける','植える','決める','覚める',
  '受ける','続ける','見つける','過ぎる','閉じる','出る','咳が出る','晴れる','伝える','投げる','諦める','逃げる',
  'つける','火にかける','煮る','組み立てる','載せる','付ける','慣れる','撥ねる','褒める','入れる','育てる',
  '倒れる','痩せる','答える','手に入れる','数える','確かめる','いじめる','上げる','下げる','助ける','広める',
  '混ぜる','とれる','切れる','増える','落ちる','別れる','濡れる','起きる','信じる','知らせる','バスが出る',
  '慌てる','焼ける','荷物が出る','燃える','届ける','勤める','存じる'
);

-- Every remaining unclassified N4 dictionary verb in this reviewed source set is 五段.
update public.jp_vocab
set verb_class='godan'
where level='N4' and word_class='動詞' and verb_class is null;

-- Final hard guard: after this quality step no N5/N4 dictionary verb may lack class.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM public.jp_vocab
    WHERE level in ('N5','N4') and word_class='動詞' and verb_class is null
  ) THEN
    RAISE EXCEPTION 'N5/N4 verb_class completion failed: unclassified dictionary verbs remain';
  END IF;
END $$;

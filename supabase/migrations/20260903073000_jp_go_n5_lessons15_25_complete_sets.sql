-- Hoàn thiện đủ ba ngữ cảnh cho toàn bộ N5 bài 15-25 (258 mục).
-- Hai câu bổ sung dùng nhiều khung hội thoại/đọc hiểu khác nhau và giữ nguyên câu đời thường đã biên soạn.

update public.jp_vocab set
 word_class=case
  when word_jp like '%する' or word_jp in ('お話をします') then '動名詞'
  when word_jp in (
   '座る','使う','[大阪に～]住む','売る','立つ','作る','置く','知る','辞める','知っている','住んでいる',
   '[大学に～]入る','[ボタンを～]押す','入れる','[電車に～]乗る','磨く','[電車を～]降りる','選ぶ',
   '[電車を～]乗り換える','[シャワーを～]浴びる','[大学を～]出る','[お金を～]出す',
   '忘れる','持って来る','入る','持って行く','脱ぐ','なくす','返す','覚える','[レポートを～]出す','出かける','払う',
   '取る','集める','できる','調べる','弾く','洗う','歌う','捨てる','[ホテルに～]泊まる','[山に～]登る','なる',
   '[ビザが～]要る','直す','思う','有る','負ける','勝つ','足りる','気を付ける','言う','役に立つ',
   '怒る','[シャツを～]着る','履く','[眼鏡を～]かける','生まれる','[帽子を～]被る',
   '変える','疲れる','[先生に～]聞く','触る','引く','渡る','歩く','動く','連れていく','連れてくる','くれる',
   '[コーヒーを～]いれる','考える','[駅に～]着く','目が覚める') then '動詞'
  when word_jp in ('危ない','強い','若い','弱い','広い','狭い','痛い','汚い','短い','長い','体にいい') then 'い形容詞'
  when word_jp in ('独身','頭がいい','不便','大丈夫','大変') then 'な形容詞'
  when word_jp in ('どの～','どうやって','まず','初めに','次に','自分で','～までに','ですから','なかなか','是非',
   '一度','そろそろ','もうすぐ','段々','一度も','初め','どっち','～けど','本当に','最近','そんなに','きっと',
   '多分','よく','うーん','まっすぐ','全部','もし［～たら］','いくら［～ても］') then '副詞'
  else '名詞' end,
 dictionary_form=case
  when word_jp like '[%' then reading_furigana
  when word_jp like '～%' then trim(leading '～' from word_jp)
  else word_jp end
where level='N5' and lesson_no between 15 and 25;

with base as (
 select v.id,v.lesson_no,v.word_jp,e.example_jp,e.example_vi,e.cloze_jp,e.answer,
  mod(abs(hashtext(v.lesson_no::text||':'||v.word_jp)),10) variant
 from public.jp_vocab v join public.jp_vocab_examples e on e.vocab_id=v.id and e.example_no=2
 where v.level='N5' and v.lesson_no between 15 and 25
), expanded as (
 select b.*,n.example_no,
  regexp_replace(b.example_jp,'。$','') jp,
  regexp_replace(b.cloze_jp,'。$','') cloze
 from base b cross join (values(1),(3)) n(example_no)
), curated as (
 select *,
  case when example_no=1 then
   case variant
    when 0 then '先生は「'||jp||'」という例を挙げました。'
    when 1 then '教科書には「'||jp||'」と書いてあります。'
    when 2 then '会話問題で「'||jp||'」と答えました。'
    when 3 then '授業で「'||jp||'」という文を練習しました。'
    when 4 then '問題文には「'||jp||'」とあります。'
    when 5 then '先生の質問に「'||jp||'」と答えました。'
    when 6 then '音声を聞くと「'||jp||'」と言っています。'
    when 7 then '作文に「'||jp||'」と書きました。'
    when 8 then '読解文には「'||jp||'」という一文があります。'
    else 'この場面では「'||jp||'」と言うのが自然です。' end
  else
   case variant
    when 0 then '担当者は「'||jp||'」と説明しました。'
    when 1 then '会議で「'||jp||'」と報告がありました。'
    when 2 then '社内メールには「'||jp||'」と書かれていました。'
    when 3 then '先輩から「'||jp||'」と連絡がありました。'
    when 4 then '打ち合わせで「'||jp||'」と確認しました。'
    when 5 then 'お客様に「'||jp||'」とお伝えしました。'
    when 6 then '朝礼で「'||jp||'」と指示がありました。'
    when 7 then '作業記録には「'||jp||'」とあります。'
    when 8 then '電話で「'||jp||'」と回答しました。'
    else '予定表には「'||jp||'」と記載されています。' end end as new_jp,
  case when example_no=1 then
   case variant
    when 0 then 'Giáo viên đưa ra ví dụ: “'||example_vi||'”'
    when 1 then 'Trong giáo trình viết: “'||example_vi||'”'
    when 2 then 'Trong bài hội thoại, tôi trả lời: “'||example_vi||'”'
    when 3 then 'Trong lớp chúng tôi luyện câu: “'||example_vi||'”'
    when 4 then 'Trong đề bài có câu: “'||example_vi||'”'
    when 5 then 'Tôi trả lời câu hỏi của giáo viên: “'||example_vi||'”'
    when 6 then 'Trong phần nghe có nói: “'||example_vi||'”'
    when 7 then 'Tôi viết trong bài văn: “'||example_vi||'”'
    when 8 then 'Trong bài đọc có câu: “'||example_vi||'”'
    else 'Trong tình huống này, cách nói tự nhiên là: “'||example_vi||'”' end
  else
   case variant
    when 0 then 'Người phụ trách giải thích: “'||example_vi||'”'
    when 1 then 'Trong cuộc họp có báo cáo: “'||example_vi||'”'
    when 2 then 'Email nội bộ viết: “'||example_vi||'”'
    when 3 then 'Tiền bối liên lạc: “'||example_vi||'”'
    when 4 then 'Trong buổi trao đổi, chúng tôi xác nhận: “'||example_vi||'”'
    when 5 then 'Tôi thông báo với khách hàng: “'||example_vi||'”'
    when 6 then 'Trong họp sáng có chỉ thị: “'||example_vi||'”'
    when 7 then 'Trong nhật ký công việc ghi: “'||example_vi||'”'
    when 8 then 'Tôi trả lời qua điện thoại: “'||example_vi||'”'
    else 'Trong lịch làm việc ghi: “'||example_vi||'”' end end as new_vi,
  case when example_no=1 then
   case variant
    when 0 then '先生は「'||cloze||'」という例を挙げました。'
    when 1 then '教科書には「'||cloze||'」と書いてあります。'
    when 2 then '会話問題で「'||cloze||'」と答えました。'
    when 3 then '授業で「'||cloze||'」という文を練習しました。'
    when 4 then '問題文には「'||cloze||'」とあります。'
    when 5 then '先生の質問に「'||cloze||'」と答えました。'
    when 6 then '音声を聞くと「'||cloze||'」と言っています。'
    when 7 then '作文に「'||cloze||'」と書きました。'
    when 8 then '読解文には「'||cloze||'」という一文があります。'
    else 'この場面では「'||cloze||'」と言うのが自然です。' end
  else
   case variant
    when 0 then '担当者は「'||cloze||'」と説明しました。'
    when 1 then '会議で「'||cloze||'」と報告がありました。'
    when 2 then '社内メールには「'||cloze||'」と書かれていました。'
    when 3 then '先輩から「'||cloze||'」と連絡がありました。'
    when 4 then '打ち合わせで「'||cloze||'」と確認しました。'
    when 5 then 'お客様に「'||cloze||'」とお伝えしました。'
    when 6 then '朝礼で「'||cloze||'」と指示がありました。'
    when 7 then '作業記録には「'||cloze||'」とあります。'
    when 8 then '電話で「'||cloze||'」と回答しました。'
    else '予定表には「'||cloze||'」と記載されています。' end end as new_cloze
 from expanded
)
insert into public.jp_vocab_examples
 (vocab_id,example_no,example_type,example_jp,example_vi,cloze_jp,answer,difficulty,focus_note,source_type)
select id,example_no,case example_no when 1 then 'exam' else 'business' end,new_jp,new_vi,new_cloze,answer,
 case example_no when 1 then 1 else 2 end,
 case example_no when 1 then 'Đọc hiểu/hội thoại JLPT trong ngữ cảnh hoàn chỉnh.' else 'Giao tiếp thực tế tại nơi làm việc.' end,'generated'
from curated
on conflict(vocab_id,example_no) do update set example_type=excluded.example_type,example_jp=excluded.example_jp,
 example_vi=excluded.example_vi,cloze_jp=excluded.cloze_jp,answer=excluded.answer,difficulty=excluded.difficulty,
 focus_note=excluded.focus_note,source_type=excluded.source_type;

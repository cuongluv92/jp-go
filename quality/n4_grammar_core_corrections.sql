-- jp-go N4 verified grammar corrections.
-- These are factual/usage corrections, not stylistic rewrites.

-- 1) ちゃう／じゃう: fix Vietnamese typo/meaning for the completion/decisive use.
update public.jp_grammar_usages
set meaning = 'Làm luôn / làm cho xong (khẩu ngữ, nhấn mạnh hoàn tất hoặc quyết định làm ngay)',
    notes = concat_ws('; ', nullif(notes,''), 'ちゃう／じゃう là dạng khẩu ngữ của てしまう; ngoài nghĩa tiếc nuối còn có nghĩa hoàn tất/làm luôn.')
where id = 'a1e05f4b-132f-46ac-a831-b9c417f0b81b'::uuid;

-- 2) ておく: not generic “do for a purpose”; it normally means doing something
-- in advance for a later need, or leaving the resulting state as it is.
update public.jp_grammar
set meaning_vi = 'Làm trước/chuẩn bị trước; làm rồi để sẵn cho việc sau',
    usage = 'Dùng khi làm một việc trước để chuẩn bị cho nhu cầu hoặc tình huống về sau; tùy ngữ cảnh còn có thể nhấn mạnh giữ nguyên trạng thái sau hành động.',
    common_mistake = 'Không dùng ておく chỉ để nói chung chung “làm vì mục đích gì đó”; phải có sắc thái chuẩn bị trước/để sẵn cho sau này.'
where id = 'b896afe8-bf96-4f27-ad18-3a62706f5d13'::uuid;

update public.jp_grammar_usages
set meaning = 'Làm sẵn để dùng/đáp ứng một mục đích về sau',
    usage = 'Hành động được thực hiện trước để kết quả sẵn sàng khi cần.',
    notes = concat_ws('; ', nullif(notes,''), 'Ví dụ điển hình: 会議の前に資料をコピーしておく。')
where id = 'b302e0c7-6ef4-4dc0-b745-34f82f619287'::uuid;

-- 3) とく is simply the colloquial contraction of ておく.
update public.jp_grammar
set meaning_vi = 'Dạng khẩu ngữ của Vておく: làm sẵn/để sẵn cho sau',
    connection = 'Vておく → Vとく；Vでおく → Vどく',
    usage = 'Dùng trong hội thoại thân mật với cùng ý chính như ておく: chuẩn bị/làm sẵn hoặc để nguyên trạng thái cho sau.',
    common_mistake = 'Không hiểu とく là một mẫu nghĩa hoàn toàn khác với ておく; đây là dạng rút gọn trong khẩu ngữ.'
where id = '437b4ce0-dfd7-4923-ae89-2324e31870fb'::uuid;

-- 4) ようになる／なくなる: broaden to the actual change-of-state meaning.
update public.jp_grammar
set grammar_pattern = 'Vるようになります／Vなくなります',
    meaning_vi = 'Trở nên có thể/bắt đầu làm V; hoặc không còn làm V nữa',
    connection = 'V(thể từ điển hoặc thể khả năng) + ようになります ／ Vない (bỏ い) + くなります',
    usage = 'Diễn tả sự thay đổi theo thời gian về khả năng hoặc thói quen: bắt đầu/có thể làm được một việc, hoặc không còn làm việc đó nữa.',
    common_mistake = 'Vなくなります thường có nghĩa “không còn làm V nữa”, không tự động đồng nghĩa với “không thể làm V”. Muốn nhấn mạnh mất khả năng có thể dùng V可能形＋なくなります.'
where id = '4d8074ac-af85-42aa-b35d-040346b64156'::uuid;

-- 5) 謙譲語: source heading conflicts with its own example at usage 7.
-- 召し上がる is respectful language (尊敬語) for the other person's eating/drinking;
-- いただく is the humble form used for one's own receiving/eating/drinking.
update public.jp_grammar_usages
set meaning = '食べます／飲みます／もらいます → いただきます',
    connection = '食べます／飲みます／もらいます → いただきます',
    notes = concat_ws('; ', nullif(notes,''), '修正: 召し上がります は尊敬語。謙譲側では いただきます。PDF内でも見出しと例文が矛盾しており、例文側の いただきます が正しい。')
where id = '437c1be8-58d4-4284-bde6-f906399de708'::uuid;

-- Make the parent summary match the usages actually stored under this grammar item.
update public.jp_grammar
set meaning_vi = 'Khiêm nhường ngữ: hạ hành động của mình/phía mình để thể hiện sự kính trọng với đối phương hoặc người có liên quan.',
    connection = '来ます→参ります／行きます・聞きます→伺います／見ます→拝見します／言います→申し上げます／食べます・飲みます・もらいます→いただきます／あげます→差し上げます／会います→お目にかかります など',
    common_mistake = 'Không dùng khiêm nhường ngữ cho hành động của khách/người cần tôn lên. Ví dụ, hành động của khách không dùng 伺う; phải dùng dạng tôn kính thích hợp.'
where id = 'c2fabbd1-3261-42bf-9aa1-3ebd8b14b34a'::uuid;

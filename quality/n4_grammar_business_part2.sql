-- jp-go N4 grammar business examples, units 66-129.
-- Honorific/keigo examples that are already authentic workplace language are
-- intentionally left unchanged; this file rewrites the remaining non-business rows.

with fixes(id, example_jp, example_vi, cloze_jp, answer) as (
values
('ef745c8f-afb0-460d-b71a-cf9a2801ebe6'::uuid,'ミスを減らすために、チェックリストを使っています。','Để giảm lỗi, tôi đang sử dụng danh sách kiểm tra.','ミスを減らす＿＿＿、チェックリストを使っています。','ために'),
('d6a70726-6c85-4969-b2e2-8eab8d1fcd5b'::uuid,'手順書に書いてあるとおりに、機械を操作してください。','Hãy vận hành máy đúng như hướng dẫn đã ghi trong tài liệu quy trình.','手順書に書いてある＿＿＿、機械を操作してください。','とおりに'),
('17353e8e-6cbc-4f7e-8208-a260376a1237'::uuid,'お願いがあるんですが、少し手伝っていただけませんか。','Tôi có việc muốn nhờ, anh/chị giúp tôi một chút được không ạ?','お願いがある＿＿＿が、少し手伝っていただけませんか。','んです'),
('77881c2a-5614-4ca3-98fb-fbda99b34d8a'::uuid,'どうして納期が遅れたんですか。部品が届かなかったんです。','Tại sao thời hạn giao hàng bị chậm? Vì linh kiện đã không đến kịp.','どうして納期が遅れた＿＿＿か。','んです'),
('eda985c5-9a68-4bbd-b385-e0937359200d'::uuid,'何を確認しているんですか。注文書を確認しているんです。','Anh/chị đang kiểm tra gì vậy? Tôi đang kiểm tra đơn đặt hàng.','何を確認している＿＿＿か。','んです'),
('74bebaec-c14e-4cf2-aa6d-dc370c5de131'::uuid,'機械が止まった場合は、すぐ上司に連絡してください。','Trong trường hợp máy dừng, hãy liên lạc ngay với cấp trên.','機械が止まった＿＿＿は、すぐ上司に連絡してください。','場合'),
('8b6267f8-6ec9-490c-a7f6-346cb23dbc4d'::uuid,'今から会議を始めるところです。','Bây giờ chúng tôi chuẩn bị bắt đầu cuộc họp.','今から会議を＿＿＿。','始めるところです'),
('5ffbe0f3-f54b-463e-a6b9-f6746a5aff07'::uuid,'今、会議で説明しているところです。','Bây giờ tôi đang giải thích trong cuộc họp.','今、会議で＿＿＿。','説明しているところです'),
('87f2ec25-4642-4c5d-bdc0-4c7134611c2a'::uuid,'今、報告書を送ったところです。','Tôi vừa mới gửi báo cáo xong.','今、報告書を＿＿＿。','送ったところです'),
('0df538fe-2635-40ca-a859-3b2f30700485'::uuid,'納品が一日遅れるかもしれません。','Việc giao hàng có thể sẽ chậm một ngày.','納品が一日＿＿＿。','遅れるかもしれません'),
('b61dc370-a408-4f34-8004-cd037803a752'::uuid,'毎日、退社前にメールを確認するようにしています。','Mỗi ngày tôi cố gắng kiểm tra email trước khi rời công ty.','毎日、退社前にメールを確認する＿＿＿。','ようにしています'),
('4c67efef-8110-4457-a808-e7132eb37a55'::uuid,'作業前に必ず電源を切るようにしてください。','Trước khi làm việc, hãy đảm bảo luôn tắt nguồn.','作業前に必ず電源を切る＿＿＿。','ようにしてください'),
('a528462e-5a04-4113-82cd-a5410a5924d1'::uuid,'明日の会議は長くなるでしょう。','Cuộc họp ngày mai có lẽ sẽ kéo dài.','明日の会議は＿＿＿。','長くなるでしょう'),
('a4f05076-6f71-4ee2-b99c-60b14206d387'::uuid,'このボタンに触るな。','Đừng chạm vào nút này. (mệnh lệnh/cảnh báo trực tiếp)','このボタンに＿＿＿。','触るな'),
('e7afd9f9-ab03-4749-a05a-657c6d9b75f7'::uuid,'新しいシステムを覚えるのは大変です。','Việc học cách dùng hệ thống mới khá vất vả.','新しいシステムを覚える＿＿＿大変です。','のは'),
('91fa792c-c3da-4cea-853d-80025f4ecdc4'::uuid,'メールに資料を添付するのを忘れました。','Tôi quên đính kèm tài liệu vào email.','メールに資料を添付する＿＿＿忘れました。','のを'),
('5a0e5e16-0d0e-48d4-9ca7-8bca9b2b0c21'::uuid,'明日の会議が中止になったのを知っていますか。','Bạn có biết cuộc họp ngày mai đã bị hủy không?','明日の会議が中止になった＿＿＿知っていますか。','のを'),
('e8acfc8c-7739-4528-a77c-5daf2471d655'::uuid,'私が担当しているのはこの案件です。','Dự án mà tôi đang phụ trách là dự án này.','私が担当している＿＿＿この案件です。','のは'),
('f8206d85-7f28-42d6-b135-ece03256109f'::uuid,'来月、有給を取るつもりです。','Tháng sau tôi dự định nghỉ phép có lương.','来月、有給を＿＿＿。','取るつもりです'),
('a2650ced-a4fd-49e4-ae11-301a31c87249'::uuid,'この機械は部品を切るのに使います。','Máy này được dùng để cắt linh kiện.','この機械は部品を切る＿＿＿使います。','のに'),
('ab4a391f-a240-47e3-9329-8e6209263388'::uuid,'この表は進捗を確認するのに便利です。','Bảng này tiện để kiểm tra tiến độ.','この表は進捗を確認する＿＿＿便利です。','のに'),
('c40506f0-51e9-47ca-8248-0e404459b6b6'::uuid,'この設備を修理するのに十万円かかります。','Sửa thiết bị này tốn 100.000 yên.','この設備を修理する＿＿＿十万円かかります。','のに'),
('93e177f5-a22b-4158-9eac-c494fa18651a'::uuid,'このソフトを使って、作業が早くできるようになりました。','Nhờ dùng phần mềm này, tôi đã có thể làm công việc nhanh hơn.','このソフトを使って、作業が早く＿＿＿。','できるようになりました'),
('3d57d30f-e230-4a31-8c71-86ffdbdf7607'::uuid,'「至急」は「すぐに」という意味です。','“至急” có nghĩa là “ngay/lập tức”.','「至急」は「すぐに」＿＿＿。','という意味です'),
('85de077c-913d-4cae-96fb-7850150b9455'::uuid,'出社したら、いつもメールを確認しています。','Khi đến công ty, tôi luôn kiểm tra email.','出社したら、いつも＿＿＿。','メールを確認しています'),
('35dc54b0-8a05-460e-9772-44df8228bd89'::uuid,'このエラーが出たら、どうすればいいですか。','Nếu lỗi này xuất hiện thì tôi nên làm thế nào?','このエラーが出たら、＿＿＿。','どうすればいいですか'),
('582492fc-190f-401e-a09b-120bb3cfb9fa'::uuid,'部長はまだ会議をしています。','Trưởng phòng vẫn đang họp.','部長はまだ＿＿＿。','会議をしています'),
('9490a361-98de-4a6e-811a-5809dd9953bd'::uuid,'報告書はまだ完成していません。','Báo cáo vẫn chưa hoàn thành.','報告書はまだ＿＿＿。','完成していません'),
('40e5e9b0-b458-4c06-9c04-1e2c37f25411'::uuid,'先輩が資料を確認してくれました。','Tiền bối đã kiểm tra tài liệu giúp tôi.','先輩が資料を確認して＿＿＿。','くれました'),
('e668da32-d264-404f-880a-bf47b83192ec'::uuid,'取引先から資料をいただきました。','Tôi đã nhận tài liệu từ khách hàng/đối tác.','取引先から資料を＿＿＿。','いただきました'),
('a3f495e5-2b92-4c1a-8b5d-013a2896a273'::uuid,'部長が参考資料をくださいました。','Trưởng phòng đã cho tôi tài liệu tham khảo.','部長が参考資料を＿＿＿。','くださいました'),
('f1729948-20bd-4270-a042-4b106f86ff80'::uuid,'私は部長に会議へ呼ばれました。','Tôi được trưởng phòng gọi vào cuộc họp.','私は部長に会議へ＿＿＿。','呼ばれました'),
('1ebc448a-5af6-4c84-9207-a17def17c229'::uuid,'同僚に資料をコピーしてあげました。','Tôi đã photocopy tài liệu giúp đồng nghiệp.','同僚に資料をコピーして＿＿＿。','あげました'),
('3fdf1f89-55c0-4c0b-9c76-31a2e319d8a8'::uuid,'先輩に報告書を確認していただきました。','Tôi đã nhờ tiền bối kiểm tra báo cáo giúp.','先輩に報告書を確認して＿＿＿。','いただきました'),
('fe5580f1-bacf-49f0-9353-a25543bd5392'::uuid,'お客様に資料を差し上げました。','Tôi đã gửi/tặng tài liệu cho khách hàng.','お客様に資料を＿＿＿。','差し上げました'),
('946f951b-f2c4-4064-99c8-8fbc9c63bb51'::uuid,'この作業には二時間はかかります。','Công việc này mất ít nhất hai giờ.','この作業には二時間＿＿＿かかります。','は'),
('117c4ae7-d399-41d3-9bae-fcf3f402348c'::uuid,'今日の会議には二十人も参加しました。','Có tới 20 người tham gia cuộc họp hôm nay.','今日の会議には二十人＿＿＿参加しました。','も'),
('3da97555-e5f9-49f6-96e0-534639f8910c'::uuid,'この書類はどこに出したらいいですか。','Tôi nên nộp giấy tờ này ở đâu?','この書類は＿＿＿。','どこに出したらいいですか'),
('ad66a6aa-3fed-4abd-84d6-47a96956ff42'::uuid,'機械から変な音がします。','Có tiếng động lạ phát ra từ máy.','機械から変な音＿＿＿。','がします')
)
update public.jp_grammar_examples e
set example_type='business',
    example_jp=f.example_jp,
    example_vi=f.example_vi,
    cloze_jp=f.cloze_jp,
    answer=f.answer,
    source_type='generated',
    review_status='ok',
    corrected_text=f.example_jp,
    correction_note=concat_ws('; ', nullif(e.correction_note,''), 'Chuẩn hóa ví dụ business N4 đã biên tập')
from fixes f
where e.id=f.id;

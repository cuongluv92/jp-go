-- N3 V5 explicit subpatterns only
insert into jp_grammar_usages
(id,grammar_id,usage_no,meaning,connection,usage,notes,source_page,source_type,review_status)
values
('81583951-97be-5e9a-b895-d4bb16bc34d2','ec34ef3f-d252-5363-966c-1cbf1e45de1b',1,'Cứ để nguyên; vẫn giữ trạng thái như vậy','Vた・Vない / Aい・Aな / Nの + まま（で・だ）',NULL,'1','46','generated','ok'),
('809ee9fa-25ec-5bc9-918e-80fcae0a5828','ec34ef3f-d252-5363-966c-1cbf1e45de1b',2,'Làm theo đúng như...','Vる + まま（に）～する',NULL,'2','46','generated','ok'),
('92517504-0e5b-50bc-88db-971884084c95','924a069e-e541-5cc2-b6a1-9c742780b8d7',1,'Nghe nói...','～によると／～によれば + 普通形 + そうだ',NULL,'伝聞','47','generated','ok'),
('e433c8c4-84ce-52f5-94b3-f6b060cf2581','924a069e-e541-5cc2-b6a1-9c742780b8d7',2,'Trông có vẻ...','いA語幹 / なA語幹 + そうだ・そうなN・そうにV',NULL,'様態-A','47','generated','ok'),
('ef9ffc4e-6402-5a95-bb85-4c99a67a3dc5','924a069e-e541-5cc2-b6a1-9c742780b8d7',3,'Trông sắp/có vẻ sẽ...','Vます語幹 + そうだ / そうに(も)ない',NULL,'様態-V','47','generated','ok'),
('355340bc-5dac-5a7c-b17b-d1a9ef3b8eb3','7100d4f9-e359-5551-85b1-211aa02e4959',1,'Có vẻ như; hình như','V・いA普通形 + みたいだ / N・なA + みたいだ',NULL,'みたいだ','47','generated','ok'),
('e2909b1b-85bd-5c59-9717-d37848a8e73c','c46851f8-3cd8-5746-8b1e-9d278c2e4759',1,'Chẳng hạn như...','N + のように / のような + N',NULL,'1','47','generated','ok'),
('1c0b9099-7949-5ca3-b928-49d94f443551','c46851f8-3cd8-5746-8b1e-9d278c2e4759',2,'Chẳng hạn như...','N + みたい',NULL,'2','47','generated','ok'),
('3decfcd0-11f7-5e66-8bb6-c0bca6b0fc11','e61f49af-a7a9-586a-a177-abd50501fd2b',1,'Giống như; cứ như thể là...','Nのようだ / Vる・Vたように / VているようなN',NULL,'1','47','generated','ok'),
('2d63434b-0a85-5a71-aabb-2bfad6cf104d','e61f49af-a7a9-586a-a177-abd50501fd2b',2,'Giống như; cứ như thể là...','Nみたいだ / Vる・Vたみたいに / VているみたいなN',NULL,'2','47','generated','ok'),
('f51190b6-5b1d-5587-886d-b4213880607a','d057c2dd-f43d-5c0b-985d-81848c842549',1,'...cũng không sao','Vて / いAくて / Nで / なAで + もいい・もかまわない',NULL,'肯定接続','48','generated','ok'),
('45f67cc5-3b8d-5131-a5fc-2514c0dca49b','d057c2dd-f43d-5c0b-985d-81848c842549',2,'Không... cũng không sao','Vなくて / いAくなくて / N・なAでなくて + もいい・もかまわない',NULL,'否定','48','generated','ok'),
('ee2c1075-7fbc-5f6f-b5d5-c07e48b78dc4','63e675b5-0c77-5af4-9abe-17cd9b2865ca',1,'Cứ mỗi...; theo đơn vị...','N + ごとに',NULL,'1','49','generated','ok'),
('75a5d4b2-4013-5c38-818d-9769cebe23b8','63e675b5-0c77-5af4-9abe-17cd9b2865ca',2,'Cứ mỗi lần... lại...','Vる + ごとに',NULL,'2','49','generated','ok'),
('4e145e10-efe4-505c-9c33-b08b344448a2','0fac0d5b-5509-5eea-8bf8-f182522e734d',1,'Chọn/quyết định...','N + にする / V辞書形・Vない形 + ことにする',NULL,'core','52','generated','ok'),
('e0366807-f08d-5037-8261-19239ab71941','0fac0d5b-5509-5eea-8bf8-f182522e734d',2,'Cố gắng duy trì V như một thói quen','V辞書形 + ようにしている',NULL,'related','52','generated','ok'),
('bc78eb1f-ae61-5c4b-8f6c-7f971a93d19f','ff7ddcec-9865-5fac-b351-fae62eaf2cf7',1,'Làm V rồi đi/đi ra xa điểm nhìn.','Vて + いく',NULL,'移動','52','generated','ok'),
('6348d616-6f20-53f3-b644-aec52753ee5e','ff7ddcec-9865-5fac-b351-fae62eaf2cf7',2,'Sự thay đổi/hành động tiếp tục từ hiện tại về sau.','Vて + いく',NULL,'時間的推移','52','generated','ok'),
('625ec4be-d1c8-5d1a-ad11-a49d35ab5852','d738cb5a-62ec-5fa1-93d1-5ba223b4a80e',1,'Làm V rồi đến/đi về phía điểm nhìn.','Vて + くる',NULL,'移動','52','generated','ok'),
('fcfc60f3-11ca-554d-ad4e-5497c6153b9a','d738cb5a-62ec-5fa1-93d1-5ba223b4a80e',2,'Sự thay đổi/hành động đã phát triển hoặc tiếp diễn từ quá khứ đến hiện tại.','Vて + くる',NULL,'時間的推移','52','generated','ok'),
('0ba6504c-d4e9-5ce8-80ad-621410d69972','59d2d3b6-274e-5b0a-8b8d-99700145a771',1,'Khó/không thể làm; thường dùng trong lời từ chối mềm.','Vます語幹 + かねる',NULL,'かねる','57','generated','ok'),
('c21eb150-3186-542f-924d-8962b6e012f0','59d2d3b6-274e-5b0a-8b8d-99700145a771',2,'Có thể/nguy cơ dẫn đến kết quả xấu.','Vます語幹 + かねない',NULL,'かねない','57','generated','ok')
on conflict (id) do update set grammar_id=excluded.grammar_id, usage_no=excluded.usage_no,
meaning=excluded.meaning, connection=excluded.connection, usage=excluded.usage, notes=excluded.notes,
source_page=excluded.source_page, source_type=excluded.source_type, review_status=excluded.review_status;

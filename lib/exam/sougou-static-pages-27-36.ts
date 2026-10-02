import { ex, type StaticSougouPageSeed } from "./sougou-static-common";

export const STATIC_SOUGOU_PAGES_27_36: Record<number, StaticSougouPageSeed> = {
  27: { sectionCode: "ch2-1", content_blocks: [
    ex({type:"exercise",number:17,
      question_jp:"建設現場において、安全のための特別教育を修了した者が就業できる業務として、「労働安全衛生法」上、誤っているものはどれか。\nただし、道路上を走行する運転を除くものとする。",
      question_vi:"Theo Luật An toàn và vệ sinh lao động, công việc nào sau đây là sai khi nói người đã hoàn thành khóa giáo dục đặc biệt về an toàn có thể đảm nhiệm? Không xét việc lái xe trên đường.",
      choices_jp:["アーク溶接機を用いて行う金属の溶接","研削といしの取替え又は取替え時の試運転","作業床の高さが15mの高所作業車の運転","つり上げ荷重が0.5tの移動式クレーンの運転"],
      choices_vi:["Hàn kim loại bằng máy hàn hồ quang.","Thay đá mài hoặc chạy thử sau khi thay.","Vận hành xe làm việc trên cao có sàn làm việc cao 15 m.","Vận hành cần cẩu di động có tải nâng 0,5 t."],
      figure_placeholder_jp:null,
      solution_jp:"3. 作業床の高さが15m以上の高所作業車の運転の業務には、免許を受けた者又は技能講習を受けた者でなければ業務を行ってはならない。特別教育の修了者は就業することができない。\n【正解】3",
      solution_vi:"Với xe làm việc trên cao có chiều cao sàn từ 10 m trở lên, chỉ người có đủ điều kiện theo quy định như đã qua khóa kỹ năng tương ứng mới được vận hành. Chỉ hoàn thành 特別教育 là chưa đủ cho trường hợp 15 m.\n【Đáp án】3",
      reference_jp:"施工マニュアル p.228, 230",
      explanation_vi:"Điểm bẫy là phân biệt 特別教育 với 技能講習/資格. Mốc chiều cao làm thay đổi yêu cầu về tư cách người vận hành; 15 m vượt phạm vi chỉ cần giáo dục đặc biệt."
    })
  ]},
  28: { sectionCode:"ch2-2", content_blocks:[
    ex({type:"exercise",number:18,
      question_jp:"建設業の許可に関する記述として、「建設業法」上、誤っているものはどれか。",
      question_vi:"Theo Luật Xây dựng, phát biểu nào về giấy phép kinh doanh xây dựng là sai?",
      choices_jp:["建設業を営もうとする者は、政令で定める軽微な建設工事のみを請け負う者を除き、建設業法に基づく許可を受けなければならない。","建設業の許可は、発注者から直接請け負う一件の請負代金の額により、特定建設業と一般建設業に分けられる。","建設業の許可は、建設工事の種類に対応する建設業ごとに受けなければならない。","都道府県知事の許可を受けた建設業者であっても、他の都道府県において営業することができる。"],
      choices_vi:["Trừ trường hợp chỉ nhận các công trình nhỏ theo quy định, người kinh doanh xây dựng phải có giấy phép.","Việc phân loại giấy phép đặc định và thông thường dựa vào giá trị một hợp đồng nhận trực tiếp từ chủ đầu tư.","Phải xin giấy phép theo từng loại ngành xây dựng tương ứng với loại công trình.","Nhà thầu có giấy phép của tỉnh vẫn có thể thi công ở tỉnh khác."],
      figure_placeholder_jp:null,
      solution_jp:"2. 建設業法第3条第1項第一号、二号により、特定建設業と一般建設業の区分は、元請で行う場合の下請代金の額で定められており、請負金額ではない。\n【正解】2",
      solution_vi:"Sự phân biệt giữa 特定建設業 và 一般建設業 không dựa vào tổng giá trị hợp đồng mà nhà thầu chính nhận từ chủ đầu tư. Tiêu chí liên quan đến tổng giá trị phần việc giao cho nhà thầu phụ khi nhà thầu trực tiếp nhận công trình từ chủ đầu tư.\n【Đáp án】2",
      reference_jp:"施工マニュアル p.163, 164",
      explanation_vi:"Nhớ từ khóa: 特定/一般 → nhìn vào 下請代金, không nhìn vào 請負代金 của hợp đồng chính."
    }),
    ex({type:"exercise",number:19,
      question_jp:"建設業の許可に関する記述として、「建設業法」上、誤っているものはどれか。\nただし、軽微な建設工事のみを請け負うことを営業とするものを除く。",
      question_vi:"Theo Luật Xây dựng, phát biểu nào về giấy phép kinh doanh xây dựng là sai? Không xét trường hợp chỉ nhận công trình nhỏ.",
      choices_jp:["「国土交通大臣の許可」と「都道府県知事の許可」では、受注可能な請負金額による差はない。","二以上の都道府県の区域内に営業所を設ける場合は、「国土交通大臣の許可」が必要である。","「国土交通大臣の許可」と「都道府県知事の許可」では、施工にあたって下請契約を締結できる代金の額に差はない。","「都道府県知事の許可」では、建設工事を施工し得る区域に制限がある。"],
      choices_vi:["Giấy phép của Bộ trưởng và của tỉnh không khác nhau về giá trị hợp đồng có thể nhận.","Nếu đặt văn phòng kinh doanh ở từ hai tỉnh trở lên thì cần giấy phép của Bộ trưởng.","Hai loại giấy phép không khác nhau về mức tiền được phép ký hợp đồng thầu phụ khi thi công.","Giấy phép của tỉnh bị giới hạn khu vực được phép thi công công trình."],
      figure_placeholder_jp:null,
      solution_jp:"4. 知事許可・大臣許可の区分は許可を受ける営業所の所在地で決まるため、請負代金、下請代金、工事を施工する区域には関係しない。「工事を施工し得る区域には制限がある」は間違っている。\n【正解】4",
      solution_vi:"Phân biệt giấy phép do tỉnh hay Bộ trưởng dựa vào phạm vi bố trí văn phòng kinh doanh, không phải phạm vi địa lý được phép thi công. Vì vậy nói giấy phép tỉnh chỉ được thi công trong một khu vực nhất định là sai.\n【Đáp án】4",
      reference_jp:"施工マニュアル p.162～163",
      explanation_vi:"Đừng nhầm 'nơi đặt 営業所' với 'nơi thi công'. Giấy phép tỉnh không có nghĩa chỉ được thi công trong tỉnh đó."
    })
  ]},
  29:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:20,question_jp:"「監理技術者」及び「主任技術者」に関する記述として、「建設業法」上、正しいものはどれか。",question_vi:"Theo Luật Xây dựng, phát biểu nào đúng về 監理技術者 và 主任技術者?",
      choices_jp:["発注者が置く技術者が「監理技術者」であり、請負人である建設業者が置く技術者が「主任技術者」である。","発注者から直接工事を請け負った建設業者が、その建設工事の請負代金の額が一定金額以上になる場合に置く技術者が「監理技術者」であり、それ以外の場合に置く技術者が「主任技術者」である。","発注者から直接工事を請け負った建設業者が、その建設工事を施工するために締結した下請契約の請負代金の総額が一定金額以上になる場合に置く技術者が「監理技術者」であり、それ以外の場合に置く技術者が「主任技術者」である。","発注者が国、地方公共団体、公団等である工作物に関する建設工事を請け負った建設業者が置く技術者が「監理技術者」であり、それ以外の建設工事を請け負った建設業者が置く技術者が「主任技術者」である。"],
      choices_vi:["Kỹ thuật viên do chủ đầu tư bố trí là 監理技術者, còn nhà thầu bố trí là 主任技術者.","Nếu giá trị hợp đồng chính vượt một mức nhất định thì bố trí 監理技術者, còn lại là 主任技術者.","Nhà thầu nhận trực tiếp từ chủ đầu tư, nếu tổng giá trị hợp đồng thầu phụ đạt ngưỡng quy định thì bố trí 監理技術者; trường hợp khác bố trí 主任技術者.","Công trình công cộng thì bố trí 監理技術者, công trình khác bố trí 主任技術者."],
      figure_placeholder_jp:null,
      solution_jp:"建設業法第26条による。監理技術者を置く基準は、元請負人が施工のために締結した下請契約の請負代金の総額による。請負代金そのものや発注者が公共か民間かで決まるものではない。\n【正解】3",
      solution_vi:"Tiêu chí chính là tổng giá trị các hợp đồng giao thầu phụ của nhà thầu nhận trực tiếp từ chủ đầu tư. Không phải cứ hợp đồng chính lớn là thành 監理技術者, và cũng không phụ thuộc công trình công cộng hay tư nhân.\n【Đáp án】3",
      reference_jp:"施工マニュアル p.177",explanation_vi:"Học theo cặp: 元請 + 下請総額 đạt ngưỡng → 監理技術者. Các trường hợp còn lại theo điều kiện luật định dùng 主任技術者."
    }),
    ex({type:"exercise",number:21,question_jp:"次の記述のうち、「建設業法」上、誤っているものはどれか。",question_vi:"Theo Luật Xây dựng, phát biểu nào sau đây là sai?",
      choices_jp:["元請負人から電気工事を2,000万円で請け負った電気工事業者が、その現場に所定の実務経験を有する者を主任技術者として配置した。","一般建設業の電気工事業者が、営業所ごとに所定の実務経験を有する専任の技術者を配置した。","電気工事業者が、2級電気工事施工管理技士の資格者を工事現場に監理技術者として配置した。","発注者から直接電気工事を請け負った特定建設業者が、その工事の一部を5,000万円で下請業者に請け負わせ、監理技術者を配置した。"],
      choices_vi:["Nhà thầu điện nhận 20 triệu yên từ nhà thầu chính và bố trí người có kinh nghiệm theo quy định làm 主任技術者.","Nhà thầu điện loại thông thường bố trí kỹ thuật viên chuyên trách đủ kinh nghiệm tại từng văn phòng.","Bố trí người có chứng chỉ 2級電気工事施工管理技士 làm 監理技術者 tại công trường.","Nhà thầu đặc định nhận trực tiếp từ chủ đầu tư, giao 50 triệu yên thầu phụ và bố trí 監理技術者."],
      figure_placeholder_jp:null,
      solution_jp:"3. 監理技術者の資格としては、1級電気工事施工管理技士等が必要である。2級電気工事施工管理技士は主任技術者にはなれるが、監理技術者にはなれない。\n【正解】3",
      solution_vi:"Người có chứng chỉ cấp 2 có thể đáp ứng điều kiện làm 主任技術者, nhưng không đủ điều kiện để làm 監理技術者 trong trường hợp này. Vì vậy phương án 3 sai.\n【Đáp án】3",
      reference_jp:"施工マニュアル p.177",explanation_vi:"Đây là câu kiểm tra cấp chứng chỉ: 2級 không được nâng thẳng thành 監理技術者. Cần phân biệt rõ hai vai trò."
    })
  ]},
  30:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:22,question_jp:"電気工作物として、「電気事業法」上、定められていないものはどれか。",question_vi:"Theo Luật Điện lực, đối tượng nào không được quy định là 電気工作物?",
      choices_jp:["建築物に設置する高圧受電設備","火力発電のために設置するボイラ","水力発電のための貯水池及び水路","電気鉄道の車両に設置する電気設備"],
      choices_vi:["Thiết bị nhận điện cao áp trong công trình.","Nồi hơi dùng cho phát điện nhiệt điện.","Hồ chứa và đường nước dùng cho thủy điện.","Thiết bị điện lắp trên phương tiện đường sắt điện."],
      figure_placeholder_jp:null,
      solution_jp:"4. 電気鉄道の車両に設置される電気設備は電気工作物から除かれている。\n【正解】4",
      solution_vi:"Thiết bị điện lắp trên chính phương tiện đường sắt điện được loại khỏi phạm vi 電気工作物 trong quy định này. Ba đối tượng còn lại thuộc hệ thống phát/nhận điện được điều chỉnh.\n【Đáp án】4",
      reference_jp:"電気テキスト p.181",explanation_vi:"Mẹo nhớ: đường sắt điện có phần cấp điện thuộc hệ thống điện, nhưng thiết bị điện 'trên xe' là ngoại lệ của câu này."
    }),
    ex({type:"exercise",number:23,question_jp:"保安規程に関する記述として、「電気事業法」上、定められていないものはどれか。",question_vi:"Theo Luật Điện lực, phát biểu nào về quy trình an toàn 保安規程 không được quy định?",
      choices_jp:["保安規程は、事業用電気工作物の保安を監督する主任技術者が定める。","保安規程には、事業用電気工作物の運転又は操作に関することを定める。","保安規程は、保安を一体的に確保することが必要な事業用電気工作物の組織ごとに定める。","事業用電気工作物を設置する者及びその従業者は、保安規程を守らなければならない。"],
      choices_vi:["主任技術者 là người lập 保安規程.","Quy trình phải quy định nội dung vận hành/thao tác thiết bị điện dùng cho kinh doanh.","Quy trình được lập theo đơn vị tổ chức cần bảo đảm an toàn thống nhất.","Người lắp đặt và nhân viên phải tuân thủ 保安規程."],
      figure_placeholder_jp:null,
      solution_jp:"1. 電気事業法第42条により、保安規程を定めるのは事業用電気工作物を設置する者であり、主任技術者ではない。\n【正解】1",
      solution_vi:"Chủ thể lập và nộp 保安規程 là người/đơn vị lắp đặt, sở hữu cơ sở điện dùng cho kinh doanh; 主任技術者 thực hiện vai trò giám sát an toàn chứ không phải chủ thể được luật quy định là người lập quy trình.\n【Đáp án】1",
      reference_jp:"電気テキスト p.185",explanation_vi:"Phân biệt vai trò: 設置者 = chịu trách nhiệm lập/nộp quy trình; 主任技術者 = giám sát việc bảo đảm an toàn kỹ thuật."
    })
  ]},
  31:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:24,question_jp:"電気用品の定義に関する次の記述のうち、［ア］［イ］に当てはまる語句の組合せとして、「電気用品安全法」上、定められているものはどれか。",question_vi:"Theo Luật An toàn sản phẩm điện, tổ hợp nào điền đúng vào [ア] và [イ] trong định nghĩa 電気用品?",
      choices_jp:["ア：自家用電気工作物　イ：太陽光発電装置","ア：自家用電気工作物　イ：蓄電池","ア：一般用電気工作物等　イ：太陽光発電装置","ア：一般用電気工作物等　イ：蓄電池"],
      choices_vi:["[ア] Thiết bị điện tự dùng / [イ] Thiết bị điện mặt trời.","[ア] Thiết bị điện tự dùng / [イ] Ắc quy.","[ア] Thiết bị điện dùng chung... / [イ] Thiết bị điện mặt trời.","[ア] Thiết bị điện dùng chung... / [イ] Ắc quy."],
      figure_placeholder_jp:null,
      solution_jp:"電気用品安全法第2条第1項より、アは「一般用電気工作物等」、イは「蓄電池」である。\n【正解】4",
      solution_vi:"Theo định nghĩa của luật, [ア] là 一般用電気工作物等 và [イ] là 蓄電池. Vì vậy tổ hợp đúng là phương án 4.\n【Đáp án】4",
      reference_jp:"電気テキスト p.191",explanation_vi:"Đây là câu nhớ nguyên văn định nghĩa. Hai từ khóa phải ghép đúng: 一般用電気工作物等 + 蓄電池."
    }),
    ex({type:"exercise",number:25,question_jp:"一般用電気工作物等において、電気工事士でなければ従事してはならない作業又は工事として、「電気工事士法」上、正しいものはどれか。",question_vi:"Theo Luật Thợ điện, công việc nào trong hệ thống điện thông thường bắt buộc phải do thợ điện có giấy phép thực hiện?",
      choices_jp:["埋込型点滅器を取り換える作業","露出型コンセントを取り換える作業","電力量計を取り付ける工事","地中電線用の管を設置する工事"],
      choices_vi:["Thay công tắc âm tường.","Thay ổ cắm nổi.","Lắp công tơ điện.","Lắp ống dùng cho cáp điện ngầm."],
      figure_placeholder_jp:null,
      solution_jp:"1. 露出型コンセント、電力量計、地中電線用の管の取付け作業等の軽微な工事は、電気工事士の従事が必要とされないが、埋込型点滅器を取り換える作業は電気工事士の従事が必要である。\n【正解】1",
      solution_vi:"Các công việc nhẹ như thay ổ cắm nổi, lắp công tơ hoặc lắp ống bảo vệ cáp ngầm thuộc nhóm ngoại lệ không nhất thiết cần thợ điện có giấy phép. Thay công tắc âm tường không thuộc ngoại lệ đó.\n【Đáp án】1",
      reference_jp:"電気テキスト p.195",explanation_vi:"Cần phân biệt thiết bị '露出型' và '埋込型'. Công tắc âm tường liên quan trực tiếp đến phần đi dây cố định nên yêu cầu tư cách điện công."
    })
  ]},
  32:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:26,question_jp:"電気工事士等に関する記述として、「電気工事士法」上、誤っているものはどれか。",question_vi:"Theo Luật Thợ điện, phát biểu nào về giấy phép/chứng nhận thợ điện là sai?",
      choices_jp:["電気工事士免状の種類には、第一種電気工事士免状及び第二種電気工事士免状がある。","電気工事士免状は、経済産業大臣が交付する。","経済産業大臣は、認定電気工事従事者認定証の返納を命ずることができる。","特種電気工事資格者認定証は、経済産業大臣が交付する。"],
      choices_vi:["Giấy phép thợ điện có loại 1 và loại 2.","Giấy phép thợ điện do Bộ trưởng Kinh tế, Thương mại và Công nghiệp cấp.","Bộ trưởng có thể yêu cầu trả lại chứng nhận người làm điện được công nhận.","Chứng nhận người có tư cách thực hiện công tác điện đặc biệt do Bộ trưởng cấp."],
      figure_placeholder_jp:null,
      solution_jp:"2. 法第4条第2項に、「電気工事士免状は、都道府県知事が交付する。」と規定されている。\n【正解】2",
      solution_vi:"Giấy phép 電気工事士免状 do 都道府県知事 (thống đốc tỉnh/thành) cấp, không phải Bộ trưởng Kinh tế, Thương mại và Công nghiệp.\n【Đáp án】2",
      reference_jp:"電気テキスト p.196, 197",explanation_vi:"Câu này dễ nhầm vì một số chứng nhận khác do Bộ trưởng cấp. Riêng 電気工事士免状 là 都道府県知事."
    }),
    ex({type:"exercise",number:27,question_jp:"登録電気工事業者が、一般用電気工作物等に係る電気工事の業務を行う営業所ごとに置く、主任電気工事士になれる者として、「電気工事業の業務の適正化に関する法律」上、定められているものはどれか。",question_vi:"Theo luật về quản lý hoạt động kinh doanh điện công, ai có thể làm 主任電気工事士 tại mỗi văn phòng thực hiện công việc điện cho hệ thống thông thường?",
      choices_jp:["第一種電気工事士","認定電気工事従事者","第三種電気主任技術者","監理技術者"],
      choices_vi:["Thợ điện loại 1.","Người làm điện được công nhận.","Kỹ sư trưởng điện loại 3.","Kỹ thuật viên giám lý."],
      figure_placeholder_jp:null,
      solution_jp:"法第19条第1項により、第一種電気工事士又は所定の実務経験を有する第二種電気工事士等を主任電気工事士として置かなければならない。選択肢では第一種電気工事士が該当する。\n【正解】1",
      solution_vi:"Luật quy định Chủ nhiệm điện công có thể là thợ điện loại 1, hoặc một số trường hợp thợ điện loại 2 có đủ kinh nghiệm theo quy định. Trong các lựa chọn, phương án phù hợp là 第一種電気工事士.\n【Đáp án】1",
      reference_jp:"電気テキスト p.199",explanation_vi:"Đừng nhầm 主任電気工事士 với 電気主任技術者. Tên gần giống nhưng là hai hệ thống tư cách khác nhau."
    })
  ]},
  33:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:28,question_jp:"建築物等に関する記述として、「建築基準法」上、誤っているものはどれか。",question_vi:"Theo Luật Tiêu chuẩn xây dựng, phát biểu nào về công trình là sai?",
      choices_jp:["体育館は、特殊建築物である。","屋根は、主要構造部である。","防火戸は、建築設備である。","ロックウールは、不燃材料である。"],
      choices_vi:["Nhà thi đấu là công trình đặc biệt.","Mái là bộ phận kết cấu chính.","Cửa chống cháy là thiết bị của công trình.","Rock wool là vật liệu không cháy."],
      figure_placeholder_jp:null,
      solution_jp:"3. 建築設備とは、建築物に設ける電気、ガス、給水、排水、換気、暖房、冷房、消火、排煙若しくは汚物処理の設備又は煙突、昇降機若しくは避雷針をいう。防火戸は建築設備として定められていない。\n【正解】3",
      solution_vi:"Định nghĩa 建築設備 liệt kê các hệ thống điện, gas, cấp thoát nước, thông gió, sưởi/làm mát, chữa cháy, hút khói, xử lý chất thải, ống khói, thang máy, chống sét... Cửa chống cháy không nằm trong định nghĩa đó.\n【Đáp án】3",
      reference_jp:"施工マニュアル 1, 2, 3→p.321　4→p.322",explanation_vi:"Cửa chống cháy là bộ phận ngăn cháy của công trình nhưng không vì thế mà được xếp vào '建築設備' theo định nghĩa pháp lý."
    }),
    ex({type:"exercise",number:29,question_jp:"建築物に関する記述として、「建築基準法」上、誤っているものはどれか。",question_vi:"Theo Luật Tiêu chuẩn xây dựng, phát biểu nào sau đây là sai?",
      choices_jp:["共同住宅は、特殊建築物である。","展示場は、特殊建築物である。","煙突は、建築設備である。","蓄光式の誘導標識は、建築設備である。"],
      choices_vi:["Nhà ở tập thể là công trình đặc biệt.","Nhà triển lãm là công trình đặc biệt.","Ống khói là thiết bị công trình.","Biển chỉ dẫn dạ quang là thiết bị công trình."],
      figure_placeholder_jp:null,
      solution_jp:"4. 蓄光式の誘導標識は、消防法施行令第7条第4項の避難設備として規定され、防火対象物又はその部分に設置されるものであり、建築設備ではない。\n【正解】4",
      solution_vi:"Biển chỉ dẫn dạ quang được quy định trong hệ thống thiết bị thoát nạn theo pháp luật PCCC, không được xếp vào 建築設備 của Luật Tiêu chuẩn xây dựng.\n【Đáp án】4",
      reference_jp:"施工マニュアル p.321, 349",explanation_vi:"Đề kiểm tra ranh giới giữa hai hệ thống luật: cùng lắp trong công trình nhưng không phải cái gì cũng là 建築設備."
    })
  ]},
  34:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:30,question_jp:"消防用設備等の設置に係る工事のうち、消防設備士でなければ行ってはならない工事として、「消防法」上、定められていないものはどれか。\nただし、電源、水源及び配管の部分を除くものとする。",question_vi:"Theo Luật PCCC, công việc lắp đặt nào sau đây không thuộc nhóm bắt buộc phải do 消防設備士 thực hiện? Không xét phần nguồn điện, nguồn nước và đường ống.",
      choices_jp:["非常警報設備","自動火災報知設備","屋外消火栓設備","粉末消火設備"],choices_vi:["Thiết bị cảnh báo khẩn cấp.","Hệ thống báo cháy tự động.","Hệ thống họng nước chữa cháy ngoài nhà.","Hệ thống chữa cháy bột."],
      figure_placeholder_jp:null,
      solution_jp:"1. 消防法施行令第36条の2第1項に消防設備士でなければ行ってはならない工事が定められている。非常警報設備は同施行令第7条第3項第四号の設備であり、非常ベル、自動式サイレン、放送設備等がこれにあたるが、消防設備士でなくても工事ができる。\n【正解】1",
      solution_vi:"Luật quy định một số hệ thống phải do 消防設備士 thực hiện, nhưng 非常警報設備 như chuông báo khẩn, còi tự động hoặc hệ thống phát thanh không thuộc nhóm bắt buộc này.\n【Đáp án】1",
      reference_jp:"施工マニュアル p.349",explanation_vi:"Mấu chốt là 'không phải mọi thiết bị PCCC đều bắt buộc 消防設備士'. Cần nhớ nhóm ngoại lệ như 非常警報設備."
    }),
    ex({type:"exercise",number:31,question_jp:"事業者が、遅滞なく、報告書を所轄労働基準監督署長に提出しなければならない場合として、「労働安全衛生法」上、定められていないものはどれか。",question_vi:"Theo Luật An toàn và vệ sinh lao động, trường hợp nào không thuộc nhóm phải lập tức nộp báo cáo cho cơ quan thanh tra lao động?",
      choices_jp:["事業場で火災又は爆発の事故が発生したとき","ゴンドラのワイヤロープの切断の事故が発生したとき","つり上げ荷重が5tの移動式クレーンの倒壊の事故が発生したとき","休業の日数が4日に満たない労働災害が発生したとき"],
      choices_vi:["Xảy ra cháy hoặc nổ tại cơ sở.","Đứt cáp thép của gondola.","Cần cẩu di động tải nâng 5 t bị đổ.","Tai nạn lao động khiến nghỉ việc dưới 4 ngày."],
      figure_placeholder_jp:null,
      solution_jp:"4. 労働安全衛生規則第96条第1項に定める事故は遅滞なく報告する必要がある。一方、休業の日数が4日に満たない労働災害は、一定期間ごとにまとめて報告する扱いであり、遅滞なく提出する対象ではない。\n【正解】4",
      solution_vi:"Các sự cố nghiêm trọng như cháy nổ, đứt cáp gondola hay đổ cần cẩu thuộc nhóm phải báo cáo không chậm trễ. Tai nạn làm nghỉ việc dưới 4 ngày được tổng hợp báo cáo định kỳ, không thuộc nhóm phải nộp ngay.\n【Đáp án】4",
      reference_jp:null,explanation_vi:"Câu bẫy nằm ở từ '遅滞なく'. Không phải mọi tai nạn lao động đều có cùng thời hạn báo cáo."
    })
  ]},
  35:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:32,question_jp:"労働者の健康管理等に関する記述として、「労働安全衛生法」上、定められていないものはどれか。",question_vi:"Theo Luật An toàn và vệ sinh lao động, phát biểu nào về quản lý sức khỏe người lao động không đúng quy định?",
      choices_jp:["事業者は、健康診断の結果に基づき、健康診断個人票を作成して、これを5年間保存しなければならない。","事業者は、常時10人以上50人未満の労働者を使用する事業場には、産業医を選任し、その者に労働者の健康管理等を行わせなければならない。","事業者は、常時使用する労働者に対して、医師による定期健康診断を行う場合は、既往歴及び業務歴の調査を行わなければならない。","事業者は、中高年齢者については、心身の条件に応じて適正な配置を行なうように努めなければならない。"],
      choices_vi:["Phải lập phiếu khám sức khỏe cá nhân và lưu 5 năm.","Cơ sở thường xuyên có 10–49 lao động phải bổ nhiệm bác sĩ lao động.","Khám sức khỏe định kỳ phải điều tra tiền sử bệnh và lịch sử công việc.","Với người lao động trung/cao tuổi cần cố gắng bố trí phù hợp điều kiện thể chất và tinh thần."],
      figure_placeholder_jp:null,
      solution_jp:"2. 法第13条第1項及び同法施行令第5条により、産業医を選任しなければならない事業場は、常時50人以上の労働者を使用する事業場である。\n【正解】2",
      solution_vi:"Ngưỡng phải bổ nhiệm 産業医 là cơ sở thường xuyên sử dụng từ 50 lao động trở lên. Vì vậy phát biểu 10–49 người phải bổ nhiệm là sai.\n【Đáp án】2",
      reference_jp:"施工マニュアル p.217",explanation_vi:"Đây là câu nhớ mốc số lượng: 50人以上."
    }),
    ex({type:"exercise",number:33,question_jp:"特定元方事業者が、その労働者及び関係請負人の労働者の作業が同一の場所において行われることによって生ずる労働災害を防止するために行わなければならない措置として、「労働安全衛生法」上、定められていないものはどれか。",question_vi:"Biện pháp nào không phải nghĩa vụ của 特定元方事業者 để phòng tai nạn khi nhiều bên cùng làm việc tại một địa điểm?",
      choices_jp:["協議組織の設置及び運営を行うこと。","作業間の連絡及び調整を行うこと。","関係請負人が行う労働者の安全又は衛生のための教育に対する指導及び援助を行うこと。","安全衛生責任者を選任すること。"],
      choices_vi:["Thiết lập và vận hành tổ chức phối hợp.","Liên lạc, điều phối giữa các công việc.","Hướng dẫn và hỗ trợ việc giáo dục an toàn/vệ sinh do nhà thầu liên quan thực hiện.","Bổ nhiệm 安全衛生責任者."],
      figure_placeholder_jp:null,
      solution_jp:"4. 安全衛生責任者は、関係請負人が選任する。\n【正解】4",
      solution_vi:"安全衛生責任者 là chức danh do phía 関係請負人 bổ nhiệm. 特定元方事業者 có các nghĩa vụ phối hợp, điều chỉnh và hỗ trợ an toàn, nhưng không phải chủ thể trực tiếp bổ nhiệm chức danh này.\n【Đáp án】4",
      reference_jp:"施工マニュアル p.221, 222",explanation_vi:"Phân biệt vai trò giữa 元方 và 関係請負人 là chìa khóa của câu này."
    })
  ]},
  36:{sectionCode:"ch2-2",content_blocks:[
    ex({type:"exercise",number:34,question_jp:"建設業の事業者が、労働者を雇い入れたときの措置に関する次の記述として、［ア］［イ］に当てはまる語句の組合せとして、「労働安全衛生法」上、正しいものはどれか。\n「事業者は、労働者を雇い入れたときは、当該労働者に対し、その従事する業務に関する［ア］のための［イ］を行わなければならない。」",question_vi:"Theo Luật An toàn và vệ sinh lao động, tổ hợp nào điền đúng vào [ア] và [イ] về biện pháp khi tuyển người lao động?",
      choices_jp:["ア：健康障害を防止する　イ：管理","ア：健康障害を防止する　イ：教育","ア：安全又は衛生の　イ：管理","ア：安全又は衛生の　イ：教育"],
      choices_vi:["[ア] Phòng tổn hại sức khỏe / [イ] Quản lý.","[ア] Phòng tổn hại sức khỏe / [イ] Giáo dục.","[ア] An toàn hoặc vệ sinh / [イ] Quản lý.","[ア] An toàn hoặc vệ sinh / [イ] Giáo dục."],
      figure_placeholder_jp:null,
      solution_jp:"4. ア：安全又は衛生の　イ：教育\n【正解】4",
      solution_vi:"Khi tuyển người lao động, người sử dụng lao động phải thực hiện giáo dục về an toàn hoặc vệ sinh liên quan đến công việc mà người đó sẽ đảm nhiệm.\n【Đáp án】4",
      reference_jp:"施工マニュアル p.227",explanation_vi:"Cụm từ cần nhớ nguyên văn là 安全又は衛生のための教育."
    }),
    ex({type:"exercise",number:35,question_jp:"建設工事現場において、満18才に満たない者を使用する場合の記述として、「労働基準法」上、正しいものはどれか。",question_vi:"Theo Luật Tiêu chuẩn lao động, phát biểu nào đúng khi sử dụng người dưới 18 tuổi tại công trường xây dựng?",
      choices_jp:["午後10時から午前5時までの作業をさせた。","本人に代わり賃金を受け取りたい旨の親権者からの申し入れを断り、本人に直接支払った。","動力によるクレーンの運転をさせた。","高圧充電電路の点検をさせた。"],
      choices_vi:["Cho làm việc từ 22:00 đến 05:00.","Từ chối yêu cầu của người giám hộ muốn nhận lương thay và trả trực tiếp cho chính người lao động.","Cho vận hành cần cẩu chạy bằng động lực.","Cho kiểm tra mạch cao áp đang mang điện."],
      figure_placeholder_jp:null,
      solution_jp:"1. 満18歳に満たない者を深夜業務（午後10時から午前5時まで）につけてはならない（ただし、交替制によって使用する満16歳以上の男子についてはこの限りでない）。\n3、4. 年少者について就業制限が規定されており、クレーンの運転、高圧充電電路の点検はこれにあたる。\nしたがって、本人に直接賃金を支払った2が正しい。\n【正解】2",
      solution_vi:"Người dưới 18 tuổi về nguyên tắc không được làm ca đêm 22:00–05:00, cũng bị hạn chế các công việc nguy hiểm như vận hành cần cẩu hoặc kiểm tra mạch cao áp đang mang điện. Tiền lương phải trả trực tiếp cho người lao động, nên từ chối trả cho người giám hộ thay là đúng.\n【Đáp án】2",
      reference_jp:"施工マニュアル p.202～204",explanation_vi:"Câu này kết hợp ba quy tắc: cấm/giới hạn làm đêm, cấm công việc nguy hiểm với người chưa thành niên và nguyên tắc trả lương trực tiếp."
    })
  ]}
};

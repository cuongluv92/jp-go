import { ex, type StaticSougouPageSeed } from "./sougou-static-common";

export const STATIC_SOUGOU_PAGES_47_54: Record<number, StaticSougouPageSeed> = {
  47: { sectionCode:"ch2-4", content_blocks:[
    ex({type:"exercise",number:51,
      question_jp:"変圧器の損失に関する記述として、最も不適当なものはどれか。\nただし、電圧及び周波数は一定とする。",
      question_vi:"Trong các phát biểu về tổn thất của máy biến áp, phát biểu nào không phù hợp nhất? Giả sử điện áp và tần số không đổi.",
      choices_jp:["鉄損は、負荷電流に比例する。","鉄損は、ヒステリシス損が含まれる。","銅損は、負荷電流の2乗に比例する。","銅損は、負荷損に分類される。"],
      choices_vi:["Tổn hao sắt tỉ lệ với dòng tải.","Tổn hao sắt bao gồm tổn hao do từ trễ.","Tổn hao đồng tỉ lệ với bình phương dòng tải.","Tổn hao đồng được xếp vào tổn hao phụ thuộc tải."],
      figure_placeholder_jp:null,
      solution_jp:"1. 鉄損は鉄心の損失であり、ヒステリシス損とうず電流損からなる。両者とも磁束密度の2乗に比例するため、電圧の2乗に比例するが、負荷電流には関係なくほぼ一定である。\n【正解】1",
      solution_vi:"Tổn hao sắt xảy ra trong lõi thép, gồm tổn hao từ trễ và tổn hao dòng điện xoáy. Khi điện áp và tần số giữ không đổi, từ thông gần như không đổi nên tổn hao sắt gần như không phụ thuộc dòng tải. Vì vậy phát biểu 'tỉ lệ với dòng tải' là sai.\n【Đáp án】1",
      reference_jp:"電気テキスト p.28",
      explanation_vi:"Phân biệt nhanh: 鉄損 ≈ tổn hao không tải, gần như cố định khi U và f cố định; 銅損 = I²R nên tăng theo bình phương dòng tải."
    }),
    ex({type:"exercise",number:52,
      question_jp:"直流発電機に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về máy phát điện một chiều, phát biểu nào không phù hợp?",
      choices_jp:["直巻発電機は、自励発電機に分類される。","分巻発電機は、他励発電機に分類される。","直巻発電機の無負荷時の出力電圧は、残留電圧に等しい。","分巻発電機の無負荷時の出力電圧は、誘導起電力に等しい。"],
      choices_vi:["Máy phát kích từ nối tiếp được xếp vào loại tự kích.","Máy phát kích từ song song được xếp vào loại kích từ độc lập.","Điện áp đầu ra không tải của máy phát nối tiếp bằng điện áp dư.","Điện áp đầu ra không tải của máy phát song song bằng sức điện động cảm ứng."],
      figure_placeholder_jp:null,
      solution_jp:"2. 分巻発電機は、界磁巻線が外部電源ではなく発電機自身の端子に接続されるため、自励発電機の一つである。\n【正解】2",
      solution_vi:"Máy phát kích từ song song lấy dòng kích từ từ chính điện áp đầu cực của máy phát, nên thuộc nhóm tự kích chứ không phải kích từ độc lập. Vì vậy phương án 2 sai.\n【Đáp án】2",
      reference_jp:"電気テキスト p.25",
      explanation_vi:"Nhớ theo nguồn cấp cuộn kích từ: tự lấy từ chính máy → 自励; lấy từ nguồn ngoài → 他励. 分巻発電機 thuộc 自励."
    }),
    ex({type:"exercise",number:53,
      question_jp:"同期発電機の並行運転を行うための条件として、必要のないものはどれか。",
      question_vi:"Điều kiện nào không cần thiết để vận hành song song các máy phát đồng bộ?",
      choices_jp:["定格容量が等しいこと。","起電力の位相が一致していること。","起電力の周波数が等しいこと。","起電力の大きさが等しいこと。"],
      choices_vi:["Công suất định mức phải bằng nhau.","Pha của sức điện động phải trùng nhau.","Tần số của sức điện động phải bằng nhau.","Độ lớn sức điện động phải bằng nhau."],
      figure_placeholder_jp:null,
      solution_jp:"1. 定格容量は、同期発電機の定格出力により決定されるものであり、等しいことが並行運転を行う条件とはならない。並行運転では、電圧の大きさ、周波数、位相などを一致させる必要がある。\n【正解】1",
      solution_vi:"Hai máy phát có thể chạy song song dù công suất định mức khác nhau. Điều bắt buộc trước khi hòa đồng bộ là điện áp phù hợp, tần số bằng nhau và pha trùng nhau. Vì vậy 'công suất định mức bằng nhau' không phải điều kiện bắt buộc.\n【Đáp án】1",
      reference_jp:"電気テキスト p.27",
      explanation_vi:"Hòa đồng bộ kiểm tra trạng thái điện áp và pha, không kiểm tra hai máy có cùng công suất định mức hay không."
    })
  ]},

  48: { sectionCode:"ch2-5", content_blocks:[
    ex({type:"exercise",number:54,
      question_jp:"事務所の部屋に対する基準面における維持照度の推奨値として、「日本産業規格（JIS）」の照明設計基準上、誤っているものはどれか。",
      question_vi:"Theo tiêu chuẩn thiết kế chiếu sáng JIS, giá trị độ rọi duy trì khuyến nghị nào cho phòng trong văn phòng là sai?",
      choices_jp:["事務室　750lx","応接室　500lx","会議室　300lx","倉庫　100lx"],
      choices_vi:["Phòng làm việc: 750 lx.","Phòng tiếp khách: 500 lx.","Phòng họp: 300 lx.","Kho: 100 lx."],
      figure_placeholder_jp:null,
      solution_jp:"3. 事務室（書く部屋）は750lx前後、会議室（読む部屋）は500lx前後、倉庫、休憩室（暗くても良い部屋）は100lx前後と考えると良い。したがって、会議室は500lx程度である。\n【正解】3",
      solution_vi:"Theo mức tham khảo trong tài liệu: phòng làm việc khoảng 750 lx; phòng họp khoảng 500 lx; kho hoặc phòng nghỉ nơi không cần sáng cao khoảng 100 lx. Vì vậy ghi phòng họp 300 lx là không phù hợp.\n【Đáp án】3",
      reference_jp:"電気テキスト p.34",
      explanation_vi:"Mẹo nhớ theo tính chất công việc: viết/đọc chi tiết cần sáng cao; không gian phụ như kho thấp hơn rõ rệt."
    }),
    ex({type:"exercise",number:55,
      question_jp:"LEDランプに関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về đèn LED, phát biểu nào không phù hợp?",
      choices_jp:["発光は、エレクトロルミネセンスの原理を利用している。","発光時に熱が発生するため、フィンを付けるなどの放熱対策が必要である。","LED素子は、耐圧が低いため電圧の変化により破壊されやすい。","蛍光ランプに比べて、周囲温度の変化による光束の低下が大きい。"],
      choices_vi:["LED phát sáng nhờ nguyên lý điện phát quang.","Khi phát sáng có sinh nhiệt nên cần biện pháp tản nhiệt như gắn cánh tản nhiệt.","Phần tử LED có khả năng chịu áp thấp nên dễ hỏng khi điện áp biến động.","So với đèn huỳnh quang, quang thông của LED giảm mạnh hơn khi nhiệt độ môi trường thay đổi."],
      figure_placeholder_jp:null,
      solution_jp:"4. LEDランプは、周囲温度の変化に対して、その光束はほとんど影響を受けない。蛍光ランプは、LEDランプに比べて光束の低下が大きい。\n【正解】4",
      solution_vi:"LED nhìn chung ít bị suy giảm quang thông do biến đổi nhiệt độ môi trường hơn đèn huỳnh quang. Vì vậy phát biểu nói LED giảm quang thông nhiều hơn đèn huỳnh quang là ngược lại.\n【Đáp án】4",
      reference_jp:"電気テキスト p.34（参考）",
      explanation_vi:"Câu này hỏi so sánh tương đối giữa LED và đèn huỳnh quang. Đừng nhầm với việc LED vẫn cần tản nhiệt tại phần tử bán dẫn."
    })
  ]},

  49: { sectionCode:"ch2-5", content_blocks:[
    ex({type:"exercise",number:56,
      question_jp:"電気加熱の方式に関する次の記述のうち、［ア］［イ］に当てはまる用語の組合せとして、適当なものはどれか。\n「誘電加熱は、交番［ア］中に置かれた被加熱物中に生じる誘電損により加熱するものである。誘電加熱の一部であるマイクロ波加熱は、［イ］などに利用されている。」",
      question_vi:"Trong mô tả về phương pháp gia nhiệt điện, tổ hợp nào đúng cho [ア] và [イ]? Gia nhiệt điện môi sử dụng tổn hao điện môi sinh ra trong vật đặt trong trường xoay chiều; gia nhiệt vi sóng là một dạng của phương pháp này.",
      choices_jp:["ア：磁界　イ：電子レンジ","ア：磁界　イ：IH調理器","ア：電界　イ：電子レンジ","ア：電界　イ：IH調理器"],
      choices_vi:["[ア] Từ trường / [イ] Lò vi sóng.","[ア] Từ trường / [イ] Bếp IH.","[ア] Điện trường / [イ] Lò vi sóng.","[ア] Điện trường / [イ] Bếp IH."],
      figure_placeholder_jp:null,
      solution_jp:"3. ア：電界　イ：電子レンジ\n【正解】3",
      solution_vi:"Gia nhiệt điện môi xảy ra khi vật liệu điện môi đặt trong điện trường xoay chiều và phát nhiệt do tổn hao điện môi. Gia nhiệt vi sóng được ứng dụng điển hình trong lò vi sóng. Vì vậy [ア] = 電界 và [イ] = 電子レンジ.\n【Đáp án】3",
      reference_jp:"電気テキスト p.35",
      explanation_vi:"Phân biệt với IH: IH dùng cảm ứng điện từ và dòng xoáy trong kim loại; vi sóng thuộc gia nhiệt điện môi."
    })
  ]},

  50: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:57,
      question_jp:"電力系統における保護継電システムの構成に必要な機器として、不適当なものはどれか。",
      question_vi:"Thiết bị nào không phù hợp khi nói đến các phần tử cần thiết cấu thành hệ thống rơ-le bảo vệ trong hệ thống điện?",
      choices_jp:["計器用変成器","保護継電器","遮断器","避雷器"],
      choices_vi:["Biến điện áp/dòng điện đo lường.","Rơ-le bảo vệ.","Máy cắt.","Chống sét van."],
      figure_placeholder_jp:null,
      solution_jp:"4. 避雷器は、雷や回路の開閉などに起因する過電圧の波高値が一定の値を超えた場合、放電することによって過電圧を制限して電気施設の絶縁を保護し、かつ、続流を短時間のうちに遮断して系統の正常な状態を乱すことなく現状に復帰する機能を持つ装置であり、保護継電システムの構成機器ではない。\n【正解】4",
      solution_vi:"Một hệ thống bảo vệ rơ-le cần phần tử đo lường để lấy tín hiệu, rơ-le để phán đoán và máy cắt để cắt sự cố. Chống sét van có nhiệm vụ hạn chế quá điện áp và bảo vệ cách điện, nhưng không phải phần tử cấu thành chuỗi bảo vệ rơ-le.\n【Đáp án】4",
      reference_jp:"電気テキスト p.38",
      explanation_vi:"Nhìn theo chuỗi hoạt động: CT/VT → rơle → máy cắt. Chống sét van hoạt động trực tiếp với quá điện áp, không nằm trong chuỗi này."
    }),
    ex({type:"exercise",number:58,
      question_jp:"配電系統に生じる電力損失の軽減対策として、最も不適当なものはどれか。",
      question_vi:"Biện pháp nào không phù hợp nhất để giảm tổn thất công suất trong hệ thống phân phối?",
      choices_jp:["変圧器二次側の中性点を接地する。","給電点を負荷の中心にする。","負荷の不平衡を是正する。","負荷の力率を改善する。"],
      choices_vi:["Nối đất điểm trung tính phía thứ cấp máy biến áp.","Đặt điểm cấp điện gần trung tâm phụ tải.","Khắc phục mất cân bằng phụ tải.","Cải thiện hệ số công suất của phụ tải."],
      figure_placeholder_jp:null,
      solution_jp:"1. 変圧器中性点は、送配電系統の地絡事故等に生じる過電圧の抑制と保護継電装置の確実な動作のために接地する。電力損失の軽減を目的とするものではない。\n【正解】1",
      solution_vi:"Nối đất trung tính chủ yếu để hạn chế quá điện áp khi chạm đất và giúp hệ thống bảo vệ tác động tin cậy. Nó không phải biện pháp trực tiếp nhằm giảm tổn thất I²R của hệ thống phân phối.\n【Đáp án】1",
      reference_jp:"電気テキスト p.54",
      explanation_vi:"Muốn giảm tổn thất đường dây phải giảm dòng hoặc chiều dài hiệu dụng: đưa nguồn gần tâm tải, cân bằng pha và nâng cosφ đều giúp giảm dòng."
    })
  ]},

  51: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:59,
      question_jp:"電力系統における変電所の主な役割として、不適当なものはどれか。",
      question_vi:"Trong hệ thống điện, vai trò nào không phải vai trò chính của trạm biến áp?",
      choices_jp:["電圧・電流の変成","電圧の調整","周波数の制御","送配電線の保護"],
      choices_vi:["Biến đổi điện áp/dòng điện.","Điều chỉnh điện áp.","Điều khiển tần số.","Bảo vệ đường dây truyền tải/phân phối."],
      figure_placeholder_jp:null,
      solution_jp:"3. 周波数の制御は変電所ではなく、発電所の発電機の回転数の制御により行われる。\n【正解】3",
      solution_vi:"Trạm biến áp thực hiện biến đổi và điều chỉnh điện áp, đóng cắt và bảo vệ lưới. Tần số hệ thống được điều khiển chủ yếu thông qua công suất và tốc độ quay của máy phát tại nhà máy điện, không phải chức năng chính của trạm biến áp.\n【Đáp án】3",
      reference_jp:"電気テキスト p.27（参考）",
      explanation_vi:"Phân biệt: điện áp có thể xử lý nhiều tại trạm biến áp; tần số gắn với tốc độ quay đồng bộ của máy phát."
    }),
    ex({type:"exercise",number:60,
      question_jp:"水力発電所の発電機出力P［kW］を求める式として、正しいものはどれか。\nただし、各記号は次のとおりとする。\nQ：水車に流入する水量［m³/s］\nH：有効落差［m］\nηg：発電機の効率\nηt：水車の効率",
      question_vi:"Công thức nào đúng để tính công suất máy phát P [kW] của nhà máy thủy điện? Q là lưu lượng nước [m³/s], H là cột nước hữu ích [m], ηg là hiệu suất máy phát, ηt là hiệu suất tua-bin.",
      choices_jp:["P=9.8QH²ηgηt［kW］","P=9.8QHηgηt［kW］","P=(9.8QH²)/(ηgηt)［kW］","P=(9.8QH)/(ηgηt)［kW］"],
      choices_vi:["P = 9,8QH²ηgηt.","P = 9,8QHηgηt.","P = 9,8QH²/(ηgηt).","P = 9,8QH/(ηgηt)."],
      figure_placeholder_jp:null,
      solution_jp:"水車の理論出力は、1秒間にQ［m³/s］の流量の水が有効落差H［m］の高さから落下するとすれば、1m³の水の質量を1,000kgとすると、P=1,000QH［kg・m/s］。1［kg・m/s］=9.8［J］、1［J］=1［W・s］より、理論出力は9.8QH［kW］。発電機出力はこれに水車効率ηtと発電機効率ηgを乗じるため、P=9.8QHηgηt［kW］である。\n【正解】2",
      solution_vi:"Năng lượng thế của nước trong 1 giây tỉ lệ với lưu lượng Q và cột nước H. Sau đổi đơn vị, công suất thủy lực lý tưởng là 9,8QH [kW]. Công suất điện thực tế phải nhân thêm hiệu suất tua-bin và máy phát: P = 9,8QHηtηg.\n【Đáp án】2",
      reference_jp:"電気テキスト p.43",
      explanation_vi:"Không có H². Hiệu suất luôn làm công suất thực nhỏ hơn công suất lý tưởng nên phải nhân ηt và ηg, không chia."
    })
  ]},

  52: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:61,
      question_jp:"水力発電所に用いられる水車発電機に関する記述として、不適当なものはどれか。\nただし、発電機は同期発電機とする。",
      question_vi:"Trong các phát biểu về máy phát tua-bin nước dùng trong nhà máy thủy điện, phát biểu nào không phù hợp? Giả sử máy phát là máy phát đồng bộ.",
      choices_jp:["立軸形は、横軸形に比べて大容量低速機に適している。","短絡比は、蒸気タービン発電機より大きい。","回転子は、軸方向に長い円筒形が多く使用される。","立軸形は、軸方向の荷重を支えるスラスト軸受を有する。"],
      choices_vi:["Kiểu trục đứng phù hợp máy công suất lớn tốc độ thấp hơn kiểu trục ngang.","Tỷ số ngắn mạch lớn hơn máy phát tua-bin hơi.","Rôto thường là dạng trụ dài theo phương trục.","Kiểu trục đứng có ổ chặn chịu tải dọc trục."],
      figure_placeholder_jp:null,
      solution_jp:"3. 水車発電機には、円筒形に比べ比較的回転速度が低速な突極形の回転子が用いられる。\n【正解】3",
      solution_vi:"Máy phát thủy điện thường quay chậm, số cực nhiều nên dùng rôto cực lồi (突極形), không phải rôto hình trụ dài kiểu thường thấy ở máy phát tua-bin hơi tốc độ cao.\n【Đáp án】3",
      reference_jp:"電気テキスト p.26",
      explanation_vi:"Nhớ cặp đối lập: thủy điện → thấp tốc → 突極形; tua-bin hơi → cao tốc → 円筒形."
    }),
    ex({type:"exercise",number:62,
      question_jp:"火力発電所の燃焼ガスによる大気汚染を軽減するために用いられる装置として、最も不適当なものはどれか。",
      question_vi:"Thiết bị nào không phù hợp nhất khi nói đến thiết bị dùng để giảm ô nhiễm không khí do khí cháy tại nhà máy nhiệt điện?",
      choices_jp:["脱硫装置","脱硝装置","節炭器","電気集じん器"],
      choices_vi:["Thiết bị khử lưu huỳnh.","Thiết bị khử NOx.","Bộ hâm nước cấp.","Lọc bụi tĩnh điện."],
      figure_placeholder_jp:null,
      solution_jp:"3. 節炭器は、ボイラの燃焼ガスの熱を回収してボイラ給水を予熱し、ボイラ効率を高める装置である。燃焼ガスによる大気汚染の軽減には直接関係しない。\n【正解】3",
      solution_vi:"Bộ hâm nước cấp tận dụng nhiệt còn lại của khí thải để gia nhiệt nước cấp, nhằm nâng hiệu suất nồi hơi. Nó không phải thiết bị xử lý chất ô nhiễm. Khử SOx, khử NOx và lọc bụi tĩnh điện mới trực tiếp giảm ô nhiễm khí thải.\n【Đáp án】3",
      reference_jp:"電気テキスト p.48",
      explanation_vi:"Câu này phân biệt thiết bị nâng hiệu suất nhiệt với thiết bị xử lý môi trường."
    })
  ]},

  53: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:63,
      question_jp:"図に示す汽力発電の熱サイクルのうち、機器イ、ロの名称の組合せとして、適当なものはどれか。",
      question_vi:"Trong chu trình nhiệt của phát điện hơi nước ở hình, tổ hợp tên thiết bị イ và ロ nào đúng?",
      choices_jp:["イ：節炭器　ロ：復水器","イ：節炭器　ロ：気化器","イ：過熱器　ロ：復水器","イ：過熱器　ロ：気化器"],
      choices_vi:["イ: Bộ hâm nước cấp / ロ: Bình ngưng.","イ: Bộ hâm nước cấp / ロ: Thiết bị hóa hơi.","イ: Bộ quá nhiệt / ロ: Bình ngưng.","イ: Bộ quá nhiệt / ロ: Thiết bị hóa hơi."],
      figure_placeholder_jp:"汽力発電の熱サイクル図。ボイラ上部のイ、蒸気タービン下流の熱交換器ロ、給水ポンプを示す。原本図を後で挿入。",
      solution_jp:"給水ポンプからボイラに送り込まれた水（給水）は、飽和蒸気となり過熱器に送られ、さらに過熱されて蒸気タービンに送られる。ここでは熱エネルギーが機械的エネルギーに変換され、蒸気タービンが回転する。蒸気タービンから排出した蒸気（排気）は復水器に入り、冷却されてもとの水（復水）に戻る。この変化を熱サイクル（heat cycle）ランキンサイクルという。\n【正解】3",
      solution_vi:"Sau khi nước cấp vào nồi hơi tạo thành hơi bão hòa, hơi được đưa qua bộ quá nhiệt để nâng nhiệt độ rồi vào tua-bin. Hơi thoát khỏi tua-bin đi vào bình ngưng, được làm lạnh và trở lại thành nước. Vì vậy イ là 過熱器 và ロ là 復水器.\n【Đáp án】3",
      reference_jp:"電気テキスト p.46",
      explanation_vi:"Theo thứ tự chu trình Rankine: bơm cấp nước → lò hơi → quá nhiệt → tua-bin → bình ngưng → bơm."
    }),
    ex({type:"exercise",number:64,
      question_jp:"火力発電に用いられるタービン発電機に関する記述として、最も不適当なものはどれか。",
      question_vi:"Trong các phát biểu về máy phát tua-bin dùng trong nhà máy nhiệt điện, phát biểu nào không phù hợp nhất?",
      choices_jp:["水車発電機に比べて、回転速度が速い。","大容量機では、水素冷却方式が採用される。","回転子は、突極形が採用される。","軸形式は、横軸形が採用される。"],
      choices_vi:["Tốc độ quay cao hơn máy phát thủy điện.","Máy công suất lớn có thể dùng làm mát bằng hydro.","Rôto dùng kiểu cực lồi.","Kiểu trục thường là trục ngang."],
      figure_placeholder_jp:null,
      solution_jp:"3. 蒸気タービン発電機は高速回転をするため、回転子は非突極回転界磁形（円筒回転界磁形）である。\n【正解】3",
      solution_vi:"Máy phát tua-bin hơi quay rất nhanh, nên rôto cần chịu lực ly tâm lớn và thường dùng dạng trụ nhẵn, không dùng cực lồi. Vì vậy phương án 3 là sai.\n【Đáp án】3",
      reference_jp:"電気テキスト p.26",
      explanation_vi:"Đây là cặp ngược với câu 61: tua-bin hơi → tốc độ cao → rôto hình trụ; tua-bin nước → tốc độ thấp → rôto cực lồi."
    })
  ]},

  54: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:65,
      question_jp:"送電線路の線路定数に関する次の記述のうち、［　］に当てはまる語句として、適当なものはどれか。\n「送電線路は、抵抗、インダクタンス、［　］、漏れコンダクタンスの4つの定数をもつ連続した電気回路とすることができる。」",
      question_vi:"Trong mô tả về các hằng số đường dây truyền tải, đại lượng nào điền đúng vào chỗ trống? Đường dây có thể được xem là mạch phân bố gồm bốn hằng số: điện trở, điện cảm, ..., và điện dẫn rò.",
      choices_jp:["アドミタンス","インピーダンス","静電容量","漏れ電流"],
      choices_vi:["Dẫn nạp.","Trở kháng.","Điện dung.","Dòng rò."],
      figure_placeholder_jp:null,
      solution_jp:"3. 送電線路は、抵抗R、インダクタンスL、静電容量Cおよび漏れコンダクタンスgの4つの定数をもった電気回路とみなされ、電線の種類・太さおよびその配置によって定まるもので、電圧・電流または力率などには影響されないのが原則である。\n【正解】3",
      solution_vi:"Bốn hằng số cơ bản của đường dây là R, L, C và điện dẫn rò g. Vì vậy đại lượng còn thiếu là điện dung 静電容量. Các đại lượng như tổng trở hay dẫn nạp là đại lượng tổng hợp từ các hằng số này.\n【Đáp án】3",
      reference_jp:"電気テキスト p.57",
      explanation_vi:"Nhớ bộ RL-C-g: điện trở R, điện cảm L, điện dung C, điện dẫn rò g."
    }),
    ex({type:"exercise",number:66,
      question_jp:"送電系統の屋外変電所に用いられる機器に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về thiết bị dùng tại trạm biến áp ngoài trời của hệ thống truyền tải, phát biểu nào không phù hợp?",
      choices_jp:["避雷器は、雷や回路の開閉などによる過電圧の波高値がある値を超えた場合、放電により過電圧を制限する。","消弧リアクトルは、送電線の1線地絡故障発生時に地絡地点のアークを自然消滅させる。","調相設備は、力率を制御する。","断路器は、電線路の事故のとき自動的に回路を遮断する。"],
      choices_vi:["Chống sét van phóng điện để hạn chế quá điện áp khi quá điện áp do sét/đóng cắt vượt mức nhất định.","Cuộn kháng dập hồ quang giúp hồ quang tại điểm chạm đất tự tắt khi xảy ra sự cố chạm đất một pha.","Thiết bị điều chỉnh pha dùng để điều khiển hệ số công suất.","Dao cách ly tự động cắt mạch khi đường dây xảy ra sự cố."],
      figure_placeholder_jp:null,
      solution_jp:"4. 断路器は、送配電線、変圧器、遮断器の保守・点検時にこれらを回路から切り離したり、母線のループ切替用として使用される。事故電流や負荷電流を遮断することはできない。一方、遮断器は常時の電力の送電、停止あるいは切り替えに使用され、送配電線や機器の故障時に回路を自動遮断する役割を有している。\n【正解】4",
      solution_vi:"Dao cách ly 断路器 chủ yếu tạo khoảng cách cách điện nhìn thấy để cô lập thiết bị khi bảo trì hoặc đổi cấu hình thanh cái. Nó không có khả năng cắt dòng tải hay dòng sự cố. Việc tự động cắt khi có sự cố là nhiệm vụ của 遮断器 (máy cắt).\n【Đáp án】4",
      reference_jp:"電気テキスト 1→p.121　3→p.52　4→p.121, 128",
      explanation_vi:"Phân biệt bắt buộc: 断路器 = cách ly, thao tác khi dòng gần như bằng 0; 遮断器 = đóng cắt được dòng tải và dòng sự cố."
    })
  ]}
};

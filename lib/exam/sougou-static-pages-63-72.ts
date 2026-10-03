import { ex, type StaticSougouPageSeed } from "./sougou-static-common";

export const STATIC_SOUGOU_PAGES_63_72: Record<number, StaticSougouPageSeed> = {
  63: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:82,
      question_jp:"図に示す定格電流100Aの配線用遮断器で保護された低圧屋内幹線との分岐点から電線の長さが5mの箇所に分岐幹線保護用遮断器を設ける場合、分岐幹線の許容電流の最小値として、「電気設備の技術基準とその解釈」上、正しいものはどれか。",
      question_vi:"Theo Quy chuẩn kỹ thuật thiết bị điện và phần giải thích, một nhánh dài 5 m được lấy từ tuyến trục hạ áp trong nhà đang được bảo vệ bằng MCCB 100 A và đặt CB bảo vệ nhánh ở cuối đoạn 5 m. Dòng cho phép tối thiểu của dây nhánh là bao nhiêu?",
      choices_jp:["25A","35A","45A","55A"],
      choices_vi:["25 A","35 A","45 A","55 A"],
      figure_placeholder_jp:"図：100Aの配線用遮断器で保護された低圧屋内幹線から5m離れた位置に分岐幹線用遮断器を設置する構成。原本図を後で挿入。",
      solution_jp:"分岐幹線が8m以下であれば、分岐幹線の許容電流は配線用遮断器（100A）の35％（35A）以上あればよい。\n【正解】2",
      solution_vi:"Vì chiều dài dây nhánh không quá 8 m, dòng cho phép của dây nhánh phải ít nhất bằng 35% dòng định mức của CB phía nguồn. 100 A × 35% = 35 A.\n【Đáp án】2",
      reference_jp:"電気テキスト p.104",
      explanation_vi:"Mốc cần nhớ ở câu này là điều kiện đoạn nhánh ≤ 8 m và tỷ lệ tối thiểu 35% so với CB bảo vệ tuyến trục."
    }),
    ex({type:"exercise",number:83,
      question_jp:"屋内の低圧配線方法と造営材に取り付ける場合の支持点間の距離の組合せとして、「内線規程」上、最も不適当なものはどれか。",
      question_vi:"Theo Nội quy dây dẫn trong nhà (内線規程), tổ hợp nào giữa phương pháp đi dây hạ áp trong nhà và khoảng cách giữa các điểm đỡ khi gắn lên kết cấu là không phù hợp nhất?",
      choices_jp:["合成樹脂管（PF管）―1m以下","金属管―2m以下","金属ダクト―3m以下","ライティングダクト―3m以下"],
      choices_vi:["Ống nhựa tổng hợp (PF) — không quá 1 m.","Ống kim loại — không quá 2 m.","Máng kim loại — không quá 3 m.","Máng cấp điện cho đèn — không quá 3 m."],
      figure_placeholder_jp:null,
      solution_jp:"4. 内線規程3150-4（ライティングダクトの施設方法）に「ライティングダクトを造営材に取り付ける場合は、次により堅固に取り付けること」「支持点の距離は2m以下とすること」と規定されている。\n【正解】4",
      solution_vi:"Máng cấp điện cho đèn khi gắn vào kết cấu phải được cố định chắc chắn và khoảng cách giữa các điểm đỡ không được vượt quá 2 m. Vì vậy ghi 3 m là sai.\n【Đáp án】4",
      reference_jp:"電気テキスト p.111",
      explanation_vi:"Điểm bẫy là máng cấp điện cho đèn: giới hạn hỗ trợ là 2 m, không phải 3 m."
    })
  ]},

  64: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:84,
      question_jp:"湿気の多い場所に低圧屋内配線を施設する工事として、「電気設備の技術基準とその解釈」上、誤っているものはどれか。ただし、必要に応じて防湿装置を施すものとする。",
      question_vi:"Khi thi công dây điện hạ áp trong nhà ở nơi có nhiều ẩm, theo Quy chuẩn kỹ thuật thiết bị điện và phần giải thích, phương pháp nào là sai? Giả sử các biện pháp chống ẩm cần thiết được thực hiện.",
      choices_jp:["合成樹脂管工事","金属管工事","金属線ぴ工事","ケーブル工事"],
      choices_vi:["Đi dây bằng ống nhựa tổng hợp.","Đi dây bằng ống kim loại.","Đi dây bằng máng kim loại (金属線ぴ).","Đi dây bằng cáp."],
      figure_placeholder_jp:null,
      solution_jp:"3. 金属線ぴ工事は、「展開した場所のうち乾燥した場所で、かつ300V以下で使用する場合」と、「点検できる隠ぺい場所のうち乾燥した場所で、かつ300V以下で使用する場合」にしか工事ができないため、湿気の多い場所での低圧屋内電線路工事としては施設できない。\n【正解】3",
      solution_vi:"Phương pháp 金属線ぴ chỉ được dùng tại nơi khô ráo, với điện áp không quá 300 V, ở vị trí lộ thiên hoặc vị trí che khuất nhưng có thể kiểm tra. Vì vậy không được dùng tại nơi nhiều ẩm.\n【Đáp án】3",
      reference_jp:"電気テキスト p.109",
      explanation_vi:"Các phương pháp ống nhựa, ống kim loại và cáp có thể áp dụng khi đáp ứng biện pháp chống ẩm; 金属線ぴ bị giới hạn ở nơi khô."
    }),
    ex({type:"exercise",number:85,
      question_jp:"単相200V回路に使用する定格電流15Aの接地極付コンセントの極配置として、「日本産業規格（JIS）」上、適当なものはどれか。",
      question_vi:"Theo JIS, bố trí cực nào phù hợp cho ổ cắm có cực tiếp đất, dòng định mức 15 A, dùng cho mạch một pha 200 V?",
      choices_jp:["図1","図2","図3","図4"],
      choices_vi:["Hình 1","Hình 2","Hình 3","Hình 4"],
      figure_placeholder_jp:"図1〜4：接地極付コンセントの極配置。原本図を後で挿入。",
      solution_jp:"1. 2極 接地極付　定格電流20A　定格電圧125V\n2. 2極 接地極付　定格電流20A　定格電圧250V\n3. 2極 接地極付　定格電流15A　定格電圧125V\nしたがって、単相200V回路・定格電流15Aに適するのは図4である。\n【正解】4",
      solution_vi:"Hình 1 là loại 20 A–125 V, hình 2 là 20 A–250 V, hình 3 là 15 A–125 V. Vì đề yêu cầu 15 A dùng cho mạch 200 V nên hình 4 là đúng.\n【Đáp án】4",
      reference_jp:"電気テキスト p.143",
      explanation_vi:"Cần nhận dạng đồng thời cả dòng định mức và điện áp định mức từ hình dạng khe cắm."
    })
  ]},

  65: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:86,
      question_jp:"高圧受電設備に使用する機器に関する記述として、最も不適当なものはどれか。",
      question_vi:"Trong các phát biểu về thiết bị dùng trong hệ thống nhận điện cao áp, phát biểu nào không phù hợp nhất?",
      choices_jp:["限流ヒューズ付高圧交流負荷開閉器は、高圧限流ヒューズと組み合わせて、電路の短絡電流を遮断する機能を有する。","断路器は、高圧遮断器の電源側に設置し、負荷電流が流れている電路を開閉する機能を有する。","高圧交流電磁接触器は、負荷電流の多頻度の開閉をする機能を有する。","避雷器は、雷および開閉サージによる異常電圧による電流を大地へ分流する機能を有する。"],
      choices_vi:["LBS cao áp kèm cầu chì hạn dòng có thể kết hợp với cầu chì hạn dòng để cắt dòng ngắn mạch.","Dao cách ly đặt phía nguồn của máy cắt cao áp và có chức năng đóng cắt mạch đang mang dòng tải.","Contactor điện từ cao áp có chức năng đóng cắt dòng tải với tần suất cao.","Chống sét van có chức năng dẫn dòng do quá điện áp sét hoặc xung quá áp do đóng cắt xuống đất."],
      figure_placeholder_jp:null,
      solution_jp:"2. 断路器は、電路の保守点検の際などに、充電された電路を開閉分離するために用いる機器で、負荷電流の開閉を目的としないものである。負荷電流の開閉は高圧負荷開閉器で行う。\n【正解】2",
      solution_vi:"Dao cách ly (断路器) chủ yếu dùng để cách ly mạch phục vụ bảo trì/kiểm tra, không dùng để đóng cắt dòng tải. Việc đóng cắt dòng tải do thiết bị đóng cắt tải cao áp đảm nhiệm.\n【Đáp án】2",
      reference_jp:"電気テキスト p.128",
      explanation_vi:"Phân biệt 断路器 với 負荷開閉器: dao cách ly tạo khoảng cách cách điện nhìn thấy; LBS mới đảm nhiệm đóng cắt tải."
    }),
    ex({type:"exercise",number:87,
      question_jp:"高圧受電設備に用いられる高圧限流ヒューズの種類として「日本産業規格（JIS）」上、誤っているものはどれか。",
      question_vi:"Theo JIS, ký hiệu loại cầu chì hạn dòng cao áp nào sau đây là sai?",
      choices_jp:["C（リアクトル付きコンデンサ用）","G（一般用）","M（電動機用）","T（変圧器用）"],
      choices_vi:["C (dùng cho tụ điện có cuộn kháng).","G (loại thông dụng).","M (dùng cho động cơ).","T (dùng cho máy biến áp)."],
      figure_placeholder_jp:null,
      solution_jp:"1. JIS C 4604において、Cは「リアクトルなしコンデンサ用」である。\n【正解】1",
      solution_vi:"Theo JIS C 4604, ký hiệu C là loại dùng cho tụ điện không có cuộn kháng. Vì vậy mô tả “tụ điện có cuộn kháng” là sai.\n【Đáp án】1",
      reference_jp:"電気テキスト p.127",
      explanation_vi:"Nhớ ba ký hiệu thường gặp: G = dùng chung, M = động cơ, T = máy biến áp; C là tụ điện loại không kèm cuộn kháng."
    })
  ]},

  66: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:88,
      question_jp:"高圧限流ヒューズに関する次の文章中、［イ］［ロ］に当てはまる語句の組合せとして、適当なものはどれか。\n「高圧限流ヒューズは、［イ］時の限流効果を有する反面、一般的には［ロ］遮断性能が劣る。」",
      question_vi:"Điền tổ hợp đúng vào câu: “Cầu chì hạn dòng cao áp có hiệu quả hạn dòng khi [イ], nhưng nhìn chung khả năng cắt [ロ] kém.”",
      choices_jp:["イ：短絡　ロ：大電流","イ：短絡　ロ：小電流","イ：過負荷　ロ：大電流","イ：過負荷　ロ：小電流"],
      choices_vi:["[イ] ngắn mạch / [ロ] dòng lớn.","[イ] ngắn mạch / [ロ] dòng nhỏ.","[イ] quá tải / [ロ] dòng lớn.","[イ] quá tải / [ロ] dòng nhỏ."],
      figure_placeholder_jp:null,
      solution_jp:"電力ヒューズには、遮断原理から限流形と非限流形との2種類があり、それぞれの長所、短所を十分把握のうえ使用する必要がある。限流形では、短絡時の限流効果を有する反面、一般的には小電流遮断性能が劣る。非限流形では、小電流遮断性能はよいが、短絡電流に対して限流効果は期待できない。\n【正解】2",
      solution_vi:"Loại hạn dòng phát huy tác dụng khi xảy ra ngắn mạch, giúp giới hạn dòng sự cố lớn; đổi lại khả năng cắt dòng nhỏ nói chung kém hơn. Vì vậy [イ] = 短絡 và [ロ] = 小電流.\n【Đáp án】2",
      reference_jp:"電気テキスト p.127",
      explanation_vi:"Đề kiểm tra sự khác nhau giữa cầu chì hạn dòng và không hạn dòng: hạn dòng mạnh ở sự cố ngắn mạch nhưng bất lợi ở vùng dòng nhỏ."
    }),
    ex({type:"exercise",number:89,
      question_jp:"D種接地工事を施す箇所として、「電気設備の技術基準とその解釈」上、不適当なものはどれか。",
      question_vi:"Theo Quy chuẩn kỹ thuật thiết bị điện và phần giải thích, vị trí nào không phù hợp để áp dụng nối đất loại D?",
      choices_jp:["高圧電路と低圧電路とを結合する変圧器の低圧側の中性点","使用電圧が200Vの電路に接続されている、人が触れるおそれがある場所に施設する電動機の金属製外箱","高圧キュービクル内にある高圧計器用変成器の一次側電路","屋内の金属管工事において、使用電圧100Vの長さ10mの金属管"],
      choices_vi:["Điểm trung tính phía hạ áp của máy biến áp nối mạch cao áp với mạch hạ áp.","Vỏ kim loại của động cơ nối với mạch 200 V đặt tại nơi có khả năng người chạm vào.","Mạch sơ cấp của máy biến điện đo lường cao áp trong tủ cubicle.","Ống kim loại dài 10 m của hệ thống ống kim loại trong nhà dùng ở 100 V."],
      figure_placeholder_jp:null,
      solution_jp:"1. 電技解釈第24条第1項に、「高圧電路又は特別高圧電路と低圧電路とを結合する変圧器には、次の各号によりB種接地工事を施すこと。一　次のいずれかの箇所に接地工事を施すこと。イ　低圧側の中性点（以下、省略）」と規定されている。\n【正解】1",
      solution_vi:"Điểm trung tính phía hạ áp của máy biến áp nối cao áp/đặc biệt cao áp với hạ áp thuộc đối tượng nối đất loại B, không phải loại D.\n【Đáp án】1",
      reference_jp:"電気テキスト p.100",
      explanation_vi:"Mấu chốt là nhận ra nối đất điểm trung tính của máy biến áp nối cao áp–hạ áp thuộc B種接地工事."
    })
  ]},

  67: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:90,
      question_jp:"電動機のみを接続する低圧電路の保護に関する記述として、「電気設備の技術基準とその解釈」上、不適当なものはどれか。",
      question_vi:"Theo Quy chuẩn kỹ thuật thiết bị điện và phần giải thích, phát biểu nào không phù hợp về bảo vệ mạch hạ áp chỉ cấp cho động cơ?",
      choices_jp:["過負荷保護装置は、電動機が焼損するおそれがある過電流を生じた場合に、自動的にこれを遮断するものとする。","短絡保護専用遮断器は、過負荷保護装置が短絡電流によって焼損する前に、当該短絡電流を遮断する能力を有するものとする。","短絡保護専用遮断器は、当該遮断器の定格電流で自動的に遮断するものとする。","短絡保護専用ヒューズは、過負荷保護装置が短絡電流によって焼損する前に、当該短絡電流を遮断する能力を有するものとする。"],
      choices_vi:["Thiết bị bảo vệ quá tải phải tự động cắt khi xuất hiện quá dòng có nguy cơ làm cháy động cơ.","CB chuyên bảo vệ ngắn mạch phải cắt dòng ngắn mạch trước khi thiết bị bảo vệ quá tải bị hỏng do dòng đó.","CB chuyên bảo vệ ngắn mạch phải tự động tác động tại đúng dòng định mức của chính CB.","Cầu chì chuyên bảo vệ ngắn mạch phải cắt dòng ngắn mạch trước khi thiết bị bảo vệ quá tải bị hỏng."],
      figure_placeholder_jp:null,
      solution_jp:"3. 定格電流の1倍の電流で自動的に動作しないこと。\n【正解】3",
      solution_vi:"CB chuyên bảo vệ ngắn mạch không được tự động tác động chỉ ở mức đúng bằng 1 lần dòng định mức. Vì vậy phát biểu 3 là sai.\n【Đáp án】3",
      reference_jp:"電気テキスト p.139",
      explanation_vi:"Thiết bị này dành cho ngắn mạch; nếu tác động ngay ở 1×In sẽ không phù hợp với đặc tính vận hành của mạch động cơ."
    }),
    ex({type:"exercise",number:91,
      question_jp:"消防用設備等のうち消火活動上必要な施設として、「消防法」上、定められていないものはどれか。",
      question_vi:"Theo Luật Phòng cháy chữa cháy, trong các thiết bị/cơ sở dưới đây, cái nào không được xếp là cơ sở cần thiết cho hoạt động chữa cháy?",
      choices_jp:["排煙設備","連結散水設備","自動火災報知設備","非常コンセント設備"],
      choices_vi:["Thiết bị thoát khói.","Hệ thống phun nước liên kết.","Hệ thống báo cháy tự động.","Thiết bị ổ cắm khẩn cấp."],
      figure_placeholder_jp:null,
      solution_jp:"3. 自動火災報知設備は、消防の用に供する設備に分類される警報設備である。\n【正解】3",
      solution_vi:"Hệ thống báo cháy tự động thuộc nhóm thiết bị cảnh báo, không thuộc nhóm “cơ sở cần thiết cho hoạt động chữa cháy” mà câu hỏi yêu cầu.\n【Đáp án】3",
      reference_jp:"施工マニュアル p.346〜347　電気テキスト p.145",
      explanation_vi:"Đề hỏi đúng phân loại pháp lý: báo cháy tự động là 警報設備."
    })
  ]},

  68: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:92,
      question_jp:"自動火災報知設備に関する次の記述に該当する感知器として、「消防法」上、適当なものはどれか。\n「周囲の温度の上昇率が一定の率以上になったときに火災信号を発信するもの」",
      question_vi:"Theo Luật PCCC, loại đầu báo nào phát tín hiệu cháy khi tốc độ tăng nhiệt độ xung quanh vượt một mức nhất định?",
      choices_jp:["定温式スポット型感知器","光電式スポット型感知器","イオン化式スポット型感知器","差動式スポット型感知器"],
      choices_vi:["Đầu báo nhiệt cố định dạng điểm.","Đầu báo khói quang điện dạng điểm.","Đầu báo khói ion hóa dạng điểm.","Đầu báo nhiệt vi sai dạng điểm."],
      figure_placeholder_jp:null,
      solution_jp:"1. 熱感知器の一つである定温式スポット型感知器は、1局所の周囲の温度が一定の温度以上になったときに火災信号を発信するもので、外観が電線状以外のものをいう。\n2. 煙感知器の一つである光電式スポット型感知器は、周囲の空気が一定の濃度以上の煙を含むに至ったときに火災信号を発信するもので、1局所の煙による光電素子の受光量の変化により作動するものをいう。\n3. 煙感知器の一つであるイオン化式スポット型感知器は、周囲の空気が一定の濃度以上の煙を含むに至ったときに火災信号を発信するもので、1局所の煙によるイオン電流の変化により作動するものをいう。\n【正解】4",
      solution_vi:"Loại vi sai dạng điểm (差動式スポット型) phản ứng với tốc độ tăng nhiệt, đúng với mô tả đề bài. Loại 定温式 phản ứng khi nhiệt độ đạt ngưỡng; hai loại còn lại là đầu báo khói.\n【Đáp án】4",
      reference_jp:"電気テキスト p.151",
      explanation_vi:"Từ khóa: 上昇率 = tốc độ tăng → 差動式. 一定の温度以上 = đạt ngưỡng nhiệt → 定温式."
    }),
    ex({type:"exercise",number:93,
      question_jp:"屋内消火栓設備に関する次の文章中、［　］に当てはまる語句として、「消防法」上、定められているものはどれか。\n「非常電源として自家発電設備を使用する場合の容量は、屋内消火栓設備を［　］有効に作動できるものであること。」",
      question_vi:"Theo Luật PCCC, khi dùng máy phát điện tự dùng làm nguồn khẩn cấp, nguồn phải có đủ dung lượng để hệ thống họng nước chữa cháy trong nhà hoạt động hiệu quả trong ít nhất bao lâu?",
      choices_jp:["10分間以上","20分間以上","30分間以上","60分間以上"],
      choices_vi:["Ít nhất 10 phút.","Ít nhất 20 phút.","Ít nhất 30 phút.","Ít nhất 60 phút."],
      figure_placeholder_jp:null,
      solution_jp:"消防則第12条（屋内消火栓設備に関する基準の細目）第1項第四号ロ（イ）に、「非常電源の容量は、屋内消火栓設備を有効に30分間以上作動できるものであること。」と規定されている。\n【正解】3",
      solution_vi:"Quy định yêu cầu nguồn điện khẩn cấp phải duy trì hệ thống họng nước chữa cháy trong nhà hoạt động hiệu quả ít nhất 30 phút.\n【Đáp án】3",
      reference_jp:"電気テキスト p.146",
      explanation_vi:"Mốc cần nhớ: 屋内消火栓設備 + 非常電源 = 30 phút trở lên."
    })
  ]},

  69: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:94,
      question_jp:"非常用の照明装置に関する記述として、「建築基準法」上、不適当なものはどれか。ただし、地下街の各構えの接する地下道に設けるものを除く。",
      question_vi:"Theo Luật Tiêu chuẩn Xây dựng, phát biểu nào không phù hợp về hệ thống chiếu sáng khẩn cấp? Không xét loại lắp tại đường ngầm tiếp giáp từng gian của khu phố ngầm.",
      choices_jp:["照明器具（照明カバーその他照明器具に付属するものを含む。）のうち主要な部分は、難燃材料で造り、又は覆わなければならない。","LEDランプを用いる場合は、常温下で床面において水平面照度1lxを確保することができるものとする。","予備電源は、充電を行うことなく30分間継続して点灯させることができるものとする。","非常用の照明装置の電源は、常用の電源が断たれた場合に自動的に予備電源に切り替えられて接続され、かつ、常用の電源が復旧した場合に自動的に切り替えられて復帰するものとする。"],
      choices_vi:["Các bộ phận chính của đèn, kể cả chụp và phụ kiện, phải làm bằng hoặc được che phủ bằng vật liệu khó cháy.","Nếu dùng đèn LED thì ở nhiệt độ thường phải đảm bảo độ rọi ngang trên sàn là 1 lx.","Nguồn dự phòng phải có thể duy trì chiếu sáng liên tục 30 phút mà không cần sạc.","Nguồn của hệ thống chiếu sáng khẩn cấp phải tự chuyển sang nguồn dự phòng khi nguồn thường mất và tự trở lại nguồn thường khi nguồn thường phục hồi."],
      figure_placeholder_jp:null,
      solution_jp:"2. 非常用の照明装置は、常温下で床面において水平面照度で1lx（蛍光灯又はLEDランプを用いる場合にあっては、2lx）以上を確保することができるものとしなければならない。\n【正解】2",
      solution_vi:"Mức cơ bản là 1 lx, nhưng nếu dùng đèn huỳnh quang hoặc LED thì phải đảm bảo ít nhất 2 lx. Vì vậy phát biểu LED chỉ cần 1 lx là sai.\n【Đáp án】2",
      reference_jp:"電気テキスト p.147",
      explanation_vi:"Bẫy số liệu: LED/蛍光灯 → 2 lx, không phải 1 lx."
    })
  ]},

  70: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:95,
      question_jp:"電車線路のちょう架方式におけるコンパウンドカテナリ式の図として、適当なものはどれか。",
      question_vi:"Trong các hình về phương thức treo dây tiếp xúc đường sắt điện, hình nào là hệ dây treo phức hợp?",
      choices_jp:["図1","図2","図3","図4"],
      choices_vi:["Hình 1","Hình 2","Hình 3","Hình 4"],
      figure_placeholder_jp:"図1〜4：電車線路のちょう架方式。図1はちょう架線・補助ちょう架線・ハンガ・ドロッパ・トロリ線を示す。原本図を後で挿入。",
      solution_jp:"2. ツインシンプル式と呼ばれるもので、既設電化区間（シンプル式）の架高を変更しないで高速度・集電性能を上げることができる方式。架高の小さいトンネル区間にも使われる。\n3. シンプル式と呼ばれるもので、カテナリちょう架式の基本的、代表的なものである。集電容量は中程度で、速度も最高100km/h程度の中速用で、広く採用されている。\n4. ダブルメッセンジャ式と呼ばれるもので、2本のちょう架線で1本のトロリ線をV字形に吊す方式。橋りょうなどの、長径間用の耐風構造の方式。\n【正解】1",
      solution_vi:"Hệ dây treo phức hợp có dây treo chính, dây treo phụ và dây tiếp xúc; hình 1 thể hiện đúng cấu trúc đó. Hình 2 là hệ dây treo đơn kép, hình 3 là hệ dây treo đơn và hình 4 là hệ hai dây treo chính.\n【Đáp án】1",
      reference_jp:"電気テキスト p.77",
      explanation_vi:"Nhận dạng dây treo phức hợp bằng tầng dây treo phụ nằm giữa dây treo chính và dây tiếp xúc."
    }),
    ex({type:"exercise",number:96,
      question_jp:"図に示す電車線路のシンプル架線において、機材イ、ロの名称の組合せとして、適当なものはどれか。",
      question_vi:"Trong hệ treo đơn giản của dây tiếp xúc đường sắt điện như hình, tổ hợp tên của bộ phận イ và ロ nào đúng?",
      choices_jp:["イ：ちょう架線　ロ：ハンガ","イ：ちょう架線　ロ：ドロッパ","イ：補助ちょう架線　ロ：ハンガ","イ：補助ちょう架線　ロ：ドロッパ"],
      choices_vi:["イ: dây treo chính / ロ: dây treo đứng.","イ: dây treo chính / ロ: dây thả.","イ: dây treo phụ / ロ: dây treo đứng.","イ: dây treo phụ / ロ: dây thả."],
      figure_placeholder_jp:"図：シンプル架線。上部のちょう架線、下部のトロリ線、両者をつなぐハンガを示す。原本図を後で挿入。",
      solution_jp:"1. ちょう架線とは、架空電車線において、ハンガを介してトロリ線を、吊り上げるために電車線の最上部に架設される電線である。ハンガとは、トロリ線をちょう架線または補助ちょう架線に吊り上げるための金具である。\n【正解】1",
      solution_vi:"イ là ちょう架線 (dây treo chính) ở phía trên; ロ là ハンガ nối dây treo chính với dây tiếp xúc.\n【Đáp án】1",
      reference_jp:"電気テキスト p.77, p.80",
      explanation_vi:"Trong hệ dây treo đơn không có dây treo phụ; dây tiếp xúc được treo trực tiếp từ dây treo chính bằng dây treo đứng."
    })
  ]},

  71: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:97,
      question_jp:"電車線において、速度100km/h以上の運転区間に用いられるちょう架方式として、不適当なものはどれか。",
      question_vi:"Trong dây tiếp xúc đường sắt điện, phương thức treo nào không phù hợp cho đoạn khai thác ở tốc độ từ 100 km/h trở lên?",
      choices_jp:["ヘビーシンプルカテナリ式","コンパウンドカテナリ式","ツインシンプルカテナリ式","直接ちょう架式"],
      choices_vi:["Hệ dây treo đơn tăng cường.","Hệ dây treo phức hợp.","Hệ dây treo đơn kép.","Treo trực tiếp."],
      figure_placeholder_jp:null,
      solution_jp:"4. 直接ちょう架式は、ちょう架線を設けず、支持点で直接トロリ線を吊り上げる形式のものでトロリ線の弛みと高低変化が大きいことから、路面電車など比較的低速での運転のときに採用される。\n【正解】4",
      solution_vi:"Treo trực tiếp không có dây treo chính; dây tiếp xúc võng và thay đổi cao độ lớn nên chủ yếu dùng cho phương tiện tốc độ thấp như xe điện mặt đất. Vì vậy không phù hợp với đoạn từ 100 km/h trở lên.\n【Đáp án】4",
      reference_jp:"電気テキスト p.77",
      explanation_vi:"Tốc độ cao cần hệ dây treo có đặc tính thu dòng ổn định hơn; phương thức treo trực tiếp không đáp ứng tốt."
    }),
    ex({type:"exercise",number:98,
      question_jp:"図に示すトンネル内の照明方式のうちプロビーム照明方式として、適当なものはどれか。",
      question_vi:"Trong các sơ đồ chiếu sáng đường hầm, hình nào là phương thức chiếu sáng pro-beam?",
      choices_jp:["図1","図2","図3","図4"],
      choices_vi:["Hình 1","Hình 2","Hình 3","Hình 4"],
      figure_placeholder_jp:"図1〜4：トンネル天井の灯具から路面への配光方向を示す。原本図を後で挿入。",
      solution_jp:"4. プロビーム照明方式は、交通方向に配光を持っていて先行車の背面の視認性を改善させる目的で、トンネルの入口、出口照明に採用することができる。\n【正解】4",
      solution_vi:"Pro-beam phân bố ánh sáng theo cùng chiều giao thông để cải thiện khả năng nhìn thấy phía sau xe phía trước, và có thể dùng tại khu vực cửa vào/cửa ra hầm. Hình 4 đúng.\n【Đáp án】4",
      reference_jp:"電気テキスト p.94（参考）",
      explanation_vi:"Điểm nhận dạng là hướng chiếu thuận theo chiều xe chạy."
    })
  ]},

  72: { sectionCode:"ch2-7", content_blocks:[
    ex({type:"exercise",number:99,
      question_jp:"建物内の給水設備における水道直結増圧方式に関する記述として、最も不適当なものはどれか。",
      question_vi:"Trong hệ thống cấp nước tòa nhà theo phương thức tăng áp nối trực tiếp với mạng nước, phát biểu nào không phù hợp nhất?",
      choices_jp:["給水本管の水圧変動に応じて給水圧力が変化する。","給水本管の断水時には給水が不可能である。","増圧ポンプ、逆流防止機器等からなる増圧給水設備が必要である。","高置水槽方式と比較して水質汚染の可能性が低くなる。"],
      choices_vi:["Áp lực cấp nước thay đổi theo biến động áp lực của ống cấp nước chính.","Khi đường ống cấp nước chính bị cắt nước thì không thể cấp nước.","Cần thiết bị tăng áp gồm bơm tăng áp, thiết bị chống chảy ngược, v.v.","Nguy cơ ô nhiễm chất lượng nước thấp hơn so với hệ bể nước trên cao."],
      figure_placeholder_jp:null,
      solution_jp:"1. 給水圧力は増圧給水ポンプにより制御されているので、給水圧力は水道本管の圧力影響をほとんど受けない。\n【正解】1",
      solution_vi:"Áp lực cấp nước được điều khiển bởi bơm tăng áp nên hầu như không chịu ảnh hưởng trực tiếp từ dao động áp lực của đường ống nước chính. Vì vậy phát biểu 1 là sai.\n【Đáp án】1",
      reference_jp:"電気テキスト p.161",
      explanation_vi:"Đặc trưng của 水道直結増圧方式 là dùng bơm tăng áp để giữ áp lực đầu ra ổn định hơn."
    }),
    ex({type:"exercise",number:100,
      question_jp:"図に示す部屋の用途と換気方式の組合せとして、不適当なものはどれか。",
      question_vi:"Trong các tổ hợp giữa công năng phòng và phương thức thông gió như hình, tổ hợp nào không phù hợp?",
      choices_jp:["図1：蓄電池室","図2：ボイラ室","図3：自家発電機室","図4：便所"],
      choices_vi:["Hình 1: phòng ắc quy.","Hình 2: phòng nồi hơi.","Hình 3: phòng máy phát điện tự dùng.","Hình 4: nhà vệ sinh."],
      figure_placeholder_jp:"図1〜4：給気送風機・排気送風機・給気口・排気口の組合せによる換気方式。原本図を後で挿入。",
      solution_jp:"4. 便所は臭気の除去が目的であり、一般的に排気送風機による選択肢1.の第3種換気方式が採用される。\n【正解】4",
      solution_vi:"Nhà vệ sinh cần loại bỏ mùi nên thông thường dùng thông gió loại 3: hút cưỡng bức bằng quạt xả và cấp khí tự nhiên. Hình 4 là kiểu cấp cưỡng bức nên không phù hợp.\n【Đáp án】4",
      reference_jp:"電気テキスト p.160",
      explanation_vi:"Nhớ theo mục đích: phòng vệ sinh ưu tiên tạo áp âm và hút mùi ra ngoài."
    })
  ]}
};

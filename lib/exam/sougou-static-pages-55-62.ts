import { ex, type StaticSougouPageSeed } from "./sougou-static-common";

export const STATIC_SOUGOU_PAGES_55_62: Record<number, StaticSougouPageSeed> = {
  55: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:67,
      question_jp:"変電所で用いるガス遮断器に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về máy cắt khí dùng tại trạm biến áp, phát biểu nào không phù hợp?",
      choices_jp:["アークによる絶縁油分解ガスの吹付け力により遮断する。","アークによる接触子の損耗が少ない。","開閉時の衝撃音が空気遮断器より小さい。","高電圧、大容量用として多く用いられる。"],
      choices_vi:["Dùng lực thổi của khí sinh ra do hồ quang phân hủy dầu cách điện để cắt mạch.","Độ mòn tiếp điểm do hồ quang nhỏ.","Tiếng va đập khi đóng cắt nhỏ hơn máy cắt không khí.","Được dùng nhiều cho điện áp cao và công suất cắt lớn."],
      figure_placeholder_jp:null,
      solution_jp:"1. 変電所などで使用される遮断器は、消弧原理により分類され、SF₆（六ふっ化硫黄）ガスを使用した遮断器をガス遮断器という。アークによる絶縁油分解ガスの吹付け力により遮断する遮断器は、油遮断器の消弧原理である。\n【正解】1",
      solution_vi:"Máy cắt khí GCB sử dụng khí SF₆ để dập hồ quang. Cơ chế 'hồ quang phân hủy dầu cách điện rồi dùng khí sinh ra để thổi dập hồ quang' là nguyên lý của máy cắt dầu OCB, không phải GCB.\n【Đáp án】1",
      reference_jp:"電気テキスト p.29, p.126",
      explanation_vi:"Phân biệt theo môi chất dập hồ quang: GCB dùng SF₆; OCB dùng dầu; ACB dùng không khí; VCB dùng chân không."
    }),
    ex({type:"exercise",number:68,
      question_jp:"変電所に設置される機器に関する記述として、最も不適当なものはどれか。",
      question_vi:"Trong các phát biểu về thiết bị lắp đặt tại trạm biến áp, phát biểu nào không phù hợp nhất?",
      choices_jp:["電力用コンデンサは、系統の有効電力を調整するために用いられる。","計器用変圧器は、高電圧を低電圧に変換するために用いられる。","変圧器のコンサベータは、絶縁油の劣化防止のために用いられる。","避雷器は、非直線抵抗特性に優れた酸化亜鉛形のものが多く使用されている。"],
      choices_vi:["Tụ điện lực dùng để điều chỉnh công suất tác dụng của hệ thống.","Máy biến điện áp đo lường dùng để biến điện áp cao thành điện áp thấp.","Bình dầu phụ conservator của máy biến áp dùng để hạn chế lão hóa dầu cách điện.","Chống sét van loại oxit kẽm có đặc tính điện trở phi tuyến tốt được sử dụng rộng rãi."],
      figure_placeholder_jp:null,
      solution_jp:"1. 電力用コンデンサは、系統の無効電力を極力少なくなるように調整して、送電線損失を軽減させるとともに、送電容量の確保および系統の電圧変動の抑制を図るものである。したがって、無効電力の調整に用いるもので、有効電力の調整ではない。\n【正解】1",
      solution_vi:"Tụ điện lực được dùng để bù và điều chỉnh công suất phản kháng, qua đó giảm dòng, giảm tổn thất đường dây, tăng khả năng truyền tải và hạn chế dao động điện áp. Nó không dùng để điều chỉnh công suất tác dụng.\n【Đáp án】1",
      reference_jp:"電気テキスト p.52, p.53",
      explanation_vi:"Mấu chốt là phân biệt 有効電力 (công suất tác dụng) với 無効電力 (công suất phản kháng). Tụ bù tác động chủ yếu lên công suất phản kháng."
    })
  ]},

  56: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:69,
      question_jp:"架空送電線路のねん架の目的として、適当なものはどれか。",
      question_vi:"Mục đích đúng của việc hoán vị pha (ねん架) trên đường dây truyền tải trên không là gì?",
      choices_jp:["電線の振動エネルギーを吸収する。","雷の異常電圧から電線を保護する。","電線のインダクタンスを減少させ静電容量を増加させる。","各相の作用インダクタンス、作用静電容量を平均させる。"],
      choices_vi:["Hấp thụ năng lượng dao động của dây dẫn.","Bảo vệ dây dẫn khỏi quá điện áp do sét.","Làm giảm điện cảm và tăng điện dung của dây.","Làm trung bình điện cảm tác dụng và điện dung tác dụng của các pha."],
      figure_placeholder_jp:null,
      solution_jp:"1. ダンパ、アーマロッド等の電線の振動防止用付属品の内容である。\n2. 架空地線、アークホーン等の耐雷設備の内容である。\n3. 多導体方式の内容である。\n4. 送電線路のある区間を3等分し、各相の電線の位置が一巡するように入れ替えるねん架を行うことにより、各相の作用インダクタンスや作用静電容量の不平衡を低減させ、通信線への誘導障害を抑制している。\n【正解】4",
      solution_vi:"Hoán vị pha là đổi vị trí ba pha theo từng đoạn sao cho sau một chu kỳ mỗi pha đã lần lượt đi qua các vị trí hình học khác nhau. Nhờ đó điện cảm và điện dung tác dụng giữa các pha được cân bằng hơn, đồng thời giảm ảnh hưởng cảm ứng lên đường dây thông tin.\n【Đáp án】4",
      reference_jp:"電気テキスト 1→p.61　2→p.63　3→p.59　4→p.66",
      explanation_vi:"Các phương án còn lại lần lượt mô tả thiết bị chống rung, chống sét và đường dây bó nhiều sợi; chúng không phải mục đích của ねん架."
    }),
    ex({type:"exercise",number:70,
      question_jp:"架空送電線路に関する次の記述に該当する機材の名称として、最も適当なものはどれか。\n「電線の周りに数本巻き付けて、電線が風の流れと定常的な共振状態になることを防止し、電線特有の風音の発生を抑制する。」",
      question_vi:"Thiết bị nào phù hợp nhất với mô tả: quấn vài thanh quanh dây dẫn để ngăn dây rơi vào trạng thái cộng hưởng ổn định với luồng gió và hạn chế tiếng gió đặc trưng của dây?",
      choices_jp:["スパイラルロッド","アーマロッド","スペーサ","ダンパ"],
      choices_vi:["Thanh xoắn chống rung.","Thanh giáp bảo vệ.","Thanh định khoảng.","Bộ giảm chấn."],
      figure_placeholder_jp:null,
      solution_jp:"2. アーマロッドは、懸垂クランプ部における電線の振動疲労による素線切れ防止対策および事故電流による溶断防止策として、電線と同じ材質の金属を電線に巻き付けて補強するものである。一般にあらかじめ電線に沿うように整形されたプレホームドアーマロッドが使用されている。\n3. スペーサは、多導体の電線相互間の間隔を保持するもので、強風による電線相互の接近、接触や、事故時の短絡電流による電磁吸引力による電線損傷を防止することを目的としている。\n4. ダンパは、微風振動による電線の疲労、破損などを防止する目的で電線の振動エネルギーを吸収させるものとして電線に取り付けられる。種類としては、電線把持部近くの振幅が最大となる箇所に取付ける重錘式ダンパと、電線把持部近くの電線に添わせる添線式ダンパがある。\n【正解】1",
      solution_vi:"Mô tả này là スパイラルロッド: quấn dạng xoắn quanh dây để làm thay đổi đặc tính khí động, tránh cộng hưởng ổn định với gió và giảm tiếng ồn do gió. Thanh giáp bảo vệ chủ yếu gia cường vùng kẹp; thanh định khoảng giữ khoảng cách dây bó; bộ giảm chấn hấp thụ năng lượng rung.\n【Đáp án】1",
      reference_jp:"電気テキスト p.61",
      explanation_vi:"Cùng liên quan rung nhưng chức năng khác nhau: thanh xoắn chống rung làm thay đổi đặc tính khí động; bộ giảm chấn hấp thụ năng lượng; thanh giáp bảo vệ gia cường; thanh định khoảng giữ khoảng cách."
    })
  ]},

  57: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:71,
      question_jp:"架空送電線における電線振動対策に関する次の文章中、［イ］［ロ］に当てはまる語句の組合せとして、適当なものはどれか。\n「電線振動対策には、電線支持点のクランプ付近で電線を補強する［イ］や、振動エネルギーを吸収する［ロ］などがある。」",
      question_vi:"Trong biện pháp chống rung dây dẫn trên đường dây truyền tải trên không, tổ hợp nào đúng cho [イ] thiết bị gia cường dây gần kẹp đỡ và [ロ] thiết bị hấp thụ năng lượng rung?",
      choices_jp:["イ：アーマロッド　ロ：ダンパ","イ：アーマロッド　ロ：スペーサ","イ：アークホーン　ロ：ダンパ","イ：アークホーン　ロ：スペーサ"],
      choices_vi:["[イ] Thanh giáp bảo vệ / [ロ] Bộ giảm chấn.","[イ] Thanh giáp bảo vệ / [ロ] Thanh định khoảng.","[イ] Sừng phóng điện / [ロ] Bộ giảm chấn.","[イ] Sừng phóng điện / [ロ] Thanh định khoảng."],
      figure_placeholder_jp:null,
      solution_jp:"電線振動による断線を防ぐ方法としては、クランプ近くの電線を補強するアーマロッド、適当な制動力をつけて振動を防止するダンパなどがある。\n【正解】1",
      solution_vi:"Thanh giáp bảo vệ được quấn quanh dây tại vùng gần kẹp để gia cường và giảm hư hỏng do rung. Bộ giảm chấn tạo lực cản và hấp thụ năng lượng rung. Vì vậy cặp đúng là アーマロッド + ダンパ.\n【Đáp án】1",
      reference_jp:"電気テキスト p.61",
      explanation_vi:"Sừng phóng điện là thiết bị liên quan bảo vệ hồ quang/sét; thanh định khoảng dùng cho dây bó. Hai thiết bị đó không phù hợp với hai chức năng được mô tả."
    }),
    ex({type:"exercise",number:72,
      question_jp:"架空送電線路に取り付けるダンパの目的として、適当なものはどれか。",
      question_vi:"Mục đích đúng của bộ giảm chấn lắp trên đường dây truyền tải trên không là gì?",
      choices_jp:["電線に着雪しにくくする。","雷によるフラッシオーバを防止する。","風による電線の振動疲労を防止する。","風による電線の騒音発生を防止する。"],
      choices_vi:["Làm dây khó bám tuyết.","Ngăn flashover do sét.","Ngăn mỏi rung của dây do gió.","Ngăn tiếng ồn của dây do gió."],
      figure_placeholder_jp:null,
      solution_jp:"3. 微風振動により起因する電線の疲労、損傷などを防止するためダンパが取り付けられる。重錘式ダンパ（トーショナルダンパなど）と添線式ダンパ（ベートダンパなど）がある。\n【正解】3",
      solution_vi:"Bộ giảm chấn được lắp để hấp thụ rung do gió nhẹ kéo dài, tránh mỏi và hư hỏng dây dẫn. Đây là chức năng chống rung cơ học, không phải chống sét, chống tuyết hay chủ yếu giảm tiếng ồn.\n【Đáp án】3",
      reference_jp:"電気テキスト p.61",
      explanation_vi:"Từ khóa của bộ giảm chấn trong đề là 微風振動 và 疲労・損傷."
    })
  ]},

  58: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:73,
      question_jp:"塩害地域における架空送電線路の塩害対策に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các biện pháp chống tác hại của muối cho đường dây truyền tải trên không ở vùng nhiễm mặn, phát biểu nào không phù hợp?",
      choices_jp:["懸垂がいしの個数を増加する。","長幹がいしやスモッグがいしを採用する。","がいしをV吊りにする。","シリコンコンパウンドをがいしに塗布する。"],
      choices_vi:["Tăng số lượng cách điện treo.","Dùng sứ thanh dài hoặc sứ chống ô nhiễm muối/khói.","Treo cách điện theo dạng chữ V.","Phủ hợp chất silicone lên cách điện."],
      figure_placeholder_jp:null,
      solution_jp:"3. がいしのV吊りは、架空送電の懸垂鉄塔で用いられる方法で、懸垂個所でのがいしの横揺れを防ぎ、線下幅を節約し用地費の軽減を図る効果がある。塩害対策とは直接関係はない。\n【正解】3",
      solution_vi:"Treo chuỗi cách điện hình V chủ yếu hạn chế lắc ngang của chuỗi cách điện và giúp thu hẹp hành lang tuyến, không phải biện pháp trực tiếp chống nhiễm muối. Các biện pháp còn lại đều tăng khả năng chống bẩn/ẩm/muối của cách điện.\n【Đáp án】3",
      reference_jp:"電気テキスト p.62, p.65",
      explanation_vi:"Đề hỏi '塩害対策'. Nếu mục tiêu chính của biện pháp là cơ khí hoặc tiết kiệm hành lang tuyến thì không thuộc nhóm này."
    }),
    ex({type:"exercise",number:74,
      question_jp:"架空送配電線路のたるみD［m］を表す近似計算式として、正しいものはどれか。\nただし、S：径間長［m］、T：電線の水平張力［N］、W：電線の単位長さ当りの重量［N/m］",
      question_vi:"Công thức gần đúng nào đúng để tính độ võng D [m] của đường dây trên không? S là chiều dài nhịp, T là lực căng ngang, W là trọng lượng dây trên một đơn vị chiều dài.",
      choices_jp:["D=WS²/(4T)","D=W²S/(4T)","D=WS²/(8T)","D=W²S/(8T)"],
      choices_vi:["D = WS²/(4T).","D = W²S/(4T).","D = WS²/(8T).","D = W²S/(8T)."],
      figure_placeholder_jp:null,
      solution_jp:"たるみD［m］を表す式は、D=WS²/(8T)である。つまりたるみは電線の重さ（W）に比例し、径間（S）の2乗に比例、電線張力（T）に反比例する。\n【正解】3",
      solution_vi:"Công thức gần đúng của độ võng là D = WS²/(8T). Vì vậy độ võng tăng tuyến tính theo trọng lượng dây W, tăng theo bình phương chiều dài nhịp S và giảm khi lực căng ngang T tăng.\n【Đáp án】3",
      reference_jp:"電気テキスト p.64",
      explanation_vi:"Mẹo kiểm tra công thức: nhịp tăng gấp đôi thì độ võng tăng gấp 4; lực căng tăng gấp đôi thì độ võng còn một nửa."
    })
  ]},

  59: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:75,
      question_jp:"送配電線路の中性点接地方式のうち、1線地絡事故時に地絡保護継電器の動作が、最も確実なものはどれか。",
      question_vi:"Trong các phương thức nối đất điểm trung tính của lưới truyền tải/phân phối, phương thức nào giúp rơ-le bảo vệ chạm đất tác động chắc chắn nhất khi xảy ra chạm đất một pha?",
      choices_jp:["直接接地方式","高抵抗接地方式","消弧リアクトル接地方式","非接地方式"],
      choices_vi:["Nối đất trực tiếp.","Nối đất qua điện trở cao.","Nối đất qua cuộn kháng dập hồ quang.","Không nối đất."],
      figure_placeholder_jp:null,
      solution_jp:"1～4の接地方式のうち、直接接地方式が最も地絡故障電流が大きく、地絡保護継電器の動作が確実である。\n【正解】1",
      solution_vi:"Nối đất trực tiếp tạo dòng chạm đất lớn nhất trong bốn phương thức, vì vậy tín hiệu sự cố rõ và rơ-le bảo vệ chạm đất dễ tác động chắc chắn nhất.\n【Đáp án】1",
      reference_jp:"電気テキスト p.54～56",
      explanation_vi:"Đổi lại, dòng sự cố lớn cũng làm yêu cầu cắt và bảo vệ cao hơn. Câu này chỉ hỏi độ chắc chắn của rơ-le khi phát hiện sự cố."
    }),
    ex({type:"exercise",number:76,
      question_jp:"送配電線路の中性点接地方式のうち、非接地方式に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về phương thức trung tính không nối đất, phát biểu nào không phù hợp?",
      choices_jp:["1線地絡電流が小さい。","1線地絡時の健全相の対地電圧上昇が小さい。","直接接地方式に比べて、地絡事故の検出が困難である。","高圧配電系統に多く採用されている。"],
      choices_vi:["Dòng chạm đất một pha nhỏ.","Khi chạm đất một pha, điện áp pha lành so với đất tăng ít.","Khó phát hiện sự cố chạm đất hơn so với nối đất trực tiếp.","Được dùng nhiều trong lưới phân phối cao áp."],
      figure_placeholder_jp:null,
      solution_jp:"2. 中性点の接地を行わない非接地方式は、1線地絡時に対地充電電流の影響により健全相の対地電圧上昇が大きい。\n【正解】2",
      solution_vi:"Ở hệ thống không nối đất, dòng chạm đất một pha nhỏ nhưng điểm trung tính bị dịch chuyển, làm điện áp của hai pha lành so với đất tăng đáng kể. Vì vậy nói mức tăng này 'nhỏ' là sai.\n【Đáp án】2",
      reference_jp:"電気テキスト p.54～56",
      explanation_vi:"Đặc trưng phải nhớ: 非接地 = dòng chạm đất nhỏ nhưng điện áp pha lành đối đất tăng lớn và phát hiện sự cố khó hơn."
    })
  ]},

  60: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:77,
      question_jp:"遮断時に発生するアークを真空中に拡散させることにより消弧する方式の高圧交流遮断器として、適当なものはどれか。",
      question_vi:"Loại máy cắt AC cao áp nào dập hồ quang bằng cách khuếch tán hồ quang trong chân không?",
      choices_jp:["ACB","GCB","OCB","VCB"],
      choices_vi:["ACB – máy cắt không khí.","GCB – máy cắt khí.","OCB – máy cắt dầu.","VCB – máy cắt chân không."],
      figure_placeholder_jp:null,
      solution_jp:"1. ACBとは、気中遮断器（air circuit-breaker）のことであり、電路の開閉が大気中で行われるもので、周波数50Hzまたは60Hzの交流低圧および直流の電路に使用される。\n2. GCBとは、ガス遮断器（gas circuit-breaker）のことであり、SF₆ガスをアークに吹き付けて消弧するものである。\n3. OCBとは、油遮断器（oil circuit-breaker）のことであり、電路の開閉が油中で行われるもの。\n設問の記述は、4.のVCB（真空遮断器：vacuum circuit-breaker）である。\n【正解】4",
      solution_vi:"VCB dập hồ quang trong môi trường chân không. ACB dùng không khí, GCB dùng khí SF₆, OCB dùng dầu. Vì vậy mô tả của đề là VCB.\n【Đáp án】4",
      reference_jp:"電気テキスト p.29, p.126",
      explanation_vi:"Nhớ theo chữ cái đầu: A = không khí, G = khí, O = dầu, V = chân không."
    }),
    ex({type:"exercise",number:78,
      question_jp:"架空配電線路の保護に用いられる機器または装置として、不適当なものはどれか。",
      question_vi:"Thiết bị nào không phù hợp khi nói đến thiết bị bảo vệ dùng cho đường dây phân phối trên không?",
      choices_jp:["放電クランプ","遮断器","高圧カットアウト","自動電圧調整器"],
      choices_vi:["Kẹp phóng điện.","Máy cắt.","Cầu chì/cutout cao áp.","Bộ điều chỉnh điện áp tự động."],
      figure_placeholder_jp:null,
      solution_jp:"4. こう長が長く電圧降下が大きい配電線において、変電所の電圧調整だけでは需要家の電圧を許容電圧範囲内に保持することが困難なため、線路用電圧調整器（ステップ式自動電圧調整器）が使用され、変電所出口から末端に至る配電線路途中に施設される。したがって、自動電圧調整器は、各事故に対する保護機器ではない。\n【正解】4",
      solution_vi:"Bộ điều chỉnh điện áp tự động được lắp trên tuyến để bù sụt áp và giữ điện áp khách hàng trong phạm vi cho phép. Nó là thiết bị điều chỉnh điện áp, không phải thiết bị bảo vệ sự cố.\n【Đáp án】4",
      reference_jp:"電気テキスト p.38",
      explanation_vi:"Các thiết bị bảo vệ phản ứng với bất thường/sự cố; AVR/bộ điều chỉnh điện áp theo nấc chỉ duy trì mức điện áp."
    })
  ]},

  61: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:79,
      question_jp:"図においてP点の水平面照度E［lx］の値として、正しいものはどれか。\nただし、光源はP点の直上にある点光源とし、P方向の光度Iは160cdとする。",
      question_vi:"Trong hình, độ rọi trên mặt phẳng ngang tại điểm P, E [lx], bằng bao nhiêu? Nguồn sáng là nguồn điểm ngay phía trên P, cường độ sáng theo hướng P là I = 160 cd.",
      choices_jp:["5lx","10lx","20lx","40lx"],
      choices_vi:["5 lx.","10 lx.","20 lx.","40 lx."],
      figure_placeholder_jp:"点光源I=160cdがP点の直上4mにあり、P点の水平面との角度は90°。原本図を後で挿入。",
      solution_jp:"光源の形がきわめて小さいものを点光源といい、設問図のように点光源から距離r［m］の点Pの水平面照度E［lx］は、光源のP点方向の光度I［cd］に比例し、距離r［m］の2乗に反比例する。これを距離の逆2乗の法則といい、E=I/r²［lx］で表す。\nよって、E=160/4²=10lx となる。\n【正解】2",
      solution_vi:"Với nguồn điểm chiếu vuông góc xuống mặt phẳng tại P, áp dụng định luật nghịch đảo bình phương khoảng cách: E = I/r². Thay I = 160 cd, r = 4 m: E = 160/16 = 10 lx.\n【Đáp án】2",
      reference_jp:"電気テキスト p.32",
      explanation_vi:"Khoảng cách tăng gấp đôi thì độ rọi chỉ còn 1/4. Ở đây góc tới là 0° so với pháp tuyến nên không cần thêm hệ số cos."
    })
  ]},

  62: { sectionCode:"ch2-6", content_blocks:[
    ex({type:"exercise",number:80,
      question_jp:"低圧三相誘導電動機の保護に用いられる3Eリレーの保護目的の組合せとして、正しいものはどれか。",
      question_vi:"Tổ hợp chức năng bảo vệ nào đúng đối với rơ-le 3E dùng bảo vệ động cơ cảm ứng ba pha hạ áp?",
      choices_jp:["短絡保護、欠相保護、過負荷保護","反相保護、欠相保護、過負荷保護","反相保護、欠相保護、短絡保護","反相保護、短絡保護、過負荷保護"],
      choices_vi:["Ngắn mạch + mất pha + quá tải.","Đảo pha + mất pha + quá tải.","Đảo pha + mất pha + ngắn mạch.","Đảo pha + ngắn mạch + quá tải."],
      figure_placeholder_jp:null,
      solution_jp:"1Eリレーの保護目的は、過負荷保護で、一般に熱動形保護継電器が用いられ、欠相保護、反相保護はできない。\n2Eリレーの保護目的は、過負荷保護、欠相保護で、熱動形保護継電器又は静止形保護継電器が用いられ、反相保護はできない。\n3Eリレーの保護目的は、過負荷保護、欠相保護、反相保護で、静止形保護継電器が用いられ、水中ポンプなどで入力電圧が反相（逆相）により回転方向が逆転して大きな問題となる場合の保護として使用される。\n【正解】2",
      solution_vi:"3E bao gồm ba chức năng: bảo vệ quá tải, mất pha và đảo thứ tự pha. Bảo vệ ngắn mạch không phải chức năng 3E. Vì vậy tổ hợp đúng là 反相保護 + 欠相保護 + 過負荷保護.\n【Đáp án】2",
      reference_jp:"電気テキスト p.140",
      explanation_vi:"Nhớ theo cấp: 1E = quá tải; 2E = quá tải + mất pha; 3E = thêm đảo pha."
    }),
    ex({type:"exercise",number:81,
      question_jp:"屋内に施設する電動機の過負荷保護を目的に設置する保護装置として、不適当なものはどれか。\nただし、0.2kW以下のものを除く。",
      question_vi:"Thiết bị nào không phù hợp để bảo vệ quá tải cho động cơ lắp trong nhà? Không xét động cơ công suất 0,2 kW trở xuống.",
      choices_jp:["電磁開閉器（電磁接触器とサーマルリレーを組合せたもの）","電動機用ヒューズ（タイムラグヒューズ）","電動機保護用配線用遮断器","不足電圧継電器"],
      choices_vi:["Khởi động từ điện từ gồm bộ tiếp xúc điện từ và rơ-le nhiệt.","Cầu chì động cơ loại tác động chậm.","MCCB/CB chuyên bảo vệ động cơ.","Rơ-le thấp áp."],
      figure_placeholder_jp:null,
      solution_jp:"4. 不足電圧継電器は、電圧が低下した時の機械の保護に用いるものであり、電動機の過負荷保護ではない。\n【正解】4",
      solution_vi:"Rơ-le thấp áp tác động khi điện áp nguồn giảm để bảo vệ thiết bị khỏi tình trạng điện áp thấp. Nó không phải phần tử dùng để phát hiện và bảo vệ quá tải của động cơ.\n【Đáp án】4",
      reference_jp:"電気テキスト p.103, p.139, p.140",
      explanation_vi:"Quá tải động cơ thường được phát hiện bằng dòng/nhiệt; bảo vệ thấp áp giám sát điện áp nên là chức năng khác."
    })
  ]}
};

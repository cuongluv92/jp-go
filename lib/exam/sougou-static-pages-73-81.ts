import { ex, type StaticSougouPageSeed } from "./sougou-static-common";

export const STATIC_SOUGOU_PAGES_73_81: Record<number, StaticSougouPageSeed> = {
  73: { sectionCode:"ch2-7", content_blocks:[
    ex({type:"exercise",number:101,
      question_jp:"コンクリートに関する用語として、関係のないものはどれか。",
      question_vi:"Thuật ngữ nào sau đây không liên quan đến bê tông?",
      choices_jp:["ブリージング","ワーカビリティ","ヒービング","スランプ"],
      choices_vi:["Bleeding.","Workability.","Heaving.","Slump."],
      figure_placeholder_jp:null,
      solution_jp:"3. ヒービングとは軟弱粘性土を掘削する時、矢板背面の土の重量によって掘削底面内部に滑り破壊が生じ、底面が押し上げられてふくれ上がる現象。コンクリートの用語ではない。\n【正解】3",
      solution_vi:"Heaving là hiện tượng khi đào trong đất sét mềm, do trọng lượng đất phía sau tường ván gây phá hoại trượt ở đáy hố và làm đáy bị đẩy trồi lên. Đây không phải thuật ngữ của bê tông.\n【Đáp án】3",
      reference_jp:"電気テキスト p.172, p.174, p.175",
      explanation_vi:"Ba thuật ngữ còn lại đều là khái niệm liên quan trực tiếp đến tính chất hoặc trạng thái của bê tông."
    }),
    ex({type:"exercise",number:102,
      question_jp:"鉄筋コンクリート構造に関する記述として、最も不適当なものはどれか。",
      question_vi:"Trong các phát biểu về kết cấu bê tông cốt thép, phát biểu nào không phù hợp nhất?",
      choices_jp:["生コンクリートの軟らかさを表すスランプは、その数値が大きいほど軟らかい。","コンクリートの中性化は、鉄筋の腐食防止に効果がある。","コンクリートと鉄筋の付着強度は、丸鋼より異形鉄筋を用いた方が大きい。","柱のコンクリートかぶり厚さとは、帯筋表面からコンクリート表面までの最短距離をいう。"],
      choices_vi:["Giá trị slump của bê tông tươi càng lớn thì bê tông càng mềm.","Hiện tượng trung tính hóa bê tông có tác dụng ngăn ăn mòn cốt thép.","Lực bám dính giữa bê tông và cốt thép lớn hơn khi dùng thép gân so với thép tròn trơn.","Chiều dày lớp bê tông bảo vệ cột là khoảng cách ngắn nhất từ bề mặt đai thép đến bề mặt bê tông."],
      figure_placeholder_jp:null,
      solution_jp:"2. 中性化とは、一般に空気中の二酸化炭素の作用を受けてコンクリートのアルカリ性が低下する現象である。これがコンクリートの鋼材位置まで達すると、鋼材腐食が生じやすくなる。\n【正解】2",
      solution_vi:"Trung tính hóa là hiện tượng tính kiềm của bê tông giảm do tác dụng của CO₂ trong không khí. Khi vùng trung tính hóa tiến tới vị trí cốt thép, khả năng ăn mòn thép tăng lên. Vì vậy phương án 2 là sai.\n【Đáp án】2",
      reference_jp:"電気テキスト p.174〜176",
      explanation_vi:"Bê tông có tính kiềm giúp bảo vệ cốt thép; trung tính hóa làm mất dần lớp bảo vệ thụ động này."
    }),
    ex({type:"exercise",number:103,
      question_jp:"鉄筋コンクリート構造に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về kết cấu bê tông cốt thép, phát biểu nào không phù hợp?",
      choices_jp:["コンクリートはアルカリ性なので、鉄筋の腐食を防ぐ。","鉄筋には、主として異形鉄筋が使用されている。","コンクリートの圧縮強度と引張強度は、ほぼ等しい。","コンクリートと鉄筋の線膨張係数は、ほぼ等しい。"],
      choices_vi:["Bê tông có tính kiềm nên giúp ngăn ăn mòn cốt thép.","Cốt thép chủ yếu dùng thép gân.","Cường độ nén và cường độ kéo của bê tông gần như bằng nhau.","Hệ số giãn nở dài của bê tông và thép gần như bằng nhau."],
      figure_placeholder_jp:null,
      solution_jp:"3. コンクリートは、引張りに弱く、圧縮に強い。引張強度は、圧縮強度の1/10程度である。\n【正解】3",
      solution_vi:"Bê tông mạnh về nén nhưng yếu về kéo; cường độ kéo chỉ khoảng 1/10 cường độ nén. Vì vậy nói hai giá trị gần bằng nhau là sai.\n【Đáp án】3",
      reference_jp:"電気テキスト p.174",
      explanation_vi:"Đây là lý do cốt thép được bố trí để chịu kéo trong kết cấu bê tông cốt thép."
    })
  ]},

  74: { sectionCode:"ch2-7", content_blocks:[
    ex({type:"exercise",number:104,
      question_jp:"コンクリートの硬化中の養生に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về bảo dưỡng bê tông trong quá trình đông cứng, phát biểu nào không phù hợp?",
      choices_jp:["日光、風雨などに対してコンクリートの露出面を保護する。","衝撃及び荷重を加えないようにする。","所定の温度に保つ。","充分に乾燥した状態に保つ。"],
      choices_vi:["Bảo vệ bề mặt bê tông lộ ra khỏi nắng, gió, mưa, v.v.","Không để bê tông chịu va đập hoặc tải trọng.","Duy trì ở nhiệt độ quy định.","Giữ bê tông ở trạng thái khô hoàn toàn."],
      figure_placeholder_jp:null,
      solution_jp:"4. コンクリートの養生は、水和反応に必要な水分が不足しないように湿潤に保つことが大切で、決して乾燥させてはならない。\n【正解】4",
      solution_vi:"Trong giai đoạn bảo dưỡng phải giữ đủ độ ẩm để phản ứng thủy hóa tiếp tục; không được để bê tông bị khô. Vì vậy phương án 4 là sai.\n【Đáp án】4",
      reference_jp:"電気テキスト p.176",
      explanation_vi:"Từ khóa: 養生 = bảo dưỡng, mục tiêu chính là giữ ẩm và điều kiện nhiệt độ thích hợp."
    }),
    ex({type:"exercise",number:105,
      question_jp:"建設機械とその作業の組合せとして、不適当なものはどれか。",
      question_vi:"Tổ hợp nào giữa máy xây dựng và công việc của nó là không phù hợp?",
      choices_jp:["バックホウ―掘削","ブレーカ―削岩","モータグレーダ―整地","ロードローラ―運搬"],
      choices_vi:["Backhoe — đào đất.","Breaker — phá đá.","Motor grader — san nền.","Road roller — vận chuyển."],
      figure_placeholder_jp:null,
      solution_jp:"4. ロードローラ……土工事や道路工事などで充填材の圧締締固め、地表面の平滑硬化作業に使用する転圧機械である。転圧輪は鋳鉄製または鋼板製で車輪の配置によって2軸3輪のマカダム形と2軸および3軸式のタンデム形の2種がある。運搬には使われない。\n【正解】4",
      solution_vi:"Road roller là máy lu dùng để đầm chặt vật liệu và làm phẳng/bền bề mặt trong công tác đất và đường; không phải máy vận chuyển.\n【Đáp án】4",
      reference_jp:"電気テキスト p.168〜170",
      explanation_vi:"Phân biệt theo chức năng: backhoe đào, breaker phá đá, grader san, roller lu lèn."
    }),
    ex({type:"exercise",number:106,
      question_jp:"土木工事における山留め工法として、不適当なものはどれか。",
      question_vi:"Phương pháp nào không phải là phương pháp chống giữ đất (山留め) trong công tác xây dựng dân dụng?",
      choices_jp:["親ぐい横矢板工法","シートパイル工法","場所打ち連続壁工法","ウェルポイント工法"],
      choices_vi:["Cọc H + ván ngang.","Cừ ván thép.","Tường liên tục đổ tại chỗ.","Well point."],
      figure_placeholder_jp:null,
      solution_jp:"4. ウェルポイント工法は、強制排水法の一つであり、真空ポンプの作動により強制的に土中の地下水を集水してくみ出し、それを渦巻きポンプにより外部へ排水する工法である。山留め工法ではない。\n【正解】4",
      solution_vi:"Well point là phương pháp hạ nước ngầm/cưỡng bức thoát nước bằng bơm chân không và bơm ly tâm, không phải phương pháp chống giữ thành đất.\n【Đáp án】4",
      reference_jp:"電気テキスト p.172（参考）",
      explanation_vi:"Ba phương án đầu tạo kết cấu chống giữ đất; well point xử lý nước ngầm."
    })
  ]},

  75: { sectionCode:"ch2-7", content_blocks:[
    ex({type:"exercise",number:107,
      question_jp:"図に示す、山留め支保工に関する各部の組合せとして、適当なものはどれか。",
      question_vi:"Trong hình hệ chống giữ đất, tổ hợp tên bộ phận イ và ロ nào đúng?",
      choices_jp:["イ：腹起し　ロ：切梁","イ：腹起し　ロ：火打ち","イ：横矢板　ロ：切梁","イ：横矢板　ロ：火打ち"],
      choices_vi:["イ: waler / ロ: strut.","イ: waler / ロ: giằng chéo góc.","イ: ván ngang / ロ: strut.","イ: ván ngang / ロ: giằng chéo góc."],
      figure_placeholder_jp:"図：山留め支保工。イは土留め壁に沿う腹起し、ロは隅部の火打ちを示す。原本図を後で挿入。",
      solution_jp:"2. 腹起しは、土留め壁から荷重を均等に受け、これを切梁、土留めアンカーもしくはタイロッドに平均して伝達するもので、火打ちは、腹起しの支間および切梁の座屈長を短くするために用いられる。イが腹起し、ロが火打ちである。\n【正解】2",
      solution_vi:"Waler (腹起し) nhận tải từ tường giữ đất và truyền đều sang strut/anchor/tie rod. 火打ち là giằng chéo giúp rút ngắn nhịp của waler và chiều dài mất ổn định của strut. Vì vậy イ = 腹起し, ロ = 火打ち.\n【Đáp án】2",
      reference_jp:"電気テキスト p.172",
      explanation_vi:"Nhìn vị trí: thanh chạy dọc theo tường là 腹起し; thanh chéo ở góc là 火打ち."
    }),
    ex({type:"exercise",number:108,
      question_jp:"地中電線路の埋設を開削工法で施工する場合、土留めの特徴に関する次の記述に該当する工法として、最も適当なものはどれか。\n「良質地盤における標準工法として広く用いられているが、遮水性がよくないこと、掘削底面以下の根入れ部分の連続性が保たれないこと等のため、地下水位の高い地盤や軟弱な地盤などでは適さない。」",
      question_vi:"Khi thi công cáp ngầm bằng phương pháp đào mở, phương pháp chống đất nào phù hợp với mô tả: được dùng rộng rãi làm phương pháp tiêu chuẩn ở nền đất tốt, nhưng khả năng chắn nước kém và phần chôn dưới đáy đào không liên tục nên không phù hợp nơi mực nước ngầm cao hoặc đất yếu?",
      choices_jp:["場所打ち杭工法","鋼管矢板土留め工法","鋼矢板土留め工法","親杭横矢板土留め工法"],
      choices_vi:["Cọc đổ tại chỗ.","Cừ ống thép.","Cừ ván thép.","Cọc H + ván ngang."],
      figure_placeholder_jp:null,
      solution_jp:"4. 親杭横矢板工法には、遮水性がなく、地下水位の高い現場には、不適切である（一般にH鋼と横矢板を使用）。\n【正解】4",
      solution_vi:"Phương pháp cọc H + ván ngang không có tính chắn nước tốt, nên không thích hợp nơi mực nước ngầm cao.\n【Đáp án】4",
      reference_jp:"電気テキスト p.172",
      explanation_vi:"Đặc trưng phân biệt là các ván ngang lắp giữa cọc không tạo thành màng chắn nước liên tục."
    })
  ]},

  76: { sectionCode:"ch2-7", content_blocks:[
    ex({type:"exercise",number:109,
      question_jp:"地中配電線路の掘削工事における土留め作業に関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về công tác chống giữ đất khi đào tuyến cáp phân phối ngầm, phát biểu nào không phù hợp?",
      choices_jp:["土留めの構造は、地質、地下水位などに適合したものとした。","土留め杭打ちの際、騒音、振動による公害を発生させないよう十分配慮した。","土留め材の取外しは、埋戻しを行いながら、周囲の地山をゆるめないように行った。","土留め及び周辺を点検したところ、掘削底面のふくれ上がりがみられたので、底面の突固めを行い、作業を継続した。"],
      choices_vi:["Kết cấu chống đất được chọn phù hợp địa chất và mực nước ngầm.","Khi đóng cọc chống đất đã chú ý tránh gây ô nhiễm tiếng ồn và rung.","Khi tháo vật liệu chống đất tiến hành đồng thời với lấp đất, tránh làm lỏng đất xung quanh.","Khi thấy đáy hố đào bị trồi lên, chỉ đầm chặt đáy rồi tiếp tục thi công."],
      figure_placeholder_jp:null,
      solution_jp:"4. 土留めを行っている間は、掘削底面のふくれ上がりについて定期的に点検し、もし異常が発見された場合は、ヒービング、ボイリング等に対する根本的な対策（矢板の根入れ、排水等）が必要である。底面の突固めだけでは危険である。\n【正解】4",
      solution_vi:"Nếu xuất hiện hiện tượng trồi đáy phải xử lý nguyên nhân như heaving/boiling bằng biện pháp căn bản: tăng chiều chôn cừ, thoát nước, v.v. Chỉ đầm đáy rồi tiếp tục là nguy hiểm.\n【Đáp án】4",
      reference_jp:"電気テキスト p.172, p.173",
      explanation_vi:"Dấu hiệu đáy hố trồi là cảnh báo mất ổn định địa kỹ thuật, không phải lỗi bề mặt có thể xử lý bằng đầm đơn giản."
    }),
    ex({type:"exercise",number:110,
      question_jp:"鉄道路線のカントに関する記述として、不適当なものはどれか。",
      question_vi:"Trong các phát biểu về cant (siêu cao) của đường sắt, phát biểu nào không phù hợp?",
      choices_jp:["カントは、曲線を通過する車両の外方向への転倒を防止するものである。","運行速度が同じであれば、曲線半径が小さいほどカントは大きい。","曲線半径が同じであれば、運行速度が速いほどカントは大きい。","カントは、左右レールの水平軸に対する傾斜角で表される。"],
      choices_vi:["Cant giúp ngăn xe bị lật ra phía ngoài khi qua đường cong.","Nếu tốc độ như nhau, bán kính cong càng nhỏ thì cant càng lớn.","Nếu bán kính cong như nhau, tốc độ càng cao thì cant càng lớn.","Cant được biểu diễn bằng góc nghiêng so với trục ngang của hai ray."],
      figure_placeholder_jp:null,
      solution_jp:"4. 鉄道の線路に関する用語は、JIS E 1001「鉄道―線路用語」に規定されており、カントについては、「曲線部における、外側レールと内側レールとの高低差」と定義されている。\n【正解】4",
      solution_vi:"Cant được định nghĩa là chênh lệch cao độ giữa ray ngoài và ray trong ở đoạn cong, không phải góc nghiêng của trục ngang hai ray.\n【Đáp án】4",
      reference_jp:"電気テキスト p.82",
      explanation_vi:"Cần nhớ định nghĩa JIS: カント = 高低差, tức chênh cao."
    })
  ]},

  77: { sectionCode:"ch2-7", content_blocks:[
    ex({type:"exercise",number:111,
      question_jp:"構内情報通信網（LAN）に関する次の記述に該当する機器として、最も適当なものはどれか。\n「UTPケーブルと光ファイバケーブル間での信号の変換を主たる機能とする装置」",
      question_vi:"Trong mạng LAN nội bộ, thiết bị nào phù hợp nhất với mô tả: thiết bị có chức năng chính chuyển đổi tín hiệu giữa cáp UTP và cáp quang?",
      choices_jp:["ルータ","リピータハブ","スイッチングハブ","メディアコンバータ"],
      choices_vi:["Router.","Repeater hub.","Switching hub.","Media converter."],
      figure_placeholder_jp:null,
      solution_jp:"1. ルータとは、ネットワーク上を流れるデータを他のネットワークに中継する機器で、OSI参照モデルでいう第3レイヤー（ネットワーク層）や第4レイヤー（トランスポート層）の一部のプロトコルを解析して、データの転送を行う装置のことである。ネットワーク層のアドレスを見て、どの経路を通して転送するべきかを判断する経路選択機能をもっている。\n2. リピータハブとは、複数のポートを持つマルチポートリピータのことである。伝送信号の再中継を行うもので、異なるケーブルメディアの相互接続や、同一メディアセグメントの距離の延長、接続端末数の増加に対応する装置である。\n3. スイッチングハブとは、レイヤ2スイッチとも呼ばれ、データフレームの中に格納されている宛先（MACアドレス）を読み取り、そのデータ端末が接続されているポートだけにデータを伝送するスイッチング機能を持つ装置のことで、無駄なトラフィックを抑え伝送スピードを向上させることができる。\n【正解】4",
      solution_vi:"Thiết bị thực hiện chuyển đổi môi trường truyền dẫn giữa UTP và cáp quang là media converter. Router xử lý định tuyến, repeater hub lặp tín hiệu, switching hub chuyển frame theo MAC.\n【Đáp án】4",
      reference_jp:"電気テキスト p.157",
      explanation_vi:"Từ khóa “UTPケーブルと光ファイバケーブル間での信号の変換” chỉ trực tiếp tới media converter."
    }),
    ex({type:"exercise",number:112,
      question_jp:"構内電気設備の配線用図記号と名称の組合せとして、「日本産業規格（JIS）」上、誤っているものはどれか。",
      question_vi:"Theo JIS, tổ hợp nào giữa ký hiệu trên bản vẽ điện nội bộ và tên thiết bị là sai?",
      choices_jp:["図記号1：分電盤","図記号2：制御盤","図記号3：OA盤","図記号4：配電盤"],
      choices_vi:["Ký hiệu 1: tủ phân điện.","Ký hiệu 2: tủ điều khiển.","Ký hiệu 3: tủ OA.","Ký hiệu 4: tủ phân phối điện."],
      figure_placeholder_jp:"図記号1〜4：分電盤、制御盤、OA盤、配電盤に関するJIS図記号。原本図を後で挿入。",
      solution_jp:"4. 配電盤の図記号は、長方形内に×印の図記号である。選択肢4の黒白に分かれた図記号は、警報盤の図記号である。\n【正解】4",
      solution_vi:"Ký hiệu của 配電盤 là hình chữ nhật có dấu × bên trong. Ký hiệu đen-trắng ở phương án 4 là ký hiệu của 警報盤 (tủ báo động), nên phương án 4 sai.\n【Đáp án】4",
      reference_jp:"電気テキスト p.119",
      explanation_vi:"Câu này cần nhận dạng hình ký hiệu JIS, vì tên gần giống nhau nhưng ký hiệu khác."
    })
  ]},

  78: { sectionCode:"ch2-7", content_blocks:[
    ex({type:"exercise",number:113,
      question_jp:"自動火災報知設備の配線用図記号と名称の組合せとして、「日本産業規格（JIS）」上、誤っているものはどれか。",
      question_vi:"Theo JIS, tổ hợp nào giữa ký hiệu bản vẽ và tên thiết bị của hệ thống báo cháy tự động là sai?",
      choices_jp:["図記号1：差動式スポット型感知器","図記号2：定温式スポット型感知器","図記号3：P型発信機","図記号4：警報ベル"],
      choices_vi:["Ký hiệu 1: đầu báo nhiệt vi sai dạng điểm.","Ký hiệu 2: đầu báo nhiệt cố định dạng điểm.","Ký hiệu 3: nút báo cháy loại P.","Ký hiệu 4: chuông báo động."],
      figure_placeholder_jp:"図記号1〜4：自動火災報知設備の感知器・発信機・警報ベルのJIS図記号。原本図を後で挿入。",
      solution_jp:"2. 定温式スポット型感知器の図記号は別の記号である。選択肢2の［S］を含む図記号は、煙感知器の図記号である。\n【正解】2",
      solution_vi:"Ký hiệu ở phương án 2 có chữ S là ký hiệu của đầu báo khói, không phải đầu báo nhiệt cố định dạng điểm.\n【Đáp án】2",
      reference_jp:"電気テキスト p.153",
      explanation_vi:"Chỉ cần nhận dạng chữ S trong ký hiệu là smoke detector (煙感知器)."
    }),
    ex({type:"exercise",number:114,
      question_jp:"設計図書として、「公共工事標準請負契約約款」上、不適当なものはどれか。",
      question_vi:"Theo Điều khoản hợp đồng tiêu chuẩn cho công trình công cộng, mục nào không thuộc hồ sơ thiết kế?",
      choices_jp:["図面","仕様書","施工計画書","現場説明に対する質問回答書"],
      choices_vi:["Bản vẽ.","Đặc tả kỹ thuật.","Kế hoạch thi công.","Văn bản hỏi–đáp đối với phần giải thích hiện trường."],
      figure_placeholder_jp:null,
      solution_jp:"3. 公共工事標準請負契約約款第1条に、設計図書とは別冊の図面、仕様書、現場説明書及び現場説明書に対する質問回答書をいう。と規定されていて、契約図書に含まれる。施工計画書は契約した後作成される。設計図書には含まれない。\n【正解】3",
      solution_vi:"Hồ sơ thiết kế gồm bản vẽ, đặc tả, tài liệu giải thích hiện trường và văn bản hỏi–đáp liên quan. Kế hoạch thi công được lập sau khi ký hợp đồng nên không thuộc hồ sơ thiết kế.\n【Đáp án】3",
      reference_jp:"施工マニュアル p.8, p.11",
      explanation_vi:"Phân biệt 設計図書 với 施工計画書: kế hoạch thi công là tài liệu phía thi công lập sau khi nhận việc."
    })
  ]},

  79: { sectionCode:"ch2-8", content_blocks:[
    ex({type:"exercise",number:115,
      question_jp:"太陽光発電システムの施工に関する記述として、最も不適当なものはどれか。",
      question_vi:"Trong các phát biểu về thi công hệ thống điện mặt trời, phát biểu nào không phù hợp nhất?",
      choices_jp:["積雪地域であるため、陸屋根に設置した太陽電池アレイの傾斜角を大きくした。","感電を防止するため、配線作業の前に太陽電池アレイの傾斜角を大きくした。","太陽電池モジュールの温度上昇を抑えるため、太陽電池モジュールの表面を遮光シートで覆った。","雷が多く発生する地域であるため、耐雷トランスをパワーコンディショナの直流側に設置した。"],
      choices_vi:["Ở vùng nhiều tuyết, tăng góc nghiêng của mảng pin lắp trên mái bằng.","Để chống điện giật, tăng góc nghiêng của mảng pin trước khi làm dây.","Để hạn chế tăng nhiệt module, che bề mặt module bằng tấm chắn sáng.","Vì khu vực nhiều sét, lắp máy biến áp chống sét ở phía DC của power conditioner."],
      figure_placeholder_jp:null,
      solution_jp:"4. 雷雨の多発地域では、交流電源側に耐雷トランス（シールド付き絶縁トランス）を設置し、また、パワーコンディショナの直流側の太陽電池アレイ電源として、接続箱にサージ防護デバイス（SPD）を設置して、雷サージの流れを遮断する。\n【正解】4",
      solution_vi:"Ở khu vực nhiều sét, máy biến áp chống sét được bố trí phía nguồn AC; phía DC của mảng pin dùng SPD trong hộp nối để bảo vệ chống surge. Vì vậy đặt máy biến áp chống sét ở phía DC là sai.\n【Đáp án】4",
      reference_jp:"施工マニュアル",
      explanation_vi:"Phân biệt bảo vệ hai phía: AC →耐雷トランス; DC array → SPD."
    }),
    ex({type:"exercise",number:116,
      question_jp:"高圧架空配電線路の柱上変圧器の施工に関する記述として、「電気設備の技術基準とその解釈」上、誤っているものはどれか。",
      question_vi:"Theo Quy chuẩn kỹ thuật thiết bị điện và phần giải thích, phát biểu nào sai về thi công máy biến áp treo cột trên đường dây phân phối cao áp trên không?",
      choices_jp:["柱上変圧器を、市街地で地表上4.5m以上の位置に取り付けた。","変圧器外箱のA種接地工事の接地抵抗値は、10Ω以下とした。","B種接地工事の接地線は、直径4mm以上の軟銅線を使用した。","接地線は、地面から地上1.8mまでの部分のみを、合成樹脂管で保護した。"],
      choices_vi:["Lắp máy biến áp treo cột trong khu đô thị ở độ cao ít nhất 4,5 m so với mặt đất.","Điện trở nối đất loại A của vỏ máy biến áp không quá 10 Ω.","Dây nối đất loại B dùng dây đồng mềm đường kính ít nhất 4 mm.","Chỉ bảo vệ dây nối đất từ mặt đất lên tới 1,8 m bằng ống nhựa tổng hợp."],
      figure_placeholder_jp:null,
      solution_jp:"4. 接地線の地下75cmから地表上2mまでの部分は、電気用品安全法の適用を受ける合成樹脂管（厚さ2mm未満の合成樹脂製電線管及びCD管を除く。）又はこれと同等以上の絶縁効力及び強さのあるもので覆う。\n【正解】4",
      solution_vi:"Phần dây nối đất từ 75 cm dưới mặt đất đến 2 m trên mặt đất phải được bảo vệ bằng ống nhựa tổng hợp phù hợp hoặc vật liệu có khả năng cách điện và độ bền tương đương. Chỉ bảo vệ tới 1,8 m là không đủ.\n【Đáp án】4",
      reference_jp:"電気テキスト p.100, p.101",
      explanation_vi:"Mốc số liệu cần nhớ: -0,75 m đến +2,0 m."
    })
  ]},

  80: { sectionCode:"ch2-8", content_blocks:[
    ex({type:"exercise",number:117,
      question_jp:"低圧屋内配線に関する記述として、「内線規程」上、不適当なものはどれか。",
      question_vi:"Theo Nội quy dây dẫn trong nhà (内線規程), phát biểu nào không phù hợp về dây điện hạ áp trong nhà?",
      choices_jp:["金属管配線を、点検できない水気のある場所に施設した。","ライティングダクトの金属製部分（導体を除く）に、D種接地工事を施した。","金属ダクト配線に、絶縁電線（IV）を使用した。","合成樹脂管配線にCD管のみを用いて、二重天井内に施設した。"],
      choices_vi:["Thi công hệ thống ống kim loại tại nơi có nước nhưng không thể kiểm tra.","Thực hiện nối đất loại D cho phần kim loại của lighting duct, trừ phần dẫn điện.","Dùng dây cách điện IV trong hệ thống máng kim loại.","Chỉ dùng ống CD cho hệ ống nhựa tổng hợp và lắp trong trần hai lớp."],
      figure_placeholder_jp:null,
      solution_jp:"4. 内線規程3115節（合成樹脂管配線）3115-5（配管）第2項第5号に、「CD管は、直接コンクリートに埋め込んで施設する場合を除き、専用の不燃性又は自消性のある難燃性の管又はダクトに収めて施設すること。」と規定されている。したがって、CD管をそのままの状態で二重天井内に施設してはならない。\n【正解】4",
      solution_vi:"Ống CD chỉ được dùng trực tiếp khi chôn trong bê tông; nếu không, phải đặt trong ống hoặc duct chuyên dụng không cháy/tự tắt có tính chống cháy. Vì vậy không được để nguyên ống CD trong trần hai lớp.\n【Đáp án】4",
      reference_jp:"電気テキスト p.110",
      explanation_vi:"Bẫy nằm ở điều kiện sử dụng CD管, không phải ở việc trần hai lớp tự thân."
    })
  ]},

  81: { sectionCode:"ch3-1", content_blocks:[
    { type:"heading", level:1, jp:"第3章　第二次検定基本問題", vi:"Chương 3 – Câu hỏi cơ bản của kỳ kiểm định lần hai", explanation_vi:"Trang chuyển chương. Nội dung câu hỏi bắt đầu từ trang 82." }
  ], notes_vi:"Trang tiêu đề chương 3." }
};

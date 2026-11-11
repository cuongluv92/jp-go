import type { LessonRow } from "./lesson";

export const lawPages: Record<number, LessonRow[]> = {
  "423": [
    {
      "jp": "第4部 法規",
      "vi": "Phần 4 · Pháp quy",
      "note": "Trang mở đầu; phạm vi của phần này gồm luật liên quan điện lực, tiêu chuẩn kỹ thuật và quản lý công trình điện.",
      "heading": true
    },
    {
      "jp": "424　第1章 電気関係法規",
      "vi": "Trang 424 · Chương 1 · Các văn bản pháp luật liên quan điện lực"
    },
    {
      "jp": "441　第2章 電気設備の技術基準・解釈",
      "vi": "Trang 441 · Chương 2 · Tiêu chuẩn kỹ thuật thiết bị điện và phần giải thích"
    },
    {
      "jp": "494　第3章 電気施設管理",
      "vi": "Trang 494 · Chương 3 · Quản lý công trình điện"
    }
  ],
  "424": [
    {
      "jp": "1-1 電気事業法 といえば 電気工作物の工事、維持、運用の規制による安全確保の法律",
      "vi": "1-1 Luật Kinh doanh điện lực · Luật bảo đảm an toàn bằng cách điều chỉnh việc thi công, duy trì và vận hành công trình điện",
      "note": "Nhớ ba hoạt động chính: 工事 (thi công), 維持 (duy trì/bảo trì), 運用 (vận hành).",
      "heading": true
    },
    {
      "diagram": "lawElectricWorks424"
    },
    {
      "jp": "電気関係の法令",
      "vi": "Các văn bản pháp luật liên quan đến điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気に関わる関係法規において、発電・蓄電・変電・送配電、需要設備を扱うなどの電気関係の仕事に携わる技術者、技能者が学習しておくべき法律として、「電気事業に関するもの」「電気施設の保安に関するもの」があります。",
      "vi": "Trong các quy định liên quan điện lực, kỹ sư và người làm kỹ thuật về phát điện, lưu trữ điện, biến điện, truyền tải, phân phối và thiết bị tiêu thụ cần học các luật về hoạt động kinh doanh điện lực và bảo đảm an toàn cho công trình điện.",
      "note": ""
    },
    {
      "jp": "これらは電気事業法を中心として、電気工事士法、電気工事業法、電気用品安全法により規制が行われています。",
      "vi": "Các lĩnh vực này được điều chỉnh chủ yếu bởi Luật Kinh doanh điện lực, cùng Luật Thợ điện, Luật Kinh doanh thi công điện và Luật An toàn sản phẩm điện.",
      "note": "Tên Nhật trong bảng là tên thường gọi; cần đối chiếu bản hiện hành nếu áp dụng thực tế."
    },
    {
      "jp": "電気工作物による危険や障害を防止するために、電気事業法では、電気工作物は技術基準に適合するものでなければならないとしています。",
      "vi": "Để phòng tránh nguy hiểm và sự cố do công trình điện gây ra, Luật Kinh doanh điện lực yêu cầu công trình điện phải phù hợp với tiêu chuẩn kỹ thuật.",
      "note": ""
    },
    {
      "jp": "「電気設備の技術基準」は、基本的な電気保安の内容を定めており、具体的な数値等は「技術基準の解釈」として示しています。また「解釈」による技術的内容の規制により、電気保安を確保しています。",
      "vi": "Tiêu chuẩn kỹ thuật về thiết bị điện quy định các yêu cầu cơ bản về an toàn điện. Những trị số cụ thể được nêu trong phần giải thích tiêu chuẩn; các yêu cầu kỹ thuật này giúp bảo đảm an toàn điện.",
      "note": "Phân biệt tiêu chuẩn chung với phần hướng dẫn/giải thích có chỉ số kỹ thuật chi tiết."
    },
    {
      "jp": "表1-1-1 電気関係法令",
      "vi": "Bảng 1-1-1 · Các văn bản pháp luật liên quan đến điện",
      "table": {
        "jp": [
          "法令",
          "規制の対象・内容"
        ],
        "vi": [
          "Văn bản",
          "Nội dung điều chỉnh"
        ],
        "rows": [
          [
            "**電気事業法**",
            "**Luật Kinh doanh điện lực**",
            "事業規制と保安規制（電気事業に関するもの及び電気施設の保安に関するもの）"
          ],
          [
            "**電気工事士法**",
            "**Luật Thợ điện**",
            "工事規制（電気工事士資格、電気工事士の作業や義務に関するもの）"
          ],
          [
            "**電気工事業法**",
            "**Luật Kinh doanh thi công điện**",
            "業務規制（電気工事業者の登録や通知及び業務に関するもの） 注）"
          ],
          [
            "**電気用品安全法**",
            "**Luật An toàn sản phẩm điện**",
            "用品規制（製造事業者や輸入事業者の規制、器具や材料に関するもの）"
          ],
          [
            "**電気設備の技術基準**とその解釈",
            "**Tiêu chuẩn kỹ thuật thiết bị điện** và phần giải thích",
            "電気事業法に基づいて定めた電気工作物の維持基準、検査基準の基本で、解釈により内容を具体的に示している。"
          ]
        ],
        "rowsVi": [
          [
            "**電気事業法**",
            "**Luật Kinh doanh điện lực**",
            "Quy định kinh doanh và an toàn: hoạt động điện lực và an toàn công trình điện"
          ],
          [
            "**電気工事士法**",
            "**Luật Thợ điện**",
            "Quy định thi công: chứng chỉ, phạm vi công việc và nghĩa vụ của thợ điện"
          ],
          [
            "**電気工事業法**",
            "**Luật Kinh doanh thi công điện**",
            "Quy định nghiệp vụ: đăng ký, thông báo và hoạt động của doanh nghiệp thi công điện (Chú thích)"
          ],
          [
            "**電気用品安全法**",
            "**Luật An toàn sản phẩm điện**",
            "Quy định sản phẩm: nhà sản xuất, nhập khẩu, thiết bị và vật liệu điện"
          ],
          [
            "**電気設備の技術基準**とその解釈",
            "**Tiêu chuẩn kỹ thuật thiết bị điện** và phần giải thích",
            "Nền tảng của tiêu chuẩn duy trì và kiểm tra công trình điện theo Luật Kinh doanh điện lực; phần giải thích cụ thể hóa yêu cầu"
          ]
        ]
      },
      "note": "Đây là bảng theo đúng cấu trúc nội dung trang 424 của sách; không thay thế việc tra cứu văn bản pháp luật đang có hiệu lực.",
      "heading": true
    },
    {
      "jp": "注）正式名称「電気工事業の業務の適正化に関する法律」",
      "vi": "Chú thích. Tên chính thức là “Luật về bảo đảm hoạt động kinh doanh thi công điện đúng quy định”."
    }
  ],
  "425": [
    {
      "jp": "電気事業の種類",
      "vi": "Các loại hình kinh doanh điện lực",
      "note": "Theo phân loại được sách trình bày; đây là nội dung học thi theo ấn bản, không tự mặc định là phân loại mới nhất.",
      "heading": true
    },
    {
      "jp": "電気事業は、電気事業法により定義され、小売電気事業、一般送配電事業、送電事業、配電事業、特定送配電事業、発電事業及び特定卸供給事業をいいます。",
      "vi": "Theo Luật Kinh doanh điện lực, các loại hình gồm: bán lẻ điện, truyền tải–phân phối chung, truyền tải điện, phân phối điện, truyền tải–phân phối đặc định, phát điện và cung cấp bán buôn đặc định.",
      "note": "Ghi nhớ đủ bảy loại, tránh nhầm phát điện với bán lẻ điện."
    },
    {
      "jp": "1）小売電気事業",
      "vi": "1) Kinh doanh bán lẻ điện",
      "heading": true
    },
    {
      "jp": "「**小売供給**を行う事業」。つまり電気を調達し、需要家に販売する事業。",
      "vi": "“Hoạt động **cung cấp bán lẻ**”, tức thu xếp nguồn điện rồi bán cho khách sử dụng."
    },
    {
      "jp": "・電気の需要に応ずる供給力を確保する義務、供給契約書面の交付義務が課される。",
      "vi": "Có nghĩa vụ bảo đảm khả năng cung cấp đáp ứng nhu cầu điện và giao văn bản hợp đồng cung cấp."
    },
    {
      "jp": "2）一般送配電事業",
      "vi": "2) Kinh doanh truyền tải–phân phối điện chung",
      "heading": true
    },
    {
      "jp": "「自らが維持し、及び運用する送電用及び配電用の電気工作物によりその供給地域において**託送供給**及び**電力量調整供給**を行う事業」",
      "vi": "Hoạt động cung cấp **dịch vụ truyền tải hộ** và **cung cấp điều chỉnh sản lượng điện** trong vùng phục vụ bằng các công trình truyền tải, phân phối do chính đơn vị bảo trì và vận hành."
    },
    {
      "jp": "（託送：既存の送配電網を利用して電力の供給を行うこと）",
      "vi": "Chú thích: 託送 là cung cấp điện qua mạng truyền tải–phân phối đang tồn tại."
    },
    {
      "jp": "・発電事業者から託送された電気を小売電気事業者に届ける事業者",
      "vi": "Đưa điện được chuyển từ đơn vị phát điện đến đơn vị bán lẻ."
    },
    {
      "jp": "・発電事業と小売電気事業をすることができる。",
      "vi": "Có thể đồng thời kinh doanh phát điện và bán lẻ điện."
    },
    {
      "jp": "3）送電事業",
      "vi": "3) Kinh doanh truyền tải điện",
      "heading": true
    },
    {
      "jp": "「自らが維持し、及び運用する送電用の電気工作物により一般送配電事業者又は配電事業者に**振替供給**を行う事業」",
      "vi": "Hoạt động **chuyển giao/cấp điện qua mạng truyền tải** cho doanh nghiệp truyền tải–phân phối chung hoặc doanh nghiệp phân phối bằng công trình truyền tải tự quản lý."
    },
    {
      "jp": "4）配電事業",
      "vi": "4) Kinh doanh phân phối điện",
      "heading": true
    },
    {
      "jp": "「自らが維持し、及び運用する配電用の電気工作物によりその供給区域において**託送供給**及び**電力量調整供給**を行う事業」",
      "vi": "Sử dụng công trình phân phối tự bảo trì và vận hành để thực hiện **cung cấp truyền tải hộ** và **điều chỉnh lượng điện** trong phạm vi cung cấp."
    },
    {
      "jp": "5）特定送配電事業",
      "vi": "5) Kinh doanh truyền tải–phân phối đặc định",
      "heading": true
    },
    {
      "jp": "「自らが維持し、及び運用する送電用及び配電用の電気工作物により小売電気事業、一般送配電事業若しくは配電事業の用に供するための電気に係る**託送供給**を行う事業」",
      "vi": "Dùng công trình truyền tải và phân phối tự quản lý để cung cấp **dịch vụ chuyển tải điện** cho mục đích kinh doanh bán lẻ, truyền tải–phân phối chung hoặc phân phối điện."
    },
    {
      "jp": "6）発電事業",
      "vi": "6) Kinh doanh phát điện",
      "heading": true
    },
    {
      "jp": "「自らが維持し、及び運用する発電等用電気工作物を用いて、小売電気事業、一般送配電事業、配電事業又は特定送配電事業の用に供するための電気を**発電**し、又は**放電**する事業」",
      "vi": "Sử dụng công trình phát điện hoặc lưu trữ điện tự quản lý để **phát điện** hoặc **xả điện**, cung cấp cho hoạt động bán lẻ, truyền tải–phân phối chung, phân phối hay truyền tải–phân phối đặc định."
    },
    {
      "jp": "7）特定卸供給事業",
      "vi": "7) Kinh doanh cung cấp bán buôn đặc định",
      "heading": true
    },
    {
      "jp": "「特定卸供給※1を行う事業」",
      "vi": "Hoạt động cung cấp bán buôn đặc định (xem chú thích 1)."
    },
    {
      "jp": "POINT　電気事業 といえば **小売**電気事業、**一般送配電**事業、**送電**事業、**配電**事業、**特定送配電**事業、**発電**事業、特定卸供給事業をいう。",
      "vi": "Ghi nhớ. Kinh doanh điện lực gồm kinh doanh **bán lẻ** điện, **truyền tải–phân phối chung**, **truyền tải**, **phân phối**, **truyền tải–phân phối đặc định**, **phát điện** và cung cấp bán buôn đặc định."
    },
    {
      "jp": "※1 特定卸供給：電気の供給能力を有する者から集約した電気を、小売電気事業、一般送配電事業、配電事業又は特定送配電事業の用に供するための電気として供給すること。",
      "vi": "Chú thích 1. Cung cấp bán buôn đặc định là tập hợp điện từ các bên có năng lực cung cấp, rồi cung cấp lượng điện đó cho hoạt động bán lẻ điện, truyền tải–phân phối chung, phân phối hoặc truyền tải–phân phối đặc định."
    }
  ],
  "426": [
    {
      "jp": "電気工作物の区分",
      "vi": "Phân loại công trình điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "**電気工作物**とは、**発電**、**蓄電**、**変電**、**送電**、**配電**又は電気の使用のために設置する機械、器具、ダム、水路、貯水池、電線路その他の工作物をいいます（船舶、車両、航空機に設置されるものなどは除きます）。",
      "vi": "**Công trình điện** là máy móc, thiết bị, đập, kênh dẫn nước, hồ chứa, đường dây và các công trình khác lắp đặt để **phát điện**, **lưu trữ điện**, **biến đổi điện áp**, **truyền tải**, **phân phối** hoặc sử dụng điện (trừ những công trình như loại lắp trên tàu, xe hoặc máy bay)."
    },
    {
      "jp": "電気工作物の区分は、**一般用**電気工作物と**事業用**電気工作物があります。事業用電気工作物には**電気事業の用に供する**電気工作物と**自家用**電気工作物があり、保安上は、ほぼ同じ規制を受けます。",
      "vi": "Công trình điện chia thành loại **thông thường** (一般用) và loại **事業用**. Loại 事業用 gồm công trình **phục vụ kinh doanh điện lực** và công trình điện **tự dùng**. Về an toàn, hai nhóm này chịu các quy định gần giống nhau.",
      "note": "Sơ đồ chia thành hai tầng. Tự dùng là một nhánh của 事業用, cùng cấp với nhóm phục vụ kinh doanh điện lực."
    },
    {
      "diagram": "lawElectricWorksClasses426"
    },
    {
      "jp": "一般用電気工作物",
      "vi": "Công trình điện loại 一般用",
      "note": "",
      "heading": true
    },
    {
      "jp": "「一般用電気工作物」とは、一般住宅・商店等、小規模の需要設備で、次の電気工作物をいいます。",
      "vi": "Loại 一般用 là công trình điện ở hộ gia đình, cửa hàng và thiết bị tiêu thụ điện quy mô nhỏ đáp ứng các điều kiện dưới đây.",
      "note": ""
    },
    {
      "jp": "①**低圧（600 V以下）**で受電し、同一構内で使用する電気工作物",
      "vi": "① Công trình nhận điện **hạ áp (không quá 600 V)** và sử dụng trong cùng khuôn viên."
    },
    {
      "jp": "②構内に設置する小規模事業用電気工作物を除く**小規模発電設備**であって、次に掲げる出力であること。",
      "vi": "② **Thiết bị phát điện quy mô nhỏ** đặt trong khuôn viên, trừ công trình điện 事業用 quy mô nhỏ, với công suất thuộc các mức dưới đây."
    },
    {
      "jp": "1. **太陽電池**発電設備であって出力**10** kW未満のもの（10 kW以上50 kW未満は、小規模事業用電気工作物）。",
      "vi": "1. Thiết bị phát điện **mặt trời** có công suất dưới **10** kW (từ 10 đến dưới 50 kW thuộc nhóm công trình điện 事業用 quy mô nhỏ)."
    },
    {
      "jp": "2. **風力**発電設備であって出力**0** kW未満のもの（20 kW未満は、小規模事業用電気工作物）。",
      "vi": "2. Thiết bị phát điện **gió** có công suất dưới **0** kW (dưới 20 kW thuộc nhóm công trình điện 事業用 quy mô nhỏ).",
      "note": "Sách in ngưỡng “dưới 0 kW” để thể hiện nhóm thông thường không có dải công suất điện gió. Xem cách sách ghi dải từ 0 đến dưới 20 kW ở trang 427."
    },
    {
      "jp": "3. 次のいずれかに該当する**水力**発電設備であって、出力**20** kW未満のもの。",
      "vi": "3. Thiết bị **thủy điện** dưới **20** kW đáp ứng một trong các điều kiện dưới đây."
    },
    {
      "jp": "・最大使用水量が毎秒1 m³未満のもの（ダムを伴うものを除く）。",
      "vi": "• Lưu lượng sử dụng tối đa dưới 1 m³/s, trừ thiết bị có kèm đập."
    },
    {
      "jp": "・特定の施設内（農業用排水施設、導水施設、浄水施設、送水施設、終末処理場等）に設置されるもの。",
      "vi": "• Lắp trong cơ sở được chỉ định như công trình tiêu thoát nước nông nghiệp, dẫn nước, lọc nước, truyền dẫn nước hoặc trạm xử lý cuối tuyến."
    },
    {
      "jp": "4. 内燃力を原動力とする**火力**発電設備であって出力**10** kW未満のもの。",
      "vi": "4. Thiết bị **nhiệt điện** dùng động cơ đốt trong, công suất dưới **10** kW."
    },
    {
      "jp": "5. 次のいずれかに該当する**燃料電池発電設備**であって、出力**10** kW未満のもの。",
      "vi": "5. **Thiết bị phát điện bằng pin nhiên liệu** dưới **10** kW thuộc một trong các loại dưới đây."
    },
    {
      "jp": "・固体高分子型又は固体酸化物型の燃料電池発電設備であって、燃料・改質系統設備の最高使用圧力が0.1 MPa（液体燃料を通ずる部分にあっては、1.0 MPa）未満のもの。",
      "vi": "• Thiết bị dùng pin nhiên liệu màng polyme rắn hoặc oxit rắn, với áp suất làm việc tối đa của hệ thống nhiên liệu và cải biến nhiên liệu dưới 0,1 MPa (phần dẫn nhiên liệu lỏng dưới 1,0 MPa)."
    },
    {
      "jp": "・道路運送車両法に規定する自動車に設置される燃料電池発電設備。",
      "vi": "• Thiết bị phát điện bằng pin nhiên liệu lắp trên ô tô theo Luật Phương tiện vận tải đường bộ."
    },
    {
      "jp": "6. スターリングエンジンで発生させた運動エネルギーを原動力とする発電設備であって、出力**10** kW未満のもの。",
      "vi": "6. Thiết bị phát điện dùng động năng do động cơ Stirling tạo ra, công suất dưới **10** kW."
    }
  ],
  "427": [
    {
      "jp": "小規模発電設備",
      "vi": "Thiết bị phát điện quy mô nhỏ",
      "note": "",
      "heading": true
    },
    {
      "jp": "「小規模発電設備」とは、次の低圧の発電用の電気工作物です。出力の合計が**50** kW以上となるものは除かれます。",
      "vi": "Thiết bị phát điện quy mô nhỏ là công trình điện hạ áp dùng để phát điện thuộc các loại dưới đây. Trừ loại có tổng công suất từ **50** kW trở lên.",
      "note": ""
    },
    {
      "jp": "1. **太陽電池**発電設備であって出力**50** kW未満のもの。",
      "vi": "1. Thiết bị phát điện **mặt trời** dưới **50** kW."
    },
    {
      "jp": "2. **風力**発電設備であって出力**20** kW未満のもの。",
      "vi": "2. Thiết bị phát điện **gió** dưới **20** kW."
    },
    {
      "jp": "3. **水力**発電設備、4. **火力**発電設備、5. **燃料電池**発電設備、6. **スターリングエンジン**による発電設備。",
      "vi": "3. Thiết bị **thủy điện**, 4. Thiết bị **nhiệt điện**, 5. Thiết bị phát điện bằng **pin nhiên liệu**, 6. Thiết bị phát điện dùng **động cơ Stirling**."
    },
    {
      "jp": "3～6は、上記一般用電気工作物の3～6と同じです。",
      "vi": "Các mục 3 đến 6 giống các mục tương ứng của công trình điện loại 一般用 ở phần trên."
    },
    {
      "jp": "事業用電気工作物",
      "vi": "Công trình điện loại 事業用",
      "note": "",
      "heading": true
    },
    {
      "jp": "「事業用電気工作物」とは、一般用電気工作物以外の電気工作物で、①**電気事業の用に供する**電気工作物と②**自家用**電気工作物があります。",
      "vi": "Công trình điện 事業用 là loại ngoài 一般用, gồm ① công trình **phục vụ kinh doanh điện lực** và ② công trình điện **tự dùng**."
    },
    {
      "jp": "①電気事業の用に供する電気工作物",
      "vi": "① Công trình phục vụ kinh doanh điện lực",
      "note": "Bao gồm công trình phục vụ những hoạt động điện lực được liệt kê trong sách.",
      "heading": true
    },
    {
      "jp": "「電気事業の用に供する電気工作物」とは、次に掲げる事業の用に供する電気工作物です。",
      "vi": "Công trình điện phục vụ kinh doanh điện lực là công trình dùng cho các hoạt động sau:"
    },
    {
      "jp": "・一般送配電事業\n・送電事業\n・配電事業\n・特定送配電事業",
      "vi": "• Truyền tải–phân phối chung\n• Truyền tải\n• Phân phối\n• Truyền tải–phân phối đặc định"
    },
    {
      "jp": "・発電事業であって、その事業の用に供する発電用の電気工作物が主務省令で定める要件に該当するもの。",
      "vi": "• Kinh doanh phát điện có công trình phát điện đáp ứng điều kiện do thông tư của bộ có thẩm quyền quy định."
    },
    {
      "jp": "②自家用電気工作物",
      "vi": "② Công trình điện tự dùng",
      "note": "Ví dụ trang sách: nhà máy nhận điện trên 600 V, đường dây vượt khỏi khuôn viên, thiết bị phát điện không thuộc nhóm quy mô nhỏ.",
      "heading": true
    },
    {
      "jp": "「自家用電気工作物」とは、電気事業の用に供する電気工作物及び一般用電気工作物以外の電気工作物で、次のようなものがあります。",
      "vi": "Công trình điện tự dùng là công trình điện nằm ngoài hai nhóm phục vụ kinh doanh điện lực và dùng thông thường. Các ví dụ gồm:"
    },
    {
      "jp": "・**600**ボルトを超える電圧で受電するもの（高圧又は特別高圧で受電する工場、ビルなど）。",
      "vi": "• Công trình nhận điện trên **600** V (như nhà máy hoặc tòa nhà nhận cao áp hoặc siêu cao áp)."
    },
    {
      "jp": "・**構外**にわたる電線路を有するもの。",
      "vi": "• Công trình có đường dây đi ra **ngoài khuôn viên**."
    },
    {
      "jp": "・**小規模発電設備**以外の発電設備を有するもの。",
      "vi": "• Công trình có thiết bị phát điện ngoài nhóm **phát điện quy mô nhỏ**."
    },
    {
      "jp": "・火薬類を製造する事業場、石炭鉱の電気工作物など。",
      "vi": "• Công trình điện tại cơ sở sản xuất vật liệu nổ hoặc mỏ than, v.v."
    },
    {
      "jp": "・発電事業用の電気工作物（一定規模以上を除く）。",
      "vi": "• Công trình điện phục vụ hoạt động phát điện (trừ loại từ quy mô nhất định trở lên)."
    },
    {
      "jp": "小規模事業用電気工作物",
      "vi": "Công trình điện kinh doanh quy mô nhỏ",
      "note": "",
      "heading": true
    },
    {
      "jp": "「小規模事業用電気工作物」とは、事業用電気工作物のうち、小規模発電設備であって、次のいずれにも該当する電気工作物です。",
      "vi": "Công trình điện 事業用 quy mô nhỏ là thiết bị phát điện quy mô nhỏ thuộc loại 事業用 đáp ứng tất cả các điều kiện dưới đây."
    },
    {
      "jp": "・**太陽電池**発電設備であって出力**10** kW以上**50** kW未満若しくは**風力**発電設備であって**0** kW以上**20** kW未満であること。",
      "vi": "• Thiết bị phát điện **mặt trời** từ **10** kW đến dưới **50** kW hoặc thiết bị phát điện **gió** từ **0** kW đến dưới **20** kW."
    },
    {
      "jp": "・低圧受電電線路以外の電線路によりその構内以外の場所にある電気工作物と電気的に接続されていないものであること。",
      "vi": "• Thiết bị không được nối điện với công trình điện bên ngoài khuôn viên qua đường dây nào ngoài đường dây nhận điện hạ áp.",
      "note": "Sách yêu cầu đồng thời đáp ứng điều kiện công suất và điều kiện kết nối."
    }
  ],
  "428": [
    {
      "jp": "小規模事業用電気工作物となることで、技術基準適合維持義務の対象となり、**基礎情報**の届出及び**使用前自己確認結果**の届出が義務となります。",
      "vi": "Khi thuộc nhóm công trình điện kinh doanh quy mô nhỏ, công trình phải duy trì phù hợp tiêu chuẩn kỹ thuật và có nghĩa vụ thông báo **thông tin cơ bản** cũng như **kết quả tự xác nhận trước khi sử dụng**.",
      "note": "Phân biệt nghĩa vụ này với các nhóm 一般用 và 自家用."
    },
    {
      "jp": "POINT　一般用電気工作物 といえば **低圧で受電し**同一**構内**で使用する電気工作物、及び次の**小規模発電設備**を有する電気工作物",
      "vi": "Ghi nhớ. Công trình điện loại thông thường gồm công trình **nhận điện hạ áp** và sử dụng trong cùng **khuôn viên**, cùng công trình có **thiết bị phát điện quy mô nhỏ** dưới đây."
    },
    {
      "jp": "**10 kW**未満の**太陽電池**発電設備\n**20 kW**未満の**水力発電**設備\n**10 kW**未満の**内燃力**発電設備、**燃料電池**発電設備（自動車に設置されるものを含む）\nスターリングエンジンによる発電設備",
      "vi": "Thiết bị phát điện **mặt trời** dưới **10 kW**\nThiết bị **thủy điện** dưới **20 kW**\nThiết bị phát điện dùng **động cơ đốt trong** hoặc **pin nhiên liệu** dưới **10 kW** (gồm cả loại lắp trên ô tô)\nThiết bị phát điện dùng động cơ Stirling"
    },
    {
      "jp": "自家用電気工作物 といえば **高圧**、**特別高圧**で受電する電気工作物\n小規模発電設備以外の**発電設備**を有するもの\n**構外**にわたる電線路を有する電気工作物\n**火薬類**を製造する事業場、石炭鉱の電気工作物\n発電事業用の電気工作物（一定規模以上を除く）",
      "vi": "Công trình điện tự dùng gồm công trình nhận **cao áp**, **siêu cao áp**\nCông trình có **thiết bị phát điện** ngoài loại quy mô nhỏ\nCông trình có đường dây đi **ngoài khuôn viên**\nCông trình điện tại cơ sở sản xuất **vật liệu nổ** hoặc mỏ than\nCông trình phục vụ kinh doanh phát điện (trừ loại từ quy mô nhất định trở lên)."
    },
    {
      "jp": "電気事業法の目的と義務",
      "vi": "Mục đích và nghĩa vụ theo Luật Kinh doanh điện lực",
      "note": "",
      "heading": true
    },
    {
      "jp": "**電気事業法**では、「電気事業の運営を適正かつ合理的ならしめることによって、電気の**使用者**の利益を保護し、及び電気事業の健全な発達を図るとともに、電気工作物の**工事**、**維持**及び**運用**を**規制**することによって、**公共**の安全を確保し、及び**環境**の保全を図ることを目的とする」と述べています。",
      "vi": "**Luật Kinh doanh điện lực** nêu mục đích là bảo vệ lợi ích **người sử dụng** điện và thúc đẩy ngành điện phát triển lành mạnh bằng cách tổ chức hoạt động kinh doanh điện lực hợp lý, đúng quy định. Luật cũng bảo đảm an toàn **công cộng** và bảo vệ **môi trường** bằng việc **điều chỉnh** hoạt động **thi công**, **duy trì** và **vận hành** công trình điện.",
      "note": "Cụm mục đích thường được hỏi trong bài thi."
    },
    {
      "jp": "また、電気工作物を設置する者は次のような義務を負っています。",
      "vi": "Ngoài ra, chủ lắp đặt công trình điện phải thực hiện các nghĩa vụ dưới đây."
    },
    {
      "jp": "事業用電気工作物の維持義務",
      "vi": "Nghĩa vụ duy trì công trình điện dùng cho hoạt động kinh doanh",
      "note": "",
      "heading": true
    },
    {
      "jp": "事業用電気工作物を設置する者は、技術基準に適合するよう次の内容を維持しなければなりません。",
      "vi": "Chủ lắp đặt công trình điện loại 事業用 phải duy trì công trình theo các yêu cầu dưới đây để phù hợp tiêu chuẩn kỹ thuật."
    },
    {
      "jp": "①事業用電気工作物は**人体**に危害を及ぼし又は**物件**に損傷を与えない。\n②他の電気的設備その他の物件の機能に**電気的**又は**磁気的**な障害を与えない。\n③事業用電気工作物の損壊により一般電気事業者の**電気の供給**に著しい支障を及ぼさない。",
      "vi": "① Công trình điện loại 事業用 không được gây nguy hiểm cho **con người** hoặc làm hư hại **tài sản**.\n② Không gây nhiễu **điện** hoặc **từ** đến chức năng của thiết bị điện hay vật thể khác.\n③ Hư hỏng công trình điện loại 事業用 không được gây cản trở đáng kể cho việc **cấp điện** của đơn vị kinh doanh điện lực thông thường."
    },
    {
      "jp": "一般用電気工作物の維持義務",
      "vi": "Nghĩa vụ duy trì công trình điện loại thông thường",
      "note": "",
      "heading": true
    },
    {
      "jp": "一般用電気工作物（一般家庭などの電気設備）に関しては、その所有者が電気工作物を維持、管理することは困難ですので、**電線路維持運用者**が技術基準に適合しているかを調査する義務を、次のように規定しています。",
      "vi": "Với công trình điện ở gia đình, chủ sở hữu thường khó tự quản lý an toàn đầy đủ, nên **đơn vị duy trì/vận hành đường dây** có nghĩa vụ điều tra việc tuân thủ tiêu chuẩn kỹ thuật.",
      "note": "Theo sách, chu kỳ điều tra được nêu sang trang sau."
    },
    {
      "jp": "①**一般用**電気工作物が経済産業省令で定める技術基準に適合しているかどうかを**4年**に**1回**以上調査を行う（登録点検業務受託法人が点検業務を受託している一般用電気工作物にあっては5年に1回以上）。",
      "vi": "① Kiểm tra công trình điện **thông thường** có phù hợp tiêu chuẩn kỹ thuật theo thông tư của Bộ Kinh tế, Thương mại và Công nghiệp hay không ít nhất **1 lần** mỗi **4 năm**. Với công trình mà pháp nhân được đăng ký đã nhận ủy thác kiểm tra, tần suất là ít nhất 1 lần mỗi 5 năm.",
      "note": "Lưu ý chu kỳ 4/5 năm và phạm vi áp dụng."
    }
  ],
  "429": [
    {
      "jp": "②調査の結果、技術基準に適合しないと認める場合は、遅滞なく、**所有者**又は**占有者**に通知する。",
      "vi": "② Nếu kiểm tra thấy không đạt tiêu chuẩn kỹ thuật, phải thông báo ngay cho **chủ sở hữu** hoặc **người chiếm hữu**.",
      "note": ""
    },
    {
      "jp": "③電線路維持運用者は、**帳簿**を備え、調査及び通知に関する業務に関し経済産業省令で定める事項を記載し、保存する。",
      "vi": "③ Đơn vị duy trì và vận hành đường dây phải lập **sổ sách**, ghi và lưu các mục về công việc kiểm tra và thông báo theo thông tư của Bộ Kinh tế, Thương mại và Công nghiệp.",
      "note": ""
    },
    {
      "jp": "④電線路維持運用者は、経済産業大臣の登録を受けた者（**登録調査機関**）に、この調査業務を**委託**することができる。",
      "vi": "④ Đơn vị duy trì và vận hành đường dây có thể **ủy thác** việc kiểm tra này cho bên đã đăng ký với Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp (**tổ chức kiểm tra đã đăng ký**).",
      "note": ""
    },
    {
      "jp": "電圧及び周波数の維持義務",
      "vi": "Nghĩa vụ duy trì điện áp và tần số",
      "note": "",
      "heading": true
    },
    {
      "jp": "一般送配電事業者は、その供給する電気の電圧の値をその電気を供給する場所において、表1-1-2の右欄の値に維持するように決められています。",
      "vi": "Đơn vị truyền tải/phân phối chung phải duy trì điện áp tại điểm cấp điện nằm trong các giới hạn bảng 1-1-2.",
      "note": ""
    },
    {
      "jp": "表1-1-2 維持すべき電圧の値",
      "vi": "Bảng 1-1-2 · Giá trị điện áp phải duy trì",
      "heading": true,
      "table": {
        "jp": [
          "標準電圧",
          "維持すべき値"
        ],
        "vi": [
          "Điện áp danh định",
          "Giá trị phải duy trì"
        ],
        "rows": [
          [
            "100 V",
            "100 V",
            "**101 V**の上下**6 V**を超えない値"
          ],
          [
            "200 V",
            "200 V",
            "**202 V**の上下**20 V**を超えない値"
          ]
        ],
        "rowsVi": [
          [
            "100 V",
            "100 V",
            "**101 V** với sai lệch không quá **6 V**"
          ],
          [
            "200 V",
            "200 V",
            "**202 V** với sai lệch không quá **20 V**"
          ]
        ]
      }
    },
    {
      "jp": "注）周波数の値は、標準周波数（**50 Hz**又は**60 Hz**）に維持。",
      "vi": "Chú thích. Duy trì tần số chuẩn **50 Hz** hoặc **60 Hz**."
    },
    {
      "jp": "経済産業大臣は、一般送配電事業者の供給する電気の**電圧**又は**周波数**の値が経済産業省令で定める値に維持されていないため電気の使用者の利益を阻害していると認めるときは、一般送配電事業者に対し、その値を維持するための電気工作物の**修理**又は**改造**、電気工作物の**運用**の方法の改善その他の必要な措置をとるべきことを命じることになっています。",
      "vi": "Nếu Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp nhận thấy **điện áp** hoặc **tần số** do đơn vị truyền tải–phân phối chung cung cấp không được duy trì ở mức quy định trong thông tư và điều đó làm tổn hại lợi ích người dùng điện, Bộ trưởng ra lệnh cho đơn vị này **sửa chữa** hoặc **cải tạo** công trình điện, cải thiện phương thức **vận hành** hoặc thực hiện biện pháp cần thiết khác để duy trì các giá trị quy định."
    },
    {
      "jp": "POINT　電気事業者の義務 といえば\n・事業用電気工作物により**人体**に危害を及ぼさない\n・**物件**に損傷を与えない\n・**電気的**・**磁気的**な障害を与えない\n・**電気の供給**に支障を及ぼさない　など",
      "vi": "Ghi nhớ. Nghĩa vụ của đơn vị kinh doanh điện lực\n• Công trình điện loại 事業用 không được gây nguy hiểm cho **con người**\n• Không làm hư hại **tài sản**\n• Không gây nhiễu **điện** hay **từ**\n• Không gây cản trở việc **cấp điện**, v.v."
    },
    {
      "jp": "一般用電気工作物の調査 といえば **4年**に**1回**以上実施する（電線路維持運用者）\n受託電気工作物にあっては、**5年**に**1回**以上実施する",
      "vi": "Đơn vị duy trì và vận hành đường dây kiểm tra công trình điện loại thông thường ít nhất **1 lần** mỗi **4 năm**. Với công trình thuộc diện nhận ủy thác kiểm tra, thực hiện ít nhất **1 lần** mỗi **5 năm**."
    },
    {
      "jp": "電圧の維持 といえば **101 ± 6 V**、**202 ± 20 V**に維持する",
      "vi": "Duy trì điện áp trong khoảng **101 ± 6 V** hoặc **202 ± 20 V**.",
      "note": "Đề thi có thể cho điện áp danh định 100 V hoặc 200 V. Tâm dải dung sai trong bảng lần lượt là 101 V và 202 V."
    },
    {
      "jp": "事業用電気工作物設置者の手続き義務",
      "vi": "Nghĩa vụ thủ tục của chủ lắp đặt công trình điện loại 事業用",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気事業用電気工作物、自家用電気工作物設置者に必要な手続きには、次のようなものがあります。",
      "vi": "Chủ lắp đặt công trình điện phục vụ kinh doanh điện lực hoặc công trình điện tự dùng cần thực hiện các thủ tục dưới đây."
    },
    {
      "jp": "主任技術者の選任と保安規程を定める",
      "vi": "Bổ nhiệm kỹ sư trưởng phụ trách an toàn điện và ban hành quy chế bảo an",
      "note": "Bắt đầu nội dung và tiếp tục ở trang 430.",
      "heading": true
    },
    {
      "jp": "事業用電気工作物を設置する者は、事業用電気工作物の**工事**、**維持**及び**運用**に関する保安の監督をさせるため、主務省令で定めるところにより、主任技術者免状の",
      "vi": "Để giám sát an toàn trong **thi công**, **duy trì** và **vận hành** công trình điện loại 事業用, chủ lắp đặt phải thực hiện việc bổ nhiệm theo thông tư của bộ có thẩm quyền, trong số những người được cấp chứng chỉ…"
    }
  ],
  "430": [
    {
      "jp": "交付を受けている者のうちから、**主任技術者**を選任し**所轄産業保安監督部長**※2に届出なければなりません。また保安を確保するため、**保安規程**を定め電気工作物の**使用開始前**に、所轄産業保安監督部長に届出ることを義務付けています。",
      "vi": "…phải bổ nhiệm **người phụ trách kỹ thuật** trong số những người đã được cấp chứng chỉ và thông báo cho **trưởng cơ quan giám sát an toàn công nghiệp có thẩm quyền** (chú thích 2). Để bảo đảm an toàn, chủ lắp đặt phải lập **quy chế an toàn** và nộp cho cơ quan trên **trước khi đưa công trình điện vào sử dụng**."
    },
    {
      "jp": "保安規程に定めるべき事項",
      "vi": "Các nội dung bắt buộc của quy chế bảo an",
      "note": "",
      "heading": true
    },
    {
      "jp": "保安規程には、次の事項を定めなければなりません。",
      "vi": "Quy chế an toàn phải quy định các nội dung dưới đây."
    },
    {
      "jp": "①事業用電気工作物の**工事**、**維持**及び**運用**に関する業務を管理する者の**職務**及び**組織**に関すること",
      "vi": "① **Chức trách**, **tổ chức** nhân sự quản lý **thi công**, **bảo trì** và **vận hành** công trình điện.",
      "note": ""
    },
    {
      "jp": "②**保安教育**に関すること",
      "vi": "② **Đào tạo về an toàn**.",
      "note": ""
    },
    {
      "jp": "③**巡視**、**点検**及び**検査**に関すること",
      "vi": "③ **Tuần tra**, **kiểm tra** và **kiểm định**.",
      "note": ""
    },
    {
      "jp": "④**運転**又は**操作**に関すること",
      "vi": "④ **Vận hành**, **thao tác**.",
      "note": ""
    },
    {
      "jp": "⑤**記録**に関すること",
      "vi": "⑤ **Ghi chép**, lưu hồ sơ.",
      "note": ""
    },
    {
      "jp": "⑥非常の場合にとるべき措置に関すること",
      "vi": "⑥ Biện pháp xử lý khi khẩn cấp.",
      "note": ""
    },
    {
      "jp": "⑦保安に関し必要な事項",
      "vi": "⑦ Các nội dung cần thiết khác về an toàn.",
      "note": ""
    },
    {
      "jp": "POINT　事業用電気工作物の設置者の義務 といえば **電気主任技術者**を選任し**保安規程**を定め届出る",
      "vi": "Ghi nhớ. Chủ lắp đặt công trình điện loại 事業用 bổ nhiệm **người phụ trách kỹ thuật điện**, lập và nộp **quy chế an toàn**."
    },
    {
      "jp": "保安規程に定める事項 といえば **職務・組織**、**保安教育**、**巡視・点検・検査**、**運転・操作**、**記録**に関すること",
      "vi": "Quy chế an toàn quy định **chức trách và tổ chức**, **đào tạo an toàn**, **tuần tra, kiểm tra và kiểm định**, **vận hành và thao tác**, **ghi chép**."
    },
    {
      "jp": "自主保安体制",
      "vi": "Cơ chế tự bảo đảm an toàn",
      "note": "",
      "heading": true
    },
    {
      "jp": "事業用電気工作物の設置者に、①電気工作物を**技術基準**に適合させる、②設備の規模に応じた資格を所持した**電気主任技術者**を選任する、③**保安規程**の制定、④**法定自主検査**の４項目を自主的に行わせることによって、電気工作物の保安の確保を図るようにしています。",
      "vi": "Chủ lắp đặt công trình điện loại 事業用 tự thực hiện bốn việc để bảo đảm an toàn công trình: ① duy trì công trình phù hợp **tiêu chuẩn kỹ thuật**, ② bổ nhiệm **người phụ trách kỹ thuật điện** có chứng chỉ phù hợp với quy mô, ③ lập **quy chế an toàn**, ④ thực hiện **kiểm tra tự chủ theo luật**.",
      "note": ""
    },
    {
      "jp": "電気主任技術者の職務と監督範囲",
      "vi": "Nhiệm vụ và phạm vi giám sát của kỹ sư trưởng điện",
      "note": "Nội dung chi tiết tiếp tục trang 431.",
      "heading": true
    },
    {
      "jp": "電気主任技術者の職務は、「電気工作物の工事、維持及び運用に関する保安の監督の職務を**誠実**に行わなければならない」としています。また、電気関係の従事者は「主任技術者がその保安のためにする**指示**に従わなければならない」としています。",
      "vi": "Người phụ trách kỹ thuật điện phải thực hiện **tận tâm** nhiệm vụ giám sát an toàn trong thi công, duy trì và vận hành công trình điện. Người làm công việc liên quan đến điện phải tuân theo **chỉ thị** an toàn của người phụ trách kỹ thuật."
    },
    {
      "jp": "電気主任技術者の免状には、表1-1-3のように、第一種、第二種、第三種の3種類があります。",
      "vi": "Chứng chỉ người phụ trách kỹ thuật điện có ba loại I, II và III, như bảng 1-1-3."
    },
    {
      "jp": "※2 自家用電気工作物に係る手続は、自家用電気工作物の設置の場所を管轄する産業保安監督部（産業保安監督部長）に対して行いますが、設置の場所が2つ以上の産業保安監督部の管轄区域にある場合は、商務流通保安グループ（経済産業大臣）に対して行います。",
      "vi": "Chú thích 2. Nộp thủ tục về công trình điện tự dùng cho cơ quan giám sát an toàn công nghiệp có thẩm quyền tại nơi lắp đặt. Khi nơi lắp đặt thuộc địa bàn của ít nhất hai cơ quan, nộp cho Nhóm Thương mại, Lưu thông và An toàn của Bộ Kinh tế, Thương mại và Công nghiệp."
    }
  ],
  "431": [
    {
      "jp": "表1-1-3 電気主任技術者の種類と監督範囲",
      "vi": "Bảng 1-1-3 · Loại chứng chỉ người phụ trách kỹ thuật điện và phạm vi giám sát",
      "heading": true,
      "table": {
        "jp": [
          "主任技術者免状の種類",
          "保安の監督をすることができる範囲注"
        ],
        "vi": [
          "Loại chứng chỉ",
          "Phạm vi được giám sát an toàn (xem chú thích)"
        ],
        "rows": [
          [
            "第一種電気主任技術者免状",
            "Chứng chỉ loại I",
            "**すべて**の事業用電気工作物の工事、維持及び運用"
          ],
          [
            "第二種電気主任技術者免状",
            "Chứng chỉ loại II",
            "電圧**17万 V**未満の事業用電気工作物の工事、維持及び運用"
          ],
          [
            "第三種電気主任技術者免状",
            "Chứng chỉ loại III",
            "電圧**5万 V**未満の事業用電気工作物（出力5 000 kW以上の発電所を除く）の工事、維持及び運用"
          ]
        ],
        "rowsVi": [
          [
            "第一種電気主任技術者免状",
            "Chứng chỉ loại I",
            "Thi công, duy trì và vận hành **mọi** công trình điện loại 事業用."
          ],
          [
            "第二種電気主任技術者免状",
            "Chứng chỉ loại II",
            "Thi công, duy trì và vận hành công trình điện loại 事業用 có điện áp dưới **170 kV**."
          ],
          [
            "第三種電気主任技術者免状",
            "Chứng chỉ loại III",
            "Thi công, duy trì và vận hành công trình điện loại 事業用 có điện áp dưới **50 kV**, trừ nhà máy điện có công suất từ 5.000 kW trở lên."
          ]
        ]
      }
    },
    {
      "jp": "注）水力設備、火力設備を除く。",
      "vi": "Chú thích. Trừ thiết bị thủy điện và thiết bị nhiệt điện."
    },
    {
      "jp": "電気主任技術者の選任方法",
      "vi": "Cách bổ nhiệm người phụ trách kỹ thuật điện",
      "heading": true
    },
    {
      "jp": "電気主任技術者を選任するには、次の方法があります。",
      "vi": "Có các phương pháp bổ nhiệm người phụ trách kỹ thuật điện như sau."
    },
    {
      "jp": "従業員の中から選任",
      "vi": "Bổ nhiệm từ nhân viên",
      "heading": true
    },
    {
      "jp": "監督範囲に応じて電気主任技術者免状の交付を受けている者の中で、原則としてその事業場の**従業員**の中から選任します。",
      "vi": "Theo nguyên tắc, lựa chọn trong **nhân viên** của cơ sở người đã được cấp chứng chỉ phù hợp với phạm vi giám sát."
    },
    {
      "jp": "注）選任する事業場に**常勤する派遣労働者**を電気主任技術者として選任できます。",
      "vi": "Chú thích: Có thể bổ nhiệm **lao động phái cử làm việc thường xuyên** tại cơ sở đó làm người phụ trách kỹ thuật điện."
    },
    {
      "jp": "兼任する場合",
      "vi": "Trường hợp kiêm nhiệm",
      "heading": true
    },
    {
      "jp": "特定の条件を満たし、電気主任技術者に2以上の自家用電気工作物の電気主任技術者を兼ねさせる（兼任させる）場合には、所轄産業保安監督部長の承認を受ける必要があります。",
      "vi": "Nếu đáp ứng điều kiện nhất định và cho một người kiêm nhiệm từ hai công trình điện tự dùng trở lên thì cần có sự chấp thuận của trưởng cơ quan giám sát an toàn công nghiệp có thẩm quyền."
    },
    {
      "jp": "統括電気主任技術者制度",
      "vi": "Chế độ người phụ trách kỹ thuật điện quản lý tập trung",
      "heading": true
    },
    {
      "jp": "多くの自家用電気工作物に該当する事業場を有している場合、設備を統括して管理する統括事業所に「統括電気主任技術者」を選任すれば、各々の施設に電気主任技術者を選任しなくてもよいとする制度です。",
      "vi": "Nếu có nhiều cơ sở thuộc nhóm công trình điện tự dùng, có thể bổ nhiệm một người phụ trách tổng hợp tại cơ sở quản lý tập trung thay cho việc bổ nhiệm riêng từng cơ sở trong điều kiện của chế độ."
    },
    {
      "jp": "許可を受けて選任する場合",
      "vi": "Bổ nhiệm theo sự cho phép",
      "heading": true
    },
    {
      "jp": "**500 kW**未満の自家用電気工作物にあっては、所轄産業保安監督部長の許可を受ければ、電気主任技術者の免状の交付を受けていない者でも、電気主任技術者として選任することができます。",
      "vi": "Với công trình điện tự dùng dưới **500 kW**, nếu được cơ quan giám sát an toàn công nghiệp có thẩm quyền cho phép, có thể bổ nhiệm người chưa được cấp chứng chỉ người phụ trách kỹ thuật điện."
    },
    {
      "jp": "保安管理業務の外部委託",
      "vi": "Thuê ngoài nghiệp vụ quản lý an toàn",
      "heading": true
    },
    {
      "jp": "従業員に適任者がいない場合には、**電気管理技術者**又は**電気保安法人**への委託（外部委託承認）をすることができます※3。",
      "vi": "Nếu không có nhân viên phù hợp, có thể thuê **chuyên gia quản lý điện** hoặc **pháp nhân bảo an điện** thực hiện công việc theo chế độ chấp thuận thuê ngoài. Xem chú thích 3."
    },
    {
      "jp": "この場合、電気管理技術者又は電気保安法人と保安業務に関する委託契約を締結し、所轄産業保安監督部長の承認を受ける必要があります。",
      "vi": "Trường hợp này phải ký hợp đồng ủy thác nghiệp vụ an toàn với cá nhân/pháp nhân được phép và được trưởng cơ quan giám sát an toàn công nghiệp có thẩm quyền chấp thuận."
    },
    {
      "jp": "※3 外部委託できる事業場：7 000 V以下で受電する需要設備の事業場、出力2 000 kW未満の発電所（原子力発電所を除く）の事業場、600 V以下の配電線路を管理する事業場。",
      "vi": "Chú thích 3 · Các cơ sở có thể thuê ngoài theo sách: cơ sở nhận điện không quá 7.000 V, nhà máy điện công suất dưới 2.000 kW (trừ nhà máy điện hạt nhân), và cơ sở quản lý đường dây phân phối không quá 600 V.",
      "note": "Điều kiện thuê ngoài có thể phụ thuộc loại hình và quy định hiện hành; không suy rộng ngoài phạm vi ghi trong sách."
    }
  ],
  "432": [
    {
      "jp": "POINT　電気主任技術者 といえば **従業員**の中から選任する\n**常勤の派遣労働者**を選任できる\n**電気管理技術者**、**電気保安法人**へ委託できる",
      "vi": "Ghi nhớ. Bổ nhiệm người phụ trách kỹ thuật điện trong số **nhân viên**. Có thể bổ nhiệm **lao động phái cử làm việc thường xuyên** hoặc thuê **chuyên gia quản lý điện** hay **pháp nhân an toàn điện**."
    },
    {
      "jp": "自家用電気工作物の新設と変更の届出",
      "vi": "Thủ tục khai báo khi xây mới hoặc thay đổi công trình điện tự dùng",
      "note": "",
      "heading": true
    },
    {
      "jp": "自家用電気工作物（受電設備）を設置する場合、その受電設備の使用電圧が1万V以上のものについては、工事計画を経済産業大臣に、工事に着手する30日前までに事前届出の必要があります。",
      "vi": "Khi lắp đặt công trình điện tự dùng (thiết bị nhận điện) có điện áp sử dụng từ 10 kV trở lên, phải nộp trước kế hoạch thi công cho Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp, chậm nhất 30 ngày trước ngày khởi công.",
      "note": "Kiểm tra điều kiện pháp lý hiện hành trước khi áp dụng thực tế."
    },
    {
      "jp": "また、受電設備の保安管理のための主任技術者の選任及び保安規程の届出が必要です。",
      "vi": "Để quản lý an toàn thiết bị nhận điện, cũng cần bổ nhiệm người phụ trách kỹ thuật và nộp quy chế an toàn."
    },
    {
      "jp": "なお、7 000 V以下の自家用受電設備を設置する場合に必要なものは、受電電力に関係なく、電気主任技術者の選任と保安規程の届出のみです。",
      "vi": "Khi lắp đặt thiết bị nhận điện tự dùng từ 7.000 V trở xuống, bất kể công suất nhận điện, thủ tục cần thực hiện theo đoạn này là bổ nhiệm người phụ trách kỹ thuật điện và nộp quy chế an toàn.",
      "note": "受電設備 là thiết bị nhận điện. 受電電力 là công suất nhận điện."
    },
    {
      "jp": "表1-1-4は、需要設備に係る届出を要する工事です。",
      "vi": "Bảng 1-1-4 liệt kê các hạng mục công trình cần khai báo liên quan đến thiết bị sử dụng điện."
    },
    {
      "jp": "表1-1-4 届出を要する工事",
      "vi": "Bảng 1-1-4 · Công việc cần khai báo",
      "heading": true,
      "table": {
        "jp": [
          "工事の種類",
          "事前届出を要するもの"
        ],
        "vi": [
          "Loại công việc",
          "Trường hợp cần khai báo trước"
        ],
        "rows": [
          [
            "新設工事",
            "Lắp đặt mới",
            "①受電電圧**1万 V**以上の需要設備の設置\n②出力**500 kW**以上の燃料電池発電所の設置\n③出力**2 000 kW**以上の太陽電池発電所の設置\n④出力**500 kW**以上の風力発電所の設置"
          ],
          [
            "変更工事",
            "Thay đổi",
            "①電圧**1万 V**以上の需要設備に属する受電用遮断器の設置、取替え及び**20％以上**の遮断電流の変更を伴う改造\n②**機器**（計器用変成器を除く）電圧**1万 V**以上で、容量**1万 kV・A**以上又は出力**1万 kW**以上の機器の設置、取替え及び**20％**以上の電圧または容量の変更"
          ]
        ],
        "rowsVi": [
          [
            "新設工事",
            "Lắp đặt mới",
            "① Lắp thiết bị sử dụng điện nhận điện áp từ **10 kV** trở lên\n② Lắp nhà máy điện pin nhiên liệu từ **500 kW** trở lên\n③ Lắp nhà máy điện mặt trời từ **2.000 kW** trở lên\n④ Lắp nhà máy điện gió từ **500 kW** trở lên"
          ],
          [
            "変更工事",
            "Thay đổi",
            "① Lắp mới, thay hoặc cải tạo làm thay đổi dòng cắt từ **20% trở lên** đối với máy cắt nhận điện thuộc thiết bị sử dụng điện từ **10 kV** trở lên\n② Lắp mới, thay hoặc thay đổi điện áp hay dung lượng từ **20%** trở lên đối với **thiết bị** (trừ biến điện đo lường) có điện áp từ **10 kV** trở lên và dung lượng từ **10.000 kVA** hoặc công suất từ **10.000 kW** trở lên"
          ]
        ]
      }
    },
    {
      "jp": "POINT　届出を要する工事 といえば **1万 V**以上の需要設備の新設と変更の工事、**20％以上**の遮断電流、電圧、容量の変更工事など",
      "vi": "Ghi nhớ. Công việc cần khai báo gồm lắp mới hoặc thay đổi thiết bị sử dụng điện từ **10 kV** trở lên, thay đổi dòng cắt, điện áp hoặc dung lượng từ **20% trở lên**, v.v."
    },
    {
      "jp": "電気事故報告",
      "vi": "Báo cáo sự cố điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気工作物により電気事故が発生した場合、**自家用電気工作物の設置者**は電気関係報告規則に基づき、所轄の産業保安監督部長に報告しなければなりません。",
      "vi": "Khi xảy ra sự cố do công trình điện, **chủ lắp đặt công trình điện tự dùng** phải báo cáo cho trưởng cơ quan giám sát an toàn công nghiệp có thẩm quyền theo quy tắc báo cáo liên quan đến điện lực.",
      "note": ""
    }
  ]
};

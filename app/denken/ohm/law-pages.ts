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
  ],
  "433": [
    {
      "jp": "表1-1-5 報告しなくてはならない主な電気事故",
      "vi": "Bảng 1-1-5 · Các sự cố điện chính phải báo cáo",
      "heading": true,
      "table": {
        "jp": [
          "事故の種類",
          "報告期限等（速報）",
          "報告期限等（詳報）",
          "報告先"
        ],
        "vi": [
          "Loại sự cố",
          "Hạn báo cáo nhanh",
          "Hạn báo cáo chi tiết",
          "Nơi nhận báo cáo"
        ],
        "rows": [
          [
            "①感電又は破損事故若しくは電気工作物の誤操作や操作しなかったことにより**人が死傷した**事故（死亡又は入院した場合に限る）\n\n②**電気火災事故**（工作物にあっては半焼以上の場合に限る）\n\n③破損事故又は電気工作物の誤操作若しくは操作しなかったことにより、公共の財産に被害を与え、公共施設の使用を不可能にした事故又は社会的に影響を及ぼした事故\n\n④主要電気工作物（需要設備においては電圧１万Ｖ以上の場合）の破損事故\n\n⑤電気事業者の電気工作物と電気的に接続されている電圧3千 V以上の自家用電気工作物の破損事故又は誤操作若しくは操作しなかったことにより電気事業者に**供給支障**を発生させた事故（**波及事故**）",
            "① Tai nạn **gây chết người hoặc thương tích** do điện giật, sự cố hư hỏng, thao tác sai hoặc không thao tác công trình điện (chỉ áp dụng khi tử vong hoặc nhập viện).\n\n② **Cháy do điện** (với công trình, chỉ áp dụng khi bị cháy từ một nửa trở lên).\n\n③ Tai nạn do hư hỏng, thao tác sai hoặc không thao tác công trình điện, gây thiệt hại tài sản công và khiến cơ sở công cộng không thể sử dụng, hoặc gây ảnh hưởng xã hội.\n\n④ Hư hỏng công trình điện chính (đối với thiết bị phụ tải, thuộc trường hợp điện áp từ 10.000 V).\n\n⑤ **Sự cố lan truyền** gây **gián đoạn cấp điện** cho đơn vị kinh doanh điện lực do hư hỏng, thao tác sai hoặc không thao tác công trình điện tự dùng từ 3 kV trở lên có kết nối điện với công trình của đơn vị đó.",
            "事故の発生を知った時から**24時間以内**に速やかに電話等で報告する",
            "事故の発生を知った日から起算して**30日以内**に報告書を提出する",
            "電気工作物の設置の場所を管轄する**産業保安監督部長**"
          ]
        ],
        "rowsVi": [
          [
            "①感電又は破損事故若しくは電気工作物の誤操作や操作しなかったことにより**人が死傷した**事故（死亡又は入院した場合に限る）\n\n②**電気火災事故**（工作物にあっては半焼以上の場合に限る）\n\n③破損事故又は電気工作物の誤操作若しくは操作しなかったことにより、公共の財産に被害を与え、公共施設の使用を不可能にした事故又は社会的に影響を及ぼした事故\n\n④主要電気工作物（需要設備においては電圧１万Ｖ以上の場合）の破損事故\n\n⑤電気事業者の電気工作物と電気的に接続されている電圧3千 V以上の自家用電気工作物の破損事故又は誤操作若しくは操作しなかったことにより電気事業者に**供給支障**を発生させた事故（**波及事故**）",
            "① Tai nạn **gây chết người hoặc thương tích** do điện giật, sự cố hư hỏng, thao tác sai hoặc không thao tác công trình điện (chỉ áp dụng khi tử vong hoặc nhập viện).\n\n② **Cháy do điện** (với công trình, chỉ áp dụng khi bị cháy từ một nửa trở lên).\n\n③ Tai nạn do hư hỏng, thao tác sai hoặc không thao tác công trình điện, gây thiệt hại tài sản công và khiến cơ sở công cộng không thể sử dụng, hoặc gây ảnh hưởng xã hội.\n\n④ Hư hỏng công trình điện chính (đối với thiết bị phụ tải, thuộc trường hợp điện áp từ 10.000 V).\n\n⑤ **Sự cố lan truyền** gây **gián đoạn cấp điện** cho đơn vị kinh doanh điện lực do hư hỏng, thao tác sai hoặc không thao tác công trình điện tự dùng từ 3 kV trở lên có kết nối điện với công trình của đơn vị đó.",
            "Báo cáo sớm qua điện thoại hoặc phương thức tương đương trong **24 giờ** kể từ thời điểm biết sự cố.",
            "Nộp báo cáo bằng văn bản trong **30 ngày** tính từ ngày biết sự cố.",
            "**Trưởng cơ quan giám sát an toàn công nghiệp** có thẩm quyền tại nơi lắp đặt công trình điện."
          ]
        ]
      }
    },
    {
      "jp": "POINT　電気事故報告 といえば 速報 **24時間**以内、詳報 **30日**以内に報告する",
      "vi": "Ghi nhớ. Báo cáo nhanh trong **24 giờ** và báo cáo chi tiết trong **30 ngày**.",
      "note": "Báo cáo nhanh tính từ thời điểm biết sự cố. Báo cáo chi tiết tính từ ngày biết sự cố."
    },
    {
      "jp": "電気関連事故に関する用語",
      "vi": "Thuật ngữ về sự cố điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "「電気火災事故」とは、**漏電**、**短絡**、**せん絡**（アーク放電）その他の電気的要因により建造物、車両その他の工作物、山林等に火災が発生することをいいます。",
      "vi": "Cháy do điện là cháy ở tòa nhà, xe, công trình khác hoặc rừng do **rò điện**, **ngắn mạch**, **phóng điện hồ quang** hoặc nguyên nhân điện khác."
    },
    {
      "jp": "「破損事故」とは、電気工作物の破損等で機能が低下又は喪失したことにより、直ちに、その運転が**停止**し、若しくはその運転を**停止**しなければならなくなること、若しくはその使用を中止することをいいます。",
      "vi": "Sự cố hư hỏng là trường hợp công trình điện hỏng hoặc gặp sự cố tương tự, làm suy giảm hoặc mất chức năng và dẫn đến **dừng** vận hành ngay, buộc phải **dừng** vận hành ngay hoặc ngừng sử dụng."
    },
    {
      "jp": "「供給支障事故」とは、破損事故又は電気工作物の**誤操作**若しくは電気工作物を**操作しないこと**により電気の使用者に対し、電気の供給が**停止**し、又は電気の使用を緊急に**制限**することをいいます。ただし、電路が自動的に**再閉路**されることにより電気の供給の停止が終了した場合を除きます。",
      "vi": "Sự cố gián đoạn cấp điện là trường hợp sự cố hư hỏng, **thao tác sai** hoặc **không thao tác** công trình điện làm **ngừng** cấp điện cho người dùng hoặc phải **hạn chế** khẩn cấp việc sử dụng điện. Trừ trường hợp việc ngừng cấp điện kết thúc nhờ mạch điện tự động **đóng lại**."
    }
  ],
  "434": [
    {
      "jp": "練習問題 01　電気工作物の保安体系",
      "vi": "Bài luyện 01 · Hệ thống bảo đảm an toàn công trình điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "次の図は、「電気事業法」に基づく電気工作物の保安体系に関する記述である。空白箇所（ア）～（エ）の字句は。",
      "vi": "Sơ đồ nói về hệ thống bảo đảm an toàn công trình điện theo Luật Kinh doanh điện lực. Điền các từ phù hợp vào chỗ trống (ア)–(エ).",
      "note": ""
    },
    {
      "diagram": "lawSafetyExercise434"
    },
    {
      "jp": "一般用電気工作物",
      "vi": "Công trình điện loại thông thường",
      "heading": true
    },
    {
      "jp": "（ア）は、電気工作物が技術基準に適合しているかどうかを調査しなければならない。",
      "vi": "(ア) phải điều tra công trình điện có phù hợp tiêu chuẩn kỹ thuật hay không.",
      "note": ""
    },
    {
      "jp": "（イ）に、技術基準に適合しているかどうかの調査を委託することができる。",
      "vi": "Có thể ủy thác việc kiểm tra sự phù hợp cho (イ).",
      "note": ""
    },
    {
      "jp": "経済産業大臣は、技術基準に適合していないときは、使用の一時停止を命じ、又は制限することができる。",
      "vi": "Bộ trưởng Kinh tế, Thương mại và Công nghiệp có thể ra lệnh tạm dừng hoặc hạn chế sử dụng nếu không phù hợp tiêu chuẩn.",
      "note": ""
    },
    {
      "jp": "その職員に、電気工作物の設置の場所に立ち入り、電気工作物を検査させることができる。",
      "vi": "Có thể cho nhân viên vào nơi đặt công trình điện để kiểm tra.",
      "note": ""
    },
    {
      "jp": "自家用電気工作物（小規模事業用電気工作物を除く）",
      "vi": "Công trình điện tự dùng (trừ công trình điện 事業用 quy mô nhỏ)",
      "heading": true
    },
    {
      "jp": "電気工作物を設置する者は、電気工作物を技術基準に適合するように維持しなければならない。",
      "vi": "Chủ công trình phải duy trì công trình phù hợp tiêu chuẩn kỹ thuật.",
      "note": ""
    },
    {
      "jp": "（ウ）を定め、電気工作物の使用の開始前に、主務大臣に届け出なければならない。",
      "vi": "Phải lập (ウ) và nộp cho bộ trưởng phụ trách trước khi bắt đầu sử dụng công trình.",
      "note": ""
    },
    {
      "jp": "主任技術者を選任し、遅滞なく、その旨を主務大臣に届け出なければならない。",
      "vi": "Phải bổ nhiệm kỹ sư trưởng và kịp thời thông báo cho bộ trưởng phụ trách.",
      "note": ""
    },
    {
      "jp": "電気工作物の使用の開始の後、その旨を主務大臣に届け出なければならない。",
      "vi": "Sau khi bắt đầu sử dụng phải thông báo theo quy định.",
      "note": ""
    },
    {
      "jp": "経済産業大臣は、電気工作物を設置する者に対し、その業務の状況に関し報告又は資料の（エ）をさせることができる。",
      "vi": "Bộ trưởng có thể yêu cầu chủ công trình báo cáo hoặc (エ) tài liệu về tình trạng hoạt động.",
      "note": ""
    },
    {
      "jp": "解説",
      "vi": "Lời giải",
      "heading": true
    },
    {
      "jp": "電気工作物は、一般用電気工作物と事業用電気工作物に区分され、後者は電気事業の用に供する電気工作物と自家用電気工作物に分けられています。一般送配電事業者などの（ア）電線路維持運用者は、一般用電気工作物が技術基準に適合しているかどうかの調査業務を（イ）登録調査機関に委託することができます。また事業用電気工作物を設置する者は、（ウ）保安規程を定め、主任技術者を選任し、主務大臣に届け出なければなりません。さらに、使用の開始の後、その旨を主務大臣に届け出なければなりません。なお経済産業大臣は、業務の状況に関し報告又は資料の（エ）提出をさせることができます。",
      "vi": "Công trình điện được chia thành loại thông thường và loại 事業用. Loại 事業用 gồm công trình phục vụ kinh doanh điện lực và công trình điện tự dùng. (ア) Đơn vị duy trì và vận hành đường dây, như đơn vị truyền tải–phân phối chung, có thể ủy thác việc kiểm tra sự phù hợp với tiêu chuẩn kỹ thuật của công trình điện thông thường cho (イ) tổ chức kiểm tra đã đăng ký. Chủ lắp đặt công trình điện loại 事業用 phải lập (ウ) quy chế an toàn, bổ nhiệm người phụ trách kỹ thuật và báo cho bộ trưởng có thẩm quyền. Sau khi bắt đầu sử dụng, còn phải thông báo việc đó cho bộ trưởng có thẩm quyền. Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp có thể yêu cầu báo cáo tình trạng hoạt động hoặc (エ) nộp tài liệu.",
      "note": "Để điền (ア), tìm chủ thể phải kiểm tra. Để điền (イ), tìm bên nhận ủy thác kiểm tra. Chỗ (ウ) là văn bản phải lập trước khi sử dụng, còn (エ) là hành động với hồ sơ."
    },
    {
      "jp": "参考",
      "vi": "Tham khảo",
      "heading": true
    },
    {
      "jp": "主務大臣≒経済産業大臣です。主務大臣は行政事務関連、経済産業大臣は行政、政策関連などを所管します。令和4年度の問題では、主務大臣を経済産業大臣として出題されています。",
      "vi": "Trong ngữ cảnh này, bộ trưởng có thẩm quyền tương ứng với Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp. Sách phân biệt cách gọi theo thẩm quyền hành chính và chức danh phụ trách hành chính, chính sách. Đề năm Reiwa 4 dùng chức danh Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp."
    },
    {
      "jp": "解答　（ア）**電線路維持運用者**　（イ）**登録調査機関**　（ウ）**保安規程**　（エ）**提出**",
      "vi": "Đáp án. (ア) **Đơn vị duy trì và vận hành đường dây** · (イ) **Tổ chức kiểm tra đã đăng ký** · (ウ) **Quy chế an toàn** · (エ) **Nộp**."
    }
  ],
  "435": [
    {
      "jp": "1-2 電気工事士法 といえば 欠陥工事による災害防止を目的とする法律",
      "vi": "1-2 Luật Thợ điện · Luật nhằm ngăn ngừa tai nạn do thi công điện khiếm khuyết",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気工事士の義務",
      "vi": "Nghĩa vụ của thợ điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "第二種電気工事士の作業範囲は、一般用電気工作物等の電気工事で、次の義務があります。",
      "vi": "Phạm vi làm việc của thợ điện hạng hai là thi công công trình điện loại thông thường và loại tương ứng, kèm các nghĩa vụ:",
      "note": ""
    },
    {
      "jp": "・**電気設備技術基準**に適合した作業を行う。",
      "vi": "Thi công phù hợp **tiêu chuẩn kỹ thuật thiết bị điện**.",
      "note": ""
    },
    {
      "jp": "・作業に従事するときは、電気工事士**免状を携帯**する。",
      "vi": "**Mang theo chứng chỉ** thợ điện khi làm việc.",
      "note": ""
    },
    {
      "jp": "・都道府県知事から工事内容に関して報告を求められた場合は、**報告し**なければならない。",
      "vi": "**Báo cáo** khi thống đốc tỉnh yêu cầu về nội dung thi công.",
      "note": ""
    },
    {
      "jp": "・**電気用品安全法**の適用を受ける工事材料は、表示のあるものを使用しなければならない。",
      "vi": "Chỉ sử dụng vật tư thuộc phạm vi **Luật An toàn sản phẩm điện** có dấu hiệu phù hợp.",
      "note": ""
    },
    {
      "jp": "電気工事士免状の交付等",
      "vi": "Cấp, cấp lại và trả lại chứng chỉ thợ điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "・免状の**交付**、**再交付**及び**返納命令**は、**都道府県知事**が行う。",
      "vi": "• **Thống đốc tỉnh hoặc đô** thực hiện việc **cấp**, **cấp lại** và **ra lệnh nộp lại** chứng chỉ."
    },
    {
      "jp": "・氏名を変更した場合は、交付を受けた都道府県知事に書き換えを申請する。",
      "vi": "Khi đổi họ tên, xin điều chỉnh chứng chỉ tại tỉnh đã cấp.",
      "note": ""
    },
    {
      "jp": "POINT　電気工事士の義務 といえば **電技**に適合した作業、**免状**の携帯、**電気用品**を使用",
      "vi": "Ghi nhớ. Thợ điện làm việc theo **tiêu chuẩn kỹ thuật thiết bị điện**, mang **chứng chỉ** và sử dụng **sản phẩm điện** phù hợp."
    },
    {
      "jp": "電気工事士法",
      "vi": "Luật Thợ điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気工事の欠陥による災害の発生を防止するために、**電気工事士法**によって一定範囲の電気工作物について電気工事の作業に従事する者の資格が定められています。",
      "vi": "**Luật Thợ điện** quy định tư cách người thực hiện thi công cho một số loại công trình nhằm ngăn tai nạn do thi công điện có khiếm khuyết.",
      "note": ""
    },
    {
      "jp": "電気工事士の資格には、免状の種類により**第一種**電気工事士と**第二種**電気工事士があり、従事できる電気工作物の範囲が決められています。",
      "vi": "Theo loại chứng chỉ, thợ điện được chia thành **loại I** và **loại II**. Mỗi loại có phạm vi công trình điện được phép làm việc."
    },
    {
      "jp": "表1-2-1 電気工事士が従事できる業務",
      "vi": "Bảng 1-2-1 · Công việc thợ điện được phép làm",
      "heading": true,
      "table": {
        "jp": [
          "資格",
          "従事できる業務"
        ],
        "vi": [
          "Chứng chỉ",
          "Công việc được phép làm"
        ],
        "rows": [
          [
            "第一種電気工事士",
            "Thợ điện loại I",
            "自家用電気工作物で最大電力**500 kW未満**の**需要設備**の電気工事の作業（工場、ビル等の電気設備の工事）"
          ],
          [
            "第二種電気工事士",
            "Thợ điện loại II",
            "**一般用電気工作物等**※1の電気工事の作業（住宅、小規模な店舗等の電気設備の工事）"
          ]
        ],
        "rowsVi": [
          [
            "第一種電気工事士",
            "Thợ điện loại I",
            "Thi công điện cho **thiết bị sử dụng điện** thuộc công trình điện tự dùng có công suất cực đại **dưới 500 kW** (như thiết bị điện tại nhà máy, tòa nhà)."
          ],
          [
            "第二種電気工事士",
            "Thợ điện loại II",
            "Thi công điện cho **công trình điện loại thông thường và các loại thuộc chú thích 1** (như thiết bị điện tại nhà ở, cửa hàng nhỏ)."
          ]
        ]
      }
    },
    {
      "jp": "注）自家用500 kW未満の設備において「ネオン工事」と「非常用予備発電装置工事」については、特種電気工事資格者という認定証が必要。",
      "vi": "Chú thích. Với thiết bị điện tự dùng dưới 500 kW, thi công đèn neon và thiết bị máy phát dự phòng khẩn cấp cần chứng nhận thi công điện đặc biệt."
    },
    {
      "jp": "※1 「一般用電気工作物等」とは、一般用電気工作物及び小規模事業用電気工作物をいう。",
      "vi": "Chú thích 1. Cụm 一般用電気工作物等 bao gồm công trình điện loại thông thường và công trình điện 事業用 quy mô nhỏ."
    }
  ],
  "436": [
    {
      "jp": "電気工事業法（電気工事業の業務の適正化に関する法律）",
      "vi": "Luật Kinh doanh thi công điện (luật về chuẩn hóa hoạt động kinh doanh thi công điện)",
      "note": "",
      "heading": true
    },
    {
      "jp": "**電気工事業法**は、電気工事業の登録や業務の規制により、電気工作物の保安の確保を目的としています。",
      "vi": "**Luật Kinh doanh thi công điện** nhằm bảo đảm an toàn công trình điện thông qua đăng ký hoạt động và điều chỉnh nghiệp vụ thi công điện."
    },
    {
      "jp": "電気工事業の登録",
      "vi": "Đăng ký hoạt động thi công điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "**一般用電気工作物等**に係る電気工事業を営もうとする者は、2つ以上の都道府県の区域内に営業所を設置するときは**経済産業大臣**の、1つの都道府県の場合は**都道府県知事**の、**登録**を受ける必要があります。",
      "vi": "Người muốn kinh doanh thi công **công trình điện loại thông thường và công trình điện 事業用 quy mô nhỏ** phải **đăng ký** với **Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp** nếu đặt cơ sở kinh doanh tại ít nhất hai tỉnh hoặc đô. Nếu chỉ đặt trong một tỉnh hoặc đô, đăng ký với **thống đốc địa phương**."
    },
    {
      "jp": "また、登録の有効期間は**5年**で、引き続き電気工事業を営もうとする者は、更新の登録を受けなければなりません。また、登録を受けた者を**登録電気工事業者**といいます。",
      "vi": "Đăng ký có hiệu lực **5 năm**. Người muốn tiếp tục kinh doanh thi công điện phải gia hạn. Người đã đăng ký gọi là **đơn vị kinh doanh thi công điện đã đăng ký**."
    },
    {
      "jp": "電気工事業の通知",
      "vi": "Thông báo về hoạt động thi công điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "500 kW未満の**自家用電気工作物**のみに係る電気工事業を営もうとする者は、その事業を開始しようとする日の**10日**前までに、2つ以上の都道府県の区域内に営業所を設置するときは**経済産業大臣**に、1つの都道府県の区域内のみの場合は**都道府県知事**に、その旨を**通知**しなければなりません。この電気工事業者は**通知電気工事業者**といいます。",
      "vi": "Người chỉ kinh doanh thi công **công trình điện tự dùng** dưới 500 kW phải **thông báo** chậm nhất **10 ngày** trước ngày dự kiến bắt đầu. Nếu có cơ sở kinh doanh tại ít nhất hai tỉnh hoặc đô, báo cho **Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp**. Nếu chỉ trong một tỉnh hoặc đô, báo cho **thống đốc địa phương**. Người thực hiện thủ tục này gọi là **đơn vị kinh doanh thi công điện đã thông báo**.",
      "note": "Phân biệt thủ tục 登録 ở đoạn trên với 通知 khi chỉ thi công công trình điện tự dùng thuộc phạm vi sách nêu."
    },
    {
      "jp": "主任電気工事士を置く",
      "vi": "Bố trí người phụ trách thi công điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "登録電気工事業者は、その営業所ごとに電気工事業の作業を管理させるため、第一種電気工事士又は第二種電気工事士免状の交付を受けた後電気工事に関し**3年以上**の実務経験を有する者を、**主任電気工事士**として置かなければなりません。",
      "vi": "Đơn vị đã đăng ký phải bố trí tại mỗi cơ sở kinh doanh một **thợ điện phụ trách** để quản lý công việc. Có thể chọn thợ điện loại I hoặc người có kinh nghiệm thực tế về thi công điện **từ 3 năm trở lên** sau khi được cấp chứng chỉ thợ điện loại II."
    },
    {
      "jp": "器具の備え付け",
      "vi": "Trang bị dụng cụ",
      "note": "",
      "heading": true
    },
    {
      "jp": "一般用電気工作物の電気工事を行う営業所は、次の器具を備える必要があります。",
      "vi": "Cơ sở thi công công trình điện loại thông thường phải có các dụng cụ sau."
    },
    {
      "jp": "①**絶縁抵抗計**、②**接地抵抗計**、③**回路計**（抵抗、交流電圧を測定できるもの）",
      "vi": "① **Máy đo điện trở cách điện**, ② **máy đo điện trở nối đất**, ③ **đồng hồ đo mạch** (đo được điện trở và điện áp xoay chiều)."
    },
    {
      "jp": "自家用電気工作物の電気工事を行う営業所は、次の器具を備える必要があります※2。",
      "vi": "Cơ sở thi công công trình điện tự dùng phải có các dụng cụ sau (xem chú thích 2)."
    },
    {
      "jp": "①絶縁抵抗計、②接地抵抗計、③回路計、④**低圧検電器**、⑤**高圧検電器**、⑥**継電器試験装置**、⑦**絶縁耐力試験装置**",
      "vi": "① Máy đo điện trở cách điện, ② máy đo điện trở nối đất, ③ đồng hồ đo mạch, ④ **dụng cụ kiểm tra có điện hạ áp**, ⑤ **dụng cụ kiểm tra có điện cao áp**, ⑥ **thiết bị thử rơ-le**, ⑦ **thiết bị thử khả năng chịu điện áp của cách điện**."
    },
    {
      "jp": "標識の掲示",
      "vi": "Niêm yết biển hiệu",
      "note": "",
      "heading": true
    },
    {
      "jp": "営業所、施工場所ごとに次の事項を記載した標識を掲げる必要があります。",
      "vi": "Phải treo biển ghi các nội dung sau tại từng cơ sở kinh doanh và từng nơi thi công."
    },
    {
      "jp": "①氏名（又は名称）、法人にあっては代表者の氏名、②営業所の名称、③電気工事の種類、④登録年月日、登録番号、⑤主任電気工事士の氏名",
      "vi": "① Họ tên hoặc tên đơn vị, với pháp nhân ghi họ tên người đại diện. ② Tên cơ sở kinh doanh. ③ Loại công trình điện thi công. ④ Ngày và số đăng ký. ⑤ Họ tên thợ điện phụ trách."
    },
    {
      "jp": "※2 器具の備え付け：⑥と⑦は必要なとき使用できる状態であれば、常時備えなくてもよいことになっています。",
      "vi": "Chú thích 2. Các thiết bị ⑥ và ⑦ có thể bố trí theo nhu cầu, miễn là sử dụng được khi cần."
    }
  ],
  "437": [
    {
      "jp": "帳簿の備えと保存",
      "vi": "Chuẩn bị và lưu giữ sổ sách",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気工事ごとに次の事項を記載した帳簿を営業所ごとに備え、これを**5年間**保存しなければなりません。",
      "vi": "Mỗi cơ sở kinh doanh phải có sổ ghi các thông tin dưới đây cho từng công trình điện và lưu sổ **5 năm**.",
      "note": ""
    },
    {
      "jp": "①注文者の氏名又は名称、②電気工事の種類、③施工場所、④施工年月日、⑤主任電気工事士、⑥作業者の氏名、⑦配線図、⑧検査の結果",
      "vi": "① Khách hàng; ② loại công việc; ③ địa điểm; ④ ngày thi công; ⑤ người phụ trách; ⑥ tên nhân viên; ⑦ sơ đồ đấu dây; ⑧ kết quả kiểm tra.",
      "note": ""
    },
    {
      "jp": "POINT　第一種電気工事士 といえば **500 kW**未満の設備、第二種 といえば **一般用**設備の工事",
      "vi": "Ghi nhớ. Thợ điện loại I thi công thiết bị dưới **500 kW**. Thợ điện loại II thi công thiết bị loại **thông thường**."
    },
    {
      "jp": "電気工事業に必要な器具 といえば **絶縁抵抗計**、**接地抵抗計**、**回路計**",
      "vi": "Dụng cụ cần cho thi công điện gồm **máy đo điện trở cách điện**, **máy đo điện trở nối đất** và **đồng hồ đo mạch**."
    },
    {
      "jp": "※自家用の工事の場合は、他に**検電器**（低圧、高圧）、**継電器試験装置**、**絶縁耐力試験装置**が必要",
      "vi": "Với công trình điện tự dùng còn cần **dụng cụ kiểm tra có điện** (hạ áp, cao áp), **thiết bị thử rơ-le** và **thiết bị thử khả năng chịu điện áp của cách điện**."
    },
    {
      "jp": "練習問題 01　電気工事業法",
      "vi": "Bài luyện 01 · Luật Kinh doanh thi công điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気工事業の業務の適正化に関する法律（電気工事業法）に基づく記述として、誤っているものは。",
      "vi": "Trong các phát biểu sau theo Luật Kinh doanh thi công điện, phát biểu nào sai?",
      "note": ""
    },
    {
      "jp": "（1）電気工事業とは、電気事業法に規定する電気工事を行う事業であって、その事業を営もうとする者は、経済産業大臣の事業許可を受けなければならない。",
      "vi": "(1) Doanh nghiệp muốn hoạt động thi công điện theo luật phải xin giấy phép kinh doanh của bộ trưởng.",
      "note": ""
    },
    {
      "jp": "（2）登録電気工事業者の登録には有効期間がある。",
      "vi": "(2) Đăng ký của doanh nghiệp thi công điện có thời hạn hiệu lực.",
      "note": ""
    },
    {
      "jp": "（3）電気工事業者は、その営業所ごとに、絶縁抵抗計その他の経済産業省令で定める器具を備えなければならない。",
      "vi": "(3) Mỗi cơ sở phải trang bị điện trở kế cách điện và dụng cụ khác theo quy định.",
      "note": ""
    },
    {
      "jp": "（4）電気工事業者は、その営業所及び電気工事の施工場所ごとに、その見やすい場所に、氏名又は名称、登録番号その他の経済産業省令で定める事項を記載した標識を掲げなければならない。",
      "vi": "(4) Phải niêm yết biển chứa họ tên/tên doanh nghiệp, số đăng ký và thông tin bắt buộc ở chỗ dễ thấy tại cơ sở và nơi thi công.",
      "note": ""
    },
    {
      "jp": "（5）電気工事業者は、その営業所ごとに帳簿を備え、その業務に関し経済産業省令で定める事項を記載し、これを保存しなければならない。",
      "vi": "(5) Phải lưu sổ tại mỗi cơ sở và ghi chép các mục bắt buộc.",
      "note": ""
    },
    {
      "jp": "解説　（1）が誤りです。（電気工事業法の規定）「電気工事業」とは、電気工事士法に規定する電気工事を行う事業であって、その事業を営もうとする者は、二以上の都道府県の区域内に営業所を設置するときは、経済産業大臣の、一都道府県のみの場合は、都道府県知事の登録を受けなければなりません（自家用電気工作物のみの場合は、通知を行います）。",
      "vi": "Lời giải. Mệnh đề (1) sai. Theo Luật Kinh doanh thi công điện, kinh doanh thi công điện là thực hiện công việc thi công quy định trong Luật Thợ điện. Nếu có cơ sở tại từ hai tỉnh hoặc đô trở lên, phải đăng ký với Bộ trưởng Bộ Kinh tế, Thương mại và Công nghiệp. Nếu chỉ ở một tỉnh hoặc đô, đăng ký với thống đốc địa phương. Nếu chỉ thi công công trình điện tự dùng thì thực hiện thủ tục thông báo.",
      "note": "Mệnh đề (1) có hai điểm cần nhận ra. Luật định nghĩa công việc thi công là 電気工事士法. Thủ tục trong bài là đăng ký hoặc thông báo."
    },
    {
      "jp": "解答　**（1）**",
      "vi": "Đáp án **(1)**."
    }
  ],
  "438": [
    {
      "jp": "1-3 電気用品安全法 といえば ひし形PSEと丸形PSEによる安全性確保の法律",
      "vi": "1-3 Luật An toàn sản phẩm điện · Bảo đảm an toàn bằng dấu PSE hình thoi và hình tròn",
      "heading": true
    },
    {
      "diagram": "lawPseMarks438"
    },
    {
      "jp": "電気用品安全法、電気用品",
      "vi": "Luật An toàn sản phẩm điện và sản phẩm điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "**電気用品安全法**は、電気用品の**製造**、**販売**等を規制するとともに、電気用品の安全性の確保につき民間業者の自主的な活動を促進することにより、電気用品による危険及び障害※1の発生を防止することを目的としています。",
      "vi": "**Luật An toàn sản phẩm điện** nhằm ngăn ngừa nguy hiểm và nhiễu do sản phẩm điện gây ra (xem chú thích 1) bằng cách điều chỉnh việc **sản xuất**, **bán** sản phẩm và khuyến khích doanh nghiệp tư nhân chủ động bảo đảm an toàn."
    },
    {
      "jp": "電気用品とは",
      "vi": "Sản phẩm điện là gì?",
      "note": "",
      "heading": true
    },
    {
      "jp": "**一般用**電気工作物等の部分となり、又はこれに接続して用いられる機械、器具又は材料、及び**携帯発電機**であって、政令で定められたものをいいます。",
      "vi": "Sản phẩm điện là máy móc, dụng cụ hoặc vật liệu dùng làm bộ phận của hoặc kết nối với công trình điện loại **thông thường** và các loại liên quan, cũng như **máy phát điện xách tay**, thuộc danh mục quy định bằng nghị định."
    },
    {
      "jp": "特定電気用品とは",
      "vi": "Sản phẩm điện đặc định là gì?",
      "note": "",
      "heading": true
    },
    {
      "jp": "構造又は使用方法その他の使用状況から見て特に**危険**又は**障害**の発生するおそれが多い電気用品であって、政令で定めるものをいいます。",
      "vi": "Sản phẩm điện đặc định là sản phẩm thuộc danh mục quy định bằng nghị định, có nguy cơ cao gây **nguy hiểm** hoặc **nhiễu**, xét theo cấu tạo, cách sử dụng và các tình huống sử dụng khác."
    },
    {
      "jp": "電気用品の表示、使用の制限",
      "vi": "Nhãn sản phẩm điện và hạn chế sử dụng",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気用品を製造又は輸入する場合において、その電気用品を販売するときまでに、検査機関による検査を受け、技術基準の適合証明が得られた場合は、表1-3-1のような表示をすることができます。",
      "vi": "Khi sản xuất hoặc nhập khẩu và bán sản phẩm điện, nếu đã được kiểm tra và đáp ứng yêu cầu chứng nhận phù hợp, có thể ghi nhãn theo bảng 1-3-1.",
      "note": ""
    },
    {
      "jp": "電気用品安全法による表示がない電気用品を使用することはできません。",
      "vi": "Không được sử dụng sản phẩm điện thuộc diện bắt buộc nhưng không có nhãn phù hợp.",
      "note": ""
    },
    {
      "jp": "電気用品安全法の目的は、粗悪な電気用品が出ないようにすることで、不良品を①製造又は輸入させない、②販売させない、③使用させない、の各段階で取締りを行うものです。",
      "vi": "Luật An toàn sản phẩm điện nhằm ngăn sản phẩm điện kém chất lượng xuất hiện. Luật kiểm soát để sản phẩm lỗi ① không được sản xuất hoặc nhập khẩu, ② không được bán, ③ không được sử dụng."
    },
    {
      "jp": "※1 危険及び障害：危険とは感電や火災、障害とは電波障害などです。",
      "vi": "Chú thích 1. Nguy hiểm gồm điện giật hoặc cháy. Nhiễu gồm nhiễu sóng vô tuyến, v.v."
    }
  ],
  "439": [
    {
      "jp": "表1-3-1 電気用品の表示",
      "vi": "Bảng 1-3-1 · Nhãn sản phẩm điện",
      "heading": true,
      "table": {
        "jp": [
          "電気用品",
          "表示"
        ],
        "vi": [
          "Sản phẩm điện",
          "Nhãn"
        ],
        "rows": [
          [
            "特定電気用品の表示",
            "Sản phẩm điện đặc định",
            "①**届出事業者**の名称\n②**登録検査機関**の名称\n③表示：ひし形PSE\n又は**〈PS〉E**（上の表示が困難なもの）"
          ],
          [
            "特定電気用品以外の電気用品の表示",
            "Sản phẩm điện ngoài nhóm đặc định",
            "①**届出事業者**の名称\n②表示：丸形PSE\n又は**（PS）E**（上の表示が困難なもの）"
          ]
        ],
        "rowsVi": [
          [
            "特定電気用品の表示",
            "Sản phẩm điện đặc định",
            "① Tên **đơn vị đã thông báo**\n② Tên **tổ chức kiểm tra đã đăng ký**\n③ Dấu PSE hình thoi hoặc **〈PS〉E** nếu khó in dấu hình thoi."
          ],
          [
            "特定電気用品以外の電気用品の表示",
            "Sản phẩm điện ngoài nhóm đặc định",
            "① Tên **đơn vị đã thông báo**\n② Dấu PSE hình tròn hoặc **(PS) E** nếu khó in dấu hình tròn."
          ]
        ]
      }
    },
    {
      "jp": "注1）PSE：Product（製品）、Safety（安全）、Electrical Appliances & Materials（電気の器具と材料）を意味している。",
      "vi": "Chú thích 1. PSE chỉ Product (sản phẩm), Safety (an toàn) và Electrical Appliances & Materials (thiết bị và vật liệu điện)."
    },
    {
      "jp": "注2）登録検査機関の例：JET（財団法人電気安全環境研究所）、JQA（財団法人日本品質保証機構）、他。",
      "vi": "Chú thích 2. Ví dụ tổ chức kiểm tra đã đăng ký gồm JET (Viện Nghiên cứu An toàn và Môi trường Điện) và JQA (Tổ chức Đảm bảo Chất lượng Nhật Bản)."
    },
    {
      "jp": "電気用品の範囲",
      "vi": "Phạm vi sản phẩm điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気用品の範囲は、**一般用電気工作物等の部分**となり、又はこれに接続して用いられる機械、器具又は材料で、定格電圧**100 V**以上**300 V**以下、周波数**50 Hz**及び**60 Hz**のもの、容量は比較的小さいもの、携帯発電機にあっては定格電圧**30 V**以上**300 V**以下のもの、リチウムイオン蓄電池などです。",
      "vi": "Phạm vi sản phẩm điện gồm máy móc, dụng cụ hoặc vật liệu là **bộ phận của công trình điện loại thông thường và các loại liên quan**, hoặc kết nối với công trình đó, có điện áp định mức từ **100 V** đến **300 V**, tần số **50 Hz** và **60 Hz**, công suất tương đối nhỏ. Phạm vi còn gồm máy phát xách tay có điện áp định mức từ **30 V** đến **300 V**, pin lithium-ion, v.v."
    },
    {
      "jp": "特定電気用品及び特定電気用品以外の電気用品の具体例は、表1-3-2を参照してください。",
      "vi": "Xem bảng 1-3-2 để biết ví dụ cụ thể về sản phẩm điện thuộc nhóm đặc định và ngoài nhóm đặc định."
    },
    {
      "jp": "表1-3-2 特定電気用品の例",
      "vi": "Bảng 1-3-2 · Ví dụ sản phẩm điện đặc định",
      "heading": true,
      "table": {
        "jp": [
          "種類",
          "特定電気用品の例"
        ],
        "vi": [
          "Loại",
          "Ví dụ sản phẩm điện đặc định"
        ],
        "rows": [
          [
            "電線類",
            "Dây điện",
            "絶縁電線：**100 mm²**以下、ケーブル：**22 mm²**以下、**コード**"
          ],
          [
            "ヒューズ類",
            "Cầu chì",
            "温度ヒューズ、その他のヒューズ：1 A以上200 A以下（筒形、栓形ヒューズは除く）"
          ],
          [
            "配線器具類",
            "Thiết bị đấu dây",
            "**点滅器**、**コンセント**、**配線用遮断器**、**漏電遮断器**、**差込接続器**、**電流制限器**"
          ],
          [
            "小形単相変圧器類",
            "Máy biến áp nhỏ một pha",
            "変圧器：500 V・A以下、安定器：500 W以下"
          ],
          [
            "電熱器具類",
            "Thiết bị gia nhiệt bằng điện",
            "電気便座、電気温水器：10 kW以下"
          ],
          [
            "電動力応用機械器具類",
            "Máy và dụng cụ dùng động cơ điện",
            "ポンプ：1.5 kW以下、ショウケース：300 W以下"
          ],
          [
            "携帯発電機",
            "Máy phát xách tay",
            "30 V以上300 V以下"
          ]
        ],
        "rowsVi": [
          [
            "電線類",
            "Dây điện",
            "Dây cách điện đến **100 mm²**, cáp đến **22 mm²**, **dây mềm**."
          ],
          [
            "ヒューズ類",
            "Cầu chì",
            "Cầu chì nhiệt và cầu chì khác từ 1 A đến 200 A (trừ cầu chì dạng ống và dạng nút)."
          ],
          [
            "配線器具類",
            "Thiết bị đấu dây",
            "**Công tắc**, **ổ cắm**, **áp-tô-mát**, **thiết bị cắt dòng rò**, **bộ nối kiểu cắm**, **thiết bị giới hạn dòng**."
          ],
          [
            "小形単相変圧器類",
            "Máy biến áp nhỏ một pha",
            "Máy biến áp đến 500 VA, chấn lưu đến 500 W."
          ],
          [
            "電熱器具類",
            "Thiết bị gia nhiệt bằng điện",
            "Bệ ngồi vệ sinh gia nhiệt bằng điện, bình nước nóng điện đến 10 kW."
          ],
          [
            "電動力応用機械器具類",
            "Máy và dụng cụ dùng động cơ điện",
            "Máy bơm đến 1,5 kW, tủ trưng bày đến 300 W."
          ],
          [
            "携帯発電機",
            "Máy phát xách tay",
            "Từ 30 V đến 300 V."
          ]
        ]
      }
    },
    {
      "jp": "特定電気用品の以外の電気用品の例\n電線管、フロアダクト、線ぴ、換気扇、電灯器具、ラジオ、テレビ、LEDランプ、LED電灯器具、リチウムイオン蓄電池、他",
      "vi": "Ví dụ sản phẩm điện ngoài nhóm đặc định\nỐng luồn dây, máng cáp sàn, nẹp dây, quạt thông gió, bộ đèn, radio, TV, bóng LED, bộ đèn LED, pin lithium-ion, v.v."
    },
    {
      "jp": "POINT　特定電気用品 といえば **電線** **100 mm²**以下、**点滅器**、**コンセント**、**配線用遮断器**、**小形単相変圧器**、**携帯発電機**など、危険又は障害の発生するおそれが多い電気用品",
      "vi": "Ghi nhớ. Sản phẩm điện đặc định có nguy cơ cao gây nguy hiểm hoặc nhiễu, như **dây điện** đến **100 mm²**, **công tắc**, **ổ cắm**, **áp-tô-mát**, **máy biến áp nhỏ một pha** và **máy phát xách tay**."
    },
    {
      "jp": "特定電気用品以外の電気用品 といえば **電線管類**、**電灯器具**、**電子応用機械器具**、他",
      "vi": "Sản phẩm điện ngoài nhóm đặc định gồm **ống luồn dây**, **bộ đèn**, **máy và thiết bị ứng dụng điện tử**, v.v."
    }
  ],
  "440": [
    {
      "jp": "練習問題01　電気用品",
      "vi": "Bài luyện 01 · Sản phẩm điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "「電気用品安全法」に基づく記述において、空白箇所に当てはまる字句、数字又は記号は。",
      "vi": "Điền từ, số hoặc ký hiệu phù hợp vào các chỗ trống theo Luật An toàn sản phẩm điện.",
      "note": ""
    },
    {
      "jp": "a.（ア）電気用品は、構造又は使用方法その他の使用状況から見て特に危険又は障害の発生するおそれが多い電気用品である。",
      "vi": "a. Sản phẩm điện (ア) là sản phẩm có nguy cơ đặc biệt cao gây tai nạn hoặc hư hại do cấu tạo/cách dùng.",
      "note": ""
    },
    {
      "jp": "b. 定格電圧が（イ）V以上600 V以下のコードは、導体の公称断面積及び線心の本数に関わらず、（ア）電気用品である。",
      "vi": "b. Dây nguồn có điện áp định mức từ (イ) V đến 600 V thuộc nhóm điện dụng (ア), không phụ thuộc tiết diện lõi và số lõi.",
      "note": ""
    },
    {
      "jp": "c. 電気用品を製造し、又は（ウ）する場合においては、経済産業省令で定める技術基準に適合するようにしなければならない。",
      "vi": "c. Khi sản xuất hoặc (ウ) sản phẩm điện phải đáp ứng tiêu chuẩn kỹ thuật quy định.",
      "note": ""
    },
    {
      "jp": "d. 電気工事士は、電気工作物の設置又は変更の工事に（ア）電気用品を使用する場合、（エ）又は（オ）の記号が表示されたものでなければ使用してはならない。",
      "vi": "d. Khi dùng sản phẩm điện (ア) trong thi công, thợ điện chỉ được dùng sản phẩm có dấu (エ) hoặc (オ) phù hợp.",
      "note": ""
    },
    {
      "jp": "解説",
      "vi": "Lời giải",
      "heading": true
    },
    {
      "jp": "「電気用品」とは、一般用電気工作物の部分となり、又はこれに接続して用いられる機械、器具又は材料であって政令で定めるもの、及び携帯発電機、蓄電池であって、政令で定めるものをいいます。「特定電気用品」とは、構造又は使用方法その他の使用状況から見て特に危険又は障害の発生するおそれが多い電気用品であって、政令で定めるものをいいます。",
      "vi": "Sản phẩm điện gồm máy móc, dụng cụ hoặc vật liệu làm bộ phận của hay kết nối với công trình điện loại thông thường và thuộc danh mục quy định bằng nghị định, cùng máy phát điện xách tay và pin lưu trữ thuộc danh mục do nghị định quy định. Sản phẩm điện đặc định là sản phẩm thuộc danh mục do nghị định quy định, có nguy cơ cao gây nguy hiểm hoặc nhiễu xét theo cấu tạo, cách sử dụng và các tình huống sử dụng khác."
    },
    {
      "jp": "定格電圧が100 V以上600 V以下の電線（①絶縁電線（100 mm²以下）、②ケーブル（22 mm²以下）、③コード（すべて）、④キャブタイヤケーブル（100 mm²以下））は、特定電気用品です。電気用品を製造し、又は輸入する場合においては、経済産業省令で定める技術基準に適合しなければなりません。電気工事士は、所定の表示のない電気用品を電気工作物の設置又は変更の工事に使用することはできません。",
      "vi": "Dây dẫn có điện áp định mức từ 100 V đến 600 V thuộc nhóm đặc định gồm ① dây cách điện đến 100 mm², ② cáp đến 22 mm², ③ mọi loại dây mềm, ④ cáp mềm vỏ bọc cao su kiểu cabtyre đến 100 mm². Khi sản xuất hoặc nhập khẩu sản phẩm điện, phải đáp ứng tiêu chuẩn kỹ thuật theo thông tư của Bộ Kinh tế, Thương mại và Công nghiệp. Thợ điện không được dùng sản phẩm thiếu nhãn quy định khi lắp mới hoặc thay đổi công trình điện.",
      "note": "Câu b hỏi riêng dải điện áp của dây mềm. Trong dải này, tiết diện và số lõi không làm thay đổi đáp án."
    },
    {
      "diagram": "lawPseTable440"
    },
    {
      "jp": "解答　（ア）**特定**　（イ）**100**　（ウ）**輸入**　（エ）**ひし形PSE**　（オ）**〈PS〉E**",
      "vi": "Đáp án. (ア) **đặc định** · (イ) **100** · (ウ) **nhập khẩu** · (エ) **PSE hình thoi** · (オ) **〈PS〉E**."
    }
  ],
  "441": [
    {
      "jp": "2-1 電気設備技術基準・解釈 といえば「解釈」で技術的内容を示す",
      "vi": "2-1 Tiêu chuẩn kỹ thuật thiết bị điện và phần giải thích · “Phần giải thích” trình bày các yêu cầu kỹ thuật cụ thể.",
      "note": "",
      "heading": true
    },
    {
      "jp": "「電技」と「解釈」、用語の定義",
      "vi": "“Tiêu chuẩn kỹ thuật” và “Phần giải thích”; định nghĩa thuật ngữ.",
      "note": "",
      "heading": true
    },
    {
      "jp": "電気設備の技術基準（以下「電技」）は、電気事業法に基づいて制定された省令で、**感電**、**火災**などの電気災害の防止、電気供給支障の防止等のために定めており、電気設備技術基準の解釈（以下「解釈」）は、技術的要件を満たすべき技術的内容を具体的に示したものです。",
      "vi": "Tiêu chuẩn kỹ thuật thiết bị điện (gọi tắt là 電技) là thông tư ban hành theo Luật Kinh doanh điện lực để phòng ngừa tai nạn điện như **điện giật**, **cháy** và ngăn gián đoạn cấp điện. Phần giải thích tiêu chuẩn kỹ thuật thiết bị điện (gọi tắt là 解釈) trình bày cụ thể nội dung kỹ thuật để đáp ứng các yêu cầu kỹ thuật.",
      "note": ""
    },
    {
      "jp": "用語の定義",
      "vi": "Định nghĩa thuật ngữ",
      "note": "",
      "heading": true
    },
    {
      "jp": "「電技」や「解釈」で用いられる用語の定義を理解することが重要です。ここでは一般的な基本用語を学びます。",
      "vi": "Cần hiểu đúng thuật ngữ dùng trong tiêu chuẩn và phần giải thích; phần này giới thiệu các khái niệm cơ bản.",
      "note": ""
    },
    {
      "jp": "表2-1-1 「電技」や「解釈」で使用される用語",
      "vi": "Bảng 2-1-1 · Thuật ngữ dùng trong tiêu chuẩn và phần giải thích",
      "heading": true,
      "table": {
        "jp": [
          "用語",
          "定義"
        ],
        "vi": [
          "Thuật ngữ",
          "Định nghĩa"
        ],
        "rows": [
          [
            "**発電所**",
            "**Nhà máy điện**",
            "発電機、原動機、燃料電池、太陽電池その他の機械器具を施設して**電気を発生させる所**をいう。"
          ],
          [
            "**変電所**",
            "**Trạm biến áp**",
            "**構外**から伝送される電気を構内に施設した変圧器、回転変流器、整流器その他の電気機械器具により変成する所であって、変成した電気をさらに**構外**に伝送するものをいう。"
          ],
          [
            "**架空引込線**",
            "**Dây dẫn vào trên không**",
            "架空電線路の支持物から他の支持物を経ないで需要場所の**取付点**に至る架空電線をいう。"
          ],
          [
            "**引込線**",
            "**Dây dẫn vào**",
            "架空引込線及び需要場所の造営物の側面等に施設する電線であって当該需要場所の**引込口**に至るものをいう。"
          ]
        ],
        "rowsVi": [
          [
            "**発電所**",
            "**Nhà máy điện**",
            "Nơi bố trí máy phát, động cơ sơ cấp, pin nhiên liệu, pin mặt trời và máy móc, dụng cụ khác để **phát điện**."
          ],
          [
            "**変電所**",
            "**Trạm biến áp**",
            "Nơi biến đổi điện truyền từ **bên ngoài khuôn viên** bằng máy biến áp, bộ biến đổi quay, bộ chỉnh lưu hay máy móc điện khác bố trí trong khuôn viên, rồi truyền điện đã biến đổi ra **ngoài khuôn viên**."
          ],
          [
            "**架空引込線**",
            "**Dây dẫn vào trên không**",
            "Dây trên không đi từ vật đỡ đường dây trên không tới **điểm gắn dây** ở nơi sử dụng điện, không qua vật đỡ khác."
          ],
          [
            "**引込線**",
            "**Dây dẫn vào**",
            "Gồm dây dẫn vào trên không và dây lắp dọc mặt bên công trình ở nơi sử dụng điện tới **điểm đưa điện vào**."
          ]
        ]
      }
    },
    {
      "jp": "接近状態に関する用語",
      "vi": "Thuật ngữ về trạng thái tiếp cận",
      "heading": true
    },
    {
      "jp": "「解釈」では、架空電線が他の工作物と接近する場合に、接近する状態により、**第1次**接近状態と**第2次**接近状態に分けて規制しています。",
      "vi": "Phần giải thích chia trường hợp dây trên không tiếp cận công trình khác thành tiếp cận **cấp 1** và **cấp 2** để quy định theo từng trạng thái."
    },
    {
      "diagram": "lawApproach441"
    },
    {
      "jp": "**第1次**接近状態とは、架空電線が他の工作物と接近（併行する場合を含み、交差する場合及び同一支持物に施設される場合を除く。以下同じ。）する場合において、当該架空電線が他の工作物の上方又は側方において、水平距",
      "vi": "Tiếp cận **cấp 1** áp dụng khi dây trên không đến gần công trình khác, kể cả chạy song song, trừ trường hợp giao cắt hoặc cùng đặt trên một vật đỡ (phần sau cũng vậy). Xét dây nằm phía trên hoặc phía bên công trình khác và có khoảng cách ngang…"
    }
  ],
  "442": [
    {
      "jp": "離で架空電線路の支持物の地表上の高さに相当する距離以内に施設されること（水平距離で**3 m**未満に施設されることを除く）により、架空電線路の電線の**切断**、支持物の**倒壊**等の際に、当該電線が他の工作物に**接触する**おそれがある状態をいいます。",
      "vi": "…trong phạm vi bằng chiều cao của vật đỡ đường dây trên không tính từ mặt đất (trừ khoảng cách ngang dưới **3 m**). Đây là tình trạng dây có thể **chạm** công trình khác khi dây **đứt**, vật đỡ **đổ** hoặc có sự cố tương tự.",
      "note": "Đọc tiếp định nghĩa từ trang 441. Khoảng cách ngang dưới 3 m thuộc tiếp cận cấp 2."
    },
    {
      "jp": "**第2次**接近状態とは、架空電線が他の工作物と接近する場合において、当該架空電線が他の工作物の**上方**又は**側方**において、水平距離で**3 m**未満に施設される状態をいいます。",
      "vi": "Tiếp cận **cấp 2** là tình trạng dây trên không được lắp ở **phía trên** hoặc **phía bên** công trình khác với khoảng cách ngang dưới **3 m**."
    },
    {
      "jp": "POINT　第1次接近状態 といえば **支持物**の地表上の高さに相当する**距離**以内",
      "vi": "Ghi nhớ. Tiếp cận cấp 1 xét **khoảng cách** bằng chiều cao **vật đỡ** tính từ mặt đất."
    },
    {
      "jp": "第2次接近状態 といえば **3 m**未満",
      "vi": "Tiếp cận cấp 2 có khoảng cách ngang dưới **3 m**."
    },
    {
      "jp": "電圧の種別",
      "vi": "Phân loại điện áp",
      "note": "Bảng song ngữ được dựng lại từ các dòng chữ đã ghi trong trang; vẫn giữ những dòng gốc bên dưới để đối chiếu.",
      "table": {
        "jp": [
          "電源",
          "区分"
        ],
        "vi": [
          "Dòng điện",
          "Phân loại điện áp"
        ],
        "rows": [
          [
            "交流",
            "Xoay chiều",
            "交流：低圧600 V以下、高圧600 Vを超え7000 V以下、特別高圧7000 Vを超えるもの。"
          ],
          [
            "直流",
            "Một chiều",
            "直流：低圧750 V以下、高圧750 Vを超え7000 V以下、特別高圧7000 Vを超えるもの。"
          ]
        ],
        "rowsVi": [
          [
            "交流",
            "Xoay chiều",
            "AC: hạ áp ≤600 V; cao áp trên 600 V đến 7.000 V; siêu cao áp trên 7.000 V."
          ],
          [
            "直流",
            "Một chiều",
            "DC: hạ áp ≤750 V; cao áp trên 750 V đến 7.000 V; siêu cao áp trên 7.000 V."
          ]
        ]
      },
      "heading": true
    },
    {
      "jp": "「電技」では、電圧を表2-1-2のように**低圧**、**高圧**、**特別高圧**に区分しています。電気設備に対しては、この区分に応じた規制を行うことで安全の確保を図っています。",
      "vi": "Tiêu chuẩn kỹ thuật chia điện áp thành **hạ áp**, **cao áp** và **siêu cao áp** theo bảng 2-1-2. Quy định tương ứng với từng nhóm điện áp nhằm bảo đảm an toàn cho thiết bị điện."
    },
    {
      "jp": "表2-1-2 電圧の種別",
      "vi": "Bảng 2-1-2 · Phân loại điện áp",
      "heading": true,
      "table": {
        "jp": [
          "電圧の区分",
          "交流",
          "直流"
        ],
        "vi": [
          "Phân loại",
          "Xoay chiều",
          "Một chiều"
        ],
        "rows": [
          [
            "低圧",
            "Hạ áp",
            "**600 V**以下のもの",
            "**750 V**以下のもの"
          ],
          [
            "高圧",
            "Cao áp",
            "600 Vを超え**7 000 V**以下のもの",
            "750 Vを超え**7 000 V**以下のもの"
          ],
          [
            "特別高圧",
            "Siêu cao áp",
            "**7 000 V**を超えるもの",
            "**7 000 V**を超えるもの"
          ]
        ],
        "rowsVi": [
          [
            "低圧",
            "Hạ áp",
            "Không quá **600 V**",
            "Không quá **750 V**"
          ],
          [
            "高圧",
            "Cao áp",
            "Trên 600 V đến **7.000 V**",
            "Trên 750 V đến **7.000 V**"
          ],
          [
            "特別高圧",
            "Siêu cao áp",
            "Trên **7.000 V**",
            "Trên **7.000 V**"
          ]
        ]
      }
    },
    {
      "jp": "低圧は電気使用場所で使用する電圧であり、高圧は架空及び地中配電線路で使用する電圧、特別高圧は発変電所、送電線路で使用される電圧です。",
      "vi": "Hạ áp là điện áp dùng tại nơi sử dụng điện. Cao áp được dùng ở đường dây phân phối trên không và ngầm. Siêu cao áp được dùng ở nhà máy điện, trạm biến áp và đường dây truyền tải."
    },
    {
      "jp": "POINT　低圧 といえば 交流**600 V**、直流**750 V**以下\n高圧 といえば **7 000 V**以下、特別高圧は7 000 Vを超えるもの",
      "vi": "Ghi nhớ. Hạ áp đến **600 V** xoay chiều hoặc **750 V** một chiều.\nCao áp đến **7.000 V**, siêu cao áp trên 7.000 V."
    },
    {
      "jp": "電圧に関する用語",
      "vi": "Thuật ngữ về điện áp",
      "heading": true
    },
    {
      "jp": "電圧については、「公称電圧」「使用電圧」「最大使用電圧」「対地電圧」などの用語が使用されます。**公称電圧**は、電線路を代表する線間電圧です。**使用電圧**は、線間電圧をいい、普通は公称電圧を指します。",
      "vi": "Các thuật ngữ gồm điện áp danh định, điện áp sử dụng, điện áp sử dụng lớn nhất và điện áp so với đất. **Điện áp danh định** là điện áp dây đại diện cho đường dây. **Điện áp sử dụng** là điện áp dây và thường chỉ điện áp danh định."
    },
    {
      "jp": "**最大使用電圧**は、2つの意味で使われ、1つは波高値（最大値）を表し、もう1つは、電路に想定される使用状態における最大線間電圧を表す場合で次の表2-1-3の式で求めた値を用います。",
      "vi": "**Điện áp sử dụng lớn nhất** có hai nghĩa. Một nghĩa là giá trị đỉnh sóng. Nghĩa còn lại là điện áp dây lớn nhất trong trạng thái sử dụng dự kiến, tính bằng công thức trong bảng 2-1-3."
    },
    {
      "jp": "**対地電圧**は、接地式電路においては、電路と大地の間の電圧、非接地式電路では線間電圧※1をいいます。",
      "vi": "**Điện áp so với đất** là điện áp giữa mạch và đất đối với mạch nối đất. Đối với mạch không nối đất, thuật ngữ này chỉ điện áp dây (xem chú thích 1)."
    },
    {
      "jp": "※1 地絡電流、漏れ電流の計算では、線間電圧÷√3。",
      "vi": "Chú thích 1. Khi tính dòng chạm đất hoặc dòng rò trong ngữ cảnh này, dùng điện áp dây chia cho √3.",
      "equations": [
        [
          "線間電圧 ÷ √3 = ",
          {
            "fraction": [
              [
                "線間電圧"
              ],
              [
                "√3"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          "Điện áp dùng để tính dòng = ",
          {
            "fraction": [
              [
                "Điện áp dây"
              ],
              [
                "√3"
              ]
            ]
          }
        ]
      ]
    }
  ],
  "443": [
    {
      "jp": "POINT　最大使用電圧といえば公称電圧に係数を掛けた値",
      "vi": "Ghi nhớ: điện áp sử dụng lớn nhất = điện áp danh định × hệ số.",
      "note": ""
    },
    {
      "jp": "表2-1-3 最大使用電圧計算式",
      "vi": "Bảng 2-1-3 · Tính điện áp sử dụng lớn nhất.",
      "note": "",
      "heading": true
    },
    {
      "jp": "1 000 V以下の電路",
      "vi": "Mạch có điện áp sử dụng đến 1.000 V.",
      "equations": [
        [
          "最大使用電圧 = 公称電圧 × 1.15"
        ]
      ],
      "equationsVi": [
        [
          "Điện áp sử dụng lớn nhất = điện áp danh định × 1,15"
        ]
      ]
    },
    {
      "jp": "1 000 Vを超え500 000 V未満の電路",
      "vi": "Mạch có điện áp sử dụng trên 1.000 V và dưới 500.000 V.",
      "equations": [
        [
          "最大使用電圧 = 公称電圧 × ",
          {
            "fraction": [
              [
                "1.15"
              ],
              [
                "1.1"
              ]
            ],
            "red": true
          }
        ]
      ],
      "equationsVi": [
        [
          "Điện áp sử dụng lớn nhất = điện áp danh định × ",
          {
            "fraction": [
              [
                "1,15"
              ],
              [
                "1,1"
              ]
            ],
            "red": true
          }
        ]
      ]
    },
    {
      "jp": "電路の絶縁",
      "vi": "Cách điện của mạch điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "電路は、大地から絶縁しなければならないと規定しています。ただし危険のおそれがない場合や接地など、保安上必要な場合は除きます。",
      "vi": "Mạch điện phải cách điện với đất. Trừ trường hợp không có nguy cơ hoặc trường hợp cần thiết để bảo đảm an toàn, chẳng hạn khi nối đất.",
      "note": ""
    },
    {
      "jp": "電気使用場所の低圧電路の絶縁抵抗",
      "vi": "Điện trở cách điện mạch hạ áp tại nơi sử dụng điện.",
      "note": "",
      "heading": true
    },
    {
      "jp": "使用電圧が低圧の電路の電線相互間及び電路と大地との間の絶縁抵抗は、開閉器又は過電流遮断器で区切ることのできる電路ごとに（分岐回路ごとに）、表2-1-4の値以上あればよいことになっています。",
      "vi": "Điện trở cách điện giữa các dây và giữa mạch với đất phải đạt mức tối thiểu theo bảng 2-1-4 cho từng đoạn mạch có thể cô lập bằng công tắc hoặc bộ cắt quá dòng (từng mạch nhánh).",
      "note": ""
    },
    {
      "jp": "また、絶縁抵抗の測定が困難な場合には、**漏えい電流**が**1 mA**以下であればよいとされています。",
      "vi": "Nếu khó đo điện trở cách điện, **dòng rò** phải không quá **1 mA**."
    },
    {
      "jp": "表2-1-4 低圧電路の絶縁抵抗",
      "vi": "Bảng 2-1-4 · Điện trở cách điện mạch hạ áp",
      "heading": true,
      "table": {
        "jp": [
          "電路の使用電圧の区分",
          "絶縁抵抗値"
        ],
        "vi": [
          "Điện áp sử dụng của mạch",
          "Điện trở cách điện"
        ],
        "rows": [
          [
            "**300 V**以下：対地電圧が**150 V**以下の場合",
            "Đến **300 V**, điện áp so với đất đến **150 V**",
            "**0.1 MΩ**以上（単相100/200 V回路）"
          ],
          [
            "300 V以下：その他の場合",
            "Đến 300 V, trường hợp còn lại",
            "**0.2 MΩ**以上（三相200 V回路）"
          ],
          [
            "**300 V**を超えるもの",
            "Trên **300 V**",
            "**0.4 MΩ**以上（400 V回路）"
          ]
        ],
        "rowsVi": [
          [
            "**300 V**以下：対地電圧が**150 V**以下の場合",
            "Đến **300 V**, điện áp so với đất đến **150 V**",
            "Từ **0,1 MΩ** (mạch một pha 100/200 V)"
          ],
          [
            "300 V以下：その他の場合",
            "Đến 300 V, trường hợp còn lại",
            "Từ **0,2 MΩ** (mạch ba pha 200 V)"
          ],
          [
            "**300 V**を超えるもの",
            "Trên **300 V**",
            "Từ **0,4 MΩ** (mạch 400 V)"
          ]
        ]
      }
    },
    {
      "jp": "POINT　分岐回路の絶縁抵抗 といえば 単相100/200 V回路は**0.1 MΩ**以上\n三相200 V回路は**0.2 MΩ**以上\n400 V回路は**0.4 MΩ**以上\n漏えい電流が**1 mA**以下",
      "vi": "Ghi nhớ. Điện trở cách điện mạch nhánh một pha 100/200 V từ **0,1 MΩ**\nMạch ba pha 200 V từ **0,2 MΩ**\nMạch 400 V từ **0,4 MΩ**\nDòng rò không quá **1 mA**."
    },
    {
      "jp": "低圧電線路の絶縁抵抗",
      "vi": "Điện trở cách điện của đường dây hạ áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "電線と大地間及び電線の心線相互間の絶縁抵抗は、使用電圧に対する漏えい電流が、最大供給電流の1／2 000を超えないように保つように決められています。",
      "vi": "Duy trì cách điện giữa dây và đất, cũng như giữa các lõi dây, sao cho dòng rò ở điện áp sử dụng không vượt giới hạn dưới đây.",
      "note": "Trang này có hai trường hợp riêng: mạch hạ áp tại nơi sử dụng điện và đường dây hạ áp.",
      "equations": [
        [
          "漏えい電流 ≤ 最大供給電流 × ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "2 000"
              ]
            ],
            "red": true
          }
        ]
      ],
      "equationsVi": [
        [
          "Dòng rò ≤ dòng cấp tối đa × ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "2.000"
              ]
            ],
            "red": true
          }
        ]
      ]
    }
  ],
  "444": [
    {
      "jp": "POINT　低圧電線路の絶縁抵抗 といえば 漏えい電流が最大供給電流の1／2 000以下",
      "vi": "Ghi nhớ. Dòng rò đường dây hạ áp không quá giới hạn dưới đây.",
      "equations": [
        [
          "漏えい電流 ≤ 最大供給電流 × ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "2 000"
              ]
            ],
            "red": true
          }
        ]
      ],
      "equationsVi": [
        [
          "Dòng rò ≤ dòng cấp tối đa × ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "2.000"
              ]
            ],
            "red": true
          }
        ]
      ]
    },
    {
      "jp": "絶縁耐力試験",
      "vi": "Thử độ bền điện môi",
      "note": "",
      "heading": true
    },
    {
      "jp": "絶縁性能を絶縁耐力試験により確認する場合、表2-1-5の試験電圧を**連続**して**10分間**加えて耐えることが規定されています。",
      "vi": "Khi xác nhận cách điện bằng phép thử độ bền điện môi, thiết bị phải chịu điện áp thử trong bảng 2-1-5 trong **10 phút** **liên tục**.",
      "note": ""
    },
    {
      "jp": "試験電圧は、使用電圧が交流であれば交流、直流であれば直流によるのが原則ですが、高圧や特別高圧の電線路にケーブルを使用する場合は交流の試験電圧の**2倍**、交流の回転機の場合は**1.6倍**の**直流電圧**で試験をすることが認められています。",
      "vi": "Về nguyên tắc, dùng điện áp thử AC cho mạch AC và DC cho mạch DC. Với đường dây cao áp hoặc siêu cao áp dùng cáp, được dùng **điện áp DC** gấp **2 lần** điện áp thử AC. Với máy điện quay AC, dùng điện áp DC gấp **1,6 lần**.",
      "note": ""
    },
    {
      "jp": "表2-1-5 電路、変圧器等の絶縁耐力試験電圧",
      "vi": "Bảng 2-1-5 · Điện áp thử độ bền điện môi của mạch điện, máy biến áp và thiết bị khác",
      "heading": true,
      "table": {
        "jp": [
          "電路の種類",
          "試験電圧（10分間加える）"
        ],
        "vi": [
          "Đối tượng và dải điện áp",
          "Điện áp thử trong 10 phút"
        ],
        "rows": [
          [
            "電路：**7 000 V**以下",
            "Mạch điện đến **7.000 V**",
            "電圧の**1.5倍**"
          ],
          [
            "電路：7 000 V超過15 000 V以下（中性線多重接地式）",
            "Mạch trên 7.000 V đến 15.000 V, dây trung tính nối đất nhiều điểm",
            "電圧の0.92倍"
          ],
          [
            "電路：7 000 V超過60 000 V以下",
            "Mạch trên 7.000 V đến 60.000 V",
            "電圧の**1.25倍**（10 500 V未満は**10 500 V**）"
          ],
          [
            "電路：60 000 Vを超えるもの（中性点非接地式）",
            "Mạch trên 60.000 V, điểm trung tính không nối đất",
            "電圧の1.25倍"
          ],
          [
            "電路：60 000 Vを超えるもの（中性点接地式）",
            "Mạch trên 60.000 V, điểm trung tính nối đất",
            "電圧の1.1倍（75 000 V未満は75 000 V）"
          ],
          [
            "回転機：**7 000 V**以下（回転変流器※2を除く）",
            "Máy điện quay đến **7.000 V**, trừ bộ biến đổi quay (chú thích ※2)",
            "電圧の**1.5倍**（500 V未満は**500 V**）"
          ],
          [
            "回転機：7 000 Vを超えるもの（回転変流器を除く）",
            "Máy điện quay trên 7.000 V, trừ bộ biến đổi quay",
            "電圧の1.25倍（10 500 V未満は10 500 V）"
          ],
          [
            "変圧器：**7 000 V**以下",
            "Máy biến áp đến **7.000 V**",
            "電圧の**1.5倍**（500 V未満は**500 V**）"
          ],
          [
            "変圧器：7 000 V超過15 000 V以下（中性線多重接地式）",
            "Máy biến áp trên 7.000 V đến 15.000 V, dây trung tính nối đất nhiều điểm",
            "電圧の0.92倍"
          ],
          [
            "変圧器：7 000 V超過60 000 V以下",
            "Máy biến áp trên 7.000 V đến 60.000 V",
            "電圧の**1.25倍**（10 500 V未満は**10 500 V**）"
          ],
          [
            "変圧器：60 000 Vを超えるもの（中性点非接地式）",
            "Máy biến áp trên 60.000 V, điểm trung tính không nối đất",
            "電圧の1.25倍"
          ],
          [
            "変圧器：60 000 Vを超える星形で中性点接地式",
            "Máy biến áp trên 60.000 V nối sao, điểm trung tính nối đất",
            "電圧の1.1倍（75 000 V未満は75 000 V）"
          ],
          [
            "変圧器：その他の巻線",
            "Máy biến áp · Cuộn dây khác",
            "電圧の1.1倍（75 000 V未満は75 000 V）"
          ]
        ],
        "rowsVi": [
          [
            "電路：**7 000 V**以下",
            "Mạch điện đến **7.000 V**",
            "**1,5 lần** điện áp"
          ],
          [
            "電路：7 000 V超過15 000 V以下（中性線多重接地式）",
            "Mạch trên 7.000 V đến 15.000 V, dây trung tính nối đất nhiều điểm",
            "0,92 lần điện áp"
          ],
          [
            "電路：7 000 V超過60 000 V以下",
            "Mạch trên 7.000 V đến 60.000 V",
            "**1,25 lần**, tối thiểu **10.500 V**"
          ],
          [
            "電路：60 000 Vを超えるもの（中性点非接地式）",
            "Mạch trên 60.000 V, điểm trung tính không nối đất",
            "1,25 lần điện áp"
          ],
          [
            "電路：60 000 Vを超えるもの（中性点接地式）",
            "Mạch trên 60.000 V, điểm trung tính nối đất",
            "1,1 lần, tối thiểu 75.000 V"
          ],
          [
            "回転機：**7 000 V**以下（回転変流器※2を除く）",
            "Máy điện quay đến **7.000 V**, trừ bộ biến đổi quay (chú thích ※2)",
            "**1,5 lần**, tối thiểu **500 V**"
          ],
          [
            "回転機：7 000 Vを超えるもの（回転変流器を除く）",
            "Máy điện quay trên 7.000 V, trừ bộ biến đổi quay",
            "1,25 lần, tối thiểu 10.500 V"
          ],
          [
            "変圧器：**7 000 V**以下",
            "Máy biến áp đến **7.000 V**",
            "**1,5 lần**, tối thiểu **500 V**"
          ],
          [
            "変圧器：7 000 V超過15 000 V以下（中性線多重接地式）",
            "Máy biến áp trên 7.000 V đến 15.000 V, dây trung tính nối đất nhiều điểm",
            "0,92 lần điện áp"
          ],
          [
            "変圧器：7 000 V超過60 000 V以下",
            "Máy biến áp trên 7.000 V đến 60.000 V",
            "**1,25 lần**, tối thiểu **10.500 V**"
          ],
          [
            "変圧器：60 000 Vを超えるもの（中性点非接地式）",
            "Máy biến áp trên 60.000 V, điểm trung tính không nối đất",
            "1,25 lần điện áp"
          ],
          [
            "変圧器：60 000 Vを超える星形で中性点接地式",
            "Máy biến áp trên 60.000 V nối sao, điểm trung tính nối đất",
            "1,1 lần, tối thiểu 75.000 V"
          ],
          [
            "変圧器：その他の巻線",
            "Máy biến áp · Cuộn dây khác",
            "1,1 lần, tối thiểu 75.000 V"
          ]
        ]
      },
      "note": "Tra theo đúng đối tượng. Dòng mạch điện đến 7.000 V trong sách ghi hệ số 1,5. Mức sàn 500 V xuất hiện ở các dòng tương ứng của máy điện quay và máy biến áp."
    },
    {
      "jp": "注1）電圧は最大使用電圧とする。",
      "vi": "Chú thích 1. Điện áp làm cơ sở là điện áp sử dụng lớn nhất."
    },
    {
      "jp": "注2）使用電圧が17万 Vを超えるものは表から省略した。",
      "vi": "Chú thích 2. Bảng lược các trường hợp có điện áp sử dụng trên 170 kV."
    },
    {
      "jp": "注3）電路は心線相互間及び心線と大地間、回転機は巻線と大地間、変圧器は試験する巻線と他の巻線、試験する巻線と鉄心及び外箱との間の絶縁耐力とする。",
      "vi": "Chú thích 3. Xét độ bền điện môi giữa các lõi với nhau và với đất đối với mạch điện, giữa cuộn dây và đất đối với máy điện quay, giữa cuộn thử với các cuộn khác và giữa cuộn thử với lõi thép và vỏ đối với máy biến áp."
    },
    {
      "jp": "注4）開閉器、遮断器などの器具の電圧に対する絶縁耐力試験電圧は電路に準じる。",
      "vi": "Chú thích 4. Điện áp thử độ bền điện môi của thiết bị đóng cắt, máy cắt và thiết bị tương tự lấy theo mạch điện."
    },
    {
      "jp": "注5）接地形計器用変圧器、避雷器もしくは電線にケーブルを使用する機械器具の絶縁耐力試験は表の試験電圧の2倍の直流電圧で10分間としてもよいことになっている。",
      "vi": "Chú thích 5. Đối với máy biến điện áp đo lường kiểu nối đất, chống sét van hoặc thiết bị dùng cáp, có thể thử 10 phút bằng điện áp DC gấp 2 lần điện áp thử trong bảng."
    },
    {
      "jp": "注6）交流の回転機は表の試験電圧の1.6倍の直流電圧で10分間としてもよいことになっている。",
      "vi": "Chú thích 6. Có thể thử máy điện quay AC trong 10 phút bằng điện áp DC gấp 1,6 lần điện áp thử trong bảng."
    },
    {
      "jp": "※2 回転変流器：交流を直流に、又は直流を交流に変換する回転機（現在はあまり使われていません）。",
      "vi": "Chú thích ※2. Bộ biến đổi quay là máy điện quay biến đổi AC thành DC hoặc ngược lại. Hiện ít được sử dụng."
    }
  ],
  "445": [
    {
      "jp": "燃料電池及び太陽電池モジュールの絶縁耐力",
      "vi": "Độ bền điện môi của pin nhiên liệu và mô-đun pin mặt trời",
      "note": "",
      "heading": true
    },
    {
      "jp": "燃料電池及び太陽電池モジュールは、最大使用電圧の**1.5倍**の直流電圧又は**1倍**の交流電圧（500 V未満となる場合は、**500 V**）を充電部分と大地との間に連続して**10分間**加えて絶縁耐力試験をしたとき、これに耐えることが規定されています。",
      "vi": "Pin nhiên liệu và mô-đun pin mặt trời phải chịu được phép thử đặt điện áp giữa bộ phận mang điện và đất liên tục **10 phút**. Điện áp thử bằng **1,5 lần** điện áp sử dụng lớn nhất nếu thử DC hoặc **1 lần** nếu thử AC. Nếu kết quả dưới 500 V thì dùng **500 V**."
    },
    {
      "jp": "POINT　絶縁耐力試験 といえば 最大使用電圧の**1.5倍**を**10分**間加える（7 000 V以下）",
      "vi": "Ghi nhớ. Với mạch đến 7.000 V, đặt điện áp bằng **1,5 lần** điện áp sử dụng lớn nhất trong **10 phút**."
    },
    {
      "jp": "絶縁耐力試験 といえば 試験電圧の**2倍**の直流、回転機は**1.6倍**の直流で**10分**間でもよい",
      "vi": "Cũng có thể thử trong **10 phút** bằng DC gấp **2 lần** điện áp thử AC ở trường hợp cáp nêu ở trang trước, hoặc **1,6 lần** đối với máy điện quay AC."
    },
    {
      "jp": "燃料電池、太陽電池の耐圧 といえば **1.5倍**の直流、**1倍**の交流、最低500 V、**10分**間",
      "vi": "Pin nhiên liệu và pin mặt trời: DC **1,5 lần**, AC **1 lần**, tối thiểu 500 V, trong **10 phút**."
    },
    {
      "jp": "練習問題01　絶縁耐力試験",
      "vi": "Bài luyện 01 · Thử chịu cách điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "使用電圧6600 Vの高圧ケーブルの絶縁耐力試験を実施する。次の(a)及び(b)の問に答えよ。",
      "vi": "Thử độ bền cách điện cáp cao áp có điện áp sử dụng 6.600 V. Trả lời (a) và (b).",
      "note": ""
    },
    {
      "jp": "(a) 高圧ケーブルの絶縁耐力試験を直流で行う場合の試験電圧と試験時間は。",
      "vi": "(a) Khi dùng điện áp DC, điện áp và thời gian thử là bao nhiêu?",
      "note": ""
    },
    {
      "jp": "(b) 高圧ケーブルの絶縁耐力試験を、図のような試験回路で行う。この絶縁耐力試験に必要な皮相電力（試験容量）Sₜ［kV・A］は。",
      "vi": "(b) Với mạch thử trong hình, tính dung lượng công suất biểu kiến cần thiết Sₜ (kVA).",
      "note": ""
    },
    {
      "jp": "【高圧ケーブルの仕様】\nケーブルの種類：6 600 Vトリプレックス形架橋ポリエチレン絶縁ビニルシースケーブル\n公称断面積：100 mm²、ケーブルのこう長：220 m、1線の対地静電容量：0.45 μF/km",
      "vi": "Thông số cáp cao áp\nLoại cáp: CVT 6.600 V, ba sợi cáp xoắn, cách điện polyetylen liên kết ngang, vỏ vinyl.\nTiết diện danh định 100 mm², chiều dài 220 m, điện dung so với đất của một dây 0,45 μF/km.",
      "note": ""
    },
    {
      "jp": "試験用変圧器の仕様：定格入力電圧AC 0～120 V、定格出力電圧AC 0～12000 V、入力電源周波数50 Hz",
      "vi": "Máy biến áp thử: đầu vào điều chỉnh 0–120 V AC, đầu ra 0–12.000 V AC, tần số 50 Hz.",
      "note": ""
    },
    {
      "diagram": "lawInsulationTest445"
    }
  ],
  "446": [
    {
      "jp": "解き方 (a)",
      "vi": "Cách giải (a)",
      "heading": true
    },
    {
      "jp": "試験電圧を直流とする場合は、交流試験電圧の２倍とします。",
      "vi": "Thử bằng DC thì điện áp thử bằng hai lần điện áp thử AC.",
      "note": ""
    },
    {
      "jp": "交流の最大使用電圧は、",
      "vi": "Tính điện áp sử dụng lớn nhất phía xoay chiều.",
      "equations": [
        [
          "交流の最大使用電圧 = 公称電圧 × ",
          {
            "fraction": [
              [
                "1.15"
              ],
              [
                "1.1"
              ]
            ]
          },
          " = 6 600 × ",
          {
            "fraction": [
              [
                "1.15"
              ],
              [
                "1.1"
              ]
            ]
          },
          " = 6 900 V"
        ]
      ],
      "equationsVi": [
        [
          "Điện áp sử dụng lớn nhất AC = điện áp danh định × ",
          {
            "fraction": [
              [
                "1,15"
              ],
              [
                "1,1"
              ]
            ]
          },
          " = 6.600 × ",
          {
            "fraction": [
              [
                "1,15"
              ],
              [
                "1,1"
              ]
            ]
          },
          " = 6.900 V"
        ]
      ]
    },
    {
      "jp": "交流試験電圧 Vₜ は、最大使用電圧の1.5倍より、",
      "vi": "Điện áp thử AC = 1,5 lần điện áp sử dụng lớn nhất.",
      "note": ""
    },
    {
      "jp": "直流の試験電圧 V直流 は、",
      "vi": "Tính điện áp thử DC.",
      "equations": [
        [
          "V直流 = (6 900 × 1.5) × 2 = 20 700 V"
        ]
      ],
      "equationsVi": [
        [
          "V DC = (6.900 × 1,5) × 2 = 20.700 V"
        ]
      ]
    },
    {
      "jp": "試験時間は、連続して10分間。",
      "vi": "Thời gian thử liên tục 10 phút.",
      "note": ""
    },
    {
      "jp": "(b)",
      "vi": "Cách giải (b)",
      "heading": true
    },
    {
      "jp": "最大使用電圧より、交流試験電圧 Vₜ は、",
      "vi": "Từ điện áp sử dụng lớn nhất, tính điện áp thử AC.",
      "equations": [
        [
          "最大使用電圧 = 6 600 × ",
          {
            "fraction": [
              [
                "1.15"
              ],
              [
                "1.1"
              ]
            ]
          },
          " = 6 900 V"
        ],
        [
          "Vₜ = 6 900 × 1.5 = 10 350 V"
        ]
      ],
      "equationsVi": [
        [
          "Điện áp sử dụng lớn nhất = 6.600 × ",
          {
            "fraction": [
              [
                "1,15"
              ],
              [
                "1,1"
              ]
            ]
          },
          " = 6.900 V"
        ],
        [
          "Vₜ = 6.900 × 1,5 = 10.350 V"
        ]
      ]
    },
    {
      "jp": "３線一括で試験電圧を印加するのでCは１線の３倍となります。",
      "vi": "Vì thử đồng thời ba dây nên điện dung bằng ba lần điện dung một dây.",
      "note": ""
    },
    {
      "jp": "したがってケーブルの対地静電容量 C は、",
      "vi": "Điện dung của cáp so với đất.",
      "equations": [
        [
          "C = 3 × (0.45 × 10⁻⁶) × 0.22 = 0.297 × 10⁻⁶ F"
        ]
      ],
      "equationsVi": [
        [
          "C = 3 × (0,45 × 10⁻⁶ F/km) × 0,22 km = 0,297 × 10⁻⁶ F"
        ]
      ]
    },
    {
      "jp": "ケーブルに流れる充電電流 I𝚌 は、",
      "vi": "Dòng điện nạp điện dung của cáp.",
      "equations": [
        [
          "I𝚌 = ωCVₜ = 2πfCVₜ"
        ],
        [
          "= 2 × 3.14 × 50 × 0.297 × 10⁻⁶ × 10 350 ≒ 0.965 A"
        ]
      ],
      "equationsVi": [
        [
          "I𝚌 = ωCVₜ = 2πfCVₜ"
        ],
        [
          "= 2 × 3,14 × 50 × 0,297 × 10⁻⁶ × 10.350 ≈ 0,965 A"
        ]
      ]
    },
    {
      "diagram": "lawChargingCurrent446"
    },
    {
      "jp": "試験に必要な皮相電力（試験容量）Sₜ は、",
      "vi": "Công suất biểu kiến cần cho phép thử (dung lượng thử).",
      "equations": [
        [
          "Sₜ = Vₜ × I𝚌 = 10 350 × 0.965 ≒ 9 988 V・A → 10 kV・A"
        ]
      ],
      "equationsVi": [
        [
          "Sₜ = Vₜ × I𝚌 = 10.350 × 0,965 ≈ 9.988 VA → 10 kVA"
        ]
      ]
    },
    {
      "jp": "試験容量が試験用変圧器の容量よりも大きい場合は、高圧補償リアクトルを接続し、試験容量を小さくします。",
      "vi": "Nếu dung lượng thử vượt khả năng máy biến áp thử thì dùng cuộn kháng bù cao áp để giảm nhu cầu công suất.",
      "note": ""
    },
    {
      "jp": "解説　絶縁耐力試験は、使用電圧が交流であれば交流の試験電圧を加え、直流であれば直流の試験電圧を加えますが、ケーブルを用いた電路や大形の機器では静電容量が大きく、試験電流も大きくなります。大容量の試験器が必要になることから、交流機器であっても試験電圧を高くして直流電圧で試験をすることが認められています。",
      "vi": "Lời giải. Phép thử độ bền điện môi dùng AC khi điện áp sử dụng là AC, và dùng DC khi điện áp sử dụng là DC. Mạch dùng cáp hoặc thiết bị lớn có điện dung lớn nên dòng thử cũng lớn và cần máy thử công suất lớn. Vì vậy sách nêu trường hợp được thử thiết bị AC bằng điện áp DC với mức điện áp thử cao hơn."
    },
    {
      "jp": "解答　(a) **試験電圧：20 700 V　試験時間：連続して10分間**　(b) **Sₜ = 10 kV・A**",
      "vi": "Đáp án. (a) **Điện áp thử 20.700 V, thời gian thử 10 phút liên tục**. (b) **Sₜ = 10 kVA**."
    }
  ],
  "447": [
    {
      "jp": "練習問題02　太陽電池モジュールの絶縁性能",
      "vi": "Bài luyện 02 · Tính năng cách điện mô-đun pin mặt trời.",
      "note": "",
      "heading": true
    },
    {
      "jp": "次の文章は、「電気設備技術基準の解釈」に基づく太陽電池モジュールの絶縁性能に関する記述の一部である。空白箇所に当てはまる数字は。",
      "vi": "Điền số còn thiếu vào đoạn quy định về cách điện pin mặt trời theo phần giải thích tiêu chuẩn.",
      "note": ""
    },
    {
      "jp": "太陽電池モジュールは、最大使用電圧の（ア）倍の直流電圧又は（イ）倍の交流電圧（（ウ）V未満となる場合は、（ウ）V）を充電部分と大地との間に連続して（エ）分間加えたとき、これに耐える性能を有すること。",
      "vi": "Mô-đun phải chịu DC (ア)× hoặc AC (イ)× điện áp sử dụng lớn nhất, tối thiểu (ウ) V, đặt giữa phần mang điện và đất trong (エ) phút.",
      "note": ""
    },
    {
      "jp": "解説　1.5倍の直流電圧は、1倍の交流電圧（実効値）の波高値に近い値であることから、太陽電池モジュールの絶縁性能は、最大使用電圧の1.5倍の直流電圧又は1倍の交流電圧に耐える性能があればよいとしています。",
      "vi": "Lời giải. Điện áp DC gấp 1,5 lần gần với giá trị đỉnh của điện áp AC gấp 1 lần tính theo trị hiệu dụng. Sách dùng điều này để giải thích vì sao mô-đun pin mặt trời được thử với DC gấp 1,5 lần hoặc AC gấp 1 lần điện áp sử dụng lớn nhất.",
      "note": "Với sóng sin, giá trị đỉnh bằng √2 lần giá trị hiệu dụng."
    },
    {
      "jp": "解答　（ア）**1.5**　（イ）**1**　（ウ）**500**　（エ）**10**",
      "vi": "Đáp án. (ア) **1,5** · (イ) **1** · (ウ) **500** · (エ) **10**."
    },
    {
      "jp": "接地工事の種類と抵抗値",
      "vi": "Các loại nối đất và giá trị điện trở",
      "note": "",
      "heading": true
    },
    {
      "jp": "異常時の電位上昇、高電圧の侵入等による**感電**、**火災**その他人体に危害を及ぼし、又は物件への損傷を与えるおそれがないよう、電気設備の必要な箇所には**接地**を施します。",
      "vi": "**Nối đất** tại các vị trí cần thiết của thiết bị điện để tránh **điện giật**, **cháy**, nguy hiểm khác cho người hoặc hư hại tài sản do điện thế tăng bất thường, điện áp cao xâm nhập, v.v."
    },
    {
      "jp": "接地工事の種類",
      "vi": "Các loại công trình nối đất",
      "note": "",
      "heading": true
    },
    {
      "jp": "**接地工事**にはA種、B種、C種、D種の４種類があります。",
      "vi": "Có bốn loại **nối đất**: A, B, C và D.",
      "note": ""
    },
    {
      "jp": "A種、C種、D種接地工事は、電路に施設する機械器具の鉄台及び金属製外箱に施すもので、表2-1-6のように機械器具の電圧によって区分されています。",
      "vi": "A/C/D áp dụng cho khung sắt, vỏ kim loại thiết bị, được phân loại theo điện áp thiết bị.",
      "note": ""
    },
    {
      "jp": "表2-1-6 接地工事の区分と種類",
      "vi": "Bảng 2-1-6 · Phân loại nối đất",
      "heading": true,
      "table": {
        "jp": [
          "機械器具の電圧の区分",
          "接地工事"
        ],
        "vi": [
          "Phân loại điện áp thiết bị",
          "Loại nối đất"
        ],
        "rows": [
          [
            "300 V以下の低圧用のもの",
            "Thiết bị hạ áp đến 300 V",
            "**D種**接地工事"
          ],
          [
            "300 Vを超える低圧用のもの",
            "Thiết bị hạ áp trên 300 V",
            "**C種**接地工事"
          ],
          [
            "高圧用又は特別高圧用のもの",
            "Thiết bị cao áp hoặc siêu cao áp",
            "**A種**接地工事"
          ]
        ],
        "rowsVi": [
          [
            "300 V以下の低圧用のもの",
            "Thiết bị hạ áp đến 300 V",
            "Nối đất **loại D**"
          ],
          [
            "300 Vを超える低圧用のもの",
            "Thiết bị hạ áp trên 300 V",
            "Nối đất **loại C**"
          ],
          [
            "高圧用又は特別高圧用のもの",
            "Thiết bị cao áp hoặc siêu cao áp",
            "Nối đất **loại A**"
          ]
        ]
      }
    },
    {
      "jp": "**B種**接地工事は、高圧電路又は特別高圧電路と低圧電路とを結合する変圧器の**低圧側の中性点**、中性点に接地を施し難いときは**低圧側の1端子**、巻線との間に設けた金属製の**混触防止板**などに施すものです。",
      "vi": "Nối đất **loại B** tại **điểm trung tính phía hạ áp** của máy biến áp nối mạch cao áp hoặc siêu cao áp với mạch hạ áp. Khi khó nối đất tại điểm trung tính, dùng **một đầu cực phía hạ áp**. Vị trí áp dụng còn gồm **tấm kim loại ngăn chạm lẫn** đặt giữa các cuộn dây, v.v."
    }
  ],
  "448": [
    {
      "jp": "接地工事の接地抵抗値と接地線の太さ",
      "vi": "Điện trở nối đất và kích thước dây nối đất",
      "note": "",
      "heading": true
    },
    {
      "jp": "表2-1-7は、接地工事の接地抵抗値と主な適用電気工作物及び接地線の太さを示しています。",
      "vi": "Bảng 2-1-7 trình bày điện trở nối đất, các công trình điện áp dụng chính và kích thước dây nối đất.",
      "note": ""
    },
    {
      "jp": "表2-1-7 接地工事の抵抗値と適用電気工作物及び接地線の太さ",
      "vi": "Bảng 2-1-7 · Điện trở nối đất, công trình áp dụng và kích thước dây nối đất",
      "heading": true,
      "table": {
        "jp": [
          "種別",
          "接地抵抗値",
          "接地工作物",
          "接地線の太さ"
        ],
        "vi": [
          "Loại",
          "Điện trở nối đất",
          "Đối tượng nối đất",
          "Kích thước dây"
        ],
        "rows": [
          [
            "**A種**接地",
            "Nối đất **loại A**",
            "**10 Ω**以下",
            "・**高圧・特別高圧**の機器の**鉄台**、**外箱**\n・高圧電路の**避雷器**\n・**特別高圧計器用変成器**2次側電路\n・高圧ケーブルを収める管等\n・電線接続箱、金属被覆",
            "**2.6 mm**以上（**5.5 mm²**以上）（避雷器を除く）"
          ],
          [
            "**B種**接地",
            "Nối đất **loại B**",
            "下の式参照",
            "・高圧・低圧結合変圧器の**低圧側の中性点**（低圧側が300 V以下の場合で中性点接地が難しい場合は**低圧側の一端子**）\n・高圧及び特高と低圧結合変圧器の巻線間の金属製混触防止板\n・特高・低圧結合変圧器の低圧側の中性点",
            "2.6 mm以上（5.5 mm²以上）"
          ],
          [
            "**C種**接地",
            "Nối đất **loại C**",
            "**10 Ω**以下",
            "・**300 V**超過の機器の**鉄台**、**外箱**\n・**300 V**超過の**電線管**、金属ダクト、バスダクト、ラック、メッセンジャーワイヤ、低圧配線と弱電流電線との間の金属製隔壁",
            "**1.6 mm**以上（**2 mm²**以上）"
          ],
          [
            "**D種**接地",
            "Nối đất **loại D**",
            "**100 Ω**以下",
            "・**高圧計器用変成器**の2次側電路\n・300 V以下の機器の**鉄台**、**外箱**\n・地中電線を収める**管**等、電線接続**箱**、金属被覆\n・架空ケーブルのちょう架用金属線\n・300 V以下の**電線管**、**金属ダクト**、バスダクト、ラック、フロアダクト、ライティングダクト、線ぴ\n・X線装置等",
            "1.6 mm以上（2 mm²以上）"
          ]
        ],
        "rowsVi": [
          [
            "**A種**接地",
            "Nối đất **loại A**",
            "Không quá **10 Ω**",
            "• **Khung sắt**, **vỏ** thiết bị **cao áp, siêu cao áp**\n• **Chống sét van** ở mạch cao áp\n• Mạch thứ cấp của **máy biến điện đo lường siêu cao áp**\n• Ống chứa cáp cao áp và bộ phận tương tự\n• Hộp nối dây, lớp bọc kim loại",
            "Từ **2,6 mm** (từ **5,5 mm²**), trừ chống sét van"
          ],
          [
            "**B種**接地",
            "Nối đất **loại B**",
            "Xem công thức bên dưới",
            "• **Điểm trung tính phía hạ áp** của máy biến áp nối cao áp với hạ áp. Nếu phía hạ áp đến 300 V và khó nối đất trung tính, dùng **một đầu cực phía hạ áp**.\n• Tấm kim loại ngăn chạm lẫn giữa các cuộn dây của máy biến áp nối cao áp hoặc siêu cao áp với hạ áp.\n• Điểm trung tính phía hạ áp của máy biến áp nối siêu cao áp với hạ áp.",
            "Từ 2,6 mm (từ 5,5 mm²)"
          ],
          [
            "**C種**接地",
            "Nối đất **loại C**",
            "Không quá **10 Ω**",
            "• **Khung sắt**, **vỏ** thiết bị trên **300 V**\n• **Ống luồn dây** trên **300 V**, máng kim loại, ống thanh cái, giá đỡ, dây treo, vách kim loại giữa dây hạ áp và dây điện nhẹ",
            "Từ **1,6 mm** (từ **2 mm²**)"
          ],
          [
            "**D種**接地",
            "Nối đất **loại D**",
            "Không quá **100 Ω**",
            "• Mạch thứ cấp của **máy biến điện đo lường cao áp**\n• **Khung sắt**, **vỏ** thiết bị đến 300 V\n• **Ống** chứa dây ngầm và bộ phận tương tự, **hộp** nối dây, lớp bọc kim loại\n• Dây kim loại treo cáp trên không\n• **Ống luồn dây**, **máng kim loại** đến 300 V, ống thanh cái, giá đỡ, máng sàn, máng đèn, nẹp dây\n• Thiết bị tia X, v.v.",
            "Từ 1,6 mm (từ 2 mm²)"
          ]
        ]
      }
    },
    {
      "jp": "B種接地抵抗値：I₁は**1線地絡電流**。I₁の値又は所要抵抗値を電力供給者と打ち合わせる。",
      "vi": "Điện trở nối đất loại B. I₁ là **dòng chạm đất một dây**. Trao đổi với đơn vị cấp điện về giá trị I₁ hoặc điện trở yêu cầu.",
      "equations": [
        [
          "Rᴮ ≤ ",
          {
            "fraction": [
              [
                "150"
              ],
              [
                "I₁"
              ]
            ],
            "red": true
          },
          " Ω"
        ]
      ]
    },
    {
      "jp": "注1）B種接地工事：高圧又は35 000 V以下の特高電路と低圧側との混触の場合、**1秒**超過**2秒**以内に自動遮断のときは300／I₁［Ω］、1秒以内のとき600／I₁［Ω］以下。",
      "vi": "Chú thích 1. Khi có chạm lẫn giữa mạch cao áp hoặc siêu cao áp đến 35.000 V với phía hạ áp, dùng các giới hạn bên dưới nếu tự động cắt sau hơn **1 giây** đến hết **2 giây**, hoặc trong 1 giây.",
      "equations": [
        [
          "1秒超過2秒以内：Rᴮ ≤ ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "I₁"
              ]
            ],
            "red": true
          },
          " Ω"
        ],
        [
          "1秒以内：Rᴮ ≤ ",
          {
            "fraction": [
              [
                "600"
              ],
              [
                "I₁"
              ]
            ],
            "red": true
          },
          " Ω"
        ]
      ],
      "equationsVi": [
        [
          "Hơn 1 giây đến hết 2 giây: Rᴮ ≤ ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "I₁"
              ]
            ],
            "red": true
          },
          " Ω"
        ],
        [
          "Trong 1 giây: Rᴮ ≤ ",
          {
            "fraction": [
              [
                "600"
              ],
              [
                "I₁"
              ]
            ],
            "red": true
          },
          " Ω"
        ]
      ]
    },
    {
      "jp": "注2）C種及びD種接地工事：**地絡**を生じた場合、**0.5秒**以内で自動遮断のとき**500 Ω**以下。",
      "vi": "Chú thích 2. Với nối đất loại C và D, nếu tự động cắt trong **0,5 giây** khi xảy ra **chạm đất**, điện trở tối đa là **500 Ω**."
    },
    {
      "jp": "POINT　接地抵抗値 といえば A種 **10 Ω**以下、C種 **10 Ω**以下、D種 **100 Ω**以下。地絡時に0.5秒以内で遮断のときは、C種とD種は500 Ω以下。",
      "vi": "Ghi nhớ. Loại A không quá **10 Ω**, loại C không quá **10 Ω**, loại D không quá **100 Ω**. Khi chạm đất và cắt trong 0,5 giây, loại C và D không quá 500 Ω."
    },
    {
      "jp": "B種：1線地絡電流で割って求める。混触時**自動遮断**の時間で分子を選ぶ。",
      "vi": "Loại B: chia cho dòng chạm đất một dây. Khi **tự động cắt** lúc chạm lẫn, chọn tử số theo thời gian cắt.",
      "equations": [
        [
          {
            "fraction": [
              [
                "150"
              ],
              [
                "1線地絡電流"
              ]
            ],
            "red": true
          },
          " Ω"
        ],
        [
          {
            "fraction": [
              [
                "300"
              ],
              [
                "1線地絡電流"
              ]
            ],
            "red": true
          },
          " Ω（1秒超2秒以内）"
        ],
        [
          {
            "fraction": [
              [
                "600"
              ],
              [
                "1線地絡電流"
              ]
            ],
            "red": true
          },
          " Ω（1秒以内）"
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "150"
              ],
              [
                "Dòng chạm đất một dây"
              ]
            ],
            "red": true
          },
          " Ω"
        ],
        [
          {
            "fraction": [
              [
                "300"
              ],
              [
                "Dòng chạm đất một dây"
              ]
            ],
            "red": true
          },
          " Ω (hơn 1 đến hết 2 giây)"
        ],
        [
          {
            "fraction": [
              [
                "600"
              ],
              [
                "Dòng chạm đất một dây"
              ]
            ],
            "red": true
          },
          " Ω (trong 1 giây)"
        ]
      ]
    }
  ],
  "449": [
    {
      "jp": "接地線を人が触れるおそれがある場所に施設する場合",
      "vi": "Lắp dây nối đất ở nơi người có thể chạm vào.",
      "note": "",
      "heading": true
    },
    {
      "jp": "A種又はB種接地工事において、接地極及び接地線を人が触れるおそれがある場所に施設する場合は、接地線が損傷を受けたり、大地に危険な電位の傾きが生じないように、次のように施設する必要があります。",
      "vi": "Với nối đất A/B đặt ở nơi người có thể chạm, phải bảo vệ dây khỏi hư hỏng và giảm nguy cơ chênh điện thế nguy hiểm trên đất.",
      "note": ""
    },
    {
      "diagram": "lawGroundElectrode449"
    },
    {
      "jp": "①接地極は、地下**75 cm**以上の深さに埋設します。",
      "vi": "① Chôn điện cực nối đất sâu ít nhất **75 cm**."
    },
    {
      "jp": "②接地線を、鉄柱その他の金属体に沿って施設する場合は、接地極を鉄柱の底面から**30 cm**以上の深さに埋設する。又は、接地極を地中でその金属体から**1 m**以上離して埋設します。",
      "vi": "② Nếu dây nối đất đi dọc cột sắt hoặc cấu kiện kim loại khác, chôn điện cực thấp hơn đáy cột ít nhất **30 cm** hoặc chôn cách cấu kiện đó trong đất ít nhất **1 m**."
    },
    {
      "jp": "③接地線の地下**75 cm**から地表上**2 m**までの部分は、**合成樹脂管**又はこれと同等以上の絶縁効力及び強さのあるもので覆うことになっています。",
      "vi": "③ Bọc đoạn dây nối đất từ **75 cm** dưới đất đến **2 m** trên mặt đất bằng **ống nhựa tổng hợp** hoặc vật liệu có khả năng cách điện và độ bền ít nhất tương đương."
    },
    {
      "jp": "④接地線には、**絶縁電線**（屋外用ビニル絶縁電線を除く）又は通信用ケーブル以外の**ケーブル**を使用すること。ただし、接地線を鉄柱その他の金属体に沿って施設する場合以外には、接地線の地表上60 cmを超える部分については、この限りではありません。",
      "vi": "④ Dùng **dây cách điện** (trừ dây cách điện vinyl dùng ngoài trời) hoặc **cáp** (trừ cáp thông tin liên lạc). Nếu dây không đi dọc cột sắt hay cấu kiện kim loại khác, yêu cầu này được miễn cho đoạn dây cao hơn 60 cm so với mặt đất."
    },
    {
      "jp": "POINT　人が触れるおそれのある場所の接地工事 といえば\n・**75 cm**以上の深さに埋設し金属体からは**1 m**以上離す、又は鉄柱の底面から**30 cm**以上の深さに埋設する\n・地表上**2 m**～地下**75 cm**を**合成樹脂管**等で覆う",
      "vi": "Ghi nhớ. Nối đất ở nơi người có thể chạm vào.\n• Chôn sâu ít nhất **75 cm** và cách cấu kiện kim loại ít nhất **1 m**, hoặc chôn thấp hơn đáy cột sắt ít nhất **30 cm**.\n• Bọc đoạn từ **2 m** trên đất đến **75 cm** dưới đất bằng **ống nhựa tổng hợp** hoặc vật liệu tương đương."
    },
    {
      "jp": "接地工事の特例",
      "vi": "Các ngoại lệ của công trình nối đất",
      "note": "",
      "heading": true
    },
    {
      "jp": "接地工事の省略",
      "vi": "Các trường hợp được bỏ nối đất",
      "note": "",
      "heading": true
    },
    {
      "jp": "C種又はD種接地工事を施さなければならない金属体を建物の鉄骨、鉄筋などと電気的に接続すること等により、金属体と大地との間の接地抵抗がC種接地工事では**10 Ω**以下、D種接地工事では**100 Ω**以下である場合は、当該接地工事を省略することができます。",
      "vi": "Có thể bỏ nối đất riêng C/D khi kim loại liên kết điện với khung thép, cốt thép… và đã bảo đảm điện trở tới đất không vượt ngưỡng C **10 Ω** hoặc D **100 Ω**.",
      "note": ""
    },
    {
      "jp": "建物の鉄骨等の接地極",
      "vi": "Dùng khung thép tòa nhà và cấu kiện tương tự làm điện cực nối đất",
      "note": "",
      "heading": true
    },
    {
      "jp": "大地との電気抵抗値が**2 Ω**以下の建物の鉄骨その他の金属体は、これを非接地式",
      "vi": "Khung thép tòa nhà hoặc cấu kiện kim loại khác có điện trở với đất không quá **2 Ω** có thể được dùng…",
      "note": "Xem tiếp phạm vi áp dụng ở trang 450."
    }
  ],
  "450": [
    {
      "jp": "高圧電路に施設する機械器具の鉄台若しくは金属製外箱等に施す**A種**接地工事、又は非接地式高圧電路と低圧電路を結合する変圧器に施す**B種**接地工事の接地極に使用することができます。",
      "vi": "…làm điện cực nối đất **loại A** cho khung sắt hoặc vỏ kim loại của thiết bị trên mạch cao áp không nối đất, hoặc điện cực nối đất **loại B** cho máy biến áp nối mạch cao áp không nối đất với mạch hạ áp."
    },
    {
      "jp": "POINT　接地工事の特例 といえば 鉄骨、鉄筋と接続し**10 Ω**以下はC種、**100 Ω**以下はD種接地工事とすることができる",
      "vi": "Ghi nhớ. Khi nối điện với khung thép hoặc cốt thép, không quá **10 Ω** có thể dùng cho loại C, không quá **100 Ω** có thể dùng cho loại D."
    },
    {
      "jp": "**2 Ω**以下の金属体は、A種、B種接地工事の接地極に使用できる",
      "vi": "Cấu kiện kim loại có điện trở đến đất không quá **2 Ω** có thể dùng làm điện cực nối đất loại A hoặc B trong trường hợp trên."
    },
    {
      "jp": "機械器具の鉄台及び外箱の接地工事の省略",
      "vi": "Bỏ nối đất khung và vỏ kim loại của thiết bị",
      "note": "",
      "heading": true
    },
    {
      "jp": "機械器具の鉄台及び金属製外箱には、機械器具の使用電圧に応じて、接地工事を施します。ただし、次に示すような場合は、**接地工事の省略**が認められています。",
      "vi": "Nối đất khung sắt và vỏ kim loại theo điện áp sử dụng của thiết bị. Các trường hợp dưới đây được phép **miễn nối đất**."
    },
    {
      "jp": "①交流の対地電圧が**150 V以下**又は直流の使用電圧が300 V以下の機械器具を、**乾燥した場所**に施設する場合。",
      "vi": "① Thiết bị có điện áp AC so với đất **không quá 150 V** hoặc điện áp sử dụng DC không quá 300 V, lắp ở **nơi khô ráo**."
    },
    {
      "jp": "②低圧用の機械器具を乾燥した**木製の床**その他これに類する**絶縁性**のものの上で取り扱うように施設する場合。",
      "vi": "② Bố trí thiết bị hạ áp để thao tác trên **sàn gỗ** khô hoặc bề mặt **cách điện** tương tự."
    },
    {
      "jp": "③電気用品安全法の適用を受ける**2重絶縁**の構造の機械器具を施設する場合。",
      "vi": "③ Lắp thiết bị có cấu tạo **cách điện kép** thuộc phạm vi áp dụng của Luật An toàn sản phẩm điện."
    },
    {
      "jp": "④低圧用の機械器具に電気を供給する電路の電源側に**絶縁変圧器**（2次側線間電圧が300 V以下であって、容量が3 kV・A以下のものに限る）を施設し、かつ、当該絶縁変圧器の負荷側の電路を接地しない場合。",
      "vi": "④ Dùng **máy biến áp cách ly** phía nguồn của thiết bị hạ áp (áp dây thứ cấp ≤300 V, dung lượng ≤3 kVA) và mạch tải thứ cấp không nối đất.",
      "note": ""
    },
    {
      "jp": "⑤**水気のある場所以外**の場所に施設する低圧用の機械器具に電気を供給する電路に、電気用品安全法の適用を受ける漏電遮断器（定格感度電流が15 mA以下、動作時間が0.1秒以下の電流動作型のものに限る）を施設する場合。",
      "vi": "⑤ Mạch cấp cho thiết bị hạ áp lắp ở **nơi không ẩm ướt** có bộ cắt dòng rò thuộc Luật An toàn sản phẩm điện, loại tác động theo dòng, với dòng nhạy định mức không quá 15 mA và thời gian tác động không quá 0,1 giây."
    },
    {
      "jp": "⑥金属製外箱等の周囲に適当な**絶縁台**を設ける場合。",
      "vi": "⑥ Có **bệ cách điện** thích hợp quanh vỏ kim loại hoặc bộ phận tương tự."
    },
    {
      "jp": "⑦外箱のない計器用変成器がゴム、合成樹脂その他の絶縁物で被覆したものである場合",
      "vi": "⑦ Máy biến điện đo lường không có vỏ nhưng được bọc cao su, nhựa tổng hợp hoặc vật liệu cách điện khác.",
      "note": ""
    },
    {
      "jp": "⑧低圧用若しくは高圧用の機械器具を、木柱その他これに類する絶縁性のものの上であって、**人が触れるおそれがない高さ**に施設する場合。",
      "vi": "⑧ Lắp thiết bị hạ áp hoặc cao áp trên cột gỗ hay vật cách điện tương tự, ở **độ cao mà người không có khả năng chạm vào**."
    },
    {
      "jp": "POINT　接地工事が省略できる機器と条件 といえば\n・**乾燥**した場所（150 V以下）に施設する機械器具\n・乾燥した木製など**絶縁性**の床の上で扱う低圧の機械器具\n・**2重絶縁**の構造の機械器具\n・**絶縁変圧器**を使用\n・**水気のある場所以外**で高感度の漏電遮断器を使用\n・**人が触れるおそれがない高さ**に施設する機械器具",
      "vi": "Ghi nhớ. Một số trường hợp được phép miễn nối đất theo các điều kiện nêu ở trên.\n• Thiết bị ở nơi **khô ráo** (đến 150 V trong trường hợp AC).\n• Thiết bị hạ áp thao tác trên sàn **cách điện** như sàn gỗ khô.\n• Thiết bị **cách điện kép**.\n• Dùng **máy biến áp cách ly**.\n• Dùng thiết bị cắt dòng rò độ nhạy cao tại **nơi không ẩm ướt**.\n• Thiết bị ở **độ cao mà người không có khả năng chạm vào**."
    }
  ],
  "451": [
    {
      "jp": "高圧又は特別高圧と低圧との混触による危険防止施設",
      "vi": "Biện pháp chống nguy hiểm do chạm lẫn cao/siêu cao áp với hạ áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧電路又は特別高圧電路と低圧電路とを結合する変圧器には、次のいずれかの箇所に**B種接地工事**を施す必要があります。",
      "vi": "Máy biến áp nối mạch cao/siêu cao áp với mạch hạ áp phải thực hiện **nối đất loại B** tại một trong các vị trí.",
      "note": ""
    },
    {
      "jp": "①低圧側の**中性点**",
      "vi": "① **Điểm trung tính** phía hạ áp."
    },
    {
      "jp": "②低圧電路の使用電圧が300 V以下の場合において、接地工事を低圧側の中性点に施し難いときは、**低圧側の1端子**",
      "vi": "② Nếu điện áp sử dụng của mạch hạ áp không quá 300 V và khó nối đất điểm trung tính phía hạ áp, dùng **một đầu cực phía hạ áp**."
    },
    {
      "jp": "③低圧電路が非接地である場合においては、高圧巻線又は特別高圧巻線と低圧巻線との間に設けた金属製の**混触防止板**",
      "vi": "③ Nếu mạch hạ áp không nối đất, dùng **tấm chắn chống chạm lẫn** bằng kim loại đặt giữa cuộn dây cao áp hoặc siêu cao áp và cuộn dây hạ áp."
    },
    {
      "diagram": "lawInterwindingShield451"
    },
    {
      "jp": "混触防止板により接地工事を施した変圧器に接続する低圧線を屋外に施設する場合は、次の各号により施設すること。",
      "vi": "Khi lắp ngoài trời dây hạ áp nối với máy biến áp đã nối đất qua tấm chắn chống chạm lẫn, phải tuân theo các điều kiện sau."
    },
    {
      "jp": "低圧電線は、１構内だけに施設すること。",
      "vi": "Dây hạ áp chỉ được bố trí trong một khuôn viên.",
      "note": ""
    },
    {
      "jp": "低圧架空電線路又は低圧屋上電線路の電線は、ケーブルであること。",
      "vi": "Dây hạ áp trên không/trên mái phải là cáp.",
      "note": ""
    },
    {
      "jp": "低圧架空電線と高圧又は特別高圧の架空電線とは、同一支持物に施設しないこと。ただし、高圧又は特別高圧の架空電線がケーブルである場合は、この限りではない。",
      "vi": "Không lắp dây hạ áp và cao/siêu cao áp trên cùng vật đỡ, trừ trường hợp dây cao/siêu cao áp là cáp.",
      "note": ""
    },
    {
      "jp": "POINT　B種接地工事を施す場所\n変圧器低圧側の**中性点**、低圧側の**1端子**、金属製の**混触防止板**",
      "vi": "Ghi nhớ vị trí nối đất loại B. **Điểm trung tính** phía hạ áp của máy biến áp, **một đầu cực** phía hạ áp hoặc **tấm chắn chống chạm lẫn** bằng kim loại."
    },
    {
      "jp": "計器用変成器二次側の接地",
      "vi": "Nối đất thứ cấp biến điện đo lường",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧計器用変成器の二次側電路は、**D種**接地工事を、特別高圧計器用変成器の二次側電路には、**A種**接地工事を施さなければならないと定められています。高圧の場合でもD種接地工事としているのは、計器用変成器の二次側電路は一般の配電盤のように操作員以外の者が立ち入らない場所に施設されることによっています。",
      "vi": "Mạch thứ cấp máy biến điện đo lường cao áp phải nối đất **loại D**, còn mạch thứ cấp loại siêu cao áp phải nối đất **loại A**. Với loại cao áp, sách giải thích dùng loại D vì mạch thứ cấp nằm ở nơi chỉ người vận hành được vào, chẳng hạn tủ phân phối thông thường."
    },
    {
      "jp": "POINT　計器用変成器の二次側の接地工事\n高圧計器用変成器の二次側電路は、**D種**接地工事\n特別高圧計器用変成器の二次側電路は、**A種**接地工事",
      "vi": "Ghi nhớ. Mạch thứ cấp máy biến điện đo lường cao áp nối đất **loại D**. Với loại siêu cao áp, nối đất **loại A**."
    }
  ],
  "452": [
    {
      "jp": "2-2 電気機械器具、発電所などの保安原則 といえば危険のない場所に施設する",
      "vi": "2-2 Nguyên tắc an toàn khi lắp thiết bị điện, nhà máy điện · Đặt ở nơi không nguy hiểm.",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧の機械器具の施設",
      "vi": "Lắp đặt thiết bị điện cao áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧の機械器具（これに附属する高圧電線であってケーブル以外のものを含む）は、次のいずれかにより施設することが求められています。",
      "vi": "Thiết bị cao áp (gồm dây cao áp đi kèm, trừ dây dạng cáp) phải được lắp theo một trong các phương án dưới đây.",
      "note": ""
    },
    {
      "jp": "ただし、発電所又は変電所、開閉所若しくはこれらに準ずる場所に施設する場合は除きます。",
      "vi": "Trừ trường hợp lắp trong nhà máy điện, trạm biến áp, trạm đóng cắt hoặc nơi tương đương."
    },
    {
      "jp": "①屋内であって、**取扱者以外の者**が出入りできないように措置した場所に施設すること。",
      "vi": "① Đặt trong nhà ở nơi đã có biện pháp ngăn **người không được phép vận hành thiết bị** ra vào."
    },
    {
      "jp": "②次により施設すること。",
      "vi": "② Bố trí theo điều kiện bảo vệ dưới đây.",
      "note": ""
    },
    {
      "jp": "ただし、工場等の構内においては、ロ及びハの規定によらないことができる。",
      "vi": "Trong khuôn viên nhà máy hoặc cơ sở tương tự, có thể áp dụng ngoại lệ đối với mục b và c."
    },
    {
      "jp": "イ 人が触れるおそれがないように、機械器具の周囲に適当な**さく**、**へい**等を設けること。",
      "vi": "a) Dùng **hàng rào**, **tường chắn** thích hợp quanh thiết bị để người không thể chạm vào."
    },
    {
      "jp": "ロ イの規定により施設するさく、へい等の高さと、当該さく、へい等から機械器具の充電部分までの距離との和を**5 m以上**とすること。",
      "vi": "b) Tổng chiều cao hàng rào hoặc tường chắn ở mục a và khoảng cách từ đó đến phần mang điện của thiết bị phải **từ 5 m trở lên**."
    },
    {
      "jp": "ハ 危険である旨の**表示**をすること。",
      "vi": "c) Đặt **biển cảnh báo** nguy hiểm."
    },
    {
      "diagram": "lawHighVoltageEquipment452"
    },
    {
      "jp": "③機械器具に附属する高圧電線にケーブル又は引下げ用高圧絶縁電線を使用し、機械器具を人が触れるおそれがないように地表上**4.5 m**（市街地外においては**4 m**）以上の高さに施設すること。",
      "vi": "③ Dùng cáp hoặc dây cách điện cao áp dẫn xuống cho dây cao áp đi kèm. Lắp thiết bị cao ít nhất **4,5 m** tính từ mặt đất (ngoài đô thị ít nhất **4 m**) để người không chạm vào được."
    },
    {
      "jp": "④機械器具を**コンクリート製の箱**又はD種接地工事を施した**金属製の箱**に収め、かつ、充電部分が露出しないように施設すること。",
      "vi": "④ Đặt thiết bị trong **hộp bê tông** hoặc **hộp kim loại** nối đất loại D, không để lộ phần mang điện."
    }
  ],
  "453": [
    {
      "jp": "⑤充電部分が露出しない機械器具を、次のいずれかにより施設すること。",
      "vi": "⑤ Lắp thiết bị không để lộ phần mang điện theo một trong những biện pháp sau.",
      "note": ""
    },
    {
      "jp": "イ **簡易接触防護措置**を施すこと。",
      "vi": "a) Áp dụng **biện pháp bảo vệ đơn giản chống tiếp xúc**."
    },
    {
      "jp": "ロ　温度上昇により、又は故障の際に、その近傍の大地との間に生じる電位差により、人若しくは家畜又は他の工作物に危険のおそれがないように施設すること。",
      "vi": "b) Lắp sao cho sự tăng nhiệt hoặc chênh lệch điện thế với đất lân cận khi có sự cố không gây nguy hiểm cho người, gia súc hay công trình khác.",
      "note": ""
    },
    {
      "jp": "特別高圧の機械器具の施設",
      "vi": "Lắp thiết bị điện siêu cao áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "特別高圧の機械器具の施設の規制としては、機械器具を地表上**5 m以上**の高さに施設し、さくの高さと、当該さくから機械器具の充電部分までの距離との和を表2-2-1に規定する値以上とすることが決められています。",
      "vi": "Thiết bị siêu cao áp phải đặt cao **ít nhất 5 m** so với mặt đất. Tổng chiều cao hàng rào và khoảng cách từ hàng rào đến phần mang điện phải đạt ít nhất trị số ở bảng 2-2-1."
    },
    {
      "jp": "表2-2-1 充電部分までの距離",
      "vi": "Bảng 2-2-1 · Khoảng cách tới phần mang điện",
      "heading": true,
      "table": {
        "jp": [
          "使用電圧の区分",
          "さくの高さとさくから充電部分までの距離との和又は地表上の高さ"
        ],
        "vi": [
          "Điện áp sử dụng",
          "Chiều cao hàng rào cộng khoảng cách tới phần mang điện, hoặc chiều cao trên mặt đất"
        ],
        "rows": [
          [
            "35 000 V以下",
            "Đến 35.000 V",
            "5 m"
          ],
          [
            "35 000 Vを超え160 000 V以下",
            "Trên 35.000 V đến 160.000 V",
            "6 m"
          ],
          [
            "160 000 V超過",
            "Trên 160.000 V",
            "(6 + c)［m］"
          ]
        ],
        "rowsVi": [
          [
            "35 000 V以下",
            "Đến 35.000 V",
            "5 m"
          ],
          [
            "35 000 Vを超え160 000 V以下",
            "Trên 35.000 V đến 160.000 V",
            "6 m"
          ],
          [
            "160 000 V超過",
            "Trên 160.000 V",
            "(6 + c) m"
          ]
        ]
      }
    },
    {
      "jp": "備考　cは、使用電圧と160 000 Vの差を10 000 Vで除した値（小数点以下を切り上げる。）に0.12を乗じたもの。",
      "vi": "Ghi chú. Với điện áp sử dụng U trên 160.000 V, lấy hiệu giữa U và 160.000 V chia 10.000 V, làm tròn lên số nguyên rồi nhân 0,12.",
      "equations": [
        [
          "c = 0.12 × 切上げ［",
          {
            "fraction": [
              [
                "U − 160 000 V"
              ],
              [
                "10 000 V"
              ]
            ]
          },
          "］"
        ]
      ],
      "equationsVi": [
        [
          "c = 0,12 × làm tròn lên [",
          {
            "fraction": [
              [
                "U − 160.000 V"
              ],
              [
                "10.000 V"
              ]
            ]
          },
          "]"
        ]
      ]
    },
    {
      "jp": "POINT　高圧の機械器具の施設\n・**取扱者以外の者**が出入りできないように措置をした場所に施設する\n・**さく**、**へい**等を設ける\n・充電部分までの距離との和を**5 m以上**とする\n・危険である旨の**表示**をする\n・地表上**4.5 m**（市街地外においては**4 m**）以上の高さに施設する\n・**コンクリート製の箱**又はD種接地工事を施した**金属製の箱**に収め、充電部分が露出しないように施設する\n・**簡易接触防護措置**を施す\n・特別高圧の機械器具は、地表上**5 m以上**の高さに施設する",
      "vi": "Ghi nhớ cách lắp thiết bị cao áp.\n• Ngăn **người không được phép vận hành thiết bị** ra vào.\n• Lắp **hàng rào**, **tường chắn**.\n• Tổng chiều cao hàng rào và khoảng cách tới phần mang điện **ít nhất 5 m**.\n• Có **biển cảnh báo** nguy hiểm.\n• Lắp cao ít nhất **4,5 m** (ngoài đô thị **4 m**).\n• Đặt trong **hộp bê tông** hoặc **hộp kim loại** nối đất loại D, không để lộ phần mang điện.\n• Áp dụng **biện pháp bảo vệ đơn giản chống tiếp xúc**.\n• Thiết bị siêu cao áp lắp **ít nhất 5 m** trên mặt đất."
    },
    {
      "jp": "アークを生じる器具の施設",
      "vi": "Lắp thiết bị tạo hồ quang",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧又は特別高圧用の開閉器、遮断器又は避雷器その他これらに類する器具（「開閉器等」という）であって、動作時にアークを生じるものは、次の各号のいずれかにより施設します。",
      "vi": "Thiết bị đóng cắt, máy cắt, chống sét van cao áp hoặc siêu cao áp và thiết bị tương tự (gọi chung là thiết bị đóng cắt và thiết bị liên quan) phát sinh hồ quang khi hoạt động được lắp theo một trong hai phương án dưới đây."
    },
    {
      "jp": "①耐火性のもので**アーク**を生じる部分を囲むことにより、木製の壁又は天井その他の可燃性のものから**隔離する**こと。",
      "vi": "① Bao phần phát sinh **hồ quang** bằng vật liệu chịu lửa để **cách ly** với tường gỗ, trần gỗ hoặc vật liệu dễ cháy khác."
    },
    {
      "jp": "②木製の壁又は天井その他の可燃性のものとの離隔距離を表2-2-2に規定する値以上とすること。",
      "vi": "② Giữ khoảng cách với vật dễ cháy theo bảng 2-2-2.",
      "note": ""
    }
  ],
  "454": [
    {
      "jp": "表2-2-2 開閉器等との離隔距離",
      "vi": "Bảng 2-2-2 · Khoảng cách an toàn với thiết bị đóng cắt và thiết bị liên quan",
      "heading": true,
      "table": {
        "jp": [
          "開閉器等の使用電圧の区分",
          "離隔距離"
        ],
        "vi": [
          "Điện áp sử dụng",
          "Khoảng cách"
        ],
        "rows": [
          [
            "高圧",
            "Cao áp",
            "**1 m**"
          ],
          [
            "特別高圧 35 000 V以下",
            "Siêu cao áp đến 35.000 V",
            "**2 m**（動作時に生じるアークの方向及び長さを火災が発生するおそれがないように制限した場合にあっては、**1 m**）"
          ],
          [
            "特別高圧 35 000 V超過",
            "Siêu cao áp trên 35.000 V",
            "**2 m**"
          ]
        ],
        "rowsVi": [
          [
            "高圧",
            "Cao áp",
            "**1 m**"
          ],
          [
            "特別高圧 35 000 V以下",
            "Siêu cao áp đến 35.000 V",
            "**2 m** (hoặc **1 m** nếu hướng và độ dài hồ quang khi thiết bị hoạt động được khống chế để tránh nguy cơ cháy)"
          ],
          [
            "特別高圧 35 000 V超過",
            "Siêu cao áp trên 35.000 V",
            "**2 m**"
          ]
        ]
      }
    },
    {
      "jp": "POINT　アークを生じる器具は、**耐火性**のもので囲み、可燃性のものから**隔離**する\n高圧の開閉器等と可燃性のものとの離隔距離は、**1 m**以上\n特別高圧の開閉器等と可燃性のものとの離隔距離は、**2 m**以上",
      "vi": "Ghi nhớ. Bao thiết bị phát sinh hồ quang bằng vật liệu **chịu lửa** để **cách ly** với vật liệu dễ cháy. Khoảng cách với vật liệu dễ cháy ít nhất **1 m** đối với cao áp và **2 m** đối với siêu cao áp.",
      "note": "Bảng phía trên nêu trường hợp siêu cao áp đến 35.000 V có thể giảm còn 1 m."
    },
    {
      "jp": "発電所等への取扱者以外の者の立入りの防止",
      "vi": "Ngăn người không phận sự vào nhà máy và trạm điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧又は特別高圧の機械器具及び母線等を屋外に施設する発電所又は変電所、開閉所若しくはこれらに準ずる場所（「発電所等」という）は、次により構内に**取扱者以外の者**が立ち入らないような措置を講じることとしています。",
      "vi": "Nhà máy điện, trạm biến áp, trạm đóng cắt hoặc nơi tương đương có thiết bị hoặc thanh cái cao áp hay siêu cao áp đặt ngoài trời phải áp dụng các biện pháp dưới đây để **người không được phép vận hành thiết bị** không vào khuôn viên."
    },
    {
      "jp": "①**さく**、**へい**等を設けること。",
      "vi": "① Lắp **hàng rào**, **tường chắn** hoặc bộ phận tương tự."
    },
    {
      "jp": "②出入口に**立入を禁止する**旨を表示すること。",
      "vi": "② Gắn biển **cấm vào** ở cửa ra vào."
    },
    {
      "jp": "③出入口に**施錠装置**を施設して施錠する等、取扱者以外の者の出入りを制限する措置を講じること。",
      "vi": "③ Gắn **thiết bị khóa** và khóa cửa ra vào, hoặc áp dụng biện pháp khác để hạn chế người không được phép."
    },
    {
      "jp": "POINT　発電所等への取扱者以外の者の立入の防止措置は、\n・**さく**、**へい**等を設ける\n・さく、へいの**高さ**と特別高圧の機械器具等の**充電部分までの距離**との和は、35 000 V以下の場合は、**5 m**以上",
      "vi": "Ghi nhớ biện pháp ngăn người không phận sự vào nhà máy điện, trạm điện và nơi tương tự.\n• Lắp **hàng rào**, **tường chắn**.\n• Khi điện áp đến 35.000 V, tổng **chiều cao** hàng rào, tường chắn và **khoảng cách đến phần mang điện** siêu cao áp ít nhất **5 m**."
    },
    {
      "jp": "避雷器の施設",
      "vi": "Lắp đặt thiết bị chống sét",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧避雷器は、雷サージ※1、開閉サージなどの過電圧の侵入による受電設備機器の破損を防止するために設置します。",
      "vi": "Chống sét van cao áp dùng để ngăn hư hỏng thiết bị nhận điện do quá điện áp xâm nhập, như xung sét (chú thích 1) hoặc xung đóng cắt.",
      "note": ""
    },
    {
      "jp": "避雷器の施設箇所と接地工事",
      "vi": "Vị trí lắp thiết bị chống sét và phương pháp nối đất",
      "note": "Danh sách vị trí cụ thể tiếp tục ở trang 455.",
      "heading": true
    },
    {
      "jp": "高圧及び特別高圧の電路中、次の箇所には避雷器を施設します。",
      "vi": "Lắp chống sét van tại các vị trí sau trên mạch cao áp và siêu cao áp. Xem tiếp trang 455."
    },
    {
      "jp": "※1 サージ：異常に高い電圧が瞬間的に発生する現象のこと。",
      "vi": "Chú thích 1. Xung quá điện áp là hiện tượng điện áp cao bất thường xuất hiện tức thời."
    }
  ],
  "455": [
    {
      "jp": "①発電所又は変電所若しくはこれに準ずる場所の架空電線の**引込口**及び**引出口**",
      "vi": "① **Điểm đưa dây vào** và **điểm đưa dây ra** của đường dây trên không ở nhà máy điện, trạm biến áp hoặc nơi tương đương."
    },
    {
      "jp": "②架空電線路に接続する配電用変圧器の**高圧側**及び**特別高圧側**",
      "vi": "② **Phía cao áp** và **phía siêu cao áp** của máy biến áp phân phối nối với đường dây trên không."
    },
    {
      "jp": "③高圧架空電線路から供給を受ける受電電力の容量が**500 kW**以上の**需要場所の引込口**",
      "vi": "③ **Điểm đưa dây vào nơi sử dụng điện** nhận điện cao áp từ đường dây trên không với công suất nhận từ **500 kW**."
    },
    {
      "jp": "④特別高圧架空電線路から供給を受ける需要場所の引込口",
      "vi": "④ Điểm vào cơ sở nhận điện từ đường dây siêu cao áp trên không.",
      "note": ""
    },
    {
      "jp": "また、高圧及び特別高圧の電路に施設する避雷器には、**A種**接地工事を施します。",
      "vi": "Chống sét van trên mạch cao áp và siêu cao áp phải nối đất **loại A**."
    },
    {
      "jp": "架空地線の施設",
      "vi": "Lắp đặt dây chống sét trên không",
      "note": "",
      "heading": true
    },
    {
      "jp": "**架空地線**は、架空電線路を**雷**から保護するために、架空電線路の上方に並行して施設する**接地線**です。",
      "vi": "**Dây chống sét trên không** là **dây nối đất** đặt song song phía trên đường dây để bảo vệ khỏi **sét**."
    },
    {
      "jp": "高圧架空電線路に使用する架空地線は、直径**4 mm**以上の裸硬銅線又は引張強さ5.26 kN以上のものとします。",
      "vi": "Dây chống sét của đường dây cao áp trên không là dây đồng cứng trần đường kính ít nhất **4 mm** hoặc dây chịu lực kéo ít nhất 5,26 kN."
    },
    {
      "jp": "POINT　避雷器の施設箇所 といえば 架空電線の**引込口**と**引出口**、配電用変圧器の**高圧側**及び**特別高圧側**、**500 kW**以上の需要場所の**引込口**\n避雷器の接地 といえば **A種**接地工事\n架空地線 といえば 電線路を**雷**から保護する**接地線**、**4 mm**以上の**裸硬銅線**（高圧架空電線路）",
      "vi": "Ghi nhớ. Lắp chống sét van ở **điểm đưa dây vào** và **điểm đưa dây ra** của đường dây trên không tại nơi nêu trên, **phía cao áp** và **phía siêu cao áp** của máy biến áp phân phối, và **điểm đưa dây vào** nơi nhận điện cao áp từ **500 kW**. Chống sét van nối đất **loại A**. Dây chống sét là **dây nối đất** bảo vệ đường dây khỏi **sét**. Với đường dây cao áp trên không, sách nêu **dây đồng cứng trần** từ **4 mm**."
    },
    {
      "jp": "変電所等からの電磁誘導作用による人の健康影響の防止",
      "vi": "Phòng ảnh hưởng sức khỏe do cảm ứng điện từ từ trạm điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "変電所又は開閉所（「変電所等」という）から発生する磁界は、磁束密度の測定値が、商用周波数において**200** μT以下であること。ただし、田畑、山林その他の人の往来が少ない場所において、人体に危害を及ぼすおそれがないように施設する場合は、この限りではありません。",
      "vi": "Mật độ từ thông đo được của từ trường do trạm biến áp hoặc trạm đóng cắt sinh ra ở tần số lưới không quá **200** µT. Ngoại lệ áp dụng nếu lắp ở đồng ruộng, rừng hoặc nơi ít người qua lại và bố trí sao cho không có nguy cơ gây hại cho người."
    },
    {
      "jp": "測定に当たっては、測定地点の地表、路面又は床（「地表等」という）から**0.5 m**、**1 m**及び**1.5 m**の高さで測定し、3点の**平均値**を測定値とします。",
      "vi": "Đo ở ba độ cao **0,5 m**, **1 m** và **1,5 m** tính từ mặt đất, mặt đường hoặc sàn, rồi lấy **giá trị trung bình** của ba điểm."
    },
    {
      "jp": "架空電線路からの静電誘導作用又は電磁誘導作用による感電の防止",
      "vi": "Chống điện giật do cảm ứng điện trường/từ trường từ dây trên không",
      "note": "",
      "heading": true
    },
    {
      "jp": "特別高圧の架空電線路は、通常の使用状態において、静電誘導作用により人による感知のおそれがないよう、地表上1 mにおける電界強度が**3 kV/m**以下になるように施設しなければなりません。",
      "vi": "Trong điều kiện sử dụng bình thường, đường dây siêu cao áp trên không phải được lắp sao cho cường độ điện trường tại độ cao 1 m trên mặt đất không quá **3 kV/m**, để người không cảm nhận được tác động của cảm ứng tĩnh điện."
    },
    {
      "jp": "POINT　電磁誘導作用又は静電誘導作用による人への影響防止の規定 といえば\n変電所等からの磁界は、**磁束密度**の測定値が**200 μT**以下\n特高の架空電線路からの電界は、**電界強度**が**3 kV/m**以下",
      "vi": "Ghi nhớ. **Mật độ từ thông** đo được của từ trường từ trạm biến áp và nơi tương đương không quá **200 µT**. **Cường độ điện trường** do đường dây siêu cao áp trên không không quá **3 kV/m**."
    }
  ],
  "456": [
    {
      "jp": "2-3 架空電線路の支持物 といえば 木柱、鉄柱、鉄筋コンクリート柱など",
      "vi": "2-3 Vật đỡ đường dây trên không: cột gỗ, cột thép, cột bê tông cốt thép…",
      "note": "",
      "heading": true
    },
    {
      "jp": "架空電線路の支持物",
      "vi": "Vật đỡ đường dây trên không",
      "note": "",
      "heading": true
    },
    {
      "jp": "電線路の定義",
      "vi": "Định nghĩa đường dây điện",
      "note": "",
      "heading": true
    },
    {
      "jp": "電技において、「電線路」とは、発電所、変電所、開閉所及びこれらに類する場所並びに電気使用場所相互間の電線並びにこれを支持し、又は保蔵する工作物注）をいうと定義しています。",
      "vi": "Theo tiêu chuẩn kỹ thuật, đường dây điện gồm dây dẫn giữa các nhà máy điện, trạm biến áp, trạm đóng cắt, nơi tương tự và nơi sử dụng điện, cùng công trình dùng để đỡ hoặc chứa các dây này (xem chú thích)."
    },
    {
      "jp": "主な電線路として、架空電線路、屋側電線路、屋上電線路、地中電線路などがあります。",
      "vi": "Các loại chính gồm đường dây trên không, dọc tường, trên mái và ngầm.",
      "note": ""
    },
    {
      "jp": "注）電線を支持するのに要する腕木、がいし、支線など及びケーブルの布設に要する暗きょ、地中箱、接続箱など",
      "vi": "Chú thích. Ví dụ công trình đỡ dây gồm xà, sứ cách điện và dây néo. Công trình phục vụ rải cáp gồm hầm cáp, hộp ngầm và hộp nối, v.v."
    },
    {
      "jp": "支持物の種類",
      "vi": "Các loại cột đỡ",
      "note": "",
      "heading": true
    },
    {
      "jp": "支持物の種類には、木柱、鉄柱、鉄筋コンクリート柱及び鉄塔があり、安全性の差による規制があります。",
      "vi": "Vật đỡ gồm cột gỗ, thép, bê tông cốt thép và tháp thép; quy định phụ thuộc mức an toàn.",
      "note": ""
    },
    {
      "jp": "・**A種鉄筋コンクリート柱**：基礎の強度計算を行わず、根入れの深さを表2-3-1に示す値以上とするものと規定されています。",
      "vi": "• **Cột bê tông cốt thép loại A**: không tính sức bền móng và chôn chân cột sâu ít nhất bằng trị số trong bảng 2-3-1."
    },
    {
      "jp": "・**A種鉄柱**：基礎の強度計算は行わず、根入れの深さを表2-3-2に示す値以上とするものと規定されています。",
      "vi": "• **Cột thép loại A**: không tính sức bền móng và chôn chân cột sâu ít nhất bằng trị số trong bảng 2-3-2."
    },
    {
      "jp": "B種鉄筋コンクリート柱：A種鉄筋コンクリート柱以外の鉄筋コンクリート柱。",
      "vi": "Cột BTCT loại B là loại khác A.",
      "note": ""
    },
    {
      "jp": "B種鉄柱：A種鉄柱以外のもの。",
      "vi": "Cột thép loại B là loại khác A.",
      "note": ""
    },
    {
      "jp": "表2-3-1 A種鉄筋コンクリート柱の根入れ深さ",
      "vi": "Bảng 2-3-1 · Độ chôn chân cột bê tông cốt thép loại A",
      "heading": true,
      "table": {
        "jp": [
          "設計荷重",
          "全長",
          "根入れ深さ"
        ],
        "vi": [
          "Tải trọng thiết kế",
          "Tổng chiều dài",
          "Độ chôn chân cột"
        ],
        "rows": [
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "15 m以下",
            "全長の**1/6**"
          ],
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "15 mを超え16 m以下",
            "**2.5 m**"
          ],
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "16 mを超え20 m以下",
            "2.8 m"
          ],
          [
            "6.87 kNを超え9.81 kN以下",
            "Trên 6,87 kN đến 9,81 kN",
            "14 m以上15 m以下",
            "全長の1/6に0.3 mを加えた値"
          ],
          [
            "6.87 kNを超え9.81 kN以下",
            "Trên 6,87 kN đến 9,81 kN",
            "15 mを超え20 m以下",
            "2.8 m"
          ]
        ],
        "rowsVi": [
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "Đến 15 m",
            "**1/6** tổng chiều dài"
          ],
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "Trên 15 m đến 16 m",
            "**2,5 m**"
          ],
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "Trên 16 m đến 20 m",
            "2,8 m"
          ],
          [
            "6.87 kNを超え9.81 kN以下",
            "Trên 6,87 kN đến 9,81 kN",
            "Từ 14 m đến 15 m",
            "1/6 tổng chiều dài cộng 0,3 m"
          ],
          [
            "6.87 kNを超え9.81 kN以下",
            "Trên 6,87 kN đến 9,81 kN",
            "Trên 15 m đến 20 m",
            "2,8 m"
          ]
        ]
      }
    },
    {
      "jp": "表2-3-2 A種鉄柱の根入れ深さ",
      "vi": "Bảng 2-3-2 · Độ chôn chân cột thép loại A",
      "heading": true,
      "table": {
        "jp": [
          "設計荷重",
          "全長",
          "根入れ深さ"
        ],
        "vi": [
          "Tải trọng thiết kế",
          "Tổng chiều dài",
          "Độ chôn chân cột"
        ],
        "rows": [
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "15 m以下",
            "全長の**1/6**"
          ],
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "15 mを超え16 m以下",
            "**2.5 m**"
          ]
        ],
        "rowsVi": [
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "Đến 15 m",
            "**1/6** tổng chiều dài"
          ],
          [
            "6.87 kN以下",
            "Đến 6,87 kN",
            "Trên 15 m đến 16 m",
            "**2,5 m**"
          ]
        ]
      }
    },
    {
      "jp": "POINT　**A種**鉄筋コンクリート柱と**A種**鉄柱は、強度計算を行わずに使用できる。\n根入れ深さ：15 m以下は、全長の**1/6**、15 mを超え20 m以下は、**2.5 m**\nA種以外をB種という",
      "vi": "Ghi nhớ. Cột bê tông cốt thép **loại A** và cột thép **loại A** có thể dùng mà không tính sức bền móng.\nĐộ chôn chân cột trong ô ghi nhớ: nếu dài đến 15 m thì chôn **1/6** tổng chiều dài, nếu dài trên 15 m đến 20 m thì ghi **2,5 m**.\nNgoài loại A gọi là loại B.",
      "note": "Ô POINT ghi gộp. Khi tra trị số, dùng hai bảng theo loại cột, tải trọng và chiều dài. Ví dụ cột bê tông cốt thép loại A dài trên 16 đến 20 m, tải đến 6,87 kN, dùng 2,8 m theo bảng 2-3-1.",
      "equations": [
        [
          "全長の ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "6"
              ]
            ],
            "red": true
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "1"
              ],
              [
                "6"
              ]
            ],
            "red": true
          },
          " tổng chiều dài"
        ]
      ]
    }
  ],
  "457": [
    {
      "jp": "支持物の強度",
      "vi": "Sức bền vật đỡ",
      "note": "",
      "heading": true
    },
    {
      "jp": "支持物の強度の算定は、風圧荷重のほか、電線の強度やがいし装置の重量などの事項が規定されています。",
      "vi": "Khi tính sức bền vật đỡ, ngoài tải trọng áp lực gió còn có quy định về sức bền dây dẫn và trọng lượng bộ cách điện, v.v.",
      "note": ""
    },
    {
      "jp": "風圧荷重",
      "vi": "Tải trọng áp lực gió",
      "note": "",
      "heading": true
    },
    {
      "jp": "支持物に加わる荷重のうち、風圧荷重について、甲種、乙種、丙種及び着雪時の4種類を、地域によりその適用範囲を定めています。",
      "vi": "Tải gió được phân thành các dạng 甲, 乙, 丙 và trường hợp tuyết bám; vùng áp dụng phụ thuộc địa phương.",
      "note": ""
    },
    {
      "jp": "・**甲種風圧荷重**：10分間平均で風速**40 m/sの風**があるものと仮定した場合に生じる風圧荷重で、**高温季**について適用します。",
      "vi": "• **Tải gió loại 甲**: tính với giả thiết **gió 40 m/s** trung bình trong 10 phút, áp dụng vào **mùa nóng**."
    },
    {
      "jp": "低温季において最大風圧を生じる地方にあっては**低温季について**も適用します。",
      "vi": "Vùng gió cực đại xuất hiện mùa lạnh cũng áp dụng loại này **vào mùa lạnh**.",
      "note": ""
    },
    {
      "jp": "**甲種風圧荷重**は、支持物、電線その他の架渉線、がいし装置及び腕金類について、構成材の垂直投影面積**1 m²にかかる圧力**（風圧荷重［Pa］）を定めています。",
      "vi": "**Tải gió loại 甲** quy định **áp lực lên 1 m²** diện tích hình chiếu đứng của vật đỡ, dây điện và các dây giăng khác, bộ cách điện và xà kim loại."
    },
    {
      "jp": "甲種風圧の適用地域の配電線路では、電線については**980 Pa**（100 kg/m²）の風圧がかかるものとして支持物の強度を計算します。",
      "vi": "Đối với dây phân phối ở vùng áp dụng tải 甲, dùng áp lực gió **980 Pa** (100 kg/m²) để tính sức bền.",
      "note": ""
    },
    {
      "jp": "・**乙種風圧荷重**：電線その他の架渉線の周囲に厚さ**6 mm**、比重0.9の氷雪が付着した状態に対し、甲種風圧荷重の**0.5倍**を基礎として計算したもので、氷雪の多い地方において**低温季**について適用します。",
      "vi": "• **Tải gió loại 乙**: giả định băng tuyết dày **6 mm**, tỷ trọng 0,9, bám quanh dây điện và các dây giăng khác. Tính trên cơ sở **0,5 lần** tải loại 甲, áp dụng vào **mùa lạnh** ở vùng nhiều băng tuyết."
    },
    {
      "jp": "・**丙種風圧荷重**：甲種風圧荷重の0.5倍を基礎として計算したもので、氷雪の多くない地方において低温季について適用します。",
      "vi": "• **Tải gió loại 丙**: tính trên cơ sở 0,5 lần tải loại 甲, áp dụng vào mùa lạnh ở vùng ít băng tuyết."
    },
    {
      "jp": "・**着雪時風圧荷重**：架渉線の周囲に比重0.6の雪が同心円状に付着した状態に対し、甲種風圧荷重の0.3倍を基礎として計算したもので、降雪の多い地域の河川等を横断する鉄塔に用います。",
      "vi": "• **Tải gió khi tuyết bám**: giả định tuyết có tỷ trọng 0,6 bám đồng tâm quanh dây giăng và tính trên cơ sở 0,3 lần tải loại 甲. Dùng cho tháp thép vượt sông và địa hình tương tự ở vùng tuyết rơi nhiều."
    },
    {
      "jp": "風圧荷重の適用",
      "vi": "Áp dụng tải áp lực gió",
      "note": "",
      "heading": true
    },
    {
      "jp": "風圧荷重の計算を適用する地方は、表2-3-3のように適用します。",
      "vi": "Dùng bảng 2-3-3 để chọn loại tải gió theo địa phương."
    },
    {
      "jp": "表2-3-3 風圧荷重の適用",
      "vi": "Bảng 2-3-3 · Loại tải gió áp dụng theo vùng và mùa",
      "heading": true,
      "table": {
        "jp": [
          "地方の別",
          "高温季",
          "低温季"
        ],
        "vi": [
          "Loại vùng",
          "Mùa nóng",
          "Mùa lạnh"
        ],
        "rows": [
          [
            "氷雪の多い地方以外の地方",
            "Vùng ít băng tuyết",
            "**甲種**",
            "**丙種**"
          ],
          [
            "氷雪の多い地方：下記以外の地方",
            "Vùng nhiều băng tuyết, trừ trường hợp dòng dưới",
            "**甲種**",
            "**乙種**"
          ],
          [
            "氷雪の多い地方：冬季に最大風圧を生ずる地方",
            "Vùng nhiều băng tuyết có áp lực gió lớn nhất vào mùa đông",
            "**甲種**",
            "**甲種**及び**乙種**の大きい方を適用"
          ]
        ],
        "rowsVi": [
          [
            "氷雪の多い地方以外の地方",
            "Vùng ít băng tuyết",
            "**Loại 甲**",
            "**Loại 丙**"
          ],
          [
            "氷雪の多い地方：下記以外の地方",
            "Vùng nhiều băng tuyết, trừ trường hợp dòng dưới",
            "**Loại 甲**",
            "**Loại 乙**"
          ],
          [
            "氷雪の多い地方：冬季に最大風圧を生ずる地方",
            "Vùng nhiều băng tuyết có áp lực gió lớn nhất vào mùa đông",
            "**Loại 甲**",
            "Lấy giá trị lớn hơn giữa **loại 甲** và **loại 乙**"
          ]
        ]
      }
    },
    {
      "jp": "なお、人家が多く連なっている場所に施設される架空電線路の構成材のうち、低圧又は高圧の架空電線路の支持物及び架渉線、使用電圧35 000 V以下の特別高圧架空電線路の支持物に施設する低・高圧の架空電線などには、甲種又は乙種風圧荷重に代えて丙種風圧荷重を適用することができます。これは、人家の連なる場所では風速が一般に減衰することが知られているからです。",
      "vi": "Ở nơi có nhiều nhà liền nhau, có thể dùng tải loại 丙 thay loại 甲 hoặc 乙 đối với vật đỡ và dây giăng của đường dây hạ áp hoặc cao áp trên không, dây hạ áp hoặc cao áp lắp trên vật đỡ của đường dây siêu cao áp trên không có điện áp sử dụng đến 35.000 V, và các trường hợp tương tự. Lý do là tốc độ gió thường giảm ở nơi nhà cửa san sát."
    }
  ],
  "458": [
    {
      "jp": "POINT　風圧荷重は甲種、乙種、丙種",
      "vi": "Ghi nhớ: tải trọng gió chia loại 甲 (A), 乙 (B), 丙 (C).",
      "note": ""
    },
    {
      "jp": "**甲種**風圧荷重：電線については**980 Pa**の風圧（10分間平均で風速40 m/sの風を想定、**高温季**に適用）",
      "vi": "Tải gió **loại 甲**: áp lực **980 Pa** lên dây, giả định gió trung bình 10 phút 40 m/s, áp dụng vào **mùa nóng**."
    },
    {
      "jp": "**乙種**風圧荷重：甲種風圧荷重の**0.5**倍＝**490 Pa**の風圧（厚さ**6 mm**の氷雪の付着を想定、氷雪の多い地方で**低温季**に適用）",
      "vi": "Tải gió **loại 乙**: bằng **0,5** lần loại 甲, tức **490 Pa**, giả định băng tuyết bám dày **6 mm**, áp dụng vào **mùa lạnh** ở vùng nhiều băng tuyết."
    },
    {
      "jp": "**丙種**風圧荷重：甲種風圧荷重の**0.5**倍＝**490 Pa**の風圧（氷雪の多くない地方において低温季に適用）",
      "vi": "Tải gió **loại 丙**: bằng **0,5** lần loại 甲, tức **490 Pa**, áp dụng vào mùa lạnh ở vùng ít băng tuyết."
    },
    {
      "jp": "支線の施設",
      "vi": "Lắp dây néo",
      "note": "",
      "heading": true
    },
    {
      "jp": "支線による強度の補強",
      "vi": "Gia cường cột bằng dây néo",
      "note": "",
      "heading": true
    },
    {
      "jp": "鉄塔以外の支持物は、支線により支持物の強度の一部を分担させることができます。",
      "vi": "Cột không phải tháp thép có thể được gia cường bằng dây néo chia sẻ một phần tải.",
      "note": ""
    },
    {
      "jp": "この場合、支持物自体の強度は、風圧荷重の1/2以上の荷重に耐えうる強度を有していなければならないことを定めており、支線で分担できる荷重の限度が規制されています。",
      "vi": "Khi đó, bản thân vật đỡ vẫn phải chịu được ít nhất một nửa tải gió. Đây là giới hạn cho phần tải mà dây néo có thể chia sẻ."
    },
    {
      "jp": "木柱、A種鉄柱、A種鉄筋コンクリート柱は、風圧荷重に耐えるだけで、支持物の強度には架渉線の不平均張力が見込まれていないので、高圧架空電線路において次のような不平均張力のかかる部分は、その**不平均張力に耐える**ための支線を施設します。",
      "vi": "Cột gỗ, cột thép loại A và cột bê tông cốt thép loại A được tính để chịu tải gió, chưa tính lực căng mất cân bằng của các dây giăng. Do đó phải lắp dây néo để **chịu lực căng mất cân bằng** ở các vị trí sau trên đường dây cao áp trên không.",
      "note": ""
    },
    {
      "diagram": "lawOverheadGuyWire458"
    },
    {
      "jp": "①電線路の直線部分（水平5°以下を含む）で径間差の大きい箇所。図2-3-1の(a)。",
      "vi": "① Đường thẳng (góc ngang ≤5°) có chênh lệch khoảng cột lớn.",
      "note": ""
    },
    {
      "jp": "径間差により生ずる不平均張力による水平力に耐える支線を、電線路の方向にその両側に設ける。",
      "vi": "Lắp dây néo hai bên dọc hướng đường dây để chịu lực ngang do chênh khoảng cột.",
      "note": ""
    },
    {
      "jp": "②電線路の水平角度**5°を超える**箇所。図2-3-1の(b)。",
      "vi": "② Vị trí đổi hướng có góc ngang **trên 5°**, hình 2-3-1(b)."
    },
    {
      "jp": "想定最大張力の水平横分力に耐える支線を設ける。",
      "vi": "Néo để chịu thành phần lực ngang của lực căng cực đại.",
      "note": ""
    },
    {
      "jp": "③電線路中、全架渉線を**引き留める箇所**。図2-3-1の(c)。",
      "vi": "③ **Vị trí neo giữ** tất cả dây giăng của tuyến, hình 2-3-1(c)."
    },
    {
      "jp": "想定最大張力に等しい不平均張力による水平力に耐える支線を、電線路に平行な方向に設ける。",
      "vi": "Đặt dây néo song song với đường dây để chịu lực ngang do lực căng mất cân bằng bằng lực căng lớn nhất giả định.",
      "note": ""
    }
  ],
  "459": [
    {
      "jp": "支線の施設方法及び支柱による代用",
      "vi": "Phương pháp lắp dây néo và thay bằng thanh chống.",
      "note": "",
      "heading": true
    },
    {
      "jp": "架空電線路の支持物において施設する支線は、次によることと定められています。",
      "vi": "Dây néo của cột đường dây trên không phải đáp ứng các điều kiện:",
      "note": ""
    },
    {
      "jp": "①支線の引張強さは、10.7 kN（図2-3-1の支線にあっては6.46 kN）以上であること。",
      "vi": "① Sức chịu kéo tối thiểu 10,7 kN (một số dây theo hình 2-3-1 là 6,46 kN).",
      "note": ""
    },
    {
      "jp": "②支線の安全率は、**2.5**（図2-3-1の支線にあっては、1.5以上）であること。",
      "vi": "② Hệ số an toàn của dây néo ít nhất **2,5**. Dây néo ở hình 2-3-1 dùng mức tối thiểu 1,5."
    },
    {
      "jp": "③支線に**より線**を使用する場合は次によること。",
      "vi": "③ Nếu dùng **dây bện** để làm dây néo:",
      "note": ""
    },
    {
      "jp": "素線を**３条以上**より合わせたものであること。",
      "vi": "Phải bện từ **ít nhất 3 sợi** thành phần.",
      "note": ""
    },
    {
      "jp": "素線は、直径が**２mm以上**、かつ、引張強さが0.69 kN/mm²以上の金属線であること。",
      "vi": "Sợi thành phần đường kính **≥2 mm**, sức bền kéo ≥0,69 kN/mm².",
      "note": ""
    },
    {
      "jp": "・支線を木柱に施設する場合を除き、地中の部分及び地表上**30 cm**までの地際部分には耐食性のあるもの又は亜鉛めっきを施した**鉄棒**を使用し、これを容易に腐食し難い**根かせ**に堅ろうに取り付けること（図2-3-2の左）。",
      "vi": "• Trừ dây néo lắp vào cột gỗ, dùng **thanh sắt** chống ăn mòn hoặc mạ kẽm cho phần ngầm và phần sát đất đến **30 cm** trên mặt đất. Gắn chắc vào **khối neo** khó bị ăn mòn, như phía trái hình 2-3-2."
    },
    {
      "jp": "支線の根かせは、支線の引張荷重に十分耐えるように施設すること。",
      "vi": "Khối neo phải đủ sức chịu tải kéo.",
      "note": ""
    },
    {
      "jp": "④道路を横断して施設する支線の高さは、路面上**5 m以上**とすること。ただし、技術上やむを得ない場合で、かつ、交通に支障を及ぼすおそれがないときは、**4.5 m以上**、歩行の用にのみ供する部分においては**2.5 m以上**とすることができる（図2-3-2の右）。",
      "vi": "④ Dây néo vượt đường cao **ít nhất 5 m** so với mặt đường. Khi bất khả kháng về kỹ thuật và không có nguy cơ cản trở giao thông, được giảm còn **ít nhất 4,5 m**. Phần đường chỉ dành cho người đi bộ được giảm còn **ít nhất 2,5 m**, như phía phải hình 2-3-2."
    },
    {
      "jp": "⑤低圧又は高圧の架空電線路の支持物に施設する支線であって、電線と接触するおそれがあるものには、その上部に**がいし**を挿入すること。ただし、低圧架空電線路の支持物に施設する支線を水田その他の湿地以外の場所に施設する場合は、この限りでない。",
      "vi": "⑤ Dây néo của vật đỡ đường dây hạ áp hoặc cao áp trên không có nguy cơ chạm dây điện phải lắp **sứ cách điện** ở phần trên. Ngoại lệ áp dụng cho dây néo của đường dây hạ áp trên không đặt ngoài ruộng nước và các vùng đất ẩm khác."
    },
    {
      "jp": "⑥架空電線路の支持物に施設する支線は、これと同等以上の効力のある支柱で代えることができる。",
      "vi": "⑥ Có thể thay dây néo bằng thanh chống có hiệu quả tương đương.",
      "note": ""
    },
    {
      "diagram": "lawGuyAnchor459"
    },
    {
      "jp": "径間の制限",
      "vi": "Giới hạn khoảng cột",
      "note": "",
      "heading": true
    },
    {
      "jp": "高・低圧架空電線路の径間は、表2-3-4の値以下にします。",
      "vi": "Khoảng cách giữa các cột đường dây hạ/cao áp không vượt bảng 2-3-4.",
      "note": ""
    }
  ],
  "460": [
    {
      "jp": "表2-3-4 高・低圧架空電線路の径間",
      "vi": "Bảng 2-3-4 · Nhịp đường dây hạ áp và cao áp trên không",
      "heading": true,
      "table": {
        "jp": [
          "支持物の種類",
          "低圧・一般",
          "低圧・保安工事",
          "高圧・一般",
          "高圧・保安工事",
          "高圧・長径間工事"
        ],
        "vi": [
          "Loại vật đỡ",
          "Hạ áp thường",
          "Hạ áp bảo an",
          "Cao áp thường",
          "Cao áp bảo an",
          "Cao áp nhịp dài"
        ],
        "rows": [
          [
            "木柱、A種鉄柱、A種鉄筋コンクリート柱",
            "Cột gỗ, cột thép loại A, cột bê tông cốt thép loại A",
            "制限なし",
            "**100 m**",
            "**150 m**",
            "**100 m**",
            "300 m"
          ],
          [
            "B種鉄柱、B種鉄筋コンクリート柱",
            "Cột thép loại B, cột bê tông cốt thép loại B",
            "制限なし",
            "**150 m**",
            "**250 m**",
            "**150 m**",
            "500 m"
          ],
          [
            "鉄塔",
            "Tháp thép",
            "制限なし",
            "400 m",
            "600 m",
            "400 m",
            "制限なし"
          ]
        ],
        "rowsVi": [
          [
            "木柱、A種鉄柱、A種鉄筋コンクリート柱",
            "Cột gỗ, cột thép loại A, cột bê tông cốt thép loại A",
            "Không giới hạn",
            "**100 m**",
            "**150 m**",
            "**100 m**",
            "300 m"
          ],
          [
            "B種鉄柱、B種鉄筋コンクリート柱",
            "Cột thép loại B, cột bê tông cốt thép loại B",
            "Không giới hạn",
            "**150 m**",
            "**250 m**",
            "**150 m**",
            "500 m"
          ],
          [
            "鉄塔",
            "Tháp thép",
            "Không giới hạn",
            "400 m",
            "600 m",
            "400 m",
            "Không giới hạn"
          ]
        ]
      }
    },
    {
      "jp": "POINT　架空電線路の径間\n保安工事：安全に対する規制を一般の場合より強化する工事\n高圧架空電線路の径間は、**150 m**、保安工事**100 m**以下（A種支持物）\n**250 m**、保安工事**150 m**以下（B種支持物）",
      "vi": "Ghi nhớ. Thi công bảo an áp dụng yêu cầu an toàn nghiêm hơn trường hợp thường. Nhịp đường dây cao áp trên không với vật đỡ loại A là **150 m**, hoặc **100 m** nếu thi công bảo an. Với vật đỡ loại B là **250 m**, hoặc **150 m** nếu thi công bảo an."
    },
    {
      "jp": "架空電線路の弛度（たるみ）",
      "vi": "Độ võng dây trên không",
      "note": "",
      "heading": true
    },
    {
      "jp": "径間をS［m］、電線の水平張力（許容引張荷重）をT［N］、電線１m当たりの合成荷重をW［N/m］としたとき、電線の弛度D［m］は次式となります。",
      "vi": "Với khoảng cột S (m), lực căng ngang T (N), tải trên mỗi mét W (N/m), độ võng D (m) theo công thức:",
      "note": ""
    },
    {
      "jp": "弛度の式",
      "vi": "Công thức độ võng",
      "note": "Dùng S theo mét, tải tổng hợp trên mỗi mét W theo N/m và lực căng ngang T theo N. Với S và W cố định, độ võng giảm khi T tăng.",
      "equations": [
        [
          "D = ",
          {
            "fraction": [
              [
                "W S²"
              ],
              [
                "8 T"
              ]
            ]
          },
          " [m]"
        ]
      ]
    },
    {
      "diagram": "lawWireSag460"
    },
    {
      "jp": "このとき、電線の引張強さに対する安全率Rが規定された値以上となる弛度により施設します。",
      "vi": "Độ võng phải phù hợp với lực căng để hệ số an toàn R đạt mức quy định.",
      "note": ""
    },
    {
      "jp": "表2-3-5 架空電線の安全率",
      "vi": "Bảng 2-3-5 · Hệ số an toàn dây dẫn trên không",
      "heading": true,
      "table": {
        "jp": [
          "電線の種類",
          "安全率 R"
        ],
        "vi": [
          "Loại dây",
          "Hệ số an toàn R"
        ],
        "rows": [
          [
            "**硬銅線**又は耐熱銅合金線",
            "**Dây đồng cứng** hoặc dây hợp kim đồng chịu nhiệt",
            "**2.2**"
          ],
          [
            "その他",
            "Loại khác",
            "2.5"
          ]
        ],
        "rowsVi": [
          [
            "**硬銅線**又は耐熱銅合金線",
            "**Dây đồng cứng** hoặc dây hợp kim đồng chịu nhiệt",
            "**2,2**"
          ],
          [
            "その他",
            "Loại khác",
            "2,5"
          ]
        ]
      }
    }
  ],
  "461": [
    {
      "jp": "練習問題01　架空電線路の弛度",
      "vi": "Bài luyện 01 · Độ võng dây trên không.",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧架空電線において、電線に硬銅線を使用して架設する場合、電線の設計に伴う許容引張荷重と弛度について、問に答えよ。ただし、径間S［m］、電線の引張強さT´［N］、電線の重量による垂直荷重と風圧による水平荷重の合成荷重がW［N/m］とする。",
      "vi": "Khi dùng dây đồng cứng cho đường dây cao áp trên không, hãy trả lời các câu hỏi thiết kế về tải kéo cho phép và độ võng. Gọi S (m) là nhịp, T′ (N) là sức chịu kéo của dây, W (N/m) là hợp lực tải thẳng đứng do trọng lượng dây và tải ngang do gió.",
      "note": ""
    },
    {
      "jp": "(a) 電線の引張強さT´に対する安全率が、R以上となるような弛度に施設しなければならない。この場合Rの値は。",
      "vi": "(a) Phải chọn độ võng để hệ số an toàn đối với sức chịu kéo T′ của dây đạt ít nhất R. Tìm R trong trường hợp này.",
      "note": ""
    },
    {
      "jp": "(b) 弛度の計算において、最小の弛度を求める場合の許容引張荷重T［N］は。",
      "vi": "(b) Tìm tải kéo cho phép T (N) để tính độ võng nhỏ nhất.",
      "note": ""
    },
    {
      "jp": "解き方：(a) 硬銅線を使用するので、安全率R＝2.2以上となる弛度で施設します。",
      "vi": "(a) Dùng đồng cứng nên R≥2,2.",
      "note": ""
    },
    {
      "jp": "解き方 (b) 許容引張荷重 T は、",
      "vi": "Cách giải (b). Tính tải kéo cho phép T.",
      "equations": [
        [
          "T = ",
          {
            "fraction": [
              [
                "T′"
              ],
              [
                "R"
              ]
            ]
          },
          " [N]"
        ],
        [
          "許容引張荷重 = ",
          {
            "fraction": [
              [
                "電線の引張強さ"
              ],
              [
                "安全率"
              ]
            ]
          },
          " [N]"
        ]
      ],
      "equationsVi": [
        [
          "T = ",
          {
            "fraction": [
              [
                "T′"
              ],
              [
                "R"
              ]
            ]
          },
          " [N]"
        ],
        [
          "Tải kéo cho phép = ",
          {
            "fraction": [
              [
                "Sức chịu kéo của dây"
              ],
              [
                "Hệ số an toàn"
              ]
            ]
          },
          " [N]"
        ]
      ]
    },
    {
      "jp": "解説 (a) 電線に硬銅線を使用して架設する場合、表2-3-5より安全率を2.2以上（実際の荷重は、電線が耐えうる荷重の1/2.2以下とする）とします。",
      "vi": "Lời giải (a). Dùng dây đồng cứng thì theo bảng 2-3-5, hệ số an toàn ít nhất 2,2. Tải thực tế không được vượt quá mức dưới đây.",
      "equations": [
        [
          "実際の荷重 ≤ ",
          {
            "fraction": [
              [
                "電線が耐えうる荷重"
              ],
              [
                "2.2"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          "Tải thực tế ≤ ",
          {
            "fraction": [
              [
                "Tải dây chịu được"
              ],
              [
                "2,2"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "解説 (b) 許容引張荷重は、安全を考慮して、電線が耐えうる荷重よりも小さな値（1/安全率）になるようにします。",
      "vi": "Lời giải (b). Để có dự phòng an toàn, lấy sức chịu kéo của dây nhân với nghịch đảo hệ số an toàn.",
      "note": "Ở cùng tải W và nhịp S, độ võng nhỏ nhất tương ứng với lực căng lớn nhất được phép theo hệ số an toàn."
    },
    {
      "jp": "解答　(a) **R = 2.2**　(b) 許容引張荷重 T",
      "vi": "Đáp án. (a) **R = 2,2**. (b) Tải kéo cho phép T theo công thức dưới đây.",
      "equations": [
        [
          "T = ",
          {
            "fraction": [
              [
                "T′"
              ],
              [
                "R"
              ]
            ],
            "red": true
          },
          " [N]"
        ]
      ]
    }
  ],
  "462": [
    {
      "jp": "2-4 架空電線路、架空引込線 といえば交通に支障なく安全性を確保",
      "vi": "2-4 Đường dây và dây dẫn vào trên không · Bảo đảm an toàn giao thông và điện.",
      "note": "",
      "heading": true
    },
    {
      "jp": "架空電線路の施設",
      "vi": "Lắp đặt đường dây trên không.",
      "note": "",
      "heading": true
    },
    {
      "jp": "架空電線路は電圧の区分に応じて、低圧架空電線路、高圧架空電線路、特別高圧架空電線路があります。ここでは、主に低圧と高圧の架空電線路の規定を述べます。",
      "vi": "Đường dây trên không chia thành hạ áp, cao áp và siêu cao áp. Phần này chủ yếu trình bày quy định cho đường dây hạ áp và cao áp.",
      "note": ""
    },
    {
      "jp": "低高圧架空電線路に使用する電線",
      "vi": "Loại dây dùng cho đường dây hạ/cao áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空電線路又は高圧架空電線路に使用する電線は、使用電圧の区分に応じ電線の種類が表2-4-1のように決められ、ケーブルを除く電線の太さ又は引張強さが表2-4-2に規定する値以上であることが決められています。",
      "vi": "Loại dây dùng cho đường dây hạ áp hoặc cao áp trên không được chọn theo điện áp sử dụng ở bảng 2-4-1. Với dây không phải cáp, kích thước hoặc sức chịu kéo phải đạt ít nhất trị số ở bảng 2-4-2.",
      "note": ""
    },
    {
      "jp": "表2-4-1 電線の種類",
      "vi": "Bảng 2-4-1 · Loại dây dẫn",
      "heading": true,
      "table": {
        "jp": [
          "使用電圧の区分",
          "電線の種類"
        ],
        "vi": [
          "Điện áp sử dụng",
          "Loại dây dẫn"
        ],
        "rows": [
          [
            "低圧 300 V以下",
            "Hạ áp đến 300 V",
            "**絶縁電線**、多心型電線又は**ケーブル**"
          ],
          [
            "低圧 300 V超過",
            "Hạ áp trên 300 V",
            "引込用ビニル絶縁電線以外の**絶縁電線**又は**ケーブル**"
          ],
          [
            "高圧",
            "Cao áp",
            "**高圧絶縁電線**、特別高圧絶縁電線又は**ケーブル**"
          ]
        ],
        "rowsVi": [
          [
            "低圧 300 V以下",
            "Hạ áp đến 300 V",
            "**Dây cách điện**, dây nhiều lõi hoặc **cáp**"
          ],
          [
            "低圧 300 V超過",
            "Hạ áp trên 300 V",
            "**Dây cách điện** (trừ dây cách điện vinyl dùng làm dây dẫn vào) hoặc **cáp**"
          ],
          [
            "高圧",
            "Cao áp",
            "**Dây cách điện cao áp**, dây cách điện siêu cao áp hoặc **cáp**"
          ]
        ]
      }
    },
    {
      "jp": "表2-4-2 電線の太さ又は引張強さ",
      "vi": "Bảng 2-4-2 · Kích thước hoặc sức chịu kéo của dây",
      "heading": true,
      "table": {
        "jp": [
          "使用電圧の区分",
          "施設場所",
          "電線の種類",
          "電線の太さ又は引張強さ"
        ],
        "vi": [
          "Điện áp sử dụng",
          "Nơi lắp",
          "Loại dây",
          "Kích thước hoặc sức chịu kéo"
        ],
        "rows": [
          [
            "300 V以下",
            "Đến 300 V",
            "すべて",
            "絶縁電線（硬銅線）",
            "直径**2.6 mm**"
          ],
          [
            "300 V以下",
            "Đến 300 V",
            "すべて",
            "絶縁電線（その他）",
            "引張強さ**2.3 kN**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "市街地",
            "硬銅線",
            "直径**5 mm**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "市街地",
            "その他",
            "引張強さ**8.01 kN**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "市街地外",
            "硬銅線",
            "直径**4 mm**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "市街地外",
            "その他",
            "引張強さ**5.26 kN**"
          ]
        ],
        "rowsVi": [
          [
            "300 V以下",
            "Đến 300 V",
            "Mọi nơi",
            "Dây cách điện (đồng cứng)",
            "Đường kính **2,6 mm**"
          ],
          [
            "300 V以下",
            "Đến 300 V",
            "Mọi nơi",
            "Dây cách điện khác",
            "Sức chịu kéo **2,3 kN**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "Đô thị",
            "Dây đồng cứng",
            "Đường kính **5 mm**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "Đô thị",
            "Loại khác",
            "Sức chịu kéo **8,01 kN**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "Ngoài đô thị",
            "Dây đồng cứng",
            "Đường kính **4 mm**"
          ],
          [
            "300 V超過",
            "Trên 300 V",
            "Ngoài đô thị",
            "Loại khác",
            "Sức chịu kéo **5,26 kN**"
          ]
        ]
      }
    },
    {
      "jp": "低高圧架空電線路の架空ケーブルによる施設",
      "vi": "Lắp đặt cáp treo của đường dây hạ/cao áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空電線又は高圧架空電線にケーブルを使用する場合は、次の方法により施設します。",
      "vi": "Nếu dùng cáp cho đường dây hạ áp hoặc cao áp trên không, lắp theo các phương án sau."
    },
    {
      "jp": "①ケーブルをハンガーによりちょう架用線に支持する方法（**ハンガー**の間隔は**50 cm**以下）であること",
      "vi": "① Dùng móc treo đỡ cáp trên dây treo. Khoảng cách giữa các **móc treo** không quá **50 cm**."
    },
    {
      "jp": "②ケーブルをちょう架用線に接触させ、その上に容易に腐食し難い**金属テープ**等を**20 cm**以下の間隔でらせん状に巻き付ける方法",
      "vi": "② Đặt cáp tiếp xúc với dây treo rồi quấn xoắn ốc bằng **băng kim loại** khó ăn mòn hoặc vật liệu tương tự, với bước quấn không quá **20 cm**."
    }
  ],
  "463": [
    {
      "jp": "③ちょう架用線をケーブルの外装に堅ろうに取り付けて施設する方法",
      "vi": "③ Gắn chặt dây treo vào vỏ ngoài cáp rồi lắp đặt.",
      "note": ""
    },
    {
      "jp": "④ちょう架用線とケーブルをより合わせて施設する方法",
      "vi": "④ Xoắn dây treo và cáp với nhau khi lắp.",
      "note": ""
    },
    {
      "jp": "⑤ちょう架用線の規定等",
      "vi": "⑤ Các yêu cầu về dây treo.",
      "note": ""
    },
    {
      "jp": "・ちょう架用線は、引張強さ5.93 kN以上のもの又は断面積**22 mm²**以上の亜鉛めっき鉄より線（メッセンジャーワイヤ）であること。",
      "vi": "• Dây treo phải có sức chịu kéo ít nhất 5,93 kN hoặc là dây sắt bện mạ kẽm có tiết diện ít nhất **22 mm²**."
    },
    {
      "jp": "・ちょう架用線及びケーブルの被覆に使用する金属体には、**D種接地工事**を施すこと。",
      "vi": "• **Nối đất loại D** cho dây treo và phần kim loại dùng trong lớp bọc cáp."
    },
    {
      "jp": "・高圧架空電線のちょう架用線の安全率は**2.5**以上",
      "vi": "• Hệ số an toàn của dây treo đường dây cao áp trên không ít nhất **2,5**."
    },
    {
      "jp": "低高圧架空電線の高さ",
      "vi": "Độ cao dây điện trên không hạ/cao áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空電線又は高圧架空電線の高さは、表2-4-3に規定する値以上であることが必要です。",
      "vi": "Chiều cao đường dây hạ áp hoặc cao áp trên không phải đạt ít nhất trị số ở bảng 2-4-3."
    },
    {
      "jp": "表2-4-3 架空電線の高さ",
      "vi": "Bảng 2-4-3 · Chiều cao dây dẫn trên không",
      "heading": true,
      "table": {
        "jp": [
          "区分",
          "高さ"
        ],
        "vi": [
          "Trường hợp",
          "Chiều cao tối thiểu"
        ],
        "rows": [
          [
            "**道路を横断する場合**（車両の往来がまれであるもの及び歩行の用にのみ供される部分を除く）",
            "**Vượt đường** (trừ nơi hiếm xe qua lại và phần đường chỉ dành cho người đi bộ)",
            "路面上**6 m**"
          ],
          [
            "鉄道又は軌道を横断する場合",
            "Vượt đường sắt hoặc đường ray",
            "レール面上**5.5 m**"
          ],
          [
            "低圧架空電線を横断歩道橋の上に施設する場合",
            "Dây hạ áp đi phía trên cầu vượt bộ hành",
            "横断歩道橋の路面上**3 m**"
          ],
          [
            "高圧架空電線を横断歩道橋の上に施設する場合",
            "Dây cao áp đi phía trên cầu vượt bộ hành",
            "横断歩道橋の路面上**3.5 m**"
          ],
          [
            "上記以外：屋外照明用であって、**対地電圧150 V以下**のものを交通に支障のないように施設する場合",
            "Ngoài các trường hợp trên: chiếu sáng ngoài trời, **điện áp so với đất không quá 150 V**, lắp sao cho không cản giao thông",
            "地表上**4 m**"
          ],
          [
            "上記以外：**低圧架空電線**を**道路以外**の場所に施設する場合",
            "Ngoài các trường hợp trên: **dây hạ áp** lắp **ngoài đường giao thông**",
            "地表上**4 m**"
          ],
          [
            "その他の場合",
            "Trường hợp còn lại",
            "地表上**5 m**"
          ]
        ],
        "rowsVi": [
          [
            "**道路を横断する場合**（車両の往来がまれであるもの及び歩行の用にのみ供される部分を除く）",
            "**Vượt đường** (trừ nơi hiếm xe qua lại và phần đường chỉ dành cho người đi bộ)",
            "**6 m** trên mặt đường"
          ],
          [
            "鉄道又は軌道を横断する場合",
            "Vượt đường sắt hoặc đường ray",
            "**5,5 m** trên mặt ray"
          ],
          [
            "低圧架空電線を横断歩道橋の上に施設する場合",
            "Dây hạ áp đi phía trên cầu vượt bộ hành",
            "**3 m** trên mặt cầu"
          ],
          [
            "高圧架空電線を横断歩道橋の上に施設する場合",
            "Dây cao áp đi phía trên cầu vượt bộ hành",
            "**3,5 m** trên mặt cầu"
          ],
          [
            "上記以外：屋外照明用であって、**対地電圧150 V以下**のものを交通に支障のないように施設する場合",
            "Ngoài các trường hợp trên: chiếu sáng ngoài trời, **điện áp so với đất không quá 150 V**, lắp sao cho không cản giao thông",
            "**4 m** trên mặt đất"
          ],
          [
            "上記以外：**低圧架空電線**を**道路以外**の場所に施設する場合",
            "Ngoài các trường hợp trên: **dây hạ áp** lắp **ngoài đường giao thông**",
            "**4 m** trên mặt đất"
          ],
          [
            "その他の場合",
            "Trường hợp còn lại",
            "**5 m** trên mặt đất"
          ]
        ]
      }
    },
    {
      "jp": "POINT　架空電線路の**絶縁電線**の太さ といえば **2.6 mm**以上（300 V以下）、**5 mm**以上（300 V超過、市街地）、**4 mm**以上（300 V超過、市街地外）\nケーブルのちょう架 といえば ハンガーの間隔は**50 cm**以下、金属テープは**20 cm**以下で巻き付ける\nちょう架用線 といえば **22 mm²**以上の亜鉛めっき鉄より線、**D種**接地、安全率**2.5**以上\n架空電線の高さ といえば 道路横断は**6 m**、他は**5 m**、低圧電線で道路以外は**4 m**以上",
      "vi": "Ghi nhớ. Với **dây cách điện** bằng đồng cứng, đường kính ít nhất **2,6 mm** đến 300 V, **5 mm** trên 300 V trong đô thị và **4 mm** trên 300 V ngoài đô thị.\nMóc treo cách nhau không quá **50 cm**, bước quấn băng kim loại không quá **20 cm**.\nDây treo bằng dây sắt bện mạ kẽm từ **22 mm²**, nối đất **loại D**, hệ số an toàn tối thiểu **2,5** cho dây treo cao áp.\nChiều cao khi vượt đường là **6 m**, các trường hợp còn lại thông thường **5 m**, dây hạ áp ngoài đường giao thông **4 m** trở lên."
    }
  ],
  "464": [
    {
      "jp": "低高圧架空電線と建造物との接近",
      "vi": "Khoảng cách dây trên không hạ/cao áp đến công trình.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空電線又は高圧架空電線が、建造物と**接近状態**に施設される場合において、電線と建造物の造営材との離隔距離は、表2-4-4に規定する値以上であることが必要です。**建造物の下方**に接近して施設される場合は、表2-4-5に規定する値以上とし、危険のおそれがないように施設します。また、アンテナと接近状態に施設される場合は、表2-4-6に規定する値以上とします。",
      "vi": "Khi dây hạ áp hoặc cao áp trên không ở **trạng thái tiếp cận** công trình, giữ khoảng cách tối thiểu tới kết cấu công trình theo bảng 2-4-4. Khi đi gần **phía dưới công trình**, dùng bảng 2-4-5 và bố trí sao cho không gây nguy hiểm. Khi ở trạng thái tiếp cận ăng-ten, dùng bảng 2-4-6."
    },
    {
      "jp": "表2-4-4 建造物と接近状態に施設される場合",
      "vi": "Bảng 2-4-4 · Dây dẫn ở trạng thái tiếp cận công trình",
      "heading": true,
      "table": {
        "jp": [
          "架空電線の種類",
          "区分",
          "離隔距離"
        ],
        "vi": [
          "Loại dây trên không",
          "Vị trí",
          "Khoảng cách"
        ],
        "rows": [
          [
            "ケーブル",
            "Cáp",
            "上部造営材の上方",
            "**1 m**"
          ],
          [
            "ケーブル",
            "Cáp",
            "その他",
            "**0.4 m**"
          ],
          [
            "高圧絶縁電線又は特別高圧絶縁電線を使用する低圧架空電線",
            "Dây hạ áp trên không dùng dây cách điện cao áp hoặc siêu cao áp",
            "上部造営材の上方",
            "1 m"
          ],
          [
            "高圧絶縁電線又は特別高圧絶縁電線を使用する低圧架空電線",
            "Dây hạ áp trên không dùng dây cách điện cao áp hoặc siêu cao áp",
            "その他",
            "0.4 m"
          ],
          [
            "その他",
            "Dây loại khác",
            "上部造営材の上方",
            "**2 m**"
          ],
          [
            "その他",
            "Dây loại khác",
            "人が建造物の外へ手を伸ばす又は身を乗り出すことなどができない部分",
            "**0.8 m**"
          ],
          [
            "その他",
            "Dây loại khác",
            "その他",
            "**1.2 m** 注"
          ]
        ],
        "rowsVi": [
          [
            "ケーブル",
            "Cáp",
            "Phía trên kết cấu trên cùng",
            "**1 m**"
          ],
          [
            "ケーブル",
            "Cáp",
            "Vị trí khác",
            "**0,4 m**"
          ],
          [
            "高圧絶縁電線又は特別高圧絶縁電線を使用する低圧架空電線",
            "Dây hạ áp trên không dùng dây cách điện cao áp hoặc siêu cao áp",
            "Phía trên kết cấu trên cùng",
            "1 m"
          ],
          [
            "高圧絶縁電線又は特別高圧絶縁電線を使用する低圧架空電線",
            "Dây hạ áp trên không dùng dây cách điện cao áp hoặc siêu cao áp",
            "Vị trí khác",
            "0,4 m"
          ],
          [
            "その他",
            "Dây loại khác",
            "Phía trên kết cấu trên cùng",
            "**2 m**"
          ],
          [
            "その他",
            "Dây loại khác",
            "Vị trí người không thể vươn tay hoặc nghiêng người ra ngoài công trình",
            "**0,8 m**"
          ],
          [
            "その他",
            "Dây loại khác",
            "Vị trí khác",
            "**1,2 m** (chú thích)"
          ]
        ]
      }
    },
    {
      "jp": "注）手を伸ばす又は身を乗り出す可能性がある部分は1.2 m",
      "vi": "Chú thích. Nếu người có thể vươn tay hoặc nghiêng người ra ngoài, khoảng cách là 1,2 m."
    },
    {
      "jp": "表2-4-5 建造物の下方に接近して施設される場合",
      "vi": "Bảng 2-4-5 · Dây dẫn đi gần phía dưới công trình",
      "heading": true,
      "table": {
        "jp": [
          "使用電圧区分",
          "電線の種類",
          "離隔距離"
        ],
        "vi": [
          "Điện áp sử dụng",
          "Loại dây",
          "Khoảng cách"
        ],
        "rows": [
          [
            "低圧",
            "Hạ áp",
            "高圧絶縁電線注、特別高圧絶縁電線又はケーブル",
            "0.3 m"
          ],
          [
            "低圧",
            "Hạ áp",
            "その他",
            "0.6 m"
          ],
          [
            "高圧",
            "Cao áp",
            "**ケーブル**",
            "**0.4 m**"
          ],
          [
            "高圧",
            "Cao áp",
            "**その他**",
            "**0.8 m**"
          ]
        ],
        "rowsVi": [
          [
            "低圧",
            "Hạ áp",
            "Dây cách điện cao áp (xem chú thích), dây cách điện siêu cao áp hoặc cáp",
            "0,3 m"
          ],
          [
            "低圧",
            "Hạ áp",
            "Loại khác",
            "0,6 m"
          ],
          [
            "高圧",
            "Cao áp",
            "**Cáp**",
            "**0,4 m**"
          ],
          [
            "高圧",
            "Cao áp",
            "**Loại khác**",
            "**0,8 m**"
          ]
        ]
      }
    },
    {
      "jp": "注）低圧の配線に高圧絶縁電線を使用する場合",
      "vi": "Chú thích. Trường hợp dùng dây cách điện cao áp cho đường dây hạ áp."
    },
    {
      "jp": "表2-4-6 アンテナと接近状態に施設される場合",
      "vi": "Bảng 2-4-6 · Dây dẫn ở trạng thái tiếp cận ăng-ten",
      "heading": true,
      "table": {
        "jp": [
          "架空電線の種類",
          "電線の種類",
          "離隔距離"
        ],
        "vi": [
          "Loại dây trên không",
          "Loại dây",
          "Khoảng cách"
        ],
        "rows": [
          [
            "低圧架空電線",
            "Hạ áp trên không",
            "高圧絶縁電線注、特別高圧絶縁電線又はケーブル",
            "0.3 m"
          ],
          [
            "低圧架空電線",
            "Hạ áp trên không",
            "その他",
            "0.6 m"
          ],
          [
            "高圧架空電線",
            "Cao áp trên không",
            "**ケーブル**",
            "**0.4 m**"
          ],
          [
            "高圧架空電線",
            "Cao áp trên không",
            "**その他**",
            "**0.8 m**"
          ]
        ],
        "rowsVi": [
          [
            "低圧架空電線",
            "Hạ áp trên không",
            "Dây cách điện cao áp (xem chú thích), dây cách điện siêu cao áp hoặc cáp",
            "0,3 m"
          ],
          [
            "低圧架空電線",
            "Hạ áp trên không",
            "Loại khác",
            "0,6 m"
          ],
          [
            "高圧架空電線",
            "Cao áp trên không",
            "**Cáp**",
            "**0,4 m**"
          ],
          [
            "高圧架空電線",
            "Cao áp trên không",
            "**Loại khác**",
            "**0,8 m**"
          ]
        ]
      }
    },
    {
      "jp": "注）低圧の配線に高圧絶縁電線を使用する場合",
      "vi": "Chú thích. Trường hợp dùng dây cách điện cao áp cho đường dây hạ áp."
    }
  ],
  "465": [
    {
      "jp": "低高圧架空電線と植物との接近",
      "vi": "Dây hạ/cao áp gần cây xanh",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空電線又は高圧架空電線は、平時吹いている風等により、植物に**接触しない**ように施設することが必要です。",
      "vi": "Bố trí dây hạ áp hoặc cao áp trên không sao cho **không chạm** cây cối khi có gió bình thường hoặc tác động tương tự."
    },
    {
      "jp": "POINT　低高圧架空電線路と建造物等との離隔距離 といえば\n・造営材の上方、ケーブル**1 m**以上、絶縁電線**2 m**以上\n・その他（上方以外）、ケーブル**0.4 m**以上、絶縁電線**0.8 m**以上（手を伸ばす、身を乗り出すことができない部分）又は**1.2 m**以上（窓やベランダなど、手を伸ばしたり身を乗り出すことができる部分）\n・造営材の下方、ケーブル**0.4 m**以上、絶縁電線**0.8 m**以上\n・アンテナとの離隔距離は、ケーブル**0.4 m**以上、絶縁電線**0.8 m**以上",
      "vi": "Ghi nhớ khoảng cách với công trình.\n• Phía trên kết cấu: cáp ít nhất **1 m**, dây cách điện ít nhất **2 m**.\n• Vị trí khác: cáp ít nhất **0,4 m**, dây cách điện ít nhất **0,8 m** ở chỗ không thể vươn tay hoặc nghiêng người ra ngoài, hoặc **1,2 m** ở cửa sổ, ban công và vị trí có thể làm vậy.\n• Phía dưới kết cấu: cáp ít nhất **0,4 m**, dây cách điện ít nhất **0,8 m**.\n• Với ăng-ten: cáp ít nhất **0,4 m**, dây cách điện ít nhất **0,8 m**.",
      "note": "Ô POINT tóm tắt các trường hợp thường gặp. Tra ba bảng ở trang 464 để phân biệt riêng các loại dây hạ áp và cao áp."
    },
    {
      "jp": "低高圧架空電線と植物との離隔距離 といえば 平時吹いている風等により**接触しない**",
      "vi": "Khoảng cách với cây cối phải đủ để dây hạ áp và cao áp trên không **không chạm** cây khi có gió bình thường hoặc tác động tương tự."
    },
    {
      "jp": "山間部等、植物と接触を避けられない場合は、次によります。",
      "vi": "Nếu ở miền núi hoặc nơi không thể tránh cây chạm dây:",
      "note": ""
    },
    {
      "jp": "・規定の性能を有する**防護具に収めて施設する**。",
      "vi": "• **Đặt dây trong thiết bị bảo vệ** có tính năng theo quy định."
    },
    {
      "jp": "・JISで定めた摩耗検知層、摩耗層などを有した**トリワイヤ**（tree wire）を使用する。",
      "vi": "• Dùng **dây chống cọ xát với cây** (tree wire) có lớp phát hiện mài mòn, lớp chịu mài mòn và các lớp liên quan theo JIS."
    },
    {
      "jp": "・**ケーブル用防護具**（高圧架空ケーブル工事による場合）を使用する。",
      "vi": "• Dùng **thiết bị bảo vệ cáp** nếu thi công bằng cáp cao áp trên không."
    },
    {
      "jp": "架空引込線の施設",
      "vi": "Lắp đường dây dẫn vào trên không",
      "note": "",
      "heading": true
    },
    {
      "jp": "架空引込線は、高圧架空引込線及び低圧架空引込線について、電線の高さや建造物との離隔距離等が規定されています。",
      "vi": "Dây dẫn vào trên không, cả loại cao áp và hạ áp, có quy định về chiều cao dây, khoảng cách với công trình và các điều kiện liên quan."
    },
    {
      "jp": "高圧架空引込線の施設",
      "vi": "Lắp dây dẫn vào cao áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧架空引込線は、高圧絶縁電線による場合と高圧ケーブルによる場合があり、高圧架空引込線の**電線の高さ**は、表2-4-7に規定する値以上であることが必要です。",
      "vi": "Dây dẫn vào cao áp trên không có thể là dây cách điện cao áp hoặc cáp cao áp. **Chiều cao dây** phải đạt ít nhất trị số ở bảng 2-4-7."
    },
    {
      "jp": "表2-4-7 高圧架空引込線の電線の高さ",
      "vi": "Bảng 2-4-7 · Chiều cao dây dẫn vào cao áp trên không",
      "heading": true,
      "table": {
        "jp": [
          "区分",
          "高さ"
        ],
        "vi": [
          "Trường hợp",
          "Chiều cao tối thiểu"
        ],
        "rows": [
          [
            "**道路を横断する場合**",
            "**Vượt đường**",
            "路面上**6 m**"
          ],
          [
            "鉄道又は軌道を横断する場合",
            "Vượt đường sắt hoặc đường ray",
            "レール面上**5.5 m**"
          ],
          [
            "高圧架空電線を横断歩道橋の上に施設する場合",
            "Dây cao áp đi phía trên cầu vượt bộ hành",
            "横断歩道橋の路面上**3.5 m**"
          ]
        ],
        "rowsVi": [
          [
            "**道路を横断する場合**",
            "**Vượt đường**",
            "**6 m** trên mặt đường"
          ],
          [
            "鉄道又は軌道を横断する場合",
            "Vượt đường sắt hoặc đường ray",
            "**5,5 m** trên mặt ray"
          ],
          [
            "高圧架空電線を横断歩道橋の上に施設する場合",
            "Dây cao áp đi phía trên cầu vượt bộ hành",
            "**3,5 m** trên mặt cầu"
          ]
        ]
      }
    },
    {
      "jp": "高圧架空引込線の**電線の高さ**は、表2-4-7以外においては、地表上**3.5 m**以上とすることができます。電線がケーブル以外のものであるときは、その電線の下方に**危険である旨**の表示をすることが必要です。",
      "vi": "Ngoài các trường hợp ở bảng 2-4-7, **chiều cao dây** được phép từ **3,5 m** trên mặt đất. Nếu dây không phải cáp, phải đặt biển **cảnh báo nguy hiểm** phía dưới dây."
    }
  ],
  "466": [
    {
      "diagram": "lawHighVoltageService466"
    },
    {
      "jp": "高圧架空引込線が建造物と接近する場合、電線との離隔距離は、表2-4-8に規定する値以上であることが必要です。",
      "vi": "Dây dẫn vào cao áp khi gần công trình phải giữ khoảng cách theo bảng 2-4-8.",
      "note": ""
    },
    {
      "jp": "表2-4-8 建造物と接近する場合の電線との離隔距離",
      "vi": "Bảng 2-4-8 · Khoảng cách khi dây dẫn vào cao áp ở gần công trình",
      "heading": true,
      "table": {
        "jp": [
          "架空電線の種類",
          "区分",
          "離隔距離"
        ],
        "vi": [
          "Loại dây trên không",
          "Vị trí",
          "Khoảng cách tối thiểu"
        ],
        "rows": [
          [
            "高圧ケーブル",
            "Cáp cao áp",
            "上部造営材の上方",
            "**1 m**"
          ],
          [
            "高圧ケーブル",
            "Cáp cao áp",
            "その他",
            "**0.4 m**"
          ],
          [
            "高圧絶縁電線",
            "Dây cách điện cao áp",
            "上部造営材の上方",
            "**2 m**"
          ],
          [
            "高圧絶縁電線",
            "Dây cách điện cao áp",
            "人が建造物の外へ手を伸ばす又は身を乗り出すことなどができない部分",
            "**0.8 m**"
          ],
          [
            "高圧絶縁電線",
            "Dây cách điện cao áp",
            "その他",
            "**1.2 m**"
          ]
        ],
        "rowsVi": [
          [
            "高圧ケーブル",
            "Cáp cao áp",
            "Phía trên kết cấu trên cùng",
            "**1 m**"
          ],
          [
            "高圧ケーブル",
            "Cáp cao áp",
            "Vị trí khác",
            "**0,4 m**"
          ],
          [
            "高圧絶縁電線",
            "Dây cách điện cao áp",
            "Phía trên kết cấu trên cùng",
            "**2 m**"
          ],
          [
            "高圧絶縁電線",
            "Dây cách điện cao áp",
            "Vị trí người không thể vươn tay hoặc nghiêng người ra ngoài công trình",
            "**0,8 m**"
          ],
          [
            "高圧絶縁電線",
            "Dây cách điện cao áp",
            "Vị trí khác",
            "**1,2 m**"
          ]
        ]
      }
    },
    {
      "jp": "低圧架空引込線の施設",
      "vi": "Lắp dây dẫn vào hạ áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空引込線の**電線の高さ**は、表2-4-9に規定する値以上であることが必要です。",
      "vi": "**Chiều cao dây** dẫn vào hạ áp trên không phải đạt ít nhất trị số ở bảng 2-4-9."
    },
    {
      "jp": "表2-4-9 低圧架空引込線の電線の高さ",
      "vi": "Bảng 2-4-9 · Chiều cao dây dẫn vào hạ áp trên không",
      "heading": true,
      "table": {
        "jp": [
          "区分",
          "高さ"
        ],
        "vi": [
          "Trường hợp",
          "Chiều cao tối thiểu"
        ],
        "rows": [
          [
            "**道路**（歩行の用にのみ供される部分を除く）**を横断する場合**：技術上やむを得ない場合において交通に支障のないとき",
            "**Vượt đường** (trừ phần chỉ dành cho người đi bộ), khi bất khả kháng về kỹ thuật và không cản trở giao thông",
            "路面上**3 m**"
          ],
          [
            "道路を横断する場合：その他の場合",
            "Vượt đường trong các trường hợp còn lại",
            "路面上**5 m**"
          ],
          [
            "鉄道又は軌道を横断する場合",
            "Vượt đường sắt hoặc đường ray",
            "レール面上**5.5 m**"
          ],
          [
            "横断歩道橋の上に施設する場合",
            "Phía trên cầu vượt bộ hành",
            "横断歩道橋の路面上**3 m**"
          ],
          [
            "上記以外の場合：技術上やむを得ない場合において**交通に支障のないとき**",
            "Ngoài các trường hợp trên, khi bất khả kháng về kỹ thuật và **không cản trở giao thông**",
            "地表上**2.5 m**"
          ],
          [
            "上記以外の場合：その他の場合",
            "Ngoài các trường hợp trên, điều kiện thông thường",
            "地表上**4 m**"
          ]
        ],
        "rowsVi": [
          [
            "**道路**（歩行の用にのみ供される部分を除く）**を横断する場合**：技術上やむを得ない場合において交通に支障のないとき",
            "**Vượt đường** (trừ phần chỉ dành cho người đi bộ), khi bất khả kháng về kỹ thuật và không cản trở giao thông",
            "**3 m** trên mặt đường"
          ],
          [
            "道路を横断する場合：その他の場合",
            "Vượt đường trong các trường hợp còn lại",
            "**5 m** trên mặt đường"
          ],
          [
            "鉄道又は軌道を横断する場合",
            "Vượt đường sắt hoặc đường ray",
            "**5,5 m** trên mặt ray"
          ],
          [
            "横断歩道橋の上に施設する場合",
            "Phía trên cầu vượt bộ hành",
            "**3 m** trên mặt cầu"
          ],
          [
            "上記以外の場合：技術上やむを得ない場合において**交通に支障のないとき**",
            "Ngoài các trường hợp trên, khi bất khả kháng về kỹ thuật và **không cản trở giao thông**",
            "**2,5 m** trên mặt đất"
          ],
          [
            "上記以外の場合：その他の場合",
            "Ngoài các trường hợp trên, điều kiện thông thường",
            "**4 m** trên mặt đất"
          ]
        ]
      }
    }
  ],
  "467": [
    {
      "diagram": "lawLowVoltageService467"
    },
    {
      "jp": "絶縁電線のときは、**2.6 mm**以上。径間15 m以下の場合は、**2.0 mm**以上。",
      "vi": "Với dây cách điện, đường kính ít nhất **2,6 mm**. Khi nhịp không quá 15 m, đường kính ít nhất **2,0 mm**."
    },
    {
      "jp": "低圧架空引込線の高さ",
      "vi": "Chiều cao dây dẫn vào hạ áp",
      "table": {
        "jp": [
          "位置",
          "低圧架空引込線の高さ",
          "技術上やむを得ない場合において交通に支障がないとき"
        ],
        "vi": [
          "Vị trí",
          "Chiều cao thông thường",
          "Bất khả kháng về kỹ thuật và không cản giao thông"
        ],
        "rows": [
          [
            "h₁",
            "h₁",
            "路面上**5 m**以上",
            "路面上**3 m**以上"
          ],
          [
            "h₂",
            "h₂",
            "路面上**4 m**以上",
            "路面上**2.5 m**以上"
          ],
          [
            "h₃",
            "h₃",
            "路面上**4 m**以上",
            "路面上**2.5 m**以上"
          ]
        ],
        "rowsVi": [
          [
            "h₁",
            "h₁",
            "Ít nhất **5 m** trên mặt đường",
            "Ít nhất **3 m** trên mặt đường"
          ],
          [
            "h₂",
            "h₂",
            "Ít nhất **4 m** trên mặt đường",
            "Ít nhất **2,5 m** trên mặt đường"
          ],
          [
            "h₃",
            "h₃",
            "Ít nhất **4 m** trên mặt đường",
            "Ít nhất **2,5 m** trên mặt đường"
          ]
        ]
      }
    },
    {
      "jp": "POINT　高圧架空引込線の電線の高さ といえば\n・道路横断**6 m**以上、レール面上**5.5 m**以上、横断歩道橋の路面上**3.5 m**以上\n・上記以外**3.5 m**以上、ケーブル以外のとき下方に**危険である旨**の表示をする",
      "vi": "Ghi nhớ. Dây dẫn vào cao áp trên không khi vượt đường cao ít nhất **6 m**, trên mặt ray ít nhất **5,5 m**, trên mặt cầu vượt bộ hành ít nhất **3,5 m**. Các trường hợp khác ít nhất **3,5 m** và đặt biển **cảnh báo nguy hiểm** phía dưới nếu dây không phải cáp."
    },
    {
      "jp": "高圧架空引込線が建造物と接近する場合の離隔距離 といえば\n・高圧ケーブルの場合：造営材の上方**1 m**、上方以外**0.4 m**以上\n・高圧絶縁電線の場合：造営材の上方**2 m**、上方以外**1.2 m**以上。手を伸ばす又は身を乗り出すことができない部分は**0.8 m**",
      "vi": "Khoảng cách giữa dây dẫn vào cao áp và công trình. Cáp cao áp cách phía trên kết cấu ít nhất **1 m**, vị trí khác **0,4 m**. Dây cách điện cao áp cách phía trên ít nhất **2 m**, vị trí khác **1,2 m**, hoặc **0,8 m** nếu người không thể vươn tay hoặc nghiêng ra ngoài."
    },
    {
      "jp": "低圧架空引込線の電線の高さ といえば\n・道路横断**5 m**以上、**3 m**以上（技術上やむを得ない場合において交通に支障のないとき）\n（注）架空電線の高さは6 m、引込線の高さは5 m以上\n・レール面上**5.5 m**以上、横断歩道橋の路面上**3 m**以上\n・上記以外の場合**4 m**以上、**2.5 m**以上（技術上やむを得ない場合において交通に支障のないとき）",
      "vi": "Dây dẫn vào hạ áp trên không vượt đường cao ít nhất **5 m**, hoặc **3 m** khi bất khả kháng về kỹ thuật và không cản giao thông. Chú thích: đường dây trên không thông thường vượt đường cần 6 m, còn dây dẫn vào cần 5 m. Trên mặt ray ít nhất **5,5 m**, trên mặt cầu vượt bộ hành ít nhất **3 m**. Trường hợp khác ít nhất **4 m**, hoặc **2,5 m** khi bất khả kháng về kỹ thuật và không cản giao thông."
    },
    {
      "jp": "高圧屋側電線路の施設",
      "vi": "Lắp đường dây cao áp dọc tường",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧屋側電線路は、次のように施設します。",
      "vi": "Đường dây cao áp chạy dọc tường phải lắp theo điều kiện ở trang tiếp theo.",
      "note": ""
    }
  ],
  "468": [
    {
      "jp": "①展開した場所（見える場所）に施設します。",
      "vi": "① Lắp nơi thoáng, nhìn thấy.",
      "note": ""
    },
    {
      "jp": "②電線は、**ケーブル**を使用します。",
      "vi": "② Dùng **cáp** làm dây dẫn."
    },
    {
      "jp": "③ケーブルには、**接触防護措置**を施します。",
      "vi": "③ Áp dụng **biện pháp bảo vệ chống tiếp xúc** cho cáp."
    },
    {
      "jp": "④ケーブルを造営材の側面又は下面に沿って取り付ける場合は、ケーブルの支持点間の距離を**2 m**（垂直に取り付ける場合は**6 m**）以下とします。",
      "vi": "④ Nếu lắp cáp dọc theo mặt bên hoặc mặt dưới của kết cấu, khoảng cách giữa các điểm đỡ không quá **2 m**, hoặc **6 m** nếu lắp thẳng đứng."
    },
    {
      "jp": "⑤管、ケーブルを収める防護装置の金属部分、金属製の接続箱及びケーブルの被覆に使用する金属体には、大地との間に**A種**接地工事（接触防護措置を施す場合は、**D種**接地工事）を施します。",
      "vi": "⑤ Nối đất **loại A** cho ống, phần kim loại của thiết bị bảo vệ cáp, hộp nối kim loại và phần kim loại của lớp bọc cáp. Nếu đã áp dụng biện pháp bảo vệ chống tiếp xúc thì nối đất **loại D**."
    },
    {
      "jp": "POINT　高圧引込線の屋側部分などの施設 といえば\n・ケーブル支持点間距離**2 m**、垂直**6 m**以下\n・**A種**接地工事（ケーブルの被覆、金属製の接続箱、防護装置、金属管）、**D種**接地工事（接触防護措置を施す場合）",
      "vi": "Ghi nhớ. Dây cao áp dọc tường có khoảng cách giữa các điểm đỡ cáp không quá **2 m**, hoặc **6 m** khi lắp thẳng đứng. Nối đất **loại A** cho lớp bọc kim loại của cáp, hộp nối, thiết bị bảo vệ và ống kim loại. Khi có biện pháp chống tiếp xúc, dùng **loại D**."
    },
    {
      "jp": "併架と共架の工事方法",
      "vi": "Lắp chung trên vật đỡ và lắp chung với dây viễn thông",
      "note": "",
      "heading": true
    },
    {
      "jp": "同一支持物に他の架空電線を架線することを**併架**といい、同一支持物に架空弱電流電線等を架線することを**共架**といいます。",
      "vi": "**併架** là treo các dây điện lực trên cùng vật đỡ. **共架** là treo dây điện lực cùng dây điện nhẹ hoặc dây tương tự trên cùng vật đỡ."
    },
    {
      "jp": "低圧架空電線と高圧架空電線の併架",
      "vi": "Treo chung đường dây hạ áp và cao áp",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空電線と高圧架空電線の併架については、①低圧架空電線を高圧架空電線の**下**とし、②別の**腕金**類に施設し、③離隔距離は**0.5 m**以上、④高圧架空電線にケーブルを使用した場合の離隔距離は**0.3 m**以上と規定しています。",
      "vi": "Khi treo dây hạ áp và cao áp trên cùng vật đỡ, ① dây hạ áp ở **phía dưới**, ② dùng **xà đỡ** riêng, ③ khoảng cách ít nhất **0,5 m**, ④ nếu dây cao áp là cáp thì ít nhất **0,3 m**."
    },
    {
      "jp": "低、高圧架空電線と架空弱電流電線等の共架",
      "vi": "Treo chung dây điện hạ/cao áp với dây thông tin",
      "note": "",
      "heading": true
    },
    {
      "jp": "低、高圧架空電線と架空弱電流電線等の共架については、①架空電線を架空弱電流電線の**上**とし、②別の**腕金**類に施設し、③離隔距離は、低圧にあっては**0.75 m**以上、高圧にあっては、**1.5 m**以上、高圧架空電線がケーブルの場合は**0.5 m**以上と規定しています。",
      "vi": "Khi treo dây điện lực chung vật đỡ với dây điện nhẹ, ① dây điện lực ở **phía trên**, ② dùng **xà đỡ** riêng, ③ khoảng cách ít nhất **0,75 m** với dây hạ áp, **1,5 m** với dây cao áp, hoặc **0,5 m** nếu dây cao áp là cáp."
    },
    {
      "jp": "POINT　低圧と高圧架空電線の併架 といえば 低圧が**下**、**0.5 m**、高圧線がケーブルの場合は**0.3 m**以上\n架空弱電流電線との共架 といえば 低圧電線と**0.75 m**、高圧電線と**1.5 m**、高圧線がケーブルの場合は**0.5 m**以上\n※低圧架空電線と高圧架空電線とを同一支持物に施設する場合は、併架\n※低圧又は高圧架空電線と架空弱電流電線とを同一支持物に施設する場合は、共架",
      "vi": "Ghi nhớ. 併架: dây hạ áp ở **dưới**, cách dây cao áp ít nhất **0,5 m**, hoặc **0,3 m** nếu dây cao áp là cáp. 共架: dây điện nhẹ cách dây hạ áp **0,75 m**, dây cao áp **1,5 m**, hoặc cáp cao áp **0,5 m** trở lên."
    }
  ],
  "469": [
    {
      "jp": "練習問題01　高圧屋側電線路の施設",
      "vi": "Bài luyện 01 · Lắp dây cao áp dọc tường",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧屋側電線路の施設に関する記述として、誤っているものは。",
      "vi": "Trong các phát biểu về lắp dây cao áp dọc tường, phát biểu nào sai?",
      "note": ""
    },
    {
      "jp": "(1) 展開した場所に施設した。",
      "vi": "(1) Lắp tại nơi thoáng và nhìn thấy.",
      "note": ""
    },
    {
      "jp": "(2) 電線はケーブルとした。",
      "vi": "(2) Sử dụng cáp.",
      "note": ""
    },
    {
      "jp": "(3) 屋外であることから、ケーブルを地表上2.3mの高さに施設した。",
      "vi": "(3) Vì lắp ngoài trời nên đặt cáp ở độ cao 2,3 m trên mặt đất.",
      "note": ""
    },
    {
      "jp": "(4) ケーブルを造営材の側面に沿って垂直に取付け、支持点間の距離を6 mとした。",
      "vi": "(4) Lắp cáp thẳng đứng dọc mặt bên của kết cấu, với khoảng cách giữa hai điểm đỡ là 6 m."
    },
    {
      "jp": "(5) ケーブルを収める防護装置の金属製部分にA種接地工事を施した。",
      "vi": "(5) Nối đất loại A cho phần kim loại của thiết bị bảo vệ chứa cáp."
    },
    {
      "jp": "解説　解答 (3) は誤りです。接触防護措置を施す必要があり、屋外にあっては地表上2.5 m以上の高さとしています（接触防護措置：屋内2.3 m以上、屋外2.5 m以上、簡易接触防護措置：屋内1.8 m以上、屋外2 m以上）。",
      "vi": "Lời giải. Phương án (3) sai. Phải có biện pháp bảo vệ chống tiếp xúc, với độ cao ngoài trời ít nhất 2,5 m trên mặt đất. Biện pháp chống tiếp xúc: trong nhà ít nhất 2,3 m, ngoài trời ít nhất 2,5 m. Biện pháp chống tiếp xúc đơn giản: trong nhà ít nhất 1,8 m, ngoài trời ít nhất 2 m."
    },
    {
      "jp": "解答　**(3)**",
      "vi": "Đáp án **(3)**."
    },
    {
      "jp": "練習問題02　併架",
      "vi": "Bài luyện 02 · Treo chung hai cấp điện áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧架空電線と高圧架空電線とを同一支持物に併架する場合、空白箇所の字句、数字は。",
      "vi": "Điền từ/số trong các điều kiện treo dây hạ áp và cao áp chung cột.",
      "note": ""
    },
    {
      "jp": "a) 次により施設すること。",
      "vi": "a) Lắp theo các điều kiện sau."
    },
    {
      "jp": "①低圧架空電線を高圧架空電線の（ア）に施設すること。",
      "vi": "① Lắp dây hạ áp trên không ở vị trí (ア) so với dây cao áp trên không."
    },
    {
      "jp": "②低圧架空電線と高圧架空電線は、別個の（イ）に施設すること。",
      "vi": "② Lắp dây hạ áp và dây cao áp trên các (イ) riêng."
    },
    {
      "jp": "③低圧架空電線と高圧架空電線との離隔距離は、（ウ）m以上であること。ただし、かど柱、分岐柱等で混触のおそれがないように施設する場合は、この限りでない。",
      "vi": "③ Giữ khoảng cách giữa dây hạ áp và dây cao áp ít nhất (ウ) m, trừ trường hợp bố trí tại cột góc, cột rẽ nhánh hoặc vị trí tương tự sao cho không có nguy cơ chạm lẫn."
    },
    {
      "jp": "b) 高圧架空電線にケーブルを使用するとともに、高圧架空電線と低圧架空電線との離隔距離を（エ）m以上とすること。",
      "vi": "b) Dùng cáp cho đường dây cao áp và giữ khoảng cách đến dây hạ áp ít nhất (エ) m."
    },
    {
      "jp": "解説　低圧架空電線と高圧架空電線を併架する場合、「低圧電線が下」「別個の腕金類に施設」「離隔距離は0.5 m以上」「高圧架空電線がケーブルの場合の離隔距離は0.3 m以上」である必要があります。",
      "vi": "Lời giải. Khi treo chung dây hạ áp và cao áp, dây hạ áp ở dưới, dùng xà đỡ riêng và cách nhau ít nhất 0,5 m. Nếu dây cao áp là cáp, khoảng cách ít nhất 0,3 m."
    },
    {
      "jp": "解答　（ア）**下**　（イ）**腕金類**　（ウ）**0.5**　（エ）**0.3**",
      "vi": "Đáp án. (ア) **Dưới**, (イ) **xà đỡ**, (ウ) **0,5**, (エ) **0,3**."
    }
  ],
  "470": [
    {
      "jp": "2-5 地中電線路 といえば 管路式、暗きょ式、直接埋設式がある",
      "vi": "2-5 Đường dây điện ngầm: có kiểu ống, kiểu hào cáp và chôn trực tiếp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "地中電線路の施設",
      "vi": "Lắp đường dây ngầm",
      "note": "",
      "heading": true
    },
    {
      "jp": "地中電線路は、電線を地中に施設する電線路をいい、地中電線路にはケーブルを使用することが規定されています。",
      "vi": "Đường dây ngầm là dây được lắp trong đất; bắt buộc dùng cáp.",
      "note": ""
    },
    {
      "jp": "施設方法",
      "vi": "Phương pháp lắp đặt",
      "note": "",
      "heading": true
    },
    {
      "jp": "地中電線路は、電線に**ケーブル**を使用し、かつ、**管路式**、**暗きょ式**又は**直接埋設式**により施設します。",
      "vi": "Đường dây ngầm dùng **cáp**, lắp theo một trong ba cách: **đặt trong ống**, **đặt trong hầm cáp** hoặc **chôn trực tiếp**."
    },
    {
      "jp": "①地中電線路を**管路式**により施設する場合は、次によります（図2-5-1の(a)）。\n・電線を収める管は、これに加わる車両その他の重量物の**圧力に耐えるもの**を使用します。",
      "vi": "① Với phương pháp **đặt trong ống**, xem hình 2-5-1(a). Ống chứa dây phải **chịu được áp lực** của xe và vật nặng khác."
    },
    {
      "jp": "・高圧又は特別高圧の地中電線路には、次により**表示**を施します。ただし、需要場所に施設する高圧地中電線路であって、その長さが**15 m**以下のものにあっては表示を省略できます。",
      "vi": "• **Đánh dấu** đường dây ngầm cao áp và siêu cao áp theo quy định sau. Có thể miễn đánh dấu đường dây ngầm cao áp lắp tại nơi sử dụng điện nếu chiều dài không quá **15 m**."
    },
    {
      "jp": "［表示］ケーブル標識シートによる表示（図2-5-2参照）\n物件の**名称**、**管理者名**及び**電圧**（需要場所に施設する場合にあっては、物件の名称及び管理者名を除く）をおおむね**2 m**の間隔で表示します。",
      "vi": "Đánh dấu bằng băng cảnh báo cáp (hình 2-5-2). Ghi **tên công trình**, **tên đơn vị quản lý** và **điện áp** theo khoảng cách khoảng **2 m**. Khi lắp tại nơi sử dụng điện, bỏ tên công trình và tên đơn vị quản lý."
    },
    {
      "jp": "②地中電線路を**暗きょ式**により施設する場合は、次によります（図2-5-1の(b)）。\n・暗きょは、車両その他の重量物の圧力に耐えるものを使用し、地中電線に**耐燃措置**を施すか、暗きょ内に**自動消火設備**を施設します。また、共同溝方式は暗きょ式に含めます。",
      "vi": "② Với phương pháp **đặt trong hầm cáp**, xem hình 2-5-1(b). Hầm phải chịu áp lực của xe và vật nặng khác. Áp dụng **biện pháp chống cháy** cho cáp ngầm hoặc lắp **thiết bị chữa cháy tự động** trong hầm. Hầm kỹ thuật dùng chung cũng thuộc phương pháp này."
    },
    {
      "jp": "③地中電線路を**直接埋設式**により施設する場合は、次によります（図2-5-1の(c)）。\n・地中電線路の埋設深さは、車両その他の重量物の圧力を受けるおそれがある場所においては**1.2 m**以上、その他の場所においては**0.6 m**以上とします。",
      "vi": "③ Với phương pháp **chôn trực tiếp**, xem hình 2-5-1(c). Chôn sâu ít nhất **1,2 m** ở nơi có thể chịu áp lực của xe hoặc vật nặng khác, và ít nhất **0,6 m** ở nơi còn lại."
    },
    {
      "diagram": "lawUndergroundMethods470"
    }
  ],
  "471": [
    {
      "jp": "・地中電線を**トラフ**その他の防護物に収めて施設します。",
      "vi": "• Đặt cáp ngầm trong **máng bảo vệ** hoặc thiết bị bảo vệ khác."
    },
    {
      "jp": "低圧又は高圧の地中電線路を、車両その他の重量物の圧力を受けるおそれがない場所に施設する場合は、地中電線の上部を堅ろうな板又はといで覆ってもよい。",
      "vi": "• Với đường dây ngầm hạ áp hoặc cao áp ở nơi không có nguy cơ chịu áp lực xe hay vật nặng khác, có thể phủ phía trên bằng tấm hoặc máng cứng chắc.",
      "note": ""
    },
    {
      "jp": "・高圧又は特別高圧の地中電線路を直接埋設式により施設する場合は、管路式による場合と同様に**表示**を施します。",
      "vi": "• **Đánh dấu** đường dây ngầm cao áp hoặc siêu cao áp chôn trực tiếp như trường hợp đặt trong ống."
    },
    {
      "jp": "ケーブル埋設箇所の表示",
      "vi": "Đánh dấu vị trí chôn cáp",
      "note": "",
      "heading": true
    },
    {
      "jp": "**地中引込線**を管路式又は直接埋設式により需要場所に施設する場合は、ケーブル埋設箇所の表示を行う必要があります。ただし、地中引込線の長さが**15 m**以下のものにあっては、表示を省略できます。",
      "vi": "Phải đánh dấu vị trí chôn cáp khi lắp **dây dẫn vào ngầm** trong ống hoặc chôn trực tiếp tại nơi sử dụng điện. Có thể miễn đánh dấu với dây dài không quá **15 m**."
    },
    {
      "jp": "①電圧を概ね**2 m**の間隔で表示した耐久性のある**ケーブル標識シート**をケーブルの直上の地中に連続して埋設します。",
      "vi": "① Chôn liên tục **băng cảnh báo cáp** bền ngay phía trên cáp, trên đó ghi điện áp cách nhau khoảng **2 m**."
    },
    {
      "jp": "②ケーブル埋設位置が容易に判明するように、ケーブル直上の地表面に耐久性のある**標識**（**標柱**又は**標石**）を必要な地点に設置します。",
      "vi": "② Đặt **dấu mốc** bền (**cọc mốc** hoặc **đá mốc**) ở những điểm cần thiết trên mặt đất ngay trên cáp để dễ xác định vị trí."
    },
    {
      "diagram": "lawCableMarking471"
    },
    {
      "jp": "POINT　地中電線路及び引込線の施設",
      "vi": "Ghi nhớ thi công cáp ngầm và dây dẫn vào.",
      "note": ""
    },
    {
      "jp": "・管路式**0.3 m**以上\n・直接埋設式**1.2 m**（重量物の圧力あり）、**0.6 m**以上",
      "vi": "• Đặt trong ống: độ sâu từ **0,3 m**.\n• Chôn trực tiếp: ít nhất **1,2 m** khi chịu áp lực vật nặng, **0,6 m** ở nơi khác."
    },
    {
      "jp": "ケーブル埋設箇所の表示 といえば **ケーブル標識シート**の埋設、**標識**（標柱、標石）の設置",
      "vi": "Đánh dấu vị trí chôn cáp bằng **băng cảnh báo** chôn trên cáp và **dấu mốc** trên mặt đất (cọc hoặc đá)."
    },
    {
      "jp": "地中箱の施設",
      "vi": "Lắp hộp cáp ngầm",
      "note": "",
      "heading": true
    },
    {
      "jp": "地中電線路に使用する地中箱（マンホール、ハンドホール）は、次のようにします。",
      "vi": "Hộp cáp ngầm như manhole, handhole phải đáp ứng các điều kiện:",
      "note": ""
    },
    {
      "jp": "・地中箱は、車両その他の重量物の**圧力に耐える**堅ろうな構造にします。",
      "vi": "• Hộp ngầm phải có kết cấu chắc chắn, **chịu được áp lực** của xe và vật nặng khác."
    },
    {
      "jp": "・爆発性又は燃焼性のガスが侵入するおそれのある場所に設ける地中箱でその大きさが1 m³以上のものには、**通風装置**その他ガスを放散させるための装置を設けます。",
      "vi": "• Hộp ngầm có thể tích từ 1 m³ lắp ở nơi khí dễ nổ hoặc dễ cháy có thể xâm nhập phải có **thiết bị thông gió** hoặc thiết bị khác để thoát khí."
    },
    {
      "jp": "・地中箱のふたは、**取扱者**以外の者が容易にあけることができないように施設します。",
      "vi": "• Lắp nắp hộp ngầm sao cho người ngoài **người phụ trách thao tác** không dễ mở được."
    }
  ],
  "472": [
    {
      "jp": "地中電線と弱電流電線、管などとの接近又は交さ",
      "vi": "Cáp ngầm gần/giao cắt dây thông tin, ống khác.",
      "note": "",
      "heading": true
    },
    {
      "jp": "地中電線路と地中弱電流電線、管との接近又は交さについては、地中電線が故障し、アーク放電により地中弱電流電線に影響を与えることがないように、最低離隔距離を表2-5-1のように定めています。",
      "vi": "Để tránh hồ quang khi cáp điện sự cố gây ảnh hưởng dây thông tin, quy định khoảng cách tối thiểu.",
      "note": ""
    },
    {
      "jp": "地中電線相互の接近又は交さにおいて、地中線の事故によるアーク放電によって他の地中電線に損傷を与えないように、最低離隔距離を表2-5-2のように定めています。",
      "vi": "Khi các cáp ngầm tiếp cận hoặc giao cắt nhau, dùng khoảng cách tối thiểu ở bảng 2-5-2 để hồ quang từ cáp gặp sự cố không làm hỏng cáp ngầm khác."
    },
    {
      "jp": "表2-5-1 地中電線と他の埋設物との接近",
      "vi": "Bảng 2-5-1 · Khoảng cách từ cáp ngầm đến vật chôn khác",
      "heading": true,
      "table": {
        "jp": [
          "埋設物の種類",
          "低圧",
          "高圧",
          "特別高圧"
        ],
        "vi": [
          "Vật chôn",
          "Hạ áp",
          "Cao áp",
          "Siêu cao áp"
        ],
        "rows": [
          [
            "弱電流電線",
            "Dây điện nhẹ",
            "**0.3** m",
            "**0.3** m",
            "**0.6** m"
          ],
          [
            "可燃性又は有毒性の液体を内包する管",
            "Ống chứa chất lỏng dễ cháy hoặc độc",
            "—",
            "—",
            "**1** m"
          ],
          [
            "上記以外の管",
            "Ống khác",
            "—",
            "—",
            "**0.3** m"
          ]
        ],
        "rowsVi": [
          [
            "弱電流電線",
            "Dây điện nhẹ",
            "**0,3** m",
            "**0,3** m",
            "**0,6** m"
          ],
          [
            "可燃性又は有毒性の液体を内包する管",
            "Ống chứa chất lỏng dễ cháy hoặc độc",
            "—",
            "—",
            "**1** m"
          ],
          [
            "上記以外の管",
            "Ống khác",
            "—",
            "—",
            "**0,3** m"
          ]
        ]
      }
    },
    {
      "jp": "表2-5-2 地中電線と他の地中電線との接近",
      "vi": "Bảng 2-5-2 · Khoảng cách giữa các cáp điện ngầm",
      "heading": true,
      "table": {
        "jp": [
          "接近する地中電線路の種類",
          "低圧",
          "高圧",
          "特別高圧"
        ],
        "vi": [
          "Cấp điện áp của cáp đi gần",
          "Hạ áp",
          "Cao áp",
          "Siêu cao áp"
        ],
        "rows": [
          [
            "低圧",
            "Hạ áp",
            "—",
            "**0.15** m",
            "**0.3** m"
          ],
          [
            "高圧",
            "Cao áp",
            "**0.15** m",
            "—",
            "**0.3** m"
          ],
          [
            "特別高圧",
            "Siêu cao áp",
            "**0.3** m",
            "**0.3** m",
            "—"
          ]
        ],
        "rowsVi": [
          [
            "低圧",
            "Hạ áp",
            "—",
            "**0,15** m",
            "**0,3** m"
          ],
          [
            "高圧",
            "Cao áp",
            "**0,15** m",
            "—",
            "**0,3** m"
          ],
          [
            "特別高圧",
            "Siêu cao áp",
            "**0,3** m",
            "**0,3** m",
            "—"
          ]
        ]
      }
    },
    {
      "jp": "また、次のいずれかによってもよいとしています。\n・地中電線相互の間に堅ろうな耐火性の隔壁を設けること。",
      "vi": "Có thể dùng một trong các phương án sau.\n• Lắp vách ngăn chịu lửa vững chắc giữa các cáp ngầm."
    },
    {
      "jp": "・**いずれか**の地中電線が、次のいずれかに該当するものである場合は、地中電線相互の離隔距離が、0 m以上であること。\n①不燃性の被覆を有すること。\n②堅ろうな不燃性の管に収められていること。",
      "vi": "• Khoảng cách giữa các cáp ngầm có thể từ 0 m nếu **một trong các cáp** có ① vỏ không cháy hoặc ② nằm trong ống cứng chắc, không cháy."
    },
    {
      "jp": "・**それぞれ**の地中電線が、次のいずれかに該当するものである場合は、地中電線相互の離隔距離が、0 m以上であること。\n①自消性のある難燃性の被覆を有すること。\n②堅ろうな自消性のある難燃性の管に収められていること。",
      "vi": "• Khoảng cách giữa các cáp ngầm có thể từ 0 m nếu **mỗi cáp** đều có ① vỏ khó cháy tự tắt hoặc ② nằm trong ống cứng chắc, khó cháy tự tắt."
    },
    {
      "jp": "地中電線の被覆金属体の接地",
      "vi": "Nối đất lớp vỏ kim loại cáp ngầm.",
      "note": "",
      "heading": true
    },
    {
      "jp": "管、暗きょその他の地中電線路を収める防護装置の金属製部分、金属製の電線接続箱及び地中電線の被覆に使用する金属体には、**D種接地工事**を施します。ただし、これらのものに防食措置を施した部分については、この限りでないと定めています。",
      "vi": "**Nối đất loại D** cho phần kim loại của ống, hầm và thiết bị bảo vệ khác dùng chứa đường dây ngầm, hộp nối kim loại và kim loại dùng trong lớp bọc cáp. Ngoại lệ áp dụng cho phần đã có biện pháp chống ăn mòn."
    },
    {
      "jp": "POINT　地中箱は、重量物の**圧力に耐える**、通風装置やガスを放散する装置を設ける\nふたは、**取扱者**以外はあけることができないように施設する\n地中電線路（低圧・高圧）と弱電流電線は、**0.3 m**以上離す\n地中電線路（低圧・高圧）相互の接近又は交さは、**0.15 m**以上離す\n地中電線路の被覆金属体は、**D種接地工事**を施す",
      "vi": "Ghi nhớ. Hộp ngầm **chịu được áp lực** của vật nặng và bố trí thông gió hoặc thoát khí khi có điều kiện nêu ở trang trước. Nắp hộp chỉ cho **người phụ trách thao tác** mở. Dây điện ngầm hạ áp hoặc cao áp cách dây điện nhẹ ít nhất **0,3 m**. Dây hạ áp và cao áp ngầm tiếp cận hoặc giao cắt nhau cách ít nhất **0,15 m**. **Nối đất loại D** cho lớp bọc kim loại của cáp ngầm."
    }
  ],
  "473": [
    {
      "jp": "練習問題01　地中電線と他の地中電線等との接近又は交差",
      "vi": "Bài luyện 01 · Cáp ngầm tiếp cận hoặc giao cắt cáp ngầm khác",
      "heading": true
    },
    {
      "jp": "下記は、「電技解釈」の一部である。空白箇所の数字、字句は。\n地中電線相互が接近又は交差する場合、次のいずれかによること。",
      "vi": "Đoạn dưới đây trích từ phần giải thích tiêu chuẩn kỹ thuật. Điền số và thuật ngữ vào chỗ trống. Khi các cáp ngầm tiếp cận hoặc giao cắt nhau, áp dụng một trong các phương án sau."
    },
    {
      "jp": "a) 地中電線相互の離隔距離が、次に規定する値以上であること。\n①低圧地中電線と高圧地中電線との離隔距離は、（ア）m\n②低圧又は高圧の地中電線と特別高圧地中電線との離隔距離は、（イ）m",
      "vi": "a) Khoảng cách giữa các cáp ngầm phải đạt ít nhất các giá trị sau.\n① Hạ áp với cao áp: (ア) m.\n② Hạ áp hoặc cao áp với siêu cao áp: (イ) m."
    },
    {
      "jp": "b) 地中電線相互の間に堅ろうな（ウ）の隔壁を設けること。",
      "vi": "b) Lắp vách ngăn (ウ) vững chắc giữa các cáp ngầm."
    },
    {
      "jp": "c) （エ）の地中電線が、次のいずれかに該当するものである場合は、地中電線相互の離隔距離が、0 m以上であること。\n①不燃性の被覆を有すること。\n②堅ろうな不燃性の管に収められていること。",
      "vi": "c) Khoảng cách giữa các cáp ngầm có thể từ 0 m nếu (エ) cáp ① có vỏ không cháy hoặc ② nằm trong ống cứng chắc, không cháy."
    },
    {
      "jp": "d) （オ）の地中電線が、次のいずれかに該当するものである場合は、地中電線相互の離隔距離が、0 m以上であること。\n①自消性のある難燃性の被覆を有すること。\n②堅ろうな自消性のある難燃性の管に収められていること。",
      "vi": "d) Khoảng cách giữa các cáp ngầm có thể từ 0 m nếu (オ) cáp ① có vỏ khó cháy tự tắt hoặc ② nằm trong ống cứng chắc, khó cháy tự tắt."
    },
    {
      "jp": "解答　（ア）**0.15**　（イ）**0.3**　（ウ）**耐火性**　（エ）**いずれか**　（オ）**それぞれ**",
      "vi": "Đáp án. (ア) **0,15** · (イ) **0,3** · (ウ) **chịu lửa** · (エ) **một trong các cáp** · (オ) **mỗi cáp**."
    },
    {
      "jp": "解説\n・低圧地中電線と高圧地中電線との離隔距離は0.15 m以上です。\n・低圧若しくは高圧の地中電線と特別高圧地中電線との離隔距離は0.3 m以上必要です。\n・地中電線相互の間に堅ろうな耐火性の隔壁を設ける必要があります。\n・いずれかが不燃性の被覆であるか不燃性の管に収められている場合、離隔距離は0 m以上必要です。\n・それぞれが難燃性の被覆であるか難燃性の管に収められている場合、離隔距離は0 m以上必要です。",
      "vi": "Lời giải. Hạ áp với cao áp cách ít nhất 0,15 m. Hạ áp hoặc cao áp với siêu cao áp cách ít nhất 0,3 m. Phương án khác là dùng vách chịu lửa chắc chắn. Nếu một cáp có vỏ hoặc ống không cháy, hoặc nếu từng cáp đều có vỏ hoặc ống khó cháy theo điều kiện d, khoảng cách có thể từ 0 m.",
      "note": "Điểm phân biệt là いずれか (một cáp đạt điều kiện không cháy) và それぞれ (mỗi cáp đều đạt điều kiện khó cháy tự tắt)."
    },
    {
      "jp": "参考　「難燃性」とは、炎を当てても燃え広がらない性質、「自消性のある」とは、炎を除くと自然に消える性質です。\n「不燃性」とは、炎を当てても燃えない性質、「耐火性」とは、炎により加熱された状態で変形又は破壊しない性質です。",
      "vi": "Tham khảo. Khó cháy: lửa không lan khi tiếp xúc ngọn lửa. Tự tắt: lửa tự tắt khi bỏ nguồn lửa. Không cháy: không cháy khi tiếp xúc ngọn lửa. Chịu lửa: không biến dạng hoặc phá hủy khi bị ngọn lửa nung nóng."
    }
  ],
  "474": [
    {
      "jp": "2-6　電路の保護装置　といえば　過電流遮断器、地絡遮断装置",
      "vi": "2-6 Thiết bị bảo vệ mạch: thiết bị cắt quá dòng và thiết bị cắt chạm đất.",
      "note": "",
      "heading": true
    },
    {
      "jp": "電路の保護装置の施設",
      "vi": "Lắp thiết bị bảo vệ mạch điện",
      "heading": true
    },
    {
      "jp": "過電流遮断器",
      "vi": "Thiết bị cắt quá dòng",
      "heading": true
    },
    {
      "jp": "過電流遮断器とは、電路に過電流を生じたときに自動的に電路を遮断する装置をいい、過電流とは、短絡電流と過負荷電流とを意味しています。",
      "vi": "Thiết bị cắt quá dòng tự động ngắt mạch khi xuất hiện quá dòng. Quá dòng gồm dòng ngắn mạch và dòng quá tải."
    },
    {
      "jp": "高圧及び特別高圧の電路においては、**高圧ヒューズ**及び**継電器によって動作する遮断器**であり、低圧電路においては**ヒューズ**及び**配線用遮断器**などをいいます。",
      "vi": "Trong mạch cao áp hoặc siêu cao áp, thiết bị này gồm **cầu chì cao áp** và **máy cắt tác động qua rơ-le**. Trong mạch hạ áp, ví dụ là **cầu chì** và **áp-tô-mát bảo vệ đường dây**."
    },
    {
      "jp": "高圧又は特別高圧の電路に施設する過電流遮断器の性能",
      "vi": "Tính năng thiết bị cắt quá dòng trong mạch cao áp hoặc siêu cao áp",
      "heading": true
    },
    {
      "jp": "高圧又は特別高圧の電路に施設する過電流遮断器は、次の各号に適合するものであること。",
      "vi": "Thiết bị cắt quá dòng trong mạch cao áp hoặc siêu cao áp phải đáp ứng các yêu cầu sau."
    },
    {
      "jp": "・電路に**短絡**を生じたときに作動するものにあっては、これを施設する箇所を通過する**短絡電流**を遮断する能力を有すること。",
      "vi": "• Thiết bị tác động khi **ngắn mạch** phải có khả năng cắt **dòng ngắn mạch** qua vị trí lắp."
    },
    {
      "jp": "・その作動に伴いその**開閉**状態を表示する装置を有すること。ただし、その**開閉**状態を容易に確認できるものは、この限りでない。",
      "vi": "• Có bộ chỉ thị trạng thái **đóng cắt** khi thiết bị tác động. Ngoại lệ áp dụng nếu có thể dễ dàng xác định trạng thái **đóng cắt**."
    },
    {
      "jp": "・過電流遮断器として高圧電路に施設する**包装ヒューズ**（ヒューズ以外の過電流遮断器と組み合わせて1の過電流遮断器として使用するものを除く）は、次の各号のいずれかのものであること。",
      "vi": "• **Cầu chì có vỏ** dùng để cắt quá dòng trong mạch cao áp phải thuộc một trong các loại dưới đây, trừ loại kết hợp với thiết bị cắt quá dòng khác cầu chì để làm thành một bộ cắt quá dòng."
    },
    {
      "jp": "・定格電流の**1.3倍**の電流に耐え、かつ、**2**倍の電流で**120**分以内に溶断するもの（コンデンサ用は除く）であること。",
      "vi": "• Chịu được **1,3 lần** dòng định mức và nóng chảy trong **120** phút khi dòng bằng **2** lần định mức (trừ cầu chì dùng cho tụ điện)."
    },
    {
      "jp": "・JISに適合する**高圧限流ヒューズ**であること。",
      "vi": "• **Cầu chì hạn dòng cao áp** phù hợp JIS."
    },
    {
      "jp": "・過電流遮断器として高圧電路に施設する**非包装ヒューズ**は、定格電流の**1.25倍**の電流に耐え、かつ、**2倍**の電流で**2分**以内に溶断するものであること。",
      "vi": "• **Cầu chì không vỏ** dùng để cắt quá dòng trong mạch cao áp phải chịu được **1,25 lần** dòng định mức và nóng chảy trong **2 phút** khi dòng bằng **2 lần** định mức."
    },
    {
      "jp": "POINT　高圧電路に施設するヒューズの溶断時間\n包装ヒューズ：**1.3倍**の電流に耐え、**2**倍の電流で**120**分以内に溶断\n非包装ヒューズ：**1.25倍**の電流に耐え、**2**倍の電流で**2分**以内に溶断",
      "vi": "Ghi nhớ thời gian nóng chảy của cầu chì cao áp.\nCó vỏ: chịu **1,3 lần** dòng định mức, nóng chảy trong **120** phút ở **2** lần định mức.\nKhông vỏ: chịu **1,25 lần**, nóng chảy trong **2 phút** ở **2** lần định mức."
    }
  ],
  "475": [
    {
      "jp": "過電流遮断器の設置箇所",
      "vi": "Vị trí lắp thiết bị cắt quá dòng.",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧又は特別高圧電路",
      "vi": "Mạch cao áp hoặc siêu cao áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "高圧及び特別高圧の電路や機械器具については、電路の短絡などによって電線や機械器具に損傷を与えて火災を招く原因ともなるので、機械器具及び電線を保護する必要のある箇所には**過電流遮断器**を設置します。",
      "vi": "Mạch/thiết bị cao áp và siêu cao áp có thể gây cháy nếu ngắn mạch làm hư dây, thiết bị, nên phải lắp **bộ cắt quá dòng** tại vị trí cần bảo vệ.",
      "note": ""
    },
    {
      "jp": "低圧配線",
      "vi": "Mạch hạ áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "**幹線**、**分岐回路**などには、過電流遮断器の設置を義務付けています。",
      "vi": "**Dây trục** và **mạch nhánh** hạ áp thuộc những nơi bắt buộc bố trí bảo vệ quá dòng.",
      "note": ""
    },
    {
      "jp": "過電流遮断器の設置を禁止している箇所",
      "vi": "Các vị trí không được lắp thiết bị cắt quá dòng.",
      "note": "",
      "heading": true
    },
    {
      "jp": "**接地線**、多線式電路の**中性線**、B種接地工事を施した低圧電線路の**接地側電線**は、過電流遮断器の設置を禁止しています。",
      "vi": "**Dây nối đất**, **dây trung tính** của mạch nhiều dây và **dây phía nối đất** của đường dây hạ áp đã nối đất B không được bố trí bộ cắt quá dòng.",
      "note": ""
    },
    {
      "jp": "ただし、過電流遮断器が動作した場合において、各極が同時に遮断されるときは除きます。",
      "vi": "Ngoại lệ khi thiết bị bảo vệ làm ngắt đồng thời tất cả các cực.",
      "note": ""
    },
    {
      "jp": "POINT　過電流遮断器の設置を禁止している箇所\n**接地線**、**中性線**、接地工事を施した低圧電線路の接地側電線",
      "vi": "Ghi nhớ vị trí cấm lắp thiết bị cắt quá dòng: **dây nối đất**, **dây trung tính** và dây phía nối đất của đường dây hạ áp đã nối đất."
    },
    {
      "jp": "地絡遮断装置",
      "vi": "Thiết bị cắt chạm đất.",
      "note": "",
      "heading": true
    },
    {
      "jp": "**地絡遮断装置**（電路に地絡を生じたとき自動的に電路を遮断する装置）は、次のような箇所に施設します。",
      "vi": "**Thiết bị tự ngắt khi xảy ra chạm đất** phải lắp tại các vị trí sau.",
      "note": ""
    },
    {
      "jp": "高圧又は特別高圧の電路",
      "vi": "Mạch cao áp hoặc siêu cao áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "・**発電所**又は**変電所**若しくはこれに準ずる場所の引出口",
      "vi": "• Điểm ra của **nhà máy điện**, **trạm biến áp** hoặc nơi tương đương."
    },
    {
      "jp": "他のものから供給を受ける**受電点**",
      "vi": "**Điểm nhận điện** từ nguồn cung cấp khác.",
      "note": ""
    },
    {
      "jp": "配電用変圧器の**負荷側**の電路",
      "vi": "Mạch **phía tải** của máy biến áp phân phối.",
      "note": ""
    },
    {
      "jp": "低圧電路",
      "vi": "Mạch hạ áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "金属製外箱を有する使用電圧**60 V**を超える低圧の機械器具に接続する電路",
      "vi": "Mạch nối tới thiết bị hạ áp có vỏ kim loại, điện áp sử dụng trên **60 V**.",
      "note": ""
    },
    {
      "jp": "特別高圧又は高圧電路と変圧器により結合される**300 V**を超える低圧電路",
      "vi": "Mạch hạ áp trên **300 V** liên kết với mạch cao/siêu cao áp qua biến áp.",
      "note": ""
    },
    {
      "jp": "対地電圧**150 V**を超える住宅の低圧電路（住宅の三相**200 V**の電路）",
      "vi": "Mạch hạ áp trong nhà ở có điện áp so với đất trên **150 V** (ví dụ ba pha **200 V**).",
      "note": ""
    },
    {
      "jp": "地絡遮断装置の施設を省略できる電路",
      "vi": "Các trường hợp có thể miễn bộ cắt chạm đất.",
      "note": "",
      "heading": true
    },
    {
      "jp": "使用電圧が60 Vを超える低圧の金属製外箱を有する機械器具に電気を供給する電路には、漏電遮断器を施設します。ただし、次の場合は省略できます。",
      "vi": "Lắp bộ cắt dòng rò cho mạch cấp điện cho thiết bị hạ áp có vỏ kim loại với điện áp sử dụng trên 60 V. Có thể miễn trong các trường hợp sau."
    },
    {
      "jp": "①機械器具に簡易接触防護措置を施す場合",
      "vi": "① Có biện pháp bảo vệ đơn giản chống tiếp xúc với thiết bị."
    },
    {
      "jp": "②発電所、変電所などに施設した機械器具",
      "vi": "② Thiết bị lắp trong nhà máy điện, trạm biến áp hoặc nơi tương tự."
    },
    {
      "jp": "③**乾燥した場所**に施設した機械器具",
      "vi": "③ Thiết bị lắp ở **nơi khô ráo**."
    },
    {
      "jp": "④対地電圧が150 V以下で**水気のある場所以外の場所**の機械器具",
      "vi": "④ Thiết bị có điện áp so với đất không quá 150 V tại **nơi không ẩm ướt**."
    },
    {
      "jp": "⑤機械器具に施された接地抵抗値が**3** Ω以下の場合",
      "vi": "⑤ Điện trở nối đất của thiết bị không quá **3** Ω."
    }
  ],
  "476": [
    {
      "jp": "⑥電気用品安全法の適用を受ける**二重絶縁構造**の機械器具",
      "vi": "⑥ Thiết bị **cách điện kép** thuộc Luật An toàn sản phẩm điện.",
      "note": ""
    },
    {
      "jp": "⑦絶縁変圧器を施設し、機械器具側の電路を非接地とする場合",
      "vi": "⑦ Có biến áp cách ly và mạch phía thiết bị không nối đất.",
      "note": ""
    },
    {
      "jp": "⑧ゴム、合成樹脂などで被覆してある場合",
      "vi": "⑧ Thiết bị được bọc cao su/nhựa tổng hợp.",
      "note": ""
    },
    {
      "jp": "⑨対地から絶縁することができないもの",
      "vi": "⑨ Thiết bị không thể cách điện khỏi đất (trường hợp thuộc điều kiện miễn của sách).",
      "note": ""
    },
    {
      "jp": "⑩器具内に漏電遮断器を取り付けた場合",
      "vi": "⑩ Thiết bị có sẵn cầu dao chống dòng rò.",
      "note": ""
    },
    {
      "jp": "⑪60 V以下の機器の電路",
      "vi": "⑪ Mạch thiết bị điện áp ≤60 V.",
      "note": ""
    },
    {
      "jp": "POINT　地絡遮断装置の設置場所",
      "vi": "Ghi nhớ nơi lắp thiết bị cắt chạm đất.",
      "note": ""
    },
    {
      "jp": "・**発電所**や**変電所**の引出口、**受電点**、配電用変圧器の負荷側\n・**60** Vを超える機械器具\n・**三相200** Vの電路、他",
      "vi": "• Điểm ra của **nhà máy điện** hoặc **trạm biến áp**, **điểm nhận điện**, mạch phía tải của máy biến áp phân phối.\n• Thiết bị trên **60** V.\n• Mạch **ba pha 200** V, v.v."
    },
    {
      "jp": "地絡遮断装置を省略できる電路\n・乾燥した場所の機械器具、接地抵抗が3 Ω以下、二重絶縁の機器、他",
      "vi": "Có thể miễn bộ cắt chạm đất trong các trường hợp như thiết bị lắp ở nơi khô, điện trở nối đất không quá 3 Ω, thiết bị cách điện kép và các trường hợp khác đã liệt kê."
    },
    {
      "jp": "サイバーセキュリティの確保",
      "vi": "Bảo đảm an ninh mạng.",
      "note": "",
      "heading": true
    },
    {
      "jp": "「事業用電気工作物（小規模事業用電気工作物を除く）」の運転を管理する電子計算機は、当該電気工作物が人体に危害を及ぼし、又は物件に損傷を与えるおそれ及び一般送配電事業又は配電事業に係る電気の供給に著しい支障を及ぼすおそれがないよう、サイバーセキュリティ※1を確保しなければなりません。",
      "vi": "Máy tính quản lý vận hành công trình điện loại 事業用, trừ loại quy mô nhỏ, phải bảo đảm an ninh mạng (chú thích 1) để công trình không có nguy cơ gây hại cho người, làm hư hại tài sản hoặc gây gián đoạn nghiêm trọng việc cấp điện trong hoạt động truyền tải–phân phối chung hoặc phân phối điện."
    },
    {
      "jp": "練習問題01　過電流からの保護対策",
      "vi": "Bài luyện 01 · Biện pháp bảo vệ quá dòng.",
      "note": "",
      "heading": true
    },
    {
      "jp": "（ア）の必要な箇所には、過電流による（イ）から電線及び電気機械器具を保護し、かつ、（ウ）の発生を防止できるよう、過電流遮断器を施設しなければならない。",
      "vi": "Điền từ: tại các vị trí cần thiết trên (ア), phải lắp thiết bị cắt quá dòng để bảo vệ dây và thiết bị khỏi (イ) do quá dòng và phòng (ウ).",
      "note": ""
    },
    {
      "jp": "解説　過電流遮断器は、電路に過電流（短絡電流や過負荷電流）が生じたときに自動的に電路を遮断する装置です。高圧及び特別高圧の電路では各種遮断器や高圧ヒューズなどがあり、低圧電路では配線用遮断器や低圧ヒューズなどがあります。",
      "vi": "Lời giải. Thiết bị cắt quá dòng tự động ngắt mạch khi có dòng ngắn mạch hoặc quá tải. Mạch cao áp và siêu cao áp dùng các loại máy cắt, cầu chì cao áp, v.v. Mạch hạ áp dùng áp-tô-mát bảo vệ dây, cầu chì hạ áp, v.v."
    },
    {
      "jp": "解答　（ア）**電路**　（イ）**加熱焼損**　（ウ）**火災**",
      "vi": "Đáp án. (ア) **mạch điện** · (イ) **cháy hỏng do quá nhiệt** · (ウ) **hỏa hoạn**."
    },
    {
      "jp": "※1 サイバーセキュリティ：コンピュータシステムやそのソフトウェア、ネットワーク、データなどを、外部からの攻撃や脅威から保護すること。",
      "vi": "Chú thích 1. An ninh mạng là bảo vệ hệ thống máy tính, phần mềm, mạng và dữ liệu trước các cuộc tấn công và mối đe dọa từ bên ngoài."
    }
  ],
  "477": [
    {
      "jp": "2-7 電気使用場所の施設　といえば　幹線、分岐回路と保護装置、接地工事など",
      "vi": "2-7 Hệ thống điện tại nơi sử dụng: dây trục, mạch nhánh, bảo vệ và nối đất.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧電路中の過電流遮断器の施設",
      "vi": "Thiết bị cắt quá dòng trên đường dây hạ áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧電路中の過電流遮断器にはヒューズ、配線用遮断器などがあり、電路内に生じた過負荷や短絡事故のとき動作して、電路の保護と事故の波及拡大を防止するために設けます。",
      "vi": "Các cầu chì, aptomat phân phối cắt khi quá tải hoặc ngắn mạch để bảo vệ mạch và tránh sự cố lan rộng.",
      "note": ""
    },
    {
      "jp": "低圧ヒューズの適合条件",
      "vi": "Điều kiện phù hợp của cầu chì hạ áp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧ヒューズの適合条件は、①定格電流の**1.1倍**の電流に**耐える**こと、②表2-7-1の左欄の定格電流の区分に応じ、定格電流の**1.6倍**及び**2倍**の電流を通じた場合において、右欄の時間内に溶断すること、が必要です。",
      "vi": "Cầu chì hạ áp phải ① **chịu được** dòng bằng **1,1 lần** dòng định mức, và ② nóng chảy trong thời gian ở bảng 2-7-1 khi cho dòng bằng **1,6 lần** hoặc **2 lần** định mức đi qua, tùy dải dòng định mức."
    },
    {
      "jp": "表2-7-1 低圧電路に使用するヒューズの溶断時間",
      "vi": "Bảng 2-7-1 · Thời gian nóng chảy của cầu chì trong mạch hạ áp",
      "heading": true,
      "table": {
        "jp": [
          "定格電流の区分",
          "定格電流の1.6倍の電流を通じた場合",
          "定格電流の2倍の電流を通じた場合"
        ],
        "vi": [
          "Dòng định mức",
          "Ở 1,6 lần dòng định mức",
          "Ở 2 lần dòng định mức"
        ],
        "rows": [
          [
            "30 A以下",
            "Đến 30 A",
            "**60 分**",
            "**2 分**"
          ],
          [
            "30 Aを超え60 A以下",
            "Trên 30 A đến 60 A",
            "**60 分**",
            "**4 分**"
          ],
          [
            "60 Aを超え100 A以下",
            "Trên 60 A đến 100 A",
            "120 分",
            "6 分"
          ]
        ],
        "rowsVi": [
          [
            "30 A以下",
            "Đến 30 A",
            "**60 phút**",
            "**2 phút**"
          ],
          [
            "30 Aを超え60 A以下",
            "Trên 30 A đến 60 A",
            "**60 phút**",
            "**4 phút**"
          ],
          [
            "60 Aを超え100 A以下",
            "Trên 60 A đến 100 A",
            "120 phút",
            "6 phút"
          ]
        ]
      }
    },
    {
      "jp": "配線用遮断器の適合条件",
      "vi": "Điều kiện phù hợp của aptomat phân phối.",
      "note": "",
      "heading": true
    },
    {
      "jp": "配線用遮断器の適合条件は、①定格電流の**1倍**の電流で自動的に**動作しない**こと、②表2-7-2の左欄の定格電流の区分に応じ、定格電流の**1.25倍**及び**2倍**の電流を通じた場合において、右欄の時間内に自動的に動作すること、が必要です。",
      "vi": "Áp-tô-mát bảo vệ dây phải ① **không tự tác động** ở dòng bằng **1 lần** dòng định mức, và ② tự tác động trong thời gian ở bảng 2-7-2 khi dòng bằng **1,25 lần** hoặc **2 lần** định mức, tùy dải dòng định mức."
    },
    {
      "jp": "表2-7-2 低圧電路に使用する配線用遮断器の動作時間",
      "vi": "Bảng 2-7-2 · Thời gian tác động của áp-tô-mát bảo vệ dây trong mạch hạ áp",
      "heading": true,
      "table": {
        "jp": [
          "定格電流の区分",
          "定格電流の1.25倍の電流を通じた場合",
          "定格電流の2倍の電流を通じた場合"
        ],
        "vi": [
          "Dòng định mức",
          "Ở 1,25 lần dòng định mức",
          "Ở 2 lần dòng định mức"
        ],
        "rows": [
          [
            "30 A以下",
            "Đến 30 A",
            "**60 分**",
            "**2 分**"
          ],
          [
            "30 Aを超え50 A以下",
            "Trên 30 A đến 50 A",
            "**60 分**",
            "**4 分**"
          ],
          [
            "50 Aを超え100 A以下",
            "Trên 50 A đến 100 A",
            "120 分",
            "6 分"
          ]
        ],
        "rowsVi": [
          [
            "30 A以下",
            "Đến 30 A",
            "**60 phút**",
            "**2 phút**"
          ],
          [
            "30 Aを超え50 A以下",
            "Trên 30 A đến 50 A",
            "**60 phút**",
            "**4 phút**"
          ],
          [
            "50 Aを超え100 A以下",
            "Trên 50 A đến 100 A",
            "120 phút",
            "6 phút"
          ]
        ]
      }
    }
  ],
  "478": [
    {
      "jp": "POINT　ヒューズ といえば **1.1倍**に耐え、**1.6倍**で**60分**以内に溶断、**2倍**で**2分**以内に溶断（30 A以下）",
      "vi": "Ghi nhớ. Cầu chì đến 30 A chịu **1,1 lần** dòng định mức, nóng chảy trong **60 phút** ở **1,6 lần** và trong **2 phút** ở **2 lần** định mức."
    },
    {
      "jp": "配線用遮断器 といえば **1倍**に耐え、**1.25倍**で**60分**以内に遮断、**2倍**で**2分**以内に遮断（30 A以下）",
      "vi": "Áp-tô-mát đến 30 A chịu **1 lần** dòng định mức, cắt trong **60 phút** ở **1,25 lần** và trong **2 phút** ở **2 lần** định mức."
    },
    {
      "jp": "幹線の電線の太さ、許容電流 I の計算",
      "vi": "Tính tiết diện và dòng cho phép I của dây trục.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧屋内幹線は、次のように施設します。",
      "vi": "Dây trục hạ áp trong nhà được lắp theo các điều kiện sau."
    },
    {
      "jp": "①低圧屋内幹線は、損傷を受けるおそれがない場所に施設します。",
      "vi": "① Lắp dây trục hạ áp trong nhà ở nơi không có nguy cơ bị hư hỏng.",
      "note": ""
    },
    {
      "jp": "②電線は、使用機械器具の定格電流の合計以上の**許容電流**のあるものを使用します。",
      "vi": "② Dùng dây có **dòng điện cho phép** ít nhất bằng tổng dòng định mức của thiết bị sử dụng."
    },
    {
      "jp": "また、電動機等の定格電流の合計を Iₘ［A］、ヒータなど他の電気機械器具の定格電流の合計を Iₕ［A］としたとき、幹線の許容電流 I［A］は次のように求めます。",
      "vi": "Gọi Iₘ (A) là tổng dòng định mức của động cơ và thiết bị cùng nhóm, Iₕ (A) là tổng dòng định mức của thiết bị điện khác như bộ gia nhiệt. Tính dòng cho phép I (A) của dây trục như sau."
    },
    {
      "jp": "幹線に用いる電線の許容電流の求め方",
      "vi": "Tính dòng điện cho phép của dây trục",
      "heading": true
    },
    {
      "jp": "① Iₘ ≤ Iₕ の場合（電動機等の定格電流の合計が他の電気機械器具の定格電流の合計以下の場合）",
      "vi": "① Nếu tổng dòng định mức động cơ và thiết bị cùng nhóm không vượt tổng dòng định mức các thiết bị điện khác.",
      "equations": [
        [
          "I = Iₘ + Iₕ [A]"
        ]
      ]
    },
    {
      "jp": "② Iₘ > Iₕ の場合（電動機等の定格電流の合計が他の電気機械器具の定格電流の合計よりも大きい場合）\n(i) 電動機等の定格電流の合計 Iₘ が50 A以下の場合",
      "vi": "② Nếu tổng dòng định mức động cơ và thiết bị cùng nhóm lớn hơn tổng dòng của thiết bị điện khác.\n(i) Khi Iₘ không quá 50 A.",
      "equations": [
        [
          "I ≥ 1.25 × Iₘ + Iₕ [A]"
        ]
      ],
      "equationsVi": [
        [
          "I ≥ 1,25 × Iₘ + Iₕ [A]"
        ]
      ]
    },
    {
      "jp": "(ii) 電動機等の定格電流の合計 Iₘ が50 Aを超える場合",
      "vi": "(ii) Khi Iₘ trên 50 A.",
      "equations": [
        [
          "I ≥ 1.1 × Iₘ + Iₕ [A]"
        ]
      ],
      "equationsVi": [
        [
          "I ≥ 1,1 × Iₘ + Iₕ [A]"
        ]
      ]
    },
    {
      "jp": "需要率、力率等が明らかな場合は、補正した負荷電流値以上の許容電流の電線を使用することができます。",
      "vi": "Khi biết hệ số nhu cầu/công suất có thể xác định dòng sau điều chỉnh để chọn dây.",
      "note": ""
    },
    {
      "diagram": "lawFeederAmpacity478"
    },
    {
      "jp": "幹線を保護する過電流遮断器の定格値 I_B の計算",
      "vi": "Tính dòng định mức I_B của bộ cắt bảo vệ dây trục.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧屋内幹線の電源側電路には、幹線を保護する過電流遮断器を施設します。電動機等の定格電流の合計を Iₘ［A］、ヒータなど他の電気機械器具の定格電流の合計を Iₕ［A］としたとき、過電流遮断器の定格値 Iᵦ［A］は、次のように求めます。",
      "vi": "Lắp thiết bị cắt quá dòng phía nguồn để bảo vệ dây trục hạ áp trong nhà. Gọi Iₘ (A) là tổng dòng định mức của động cơ và thiết bị cùng nhóm, Iₕ (A) là tổng dòng định mức của thiết bị điện khác như bộ gia nhiệt. Cách xác định dòng định mức Iᵦ của thiết bị cắt xem trang 479."
    }
  ],
  "479": [
    {
      "jp": "過電流遮断器の定格値の求め方",
      "vi": "Cách xác định định mức bộ cắt quá dòng.",
      "note": "",
      "heading": true
    },
    {
      "jp": "①電動機等が接続されない場合：過電流遮断器の定格値 Iᵦ は**幹線の許容電流**以下。",
      "vi": "① Khi không nối động cơ hoặc thiết bị cùng nhóm, dòng định mức Iᵦ của thiết bị cắt không vượt **dòng cho phép của dây trục**.",
      "equations": [
        [
          "Iᵦ ≤ Iₐ [A]"
        ]
      ]
    },
    {
      "jp": "②電動機等が接続されている場合：過電流遮断器の定格値 Iᵦ は**3 × Iₘ + Iₕ**以下。",
      "vi": "② Khi có nối động cơ hoặc thiết bị cùng nhóm, dòng định mức Iᵦ của thiết bị cắt không vượt **3 × Iₘ + Iₕ**.",
      "equations": [
        [
          "Iᵦ ≤ 3 × Iₘ + Iₕ [A]"
        ]
      ]
    },
    {
      "jp": "注）Iᵦの値が幹線の許容電流を**2.5倍**した値を超える場合は、その許容電流を**2.5倍**した値以下のものを使用します。",
      "vi": "Chú thích. Nếu Iᵦ tính ra vượt **2,5 lần** dòng cho phép của dây trục, chọn thiết bị có định mức không quá **2,5 lần** dòng cho phép."
    },
    {
      "diagram": "lawFeederBreaker479"
    },
    {
      "jp": "電動機等がある場合の二つの上限",
      "vi": "Hai giới hạn khi có động cơ hoặc thiết bị cùng nhóm.",
      "note": "Iₐ là dòng cho phép của dây trục đã chọn. Khi có động cơ, định mức thiết bị cắt phải đáp ứng cả hai giới hạn.",
      "equations": [
        [
          "Iᵦ ≤ min(3 × Iₘ + Iₕ, 2.5 × Iₐ) [A]"
        ]
      ],
      "equationsVi": [
        [
          "Iᵦ ≤ min(3 × Iₘ + Iₕ, 2,5 × Iₐ) [A]"
        ]
      ]
    },
    {
      "jp": "POINT　幹線の太さ（許容電流）の下限 といえば\n・電動機電流の合計 Iₘ が50 A以下のときは、Iₘ を**1.25倍**し他の電流の合計 Iₕ を加える\n・電動機電流の合計 Iₘ が50 Aを超えたら、Iₘ を**1.1倍**し他の電流の合計 Iₕ を加える\n過電流遮断器の定格 といえば 電動機電流の合計 Iₘ を**3倍**し他の電流の合計 Iₕ を加えた値で決める",
      "vi": "Ghi nhớ. Với Iₘ lớn hơn Iₕ, để chọn dây trục, nhân Iₘ với **1,25 lần** nếu Iₘ đến 50 A hoặc **1,1 lần** nếu Iₘ trên 50 A, rồi cộng Iₕ. Để tính giới hạn định mức thiết bị cắt, lấy **3 lần** Iₘ cộng Iₕ.",
      "note": "Hai hệ số 1,25 và 1,1 thuộc phần chọn dây. Hệ số 3 thuộc phần chọn thiết bị cắt, vẫn phải xét giới hạn 2,5 × Iₐ."
    },
    {
      "jp": "分岐回路の種類とコンセントの配線",
      "vi": "Phân loại mạch nhánh và chọn dây/ổ cắm.",
      "note": "",
      "heading": true
    },
    {
      "jp": "分岐回路の過電流遮断器の定格、コンセントの定格、電線の太さの組合せは次のように規定されています。",
      "vi": "Bảng dưới đây quy định tổ hợp dòng định mức thiết bị cắt quá dòng, dòng định mức ổ cắm và kích thước dây cho mạch nhánh."
    },
    {
      "jp": "表2-7-3 分岐回路の種類と過電流遮断器・コンセントの定格電流及び電線の最小太さ",
      "vi": "Bảng 2-7-3 · Loại mạch nhánh, định mức thiết bị cắt và ổ cắm, kích thước dây tối thiểu",
      "heading": true,
      "table": {
        "jp": [
          "分岐回路の種類",
          "過電流遮断器の定格電流",
          "コンセントの定格電流",
          "軟銅線の最小太さ",
          "左と同等の太さ"
        ],
        "vi": [
          "Loại mạch nhánh",
          "Định mức thiết bị cắt",
          "Định mức ổ cắm",
          "Đường kính tối thiểu dây đồng mềm",
          "Tiết diện tương đương"
        ],
        "rows": [
          [
            "15 A分岐回路",
            "Mạch nhánh 15 A",
            "**15** A",
            "**15** A以下",
            "直径**1.6** mm",
            "断面積2 mm²"
          ],
          [
            "20 A分岐回路",
            "Mạch nhánh 20 A",
            "**20** A",
            "**20** A",
            "直径**2.0** mm",
            "断面積3.5 mm²"
          ],
          [
            "30 A分岐回路",
            "Mạch nhánh 30 A",
            "**30** A",
            "**20～30** A",
            "直径**2.6** mm",
            "断面積5.5 mm²"
          ],
          [
            "40 A分岐回路",
            "Mạch nhánh 40 A",
            "**40** A",
            "**30～40** A",
            "直径3.2 mm",
            "断面積**8** mm²"
          ],
          [
            "50 A分岐回路",
            "Mạch nhánh 50 A",
            "**50** A",
            "**40～50** A",
            "―",
            "断面積**14** mm²"
          ],
          [
            "20 A配線用遮断器分岐回路",
            "Mạch nhánh dùng áp-tô-mát 20 A",
            "**20** A",
            "**20** A以下",
            "直径**1.6** mm",
            "断面積2 mm²"
          ]
        ],
        "rowsVi": [
          [
            "15 A分岐回路",
            "Mạch nhánh 15 A",
            "**15** A",
            "Đến **15** A",
            "**1,6** mm",
            "2 mm²"
          ],
          [
            "20 A分岐回路",
            "Mạch nhánh 20 A",
            "**20** A",
            "**20** A",
            "**2,0** mm",
            "3,5 mm²"
          ],
          [
            "30 A分岐回路",
            "Mạch nhánh 30 A",
            "**30** A",
            "**20–30** A",
            "**2,6** mm",
            "5,5 mm²"
          ],
          [
            "40 A分岐回路",
            "Mạch nhánh 40 A",
            "**40** A",
            "**30–40** A",
            "3,2 mm",
            "**8** mm²"
          ],
          [
            "50 A分岐回路",
            "Mạch nhánh 50 A",
            "**50** A",
            "**40–50** A",
            "—",
            "**14** mm²"
          ],
          [
            "20 A配線用遮断器分岐回路",
            "Mạch nhánh dùng áp-tô-mát 20 A",
            "**20** A",
            "Đến **20** A",
            "**1,6** mm",
            "2 mm²"
          ]
        ]
      }
    }
  ],
  "480": [
    {
      "jp": "分岐回路の過電流遮断器の施設",
      "vi": "Vị trí lắp bộ cắt quá dòng cho mạch nhánh.",
      "note": "",
      "heading": true
    },
    {
      "jp": "分岐回路には、分岐点から原則として**3 m**以内に開閉器及び過電流遮断器を施設しなければなりません。",
      "vi": "Theo nguyên tắc, lắp thiết bị đóng cắt và thiết bị cắt quá dòng trong phạm vi **3 m** từ điểm rẽ nhánh."
    },
    {
      "jp": "ただし、分岐回路の許容電流が過電流遮断器の定格電流の**55 %**以上の場合は、8 mを超えて（長さの制限はなし）施設できます。",
      "vi": "Nếu dòng cho phép của dây nhánh đạt ít nhất **55%** định mức thiết bị cắt quá dòng bảo vệ dây trục, có thể lắp xa hơn 8 m (không giới hạn chiều dài)."
    },
    {
      "jp": "また**35 %**以上の場合は、**8 m**以内に施設します。",
      "vi": "Nếu đạt từ **35%** đến dưới 55%, lắp trong phạm vi **8 m**."
    },
    {
      "jp": "幹線から分岐するときの過電流遮断器の位置（距離を決める）は、図2-7-3のようになります。",
      "vi": "Hình 2-7-3 minh họa khoảng cách từ điểm rẽ đến thiết bị cắt quá dòng của mạch nhánh."
    },
    {
      "diagram": "lawBranchBreaker480"
    },
    {
      "jp": "POINT　分岐回路の過電流遮断器の位置 といえば\n・分岐した電線の許容電流が過電流遮断器の定格電流 Iᵦ の**55 %**以上あれば、Bの位置は**制限なし**\n・**35 %**以上55 %未満では**8 m**以内、**35 %**未満では**3 m**以内",
      "vi": "Ghi nhớ. Nếu dòng cho phép của dây nhánh đạt ít nhất **55%** định mức Iᵦ của thiết bị cắt dây trục, **không giới hạn** vị trí lắp thiết bị cắt nhánh. Từ **35%** đến dưới 55%, lắp trong **8 m**. Dưới **35%**, lắp trong **3 m**."
    },
    {
      "jp": "低圧屋内電路の引込口、引出口の開閉器",
      "vi": "Bộ đóng cắt ở đầu vào/ra đường dây hạ áp trong nhà.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧屋内電路には、引込口に近い箇所にあって、容易に開閉することができる箇所に開閉器を施設しなければなりません。",
      "vi": "Lắp công tắc dễ thao tác gần chỗ dây dẫn vào.",
      "note": ""
    },
    {
      "jp": "ただし、図2-7-4のように長さが15 m以下で、他の屋内電路（母屋など）で15 A以下の過電流遮断器又は15 Aを超え20 A以下の配線用遮断器に接続し、保護されている屋内電路（小屋など）の場合は省略できます。",
      "vi": "Có thể bỏ thiết bị đóng cắt ở mạch trong nhà phụ nếu dây dài không quá 15 m và mạch được nối với, đồng thời được bảo vệ bởi, thiết bị cắt quá dòng đến 15 A hoặc áp-tô-mát trên 15 A đến 20 A ở mạch trong nhà khác (như nhà chính). Xem hình 2-7-4."
    },
    {
      "jp": "屋外灯の場合は、長さが8 m以下の場合、引出口の開閉器は省略できます。",
      "vi": "Với đèn ngoài trời, chiều dài ≤8 m có thể miễn công tắc tại đầu ra.",
      "note": ""
    },
    {
      "diagram": "lawIndoorSwitch480"
    }
  ],
  "481": [
    {
      "jp": "POINT　開閉器の省略 といえば 長さ**15 m**以下の引込口、**8 m**以下の**屋外灯**引出口",
      "vi": "Ghi nhớ. Có thể bỏ thiết bị đóng cắt ở điểm dây vào nếu dài không quá **15 m**, hoặc ở điểm dây ra cấp **đèn ngoài trời** nếu dài không quá **8 m**, theo các điều kiện trang 480."
    },
    {
      "jp": "電動機の過負荷保護装置の施設",
      "vi": "Lắp thiết bị chống quá tải động cơ.",
      "note": "",
      "heading": true
    },
    {
      "jp": "屋内に施設する電動機には、電動機が焼損するおそれがある過電流を生じた場合に自動的にこれを阻止し、又はこれを警報する装置を設けなければなりません。",
      "vi": "Động cơ đặt trong nhà cần thiết bị ngăn hoặc báo quá dòng có nguy cơ cháy cuộn dây.",
      "note": ""
    },
    {
      "jp": "過負荷保護装置を省略できる条件",
      "vi": "Điều kiện miễn bộ bảo vệ quá tải.",
      "note": "",
      "heading": true
    },
    {
      "jp": "①**0.2 kW**以下の電動機の場合",
      "vi": "① Động cơ ≤**0,2 kW**.",
      "note": ""
    },
    {
      "jp": "②運転中常時**取扱者**が監視できる場合",
      "vi": "② **Người phụ trách vận hành** có thể giám sát liên tục khi máy hoạt động."
    },
    {
      "jp": "③過電流の生じるおそれがない場合",
      "vi": "③ Không có nguy cơ phát sinh quá dòng.",
      "note": ""
    },
    {
      "jp": "④電動機が単相のものであって、その電源側電路に施設する過電流遮断器の定格電流が15 A（配線用遮断器にあっては20 A）以下の場合",
      "vi": "④ Động cơ một pha được bảo vệ phía nguồn bằng cầu chì ≤15 A hoặc aptomat ≤20 A.",
      "note": ""
    },
    {
      "jp": "POINT　電動機の過負荷保護装置を省略できる条件 といえば **20 A**以下の配線用遮断器で保護されている場合、**0.2 kW**以下の電動機、他",
      "vi": "Ghi nhớ. Có thể miễn bảo vệ quá tải cho động cơ một pha được bảo vệ bằng áp-tô-mát không quá **20 A**, động cơ đến **0,2 kW**, và các trường hợp khác đã nêu."
    },
    {
      "jp": "屋内電路に対する対地電圧の制限",
      "vi": "Giới hạn điện áp so với đất trong mạch điện nhà ở.",
      "note": "",
      "heading": true
    },
    {
      "jp": "住宅の屋内電路の対地電圧は**150 V**以下と制限されていますが、**2 kW**以上の電気機械器具を施設する場合は対地電圧を**300 V**以下にできます（**三相200 Vの機器も可能**）。その場合は専用の開閉器、過電流遮断器、漏電遮断器を施設し、**屋内配線**と**直接接続**する必要があります（コンセントは使用できません）。",
      "vi": "Điện áp so với đất của mạch trong nhà ở không quá **150 V**. Khi lắp thiết bị điện từ **2 kW** trở lên, có thể dùng điện áp so với đất đến **300 V**, kể cả **thiết bị ba pha 200 V**. Khi đó phải có thiết bị đóng cắt riêng, bảo vệ quá dòng và chống dòng rò, đồng thời **đấu trực tiếp** với **dây trong nhà**. Không dùng ổ cắm."
    },
    {
      "jp": "POINT　対地電圧の制限 といえば 住宅**150 V**以下、**2 kW**以上の電気機械器具は**300 V**以下",
      "vi": "Ghi nhớ. Nhà ở: điện áp so với đất đến **150 V**. Với thiết bị điện từ **2 kW** trở lên: có thể đến **300 V** theo các điều kiện trên."
    }
  ],
  "482": [
    {
      "jp": "電線の接続法",
      "vi": "Phương pháp nối dây dẫn điện.",
      "note": "",
      "heading": true
    },
    {
      "jp": "電線の接続について次のように定められています。",
      "vi": "Việc nối dây dẫn phải theo các yêu cầu dưới đây."
    },
    {
      "jp": "①電線の電気**抵抗を増加させない**こと。",
      "vi": "① **Không làm tăng điện trở** của dây."
    },
    {
      "jp": "②電線の引張強さを**20 %**以上減少させないこと。",
      "vi": "② Không làm sức chịu kéo của dây giảm từ **20%** trở lên."
    },
    {
      "jp": "③接続は、**接続器具**（スリーブ、電線コネクタなど）を用いるか直接接続して**ろう付け**（半田付け）する。",
      "vi": "③ Dùng **phụ kiện nối dây** (ống nối, đầu nối dây hoặc tương tự) hoặc nối trực tiếp và **hàn** (hàn thiếc)."
    },
    {
      "jp": "④接続部に接続器を使用する場合を除き、もとの絶縁物と同等以上の絶縁効力のあるもので被覆する。",
      "vi": "④ Trừ trường hợp dùng phụ kiện nối, phải bọc lại với khả năng cách điện ít nhất bằng lớp cũ.",
      "note": ""
    },
    {
      "jp": "⑤コード相互、キャブタイヤケーブル相互の接続は、コード接続器、接続箱を用いる。",
      "vi": "⑤ Nối các dây mềm/cord, cáp cabtyre bằng phụ kiện/hộp nối phù hợp.",
      "note": ""
    },
    {
      "jp": "⑥導体にアルミニウムを使用する電線と銅を使用する電線とを接続するなど、電気化学的性質の異なる導体を接続する場合には、接続部分に電気的腐食が生じないようにする。",
      "vi": "⑥ Khi nối nhôm với đồng hoặc các vật liệu khác nhau phải chống ăn mòn điện hóa tại mối nối.",
      "note": ""
    },
    {
      "jp": "POINT　電線の接続法 といえば **抵抗**を**増加させない**、**強度を20 %以上減少させない**、**接続器具**を用いるか**ろう付け**",
      "vi": "Ghi nhớ. **Không làm tăng** **điện trở**, **không làm giảm sức chịu kéo từ 20% trở lên**. Dùng **phụ kiện nối dây** hoặc **hàn**."
    },
    {
      "jp": "低圧屋内配線工事の種類",
      "vi": "Các loại thi công dây hạ áp trong nhà.",
      "note": "",
      "heading": true
    },
    {
      "jp": "低圧屋内配線工事として、ケーブル工事、金属管工事、合成樹脂管工事、金属可とう電線管工事、金属線ぴ工事、フロアダクト工事、金属ダクト工事、バスダクト工事、ライティングダクト工事、がいし引き工事などがあります。",
      "vi": "Thi công cáp, ống kim loại, ống nhựa, ống kim loại mềm, nẹp kim loại, floor duct, máng kim loại, busduct, lighting duct, dây trên sứ.",
      "note": ""
    },
    {
      "jp": "ケーブル工事",
      "vi": "Thi công bằng cáp.",
      "note": "",
      "heading": true
    },
    {
      "jp": "**ケーブル工事**はケーブル又はキャブタイヤケーブルを使用し、電線を造営材に直接取り付けることができ、工事が簡単にできます。",
      "vi": "**Thi công bằng cáp** dùng cáp hoặc cáp mềm cabtyre. Có thể gắn dây trực tiếp vào kết cấu nên thi công đơn giản."
    },
    {
      "jp": "支持点間距離は、**2 m**以下（造営材の下面又は側面に沿って取り付ける場合）、**6 m**以下（接触防護措置を施した場所において垂直に取り付ける場合）、キャブタイヤケーブルの場合は**1 m**以下です。",
      "vi": "Khoảng cách giữa các điểm đỡ không quá **2 m** khi lắp dọc mặt dưới hoặc mặt bên của kết cấu, không quá **6 m** khi lắp thẳng đứng tại nơi có biện pháp chống tiếp xúc, và không quá **1 m** với cáp mềm cabtyre."
    },
    {
      "jp": "また、曲げ半径はケーブル外径の**6倍**以上です。",
      "vi": "Bán kính uốn ít nhất **6 lần** đường kính ngoài của cáp."
    },
    {
      "jp": "重量物の圧力又は機械的衝撃を受けるおそれがある箇所に施設するケーブルには、防護装置を設けます。",
      "vi": "Cáp lắp ở nơi có nguy cơ chịu áp lực vật nặng hoặc va đập cơ học phải có thiết bị bảo vệ."
    },
    {
      "jp": "金属管工事",
      "vi": "Thi công ống kim loại.",
      "note": "",
      "heading": true
    },
    {
      "jp": "**金属管工事**は、金属管を造営材に直接取り付けるか、コンクリートに埋め込んで管内に電線を通して施設するものです。",
      "vi": "**Thi công ống kim loại** là gắn ống trực tiếp lên kết cấu hoặc chôn ống trong bê tông, rồi luồn dây qua ống."
    },
    {
      "jp": "使用電線にはより線を用います、銅線の場合3.2 mm以下であれば単線も使用できます。",
      "vi": "Dùng dây bện. Với dây đồng có đường kính đến 3,2 mm, cũng có thể dùng dây một sợi."
    },
    {
      "jp": "管の曲げ半径は管内径の**6倍**以上で、管の支持点間距離は**2 m**以下とすることが望ましいです（内線規程）。",
      "vi": "Theo quy định đi dây trong công trình được sách dẫn, nên giữ bán kính uốn ống ít nhất **6 lần** đường kính trong và khoảng cách điểm đỡ ống không quá **2 m**."
    }
  ],
  "483": [
    {
      "jp": "金属管には、**D種**接地工事（300 V以下）、**C種**接地工事（300 V超過の場合）を施します。",
      "vi": "Ống kim loại dùng nối đất **loại D** khi điện áp đến 300 V, và **loại C** khi trên 300 V."
    },
    {
      "jp": "次の場合は、接地工事を省略してもよいことになっています。",
      "vi": "Có thể miễn nối đất trong các trường hợp dưới đây."
    },
    {
      "jp": "①管の長さが**4 m**以下のものを乾燥した場所に施設する場合",
      "vi": "① Ống dài đến **4 m** lắp ở nơi khô ráo."
    },
    {
      "jp": "②対地電圧が150 V以下で、管の長さが**8 m**以下のものに簡易接触防護措置を施すとき、又は乾燥した場所に施設する場合",
      "vi": "② Điện áp so với đất đến 150 V, ống dài đến **8 m**, đồng thời áp dụng biện pháp bảo vệ đơn giản chống tiếp xúc hoặc lắp ở nơi khô ráo."
    },
    {
      "jp": "金属管工事は、すべての場所での施工ができます。ただし、木造の屋側電線路は、禁止されています。",
      "vi": "Có thể thi công bằng ống kim loại ở mọi vị trí, trừ đường dây dọc mặt ngoài của công trình bằng gỗ."
    },
    {
      "jp": "合成樹脂管工事",
      "vi": "Thi công ống nhựa tổng hợp",
      "heading": true
    },
    {
      "jp": "**合成樹脂管工事**では、管の曲げ半径は管内径の**6倍**以上で、管の支持点間距離は**1.5 m**以下です。合成樹脂製電線管は、硬質ビニル管、PF管、CD管があります。PF管（プラスチックフレキシブル管）、CD管（コンバインドダクト管）は曲げが自由な可とう管です。",
      "vi": "Khi **thi công ống nhựa tổng hợp**, bán kính uốn ít nhất **6 lần** đường kính trong và khoảng cách điểm đỡ không quá **1,5 m**. Ống luồn dây bằng nhựa tổng hợp gồm ống vinyl cứng, ống PF và ống CD. PF và CD là loại ống mềm có thể uốn linh hoạt."
    },
    {
      "jp": "**PF管**は、自己消火性（耐熱性）のポリエチレンを用いたもので、露出工事、コンクリート埋め込み工事のいずれでも使用できます。**CD管**はオレンジ色をしており、原則としてコンクリートに直接埋め込んだり、地中配線のケーブルの保護用などに使用されます。",
      "vi": "**Ống PF** dùng polyetylen có tính tự tắt (chịu nhiệt) và dùng được cho lắp nổi hoặc chôn trong bê tông. **Ống CD** màu cam, về nguyên tắc dùng để chôn trực tiếp trong bê tông, bảo vệ cáp ngầm hoặc mục đích tương tự."
    },
    {
      "jp": "合成樹脂管工事（CD管は除く）は、すべての場所での施工ができます。ただし、爆燃性粉じんや可燃性ガスのある場所では施工できません。",
      "vi": "Thi công bằng ống nhựa tổng hợp (trừ ống CD) được thực hiện ở mọi vị trí, trừ nơi có bụi dễ cháy nổ hoặc khí dễ cháy."
    },
    {
      "jp": "金属可とう電線管工事",
      "vi": "Thi công ống luồn dây kim loại mềm",
      "heading": true
    },
    {
      "jp": "**金属可とう電線管工事**には、二種金属製可とう電線管（プリカチューブ）と、一種金属製可とう電線管（フレキシブルコンジット）があり、可とう性があります。",
      "vi": "**Thi công ống luồn dây kim loại mềm** có hai loại ống có thể uốn: loại II (Plica tube) và loại I (flexible conduit)."
    },
    {
      "jp": "プリカチューブは、金属管工事と同じ場所に施工できます。フレキシブルコンジットは、300 V以下の乾燥した展開場所、点検できる隠ぺい場所に施工できます。",
      "vi": "Ống Plica dùng được ở các nơi được phép thi công ống kim loại. Với điện áp đến 300 V, ống flexible conduit có thể lắp ở nơi khô ráo và lộ thiên, hoặc ở chỗ lắp kín kiểm tra được."
    },
    {
      "jp": "原則として**D種**接地工事（300 V以下）、**C種**接地工事（300 V超過の場合）を施します。",
      "vi": "Về nguyên tắc, nối đất **loại D** khi điện áp đến 300 V và **loại C** khi trên 300 V."
    },
    {
      "jp": "次の場合は、接地工事を省略又は緩和できます。\n①管の長さが**4 m**以下の場合 D種接地工事を省略可能\n②接触防護措置を施す場合は、C種をD種に緩和可能",
      "vi": "Có thể miễn hoặc giảm yêu cầu nối đất như sau.\n① Ống dài đến **4 m** có thể miễn nối đất loại D.\n② Nếu có biện pháp bảo vệ chống tiếp xúc, có thể dùng loại D thay loại C."
    },
    {
      "jp": "金属線ぴ工事",
      "vi": "Thi công nẹp kim loại",
      "heading": true
    },
    {
      "jp": "**300 V**以下の展開、乾燥した場所、又は点検できる隠ぺい、乾燥した場所に施工できます。",
      "vi": "Với điện áp đến **300 V**, có thể lắp ở nơi khô ráo, đi dây lộ thiên hoặc đi dây kín nhưng có thể kiểm tra."
    },
    {
      "jp": "金属線ぴには、**D種**接地工事を施します。接地工事の省略規定は金属管工事に準じます。",
      "vi": "Nẹp kim loại dùng nối đất **loại D**. Trường hợp miễn nối đất áp dụng như đối với ống kim loại."
    }
  ],
  "484": [
    {
      "jp": "各種ダクト工事",
      "vi": "Các loại thi công bằng máng dẫn điện.",
      "heading": true
    },
    {
      "jp": "ダクト工事には、金属ダクト工事、バスダクト工事、フロアダクト工事、ライティングダクト工事などがあります。",
      "vi": "Thi công bằng máng gồm máng kim loại, máng thanh cái, máng sàn và ray cấp điện chiếu sáng, v.v."
    },
    {
      "jp": "**金属ダクト工事**は、太い電線を多数集中して施設する場合、配線をダクトに収めて施設する工事方法です。",
      "vi": "**Thi công máng kim loại** là đặt dây trong máng khi cần lắp tập trung nhiều dây dẫn cỡ lớn."
    },
    {
      "jp": "**バスダクト工事**は、金属製のダクトの中に銅帯やアルミ帯の導体を絶縁物で固定し、大電流を流すことができるようにしたものです。",
      "vi": "**Thi công máng thanh cái** dùng chất cách điện cố định các thanh dẫn bằng đồng hoặc nhôm trong máng kim loại để dẫn dòng lớn."
    },
    {
      "jp": "**フロアダクト工事**は、コンクリート建物の床下にダクトを施設し、床面に受け口を設けて配線する方法です。受け口にコンセントなどを取り付けて、床から電源をとることができるようにするものです。",
      "vi": "**Thi công máng sàn** là lắp máng dưới sàn công trình bê tông, bố trí hộp trên mặt sàn để đi dây. Có thể lắp ổ cắm hoặc thiết bị tương tự tại hộp để lấy điện từ sàn."
    },
    {
      "jp": "**ライティングダクト工事**は、照明器具などを、専用プラグを介してダクトのどこからでも自由に接続できるようにしたものです。開口部は下に向けて施設し、終端は閉そくします。また、造営材を貫通して施設することはできません。",
      "vi": "**Thi công ray cấp điện chiếu sáng** cho phép đấu thiết bị chiếu sáng và thiết bị tương tự vào bất cứ vị trí nào trên ray bằng đầu cắm chuyên dụng. Lắp mặt hở hướng xuống, bịt kín đầu ray và không lắp xuyên qua kết cấu."
    },
    {
      "jp": "表2-7-4は、ダクト工事の支持点間の距離と接地工事についての表です。",
      "vi": "Bảng 2-7-4 trình bày khoảng cách điểm đỡ và nối đất đối với các loại máng."
    },
    {
      "jp": "表2-7-4 ダクト工事の施設",
      "vi": "Bảng 2-7-4 · Lắp đặt máng dẫn điện",
      "heading": true,
      "table": {
        "jp": [
          "工事の種類",
          "支持点間の距離",
          "接地工事"
        ],
        "vi": [
          "Phương pháp",
          "Khoảng cách điểm đỡ",
          "Nối đất"
        ],
        "rows": [
          [
            "金属ダクト工事",
            "Máng kim loại",
            "**3 m**以下（垂直取付は6 m以下）",
            "D種（300 V以下）、C種（300 V超）\n接触防護措置を施す場合（C種をD種に緩和できる）"
          ],
          [
            "バスダクト工事",
            "Máng thanh cái",
            "**3 m**以下（垂直取付は6 m以下）",
            "D種（300 V以下）、C種（300 V超）\n接触防護措置を施す場合（C種をD種に緩和できる）"
          ],
          [
            "ライティングダクト工事",
            "Ray cấp điện chiếu sáng",
            "**2 m**以下",
            "D種（150 V以下、4 m以下の場合D種を省略できる）"
          ],
          [
            "フロアダクト工事",
            "Máng sàn",
            "―",
            "D種"
          ]
        ],
        "rowsVi": [
          [
            "金属ダクト工事",
            "Máng kim loại",
            "Đến **3 m** (lắp đứng đến 6 m)",
            "Loại D đến 300 V, loại C trên 300 V. Có thể dùng loại D thay C nếu có biện pháp bảo vệ chống tiếp xúc."
          ],
          [
            "バスダクト工事",
            "Máng thanh cái",
            "Đến **3 m** (lắp đứng đến 6 m)",
            "Loại D đến 300 V, loại C trên 300 V. Có thể dùng loại D thay C nếu có biện pháp bảo vệ chống tiếp xúc."
          ],
          [
            "ライティングダクト工事",
            "Ray cấp điện chiếu sáng",
            "Đến **2 m**",
            "Loại D, có thể miễn nếu đến 150 V và dài đến 4 m"
          ],
          [
            "フロアダクト工事",
            "Máng sàn",
            "—",
            "Loại D"
          ]
        ]
      }
    },
    {
      "jp": "がいし引き工事",
      "vi": "Thi công dây dẫn trên sứ cách điện",
      "heading": true
    },
    {
      "jp": "がいしで電線を支持して配線するものです。展開した場所、点検できる隠ぺい場所（点検できる場所のみ）で施工できます。",
      "vi": "Dùng sứ cách điện đỡ dây dẫn. Có thể lắp ở vị trí lộ thiên hoặc vị trí đi dây kín có thể kiểm tra."
    },
    {
      "jp": "表2-7-5 がいし引き工事の施設",
      "vi": "Bảng 2-7-5 · Thi công dây dẫn trên sứ",
      "heading": true,
      "table": {
        "jp": [
          "区分",
          "300 V以下",
          "300 Vを超える場合"
        ],
        "vi": [
          "Khoảng cách",
          "Đến 300 V",
          "Trên 300 V"
        ],
        "rows": [
          [
            "電線相互の間隔",
            "Giữa các dây",
            "6 cm以上",
            "6 cm以上"
          ],
          [
            "電線と造営材との距離",
            "Giữa dây và kết cấu",
            "2.5 cm以上",
            "4.5 cm以上（乾燥した場所：2.5 cm以上）"
          ],
          [
            "電線支持点間の距離",
            "Giữa các điểm đỡ dây",
            "2 m以下",
            "2 m以下"
          ]
        ],
        "rowsVi": [
          [
            "電線相互の間隔",
            "Giữa các dây",
            "Từ 6 cm",
            "Từ 6 cm"
          ],
          [
            "電線と造営材との距離",
            "Giữa dây và kết cấu",
            "Từ 2,5 cm",
            "Từ 4,5 cm (nơi khô: từ 2,5 cm)"
          ],
          [
            "電線支持点間の距離",
            "Giữa các điểm đỡ dây",
            "Đến 2 m",
            "Đến 2 m"
          ]
        ]
      }
    }
  ],
  "485": [
    {
      "jp": "支持点間の距離と曲げ半径",
      "vi": "Bảng tổng hợp khoảng cách giá đỡ và bán kính uốn.",
      "heading": true
    },
    {
      "jp": "表2-7-6は、屋内配線工事の支持点間距離と曲げ半径などで、覚える内容を表にしたものです。",
      "vi": "Bảng 2-7-6 tóm tắt khoảng cách giữa các điểm đỡ, bán kính uốn và các thông số cần nhớ khi đi dây trong nhà."
    },
    {
      "jp": "表2-7-6 支持点間距離と曲げ半径など",
      "vi": "Bảng 2-7-6 · Khoảng cách điểm đỡ và bán kính uốn",
      "heading": true,
      "table": {
        "jp": [
          "工事の種類",
          "支持点間距離",
          "曲げ半径",
          "その他特記事項"
        ],
        "vi": [
          "Phương pháp",
          "Khoảng cách điểm đỡ",
          "Bán kính uốn",
          "Điều kiện khác"
        ],
        "rows": [
          [
            "ケーブル工事",
            "Cáp",
            "水平**2 m**以下、垂直**6 m**以下",
            "ケーブル外径の**6倍**以上",
            "キャブタイヤケーブルの場合、支持点間距離は1 m以下"
          ],
          [
            "金属管工事",
            "Ống kim loại",
            "**2 m**以下",
            "管**内径**の**6倍**以上",
            "―"
          ],
          [
            "合成樹脂管工事",
            "Ống nhựa tổng hợp",
            "**1.5 m**以下",
            "管**内径**の**6倍**以上",
            "合成樹脂管の接続、差込深さ（管の外径の1.2倍、接着ありでは0.8倍以上）"
          ],
          [
            "がいし引き工事",
            "Dây trên sứ cách điện",
            "**2 m**以下",
            "―",
            "電線相互間：6 cm、造営材との距離：2.5 cm以上"
          ],
          [
            "ダクト工事",
            "Máng dẫn điện",
            "水平**3 m**以下、垂直**6 m**以下",
            "―",
            "―"
          ],
          [
            "ライティングダクト工事",
            "Ray cấp điện chiếu sáng",
            "**2 m**以下",
            "―",
            "―"
          ],
          [
            "金属可とう電線管工事",
            "Ống kim loại mềm",
            "水平**1 m**以下、垂直**2 m**以下",
            "管**内径**の**6倍**以上",
            "ボックスとの接続箇所0.3 m"
          ],
          [
            "金属線ぴ工事",
            "Nẹp kim loại",
            "**1.5 m**以下",
            "―",
            "幅が5 cm以下、線ぴ内で電線の接続はしない"
          ]
        ],
        "rowsVi": [
          [
            "ケーブル工事",
            "Cáp",
            "Ngang đến **2 m**, đứng đến **6 m**",
            "Ít nhất **6 lần** đường kính ngoài cáp",
            "Cáp mềm cabtyre: điểm đỡ cách nhau đến 1 m"
          ],
          [
            "金属管工事",
            "Ống kim loại",
            "Đến **2 m**",
            "Ít nhất **6 lần đường kính trong** ống",
            "—"
          ],
          [
            "合成樹脂管工事",
            "Ống nhựa tổng hợp",
            "Đến **1,5 m**",
            "Ít nhất **6 lần đường kính trong** ống",
            "Độ sâu lồng ống khi nối: 1,2 lần đường kính ngoài, nếu dán keo thì ít nhất 0,8 lần"
          ],
          [
            "がいし引き工事",
            "Dây trên sứ cách điện",
            "Đến **2 m**",
            "—",
            "Giữa hai dây: 6 cm. Đến kết cấu: từ 2,5 cm (xem bảng 2-7-5)"
          ],
          [
            "ダクト工事",
            "Máng dẫn điện",
            "Ngang đến **3 m**, đứng đến **6 m**",
            "—",
            "—"
          ],
          [
            "ライティングダクト工事",
            "Ray cấp điện chiếu sáng",
            "Đến **2 m**",
            "—",
            "—"
          ],
          [
            "金属可とう電線管工事",
            "Ống kim loại mềm",
            "Ngang đến **1 m**, đứng đến **2 m**",
            "Ít nhất **6 lần đường kính trong** ống",
            "Vị trí nối với hộp: 0,3 m"
          ],
          [
            "金属線ぴ工事",
            "Nẹp kim loại",
            "Đến **1,5 m**",
            "—",
            "Rộng không quá 5 cm, không nối dây bên trong nẹp"
          ]
        ]
      }
    },
    {
      "jp": "POINT　接地工事の省略 といえば 150 V以下の**乾燥**した場所、**木製**の床上の機器、**4 m**以下の金属管、又は**8 m**以下の金属管（150 V以下）\n工事方法の制限 といえば ケーブル、金属管、合成樹脂管工事はすべての場所（一部除く）\n支持点間距離 といえば ケーブル水平**2 m**、垂直**6 m**、金属管**2 m**、合成樹脂管**1.5 m**",
      "vi": "Ghi nhớ. Miễn nối đất trong các trường hợp đã nêu, như thiết bị đến 150 V ở nơi **khô ráo**, thiết bị trên sàn **gỗ**, ống kim loại dài đến **4 m** hoặc đến **8 m** (điện áp so với đất đến 150 V).\nCó thể dùng cáp, ống kim loại, ống nhựa tổng hợp ở mọi vị trí trừ các ngoại lệ.\nKhoảng cách điểm đỡ: cáp ngang **2 m**, đứng **6 m**, ống kim loại **2 m**, ống nhựa **1,5 m**."
    },
    {
      "jp": "引込口、小勢力回路、ショウウィンドーの配線",
      "vi": "Dây dẫn vào, mạch công suất nhỏ, hệ thống tủ trưng bày.",
      "heading": true
    },
    {
      "jp": "引込口配線は、一般にケーブル工事、合成樹脂管工事が行われます。小勢力回路の配線は、細い線を用い、ショウウィンドーの配線はビニルコードなどが用いられます。",
      "vi": "Dây ở điểm đưa điện vào thường thi công bằng cáp hoặc ống nhựa tổng hợp. Mạch công suất nhỏ dùng dây nhỏ, còn tủ kính trưng bày dùng dây mềm vinyl hoặc loại tương tự."
    },
    {
      "jp": "低圧引込口配線工事",
      "vi": "Thi công đường dây dẫn vào hạ áp.",
      "heading": true
    },
    {
      "jp": "電気事業者の配電線の取付点から引込口開閉器までの配線を、**引込口配線**といいます。",
      "vi": "**Đoạn dây ở điểm đưa điện vào** kéo từ điểm gắn dây phân phối của đơn vị điện lực tới thiết bị đóng cắt đầu vào."
    }
  ],
  "486": [
    {
      "jp": "道路を横断する場合は、路面上**5 m**（技術上やむを得ない場合、交通に支障がないときは、**3 m**）以上必要です。",
      "vi": "Khi vượt đường, chiều cao tối thiểu trên mặt đường là **5 m**, hoặc **3 m** nếu bất khả kháng về kỹ thuật và không cản giao thông."
    },
    {
      "jp": "引込線の取付点の高さは**4 m**以上で、技術上やむを得ない場合で、交通に支障がないときは、**2.5 m**以上にできます。",
      "vi": "Điểm gắn dây dẫn vào cao ít nhất **4 m**. Khi bất khả kháng về kỹ thuật và không cản giao thông, có thể giảm còn ít nhất **2,5 m**."
    },
    {
      "jp": "引込口配線の工事方法は、①**ケーブル工事**、②**合成樹脂管工事**、③がいし引き工事（展開した場所に限る）、④金属管工事（木造以外の造営物に限る）、によって行います。",
      "vi": "Dây ở điểm đưa điện vào có thể thi công bằng ① **cáp**, ② **ống nhựa tổng hợp**, ③ dây trên sứ cách điện (chỉ ở nơi lộ thiên), hoặc ④ ống kim loại (chỉ ở công trình không phải bằng gỗ)."
    },
    {
      "jp": "小勢力回路の配線工事",
      "vi": "Thi công dây mạch công suất nhỏ.",
      "heading": true
    },
    {
      "jp": "対地電圧300 V以下の電源と絶縁変圧器で結合され、ベルやチャイム、リモコン回路などを動作させるための最大電圧60 V以下の電路を、**小勢力回路**といいます。",
      "vi": "**Mạch công suất nhỏ** nối qua máy biến áp cách ly với nguồn có điện áp so với đất đến 300 V. Mạch có điện áp lớn nhất đến 60 V, dùng cho chuông, chuông báo, điều khiển từ xa và mạch tương tự."
    },
    {
      "jp": "電線を造営材に取り付けて施設する場合、ケーブル又は**0.8 mm**以上の軟銅線又はこれと同等以上のコード又はキャブタイヤケーブル等を使用します。",
      "vi": "Khi gắn dây vào kết cấu, dùng cáp, dây đồng mềm đường kính ít nhất **0,8 mm**, dây mềm tương đương trở lên hoặc cáp mềm cabtyre, v.v."
    },
    {
      "jp": "ショウウィンドー又はショウケース内の配線工事",
      "vi": "Thi công dây điện trong tủ kính trưng bày.",
      "heading": true
    },
    {
      "jp": "ショウウィンドー、ショウケース内の配線は、美観上からコード配線工事が認められています。電圧は300 V以下、電線は**0.75 mm²**以上のコード又はキャブタイヤケーブルを使用し、支持点間距離は**1 m**以下とします。",
      "vi": "Có thể đi dây mềm trong cửa kính hoặc tủ kính trưng bày vì lý do thẩm mỹ. Điện áp đến 300 V, dây mềm hoặc cáp mềm cabtyre có tiết diện từ **0,75 mm²**. Khoảng cách điểm đỡ đến **1 m**."
    },
    {
      "jp": "POINT　引込線の取付点の高さ といえば **2.5 m**以上（原則**4 m**以上）\n木造の屋側配線 といえば ケーブル工事、合成樹脂管工事、がいし引き工事\n小勢力回路 といえば ケーブル又は**0.8 mm**以上の軟銅線\nショウウィンドー配線 といえば **0.75 mm²**以上、支持点間距離は**1 m**以下",
      "vi": "Ghi nhớ. Điểm gắn dây dẫn vào ít nhất **2,5 m** trong ngoại lệ, thông thường ít nhất **4 m**. Đi dây ngoài nhà gỗ dùng cáp, ống nhựa hoặc dây trên sứ. Mạch công suất nhỏ dùng cáp hoặc dây đồng mềm từ **0,8 mm**. Dây tủ kính từ **0,75 mm²**, điểm đỡ cách nhau đến **1 m**."
    },
    {
      "jp": "電気工事士でなくても作業ができる軽微な工事",
      "vi": "Những việc đơn giản không bắt buộc thợ điện có chứng chỉ.",
      "heading": true
    },
    {
      "jp": "低圧用の接続器、開閉器、電気機器などへのコード、キャブタイヤケーブルの接続、ねじ止めなど、簡単で技能がいらず、日常よく行われる作業である軽微な工事については、電気工事から除外されており、電気工事士でなくてもこれらの工事に係る作業ができることになっています。",
      "vi": "Công việc đơn giản, thường gặp và không cần tay nghề như nối dây mềm, cáp mềm cabtyre hoặc bắt vít vào đầu nối, thiết bị đóng cắt hay thiết bị điện hạ áp được xếp vào công việc nhỏ. Người không có chứng chỉ thợ điện được phép thực hiện các công việc thuộc nhóm này."
    },
    {
      "jp": "①電圧600 V以下で使用する差込接続器、ねじ込み接続器、ソケット、ローゼットその他の接続器又は電圧600 V以下で使用するナイフスイッチ、カットアウトスイッチ、スナップスイッチその他の開閉器に**コード**又は**キャブタイヤケーブルを接続**する工事。",
      "vi": "① **Đấu dây mềm** hoặc **cáp mềm cabtyre** vào đầu nối kiểu cắm, kiểu vít, đui, đế nối và đầu nối tương tự dùng đến 600 V, hoặc vào cầu dao kiểu dao, kiểu cut-out, công tắc bật nhanh hay thiết bị đóng cắt tương tự dùng đến 600 V."
    },
    {
      "jp": "②電圧600 V以下で使用する電気機器（配線器具を除く。以下同。）又は電圧600 V以下で使用する**蓄電池の端子**に電線（コード、キャブタイヤケーブル及びケーブルを含む）を**ねじ止め**する工事。",
      "vi": "② **Bắt vít** dây dẫn (gồm dây mềm, cáp mềm cabtyre và cáp) vào đầu cực thiết bị điện dùng đến 600 V (trừ phụ kiện đi dây), hoặc vào **đầu cực ắc quy** dùng đến 600 V."
    },
    {
      "jp": "③電圧600 V以下で使用する**電力量計**若しくは**電流制限器**又は**ヒューズ**を取り付け、又は取り外す工事。",
      "vi": "③ Lắp hoặc tháo **công tơ điện**, **bộ hạn dòng** hoặc **cầu chì** dùng ở điện áp đến 600 V."
    }
  ],
  "487": [
    {
      "jp": "④電鈴、インターホン、火災感知器、豆電球その他これらに類する施設に使用する**小型変圧器**（二次電圧が36 V以下のものに限る）**の二次側の配線**工事",
      "vi": "④ **Đi dây phía thứ cấp** của **máy biến áp nhỏ** dùng cho chuông điện, intercom, đầu báo cháy, bóng đèn nhỏ hoặc thiết bị tương tự, với điện áp thứ cấp đến 36 V."
    },
    {
      "jp": "⑤電線を支持する**柱**、**腕木**その他これらに類する工作物を設置し、又は変更する工事",
      "vi": "⑤ Lắp hoặc thay đổi **cột**, **xà** đỡ dây dẫn hoặc công trình tương tự."
    },
    {
      "jp": "⑥地中電線用の**暗渠**又は**管**を設置し、又は変更する工事",
      "vi": "⑥ Lắp hoặc thay đổi **hầm** hoặc **ống** dùng cho dây ngầm."
    },
    {
      "jp": "⑦600 V以下の電気機器の**接地線の取付**作業",
      "vi": "⑦ **Gắn dây nối đất** cho thiết bị điện dùng ở điện áp đến 600 V."
    },
    {
      "jp": "POINT　軽微な工事 といえば **コードの接続**、**電線のねじ止め**、**地中の管**、**接地線の取付**など",
      "vi": "Ghi nhớ. Công việc nhỏ gồm **nối dây mềm**, **bắt vít dây**, **lắp ống ngầm**, **gắn dây nối đất**, v.v."
    },
    {
      "jp": "コラム　配線工事の場所",
      "vi": "Chuyên mục · Vị trí thi công đi dây",
      "heading": true
    },
    {
      "jp": "本節に出てきた工事の場所は、具体的にはそれぞれ次のようなものです。",
      "vi": "Các vị trí thi công được nhắc trong mục này gồm các trường hợp cụ thể dưới đây."
    },
    {
      "jp": "展開した場所：配線が簡単に見られる場所。",
      "vi": "Vị trí lắp hở: có thể nhìn thấy dây dễ dàng."
    },
    {
      "jp": "点検できる隠ぺい場所：点検口のある天井裏、押入れなど。",
      "vi": "Chỗ lắp kín nhưng kiểm tra được: trần giả có cửa, tủ âm v.v."
    },
    {
      "jp": "点検できない隠ぺい場所：コンクリート、壁の中、天井のふところなど。",
      "vi": "Chỗ lắp kín không kiểm tra được: trong bê tông, tường, khoảng trần không có cửa."
    },
    {
      "jp": "湿気の多い場所：浴室、床下。水気のある場所：土間、洗車場。",
      "vi": "Nơi ẩm: phòng tắm, dưới sàn; nơi có nước: nền đất ướt, khu rửa xe."
    },
    {
      "jp": "接触防護措置",
      "vi": "Biện pháp bảo vệ chống tiếp xúc",
      "heading": true
    },
    {
      "jp": "次のいずれかに適合するように施設すること。\nイ）設備を、屋内にあっては床上2.3 m以上、屋外にあっては地表上2.5 m以上の高さに、かつ、人が通る場所から手を伸ばしても触れることのない範囲に施設すること。\nロ）設備に人が接近又は接触しないよう、さく、へい等を設け、又は設備を金属管に収める等の防護措置を施すこと。",
      "vi": "Áp dụng một trong hai cách.\na) Lắp thiết bị cao ít nhất 2,3 m trên sàn trong nhà hoặc 2,5 m trên mặt đất ngoài trời, đồng thời nằm ngoài tầm với từ nơi người qua lại.\nb) Dùng hàng rào, tường chắn, ống kim loại chứa thiết bị hoặc biện pháp tương tự để người không đến gần hoặc chạm vào thiết bị."
    },
    {
      "jp": "簡易接触防護措置",
      "vi": "Biện pháp bảo vệ đơn giản chống tiếp xúc",
      "heading": true
    },
    {
      "jp": "次のいずれかに適合するように施設すること。\nイ）設備を、屋内にあっては床上1.8 m以上、屋外にあっては地表上2 m以上の高さに、かつ、人が通る場所から容易に触れることのない範囲に施設すること。\nロ）設備に人が接近又は接触しないよう、さく、へい等を設け、又は設備を金属管に収める等の防護措置を施すこと。",
      "vi": "Áp dụng một trong hai cách.\na) Lắp thiết bị cao ít nhất 1,8 m trên sàn trong nhà hoặc 2 m trên mặt đất ngoài trời, ở phạm vi người qua lại không dễ chạm.\nb) Dùng hàng rào, tường chắn, ống kim loại chứa thiết bị hoặc biện pháp tương tự để người không đến gần hoặc chạm vào thiết bị."
    }
  ],
  "488": [
    {
      "jp": "2-8 分散型電源の系統連系　といえば　小規模な発電システムとの並列運転",
      "vi": "2-8 Hòa lưới nguồn phân tán: vận hành song song hệ phát điện nhỏ.",
      "heading": true
    },
    {
      "jp": "太陽電池発電設備などの分散型電源が一般送配電事業者や配電事業者の電力系統と連系する設備に係る主な用語は、次のように定義されています。",
      "vi": "Dưới đây là các thuật ngữ về thiết bị đấu nối nguồn điện phân tán như hệ thống điện mặt trời với lưới của đơn vị truyền tải–phân phối chung hoặc đơn vị phân phối."
    },
    {
      "jp": "分散型電源の系統連系設備に係る主な用語",
      "vi": "Các thuật ngữ chủ yếu về thiết bị hòa lưới nguồn điện phân tán.",
      "heading": true
    },
    {
      "jp": "一　発電設備等：発電設備又は電力貯蔵装置であって、常用電源の停電時又は電圧低下発生時にのみ使用する非常用予備電源以外のもの。",
      "vi": "Thiết bị phát điện/lưu trữ, trừ nguồn dự phòng khẩn cấp chỉ dùng khi nguồn thường mất điện hoặc tụt áp."
    },
    {
      "jp": "二　分散型電源：電気事業を営む者以外の者が設置する発電設備等であって、一般送配電事業者若しくは配電事業者が運用する電力系統又は地域独立系統に連系するもの。",
      "vi": "Nguồn phân tán: thiết bị phát điện do chủ thể ngoài đơn vị điện lực lắp, được nối vào lưới truyền tải/phân phối hoặc lưới độc lập khu vực."
    },
    {
      "jp": "三　解列：電力系統から切り離すこと。",
      "vi": "解列: tách khỏi lưới."
    },
    {
      "jp": "四　逆潮流：分散型電源設置者の構内から、一般送配電事業者が運用する電力系統側へ向かう有効電力の流れ。",
      "vi": "Dòng công suất ngược: công suất tác dụng chạy từ cơ sở có nguồn phân tán về phía lưới điện lực."
    },
    {
      "jp": "五　単独運転：分散型電源を連系している電力系統が事故等によって系統電源と切り離された状態において、当該分散型電源が発電を継続し、線路負荷に有効電力を供給している状態。",
      "vi": "Vận hành đảo ngoài ý muốn: lưới đã tách nguồn chính nhưng nguồn phân tán vẫn phát và cấp điện cho tải đường dây."
    },
    {
      "jp": "六　逆充電：分散型電源を連系している電力系統が事故等によって系統電源と切り離された状態において、分散型電源のみが、連系している電力系統を加圧し、かつ、当該電力系統へ有効電力を供給していない状態。",
      "vi": "6. Đặt điện áp ngược lên lưới (逆充電). Khi phần lưới nối nguồn phân tán bị tách khỏi nguồn lưới do sự cố hoặc lý do tương tự, chỉ nguồn phân tán duy trì điện áp trên phần lưới đó và không cấp công suất tác dụng cho lưới."
    },
    {
      "jp": "七　自立運転：分散型電源が連系している電力系統から解列された状態において、当該分散型電源設置者の構内負荷にのみ電力を供給している状態。",
      "vi": "Chạy độc lập: nguồn phân tán đã tách lưới, chỉ cấp cho tải bên trong cơ sở."
    },
    {
      "jp": "直流流出防止変圧器の施設",
      "vi": "Bố trí biến áp chống thành phần dòng DC chảy vào lưới.",
      "heading": true
    },
    {
      "jp": "逆変換装置を用いて分散型電源を電力系統に連系する場合は、逆変換装置から直流が電力系統へ流出することを防止するために、受電点と逆変換装置との間に**変圧器**（単巻変圧器を除く）を施設する必要があります。ただし、次の各号に適合する場合は、この限りではありません。",
      "vi": "Khi dùng bộ nghịch lưu để đấu nối nguồn điện phân tán vào lưới, lắp **máy biến áp** (trừ máy biến áp tự ngẫu) giữa điểm nhận điện và bộ nghịch lưu để ngăn dòng một chiều từ bộ nghịch lưu đi vào lưới. Có thể miễn nếu đáp ứng các điều kiện sau."
    },
    {
      "jp": "一　逆変換装置の交流出力側で直流を検出し、かつ、直流検出時に交流出力を**停止**する機能を有すること。",
      "vi": "1. Bộ nghịch lưu có chức năng phát hiện dòng một chiều ở đầu ra xoay chiều và **dừng** đầu ra xoay chiều khi phát hiện."
    },
    {
      "jp": "二　次のいずれかに適合すること。\nイ　逆変換装置の直流側電路が**非接地**であること。\nロ　逆変換装置に**高周波変圧器**※1を用いていること。",
      "vi": "2. Đáp ứng một trong hai điều kiện.\na) Mạch phía một chiều của bộ nghịch lưu **không nối đất**.\nb) Bộ nghịch lưu dùng **máy biến áp cao tần** (chú thích 1).",
      "note": "Để áp dụng ngoại lệ, cần đáp ứng mục 1 và một trong hai phương án của mục 2."
    },
    {
      "jp": "※1 変圧器は、高い周波数で動作させた方が損失が少なく小型にできることからパワーコンディショナーで採用されています。",
      "vi": "Chú thích 1. Theo sách, máy biến áp hoạt động ở tần số cao có thể giảm tổn hao và làm nhỏ kích thước nên được dùng trong bộ điều hòa công suất."
    }
  ],
  "489": [
    {
      "jp": "低圧連系時の施設要件",
      "vi": "Điều kiện thiết bị khi hòa lưới hạ áp.",
      "heading": true
    },
    {
      "jp": "・単相3線式の低圧の電力系統に分散型電源を連系する場合において、**負荷**の不平衡により中性線に大電流が生じるおそれがあるときは、分散型電源を施設した構内の電路であって、負荷及び分散型電源の並列点よりも**系統側**に、3極に過電流引き外し素子を有する遮断器を施設すること。",
      "vi": "• Khi nối nguồn phân tán với lưới hạ áp một pha ba dây, nếu mất cân bằng **phụ tải** có thể gây dòng lớn trong dây trung tính, lắp thiết bị cắt có phần tử tác động quá dòng trên cả ba cực. Vị trí lắp nằm trong khuôn viên, về **phía lưới** so với điểm đấu song song của phụ tải và nguồn phân tán."
    },
    {
      "jp": "・低圧の電力系統に逆変換装置を用いずに分散型電源を連系する場合は、**逆潮流**を生じさせないこと。",
      "vi": "• Khi đấu nối nguồn phân tán vào lưới hạ áp mà không dùng bộ nghịch lưu, không để phát sinh **dòng công suất ngược về lưới**."
    },
    {
      "jp": "高圧連系時の施設要件",
      "vi": "Điều kiện khi hòa lưới cao áp.",
      "heading": true
    },
    {
      "jp": "高圧の電力系統に分散型電源を連系する場合は、分散型電源を連系する配電用変電所の**配電用変圧器**において、逆向きの潮流を生じさせないようにする必要があります。ただし、当該配電用変電所に保護装置を施設する等の方法により分散型電源と電力系統との協調をとることができる場合は、この限りではありません。",
      "vi": "Khi đấu nối nguồn phân tán vào lưới cao áp, không để công suất chảy ngược ở **máy biến áp phân phối** của trạm phân phối nơi đấu nối. Ngoại lệ áp dụng nếu có thể phối hợp bảo vệ giữa nguồn phân tán và lưới, chẳng hạn bằng cách lắp thiết bị bảo vệ tại trạm đó."
    },
    {
      "jp": "練習問題01　分散型電源の低圧連系時及び高圧連系時の施設要件",
      "vi": "Bài luyện 01 · Điều kiện hòa lưới hạ áp và cao áp.",
      "heading": true
    },
    {
      "jp": "次の文章は、「電気設備技術基準の解釈」における分散型電源の低圧連系時及び高圧連系時の施設要件に関する記述である。空白箇所の用語は。",
      "vi": "Điền thuật ngữ vào đoạn trích về điều kiện lắp đặt khi đấu nối nguồn phân tán ở hạ áp và cao áp theo phần giải thích tiêu chuẩn kỹ thuật."
    },
    {
      "jp": "a) 単相3線式の低圧の電力系統に分散型電源を連系する場合において、（ア）の不平衡により中性線に最大電流が生じるおそれがあるときは、分散型電源を施設した構内の電路であって、負荷及び分散型電源の並列点よりも（イ）に、3極に過電流引き外し素子を有する遮断器を施設すること。",
      "vi": "a) Khi đấu nối nguồn phân tán vào lưới hạ áp một pha ba dây, nếu mất cân bằng (ア) có thể tạo dòng cực đại ở dây trung tính, lắp thiết bị cắt có phần tử tác động quá dòng ở cả ba cực tại mạch trong khuôn viên, về phía (イ) so với điểm đấu song song của phụ tải và nguồn phân tán."
    },
    {
      "jp": "b) 低圧の電力系統に逆変換装置を用いずに分散型電源を連系する場合は、（ウ）を生じさせないこと。ただし、逆変換装置を用いて分散型電源を連系する場合と同等の単独運転検出及び解列ができる場合は、この限りではない。",
      "vi": "b) Khi đấu nối nguồn phân tán vào lưới hạ áp mà không dùng bộ nghịch lưu, không để phát sinh (ウ). Ngoại lệ áp dụng nếu có thể phát hiện vận hành cô lập và tách lưới tương đương trường hợp dùng bộ nghịch lưu."
    },
    {
      "jp": "c) 高圧の電力系統に分散型電源を連系する場合は、分散型電源を連系する配電用変電所の（エ）において、逆向きの潮流を生じさせないこと。ただし、当該配電用変電所に保護装置を施設する等の方法により分散型電源と電力系統との協調をとることができる場合は、この限りではない。",
      "vi": "c) Khi đấu nối nguồn phân tán vào lưới cao áp, không để công suất chảy ngược tại (エ) của trạm phân phối nơi đấu nối. Ngoại lệ áp dụng khi bảo đảm được phối hợp bảo vệ với lưới, chẳng hạn nhờ lắp thiết bị bảo vệ tại trạm."
    },
    {
      "jp": "解説\na) 単相3線式の電力系統と連系する場合、負荷の不平衡により中性線に過電流を生じても電路を保護できるように、3極に過電流引き外し素子を有する遮断器を系統側に施設します。\nb) 低圧の電力系統に逆変換装置を用いず連系する場合は、逆潮流を生じさせないようにします。\nc) 高圧の電力系統に連系する場合は、配電用変圧器の保護協調ができないので、逆向きの潮流を生じさせないようにします。",
      "vi": "Lời giải. a) Với lưới một pha ba dây, thiết bị cắt bảo vệ cả ba cực đặt phía lưới để bảo vệ mạch khi mất cân bằng phụ tải làm quá dòng ở dây trung tính. b) Đấu nối vào lưới hạ áp không dùng bộ nghịch lưu thì ngăn công suất chảy ngược. c) Khi nối lưới cao áp, ngăn công suất chảy ngược nếu không thể phối hợp bảo vệ ở máy biến áp phân phối."
    },
    {
      "jp": "解答　（ア）**負荷**　（イ）**系統側**　（ウ）**逆潮流**　（エ）**配電用変圧器**",
      "vi": "Đáp án. (ア) **Phụ tải** · (イ) **Phía lưới** · (ウ) **Công suất chảy ngược về lưới** · (エ) **Máy biến áp phân phối**."
    }
  ],
  "490": [
    {
      "jp": "2-9 高圧受電設備　といえば CB形とPF・S形がある",
      "vi": "2-9 Thiết bị nhận điện cao áp: có kiểu CB và PF・S.",
      "heading": true
    },
    {
      "jp": "高圧受電設備（CB形）の単線結線図",
      "vi": "Sơ đồ một sợi thiết bị nhận điện cao áp kiểu CB.",
      "heading": true
    },
    {
      "jp": "**高圧受電設備**は、三相の高圧配電線路（6 600 V）から受電し、低圧の負荷設備で使用する電圧（三相210 Vや単相210/105 V）に変成する設備です。",
      "vi": "**Thiết bị nhận điện cao áp** nhận điện từ đường dây phân phối cao áp ba pha 6.600 V và biến đổi thành điện áp sử dụng cho tải hạ áp, ví dụ ba pha 210 V hoặc một pha 210/105 V."
    },
    {
      "jp": "受電設備全体の構成や機器の接続を表すために、単線結線図が多く用いられます。表2-9-1は、高圧受電設備（**CB形**）の構成機器、図2-9-1は**単線結線図**の例です。",
      "vi": "Thường dùng sơ đồ một sợi để thể hiện cấu hình hệ thống nhận điện và cách nối thiết bị. Bảng 2-9-1 liệt kê thiết bị của **kiểu CB**. Hình 2-9-1 là ví dụ **sơ đồ một sợi**."
    },
    {
      "jp": "表2-9-1 高圧受電設備（CB形）の構成機器",
      "vi": "Bảng 2-9-1 · Các thiết bị trong hệ thống nhận điện cao áp kiểu CB",
      "heading": true,
      "table": {
        "jp": [
          "機器",
          "文字記号",
          "役割"
        ],
        "vi": [
          "Thiết bị",
          "Ký hiệu",
          "Vai trò"
        ],
        "rows": [
          [
            "① 地絡方向継電装置付高圧交流負荷開閉器",
            "Cầu dao phụ tải AC cao áp có rơ-le chạm đất có hướng",
            "DGR付PAS",
            "需要家の高圧電路に地絡電流が流れたとき、地絡電流の方向を判別し自動的に電路を開放する、点検時に電路を開放する"
          ],
          [
            "② ケーブルヘッド",
            "Đầu cáp",
            "CH",
            "高圧ケーブルと高圧絶縁電線の接続処理部"
          ],
          [
            "③ 電力需給用計器用変成器",
            "Bộ biến điện áp và dòng cho đo đếm điện năng",
            "VCT",
            "高圧母線の電圧・電流を低圧・小電流に変成し電力量計で計測するための変成器"
          ],
          [
            "④ 電力量計",
            "Công tơ điện năng",
            "WHM",
            "使用した有効電力量・無効電力量を計測し表示する"
          ],
          [
            "⑤ 断路器",
            "Dao cách ly",
            "DS",
            "無負荷状態で電路の開閉を行う、点検時に電路を開放する"
          ],
          [
            "⑥ 高圧交流遮断器",
            "Máy cắt AC cao áp",
            "CB",
            "過電流・短絡電流を遮断、事故時に電路を遮断、負荷電流の開閉をする。一般にVCB（真空遮断器）が用いられる"
          ],
          [
            "⑦ 計器用変圧器",
            "Máy biến điện áp đo lường",
            "VT",
            "高圧を低圧に変成する、一次定格電圧は6.6 kV、二次定格電圧は110 V"
          ],
          [
            "⑧ 避雷器",
            "Chống sét van",
            "LA",
            "雷や開閉サージによる異常電圧を大地に放電し機器を保護する"
          ],
          [
            "⑨ 変流器",
            "Máy biến dòng",
            "CT",
            "高圧の電流を低圧電流計で計測するための変成器、二次定格電流は5 A"
          ],
          [
            "⑩ 過電流継電器",
            "Rơ-le quá dòng",
            "OCR",
            "過電流・短絡電流を検出したとき動作し遮断器をトリップさせる"
          ],
          [
            "⑪ 高圧交流負荷開閉器",
            "Cầu dao phụ tải AC cao áp",
            "LBS",
            "負荷電流の開閉、高圧限流ヒューズと組み合わせて遮断装置とする"
          ],
          [
            "⑫ 高圧カットアウト",
            "Bộ cut-out cao áp",
            "PC",
            "無負荷状態で電路の開閉を行う、高圧ヒューズで過負荷・短絡時は遮断"
          ],
          [
            "⑬ 直列リアクトル",
            "Cuộn kháng nối tiếp",
            "SR",
            "高調波電流の抑制、コンデンサ投入時の突入電流を抑制する効果もある"
          ],
          [
            "⑭ 高圧進相コンデンサ",
            "Tụ bù cao áp",
            "SC",
            "高圧電路の力率を改善する"
          ],
          [
            "⑮ 三相変圧器",
            "Máy biến áp ba pha",
            "3φT",
            "高電圧を三相3線式210 Vの使用電圧に変圧する"
          ],
          [
            "⑯ 単相変圧器",
            "Máy biến áp một pha",
            "1φT",
            "高電圧を単相3線式105 V/210 Vの使用電圧に変圧する"
          ],
          [
            "⑰ 電圧計切替スイッチ",
            "Công tắc chọn điện áp",
            "VS",
            "1台の電圧計で三相の線間電圧を測定できるようにした切替スイッチ"
          ],
          [
            "⑱ 電圧計",
            "Vôn kế",
            "VM",
            "VTの二次電圧を測定し、一次電圧に換算した高電圧の値を指示する"
          ],
          [
            "⑲ 電流計切替スイッチ",
            "Công tắc chọn dòng điện",
            "AS",
            "1台の電流計で三相の線電流を測定できるようにした切替スイッチ"
          ],
          [
            "⑳ 電流計",
            "Ampe kế",
            "AM",
            "CTの二次電流を測定し、一次電流に換算した電流の値を指示する"
          ]
        ],
        "rowsVi": [
          [
            "① 地絡方向継電装置付高圧交流負荷開閉器",
            "Cầu dao phụ tải AC cao áp có rơ-le chạm đất có hướng",
            "DGR付PAS",
            "Khi có dòng chạm đất trong mạch cao áp của khách hàng, nhận biết hướng dòng và tự động mở mạch. Cũng dùng để mở mạch khi kiểm tra."
          ],
          [
            "② ケーブルヘッド",
            "Đầu cáp",
            "CH",
            "Bộ phận xử lý đầu nối giữa cáp cao áp và dây cách điện cao áp."
          ],
          [
            "③ 電力需給用計器用変成器",
            "Bộ biến điện áp và dòng cho đo đếm điện năng",
            "VCT",
            "Hạ điện áp và biến dòng trên thanh cái cao áp thành dòng nhỏ để công tơ đo được."
          ],
          [
            "④ 電力量計",
            "Công tơ điện năng",
            "WHM",
            "Đo và hiển thị điện năng tác dụng và phản kháng đã sử dụng."
          ],
          [
            "⑤ 断路器",
            "Dao cách ly",
            "DS",
            "Đóng cắt mạch khi không tải và mở mạch để kiểm tra."
          ],
          [
            "⑥ 高圧交流遮断器",
            "Máy cắt AC cao áp",
            "CB",
            "Cắt quá dòng và dòng ngắn mạch, ngắt mạch khi có sự cố và đóng cắt dòng tải. Thường dùng máy cắt chân không VCB."
          ],
          [
            "⑦ 計器用変圧器",
            "Máy biến điện áp đo lường",
            "VT",
            "Hạ điện áp cao áp xuống hạ áp. Điện áp định mức sơ cấp 6,6 kV, thứ cấp 110 V."
          ],
          [
            "⑧ 避雷器",
            "Chống sét van",
            "LA",
            "Phóng quá điện áp do sét hoặc xung đóng cắt xuống đất để bảo vệ thiết bị."
          ],
          [
            "⑨ 変流器",
            "Máy biến dòng",
            "CT",
            "Biến dòng để đo dòng của mạch cao áp bằng ampe kế hạ áp. Dòng định mức thứ cấp 5 A."
          ],
          [
            "⑩ 過電流継電器",
            "Rơ-le quá dòng",
            "OCR",
            "Tác động khi phát hiện quá dòng hoặc dòng ngắn mạch và ra lệnh máy cắt mở."
          ],
          [
            "⑪ 高圧交流負荷開閉器",
            "Cầu dao phụ tải AC cao áp",
            "LBS",
            "Đóng cắt dòng tải. Kết hợp cầu chì hạn dòng cao áp để làm thiết bị cắt."
          ],
          [
            "⑫ 高圧カットアウト",
            "Bộ cut-out cao áp",
            "PC",
            "Đóng cắt khi không tải. Cầu chì cao áp cắt khi quá tải hoặc ngắn mạch."
          ],
          [
            "⑬ 直列リアクトル",
            "Cuộn kháng nối tiếp",
            "SR",
            "Hạn chế dòng sóng hài và dòng xung kích khi đóng tụ."
          ],
          [
            "⑭ 高圧進相コンデンサ",
            "Tụ bù cao áp",
            "SC",
            "Cải thiện hệ số công suất của mạch cao áp."
          ],
          [
            "⑮ 三相変圧器",
            "Máy biến áp ba pha",
            "3φT",
            "Hạ điện áp cao áp xuống điện áp sử dụng 210 V ba pha ba dây."
          ],
          [
            "⑯ 単相変圧器",
            "Máy biến áp một pha",
            "1φT",
            "Hạ điện áp cao áp xuống điện áp sử dụng 105/210 V một pha ba dây."
          ],
          [
            "⑰ 電圧計切替スイッチ",
            "Công tắc chọn điện áp",
            "VS",
            "Cho phép một vôn kế đo điện áp giữa các cặp dây của hệ ba pha."
          ],
          [
            "⑱ 電圧計",
            "Vôn kế",
            "VM",
            "Đo điện áp thứ cấp VT và hiển thị trị số quy đổi về điện áp cao áp sơ cấp."
          ],
          [
            "⑲ 電流計切替スイッチ",
            "Công tắc chọn dòng điện",
            "AS",
            "Cho phép một ampe kế đo dòng trên từng dây của hệ ba pha."
          ],
          [
            "⑳ 電流計",
            "Ampe kế",
            "AM",
            "Đo dòng thứ cấp CT và hiển thị trị số quy đổi về dòng sơ cấp."
          ]
        ]
      }
    }
  ],
  "491": [
    {
      "diagram": "lawCbSingleLine491"
    },
    {
      "jp": "3φ3W 6 600 V：三相3線式6 600 Vで引き込みます。",
      "vi": "Đầu vào ba pha ba dây 6.600 V."
    },
    {
      "jp": "DGR付PAS：電源側から負荷側に地絡電流が流れたとき開放します。過電流のときはロック、無電圧で開放します。",
      "vi": "DGR付PAS mở khi phát hiện dòng chạm đất chạy từ phía nguồn sang phía tải. Khi có quá dòng, khóa tác động, sau đó mở khi mất điện áp."
    },
    {
      "jp": "ZCT：零相電流を検出します。VT：DGRの電源を得ます。ZPD：零相電圧を検出します。DGR：設定値以上の地絡電流が流れたとき動作します。",
      "vi": "ZCT phát hiện dòng thứ tự không. VT cấp nguồn cho DGR. ZPD phát hiện điện áp thứ tự không. DGR tác động khi dòng chạm đất đạt ngưỡng cài đặt."
    },
    {
      "jp": "CH：遮へい銅テープの切断部における電気力線の集中を緩和します。",
      "vi": "CH giảm tập trung đường sức điện tại nơi kết thúc băng đồng chắn điện."
    },
    {
      "jp": "VCT：高圧を低圧に、電流を小電流に変成します。WHM：検定付電力量計で、使用電力を計量します。",
      "vi": "VCT hạ điện áp và biến dòng xuống trị số nhỏ. WHM đo điện năng sử dụng bằng công tơ đã được kiểm định."
    },
    {
      "jp": "DS：電流が流れない状態で開閉します。",
      "vi": "DS chỉ thao tác khi không mang dòng tải."
    },
    {
      "jp": "VCB：過電流や短絡電流を遮断します。OCR：過電流のとき動作します。",
      "vi": "VCB cắt quá dòng/ngắn mạch; OCR phát lệnh khi có quá dòng."
    },
    {
      "jp": "LA：雷など異常電圧を対地に放電します。CT：高圧電路の電流を小電流に変成します。",
      "vi": "LA xả quá điện áp; CT đổi dòng cao áp thành dòng đo lường."
    },
    {
      "jp": "VT：6 600 Vを110 Vに変成する。高圧部の電気量を測定します（電圧、電力、力率、電流）。",
      "vi": "VT hạ điện áp từ 6.600 V xuống 110 V. Bộ đồng hồ đo các đại lượng phía cao áp: điện áp, công suất, hệ số công suất và dòng điện."
    },
    {
      "jp": "LBS：高圧進相コンデンサの開閉と過電流の保護をします。PC：高圧ヒューズで過電流を保護します。",
      "vi": "LBS đóng/cắt mạch tụ bù; PC dùng cầu chì cao áp bảo vệ quá dòng."
    },
    {
      "jp": "SR：高調波電流を抑制し、コンデンサ投入時の突入電流を抑制します。SC：力率を改善します。",
      "vi": "SR hạn chế hài/dòng xung khi đóng tụ; SC bù công suất phản kháng."
    },
    {
      "jp": "3φT：6 600 Vを三相210 Vに、1φT：6 600 Vを単相105/210 Vに変圧します。",
      "vi": "Biến áp 3φ xuống 210 V ba pha; 1φ xuống 105/210 V."
    }
  ],
  "492": [
    {
      "jp": "練習問題01　受電設備",
      "vi": "Bài luyện 01 · Thiết bị nhận điện cao áp.",
      "heading": true
    },
    {
      "jp": "キュービクル式高圧受電設備には主遮断装置の形式によってCB形とPF・S形がある。",
      "vi": "Trạm/tủ nhận điện cao áp kiểu cubicle chia CB và PF・S theo thiết bị cắt chính."
    },
    {
      "jp": "CB形は主遮断装置として（ア）が使用されているが、PF・S形は変圧器設備容量の小さなキュービクルの設備簡素化の目的から、主遮断装置は（イ）と（ウ）の組み合わせによっている。",
      "vi": "Kiểu CB dùng (ア) làm bộ cắt chính; kiểu PF・S cho công suất nhỏ dùng cặp (イ)+(ウ) để đơn giản hóa."
    },
    {
      "jp": "高圧母線等の高圧側の短絡事故に対する保護は、CB形では（ア）と（エ）で行うのに対し、PF・S形は（イ）で行う仕組みとなっている。",
      "vi": "Bảo vệ ngắn mạch phía cao áp: kiểu CB dùng (ア)+(エ), kiểu PF・S dùng (イ)."
    },
    {
      "jp": "上記の記述中の空白箇所に当てはまる用語は。",
      "vi": "Điền thuật ngữ phù hợp vào các chỗ trống trên."
    },
    {
      "jp": "解説　キュービクル式高圧受電設備には主遮断装置の形式によってCB形とPF・S形があります。",
      "vi": "Lời giải. Tủ nhận điện cao áp dạng khối có hai kiểu CB và PF・S, phân theo thiết bị cắt chính."
    },
    {
      "diagram": "lawCbPfComparison492"
    },
    {
      "jp": "①CB形　CB形は主遮断装置として高圧交流遮断器を用い、CT（高圧計器用変流器）、OCR（過電流継電器）、CB（高圧交流遮断器）の組合せにより過負荷、短絡事故などの保護を行います。",
      "vi": "① Kiểu CB dùng máy cắt AC cao áp làm thiết bị cắt chính. Phối hợp CT (máy biến dòng cao áp), OCR (rơ-le quá dòng) và CB để bảo vệ khi quá tải hoặc ngắn mạch."
    },
    {
      "jp": "②PF・S形　PF・S形は、高圧限流ヒューズ付高圧交流負荷開閉器で過負荷、短絡事故に対する保護を行います。この方式は、PF付LBSがCB形におけるDS、CB、OCR、CTの役割をなしており設備の小型化、単純化、経済化を図ることができます。",
      "vi": "② Kiểu PF・S dùng cầu dao phụ tải AC cao áp có cầu chì hạn dòng cao áp để bảo vệ quá tải và ngắn mạch. Cụm PF–LBS đảm nhiệm vai trò của DS, CB, OCR và CT trong kiểu CB, giúp hệ thống nhỏ, đơn giản và tiết kiệm hơn."
    },
    {
      "jp": "解答　（ア）**高圧交流遮断器**　（イ）**高圧限流ヒューズ**　（ウ）**高圧交流負荷開閉器**　（エ）**過電流継電器**",
      "vi": "Đáp án. (ア) **Máy cắt AC cao áp** · (イ) **Cầu chì hạn dòng cao áp** · (ウ) **Cầu dao phụ tải AC cao áp** · (エ) **Rơ-le quá dòng**."
    }
  ],
  "493": [
    {
      "jp": "練習問題02　停電作業の手順",
      "vi": "Bài luyện 02 · Trình tự thao tác khi cắt toàn bộ điện để làm việc.",
      "heading": true
    },
    {
      "jp": "次の文章は、高圧受電設備において全停電作業を実施するときの操作手順の一例について、一部を述べたものである。",
      "vi": "Điền thiết bị tương ứng vào các bước thao tác cắt toàn bộ điện cho thiết bị nhận cao áp."
    },
    {
      "diagram": "lawOutageExercise493"
    },
    {
      "jp": "a) （ア）をすべて開放する。",
      "vi": "a) Mở tất cả (ア)."
    },
    {
      "jp": "b) （イ）を開放する。",
      "vi": "b) Mở (イ)."
    },
    {
      "jp": "c) 地絡方向継電装置付高圧交流負荷開閉器（DGR付PAS）を開放する。",
      "vi": "c) Mở PAS có rơ-le chạm đất có hướng (DGR)."
    },
    {
      "jp": "d) （ウ）を開放する。",
      "vi": "d) Mở (ウ)."
    },
    {
      "jp": "e) 断路器（DS）の電源側及び負荷側を検電して無電圧を確認する。",
      "vi": "e) Dùng bút thử điện chuyên dụng kiểm tra hai phía DS để xác nhận hết điện."
    },
    {
      "jp": "f) 高圧電路に接地金具等を接続して残留電荷を放電させた後、誤通電、他の電路との混触又は他の電路からの誘導による感電の危険を防止するため、断路器（DS）の（エ）に短絡接地器具を取り付けて接地する。",
      "vi": "f) Nối dụng cụ tiếp địa vào mạch cao áp để xả điện tích dư. Sau đó gắn dụng cụ nối đất ngắn mạch ở vị trí (エ) của dao cách ly DS để phòng điện giật do cấp điện nhầm, chạm với mạch khác hoặc cảm ứng từ mạch khác."
    },
    {
      "jp": "g) 断路器（DS）、開閉器等にはそれぞれ操作後速やかに、操作禁止、投入禁止、通電禁止等の通電を禁止する表示をする。",
      "vi": "g) Ngay sau mỗi thao tác, gắn biển cấm thao tác, cấm đóng điện, cấm cấp điện hoặc biển tương tự ở dao cách ly DS và các thiết bị đóng cắt."
    },
    {
      "jp": "上記の記述中の空白箇所当てはまる字句は。",
      "vi": "Điền thuật ngữ phù hợp vào các chỗ trống trên."
    },
    {
      "jp": "解説　高圧受電設備の全停電作業を実施するときの操作手順は次の通りです。\n①配線用遮断器（MCCB）を開放→②真空遮断器（VCB）を開放→③地絡方向継電装置付高圧交流負荷開閉器（DGR付PAS）を開放→④断路器（DS）を開放→⑤検電して無電圧を確認→⑥残留電荷を放電し断路器（DS）の電源側に短絡接地器具を取り付けて接地する→⑦断路器（DS）、開閉器等に操作禁止、投入禁止、通電禁止などの表示をする。",
      "vi": "Lời giải theo sơ đồ của đề. ① Mở MCCB. ② Mở máy cắt chân không VCB. ③ Mở cầu dao phụ tải cao áp DGR付PAS. ④ Mở dao cách ly DS. ⑤ Thử và xác nhận không còn điện áp. ⑥ Xả điện tích dư, gắn dụng cụ nối đất ngắn mạch ở phía nguồn DS và nối đất. ⑦ Gắn biển cấm thao tác, cấm đóng điện hoặc cấm cấp điện trên DS và các thiết bị đóng cắt."
    },
    {
      "jp": "断路器（DS）は、電流を開閉する能力がないことから、電流が流れていない状態（真空遮断器（VCB）が開放の状態）で操作を行わなければなりません。また、受電設備を点検時に誤送電してしまった場合に、短絡接地器具は作業者の感電を防止します。",
      "vi": "Dao cách ly DS không có khả năng đóng cắt dòng điện. Phải thao tác khi không có dòng chạy qua, tức VCB đã mở trong sơ đồ của đề. Dụng cụ nối đất ngắn mạch giúp bảo vệ người thao tác khỏi điện giật nếu cấp điện nhầm trong lúc kiểm tra."
    },
    {
      "jp": "解答　（ア）**配線用遮断器**（MCCB）　（イ）**真空遮断器**（VCB）　（ウ）**断路器**（DS）　（エ）**電源側**",
      "vi": "Đáp án. (ア) **Áp-tô-mát bảo vệ dây** (MCCB) · (イ) **Máy cắt chân không** (VCB) · (ウ) **Dao cách ly** (DS) · (エ) **Phía nguồn**."
    }
  ],
  "494": [
    {
      "jp": "3-1 需要率、負荷率、不等率　といえば　最大負荷を算定する係数",
      "vi": "3-1 Hệ số nhu cầu, phụ tải và không đồng thời: các hệ số xác định tải cực đại.",
      "heading": true
    },
    {
      "jp": "負荷の特性を示す係数",
      "vi": "Các hệ số thể hiện đặc tính phụ tải.",
      "heading": true
    },
    {
      "jp": "電気の需要設備は、住宅、工場、商店など需要家の種類や業種、規模などによって負荷の使われ方が異なります。このような負荷の最大需要電力を算定する係数として、需要率、負荷率、不等率が用いられます。",
      "vi": "Cách sử dụng phụ tải của các thiết bị tiêu thụ điện khác nhau tùy loại hộ sử dụng như nhà ở, nhà máy, cửa hàng, cũng như ngành nghề và quy mô. Để tính công suất nhu cầu cực đại của những phụ tải này, dùng hệ số nhu cầu, hệ số phụ tải và hệ số không đồng thời."
    },
    {
      "jp": "需要率",
      "vi": "Hệ số nhu cầu",
      "heading": true
    },
    {
      "jp": "需要家の最大需要電力と負荷設備電力の合計との比をパーセントで表し、これを**需要率**といいます。",
      "vi": "Tỷ số giữa công suất nhu cầu cực đại của hộ sử dụng và tổng công suất thiết bị phụ tải, biểu thị theo phần trăm, được gọi là **hệ số nhu cầu**."
    },
    {
      "jp": "需要率",
      "vi": "Hệ số nhu cầu",
      "equations": [
        [
          "需要率＝",
          {
            "fraction": [
              [
                "最大需要電力［kW］"
              ],
              [
                "負荷設備電力の合計［kW］"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ],
      "equationsVi": [
        [
          "Hệ số nhu cầu = ",
          {
            "fraction": [
              [
                "Công suất nhu cầu cực đại [kW]"
              ],
              [
                "Tổng công suất thiết bị phụ tải [kW]"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ]
    },
    {
      "jp": "負荷設備のすべてが同時に使用されることはないので、最大需要電力は、負荷設備電力の合計よりも小さくなります。",
      "vi": "Do thiết bị không vận hành đồng thời toàn bộ, công suất nhu cầu cực đại thường thấp hơn tổng công suất lắp đặt."
    },
    {
      "jp": "負荷率",
      "vi": "Hệ số phụ tải",
      "heading": true
    },
    {
      "jp": "電力の消費は、時間や季節により変化します。ある期間中の平均需要電力と最大需要電力の比をパーセントで表し、これを**負荷率**といいます。",
      "vi": "Mức tiêu thụ điện thay đổi theo giờ và mùa. Tỷ số giữa công suất nhu cầu trung bình và công suất nhu cầu cực đại trong cùng kỳ, biểu thị theo phần trăm, được gọi là **hệ số phụ tải**."
    },
    {
      "jp": "負荷率",
      "vi": "Hệ số phụ tải",
      "equations": [
        [
          "負荷率＝",
          {
            "fraction": [
              [
                "ある期間中の平均需要電力［kW］"
              ],
              [
                "ある期間中の最大需要電力［kW］"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ],
      "equationsVi": [
        [
          "Hệ số phụ tải = ",
          {
            "fraction": [
              [
                "Công suất nhu cầu trung bình trong kỳ [kW]"
              ],
              [
                "Công suất nhu cầu cực đại trong kỳ [kW]"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ]
    },
    {
      "jp": "これは、電力設備のある期間中の使用状況を表すもので、期間の取り方により、日負荷率、月負荷率、年負荷率があります。",
      "vi": "Hệ số này cho biết tình trạng sử dụng thiết bị điện trong một kỳ. Tùy kỳ xét có hệ số phụ tải ngày, tháng hoặc năm."
    },
    {
      "jp": "不等率",
      "vi": "Hệ số không đồng thời",
      "heading": true
    },
    {
      "jp": "いくつかある需要家の個々の負荷の最大需要電力の和と合成最大需要電力の比を、**不等率**といいます。",
      "vi": "Tỷ số giữa tổng các công suất nhu cầu cực đại riêng lẻ của nhiều hộ sử dụng và công suất nhu cầu cực đại tổng hợp được gọi là **hệ số không đồng thời**."
    },
    {
      "jp": "不等率",
      "vi": "Hệ số không đồng thời",
      "equations": [
        [
          "不等率＝",
          {
            "fraction": [
              [
                "個々の負荷の最大需要電力の和［kW］"
              ],
              [
                "合成最大需要電力［kW］"
              ]
            ],
            "red": true
          },
          ""
        ]
      ],
      "equationsVi": [
        [
          "Hệ số không đồng thời = ",
          {
            "fraction": [
              [
                "Tổng công suất nhu cầu cực đại riêng lẻ [kW]"
              ],
              [
                "Công suất nhu cầu cực đại tổng hợp [kW]"
              ]
            ],
            "red": true
          },
          ""
        ]
      ]
    },
    {
      "jp": "図3-1-1の例では、A、B、C各需要家において、最大需要電力が同時に発生することはなく、最大電力の発生する時刻に差があるので、A、B、C全体の合成最大需要電力は、個々の負荷の最大需要電力の和よりも小さくなります。不等率は1.1～1.6程度",
      "vi": "Trong ví dụ ở hình 3-1-1, các hộ A, B, C đạt công suất cực đại vào những thời điểm khác nhau. Vì vậy, công suất nhu cầu cực đại tổng hợp của A, B, C thấp hơn tổng các công suất nhu cầu cực đại riêng lẻ. Hệ số không đồng thời vào khoảng 1,1–1,6."
    },
    {
      "diagram": "lawDiversity494"
    }
  ],
  "495": [
    {
      "jp": "です。最大需要電力の発生時刻が分散していると、不等率が大きくなります。なお、以下では「最大需要電力」「平均需要電力」の「需要」を省略して表記しています。",
      "vi": "Khi thời điểm xuất hiện công suất nhu cầu cực đại phân tán, hệ số không đồng thời tăng. Từ đây, sách lược chữ “nhu cầu” trong “công suất nhu cầu cực đại” và “công suất nhu cầu trung bình”."
    },
    {
      "jp": "POINT",
      "vi": "Ghi nhớ",
      "heading": true
    },
    {
      "jp": "需要率",
      "vi": "Hệ số nhu cầu",
      "equations": [
        [
          "需要率＝",
          {
            "fraction": [
              [
                "最大電力"
              ],
              [
                "設備電力の合計"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ],
      "equationsVi": [
        [
          "Hệ số nhu cầu = ",
          {
            "fraction": [
              [
                "Công suất cực đại"
              ],
              [
                "Tổng công suất thiết bị"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ]
    },
    {
      "jp": "負荷率",
      "vi": "Hệ số phụ tải",
      "equations": [
        [
          "負荷率＝",
          {
            "fraction": [
              [
                "平均電力"
              ],
              [
                "最大電力"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ],
      "equationsVi": [
        [
          "Hệ số phụ tải = ",
          {
            "fraction": [
              [
                "Công suất trung bình"
              ],
              [
                "Công suất cực đại"
              ]
            ],
            "red": true
          },
          " × 100［%］"
        ]
      ]
    },
    {
      "jp": "不等率",
      "vi": "Hệ số không đồng thời",
      "equations": [
        [
          "不等率＝",
          {
            "fraction": [
              [
                "個々の最大電力の和"
              ],
              [
                "最大電力"
              ]
            ],
            "red": true
          },
          ""
        ]
      ],
      "equationsVi": [
        [
          "Hệ số không đồng thời = ",
          {
            "fraction": [
              [
                "Tổng công suất cực đại riêng lẻ"
              ],
              [
                "Công suất cực đại tổng hợp"
              ]
            ],
            "red": true
          },
          ""
        ]
      ]
    },
    {
      "jp": "練習問題01　需要率、負荷率、不等率",
      "vi": "Bài luyện 01 · Hệ số nhu cầu, phụ tải, không đồng thời.",
      "heading": true
    },
    {
      "jp": "ある変電所から需要家A～Cに電力を供給している。表は、ある1日（0～24時）の需要率、負荷率及び需要家A～Cの不等率を示している。次の(a)、(b)の問に答えよ。",
      "vi": "Một trạm biến áp cấp điện cho các hộ A–C. Bảng cho biết hệ số nhu cầu, hệ số phụ tải trong một ngày (0–24 giờ) và hệ số không đồng thời của A–C. Trả lời các câu (a) và (b)."
    },
    {
      "jp": "表　需要家A～C",
      "vi": "Bảng số liệu của các hộ A–C",
      "table": {
        "jp": [
          "需要家",
          "設備容量［kW］",
          "需要率［%］",
          "負荷率［%］"
        ],
        "vi": [
          "Hộ",
          "Công suất lắp đặt [kW]",
          "Hệ số nhu cầu [%]",
          "Hệ số phụ tải [%]"
        ],
        "rows": [
          [
            "A",
            "A",
            "800",
            "55",
            "50"
          ],
          [
            "B",
            "B",
            "500",
            "60",
            "70"
          ],
          [
            "C",
            "C",
            "600",
            "70",
            "60"
          ]
        ],
        "rowsVi": [
          [
            "A",
            "A",
            "800",
            "55",
            "50"
          ],
          [
            "B",
            "B",
            "500",
            "60",
            "70"
          ],
          [
            "C",
            "C",
            "600",
            "70",
            "60"
          ]
        ]
      }
    },
    {
      "jp": "不等率＝1.25。",
      "vi": "Hệ số không đồng thời 1,25."
    },
    {
      "jp": "(a) 3需要家A～Cの1日の需要電力量を合計した総需要電力量は。",
      "vi": "(a) Tính tổng điện năng tiêu thụ một ngày của A–C."
    },
    {
      "jp": "(b) 変電所から見た総合負荷率は。",
      "vi": "(b) Hệ số phụ tải tổng nhìn từ trạm là bao nhiêu?"
    },
    {
      "jp": "解き方　(a)",
      "vi": "Cách giải (a)",
      "heading": true
    },
    {
      "jp": "需要率から最大需要電力を求める。",
      "vi": "Tính công suất nhu cầu cực đại từ hệ số nhu cầu.",
      "note": "Đổi hệ số phần trăm thành số thập phân trước khi nhân.",
      "equations": [
        [
          "需要率＝",
          {
            "fraction": [
              [
                "最大需要電力"
              ],
              [
                "設備電力"
              ]
            ]
          },
          " → 最大需要電力＝設備電力 × 需要率"
        ]
      ],
      "equationsVi": [
        [
          "Hệ số nhu cầu = ",
          {
            "fraction": [
              [
                "Công suất nhu cầu cực đại"
              ],
              [
                "Công suất thiết bị"
              ]
            ]
          },
          " → Công suất nhu cầu cực đại = công suất thiết bị × hệ số nhu cầu"
        ]
      ]
    },
    {
      "jp": "Aの最大需要電力＝800×0.55＝440 kW、B＝500×0.60＝300 kW、C＝600×0.70＝420 kW。",
      "vi": "Đỉnh riêng: A 440 kW, B 300 kW, C 420 kW."
    },
    {
      "jp": "※問いの設備容量は、単位がkWなので設備電力とした。",
      "vi": "Chú thích. Vì công suất lắp đặt trong đề có đơn vị kW nên dùng làm công suất thiết bị."
    }
  ],
  "496": [
    {
      "jp": "負荷率から平均需要電力を求める。",
      "vi": "Tính công suất nhu cầu trung bình từ hệ số phụ tải.",
      "equations": [
        [
          "負荷率＝",
          {
            "fraction": [
              [
                "平均需要電力"
              ],
              [
                "最大需要電力"
              ]
            ]
          },
          " → 平均需要電力＝最大需要電力 × 負荷率"
        ]
      ],
      "equationsVi": [
        [
          "Hệ số phụ tải = ",
          {
            "fraction": [
              [
                "Công suất nhu cầu trung bình"
              ],
              [
                "Công suất nhu cầu cực đại"
              ]
            ]
          },
          " → Công suất nhu cầu trung bình = công suất nhu cầu cực đại × hệ số phụ tải"
        ]
      ]
    },
    {
      "jp": "A～Cの平均需要電力は、A：440×0.50＝220 kW、B：300×0.70＝210 kW、C：420×0.60＝252 kW。",
      "vi": "Trung bình: A 220 kW; B 210 kW; C 252 kW."
    },
    {
      "jp": "平均需要電力の合計は220＋210＋252＝682 kW。",
      "vi": "Tổng công suất trung bình = 682 kW."
    },
    {
      "jp": "1日の総需要電力量＝682×24＝16 368 kW・h≒16 370 kW・h。",
      "vi": "Điện năng cả ngày = 682×24 = 16.368 kWh ≈ 16.370 kWh."
    },
    {
      "jp": "(b) 総合負荷率",
      "vi": "(b) Hệ số phụ tải tổng hợp",
      "heading": true
    },
    {
      "jp": "不等率",
      "vi": "Hệ số không đồng thời",
      "equations": [
        [
          "不等率＝",
          {
            "fraction": [
              [
                "個々の最大需要電力の和"
              ],
              [
                "合成最大需要電力"
              ]
            ]
          },
          ""
        ]
      ],
      "equationsVi": [
        [
          "Hệ số không đồng thời = ",
          {
            "fraction": [
              [
                "Tổng các công suất nhu cầu cực đại riêng"
              ],
              [
                "Công suất nhu cầu cực đại tổng hợp"
              ]
            ]
          },
          ""
        ]
      ]
    },
    {
      "jp": "合成最大需要電力",
      "vi": "Công suất nhu cầu cực đại tổng hợp",
      "equations": [
        [
          "合成最大需要電力＝",
          {
            "fraction": [
              [
                "個々の最大需要電力の和"
              ],
              [
                "不等率"
              ]
            ]
          },
          ""
        ]
      ],
      "equationsVi": [
        [
          "Công suất nhu cầu cực đại tổng hợp = ",
          {
            "fraction": [
              [
                "Tổng các công suất nhu cầu cực đại riêng"
              ],
              [
                "Hệ số không đồng thời"
              ]
            ]
          },
          ""
        ]
      ]
    },
    {
      "jp": "合成最大需要電力は次のとおり。",
      "vi": "Công suất nhu cầu cực đại tổng hợp được tính như sau.",
      "equations": [
        [
          {
            "fraction": [
              [
                "440 + 300 + 420"
              ],
              [
                "1.25"
              ]
            ]
          },
          " = 928 kW"
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "440 + 300 + 420"
              ],
              [
                "1,25"
              ]
            ]
          },
          " = 928 kW"
        ]
      ]
    },
    {
      "jp": "総合負荷率",
      "vi": "Hệ số phụ tải tổng hợp",
      "equations": [
        [
          "総合負荷率＝",
          {
            "fraction": [
              [
                "平均需要電力の合計"
              ],
              [
                "合成最大需要電力"
              ]
            ]
          },
          ""
        ]
      ],
      "equationsVi": [
        [
          "Hệ số phụ tải tổng hợp = ",
          {
            "fraction": [
              [
                "Tổng công suất nhu cầu trung bình"
              ],
              [
                "Công suất nhu cầu cực đại tổng hợp"
              ]
            ]
          },
          ""
        ]
      ]
    },
    {
      "jp": "総合負荷率",
      "vi": "Hệ số phụ tải tổng hợp",
      "equations": [
        [
          "総合負荷率＝",
          {
            "fraction": [
              [
                "682"
              ],
              [
                "928"
              ]
            ]
          },
          " × 100 ≒ 73%"
        ]
      ],
      "equationsVi": [
        [
          "Hệ số phụ tải tổng hợp = ",
          {
            "fraction": [
              [
                "682"
              ],
              [
                "928"
              ]
            ]
          },
          " × 100 ≒ 73%"
        ]
      ]
    },
    {
      "jp": "解説",
      "vi": "Giải thích",
      "heading": true
    },
    {
      "jp": "設備容量（設備電力kW）に需要率を掛けると、最大需要電力が求められます。また、最大需要電力に負荷率を掛けると、平均需要電力が求められます。なお、1日の電力量は、平均需要電力の24倍です。設備に需要率を掛けて最大電力、最大に負荷率を掛けて平均電力、1日の電力量は平均の24倍のように短い文章にすると覚えやすくなります。",
      "vi": "Nhân công suất lắp đặt (công suất thiết bị tính bằng kW) với hệ số nhu cầu để tính công suất nhu cầu cực đại. Nhân công suất cực đại với hệ số phụ tải để tính công suất nhu cầu trung bình. Điện năng trong một ngày bằng công suất trung bình nhân 24 giờ. Cách nhớ ngắn gọn: thiết bị nhân hệ số nhu cầu ra cực đại, cực đại nhân hệ số phụ tải ra trung bình, trung bình nhân 24 giờ ra điện năng một ngày."
    },
    {
      "jp": "解答　(a) **16370 kW・h**　(b) **73 %**",
      "vi": "Đáp án (a) **16.370 kWh** (b) **73%**"
    }
  ],
  "497": [
    {
      "jp": "3-2 地絡電流　といえば　単相交流回路の電流となる",
      "vi": "3-2 Dòng chạm đất: trở thành dòng trong mạch một pha tương đương.",
      "heading": true
    },
    {
      "diagram": "lawZeroSequence497"
    },
    {
      "jp": "地絡電流、B種接地工事の抵抗値",
      "vi": "Dòng chạm đất và điện trở nối đất loại B.",
      "heading": true
    },
    {
      "jp": "地絡電流は零相電流ともいい、各相とも同一の大きさ、同一の位相で、単相交流電流の成分です。",
      "vi": "Dòng chạm đất còn gọi dòng thứ tự không; ba thành phần cùng pha và cùng biên độ, tạo thành mạch tương đương một pha.",
      "note": "Trong phân tích thành phần đối xứng, mỗi pha có cùng thành phần I₀. Dòng đi về qua đất trong sơ đồ là tổng ba thành phần, 3I₀."
    },
    {
      "jp": "零相電圧は、地絡したときに生じる単相交流電圧の成分です。",
      "vi": "Điện áp thứ tự không là thành phần điện áp một pha khi xảy ra chạm đất."
    },
    {
      "jp": "B種接地工事の接地抵抗値 R_B は、1線地絡電流を I_g とすると、次のように決められています。",
      "vi": "Gọi I_g là dòng chạm đất một pha. Giới hạn điện trở nối đất loại B R_B được tính như sau.",
      "equations": [
        [
          "R_B = ",
          {
            "fraction": [
              [
                "150"
              ],
              [
                "I_g"
              ]
            ],
            "red": true
          },
          "［Ω］以下"
        ]
      ],
      "equationsVi": [
        [
          "R_B ≤ ",
          {
            "fraction": [
              [
                "150"
              ],
              [
                "I_g"
              ]
            ],
            "red": true
          },
          " [Ω]"
        ]
      ]
    },
    {
      "jp": "高低圧が混触の場合で1秒を超え2秒以内に高圧電路を自動遮断のとき。",
      "vi": "Khi chạm lẫn cao–hạ áp và mạch cao áp tự động cắt sau hơn 1 giây đến tối đa 2 giây.",
      "equations": [
        [
          "R_B = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "I_g"
              ]
            ],
            "red": true
          },
          "［Ω］以下"
        ]
      ],
      "equationsVi": [
        [
          "R_B ≤ ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "I_g"
              ]
            ],
            "red": true
          },
          " [Ω]"
        ]
      ]
    },
    {
      "jp": "高低圧が混触の場合で1秒以内に高圧電路を自動遮断のとき。",
      "vi": "Khi chạm lẫn cao–hạ áp và mạch cao áp tự động cắt trong tối đa 1 giây.",
      "equations": [
        [
          "R_B = ",
          {
            "fraction": [
              [
                "600"
              ],
              [
                "I_g"
              ]
            ],
            "red": true
          },
          "［Ω］以下"
        ]
      ],
      "equationsVi": [
        [
          "R_B ≤ ",
          {
            "fraction": [
              [
                "600"
              ],
              [
                "I_g"
              ]
            ],
            "red": true
          },
          " [Ω]"
        ]
      ]
    },
    {
      "jp": "これは、高圧電路と低圧側との混触により、低圧電路の電圧が**150 V**以上に上昇しないように決められています。また、自動遮断装置を設けたときは、2秒以内で**300 V**、1秒以内で**600 V**に緩和されています。",
      "vi": "Giới hạn này nhằm tránh để điện áp mạch hạ áp tăng lên tới **150 V** hoặc cao hơn khi chạm lẫn cao–hạ áp. Khi có thiết bị tự động cắt, mức được nới lên **300 V** nếu cắt trong 2 giây và **600 V** nếu cắt trong 1 giây."
    },
    {
      "jp": "POINT",
      "vi": "Ghi nhớ",
      "heading": true
    },
    {
      "jp": "地絡電流といえば**零相電流**のことで単相交流電流の成分。",
      "vi": "Khi xét dòng chạm đất, **dòng thứ tự không** là thành phần dòng xoay chiều một pha."
    },
    {
      "jp": "B種接地の抵抗値は2秒遮断で**300**、1秒遮断で**600**に緩和。",
      "vi": "Giới hạn điện trở nối đất loại B dùng tử số **300** khi cắt trong 2 giây, **600** khi cắt trong 1 giây.",
      "equations": [
        [
          "R_B ≤ ",
          {
            "fraction": [
              [
                "150"
              ],
              [
                "1線地絡電流"
              ]
            ],
            "red": true
          }
        ]
      ],
      "equationsVi": [
        [
          "R_B ≤ ",
          {
            "fraction": [
              [
                "150"
              ],
              [
                "Dòng chạm đất một pha"
              ]
            ],
            "red": true
          }
        ]
      ]
    }
  ],
  "498": [
    {
      "jp": "練習問題01　B種接地抵抗、漏えい電流",
      "vi": "Bài luyện 01 · Điện trở nối đất B và dòng rò.",
      "heading": true
    },
    {
      "jp": "図は三相3線式高圧電路に変圧器で結合された変圧器低圧側電路を示したものである。",
      "vi": "Sơ đồ mạch thứ cấp của máy biến áp nối lưới cao áp ba pha ba dây."
    },
    {
      "jp": "B種接地工事の接地抵抗を R_B、対地静電容量 C＝0.1 μF、線間電圧 V＝200 V、周波数 f＝50 Hz として、次の(a)、(b)に答えよ。",
      "vi": "Cho điện trở nối đất B là R_B, điện dung tới đất mỗi pha C=0,1 μF, điện áp dây 200 V, f=50 Hz."
    },
    {
      "jp": "ただし、変圧器の高圧電路の1線地絡電流 I_g＝5 A、高低圧混触時に低圧電路の対地電圧が150 Vを超えた場合は1.3秒で自動的に高圧電路を遮断する装置が設けられている。",
      "vi": "Dòng chạm đất một pha phía cao áp I_g=5 A; nếu chạm lẫn cao–hạ áp gây điện áp tới đất phía hạ vượt 150 V, thiết bị sẽ cắt cao áp trong 1,3 giây."
    },
    {
      "jp": "(a) R_B の抵抗値について『電気設備技術基準の解釈』で許容される上限の値 R_Bmax は。",
      "vi": "(a) Tìm giới hạn trên R_Bmax của điện trở R_B được phép theo «Giải thích Tiêu chuẩn kỹ thuật thiết bị điện»."
    },
    {
      "jp": "(b) R_B＝10 Ω としたとき、R_B に流れる電流 I_B は。",
      "vi": "(b) Nếu R_B=10 Ω, tìm dòng I_B qua điện trở nối đất."
    },
    {
      "diagram": "lawGroundLeakage498"
    },
    {
      "jp": "解き方",
      "vi": "Cách giải",
      "heading": true
    },
    {
      "jp": "(a) 混触時に2秒以内で高圧電路を遮断する装置がある場合、1線地絡電流 I_g＝5 A により R_Bmax を求める。",
      "vi": "(a) Có thiết bị cắt mạch cao áp trong vòng 2 giây khi chạm lẫn. Dùng dòng chạm đất một pha I_g = 5 A để tính R_Bmax.",
      "equations": [
        [
          "R_Bmax = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "I_g"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "5"
              ]
            ]
          },
          " = 60 Ω"
        ]
      ],
      "equationsVi": [
        [
          "R_Bmax = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "I_g"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "5"
              ]
            ]
          },
          " = 60 Ω"
        ]
      ]
    },
    {
      "jp": "(b) R_B を除き、テブナンの等価回路で考えます。",
      "vi": "(b) Bỏ tải R_B và dùng tương đương Thévenin để tính dòng."
    },
    {
      "diagram": "lawThevenin498"
    },
    {
      "jp": "図aの地絡前のa-b間の電圧 E_ab（CはY結線）。",
      "vi": "Điện áp E_ab giữa a–b trước khi chạm đất ở hình a (các tụ C đấu hình sao).",
      "equations": [
        [
          "E_ab = ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          },
          " V"
        ]
      ],
      "equationsVi": [
        [
          "E_ab = ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          },
          " V"
        ]
      ]
    },
    {
      "jp": "a-b間のインピーダンス Z_ab。",
      "vi": "Tổng trở giữa a–b.",
      "equations": [
        [
          "Z_ab = ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ωC"
              ]
            ]
          },
          "［Ω］"
        ]
      ],
      "equationsVi": [
        [
          "Z_ab = ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ωC"
              ]
            ]
          },
          " [Ω]"
        ]
      ]
    },
    {
      "jp": "R_B を無視できる条件。",
      "vi": "Điều kiện bỏ qua R_B.",
      "note": "Ở đây, điện kháng xấp xỉ 10,6 kΩ, lớn hơn nhiều so với 10 Ω.",
      "equations": [
        [
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ωC"
              ]
            ]
          },
          " ≫ R_B"
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ωC"
              ]
            ]
          },
          " ≫ R_B"
        ]
      ]
    }
  ],
  "499": [
    {
      "jp": "I_B の計算。",
      "vi": "Tính dòng I_B.",
      "equations": [
        [
          "I_B = ",
          {
            "fraction": [
              [
                "E_ab"
              ],
              [
                "Z_ab"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "200"
                    ],
                    [
                      "√3"
                    ]
                  ]
                }
              ],
              [
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ωC"
                    ]
                  ]
                }
              ]
            ]
          },
          " = 3ωC × ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          "I_B = ",
          {
            "fraction": [
              [
                "E_ab"
              ],
              [
                "Z_ab"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "200"
                    ],
                    [
                      "√3"
                    ]
                  ]
                }
              ],
              [
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ωC"
                    ]
                  ]
                }
              ]
            ]
          },
          " = 3ωC × ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "数値を代入する。",
      "vi": "Thay số.",
      "equations": [
        [
          "3 × 2 × π × 50 × 0.1 × 10⁻⁶ × ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          },
          " ≒ 10.9 × 10⁻³ A → 11 mA"
        ]
      ],
      "equationsVi": [
        [
          "3 × 2 × π × 50 × 0,1 × 10⁻⁶ × ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          },
          " ≈ 10,9 × 10⁻³ A → 11 mA"
        ]
      ]
    },
    {
      "jp": "解答　(a) **R_Bmax＝60 Ω**　(b) **I_B＝11 mA**",
      "vi": "Đáp án (a) **R_Bmax = 60 Ω** (b) **I_B = 11 mA**"
    },
    {
      "jp": "参考",
      "vi": "Tham khảo",
      "heading": true
    },
    {
      "jp": "テブナンの定理を利用することで、次のような手順で(b)の解答を求めることができます。\n・電流を求める抵抗 R_B を回路から外す。\n・a-b間の電圧 E_ab を求める。\n・a-b間のインピーダンス Z_ab を求める。（3線を短絡して考えると3つのCは並列接続）\n・テブナンの等価回路により I_B を求める。",
      "vi": "Có thể dùng định lý Thévenin để giải câu (b) theo các bước sau.\n• Tháo điện trở R_B cần tính dòng ra khỏi mạch.\n• Tính điện áp E_ab giữa a–b.\n• Tính tổng trở Z_ab giữa a–b. Khi nối tắt ba dây để tính tổng trở, ba tụ C mắc song song.\n• Dùng mạch tương đương Thévenin để tính I_B."
    },
    {
      "jp": "CはY結線になっているので、E_ab は相電圧となる。",
      "vi": "Do các tụ C đấu hình sao nên E_ab là điện áp pha.",
      "equations": [
        [
          "E_ab = ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          },
          "［V］"
        ]
      ],
      "equationsVi": [
        [
          "E_ab = ",
          {
            "fraction": [
              [
                "200"
              ],
              [
                "√3"
              ]
            ]
          },
          " [V]"
        ]
      ]
    },
    {
      "jp": "R_B² は小さいので無視できる。",
      "vi": "Có thể bỏ qua R_B² vì rất nhỏ so với bình phương điện kháng.",
      "equations": [
        [
          "I_B = ",
          {
            "fraction": [
              [
                "E_ab"
              ],
              [
                "√(R_B² + (",
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ωC"
                    ]
                  ]
                },
                ")²)"
              ]
            ]
          },
          " ≒ ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "200"
                    ],
                    [
                      "√3"
                    ]
                  ]
                }
              ],
              [
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ωC"
                    ]
                  ]
                }
              ]
            ]
          },
          "　（",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ωC"
              ]
            ]
          },
          " ≫ R_B）"
        ]
      ],
      "equationsVi": [
        [
          "I_B = ",
          {
            "fraction": [
              [
                "E_ab"
              ],
              [
                "√(R_B² + (",
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ωC"
                    ]
                  ]
                },
                ")²)"
              ]
            ]
          },
          " ≈ ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "200"
                    ],
                    [
                      "√3"
                    ]
                  ]
                }
              ],
              [
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ωC"
                    ]
                  ]
                }
              ]
            ]
          },
          "  (",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ωC"
              ]
            ]
          },
          " ≫ R_B)"
        ]
      ]
    }
  ],
  "500": [
    {
      "jp": "3-3 力率改善　といえば　電力の三角形をつくる",
      "vi": "3-3 Cải thiện hệ số công suất: dùng tam giác công suất.",
      "heading": true
    },
    {
      "diagram": "lawPowerTriangle500"
    },
    {
      "jp": "力率改善とは",
      "vi": "Khái niệm cải thiện hệ số công suất.",
      "heading": true
    },
    {
      "jp": "電動機や蛍光灯などの需要設備は、電流位相が電圧位相よりも遅れます。このように、電流位相が遅れる負荷を**遅れ力率の負荷**といいます。",
      "vi": "Động cơ và đèn huỳnh quang thường làm dòng trễ pha so với áp, gọi là **tải có hệ số công suất trễ**."
    },
    {
      "jp": "遅れ力率の負荷を電力の三角形で表すと、上図(a)のように電力の直角三角形で表すことができます。電気エネルギーとして利用されるのが**有効電力 P**であり、**皮相電力 S**は見かけ上の大きさで、**無効電力 Q**はエネルギーにならない成分です。",
      "vi": "Tải có hệ số công suất trễ được biểu diễn bằng tam giác vuông công suất như hình (a). **Công suất tác dụng P** là phần được sử dụng dưới dạng điện năng. **Công suất biểu kiến S** là độ lớn biểu kiến. **Công suất phản kháng Q** là thành phần không tạo ra điện năng hữu ích."
    },
    {
      "jp": "負荷に並列に**コンデンサ**を接続すると、コンデンサに流れる進みの電流により**無効電力**を減少させることができ、**力率**の値（cos θ）を1に近づけることができます。これを、**力率改善**といいます。",
      "vi": "Mắc **tụ điện** song song với tải. Dòng sớm pha qua tụ làm giảm **công suất phản kháng**, đưa **hệ số công suất** cos θ tiến gần 1. Đó là **cải thiện hệ số công suất**."
    },
    {
      "jp": "力率改善を行うことで、有効電力Pが同じでも皮相電力を小さくでき、配電線の有効利用と電力損失の軽減ができます。",
      "vi": "Khi cải thiện hệ số công suất, như hình (b), công suất tác dụng P giữ nguyên nhưng công suất biểu kiến có thể giảm. Nhờ đó sử dụng đường dây phân phối hiệu quả hơn và giảm tổn hao điện."
    },
    {
      "jp": "POINT",
      "vi": "Ghi nhớ",
      "heading": true
    },
    {
      "jp": "力率は**有効**電力と**皮相**電力の比。",
      "vi": "Hệ số công suất là tỷ số giữa công suất **tác dụng** và công suất **biểu kiến**.",
      "equations": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "P"
              ],
              [
                "S"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "P"
              ],
              [
                "S"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "力率改善といえば力率を**1**に近づけることをいう。",
      "vi": "Cải thiện hệ số công suất là đưa hệ số công suất tiến gần **1**."
    },
    {
      "jp": "力率改善の効果といえば**損失**の減少、設備の有効利用ができる。",
      "vi": "Cải thiện hệ số công suất giúp giảm **tổn hao** và sử dụng thiết bị hiệu quả hơn."
    }
  ],
  "501": [
    {
      "jp": "練習問題01　力率改善",
      "vi": "Bài luyện 01 · Bù hệ số công suất.",
      "heading": true
    },
    {
      "jp": "三相3線式6 600 Vの高圧電路に300 kW、遅れ力率0.6の三相負荷が接続されている。",
      "vi": "Lưới cao áp ba pha ba dây 6.600 V cấp tải 300 kW với cosφ trễ 0,6."
    },
    {
      "jp": "この負荷の力率改善を行う。進相コンデンサ設備は図に示すように直列リアクトル付三相コンデンサとし、直列リアクトル SR のリアクタンス X_L［Ω］は、三相コンデンサ SC のリアクタンス X_C［Ω］の6%とする。次の(a)、(b)の問に答えよ。",
      "vi": "Cần cải thiện hệ số công suất của tải. Bộ tụ bù gồm tụ điện ba pha và cuộn kháng mắc nối tiếp như hình. Cảm kháng X_L [Ω] của cuộn kháng SR bằng 6% dung kháng X_C [Ω] của tụ ba pha SC. Trả lời (a) và (b)."
    },
    {
      "diagram": "lawCompensationCircuit501"
    },
    {
      "jp": "(a) 進相コンデンサ設備を高圧電路に接続したとき、三相コンデンサSCの端子電圧V_C[V]は。",
      "vi": "(a) Điện áp đầu cực tụ SC khi nối vào lưới là bao nhiêu?"
    },
    {
      "jp": "(b) 進相コンデンサ設備を負荷と並列に接続し、力率を遅れ0.6から遅れ0.8に改善したとき、三相コンデンサSCの容量Q_C[kvar]は。",
      "vi": "(b) Để nâng cosφ từ 0,6 lên 0,8 trễ, tìm dung lượng tụ SC [kvar]."
    },
    {
      "jp": "解き方　(a)",
      "vi": "Cách giải (a)",
      "heading": true
    },
    {
      "jp": "コンデンサとリアクトルの一相分を取り出すと、下図のようになります。",
      "vi": "Xét một pha của tụ điện và cuộn kháng như hình dưới."
    },
    {
      "diagram": "lawReactanceVector501"
    },
    {
      "jp": "X_L＝0.06X_C、合成リアクタンスはX_L−X_C＝−0.94X_C。",
      "vi": "X_L=0,06X_C; tổng kháng nối tiếp =−0,94X_C."
    },
    {
      "jp": "リアクタンスの比は、電圧の比に等しい。",
      "vi": "Tỷ số điện kháng bằng tỷ số điện áp vì dòng qua hai phần tử nối tiếp bằng nhau.",
      "equations": [
        [
          "X_C(0.06 − 1) : (−X_C) = 6600 : V_C"
        ]
      ],
      "equationsVi": [
        [
          "X_C(0.06 − 1) : (−X_C) = 6600 : V_C"
        ]
      ]
    },
    {
      "jp": "外項の積＝内項の積。",
      "vi": "Tích hai số hạng ngoài bằng tích hai số hạng trong.",
      "equations": [
        [
          "V_C X_C(0.06 − 1) = −6600 X_C"
        ]
      ],
      "equationsVi": [
        [
          "V_C X_C(0.06 − 1) = −6600 X_C"
        ]
      ]
    },
    {
      "jp": "コンデンサの端子電圧 V_C。",
      "vi": "Điện áp đầu cực tụ V_C.",
      "equations": [
        [
          "V_C = ",
          {
            "fraction": [
              [
                "−6600 X_C"
              ],
              [
                "X_C(0.06 − 1)"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "6600"
              ],
              [
                "0.94"
              ]
            ]
          },
          " ≒ 7021 V"
        ]
      ],
      "equationsVi": [
        [
          "V_C = ",
          {
            "fraction": [
              [
                "−6600 X_C"
              ],
              [
                "X_C(0.06 − 1)"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "6600"
              ],
              [
                "0.94"
              ]
            ]
          },
          " ≒ 7021 V"
        ]
      ]
    }
  ],
  "502": [
    {
      "jp": "(b) コンデンサ容量",
      "vi": "(b) Dung lượng tụ điện",
      "heading": true
    },
    {
      "jp": "力率を遅れ0.6から遅れ0.8に改善するには、図の三角形から、175 kV・Aのコンデンサ容量が必要です。ただし SR が挿入されるため SC の容量 Q_C は電圧と同様に大きくなります。",
      "vi": "Để cải thiện hệ số công suất từ 0,6 trễ lên 0,8 trễ, tam giác công suất cho thấy cần bù 175 kvar. Do có cuộn kháng SR mắc nối tiếp, dung lượng Q_C của tụ SC tăng theo cùng tỷ lệ với điện áp.",
      "note": "Đoạn văn Nhật in kV・A. Đại lượng đang tính là công suất phản kháng, dùng kvar như trong phép tính và đáp án."
    },
    {
      "diagram": "lawCompensationTriangle502"
    },
    {
      "jp": "力率0.6のとき。",
      "vi": "Với hệ số công suất 0,6.",
      "equations": [
        [
          "S₁ = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "0.6"
              ]
            ]
          },
          " = 500 kV・A、Q₁ = 500 × 0.8 = 400 kvar"
        ]
      ],
      "equationsVi": [
        [
          "S₁ = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "0.6"
              ]
            ]
          },
          " = 500 kV・A、Q₁ = 500 × 0.8 = 400 kvar"
        ]
      ]
    },
    {
      "jp": "力率0.8のとき。",
      "vi": "Với hệ số công suất 0,8.",
      "equations": [
        [
          "S₂ = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "0.8"
              ]
            ]
          },
          " = 375 kV・A、Q₂ = 375 × 0.6 = 225 kvar"
        ]
      ],
      "equationsVi": [
        [
          "S₂ = ",
          {
            "fraction": [
              [
                "300"
              ],
              [
                "0.8"
              ]
            ]
          },
          " = 375 kV・A、Q₂ = 375 × 0.6 = 225 kvar"
        ]
      ]
    },
    {
      "jp": "図中の計算表記：400 − 255 ＝ **175 kvar**。",
      "vi": "Phép tính in trong hình ghi 400 − 255 = **175 kvar**.",
      "note": "Hình in nhầm 255. Từ Q₂ = 225 kvar trên cùng hình, phép tính đúng là 400 − 225 = 175 kvar."
    },
    {
      "jp": "三相コンデンサ SC の容量。",
      "vi": "Dung lượng tụ ba pha SC.",
      "equations": [
        [
          "Q_C = ",
          {
            "fraction": [
              [
                "175"
              ],
              [
                "1 − 0.06"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "175"
              ],
              [
                "0.94"
              ]
            ]
          },
          " ≒ 186 kvar"
        ]
      ],
      "equationsVi": [
        [
          "Q_C = ",
          {
            "fraction": [
              [
                "175"
              ],
              [
                "1 − 0.06"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "175"
              ],
              [
                "0.94"
              ]
            ]
          },
          " ≒ 186 kvar"
        ]
      ]
    },
    {
      "jp": "SR：Series reactor（直列リアクトル）\nSC：Static capacitor（進相コンデンサ）",
      "vi": "SR: cuộn kháng nối tiếp.\nSC: tụ bù sớm pha."
    },
    {
      "jp": "暗記　cos θ＝0.6 のとき sin θ＝0.8。cos θ＝0.8 のとき sin θ＝0.6。",
      "vi": "Ghi nhớ. Khi cos θ = 0,6 thì sin θ = 0,8. Khi cos θ = 0,8 thì sin θ = 0,6."
    },
    {
      "jp": "解答　(a) **V_C＝7021 V**　(b) **Q_C＝186 kvar**",
      "vi": "Đáp án (a) **V_C = 7.021 V** (b) **Q_C = 186 kvar**"
    },
    {
      "jp": "参考　SRとSCのリアクタンスを複素表示すると、jX_L−jX_C＝jX_C(0.06−1)。",
      "vi": "Biểu diễn số phức: jX_L−jX_C=jX_C(0,06−1)."
    }
  ],
  "503": [
    {
      "jp": "3-4 支線に関する計算　といえば　安全率は2.5又は1.5以上",
      "vi": "3-4 Tính dây néo cột: hệ số an toàn ≥2,5 hoặc ≥1,5.",
      "heading": true
    },
    {
      "jp": "支線の役割",
      "vi": "Vai trò dây néo.",
      "heading": true
    },
    {
      "jp": "支線は、鉄柱、鉄筋コンクリート柱、木柱等の強度を分担します。支線には次のような条件が必要です。",
      "vi": "Dây néo hỗ trợ chịu lực cho cột thép, bê tông cốt thép, cột gỗ. Dây néo phải đáp ứng các điều kiện sau."
    },
    {
      "jp": "①支線の安全率は**2.5**（引き留め箇所に使用する場合は**1.5**）以上であること。",
      "vi": "① Hệ số an toàn dây néo ≥**2,5**, nếu tại điểm neo cuối ≥**1,5**."
    },
    {
      "jp": "②支線をより線とした場合は、素線**3条**以上（**3本**以上）をより合わせたものであること。",
      "vi": "② Nếu dây néo là dây xoắn, phải xoắn từ **3 sợi thành phần** trở lên (**ít nhất 3 sợi**)."
    },
    {
      "jp": "③素線の直径が**2 mm**以上及び引張強さ0.69 kN/mm²以上の金属線を用いること。",
      "vi": "③ Mỗi sợi kim loại đường kính ≥**2 mm**, độ bền kéo ≥0,69 kN/mm²."
    },
    {
      "jp": "支線が支える力",
      "vi": "Lực dây néo chống lực kéo ngang.",
      "heading": true
    },
    {
      "jp": "電線の張力を T₁、支線の張力（支線の引張荷重）を T₀ とすると、支持物の根本を支点とするモーメント（力×支点からの長さ）は等しい。",
      "vi": "Gọi T₁ là lực căng dây điện và T₀ là lực căng (tải kéo) của dây néo. Hai mômen quanh chân cột (lực nhân cánh tay đòn) cân bằng."
    },
    {
      "diagram": "lawGuyForce503"
    },
    {
      "jp": "支持物の根本を支点とするモーメントのつり合い。",
      "vi": "Cân bằng mômen quanh chân cột.",
      "equations": [
        [
          "T₁H₁ = T₂H₂"
        ]
      ],
      "equationsVi": [
        [
          "T₁H₁ = T₂H₂"
        ]
      ]
    },
    {
      "jp": "支線の張力の水平成分。",
      "vi": "Thành phần ngang của lực căng dây néo.",
      "equations": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "T₂"
              ],
              [
                "T₀"
              ]
            ]
          },
          " → T₂ = T₀ cos θ"
        ]
      ],
      "equationsVi": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "T₂"
              ],
              [
                "T₀"
              ]
            ]
          },
          " → T₂ = T₀ cos θ"
        ]
      ]
    },
    {
      "jp": "モーメントの式に代入する。",
      "vi": "Thay vào phương trình mômen.",
      "equations": [
        [
          "T₁H₁ = T₂H₂ = T₀ cos θ H₂"
        ]
      ],
      "equationsVi": [
        [
          "T₁H₁ = T₂H₂ = T₀ cos θ H₂"
        ]
      ]
    },
    {
      "jp": "POINT",
      "vi": "Ghi nhớ",
      "heading": true
    },
    {
      "jp": "支持物の根本を支点とするモーメントから**支線の張力**を求める。",
      "vi": "Tính **lực căng dây néo** từ cân bằng mômen quanh chân cột.",
      "equations": [
        [
          "T₀ = ",
          {
            "fraction": [
              [
                "T₁H₁"
              ],
              [
                "H₂ cos θ"
              ]
            ],
            "red": true
          },
          " [kN]"
        ]
      ],
      "equationsVi": [
        [
          "T₀ = ",
          {
            "fraction": [
              [
                "T₁H₁"
              ],
              [
                "H₂ cos θ"
              ]
            ],
            "red": true
          },
          " [kN]"
        ]
      ]
    },
    {
      "jp": "H₁＝H₂ のとき。",
      "vi": "Khi hai điểm đặt lực có cùng độ cao H₁ = H₂.",
      "equations": [
        [
          "T₀ = ",
          {
            "fraction": [
              [
                "T₁"
              ],
              [
                "cos θ"
              ]
            ],
            "red": true
          },
          " [kN]"
        ]
      ],
      "equationsVi": [
        [
          "T₀ = ",
          {
            "fraction": [
              [
                "T₁"
              ],
              [
                "cos θ"
              ]
            ],
            "red": true
          },
          " [kN]"
        ]
      ]
    },
    {
      "jp": "T₁：電線の張力［kN］、H₁：電線の取付高さ、H₂：支線の取付高さ。",
      "vi": "T₁ là lực căng dây điện [kN], H₁ là độ cao gắn dây điện và H₂ là độ cao gắn dây néo."
    }
  ],
  "504": [
    {
      "jp": "支線条数",
      "vi": "Tính số sợi dây néo.",
      "heading": true
    },
    {
      "jp": "支線に加わる張力 T₀ に安全率を掛けた大きさを、支線1条当たりの引張荷重で割った値が、支線の必要条数 n になります。条とは本数です。小数以下は、切り上げて整数とします。",
      "vi": "Lấy lực căng T₀ tác dụng lên dây néo nhân hệ số an toàn rồi chia cho sức chịu kéo của một sợi để được số sợi cần thiết n. Nếu kết quả có phần thập phân, làm tròn lên số nguyên."
    },
    {
      "jp": "支線条数 n",
      "vi": "Số sợi dây néo n",
      "equations": [
        [
          "支線条数 n＝",
          {
            "fraction": [
              [
                "T₀ × 安全率"
              ],
              [
                "1条当たりの引張荷重"
              ]
            ],
            "red": true
          },
          ""
        ]
      ],
      "equationsVi": [
        [
          "Số sợi dây néo n = ",
          {
            "fraction": [
              [
                "T₀ × hệ số an toàn"
              ],
              [
                "Sức chịu kéo của một sợi"
              ]
            ],
            "red": true
          },
          ""
        ]
      ]
    },
    {
      "jp": "練習問題01　支線",
      "vi": "Bài luyện 01 · Tính dây néo.",
      "heading": true
    },
    {
      "jp": "図のように既設の高圧架空電線路から、高圧架空電線を高低差なく径間30 m延長することにした。次の(a)及び(b)の問に答えよ。",
      "vi": "Như hình, đường dây cao áp trên không được kéo dài từ tuyến hiện có thêm một nhịp 30 m, không chênh cao. Trả lời (a) và (b)."
    },
    {
      "diagram": "lawGuyExercise504"
    },
    {
      "jp": "(a) 電線の水平張力が15 kNである。支線に生じる引張荷重 T₀［kN］は。",
      "vi": "(a) Lực căng ngang của dây điện là 15 kN. Tính tải kéo T₀ [kN] trong dây néo."
    },
    {
      "jp": "(b) 支線の安全率を1.5とした場合、支線の最少素線条数 n は。ただし、支線の素線には、直径2.9 mmの亜鉛めっき鋼より線（引張強さ1.23 kN/mm²）を使用し、素線のより合わせによる引張荷重の減少係数は無視するものとする。",
      "vi": "(b) Với hệ số an toàn của dây néo là 1,5, tìm số sợi thành phần tối thiểu n. Dùng sợi thép mạ kẽm đường kính 2,9 mm, độ bền kéo 1,23 kN/mm². Bỏ qua hệ số giảm tải kéo do xoắn các sợi với nhau."
    },
    {
      "jp": "解き方　(a)",
      "vi": "Cách giải (a)",
      "heading": true
    },
    {
      "diagram": "lawGuyExerciseForce504"
    },
    {
      "jp": "図の三角形から。",
      "vi": "Từ tam giác trong hình.",
      "equations": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "15"
              ],
              [
                "T₀"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "√(8² + 4²)"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "15"
              ],
              [
                "T₀"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "√(8² + 4²)"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "支線に生じる引張荷重 T₀。",
      "vi": "Tải kéo T₀ trong dây néo.",
      "equations": [
        [
          "T₀ = 15 × ",
          {
            "fraction": [
              [
                "√(8² + 4²)"
              ],
              [
                "4"
              ]
            ]
          },
          " ≒ 33.5 kN → 34 kN"
        ]
      ],
      "equationsVi": [
        [
          "T₀ = 15 × ",
          {
            "fraction": [
              [
                "√(8² + 4²)"
              ],
              [
                "4"
              ]
            ]
          },
          " ≒ 33.5 kN → 34 kN"
        ]
      ]
    }
  ],
  "505": [
    {
      "jp": "(b) 素線1条の引張強さ F₁条 は、",
      "vi": "(b) Sức chịu kéo F₁ của một sợi.",
      "note": "Nhân độ bền kéo tính theo kN/mm² với tiết diện sợi tính theo mm².",
      "equations": [
        [
          "F₁ = 1.23 × π × (",
          {
            "fraction": [
              [
                "2.9"
              ],
              [
                "2"
              ]
            ]
          },
          ")² ≒ 8.12 kN"
        ]
      ],
      "equationsVi": [
        [
          "F₁ = 1.23 × π × (",
          {
            "fraction": [
              [
                "2.9"
              ],
              [
                "2"
              ]
            ]
          },
          ")² ≒ 8.12 kN"
        ]
      ]
    },
    {
      "jp": "素線条数 n は、",
      "vi": "Số sợi n, làm tròn lên số nguyên.",
      "note": "Dùng 33,5 kN ở bước trung gian.",
      "equations": [
        [
          "n = ",
          {
            "fraction": [
              [
                "1.5 T₀"
              ],
              [
                "F₁"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "1.5 × 33.5"
              ],
              [
                "8.12"
              ]
            ]
          },
          " ≒ 6.19 → 7"
        ]
      ],
      "equationsVi": [
        [
          "n = ",
          {
            "fraction": [
              [
                "1.5 T₀"
              ],
              [
                "F₁"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "1.5 × 33.5"
              ],
              [
                "8.12"
              ]
            ]
          },
          " ≒ 6.19 → 7"
        ]
      ]
    },
    {
      "jp": "解説",
      "vi": "Giải thích",
      "heading": true
    },
    {
      "jp": "水平張力15 kNと支線の引張荷重 T₀ [kN] の関係を表す力の釣り合いの三角形から",
      "vi": "Từ tam giác cân bằng lực biểu diễn quan hệ giữa lực kéo ngang 15 kN và lực kéo của dây néo T₀ [kN]:"
    },
    {
      "jp": "底辺と斜辺から cos θ を表す。",
      "vi": "Tính cos θ bằng cạnh kề chia cạnh huyền. Cạnh kề là khoảng cách ngang 4 m, cạnh huyền là chiều dài dây néo.",
      "equations": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "底辺"
              ],
              [
                "斜辺"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "15"
              ],
              [
                "T₀"
              ]
            ]
          },
          "、cos θ = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "支線の長さ"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "√(8² + 4²)"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          "cos θ = ",
          {
            "fraction": [
              [
                "Cạnh kề"
              ],
              [
                "Cạnh huyền"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "15"
              ],
              [
                "T₀"
              ]
            ]
          },
          " và cos θ = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "Chiều dài dây néo"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "√(8² + 4²)"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "次の関係から T₀ が求められる。",
      "vi": "Giải phương trình sau để tìm T₀.",
      "equations": [
        [
          {
            "fraction": [
              [
                "15"
              ],
              [
                "T₀"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "√(8² + 4²)"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "15"
              ],
              [
                "T₀"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "4"
              ],
              [
                "√(8² + 4²)"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "素線条数 n は、支線に生じる引張荷重の安全率倍の荷重に耐える条数とします。",
      "vi": "Số sợi phải đủ chịu lực bằng lực kéo của dây néo nhân hệ số an toàn."
    },
    {
      "jp": "解答　(a) **T₀ = 34 kN**　(b) **n = 7条**",
      "vi": "Đáp án: (a) **T₀ = 34 kN**; (b) **n = 7 sợi**."
    }
  ],
  "506": [
    {
      "jp": "3-5 変圧器の全日効率　といえば　1日の電力量の効率",
      "vi": "3-5 Hiệu suất cả ngày của máy biến áp: tỷ lệ điện năng trong 24 giờ.",
      "heading": true
    },
    {
      "jp": "全日効率とは",
      "vi": "Khái niệm hiệu suất ngày.",
      "heading": true
    },
    {
      "jp": "変圧器の負荷電流は時間とともに変化し、**銅損**も変化します。一次側は常時電圧が加わっているので、負荷の大小に関係なく、**鉄損**が生じています。このことから、変圧器の効率のよい利用のされ方を表すために**全日効率**が使われます。",
      "vi": "Dòng tải của máy biến áp thay đổi theo thời gian nên **tổn hao đồng** cũng thay đổi. Phía sơ cấp luôn được cấp điện áp nên có **tổn hao sắt** bất kể tải lớn hay nhỏ. Vì vậy dùng **hiệu suất cả ngày** để biểu thị hiệu quả sử dụng máy biến áp."
    },
    {
      "jp": "全日効率は、1日を通しての効率で、次式で表されます。",
      "vi": "Hiệu suất cả ngày tính theo điện năng suốt 24 giờ."
    },
    {
      "jp": "POINT　全日効率",
      "vi": "Ghi nhớ · Hiệu suất cả ngày",
      "heading": true
    },
    {
      "jp": "全日効率といえば1日の電力量の効率。",
      "vi": "Hiệu suất cả ngày tính theo điện năng trong một ngày.",
      "equations": [
        [
          "η_d = ",
          {
            "fraction": [
              [
                "W"
              ],
              [
                "W + W_i + W_c"
              ]
            ],
            "red": true
          },
          " × 100 [%]"
        ]
      ],
      "equationsVi": [
        [
          "η_d = ",
          {
            "fraction": [
              [
                "W"
              ],
              [
                "W + W_i + W_c"
              ]
            ],
            "red": true
          },
          " × 100 [%]"
        ]
      ]
    },
    {
      "jp": "W：1日の全出力電力量、W_i：1日の鉄損電力量、W_c：1日の銅損電力量。",
      "vi": "W: điện năng ra ngày; W_i: điện năng tổn hao lõi; W_c: điện năng tổn hao đồng."
    },
    {
      "jp": "鉄損電力量 W_i は、鉄損 P_i に1日の時間すなわち24を掛けます。",
      "vi": "Điện năng tổn hao sắt W_i bằng tổn hao sắt P_i nhân 24 giờ.",
      "note": "Áp dụng khi sơ cấp được cấp điện cả ngày.",
      "equations": [
        [
          "W_i = P_i × 24 [W・h]"
        ]
      ],
      "equationsVi": [
        [
          "W_i = P_i × 24 [W・h]"
        ]
      ]
    },
    {
      "jp": "全負荷銅損を P_c とし、定格の n 分の1の負荷で T 時間使用した場合の銅損電力量。",
      "vi": "Gọi P_c là tổn hao đồng ở đầy tải. Tính điện năng tổn hao đồng khi tải bằng một phần n tải định mức trong T giờ.",
      "note": "Nếu tải thay đổi theo từng khoảng, tính riêng điện năng tổn hao của mỗi khoảng rồi cộng lại.",
      "equations": [
        [
          "W_c = (",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "n"
              ]
            ]
          },
          ")² P_c T [W・h]"
        ]
      ],
      "equationsVi": [
        [
          "W_c = (",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "n"
              ]
            ]
          },
          ")² P_c T [W・h]"
        ]
      ]
    },
    {
      "jp": "練習問題01　変圧器の損失",
      "vi": "Bài luyện 01 · Tính tổn hao và hiệu suất máy biến áp.",
      "heading": true
    },
    {
      "jp": "定格容量500 kV・A、無負荷損500 W、負荷損（定格電流通電時）6700 W の変圧器を更新する。更新後の変圧器はトップランナー制度に適合した変圧器で、変圧器の容量、電圧及び周波数仕様は従来器と同じであるが、無負荷損は150 W、省エネ基準達成率は140%である。このとき、次の(a)及び(b)の問に答えよ。ただし、省エネ基準達成率は次式で与えられるものとする。",
      "vi": "Thay máy biến áp có công suất định mức 500 kVA, tổn hao không tải 500 W và tổn hao có tải ở dòng định mức 6.700 W. Máy mới phù hợp chương trình Top Runner, có cùng công suất, điện áp và tần số như máy cũ. Tổn hao không tải là 150 W và tỷ lệ đạt chuẩn tiết kiệm năng lượng là 140%. Trả lời (a) và (b), dùng công thức dưới đây để tính tỷ lệ đạt chuẩn."
    },
    {
      "jp": "省エネ基準達成率",
      "vi": "Tỷ lệ đạt chuẩn tiết kiệm năng lượng",
      "equations": [
        [
          "省エネ基準達成率＝",
          {
            "fraction": [
              [
                "基準エネルギー消費効率"
              ],
              [
                "W_i + W_C40"
              ]
            ]
          },
          " × 100 [%]"
        ]
      ],
      "equationsVi": [
        [
          "Tỷ lệ đạt chuẩn tiết kiệm năng lượng = ",
          {
            "fraction": [
              [
                "Mức tổn hao chuẩn"
              ],
              [
                "W_i + W_C40"
              ]
            ]
          },
          " × 100 [%]"
        ]
      ]
    }
  ],
  "507": [
    {
      "jp": "基準エネルギー消費効率は1250 W、W_i は無負荷損、W_c40 は負荷率40%時の負荷損とする。",
      "vi": "Mức tiêu thụ năng lượng chuẩn là 1.250 W. W_i là tổn hao không tải [W] và W_C40 là tổn hao có tải [W] ở mức tải 40%."
    },
    {
      "jp": "注）基準エネルギー消費効率とは判断の基準となる全損失をいう。",
      "vi": "Chú thích. Mức tiêu thụ năng lượng chuẩn ở đây là tổng tổn hao dùng làm mốc đánh giá."
    },
    {
      "jp": "(a) 更新後の変圧器の負荷損（定格電流通電時）W_cn2は。",
      "vi": "(a) Tìm tổn hao đồng định mức của máy mới."
    },
    {
      "jp": "(b) 出力電圧が定格状態で300 kW、遅れ力率0.8の負荷のとき、更新後全損失W₂の更新前全損失W₁に対する比率は。",
      "vi": "(b) Điện áp đầu ra của máy biến áp ở mức định mức, tải nối vào có công suất tác dụng 300 kW và hệ số công suất 0,8 trễ. Gọi W₁ là tổng tổn hao máy cũ và W₂ là tổng tổn hao máy mới ở điều kiện này. Tìm tỷ lệ W₂ so với W₁ theo phần trăm."
    },
    {
      "jp": "解き方　(a)",
      "vi": "Cách giải (a)",
      "heading": true
    },
    {
      "jp": "更新後の負荷率40%時の負荷損 W_C40 を求める。",
      "vi": "Tính tổn hao có tải W_C40 của máy mới tại mức tải 40%.",
      "equations": [
        [
          "140 = ",
          {
            "fraction": [
              [
                "1250"
              ],
              [
                "150 + W_C40"
              ]
            ]
          },
          " × 100"
        ]
      ],
      "equationsVi": [
        [
          "140 = ",
          {
            "fraction": [
              [
                "1250"
              ],
              [
                "150 + W_C40"
              ]
            ]
          },
          " × 100"
        ]
      ]
    },
    {
      "jp": "式を変形する。",
      "vi": "Biến đổi công thức.",
      "equations": [
        [
          "150 + W_C40 = ",
          {
            "fraction": [
              [
                "1250"
              ],
              [
                "140"
              ]
            ]
          },
          " × 100"
        ]
      ],
      "equationsVi": [
        [
          "150 + W_C40 = ",
          {
            "fraction": [
              [
                "1250"
              ],
              [
                "140"
              ]
            ]
          },
          " × 100"
        ]
      ]
    },
    {
      "jp": "40%負荷時の負荷損。",
      "vi": "Tổn hao có tải ở mức tải 40%.",
      "equations": [
        [
          "W_C40 = ",
          {
            "fraction": [
              [
                "1250"
              ],
              [
                "140"
              ]
            ]
          },
          " × 100 − 150 ≒ 743 W"
        ]
      ],
      "equationsVi": [
        [
          "W_C40 = ",
          {
            "fraction": [
              [
                "1250"
              ],
              [
                "140"
              ]
            ]
          },
          " × 100 − 150 ≒ 743 W"
        ]
      ]
    },
    {
      "jp": "負荷損は負荷率の2乗に比例する。",
      "vi": "Tổn hao có tải tỷ lệ với bình phương tỷ lệ tải.",
      "equations": [
        [
          "743 = 0.40² W_Cn2 → W_Cn2 = ",
          {
            "fraction": [
              [
                "743"
              ],
              [
                "0.40²"
              ]
            ]
          },
          " ≒ 4640 W"
        ]
      ],
      "equationsVi": [
        [
          "743 = 0.40² W_Cn2 → W_Cn2 = ",
          {
            "fraction": [
              [
                "743"
              ],
              [
                "0.40²"
              ]
            ]
          },
          " ≒ 4640 W"
        ]
      ]
    },
    {
      "jp": "(b) 全損失の比較",
      "vi": "(b) So sánh tổng tổn hao",
      "heading": true
    },
    {
      "jp": "300 kW、遅れ力率0.8のときの負荷率。",
      "vi": "Tỷ lệ tải ở 300 kW và hệ số công suất 0,8 trễ.",
      "note": "Chia công suất tác dụng cho hệ số công suất để được kVA rồi so với 500 kVA định mức.",
      "equations": [
        [
          "負荷率 = ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "300"
                    ],
                    [
                      "0.8"
                    ]
                  ]
                }
              ],
              [
                "500"
              ]
            ]
          },
          " = 0.75"
        ]
      ],
      "equationsVi": [
        [
          "Tỷ lệ tải = ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "300"
                    ],
                    [
                      "0,8"
                    ]
                  ]
                }
              ],
              [
                "500"
              ]
            ]
          },
          " = 0,75"
        ]
      ]
    },
    {
      "jp": "W₁＝500＋0.75²×6700＝4270 W。",
      "vi": "Tổn hao máy cũ 500+0,75²×6700≈4270 W."
    },
    {
      "jp": "W₂＝150＋0.75²×4640＝2760 W。",
      "vi": "Tổn hao máy mới 150+0,75²×4640≈2760 W."
    },
    {
      "jp": "W₂の W₁ に対する比率。",
      "vi": "Tỷ lệ W₂ so với W₁.",
      "equations": [
        [
          {
            "fraction": [
              [
                "W₂"
              ],
              [
                "W₁"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "2760"
              ],
              [
                "4270"
              ]
            ]
          },
          " ≒ 0.65 → 65%"
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "W₂"
              ],
              [
                "W₁"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "2760"
              ],
              [
                "4270"
              ]
            ]
          },
          " ≒ 0.65 → 65%"
        ]
      ]
    },
    {
      "jp": "※トップランナー制度とは、最も省エネ性能の高い製品を基準として機器の省エネ化を推進する制度です。また基準値をクリアした変圧器を「トップランナー制度に適合した変圧器」といいます。",
      "vi": "Chú thích. Chương trình Top Runner lấy sản phẩm có hiệu quả tiết kiệm năng lượng cao nhất làm chuẩn nhằm thúc đẩy thiết bị tiết kiệm năng lượng. Máy biến áp đáp ứng giá trị chuẩn được gọi là máy biến áp phù hợp chương trình Top Runner."
    },
    {
      "jp": "解答　(a) **W_Cn2＝4640 W**　(b) **65%**",
      "vi": "Đáp án (a) **W_Cn2 = 4.640 W** (b) **65%**"
    }
  ],
  "508": [
    {
      "jp": "3-6 調整池式水力発電所の運用　といえば　余剰分の利用",
      "vi": "3-6 Vận hành thủy điện có hồ điều tiết: tận dụng lượng nước thừa vào giờ thấp tải.",
      "heading": true
    },
    {
      "jp": "調整池式水力発電所の仕組み",
      "vi": "Nguyên lý của nhà máy thủy điện dùng hồ điều tiết.",
      "heading": true
    },
    {
      "jp": "**調整池式水力発電所**は、流量調整ができる**調整池**を持ち、軽負荷時に河川流量の**余剰分**を貯水し、重負荷時に放出して発電の調整を行います。",
      "vi": "**Nhà máy thủy điện có hồ điều tiết** sử dụng **hồ điều tiết** để điều chỉnh lưu lượng. Khi tải nhẹ, hồ tích **lượng nước dư** của sông. Khi tải cao, hồ xả phần nước đó để điều chỉnh phát điện."
    },
    {
      "diagram": "lawReservoirFlow508"
    },
    {
      "jp": "河川流量をQ₀ [m³/s]、オフピーク負荷時（軽負荷時）の使用水量をQ₁ [m³/s]、ピーク負荷時の使用水量をQ₂ [m³/s]とします。",
      "vi": "Gọi Q₀ là lưu lượng sông; Q₁ nước dùng giờ thấp điểm; Q₂ nước dùng giờ cao điểm."
    },
    {
      "jp": "POINT　調整池容量",
      "vi": "Ghi nhớ · Dung tích hồ điều tiết",
      "heading": true
    },
    {
      "jp": "調整池容量といえば軽負荷時の余剰分。",
      "vi": "Dung tích hồ điều tiết bằng thể tích nước dư trong thời gian tải nhẹ."
    },
    {
      "jp": "V＝**(Q₀−Q₁)(24−T)×3600**＝**(Q₂−Q₀)T×3600**［m³］。",
      "vi": "V = **(Q₀ − Q₁)(24 − T) × 3600** = **(Q₂ − Q₀)T × 3600** [m³].",
      "note": "T là số giờ cao điểm. Dùng khi lưu lượng mỗi giai đoạn không đổi và lượng nước tích bằng lượng xả thêm trong một chu kỳ ngày. Nhân 3600 để đổi giờ sang giây."
    }
  ],
  "509": [
    {
      "jp": "練習問題01　調整池式水力発電所",
      "vi": "Bài luyện 01 · Thủy điện hồ điều tiết.",
      "heading": true
    },
    {
      "jp": "有効落差 H＝80 m の調整池式水力発電所がある。調整池に取水する自然流量は10 m³/s 一定とし、図のように1日のうち12時間は発電せずに自然流量の全量を貯水する。残り12時間のうち2時間は自然流量と同じ10 m³/sの使用水量で発電を行い、他の10時間は自然流量より多い Qₚ［m³/s］の使用水量で発電して貯水分全量を使い切るものとする。このとき、次の(a)及び(b)の問に答えよ。",
      "vi": "Một nhà máy thủy điện có hồ điều tiết với cột nước hữu ích H = 80 m. Lưu lượng tự nhiên chảy vào hồ không đổi ở 10 m³/s. Theo biểu đồ, trong 12 giờ của một ngày nhà máy dừng phát và tích toàn bộ nước tự nhiên. Trong 12 giờ còn lại, có 2 giờ phát với lưu lượng bằng lưu lượng tự nhiên 10 m³/s, và 10 giờ phát với lưu lượng Qₚ [m³/s] lớn hơn lưu lượng tự nhiên, dùng hết nước đã tích. Trả lời (a) và (b)."
    },
    {
      "diagram": "lawReservoirExercise509"
    },
    {
      "jp": "(a) 運用に最低限必要な有効貯水量V[m³]は。",
      "vi": "(a) Tính dung tích hữu ích tối thiểu cần có."
    },
    {
      "jp": "(b) 使用水量Qₚ[m³/s]で運転しているときの発電機出力P_g[kW]は。ただし水車効率ηₜ＝90%、発電機効率η_g＝95%。",
      "vi": "(b) Tính công suất phát ở Qₚ, với hiệu suất tua-bin 90%, máy phát 95%."
    },
    {
      "jp": "解き方",
      "vi": "Cách giải",
      "heading": true
    },
    {
      "jp": "(a) 有効貯水量 V［m³］は、図の①、②の面積に当たります。",
      "vi": "(a) Dung tích hữu ích V [m³] bằng tổng diện tích hai vùng ① và ② trong hình."
    },
    {
      "jp": "貯水量V＝10×(8＋4)×3600＝432 000 m³。",
      "vi": "Nước trữ trong 8 giờ đầu +4 giờ cuối: V=10×12×3600=432.000 m³."
    },
    {
      "diagram": "lawReservoirBalance509"
    },
    {
      "jp": "(b) 発電機出力",
      "vi": "(b) Công suất máy phát",
      "heading": true
    },
    {
      "jp": "432 000＝(Qₚ−10)×5×3600×2＝(Qₚ−10)×36 000。",
      "vi": "Phần phát tăng trong 2 khối 5 giờ: 432.000=(Qₚ−10)×36.000."
    },
    {
      "jp": "Qₚ−10＝12よりQₚ＝22 m³/s。",
      "vi": "Qₚ−10=12 nên Qₚ=22 m³/s."
    },
    {
      "jp": "P_g＝9.8QₚHηₜη_g＝9.8×22×80×0.9×0.95≒14 700 kW。",
      "vi": "Công suất P=9,8×22×80×0,9×0,95≈14.700 kW."
    },
    {
      "jp": "解答　(a) **V＝432 × 10³ m³**　(b) **P_g＝14700 kW**",
      "vi": "Đáp án (a) **V = 432.000 m³** (b) **P_g = 14.700 kW**"
    },
    {
      "jp": "参考　図の①、②で貯水した水は、水量 Qₚ で発電するときに使用するので、図の①＋②＝③＋④が成り立ちます。",
      "vi": "Tham khảo. Nước tích ở vùng ① và ② được dùng khi phát điện với lưu lượng Qₚ, nên ① + ② = ③ + ④."
    }
  ],
  "510": [
    {
      "jp": "例題1　令和5年度上期　法規　問13",
      "vi": "Ví dụ 1 · Đề 法規 kỳ đầu Reiwa 5 (2023), câu 13.",
      "heading": true
    },
    {
      "jp": "人家が多く連なっている場所以外の場所であって、氷雪の多い地方のうち、海岸地その他の低温季に最大風圧を生じる地方に設置されている公称断面積60 mm²、仕上り外径15 mmの6600 V屋外用ポリエチレン絶縁電線（6600 V OE）を使用した高圧架空電線路がある。この電線路の電線の風圧荷重について「電気設備技術基準の解釈」に基づき、次の(a)及び(b)の問に答えよ。",
      "vi": "Một đường dây cao áp trên không dùng dây cách điện polyetylen ngoài trời 6.600 V (6600 V OE), tiết diện danh định 60 mm² và đường kính ngoài hoàn thiện 15 mm. Đường dây đặt ngoài khu vực có nhiều nhà liền nhau, ở vùng nhiều băng tuyết như ven biển hoặc khu vực khác có áp lực gió lớn nhất vào mùa lạnh. Dựa vào «Giải thích Tiêu chuẩn kỹ thuật thiết bị điện», trả lời (a) và (b) về tải trọng gió tác dụng lên dây."
    },
    {
      "jp": "電線に対する甲種風圧荷重は980 Pa、乙種風圧荷重の計算で用いる氷雪の厚さは6 mmとする。",
      "vi": "Cho áp lực gió loại 甲 tác dụng lên dây là 980 Pa. Khi tính tải trọng gió loại 乙, lớp băng tuyết dày 6 mm."
    },
    {
      "jp": "(a) 低温季において電線1条、長さ1 m当たりに加わる風圧荷重Nとして、最も近いものを選べ。",
      "vi": "(a) Chọn giá trị [N] gần nhất với tải trọng gió tác dụng lên 1 m chiều dài của một dây trong mùa lạnh."
    },
    {
      "jp": "(1)10.3 (2)13.2 (3)14.7 (4)20.6 (5)26.5［N］。",
      "vi": "Các phương án: 10,3; 13,2; 14,7; 20,6; 26,5 N."
    },
    {
      "jp": "(b) 低温季に適用される風圧荷重が乙種風圧荷重となる電線の仕上り外径mmとして最も大きいものを選べ。",
      "vi": "(b) Chọn đường kính ngoài hoàn thiện lớn nhất [mm] mà tải trọng gió loại 乙 vẫn là mức áp dụng vào mùa lạnh."
    },
    {
      "jp": "(1)10 (2)12 (3)15 (4)18 (5)21［mm］。",
      "vi": "Các lựa chọn: 10, 12, 15, 18, 21 mm."
    },
    {
      "jp": "解き方",
      "vi": "Cách giải",
      "heading": true
    },
    {
      "jp": "解答　(a) **(3) 14.7 N**　(b) **(2) 12 mm**",
      "vi": "Đáp án (a) **③ 14,7 N** (b) **② 12 mm**"
    },
    {
      "jp": "甲種風圧荷重W₁＝980×15×10⁻³×1＝14.7 N。",
      "vi": "Loại A W₁=980×0,015×1=14,7 N."
    },
    {
      "diagram": "lawWindBare510"
    },
    {
      "jp": "図2のように、乙種風圧荷重 W₂ は 0.5 × 980 × 27 × 10⁻³ × 1.0 ≒ 13.2 N。W₁ ＞ W₂。大きい方を採用して14.7 N。",
      "vi": "Như hình 2, tải trọng gió loại 乙 là W₂ = 0,5 × 980 × 27 × 10⁻³ × 1,0 ≈ 13,2 N. Vì W₁ > W₂ nên lấy giá trị lớn hơn là 14,7 N."
    },
    {
      "diagram": "lawWindIce510"
    },
    {
      "jp": "(b) 甲種風圧荷重≦乙種風圧荷重となる電線の仕上り外径を x［mm］とします。",
      "vi": "(b) Gọi x [mm] là đường kính ngoài hoàn thiện của dây khi tải trọng gió loại 甲 nhỏ hơn hoặc bằng loại 乙."
    },
    {
      "jp": "980 × x × 10⁻³ × 1.0 ≦ 0.5 × 980 × (x ＋ 6 × 2) × 10⁻³ × 1.0\nx ≦ 0.5x ＋ 6\n0.5x ≦ 6\nx ≦ 12",
      "vi": "980 × x × 10⁻³ × 1,0 ≤ 0,5 × 980 × (x + 6 × 2) × 10⁻³ × 1,0\nx ≤ 0,5x + 6\n0,5x ≤ 6\nx ≤ 12",
      "note": "Cộng hai lần 6 mm vì lớp băng phủ cả hai phía theo đường kính."
    }
  ],
  "511": [
    {
      "jp": "風圧荷重が乙種風圧荷重となる最も大きいものは、仕上り外径が12 mmとなります。",
      "vi": "Đường kính ngoài hoàn thiện lớn nhất để tải trọng gió loại 乙 được áp dụng là 12 mm."
    },
    {
      "jp": "参考　氷雪の多い地方のうち、低温季に最大風圧を生じる地方で低温季に適用される風圧荷重は、甲種及び乙種の大きい方を適用します。",
      "vi": "Tham khảo. Ở vùng nhiều băng tuyết và có áp lực gió lớn nhất vào mùa lạnh, trong mùa lạnh lấy giá trị lớn hơn giữa tải trọng gió loại 甲 và loại 乙."
    },
    {
      "jp": "例題2　令和4年度上期　法規　問11",
      "vi": "Ví dụ 2 · Đề 法規 kỳ đầu Reiwa 4 (2022), câu 11.",
      "heading": true
    },
    {
      "jp": "定格容量50 kVA、一次電圧6600 V、二次電圧210/105 Vの単相変圧器の二次側に接続した単相3線式架空電線路がある。",
      "vi": "Biến áp một pha 50 kVA, 6600/210/105 V cấp đường dây trên không một pha ba dây."
    },
    {
      "jp": "この低圧電線路に最大供給電流が流れたときの絶縁性能が「電気設備技術基準」に適合することを確認するため、低圧電線の3線を一括して大地との間に使用電圧（105 V）を加える絶縁性能試験を実施した。次の(a)及び(b)の問に答えよ。",
      "vi": "Để xác nhận khả năng cách điện của đường dây hạ áp này đạt «Tiêu chuẩn kỹ thuật thiết bị điện» khi có dòng cấp lớn nhất chạy qua, tiến hành thử cách điện bằng cách nối chung ba dây hạ áp rồi đặt điện áp sử dụng 105 V giữa chúng và đất. Trả lời (a) và (b)."
    },
    {
      "jp": "(a) この試験で許容される漏えい電流の最大値[A]は。",
      "vi": "(a) Tính dòng rò lớn nhất cho phép khi thử."
    },
    {
      "jp": "(1)0.11 (2)0.238 (3)0.357 (4)0.460 (5)0.714。",
      "vi": "Các lựa chọn 0,11; 0,238; 0,357; 0,460; 0,714 A."
    },
    {
      "jp": "(b) 二次側電線路と大地との間で許容される絶縁抵抗値は。1線当たりの最小値［Ω］として、最も近いものを次の(1)～(5)のうちから一つ選べ。",
      "vi": "(b) Chọn giá trị gần nhất với điện trở cách điện tối thiểu cho phép [Ω] của mỗi dây giữa đường dây thứ cấp và đất."
    },
    {
      "jp": "(1)295 (2)442 (3)883 (4)1765 (5)3530。",
      "vi": "Các lựa chọn 295; 442; 883; 1.765; 3.530 Ω."
    },
    {
      "jp": "解き方　(a)",
      "vi": "Cách giải (a)",
      "heading": true
    },
    {
      "jp": "単相変圧器の定格容量を S_n、二次電圧を V₂ としたとき、単相3線式架空電線路の最大供給電流 I_n は次のとおり。",
      "vi": "Gọi S_n là công suất định mức và V₂ là điện áp thứ cấp của máy biến áp một pha. Dòng cấp lớn nhất I_n của đường dây trên không một pha ba dây được tính như sau.",
      "note": "Dùng 210 V giữa hai dây ngoài để tính dòng định mức và dùng 105 V đối đất để tính điện trở cách điện.",
      "equations": [
        [
          "I_n = ",
          {
            "fraction": [
              [
                "S_n"
              ],
              [
                "V₂"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "50 × 10³"
              ],
              [
                "210"
              ]
            ]
          },
          " ≒ 238 A"
        ]
      ],
      "equationsVi": [
        [
          "I_n = ",
          {
            "fraction": [
              [
                "S_n"
              ],
              [
                "V₂"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "50 × 10³"
              ],
              [
                "210"
              ]
            ]
          },
          " ≒ 238 A"
        ]
      ]
    },
    {
      "jp": "電線と大地間及び線心相互間の絶縁抵抗は、使用電圧に対する漏えい電流が最大供給電流の2000分の1を超えないようにしなければならないため、1線の漏えい電流 I₁線 は次のとおり。",
      "vi": "Điện trở cách điện giữa dây với đất và giữa các lõi dây phải đủ để dòng rò ở điện áp sử dụng không vượt quá một phần 2.000 dòng cấp lớn nhất. Từ đó tính dòng rò cho một dây.",
      "equations": [
        [
          "I₁線 = ",
          {
            "fraction": [
              [
                "238"
              ],
              [
                "2000"
              ]
            ]
          },
          " = 0.119 A"
        ]
      ],
      "equationsVi": [
        [
          "I₁ dây = ",
          {
            "fraction": [
              [
                "238"
              ],
              [
                "2000"
              ]
            ]
          },
          " = 0,119 A"
        ]
      ]
    },
    {
      "jp": "3線を一括したときの漏えい電流は I₃線＝3 × I₁線＝3 × 0.119＝0.357 A。",
      "vi": "Dòng rò khi nối chung ba dây là I₃ dây = 3 × I₁ dây = 3 × 0,119 = 0,357 A."
    }
  ],
  "512": [
    {
      "jp": "(b) 対地との間に V_t＝105 V を加えて絶縁性能試験を実施したとき、大地との間で許容される1線当たりの絶縁抵抗値の最小値 R は次のとおり。",
      "vi": "(b) Khi thử cách điện với điện áp đối đất V_t = 105 V, điện trở cách điện tối thiểu R giữa một dây và đất được tính như sau.",
      "equations": [
        [
          "R = ",
          {
            "fraction": [
              [
                "V_t"
              ],
              [
                "I₁線"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "105"
              ],
              [
                "0.119"
              ]
            ]
          },
          " ≒ 882 Ω"
        ]
      ],
      "equationsVi": [
        [
          "R = ",
          {
            "fraction": [
              [
                "V_t"
              ],
              [
                "I₁ dây"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "105"
              ],
              [
                "0,119"
              ]
            ]
          },
          " ≈ 882 Ω"
        ]
      ]
    },
    {
      "jp": "(3)の883 Ωが最も近い値となります。",
      "vi": "Giá trị gần nhất là 883 Ω ở phương án ③."
    },
    {
      "jp": "解答　(a) **(3) 0.357 A**　(b) **(3) 883 Ω**",
      "vi": "Đáp án (a) **③ 0,357 A** (b) **③ 883 Ω**"
    },
    {
      "jp": "参考　最大供給電流＝変圧器の定格二次電流となります。",
      "vi": "Tham khảo. Dòng cấp lớn nhất bằng dòng thứ cấp định mức của máy biến áp."
    },
    {
      "jp": "例題3　平成28年度　法規　問13 改",
      "vi": "Ví dụ 3 · Phỏng theo đề 法規 năm Heisei 28 (2016), câu 13.",
      "heading": true
    },
    {
      "jp": "図は、線間電圧 V［V］、周波数 f［Hz］の中性点非接地方式の三相3線式高圧配電線路及びある需要設備の高圧地絡保護システムを簡易に示した単線図である。",
      "vi": "Sơ đồ một sợi biểu diễn đơn giản đường dây phân phối cao áp ba pha ba dây có trung tính không nối đất, với điện áp dây V [V], tần số f [Hz], cùng hệ thống bảo vệ chạm đất cao áp của một cơ sở sử dụng điện."
    },
    {
      "jp": "高圧配電線路一相の全対地静電容量をC₁[F]、需要設備一相の全対地静電容量をC₂[F]とする。次の(a)及び(b)に答えよ。",
      "vi": "Điện dung tổng tới đất của một pha đường dây phân phối C₁, của cơ sở tải C₂. Trả lời (a) và (b)."
    },
    {
      "jp": "ただし、図示されていない負荷、線路定数及び配電用変電所の制限抵抗は無視する。",
      "vi": "Bỏ qua tải, thông số đường dây và điện trở hạn dòng trạm điện không thể hiện trên hình."
    },
    {
      "diagram": "lawGroundProtection512"
    },
    {
      "jp": "(a) 図の配電線路において、遮断器が「入」の状態で地絡事故点に一線完全地絡事故が発生し地絡電流 I_g［A］が流れた。このとき I_g の大きさを表す式として正しいものは次のうちどれか。",
      "vi": "(a) Khi máy cắt đang đóng, tại điểm sự cố trên hình xảy ra chạm đất hoàn toàn một pha và có dòng chạm đất I_g [A]. Chọn công thức đúng biểu diễn độ lớn I_g."
    },
    {
      "jp": "選択肢",
      "vi": "Các phương án",
      "equations": [
        [
          "(1) ",
          {
            "fraction": [
              [
                "2"
              ],
              [
                "√3"
              ]
            ]
          },
          " Vπf√(C₁² + C₂²)"
        ],
        [
          "(2) 2√3 Vπf√(C₁² + C₂²)"
        ],
        [
          "(3) 2√3 Vπf(C₁ + C₂)"
        ],
        [
          "(4) 2√3 Vπf√(C₁C₂)"
        ]
      ]
    }
  ],
  "513": [
    {
      "jp": "例題3　中性点非接地方式の三相3線式高圧配電線路（続き）",
      "vi": "Ví dụ 3 · Hệ phân phối cao áp ba pha ba dây không nối đất trung tính (tiếp).",
      "heading": true
    },
    {
      "jp": "(b) I_gのうち需要設備の零相変流器で検出される電流の値[mA]として、最も近いものを次の(1)～(5)から選べ。",
      "vi": "(b) Trong dòng I_g, chọn giá trị [mA] gần nhất với dòng được biến dòng thứ tự không ở cơ sở sử dụng điện phát hiện."
    },
    {
      "jp": "ただし、V＝6600 V、f＝60 Hz、C₁＝2.3 μF、C₂＝0.02 μF。",
      "vi": "Cho điện áp dây 6.600 V, tần số 60 Hz, C₁=2,3 μF, C₂=0,02 μF."
    },
    {
      "jp": "(1)54　(2)86　(3)124　(4)152　(5)256［mA］。",
      "vi": "Các lựa chọn: 54; 86; 124; 152; 256 mA."
    },
    {
      "jp": "解き方",
      "vi": "Cách giải",
      "heading": true
    },
    {
      "jp": "解答　(a) **(3)**　(b) **(2)**",
      "vi": "Đáp án (a) **③** (b) **②**"
    },
    {
      "jp": "解き方　(a) テブナンの定理により、I_gを求めます。",
      "vi": "Giải (a): tìm dòng chạm đất theo tương đương Thévenin."
    },
    {
      "diagram": "lawGroundThevenin513"
    },
    {
      "jp": "地絡前のa-b間電圧。",
      "vi": "Điện áp a–b trước khi chạm đất.",
      "equations": [
        [
          "E_ab = ",
          {
            "fraction": [
              [
                "V"
              ],
              [
                "√3"
              ]
            ]
          },
          " [V]"
        ]
      ],
      "equationsVi": [
        [
          "E_ab = ",
          {
            "fraction": [
              [
                "V"
              ],
              [
                "√3"
              ]
            ]
          },
          " [V]"
        ]
      ]
    },
    {
      "jp": "a-b間のインピーダンス。",
      "vi": "Độ lớn tổng trở giữa a–b.",
      "equations": [
        [
          "Z_ab = ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ω(C₁ + C₂)"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3 × 2πf(C₁ + C₂)"
              ]
            ]
          },
          " [Ω]"
        ]
      ],
      "equationsVi": [
        [
          "Z_ab = ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3ω(C₁ + C₂)"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "1"
              ],
              [
                "3 × 2πf(C₁ + C₂)"
              ]
            ]
          },
          " [Ω]"
        ]
      ]
    },
    {
      "jp": "地絡電流 I_g。",
      "vi": "Dòng chạm đất I_g.",
      "equations": [
        [
          "I_g = ",
          {
            "fraction": [
              [
                "E_ab"
              ],
              [
                "Z_ab"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "V"
              ],
              [
                "√3"
              ]
            ]
          },
          " × 3 × 2πf(C₁ + C₂) = 2√3 Vπf(C₁ + C₂) [A]"
        ]
      ],
      "equationsVi": [
        [
          "I_g = ",
          {
            "fraction": [
              [
                "E_ab"
              ],
              [
                "Z_ab"
              ]
            ]
          },
          " = ",
          {
            "fraction": [
              [
                "V"
              ],
              [
                "√3"
              ]
            ]
          },
          " × 3 × 2πf(C₁ + C₂) = 2√3 Vπf(C₁ + C₂) [A]"
        ]
      ]
    },
    {
      "jp": "(b) 3C₂に流れる電流を求めます。(a)の式でC₁を除いてC₂のみで計算します。",
      "vi": "(b) Tính dòng qua nhóm ba tụ C₂. Trong công thức ở (a), bỏ thành phần C₁ và chỉ dùng C₂."
    },
    {
      "jp": "I_g₂＝2√3 Vπf C₂＝2√3×6600×3.14×60×0.02×10⁻⁶≒86.1×10⁻³ A→86 mA。",
      "vi": "I_ZCT=2√3×6600×3,14×60×0,02×10⁻⁶≈86,1 mA, chọn ②."
    },
    {
      "jp": "解説",
      "vi": "Giải thích",
      "heading": true
    },
    {
      "jp": "中性点非接地方式の三相3線式高圧配電線路の対地電圧。",
      "vi": "Điện áp đối đất của đường dây cao áp ba pha ba dây có trung tính không nối đất.",
      "equations": [
        [
          {
            "fraction": [
              [
                "V"
              ],
              [
                "√3"
              ]
            ]
          },
          " [V]"
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "V"
              ],
              [
                "√3"
              ]
            ]
          },
          " [V]"
        ]
      ]
    },
    {
      "jp": "地絡電流を計算するとき、3線の静電容量は並列接続となります。",
      "vi": "Khi tính dòng chạm đất, các điện dung của ba dây được quy về mắc song song."
    },
    {
      "jp": "対地電圧を対地静電容量の合成リアクタンスで割って I_g を求めます。",
      "vi": "Tính I_g bằng cách chia điện áp đối đất cho điện kháng dung tổng hợp.",
      "equations": [
        [
          "I_g = ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "V"
                    ],
                    [
                      "√3"
                    ]
                  ]
                }
              ],
              [
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ω(C₁ + C₂)"
                    ]
                  ]
                }
              ]
            ]
          },
          " [A]"
        ]
      ],
      "equationsVi": [
        [
          "I_g = ",
          {
            "fraction": [
              [
                {
                  "fraction": [
                    [
                      "V"
                    ],
                    [
                      "√3"
                    ]
                  ]
                }
              ],
              [
                {
                  "fraction": [
                    [
                      "1"
                    ],
                    [
                      "3ω(C₁ + C₂)"
                    ]
                  ]
                }
              ]
            ]
          },
          " [A]"
        ]
      ]
    },
    {
      "jp": "需要設備の零相変流器で検出される電流は、3C₂に流れる電流です。",
      "vi": "Biến dòng thứ tự không ở cơ sở sử dụng điện phát hiện dòng chạy qua nhóm điện dung 3C₂."
    }
  ],
  "514": [
    {
      "jp": "コラム　使用できる電卓について",
      "vi": "Chuyên mục · Loại máy tính được phép dùng trong kỳ thi.",
      "heading": true
    },
    {
      "jp": "電気主任技術者試験においては、四則演算、開平計算（√）を行うための電卓を使用することができます。",
      "vi": "Theo sách, kỳ thi kỹ sư phụ trách điện cho phép dùng máy tính thực hiện bốn phép tính cơ bản và tính căn bậc hai."
    },
    {
      "jp": "ただし、関数電卓や数式が記憶できる電卓は使用できません。",
      "vi": "Không được dùng máy tính khoa học có hàm hoặc máy có chức năng nhớ biểu thức."
    },
    {
      "jp": "使用できる電卓は、関数電卓とは操作が異なります。試験に使用する電卓を準備し、操作に慣れておきましょう。",
      "vi": "Máy tính cho phép có cách thao tác khác máy khoa học; nên tập thao tác trước khi đi thi."
    },
    {
      "jp": "計算例",
      "vi": "Ví dụ tính",
      "heading": true
    },
    {
      "jp": "105 [−] 102 [÷] 5.1 [＝] **0.5882…**",
      "vi": "105 [−] 102 [÷] 5,1 [=] **0,5882…**",
      "note": "Trên máy tính phổ thông kiểu thực hiện phép tính ngay, bấm phím chia sau 102 sẽ tính xong phép trừ trước.",
      "equations": [
        [
          {
            "fraction": [
              [
                "105 − 102"
              ],
              [
                "5.1"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "105 − 102"
              ],
              [
                "5.1"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "1.8 [÷] 3.14 [÷] 0.8 [÷] 0.8 [＝] **0.8957…**",
      "vi": "1,8 [÷] 3,14 [÷] 0,8 [÷] 0,8 [=] **0,8957…**",
      "note": "Chia lần lượt cho các thừa số ở mẫu.",
      "equations": [
        [
          {
            "fraction": [
              [
                "1.8"
              ],
              [
                "3.14 × 0.8²"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "1.8"
              ],
              [
                "3.14 × 0.8²"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "30 [×] 15 [＝] 450。60 [＋] 15 [＝] 75。450 [÷] 75 [＝] **6**。",
      "vi": "30 [×] 15 [=] 450. 60 [+] 15 [=] 75. 450 [÷] 75 [=] **6**.",
      "note": "Ghi riêng tử 450 và mẫu 75 rồi chia.",
      "equations": [
        [
          {
            "fraction": [
              [
                "30 × 15"
              ],
              [
                "60 + 15"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "30 × 15"
              ],
              [
                "60 + 15"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "180 [÷] 60 [＋] 1 [＝] 4。180 [÷] 4 [＝] **45**。",
      "vi": "180 [÷] 60 [+] 1 [=] 4. 180 [÷] 4 [=] **45**.",
      "note": "Tính và ghi mẫu số 4 trước khi lấy 180 chia.",
      "equations": [
        [
          {
            "fraction": [
              [
                "180"
              ],
              [
                "1 + ",
                {
                  "fraction": [
                    [
                      "180"
                    ],
                    [
                      "60"
                    ]
                  ]
                }
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "180"
              ],
              [
                "1 + ",
                {
                  "fraction": [
                    [
                      "180"
                    ],
                    [
                      "60"
                    ]
                  ]
                }
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "3 [÷] 10 [√] [＝] **0.9486…**",
      "vi": "3 [÷] 10 [√] [=] **0,9486…**",
      "note": "Dãy phím được chép theo hình sách.",
      "equations": [
        [
          {
            "fraction": [
              [
                "3"
              ],
              [
                "√10"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "3"
              ],
              [
                "√10"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "10 [×] 10 [＝] 100。32 [−] 8 [＝] 24。24 [×] 24 [＝] 576。100 [＋] 576 [＝] 676。676 [√] [＝] **26**。",
      "vi": "10 [×] 10 [=] 100. 32 [−] 8 [=] 24. 24 [×] 24 [=] 576. 100 [+] 576 [=] 676. 676 [√] [=] **26**.",
      "note": "Tính tổng trong căn trước rồi lấy căn bậc hai.",
      "equations": [
        [
          "√(10² + (32 − 8)²)"
        ]
      ],
      "equationsVi": [
        [
          "√(10² + (32 − 8)²)"
        ]
      ]
    },
    {
      "jp": "平方根の中は手計算。",
      "vi": "Rút gọn biểu thức trong căn bằng tay.",
      "equations": [
        [
          {
            "fraction": [
              [
                "1"
              ],
              [
                "2 × 3.14 × √(100 × 10⁻³ × 100 × 10⁻⁶)"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          {
            "fraction": [
              [
                "1"
              ],
              [
                "2 × 3.14 × √(100 × 10⁻³ × 100 × 10⁻⁶)"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "平方根の計算。",
      "vi": "Biến đổi phần căn.",
      "equations": [
        [
          "√(100 × 10⁻³ × 100 × 10⁻⁶) = √0.1 × √(10⁻⁴) = √0.1 × 10⁻² = ",
          {
            "fraction": [
              [
                "√0.1"
              ],
              [
                "100"
              ]
            ]
          }
        ]
      ],
      "equationsVi": [
        [
          "√(100 × 10⁻³ × 100 × 10⁻⁶) = √0.1 × √(10⁻⁴) = √0.1 × 10⁻² = ",
          {
            "fraction": [
              [
                "√0.1"
              ],
              [
                "100"
              ]
            ]
          }
        ]
      ]
    },
    {
      "jp": "0.1 [√] [÷] 100 [＝] 0.003162…（√の計算）\n2 [×] 3.14 [×] 0.003162 [＝] 0.01985…（分母の計算）\n1 [÷] 0.01985 [＝] **50.37…**",
      "vi": "0,1 [√] [÷] 100 [=] 0,003162… (tính căn)\n2 [×] 3,14 [×] 0,003162 [=] 0,01985… (tính mẫu theo số ghi trong sách)\n1 [÷] 0,01985 [=] **50,37…**",
      "note": "Sách ghi mẫu 0,01985 ở bước trung gian. Phép nhân với 0,003162 thực tế cho 0,01985736. Nếu giữ đủ chữ số từ biểu thức ban đầu, kết quả khoảng 50,35474."
    },
    {
      "diagram": "lawCalculatorKeys514"
    }
  ]
};

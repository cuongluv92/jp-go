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
  ]
};

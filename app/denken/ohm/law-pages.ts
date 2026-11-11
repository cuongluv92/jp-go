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
  ]
};

import { fraction } from "./continuation";
import type { LessonRow } from "./lesson";

export const powerPages: Record<number, LessonRow[]> = {
  21: [
    { jp: "Δ-Y 変換 といえば 回路計算の簡単化ができる", vi: "Biến đổi Δ–Y giúp đơn giản hóa việc tính mạch.", heading: true },
    { diagram: "delta21" },
    { jp: "Δ-Y 変換", vi: "Biến đổi tam giác–sao", heading: true },
    {
      jp: "電気回路の Δ 回路を Y 回路に変換すると計算が簡単になります。図（a）の Δ 回路をこれと等価な図（b）の Y 回路に変換した場合、Rₐ、Rᵦ、R꜀ は、次式となります。",
      vi: "Thay mạch tam giác Δ bằng mạch sao Y để tính toán dễ hơn. Khi đổi mạch Δ ở hình (a) sang mạch Y tương đương ở hình (b), tính Rₐ, Rᵦ, R꜀ như sau.",
      equations: [
        ["Rₐ =", fraction("R₃R₁", "R₁ + R₂ + R₃"), "[Ω]"],
        ["Rᵦ =", fraction("R₁R₂", "R₁ + R₂ + R₃"), "[Ω]"],
        ["R꜀ =", fraction("R₂R₃", "R₁ + R₂ + R₃"), "[Ω]"],
      ],
      note: "Giữ nguyên ba đầu nối a, b, c khi thay mạng. Muốn tìm điện trở sao ở đầu nào, lấy tích hai cạnh tam giác chạm đầu đó rồi chia tổng cả ba cạnh. Ví dụ tại a, hai cạnh chạm a là R₁ và R₃.",
    },
    { diagram: "deltaDetail21" },
    {
      jp: "Δ-Y 変換 といえば **和分の積**で覚える",
      vi: "Nhớ phép đổi Δ–Y bằng quy tắc **tích chia tổng**.",
      equations: [["Y回路の抵抗 =", fraction("Δ回路の**2抵抗**の**積**", "Δ回路の**3抵抗**の**和**")]],
      equationsVi: [["Điện trở nhánh Y =", fraction("**Tích** của **hai điện trở** kề đầu đó", "**Tổng** của **ba điện trở** trong Δ")]],
      note: "Nếu ba cạnh Δ đều bằng R thì mỗi nhánh Y bằng R/3. Có thể kiểm tra bằng cách đo giữa a và b khi c để hở. Mạch Δ cho R song song với 2R, còn mạch Y cho hai điện trở R/3 nối tiếp. Cả hai đều bằng 2R/3.",
    },
  ],
  22: [
    { jp: "練習問題 01 · Δ-Y 変換（ブリッジ回路の電流）", vi: "Bài tập 01 · Biến đổi Δ–Y để tính dòng trong mạch cầu", heading: true },
    {
      jp: "図の回路において、電流の比 I₁ と I₂ は。",
      vi: "Tính tỷ số dòng I₁ trên I₂ trong mạch.",
      equations: [[fraction("I₁", "I₂")]],
    },
    { diagram: "delta22" },
    {
      jp: "**解き方**\n① ブリッジ回路は、対辺抵抗値の積（2×2≠1×1）が等しくないので不平衡回路です。\n② 下図のように、問題図右側の Δ 結線を Y 結線に変換した回路を考えます。",
      vi: "**Cách giải**\n① Hai tích điện trở đối diện là 2×2 và 1×1, khác nhau nên cầu không cân bằng.\n② Đổi tam giác Δ ở phía phải sơ đồ đề bài sang sao Y như hình dưới.",
      note: "Vì cầu không cân bằng nên nhánh giữa có thể mang dòng. Giữ nhánh này trong tam giác bên phải khi đổi Δ sang Y. Hai điện trở phía trái giữ nguyên.",
    },
    { diagram: "deltaSolve22" },
    {
      jp: "③ Rₐ、Rᵦ、R꜀ を求めます。",
      vi: "③ Tính Rₐ, Rᵦ, R꜀.",
      equations: [
        ["Rₐ =", fraction("2 × 1", "1 + 2 + 2"), "= 0.4 Ω"],
        ["Rᵦ =", fraction("1 × 2", "1 + 2 + 2"), "= 0.4 Ω"],
        ["R꜀ =", fraction("2 × 2", "1 + 2 + 2"), "= 0.8 Ω"],
      ],
    },
    {
      jp: "④ 図の A-B 間の電圧を求めると、次のようになります。",
      vi: "④ Viết điện áp giữa A và B theo hai nhánh để tìm tỷ số dòng.",
      equations: [
        ["I₁(2 + 0.4) = I₂(1 + 0.8)"],
        ["2.4 I₁ = 1.8 I₂"],
        [fraction("I₁", "I₂"), "=", fraction("1.8", "2.4"), "= 0.75"],
      ],
      note: "Hai nhánh A–B có cùng điện áp, điện trở lần lượt là 2,4 Ω và 1,8 Ω. Nhánh 2,4 Ω mang dòng nhỏ hơn nên I₁/I₂ < 1. Rᵦ nằm sau điểm hợp dòng B nên không đưa vào điện trở riêng của hai nhánh A–B.",
    },
    { jp: "**解説**\n不平衡のブリッジ回路は、Δ-Y 変換を行います。Δ 回路は、Y 回路に変換すると計算が簡単になります。", vi: "**Giải thích**\nVới mạch cầu không cân bằng như trên, đổi Δ sang Y giúp đưa mạch về các nhánh nối tiếp và song song dễ tính hơn." },
    { jp: "**解答**", vi: "**Đáp án**", equations: [[fraction("I₁", "I₂", true), "**= 0.75**"]] },
  ],
  23: [
    { jp: "直流回路の電力 といえば 電圧と電流の積、電力量 といえば 電力と時間の積", vi: "Công suất một chiều bằng điện áp nhân dòng điện. Điện năng bằng công suất nhân thời gian.", heading: true },
    { jp: "ジュールの法則", vi: "Định luật Joule", heading: true },
    {
      jp: "抵抗体を流れる電流によって発生する熱量は、電流の 2 乗（I²）と抵抗値（R）の積に比例します。これを、**ジュールの法則**といいます。熱量を表す量記号は H、単位にはジュール［J］を用います。",
      vi: "Nhiệt lượng sinh ra do dòng điện qua điện trở tỷ lệ với tích của bình phương dòng điện I² và điện trở R. Đây là **định luật Joule (ジュールの法則)**. Nhiệt lượng ký hiệu H, đơn vị joule [J].",
    },
    { diagram: "joule23" },
    {
      jp: "**図1-9-1**で、抵抗 R［Ω］に電流 I［A］が t［s］（秒）流れるとき、発生する熱量（熱エネルギー）H［J］は I²Rt［J］となり、これを**ジュール熱**といいます。\nジュールの法則 といえば ジュール熱",
      vi: "Trong **hình 1-9-1**, nếu dòng I [A] chạy qua điện trở R [Ω] trong t [s], nhiệt lượng H [J] là I²Rt. Đây là **nhiệt Joule (ジュール熱)**.",
      equations: [["H =", "**I²Rt**", "[J]"]],
      note: "Dùng dạng này khi I và R không đổi trong khoảng t, tính t bằng giây. Nếu dòng tăng gấp đôi trong cùng điện trở và thời gian thì nhiệt tăng gấp bốn.",
    },
    { jp: "電力と電力量", vi: "Công suất và điện năng", heading: true },
    {
      jp: "電気エネルギーは、熱エネルギーや機械エネルギーなどに変えることができます。1 秒間の電気エネルギーを**電力**といい、量記号には P、単位にはワット［W］を用います。",
      vi: "Điện năng có thể chuyển thành nhiệt năng, cơ năng và các dạng khác. **Công suất điện (電力)** biểu thị điện năng chuyển đổi trong một giây, ký hiệu P, đơn vị watt [W].",
      note: "Công suất là tốc độ dùng năng lượng. Thiết bị 100 W dùng 100 J mỗi giây khi công suất giữ nguyên.",
    },
    {
      jp: "電力は P＝VI［W］で求められます。オームの法則から V＝IR［V］を代入すると、P＝I²R［W］、同様に I＝V/R［A］を代入すると、P＝V²/R［W］となります。",
      vi: "Tính công suất theo P = VI. Với điện trở tuân theo định luật Ohm, thay V = IR để được P = I²R, hoặc thay I = V chia R để được P bằng V bình phương chia R.",
      equations: [["P =", "**VI**", "=", "**I²R**", "=", fraction("V²", "R", true), "[W]"], ["1 W = 1 J/s"]],
      note: "V và I phải cùng xét trên một phần tử. Chọn VI nếu biết cả hai, I²R nếu biết dòng và điện trở, V²/R nếu biết áp hai đầu điện trở và R khác 0.",
    },
    {
      jp: "電力と時間（秒数）の積は、電気エネルギーの総量です。これを**電力量**といい、量記号に Wₚ を用います。\n電力量 といえば **電力と時間（秒数）の積**",
      vi: "Công suất nhân thời gian tính theo giây cho tổng năng lượng điện, gọi là **điện năng (電力量)**, ký hiệu Wₚ.",
      equations: [["Wₚ =", "**Pt**", "[W·s] =", "**Pt**", "[J]"], ["1 W·s = 1 J"]],
      note: "Pt dùng khi công suất không đổi. Với điện trở thuần, điện năng tiêu thụ chuyển thành nhiệt nên Wₚ = H. Ở tải như động cơ, một phần điện năng chuyển thành cơ năng.",
    },
    { jp: "※電気料金の計算では、電力量は P［kW］× T［h］（アワー）（時間）＝ PT［kW・h］が用いられます。", vi: "Khi tính tiền điện, dùng P [kW] nhân thời gian T [h] để được điện năng PT [kWh].", note: "1 kWh = 1 000 W × 3 600 s = 3,6 MJ. Đừng nhân watt với giờ rồi đọc kết quả thành kWh." },
  ],
  24: [
    { jp: "定電圧源と定電流源 といえば 理想電源、重ね合せの理 といえば 起電力（電源）一つで計算", vi: "Nguồn áp và nguồn dòng lý tưởng. Với nguyên lý chồng chất, lần lượt tính phần đóng góp của từng nguồn.", heading: true },
    { jp: "定電圧源と定電流源", vi: "Nguồn áp và nguồn dòng", heading: true },
    {
      jp: "一般の電源は、起電力 E［V］と内部抵抗 r［Ω］を直列接続したものとして表すことができます。負荷電流が流れると r［Ω］による電圧降下で電源の端子電圧は起電力 E［V］よりも低くなります。仮に r＝0 の電源があれば負荷電流が流れても電源の端子電圧は E［V］で一定値になります。このような電源を定電圧源（a）または理想電圧源（b）といいます。定電圧源（理想電圧源）に対し、一定の電流を流す電源を定電流源（理想電流源）（c）といい、**図1-10-1**のような記号で表します。",
      vi: "Có thể biểu diễn nguồn áp bằng suất điện động E [V] nối tiếp điện trở trong r [Ω]. Khi cấp dòng cho tải, sụt áp trên r làm điện áp đầu cực thấp hơn E. Nếu r = 0, điện áp đầu cực vẫn bằng E khi có tải. Đó là nguồn áp không đổi (a), hay nguồn áp lý tưởng (b). Nguồn giữ dòng điện không đổi gọi là nguồn dòng lý tưởng (c). **Hình 1-10-1** cho các ký hiệu tương ứng.",
      note: "Nguồn áp lý tưởng giữ V cố định, còn dòng phụ thuộc tải. Nguồn dòng lý tưởng giữ I cố định, còn điện áp phụ thuộc tải. Đây là mô hình dùng khi phân tích mạch.",
    },
    { diagram: "sources24" },
    { jp: "定電圧源（理想電圧源）の内部抵抗 といえば 0\n定電流源（理想電流源）の内部抵抗 といえば ∞（無限大）", vi: "Điện trở trong của nguồn áp lý tưởng bằng 0. Điện trở trong của nguồn dòng lý tưởng bằng vô hạn.", note: "Khi đặt nguồn áp độc lập về 0 V, thay nó bằng dây nối tắt trên sơ đồ. Khi đặt nguồn dòng độc lập về 0 A, thay nó bằng chỗ hở mạch. Các điện trở thật trong mô hình vẫn giữ nguyên." },
    { jp: "重ね合せの理", vi: "Nguyên lý chồng chất", heading: true },
    {
      jp: "二つ以上の起電力を含む回路の各枝路に流れる電流は、各起電力がそれぞれ**単独**にあるものとして、別々に各電流を求めて合成、すなわち重ねたものに等しい。この関係を**重ね合せの理**といいます。",
      vi: "Trong mạch có từ hai suất điện động trở lên, tính dòng từng nhánh khi từng nguồn hoạt động **riêng lẻ**, rồi cộng đại số các dòng thu được. Quan hệ này gọi là **nguyên lý chồng chất (重ね合せの理)**.",
      note: "Dùng cho mạch tuyến tính. Chọn cùng một chiều tham chiếu trước khi cộng. Áp dụng cho dòng và điện áp. Muốn tính công suất trên điện trở, tìm dòng tổng trước rồi dùng I²R.",
    },
    { diagram: "super24" },
  ],
  25: [
    {
      jp: "例えば、**図1-10-2**のように起電力（電源）が 2 つある回路の場合、起電力が一つずつの回路を二つつくり、電流 I₁、I₂ を別々に求めて、合成する（重ねる）ことで電流 I を求めることができます。",
      vi: "Ví dụ ở **hình 1-10-2**, lập hai mạch, mỗi mạch giữ một nguồn, rồi tính riêng I₁ và I₂. Chồng chất hai dòng để tìm I.",
      equations: [["I₁ =", fraction("24", "6"), "= 4 A"], ["I₂ =", fraction("6", "6"), "= 1 A"], ["I = I₁ + I₂ = 4 + 1 = 5 A"]],
      note: "Hai nguồn trong ví dụ này tạo dòng qua điện trở theo cùng chiều nên cộng 4 A và 1 A. Bài tập dưới đây minh họa trường hợp hai dòng thành phần ngược chiều.",
    },
    { jp: "練習問題 01", vi: "Bài tập 01 · Nguyên lý chồng chất", heading: true },
    { jp: "図のような直流回路において、3 Ω の抵抗を流れる電流 I［A］は。", vi: "Tính dòng I [A] qua điện trở 3 Ω trong mạch một chiều ở hình." },
    { diagram: "super25" },
    {
      jp: "**解き方**\n① **定電圧源**と**定電流源**があるので、重ね合せの理を用います。図のような 2 つの回路にします。",
      vi: "**Cách giải**\n① Mạch có **nguồn áp** và **nguồn dòng**, nên dùng nguyên lý chồng chất và tách thành hai sơ đồ như hình.",
    },
    { diagram: "split25" },
    {
      jp: "図（a）は、定電圧源を残し、定電流源は**開放除去**（内部抵抗は無限大）\n図（b）は、定電流源を残し、定電圧源は**短絡除去**（内部抵抗は 0）\n② 電流 I₁ と I₂ を求めます。",
      vi: "Hình (a) giữ nguồn áp và **thay nguồn dòng bằng mạch hở** (điện trở trong vô hạn).\nHình (b) giữ nguồn dòng và **thay nguồn áp bằng dây nối tắt** (điện trở trong bằng 0).\n② Tính I₁ và I₂.",
      equations: [["I₁ =", fraction("4", "3 + 5"), "= 0.5 A"], ["I₂ = 2 ×", fraction("5", "3 + 5"), "= 1.25 A"]],
      note: "Ở hình (a), 3 Ω và 5 Ω nối tiếp nên cộng ở mẫu. Ở hình (b), chúng mắc song song. Để tính dòng nhánh 3 Ω bằng chia dòng, dùng điện trở nhánh kia 5 Ω ở tử.",
    },
    {
      jp: "③ 3 Ω の抵抗の電流 I を求めます。電流の方向は左向き。",
      vi: "③ Tính dòng I qua điện trở 3 Ω. Kết quả hướng sang trái.",
      equations: [["I = I₂ − I₁ = 1.25 − 0.5 = 0.75 A"]],
      note: "Chiều dương I trong đề là sang trái. I₂ đi sang trái nên lấy dấu cộng, I₁ đi sang phải nên lấy dấu trừ. Có thể kiểm tra bằng điện áp nút giữa 6,25 V: dòng sang trái qua 3 Ω là (6,25 − 4)/3 = 0,75 A, dòng qua 5 Ω là 1,25 A, tổng đúng 2 A.",
    },
    { jp: "**解説**\n電源が単独にあるものとして別々に電流を求め合成します。I₂ は、分流の公式を用います。", vi: "**Giải thích**\nTính riêng dòng do từng nguồn rồi cộng theo dấu. Với I₂, dùng công thức chia dòng." },
    { diagram: "current25" },
    { jp: "**解答　I = 0.75 A**", vi: "**Đáp án　I = 0,75 A**" },
  ],
};

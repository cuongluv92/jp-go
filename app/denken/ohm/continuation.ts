import type { FormulaPart, LessonRow } from "./lesson";

function fraction(numerator: string | FormulaPart[], denominator: string | FormulaPart[], red = false): FormulaPart {
  return { fraction: [
    typeof numerator === "string" ? [numerator] : numerator,
    typeof denominator === "string" ? [denominator] : denominator,
  ], red };
}

export const continuation: Record<number, LessonRow[]> = {
  6: [
    { jp: "分圧の公式", vi: "Công thức chia áp", heading: true },
    {
      jp: "2抵抗の**分電圧** といえば 全体の電圧を抵抗の大きさで**比例配分**。分子は各抵抗値、分母は2抵抗の和。",
      vi: "Điện áp trên từng điện trở (**分電圧**) được chia từ điện áp tổng **theo tỷ lệ thuận** với giá trị điện trở. Tử số là điện trở đang xét, mẫu số là tổng hai điện trở.",
      equations: [
        ["V₁ =", "**V₀**", fraction("R₁", "R₁ + R₂", true), "[V]"],
        ["V₂ =", "**V₀**", fraction("R₂", "R₁ + R₂", true), "[V]"],
      ],
      note: "Áp dụng khi hai điện trở mắc nối tiếp, cùng có một dòng điện chạy qua. V₀ đặt lên cả hai điện trở.",
    },
    { diagram: "voltageRule" },
    { jp: "分流の公式", vi: "Công thức chia dòng", heading: true },
    {
      jp: "2抵抗の**分路電流** といえば 全体の電流を**逆比例配分**。分子は反対側の抵抗値、分母は2抵抗の和。",
      vi: "Dòng điện từng nhánh (**分路電流**) được chia từ dòng tổng **theo tỷ lệ nghịch** với điện trở. Tử số là điện trở nhánh kia, mẫu số là tổng hai điện trở.",
      equations: [
        ["I₁ =", "**I₀**", fraction("R₂", "R₁ + R₂", true), "[A]"],
        ["I₂ =", "**I₀**", fraction("R₁", "R₁ + R₂", true), "[A]"],
      ],
      note: "Hai điện trở phải mắc song song giữa đúng hai nút. I₀ là dòng tổng trước điểm phân nhánh.",
    },
    { diagram: "currentRule" },
    { jp: "練習問題 01 · 並列合成抵抗", vi: "Bài tập 01 · Điện trở tương đương song song", heading: true },
    { jp: "図の a-b 間の抵抗値 Rₐᵦ［Ω］は。", vi: "Tính điện trở Rₐᵦ [Ω] giữa hai điểm a và b trong hình." },
    { diagram: "parallel01" },
    {
      jp: "**解き方**\n公式 和分の積。または、大きい方の値を 1＋抵抗値の比で割る（3倍）。",
      vi: "**Cách giải**\nDùng công thức tích chia tổng (和分の積). Cách khác là chia giá trị lớn cho 1 cộng tỷ số điện trở (gấp 3 lần).",
      equations: [
        ["Rₐᵦ =", fraction("60 × 180", "60 + 180"), "= 45 Ω"],
        ["Rₐᵦ =", fraction("180", ["1 + ", fraction("[[180]]", "[[60]]")]), "=", fraction("180", "1 + [[3]]"), "= 45 Ω"],
      ],
    },
    {
      jp: "**解説**\nここでの計算例のように、抵抗値の比は 180÷60＝3 なので、180 を 4（1＋（抵抗値の比＝3））で割ると、合成抵抗 R₀［Ω］が求められます。",
      vi: "**Giải thích**\nTrong ví dụ này, tỷ số điện trở là 180 ÷ 60 = 3. Chia 180 cho 4 (bằng 1 cộng tỷ số 3) thì được điện trở tương đương R₀ [Ω].",
    },
    { jp: "**解答　Rₐᵦ = 45 Ω**", vi: "**Đáp án　Rₐᵦ = 45 Ω**" },
  ],
  8: [
    { jp: "練習問題 03 · 分圧", vi: "Bài tập 03 · Chia áp (tiếp theo trang 7)", heading: true },
    {
      jp: "**解き方**\n分圧の公式を使うと、分子は求める側の値、分母は2抵抗の和。",
      vi: "**Cách giải**\nDùng công thức chia áp. Tử số là điện trở ở phía cần tính điện áp, mẫu số là tổng hai điện trở.",
      equations: [
        ["V₁ = 100 ×", fraction("[[80]]", "[[80 + 120]]"), "= 40 V"],
        ["V₂ = 100 ×", fraction("120", "80 + 120"), "= 60 V"],
      ],
    },
    {
      jp: "**別解**\n回路の電流 I を求めると、各部の電圧は、電流×抵抗としても求められます。",
      vi: "**Cách giải khác**\nTìm dòng điện I của mạch, rồi tính điện áp trên mỗi điện trở bằng dòng điện nhân điện trở.",
      equations: [
        ["I =", fraction("V₀", "R₁ + R₂"), "=", fraction("100", "80 + 120"), "= 0.5 A"],
        ["V₁ = IR₁ = 0.5 × 80 = 40 V"],
        ["V₂ = IR₂ = 0.5 × 120 = 60 V"],
      ],
    },
    { jp: "**解答　V₁ = 40 V　V₂ = 60 V**", vi: "**Đáp án　V₁ = 40 V　V₂ = 60 V**" },
    { jp: "練習問題 04 · 分流", vi: "Bài tập 04 · Chia dòng", heading: true },
    { jp: "図の I₁、I₂［A］は。", vi: "Tính I₁ và I₂ [A] trong hình." },
    { diagram: "current04" },
    {
      jp: "**解き方**\n分流の公式を使うと、分子は求める側と反対の値、分母は2抵抗の和。",
      vi: "**Cách giải**\nDùng công thức chia dòng. Tử số là điện trở ở nhánh kia, mẫu số là tổng hai điện trở.",
      equations: [
        ["I₁ = 30 ×", fraction("[[15]]", "[[60 + 15]]"), "= 6 A"],
        ["I₂ = 30 ×", fraction("60", "60 + 15"), "= 24 A"],
      ],
    },
    {
      jp: "**別解**\n並列合成抵抗を求めると、並列回路の電圧は、各部の電流は。",
      vi: "**Cách giải khác**\nTính điện trở tương đương của mạch song song, rồi tính điện áp chung của hai nhánh và dòng điện qua từng nhánh.",
      equations: [
        [fraction("60 × 15", "60 + 15"), "= 12 Ω"],
        ["30 × 12 = 360 V"],
        ["I₁ =", fraction("360", "60"), "= 6 A"],
        ["I₂ =", fraction("360", "15"), "= 24 A"],
      ],
      note: "Kiểm tra tổng dòng điện: 6 + 24 = 30 A. Nhánh có điện trở nhỏ hơn mang dòng điện lớn hơn.",
    },
    { jp: "**解答　I₁ = 6 A　I₂ = 24 A**", vi: "**Đáp án　I₁ = 6 A　I₂ = 24 A**" },
  ],
  9: [
    { jp: "導体の抵抗 といえば 長さに比例し、断面積に反比例", vi: "Điện trở của vật dẫn tỷ lệ thuận với chiều dài và tỷ lệ nghịch với tiết diện", heading: true },
    { diagram: "conductor" },
    { jp: "導体の抵抗", vi: "Điện trở của vật dẫn", heading: true },
    {
      jp: "**導体**※1 の抵抗は、材質、形状、温度によってその値が異なります。同一材質の抵抗 R［Ω］は、導体の長さ L［m］に比例し、断面積 A［m²］に反比例します。",
      vi: "Điện trở của **vật dẫn (導体)** thay đổi theo vật liệu, hình dạng và nhiệt độ. Với cùng vật liệu, điện trở R [Ω] tỷ lệ thuận với chiều dài L [m] và tỷ lệ nghịch với tiết diện A [m²].",
      equations: [["R =", "**ρ**", fraction("L", "A", true), "[Ω]"]],
      note: "Dùng cho vật dẫn đồng nhất, tiết diện đều. Khi so sánh theo chiều dài và tiết diện, giữ cùng nhiệt độ để điện trở suất ρ như nhau.",
    },
    {
      jp: "ρ は電流の通しにくさを表す定数で**抵抗率**といい、単位はオームメートル［Ω・m］です。",
      vi: "ρ là hằng số biểu thị mức độ cản trở dòng điện của vật liệu, gọi là **điện trở suất (抵抗率)**. Đơn vị là ôm mét [Ω·m].",
    },
    {
      jp: "電線のような導体では、抵抗率よりも電流の通しやすさを表す**導電率**の方が便利です。導電率を表す量記号は σ、単位はジーメンス毎メートル［S/m］で、抵抗率の逆数になります。",
      vi: "Với vật dẫn như dây điện, có thể dùng **độ dẫn điện (導電率)** để biểu thị mức độ dễ dẫn dòng điện. Ký hiệu là σ, đơn vị siemens trên mét [S/m]. Độ dẫn điện bằng nghịch đảo của điện trở suất.",
      equations: [["σ =", fraction("1", "ρ [Ω·m]"), "=", fraction("1", "ρ"), "[S/m]"]],
    },
    {
      jp: "導体の抵抗 といえば **ρ × A 分の L**。ρ：抵抗率、比例定数。電流の通しにくさを表す導体固有の定数［Ω・m］。A：断面積［m²］、L：導体の長さ［m］。σ：導電率。電流の通しやすさを表す固有の定数［S/m］。",
      vi: "Điện trở vật dẫn bằng **ρ nhân L chia A**. ρ là điện trở suất [Ω·m], hệ số đặc trưng cho mức độ cản dòng điện. A là tiết diện [m²], L là chiều dài vật dẫn [m]. σ là độ dẫn điện [S/m], đặc trưng cho mức độ dễ dẫn dòng điện.",
      equations: [["R =", "**ρ**", fraction("L", "A", true), "[Ω]"]],
    },
    {
      jp: "導電率 といえば 抵抗率 ρ の逆数で σ で表す。※よって導体の抵抗式は次のようにも書ける。",
      vi: "Độ dẫn điện (導電率) là nghịch đảo của điện trở suất ρ, ký hiệu σ. Vì vậy cũng có thể viết công thức điện trở của vật dẫn theo σ.",
      equations: [
        ["σ =", fraction("1", "ρ [Ω·m]", true), "=", fraction("1", "ρ", true), "[S/m]"],
        ["R =", fraction("L", "σA"), "[Ω]"],
      ],
    },
    { jp: "※1 導体：電気を通す物体（物質）のことで、銅やアルミニウムが代表的な導体です。", vi: "Chú thích 1. Vật dẫn là vật hoặc chất cho dòng điện đi qua. Đồng và nhôm là những vật dẫn điển hình." },
  ],
  10: [
    { jp: "パーセント導電率", vi: "Độ dẫn điện phần trăm", heading: true },
    {
      jp: "電線などの電流の通しやすさを表す方法として、電線の導電率 σ と国際標準軟銅の導電率 σₛ（シグマエス）との比をパーセント（％）で表します。これを**パーセント導電率**といいます。",
      vi: "Để biểu thị khả năng dẫn điện của dây dẫn, lấy tỷ số giữa độ dẫn điện σ của dây và độ dẫn điện σₛ của đồng ủ mềm chuẩn quốc tế (国際標準軟銅), rồi biểu thị dưới dạng phần trăm. Đại lượng này gọi là **độ dẫn điện phần trăm (パーセント導電率)**.",
    },
    {
      jp: "国際標準軟銅の 20 ℃における導電率 σₛ の値は、次のようになります。\n**国際標準軟銅の 20 ℃における導電率**",
      vi: "Độ dẫn điện σₛ của đồng ủ mềm chuẩn quốc tế ở 20 °C có giá trị như dưới đây.",
      equations: [["σₛ = 58.0 × 10⁶ S/m"]],
    },
    {
      jp: "パーセント導電率 といえば 国際標準軟銅の値との比較で、％で表す。\n**パーセント導電率**",
      vi: "**Độ dẫn điện phần trăm** so sánh độ dẫn điện của vật liệu với giá trị chuẩn của đồng ủ mềm, biểu thị bằng %.",
      equations: [["σ% =", fraction("σ", "σₛ", true), "**× 100 =**", fraction("σ", "58.0 × 10⁶", true), "**× 100**", "[%]"]],
      note: "Mẫu số là độ dẫn điện của đồng chuẩn tại 20 °C. Dùng cùng đơn vị S/m cho σ và σₛ.",
    },
    { jp: "練習問題 01 · 電線の抵抗", vi: "Bài tập 01 · Điện trở của dây điện", heading: true },
    {
      jp: "直径 1.6 mm、長さ 100 m の銅線の抵抗 R［Ω］は。ただし、銅線の抵抗率 ρ を 1.8 × 10⁻⁸［Ω・m］とする。",
      vi: "Tính điện trở R [Ω] của dây đồng có đường kính 1,6 mm và chiều dài 100 m. Cho điện trở suất ρ của dây đồng là 1,8 × 10⁻⁸ Ω·m.",
    },
    {
      jp: "**解き方**\n−8 と 2 は足し算。−3 と 2 は掛け算。",
      vi: "**Cách giải**\nCộng hai số mũ −8 và 2 ở tử số. Nhân hai số mũ −3 và 2 ở mẫu số.",
      equations: [
        ["R = ρ ×", fraction("L", "A"), "= 1.8 × 10[[⁻⁸]] ×", fraction("1.0 × 10[[²]]", ["π × (", fraction("1.6", "2"), "× 10[[⁻³]])[[²]]"])],
        ["≈", fraction("1.8 × 10[[⁻⁶]]", "2.01 × 10[[⁻⁶]]"), "≈ 0.90 Ω"],
      ],
      note: "1,6 mm là đường kính. Tiết diện tròn dùng A = πr² với bán kính r = 0,8 mm = 0,8 × 10⁻³ m.",
    },
    {
      jp: "**解説**\n上述のように、π＝3.14 として分子と分母を別々に計算します。または、数値のみを計算し、指数計算は後で行います。関数電卓は使用できないので指数計算は手計算で。\n※電卓での計算：1.8÷3.14÷0.8÷0.8＝0.8957… → 0.90",
      vi: "**Giải thích**\nLấy π = 3,14 rồi tính riêng tử và mẫu như trên. Cũng có thể tính phần số trước, xử lý lũy thừa sau. Sách hướng dẫn tính số mũ bằng tay vì không được dùng máy tính khoa học.\nTính bằng máy tính thường: 1,8 ÷ 3,14 ÷ 0,8 ÷ 0,8 = 0,8957… → 0,90.",
      equations: [
        [fraction("1.8", "3.14 × 0.8²"), "≈ 0.896 ≈ 0.90"],
        [fraction("10⁻⁸ × 10²", "(10⁻³)²"), "=", fraction("10⁻⁶", "10⁻⁶"), "= 1"],
      ],
    },
    { jp: "**解答　R = 0.90 Ω**", vi: "**Đáp án　R = 0,90 Ω**" },
  ],
};

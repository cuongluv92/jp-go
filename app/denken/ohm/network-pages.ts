import { fraction } from "./continuation";
import type { FormulaLine, LessonRow } from "./lesson";

const twoBranches = [
  [fraction("E₁", "R₁"), "+", fraction("E₂", "R₂")],
  [fraction("1", "R₁"), "+", fraction("1", "R₂")],
] as const;
const threeBranches = [
  [...twoBranches[0], "+", fraction("E₃", "R₃")],
  [...twoBranches[1], "+", fraction("1", "R₃")],
] as const;

function millman(branches: typeof twoBranches | typeof threeBranches, red = false): FormulaLine {
  return ["Eₐᵦ =", fraction([...branches[0]], [...branches[1]], red), "[V]"];
}

export const networkPages: Record<number, LessonRow[]> = {
  15: [
    { jp: "練習問題 01 · テブナンの定理", vi: "Bài tập 01 · Định lý Thévenin", heading: true },
    { jp: "図の R₃ に流れる電流 I［A］は。", vi: "Tính dòng điện I [A] chạy qua R₃ trong hình." },
    { diagram: "thExercise" },
    {
      jp: "**解き方**\n① 図1のように R₃ を回路の外に出します。つまり、点線の部分の回路を図2のようにテブナンの等価回路に変換することを考えます。",
      vi: "**Cách giải**\n① Tách R₃ khỏi phần mạch cần quy đổi như hình 1. Thay phần mạch trong khung nét đứt bằng mạch tương đương Thévenin như hình 2.",
      note: "Chọn a–b là hai đầu của tải R₃. Chỉ quy đổi phần mạng còn lại. R₃ sẽ được gắn lại sau khi tìm xong Eₐᵦ và Rₐᵦ.",
    },
    { diagram: "thTransform" },
    {
      jp: "② 図3のように R₃ がないときの a-b 間の電圧 Eₐᵦ（電源の起電力に相当）を求めます。\n※1-6節を参照",
      vi: "② Tính điện áp hở mạch Eₐᵦ giữa a–b khi đã tháo R₃ như hình 3. Điện áp này là suất điện động của nguồn tương đương.\nXem mục 1‑6.",
      equations: [[
        ...millman(twoBranches).slice(0, -1), "=",
        fraction([fraction("200", "20"), "+", fraction("100", "30")], [fraction("1", "20"), "+", fraction("1", "30")]), "= 160 V",
      ]],
      note: "Giữ cả hai nguồn khi tính điện áp hở mạch. Điện áp 160 V nằm giữa 100 V và 200 V, gần 200 V hơn vì nhánh 200 V có điện trở nhỏ hơn (20 Ω).",
    },
    { diagram: "thOpen" },
    {
      jp: "③ 図4のように抵抗 R₃ がないときの端子 a-b 間からみた回路網の内部抵抗 Rₐᵦ を求めます。このとき、電源は除き、短絡して計算します。\n大きい方の値・比・または",
      vi: "③ Khi R₃ vẫn đang tháo, tính điện trở trong Rₐᵦ nhìn vào mạng từ a–b như hình 4. Triệt tiêu các nguồn áp bằng cách nối tắt vị trí của chúng trên sơ đồ. Có thể dùng tỷ số điện trở hoặc công thức tích chia tổng.",
      equations: [
        ["Rₐᵦ =", fraction("[[30]]", ["1 +", fraction("[[30]]", "[[20]]")]), "= 12 Ω"],
        ["Rₐᵦ =", fraction("20 × 30", "20 + 30"), "= 12 Ω"],
      ],
      note: "Sau khi triệt tiêu nguồn áp, R₁ và R₂ cùng nối vào hai nút a–b nên mắc song song. Kết quả 12 Ω nhỏ hơn điện trở nhỏ nhất 20 Ω.",
    },
    { diagram: "thResistance" },
    {
      jp: "④ 図5のようなテブナンの等価回路ができます。よって、R₃ の電流 I［A］は、次のように求められます。",
      vi: "④ Lập mạch tương đương Thévenin như hình 5. Từ đó tính dòng I [A] qua R₃.",
      equations: [["I =", fraction("Eₐᵦ", "Rₐᵦ + R₃"), "=", fraction("160", "12 + 8"), "= 8 A"]],
      note: "Gắn R₃ lại. Vì cùng dòng I chạy qua Rₐᵦ và R₃, phải cộng 12 + 8 Ω. Điện áp trên tải là 8 × 8 = 64 V, dùng để đối chiếu với trang 18.",
    },
    { diagram: "thLoad" },
    {
      jp: "**解説**\n電流を求める枝路を除いて、テブナンの等価回路をつくります。Eₐᵦ［V］は R₃［Ω］がないときの電圧、Rₐᵦ［Ω］は E₁、E₂［V］を短絡除去したときの合成抵抗です。",
      vi: "**Giải thích**\nBỏ nhánh cần tính dòng để lập mạch Thévenin. Eₐᵦ là điện áp khi tháo R₃. Rₐᵦ là điện trở tương đương khi triệt tiêu E₁ và E₂ bằng cách nối tắt nguồn áp trên sơ đồ.",
    },
    { jp: "**解答　I = 8 A**", vi: "**Đáp án　I = 8 A**" },
  ],
  16: [
    { jp: "ミルマンの定理 といえば 並列回路全体の電圧を求める", vi: "Định lý Millman · Tính điện áp chung của mạch song song", heading: true },
    { jp: "ミルマンの定理の公式", vi: "Công thức định lý Millman", heading: true },
    { diagram: "millIntro" },
    { jp: "並列回路の電圧", vi: "Điện áp của mạch song song", heading: true },
    {
      jp: "上図のように、電源と抵抗の枝路がいくつか並列になっている回路は、**ミルマンの定理の公式**により、Eₐᵦ［V］を求めることができます。",
      vi: "Khi nhiều nhánh gồm nguồn áp và điện trở mắc song song như hình, dùng **công thức định lý Millman** để tính điện áp chung Eₐᵦ [V].",
      note: "Các nhánh phải cùng nối vào đúng hai nút a–b. Chọn Eₐᵦ = Vₐ − Vᵦ. Nguồn có cực dương về phía b thì lấy E của nhánh đó với dấu âm. Nhánh chỉ có điện trở vẫn tính 1/R ở mẫu, với E = 0 ở tử.",
    },
    {
      jp: "ミルマンの定理 といえば 分子は**短絡電流の和**、分母は**抵抗の逆数の和**\n2枝路の場合・3枝路の場合",
      vi: "Trong công thức Millman, tử số là **tổng đại số dòng ngắn mạch** của các nhánh, mẫu số là **tổng nghịch đảo điện trở**. Dưới đây là dạng hai nhánh và ba nhánh.",
      equations: [millman(twoBranches, true), millman(threeBranches, true)],
      note: "Có thể suy ra từ Kirchhoff tại nút a: dòng từ nhánh k đi lên a là (Eₖ − Eₐᵦ)/Rₖ. Cộng các dòng có dấu bằng 0 rồi chuyển vế, ta được tổng Eₖ/Rₖ chia tổng 1/Rₖ. Tử có đơn vị A, mẫu có đơn vị S nên kết quả là V.",
    },
    { diagram: "millBranches" },
  ],
  17: [
    { jp: "練習問題 01 · 3枝路回路の電圧", vi: "Bài tập 01 · Điện áp của mạch ba nhánh", heading: true },
    { jp: "図の回路において、端子電圧 Eₐᵦ［V］は。", vi: "Tính điện áp Eₐᵦ [V] giữa hai đầu a–b của mạch trong hình." },
    { diagram: "millExercise" },
    {
      jp: "**解き方**\nミルマンの定理の公式に数値を当てはめます。",
      vi: "**Cách giải**\nThế số vào công thức Millman.",
      equations: [[
        ...millman(threeBranches).slice(0, -1), "=",
        fraction([fraction("27", "1"), "+", fraction("22", "2"), "+", fraction("0", "2.5")],
          [fraction("1", "1"), "+", fraction("1", "2"), "+", fraction("1", "2.5")]),
        "=", fraction("27 + 11", "1 + 0.5 + 0.4"), "=", fraction("38", "1.9"), "= 20 V",
      ]],
      note: "Nhánh 2,5 Ω không có nguồn nên góp 0 A ở tử, nhưng vẫn góp 0,4 S ở mẫu. Kiểm lại tại 20 V: hai nhánh nguồn cấp (27 − 20)/1 = 7 A và (22 − 20)/2 = 1 A. Nhánh 2,5 Ω nhận 20/2,5 = 8 A.",
    },
    {
      jp: "**解説**\n分子は a-b 間を短絡したと仮定したときの電流の大きさで、分母は電源を短絡除去したときの a-b 間の合成抵抗の逆数を表しています。",
      vi: "**Giải thích**\nTử số biểu thị dòng điện khi giả sử nối tắt a–b. Mẫu số là nghịch đảo của điện trở tương đương giữa a–b sau khi triệt tiêu các nguồn áp trên sơ đồ.",
    },
    { jp: "**解答　Eₐᵦ = 20 V**", vi: "**Đáp án　Eₐᵦ = 20 V**" },
  ],
  18: [
    { jp: "練習問題 02 · 3枝路回路の電流", vi: "Bài tập 02 · Dòng điện trong mạch ba nhánh", heading: true },
    { jp: "図の回路において R₃ の電流 I₃［A］は。", vi: "Tính dòng I₃ [A] qua R₃ trong hình." },
    { diagram: "millLoad" },
    {
      jp: "**解き方**\n① まず、a-b 間の電圧 Eₐᵦ［V］を求めます。",
      vi: "**Cách giải**\n① Tính điện áp Eₐᵦ [V] giữa a–b.",
      equations: [[
        "Eₐᵦ =", fraction([fraction("200", "20"), "+", fraction("100", "30"), "+", fraction("0", "8")],
          [fraction("1", "20"), "+", fraction("1", "30"), "+", fraction("1", "8")]), "= 64 V",
      ]],
      note: "Khác bước tính Eₐᵦ ở trang 15, ở đây R₃ vẫn mắc trong mạch. Vì thế phải đưa 1/8 vào mẫu và kết quả là điện áp có tải 64 V, thay vì điện áp hở mạch 160 V.",
    },
    { diagram: "millThird" },
    {
      jp: "② 右図より、次のように求められます。",
      vi: "② Từ hình bên, áp dụng định luật Ohm cho R₃.",
      equations: [["I₃ =", fraction("Eₐᵦ", "R₃"), "=", fraction("64", "8"), "= 8 A"]],
      note: "R₃ chỉ có điện trở và hai đầu đặt đúng giữa a–b nên dùng trực tiếp 64 V. Dòng đi từ a xuống b như mũi tên.",
    },
    {
      jp: "**解説**\n a-b 間の電圧 Eₐᵦ［V］がわかれば、各枝路の電流は Eₐᵦ［V］を接続して考えると簡単に求められます。なお、①の計算を電卓で行う場合は、分数を小数にして次のように計算します。",
      vi: "**Giải thích**\nKhi biết điện áp Eₐᵦ, có thể xét riêng mỗi nhánh với điện áp đó đặt vào hai đầu để tìm dòng. Khi dùng máy tính cho bước ①, có thể đổi phân số ra số thập phân như dưới đây.",
      equations: [[fraction("10 + 3.33 + 0", "0.05 + 0.0333 + 0.125"), "=", fraction("13.33", "0.2083"), "≈ 64"]],
    },
    { jp: "**参考**\n同様に、I₁［A］、I₂［A］も求めてみましょう。", vi: "**Tham khảo**\nTương tự, hãy tính I₁ [A] và I₂ [A]." },
    { diagram: "millOther" },
    {
      jp: "上左図より、R₁ の電流 I₁［A］は次のとおり。\n同右図より、R₂ の電流 I₂［A］は次のとおり。",
      vi: "Hình trái cho dòng I₁ qua R₁. Hình phải cho dòng I₂ qua R₂.",
      equations: [
        ["I₁ =", fraction("200 − 64", "20"), "=", fraction("136", "20"), "= 6.8 A"],
        ["I₂ =", fraction("100 − 64", "30"), "=", fraction("36", "30"), "= 1.2 A"],
      ],
      note: "Hai nguồn 200 V và 100 V đều cao hơn điện áp nút 64 V nên I₁, I₂ đi lên nút a. Kiểm tra Kirchhoff: 6,8 + 1,2 = 8 A, đúng bằng dòng qua R₃.",
    },
    { jp: "**解答　I₃ = 8 A**", vi: "**Đáp án　I₃ = 8 A**" },
  ],
  19: [
    { jp: "ブリッジ回路 といえば 平衡時は対辺抵抗値の積が等しい", vi: "Mạch cầu · Khi cân bằng, tích hai cặp điện trở đối diện bằng nhau.", heading: true },
    { diagram: "bridge19" },
    { jp: "ブリッジ回路", vi: "Mạch cầu", heading: true },
    {
      jp: "上図のような回路は、検流計 G（わずかな電流を検出する計器）で橋渡しの回路になっているので、**ブリッジ回路**といいます。回路図において、a-b 間の電位差（電圧）が 0 V のときは、I₃＝0 A になります。このとき、次式が成り立ちます。",
      vi: "Mạch trong hình gọi là **mạch cầu (ブリッジ回路)** vì điện kế G, dụng cụ phát hiện dòng điện rất nhỏ, nối ngang hai điểm giữa. Khi hiệu điện thế a–b bằng 0 V thì dòng I₃ qua điện kế bằng 0 A. Khi đó có các phương trình sau.",
      equations: [["R₁I₁ = R₂I₂"], ["R₃I₁ = R₄I₂"]],
      note: "Nhìn sơ đồ bên phải. Khi a và b cùng điện thế, sụt áp từ c xuống a bằng sụt áp từ c xuống b. Tương tự, sụt áp từ a xuống d bằng sụt áp từ b xuống d. Nhánh giữa không mang dòng, nên hai điện trở trên mỗi nhánh có cùng dòng chạy qua.",
    },
    {
      jp: "よって、＝をはさんだ積（R₁×R₄）と積（R₂×R₃）は等しい。",
      vi: "Suy ra hai tích chéo qua dấu bằng, R₁×R₄ và R₂×R₃, bằng nhau.",
      equations: [[fraction("I₂", "I₁"), "=", fraction("R₁", "R₂"), "=", fraction("R₃", "R₄")]],
      note: "Với các điện trở và dòng nhánh khác 0 như trong hình, rút I₂/I₁ từ từng phương trình rồi cho hai tỷ số bằng nhau. Nhân chéo R₁/R₂ = R₃/R₄ cho ra điều kiện cân bằng.",
    },
    {
      jp: "I₃＝0 A、すなわち検流計の触れが 0 になったとき、**ブリッジが平衡した**といいます。",
      vi: "Khi I₃ = 0 A, tức kim điện kế không lệch, ta nói **mạch cầu đã cân bằng**.",
    },
    {
      jp: "ブリッジの平衡条件 といえば **対辺抵抗値の積**が等しい\n**ブリッジの平衡条件**",
      vi: "Điều kiện cân bằng của mạch cầu là **tích các điện trở ở hai cạnh đối diện** bằng nhau.\n**Điều kiện cân bằng mạch cầu**",
      equations: [["**R₁R₄** = **R₂R₃**"]],
      note: "Xác định cặp điện trở theo các nút nối thực tế. Hình vẽ kiểu hình thoi và hình vẽ kiểu hai nhánh đứng có cùng cách nối.",
    },
  ],
  20: [
    { jp: "練習問題 01", vi: "Bài tập 01 · Mạch cầu cân bằng", heading: true },
    {
      jp: "図の回路で、スイッチ S を開閉しても I＝30 A で一定であった。このとき R₄ の値は。",
      vi: "Trong mạch ở hình, dù mở hay đóng công tắc S, dòng tổng vẫn bằng 30 A. Tính R₄.",
    },
    { diagram: "bridge20" },
    {
      jp: "**解き方**\nスイッチ S を開閉しても電流が一定の場合、ブリッジは平衡しています。平衡時は、対辺抵抗値の積が等しいので、4R₃＝8R₄ から R₃＝2R₄。S を開いたときの合成抵抗は、",
      vi: "**Cách giải**\nĐóng hay mở S mà dòng tổng vẫn không đổi, nên mạch cầu cân bằng. Tích hai cặp điện trở đối diện bằng nhau, do đó 4R₃ = 8R₄ và R₃ = 2R₄. Sau đây là điện trở tương đương khi S mở.",
      note: "Nguồn vẫn là 100 V. Nếu hai điểm giữa khác điện thế, đóng S sẽ tạo thêm đường dòng điện và làm thay đổi điện trở nhìn từ nguồn. Trong mạch này dòng tổng không đổi, nên hai điểm giữa cùng điện thế và ta có thể giải khi S mở.",
    },
    { diagram: "bridge20Solution" },
    {
      jp: "**大きい方の値／1＋抵抗値の比**・**電圧／電流**\n8＋2R₄＝10 より、R₄＝1.0 Ω。",
      vi: "**Giá trị lớn chia cho 1 cộng tỷ số điện trở** · **Điện áp chia dòng điện**.\nTừ 8 + 2R₄ = 10 suy ra R₄ = 1,0 Ω.",
      equations: [[fraction("[[8 + 2R₄]]", "[[1 + 2]]"), "=", fraction("[[100]]", "[[30]]"), "=", fraction("10", "3"), "Ω"]],
      note: "Khi S mở, nhánh trên là 8 + R₃ = 8 + 2R₄, nhánh dưới là 4 + R₄. Nhánh trên gấp đôi nhánh dưới, nên điện trở song song bằng điện trở nhánh trên chia 3. Cả mạch có điện trở 100/30 = 10/3 Ω. Nhân hai vế với 3 cho ra 8 + 2R₄ = 10.",
    },
    {
      jp: "**解説**\nブリッジが平衡しているときは、上下または左右の抵抗値の比は同じになります。（8 は 4 の 2 倍より R₃ は R₄ の 2 倍）\n2抵抗の並列合成抵抗の式を用いると簡単に求められます。",
      vi: "**Giải thích**\nKhi cầu cân bằng, tỷ số điện trở ở các cặp trên–dưới hoặc trái–phải tương ứng bằng nhau. Vì 8 gấp đôi 4 nên R₃ gấp đôi R₄. Có thể tính nhanh bằng công thức điện trở tương đương song song của hai nhánh.",
      equations: [[fraction("R₁R₂", "R₁ + R₂"), "=", fraction("R₂", ["1 +", fraction("R₂", "R₁")]), "=", fraction("大きい方の値", "1＋抵抗値の比")]],
      equationsVi: [[fraction("R₁R₂", "R₁ + R₂"), "=", fraction("R₂", ["1 +", fraction("R₂", "R₁")]), "=", fraction("Giá trị lớn", "1 + tỷ số điện trở")]],
      note: "Kiểm tra: R₄ = 1 Ω thì R₃ = 2 Ω. Hai nhánh là 10 Ω và 5 Ω, mang dòng 10 A và 20 A, tổng 30 A. Hai điểm giữa đều có cùng điện thế vì sụt áp trên 8 Ω là 10×8 = 80 V và trên 4 Ω là 20×4 = 80 V.",
    },
    { jp: "**解答　R₄ = 1.0 Ω**", vi: "**Đáp án　R₄ = 1,0 Ω**" },
  ],
};

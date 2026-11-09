import { fraction } from "./continuation";
import type { LessonRow } from "./lesson";

export const reviewPages: Record<number, LessonRow[]> = {
  26: [
    { jp: "例題 1 · 重要度★★ · 令和4年度上期 · 理論 問5", vi: "Ví dụ 1 · Độ quan trọng ★★ · R4 kỳ đầu · Lý thuyết câu 5", heading: true },
    {
      jp: "図1のように、二つの抵抗 R₁＝1 Ω、R₂［Ω］と電圧 V［V］の直流電源からなる回路がある。この回路において、抵抗 R₂［Ω］の両端の電圧値が 100 V、流れる電流 I₂ の値が 5 A であった。この回路に図2のように抵抗 R₃＝5 Ω を接続したとき、抵抗 R₃［Ω］に流れる電流 I₃ の値［A］として、最も近いものを次の（1）～（5）のうちから一つ選べ。\n（1）4.2　（2）16.8　（3）20　（4）21　（5）26.3",
      vi: "Mạch hình 1 gồm hai điện trở R₁ = 1 Ω, R₂ [Ω] và nguồn một chiều V [V]. Điện áp hai đầu R₂ là 100 V và dòng I₂ qua nó là 5 A. Khi mắc thêm R₃ = 5 Ω như hình 2, chọn giá trị gần nhất của dòng I₃ [A] qua R₃.\n(1) 4,2　(2) 16,8　(3) 20　(4) 21　(5) 26,3",
    },
    { diagram: "ex26" },
    {
      jp: "**解き方**\n図1′から R₂ を求めます。電源電圧は抵抗×電流です。",
      vi: "**Cách giải**\nTừ hình 1′, tính R₂. Điện áp nguồn bằng tổng điện trở nối tiếp nhân dòng điện.",
      equations: [["R₂ =", fraction("100", "I₂"), "=", fraction("100", "5"), "= 20 Ω"], ["V = [[1 + 20]] × [[5]] = 105 V"]],
      note: "100 V chỉ là điện áp trên R₂ trong mạch ban đầu. R₁ còn sụt 5 V, nên nguồn là 105 V. Khi mắc thêm R₃, nguồn vẫn giữ 105 V, còn điện áp và dòng qua R₂ thay đổi.",
    },
    { diagram: "solve26" },
    {
      jp: "図2′の並列合成抵抗は、大きい方の値と抵抗値の比から求めます。または和分の積を使います。1 Ω の電流 I を求め、分流の公式により電流 I₃ を求めます。求める側と反対の抵抗値を分子に、2抵抗の和を分母にします。",
      vi: "Tính điện trở tương đương song song trong hình 2′ bằng giá trị lớn và tỷ số điện trở, hoặc dùng tích chia tổng. Tính dòng I qua điện trở 1 Ω rồi dùng công thức chia dòng để tìm I₃. Tử số lấy điện trở nhánh kia, mẫu số là tổng hai điện trở.",
      equations: [
        [fraction("[[20]]", ["1 +", fraction("[[20]]", "[[5]]")]), "= 4 Ω"],
        [fraction("20 × 5", "20 + 5"), "= 4 Ω"],
        ["I =", fraction("105", "1 + [[4]]"), "= 21 A"],
        ["I₃ = 21 ×", fraction("[[20]]", "[[20 + 5]]"), "= 16.8 A"],
      ],
      note: "21 A là dòng tổng trước nút chia nhánh. Muốn tính dòng qua nhánh 5 Ω thì tử số phải lấy 20 Ω. Nhánh 5 Ω nhận phần lớn dòng vì điện trở nhỏ hơn.",
    },
    { jp: "**参考**\n並列回路の電圧は 21×4＝84 V。電流 I₃ は次のとおり。", vi: "**Tham khảo**\nĐiện áp chung của hai nhánh là 21 × 4 = 84 V. Dùng định luật Ohm để kiểm lại I₃.", equations: [["I₃ =", fraction("84", "5"), "= 16.8 A"]] },
    { jp: "解答 **（2）**", vi: "Đáp án **(2)** · 16,8 A" },
  ],
  27: [
    { jp: "例題 2 · 重要度★★★ · 令和5年度上期 · 理論 問5", vi: "Ví dụ 2 · Độ quan trọng ★★★ · R5 kỳ đầu · Lý thuyết câu 5", heading: true },
    {
      jp: "図の直流回路において、抵抗 R＝10 Ω で消費される電力［W］の値として、最も近いものを次の（1）～（5）のうちから一つ選べ。\n（1）0.28　（2）1.89　（3）3.79　（4）5.36　（5）7.62",
      vi: "Chọn giá trị gần nhất của công suất [W] tiêu thụ trên điện trở R = 10 Ω trong mạch một chiều.\n(1) 0,28　(2) 1,89　(3) 3,79　(4) 5,36　(5) 7,62",
    },
    { diagram: "ex27" },
    {
      jp: "**解き方**\nテブナンの定理を用います。① 10 Ω を回路の外に出し、点線内の回路をテブナンの等価回路に変換することを考えます。",
      vi: "**Cách giải**\nDùng định lý Thévenin. ① Tháo điện trở 10 Ω và quy đổi phần mạch trong khung nét đứt.",
    },
    { diagram: "solve27" },
    {
      jp: "② 10 Ω がないときの a-b 間の電位差（電圧）Eₐᵦ［V］を求めます。\n③ 10 Ω がないときの a-b 間の合成抵抗 Rₐᵦ［Ω］を求めます（電源は短絡して計算）。同じ値の2抵抗の並列合成抵抗は元の値の半分になります。",
      vi: "② Tính điện áp hở mạch Eₐᵦ [V] giữa a–b khi tháo 10 Ω.\n③ Vẫn tháo 10 Ω, triệt tiêu các nguồn áp bằng cách nối tắt trên sơ đồ rồi tính Rₐᵦ. Hai điện trở bằng nhau mắc song song cho điện trở bằng một nửa.",
      equations: [
        ["Vₐ = 60 ×", fraction("1", "2"), "= 30 V　 Vᵦ = 80 ×", fraction("1", "2"), "= 40 V"],
        ["Eₐᵦ = Vₐ − Vᵦ = 30 − 40 = −10 V"],
        ["Rₐᵦ =", fraction("40", "[[2]]"), "+", fraction("60", "[[2]]"), "= 50 Ω"],
      ],
      note: "Lấy nút dưới làm mốc 0 V. Hai điện trở 40 Ω chia đôi 60 V, hai điện trở 60 Ω chia đôi 80 V. Khi triệt tiêu nguồn, nhìn từ a sang b phải đi qua cặp 40 Ω song song rồi cặp 60 Ω song song, nên cộng 20 Ω và 30 Ω.",
    },
    {
      jp: "④ 図のテブナンの等価回路より、電流 I を求めます。\n⑤ 10 Ω で消費される電力 P［W］を求めます。",
      vi: "④ Từ mạch Thévenin, tính dòng I.\n⑤ Tính công suất P [W] tiêu thụ trên 10 Ω.",
      equations: [
        ["I =", fraction("Eₐᵦ", "Rₐᵦ + 10"), "=", fraction("−10", "50 + 10"), "= −", fraction("1", "6"), "A"],
        ["P = I²R = (−", fraction("1", "6"), ")² × 10 ≈ 0.28 W"],
      ],
      note: "Nếu quy ước I dương từ a sang b qua tải thì I âm vì b có điện thế cao hơn a. Dòng thật đi từ b sang a. Công suất tiêu thụ vẫn dương vì dùng I²R.",
    },
    { jp: "**解説**\nR＝10 Ω を除き、端子 a-b 間からみた回路網をテブナンの等価回路（電源 Eₐᵦ［V］と直列抵抗 Rₐᵦ［Ω］）に変換します。Vₐ［V］及び Vᵦ［V］は、それぞれ同じ値の2つの抵抗で分圧しているので、各電圧は半分となります。", vi: "**Giải thích**\nBỏ R = 10 Ω, rồi thay mạng nhìn từ a–b bằng nguồn Eₐᵦ nối tiếp Rₐᵦ. Vì mỗi bộ chia áp gồm hai điện trở bằng nhau, Vₐ và Vᵦ lần lượt bằng một nửa điện áp nguồn tương ứng." },
    { jp: "解答 **（1）**", vi: "Đáp án **(1)** · khoảng 0,28 W" },
  ],
  28: [
    { jp: "例題 3 · 重要度★★ · 平成28年度 · 理論 問5", vi: "Ví dụ 3 · Độ quan trọng ★★ · Heisei 28 · Lý thuyết câu 5", heading: true },
    {
      jp: "図のように、内部抵抗 r＝0.1 Ω、起電力 E＝9 V の電池4個を並列に接続した電源に抵抗 R＝0.5 Ω の負荷を接続した回路がある。この回路において、抵抗 R＝0.5 Ω で消費される電力の値［W］として、最も近いものを次の（1）～（5）のうちから一つ選べ。\n（1）50　（2）147　（3）253　（4）820　（5）4050",
      vi: "Bốn pin có điện trở trong r = 0,1 Ω và suất điện động E = 9 V mắc song song, cấp điện cho tải R = 0,5 Ω. Chọn giá trị gần nhất của công suất [W] tiêu thụ trên tải.\n(1) 50　(2) 147　(3) 253　(4) 820　(5) 4050",
    },
    { diagram: "ex28" },
    {
      jp: "**解き方**\nテブナンの定理を用います。図（a）の a-b 間の電圧 Eₐᵦ、及び E を短絡除去したときの a-b 間の合成抵抗 Rₐᵦ を求めます。",
      vi: "**Cách giải**\nDùng định lý Thévenin. Tìm điện áp hở mạch Eₐᵦ ở hình (a) và điện trở Rₐᵦ giữa a–b sau khi nối tắt các nguồn áp lý tưởng trên sơ đồ.",
      equations: [["Eₐᵦ = 9 V"], ["Rₐᵦ =", fraction("0.1", "4"), "Ω"]],
      note: "Bốn pin giống nhau và mắc song song cùng cực tính. Điện áp hở mạch vẫn là 9 V. Sau khi triệt tiêu bốn nguồn lý tưởng, bốn điện trở 0,1 Ω song song cho 0,025 Ω.",
    },
    { diagram: "solve28" },
    {
      jp: "図（b）の回路より、電流 I を求めます。抵抗 R で消費される電力を求めます。",
      vi: "Từ mạch tương đương ở hình (b), tính I rồi tính công suất trên tải R.",
      equations: [["I =", fraction("9", [fraction("0.1", "4"), "+ 0.5"]), "≈ 17.14 A"], ["P = I²R = 17.14² × 0.5 ≈ 147 W"]],
      note: "Dùng 0,525 Ω để tìm dòng vì gồm cả điện trở trong và tải. Khi tính công suất riêng của tải thì chỉ nhân I² với 0,5 Ω.",
    },
    {
      jp: "**解説**\nミルマンの定理を用いて解くこともできます。",
      vi: "**Giải thích**\nCó thể giải bằng định lý Millman.",
      equations: [
        ["Eₐᵦ =", fraction([fraction("9", "0.1"), "+", fraction("9", "0.1"), "+", fraction("9", "0.1"), "+", fraction("9", "0.1"), "+", fraction("0", "0.5")], [fraction("1", "0.1"), "+", fraction("1", "0.1"), "+", fraction("1", "0.1"), "+", fraction("1", "0.1"), "+", fraction("1", "0.5")])],
        ["Eₐᵦ =", fraction([fraction("36", "0.1")], [fraction("21", "0.5")]), "=", fraction("36", "0.1"), "×", fraction("0.5", "21"), "≈ 8.57 V"],
        ["I =", fraction("8.57", "0.5"), "= 17.14 A"], ["P = I²R = 17.14² × 0.5 ≈ 147 W"],
      ],
      note: "Ở cách Millman này, tải 0,5 Ω vẫn nằm trong mạch nên góp 1/0,5 ở mẫu và 0 ở tử. Kết quả 8,57 V là điện áp có tải, khác 9 V khi để hở.",
    },
    { diagram: "alt28" },
    { jp: "解答 **（2）**", vi: "Đáp án **(2)** · khoảng 147 W" },
  ],
  29: [
    { jp: "例題 4 · 重要度★★★ · 令和4年度上期 · 理論 問7", vi: "Ví dụ 4 · Độ quan trọng ★★★ · R4 kỳ đầu · Lý thuyết câu 7", heading: true },
    {
      jp: "図のように、抵抗6個を接続した回路がある。この回路において、ab 端子間の合成抵抗の値が 0.6 Ω であった。このとき、抵抗 Rₓ の値［Ω］として、最も近いものを次の（1）～（5）のうちから1つ選べ。\n（1）1.0　（2）1.2　（3）1.5　（4）1.8　（5）2.0",
      vi: "Mạch ở hình gồm sáu điện trở. Điện trở tương đương giữa a và b bằng 0,6 Ω. Chọn giá trị gần nhất của Rₓ [Ω].\n(1) 1,0　(2) 1,2　(3) 1,5　(4) 1,8　(5) 2,0",
    },
    { diagram: "ex29" },
    {
      jp: "**解き方**\n問題図は、図1となります。図1のブリッジ回路は、平衡しており 2 Ω（橋の部分の抵抗）は省略でき、図2となります。",
      vi: "**Cách giải**\nVẽ lại đề bài thành hình 1. Cầu cân bằng nên có thể bỏ điện trở 2 Ω ở nhánh cầu, được hình 2.",
      note: "Nét cong tại chỗ giao trong đề cho biết hai dây không nối với nhau. Rₓ mắc thẳng giữa a và b. Điện trở 2 Ω nằm ngang mới là nhánh cầu giữa hai điểm chia áp.",
    },
    { diagram: "bridge29" },
    {
      jp: "図2は、図3のようになります。図3の合成抵抗は、0.6 Ω と与えられているので、和分の積の公式を使います。",
      vi: "Rút gọn hình 2 thành hình 3. Vì điện trở tương đương hình 3 là 0,6 Ω, dùng công thức tích chia tổng.",
      equations: [[fraction("1.5Rₓ", "1.5 + Rₓ"), "= 0.6"], ["1.5Rₓ = 0.6(1.5 + Rₓ)"], ["0.9Rₓ = 0.9"], ["Rₓ = 1.0 Ω"]],
      note: "Hai nhánh ngoài đều có 1 + 2 = 3 Ω. Hai nhánh 3 Ω song song thành 1,5 Ω. Sau đó 1,5 Ω song song với Rₓ. Thế Rₓ = 1 Ω kiểm tra được 1,5/2,5 = 0,6 Ω.",
    },
    { diagram: "solve29" },
    {
      jp: "**解説**\nはじめに、対辺抵抗値の積（1×2＝1×2）の一致により回路が平衡していることを確認します。平衡している場合は、2 Ω（橋の部分の抵抗）には、電流が流れないので、これを除いて考える、または次のように短絡して考えることもできます。",
      vi: "**Giải thích**\nTrước hết kiểm tra tích các cặp điện trở đối diện, 1×2 = 1×2, để xác nhận cầu cân bằng. Điện trở 2 Ω ở nhánh cầu không mang dòng, nên khi tính có thể bỏ nhánh ấy hoặc nối tắt hai điểm giữa như hình dưới.",
      note: "Chỉ dùng hai cách này sau khi chứng minh hai điểm giữa cùng điện thế. Khi nối tắt trên sơ đồ tính, cặp 1 Ω song song cho 0,5 Ω, cặp 2 Ω song song cho 1 Ω, cộng lại vẫn là 1,5 Ω.",
    },
    { diagram: "alt29" },
    { jp: "解答 **（1）**", vi: "Đáp án **(1)** · 1,0 Ω" },
  ],
  30: [
    { jp: "例題 5 · 重要度★★★ · 令和4年度下期 · 理論 問5", vi: "Ví dụ 5 · Độ quan trọng ★★★ · R4 kỳ sau · Lý thuyết câu 5", heading: true },
    {
      jp: "図のような直流回路において、抵抗 3 Ω の端子間の電圧が 1.8 V であった。このとき、電源電圧 E［V］の値として、最も近いものを次の（1）～（5）のうちから一つ選べ。\n（1）1.8　（2）3.6　（3）5.4　（4）7.2　（5）10.4",
      vi: "Trong mạch một chiều ở hình, điện áp hai đầu điện trở 3 Ω là 1,8 V. Chọn giá trị gần nhất của điện áp nguồn E [V].\n(1) 1,8　(2) 3,6　(3) 5,4　(4) 7,2　(5) 10,4",
    },
    { diagram: "ex30" },
    {
      jp: "**解き方**\n図1の対辺抵抗値の積は、4×10＝8×5＝40 で、等しいことからブリッジ回路は平衡しており、12 Ω には電流が流れません。したがって、12 Ω を除くと図2のようになります。",
      vi: "**Cách giải**\nTrong hình 1, tích điện trở ở hai cặp đối diện là 4×10 = 8×5 = 40. Cầu cân bằng nên điện trở 12 Ω không mang dòng. Bỏ nhánh 12 Ω, được hình 2.",
    },
    { diagram: "solve30a" },
    { diagram: "solve30b" },
    {
      jp: "図2の 9 Ω と 18 Ω の並列回路の合成抵抗は、大きい方の値と抵抗値の比を用いると 6 Ω であり図3となります。",
      vi: "Hai nhánh 9 Ω và 18 Ω ở hình 2 mắc song song. Dùng giá trị lớn và tỷ số điện trở để tính điện trở tương đương 6 Ω, được hình 3.",
      equations: [[fraction("18", "9"), "= 2"], [fraction("[[18]]", "1 + [[2]]"), "= 6 Ω"]],
      note: "Nhánh trên là 4 + 5 = 9 Ω. Nhánh dưới là 8 + 10 = 18 Ω. Điện trở 3 Ω ở ngoài cầu nên vẫn mắc nối tiếp với khối 6 Ω sau khi rút gọn.",
    },
    { diagram: "solve30c" },
    {
      jp: "図3の 3 Ω の電流 I は、電圧を抵抗で割って求めます。6 Ω の電圧は、電流×抵抗より 0.6×6＝3.6 V。したがって、E＝3.6＋1.8＝5.4 V。",
      vi: "Trong hình 3, lấy điện áp chia điện trở để tính dòng I qua 3 Ω. Điện áp trên 6 Ω là 0,6×6 = 3,6 V. Vậy E = 3,6 + 1,8 = 5,4 V.",
      equations: [["I =", fraction("1.8", "3"), "= 0.6 A"], ["E = 3.6 + 1.8 = 5.4 V"]],
      note: "Hai khối 6 Ω và 3 Ω nối tiếp nên cùng mang 0,6 A. Có thể kiểm tra bằng điện trở toàn mạch 6 + 3 = 9 Ω, nhân với 0,6 A được 5,4 V.",
    },
    {
      jp: "**解説**\n9 Ω と 18 Ω の並列合成抵抗を、和分の積で求めます。12 Ω を短絡して考える方法もあります。",
      vi: "**Giải thích**\nCó thể tính điện trở song song của 9 Ω và 18 Ω bằng tích chia tổng. Cũng có thể nối tắt hai đầu của 12 Ω trên sơ đồ tính vì chúng cùng điện thế.",
      equations: [
        [fraction("9 × 18", "9 + 18"), "=", fraction("162", "27"), "= 6 Ω"],
        [fraction("4 × 8", "4 + 8"), "+", fraction("5 × 10", "5 + 10"), "= 6 Ω"],
        [fraction("8", "1 + [[2]]"), "+", fraction("10", "1 + [[2]]"), "=", fraction("18", "3"), "= 6 Ω"],
      ],
    },
    { jp: "解答 **（3）**", vi: "Đáp án **(3)** · 5,4 V" },
  ],
};

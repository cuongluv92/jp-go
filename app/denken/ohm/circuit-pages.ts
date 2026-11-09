import { fraction } from "./continuation";
import type { LessonRow } from "./lesson";

export const circuitPages: Record<number, LessonRow[]> = {
  11: [
    {
      jp: "**単位の倍数（接頭語）**",
      vi: "**Bội số của đơn vị (tiền tố)**",
      heading: true,
      note: "Tiền tố chỉ thay cách viết cùng một đại lượng. Chữ hoa và chữ thường khác nhau: M = 10⁶, còn m = 10⁻³.",
    },
    {
      jp: "値が大きい場合（もしくは小さい場合）は、単位に倍数を表す記号（接頭語）、キロ［k］、ミリ［m］などを付けて表します。",
      vi: "Khi giá trị rất lớn hoặc rất nhỏ, có thể gắn vào đơn vị một ký hiệu biểu thị hệ số (tiền tố), chẳng hạn kilo [k] hay mili [m].",
    },
    {
      jp: "＜例1＞ 1 000 は 0 を 3 個書く代わりに k（キロ）を付ける",
      vi: "Ví dụ 1. Dùng k (kilo) để biểu thị hệ số 1 000.",
      equations: [["1 000 V = 1 kV"], ["1 000 Ω = 1 kΩ"]],
      note: "Đổi từ kV sang V thì nhân 1 000. Đổi từ V sang kV thì chia 1 000.",
    },
    {
      jp: "＜例2＞ 1 × 10⁻³ のとき、× 10⁻³ を書く代わりに m（ミリ）を付ける",
      vi: "Ví dụ 2. Dùng m (mili) để thay cho hệ số × 10⁻³.",
      equations: [["1 × 10⁻³ V = 1 mV"], ["1 × 10⁻³ A = 1 mA"]],
      note: "Khi thế vào công thức Ohm với Ω và V, đổi dòng sang A trước. Ví dụ 3 mA = 0,003 A.",
    },
    {
      jp: "なお、下表のように接頭語 M は「メガ」ですが、抵抗に M を用いる場合は「メグ」と呼ぶこともあります。\n＜例3＞",
      vi: "Tiền tố M đọc là メガ (mega). Khi dùng M với điện trở, đôi khi cũng đọc là メグ, như メグオーム.",
      equations: [["1 × 10⁶ Ω = 1 MΩ"]],
    },
    {
      jp: "**表1-3-1** よく用いられる単位の倍数",
      vi: "**Bảng 1-3-1** Các tiền tố đơn vị thường dùng",
      table: {
        jp: ["読み方", "記号", "単位に乗ぜられる倍数"],
        vi: ["Tiền tố", "Ký hiệu", "Hệ số nhân"],
        rows: [
          ["テラ", "tera", "T", "10¹²"], ["ギガ", "giga", "G", "10⁹"],
          ["メガ", "mega", "M", "10⁶"], ["キロ", "kilo", "k", "10³ (1 000)"],
          ["ヘクト", "hecto", "h", "10² (100)"], ["デカ", "deca", "da", "10"],
          ["デシ", "deci", "d", "10⁻¹"], ["センチ", "centi", "c", "10⁻² (1/100)"],
          ["ミリ", "mili", "m", "10⁻³ (1/1 000)"], ["マイクロ", "micro", "μ", "10⁻⁶"],
          ["ナノ", "nano", "n", "10⁻⁹"], ["ピコ", "pico", "p", "10⁻¹²"],
        ],
      },
    },
  ],
  12: [
    { jp: "キルヒホッフの法則 といえば 電流和の法則と電圧和の法則", vi: "Định luật Kirchhoff gồm định luật dòng điện và định luật điện áp.", heading: true },
    { diagram: "kirchhoffIntro" },
    { jp: "キルヒホッフの第1法則", vi: "Định luật Kirchhoff thứ nhất", heading: true },
    {
      jp: "**キルヒホッフの第1法則**を **図1-4-1** の接続点 a で考えると、I₁［A］は「流入」する電流、I₂［A］と I₃［A］は「流出」する電流で、次式が成り立ち、\n**電流和の法則**",
      vi: "Xét **định luật Kirchhoff thứ nhất** tại nút a trong **hình 1-4-1**. Dòng I₁ [A] đi vào nút, còn I₂ [A] và I₃ [A] đi ra. Ta có phương trình dưới đây.\n**Định luật dòng điện**",
      equations: [["I₁ = I₂ + I₃ [A]"]],
      note: "Dùng định luật dòng điện tại một nút. Điện tích không tích tụ ở nút, nên mỗi ampe đi vào phải có một ampe đi ra. Ví dụ nếu 5 A đi vào và một nhánh mang 2 A đi ra, nhánh còn lại mang 3 A đi ra.",
    },
    { diagram: "node12" },
    { jp: "接続点に入る電流と出る電流は等しくなります。これを**電流和の法則**といいます。", vi: "Tổng dòng vào một nút bằng tổng dòng ra. Đây là **định luật dòng điện (電流和の法則)**." },
    { jp: "キルヒホッフの第2法則", vi: "Định luật Kirchhoff thứ hai", heading: true },
    {
      jp: "**キルヒホッフの第2法則**を **図1-4-2** の点線の回路で考えると、起電力は E₁［V］と E₂［V］、電圧降下は R₁I［V］と R₂I［V］で次式が成り立ち、\n**電圧和の法則**",
      vi: "Xét **định luật Kirchhoff thứ hai** trong vòng nét đứt ở **hình 1-4-2**. Hai suất điện động là E₁ [V] và E₂ [V]. Sụt áp trên hai điện trở là R₁I [V] và R₂I [V]. Ta có phương trình dưới đây.\n**Định luật điện áp**",
      equations: [["E₁ + E₂ = R₁I + R₂I [V]"]],
      note: "Dùng định luật điện áp cho một vòng kín. Đi hết vòng và quay lại điểm xuất phát thì điện thế trở về giá trị ban đầu. Trong hình, hai nguồn cùng chiều nên cộng E₁ và E₂. Hai điện trở cùng mang dòng I vì mắc nối tiếp.",
    },
    { diagram: "loop12" },
    { jp: "起電力の和と電圧降下の和は等しくなります。これを**電圧和の法則**といいます。", vi: "Tổng đại số các suất điện động bằng tổng đại số các sụt áp. Đây là **định luật điện áp (電圧和の法則)**." },
  ],
  13: [
    {
      jp: "キルヒホッフの第1法則 といえば **電流和の法則**\n電気回路の接続点に**流入する電流の和**＝**流出する電流の和**\nキルヒホッフの第2法則 といえば **電圧和の法則**\n閉回路内の**起電力の和**＝**電圧降下の和**",
      vi: "Kirchhoff 1 · **Định luật dòng điện**\nTại một nút, **tổng dòng vào** = **tổng dòng ra**.\nKirchhoff 2 · **Định luật điện áp**\nTrong một vòng kín, **tổng suất điện động** = **tổng sụt áp**, tính theo dấu.",
    },
    { jp: "練習問題 01 · キルヒホッフの法則", vi: "Bài tập 01 · Định luật Kirchhoff", heading: true },
    { jp: "図の回路で、I₁、I₂、I₃［A］は。", vi: "Tính I₁, I₂ và I₃ [A] trong mạch ở hình." },
    { diagram: "kirchhoff13" },
    {
      jp: "**解き方**\n①「a 点に流入する電流＝流出する電流」より、式（1）。\n②「起電力の和＝電圧降下の和」より、閉回路（Ⅰ）の式（2）、閉回路（Ⅱ）の式（3）。\n電流が、閉回路の向きと異なる場合は、−符号。",
      vi: "**Cách giải**\n① Viết phương trình dòng vào bằng dòng ra tại nút a, được (1).\n② Viết phương trình điện áp cho vòng (I) và vòng (II), được (2) và (3). Nếu dòng qua điện trở ngược chiều đi vòng thì lấy dấu âm cho sụt áp đó.",
      equations: [["I₁ = I₂ + I₃ · (1)"], ["4 = 4I₁ + 5I₃ · (2)"], ["2 = 2I₂ − 5I₃ · (3)"]],
      note: "I₁ đi vào nút a, I₂ và I₃ đi ra. Vòng I đi xuống điện trở 5 Ω cùng chiều I₃ nên có +5I₃. Vòng II đi lên qua chính điện trở đó nên có −5I₃. Nguồn 2 V có cực dương ở dưới trong hình, vì vậy đi xuống qua nguồn ở vòng II là đi từ cực âm sang cực dương.",
    },
    { diagram: "loops13" },
    {
      jp: "式（1）を式（2）に代入して式（4）。③ 式（3）（4）より、式（3）を 2 倍して式（4）を引く。",
      vi: "Thế (1) vào (2) được (4). ③ Nhân (3) với 2 rồi trừ (4).",
      equations: [
        ["4 = 4(I₂ + I₃) + 5I₃ = 4I₂ + 9I₃ · (4)"],
        ["4 = 4I₂ − 10I₃ · (3) × 2"],
        ["4 = 4I₂ + 9I₃ · (4)"],
        ["0 = 0 − 19I₃"],
      ],
      note: "Nhân (3) với 2 để hai phương trình cùng có 4I₂. Khi trừ, I₂ triệt tiêu và chỉ còn I₃.",
    },
    {
      jp: "④ 19I₃＝0 より、I₃＝0 A。\n⑤ I₃＝0 を式（2）に代入して、4＝4I₁ より、I₁＝1 A。\n⑥ I₃＝0 を式（3）に代入して、2＝2I₂ より、I₂＝1 A。",
      vi: "④ Từ 19I₃ = 0 suy ra I₃ = 0 A.\n⑤ Thế vào (2) được 4 = 4I₁, nên I₁ = 1 A.\n⑥ Thế vào (3) được 2 = 2I₂, nên I₂ = 1 A.",
      note: "Kiểm lại tại nút a: 1 A vào bằng 1 A ra. I₃ bằng 0 nên sụt áp trên nhánh 5 Ω bằng 0, tức hai đầu điện trở này có cùng điện thế.",
    },
    {
      jp: "**解説**\n「起電力の和＝電圧降下の和」を求めるときは、閉回路（Ⅰ）、閉回路（Ⅱ）のように、はじめにたどる回路を決めます。起電力は、たどる方向と起電力の向きが同じときは＋符号、逆のときは−符号とします。電圧降下は、たどる方向と電流の向きが同じときは＋符号、たどる方向と電流の向きが反対のときは−符号とします。",
      vi: "**Giải thích**\nTrước hết chọn vòng và chiều đi vòng. Với suất điện động, đi cùng chiều từ cực âm sang cực dương thì lấy dấu cộng, ngược chiều thì lấy dấu trừ. Với sụt áp trên điện trở, đi cùng chiều dòng điện thì lấy dấu cộng, ngược chiều thì lấy dấu trừ, khi viết theo dạng tổng suất điện động bằng tổng sụt áp.",
    },
    { jp: "**解答　I₁ = 1 A　I₂ = 1 A　I₃ = 0 A**", vi: "**Đáp án　I₁ = 1 A　I₂ = 1 A　I₃ = 0 A**" },
  ],
  14: [
    { jp: "テブナンの定理 といえば 電気回路は起電力と内部抵抗の直列回路で表せる", vi: "Định lý Thévenin · Biểu diễn mạch bằng một nguồn suất điện động nối tiếp với điện trở trong.", heading: true },
    { diagram: "thevenin14" },
    { jp: "等価回路の起電力、内部抵抗", vi: "Suất điện động và điện trở trong của mạch tương đương", heading: true },
    {
      jp: "上の左図のように、起電力と抵抗を含む回路網中、任意の抵抗 R［Ω］に流れる電流 I［A］は、上の右図のような等価回路をつくれば、簡単に求められます。Eₐᵦ［V］は、抵抗 R［Ω］がないときに端子 a-b 間に現れる電圧で、直流電源の起電力に相当します。",
      vi: "Trong mạng có các nguồn suất điện động và điện trở như hình trái, có thể tính dòng I [A] qua điện trở R [Ω] bằng mạch tương đương ở hình phải. Eₐᵦ [V] là điện áp giữa hai đầu a–b khi tháo R, tương ứng với suất điện động của nguồn một chiều.",
      note: "Bước 1. Tách điện trở tải R khỏi hai đầu a–b, giữ các nguồn hoạt động và tính điện áp hở mạch Eₐᵦ. Điện áp khi còn gắn tải có thể thấp hơn Eₐᵦ vì có sụt áp bên trong mạng.",
    },
    {
      jp: "Rₐᵦ［Ω］は、回路網中のすべての起電力を除き、その箇所を短絡（接続）して、端子 a-b 間から回路網内部をみた合成抵抗です。",
      vi: "Rₐᵦ [Ω] là điện trở tương đương nhìn vào mạng từ a–b sau khi triệt tiêu các suất điện động và nối tắt tại vị trí các nguồn áp.",
      note: "Bước 2. Vẫn tháo tải R. Với mạch trong hình, thay các nguồn áp lý tưởng độc lập E₁, E₂ bằng dây nối tắt, giữ lại R₁ và R₂. Nhìn từ a–b, hai điện trở này mắc song song. Việc nối tắt ở đây là thao tác trên sơ đồ tính toán.",
    },
    {
      jp: "Eₐᵦ［V］と Rₐᵦ［Ω］の直列回路を**テブナンの等価回路**といいます。テブナンの等価回路は、複雑な電気回路において、任意の枝路に流れる電流を求めるのにとても役に立ちます。どんな回路も、**テブナンの等価回路（起電力とその内部抵抗の回路）**に直すことができることを意味しており、電流を求める枝路を回路の外に出し、残りを起電力と内部抵抗の回路にすれば、簡単な回路になります。",
      vi: "Mạch nối tiếp gồm Eₐᵦ [V] và Rₐᵦ [Ω] gọi là **mạch tương đương Thévenin (テブナンの等価回路)**. Để tính dòng trong một nhánh của mạch phức tạp, tách nhánh đó ra và thay phần còn lại bằng **mạch tương đương Thévenin gồm suất điện động và điện trở trong**.",
      note: "Điều kiện áp dụng ở đây là phần mạng nhìn từ hai đầu a–b là mạng tuyến tính. Tương đương nghĩa là tải nối vào a–b nhận cùng điện áp và dòng điện như khi nối vào mạch gốc.",
    },
    {
      jp: "テブナンの定理 といえば 電気回路を**起電力 Eₐᵦ**と**内部抵抗 Rₐᵦ**に変換\n回路網中の抵抗 R に流れる電流 I は、複雑な回路をテブナンの等価回路に直して考える。\nEₐᵦ：抵抗 R がないときの端子 a-b 間に現れる電圧（電源の起電力に相当）［V］。\nRₐᵦ：抵抗 R がないときの端子 a-b 間からみた回路網の内部抵抗［Ω］。",
      vi: "Định lý Thévenin quy đổi mạng điện thành **suất điện động Eₐᵦ** nối tiếp với **điện trở trong Rₐᵦ**. Dùng mạch tương đương để tính dòng I qua R.\nEₐᵦ [V] là điện áp hở mạch giữa a–b khi tháo R.\nRₐᵦ [Ω] là điện trở trong nhìn từ a–b khi đã tháo R và triệt tiêu các nguồn áp độc lập như trên.",
      equations: [["I =", fraction("Eₐᵦ", "Rₐᵦ + R", true), "[A]"]],
      note: "Bước 3. Gắn tải R trở lại. Khi đó dòng I đi qua cả Rₐᵦ và R nên mẫu số là tổng hai điện trở. Kiểm tra đơn vị: V chia Ω ra A. Nếu R tăng và Eₐᵦ giữ nguyên thì dòng tải giảm.",
    },
  ],
};

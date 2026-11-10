import { fraction } from "./continuation";
import type { FormulaLine, LessonRow } from "./lesson";

function waveform(symbol: "v" | "i", amplitude: string, red = false): FormulaLine {
  return [symbol + " =", red ? "**" + amplitude + " sin(**" : amplitude + " sin(",
    red ? "**100πt −**" : "100πt −", fraction("π", "6", red), red ? "**)**" : ")", symbol === "v" ? "[V]" : "[A]"];
}

export const acPages: Record<number, LessonRow[]> = {
  31: [
    { jp: "正弦波交流 といえば サインカーブ", vi: "Xoay chiều hình sin · Đường cong sin", heading: true },
    { diagram: "ac31" },
    { jp: "正弦波交流の波形", vi: "Dạng sóng xoay chiều hình sin", heading: true },
    {
      jp: "電圧や電流が正弦波状（サインカーブ）に変化するものを**正弦波交流**といいます。正弦波交流は上図のような波形になり、正弦波交流の電圧 v［V］を式で表すと、次のようになります。",
      vi: "Điện áp hoặc dòng điện biến thiên theo đường cong sin được gọi là **xoay chiều hình sin (正弦波交流)**. Điện áp v [V] của dạng sóng trên được biểu diễn bằng công thức sau.",
    },
    {
      jp: "交流波形 といえば サイン波形",
      vi: "Dạng sóng xoay chiều hình sin có đồ thị là đường sin.",
      equations: [["v =", "**Vₘ sin ωt**", "[V]"]],
      note: "Đây là dạng có pha ban đầu bằng 0. Tại t = 0, v = 0 và đang tăng nếu Vₘ, ω dương. Sau một phần tư chu kỳ, ωt = π/2 và v đạt +Vₘ. Sau ba phần tư chu kỳ, v đạt −Vₘ.",
    },
    {
      jp: "**図2-1-1** のように、電圧 v［V］は時間 t により変化する値を表し、瞬時の値を表しているので、これを**瞬時値**といいます。また、Vₘ［V］は**最大値**、sin は**正弦波形**（サインカーブ）、ω は**変化の速さ**、t は時間を表しています。",
      vi: "Trong **hình 2-1-1**, v [V] thay đổi theo thời gian t và cho điện áp tại một thời điểm, gọi là **giá trị tức thời (瞬時値)**. Vₘ [V] là **giá trị cực đại (最大値)**, sin biểu diễn **dạng sóng sin (正弦波形)**, ω cho biết **tốc độ biến thiên**, còn t là thời gian.",
    },
    { diagram: "rotation31" },
  ],
  32: [
    {
      jp: "正弦波形の変化の速さは、1秒間に変化する角度です。これを**角速度**といい、ω［rad/s］（ラジアン毎秒）で表します。波形が1秒間に1回だけ変化すれば、角度変化は 2π［rad］です。1秒間に f 回変化すれば、角速度 ω［rad/s］は 2πf［rad/s］です。周波数 f に対し、ω は f の 2π 倍なので、角速度を**角周波数**ということもあります。",
      vi: "Tốc độ biến thiên của sóng sin là góc thay đổi trong một giây, gọi là **tốc độ góc (角速度)**, ký hiệu ω [rad/s]. Một chu kỳ tương ứng 2π rad. Nếu có f chu kỳ mỗi giây, ω = 2πf rad/s. Vì ω bằng 2π lần tần số f nên còn gọi là **tần số góc (角周波数)**.",
      equations: [["ω =", "**2πf**", "[rad/s]"]],
      note: "f đếm số chu kỳ mỗi giây, ω đo số radian mỗi giây. Ví dụ 50 Hz cho ω = 100π rad/s. Để lấy góc tại thời điểm t, nhân ω với t tính bằng giây.",
    },
    { jp: "**弧度法と度数法**", vi: "**Đo góc bằng radian và bằng độ**", heading: true },
    {
      jp: "**ラジアン**［rad］は、「弧と半径の長さの比」で、**弧度**ともいいます。半径が 1 m の円を考えると**弧の長さがラジアン**となります。1 rad は度数法で約 57.3° です。π［rad］は度数法で 180°、2π［rad］は 360° です。角度の単位［rad］は省略することが多いですが、度数法を使用するときは、「60°」のように［°］を付けます。",
      vi: "**Radian (ラジアン)** đo góc bằng tỷ số giữa độ dài cung và bán kính, còn gọi là **đơn vị cung (弧度)**. Nếu bán kính bằng 1 m, **số đo góc theo radian bằng giá trị số của độ dài cung tính theo mét**. 1 rad xấp xỉ 57,3°. π rad bằng 180°, 2π rad bằng 360°. Ký hiệu rad thường được lược bỏ, còn khi dùng độ thì ghi °, chẳng hạn 60°.",
      equations: [["1 rad =", fraction("180°", "π"), "≈ 57.3°"]],
      note: "Đổi độ sang radian bằng cách nhân π/180. Ví dụ 30° = π/6 rad. Khi thế vào ωt + θ, cả hai số hạng phải cùng đơn vị góc.",
    },
    { diagram: "rad32" },
    { jp: "位相と位相差", vi: "Pha và độ lệch pha", heading: true },
    {
      jp: "**図2-1-3** の v₁、v₂、v₃［V］は、波形の位置がずれています。波形のずれの角度を**位相差**といいます。v₁ と v₂ の位相差は θ₂、v₁ と v₃ の位相差は θ₃ です。",
      vi: "Các sóng v₁, v₂, v₃ [V] trong **hình 2-1-3** lệch nhau theo chiều ngang. Góc biểu thị độ lệch gọi là **độ lệch pha (位相差)**. Độ lệch pha giữa v₁ và v₂ là θ₂, giữa v₁ và v₃ là θ₃.",
      note: "Chọn cùng một mốc trên các sóng có cùng tần số, chẳng hạn lần đi qua 0 theo chiều tăng. Sóng tới mốc sớm hơn nằm về trái, tức sớm pha.",
    },
    { diagram: "phase32" },
  ],
  33: [
    {
      jp: "これを式で表すと、次のようになります。式（2）、（3）の θ₂、θ₃ を、**位相**または**位相角**といい、単位は［rad］（ラジアン）または［°］（度）で表します。",
      vi: "Các sóng được biểu diễn như dưới đây. θ₂, θ₃ trong (2), (3) là **pha (位相)** hay **góc pha (位相角)**, biểu diễn bằng radian hoặc độ.",
      equations: [
        ["v₁ =", "**Vₘ₁ sin ωt**", "[V] · (1)"],
        ["v₂ =", "**Vₘ₂ sin(ωt + θ₂)**", "[V] · (2)"],
        ["v₃ =", "**Vₘ₃ sin(ωt − θ₃)**", "[V] · (3)"],
      ],
    },
    {
      jp: "**図2-1-3** で、v₂ は v₁ より θ₂ だけ先に変化しており、このとき、v₂ は v₁ より θ₂ だけ**位相が進んでいる**といいます。また、v₃ は v₁ より θ₃ だけ**位相が遅れている**といいます。",
      vi: "Trong **hình 2-1-3**, v₂ biến thiên trước v₁ một góc θ₂, nên v₂ **sớm pha (位相が進んでいる)** hơn v₁. v₃ **trễ pha (位相が遅れている)** so với v₁ một góc θ₃.",
      note: "Trong sin(ωt + θ), cộng θ dương làm sóng đạt cùng mốc sớm hơn. Trừ θ dương làm sóng đạt mốc muộn hơn. Có thể tự kiểm tra bằng cách đặt đối số bằng 0 và giải t.",
    },
    {
      jp: "また、**図2-1-4** のように、2つの交流の位相差がないとき、2つの交流は**同相**または**同位相**であるといいます。",
      vi: "Hai sóng có độ lệch pha bằng 0 như **hình 2-1-4** được gọi là **đồng pha (同相・同位相)**.",
      note: "Hai sóng đồng pha có thể có biên độ khác nhau. Khi xem điểm qua 0, kiểm tra cả chiều đi qua 0, vì hai sóng ngược pha cũng có thể bằng 0 cùng lúc.",
    },
    { diagram: "same33" },
    {
      jp: "正弦波交流の波形 といえば 最大値、波形、角速度、時間、位相で表す。v：瞬時値、Vₘ：最大値、sin：波形、ω：角速度、t：時間、θ：位相。",
      vi: "Biểu diễn dạng sóng sin bằng biên độ, hàm dạng sóng, tốc độ góc, thời gian và pha. v là giá trị tức thời, Vₘ là giá trị cực đại, sin là dạng sóng, ω là tốc độ góc, t là thời gian và θ là pha.",
      equations: [["v =", "**Vₘ sin(ωt + θ)**", "[V]"]],
    },
    { jp: "周期と周波数", vi: "Chu kỳ và tần số", heading: true },
    {
      jp: "正弦波形は、**図2-1-5** のように同じ波形を繰り返しています。この変化1回に要する時間を**周期**といい、T［s］（秒）で表します。1秒間に変化する回数を**周波数**といい、f［Hz］で表します。周波数 f［Hz］の交流では、1秒間に f 回変化するので、1回の波の変化に要する時間は 1/f であり、これが周期 T［s］となります。周期 T と周波数 f の関係は、次のように逆数の関係になります。",
      vi: "Sóng sin lặp lại như **hình 2-1-5**. Thời gian để lặp một vòng là **chu kỳ (周期)** T [s]. Số vòng lặp trong một giây là **tần số (周波数)** f [Hz]. Nếu trong một giây có f chu kỳ thì một chu kỳ dài 1/f giây, nên T và f là nghịch đảo của nhau.",
    },
    { diagram: "period33" },
  ],
  34: [
    {
      jp: "周期 T［s］（秒）と周波数 f［Hz］といえば 互いに逆数関係にある。**周期**・**周波数**",
      vi: "**Chu kỳ** T [s] và **tần số** f [Hz] là nghịch đảo của nhau.",
      equations: [["T =", fraction("1", "f", true), "[s]"], ["f =", fraction("1", "T", true), "[Hz]"]],
      note: "Với 50 Hz, T = 1/50 s = 20 ms. Khi đọc đồ thị, lấy khoảng thời gian giữa hai đỉnh liên tiếp hoặc hai lần qua 0 cùng chiều. Hai lần qua 0 liên tiếp ngược chiều cách nhau nửa chu kỳ.",
    },
    { jp: "**直流と交流**", vi: "**Một chiều và xoay chiều**", heading: true },
    {
      jp: "**直流**（一方向の電流：Direct Current、略して **DC**）は、流れる方向（正負）が変化しないもので、電流を**直流電流**といい、電圧を**直流電圧**といいます。電流、電圧の両方を単に直流と呼びます。",
      vi: "**Một chiều (直流, DC)** chỉ dòng điện không đảo chiều hoặc điện áp không đảo cực tính. Dòng gọi là **dòng điện một chiều (直流電流)**, áp gọi là **điện áp một chiều (直流電圧)**. Cả hai thường gọi tắt là một chiều.",
    },
    {
      jp: "**交流**（交互に変化する電流：Alternating Current、略して **AC**）は、周期的に大きさと方向が変化するもので、電流を**交流電流**または**交番電流**といい、電圧を**交流電圧**といいます。電流、電圧の両方を、単に交流と呼びます。",
      vi: "**Xoay chiều (交流, AC)** có độ lớn và chiều hoặc cực tính biến đổi theo chu kỳ. Dòng gọi là **dòng điện xoay chiều (交流電流・交番電流)**, áp gọi là **điện áp xoay chiều (交流電圧)**. Cả hai thường gọi tắt là xoay chiều.",
      note: "Trong hai đồ thị của sách, điện áp pin giữ cùng cực tính cả khi có tải và khi không tải. Sóng điện áp ổ cắm minh họa đổi dấu quanh mốc 0 V.",
    },
    { diagram: "dc34" },
    { diagram: "ac34" },
  ],
  35: [
    { jp: "**大文字と小文字**", vi: "**Chữ hoa và chữ thường**", heading: true },
    {
      jp: "一般に、瞬時値（時間 t の関数）を表す量記号は小文字（e、v、i など）を用い、一定の大きさを表す量記号は大文字（E、V、I など）を用います。また、最大値など特別な大きさを表すときは添字を付けます（Eₘ、Vₘ、Iₘ など）。",
      vi: "Thông thường dùng chữ thường e, v, i cho các giá trị tức thời phụ thuộc t. Dùng chữ hoa E, V, I cho các giá trị có độ lớn cố định. Các độ lớn đặc biệt như cực đại được ghi thêm chỉ số, chẳng hạn Eₘ, Vₘ, Iₘ.",
    },
    { jp: "練習問題 01 · 正弦波交流", vi: "Bài tập 01 · Xoay chiều hình sin", heading: true },
    {
      jp: "図（a）の正弦波交流電圧の瞬時値 v［V］は。また、図（b）のように v［V］を抵抗 R＝10 Ω に加えたとき、流れる電流の瞬時値 i［A］は。",
      vi: "Tìm điện áp tức thời v [V] của sóng hình sin ở hình (a). Khi đặt điện áp đó lên R = 10 Ω như hình (b), tìm dòng tức thời i [A].",
    },
    { diagram: "ex35" },
    {
      jp: "**解き方**\n① v＝Vₘ sin(ωt＋θ)［V］において、最大値と角速度を求めます。",
      vi: "**Cách giải**\n① Dùng dạng tổng quát v = Vₘ sin(ωt + θ). Đọc giá trị cực đại và tính tốc độ góc.",
      equations: [["Vₘ = 100√2 V"], ["ω = 2πf = 2 × π × 50 = 100π rad/s"]],
    },
    {
      jp: "② 位相 θ を用いて、電圧の瞬時値 v［V］を求めます。",
      vi: "② Xác định pha θ rồi viết điện áp tức thời v [V].",
      equations: [["θ = −", fraction("π", "6"), "rad"], waveform("v", "100√2")],
      note: "Đồ thị đi qua 0 theo chiều tăng tại ωt = π/6, bên phải gốc. Tại đó đối số của sin bằng 0, nên π/6 + θ = 0. Vì vậy pha ban đầu là −π/6.",
    },
    {
      jp: "③ オームの法則より、i［A］を求めます。\n**解説**\n電圧 v［V］を求めるには、波形を表す式の最大値、角速度、位相に数値を代入します。電流 i［A］を求めるには、電圧を抵抗で割ります。",
      vi: "③ Dùng định luật Ohm để tìm i [A].\n**Giải thích**\nThế biên độ, tốc độ góc và pha vào biểu thức sóng để tính v. Chia điện áp cho điện trở để tính i.",
      equations: [["i =", fraction("v", "R"), "=", fraction("v", "10")], waveform("i", "10√2")],
      note: "Tải là điện trở thuần 10 Ω nên phép chia chỉ giảm biên độ còn một phần mười. Dòng và áp giữ cùng pha. Kiểm tra tại t = 1/600 s, đối số bằng 0 nên cả v và i đều bằng 0, khớp đồ thị.",
    },
    { jp: "**解答**", vi: "**Đáp án**", equations: [waveform("v", "100√2", true), waveform("i", "10√2", true)] },
  ],
};

import Image from "next/image";

function Diagram({ file, width, height, title, labels }: {
  file: string;
  width: number;
  height: number;
  title: string;
  labels: readonly (readonly [string, string])[];
}) {
  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-border">
      <figcaption className="px-3 py-2 font-semibold">{title}</figcaption>
      <Image src={`/denken/ohm/${file}.webp`} width={width} height={height} alt={title} className="block h-auto max-w-full" />
      <details className="group border-t border-border">
        <summary className="cursor-pointer px-3 py-2 text-sm font-medium text-accent">
          <span className="group-open:hidden">Hiện phụ lục dịch chữ trong hình</span>
          <span className="hidden group-open:inline">Ẩn phụ lục dịch chữ trong hình</span>
        </summary>
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-surface-muted">
            <tr><th scope="col" className="w-2/5 px-3 py-2">Chữ trên hình</th><th scope="col" className="px-3 py-2">Nghĩa tiếng Việt</th></tr>
          </thead>
          <tbody>
            {labels.map(([ja, vi]) => (
              <tr key={ja} className="border-t border-border">
                <th scope="row" lang="ja" className="px-3 py-2 align-top font-medium">{ja}</th>
                <td className="px-3 py-2">{vi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

export const diagrams = {
  elements41: (<Diagram file="elements41" width={703} height={333} title="Trang 41 · Điện trở, cuộn cảm và tụ điện" labels={[["変圧器・交流電源","Máy biến áp và nguồn xoay chiều."],["抵抗・コイル・コンデンサ","Điện trở, cuộn cảm và tụ điện."],["ギャップ（空隙）","Khe hở lõi sắt. Chiều dài khe hở ảnh hưởng đến cảm kháng."]]} />),
  resistor41: (<Diagram file="resistor41" width={156} height={184} title="Hình 2‑4‑1 · Mạch điện trở" labels={[["抵抗回路・V・I・R","Mạch điện trở. Áp V chia dòng I cho R."]]} />),
  coil42: (<Diagram file="coil42" width={719} height={233} title="Hình 2‑4‑2 · Cảm kháng" labels={[["誘導性リアクタンス・コイル","Cảm kháng của cuộn cảm."],["V・I・Xₗ","Điện áp, dòng điện và cảm kháng."]]} />),
  cap42: (<Diagram file="cap42" width={495} height={187} title="Hình 2‑4‑3 · Dung kháng" labels={[["容量性リアクタンス・コンデンサ","Dung kháng của tụ điện."],["V・I・X꜀","Điện áp, dòng điện và dung kháng."]]} />),
  exercise43: (<Diagram file="exercise43" width={231} height={126} title="Trang 43 · Bài tập cảm kháng" labels={[["f = 50 Hz・V = 100 V・L = 50 mH・I","Tần số, điện áp, độ tự cảm và dòng cần tìm."]]} />),
  elements44: (<Diagram file="elements44" width={719} height={311} title="Trang 44 · Tác dụng của R, L và C" labels={[["抵抗・コイル・コンデンサ","Điện trở tiêu thụ năng lượng. Cuộn cảm lý tưởng làm dòng trễ π/2, tụ lý tưởng làm dòng sớm π/2. Hai phần tử lý tưởng này không tiêu thụ năng lượng ròng."]]} />),
  resistor44: (<Diagram file="resistor44" width={710} height={210} title="Hình 2‑5‑1 · Điện áp và dòng điện đồng pha" labels={[["抵抗の作用・電圧 v・電流 i","Tác dụng của điện trở. Đồ thị áp và dòng cùng qua 0 theo cùng chiều."],["R回路のベクトル図","Giản đồ pha của mạch R. Hai vectơ cùng hướng."]]} />),
  coil45: (<Diagram file="coil45" width={620} height={174} title="Hình 2‑5‑2 · Dòng qua cuộn cảm trễ pha" labels={[["コイルの作用・電圧 v・電流 i","Tác dụng của cuộn cảm. Sóng dòng nằm bên phải sóng áp một phần tư chu kỳ."],["Xₗ回路のベクトル図","Giản đồ pha mạch cuộn cảm. Vectơ dòng hướng xuống khi vectơ áp hướng phải."]]} />),
  magnitude36: (<Diagram file="magnitude36" width={668} height={315} title="Trang 36 · Đỉnh, trung bình và hiệu dụng" labels={[["最大値・平均値","Giá trị đỉnh và trung bình nửa chu kỳ."],["i² の平均値・実効値","Trung bình bình phương dòng và căn của giá trị đó."],["T/2・ωt・Iₘ・Vₘ","Nửa chu kỳ, góc quay, đỉnh dòng và đỉnh áp."]]} />),
  rms37: (<Diagram file="rms37" width={308} height={171} title="Hình 2‑2‑1 · Hiệu dụng của sóng sin" labels={[["正弦波交流の実効値","Hiệu dụng của xoay chiều hình sin."],["Vₘ・V（実効値）","Giá trị đỉnh và hiệu dụng bằng đỉnh chia √2."]]} />),
  phasor39: (<Diagram file="phasor39" width={722} height={310} title="Trang 39 · Từ đồ thị đến vectơ pha" labels={[["基準波形・π/3 進んでいます・π/3 遅れています","Sóng mốc và hai sóng sớm hoặc trễ π/3."],["最大値 141 V・実効値 100 V","Biên độ khoảng 141 V và hiệu dụng 100 V."],["波形・最大値と位相・実効値と位相","Dạng sóng, vectơ theo biên độ và vectơ theo hiệu dụng."]]} />),
  phasor40: (<Diagram file="phasor40" width={630} height={250} title="Hình 2‑3‑1 · Độ lớn và pha" labels={[["大きさ（最大値）・θ＝位相","Độ lớn cực đại và góc pha θ."],["基準の方向","Hướng mốc."],["Vₘ と θ がわかれば、波形がわかる","Biết đỉnh và pha thì xác định được sóng khi tần số đã biết."]]} />),
  vectors40: (<Diagram file="vectors40" width={431} height={214} title="Hình 2‑3‑2 · Hai cách ghi độ lớn vectơ" labels={[["長さ＝最大値・長さ＝実効値","Chiều dài mũi tên theo đỉnh hoặc hiệu dụng."],["基準の方向・θ","Hướng mốc và góc pha."]]} />),
  ac31: (<Diagram file="ac31" width={638} height={216} title="Trang 31 · Sóng xoay chiều hình sin" labels={[
    ["交流電源・負荷","Nguồn xoay chiều và tải."],
    ["電流（電圧）・時間 t","Trục dọc là dòng hoặc áp, trục ngang là thời gian."],
    ["電流または電圧の大きさと方向が周期的に変化します","Độ lớn và chiều hoặc cực tính thay đổi theo chu kỳ."],
    ["端子 b を基準電位（0 V）とする","Chọn b làm mốc 0 V. Điện thế tại a luân phiên dương và âm."],
  ]} />),
  rotation31: (<Diagram file="rotation31" width={623} height={215} title="Hình 2‑1‑1 · Đường sin từ vectơ quay" labels={[
    ["動径・瞬時値・最大値・角度","Bán kính quay, giá trị tức thời, giá trị cực đại và góc quay."],
    ["正弦波は、動径（矢）を左回転したときの高さをグラフにしたものです","Đồ thị sin biểu diễn độ cao của đầu mũi tên khi quay ngược chiều kim đồng hồ."],
    ["①〜⑤・0・π・2π・3π・4π","Các vị trí theo thứ tự quay và góc trên trục ngang. Một vòng là 2π rad."],
  ]} />),
  rad32: (<Diagram file="rad32" width={155} height={230} title="Hình 2‑1‑2 · Ý nghĩa của 1 radian" labels={[
    ["弧・半径","Cung tròn và bán kính."],
    ["1 rad＝半径と弧の長さが等しくなる角度","Góc 1 rad ứng với cung có chiều dài bằng bán kính, xấp xỉ 57,3°."],
  ]} />),
  phase32: (<Diagram file="phase32" width={514} height={271} title="Hình 2‑1‑3 · So sánh pha của ba sóng" labels={[
    ["v₂ は、v₁ よりも θ₂ だけ進んでいる（左にずれている）","v₂ sớm pha θ₂ so với v₁, dịch sang trái."],
    ["v₃ は、v₁ よりも θ₃ だけ遅れている（右にずれている）","v₃ trễ pha θ₃ so với v₁, dịch sang phải."],
    ["最大値・Vₘ₁・Vₘ₂・Vₘ₃・ωt","Các giá trị cực đại và trục góc."],
  ]} />),
  same33: (<Diagram file="same33" width={501} height={191} title="Hình 2‑1‑4 · Hai sóng đồng pha" labels={[
    ["同位相・0になるときが同じ","Đồng pha. Hai sóng trong hình cùng qua 0 và cùng chiều tại các mốc đó."],
    ["v₁・v₂・ωt","Hai sóng có biên độ khác nhau và cùng trục góc."],
  ]} />),
  period33: (<Diagram file="period33" width={480} height={185} title="Hình 2‑1‑5 · Chu kỳ và tần số" labels={[
    ["1秒間に変化する回数＝周波数","Tần số là số chu kỳ trong một giây."],
    ["周期 T (s)・f (Hz)・時間 t","Chu kỳ, tần số và trục thời gian."],
    ["1 s","Khoảng một giây chứa f chu kỳ."],
  ]} />),
  dc34: (<Diagram file="dc34" width={625} height={210} title="Hình 2‑1‑6 · Điện áp pin một chiều" labels={[
    ["負荷を接続したとき・負荷を接続しないとき","Trạng thái có tải và không tải."],
    ["乾電池の電圧波形は直流","Điện áp pin khô là điện áp một chiều."],
    ["スイッチ・負荷・0 V（基準電位）","Công tắc, tải và điện thế mốc 0 V."],
  ]} />),
  ac34: (<Diagram file="ac34" width={619} height={205} title="Hình 2‑1‑6 · Điện áp xoay chiều trong ví dụ của sách" labels={[
    ["コンセントの電圧波形は交流","Đồ thị điện áp ổ cắm là dạng xoay chiều."],
    ["右の短い方の電位の変化が交流波形になります","Trong hình, điện thế phía khe ngắn bên phải biến đổi thành dạng sóng xoay chiều."],
    ["左の長い方は大地に接地されています・0 V（基準電位）","Hình minh họa phía khe dài bên trái được nối về đất và dùng làm mốc 0 V."],
  ]} />),
  ex35: (<Diagram file="ex35" width={624} height={176} title="Trang 35 · Đồ thị điện áp và mạch điện trở" labels={[
    ["(a)・v (V)・ωt (rad)","Đồ thị điện áp theo góc."],
    ["100√2・−100√2・π/6・7π/6・13π/6・f = 50 Hz","Biên độ dương và âm, các mốc qua 0 và tần số cho trước."],
    ["(b)・i (A)・v (V)・R = 10 Ω","Mạch áp dụng điện áp ở hình (a) lên điện trở 10 Ω để tìm dòng."],
  ]} />),
  ex26: (<Diagram file="ex26" width={622} height={178} title="Trang 26 · Hai trạng thái của mạch" labels={[
    ["図1・図2","Mạch ban đầu và mạch sau khi thêm R₃."],
    ["V・R₁ = 1 Ω・R₂・I₂ = 5 A","Nguồn và hai điện trở ban đầu, với dòng qua R₂ bằng 5 A."],
    ["R₃ = 5 Ω・I₃","Điện trở thêm vào song song với R₂ và dòng cần tính."],
  ]} />),
  solve26: (<Diagram file="solve26" width={323} height={349} title="Trang 26 · Mạch đã điền số liệu" labels={[
    ["図1′・図2′","Hai sơ đồ sau khi xác định các giá trị."],
    ["100 V・I₂ = 5 A・R₂ = 20 Ω","Áp và dòng trên R₂ ban đầu."],
    ["V = 105 V・I = 21 A・I₃","Điện áp nguồn, dòng tổng và dòng qua R₃ sau khi mắc thêm."],
  ]} />),
  ex27: (<Diagram file="ex27" width={335} height={129} title="Trang 27 · Mạch cần tính công suất" labels={[
    ["60 V・80 V","Hai nguồn áp."],
    ["40 Ω・60 Ω・R = 10 Ω","Hai cặp điện trở chia áp và điện trở tải cần tính công suất."],
  ]} />),
  solve27: (<Diagram file="solve27" width={610} height={178} title="Trang 27 · Tháo tải và thay mạch Thévenin" labels={[
    ["Vₐ = 30 V・Vᵦ = 40 V・0 V","Điện thế hai đầu tải khi hở mạch, tính theo nút mốc dưới."],
    ["テブナンの等価回路","Mạch tương đương Thévenin."],
    ["Rₐᵦ = 50 Ω・Eₐᵦ = −10 V・10 Ω・I","Điện trở trong, điện áp hở mạch theo Vₐ − Vᵦ, điện trở tải và dòng qua tải."],
  ]} />),
  ex28: (<Diagram file="ex28" width={177} height={182} title="Trang 28 · Bốn pin cấp điện cho tải" labels={[
    ["r = 0.1 Ω・E = 9 V","Điện trở trong và suất điện động của mỗi pin."],
    ["R = 0.5 Ω","Điện trở tải."],
  ]} />),
  solve28: (<Diagram file="solve28" width={381} height={188} title="Trang 28 · Quy đổi bốn pin thành một nguồn" labels={[
    ["(a)・(b)・a・b","Mạng bốn pin và mạch tương đương, với cùng hai đầu a–b."],
    ["Eₐᵦ = 9 V・Rₐᵦ = 0.1/4 Ω","Điện áp hở mạch và điện trở trong tương đương."],
    ["R = 0.5 Ω・I","Điện trở tải và dòng qua tải."],
  ]} />),
  alt28: (<Diagram file="alt28" width={282} height={151} title="Trang 28 · Mạch năm nhánh tính bằng Millman" labels={[
    ["r = 0.1 Ω・E = 9 V","Thông số của bốn nhánh nguồn."],
    ["a・b・R = 0.5 Ω・I","Hai nút chung và nhánh tải."],
  ]} />),
  ex29: (<Diagram file="ex29" width={252} height={203} title="Trang 29 · Mạch cầu trong đề bài" labels={[
    ["a・b・Rₓ","Hai đầu mạch và điện trở cần tìm."],
    ["1 Ω・2 Ω","Điện trở hai cạnh trên là 1 Ω, hai cạnh dưới là 2 Ω. Điện trở ngang ở giữa cũng là 2 Ω."],
  ]} />),
  bridge29: (<Diagram file="bridge29" width={218} height={181} title="Hình 1 · Vẽ lại mạch cầu" labels={[
    ["a・b・Rₓ","Rₓ nối trực tiếp giữa a và b."],
    ["1 Ω・2 Ω","Hai bộ chia áp giống nhau, nối ngang bằng điện trở 2 Ω."],
  ]} />),
  solve29: (<Diagram file="solve29" width={473} height={238} title="Hình 2–3 · Rút gọn cầu cân bằng" labels={[
    ["3 Ω の抵抗が並列 → 3/2 = 1.5 Ω","Hai nhánh 3 Ω song song thành 1,5 Ω."],
    ["1.5 Ω・Rₓ・a・b","Khối 1,5 Ω song song với Rₓ giữa a và b."],
  ]} />),
  alt29: (<Diagram file="alt29" width={354} height={143} title="Trang 29 · Cách rút gọn khi nối hai điểm giữa" labels={[
    ["短絡","Nối tắt hai điểm giữa cùng điện thế trên sơ đồ tính."],
    ["1/2 = 0.5 Ω・2/2 = 1 Ω・1.5 Ω","Hai cặp song song thành 0,5 Ω và 1 Ω, cộng được 1,5 Ω."],
    ["Rₓ","Nhánh Rₓ mắc song song với khối 1,5 Ω."],
  ]} />),
  ex30: (<Diagram file="ex30" width={256} height={199} title="Trang 30 · Mạch cầu nối tiếp điện trở 3 Ω" labels={[
    ["4 Ω・5 Ω・8 Ω・10 Ω・12 Ω","Bốn điện trở cạnh và điện trở nhánh cầu 12 Ω."],
    ["3 Ω・1.8 V・E (V)","Điện trở ngoài cầu, điện áp trên nó và điện áp nguồn cần tính."],
  ]} />),
  solve30a: (<Diagram file="solve30a" width={246} height={202} title="Hình 1 · Kiểm tra cầu cân bằng" labels={[
    ["4×10 = 40・8×5 = 40","Hai tích đối diện bằng nhau nên nhánh 12 Ω không mang dòng."],
    ["3 Ω・E (V)","Điện trở nối tiếp với cầu và điện áp nguồn."],
  ]} />),
  solve30b: (<Diagram file="solve30b" width={251} height={222} title="Hình 2 · Bỏ nhánh không mang dòng" labels={[
    ["9 Ω・18 Ω","Tổng điện trở nhánh trên và nhánh dưới."],
    ["3 Ω・E (V)","Điện trở ngoài cầu và nguồn."],
  ]} />),
  solve30c: (<Diagram file="solve30c" width={243} height={161} title="Hình 3 · Mạch nối tiếp đã rút gọn" labels={[
    ["6 Ω・3 Ω・1.8 V・I・E (V)","Khối cầu tương đương 6 Ω, điện trở ngoài cầu 3 Ω, sụt áp trên 3 Ω, dòng chung và điện áp nguồn."],
  ]} />),
  delta21: (<Diagram file="delta21" width={704} height={252} title="Trang 21 · Từ tam giác Δ sang sao Y" labels={[
    ["Δ-Y 変換（デルタ・スター変換）", "Biến đổi tam giác–sao."],
    ["(a)・(b)・a・b・c", "Mạng Δ và mạng Y tương đương. Ba đầu a, b, c giữ nguyên."],
    ["R₁・R₂・R₃ → Rₐ・Rᵦ・R꜀", "Ba cạnh tam giác chuyển thành ba nhánh sao."],
  ]} />),
  deltaDetail21: (<Diagram file="deltaDetail21" width={302} height={251} title="Trang 21 · Chọn hai cạnh kề đầu a" labels={[
    ["Rₐ の両側2抵抗の積", "Tích hai điện trở Δ ở hai phía đầu a, tức R₃ và R₁."],
    ["3抵抗の和", "Tổng của cả ba điện trở Δ."],
  ]} />),
  delta22: (<Diagram file="delta22" width={179} height={143} title="Trang 22 · Mạch cầu trong đề bài" labels={[
    ["I₁ (A)・I₂ (A)・10 V", "Hai dòng nhánh cần lấy tỷ số và điện áp nguồn."],
    ["2 Ω・1 Ω・2 Ω・1 Ω・2 Ω", "Hai điện trở bên trái lần lượt 2 Ω và 1 Ω. Tam giác bên phải gồm điện trở giữa 2 Ω, cạnh trên 1 Ω và cạnh dưới 2 Ω."],
  ]} />),
  deltaSolve22: (<Diagram file="deltaSolve22" width={400} height={209} title="Trang 22 · Mạch sau khi đổi Δ sang Y" labels={[
    ["ブリッジ回路の Δ-Y 変換", "Biến đổi tam giác–sao cho mạch cầu."],
    ["Rₐ = 0.4 Ω・Rᵦ = 0.4 Ω・R꜀ = 0.8 Ω", "Điện trở ba nhánh sao."],
    ["A・B・I₁・I₂", "Hai nút chung và hai dòng của phần mạch song song."],
  ]} />),
  joule23: (<Diagram file="joule23" width={188} height={190} title="Hình 1‑9‑1 · Mạch điện trở" labels={[
    ["抵抗回路", "Mạch điện trở."],
    ["I (A)・V (V)・R (Ω)", "Dòng qua điện trở, điện áp hai đầu và điện trở."],
  ]} />),
  sources24: (<Diagram file="sources24" width={643} height={152} title="Hình 1‑10‑1 · Ký hiệu nguồn áp và nguồn dòng" labels={[
    ["定電圧源と定電流源の図記号", "Ký hiệu nguồn áp và nguồn dòng không đổi."],
    ["(a) 定電圧源・(b) 理想電圧源", "Nguồn áp không đổi và nguồn áp lý tưởng."],
    ["(c) 理想電流源", "Nguồn dòng lý tưởng."],
    ["内部抵抗は0・内部抵抗は∞（無限大）", "Điện trở trong bằng 0 đối với nguồn áp, bằng vô hạn đối với nguồn dòng lý tưởng."],
    ["E (V)・I (A)", "Điện áp hoặc dòng điện mà nguồn duy trì."],
  ]} />),
  super24: (<Diagram file="super24" width={501} height={210} title="Hình 1‑10‑2 · Ví dụ nguyên lý chồng chất" labels={[
    ["重ね合せの理", "Nguyên lý chồng chất."],
    ["E₁ = 24 V・E₂ = 6 V・R = 6 Ω", "Hai nguồn và điện trở của ví dụ."],
    ["I・I₁・I₂", "Dòng tổng và phần dòng do từng nguồn."],
  ]} />),
  super25: (<Diagram file="super25" width={221} height={124} title="Trang 25 · Mạch đề bài chồng chất" labels={[
    ["4 V・2 A", "Nguồn áp 4 V và nguồn dòng 2 A."],
    ["3 Ω・5 Ω・I (A)", "Hai điện trở và dòng cần tìm qua điện trở 3 Ω."],
  ]} />),
  split25: (<Diagram file="split25" width={529} height={181} title="Trang 25 · Tách mạch theo từng nguồn" labels={[
    ["電圧源のみ（電流源は開放除去）", "Chỉ giữ nguồn áp. Thay nguồn dòng bằng mạch hở."],
    ["電流源のみ（電圧源は短絡除去）", "Chỉ giữ nguồn dòng. Thay nguồn áp bằng dây nối tắt."],
    ["3 Ω と 5 Ω は、並列接続になっている", "Trong mạch chỉ còn nguồn dòng, 3 Ω và 5 Ω mắc song song."],
    ["I₁・I₂", "Hai dòng thành phần qua 3 Ω theo hai chiều ngược nhau."],
    ["重ね合せの理", "Nguyên lý chồng chất."],
  ]} />),
  current25: (<Diagram file="current25" width={157} height={105} title="Trang 25 · Nhìn rõ hai nhánh song song" labels={[
    ["3 Ω・5 Ω・2 A・I₂", "Nguồn dòng 2 A chia qua hai điện trở. I₂ là dòng qua nhánh 3 Ω."],
  ]} />),
  bridge19: (<Diagram file="bridge19" width={716} height={342} title="Trang 19 · Hai cách vẽ cùng một mạch cầu" labels={[
    ["ブリッジ回路", "Mạch cầu."],
    ["a・b・c・d", "Nguồn đặt giữa c và d. Điện kế G nối giữa hai điểm giữa a và b."],
    ["R₁・R₂・R₃・R₄", "Bốn điện trở của cầu. Ở hình bên phải, R₁ và R₃ ở nhánh trái, R₂ và R₄ ở nhánh phải."],
    ["I₁・I₂・I₃・G", "Dòng ở hai nhánh và dòng qua điện kế G."],
    ["R₁×R₄＝R₂×R₃ のとき、I₃ は 0 A", "Khi tích các cặp điện trở đối diện bằng nhau, dòng qua điện kế bằng 0 A."],
  ]} />),
  bridge20: (<Diagram file="bridge20" width={253} height={179} title="Trang 20 · Mạch cầu có công tắc S" labels={[
    ["S・E = 100 V・I = 30 A", "Công tắc giữa hai điểm giữa, điện áp nguồn và dòng tổng."],
    ["R₁ = 8 Ω・R₂ = 4 Ω・R₃・R₄", "Các điện trở ở nhánh trên và nhánh dưới. R₄ là điện trở cần tìm."],
  ]} />),
  bridge20Solution: (<Diagram file="bridge20Solution" width={240} height={221} title="Trang 20 · Tích chéo và điện trở từng nhánh" labels={[
    ["R₁ = 8 Ω・R₂ = 4 Ω・R₃ = 2R₄・R₄", "Tích chéo ở cầu cân bằng cho R₃ bằng hai lần R₄."],
    ["8 + 2R₄ (Ω)・4 + R₄ (Ω)", "Tổng điện trở nhánh trên và nhánh dưới khi S mở."],
    ["S・I = 30 A・E = 100 V", "Công tắc, dòng điện tổng và điện áp nguồn."],
  ]} />),
  thExercise: (<Diagram file="thExercise" width={314} height={141} title="Trang 15 · Mạch đề bài Thévenin" labels={[
    ["E₁ = 200 V・E₂ = 100 V", "Hai nguồn áp của mạng."],
    ["R₁ = 20 Ω・R₂ = 30 Ω・R₃ = 8 Ω", "Hai điện trở của mạng và tải R₃."],
    ["I (A)", "Dòng qua tải R₃ theo chiều mũi tên."],
  ]} />),
  thTransform: (<Diagram file="thTransform" width={425} height={151} title="Hình 1–2 · Tách tải và quy đổi mạch" labels={[
    ["図1・図2", "Hình 1 là mạng gốc. Hình 2 thay mạng trong khung nét đứt bằng mạch tương đương."],
    ["テブナンの等価回路", "Mạch tương đương Thévenin."],
    ["a・b・R₃・I", "Hai đầu nối tải, điện trở tải và dòng qua tải."],
    ["R₁・R₂・E₁・E₂ → Rₐᵦ・Eₐᵦ", "Mạng gốc quy đổi thành điện trở trong nối tiếp nguồn tương đương."],
  ]} />),
  thOpen: (<Diagram file="thOpen" width={154} height={123} title="Hình 3 · Tính điện áp hở mạch" labels={[
    ["R₁・R₂・E₁・E₂", "Các điện trở và nguồn của hai nhánh được giữ nguyên."],
    ["a・b・Eₐᵦ", "Hai đầu a–b để hở khi tính điện áp Eₐᵦ."],
  ]} />),
  thResistance: (<Diagram file="thResistance" width={185} height={153} title="Hình 4 · Tính điện trở trong" labels={[
    ["電源は短絡除去", "Triệt tiêu nguồn áp bằng cách nối tắt trên sơ đồ tính."],
    ["R₁ = 20 Ω・R₂ = 30 Ω・Rₐᵦ", "Hai điện trở mắc song song khi nhìn từ a–b."],
  ]} />),
  thLoad: (<Diagram file="thLoad" width={190} height={144} title="Hình 5 · Gắn tải trở lại" labels={[
    ["テブナンの等価回路", "Mạch tương đương Thévenin."],
    ["Eₐᵦ = 160 V・Rₐᵦ = 12 Ω・R₃ = 8 Ω・I", "Suất điện động, điện trở trong, điện trở tải và dòng tải."],
  ]} />),
  millIntro: (<Diagram file="millIntro" width={308} height={219} title="Trang 16 · Sơ đồ định lý Millman" labels={[
    ["Eₐᵦ は、公式で求めることができる。", "Có thể tính Eₐᵦ bằng công thức."],
    ["R₁・R₂・R₃・E₁・E₂・E₃", "Điện trở và nguồn áp của ba nhánh."],
    ["V・Eₐᵦ", "Vôn kế đo điện áp chung giữa hai nút."],
  ]} />),
  millBranches: (<Diagram file="millBranches" width={229} height={308} title="Trang 16 · Mạch hai nhánh và ba nhánh" labels={[
    ["2枝路の場合・3枝路の場合", "Trường hợp hai nhánh và ba nhánh."],
    ["R₁・R₂・R₃・E₁・E₂・E₃・Eₐᵦ", "Các điện trở, nguồn áp và điện áp chung hai đầu mạch."],
  ]} />),
  millExercise: (<Diagram file="millExercise" width={266} height={212} title="Trang 17 · Bài tập điện áp ba nhánh" labels={[
    ["27 V・1 Ω", "Nguồn và điện trở nhánh trái."],
    ["22 V・2 Ω", "Nguồn và điện trở nhánh giữa."],
    ["2.5 Ω・a・b・Eₐᵦ", "Điện trở nhánh phải và điện áp cần tìm giữa a–b."],
  ]} />),
  millLoad: (<Diagram file="millLoad" width={338} height={166} title="Trang 18 · Bài tập dòng điện ba nhánh" labels={[
    ["E₁ = 200 V・R₁ = 20 Ω・E₂ = 100 V・R₂ = 30 Ω", "Nguồn áp và điện trở của hai nhánh đầu."],
    ["a・b・R₃ = 8 Ω・I₃", "Hai nút chung, điện trở nhánh ba và dòng cần tính."],
  ]} />),
  millThird: (<Diagram file="millThird" width={236} height={156} title="Trang 18 · Xét riêng nhánh R₃" labels={[
    ["a・b・Eₐᵦ = 64 V・R₃ = 8 Ω・I₃", "Đặt điện áp 64 V giữa a–b của nhánh R₃ để tính I₃."],
  ]} />),
  millOther: (<Diagram file="millOther" width={548} height={159} title="Trang 18 · Xét riêng nhánh R₁ và R₂" labels={[
    ["a・b・Eₐᵦ = 64 V", "Điện áp chung đặt lên từng nhánh khi xét riêng."],
    ["R₁ = 20 Ω・E₁ = 200 V・I₁", "Điện trở, nguồn áp và dòng nhánh trái."],
    ["R₂ = 30 Ω・E₂ = 100 V・I₂", "Điện trở, nguồn áp và dòng nhánh phải."],
  ]} />),
  kirchhoffIntro: (<Diagram file="kirchhoffIntro" width={701} height={299} title="Trang 12 · Hai định luật Kirchhoff" labels={[
    ["キルヒホッフの第1法則・流入・流出", "Định luật thứ nhất. 流入 là dòng vào nút, 流出 là dòng ra khỏi nút."],
    ["キルヒホッフの第2法則", "Định luật thứ hai. Hai pin 1,5 V mắc nối tiếp cùng chiều tạo điện áp tổng 3,0 V."],
    ["I (A)・R₁ (Ω)・R₂ (Ω)", "Dòng điện mạch và điện trở của hai tải."],
    ["R₁I (V)・R₂I (V)", "Sụt áp trên từng tải."],
  ]} />),
  node12: (<Diagram file="node12" width={260} height={175} title="Hình 1‑4‑1 · Dòng điện tại nút a" labels={[
    ["a・I₁・I₂・I₃", "Tại nút a, I₁ đi vào, I₂ và I₃ đi ra."],
    ["V (V)・R₁ (Ω)・R₂ (Ω)", "Điện áp nguồn và hai điện trở ở hai nhánh."],
  ]} />),
  loop12: (<Diagram file="loop12" width={259} height={235} title="Hình 1‑4‑2 · Điện áp trong vòng kín" labels={[
    ["E₁ (V)・E₂ (V)", "Hai suất điện động cùng chiều trong vòng nét đứt."],
    ["I (A)・R₁ (Ω)・R₂ (Ω)", "Dòng chung qua hai điện trở nối tiếp."],
    ["R₁I (V)・R₂I (V)", "Sụt áp trên mỗi điện trở."],
  ]} />),
  kirchhoff13: (<Diagram file="kirchhoff13" width={292} height={161} title="Trang 13 · Mạch đề bài Kirchhoff" labels={[
    ["4 V・2 V", "Nguồn bên trái có cực dương ở trên, nguồn bên phải có cực dương ở dưới."],
    ["4 Ω・2 Ω・5 Ω", "Ba điện trở của các nhánh trái, phải và giữa."],
    ["I₁・I₂・I₃", "Các chiều dòng điện giả định trong đề."],
  ]} />),
  loops13: (<Diagram file="loops13" width={286} height={158} title="Trang 13 · Chiều đi vòng khi lập phương trình" labels={[
    ["a・I₁・I₂・I₃", "Nút a và các dòng đã chọn chiều."],
    ["（Ⅰ）・（Ⅱ）", "Hai vòng viết phương trình điện áp, đi ngược chiều nhau qua điện trở chung 5 Ω."],
    ["4 V・2 V・4 Ω・2 Ω・5 Ω", "Các nguồn áp và điện trở giữ nguyên như sơ đồ đề bài."],
  ]} />),
  thevenin14: (<Diagram file="thevenin14" width={655} height={275} title="Trang 14 · Quy đổi mạch tương đương Thévenin" labels={[
    ["テブナンの等価回路", "Mạch tương đương Thévenin."],
    ["a・b・R・I", "Hai đầu nối tải, điện trở tải và dòng tải."],
    ["E₁・E₂・R₁・R₂", "Các nguồn áp và điện trở ở mạng ban đầu."],
    ["Eₐᵦ・Rₐᵦ", "Điện áp hở mạch và điện trở tương đương nhìn từ a–b."],
  ]} />),
  voltageRule: (<Diagram file="voltageRule" width={198} height={147} title="Trang 6 · Sơ đồ chia áp" labels={[
    ["V₀ (V)", "Điện áp tổng đặt lên cả hai điện trở nối tiếp."],
    ["R₁ (Ω)・R₂ (Ω)", "Điện trở phía dưới và phía trên trong hình."],
    ["V₁ (V)・V₂ (V)", "Điện áp hai đầu R₁ và R₂ tương ứng."],
  ]} />),
  currentRule: (<Diagram file="currentRule" width={212} height={148} title="Trang 6 · Sơ đồ chia dòng" labels={[
    ["I₀ (A)", "Dòng điện tổng trước điểm chia nhánh."],
    ["I₁ (A)・I₂ (A)", "Dòng điện qua nhánh R₁ và R₂ tương ứng."],
    ["V₁ (V)・R₁ (Ω)・R₂ (Ω)", "Điện áp chung của hai nhánh và giá trị từng điện trở."],
  ]} />),
  parallel01: (<Diagram file="parallel01" width={224} height={104} title="Trang 6 · Bài tập 01" labels={[
    ["a・b", "Hai đầu cần tính điện trở tương đương."],
    ["R₁ = 60 Ω・R₂ = 180 Ω", "Hai điện trở mắc song song giữa a và b."],
  ]} />),
  current04: (<Diagram file="current04" width={254} height={158} title="Trang 8 · Bài tập 04" labels={[
    ["I₀ = 30 A", "Dòng điện tổng đi vào điểm phân nhánh."],
    ["R₁ = 60 Ω・I₁", "Điện trở nhánh trên và dòng điện qua nhánh đó."],
    ["R₂ = 15 Ω・I₂", "Điện trở nhánh dưới và dòng điện qua nhánh đó."],
  ]} />),
  conductor: (<Diagram file="conductor" width={695} height={238} title="Trang 9 · Điện trở của vật dẫn" labels={[
    ["導体の抵抗", "Điện trở của vật dẫn."],
    ["断面積一定の場合", "Trường hợp giữ nguyên tiết diện."],
    ["長さが短いほど抵抗は小さい", "Vật dẫn càng ngắn thì điện trở càng nhỏ."],
    ["長さ一定の場合", "Trường hợp giữ nguyên chiều dài."],
    ["太いほど抵抗は小さい", "Vật dẫn có tiết diện càng lớn thì điện trở càng nhỏ."],
    ["大・抵抗・小", "Mũi tên chỉ chiều điện trở giảm từ lớn xuống nhỏ."],
  ]} />),
  connections: (<Diagram file="connections" width={271} height={185} title="Hai điện trở mắc nối tiếp và song song" labels={[
    ["直列接続", "Mắc nối tiếp. Hai điện trở nằm trên cùng một đường dòng điện."],
    ["並列接続", "Mắc song song. Hai đầu mỗi điện trở nối vào cùng hai nút."],
    ["R₁ (Ω)・R₂ (Ω)", "Hai điện trở, tính bằng ôm."],
  ]} />),
  parallel02: (<Diagram file="parallel02" width={240} height={219} title="Bài tập 02 · Mạch điện trở song song" labels={[
    ["R₁ = 8 Ω、R₃ = 2R₄", "Hai điện trở nối tiếp ở nhánh trên. Tổng điện trở nhánh là 8 + 2R₄."],
    ["R₂ = 4 Ω、R₄ (Ω)", "Hai điện trở nối tiếp ở nhánh dưới. Tổng điện trở nhánh là 4 + R₄."],
    ["I = 30 A、V = 100 V", "Dòng điện tổng là 30 A. Điện áp hai đầu mạch song song là 100 V."],
    ["抵抗値の比", "Tỷ số điện trở nhánh trên so với nhánh dưới bằng 2."],
  ]} />),
  divider03: (<Diagram file="divider03" width={242} height={154} title="Bài tập 03 · Mạch chia áp" labels={[
    ["V₀ = 100 V", "Điện áp nguồn đặt lên cả hai điện trở nối tiếp."],
    ["R₁ = 80 Ω、V₁", "Điện trở trên và điện áp hai đầu của nó."],
    ["R₂ = 120 Ω、V₂", "Điện trở dưới và điện áp hai đầu của nó."],
  ]} />),
  examples: (<Diagram file="examples" width={785} height={305} title="Ví dụ mạch điện · Bóng đèn và tàu điện" labels={[
          ["電気回路の例", "Ví dụ về mạch điện."],
          ["電流", "Dòng điện. Mũi tên chỉ chiều dòng điện quy ước."],
          ["電源", "Nguồn điện. Hình bên trái dùng pin 1,5 V, hình bên phải minh họa nguồn 1 500 V."],
          ["負荷", "Tải điện. Bóng đèn và động cơ là hai ví dụ."],
          ["モータ · M", "Động cơ điện."],
          ["電流が流れる回路", "Đường mạch kín mà dòng điện chạy qua."],
        ]} />),
  circuit: (<Diagram file="circuit" width={740} height={205} title="Hình 1‑1‑1 · Từ mạch thật sang sơ đồ" labels={[
          ["電気回路の例 · 回路図で示すと…", "Ví dụ mạch điện · Khi biểu diễn bằng sơ đồ…"],
          ["負荷 · R (Ω)", "Tải · Điện trở tải, tính bằng ôm."],
          ["I (A) · V (V) · ＋／−", "Dòng điện tính bằng A, điện áp tính bằng V, cực dương và cực âm."],
          ["直流電源の記号", "Ký hiệu nguồn điện một chiều."],
          ["抵抗の記号 · 抵抗の旧記号", "Ký hiệu điện trở hình chữ nhật và ký hiệu cũ dạng răng cưa."],
        ]} />),
  potential: (<Diagram file="potential" width={710} height={320} title="Hình 1‑1‑2 · Hiệu điện thế và mốc 0 V" labels={[
          ["電位差 · 電位差（電圧）V (V)", "Hiệu điện thế, cũng gọi là điện áp."],
          ["電流 I (A) · 電気抵抗 R (Ω)", "Dòng điện I và điện trở R."],
          ["電池（電源）E (V)", "Pin (nguồn điện) có suất điện động E."],
          ["高電位 · 低電位", "Điện thế cao · điện thế thấp."],
          ["本書では、電位の高い方に矢印を付けています。", "Trong sách, mũi tên điện áp hướng về phía điện thế cao."],
          ["水位に相当する電位の大きさを扱う場合は、一般に電位の低い方を基準とし、これを零（ゼロ）電位、すなわち「0 V」とします。電位の高い方を基準（0 V）とすれば、低い方は負（−）の電位となります。", "Thường lấy điểm có điện thế thấp làm mốc 0 V. Nếu lấy điểm cao làm mốc 0 V thì điểm thấp có điện thế âm."],
        ]} />),
  internal: (<Diagram file="internal" width={735} height={220} title="Hình 1‑1‑3 · Pin và điện trở trong" labels={[
          ["電池と内部抵抗の関係", "Quan hệ giữa pin và điện trở trong."],
          ["電源（電池） · 負荷", "Nguồn điện (pin) · tải."],
          ["内部抵抗 r (Ω) · 0.2 V", "Điện trở trong r. Độ sụt áp ở đây là 0,2 V."],
          ["起電力 E (V) · 1.6 V", "Suất điện động E. Giá trị trong ví dụ là 1,6 V."],
          ["負荷抵抗 R (Ω) · 1.4 V", "Điện trở tải R. Điện áp trên tải là 1,4 V."],
        ]} />),
  exercise: (<Diagram file="exercise" width={330} height={190} title="Sơ đồ bài tập 01" labels={[
          ["I = 5.1 A", "Dòng điện chạy trong mạch là 5,1 A."],
          ["内部抵抗 r (Ω)", "Điện trở trong cần tìm."],
          ["起電力 E = 105 V", "Suất điện động của nguồn là 105 V."],
          ["電圧 V (V)", "Điện áp trên tải cần tìm."],
          ["負荷抵抗 R = 20 Ω", "Điện trở tải là 20 Ω."],
        ]} />),
};

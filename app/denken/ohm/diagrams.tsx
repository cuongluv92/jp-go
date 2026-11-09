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

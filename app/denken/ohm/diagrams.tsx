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


function CombinationDiagrams() {
  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-border">
      <figcaption className="px-3 py-2 font-semibold">直列接続・並列接続 · Hai điện trở nối tiếp và song song</figcaption>
      <div className="grid gap-3 px-3 py-3 sm:grid-cols-2">
        <div className="min-w-0">
          <p lang="ja" className="text-center text-sm font-semibold">直列接続</p>
          <svg role="img" aria-label="Hai điện trở R1 và R2 mắc nối tiếp trên một nhánh" viewBox="0 0 360 115" className="h-auto w-full">
            <g fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 75 H69 M145 75 H207 M283 75 H347" />
              <rect x="69" y="63" width="76" height="24" />
              <rect x="207" y="63" width="76" height="24" />
            </g>
            <g fill="currentColor" stroke="none" fontSize="17" textAnchor="middle">
              <text x="107" y="46">R₁ [Ω]</text>
              <text x="245" y="46">R₂ [Ω]</text>
            </g>
          </svg>
        </div>
        <div className="min-w-0">
          <p lang="ja" className="text-center text-sm font-semibold">並列接続</p>
          <svg role="img" aria-label="Hai điện trở R1 và R2 có hai đầu nối vào cùng hai nút" viewBox="0 0 360 165" className="h-auto w-full">
            <g fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M10 83 H65 V35 H129 M205 35 H296 V83 H350 M65 83 V132 H129 M205 132 H296 V83" />
              <rect x="129" y="23" width="76" height="24" />
              <rect x="129" y="120" width="76" height="24" />
            </g>
            <g fill="currentColor" stroke="none" fontSize="17" textAnchor="middle">
              <text x="167" y="17">R₁ [Ω]</text>
              <text x="167" y="114">R₂ [Ω]</text>
              <circle cx="65" cy="83" r="4"/><circle cx="296" cy="83" r="4"/>
            </g>
          </svg>
        </div>
      </div>
      <details className="group border-t border-border">
        <summary className="cursor-pointer px-3 py-2 text-sm font-medium text-accent">
          <span className="group-open:hidden">Hiện phụ lục dịch chữ trong hình</span>
          <span className="hidden group-open:inline">Ẩn phụ lục dịch chữ trong hình</span>
        </summary>
        <div className="px-3 py-2 text-sm">
          <p>直列接続: mắc nối tiếp; 並列接続: mắc song song; R₁, R₂: hai điện trở, đơn vị Ω.</p>
        </div>
      </details>
    </figure>
  );
}

export const diagrams = {
  combinations: <CombinationDiagrams />,
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

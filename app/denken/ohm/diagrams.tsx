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

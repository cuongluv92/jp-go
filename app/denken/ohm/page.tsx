import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Fraction } from "../fraction";

export const metadata = { title: "1‑1 Định luật Ohm — 電験三種 — jp-go" };

function Red({ children }: { children: ReactNode }) {
  return <strong className="text-red-700 dark:text-red-300">{children}</strong>;
}

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
    </figure>
  );
}

const panel = "space-y-3 rounded-2xl border border-border bg-surface p-4 sm:p-6";
const formula = "flex flex-wrap items-center gap-x-2 gap-y-3 font-serif text-xl";

export default function OhmLesson() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-6 leading-relaxed">
      <header>
        <Link href="/denken" className="text-sm text-accent">← Mục lục 電験三種</Link>
        <p className="mt-2 text-sm text-muted">理論 · 直流回路 · Trang 2–4</p>
        <h1 className="text-2xl font-bold">1‑1 オームの法則 · Định luật Ohm</h1>
        <p><Red>Điện áp chia dòng điện bằng điện trở</Red></p>
      </header>

      <section className={panel}>
        <h2 className="text-xl font-semibold"><Red>p.2</Red> · 電気回路 · Mạch điện</h2>
        <Diagram file="examples" width={785} height={305} title="Ví dụ mạch điện · Bóng đèn và tàu điện" labels={[
          ["電気回路の例", "Ví dụ về mạch điện."],
          ["電流", "Dòng điện. Mũi tên chỉ chiều dòng điện quy ước."],
          ["電源", "Nguồn điện. Hình bên trái dùng pin 1,5 V, hình bên phải minh họa nguồn 1 500 V."],
          ["負荷", "Tải điện. Bóng đèn và động cơ là hai ví dụ."],
          ["モータ · M", "Động cơ điện."],
          ["電流が流れる回路", "Đường mạch kín mà dòng điện chạy qua."],
        ]} />
        <p>Khi nối pin với bóng đèn thành mạch kín, <Red>điện áp (電圧)</Red> do pin tạo ra làm <Red>dòng điện (電流)</Red> chạy qua bóng và bóng sáng. Bóng đèn, động cơ tàu điện và thiết bị gia dụng đều dùng <Red>mạch điện (電気回路)</Red> để thực hiện công việc.</p>
        <p><Red>Nguồn điện (電源)</Red> tạo ra điện áp. <Red>Tải (負荷)</Red> dùng năng lượng điện để phát sáng, quay động cơ hoặc thực hiện công việc khác. Mức cản trở dòng điện gọi là <Red>điện trở (電気抵抗・抵抗)</Red>.</p>
        <ul className="list-disc pl-5">
          <li>電圧 · Điện áp, ký hiệu <Red>V</Red>, đơn vị volt (V).</li>
          <li>電流 · Dòng điện, ký hiệu <Red>I</Red>, đơn vị ampe (A).</li>
          <li>抵抗 · Điện trở, ký hiệu <Red>R</Red>, đơn vị ôm (Ω).</li>
        </ul>
        <p className="text-sm text-muted">量記号 là ký hiệu đại lượng. Sách dùng ký hiệu theo JIS. Trong V [V], chữ V đầu là đại lượng điện áp và chữ trong ngoặc là đơn vị volt.</p>
      </section>

      <section className={panel}>
        <h2 className="text-xl font-semibold"><Red>p.3</Red> · オームの法則 · Định luật Ohm</h2>
        <p>Đặt điện áp <i>V</i> lên tải có điện trở <i>R</i> thì dòng <i>I</i> chạy qua tải. <Red>Định luật Ohm (オームの法則)</Red> cho phép tính một đại lượng khi biết hai đại lượng còn lại.</p>
        <Diagram file="circuit" width={740} height={205} title="Hình 1‑1‑1 · Từ mạch thật sang sơ đồ" labels={[
          ["電気回路の例 · 回路図で示すと…", "Ví dụ mạch điện · Khi biểu diễn bằng sơ đồ…"],
          ["負荷 · R (Ω)", "Tải · Điện trở tải, tính bằng ôm."],
          ["I (A) · V (V) · ＋／−", "Dòng điện tính bằng A, điện áp tính bằng V, cực dương và cực âm."],
          ["直流電源の記号", "Ký hiệu nguồn điện một chiều."],
          ["抵抗の記号 · 抵抗の旧記号", "Ký hiệu điện trở hình chữ nhật và ký hiệu cũ dạng răng cưa."],
        ]} />
        <div className="space-y-3 rounded-xl border border-border bg-surface-muted p-3">
          <p><Red>POINT</Red> · Ba dạng của định luật Ohm</p>
          <p className={formula}><i>R</i> = <Red><Fraction numerator={<i>V</i>} denominator={<i>I</i>} /></Red> [Ω]</p>
          <p className={formula}><i>I</i> = <Red><Fraction numerator={<i>V</i>} denominator={<i>R</i>} /></Red> [A]</p>
          <p className={formula}><i>V</i> = <Red><i>RI</i></Red> [V]</p>
          <p className="text-sm">Nhân hai vế của công thức tính <i>R</i> với <i>I</i> để được <i>RI = V</i>.</p>
        </div>
        <h3 className="text-lg font-semibold">電位差、電圧、起電力 · Hiệu điện thế, điện áp và suất điện động</h3>
        <p>Chênh lệch mực nước làm nước chảy. Tương tự, <Red>hiệu điện thế (電位差)</Red> giữa hai cực của pin tạo <Red>điện áp (電圧)</Red> trên điện trở, làm <Red>dòng điện (電流)</Red> chạy trong mạch kín.</p>
        <Diagram file="potential" width={710} height={320} title="Hình 1‑1‑2 · Hiệu điện thế và mốc 0 V" labels={[
          ["電位差 · 電位差（電圧）V (V)", "Hiệu điện thế, cũng gọi là điện áp."],
          ["電流 I (A) · 電気抵抗 R (Ω)", "Dòng điện I và điện trở R."],
          ["電池（電源）E (V)", "Pin (nguồn điện) có suất điện động E."],
          ["高電位 · 低電位", "Điện thế cao · điện thế thấp."],
          ["本書では、電位の高い方に矢印を付けています。", "Trong sách, mũi tên điện áp hướng về phía điện thế cao."],
          ["水位に相当する電位の大きさを扱う場合は、一般に電位の低い方を基準とし、これを零（ゼロ）電位、すなわち「0 V」とします。電位の高い方を基準（0 V）とすれば、低い方は負（−）の電位となります。", "Thường lấy điểm có điện thế thấp làm mốc 0 V. Nếu lấy điểm cao làm mốc 0 V thì điểm thấp có điện thế âm."],
        ]} />
      </section>

      <section className={panel}>
        <h2 className="text-xl font-semibold"><Red>p.4</Red> · 電源の起電力と内部抵抗 · Suất điện động và điện trở trong</h2>
        <p><Red>Suất điện động (起電力)</Red> đặc trưng cho khả năng của nguồn tạo ra hiệu điện thế. Pin tạo suất điện động nhờ phản ứng hóa học, còn máy phát điện dùng cảm ứng điện từ. Sách dùng <Red>E</Red> cho suất điện động và <Red>V</Red> cho điện thế, hiệu điện thế hoặc điện áp. Các đại lượng này đều tính bằng <Red>volt (V)</Red>.</p>
        <p>Có thể mô hình hóa pin bằng nguồn lý tưởng có <Red>suất điện động E</Red> mắc <Red>nối tiếp (直列)</Red> với <Red>điện trở trong r (内部抵抗)</Red>. Khi pin cấp dòng cho tải, điện áp trên tải nhỏ hơn suất điện động một lượng bằng độ sụt áp trên điện trở trong.</p>
        <Diagram file="internal" width={735} height={220} title="Hình 1‑1‑3 · Pin và điện trở trong" labels={[
          ["電池と内部抵抗の関係", "Quan hệ giữa pin và điện trở trong."],
          ["電源（電池） · 負荷", "Nguồn điện (pin) · tải."],
          ["内部抵抗 r (Ω) · 0.2 V", "Điện trở trong r. Độ sụt áp ở đây là 0,2 V."],
          ["起電力 E (V) · 1.6 V", "Suất điện động E. Giá trị trong ví dụ là 1,6 V."],
          ["負荷抵抗 R (Ω) · 1.4 V", "Điện trở tải R. Điện áp trên tải là 1,4 V."],
        ]} />
        <p className={formula}><i>Ir</i> = <i>E − V</i> = 1,6 − 1,4 = 0,2 V</p>
        <h3 className="text-lg font-semibold"><Red>練習問題 01</Red> · Bài tập định luật Ohm</h3>
        <p>Từ sơ đồ, tính điện áp trên tải <i>V</i> và điện trở trong <i>r</i> của nguồn.</p>
        <Diagram file="exercise" width={330} height={190} title="Sơ đồ bài tập 01" labels={[
          ["I = 5.1 A", "Dòng điện chạy trong mạch là 5,1 A."],
          ["内部抵抗 r (Ω)", "Điện trở trong cần tìm."],
          ["起電力 E = 105 V", "Suất điện động của nguồn là 105 V."],
          ["電圧 V (V)", "Điện áp trên tải cần tìm."],
          ["負荷抵抗 R = 20 Ω", "Điện trở tải là 20 Ω."],
        ]} />
        <details className="space-y-3 rounded-xl border border-border bg-surface-muted p-3">
          <summary className="cursor-pointer font-semibold"><Red>解き方・解説・解答</Red> · Mở lời giải và đáp án</summary>
          <p>Dùng định luật Ohm cho tải, rồi lấy suất điện động trừ điện áp tải để tính độ sụt áp trên điện trở trong.</p>
          <p className={formula}><i>V</i> = <i>RI</i> = 20 × 5,1 = <Red>102 V</Red></p>
          <p className={formula}><i>r</i> = <Fraction numerator={<i>E − V</i>} denominator={<i>I</i>} /> = <Fraction numerator="105 − 102" denominator="5,1" /> = <Fraction numerator="3,0" denominator="5,1" /> ≈ <Red>0,59 Ω</Red></p>
          <p className="text-sm">Khi có thể bỏ qua điện trở trong, điện áp đầu cực xấp xỉ suất điện động (<i>V ≈ E</i>).</p>
        </details>
      </section>
    </main>
  );
}

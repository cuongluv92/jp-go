import Link from "next/link";
import { Fraction } from "./fraction";
import { quantitySymbols } from "./contents";
import { ContentsTree } from "./contents-tree";

export const metadata = { title: "電験三種 — jp-go" };

const bookRed = "text-red-700 dark:text-red-300";

export default function DenkenPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-6">
      <header>
        <Link href="/" className="text-sm text-accent">← Trang chủ</Link>
        <h1 className="font-jp mt-2 text-2xl font-bold">電験三種</h1>
        <p className="mt-1 text-sm text-muted">電験三種 合格ガイド 第4版 · Mục lục theo số trang in trong sách</p>
      </header>
      <ContentsTree />
      <section id="quantity-symbols" className="scroll-mt-20 rounded-2xl border border-border bg-surface p-4" aria-labelledby="quantity-symbols-title">
        <h2 id="quantity-symbols-title" className="font-jp font-semibold">
          <span className={bookRed}>p.xx</span> · 本書で用いる主な量記号と単位記号
        </h2>
        <p className="mt-1 text-sm text-muted">Ký hiệu đại lượng và đơn vị dùng trong sách</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm" lang="ja">
            <thead className="bg-surface-muted">
              <tr>
                <th scope="col" className="px-3 py-2">物理量</th>
                <th scope="col" className="px-3 py-2">量記号</th>
                <th scope="col" className="px-3 py-2">単位記号</th>
                <th scope="col" className="px-3 py-2">単位の名称</th>
              </tr>
            </thead>
            <tbody>
              {quantitySymbols.map(([name, symbol, unit, unitName]) => (
                <tr key={name} className="border-t border-border even:bg-surface-muted">
                  <th scope="row" className="px-3 py-2 font-normal">{name}</th>
                  <td className={`whitespace-nowrap px-3 py-2 font-serif italic ${bookRed}`}>{symbol}</td>
                  <td className="whitespace-nowrap px-3 py-2">{unit}</td>
                  <td className="px-3 py-2">{unitName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section id="cong-thuc-tra-cuu" className="scroll-mt-20 rounded-2xl border border-border bg-surface p-4">
        <h2 className="font-semibold">Công thức tra cứu · 直流回路</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-jp text-sm">オームの法則 · Định luật Ohm</p>
            <p className="mt-2 font-serif text-2xl" aria-label="R bằng V chia I"><i>R</i> = <Fraction numerator={<i>V</i>} denominator={<i>I</i>} /></p>
            <p className="mt-2 text-sm text-muted"><strong>Điều kiện áp dụng.</strong> V (volt) là điện áp hai đầu điện trở đang xét. I (ampe) là dòng qua chính điện trở đó và I ≠ 0 khi tính R (Ω). Khi dùng R để dự đoán điện áp hoặc dòng điện ở điểm làm việc khác, R phải gần như không đổi trong phạm vi đang xét.</p>
          </div>
          <div>
            <p className="font-jp text-sm">並列合成抵抗 · Hai điện trở song song</p>
            <p className="mt-2 font-serif text-2xl" aria-label="R tương đương bằng tích R một nhân R hai chia tổng R một cộng R hai">
              <i>R</i><sub>tđ</sub> = <Fraction numerator={<><i>R</i><sub>1</sub><i>R</i><sub>2</sub></>} denominator={<><i>R</i><sub>1</sub> + <i>R</i><sub>2</sub></>} />
            </p>
            <p className="mt-2 text-sm text-muted"><strong>Điều kiện áp dụng.</strong> Hai điện trở R₁ và R₂ phải cùng nối vào đúng hai nút, nên có cùng điện áp hai đầu. Dùng cùng đơn vị Ω và cần R₁ + R₂ ≠ 0.</p>
          </div>
        </div>
        <div id="quy-tac-bien-soan" className="mt-5 scroll-mt-20 border-t border-border pt-4">
          <h3 className="font-semibold">Quy tắc biên soạn bài 電験三種</h3>
          <p className="mt-2 text-sm text-muted">Dùng cho các bài từ sách 電験三種 合格ガイド 第4版. Trong chat mới, gửi đường dẫn mục này cùng ảnh trang sách. Nếu chat không mở được JP‑GO, dán phần quy tắc dưới đây cùng ảnh.</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            <li><strong>Bố cục.</strong> Dùng ba cột như phần 2級 của JP‑GO gồm nguyên văn Nhật, dịch Việt và giải thích. Ghi số trang in trên sách.</li>
            <li><strong>Nguyên văn.</strong> Chép đủ tiêu đề, từng đoạn, bảng, chú thích và nhãn hình. Giữ chữ đỏ, chữ đậm, số liệu và đơn vị. Nếu ảnh mờ hoặc bị cắt, ghi rõ trang và vị trí chưa đọc được.</li>
            <li><strong>Furigana.</strong> Rà cách đọc theo cả cụm và ngữ cảnh kỹ thuật. Ví dụ 起電力（きでんりょく）, 内部抵抗（ないぶていこう）, 直列（ちょくれつ）. Đánh dấu cách đọc chưa chắc để đối chiếu.</li>
            <li><strong>Dịch Việt.</strong> Dịch đủ từng đoạn, giữ điều kiện, ngoại lệ và quan hệ nguyên nhân–kết quả. Dùng thuật ngữ nhất quán và kèm chữ Nhật ở lần xuất hiện đầu tiên, ví dụ suất điện động (起電力). Đặt phần diễn giải thêm trong cột Giải thích.</li>
            <li><strong>Công thức.</strong> Trình bày tử trên, mẫu dưới. Giữ đúng dấu, chỉ số và đơn vị. Ghi rõ đại lượng đo ở đâu, loại mạch và giả thiết áp dụng. Tách ghi chú bổ sung khỏi nguyên văn. Kiểm từng bước thế số và đáp án.</li>
            <li><strong>Hình.</strong> Đặt hình cạnh đoạn liên quan. Bảng dịch chữ trong hình nằm ngay bên dưới và mặc định thu gọn, có nút mở và thu lại.</li>
            <li><strong>Đối chiếu trước khi báo xong.</strong> Rà từng trang với ảnh gốc để tìm phần bỏ sót, lỗi dịch, lỗi cách đọc và lỗi công thức. Nêu rõ trang đã kiểm và chỗ còn chưa chắc. Chỉ báo đã cập nhật JP‑GO sau khi xác minh bản cập nhật.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

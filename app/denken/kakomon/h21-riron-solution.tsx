import { Fraction } from "../fraction";

export function H21RironQuestion6Solution() {
  return (
    <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed sm:text-base">
      <li>
        <strong>Hình 1 · Tìm tổng hai điện trở.</strong> Điện áp 30 V đặt lên cả mạch. Hai điện trở mắc nối tiếp nên cùng có dòng 6 A chạy qua. Áp dụng định luật Ohm cho toàn mạch.
        <p className="my-2">
          R<sub>nt</sub> = <Fraction numerator="30 V" denominator="6 A" /> = 5 Ω. Vậy R₁ + R₂ = 5 Ω.
        </p>
      </li>
      <li>
        <strong>Hình 2 · Tìm tích hai điện trở.</strong> Hai điện trở cùng nối vào hai cực của nguồn. Dòng 25 A là dòng tổng trước khi chia nhánh.
        <p className="my-2">
          R<sub>ss</sub> = <Fraction numerator="30 V" denominator="25 A" /> = 1,2 Ω.
        </p>
        <p className="my-2">
          R<sub>ss</sub> = <Fraction numerator="R₁ × R₂" denominator="R₁ + R₂" />, nên R₁ × R₂ = 1,2 Ω × 5 Ω = 6 Ω².
        </p>
      </li>
      <li>
        <strong>Tìm hai giá trị.</strong> Gọi x là giá trị theo đơn vị Ω của một điện trở. Điện trở kia có giá trị 5 − x.
        <p className="my-2">x(5 − x) = 6 ⇒ x² − 5x + 6 = 0 ⇒ (x − 2)(x − 3) = 0.</p>
        Hai giá trị là 2 Ω và 3 Ω. Đề hỏi giá trị nhỏ hơn, nên chọn <strong>(4) 2 Ω</strong>.
      </li>
      <li>
        <strong>Kiểm tra bằng dòng điện.</strong> Ở hình 2, nhánh 2 Ω có dòng 15 A và nhánh 3 Ω có dòng 10 A. Tổng là 25 A. Ở hình 1, tổng trở 5 Ω cho dòng 6 A, khớp cả hai hình.
      </li>
    </ol>
  );
}

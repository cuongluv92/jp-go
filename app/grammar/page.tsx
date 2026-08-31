import Link from "next/link";

/**
 * Ngữ pháp — chưa biên soạn nội dung ở bất kỳ cấp độ nào (khác Từ vựng đã
 * có N3, Kanji đã có N5). Trang này chỉ là placeholder để mục "Ngữ pháp" ở
 * Trang chủ có nơi để đi tới, không phải link chết — khớp tinh thần "mỗi
 * mục lớn bấm vào đều ra trang riêng của nó".
 */
export default function GrammarPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Ngữ pháp</h1>
        <p className="mt-1 text-sm text-muted">Điểm ngữ pháp theo từng cấp JLPT.</p>
      </div>
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border p-8 text-center">
        <span aria-hidden className="text-3xl">
          📘
        </span>
        <p className="text-sm font-medium text-foreground">Chưa có nội dung Ngữ pháp</p>
        <p className="text-xs text-muted">
          Từ vựng (N3) và Kanji (N5) đã có sẵn — Ngữ pháp sẽ được biên soạn và bổ sung ở đợt tiếp theo.
        </p>
        <Link href="/" className="mt-2 text-xs font-medium text-accent">
          ← Về trang chủ
        </Link>
      </div>
    </div>
  );
}

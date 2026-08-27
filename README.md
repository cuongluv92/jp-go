# jp-go — Ứng dụng học từ vựng tiếng Nhật

Web app học tiếng Nhật, ưu tiên điện thoại, giao diện tiếng Việt. Xây bằng
Next.js App Router + TypeScript.

> **Giai đoạn hiện tại: khung giao diện + dữ liệu mẫu.** Toàn bộ dữ liệu từ
> vựng, thống kê, tiến độ... đang chạy trên dữ liệu mẫu trong bộ nhớ trình
> duyệt (xem `lib/data/vocabulary-context.tsx`), **chưa** kết nối Supabase.
> Trang Quản lý dữ liệu (`/admin`) cũng chỉ demo với dữ liệu mẫu, chưa nhập
> dữ liệu thật.

## Bắt đầu

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run test       # Vitest
npm run build      # Next.js production build
```

## Cấu trúc dự án

```
app/
  page.tsx                Trang chủ (tóm tắt tiến độ, streak, CTA học/ôn tập)
  vocabulary/page.tsx      Kho từ vựng: tìm kiếm + lọc
  vocabulary/[id]/         Chi tiết một từ (server page + client component)
  flashcards/page.tsx      Học bằng flashcard (SRS đơn giản)
  practice/page.tsx        6 dạng bài luyện tập (dữ liệu mẫu)
  review/page.tsx          Ôn tập: đến hạn / trả lời sai / chưa nhớ
  progress/page.tsx        Thống kê tiến độ học
  admin/page.tsx           Quản lý dữ liệu (xem trước nhập Excel, ẩn/thêm từ)

components/                UI dùng chung (nav, badge, nút phát âm...)

lib/
  types.ts                 Kiểu dữ liệu lõi — khớp 1-1 với cột Excel + metadata app
  srs.ts                   Thuật toán lặp lại ngắt quãng (SM-2 rút gọn)
  speech.ts                Phát âm bằng Web Speech API
  data/
    sample-words.ts          Dữ liệu từ vựng mẫu
    sample-import-rows.ts     Dữ liệu mẫu giả lập "đọc từ Excel" cho trang admin
    practice-samples.ts       Câu hỏi mẫu cho từng dạng luyện tập
    activity.ts                Streak + lịch sử luyện tập mẫu
    selectors.ts                Lọc / tìm kiếm / thống kê — hàm thuần, có test
    excel-import.ts             Map cột Excel → VocabularyWord, validate, phát hiện trùng
    vocabulary-context.tsx      React context giữ state từ vựng (điểm thay thế bằng Supabase sau này)
```

## Nhập dữ liệu Excel (chuẩn bị sẵn, chưa kích hoạt)

File Excel từ vựng có 16 cột, được định nghĩa chính xác trong
`lib/types.ts` (`EXCEL_COLUMNS`, `ExcelVocabularyRow`). `lib/data/excel-import.ts`
đã có sẵn:

- `validateExcelRow` — báo cột bắt buộc bị thiếu, cảnh báo cột nên có
- `findMissingHeaders` — so khớp header thực tế của file với 16 cột chuẩn
- `findDuplicatesWithinRows` / `findDuplicatesAgainstExisting` — phát hiện từ trùng
- `mapExcelRowToWord` — chuyển 1 dòng Excel hợp lệ thành `VocabularyWord`

Khi có file Excel thật: chỉ cần thêm bước đọc file (.xlsx/.csv) thành
`ExcelVocabularyRow[]` và nối vào trang `/admin` — không cần sửa UI.

## Kế hoạch tích hợp Supabase (chưa thực hiện)

jp-go sẽ dùng chung Supabase project với `nhatkytrading` nhưng tách dữ liệu
tuyệt đối:

- Mọi bảng mới dùng tiền tố `jp_`
- Storage bucket riêng, tiền tố `jp_`
- RLS riêng cho dữ liệu học tiếng Nhật
- Không sửa bảng/dữ liệu/policy/Auth hiện có của nhatkytrading
- Migration chỉ additive, idempotent, có thể rollback an toàn — không
  `DROP`/`TRUNCATE`/đổi tên bảng cũ

Việc này **chưa** thực hiện ở giai đoạn hiện tại. Điểm cần thay khi tích hợp là
`lib/data/vocabulary-context.tsx` (nguồn dữ liệu + các hàm cập nhật) — các
trang UI gọi qua hook `useVocabulary()` nên không cần viết lại giao diện.

## Triển khai Vercel

Repo này độc lập với `nhatkytrading`.

1. Vào [vercel.com/new](https://vercel.com/new), import repository `jp-go`.
2. Framework Preset: Next.js (tự nhận diện).
3. Không cần biến môi trường ở giai đoạn này (chưa dùng Supabase).
4. Deploy — Vercel sẽ tự tạo Preview URL cho mỗi nhánh/PR.

> Lưu ý: tên `jp-go.vercel.app` có thể đã có người khác dùng trên Vercel,
> khi đó domain chính của project sẽ là một biến thể như
> `jp-go-<tên-ngẫu-nhiên>.vercel.app` (xem trong Vercel → Settings →
> Domains). Nếu domain chính báo 404 sau khi deploy, kiểm tra theo thứ tự:
> - **Settings → Git → Production Branch** phải là `main`
> - Tab **Deployments**: có bản build nào ứng với commit mới nhất trên
>   `main` không, trạng thái là gì (Ready/Error) — nếu Error, xem Build Logs
> - **Settings → General → Root Directory** phải để trống (project nằm ở
>   gốc repo, không phải trong thư mục con)

# jp-go — Ứng dụng học từ vựng tiếng Nhật

Web app học tiếng Nhật, ưu tiên điện thoại, giao diện tiếng Việt. Xây bằng
Next.js App Router + TypeScript.

> **Giai đoạn hiện tại: schema v2 + 9 từ mẫu để kiểm tra đủ loại từ khó chia
> nhất** (danh từ, 五段, 一段, する, 来る bất quy tắc, い形容詞 kể cả ngoại lệ
> 良い, な形容詞, phó từ, biểu hiện cố định) trước khi nạp toàn bộ dữ liệu
> thật. Toàn bộ dữ liệu đang chạy trên bộ nhớ trình duyệt (xem
> `lib/data/vocabulary-context.tsx`), **chưa** kết nối Supabase. File nguồn
> 1800 từ (chỉ có từ + nghĩa) **chưa** được nạp vào app — cần soạn thêm cách
> đọc, loại từ, ví dụ, cách dùng... theo đúng schema trước.

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
  types.ts                 Kiểu dữ liệu lõi: VocabWord / VocabExample / Conjugation + schema Excel
  conjugation.ts           Bộ máy chia động từ (godan/ichidan/suru/kuru) và tính từ (i/na), có test khớp mẫu
  srs.ts                   Thuật toán lặp lại ngắt quãng (SM-2 rút gọn)
  speech.ts                Phát âm bằng Web Speech API
  data/
    sample-words.ts          9 từ mẫu, đủ loại từ khó chia nhất
    sample-examples.ts        3 ví dụ/từ (exam/daily/business) + cloze, có test round-trip
    sample-import-rows.ts     Dữ liệu mẫu giả lập "đọc từ Excel" cho trang admin
    practice-samples.ts       Câu hỏi mẫu cho từng dạng luyện tập
    activity.ts                Streak + lịch sử luyện tập mẫu
    selectors.ts                Lọc / tìm kiếm / thống kê — hàm thuần, có test
    excel-import.ts             Map VOCAB row ↔ VocabWord, validate, đọc file .xlsx, phát hiện trùng ID
    excel-export.ts             Xuất VOCAB/EXAMPLES/CONJUGATIONS ra 1 file .xlsx (exceljs)
    vocabulary-context.tsx      React context giữ state từ vựng (điểm thay thế bằng Supabase sau này)
```

## Schema dữ liệu & nhập/xuất Excel

Ba thực thể tách rời — khớp 3 sheet khi export/import:

- **VOCAB** (`VocabWord` / `VOCAB_COLUMNS` trong `lib/types.ts`, 18 cột): id, word,
  kanji, reading, meaning_vi, part_of_speech, verb_class, transitivity,
  particle_patterns, usage_patterns, collocations, register, usage_note,
  common_mistake, similar_words, naturalness_note, jlpt, needs_review. Cột
  danh sách nối bằng `" | "` (đọc được trực tiếp trong Excel, không phải JSON).
- **EXAMPLES** (`VocabExample`, đúng 3 dòng/từ: exam/daily/business) — mỗi dòng
  có `cloze_jp` (ẩn từ đang học bằng `_____`) + `answer`, dùng cho bài điền từ.
  UI chỉ hiển thị số thứ tự 1/2/3, không hiển thị loại ví dụ.
- **CONJUGATIONS** — sinh tự động từ `lib/conjugation.ts`, chỉ áp dụng
  verb/i_adjective/na_adjective (xem `getConjugation()`).

Trang `/admin`:

- **Xuất Excel**: nút xuất toàn bộ dữ liệu hiện tại thành 1 file `.xlsx` thật
  (3 sheet trên), dùng để tải về chỉnh sửa.
- **Nhập Excel**: chọn file `.xlsx` thật (đọc bằng `exceljs`, không dùng
  `xlsx`/SheetJS vì bản trên npm chưa vá lỗi ReDoS), xem trước từng dòng, báo
  cột thiếu/giá trị enum sai, báo ID trùng trong file hoặc trùng với kho hiện
  có (cho chọn Cập nhật/Bỏ qua), rồi mới nhập — không ghi đè bừa.

File nguồn 1800 từ (chỉ có từ + cách đọc + nghĩa) **chưa** đủ các cột trên nên
chưa nạp vào app — cần soạn thêm loại từ, ví dụ, cách dùng... cho từng từ
trước, theo đúng schema này.

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

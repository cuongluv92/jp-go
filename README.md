# jp-go — Ứng dụng học tiếng Nhật theo lộ trình JLPT

Web app học tiếng Nhật, ưu tiên điện thoại, giao diện tiếng Việt. Xây bằng
Next.js App Router + TypeScript + Supabase (Auth + Postgres).

> **Hiện trạng nội dung (2026-09-03)**: từ vựng N5 có 850 từ × 3 ví dụ,
> N4 có 942 từ, N3 có 1.798 từ × 3 ví dụ và N2 có 1.193 từ. Kho Kanji đã có
> đủ metadata/cách đọc/từ ghép/bài tập cho N5 (98), N4 (208), N2 (406).
> Kho ngữ pháp hiện có N5 (98), N4 (92), N2 (112). N1 và phần nghe JLPT
> chưa có nội dung hoàn chỉnh.

## Bắt đầu

```bash
npm install
cp .env.local.example .env.local   # điền NEXT_PUBLIC_SUPABASE_URL/ANON_KEY thật
npm run dev        # http://localhost:3000
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run test        # Vitest
npm run build       # Next.js production build
```

Chạy các migration trong `supabase/migrations/` theo thứ tự tên file trước
khi dùng — xem mục Supabase bên dưới.

## Cấu trúc dự án

```
app/
  login/page.tsx           Đăng nhập / đăng ký (email + mật khẩu)
  plan/page.tsx             Cài đặt lộ trình học (cấp độ/phạm vi/thời gian)
  page.tsx                  Trang chủ: tiến độ lộ trình, streak, "Hôm nay", N1-N5 dạng xổ (≡)
  vocabulary/page.tsx       Kho từ vựng: tìm kiếm + lọc
  vocabulary/[id]/          Chi tiết một từ (server page + client component)
  flashcards/page.tsx       Học bằng flashcard (SM-2 rút gọn)
  practice/page.tsx         Luyện tập: 4.1 đề tự động theo cấu trúc JLPT, 4.2 đề tự tạo
  review/page.tsx           Ôn tập theo lịch SRS 1-5-15: lật thẻ / điền tiếng Nhật / nối từ-nghĩa
  progress/page.tsx         Thống kê tiến độ học
  admin/page.tsx            Quản lý dữ liệu (xem trước nhập Excel, ẩn/thêm từ)

components/                 UI dùng chung (nav, badge, nút phát âm, 3 kiểu bài ôn tập, quiz runner...)

proxy.ts                    Bảo vệ toàn bộ route bằng session Supabase (Next 16 thay middleware.ts)

lib/
  types.ts                  Kiểu dữ liệu lõi: VocabWord / VocabExample / Conjugation + schema Excel
  conjugation.ts             Bộ máy chia động từ (godan/ichidan/suru/kuru) và tính từ (i/na), có test khớp mẫu
  srs.ts                     SM-2 rút gọn cho flashcard
  study-plan.ts               Thuật toán chia đều nội dung theo ngày + tính streak thật, có test
  jlpt-blueprint.ts            Cấu trúc đề JLPT theo cấp độ (N2 lấy từ đề thật, cấp khác mô phỏng gần đúng)
  speech.ts                   Phát âm bằng Web Speech API
  supabase/
    client.ts                  Supabase client phía trình duyệt
    server.ts                  Supabase client phía server (Server Components/Route Handlers)
    middleware.ts               Refresh session + redirect /login, dùng trong proxy.ts
  data/
    sample-words.json           1798 từ N3 (nội dung tĩnh, đóng gói JSON — không ở Supabase)
    sample-words.ts               Wrapper import + cast (JSON literal quá lớn khiến tsc lỗi TS2590)
    sample-examples.json/.ts      3 ví dụ/từ (exam/daily/business) + cloze, có test round-trip
    sample-import-rows.ts         Dữ liệu mẫu giả lập "đọc từ Excel" cho trang admin
    selectors.ts                   Lọc / tìm kiếm / thống kê — hàm thuần, có test
    excel-import.ts                Map VOCAB row ↔ VocabWord, validate, đọc file .xlsx, phát hiện trùng ID
    excel-export.ts                Xuất VOCAB/EXAMPLES/CONJUGATIONS ra 1 file .xlsx (exceljs)
    vocabulary-context.tsx         React context: nội dung tĩnh (JSON) + tiến độ đồng bộ qua jp_word_progress
    study-plan-service.ts          Tạo/đọc lộ trình + đánh dấu hoàn thành ngày (Supabase)
    review-service.ts               Đọc lịch ôn đến hạn + đánh dấu hoàn thành (Supabase)
    jlpt-practice-generator.ts      Sinh câu hỏi trắc nghiệm thật từ VocabExample (chỉ phần nào đủ nội dung)
    practice-attempt-service.ts     Lưu kết quả luyện đề (Supabase)
    custom-test-service.ts          CRUD đề tự tạo (Supabase)

supabase/migrations/          Schema, RLS và dữ liệu nội dung jp-go; chạy theo thứ tự tên file
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

> N3 vẫn được đóng gói trong JSON tĩnh. Nội dung N5/N4/N2 và tiến độ người
> học được lưu trong các bảng Supabase có tiền tố `jp_`.

## Tài khoản, lộ trình học, ôn tập, luyện đề

- **Đăng nhập** (`/login`): email + mật khẩu qua Supabase Auth. `proxy.ts`
  (tương đương middleware.ts của Next < 16) bắt buộc đăng nhập cho mọi trang.
- **Cài đặt lộ trình** (`/plan`): chọn cấp độ, phạm vi nội dung đang có và
  thời gian học → `lib/study-plan.ts` chia đều nội dung theo từng ngày.
- **Trang chủ**: hiển thị đúng nội dung ngày hiện tại, nút "Đã học xong" mở
  khoá ngày kế tiếp và tự sinh 2 lịch ôn tập (5 ngày và 15 ngày sau).
- **Ôn tập** (`/review`): liệt kê lịch ôn đến hạn, chọn 1/nhiều/tất cả, rồi
  chọn 1 trong 3 kiểu bài (lật thẻ / điền tiếng Nhật theo cloze / nối từ-nghĩa).
- **Luyện tập** (`/practice`):
  - *4.1 Đề tự động*: cấu trúc theo `lib/jlpt-blueprint.ts` — N2 lấy đúng số
    câu/phần từ đề thật (kỳ 2018-07), các cấp khác là mô phỏng gần đúng. Chỉ
    phần nào có đủ nội dung (hiện tại: câu hỏi điền từ theo ngữ cảnh, dựng từ
    `VocabExample` có sẵn) mới sinh được câu hỏi thật — các phần cần
    Kanji/Ngữ pháp/đoạn văn đọc hiểu sẽ báo "chưa đủ nội dung" thay vì bịa.
  - *4.2 Đề của tôi*: tự tạo đề trắc nghiệm, lưu ở `jp_custom_tests`, độc lập
    hoàn toàn với lộ trình học.

Tiến độ (`jp_word_progress`), lộ trình (`jp_study_plans`/`jp_study_days`),
lịch ôn (`jp_review_schedules`) và kết quả luyện đề (`jp_practice_attempts`,
`jp_custom_tests`) đều lưu ở Supabase theo `auth.uid()` — đổi thiết bị vẫn
thấy cùng dữ liệu.

## Supabase

jp-go dùng **chung Supabase project với `nhatkytrading`** nhưng tách dữ liệu
tuyệt đối:

- Mọi bảng dùng tiền tố `jp_` (xem `supabase/migrations/0001_jp_go_init.sql`)
- RLS riêng theo `auth.uid()` cho từng bảng
- Không đụng bảng/dữ liệu/policy/Auth hiện có của `nhatkytrading`
- Migration chỉ additive, an toàn chạy lại nhiều lần

**Thiết lập:**

1. Bật Supabase Auth → Providers → Email cho project đang dùng.
2. Chạy các file trong `supabase/migrations/` theo đúng thứ tự tên trong
   Supabase Dashboard → SQL Editor (môi trường production đã được áp dụng).
3. Copy `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` (Project
   Settings → API) — dùng đúng giá trị đang dùng cho `nhatkytrading` — vào
   `.env.local` (dev) và biến môi trường Vercel (production).

Nội dung tĩnh (từ vựng/kanji/ngữ pháp) **không** ở Supabase — vẫn đóng gói
JSON trong app như trước, chỉ tiến độ/lộ trình/lịch ôn/kết quả luyện đề mới
đồng bộ theo tài khoản.

## Triển khai Vercel

Repo này độc lập với `nhatkytrading`.

1. Vào [vercel.com/new](https://vercel.com/new), import repository `jp-go`.
2. Framework Preset: Next.js (tự nhận diện).
3. Thêm 2 biến môi trường `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (Project Settings → Environment Variables) — bắt buộc từ khi có đăng nhập.
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

### Tránh vượt giới hạn build khi seed nhiều migration

Vercel tự build lại mỗi khi có commit mới lên `main`, kể cả khi commit đó
chỉ thêm file `.sql` seed dữ liệu (không đổi code app) — dễ vượt giới hạn
số lượt build/ngày của gói miễn phí khi merge nhiều migration liên tiếp
(ví dụ đợt seed N4/N2/N1 sau này). Để tránh:

1. Vào **Vercel Dashboard → project jp-go → Settings → Git → Ignored Build
   Step** → chọn **"Custom"**.
2. Nhập: `bash scripts/vercel-ignore-build.sh`
3. Lưu lại.

Từ đó, commit nào chỉ đổi file trong `supabase/migrations/` sẽ bị Vercel bỏ
qua build (không tốn lượt) — chỉ build thật khi có thay đổi code app.

<!-- redeploy trigger 2026-09-05 -->

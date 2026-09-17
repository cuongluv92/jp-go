# Nhập nội dung sách — 2級電気工事施工管理

Tài liệu này để một phiên ChatGPT/Codex MỚI (không có ngữ cảnh trước đó) vẫn
đọc và tiếp tục nhập sách được, không cần hỏi lại người phát triển.

Quy trình cuối cùng:

```
Người dùng chụp trang sách
  → gửi ảnh cho ChatGPT
  → ChatGPT đọc nguyên văn, dịch, giải thích phần cần thiết
  → tạo 1 file JSON đúng format bên dưới
  → npm run exam:import -- <file.json>
  → trang xuất hiện đúng: SÁCH → CHƯƠNG → MỤC → TRANG, với 3 cột
```

Không bao giờ cần sửa code UI/React để thêm một trang mới.

## 1. Rule bắt buộc — jp / vi / explanation_vi

Ba trường này **không bao giờ được trộn**:

| Trường | Ý nghĩa | Được phép null? |
| --- | --- | --- |
| `jp` (hoặc `*_jp`) | Nguyên văn tiếng Nhật, chép **chính xác** từ sách | Không (bắt buộc có nội dung thật) |
| `vi` (hoặc `*_vi`) | Bản dịch **sát nghĩa** của đúng phần `jp` đó — không thêm, không bớt, không giải thích | Có — để `null` nếu trang chưa dịch xong |
| `explanation_vi` | Giải thích thêm, ví dụ, mẹo nhớ, điểm dễ nhầm... **tách biệt hoàn toàn** khỏi bản dịch | Có — để `null` nếu không cần giải thích |

Sai:

```json
"vi": "Quản lý tiến độ. Đây là phần rất hay ra trong đề thi..."
```

Đúng:

```json
"vi": "Quản lý tiến độ",
"explanation_vi": "Đây là phần rất hay ra trong đề thi..."
```

`vi` là câu trả lời cho "sách đó có nghĩa gì bằng tiếng Việt". `explanation_vi`
là câu trả lời cho "người học cần biết thêm gì để hiểu/nhớ". Không viết kiến
thức mới vào `vi`, không rút gọn ý của `jp` khi dịch.

### 1.1. `bold_jp` / `bold_vi` (chữ in đậm trong sách)

Áp dụng cho `heading`/`paragraph`/`note`/`warning`/`definition`. Cả hai đều
**optional** — bỏ qua nếu không có gì in đậm trong sách.

| Trường | Ý nghĩa | Bắt buộc? |
| --- | --- | --- |
| `bold_jp` | Các cụm chữ được **in đậm ngay trong sách** (nguyên văn, không tự nhấn mạnh thêm) | Không |
| `bold_vi` | Cụm trong `vi` **tương ứng nghĩa** với từng phần tử `bold_jp`, để UI tô cùng màu ở cả 2 cột | Không |

`bold_vi` phải là **nguyên văn chuỗi con xuất hiện trong `vi`** (UI so khớp
bằng string match, không phải AI đoán vị trí) — copy đúng cụm chữ, không diễn
giải lại. Không bắt buộc 1-1 theo số lượng/thứ tự với `bold_jp`: ví dụ tiếng
Nhật có 2 cụm cùng nghĩa "直列"/"直列接続" (đều dịch ra "nối tiếp") thì chỉ cần
1 phần tử `bold_vi: ["nối tiếp"]` — UI tự tô mọi chỗ khớp trong câu dịch.

**Nếu không chắc cụm nào trong `vi` tương ứng với `bold_jp`, để `bold_vi`
trống (`null`/bỏ qua) — đừng đoán bừa**, vì tô sai cụm còn gây hiểu lầm hơn
là không tô.

## 2. book_slug (3 cuốn sách cố định)

| book_slug | Tên hiển thị ngắn (UI) | Tên đầy đủ |
| --- | --- | --- |
| `sekou-houki` | 施工管理・法規 | 国家試験受験対策 施工管理技術マニュアル 施工管理・法規編 第7版 |
| `sekou-gijutsu` | 施工管理技術 | 国家試験受験対策 2級 電気工事施工管理技術テキスト |
| `sougou-mondai` | 総合問題集 | 資料No.1 2級電気工事施工管理技術研修 総合問題集（2026年度用） |

`過去問・実戦問題` (kakomon) KHÔNG phải sách — đó là đề thi, dùng bảng
`jp_exam_tests`/`jp_exam_questions` (mục 8 bên dưới), không dùng
`book_slug`/`section_path`/page import.

**Không được tự thêm sách thứ 4** — nếu người dùng gửi ảnh từ một cuốn sách
khác, hỏi lại trước khi tạo book_slug mới (cần thêm migration).

## 3. Database schema

```
jp_exam_books
  id, slug (unique), short_title, title_jp, title_vi, edition, year,
  publisher, description, sort_order, status, created_at, updated_at

jp_exam_sections            -- cây, không giới hạn số cấp
  id, book_id, parent_id (nullable), code, title_jp, title_vi,
  start_page, end_page, depth, sort_order, created_at, updated_at

jp_exam_pages
  id, book_id, section_id, page_number, page_label, source_image_path,
  content_blocks (jsonb), notes_vi, review_status, sort_order,
  created_at, updated_at
  -- UNIQUE (book_id, page_number)  <-- KHÔNG BAO GIỜ chỉ page_number

jp_exam_tests / jp_exam_questions / jp_exam_question_choices /
jp_exam_question_references   -- xem mục 8
```

Migration nằm ở `supabase/migrations/2026091612*_jp_exam_*.sql`. Đây là các
bảng độc lập hoàn toàn với `jp_vocab`/`jp_kanji`/`jp_grammar`/... — không
được sửa các bảng đó.

RLS: mọi bảng `jp_exam_*` cho phép `SELECT` công khai (đọc bằng anon key từ
UI), **không có policy ghi công khai nào** — mọi thao tác ghi (import) phải
đi qua `SUPABASE_SERVICE_ROLE_KEY` ở `scripts/exam-import.ts`, không bao giờ
lộ key này ra phía client.

## 4. content_blocks — các loại block hỗ trợ

`content_blocks` là **mảng JSON**, mỗi phần tử là 1 block. KHÔNG lưu cả
trang thành 1 chuỗi text lớn.

```jsonc
// heading
{ "type": "heading", "level": 2, "jp": "2. 工程管理", "vi": "2. Quản lý tiến độ", "explanation_vi": null }

// paragraph
{ "type": "paragraph", "jp": "...", "vi": "...", "explanation_vi": "..." }

// bullet_list / numbered_list
{
  "type": "bullet_list",
  "items_jp": ["工程表の作成", "進捗の確認"],
  "items_vi": ["Lập bảng tiến độ", "Kiểm tra tiến độ thực tế"],
  "explanation_vi": null
}

// table
{
  "type": "table",
  "headers_jp": ["工程表の種類", "特徴"],
  "rows_jp": [["ガントチャート", "横棒で作業期間を表す"]],
  "headers_vi": ["Loại bảng tiến độ", "Đặc điểm"],
  "rows_vi": [["Biểu đồ Gantt", "Thể hiện thời gian công việc bằng thanh ngang"]],
  "explanation_vi": null
}

// formula — "content" là công thức nguyên văn (không phải "jp")
{ "type": "formula", "content": "P = VIcosφ", "vi": null, "explanation_vi": "P là công suất tác dụng..." }

// image — image_path là path trong Supabase Storage (mục 7), KHÔNG base64
{
  "type": "image",
  "image_path": "sekou-houki/0065-fig1.jpg",
  "caption_jp": "図1 工程表の例",
  "caption_vi": "Hình 1 - Ví dụ bảng tiến độ",
  "explanation_vi": null
}

// note / warning / definition — cùng shape với paragraph, khác ý nghĩa hiển thị
{ "type": "note", "jp": "...", "vi": "...", "explanation_vi": "..." }
{ "type": "warning", "jp": "...", "vi": "...", "explanation_vi": "..." }
{ "type": "definition", "jp": "...", "vi": "...", "explanation_vi": "Hiểu đơn giản là..." }
```

Schema Zod đầy đủ: `lib/exam/content-blocks.ts`. Rule validate:

- Một `paragraph`/`heading`/... nội dung thật **phải có `jp`** (không rỗng).
- `vi` có thể `null` nếu trang chưa dịch xong.
- `explanation_vi` luôn được phép `null` — **không bắt buộc viết giải thích
  cho mọi đoạn**. Nếu nội dung đã rõ, để `null`.

## 5. JSON import — 1 file = 1 trang sách

```json
{
  "book_slug": "sekou-houki",
  "section_path": [
    { "code": "施工管理", "title_jp": "施工管理", "title_vi": "Quản lý thi công" },
    { "code": "2", "title_jp": "2. 工程管理", "title_vi": "Quản lý tiến độ" }
  ],
  "page_number": 65,
  "page_label": "p.65",
  "source_image_path": null,
  "notes_vi": null,
  "review_status": "reviewed",
  "blocks": [
    { "type": "heading", "level": 2, "jp": "2. 工程管理", "vi": "2. Quản lý tiến độ", "explanation_vi": null },
    { "type": "paragraph", "jp": "...", "vi": "...", "explanation_vi": "..." }
  ]
}
```

`section_path` là đường đi từ gốc tới mục chứa trang này (sách → phần lớn →
chương → mục → tiểu mục...), **không giới hạn số cấp**. Mỗi phần tử:

- `code` — khoá để tìm-hoặc-tạo section một cách ổn định. Đặt `code` giống
  hệt nhau (ví dụ `"2"`, `"1.1"`, hoặc đúng tên chương nếu không có số) mỗi
  lần import trang thuộc mục đó, để không tạo section trùng.
- `title_jp` / `title_vi` — tiêu đề mục. Nếu section đã tồn tại (theo `code`),
  file sau sẽ **không** ghi đè tiêu đề khác đi trừ khi bạn sửa nó chủ động
  (importer chỉ tạo mới khi chưa có, không tự đổi tên section cũ).
- Có thể để `section_path: []` nếu trang chưa xác định được mục (sẽ tạo
  page không gắn `section_id`, sửa lại sau).

`review_status`: `"draft"` (mặc định, chưa soát lại) | `"reviewed"` (đã kiểm
tra) | `"needs_fix"` (phát hiện lỗi cần sửa).

## 6. Cách thêm 1 trang mới

1. Xác định đúng `book_slug`.
2. Xác định `section_path` — nếu mục đã tồn tại trong sách (xem
   `jp_exam_sections` hoặc UI accordion), dùng đúng `code` cũ. Nếu là mục
   mới, đặt `code` hợp lý và nhất quán (ví dụ theo số thứ tự trong sách).
3. Đọc ảnh trang sách, chép **chính xác** nguyên văn tiếng Nhật vào `jp`
   của từng block theo đúng thứ tự xuất hiện trên trang (heading trước,
   rồi paragraph, list, table, ... theo đúng bố cục).
4. Dịch sát nghĩa từng đoạn vào `vi` — không thêm/bớt/giải thích ở đây.
5. Chỉ viết `explanation_vi` cho những chỗ thực sự cần (thuật ngữ khó, công
   thức, điểm dễ nhầm, mẹo nhớ, liên hệ đề thi...). Để `null` nếu không cần.
6. Lưu file JSON tại `data/exam-import/<book_slug>/page-<4 số>.json`, ví dụ
   `data/exam-import/sekou-houki/page-0065.json`.
7. Chạy `npm run exam:import -- data/exam-import/sekou-houki/page-0065.json`.

## 7. Cách update một trang đã có

Sửa lại đúng file JSON cũ (cùng `book_slug` + `page_number`) rồi chạy lại
lệnh import. Importer **UPSERT theo (book_id, page_number)** — file cũ sẽ
ghi đè `content_blocks`/`page_label`/`notes_vi`/`review_status`/`section_id`
của page đó, không tạo bản ghi mới, không duplicate.

Nếu nội dung y hệt lần trước (không có gì thay đổi), importer báo
**Skipped** thay vì Updated — không ghi gì vào DB, tránh bump `updated_at`
vô ích. Đây là hành vi mong muốn (idempotent).

## 8. Import 1 file / nhiều file / cả folder

```bash
# 1 trang
npm run exam:import -- data/exam-import/sekou-houki/page-0065.json

# cả một cuốn (mọi *.json trong thư mục, đệ quy)
npm run exam:import -- data/exam-import/sekou-houki/

# nhiều đường dẫn cùng lúc
npm run exam:import -- data/exam-import/sekou-houki/page-0065.json data/exam-import/sekou-gijutsu/
```

Kết quả in ra:

```
Created: 2
Updated: 1
Skipped: 3
Errors: 0
```

Nếu có lỗi, mỗi lỗi in kèm `file`, `book`, `page`, và `lý do` cụ thể (ví dụ
"Không tìm thấy book_slug", hoặc lỗi validate Zod với đường dẫn field sai).

Cần biến môi trường (đặt trong `.env.local`, KHÔNG commit):

```
SUPABASE_URL=https://frqujwlswqmtsxnqnwwc.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service_role secret — Supabase Dashboard > Project Settings > API>
```

`SUPABASE_SERVICE_ROLE_KEY` chỉ dùng ở đây (Node script chạy trên máy/CI của
người import) — không bao giờ đặt trong biến `NEXT_PUBLIC_*`, không bao giờ
import vào code dưới `app/`/`components/`.

## 9. Ảnh nguồn (trang chụp gốc + hình trong nội dung)

Không lưu base64 vào DB. Upload ảnh lên Supabase Storage, bucket
`exam-sources`, theo quy ước:

```
exam-sources/
  sekou-houki/0065.jpg          <- ảnh chụp cả trang (source_image_path)
  sekou-houki/0065-fig1.jpg     <- hình/biểu đồ trong nội dung (image block)
  sekou-gijutsu/0037.jpg
```

Rồi điền đúng path (không phải URL đầy đủ) vào `source_image_path` của
page, hoặc `image_path` của block `image`. Thay ảnh sau này chỉ cần ghi đè
file trong Storage — không đổi `page_number`/`id`, không cần import lại.

## 10. Unique key & chống trùng lặp

- Book: unique theo `slug`.
- Section: tìm-hoặc-tạo theo `(book_id, parent_id, code)` — nếu `code`
  trùng với 1 section cùng cha trong cùng sách, dùng lại section đó thay vì
  tạo mới. Nếu `code` để trống, khớp theo `(book_id, parent_id, title_jp)`.
- Page: unique theo `(book_id, page_number)` — **tuyệt đối không** dùng
  riêng `page_number` (2 sách khác nhau có thể cùng đánh số trang 65).

Import cùng một file nhiều lần luôn an toàn (Created lần đầu, Skipped những
lần sau nếu không đổi gì, Updated nếu bạn sửa nội dung rồi chạy lại).

## 11. Đề thi (jp_exam_tests / questions / choices / references)

Đây là dữ liệu riêng cho tab "過去問・実戦問題" (`/exam/kakomon`), không đi
qua `npm run exam:import` (importer hiện chỉ xử lý trang sách). Thêm đề thi
bằng SQL trực tiếp (Supabase MCP `apply_migration`/`execute_sql`) theo schema
trong `supabase/migrations/20260916120000_jp_exam_2kyu_denki_schema.sql`:

1. Thêm 1 dòng vào `jp_exam_tests` (`slug`, `title`, `test_year`,
   `test_type`, `question_count`, `duration_minutes`, `status='published'`
   khi sẵn sàng hiển thị).
2. Với mỗi câu, thêm 1 dòng `jp_exam_questions` (`test_id`,
   `question_number`, `question_jp`, `explanation_vi`, ...).
3. Thêm các lựa chọn vào `jp_exam_question_choices` (`question_id`,
   `choice_label` — ví dụ `"イ"`/`"ロ"`/`"ハ"`/`"ニ"` hoặc `"A"`..`"D"`,
   `choice_jp`, `is_correct`).
4. Nếu câu có liên kết tài liệu, thêm dòng vào
   `jp_exam_question_references` (`question_id`, và ít nhất một trong
   `book_id`/`section_id`/`page_id`, `note` tuỳ chọn). Trang liên kết
   (`page_id`) sẽ hiện đúng nội dung 3 cột khi người làm đề bấm
   "参考資料を見る" — không cần thêm code UI.

## 12. Ví dụ JSON hoàn chỉnh (tham khảo)

Xem file thật đã import (idempotent, chạy lại không tạo trùng):

- `data/exam-import/sekou-houki/page-0065.json`
- `data/exam-import/sekou-houki/page-0066.json`
- `data/exam-import/sekou-gijutsu/page-0001.json`

Đây là dữ liệu **SAMPLE** (đánh dấu rõ trong `notes_vi` +
`review_status: "draft"`) để test import/UI — không phải nội dung thật của
sách. ChatGPT sẽ ghi đè bằng nội dung thật khi người dùng gửi ảnh trang
tương ứng (cùng `book_slug` + `page_number` → import sẽ UPDATE, không tạo
trang mới).

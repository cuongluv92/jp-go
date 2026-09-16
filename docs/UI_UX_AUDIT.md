# jp-go — UI/UX Audit & App Shell Fix

Ngày thực hiện: phiên refactor "FULL CODE AUDIT + UI/UX REFACTOR + LAYOUT FIX".
Không đổi dữ liệu/logic N5/N4/N3/N2, Từ vựng, Kanji, Ngữ pháp, Lộ trình
("Đang học"), Luyện tập, Ôn tập, Tiến độ, Search, Supabase client/loader.

## Tóm tắt

| Mức độ | Số lượng |
| --- | --- |
| CRITICAL | 1 |
| HIGH | 3 |
| MEDIUM | 4 |
| LOW | 3 |

---

## CRITICAL

### C1. Sidebar desktop bị cắt nội dung, không scroll được tới mục cuối

**File:** `components/bottom-nav.tsx` (desktop `<aside>`), `components/app-chrome.tsx`
(grid bao ngoài), `components/top-header.tsx` (offset `top-[88px]`),
`components/detail-quick-navigator.tsx` (offset `top-[76px]`).

**Nguyên nhân (đọc code, không đoán theo screenshot):**

Sidebar cũ là `<aside className="sticky top-[88px] self-start">` — `position:
sticky` **không tự giới hạn chiều cao**. Nó chỉ "dính" ở `top: 88px` khi
trang cuộn, nhưng chiều cao thật của nó vẫn là chiều cao nội dung menu
(không có `max-height`/`overflow-y`). Vùng có thể cuộn duy nhất trong toàn
bộ layout cũ là **cả trang** (`<body>`/document), vì `main` cũng không có
`overflow` riêng. Hệ quả:

- Nếu `main` (nội dung trang) **ngắn hơn** danh sách menu sidebar, tổng
  chiều cao trang = chiều cao sidebar (vì nó cao nhất) — nhưng phần overflow
  của chính sidebar lại nằm **ngoài viewport mà không có scrollbar nào xử
  lý nó**, vì sticky không sinh ra vùng cuộn cho riêng nó. Người dùng cuộn
  cả trang cũng không "tới" được phần bị che, vì trang chỉ cuộn đúng bằng
  phần chênh lệch chiều cao, và bản thân sticky container không bao giờ lộ
  thêm nội dung bên trong nó theo cách người dùng mong đợi.
- `top-[88px]` (bottom-nav cũ) và `top-[76px]` (detail-quick-navigator) là
  hai con số hard-code **khác nhau** cho cùng một thứ (chiều cao header) —
  bằng chứng cụ thể của "breakpoint/sticky không thống nhất" nêu trong yêu
  cầu audit.

**Cách đã sửa (sửa cấu trúc gốc, không vá CSS):**

`AppChrome` desktop giờ là **app shell cố định chiều cao viewport**:

```
<div className="flex h-dvh flex-col">      {/* toàn app = đúng 1 viewport, KHÔNG cuộn */}
  <TopHeader />                             {/* shrink-0, chiều cao cố định qua --app-header-h */}
  <div className="flex min-h-0 flex-1">     {/* hàng dưới = phần còn lại, min-h-0 bắt buộc để con co được */}
    <aside className="... h-full overflow-y-auto overflow-x-hidden">...</aside>
    <main className="... flex-1 overflow-y-auto overflow-x-hidden">{children}</main>
  </div>
</div>
```

Sidebar và `main` giờ là **hai vùng cuộn độc lập, mỗi vùng luôn có chiều
cao đúng bằng `100dvh - header`**, bất kể nội dung `main` dài hay ngắn.
Không còn phụ thuộc vào cuộn của cả trang. Đã verify bằng Playwright: ở
viewport 1440×650 (rất thấp), sidebar có `scrollHeight=808 > clientHeight=577`
→ cuộn nội bộ tới `scrollTop=scrollHeight` → mục cuối cùng ("Ôn thi
2級電気工事") lọt hẳn vào vùng nhìn thấy của `aside`, và `window.scrollY`
**không đổi** (main/trang không bị cuộn theo ngoài ý muốn).

Đồng thời thêm biến `--app-header-h` (globals.css) làm nguồn duy nhất cho
chiều cao header, và sửa `detail-quick-navigator.tsx` dùng offset theo layout
mode qua CSS (`.detail-quick-nav-top`, xem TC L1) thay vì đoán số cố định.

**Test:** xem mục "Sidebar scroll test" trong báo cáo cuối.

---

## HIGH

### H1. Menu "Lộ trình" cần đổi tên/di chuyển thành "Đang học" ngay sau "Tiến độ"

**File:** `components/nav-items.tsx` (mới), `app/plan/page.tsx`, `app/page.tsx`,
`components/top-header.tsx` (breadcrumb).

Route `/plan` (logic/dữ liệu Lộ trình học — wizard tạo lộ trình + panel theo
dõi tiến độ hàng ngày) **không đổi**. Chỉ đổi tên hiển thị "Lộ trình" →
"Đang học" và di chuyển vị trí trong `NAV_ITEMS` xuống cuối nhóm điều hướng
chính, ngay sau "Tiến độ". Áp dụng nhất quán ở: sidebar desktop, bottom tab
bar mobile, mobile drawer, breadcrumb header, tiêu đề trang `/plan`, nút
trên trang chủ.

### H2. Không có cách vào nhóm "Nội dung" (Từ vựng/Kanji/Ngữ pháp/Ôn thi) trên mobile

**File:** `components/mobile-nav-drawer.tsx` (mới), `components/top-header.tsx`,
`components/app-chrome.tsx`.

Trước đây bottom tab bar mobile chỉ có 5 mục điều hướng chính; nhóm "Nội
dung" chỉ hiện trong sidebar desktop hoặc Command Palette (chỉ bật ở desktop
mode). Trên mobile, người dùng phải qua trang chủ mới bấm được vào Từ
vựng/Kanji/Ngữ pháp/Ôn thi — không có đường vào trực tiếp, vi phạm rõ yêu
cầu "mobile sidebar dùng drawer/overlay" của spec. Đã thêm nút ☰ ở
TopHeader mobile mở `MobileNavDrawer` — overlay + panel trượt từ trái, tự
cuộn riêng, đóng khi chọn mục/bấm nền/bấm X/phím Esc, khoá scroll nền khi
mở (`document.body.style.overflow`), tự đóng khi route đổi (kể cả qua
Back/Forward, vì đóng theo hiệu ứng phụ khi `pathname` đổi chứ không chỉ khi
bấm link).

### H3. Trang Tiến độ dùng grid cố định, không tận dụng màn rộng

**File:** `app/progress/page.tsx`, `app/globals.css`.

`grid grid-cols-2` cho 4 StatCard (Từ vựng) không đổi ở mọi kích thước màn
hình, và toàn trang bị chặn `max-width: 1040px` giống các trang đọc nội
dung dài — trong khi đây là dashboard dạng thẻ, không phải văn bản dài. Đã
bỏ "progress" khỏi rule giới hạn 1040px, đặt cap riêng 1400px (không để thẻ
giãn vô hạn trên màn 4K), và thêm `lg:grid-cols-4` cho nhóm 4 thẻ Từ vựng để
dùng hết hàng ngang trên desktop thay vì 2×2.

---

## MEDIUM

### M1. CSS layout phụ thuộc cấu trúc DOM ẩn qua `nth-of-type`/`:only-child`

**File:** `app/globals.css` (toàn bộ khối `html[data-jp-layout="desktop"][data-jp-page="..."] main > div > ...`).

Nhiều trang (home, vocabulary, grammar, kanji, các trang chi tiết) được style
riêng cho desktop bằng selector toàn cục dựa vào **thứ tự phần tử con thứ
mấy** trong cây JSX của từng trang (`section:nth-of-type(2)`,
`ul > li:only-child`, v.v.) thay vì mỗi trang tự khai báo layout của nó. Đây
là kỹ thuật dễ vỡ: chỉ cần đổi thứ tự/thêm 1 `<section>` ở trang đó là toàn
bộ layout desktop của trang lệch mà không có lỗi biên dịch nào báo hiệu.
**Chưa gây lỗi hiển thị hiện tại** (đã kiểm tra qua Playwright, không phát
hiện lệch) nên không sửa trong đợt này để tránh rủi ro động vào toàn bộ các
trang N5/N4/N3/N2 — nhưng nên coi là nợ kỹ thuật ưu tiên cao cho lần refactor
kế tiếp: chuyển các rule này thành class/props ngay trong component của từng
trang.

### M2. 8 chỗ set state trong `useEffect` bị ESLint gắn cờ (`react-hooks/set-state-in-effect`)

**File:** `components/app-chrome.tsx` (2, trong đó 1 mới thêm khi đóng
mobile drawer theo route), `components/detail-quick-navigator.tsx` (2),
`components/global-command-palette.tsx` (2), `components/exam/column-workspace.tsx`
(1, đã có comment giải thích), `components/kanji/kanji-detail-client.tsx` (prefer-const,
khác rule).

Tất cả đều đúng 1 trong 2 dạng hợp lệ mà rule này chưa nhận ra: (a) đọc
`localStorage`/khôi phục trạng thái sau khi hydrate xong (không thể làm
trong lúc render vì server không có `window`), hoặc (b) reset state phụ
thuộc khi một prop/route thay đổi (pattern "Adjusting state when a prop
changes" chính React docs mô tả). Không phải bug thật. Không thêm
`eslint-disable` tràn lan chỉo để xanh — giữ nguyên để lần sau ai đọc log
lint biết chính xác đây là nhóm nào, thay vì che đi.

### M3. Một số trang gọi Supabase phía client không có `.catch` ở tầng gọi

Khi mất mạng (đã thấy trong sandbox test), một số `useEffect` gọi API
Supabase chưa bọc try/catch nên throw thành `unhandledrejection` (xuất hiện
như `pageerror` trong console) thay vì rơi vào trạng thái Error UI. Không
sửa trong đợt này (ngoài phạm vi yêu cầu, và động vào nhiều trang có rủi ro
với "không phá logic hiện tại") — ghi nhận để theo dõi.

### M4. `components/kanji-stroke-practice.tsx`, `components/study-plan-panel.tsx` dùng `max-w-[Npx]` hard-code

Không sai chức năng, nhưng không theo token spacing 4/8/12/16/24/32 đề xuất
trong spec. Giữ nguyên (rủi ro thấp nhưng thay đổi không mang lại lợi ích
rõ, đúng nguyên tắc "chỉ refactor khi có lợi thật").

---

## LOW

### L1. `--app-header-h` mới là nguồn chân lý cho chiều cao header nhưng chưa dùng cho mọi nơi có thể cần

Ví dụ modal (`components/exam/reference-modal.tsx`) tự tính `max-height`
riêng theo `vh`, không liên quan tới header — không cần sửa, chỉ ghi chú để
lần sau nếu thêm sticky-trong-modal thì dùng biến này cho nhất quán.

### L2. Icon-only button audit

Tất cả nút icon-only chính (☰ mở/đóng sidebar, ☰ mở menu mobile, X đóng
drawer/modal, 👁 ẩn/hiện cột, ⛶ focus/thoát focus, đăng xuất, cài đặt, tìm
kiếm, chuyển desktop/mobile) đã có `aria-label` + `title`. Không phát hiện
thiếu sót mới trong phạm vi các file đã sửa.

### L3. `scripts/exam-import.ts` có `console.log`

Cố ý (đây là output CLI cho người chạy lệnh import xem kết quả
Created/Updated/Skipped/Errors) — không phải debug log sót lại.

---

## Không sửa trong đợt này (ngoài phạm vi/rủi ro cao hơn lợi ích)

- Rewrite toàn bộ trang thành `PageHeader/Toolbar/Content` dùng chung
  (mục 16 yêu cầu): các trang hiện có (Từ vựng, Kanji, Ngữ pháp, Luyện tập,
  Ôn tập, Tiến độ, Đang học) đã hoạt động đúng và có logic/data riêng khá
  phức tạp (SRS, cache, Supabase). Rút trích thành component dùng chung là
  việc lớn, động vào toàn bộ các trang cùng lúc — vi phạm tinh thần "không
  rewrite nếu không cần" và rủi ro cao hơn lợi ích trong 1 đợt. Đề xuất làm
  riêng, từng trang một, có review giữa chừng.
- Chuẩn hoá design system đầy đủ (button/badge/card variants) trên toàn bộ
  ~20 trang: phạm vi quá lớn so với các lỗi bố cục cụ thể được yêu cầu ưu
  tiên (sidebar, full-width, menu). Đã chuẩn hoá phần liên quan trực tiếp
  tới app shell (header, sidebar, drawer).

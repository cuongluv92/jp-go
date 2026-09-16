-- SAMPLE data only (per module spec section 21) - used to test import/UI
-- (accordion, 3-column reader, search, prev/next). NOT real book content.
-- Mirrors data/exam-import/**/*.json exactly, so re-running
-- `npm run exam:import` on those files later is a no-op (idempotent skip).
insert into jp_exam_pages (book_id, section_id, page_number, page_label, notes_vi, review_status, content_blocks)
select
  b.id,
  s2.id,
  65,
  'p.65',
  '[SAMPLE - dữ liệu minh hoạ để test import/UI theo docs/EXAM_CONTENT_IMPORT.md, KHÔNG phải nội dung thật của sách. Sẽ được ChatGPT ghi đè bằng nội dung thật khi người dùng chụp trang 65 gửi lên.]',
  'draft',
  '[
    {"type":"heading","level":2,"jp":"2. 工程管理","vi":"2. Quản lý tiến độ","explanation_vi":null},
    {"type":"paragraph","jp":"工程管理","vi":"Quản lý tiến độ","explanation_vi":"Quản lý thời gian và trình tự các công việc để công trình hoàn thành theo kế hoạch."},
    {"type":"bullet_list","items_jp":["工程表の作成","進捗の確認","遅延対策"],"items_vi":["Lập bảng tiến độ","Kiểm tra tiến độ thực tế","Biện pháp xử lý khi chậm tiến độ"],"explanation_vi":null},
    {"type":"formula","content":"P = VIcosφ","vi":null,"explanation_vi":"P là công suất tác dụng..."},
    {"type":"table","headers_jp":["工程表の種類","特徴"],"rows_jp":[["ガントチャート","横棒で作業期間を表す"],["ネットワーク工程表","作業の順序関係を矢線で表す"]],"headers_vi":["Loại bảng tiến độ","Đặc điểm"],"rows_vi":[["Biểu đồ Gantt","Thể hiện thời gian công việc bằng thanh ngang"],["Sơ đồ mạng lưới","Thể hiện quan hệ trình tự công việc bằng mũi tên"]],"explanation_vi":null},
    {"type":"note","jp":"（サンプル注記）","vi":null,"explanation_vi":"Đây là block loại note dùng để test giao diện - chưa phải nội dung thật."}
  ]'::jsonb
from jp_exam_books b
join jp_exam_sections s1 on s1.book_id = b.id and s1.parent_id is null and s1.code = '施工管理'
join jp_exam_sections s2 on s2.book_id = b.id and s2.parent_id = s1.id and s2.code = '2'
where b.slug = 'sekou-houki'
on conflict (book_id, page_number) do update set
  section_id = excluded.section_id,
  page_label = excluded.page_label,
  notes_vi = excluded.notes_vi,
  review_status = excluded.review_status,
  content_blocks = excluded.content_blocks;

insert into jp_exam_pages (book_id, section_id, page_number, page_label, notes_vi, review_status, content_blocks)
select
  b.id,
  s2.id,
  66,
  'p.66',
  '[SAMPLE - dữ liệu minh hoạ để test import/UI (trang kế tiếp trong cùng 1 mục), KHÔNG phải nội dung thật của sách.]',
  'draft',
  '[
    {"type":"definition","jp":"（サンプル定義）","vi":null,"explanation_vi":"Đây là block loại definition dùng để test giao diện - chưa phải nội dung thật."},
    {"type":"warning","jp":"（サンプル注意）","vi":null,"explanation_vi":"Đây là block loại warning dùng để test giao diện - chưa phải nội dung thật."}
  ]'::jsonb
from jp_exam_books b
join jp_exam_sections s1 on s1.book_id = b.id and s1.parent_id is null and s1.code = '施工管理'
join jp_exam_sections s2 on s2.book_id = b.id and s2.parent_id = s1.id and s2.code = '2'
where b.slug = 'sekou-houki'
on conflict (book_id, page_number) do update set
  section_id = excluded.section_id,
  page_label = excluded.page_label,
  notes_vi = excluded.notes_vi,
  review_status = excluded.review_status,
  content_blocks = excluded.content_blocks;

insert into jp_exam_pages (book_id, section_id, page_number, page_label, notes_vi, review_status, content_blocks)
select
  b.id,
  s1.id,
  1,
  'p.1',
  '[SAMPLE - dữ liệu minh hoạ để test import cho sách thứ 2, KHÔNG phải nội dung thật của sách.]',
  'draft',
  '[{"type":"heading","level":1,"jp":"第1編 電気工学","vi":"Tập 1 - Kỹ thuật điện","explanation_vi":null}]'::jsonb
from jp_exam_books b
join jp_exam_sections s1 on s1.book_id = b.id and s1.parent_id is null and s1.code = '1'
where b.slug = 'sekou-gijutsu'
on conflict (book_id, page_number) do update set
  section_id = excluded.section_id,
  page_label = excluded.page_label,
  notes_vi = excluded.notes_vi,
  review_status = excluded.review_status,
  content_blocks = excluded.content_blocks;

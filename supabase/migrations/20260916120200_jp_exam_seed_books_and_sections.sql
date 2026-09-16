-- Real book metadata (3 books) and the table-of-contents structure the user
-- supplied directly in the module spec. No chapter/page CONTENT is invented
-- here - only the book records and the section tree fragments that were
-- explicitly given. Everything else is left for the ChatGPT import pipeline.
-- Idempotent: safe to re-run (ON CONFLICT upserts).

insert into jp_exam_books (slug, short_title, title_jp, title_vi, edition, year, publisher, description, sort_order, status)
values
  (
    'sekou-houki',
    '施工管理・法規',
    '国家試験受験対策 施工管理技術マニュアル 施工管理・法規編 第7版',
    'Tài liệu ôn thi quốc gia - Cẩm nang kỹ thuật quản lý thi công - Tập Quản lý thi công & Pháp quy, tái bản lần 7',
    '第7版',
    null,
    '建設管理センター',
    null,
    1,
    'active'
  ),
  (
    'sekou-gijutsu',
    '施工管理技術',
    '国家試験受験対策 2級 電気工事施工管理技術テキスト',
    'Tài liệu ôn thi quốc gia - Giáo trình kỹ thuật quản lý thi công điện, cấp 2',
    null,
    null,
    '建設管理センター',
    null,
    2,
    'active'
  ),
  (
    'sougou-mondai',
    '総合問題集',
    '資料No.1 2級電気工事施工管理技術研修 総合問題集',
    'Tài liệu số 1 - Tuyển tập bài tập tổng hợp khóa đào tạo kỹ thuật quản lý thi công điện, cấp 2',
    null,
    '2026年度用',
    '建設管理センター',
    '編集: 建設管理センター 開発技術事業部 (Biên soạn: Trung tâm Quản lý Xây dựng - Ban Phát triển Kỹ thuật)',
    3,
    'active'
  )
on conflict (slug) do update set
  short_title = excluded.short_title,
  title_jp = excluded.title_jp,
  title_vi = excluded.title_vi,
  edition = excluded.edition,
  year = excluded.year,
  publisher = excluded.publisher,
  description = excluded.description,
  sort_order = excluded.sort_order;

-- ---------------------------------------------------------------------------
-- BOOK 1 (sekou-houki): 施工管理 / 法規 trees given in the spec
-- ---------------------------------------------------------------------------
do $$
declare
  v_book_id uuid;
  v_sekou uuid;
  v_houki uuid;
  v_ch1 uuid;
begin
  select id into v_book_id from jp_exam_books where slug = 'sekou-houki';

  insert into jp_exam_sections (book_id, parent_id, code, title_jp, title_vi, depth, sort_order)
  values (v_book_id, null, '施工管理', '施工管理', 'Quản lý thi công', 0, 1)
  on conflict (book_id, code) where parent_id is null and code is not null
  do update set title_jp = excluded.title_jp, title_vi = excluded.title_vi
  returning id into v_sekou;

  insert into jp_exam_sections (book_id, parent_id, code, title_jp, title_vi, depth, sort_order)
  values (v_book_id, v_sekou, '1', '1. 施工計画', 'Kế hoạch thi công', 1, 1)
  on conflict (parent_id, code) where parent_id is not null and code is not null
  do update set title_jp = excluded.title_jp, title_vi = excluded.title_vi
  returning id into v_ch1;

  insert into jp_exam_sections (book_id, parent_id, code, title_jp, title_vi, depth, sort_order)
  values
    (v_book_id, v_ch1, '1.1', '1.1 施工管理の概要', 'Khái quát về quản lý thi công', 2, 1),
    (v_book_id, v_ch1, '1.2', '1.2 施工計画', 'Kế hoạch thi công', 2, 2),
    (v_book_id, v_ch1, '1.3', '1.3 施工計画書', 'Hồ sơ kế hoạch thi công', 2, 3),
    (v_book_id, v_ch1, '1.4', '1.4 試験および検査', 'Thử nghiệm và kiểm tra', 2, 4),
    (v_book_id, v_ch1, '1.5', '1.5 実行予算', 'Ngân sách thực hiện', 2, 5)
  on conflict (parent_id, code) where parent_id is not null and code is not null
  do update set title_jp = excluded.title_jp, title_vi = excluded.title_vi;

  insert into jp_exam_sections (book_id, parent_id, code, title_jp, title_vi, depth, sort_order)
  values
    (v_book_id, v_sekou, '2', '2. 工程管理', 'Quản lý tiến độ', 1, 2),
    (v_book_id, v_sekou, '3', '3. 品質管理', 'Quản lý chất lượng', 1, 3),
    (v_book_id, v_sekou, '4', '4. 安全管理', 'Quản lý an toàn', 1, 4)
  on conflict (parent_id, code) where parent_id is not null and code is not null
  do update set title_jp = excluded.title_jp, title_vi = excluded.title_vi;

  insert into jp_exam_sections (book_id, parent_id, code, title_jp, title_vi, depth, sort_order)
  values (v_book_id, null, '法規', '法規', 'Pháp quy', 0, 2)
  on conflict (book_id, code) where parent_id is null and code is not null
  do update set title_jp = excluded.title_jp, title_vi = excluded.title_vi
  returning id into v_houki;

  insert into jp_exam_sections (book_id, parent_id, code, title_jp, title_vi, depth, sort_order)
  values
    (v_book_id, v_houki, '1', '建設業法', 'Luật Xây dựng', 1, 1),
    (v_book_id, v_houki, '2', '労働基準法', 'Luật Tiêu chuẩn Lao động', 1, 2),
    (v_book_id, v_houki, '3', '労働安全衛生法', 'Luật An toàn và Vệ sinh Lao động', 1, 3),
    (v_book_id, v_houki, '4', '環境基本法', 'Luật Cơ bản về Môi trường', 1, 4),
    (v_book_id, v_houki, '5', '建築基準法', 'Luật Tiêu chuẩn Xây dựng', 1, 5),
    (v_book_id, v_houki, '6', '消防法', 'Luật Phòng cháy chữa cháy', 1, 6)
  on conflict (parent_id, code) where parent_id is not null and code is not null
  do update set title_jp = excluded.title_jp, title_vi = excluded.title_vi;
end $$;

-- ---------------------------------------------------------------------------
-- BOOK 2 (sekou-gijutsu): top-level 編 only (chapter titles not yet given)
-- ---------------------------------------------------------------------------
do $$
declare
  v_book_id uuid;
begin
  select id into v_book_id from jp_exam_books where slug = 'sekou-gijutsu';

  insert into jp_exam_sections (book_id, parent_id, code, title_jp, title_vi, depth, sort_order)
  values
    (v_book_id, null, '1', '第1編 電気工学', 'Tập 1 - Kỹ thuật điện', 0, 1),
    (v_book_id, null, '2', '第2編 施設電気設備', 'Tập 2 - Thiết bị điện công trình', 0, 2),
    (v_book_id, null, '3', '第3編 構内電気設備', 'Tập 3 - Thiết bị điện trong khuôn viên', 0, 3),
    (v_book_id, null, '4', '第4編 関連分野', 'Tập 4 - Lĩnh vực liên quan', 0, 4),
    (v_book_id, null, '5', '第5編 電気法規', 'Tập 5 - Pháp quy điện', 0, 5)
  on conflict (book_id, code) where parent_id is null and code is not null
  do update set title_jp = excluded.title_jp, title_vi = excluded.title_vi;
end $$;

-- BOOK 3 (sougou-mondai): no structure supplied yet - sections will be
-- created by the import pipeline as real pages arrive.

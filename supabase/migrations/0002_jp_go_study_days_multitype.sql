-- ============================================================
-- jp-go — mở rộng jp_study_days để hỗ trợ đủ 3 loại nội dung/ngày
-- (Từ vựng + Kanji + Ngữ pháp) khi lộ trình chọn phạm vi "Tất cả".
-- Additive migration, an toàn chạy lại nhiều lần. KHÔNG đụng bảng của
-- nhatkytrading, KHÔNG xoá/đổi cột cũ — chỉ thêm cột mới với default '{}'
-- nên các lộ trình đã tạo trước migration này vẫn hoạt động bình thường
-- (kanji_ids/grammar_ids rỗng, tương đương chưa có nội dung Kanji/Ngữ pháp).
-- ============================================================

alter table jp_study_days
  add column if not exists kanji_ids text[] not null default '{}';

alter table jp_study_days
  add column if not exists grammar_ids text[] not null default '{}';

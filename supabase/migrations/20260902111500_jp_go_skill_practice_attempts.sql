-- Ghi nhận riêng buổi "Luyện đa dạng" trong cùng bảng kết quả hiện có.
-- Chỉ nới CHECK; không đổi dữ liệu cũ, RLS hay cấu trúc liên quan.
alter table jp_practice_attempts drop constraint if exists jp_practice_attempts_test_type_check;
alter table jp_practice_attempts
  add constraint jp_practice_attempts_test_type_check
  check (test_type in ('auto_jlpt', 'skill_mix', 'custom'));

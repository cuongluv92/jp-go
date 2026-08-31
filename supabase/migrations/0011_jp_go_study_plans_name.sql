-- ============================================================
-- jp-go — cho phép đặt tên lộ trình + bỏ ràng buộc "chỉ 1 lộ trình
-- active tại 1 thời điểm". Người dùng có thể tạo nhiều lộ trình song
-- song (ví dụ chia sẻ tài khoản với người khác, hoặc học song song
-- nhiều cấp/loại nội dung) mà không phải xoá lộ trình cũ.
-- Additive migration, an toàn chạy lại nhiều lần. KHÔNG đụng bảng của
-- nhatkytrading, KHÔNG xoá/đổi cột cũ — chỉ thêm cột mới, nullable,
-- nên các lộ trình đã tạo trước migration này vẫn hoạt động bình
-- thường (name = null, UI tự hiển thị tên mặc định theo cấp độ).
-- ============================================================

alter table jp_study_plans
  add column if not exists name text;

-- ============================================================
-- jp-go — Chuẩn bị word_class cho Từ vựng N4.
--
-- Khác N2 (PDF không chia sẵn theo loại từ, phải tự phân loại): N4 dùng
-- SONG SONG cả lesson_no (課26-50, nối tiếp N5) VÀ word_class (bắt buộc,
-- không để trống) — 4 nhóm chính Danh từ/Động từ/Tính từ/Trợ từ, có thể
-- thêm Phó từ. Lưu bằng đúng scheme word_class hiện có (nhãn tiếng Nhật:
-- 名詞/動詞/い形容詞/な形容詞/副詞) để tái dùng nguyên guessPartOfSpeech()
-- đã sửa đúng ở PR#107 — không cần thêm cột "nhóm chính" riêng, vì
-- partOfSpeech (đã hiện đúng trên UI: dropdown lọc Từ vựng + biểu đồ
-- "Theo loại từ" ở trang Tiến độ) ĐÃ LÀ đúng nhóm chính cần lọc/hiển thị,
-- rà lại thấy N2 không cần retrofit gì thêm (đã map đúng qua PR#107).
--
-- Chỉ thiếu duy nhất 助詞 (Trợ từ) — N2 không có nhóm này nên chưa nằm
-- trong ràng buộc word_class cũ. Nới lỏng CHECK constraint để cho phép
-- thêm giá trị này (constraint tự đặt tên theo quy ước Postgres cho check
-- inline: jp_vocab_word_class_check).
-- ============================================================

alter table jp_vocab drop constraint if exists jp_vocab_word_class_check;

alter table jp_vocab add constraint jp_vocab_word_class_check
  check (word_class is null or word_class in (
    '動詞', '動名詞', '名詞', 'い形容詞', 'な形容詞', '副詞', '接続詞', '複合動詞', 'カタカナ', '助詞'
  ));

-- ============================================================
-- jp-go — Fix: migration 0026 tạo bảng jp_grammar_examples nhưng THIẾU 2
-- cột corrected_text/correction_note (có ở jp_grammar nhưng quên thêm ở
-- jp_grammar_examples) — trong khi các seed từ round 2 trở đi (0028+) đã
-- insert vào 2 cột này cho các ví dụ needs_review. Lỗi thực tế:
-- "column "corrected_text" of relation "jp_grammar_examples" does not
-- exist" khi chạy 0028.
--
-- Migration này bổ sung 2 cột còn thiếu — an toàn chạy lại nhiều lần
-- ("add column if not exists"). File 0026 trong repo cũng đã được sửa lại
-- cho đúng ngay từ đầu (để lần setup mới từ đầu không gặp lại lỗi này),
-- nhưng ai đã chạy 0026 trước khi sửa thì cần chạy thêm file này trước khi
-- chạy 0028 trở đi.
-- ============================================================

alter table jp_grammar_examples add column if not exists corrected_text text;
alter table jp_grammar_examples add column if not exists correction_note text;

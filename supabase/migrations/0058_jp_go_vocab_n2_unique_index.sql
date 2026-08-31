-- ============================================================
-- jp-go — Bổ sung unique index cho jp_vocab khi lesson_no NULL (N2 trở
-- đi). Postgres coi NULL luôn khác NULL trong unique constraint thường,
-- nên ràng buộc unique(level, lesson_no, word_jp, reading_furigana) hiện
-- có KHÔNG chặn được trùng lặp khi lesson_no = NULL — cần một unique index
-- riêng theo (level, word_class, word_jp, reading_furigana) chỉ áp dụng
-- cho các dòng lesson_no is null, để migration N2 idempotent khi lỡ chạy
-- lại. Additive, không ảnh hưởng ràng buộc/dữ liệu N5 hiện có.
-- ============================================================

create unique index if not exists idx_jp_vocab_n2_unique
  on jp_vocab (level, word_class, word_jp, reading_furigana)
  where lesson_no is null;

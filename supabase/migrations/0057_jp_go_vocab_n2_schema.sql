-- ============================================================
-- jp-go — Chuẩn bị schema jp_vocab/jp_vocab_questions cho Từ vựng N2.
--
-- Khác biệt so với N5 (đã seed theo lesson_no/課): PDF N2 "Tổng hợp kiến
-- thức N2" (Dũng Mori) KHÔNG chia từ vựng theo bài học, mà nhóm theo TỪ
-- LOẠI (word class): 動詞 (chia tha động/tự động qua usage_note_vi), 動名詞,
-- 名詞, い形容詞/な形容詞, 副詞＋接続詞, 複合動詞, カタカナ.
--
-- Additive tuyệt đối:
--   - KHÔNG xóa, KHÔNG đổi kiểu, KHÔNG đổi giá trị cột lesson_no hiện có —
--     chỉ nới lỏng ràng buộc not null để N2 trở đi có thể để NULL.
--   - Toàn bộ dữ liệu N5 hiện tại giữ nguyên lesson_no như cũ, không bị
--     ảnh hưởng.
--   - Thêm cột mới word_class (nullable) — N5 không dùng cột này (NULL),
--     N2 trở đi dùng cột này thay cho lesson_no.
--   - jp_vocab_questions: nới lỏng check constraint source_type để cho
--     phép 'pdf' (16 câu hỏi trắc nghiệm THẬT trích nguyên văn từ PDF N2,
--     có đáp án đúng in kèm — đánh dấu bằng ＊ và ＊答 trong PDF), đồng thời
--     thêm cột source_page để lưu đúng trang PDF của các câu hỏi đó. Trước
--     đây bảng này chỉ cho phép source_type='generated' vì toàn bộ câu hỏi
--     N5 đều tự sinh.
-- ============================================================

alter table jp_vocab alter column lesson_no drop not null;

alter table jp_vocab add column if not exists word_class text
  check (word_class is null or word_class in (
    '動詞', '動名詞', '名詞', 'い形容詞', 'な形容詞', '副詞', '接続詞', '複合動詞', 'カタカナ'
  ));

create index if not exists idx_jp_vocab_word_class on jp_vocab(level, word_class) where word_class is not null;

alter table jp_vocab_questions drop constraint if exists jp_vocab_questions_source_type_check;
alter table jp_vocab_questions add constraint jp_vocab_questions_source_type_check
  check (source_type in ('generated', 'pdf'));

alter table jp_vocab_questions add column if not exists source_page integer;

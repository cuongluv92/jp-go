import type { ExcelVocabularyRow } from "@/lib/types";

/**
 * Giả lập dữ liệu vừa "đọc" ra từ một file Excel, dùng để demo màn hình xem
 * trước ở trang Quản lý dữ liệu (chưa có file Excel thật). Cố tình có một
 * dòng thiếu cột bắt buộc và hai dòng trùng nhau để minh hoạ tính năng cảnh
 * báo lỗi / phát hiện trùng.
 */
export const sampleImportRows: ExcelVocabularyRow[] = [
  {
    "Từ vựng": "報告書",
    "Cách đọc": "ほうこくしょ",
    "Nghĩa tiếng Việt": "báo cáo (văn bản)",
    "Loại từ": "Danh từ",
    "Ví dụ 1: phong cách đề thi": "月末までに報告書を提出してください。",
    "Bản dịch ví dụ 1": "Vui lòng nộp báo cáo trước cuối tháng.",
    "Ví dụ 2: hội thoại đời thường tự nhiên tại Nhật": "この報告書、ちょっと長すぎない？",
    "Bản dịch ví dụ 2": "Bản báo cáo này hơi dài quá nhỉ?",
    "Ví dụ 3: môi trường công việc/văn phòng": "報告書のフォーマットを統一しましょう。",
    "Bản dịch ví dụ 3": "Chúng ta hãy thống nhất định dạng báo cáo.",
    "Cấu trúc sử dụng": "〜報告書を作成する／提出する",
    "Trợ từ thường đi kèm": "を、に",
    "Thành phần thường đứng trước": "月次、週次、業務",
    "Thành phần thường đứng sau": "を提出する、を作成する",
    "Cách chia hoặc dạng biến đổi": "Danh từ, không chia dạng",
    "Lưu ý cách dùng và lỗi thường gặp": "Phân biệt với「レポート」(báo cáo nói chung, thân mật hơn).",
  },
  {
    "Từ vựng": "取引先",
    "Cách đọc": "とりひきさき",
    "Nghĩa tiếng Việt": "đối tác kinh doanh, khách hàng giao dịch",
    "Loại từ": "Danh từ",
    "Ví dụ 1: phong cách đề thi": "取引先との信頼関係が重要だ。",
    "Bản dịch ví dụ 1": "Mối quan hệ tin cậy với đối tác là rất quan trọng.",
    "Ví dụ 2: hội thoại đời thường tự nhiên tại Nhật": "",
    "Bản dịch ví dụ 2": "",
    "Ví dụ 3: môi trường công việc/văn phòng": "取引先に確認のメールを送りました。",
    "Bản dịch ví dụ 3": "Tôi đã gửi email xác nhận cho đối tác.",
    "Cấu trúc sử dụng": "取引先と／に〜",
    "Trợ từ thường đi kèm": "と、に",
    "Thành phần thường đứng trước": "主要な、新しい",
    "Thành phần thường đứng sau": "",
    "Cách chia hoặc dạng biến đổi": "Danh từ, không chia dạng",
    "Lưu ý cách dùng và lỗi thường gặp": "Ít dùng trong hội thoại đời thường ngoài công việc.",
  },
  {
    // Thiếu "Nghĩa tiếng Việt" — minh hoạ dòng lỗi cần sửa trước khi nhập.
    "Từ vựng": "納期",
    "Cách đọc": "のうき",
    "Nghĩa tiếng Việt": "",
    "Loại từ": "Danh từ",
    "Ví dụ 1: phong cách đề thi": "納期を厳守してください。",
    "Bản dịch ví dụ 1": "Vui lòng tuân thủ nghiêm ngặt thời hạn giao hàng.",
    "Ví dụ 2: hội thoại đời thường tự nhiên tại Nhật": "納期、間に合いそう？",
    "Bản dịch ví dụ 2": "Có kịp thời hạn giao không?",
    "Ví dụ 3: môi trường công việc/văn phòng": "納期の延長をお願いできますか。",
    "Bản dịch ví dụ 3": "Chúng tôi có thể xin gia hạn thời gian giao hàng không?",
    "Cấu trúc sử dụng": "納期を守る／延長する",
    "Trợ từ thường đi kèm": "を",
    "Thành phần thường đứng trước": "",
    "Thành phần thường đứng sau": "を守る、を延長する",
    "Cách chia hoặc dạng biến đổi": "Danh từ, không chia dạng",
    "Lưu ý cách dùng và lỗi thường gặp": "",
  },
  {
    // Trùng với từ đã có sẵn trong kho (w-01: 会議 / かいぎ).
    "Từ vựng": "会議",
    "Cách đọc": "かいぎ",
    "Nghĩa tiếng Việt": "cuộc họp",
    "Loại từ": "Danh từ",
    "Ví dụ 1: phong cách đề thi": "会議の議事録を作成した。",
    "Bản dịch ví dụ 1": "Tôi đã lập biên bản cuộc họp.",
    "Ví dụ 2: hội thoại đời thường tự nhiên tại Nhật": "会議、もう終わった？",
    "Bản dịch ví dụ 2": "Họp xong chưa?",
    "Ví dụ 3: môi trường công việc/văn phòng": "オンライン会議のリンクを共有します。",
    "Bản dịch ví dụ 3": "Tôi sẽ chia sẻ đường link họp online.",
    "Cấu trúc sử dụng": "〜会議を開く／会議に出る",
    "Trợ từ thường đi kèm": "に、を",
    "Thành phần thường đứng trước": "定例、緊急",
    "Thành phần thường đứng sau": "室、資料",
    "Cách chia hoặc dạng biến đổi": "Danh từ, không chia dạng",
    "Lưu ý cách dùng và lỗi thường gặp": "Trùng với từ đã có trong kho từ vựng.",
  },
];

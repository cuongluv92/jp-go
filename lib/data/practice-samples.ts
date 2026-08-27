import type { PracticeMode, PracticeModeInfo } from "@/lib/types";

export const PRACTICE_MODES: PracticeModeInfo[] = [
  {
    mode: "chon_nghia",
    title: "Chọn nghĩa đúng",
    description: "Xem từ tiếng Nhật, chọn đúng nghĩa tiếng Việt trong 4 đáp án.",
  },
  {
    mode: "dien_tu",
    title: "Điền từ vào câu",
    description: "Điền từ vựng còn thiếu vào chỗ trống trong câu ví dụ.",
  },
  {
    mode: "chon_tro_tu",
    title: "Chọn trợ từ đúng",
    description: "Chọn trợ từ (は/が/を/に...) phù hợp để hoàn thành câu.",
  },
  {
    mode: "sap_xep_cau",
    title: "Sắp xếp câu",
    description: "Sắp xếp các từ/cụm từ cho sẵn thành một câu tiếng Nhật đúng ngữ pháp.",
  },
  {
    mode: "chon_cach_dung",
    title: "Chọn cách dùng tự nhiên",
    description: "So sánh 2-3 câu gần giống nhau, chọn câu người Nhật thực sự dùng.",
  },
  {
    mode: "phan_biet_ngu_canh",
    title: "Phân biệt ngữ cảnh",
    description: "Phân biệt cách dùng từ trong đề thi, đời thường và văn phòng.",
  },
];

export interface PracticeQuestion {
  id: string;
  mode: PracticeMode;
  /** Câu hỏi hoặc câu có chỗ trống (dùng "___" để đánh dấu chỗ trống nếu có). */
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * Câu hỏi mẫu cho từng dạng luyện tập. Giai đoạn này chưa có thuật toán sinh câu
 * hỏi tự động — dữ liệu tĩnh chỉ để dựng giao diện làm bài + chấm điểm đơn giản.
 */
export const sampleQuestions: PracticeQuestion[] = [
  {
    id: "q-chon-nghia-1",
    mode: "chon_nghia",
    prompt: "締め切り",
    options: ["Hạn chót, deadline", "Cuộc họp", "Đối tác", "Bài tập về nhà"],
    correctIndex: 0,
    explanation: "「締め切り」nghĩa là hạn chót / deadline.",
  },
  {
    id: "q-chon-nghia-2",
    mode: "chon_nghia",
    prompt: "確認する",
    options: ["Cố gắng", "Xác nhận, kiểm tra lại", "Mong chờ", "Đặt trước"],
    correctIndex: 1,
    explanation: "「確認する」nghĩa là xác nhận / kiểm tra lại.",
  },
  {
    id: "q-dien-tu-1",
    mode: "dien_tu",
    prompt: "明日の___は何時からですか。（cuộc họp）",
    options: ["会議", "宿題", "予約", "久しぶり"],
    correctIndex: 0,
    explanation: "Câu hỏi về cuộc họp nên dùng「会議」(かいぎ).",
  },
  {
    id: "q-dien-tu-2",
    mode: "dien_tu",
    prompt: "レストランの___を取りました。（đặt chỗ）",
    options: ["締め切り", "予約", "会議", "確認"],
    correctIndex: 1,
    explanation: "Đặt bàn nhà hàng dùng「予約」(よやく).",
  },
  {
    id: "q-tro-tu-1",
    mode: "chon_tro_tu",
    prompt: "車___気をつけてください。",
    options: ["に", "を", "で", "へ"],
    correctIndex: 0,
    explanation: "Cấu trúc cố định「〜に気をつける」dùng trợ từ「に」.",
  },
  {
    id: "q-tro-tu-2",
    mode: "chon_tro_tu",
    prompt: "会議___出る。",
    options: ["を", "に", "は", "も"],
    correctIndex: 1,
    explanation: "「会議に出る」= tham dự cuộc họp, dùng trợ từ「に」.",
  },
  {
    id: "q-sap-xep-1",
    mode: "sap_xep_cau",
    prompt: "Sắp xếp: 提出して / ください / を / 報告書",
    options: [
      "報告書を提出してください",
      "提出してください報告書を",
      "を報告書提出してください",
      "ください提出して報告書を",
    ],
    correctIndex: 0,
    explanation: "Thứ tự đúng: 報告書を提出してください (Vui lòng nộp báo cáo).",
  },
  {
    id: "q-sap-xep-2",
    mode: "sap_xep_cau",
    prompt: "Sắp xếp: 楽しみに / 旅行を / しています / 来週の",
    options: [
      "来週の旅行を楽しみにしています",
      "楽しみに来週の旅行をしています",
      "しています来週の旅行を楽しみに",
      "旅行を来週の楽しみにしています",
    ],
    correctIndex: 0,
    explanation: "Thứ tự đúng: 来週の旅行を楽しみにしています。",
  },
  {
    id: "q-cach-dung-1",
    mode: "chon_cach_dung",
    prompt: "Xin lỗi khách hàng vì đến muộn — câu nào tự nhiên và đủ lịch sự?",
    options: [
      "遅れて申し訳ございません。",
      "遅れてごめん。",
      "遅れた、悪い。",
      "遅刻、すみません。",
    ],
    correctIndex: 0,
    explanation: "Với khách hàng nên dùng thể lịch sự trang trọng「申し訳ございません」.",
  },
  {
    id: "q-cach-dung-2",
    mode: "chon_cach_dung",
    prompt: "Trả lời chỉ đạo của cấp trên một cách chuyên nghiệp:",
    options: ["承知しました。", "了解！", "オッケー。", "わかった。"],
    correctIndex: 0,
    explanation: "「承知しました」lịch sự và phù hợp khi trả lời cấp trên/khách hàng.",
  },
  {
    id: "q-ngu-canh-1",
    mode: "phan_biet_ngu_canh",
    prompt: "「頑張って」thường được dùng tự nhiên nhất trong ngữ cảnh nào?",
    options: [
      "Nói với bạn bè để động viên trước kỳ thi",
      "Viết trong hợp đồng pháp lý",
      "Trong báo cáo tài chính",
      "Trong văn bản hành chính nhà nước",
    ],
    correctIndex: 0,
    explanation: "「頑張って」mang tính thân mật, phù hợp hội thoại đời thường/động viên bạn bè.",
  },
  {
    id: "q-ngu-canh-2",
    mode: "phan_biet_ngu_canh",
    prompt: "「〜において」phù hợp nhất để dùng trong ngữ cảnh nào?",
    options: [
      "Văn bản/phát biểu trang trọng, báo cáo",
      "Nhắn tin cho bạn thân",
      "Gọi món ăn ở quán ăn",
      "Nói chuyện phiếm với hàng xóm",
    ],
    correctIndex: 0,
    explanation: "「〜において」là mẫu câu trang trọng, dùng trong văn viết/phát biểu, ít dùng trong hội thoại thường ngày.",
  },
];

export function getQuestionsByMode(mode: PracticeMode): PracticeQuestion[] {
  return sampleQuestions.filter((q) => q.mode === mode);
}

import type { PracticeMode, PracticeModeInfo } from "@/lib/types";

export const PRACTICE_MODES: PracticeModeInfo[] = [
  { mode: "chon_nghia", title: "Chọn nghĩa đúng", description: "Xem từ tiếng Nhật, chọn đúng nghĩa tiếng Việt trong 4 đáp án." },
  { mode: "dien_tu", title: "Điền từ vào câu", description: "Điền từ vựng còn thiếu vào chỗ trống trong câu ví dụ." },
  { mode: "chon_tro_tu", title: "Chọn trợ từ đúng", description: "Chọn trợ từ (は/が/を/に...) phù hợp để hoàn thành câu." },
  { mode: "sap_xep_cau", title: "Sắp xếp câu", description: "Sắp xếp các từ/cụm từ cho sẵn thành một câu tiếng Nhật đúng ngữ pháp." },
  { mode: "chon_cach_dung", title: "Chọn cách dùng tự nhiên", description: "So sánh các câu gần giống nhau, chọn câu tự nhiên và phù hợp ngữ cảnh nhất." },
  { mode: "phan_biet_ngu_canh", title: "Phân biệt ngữ cảnh", description: "Phân biệt cách dùng từ trong đề thi, đời thường và công việc." },
];

export interface PracticeQuestion {
  id: string;
  mode: PracticeMode;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * Câu hỏi mẫu được viết sao cho mỗi câu có một đáp án tốt nhất rõ ràng.
 * Khi thêm dữ liệu thật, không sinh câu hỏi trợ từ/cách dùng chỉ từ danh sách
 * particles; phải dựa trên cả câu và ngữ cảnh để tránh nhiều đáp án cùng đúng.
 */
export const sampleQuestions: PracticeQuestion[] = [
  {
    id: "q-chon-nghia-1",
    mode: "chon_nghia",
    prompt: "締め切り",
    options: ["Hạn chót, deadline", "Cuộc họp", "Đối tác", "Bài tập về nhà"],
    correctIndex: 0,
    explanation: "「締め切り（しめきり）」là hạn cuối phải hoàn thành hoặc nộp một việc gì đó.",
  },
  {
    id: "q-chon-nghia-2",
    mode: "chon_nghia",
    prompt: "確認する",
    options: ["Cố gắng", "Xác nhận, kiểm tra lại", "Mong chờ", "Đặt trước"],
    correctIndex: 1,
    explanation: "「確認する（かくにんする）」là xác nhận hoặc kiểm tra để chắc chắn nội dung/tình trạng là đúng.",
  },
  {
    id: "q-dien-tu-1",
    mode: "dien_tu",
    prompt: "明日の___は何時からですか。（cuộc họp）",
    options: ["会議", "宿題", "予約", "久しぶり"],
    correctIndex: 0,
    explanation: "「明日の会議は何時からですか。」= Cuộc họp ngày mai bắt đầu từ mấy giờ?",
  },
  {
    id: "q-dien-tu-2",
    mode: "dien_tu",
    prompt: "レストランを___しました。（đặt chỗ）",
    options: ["確認", "予約", "会議", "締め切り"],
    correctIndex: 1,
    explanation: "「レストランを予約しました。」là cách nói tự nhiên: Tôi đã đặt chỗ/đặt bàn ở nhà hàng.",
  },
  {
    id: "q-tro-tu-1",
    mode: "chon_tro_tu",
    prompt: "車___気をつけてください。",
    options: ["に", "を", "で", "へ"],
    correctIndex: 0,
    explanation: "Đối tượng cần chú ý dùng「〜に気をつける」→「車に気をつけてください」.",
  },
  {
    id: "q-tro-tu-2",
    mode: "chon_tro_tu",
    prompt: "明日の会議___出ます。",
    options: ["を", "に", "で", "へ"],
    correctIndex: 1,
    explanation: "Tham dự một cuộc họp dùng「会議に出る」. Ở đây「に」đánh dấu sự kiện mình tham gia.",
  },
  {
    id: "q-sap-xep-1",
    mode: "sap_xep_cau",
    prompt: "Sắp xếp: 提出して / ください / を / 報告書",
    options: ["報告書を提出してください", "提出してください報告書を", "を報告書提出してください", "ください提出して報告書を"],
    correctIndex: 0,
    explanation: "「報告書を提出してください。」= Vui lòng nộp báo cáo. 「を」đánh dấu tân ngữ của「提出する」.",
  },
  {
    id: "q-sap-xep-2",
    mode: "sap_xep_cau",
    prompt: "Sắp xếp: 楽しみに / 旅行を / しています / 来週の",
    options: ["来週の旅行を楽しみにしています", "楽しみに来週の旅行をしています", "しています来週の旅行を楽しみに", "旅行を来週の楽しみにしています"],
    correctIndex: 0,
    explanation: "Mẫu tự nhiên là「名詞＋を楽しみにしています」→「来週の旅行を楽しみにしています。」",
  },
  {
    id: "q-cach-dung-1",
    mode: "chon_cach_dung",
    prompt: "Bạn đến muộn trong cuộc hẹn với khách hàng. Câu xin lỗi nào phù hợp nhất?",
    options: ["遅れて申し訳ございません。", "遅れてごめん。", "遅れた、悪い。", "遅刻、すみません。"],
    correctIndex: 0,
    explanation: "Với khách hàng,「遅れて申し訳ございません」tự nhiên và đủ trang trọng. Các lựa chọn còn lại quá thân mật hoặc không tự nhiên trong ngữ cảnh này.",
  },
  {
    id: "q-cach-dung-2",
    mode: "chon_cach_dung",
    prompt: "Cấp trên giao việc và bạn muốn đáp rằng mình đã hiểu. Câu nào phù hợp nhất?",
    options: ["承知しました。", "了解！", "オッケー。", "わかった。"],
    correctIndex: 0,
    explanation: "「承知しました」là cách đáp lịch sự, phù hợp khi nhận yêu cầu/chỉ thị trong công việc. Với bạn bè thì cách nói này có thể quá trang trọng.",
  },
  {
    id: "q-ngu-canh-1",
    mode: "phan_biet_ngu_canh",
    prompt: "「頑張って！」phù hợp tự nhiên nhất với tình huống nào dưới đây?",
    options: ["Động viên bạn bè trước kỳ thi", "Viết điều khoản trong hợp đồng", "Ghi số liệu trong báo cáo tài chính", "Viết văn bản hành chính"],
    correctIndex: 0,
    explanation: "「頑張って！」thường dùng để động viên trong giao tiếp. Trong văn bản pháp lý, tài chính hoặc hành chính thì không phù hợp.",
  },
  {
    id: "q-ngu-canh-2",
    mode: "phan_biet_ngu_canh",
    prompt: "「〜において」phù hợp nhất với ngữ cảnh nào?",
    options: ["Báo cáo hoặc phát biểu trang trọng", "Nhắn tin thân mật cho bạn", "Gọi món ở quán ăn", "Nói chuyện phiếm với hàng xóm"],
    correctIndex: 0,
    explanation: "「〜において」là cách diễn đạt trang trọng, thường gặp trong văn viết, báo cáo và phát biểu. Hội thoại thường ngày thường dùng「で」hoặc cách nói đơn giản hơn.",
  },
];

export function getQuestionsByMode(mode: PracticeMode): PracticeQuestion[] {
  return sampleQuestions.filter((q) => q.mode === mode);
}

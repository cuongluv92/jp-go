import type { LearningProgress, VocabularyWord } from "@/lib/types";

const DAY_MS = 24 * 60 * 60 * 1000;

function isoDaysFromNow(days: number): string {
  return new Date(Date.now() + days * DAY_MS).toISOString();
}

/** Tạo nhanh một `LearningProgress`, cho phép ghi đè từng phần khi cần. */
function progress(partial: Partial<LearningProgress> = {}): LearningProgress {
  return {
    status: "chua_hoc",
    isFavorite: false,
    timesCorrect: 0,
    timesWrong: 0,
    lastReviewedAt: null,
    nextReviewAt: null,
    intervalDays: 1,
    easeFactor: 2.5,
    repetitions: 0,
    ...partial,
  };
}

/**
 * Dữ liệu mẫu để dựng giao diện. Cấu trúc từng từ phản ánh đúng những gì file
 * Excel sẽ cung cấp (xem `lib/types.ts` và `lib/data/excel-import.ts`), cộng
 * thêm phần `progress` do app tự quản lý.
 */
export const sampleWords: VocabularyWord[] = [
  {
    id: "w-01",
    word: "会議",
    reading: "かいぎ",
    meaning: "cuộc họp",
    partOfSpeech: "danh_tu",
    level: "N4",
    topic: "Công việc",
    examples: {
      exam: {
        japanese: "明日の会議は何時からですか。",
        translation: "Cuộc họp ngày mai bắt đầu từ mấy giờ?",
      },
      daily: {
        japanese: "今日、会議が長引いて疲れた。",
        translation: "Hôm nay họp kéo dài nên mệt quá.",
      },
      work: {
        japanese: "会議室の予約をお願いします。",
        translation: "Vui lòng đặt phòng họp giúp tôi.",
      },
    },
    usage: {
      structure: "〜会議を開く／会議に出る",
      particles: "に、を、で",
      precedingElements: "定例（ていれい）、緊急（きんきゅう）",
      followingElements: "室、資料、時間",
      conjugation: "Danh từ, không chia dạng",
      notes: "Phân biệt với「打ち合わせ」(trao đổi nhỏ, không chính thức bằng).",
    },
    progress: progress({
      status: "da_nho",
      isFavorite: true,
      timesCorrect: 6,
      timesWrong: 1,
      lastReviewedAt: isoDaysFromNow(-3),
      nextReviewAt: isoDaysFromNow(-1),
      intervalDays: 4,
      easeFactor: 2.6,
      repetitions: 3,
    }),
  },
  {
    id: "w-02",
    word: "締め切り",
    reading: "しめきり",
    meaning: "hạn chót, deadline",
    partOfSpeech: "danh_tu",
    level: "N3",
    topic: "Công việc",
    examples: {
      exam: {
        japanese: "レポートの締め切りは金曜日です。",
        translation: "Hạn nộp báo cáo là thứ Sáu.",
      },
      daily: {
        japanese: "締め切りに間に合わなかった。",
        translation: "Mình đã không kịp hạn chót.",
      },
      work: {
        japanese: "締め切りを過ぎた場合はご連絡ください。",
        translation: "Nếu quá hạn nộp, vui lòng liên hệ với chúng tôi.",
      },
    },
    usage: {
      structure: "〜締め切りに間に合う／締め切りを過ぎる",
      particles: "に、を",
      precedingElements: "提出、応募、申し込み",
      followingElements: "を守る、を過ぎる",
      conjugation: "Danh từ, không chia dạng",
      notes: "Hay nhầm với「期限（きげん）」— 期限 mang tính trang trọng/pháp lý hơn.",
    },
    progress: progress({
      status: "dang_hoc",
      timesCorrect: 2,
      timesWrong: 2,
      lastReviewedAt: isoDaysFromNow(-6),
      nextReviewAt: isoDaysFromNow(0),
      intervalDays: 6,
      repetitions: 1,
    }),
  },
  {
    id: "w-03",
    word: "頑張る",
    reading: "がんばる",
    meaning: "cố gắng, nỗ lực",
    partOfSpeech: "dong_tu",
    level: "N5",
    topic: "Đời sống",
    examples: {
      exam: {
        japanese: "試験に合格するために頑張ります。",
        translation: "Tôi sẽ cố gắng để đỗ kỳ thi.",
      },
      daily: {
        japanese: "今日も一日頑張ろう！",
        translation: "Hôm nay cũng cố gắng lên nào!",
      },
      work: {
        japanese: "新しいプロジェクトも頑張ってください。",
        translation: "Mong bạn cũng cố gắng với dự án mới.",
      },
    },
    usage: {
      structure: "〜ために頑張る／頑張って〜する",
      particles: "を（頑張りを見せる）、ために",
      precedingElements: "もっと、精一杯（せいいっぱい）",
      followingElements: "ください、ます、ろう",
      conjugation: "Động từ nhóm I: 頑張る／頑張ります／頑張った／頑張って",
      notes: "Không dùng để khen bản thân (「私は頑張った」nghe hơi tự mãn trong một số ngữ cảnh trang trọng).",
    },
    progress: progress({
      status: "da_nho",
      isFavorite: true,
      timesCorrect: 10,
      timesWrong: 0,
      lastReviewedAt: isoDaysFromNow(-10),
      nextReviewAt: isoDaysFromNow(5),
      intervalDays: 15,
      easeFactor: 2.8,
      repetitions: 5,
    }),
  },
  {
    id: "w-04",
    word: "そろそろ",
    reading: "そろそろ",
    meaning: "sắp, đã đến lúc",
    partOfSpeech: "trang_tu",
    level: "N4",
    topic: "Đời sống",
    examples: {
      exam: {
        japanese: "そろそろ出発の時間です。",
        translation: "Đã đến lúc phải xuất phát rồi.",
      },
      daily: {
        japanese: "そろそろ帰ろうか。",
        translation: "Chắc mình về thôi nhỉ.",
      },
      work: {
        japanese: "そろそろ会議を始めましょう。",
        translation: "Chúng ta bắt đầu cuộc họp thôi.",
      },
    },
    usage: {
      structure: "そろそろ〜（意向形／ましょう）",
      particles: "không đi kèm trợ từ cố định",
      precedingElements: "thường đứng đầu câu",
      followingElements: "ましょう、動詞意向形、時間",
      conjugation: "Trạng từ, không chia dạng",
      notes: "Mang sắc thái nhẹ nhàng, gợi ý chứ không ra lệnh trực tiếp.",
    },
    progress: progress({
      status: "chua_hoc",
      nextReviewAt: isoDaysFromNow(0),
    }),
  },
  {
    id: "w-05",
    word: "申し訳ございません",
    reading: "もうしわけございません",
    meaning: "tôi thành thật xin lỗi (rất trang trọng)",
    partOfSpeech: "cum_tu",
    level: "N3",
    topic: "Công việc",
    examples: {
      exam: {
        japanese: "ご迷惑をおかけして申し訳ございません。",
        translation: "Tôi thành thật xin lỗi vì đã gây phiền phức cho quý vị.",
      },
      daily: {
        japanese: "遅れて申し訳ございません。",
        translation: "Xin lỗi vì tôi đến muộn ạ.",
      },
      work: {
        japanese: "資料の誤りがあり、申し訳ございませんでした。",
        translation: "Tài liệu có sai sót, tôi thành thật xin lỗi quý vị.",
      },
    },
    usage: {
      structure: "〜て申し訳ございません",
      particles: "て形 + 申し訳ございません",
      precedingElements: "ご迷惑をおかけして、遅れて",
      followingElements: "でした（quá khứ）",
      conjugation: "Cụm cố định, có thể chia quá khứ: 申し訳ございませんでした",
      notes: "Trang trọng hơn「すみません」rất nhiều; dùng với khách hàng/cấp trên.",
    },
    progress: progress({
      status: "dang_hoc",
      timesCorrect: 1,
      timesWrong: 3,
      lastReviewedAt: isoDaysFromNow(-1),
      nextReviewAt: isoDaysFromNow(-2),
      intervalDays: 1,
      repetitions: 0,
    }),
  },
  {
    id: "w-06",
    word: "予約",
    reading: "よやく",
    meaning: "đặt trước, đặt chỗ",
    partOfSpeech: "danh_tu",
    level: "N4",
    topic: "Du lịch",
    examples: {
      exam: {
        japanese: "レストランの予約を取りました。",
        translation: "Tôi đã đặt bàn ở nhà hàng.",
      },
      daily: {
        japanese: "予約したホテルはどこですか。",
        translation: "Khách sạn bạn đã đặt ở đâu vậy?",
      },
      work: {
        japanese: "会議室の予約システムが変わりました。",
        translation: "Hệ thống đặt phòng họp đã thay đổi.",
      },
    },
    usage: {
      structure: "〜を予約する／予約を取る・キャンセルする",
      particles: "を、で",
      precedingElements: "ホテル、レストラン、席",
      followingElements: "する、システム、番号",
      conjugation: "Danh từ + する（する動詞）: 予約する／予約します",
      notes: "Khác「予定（よてい）」— 予定 là kế hoạch nói chung, 予約 là đặt chỗ cụ thể.",
    },
    progress: progress({
      status: "da_nho",
      timesCorrect: 4,
      timesWrong: 0,
      lastReviewedAt: isoDaysFromNow(-8),
      nextReviewAt: isoDaysFromNow(2),
      intervalDays: 10,
      repetitions: 2,
    }),
  },
  {
    id: "w-07",
    word: "美味しい",
    reading: "おいしい",
    meaning: "ngon",
    partOfSpeech: "tinh_tu",
    level: "N5",
    topic: "Ẩm thực",
    examples: {
      exam: {
        japanese: "この店のラーメンはとても美味しいです。",
        translation: "Mì ramen của quán này rất ngon.",
      },
      daily: {
        japanese: "わあ、美味しそう！",
        translation: "Ồ, trông có vẻ ngon quá!",
      },
      work: {
        japanese: "取引先においしい和菓子をいただきました。",
        translation: "Tôi được đối tác tặng cho bánh Nhật rất ngon.",
      },
    },
    usage: {
      structure: "〜は美味しいです／美味しそう（vẻ ngoài）",
      particles: "は、が",
      precedingElements: "とても、すごく",
      followingElements: "です、そう、ですね",
      conjugation: "Tính từ đuôi い: 美味しい／美味しくない／美味しかった",
      notes: "Dạng thân mật「うまい」thường do nam giới dùng, tránh dùng với khách hàng.",
    },
    progress: progress({
      status: "da_nho",
      isFavorite: true,
      timesCorrect: 8,
      timesWrong: 1,
      lastReviewedAt: isoDaysFromNow(-15),
      nextReviewAt: isoDaysFromNow(10),
      intervalDays: 25,
      easeFactor: 2.9,
      repetitions: 6,
    }),
  },
  {
    id: "w-08",
    word: "〜において",
    reading: "〜において",
    meaning: "trong, tại, về mặt (trang trọng)",
    partOfSpeech: "tro_tu",
    level: "N2",
    topic: "Công việc",
    examples: {
      exam: {
        japanese: "本会議において、新しい方針が発表された。",
        translation: "Tại cuộc họp này, phương châm mới đã được công bố.",
      },
      daily: {
        japanese: "（あまり日常会話では使われない）現代社会において、SNSは欠かせない。",
        translation: "(Ít dùng trong hội thoại đời thường) Trong xã hội hiện đại, SNS là thứ không thể thiếu.",
      },
      work: {
        japanese: "弊社においては、リモートワークを推奨しています。",
        translation: "Tại công ty chúng tôi, làm việc từ xa được khuyến khích.",
      },
    },
    usage: {
      structure: "名詞＋において／においては／における＋名詞",
      particles: "は、では（nhấn mạnh）",
      precedingElements: "danh từ chỉ thời gian, địa điểm, lĩnh vực",
      followingElements: "は、における + danh từ bổ nghĩa",
      conjugation: "Không chia; dạng bổ nghĩa danh từ là「における」",
      notes: "Văn viết/trang trọng, tương đương「で」nhưng formal hơn; không dùng trong hội thoại thường ngày.",
    },
    progress: progress({
      status: "chua_hoc",
    }),
  },
  {
    id: "w-09",
    word: "宿題",
    reading: "しゅくだい",
    meaning: "bài tập về nhà",
    partOfSpeech: "danh_tu",
    level: "N5",
    topic: "Trường học",
    examples: {
      exam: {
        japanese: "宿題を忘れずに提出してください。",
        translation: "Hãy nhớ nộp bài tập về nhà đầy đủ.",
      },
      daily: {
        japanese: "今日の宿題、多すぎる…。",
        translation: "Bài tập hôm nay nhiều quá đi...",
      },
      work: {
        japanese: "（子供向けの表現なので職場では稀）新入社員に宿題として資料を読ませた。",
        translation: "(Hiếm dùng ở công sở) Giao cho nhân viên mới đọc tài liệu như bài tập về nhà.",
      },
    },
    usage: {
      structure: "〜宿題をする／宿題が出る",
      particles: "を、が",
      precedingElements: "多い、少ない、難しい",
      followingElements: "をする、が出る、を提出する",
      conjugation: "Danh từ, không chia dạng",
      notes: "Trong môi trường công sở ít dùng nghĩa đen; nếu dùng thường mang tính ẩn dụ.",
    },
    progress: progress({
      status: "dang_hoc",
      timesCorrect: 3,
      timesWrong: 1,
      lastReviewedAt: isoDaysFromNow(-2),
      nextReviewAt: isoDaysFromNow(-1),
      intervalDays: 2,
      repetitions: 1,
    }),
  },
  {
    id: "w-10",
    word: "承知しました",
    reading: "しょうちしました",
    meaning: "tôi đã hiểu, tôi xin tuân theo (trang trọng)",
    partOfSpeech: "cum_tu",
    level: "N3",
    topic: "Công việc",
    examples: {
      exam: {
        japanese: "「明日までにお願いします」「承知しました」",
        translation: "\"Nhờ anh/chị làm xong trước ngày mai\" \"Tôi đã rõ.\"",
      },
      daily: {
        japanese: "（友達にはあまり使わない）了解、じゃあ後でね。",
        translation: "(Ít dùng với bạn bè) Ok, vậy lát gặp nhé.",
      },
      work: {
        japanese: "ご指示の件、承知しました。すぐに対応いたします。",
        translation: "Về việc anh/chị chỉ đạo, tôi đã rõ. Tôi sẽ xử lý ngay.",
      },
    },
    usage: {
      structure: "（相手の依頼・指示）＋承知しました",
      particles: "không cần trợ từ, dùng độc lập",
      precedingElements: "はい、かしこまりました（đồng nghĩa, trang trọng hơn）",
      followingElements: "。すぐに〜いたします",
      conjugation: "Cụm cố định thể lịch sự quá khứ; thể thường không tự nhiên",
      notes: "Lịch sự hơn「わかりました」và phù hợp với cấp trên/khách hàng; không dùng「了解しました」với cấp trên.",
    },
    progress: progress({
      status: "chua_hoc",
    }),
  },
  {
    id: "w-11",
    word: "楽しみにしています",
    reading: "たのしみにしています",
    meaning: "tôi rất mong chờ điều đó",
    partOfSpeech: "cum_tu",
    level: "N4",
    topic: "Đời sống",
    examples: {
      exam: {
        japanese: "来週の旅行を楽しみにしています。",
        translation: "Tôi rất mong chờ chuyến du lịch tuần sau.",
      },
      daily: {
        japanese: "今度のイベント、楽しみにしてるよ！",
        translation: "Sự kiện lần này, tớ mong chờ lắm đó!",
      },
      work: {
        japanese: "貴社とのお取引を楽しみにしております。",
        translation: "Chúng tôi rất mong chờ được hợp tác với quý công ty.",
      },
    },
    usage: {
      structure: "名詞＋を楽しみにしています",
      particles: "を",
      precedingElements: "旅行、イベント、再会",
      followingElements: "います、おります（khiêm nhường ngữ）",
      conjugation: "〜にする + ている: 楽しみにする／楽しみにしている／楽しみにしていた",
      notes: "Thể khiêm nhường công sở：楽しみにしております。",
    },
    progress: progress({
      status: "da_nho",
      timesCorrect: 5,
      timesWrong: 0,
      lastReviewedAt: isoDaysFromNow(-4),
      nextReviewAt: isoDaysFromNow(3),
      intervalDays: 7,
      repetitions: 3,
    }),
  },
  {
    id: "w-12",
    word: "確認する",
    reading: "かくにんする",
    meaning: "xác nhận, kiểm tra lại",
    partOfSpeech: "dong_tu",
    level: "N4",
    topic: "Công việc",
    examples: {
      exam: {
        japanese: "内容をもう一度確認してください。",
        translation: "Vui lòng xác nhận lại nội dung một lần nữa.",
      },
      daily: {
        japanese: "電気消したか確認した？",
        translation: "Đã kiểm tra tắt điện chưa?",
      },
      work: {
        japanese: "資料に誤りがないか確認いたします。",
        translation: "Tôi sẽ kiểm tra xem tài liệu có sai sót gì không.",
      },
    },
    usage: {
      structure: "〜を確認する／確認いたします（khiêm nhường）",
      particles: "を、が",
      precedingElements: "内容、日程、金額",
      followingElements: "する、いたします、ください",
      conjugation: "Danh từ + する: 確認する／確認します／確認した／確認して",
      notes: "Trong email công việc thường dùng「確認いたします」／「ご確認ください」.",
    },
    progress: progress({
      status: "dang_hoc",
      timesCorrect: 4,
      timesWrong: 2,
      lastReviewedAt: isoDaysFromNow(-5),
      nextReviewAt: isoDaysFromNow(-3),
      intervalDays: 2,
      repetitions: 1,
    }),
  },
  {
    id: "w-13",
    word: "久しぶり",
    reading: "ひさしぶり",
    meaning: "lâu rồi không gặp",
    partOfSpeech: "danh_tu",
    level: "N4",
    topic: "Đời sống",
    examples: {
      exam: {
        japanese: "彼と会うのは久しぶりだった。",
        translation: "Đó là lần gặp anh ấy sau một thời gian dài.",
      },
      daily: {
        japanese: "久しぶり！元気だった？",
        translation: "Lâu rồi không gặp! Dạo này khỏe không?",
      },
      work: {
        japanese: "お久しぶりです。ご無沙汰しております。",
        translation: "Đã lâu không gặp quý vị. Xin lỗi vì lâu nay chưa liên lạc.",
      },
    },
    usage: {
      structure: "久しぶりに＋動詞／お久しぶりです（lịch sự）",
      particles: "に",
      precedingElements: "お（thể lịch sự お久しぶり）",
      followingElements: "です、だった、に会う",
      conjugation: "Danh từ/trạng từ, không chia dạng động từ",
      notes: "Với khách hàng/cấp trên nên dùng「ご無沙汰しております」thay vì「久しぶり」.",
    },
    progress: progress({
      status: "chua_hoc",
      nextReviewAt: isoDaysFromNow(-4),
    }),
  },
  {
    id: "w-14",
    word: "気をつける",
    reading: "きをつける",
    meaning: "cẩn thận, chú ý",
    partOfSpeech: "dong_tu",
    level: "N5",
    topic: "Đời sống",
    examples: {
      exam: {
        japanese: "車に気をつけてください。",
        translation: "Hãy chú ý xe cộ.",
      },
      daily: {
        japanese: "風邪、気をつけてね。",
        translation: "Chú ý cảm lạnh nhé.",
      },
      work: {
        japanese: "納期に気をつけて作業を進めてください。",
        translation: "Hãy chú ý thời hạn giao và tiến hành công việc.",
      },
    },
    usage: {
      structure: "〜に気をつける",
      particles: "に、を",
      precedingElements: "車、風邪、言葉遣い",
      followingElements: "ください、ます、ましょう",
      conjugation: "Động từ nhóm II: 気をつける／気をつけます／気をつけた",
      notes: "Khác「注意する」— 気をつける mang sắc thái quan tâm/thân mật hơn, 注意する trung tính/nghiêm túc hơn.",
    },
    progress: progress({
      status: "da_nho",
      timesCorrect: 7,
      timesWrong: 1,
      lastReviewedAt: isoDaysFromNow(-20),
      nextReviewAt: isoDaysFromNow(-1),
      intervalDays: 20,
      easeFactor: 2.7,
      repetitions: 4,
    }),
  },
];

import type { VocabExample } from "@/lib/types";

type ExampleOverride = Partial<Pick<VocabExample, "exampleJp" | "exampleVi" | "clozeJp" | "answer" | "focusNote">>;

/**
 * Hậu kiểm độc lập vòng 4: sửa dấu câu Nhật lọt vào bản dịch Việt,
 * các bản dịch máy móc/sai sắc thái và một số câu Nhật cần tự nhiên hơn.
 */
const FINAL4_OVERRIDES: Record<string, ExampleOverride> = {
  "itazura#3": {
    exampleVi: "Vì trò nghịch của anh ấy mà cuộc họp đã bị gián đoạn.",
  },
  "ichibu#1": {
    exampleJp: "この意見は学生の一部の意見にすぎない。",
    exampleVi: "Ý kiến này chỉ là ý kiến của một bộ phận sinh viên.",
    clozeJp: "この意見は学生の_____の意見にすぎない。",
    answer: "一部",
  },
  "kouji#3": {
    exampleVi: "Trong thời gian thi công, chúng tôi thành thật xin lỗi vì đã gây bất tiện.",
  },
  "kokusan#2": {
    exampleVi: "Đúng là hàng sản xuất trong nước vẫn khiến mình yên tâm hơn nhỉ.",
  },
  "sangyou#2": {
    exampleVi: "Ngành công nghiệp IT có vẻ sẽ còn phát triển nữa nhỉ.",
  },
  "zangyou#2": {
    exampleVi: "Lại làm thêm giờ à? Vất vả nhỉ.",
  },
  "jinsei#2": {
    exampleVi: "Cuộc đời có đủ chuyện xảy ra nhỉ.",
  },
  "style#2": {
    exampleVi: "Phong cách này đang thịnh hành nhỉ.",
  },
  "seigen#2": {
    exampleVi: "Giới hạn thời gian khá gắt nhỉ.",
  },
  "seizou#2": {
    exampleVi: "Mình muốn xem thử quá trình sản xuất ghê.",
  },
  "seichou#1": {
    exampleVi: "Trẻ con lớn nhanh thật nhỉ.",
  },
  "seichou#2": {
    exampleVi: "Dạo này bạn trưởng thành hẳn ra nhỉ.",
  },
  "seiyou#2": {
    exampleVi: "Cái này có thiết kế kiểu phương Tây nhỉ.",
  },
  "sekiyu#2": {
    exampleVi: "Giá dầu mỏ lại tăng nữa rồi nhỉ.",
  },
  "zentai#2": {
    exampleVi: "Nhìn tổng thể thì khá ổn nhỉ.",
  },
  "sotogawa#2": {
    exampleVi: "Áo khoác này bị bẩn ở mặt ngoài kìa.",
  },
  "dai1#2": {
    exampleVi: "Hay là mua thêm một chiếc xe nữa nhỉ.",
  },
  "taikai#2": {
    exampleVi: "Mong là mình có thể vô địch giải đấu này.",
  },
  "henka#3": {
    exampleVi: "Chúng tôi sẽ nhanh chóng ứng phó với những thay đổi của thị trường.",
  },

  "sawagi#3": {
    exampleVi: "Một tin báo sai đã gây xôn xao lớn trong công ty.",
    focusNote: "誤報 = thông tin/tin báo sai, không phải 噂 (tin đồn).",
  },
  "sankou#3": {
    exampleVi: "Chúng tôi đang tham khảo các trường hợp của công ty khác để xem xét một hệ thống mới.",
  },
  "jitsuryoku#3": {
    exampleVi: "Chúng tôi đã áp dụng hệ thống đánh giá dựa trên năng lực thực tế.",
  },
  "kako#3": {
    exampleVi: "Chúng tôi đã phân tích dựa trên dữ liệu trong quá khứ.",
  },
  "jijou#3": {
    exampleJp: "事情をご説明した上で、ご理解いただけますと幸いです。",
    exampleVi: "Sau khi trình bày hoàn cảnh, chúng tôi rất mong quý vị thông cảm.",
    clozeJp: "_____をご説明した上で、ご理解いただけますと幸いです。",
    answer: "事情",
  },
};

export function applyTangoN3Final4Override(input: VocabExample): VocabExample {
  const override = FINAL4_OVERRIDES[`${input.vocabId}#${input.exampleNo}`];
  return override ? { ...input, ...override } : input;
}

export type LessonRow = {
  jp: string;
  vi: string;
  note?: string;
  heading?: boolean;
  formula?: "ohm" | "drop" | "solution" | "series" | "parallel" | "parallel-alt" | "parallel-ratio";
} | { diagram: "examples" | "circuit" | "potential" | "internal" | "exercise" | "combinations" };

// Dấu ** đánh dấu từ/cụm in đỏ trên ảnh sách, ở cả hai cột Nhật và Việt.
export const lesson: Record<number, LessonRow[]> = {
  2: [
    { jp: "オームの法則 といえば 電圧÷電流＝抵抗", vi: "Định luật Ohm · Điện áp chia dòng điện bằng điện trở", heading: true },
    { diagram: "examples" },
    { jp: "電気回路", vi: "Mạch điện", heading: true },
    {
      jp: "上図のように電池に電球を接続すると、電球が点灯します。電池には**電流**（電気の流れ）を流すための電気的な圧力、すなわち**電圧**があり、電圧により電流が流れて電球が点灯します。このように、電流の流れにより仕事を行う回路を**電気回路**といいます。電気自動車や電車のモータ回路、家電製品の回路など、電気を利用する機器のすべてが電気回路で構成されています。",
      vi: "Khi nối bóng đèn với pin như hình trên, bóng đèn sẽ sáng. Pin có một sức đẩy điện để tạo ra **dòng điện (電流)**, gọi là **điện áp (電圧)**. Nhờ điện áp, dòng điện chạy qua và làm bóng đèn sáng. Mạch thực hiện công việc nhờ dòng điện như vậy gọi là **mạch điện (電気回路)**. Các thiết bị dùng điện đều có mạch điện, chẳng hạn mạch động cơ của ô tô điện và tàu điện, hoặc mạch trong thiết bị gia dụng.",
    },
    {
      jp: "一方、電池やバッテリーのように電圧を発生し、電流を流す源となるものを**電源**といい、電流が流れて光を発したりモータを回したりするなど、仕事をするものを**負荷**といいます。電気を利用して負荷で仕事をするためには、電流が流れる回路、つまり電気回路が必要になるのです。",
      vi: "Thiết bị tạo điện áp và cung cấp dòng điện như pin hay ắc quy gọi là **nguồn điện (電源)**. Thiết bị thực hiện công việc khi có dòng điện chạy qua, chẳng hạn phát sáng hoặc quay động cơ, gọi là **tải (負荷)**. Để tải dùng điện thực hiện công việc, cần có đường cho dòng điện chạy, tức là mạch điện.",
      note: "Trong hình, pin là nguồn và bóng đèn là tải. Muốn đèn sáng, cần một vòng mạch kín.",
    },
    {
      jp: "また、電球のような負荷は電流の流れを妨げており、電流の流れを妨げる大きさ、すなわち電流の通しにくさのことを、**電気抵抗**または**抵抗**といいます。",
      vi: "Tải như bóng đèn cản trở dòng điện. Mức cản trở dòng điện, tức mức độ khó để dòng điện chạy qua, gọi là **điện trở (電気抵抗)** hoặc **điện trở (抵抗)**.",
    },
    {
      jp: "電圧、電流、抵抗（電気抵抗）の量記号と単位記号は、次のように表します。",
      vi: "Ký hiệu đại lượng (量記号) và ký hiệu đơn vị (単位記号) của điện áp, dòng điện và điện trở được viết như sau.",
    },
    {
      jp: "POINT　電圧、電流、抵抗の量記号\nといえば **V、I、R**",
      vi: "Ghi nhớ: ký hiệu đại lượng của điện áp, dòng điện và điện trở lần lượt là **V, I, R**.",
    },
    {
      jp: "表1-1-1 量記号と単位記号\n電圧：V［V］ボルト\n電流：I［A］アンペア\n抵抗（電気抵抗）：R［Ω］オーム",
      vi: "Bảng 1‑1‑1 · Ký hiệu đại lượng và đơn vị\nĐiện áp (電圧) · V [V], volt\nDòng điện (電流) · I [A], ampe\nĐiện trở (抵抗) · R [Ω], ôm",
      note: "Trong V [V], chữ V đầu là ký hiệu đại lượng, chữ V trong ngoặc là ký hiệu đơn vị volt.",
    },
    {
      jp: "※1 量記号：電圧、電流などの物理的な量を表す記号を量記号といい、日本産業規格（JIS）で決められた文字を用います。",
      vi: "Chú thích 1. Ký hiệu đại lượng (量記号) biểu thị đại lượng vật lý như điện áp và dòng điện. Sách dùng các chữ cái theo Tiêu chuẩn công nghiệp Nhật Bản (JIS).",
    },
  ],
  3: [
    { jp: "オームの法則", vi: "Định luật Ohm", heading: true },
    {
      jp: "図1-1-1のように電球などの負荷に電圧 V［V］を加えると、電流 I［A］が流れます。このとき、電圧 V［V］を電流 I［A］で割った値が、抵抗 R［Ω］になります。これを、**オームの法則**といいます。",
      vi: "Khi đặt điện áp V [V] lên tải như bóng đèn ở hình 1‑1‑1, dòng điện I [A] chạy qua. Điện áp V [V] chia cho dòng điện I [A] cho ta điện trở R [Ω]. Đây là **định luật Ohm (オームの法則)**.",
    },
    { diagram: "circuit" },
    {
      jp: "直流回路のオームの法則 といえば **電圧÷電流＝抵抗**\n抵抗 R［Ω］は、電圧 V［V］を電流 I［A］で割った値。\n電流 I［A］は、電圧 V［V］を抵抗 R［Ω］で割った値。\n電圧 V［V］は、抵抗 R［Ω］と電流 I［A］を掛けた値。",
      vi: "Định luật Ohm trong mạch một chiều (直流回路) · **Điện áp chia dòng điện bằng điện trở**.\nĐiện trở R [Ω] bằng điện áp chia dòng điện.\nDòng điện I [A] bằng điện áp chia điện trở.\nĐiện áp V [V] bằng điện trở nhân dòng điện.",
      note: "Nhân chéo hai vế của R/1 = V/I được R × I = 1 × V. Từ đó, chia hai vế cho R để tính I.",
      formula: "ohm",
    },
    { jp: "電位差、電圧、起電力", vi: "Hiệu điện thế, điện áp và suất điện động", heading: true },
    {
      jp: "水は水位の高いところから低いところへ流れます。これは水位差があるためで、水位差により水圧ができて、水が流れるのです。この理由は回路図にも当てはまります。",
      vi: "Nước chảy từ nơi có mực nước cao xuống nơi có mực nước thấp. Chênh lệch mực nước tạo áp lực khiến nước chảy. Có thể dùng cách hình dung này cho mạch điện.",
    },
    {
      jp: "図1-1-2の電池（電源）の端子間には、水位差に相当する**電位差**があり、水圧に相当する**電圧**が抵抗に加わり、水流に相当する**電流**が流れると考えます。",
      vi: "Giữa hai cực của pin (nguồn điện) ở hình 1‑1‑2 có **hiệu điện thế (電位差)**, tương tự chênh lệch mực nước. **Điện áp (電圧)** đặt lên điện trở giống như áp lực nước, còn **dòng điện (電流)** chạy qua giống như dòng nước.",
      note: "Điện thế của một điểm phụ thuộc mốc 0 V. Hiệu điện thế giữa hai điểm giữ nguyên khi đổi mốc.",
    },
    { diagram: "potential" },
  ],
  4: [
    {
      jp: "電流を流そうとする力の強さを、**起電力**といいます。起電力のあるところには必ず電位差が生じます。電池は化学作用で起電力をつくり、発電機は電磁誘導作用（第1部第6章を参照）で起電力をつくります。電位、電位差、電圧を表す量記号はいずれも **V**、起電力を表す量記号は **E** です。単位は、いずれも**ボルト［V］**です。",
      vi: "**Suất điện động (起電力)** đặc trưng cho khả năng của nguồn tạo ra hiệu điện thế. Pin tạo suất điện động nhờ phản ứng hóa học, còn máy phát điện dùng cảm ứng điện từ (xem phần 1, chương 6). Sách dùng **E** cho suất điện động và **V** cho điện thế, hiệu điện thế hoặc điện áp. Các đại lượng này đều tính bằng **volt (V)**.",
    },
    { jp: "電源の起電力と内部抵抗", vi: "Suất điện động và điện trở trong của nguồn", heading: true },
    {
      jp: "図1-1-3のように、電池のような電源は、**起電力 E［V］**と**内部抵抗 r［Ω］**が**直列**に接続された回路で表すことができます。例えば、起電力 E［V］が 1.6 V の電池に豆電球などの負荷を接続したとき、豆電球に加わる電圧 V［V］が 1.4 V であったとすると、差の電圧 0.2 V（1.6 V − 1.4 V ＝ 0.2 V）が電池の内部抵抗 r［Ω］に加わる電圧となります。",
      vi: "Có thể mô hình hóa pin bằng nguồn lý tưởng có **suất điện động E (起電力)** mắc **nối tiếp (直列)** với **điện trở trong r (内部抵抗)**, như hình 1‑1‑3. Ví dụ, nếu pin có suất điện động 1,6 V và điện áp trên bóng đèn là 1,4 V, thì phần chênh lệch 0,2 V là độ sụt áp trên điện trở trong của pin.",
      note: "Khi pin cấp dòng cho tải, điện áp trên tải nhỏ hơn suất điện động một lượng bằng độ sụt áp trên điện trở trong.",
    },
    { diagram: "internal" },
    { jp: "練習問題 01 · オームの法則", vi: "Bài tập 01 · Định luật Ohm", heading: true },
    {
      jp: "図の電圧 V［V］と電源の内部抵抗 r［Ω］は。",
      vi: "Tính điện áp V [V] trong hình và điện trở trong r [Ω] của nguồn.",
    },
    { diagram: "exercise" },
    {
      jp: "解き方",
      vi: "Cách giải (解き方)",
      note: "Dùng R (điện trở tải) và r (điện trở trong) phân biệt, cùng đơn vị Ω. V = RI = 102 V; r = (E − V)/I ≈ 0,59 Ω.",
      formula: "solution",
    },
    {
      jp: "解説\n負荷抵抗の電圧 V は、負荷抵抗 R × 負荷電流 I です。内部抵抗 r は、（起電力 E − 負荷電圧 V）÷ 負荷電流 I です。",
      vi: "Giải thích (解説). Điện áp V trên tải bằng điện trở tải R nhân dòng điện tải I. Điện trở trong r bằng (suất điện động E − điện áp tải V) chia cho dòng điện tải I.",
    },
    {
      jp: "解答　**V = 102 V　r = 0.59 Ω**",
      vi: "Đáp án: **V = 102 V; r ≈ 0,59 Ω**.",
    },
    {
      jp: "※電源の内部抵抗 r が無視できる場合は、E = V なので、E と V はどちらも電圧の文字記号として使われます。",
      vi: "Khi có thể bỏ qua điện trở trong r của nguồn, E = V. Khi đó, cả E và V đều được dùng làm ký hiệu điện áp.",
      note: "E = V là kết quả của giả thiết bỏ qua điện trở trong (r = 0 hoặc độ sụt áp nội bộ có thể bỏ qua). Nếu r khác 0, với nguồn đang cấp dòng, V = E − Ir.",
    },
  ],
  5: [
    {
      jp: "2抵抗の直列合成抵抗 といえば 和\n並列合成抵抗 といえば 和分の積",
      vi: "Điện trở tương đương của hai điện trở mắc nối tiếp bằng tổng.\nĐiện trở tương đương của hai điện trở mắc song song bằng tích chia tổng.",
      heading: true,
    },
    {
      jp: "2抵抗の直列合成抵抗と並列合成抵抗",
      vi: "Điện trở tương đương của hai điện trở mắc nối tiếp và mắc song song",
      heading: true,
    },
    {
      jp: "2個以上の抵抗を1列に接続する方法を**直列接続**といい、抵抗の両端を同じところに接続する方法を**並列接続**といいます。",
      vi: "Cách nối hai điện trở trở lên thành một dãy gọi là **mắc nối tiếp (直列接続)**; cách nối hai đầu của các điện trở vào cùng hai điểm tương ứng gọi là **mắc song song (並列接続)**.",
    },
    {
      jp: "2抵抗を直列接続した場合の**合成抵抗**は、**2抵抗の和**に等しくなります。一方、2抵抗を並列に接続したときの合成抵抗は、**和分の積（2抵抗の積 ÷ 和）**で求められます。",
      vi: "Khi mắc nối tiếp hai điện trở, **điện trở tương đương (合成抵抗)** bằng **tổng hai điện trở**. Ngược lại, khi mắc song song hai điện trở, điện trở tương đương tính theo **tích chia tổng (和分の積)**: tích hai điện trở chia cho tổng của chúng.",
    },
    { diagram: "combinations" },
    {
      jp: "POINT　2抵抗の直列合成抵抗 R₀ といえば **和**",
      vi: "Ghi nhớ: điện trở tương đương R₀ của hai điện trở nối tiếp bằng **tổng**.",
      formula: "series",
      note: "Đây là hai điện trở mắc nối tiếp thực sự, cùng một dòng điện đi qua; R₁ và R₂ tính bằng Ω.",
    },
    {
      jp: "2抵抗の並列合成抵抗 R₀ といえば **和分の積**",
      vi: "Điện trở tương đương R₀ của hai điện trở song song bằng **tích chia tổng**.",
      formula: "parallel",
      note: "Hai đầu mỗi điện trở phải nối vào đúng cùng hai nút. Công thức cần R₁ + R₂ ≠ 0; trong mạch điện trở thụ động thông thường, R₁ và R₂ dương.",
    },
    {
      jp: "または、",
      vi: "Hoặc có thể biến đổi thành:",
      formula: "parallel-alt",
      note: "Dạng biến đổi R₂/(1 + R₂/R₁) còn đòi hỏi R₁ ≠ 0. Đây là điều kiện bổ sung để phép chia hợp lệ, không phải một dòng nguyên văn trong sách.",
    },
    {
      jp: "R₂を大きい方の値、R₁を小さい方の値とすると",
      vi: "Nếu đặt R₂ là điện trở có giá trị lớn hơn và R₁ là điện trở có giá trị nhỏ hơn thì:",
      formula: "parallel-ratio",
      note: "“Tỷ số điện trở” ở mẫu là R₂/R₁ (lớn chia nhỏ). Mẫu số lớn hơn 1 khi hai điện trở dương; do đó điện trở tương đương nhỏ hơn điện trở nhỏ nhất.",
    },
    {
      jp: "分圧と分流の式",
      vi: "Công thức chia điện áp và chia dòng điện",
      heading: true,
    },
    {
      jp: "2抵抗を直列接続したとき、各抵抗の**分電圧**は、全体の電圧 V₀［V］を抵抗の大きさの比で**比例配分**します（R₁とR₂の比で分ける）。または、回路電流 I［A］に、各抵抗値を掛けると考えても同じです。2抵抗の並列回路において、全体の電流を I₀［A］としたとき、各抵抗の**分路電流**は、抵抗の比で**逆比例配分**します。",
      vi: "Khi mắc nối tiếp hai điện trở, **điện áp chia trên từng điện trở (分電圧)** được phân chia **tỷ lệ thuận (比例配分)** với giá trị điện trở từ điện áp tổng V₀ [V] (tức theo tỷ lệ R₁ : R₂). Cũng có thể lấy dòng điện I [A] trong mạch nhân với giá trị từng điện trở để được điện áp tương ứng. Trong mạch hai điện trở mắc song song, nếu dòng điện tổng là I₀ [A], thì **dòng điện trong từng nhánh (分路電流)** được phân chia **tỷ lệ nghịch (逆比例配分)** với các giá trị điện trở.",
      note: "Lý do: mắc nối tiếp thì hai điện trở có cùng dòng nên V₁ : V₂ = R₁ : R₂; mắc song song có cùng điện áp nên I₁ : I₂ = R₂ : R₁. Các công thức chi tiết tiếp theo thuộc trang sau, không tự gộp sang trang 5.",
    },
  ],
};

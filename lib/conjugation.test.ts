import { describe, expect, it } from "vitest";

import { conjugateIAdjective, conjugateNaAdjective, conjugateVerb, getConjugation } from "@/lib/conjugation";

describe("conjugateVerb — godan", () => {
  it("書く (く-ending, âm tiện いて/いた) — đầy đủ các thể", () => {
    expect(conjugateVerb("書く", "godan")).toEqual({
      kind: "verb",
      dictionaryForm: "書く",
      masuForm: "書きます",
      teForm: "書いて",
      naiForm: "書かない",
      naiTaForm: "書かなかった",
      taForm: "書いた",
      potentialForm: "書ける",
      volitionalForm: "書こう",
      passiveForm: "書かれる",
      causativeForm: "書かせる",
      causativePassiveForm: "書かせられる",
      imperativeForm: "書け",
      conditionalForm: "書けば",
    });
  });

  it("行く là ngoại lệ của nhóm く: 行って/行った, các thể khác vẫn theo quy tắc thường", () => {
    const result = conjugateVerb("行く", "godan");
    expect(result.teForm).toBe("行って");
    expect(result.taForm).toBe("行った");
    expect(result.masuForm).toBe("行きます");
    expect(result.naiForm).toBe("行かない");
    expect(result.naiTaForm).toBe("行かなかった");
    expect(result.passiveForm).toBe("行かれる");
    expect(result.causativeForm).toBe("行かせる");
  });

  it("cụm て行く／ていく cũng dùng って/った", () => {
    expect(conjugateVerb("持って行く", "godan").teForm).toBe("持って行って");
    expect(conjugateVerb("持って行く", "godan").taForm).toBe("持って行った");
    expect(conjugateVerb("連れていく", "godan").teForm).toBe("連れていって");
    expect(conjugateVerb("連れていく", "godan").taForm).toBe("連れていった");
  });

  it("kính ngữ godan đặc biệt dùng い trước ます và 命令形 cố định", () => {
    expect(conjugateVerb("下さる", "godan").masuForm).toBe("下さいます");
    expect(conjugateVerb("下さる", "godan").imperativeForm).toBe("下さい");
    expect(conjugateVerb("なさる", "godan").masuForm).toBe("なさいます");
    expect(conjugateVerb("なさる", "godan").imperativeForm).toBe("なさい");
    expect(conjugateVerb("いらっしゃる", "godan").masuForm).toBe("いらっしゃいます");
    expect(conjugateVerb("いらっしゃる", "godan").imperativeForm).toBe("いらっしゃい");
    expect(conjugateVerb("おっしゃる", "godan").masuForm).toBe("おっしゃいます");
    expect(conjugateVerb("おっしゃる", "godan").imperativeForm).toBe("おっしゃい");
  });

  it("ある dùng phủ định bất quy tắc ない/なかった", () => {
    const result = conjugateVerb("ある", "godan");
    expect(result.naiForm).toBe("ない");
    expect(result.naiTaForm).toBe("なかった");
  });

  it("bỏ nhãn phân biệt nghĩa ①/② trước khi chia", () => {
    const result = conjugateVerb("いただく①", "godan");
    expect(result.dictionaryForm).toBe("いただく");
    expect(result.masuForm).toBe("いただきます");
    expect(result.teForm).toBe("いただいて");
  });

  it("飲む (む-ending, âm tiện んで/んだ) — đầy đủ các thể", () => {
    const result = conjugateVerb("飲む", "godan");
    expect(result.masuForm).toBe("飲みます");
    expect(result.teForm).toBe("飲んで");
    expect(result.taForm).toBe("飲んだ");
    expect(result.naiForm).toBe("飲まない");
    expect(result.naiTaForm).toBe("飲まなかった");
    expect(result.potentialForm).toBe("飲める");
    expect(result.volitionalForm).toBe("飲もう");
    expect(result.passiveForm).toBe("飲まれる");
    expect(result.causativeForm).toBe("飲ませる");
    expect(result.causativePassiveForm).toBe("飲ませられる");
    expect(result.imperativeForm).toBe("飲め");
    expect(result.conditionalForm).toBe("飲めば");
  });

  it("話す (す-ending, âm tiện して/した) — không co rút khi thêm hậu tố", () => {
    const result = conjugateVerb("話す", "godan");
    expect(result.masuForm).toBe("話します");
    expect(result.teForm).toBe("話して");
    expect(result.taForm).toBe("話した");
    expect(result.causativeForm).toBe("話させる");
    expect(result.causativePassiveForm).toBe("話させられる");
  });
});

describe("conjugateVerb — ichidan", () => {
  it("食べる — đầy đủ các thể, passive/potential trùng chữ", () => {
    expect(conjugateVerb("食べる", "ichidan")).toEqual({
      kind: "verb",
      dictionaryForm: "食べる",
      masuForm: "食べます",
      teForm: "食べて",
      naiForm: "食べない",
      naiTaForm: "食べなかった",
      taForm: "食べた",
      potentialForm: "食べられる",
      volitionalForm: "食べよう",
      passiveForm: "食べられる",
      causativeForm: "食べさせる",
      causativePassiveForm: "食べさせられる",
      imperativeForm: "食べろ",
      conditionalForm: "食べれば",
    });
  });
});

describe("conjugateVerb — suru", () => {
  it("する đứng một mình — đầy đủ các thể", () => {
    expect(conjugateVerb("する", "suru")).toEqual({
      kind: "verb",
      dictionaryForm: "する",
      masuForm: "します",
      teForm: "して",
      naiForm: "しない",
      naiTaForm: "しなかった",
      taForm: "した",
      potentialForm: "できる",
      volitionalForm: "しよう",
      passiveForm: "される",
      causativeForm: "させる",
      causativePassiveForm: "させられる",
      imperativeForm: "しろ",
      conditionalForm: "すれば",
    });
  });

  it("確認する (từ ghép + する chỉ chia phần する)", () => {
    const result = conjugateVerb("確認する", "suru");
    expect(result.passiveForm).toBe("確認される");
    expect(result.causativeForm).toBe("確認させる");
    expect(result.causativePassiveForm).toBe("確認させられる");
    expect(result.imperativeForm).toBe("確認しろ");
    expect(result.conditionalForm).toBe("確認すれば");
    expect(result.naiTaForm).toBe("確認しなかった");
  });
});

describe("conjugateVerb — kuru", () => {
  it("来る bất quy tắc — đầy đủ các thể", () => {
    expect(conjugateVerb("来る", "kuru")).toEqual({
      kind: "verb",
      dictionaryForm: "来る",
      masuForm: "来ます",
      teForm: "来て",
      naiForm: "来ない",
      naiTaForm: "来なかった",
      taForm: "来た",
      potentialForm: "来られる",
      volitionalForm: "来よう",
      passiveForm: "来られる",
      causativeForm: "来させる",
      causativePassiveForm: "来させられる",
      imperativeForm: "来い",
      conditionalForm: "来れば",
    });
  });

  it("từ ghép + 来る chỉ chia phần 来る", () => {
    const result = conjugateVerb("持って来る", "kuru");
    expect(result.masuForm).toBe("持って来ます");
    expect(result.teForm).toBe("持って来て");
    expect(result.naiForm).toBe("持って来ない");
    expect(result.taForm).toBe("持って来た");
  });
});

describe("conjugateIAdjective", () => {
  it("高い (quy tắc thường) — đầy đủ các thể", () => {
    expect(conjugateIAdjective("高い")).toEqual({
      kind: "i_adjective",
      dictionaryForm: "高い",
      negativeForm: "高くない",
      pastForm: "高かった",
      negativePastForm: "高くなかった",
      teForm: "高くて",
      conditionalForm: "高ければ",
    });
  });

  it("良い là ngoại lệ, chia theo gốc よ chứ không phải 良", () => {
    expect(conjugateIAdjective("良い")).toEqual({
      kind: "i_adjective",
      dictionaryForm: "良い",
      negativeForm: "よくない",
      pastForm: "よかった",
      negativePastForm: "よくなかった",
      teForm: "よくて",
      conditionalForm: "よければ",
    });
  });

  it("không đưa nhãn nghĩa vào cách chia tính từ", () => {
    expect(conjugateIAdjective("おかしい①").negativeForm).toBe("おかしくない");
  });
});

describe("conjugateNaAdjective", () => {
  it("静か — đầy đủ các thể", () => {
    expect(conjugateNaAdjective("静か")).toEqual({
      kind: "na_adjective",
      dictionaryForm: "静かだ",
      negativeForm: "静かではない",
      pastForm: "静かだった",
      negativePastForm: "静かではなかった",
      teForm: "静かで",
      conditionalForm: "静かなら",
    });
  });

  it("chấp nhận dữ liệu hiển thị có sẵn đuôi な", () => {
    expect(conjugateNaAdjective("ユニークな").dictionaryForm).toBe("ユニークだ");
  });
});

describe("getConjugation", () => {
  it("ưu tiên dictionaryForm riêng thay vì nhãn hiển thị", () => {
    const result = getConjugation({
      word: "伺う①",
      dictionaryForm: "伺う",
      partOfSpeech: "verb",
      verbClass: "godan",
    });
    expect(result?.kind).toBe("verb");
    if (result?.kind === "verb") expect(result.masuForm).toBe("伺います");
  });
});

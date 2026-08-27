import { describe, expect, it } from "vitest";

import { conjugateIAdjective, conjugateNaAdjective, conjugateVerb } from "@/lib/conjugation";

describe("conjugateVerb — godan", () => {
  it("書く (く-ending, âm tiện いて/いた)", () => {
    expect(conjugateVerb("書く", "godan")).toEqual({
      kind: "verb",
      dictionaryForm: "書く",
      masuForm: "書きます",
      teForm: "書いて",
      naiForm: "書かない",
      taForm: "書いた",
      potentialForm: "書ける",
      volitionalForm: "書こう",
    });
  });

  it("行く là ngoại lệ duy nhất của nhóm く: 行って/行った", () => {
    const result = conjugateVerb("行く", "godan");
    expect(result.teForm).toBe("行って");
    expect(result.taForm).toBe("行った");
    expect(result.masuForm).toBe("行きます");
    expect(result.naiForm).toBe("行かない");
  });

  it("飲む (む-ending, âm tiện んで/んだ)", () => {
    const result = conjugateVerb("飲む", "godan");
    expect(result.masuForm).toBe("飲みます");
    expect(result.teForm).toBe("飲んで");
    expect(result.taForm).toBe("飲んだ");
    expect(result.naiForm).toBe("飲まない");
    expect(result.potentialForm).toBe("飲める");
    expect(result.volitionalForm).toBe("飲もう");
  });

  it("話す (す-ending, âm tiện して/した)", () => {
    const result = conjugateVerb("話す", "godan");
    expect(result.masuForm).toBe("話します");
    expect(result.teForm).toBe("話して");
    expect(result.taForm).toBe("話した");
  });
});

describe("conjugateVerb — ichidan", () => {
  it("食べる", () => {
    expect(conjugateVerb("食べる", "ichidan")).toEqual({
      kind: "verb",
      dictionaryForm: "食べる",
      masuForm: "食べます",
      teForm: "食べて",
      naiForm: "食べない",
      taForm: "食べた",
      potentialForm: "食べられる",
      volitionalForm: "食べよう",
    });
  });
});

describe("conjugateVerb — suru", () => {
  it("する đứng một mình", () => {
    expect(conjugateVerb("する", "suru")).toEqual({
      kind: "verb",
      dictionaryForm: "する",
      masuForm: "します",
      teForm: "して",
      naiForm: "しない",
      taForm: "した",
      potentialForm: "できる",
      volitionalForm: "しよう",
    });
  });

  it("確認する (từ ghép + する chỉ chia phần する)", () => {
    expect(conjugateVerb("確認する", "suru")).toEqual({
      kind: "verb",
      dictionaryForm: "確認する",
      masuForm: "確認します",
      teForm: "確認して",
      naiForm: "確認しない",
      taForm: "確認した",
      potentialForm: "確認できる",
      volitionalForm: "確認しよう",
    });
  });
});

describe("conjugateVerb — kuru", () => {
  it("来る bất quy tắc", () => {
    expect(conjugateVerb("来る", "kuru")).toEqual({
      kind: "verb",
      dictionaryForm: "来る",
      masuForm: "来ます",
      teForm: "来て",
      naiForm: "来ない",
      taForm: "来た",
      potentialForm: "来られる",
      volitionalForm: "来よう",
    });
  });
});

describe("conjugateIAdjective", () => {
  it("高い (quy tắc thường)", () => {
    expect(conjugateIAdjective("高い")).toEqual({
      kind: "i_adjective",
      dictionaryForm: "高い",
      negativeForm: "高くない",
      pastForm: "高かった",
      negativePastForm: "高くなかった",
      teForm: "高くて",
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
    });
  });
});

describe("conjugateNaAdjective", () => {
  it("静か", () => {
    expect(conjugateNaAdjective("静か")).toEqual({
      kind: "na_adjective",
      dictionaryForm: "静かだ",
      negativeForm: "静かではない",
      pastForm: "静かだった",
      negativePastForm: "静かではなかった",
      teForm: "静かで",
    });
  });
});

import { describe, expect, it } from "vitest";

import { conjugateIAdjective, conjugateVerb } from "@/lib/conjugation";

describe("advanced conjugation regressions", () => {
  it("chia đúng các cụm kết thúc bằng いい nhưng không làm hỏng かわいい", () => {
    expect(conjugateIAdjective("かっこいい").negativeForm).toBe("かっこよくない");
    expect(conjugateIAdjective("かっこいい").pastForm).toBe("かっこよかった");
    expect(conjugateIAdjective("気分がいい").negativeForm).toBe("気分がよくない");
    expect(conjugateIAdjective("気持ちがいい").teForm).toBe("気持ちがよくて");
    expect(conjugateIAdjective("体にいい").conditionalForm).toBe("体によければ");
    expect(conjugateIAdjective("ちょうどいい").pastForm).toBe("ちょうどよかった");
    expect(conjugateIAdjective("かわいい").negativeForm).toBe("かわいくない");
  });

  it("chia riêng từng chính tả trong entry nhiều biến thể", () => {
    const mixed = conjugateVerb("交ざる・混ざる", "godan");
    expect(mixed.masuForm).toBe("交ざります／混ざります");
    expect(mixed.teForm).toBe("交ざって／混ざって");

    const toku = conjugateVerb("解く・溶く・溶かす", "godan");
    expect(toku.masuForm).toBe("解きます／溶きます／溶かします");
    expect(toku.teForm).toBe("解いて／溶いて／溶かして");
    expect(toku.naiForm).toBe("解かない／溶かない／溶かさない");

    const koeru = conjugateVerb("超える・越える", "ichidan");
    expect(koeru.masuForm).toBe("超えます／越えます");
    expect(koeru.taForm).toBe("超えた／越えた");
  });

  it("không hiển thị các thể nâng cao giả tạo của ある", () => {
    const aru = conjugateVerb("ある", "godan");
    expect(aru.naiForm).toBe("ない");
    expect(aru.naiTaForm).toBe("なかった");
    expect(aru.potentialForm).toBe("—");
    expect(aru.passiveForm).toBe("—");
    expect(aru.causativeForm).toBe("—");
    expect(aru.causativePassiveForm).toBe("—");
    expect(aru.conditionalForm).toBe("あれば");
  });

  it("Nをする dùng Nができる ở khả năng thay vì Nをできる", () => {
    expect(conjugateVerb("お話をする", "suru").potentialForm).toBe("お話ができる");
    expect(conjugateVerb("うがいをする", "suru").potentialForm).toBe("うがいができる");
    expect(conjugateVerb("確認する", "suru").potentialForm).toBe("確認できる");
  });
});

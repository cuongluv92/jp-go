import { describe, expect, it } from "vitest";

import { segmentJapaneseText } from "@/lib/japanese-text";
import type { PartOfSpeech, VocabWord, VerbClass } from "@/lib/types";

const word = (id: string, surface: string): VocabWord => ({ id, word: surface, progress: {} }) as VocabWord;

const readableWord = (
  id: string,
  surface: string,
  reading: string,
  partOfSpeech: PartOfSpeech,
  verbClass: VerbClass = null,
): VocabWord =>
  ({
    ...word(id, surface),
    dictionaryForm: surface,
    reading,
    partOfSpeech,
    verbClass,
  }) as VocabWord;

describe("segmentJapaneseText", () => {
  it("ưu tiên từ dài nhất và giữ nguyên phần không khớp", () => {
    const result = segmentJapaneseText("明日の会議に参加します。", [word("1", "会議"), word("2", "参加する"), word("3", "明日")]);
    expect(result.map((part) => [part.text, part.word?.id ?? null])).toEqual([
      ["明日", "3"],
      ["の", null],
      ["会議", "1"],
      ["に参加します。", null],
    ]);
  });

  it("không biến trợ từ một kana thành từ có thể bấm", () => {
    expect(segmentJapaneseText("学校に行く", [word("1", "に")]).map((part) => part.word)).toEqual([null]);
  });

  it("nhận diện dạng từ điển trong câu khi từ hiển thị có nhãn nghĩa", () => {
    const marked = {
      ...word("1", "伺う①"),
      dictionaryForm: "伺う",
      reading: "うかがう",
    };
    const result = segmentJapaneseText("明日、先生に伺う。", [marked]);
    expect(result.find((part) => part.word)?.text).toBe("伺う");
    expect(result.find((part) => part.word)?.word?.id).toBe("1");
  });

  it("ưu tiên phiên âm đã kiểm tra tay và vẫn giữ liên kết từ khi tìm được", () => {
    const target = { ...word("1", "資料"), dictionaryForm: "資料", reading: "しりょう", partOfSpeech: "noun" as const, verbClass: null } as VocabWord;
    const result = segmentJapaneseText("資料を確認します。", [target], [{ surface: "資料", reading: "しりょう" }]);
    expect(result[0]).toMatchObject({ text: "資料", reading: "しりょう", word: { id: "1" } });
  });

  it("gắn furigana an toàn cho 五段動詞 dù N5 chưa có verb_class", () => {
    const target = readableWord("1", "書く", "かく", "verb");
    const result = segmentJapaneseText("名前を書いてください。", [target]);
    expect(result.find((part) => part.word?.id === "1")).toMatchObject({ text: "書", reading: "か" });
  });

  it("gắn furigana an toàn cho 一段動詞 dù chưa có verb_class", () => {
    const target = readableWord("1", "食べる", "たべる", "verb");
    const result = segmentJapaneseText("朝ご飯を食べました。", [target]);
    expect(result.find((part) => part.word?.id === "1")).toMatchObject({ text: "食べ", reading: "たべ" });
  });

  it("gắn furigana phần gốc của từ ghép + する", () => {
    const target = readableWord("1", "確認する", "かくにんする", "verb");
    const result = segmentJapaneseText("資料を確認しました。", [target]);
    expect(result.find((part) => part.word?.id === "1")).toMatchObject({ text: "確認", reading: "かくにん" });
  });

  it("xử lý 来る bất quy tắc mà không sinh cách đọc くます", () => {
    const target = readableWord("1", "来る", "くる", "verb");
    const polite = segmentJapaneseText("先生が来ます。", [target]);
    const negative = segmentJapaneseText("先生は来ないです。", [target]);
    expect(polite.find((part) => part.word?.id === "1")).toMatchObject({ text: "来ます", reading: "きます" });
    expect(negative.find((part) => part.word?.id === "1")).toMatchObject({ text: "来ない", reading: "こない" });
  });

  it("dùng reading đầy đủ cho dạng chia khi verb_class đã được xác định", () => {
    const target = readableWord("1", "書く", "かく", "verb", "godan");
    const result = segmentJapaneseText("報告書を書きます。", [target]);
    const linked = result.filter((part) => part.word?.id === "1");
    expect(linked).toHaveLength(1);
    expect(linked[0]).toMatchObject({ text: "書きます", reading: "かきます" });
    expect(result[0]).toMatchObject({ text: "報告書を", word: null });
  });
});

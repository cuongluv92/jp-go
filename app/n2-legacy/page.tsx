"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";
import { useVocabulary } from "@/lib/data/vocabulary-context";

interface LegacyKanji {
  id: string;
  kanji_character: string;
  han_viet: string;
  meaning_vi_summary: string | null;
}

interface LegacyGrammar {
  id: string;
  grammar_pattern: string;
  meaning_vi: string;
}

export default function N2LegacyPage() {
  const { archivedWords } = useVocabulary();
  const [kanji, setKanji] = useState<LegacyKanji[]>([]);
  const [grammar, setGrammar] = useState<LegacyGrammar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const supabase = createClient();
      const [kanjiResult, grammarResult] = await Promise.all([
        supabase.from("jp_kanji").select("id,kanji_character,han_viet,meaning_vi_summary").eq("level", "N2_OLD").order("created_at"),
        supabase.from("jp_grammar").select("id,grammar_pattern,meaning_vi").eq("level", "N2_OLD").order("created_at"),
      ]);
      if (cancelled) return;
      setKanji((kanjiResult.data ?? []) as LegacyKanji[]);
      setGrammar((grammarResult.data ?? []) as LegacyGrammar[]);
      setLoading(false);
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold">N2 dữ liệu cũ</h1>
        <p className="mt-1 text-sm text-muted">Kho lưu riêng để tra lại. Không tính vào N2 mới.</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Link href="/vocabulary?collection=n2-chua-dat" className="rounded-xl border border-amber-200 bg-amber-50 px-2 py-3 text-center">
          <span className="block text-sm font-semibold">Từ vựng</span>
          <span className="mt-1 block text-xs text-muted">{archivedWords.length} mục</span>
        </Link>
        <a href="#legacy-kanji" className="rounded-xl border border-amber-200 bg-amber-50 px-2 py-3 text-center">
          <span className="block text-sm font-semibold">Kanji</span>
          <span className="mt-1 block text-xs text-muted">{loading ? "..." : `${kanji.length} mục`}</span>
        </a>
        <a href="#legacy-grammar" className="rounded-xl border border-amber-200 bg-amber-50 px-2 py-3 text-center">
          <span className="block text-sm font-semibold">Ngữ pháp</span>
          <span className="mt-1 block text-xs text-muted">{loading ? "..." : `${grammar.length} mục`}</span>
        </a>
      </div>

      <section id="legacy-kanji" className="flex flex-col gap-3 scroll-mt-4">
        <h2 className="text-base font-semibold">Kanji N2 cũ · {kanji.length}</h2>
        {loading ? <p className="text-sm text-muted">Đang tải...</p> : (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {kanji.map((item) => (
              <Link key={item.id} href={`/kanji/${item.id}`} className="rounded-xl border border-border bg-surface px-2 py-3 text-center shadow-sm">
                <span className="font-jp block text-2xl font-semibold">{item.kanji_character}</span>
                <span className="mt-1 block text-[11px] text-muted">{item.han_viet}</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section id="legacy-grammar" className="flex flex-col gap-3 scroll-mt-4">
        <h2 className="text-base font-semibold">Ngữ pháp N2 cũ · {grammar.length}</h2>
        {loading ? <p className="text-sm text-muted">Đang tải...</p> : (
          <div className="flex flex-col gap-2">
            {grammar.map((item) => (
              <Link key={item.id} href={`/grammar/${item.id}`} className="rounded-xl border border-border bg-surface px-3 py-3 shadow-sm">
                <span className="font-jp block text-sm font-semibold">{item.grammar_pattern}</span>
                <span className="mt-1 block text-xs text-muted">{item.meaning_vi}</span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

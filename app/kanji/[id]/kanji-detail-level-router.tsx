"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

import { KanjiDetailClient } from "./kanji-detail-client";
import { LegacyKanjiDetailClient } from "./legacy-kanji-detail-client";

type RouteMode = "n3" | "legacy" | "missing" | null;

export function KanjiDetailLevelRouter({ id }: { id: string }) {
  const [mode, setMode] = useState<RouteMode>(null);

  useEffect(() => {
    let cancelled = false;
    async function resolveLevel() {
      const supabase = createClient();
      const { data, error } = await supabase.from("jp_kanji").select("level").eq("id", id).maybeSingle();
      if (cancelled) return;
      if (error || !data) {
        setMode("missing");
        return;
      }
      setMode(data.level === "N3" ? "n3" : "legacy");
    }
    void resolveLevel();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (mode === null) {
    return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Đang tải...</p>;
  }
  if (mode === "missing") {
    return <p className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted">Không tìm thấy kanji.</p>;
  }
  return mode === "n3" ? <KanjiDetailClient id={id} /> : <LegacyKanjiDetailClient id={id} />;
}

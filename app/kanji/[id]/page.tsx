import { KanjiDetailExercises } from "@/components/kanji-detail-exercises";

import { KanjiDetailClient } from "./kanji-detail-client";

export default async function KanjiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="kanji-detail-v2 flex flex-col gap-5">
      <KanjiDetailClient id={id} />
      <KanjiDetailExercises id={id} />
    </div>
  );
}

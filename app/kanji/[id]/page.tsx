import { KanjiDetailClient } from "./kanji-detail-client";

export default async function KanjiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <KanjiDetailClient id={id} />;
}

import { KanjiDetailLevelRouter } from "./kanji-detail-level-router";

export default async function KanjiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <KanjiDetailLevelRouter id={id} />;
}

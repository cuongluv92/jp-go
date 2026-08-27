import { VocabularyDetailClient } from "./detail-client";

export default async function VocabularyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <VocabularyDetailClient id={id} />;
}

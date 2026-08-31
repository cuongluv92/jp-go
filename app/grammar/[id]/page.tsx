import { GrammarDetailClient } from "./grammar-detail-client";

export default async function GrammarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <GrammarDetailClient id={id} />;
}

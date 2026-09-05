import { GrammarDetailExercises } from "@/components/grammar-detail-exercises";

import { GrammarDetailClient } from "./grammar-detail-client";

export default async function GrammarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="grammar-detail-v2 flex flex-col gap-5">
      <GrammarDetailClient id={id} />
      <GrammarDetailExercises id={id} />
    </div>
  );
}

import { VocabularyDetailExercises } from "@/components/vocabulary-detail-exercises";

import { VocabularyDetailClient } from "./detail-client";

export default async function VocabularyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="flex flex-col gap-5">
      <VocabularyDetailClient id={id} />
      <VocabularyDetailExercises id={id} />
    </div>
  );
}

import { NextResponse } from "next/server";

import { gradeWrittenAnswer } from "@/lib/exam/answer-grading";

const MAX_INPUT_LENGTH = 4000;

/**
 * Chấm "回答練習" - xem ghi chú ở lib/exam/answer-grading.ts. Nhận nguyên văn
 * đáp án mẫu + câu người dùng gõ (client đã có answer_jp trong props câu hỏi,
 * gửi kèm luôn để route này không phải tự query lại DB).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { officialJp, userJp } = (body ?? {}) as { officialJp?: unknown; userJp?: unknown };
  if (typeof officialJp !== "string" || typeof userJp !== "string" || !userJp.trim()) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const result = await gradeWrittenAnswer(officialJp.slice(0, MAX_INPUT_LENGTH), userJp.slice(0, MAX_INPUT_LENGTH));
  return NextResponse.json(result);
}

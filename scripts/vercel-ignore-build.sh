#!/bin/bash
# Vercel "Ignored Build Step" — bỏ qua build khi commit CHỈ đổi file trong
# supabase/migrations/ (thêm dữ liệu seed, không đụng code app). Việc này
# giúp tránh vượt giới hạn số lượt build/ngày của Vercel khi merge nhiều
# migration liên tiếp (ví dụ đợt seed nội dung N4: ~40 PR chỉ thêm .sql,
# không cần build lại app mỗi lần).
#
# Exit 0 = SKIP build. Exit 1 (hoặc khác 0) = TIẾP TỤC build.
# Cấu hình: Vercel Dashboard → Project jp-go → Settings → Git →
# Ignored Build Step → chọn "Custom" → nhập: bash scripts/vercel-ignore-build.sh

set -e

CHANGED=$(git diff --name-only HEAD^ HEAD || echo "")

# Nếu không lấy được diff (VD lần build đầu tiên), luôn build cho chắc.
if [ -z "$CHANGED" ]; then
  echo "Không xác định được file thay đổi — vẫn tiến hành build."
  exit 1
fi

NON_MIGRATION=$(echo "$CHANGED" | grep -v '^supabase/migrations/' || true)

if [ -z "$NON_MIGRATION" ]; then
  echo "🛑 Chỉ có file trong supabase/migrations/ thay đổi — bỏ qua build."
  exit 0
else
  echo "✅ Có thay đổi code app — tiến hành build."
  exit 1
fi

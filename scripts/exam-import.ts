/**
 * Import trang sách (JSON do ChatGPT tạo) vào jp_exam_pages/jp_exam_sections.
 *
 *   npm run exam:import -- data/exam-import/sekou-houki/page-0065.json
 *   npm run exam:import -- data/exam-import/sekou-houki/
 *
 * Cần biến môi trường SUPABASE_URL (hoặc NEXT_PUBLIC_SUPABASE_URL) và
 * SUPABASE_SERVICE_ROLE_KEY (chỉ đặt trong .env.local ở máy/CI chạy import,
 * KHÔNG commit, KHÔNG dùng trong code phía app/UI).
 */
import { createClient } from "@supabase/supabase-js";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

import { importExamFiles } from "../lib/exam/importer";
import { createSupabaseExamImportDb } from "../lib/exam/importer-supabase";
import { getSupabaseServiceEnv } from "../lib/exam/supabase-env";

function collectJsonFiles(inputPath: string): string[] {
  const absolute = resolve(inputPath);
  const stat = statSync(absolute);

  if (stat.isFile()) {
    return [absolute];
  }

  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const entryPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(entryPath);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        files.push(entryPath);
      }
    }
  };
  walk(absolute);
  return files;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Cách dùng: npm run exam:import -- <file.json | thư mục>");
    process.exit(1);
  }

  const allFiles = args.flatMap(collectJsonFiles);
  if (allFiles.length === 0) {
    console.error("Không tìm thấy file .json nào.");
    process.exit(1);
  }

  const { url, serviceRoleKey } = getSupabaseServiceEnv();
  const client = createClient(url, serviceRoleKey, { auth: { persistSession: false } });
  const db = createSupabaseExamImportDb(client);

  const files = allFiles.map((file) => {
    try {
      return { file, raw: JSON.parse(readFileSync(file, "utf-8")) as unknown };
    } catch (err) {
      return { file, raw: { __parseError: err instanceof Error ? err.message : String(err) } };
    }
  });

  const report = await importExamFiles(db, files);

  console.log(`Created: ${report.created}`);
  console.log(`Updated: ${report.updated}`);
  console.log(`Skipped: ${report.skipped}`);
  console.log(`Errors: ${report.errors.length}`);

  if (report.errors.length > 0) {
    console.log("\nChi tiết lỗi:");
    for (const err of report.errors) {
      console.log(`- file: ${err.file}`);
      if (err.book) console.log(`  book: ${err.book}`);
      if (err.page != null) console.log(`  page: ${err.page}`);
      console.log(`  lý do: ${err.reason}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("Import thất bại:", err);
  process.exit(1);
});

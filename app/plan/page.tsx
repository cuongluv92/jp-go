"use client";

import { useState } from "react";

import { StudyPlanPanel } from "@/components/study-plan-panel";
import { StudyPlanWizard } from "@/components/study-plan-wizard";
import { clearCached } from "@/lib/data/client-cache";

type Tab = "current" | "new";

/**
 * Trang "Lộ trình" (tab riêng ở bottom nav) — có 2 tab con để tự do chuyển
 * qua lại, không mặc định khép kín vào mỗi 1 lối "xem lộ trình hiện tại":
 *   - "Học tiếp": tiến độ + Hôm nay học gì của lộ trình đang chạy.
 *   - "Chọn lộ trình mới": wizard tạo/đổi lộ trình, làm ngay tại đây không
 *     rời trang — xong quay lại tab "Học tiếp" với dữ liệu mới luôn.
 */
export default function PlanPage() {
  const [tab, setTab] = useState<Tab>("current");
  const [panelKey, setPanelKey] = useState(0);

  function handlePlanCreated() {
    clearCached("study-plan-panel-data");
    setPanelKey((k) => k + 1);
    setTab("current");
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">Lộ trình</h1>
        <p className="mt-1 text-sm text-muted">Theo dõi lộ trình đang học, hoặc chọn một lộ trình mới bất cứ lúc nào.</p>
      </div>

      <div className="grid grid-cols-2 gap-2 rounded-xl border border-border bg-surface p-1">
        <button
          type="button"
          onClick={() => setTab("current")}
          className={`rounded-lg py-2 text-sm font-semibold transition ${tab === "current" ? "bg-accent text-accent-foreground" : "text-muted"}`}
        >
          Học tiếp
        </button>
        <button
          type="button"
          onClick={() => setTab("new")}
          className={`rounded-lg py-2 text-sm font-semibold transition ${tab === "new" ? "bg-accent text-accent-foreground" : "text-muted"}`}
        >
          Chọn lộ trình mới
        </button>
      </div>

      {tab === "current" ? <StudyPlanPanel key={panelKey} /> : <StudyPlanWizard onCreated={handlePlanCreated} />}
    </div>
  );
}

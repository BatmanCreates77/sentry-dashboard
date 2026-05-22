// ────────────────
// Spend Pulse
// ────────────────

import { Receipt, TrendingUp, TrendingDown, PieChart } from "lucide-react";

export default function SpendPulsePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-text-heading">
          Spend Pulse
        </h1>
        <p className="text-text-muted mt-1 text-sm">
          Understand where every rupee goes.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: "Total Spent (MTD)", value: "₹0", icon: TrendingDown, accent: "text-red" },
          { label: "Avg Daily", value: "₹0", icon: Receipt, accent: "text-accent" },
          { label: "Categories", value: "0", icon: PieChart, accent: "text-green" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="card flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-text-muted uppercase tracking-wide">
                  {stat.label}
                </span>
                <Icon size={14} className={stat.accent} />
              </div>
              <span className="text-xl font-semibold text-text-heading">
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Placeholder: Charts */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Spending Breakdown
        </h2>
        <div className="flex flex-col items-center justify-center py-16 text-text-muted">
          <Receipt size={36} className="mb-3 opacity-30" />
          <p className="text-sm font-medium">No spending data yet</p>
          <p className="text-[12px] mt-1">
            Transaction data will appear here after syncing.
          </p>
        </div>
      </div>

      {/* Placeholder: Category List */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Top Categories
        </h2>
        <div className="space-y-3">
          {["Food & Dining", "Shopping", "Bills & Utilities", "Transport", "Entertainment"].map(
            (cat, i) => (
              <div
                key={cat}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <span className="text-sm text-text-muted">{cat}</span>
                <span className="text-sm font-medium text-text-heading font-mono">
                  ₹0
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

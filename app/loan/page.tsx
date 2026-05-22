// ────────────────
// Loan Kill Zone
// ────────────────

import { Banknote, Calendar, Percent, Zap } from "lucide-react";

export default function LoanPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-text-heading">
          Loan Kill Zone
        </h1>
        <p className="text-text-muted mt-1 text-sm">
          Your strategy to become debt-free, faster.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {[
          { label: "Total Owed", value: "₹0", icon: Banknote, accent: "text-red" },
          { label: "Monthly EMI", value: "₹0", icon: Calendar, accent: "text-yellow" },
          { label: "Avg Interest", value: "0%", icon: Percent, accent: "text-accent" },
          { label: "Debt-Free By", value: "N/A", icon: Zap, accent: "text-green" },
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
              <span className="text-lg font-semibold text-text-heading">
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Placeholder: Loan List */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Active Loans
        </h2>
        <div className="flex flex-col items-center justify-center py-16 text-text-muted">
          <Banknote size={36} className="mb-3 opacity-30" />
          <p className="text-sm font-medium">No active loans</p>
          <p className="text-[12px] mt-1">
            Add your loans to start tracking paydown strategies.
          </p>
        </div>
      </div>

      {/* Paydown Strategies */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Paydown Strategies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              name: "Avalanche Method",
              desc: "Pay highest interest first. Saves most money.",
              icon: Zap,
            },
            {
              name: "Snowball Method",
              desc: "Pay smallest balance first. Quick wins.",
              icon: Banknote,
            },
          ].map((strategy) => {
            const Icon = strategy.icon;
            return (
              <div
                key={strategy.name}
                className="p-4 rounded-md border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-text-heading">
                    {strategy.name}
                  </span>
                </div>
                <p className="text-[12px] text-text-muted">{strategy.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

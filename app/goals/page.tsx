// ────────────────
// Goal War Room
// ────────────────

import { Target, Plus, Flag } from "lucide-react";

export default function GoalsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-heading">
            Goal War Room
          </h1>
          <p className="text-text-muted mt-1 text-sm">
            Set, track, crush your financial goals.
          </p>
        </div>
        <button
          disabled
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-accent/10 text-accent text-sm font-medium opacity-50 cursor-not-allowed"
        >
          <Plus size={16} />
          <span>New Goal</span>
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { label: "Active Goals", value: "0", icon: Target, accent: "text-accent" },
          { label: "Total Target", value: "₹0", icon: Flag, accent: "text-green" },
          { label: "On Track", value: "0", icon: Target, accent: "text-green" },
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

      {/* Placeholder: Goal List */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Your Goals
        </h2>
        <div className="flex flex-col items-center justify-center py-16 text-text-muted">
          <Target size={36} className="mb-3 opacity-30" />
          <p className="text-sm font-medium">No goals set yet</p>
          <p className="text-[12px] mt-1">
            Set your first financial goal to get started.
          </p>
        </div>
      </div>

      {/* Template Goals */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Goal Templates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { name: "Emergency Fund", target: "₹3,00,000", time: "12 months" },
            { name: "Vacation", target: "₹1,50,000", time: "6 months" },
            { name: "New Gadget", target: "₹80,000", time: "4 months" },
            { name: "Investment", target: "₹5,00,000", time: "24 months" },
          ].map((template) => (
            <div
              key={template.name}
              className="p-3 rounded-md border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-heading">
                  {template.name}
                </span>
                <span className="text-[12px] text-text-muted">
                  {template.time}
                </span>
              </div>
              <span className="text-sm font-semibold text-accent mt-1 block">
                {template.target}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

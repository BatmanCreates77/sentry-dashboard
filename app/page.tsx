// ────────────────
// Command Deck (Home)
// ────────────────

import {
  LayoutDashboard,
  Receipt,
  Target,
  Banknote,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function CommandDeckPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-text-heading">
          Command Deck
        </h1>
        <p className="text-text-muted mt-1 text-sm">
          Your financial command center — at a glance.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "This Month", value: "₹0", icon: TrendingDown, change: "--", accent: "text-red" },
          { label: "Income", value: "₹0", icon: TrendingUp, change: "--", accent: "text-green" },
          { label: "Goals", value: "0/0", icon: Target, change: "--", accent: "text-accent" },
          { label: "Loans", value: "₹0", icon: Banknote, change: "--", accent: "text-yellow" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="card flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-text-muted uppercase tracking-wide">
                  {stat.label}
                </span>
                <Icon size={14} className={stat.accent} />
              </div>
              <span className="text-lg font-semibold text-text-heading">
                {stat.value}
              </span>
              <span className="text-[11px] text-text-muted">{stat.change}</span>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/spend"
          className="card group hover:border-accent/30 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                <Receipt size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-heading">
                  Spend Pulse
                </h3>
                <p className="text-[12px] text-text-muted mt-0.5">
                  Analyze your spending patterns
                </p>
              </div>
            </div>
            <ArrowRight
              size={16}
              className="text-text-muted group-hover:text-accent transition-colors"
            />
          </div>
        </Link>

        <Link
          href="/goals"
          className="card group hover:border-accent/30 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-green/10 flex items-center justify-center">
                <Target size={20} className="text-green" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-heading">
                  Goal War Room
                </h3>
                <p className="text-[12px] text-text-muted mt-0.5">
                  Track and crush your goals
                </p>
              </div>
            </div>
            <ArrowRight
              size={16}
              className="text-text-muted group-hover:text-accent transition-colors"
            />
          </div>
        </Link>

        <Link
          href="/loan"
          className="card group hover:border-accent/30 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-yellow/10 flex items-center justify-center">
                <Banknote size={20} className="text-yellow" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-heading">
                  Loan Kill Zone
                </h3>
                <p className="text-[12px] text-text-muted mt-0.5">
                  Strategy to become debt-free
                </p>
              </div>
            </div>
            <ArrowRight
              size={16}
              className="text-text-muted group-hover:text-accent transition-colors"
            />
          </div>
        </Link>

        <Link
          href="/log"
          className="card group hover:border-accent/30 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                <LayoutDashboard size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-heading">
                  Conversation Log
                </h3>
                <p className="text-[12px] text-text-muted mt-0.5">
                  Your AI-powered insights
                </p>
              </div>
            </div>
            <ArrowRight
              size={16}
              className="text-text-muted group-hover:text-accent transition-colors"
            />
          </div>
        </Link>
      </div>

      {/* Placeholder: Recent Activity */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Recent Activity
        </h2>
        <div className="flex flex-col items-center justify-center py-10 text-text-muted">
          <p className="text-sm">Connect your data source to see recent transactions.</p>
          <p className="text-[12px] mt-1">
            Run <code className="text-accent bg-accent/10 px-1.5 py-0.5 rounded text-[11px]">sentry_pipeline.py</code> to sync.
          </p>
        </div>
      </div>
    </div>
  );
}

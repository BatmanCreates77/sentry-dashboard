"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Receipt,
  Target,
  Banknote,
  MessageSquareText,
} from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "Deck",
    icon: LayoutDashboard,
  },
  {
    href: "/spend",
    label: "Spend",
    icon: Receipt,
  },
  {
    href: "/goals",
    label: "Goals",
    icon: Target,
  },
  {
    href: "/loan",
    label: "Loan",
    icon: Banknote,
  },
  {
    href: "/log",
    label: "Log",
    icon: MessageSquareText,
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* ─── Mobile Bottom Tabs ─── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-canvas md:hidden">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-md transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.75} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ─── Desktop Left Sidebar ─── */}
      <aside className="hidden md:flex md:flex-col md:w-56 md:h-screen md:fixed md:left-0 md:top-0 md:border-r md:border-border md:bg-canvas md:z-40">
        {/* Logo */}
        <div className="flex items-center gap-2 px-5 py-5 border-b border-border">
          <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-text-heading font-semibold text-lg tracking-tight">
            Sentry
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-text-muted hover:text-text-primary hover:bg-surface"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.25 : 1.5} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-border">
          <p className="text-[11px] text-text-muted">Gaurav &middot; Bengaluru</p>
        </div>
      </aside>
    </>
  );
}

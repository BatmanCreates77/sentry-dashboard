// ────────────────
// Conversation Log
// ────────────────

import { MessageSquareText, Clock, Search } from "lucide-react";

export default function ConversationLogPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-text-heading">
          Conversation Log
        </h1>
        <p className="text-text-muted mt-1 text-sm">
          Your AI-powered insights and interactions.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
        <input
          type="text"
          placeholder="Search conversations..."
          disabled
          className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-md text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
        />
      </div>

      {/* Placeholder: Conversation List */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Recent Conversations
        </h2>
        <div className="flex flex-col items-center justify-center py-16 text-text-muted">
          <MessageSquareText size={36} className="mb-3 opacity-30" />
          <p className="text-sm font-medium">No conversations yet</p>
          <p className="text-[12px] mt-1">
            Start chatting via Telegram to log interactions here.
          </p>
        </div>
      </div>

      {/* Insights Summary */}
      <div className="card">
        <h2 className="text-sm font-semibold text-text-heading mb-4">
          Insight Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Total Conversations", value: "0" },
            { label: "Insights Generated", value: "0" },
            { label: "Last Activity", value: "Never" },
          ].map((item) => (
            <div key={item.label} className="text-center p-4">
              <p className="text-2xl font-semibold text-text-heading">
                {item.value}
              </p>
              <p className="text-[11px] text-text-muted mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

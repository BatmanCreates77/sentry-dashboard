// ──────────────────────────────
// Sentry – TypeScript Types
// ──────────────────────────────

/** A single projection entry (goal tracker) */
export interface Projection {
  id: string;
  created_at: string;
  /** e.g. "Emergency Fund", "Trip to Manali", "New Monitor" */
  name: string;
  target_amount: number;
  current_amount: number;
  /** ISO date string for target completion */
  target_date: string;
  /** Monthly contribution */
  monthly_contribution: number;
  /** Priority order (lower = higher priority) */
  priority: number;
  /** Hex color for UI */
  color: string;
  /** Optional notes */
  notes?: string;
}

/** Weekly financial snapshot */
export interface WeeklySnapshot {
  id: string;
  created_at: string;
  /** ISO week start date */
  week_start: string;
  /** ISO week end date */
  week_end: string;
  /** Total spent across all categories */
  total_spent: number;
  /** Total income recorded */
  total_income: number;
  /** JSON string of category breakdown */
  category_breakdown: Record<string, number>;
  /** Number of transactions */
  transaction_count: number;
  /** Any insights / notes for the week */
  insights: string;
}

/** Conversation insight from Telegram bot interactions */
export interface ConversationInsight {
  id: string;
  created_at: string;
  /** ISO date */
  date: string;
  /** The user message / query */
  user_message: string;
  /** The AI response */
  agent_response: string;
  /** JSON metadata (context, entities, etc.) */
  metadata: Record<string, unknown>;
  /** Whether this was explicitly saved */
  saved: boolean;
}

/** Goal state snapshot */
export interface GoalState {
  id: string;
  created_at: string;
  /** Goal name */
  name: string;
  /** Current progress amount */
  current_amount: number;
  /** Target amount */
  target_amount: number;
  /** ISO target date */
  target_date: string;
  /** On-track / At-risk / Off-track */
  status: "on-track" | "at-risk" | "off-track";
  /** Monthly progress */
  progress_this_month: number;
  /** Hex color for UI */
  color: string;
}

/** Transaction (from SQLite source) */
export interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
  category: string;
  bank: "HDFC" | "ICICI" | "AXIS" | "unknown";
  source: "gmail" | "telegram" | "manual";
  account_type: "savings" | "credit_card" | "loan" | "emi";
}

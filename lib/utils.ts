/**
 * Format a number as Indian Rupees with Indian grouping.
 * e.g. 150000 → "₹1,50,000"
 */
export function formatINR(amount: number): string {
  const sign = amount < 0 ? "-" : "";
  const absAmount = Math.abs(amount);

  const [whole, decimal] = absAmount.toFixed(0).split(".");

  // Indian grouping: last 3 digits, then groups of 2
  const lastThree = whole.slice(-3);
  const otherNumbers = whole.slice(0, -3);

  const formatted =
    otherNumbers.length > 0
      ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
      : lastThree;

  const result = `${sign}₹${formatted}`;
  return decimal ? `${result}.${decimal}` : result;
}

/**
 * Format a date string to a readable format.
 * e.g. "2025-05-22" → "May 22, 2025"
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Get the ISO week range for a given date.
 * Returns { weekStart, weekEnd } as ISO strings.
 */
export function getWeekRange(date: Date = new Date()): {
  weekStart: string;
  weekEnd: string;
} {
  const d = new Date(date);
  const day = d.getDay();
  // Monday = 1, Sunday = 7; adjust so Monday is start of week
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const monday = new Date(d);
  monday.setDate(d.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return {
    weekStart: monday.toISOString().split("T")[0],
    weekEnd: sunday.toISOString().split("T")[0],
  };
}

/**
 * Format a number as a compact representation.
 * e.g. 150000 → "1.5L"
 */
export function formatCompactINR(amount: number): string {
  const abs = Math.abs(amount);
  const sign = amount < 0 ? "-" : "";

  if (abs >= 10000000) {
    return `${sign}₹${(abs / 10000000).toFixed(1)}Cr`;
  }
  if (abs >= 100000) {
    return `${sign}₹${(abs / 100000).toFixed(1)}L`;
  }
  if (abs >= 1000) {
    return `${sign}₹${(abs / 1000).toFixed(1)}K`;
  }
  return `${sign}₹${abs}`;
}

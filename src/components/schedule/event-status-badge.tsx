import { cn } from "@/lib/utils";
import type { ScheduleEventStatus } from "@/types/schedule";

const labels: Record<ScheduleEventStatus, string> = {
  tentative: "Details pending",
  scheduled: "Scheduled",
  "in-progress": "In progress",
  completed: "Completed",
  cancelled: "Cancelled",
  postponed: "Postponed",
};

const styles: Record<ScheduleEventStatus, string> = {
  tentative: "border-amber-700/30 bg-amber-50 text-amber-900",
  scheduled: "border-emerald-700/25 bg-emerald-50 text-emerald-900",
  "in-progress": "border-blue-700/25 bg-blue-50 text-blue-900",
  completed: "border-[var(--border-strong)] bg-[var(--surface-muted)] text-[var(--text-primary)]",
  cancelled: "border-red-700/25 bg-red-50 text-red-900",
  postponed: "border-violet-700/25 bg-violet-50 text-violet-900",
};

export function EventStatusBadge({ status }: { status: ScheduleEventStatus }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em]",
        styles[status],
      )}
    >
      {labels[status]}
    </span>
  );
}

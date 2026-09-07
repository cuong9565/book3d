import { ArrowRight } from "lucide-react";
import { Card, Chip } from "@heroui/react";

const metrics = [
  {
    label: "Active Scholars",
    value: "18,420",
    percent: "74.1%",
    width: "74.1%",
    color: "bg-primary-container",
    dot: "bg-primary-container",
  },
  {
    label: "Returning Institutional Researchers",
    value: "14,190",
    percent: "57.1%",
    width: "57.1%",
    color: "bg-secondary",
    dot: "bg-secondary",
  },
  {
    label: "New Academic Registrations",
    value: "6,210",
    percent: "25.0%",
    width: "25%",
    color: "bg-tertiary",
    dot: "bg-tertiary",
  },
];

export default function UserGrowthCard() {
  return (
    <Card className="border-none bg-surface-container-lowest p-5 shadow-sm sm:p-6 xl:col-span-5">
      <div className="flex items-start justify-between gap-3 border-b border-surface-container-high/40 pb-4">
        <div>
          <h2 className="text-label-md font-bold text-on-surface">
            User Growth & Cohort Retention
          </h2>

          <p className="mt-0.5 text-label-sm text-on-surface-variant">
            Active researchers vs new institutional signups
          </p>
        </div>

        <Chip
          size="sm"
          variant="primary"
          color="accent"
          className="shrink-0"
        >
          2024 Cycle
        </Chip>
      </div>

      <div className="mt-5 space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-1.5 flex items-center justify-between gap-3 text-label-sm">
              <span className="flex min-w-0 items-center gap-2 text-on-surface">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${metric.dot}`}
                />

                <span className="truncate">{metric.label}</span>
              </span>

              <div className="flex shrink-0 gap-2">
                <strong>{metric.value}</strong>
                <span className="text-outline">
                  ({metric.percent})
                </span>
              </div>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-surface-container">
              <div
                className={`h-full rounded-full ${metric.color}`}
                style={{ width: metric.width }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 rounded-xl border border-surface-container-high/40 bg-surface-container-low/60 p-4 sm:grid-cols-2">
        <div>
          <span className="text-label-sm text-outline">
            Cohort Retention
          </span>

          <p className="mt-1 text-headline-md font-bold">
            78.4%
          </p>

          <span className="text-label-sm font-semibold text-secondary">
            Top tier quartile
          </span>
        </div>

        <div>
          <span className="text-label-sm text-outline">
            Peak Reading Time
          </span>

          <p className="mt-1 text-lg font-bold">
            10:00 AM – 2:00 PM
          </p>

          <span className="text-label-sm text-on-surface-variant">
            EST / University Peak
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3">
        <span className="text-label-sm text-on-surface-variant">
          Data synchronized 4 minutes ago
        </span>

        <button className="flex items-center gap-1 text-label-sm font-semibold text-primary hover:underline">
          Detailed Breakdown
          <ArrowRight size={14} />
        </button>
      </div>
    </Card>
  );
}
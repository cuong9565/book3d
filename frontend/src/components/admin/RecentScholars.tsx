"use client";

import { UserPlus } from "lucide-react";
import { Button, Card } from "@heroui/react";

const scholars = [
  {
    name: "Alex Nguyen",
    username: "@alex.nguyen • Student",
    initials: "AN",
    time: "2h ago",
    active: true,
    className: "bg-primary-fixed text-primary",
  },
  {
    name: "Dr. Evelyn Reed",
    username: "Educator / Faculty",
    initials: "ER",
    time: "5h ago",
    active: true,
    className: "bg-secondary-fixed text-secondary",
  },
  {
    name: "Marcus Chen",
    username: "@m.chen88 • Undergrad",
    initials: "MC",
    time: "1d ago",
    active: false,
    className: "bg-tertiary-fixed text-tertiary",
  },
  {
    name: "Sophia Patel",
    username: "Content Reviewer",
    initials: "SP",
    time: "2d ago",
    active: true,
    className: "bg-primary-fixed text-primary",
  },
  {
    name: "David Kim",
    username: "@dkim_astro • Student",
    initials: "DK",
    time: "3d ago",
    active: true,
    className: "bg-surface-container-highest text-on-surface",
  },
];

export default function RecentScholars() {
  return (
    <Card className="border-none bg-surface-container-lowest p-5 shadow-sm sm:p-6 xl:col-span-4">
      <div className="flex items-center justify-between gap-3 border-b border-surface-container-high/40 pb-4">
        <div>
          <h2 className="text-label-md font-bold text-on-surface">
            Recent Scholars
          </h2>

          <p className="mt-0.5 text-label-sm text-on-surface-variant">
            Active academic reader registrations
          </p>
        </div>

        <button className="text-label-sm font-semibold text-primary hover:underline">
          View All
        </button>
      </div>

      <div className="divide-y divide-surface-container-high/40">
        {scholars.map((scholar) => (
          <div
            key={scholar.name}
            className="flex items-center justify-between gap-3 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-label-md font-semibold ${scholar.className}`}
              >
                {scholar.initials}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="truncate text-label-md font-semibold text-on-surface">
                    {scholar.name}
                  </span>

                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      scholar.active
                        ? "bg-secondary"
                        : "bg-tertiary"
                    }`}
                  />
                </div>

                <p className="truncate text-label-sm text-outline">
                  {scholar.username}
                </p>
              </div>
            </div>

            <span className="shrink-0 text-label-sm text-outline">
              {scholar.time}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-surface-container-high/40 pt-4">
        <Button
          className="w-full bg-surface-container text-on-surface"
        >
            <UserPlus size={19} className="text-primary" />
          Invite Institutional Users
        </Button>
      </div>
    </Card>
  );
}
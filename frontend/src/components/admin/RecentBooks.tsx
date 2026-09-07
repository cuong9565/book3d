"use client";

import {
  Box,
  MoreVertical,
  Search,
  Rocket,
  HeartPulse,
  Landmark,
  Microscope,
  Timer,
} from "lucide-react";

import { Button, Card, SearchField } from "@heroui/react";

const books = [
  {
    title: "Dinosaur World: Mesozoic Era",
    author: "Dr. Alan Grant",
    category: "Paleontology",
    model: "T-Rex Cranium",
    date: "Oct 24, 2024",
    status: "Published",
    icon: Box,
    iconClass: "bg-primary-fixed text-primary",
  },
  {
    title: "Cardiovascular Architecture",
    author: "Dr. Evelyn Reed",
    category: "Human Anatomy",
    model: "4-Chamber Heart 3D",
    date: "Oct 22, 2024",
    status: "Published",
    icon: HeartPulse,
    iconClass: "bg-error-container text-error",
  },
  {
    title: "Orbital Mechanics & Space",
    author: "Prof. Marcus Vance",
    category: "Astrophysics",
    model: "James Webb Telescope",
    date: "Oct 19, 2024",
    status: "Published",
    icon: Rocket,
    iconClass: "bg-primary-fixed text-primary",
  },
  {
    title: "Ancient Rome: Architecture",
    author: "Elena Rostova",
    category: "World History",
    model: "Pending 3D Scan",
    date: "Oct 18, 2024",
    status: "Draft",
    icon: Landmark,
    iconClass: "bg-tertiary-fixed text-tertiary",
  },
  {
    title: "Microbial Worlds & Cells",
    author: "Dr. Sarah Lin",
    category: "Microbiology",
    model: "Bacteriophage T4",
    date: "Oct 15, 2024",
    status: "Published",
    icon: Microscope,
    iconClass: "bg-surface-container-highest text-primary",
  },
];

export default function RecentBooks() {
  return (
    <Card className="min-w-0 border-none bg-surface-container-lowest p-5 shadow-sm sm:p-6 xl:col-span-8">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-label-md font-bold text-on-surface">
            Recent Books & Publications
          </h2>

          <p className="mt-0.5 text-label-sm text-on-surface-variant">
            Latest educational curriculum additions and interactive 3D
            pairings
          </p>
        </div>

        <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:block">
                <SearchField name="search" aria-label="Filter table...">
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                            <SearchField.Input className="hidden sm:block w-40" placeholder="Filter table..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
            </div>
          

          <button className="whitespace-nowrap text-label-sm font-semibold text-primary hover:underline">
            View All (1,482)
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-210 border-collapse text-left">
          <thead>
            <tr className="border-b border-surface-container-high text-label-sm uppercase tracking-wider text-outline">
              <th className="px-3 py-3 font-semibold">
                Book Title & Author
              </th>

              <th className="px-3 py-3 font-semibold">
                Category
              </th>

              <th className="px-3 py-3 font-semibold">
                3D Model
              </th>

              <th className="px-3 py-3 font-semibold">
                Status
              </th>

              <th className="px-3 py-3 font-semibold">
                Published
              </th>

              <th className="px-3 py-3 text-right font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-surface-container-high/60">
            {books.map((book) => {
              const Icon = book.icon;

              return (
                <tr
                  key={book.title}
                  className="group transition-colors hover:bg-surface-container-low/40"
                >
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-13 w-10 shrink-0 items-center justify-center rounded-lg ${book.iconClass}`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <p className="max-w-55 truncate text-label-md font-semibold text-on-surface group-hover:text-primary">
                          {book.title}
                        </p>

                        <p className="truncate text-label-sm text-outline">
                          {book.author}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-3 py-3">
                    <span className="rounded-md bg-surface-container px-2.5 py-1 text-label-sm text-on-surface-variant">
                      {book.category}
                    </span>
                  </td>

                  <td className="px-3 py-3">
                    <span
                      className={`
                        inline-flex items-center gap-1.5 rounded-full
                        px-2.5 py-1 text-label-sm font-semibold
                        ${
                          book.status === "Draft"
                            ? "bg-surface-container-high text-outline"
                            : "bg-secondary-container/50 text-secondary"
                        }
                      `}
                    >
                      {book.status === "Draft" ? (
                        <Timer size={14} />
                      ) : (
                        <Box size={14} />
                      )}

                      {book.model}
                    </span>
                  </td>

                  <td className="px-3 py-3">
                    <span
                      className={`
                        inline-flex items-center gap-1.5 rounded-full
                        px-2.5 py-1 text-label-sm font-semibold
                        ${
                          book.status === "Published"
                            ? "bg-secondary-container/40 text-secondary"
                            : "bg-tertiary-fixed text-tertiary"
                        }
                      `}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {book.status}
                    </span>
                  </td>

                  <td className="px-3 py-3 text-label-sm text-on-surface-variant">
                    {book.date}
                  </td>

                  <td className="px-3 py-3 text-right">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="outline"
                      aria-label={`Actions for ${book.title}`}
                    >
                      <MoreVertical size={18} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col gap-3 border-t border-surface-container-high/40 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-label-sm text-outline">
          Showing{" "}
          <strong className="text-on-surface">
            1 to 5
          </strong>{" "}
          of 1,482 entries
        </span>

        <div className="flex items-center gap-1 overflow-x-auto">
          <button
            disabled
            className="rounded-lg bg-surface-container-low px-3 py-1.5 text-label-sm text-outline"
          >
            Previous
          </button>

          <button className="rounded-lg bg-primary-container px-3 py-1.5 text-label-sm font-semibold text-on-primary">
            1
          </button>

          {[2, 3].map((page) => (
            <button
              key={page}
              className="rounded-lg px-3 py-1.5 text-label-sm hover:bg-surface-container"
            >
              {page}
            </button>
          ))}

          <span className="px-1 text-outline">...</span>

          <button className="rounded-lg px-3 py-1.5 text-label-sm hover:bg-surface-container">
            297
          </button>

          <button className="rounded-lg border border-surface-container-high px-3 py-1.5 text-label-sm hover:bg-surface-container">
            Next
          </button>
        </div>
      </div>
    </Card>
  );
}
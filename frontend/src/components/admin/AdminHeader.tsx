"use client";

import {
  Bell,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";

import { Input, SearchField } from "@heroui/react";

export default function AdminHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 h-16 border-b border-surface-container-high/60 bg-surface-container-lowest/90 shadow-[0_1px_8px_rgba(0,0,0,0.02)] backdrop-blur-xl lg:left-72">
      <div className="flex h-full items-center justify-between gap-3 px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="ml-12 flex min-w-0 items-center gap-2 text-label-md lg:ml-0">
          <span className="text-outline">Admin</span>

          <ChevronRight
            size={15}
            className="shrink-0 text-outline"
          />

          <span className="truncate font-semibold text-on-surface">
            Dashboard Overview
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="hidden md:block">
            <SearchField name="search" aria-label="Search 3D models, books, users...">
                <SearchField.Group>
                    <SearchField.SearchIcon />
                        <SearchField.Input className="hidden sm:block w-40" placeholder="Search 3D models, books, users..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
          </div>

          {/* System status */}
          <div className="hidden xl:flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-container/40 px-3 py-1.5 text-label-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />

            <span className="font-semibold text-on-secondary-container">
              System Healthy
            </span>

            <span className="text-outline">•</span>

            <span className="text-on-surface-variant">
              All 3D Nodes Live
            </span>
          </div>

          {/* Notification */}
          <button
            aria-label="Notifications"
            className="relative rounded-xl p-2 text-on-surface-variant hover:bg-surface-container"
          >
            <Bell size={21} />

            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-[10px] font-bold text-on-error">
              3
            </span>
          </button>

          {/* User */}
          <button className="flex items-center gap-2 rounded-xl p-1 pl-2 hover:bg-surface-container">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-fixed text-label-sm font-bold text-primary">
              AR
            </div>

            <ChevronDown
              size={17}
              className="hidden text-outline sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
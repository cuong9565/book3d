"use client";

import {
  Archive,
  Box,
  BookOpen,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
  X,
  Layers3,
} from "lucide-react";

import { Button } from "@heroui/react";
import { useState } from "react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Categories",
    icon: Layers3,
  },
  {
    label: "3D Models",
    icon: Box,
  },
  {
    label: "Books",
    icon: BookOpen,
  },
  {
    label: "Users",
    icon: Users,
  },
];

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-60 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container-lowest text-on-surface shadow-sm lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={21} />
      </button>

      {/* Mobile backdrop */}
      {open && (
        <button
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72
          flex-col justify-between
          border-r border-surface-container-high/60
          bg-surface-container-lowest
          shadow-[0_1px_8px_rgba(0,0,0,0.04)]
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div>
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-surface-container-high/40 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-container text-on-primary">
                <BookOpen size={20} />
              </div>

              <div className="flex flex-col">
                <span className="text-label-md font-bold leading-tight tracking-tight text-on-surface">
                  3D Book
                </span>

                <span className="text-label-sm font-medium leading-tight text-outline">
                  Edu3D Platform
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-outline hover:bg-surface-container lg:hidden"
            >
              <X size={19} />
            </button>
          </div>

          {/* Main menu */}
          <div className="px-4 pt-6">
            <p className="px-3 pb-2 text-label-sm font-semibold uppercase tracking-wider text-outline">
              Main Menu
            </p>

            <nav className="flex flex-col gap-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const active = index === 0;

                return (
                  <button
                    key={item.label}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center gap-3 rounded-xl px-3 py-2.5
                      text-left text-label-md transition-colors
                      ${
                        active
                          ? "bg-primary-container font-semibold text-on-primary shadow-[0_2px_8px_rgba(37,99,235,0.25)]"
                          : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-surface-container-high/40 bg-surface-container-low/40 p-4">
          <nav className="flex flex-col gap-1">
            <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-label-md text-on-surface-variant hover:bg-surface-container">
              <Settings size={20} />
              Settings
            </button>

            <button className="flex items-center gap-3 rounded-xl px-3 py-2 text-label-md text-error hover:bg-error-container">
              <LogOut size={20} />
              Logout
            </button>
          </nav>

          {/* Admin */}
          <div className="flex items-center gap-3 rounded-xl border border-surface-container-high/60 bg-surface-container-lowest p-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-label-sm font-bold text-primary">
              AR
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-label-md font-semibold text-on-surface">
                Alex Rivera
              </p>

              <p className="truncate text-label-sm font-medium text-secondary">
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
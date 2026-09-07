"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Box,
  CheckCircle2,
  Clock3,
  Download,
  GraduationCap,
  Plus,
  Timer,
  Users,
} from "lucide-react";

import { Button, Card, Chip } from "@heroui/react";

import ActivityChart from "@/components/admin/ActivityChart";
import UserGrowthCard from "@/components/admin/UserGrowthCard";
import RecentBooks from "@/components/admin/RecentBooks";
import RecentScholars from "@/components/admin/RecentScholars";

export default function AdminPage() {
  return (

                <main className="pt-16">
                <div className="p-4 sm:p-6 lg:p-8">
                    {/* Greeting */}
                    <section className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                        <h1 className="text-headline-md font-bold tracking-tight">
                            Welcome back, Alex
                        </h1>

                        <span className="text-2xl">👋</span>
                        </div>

                        <p className="mt-1 max-w-2xl text-label-md text-on-surface-variant">
                        Overview of library engagement, 3D interactive model usage,
                        and digital catalog health.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        {/* Time range */}
                        <div className="flex rounded-xl bg-surface-container-low p-1">
                        {["7 days", "Last 30 days", "3 months", "1 year"].map(
                            (item, index) => (
                            <button
                                key={item}
                                className={`rounded-lg px-3 py-2 text-label-sm transition ${
                                index === 1
                                    ? "bg-surface-container-lowest font-bold text-primary shadow-sm"
                                    : "text-on-surface-variant hover:text-on-surface"
                                }`}
                            >
                                {item}
                            </button>
                            ),
                        )}
                        </div>

                        <Button
                        variant="outline"
                        className="bg-surface-container-lowest text-on-surface-variant"
                        >
                            <Download size={17} />
                        <span className="hidden sm:inline">Export Report</span>
                        </Button>

                        <Button
                        variant="primary"
                        className="bg-primary-container font-semibold"
                        >
                            <Plus size={18} />
                        <span className="hidden sm:inline">Add New Book</span>
                        <span className="sm:hidden">Add</span>
                        </Button>
                    </div>
                    </section>

                    {/* Stats */}
                    <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <StatCard
                        title="Total Books"
                        value="1,482"
                        suffix="vols"
                        description="Across 34 educational disciplines"
                        trend="+12.4%"
                        icon={<BookOpen size={23} />}
                        iconClass="bg-primary-fixed text-primary"
                    />

                    <StatCard
                        title="Categories"
                        value="68"
                        suffix="fields"
                        description="K-12 & Higher Ed taxonomy"
                        trend="+4 this quarter"
                        icon={<Activity size={23} />}
                        iconClass="bg-tertiary-fixed text-tertiary"
                        trendPositive={false}
                    />

                    <StatCard
                        title="Interactive 3D Assets"
                        value="524"
                        suffix="scenes"
                        description="Interactive WebGL & GLTF files"
                        trend="+18.2%"
                        icon={<Box size={23} />}
                        iconClass="bg-secondary-fixed text-secondary"
                    />

                    <StatCard
                        title="Registered Scholars"
                        value="24,850"
                        suffix="users"
                        description="18,420 active this month"
                        trend="+8.7%"
                        icon={<GraduationCap size={23} />}
                        iconClass="bg-surface-container-highest text-on-surface"
                    />
                    </section>

                    {/* Analytics */}
                    <section className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
                    <Card className="border-none bg-surface-container-lowest p-5 shadow-sm sm:p-6 xl:col-span-7">
                        <ActivityChart />

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-container-low/50 px-4 py-3">
                        <Metric
                            icon={<Timer size={19} />}
                            label="Avg Session Duration"
                            value="32m 45s"
                            iconClass="text-secondary"
                        />

                        <Metric
                            icon={<CheckCircle2 size={19} />}
                            label="Reading Completion"
                            value="74.2%"
                            iconClass="text-primary"
                        />

                        <Metric
                            icon={<Box size={19} />}
                            label="3D Model Interactions"
                            value="14,920"
                            iconClass="text-tertiary"
                        />
                        </div>
                    </Card>

                    <UserGrowthCard />
                    </section>

                    {/* Bottom */}
                    <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">
                    <RecentBooks />

                    <RecentScholars />
                    </section>
                </div>
                </main>
  );
}

function Metric({
  icon,
  label,
  value,
  iconClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  iconClass: string;
}) {
  return (
    <div className="flex items-center gap-2 text-label-sm">
      <span className={iconClass}>{icon}</span>

      <span className="text-on-surface">
        {label}:{" "}
        <strong className="font-bold">{value}</strong>
      </span>
    </div>
  );
}

function StatCard({
  title,
  value,
  suffix,
  description,
  trend,
  icon,
  iconClass,
  trendPositive = true,
}: {
  title: string;
  value: string;
  suffix: string;
  description: string;
  trend: string;
  icon: React.ReactNode;
  iconClass: string;
  trendPositive?: boolean;
}) {
  return (
    <Card className="border-none bg-surface-container-lowest p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>

        <Chip
          size="sm"
          className={
            trendPositive
              ? "bg-secondary-container/40 text-secondary"
              : "bg-surface-container-high text-on-surface-variant"
          }
        >
          {trendPositive && <ArrowUpRight size={14} />}
          {trend}
        </Chip>
      </div>

      <div className="mt-4">
        <span className="text-label-sm font-semibold uppercase tracking-wider text-outline">
          {title}
        </span>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-headline-lg font-bold text-on-surface">
            {value}
          </span>

          <span className="text-label-sm text-outline">{suffix}</span>
        </div>

        <p className="mt-2 flex items-center gap-2 text-label-sm text-on-surface-variant">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {description}
        </p>
      </div>
    </Card>
  );
}
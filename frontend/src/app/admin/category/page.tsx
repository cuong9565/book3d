"use client";

import { BookOpen, Box, ChevronDown, ChevronLeft, ChevronRight, Filter, Folder, MoreHorizontal, Plus, Search, Shapes, Users } from "lucide-react";

import { Button, Card, Chip, SearchField } from "@heroui/react";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  description: string;
  books: number;
  models: number;
  users: number;
  status: "Active" | "Inactive";
  createdAt: string;
  icon: "science" | "history" | "math" | "biology" | "technology";
}

const categories: Category[] = [
  {
    id: 1,
    name: "Cổ sinh vật học",
    description: "Nghiên cứu về sự sống thời tiền sử và hóa thạch",
    books: 124,
    models: 48,
    users: 2840,
    status: "Active",
    createdAt: "12/10/2024",
    icon: "science",
  },
  {
    id: 2,
    name: "Giải phẫu người",
    description: "Cấu trúc và sự tổ chức của cơ thể người",
    books: 186,
    models: 72,
    users: 4210,
    status: "Active",
    createdAt: "10/10/2024",
    icon: "biology",
  },
  {
    id: 3,
    name: "Vật lý thiên văn",
    description: "Vật lý về các ngôi sao, thiên hà và vũ trụ",
    books: 98,
    models: 65,
    users: 3180,
    status: "Active",
    createdAt: "08/10/2024",
    icon: "science",
  },
  {
    id: 4,
    name: "Lịch sử thế giới",
    description: "Các sự kiện lịch sử, văn hóa và nền văn minh",
    books: 214,
    models: 39,
    users: 5620,
    status: "Active",
    createdAt: "05/10/2024",
    icon: "history",
  },
  {
    id: 5,
    name: "Vi sinh vật học",
    description: "Vi sinh vật, tế bào và các hệ thống sinh học",
    books: 156,
    models: 87,
    users: 3760,
    status: "Active",
    createdAt: "28/09/2024",
    icon: "biology",
  },
  {
    id: 6,
    name: "Toán học",
    description: "Các khái niệm toán học và giải quyết vấn đề",
    books: 203,
    models: 24,
    users: 6420,
    status: "Active",
    createdAt: "25/09/2024",
    icon: "math",
  },
  {
    id: 7,
    name: "Khoa học máy tính",
    description: "Thế giới máy tính, lập trình và công nghệ số",
    books: 176,
    models: 31,
    users: 5180,
    status: "Active",
    createdAt: "21/09/2024",
    icon: "technology",
  },
  {
    id: 8,
    name: "Vật lý học",
    description: "Vật chất, năng lượng và các tương tác cơ bản",
    books: 142,
    models: 56,
    users: 3970,
    status: "Inactive",
    createdAt: "18/09/2024",
    icon: "science",
  },
];

const iconConfig = {
  science: {
    icon: Shapes,
    className: "bg-primary-fixed text-primary",
  },
  history: {
    icon: Folder,
    className: "bg-tertiary-fixed text-tertiary",
  },
  math: {
    icon: Shapes,
    className: "bg-secondary-fixed text-secondary",
  },
  biology: {
    icon: Box,
    className: "bg-error-container text-error",
  },
  technology: {
    icon: Box,
    className: "bg-primary-fixed text-primary",
  },
};

export default function CategoryPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Inactive">("All");

  const filteredCategories = categories.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(search.toLowerCase()) ||
      category.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || category.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <main className="w-full bg-background p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-[1600px]">
        
        {/* tiêu đề trang */}
        <section className="mb-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                  <Folder size={17} />
                </span>
                <span className="text-label-sm font-semibold uppercase tracking-wider text-primary">
                  Quản lý thư viện
                </span>
              </div>

              <h1 className="text-headline-lg font-bold tracking-tight text-on-surface">
                Danh mục
              </h1>

              <p className="mt-1 max-w-2xl text-body-md text-on-surface-variant">
                Tổ chức thư viện giáo dục của bạn thành các danh mục cấu trúc và quản lý sách cũng như mô hình 3D liên quan.
              </p>
            </div>

            <Button variant="primary" className="w-full bg-primary-container font-semibold sm:w-auto">
              <Plus size={18} /> Thêm danh mục
            </Button>
          </div>
        </section>

        {/* Thống kê tổng quan */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <OverviewCard
            label="Tổng danh mục"
            value="68"
            description="Trên tất cả ngành học"
            icon={<Folder size={21} />}
            iconClass="bg-primary-fixed text-primary"
          />
          <OverviewCard
            label="Danh mục hoạt động"
            value="64"
            description="94.1% tổng số danh mục"
            icon={<Shapes size={21} />}
            iconClass="bg-secondary-fixed text-secondary"
          />
          <OverviewCard
            label="Sách đã phân loại"
            value="1,482"
            description="Trên tất cả danh mục"
            icon={<BookOpen size={21} />}
            iconClass="bg-tertiary-fixed text-tertiary"
          />
          <OverviewCard
            label="Mô hình 3D"
            value="524"
            description="Được liên kết với danh mục"
            icon={<Box size={21} />}
            iconClass="bg-surface-container-highest text-primary"
          />
        </section>

        {/* Thẻ bảng chính */}
        <Card className="border-none bg-surface-container-lowest shadow-sm">
          {/* Thanh công cụ tìm kiếm và lọc */}
          <div className="border-b border-surface-container-high/50 p-4 sm:p-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <SearchField name="search" aria-label="Tìm kiếm danh mục...">
                <SearchField.Group>
                  <SearchField.SearchIcon />
                  <SearchField.Input className="w-full" placeholder="Tìm kiếm danh mục..." />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>

              <div className="flex flex-col gap-2 sm:flex-row">
                {/* Bộ lọc trạng thái */}
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as "All" | "Active" | "Inactive"
                      )
                    }
                    className="h-10 w-full appearance-none rounded-xl border border-surface-container-high bg-surface-container-low px-10 pr-10 text-label-md text-on-surface outline-none transition focus:border-primary-container sm:w-40"
                  >
                    <option value="All">Tất cả trạng thái</option>
                    <option value="Active">Đang hoạt động</option>
                    <option value="Inactive">Ngưng hoạt động</option>
                  </select>

                  <Filter size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                  <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-outline" />
                </div>

                <Button variant="outline" className="bg-surface-container text-on-surface-variant">
                  <span>Xuất dữ liệu</span>
                </Button>
              </div>
            </div>

            {/* Số lượng kết quả */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p className="text-label-sm text-on-surface-variant">
                Đang hiển thị <strong className="text-on-surface">{filteredCategories.length}</strong> trên 68 danh mục
              </p>
              <p className="text-label-sm text-outline">
                Đồng bộ lần cuối 4 phút trước
              </p>
            </div>
          </div>

          {/* Bảng dữ liệu giao diện máy tính */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-225 border-collapse">
              <thead>
                <tr className="border-b border-surface-container-high/60">
                  <th className="px-5 py-4 text-left text-label-sm font-semibold uppercase tracking-wider text-outline">Danh mục</th>
                  <th className="px-5 py-4 text-left text-label-sm font-semibold uppercase tracking-wider text-outline">Sách</th>
                  <th className="px-5 py-4 text-left text-label-sm font-semibold uppercase tracking-wider text-outline">Mô hình 3D</th>
                  <th className="px-5 py-4 text-left text-label-sm font-semibold uppercase tracking-wider text-outline">Độc giả</th>
                  <th className="px-5 py-4 text-left text-label-sm font-semibold uppercase tracking-wider text-outline">Trạng thái</th>
                  <th className="px-5 py-4 text-left text-label-sm font-semibold uppercase tracking-wider text-outline">Ngày tạo</th>
                  <th className="px-5 py-4 text-right text-label-sm font-semibold uppercase tracking-wider text-outline">Thao tác</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-surface-container-high/50">
                {filteredCategories.map((category) => {
                  const config = iconConfig[category.icon];
                  const Icon = config.icon;

                  return (
                    <tr key={category.id} className="group transition-colors hover:bg-surface-container-low/40">
                      {/* Danh mục */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.className}`}>
                            <Icon size={21} />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-label-md font-semibold text-on-surface group-hover:text-primary">
                              {category.name}
                            </p>
                            <p className="mt-0.5 max-w-70 truncate text-label-sm text-outline">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Số lượng Sách */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <BookOpen size={16} className="text-outline" />
                          <span className="text-label-md font-semibold text-on-surface">{category.books}</span>
                        </div>
                      </td>

                      {/* Số lượng Mô hình 3D */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Box size={16} className="text-outline" />
                          <span className="text-label-md font-semibold text-on-surface">{category.models}</span>
                        </div>
                      </td>

                      {/* Người dùng */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-outline" />
                          <span className="text-label-md text-on-surface-variant">{category.users.toLocaleString()}</span>
                        </div>
                      </td>

                      {/* Trạng thái */}
                      <td className="px-5 py-4">
                        <Chip
                          size="sm"
                          className={
                            category.status === "Active"
                              ? "bg-secondary-container/40 text-secondary"
                              : "bg-surface-container-high text-outline"
                          }
                        >
                          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
                          {category.status === "Active" ? "Hoạt động" : "Ngưng hoạt động"}
                        </Chip>
                      </td>

                      {/* Ngày tạo */}
                      <td className="px-5 py-4">
                        <span className="text-label-sm text-on-surface-variant">{category.createdAt}</span>
                      </td>

                      {/* Hành động */}
                      <td className="px-5 py-4 text-right">
                        <Button
                          isIconOnly
                          size="sm"
                          variant="ghost"
                          aria-label={`Thao tác cho ${category.name}`}
                        >
                          <MoreHorizontal size={19} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Thẻ danh mục giao diện điện thoại */}
          <div className="divide-y divide-surface-container-high/50 md:hidden">
            {filteredCategories.map((category) => {
              const config = iconConfig[category.icon];
              const Icon = config.icon;

              return (
                <div key={category.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${config.className}`}>
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="truncate text-label-md font-bold text-on-surface">{category.name}</h3>
                          <p className="mt-1 text-label-sm leading-relaxed text-outline">{category.description}</p>
                        </div>

                        <Button isIconOnly size="sm" variant="ghost" aria-label={`Thao tác cho ${category.name}`}>
                          <MoreHorizontal size={18} />
                        </Button>
                      </div>

                      {/* Thông số hiển thị nhanh */}
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <MiniStat icon={<BookOpen size={14} />} label="Sách" value={category.books} />
                        <MiniStat icon={<Box size={14} />} label="Mô hình 3D" value={category.models} />
                        <MiniStat icon={<Users size={14} />} label="Độc giả" value={category.users} />
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <Chip
                          size="sm"
                          className={
                            category.status === "Active"
                              ? "bg-secondary-container/40 text-secondary"
                              : "bg-surface-container-high text-outline"
                          }
                        >
                          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" />
                          {category.status === "Active" ? "Hoạt động" : "Ngưng hoạt động"}
                        </Chip>

                        <span className="text-label-sm text-outline">{category.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trạng thái trống (Không tìm thấy kết quả) */}
          {filteredCategories.length === 0 && (
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container text-outline">
                <Search size={24} />
              </div>

              <h3 className="mt-4 text-label-md font-bold text-on-surface">
                Không tìm thấy danh mục
              </h3>

              <p className="mt-1 max-w-sm text-label-sm text-outline">
                Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc trạng thái.
              </p>

              <Button
                variant="ghost"
                className="mt-4 bg-surface-container"
                onPress={() => {
                  setSearch("");
                  setStatusFilter("All");
                }}
              >
                Xóa bộ lọc
              </Button>
            </div>
          )}

          {/* Phân trang */}
          <div className="flex flex-col gap-3 border-t border-surface-container-high/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p className="text-label-sm text-outline">
              Đang hiển thị <strong className="text-on-surface">1–8</strong> trên 68 danh mục
            </p>

            <div className="flex items-center justify-between gap-1 sm:justify-end">
              <Button isIconOnly size="sm" variant="ghost" isDisabled aria-label="Trang trước">
                <ChevronLeft size={17} />
              </Button>

              <button className="flex h-8 min-w-8 items-center justify-center rounded-lg bg-primary-container px-2 text-label-sm font-semibold text-on-primary">
                1
              </button>
              <button className="flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-label-sm text-on-surface-variant hover:bg-surface-container">
                2
              </button>
              <button className="hidden h-8 min-w-8 items-center justify-center rounded-lg px-2 text-label-sm text-on-surface-variant hover:bg-surface-container sm:flex">
                3
              </button>

              <span className="px-1 text-outline">...</span>

              <button className="flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-label-sm text-on-surface-variant hover:bg-surface-container">
                9
              </button>

              <Button isIconOnly size="sm" variant="ghost" aria-label="Trang kế tiếp">
                <ChevronRight size={17} />
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </main>
  );
}

function OverviewCard({
  label,
  value,
  description,
  icon,
  iconClass,
}: {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <Card className="border-none bg-surface-container-lowest p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}>
          {icon}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-label-sm font-semibold uppercase tracking-wider text-outline">{label}</p>
        <p className="mt-1 text-headline-lg font-bold text-on-surface">{value}</p>
        <p className="mt-1.5 flex items-center gap-1.5 text-label-sm text-on-surface-variant">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {description}
        </p>
      </div>
    </Card>
  );
}

function MiniStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-lg bg-surface-container-low px-2.5 py-2">
      <div className="flex items-center gap-1.5 text-outline">
        {icon}
        <span className="text-[11px] font-semibold">{label}</span>
      </div>
      <p className="mt-1 text-label-md font-bold text-on-surface">
        {value.toLocaleString()}
      </p>
    </div>
  );
}
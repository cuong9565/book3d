"use client";

import { Card } from "@heroui/react";
import { Building2, CheckCircle2, ChevronDown } from "lucide-react";

interface Props {
  form: {
    department: string;
    grade: string;
    mentor: string;
  };
  updateField: (
    field: "department" | "grade" | "mentor",
    value: string
  ) => void;
}

export default function InstitutionSection({ form, updateField }: Props) {
  return (
    <Card className="border-none shadow-sm">
      <Card.Content className="flex flex-col gap-6 p-6">
        {/* Tiêu đề phần */}
        <SectionHeader
          icon={<Building2 className="h-5.5 w-5.5" />}
          title="Liên hệ tổ chức & Khoa phòng"
          section="Phần 2 / 4"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Email SSO (Read-only) */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="institution-email" className="text-sm font-semibold text-on-surface">
                Email tổ chức / trường học
              </label>

              <span className="flex items-center gap-1 text-xs font-semibold text-secondary">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Đã xác thực SSO
              </span>
            </div>

            <input
              id="institution-email"
              type="email"
              value="alex.nguyen@edu3d.org"
              readOnly
              className="w-full cursor-default rounded-lg bg-surface-container-low px-3 py-2.5 text-sm text-on-surface"
            />

            <span className="text-xs text-outline">
              Xác thực đăng nhập một lần (SSO) đang hoạt động
            </span>
          </div>

          {/* Chọn Khoa / Phòng ban */}
          <SelectField
            id="academic-dept"
            label="Khoa / Phòng ban học tập"
            value={form.department}
            onChange={(value) => updateField("department", value)}
            options={[
              "Khoa Khoa học Oakridge • Lớp 8B",
              "Học viện Trái đất & Vũ trụ Oakridge • Khối Sơ cấp",
              "Nhóm Sinh học Nâng cao Oakridge",
            ]}
          />

          {/* Chọn Khối lớp */}
          <SelectField
            id="academic-grade"
            label="Trình độ / Khối lớp"
            value={form.grade}
            onChange={(value) => updateField("grade", value)}
            options={[
              "Lớp 8 (Khoa học Tự nhiên & Trái đất)",
              "Lớp 9 (Tiền AP Sinh học & Hệ thống phân tử)",
              "Lớp 10 (Giải phẫu & Sinh lý học nâng cao)",
            ]}
          />

          {/* Nhập Giảng viên / Cố vấn */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="primary-mentor" className="text-sm font-semibold text-on-surface">
              Giảng viên / Cố vấn phòng Lab
            </label>

            <input
              id="primary-mentor"
              type="text"
              value={form.mentor}
              onChange={(e) => updateField("mentor", e.target.value)}
              className="w-full rounded-lg bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface shadow-sm outline-none transition-colors focus:bg-surface-container-low"
            />
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

{/* Sub-component: Trường dữ liệu Dropdown Select */}
function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-on-surface">
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg bg-surface-container-lowest px-3 py-2.5 pr-10 text-sm text-on-surface shadow-sm outline-none transition-colors focus:bg-surface-container-low"
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-outline" />
      </div>
    </div>
  );
}

{/* Sub-component: Tiêu đề giao diện section */}
function SectionHeader({
  icon,
  title,
  section,
}: {
  icon: React.ReactNode;
  title: string;
  section: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 items-center gap-2">
        <div className="shrink-0 text-primary">{icon}</div>
        <h3 className="text-lg font-semibold text-on-surface sm:text-xl">{title}</h3>
      </div>
      <span className="shrink-0 text-xs text-outline">{section}</span>
    </div>
  );
}
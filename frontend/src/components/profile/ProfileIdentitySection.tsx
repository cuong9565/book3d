"use client";

import { Card } from "@heroui/react";
import { CheckCircle, CloudUpload, Lock, UserCircle } from "lucide-react";
import { RefObject } from "react";

interface Props {
  form: {
    firstName: string;
    lastName: string;
    username: string;
  };
  avatar: string;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onAvatarUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
  onRemoveAvatar: () => void;
  updateField: (
    field: "firstName" | "lastName" | "username",
    value: string
  ) => void;
}

export default function ProfileIdentitySection({
  form,
  avatar,
  fileInputRef,
  onAvatarUpload,
  onUpload,
  onRemoveAvatar,
  updateField,
}: Props) {
  return (
    <Card className="border-none shadow-sm">
      <Card.Content className="flex flex-col gap-6 p-6">
        {/* Tiêu đề section */}
        <SectionHeader
          icon={<UserCircle className="h-5.5 w-5.5" />}
          title="Ảnh đại diện & Thông tin cơ bản"
          section="Phần 1 / 4"
        />

        {/* Khu vực quản lý Ảnh đại diện */}
        <div className="flex flex-col items-start gap-4 rounded-xl bg-surface-container-low p-3 sm:flex-row sm:items-center">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-surface-container shadow-sm ring-4 ring-surface-container-lowest">
            {avatar ? (
              <img src={avatar} alt="Xem trước ảnh đại diện" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xl font-bold text-primary">AN</div>
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/gif"
                className="hidden"
                onChange={onAvatarUpload}
              />

              <button
                type="button"
                onClick={onUpload}
                className="inline-flex items-center gap-1.5 rounded-lg bg-surface-container-lowest px-3 py-2 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-surface-container"
              >
                <CloudUpload className="h-4.5 w-4.5" /> Tải ảnh mới
              </button>

              <button
                type="button"
                onClick={onRemoveAvatar}
                className="rounded-lg px-3 py-2 text-sm text-error transition-colors hover:bg-error-container/30"
              >
                Xóa ảnh
              </button>
            </div>

            <p className="text-xs text-on-surface-variant">
              Định dạng JPG, PNG hoặc GIF tối đa 5MB. Kích thước đề xuất 800x800px.
            </p>
          </div>
        </div>

        {/* Các trường nhập thông tin cá nhân */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormInput
            id="first-name"
            label="Tên"
            value={form.firstName}
            onChange={(value) => updateField("firstName", value)}
          />

          <FormInput
            id="last-name"
            label="Họ & Tên đệm"
            value={form.lastName}
            onChange={(value) => updateField("lastName", value)}
          />

          {/* Ô nhập Username */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="username" className="text-sm font-semibold text-on-surface">
                Tên người dùng (Username)
              </label>

              <span className="flex items-center gap-1 text-xs font-semibold text-secondary">
                <CheckCircle className="h-3.5 w-3.5" /> Có thể sử dụng
              </span>
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-outline">@</span>
              <input
                id="username"
                type="text"
                value={form.username}
                onChange={(e) => updateField("username", e.target.value)}
                className="w-full rounded-lg bg-surface-container-lowest py-2.5 pl-8 pr-3 text-sm text-on-surface shadow-sm outline-none transition-colors focus:bg-surface-container-low"
              />
            </div>
          </div>

          {/* Ô hiển thị Mã số học viên (Khóa chỉnh sửa) */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="student-id" className="text-sm font-semibold text-on-surface">
                Mã số học viên / Sinh viên
              </label>

              <span className="flex items-center gap-1 text-xs text-outline">
                <Lock className="h-3.5 w-3.5" /> Khóa chỉnh sửa
              </span>
            </div>

            <input
              id="student-id"
              type="text"
              value="#8849-AK"
              disabled
              className="w-full cursor-not-allowed rounded-lg bg-surface-container-low px-3 py-2.5 text-sm text-on-surface-variant"
            />

            <span className="text-xs text-outline">Được quản lý bởi Học khu Oakridge</span>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

{/* Sub-component: Input văn bản thông thường */}
function FormInput({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-on-surface">{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-surface-container-lowest px-3 py-2.5 text-sm text-on-surface shadow-sm outline-none transition-colors focus:bg-surface-container-low"
      />
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
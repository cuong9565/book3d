"use client";

import { Avatar, Button, Card } from "@heroui/react";
import { Camera, CheckCircle2, Lock, LogOut, PencilLine, Settings2, Shield, User, View } from "lucide-react";

interface ProfileSidebarProps {
  avatar: string;
  onAvatarClick: () => void;
}

const navItems = [
  { label: "Thông tin cá nhân", icon: User, active: false },
  { label: "Chỉnh sửa hồ sơ", icon: PencilLine, active: true },
  { label: "Đổi mật khẩu", icon: Lock, active: false },
  { label: "Tùy chọn đọc & 3D", icon: Settings2, active: false },
  { label: "Bảo mật & Quyền riêng tư", icon: Shield, active: false },
];

export default function ProfileSidebar({
  avatar,
  onAvatarClick,
}: ProfileSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-80">
      <div className="flex flex-col gap-4">
        {/* Thẻ thông tin tài khoản */}
        <Card className="relative overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24" />

          <Card.Content className="relative flex flex-col items-center p-5">
            {/* Ảnh đại diện */}
            <div className="relative mt-2">
              <Avatar className="h-24 w-24 shadow-md ring-4 ring-surface-container-lowest">
                <Avatar.Image src={avatar} alt="Alex Nguyễn" />
                <Avatar.Fallback>AN</Avatar.Fallback>
              </Avatar>

              <Button
                isIconOnly
                aria-label="Tải ảnh đại diện mới"
                variant="primary"
                size="sm"
                className="absolute right-0 bottom-0 h-8 w-8 min-w-8 rounded-full shadow-md"
                onPress={onAvatarClick}
              >
                <Camera size={15} />
              </Button>
            </div>

            {/* Thông tin chính */}
            <h2 className="mt-3 text-xl font-bold tracking-tight">Alex Nguyễn</h2>
            <span className="mt-1 rounded-full bg-surface-container-high px-2.5 py-0.5 text-xs font-semibold text-primary">
              @alex.nguyen
            </span>

            {/* Trạng thái xác minh */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-secondary">
              <CheckCircle2 size={15} />
              <span className="font-medium">Học viên chính thức</span>
            </div>

            {/* Thanh điều hướng */}
            <nav aria-label="Cài đặt tài khoản" className="mt-5 flex w-full flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                if (item.active) {
                  return (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg bg-primary px-3 py-2.5 text-xs font-semibold text-on-primary shadow-sm"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon size={17} />
                        <span>{item.label}</span>
                      </span>
                      <span className="h-2 w-2 rounded-full bg-secondary-fixed" />
                    </div>
                  );
                }

                return (
                  <button
                    key={item.label}
                    type="button"
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                  >
                    <Icon size={17} className="text-outline" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Nút Đăng xuất */}
            <div className="mt-4 w-full border-t border-outline-variant/30 pt-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-xs text-error hover:bg-error-container/40"
              >
                <LogOut size={16} />
                Đăng xuất
              </Button>
            </div>
          </Card.Content>
        </Card>

        {/* Trạng thái công cụ 3D */}
        <Card className="border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
          <Card.Content className="flex items-center gap-3 p-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary-container/60 text-secondary">
              <View size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold">Tăng tốc WebGL 2.0</p>
              <p className="text-[11px] text-outline">Đã bật dựng hình 60fps</p>
            </div>
          </Card.Content>
        </Card>
      </div>
    </aside>
  );
}
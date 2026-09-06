"use client";

import { Avatar, Button, Card, Chip } from "@heroui/react";
import { Activity, ArrowRight, BadgeCheck, BookOpen, Camera, CheckCircle2, ChevronRight, CloudCheck, Download,Edit3, Headphones, LogOut, Lock, Mail, PencilLine, Save, School, Settings2, Shield, Sparkles, Tag, Trophy, User, View } from "lucide-react";
import { useState } from "react";

const avatarUrl =
  "https://lh3.googleusercontent.com/aida/AEtjO1X9o2YH1ljAoe86IoCuJfMU0mto69sLfiHEx9JnitRwUaKXAYwdv8gvIlC_gS9BqwHOTdHzkvNiXX1y5KjWx7vzu32-0uUhtmAG_0WjlkHCxZG2ZZ_QiJSo1nMpLfybzNy3pI7mCEg-L60SrqrVjvU6-IQB3LMczt-cMf4Zp3K4NptUkm5GP3l30oWjqYmCZ3FWoinAoQvR_PnGp9SxINkP0TfVHCox0misJOnZmYQvC6IbSQa-nQT6O57k";

type ToastState = {
  title: string;
  message: string;
} | null;

const navigationItems = [
  { label: "Thông tin cá nhân", icon: User, active: true },
  { label: "Chỉnh sửa hồ sơ", icon: PencilLine },
  { label: "Đổi mật khẩu", icon: Lock },
  { label: "Tùy chọn đọc & 3D", icon: Settings2 },
  { label: "Bảo mật & Quyền riêng tư", icon: Shield },
];

const metrics = [
  { value: "24", label: "Sách đã hoàn thành", icon: BookOpen, iconClass: "bg-primary-fixed text-primary" },
  { value: "18.5", suffix: "giờ", label: "Đọc không gian", icon: Activity, iconClass: "bg-secondary-container text-secondary" },
  { value: "37", label: "Mô hình 3D đã khám phá", icon: View, iconClass: "bg-surface-container-highest text-primary-container" },
  { value: "12", label: "Huy hiệu chương trình", icon: Trophy, iconClass: "bg-tertiary-fixed text-tertiary" },
];

const interests = [
  { label: "Cổ sinh vật học Phấn trắng", icon: Tag, className: "bg-secondary-container/40 text-on-secondary-fixed-variant" },
  { label: "Giải phẫu động vật có xương sống", icon: Tag, className: "bg-secondary-container/40 text-on-secondary-fixed-variant" },
  { label: "Mô hình 3D tương tác", icon: View, className: "bg-surface-container-high text-primary" },
  { label: "Bản ghi âm có chú thích", icon: Headphones, className: "bg-surface-container-high text-on-surface" },
];

export default function ProfilePage() {
  const [toast, setToast] = useState<ToastState>(null);

  const showToast = (title: string, message: string) => {
    setToast({ title, message });
    window.setTimeout(() => setToast(null), 3200);
  };

  const handleLogout = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất khỏi Thư viện Edu3D?");
    if (!confirmed) return;
    showToast("Kết thúc phiên", "Đang đăng xuất an toàn...");
  };

  return (
    <main className="w-full bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto min-h-screen">
        {/* Thông báo Toast */}
        <div className={`fixed right-4 bottom-4 z-50 w-[calc(100%-2rem)] sm:w-auto sm:min-w-90 transition-all duration-300 ${toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"}`}>
          <Card className="border border-outline-variant/40 bg-surface-container-lowest shadow-xl">
            <Card.Content className="flex items-start gap-3 p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-secondary" size={22} />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-on-surface">{toast?.title}</p>
                <p className="mt-1 text-xs text-on-surface-variant">{toast?.message}</p>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Đầu trang (Header) */}
        <section className="w-full px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Thanh điều hướng nhanh (Breadcrumb) */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-wider text-on-surface-variant">Cài đặt tài khoản</span>
              <ChevronRight size={15} className="text-outline" />
              <span className="font-semibold text-primary">Hồ sơ & Tùy chọn</span>
              <span className="text-outline-variant">•</span>
              <span className="text-outline">Mã số học sinh #8849-AK</span>
            </div>

            {/* Trạng thái */}
            <div className="flex flex-wrap items-center gap-3">
              <Chip variant="secondary" color="success" size="sm" className="font-semibold">
                <BadgeCheck size={15} />
                Học viên chính thức
              </Chip>
              <span className="hidden text-xs font-medium text-outline sm:inline">Niên khóa 2028</span>
            </div>
          </div>
        </section>

        {/* Nội dung chính */}
        <section className="w-full px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-12">
            
            {/* CỘT BÊN TRÁI (SIDEBAR) */}
            <aside className="lg:col-span-4">
              <div className="flex flex-col gap-4">
                
                {/* Thẻ thông tin cá nhân */}
                <Card className="relative overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-28 " />

                  <Card.Content className="relative flex flex-col items-center p-5 sm:p-6">
                    {/* Ảnh đại diện */}
                    <div className="relative mt-2">
                      <Avatar size="lg" className="h-28 w-28 shadow-md ring-4 ring-surface-container-lowest">
                        <Avatar.Image src={avatarUrl} alt="Alex Nguyễn" />
                        <Avatar.Fallback>AN</Avatar.Fallback>
                      </Avatar>

                      <Button
                        isIconOnly
                        aria-label="Cập nhật ảnh đại diện"
                        variant="primary"
                        size="sm"
                        className="absolute right-0 bottom-0 h-9 w-9 min-w-9 rounded-full shadow-md"
                        onPress={() => showToast("Tải ảnh lên", "Vui lòng chọn ảnh chân dung học viên mới.")}
                      >
                        <Camera size={17} />
                      </Button>
                    </div>

                    {/* Danh tính */}
                    <h2 className="mt-4 text-2xl font-bold tracking-tight">Alex Nguyễn</h2>
                    <span className="mt-2 rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold text-primary">
                      @alex.nguyen
                    </span>

                    <div className="mt-3 flex items-center gap-1.5 text-sm text-on-surface-variant">
                      <Mail size={17} className="text-outline" />
                      <span className="break-all">alex.nguyen@edu3d.org</span>
                    </div>

                    {/* Trạng thái học tập */}
                    <div className="mt-4 rounded-lg bg-surface-container-low px-3 py-2 text-center text-xs leading-5 text-on-surface-variant">
                      Lớp 8
                      <span className="mx-1 font-bold text-outline-variant">•</span>
                      Học viên STEM
                      <span className="mx-1 font-bold text-outline-variant">•</span>
                      Tham gia từ Th9/2023
                    </div>

                    {/* Động cơ không gian 3D */}
                    <div className="mt-5 flex w-full items-center justify-between rounded-lg bg-surface-container-low/70 p-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary-container/60 text-secondary">
                          <View size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold">Động cơ không gian</p>
                          <p className="mt-0.5 text-[11px] text-outline">Tăng tốc WebGL 2.0</p>
                        </div>
                      </div>
                      <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-secondary" />
                    </div>

                    {/* Menu điều hướng */}
                    <nav aria-label="Cài đặt tài khoản" className="mt-5 flex w-full flex-col gap-1.5">
                      {navigationItems.map((item) => {
                        const Icon = item.icon;
                        if (item.active) {
                          return (
                            <Button key={item.label} variant="primary" className="h-auto min-h-11 w-full justify-between rounded-lg px-3 text-left">
                              <span className="flex items-center gap-3">
                                <Icon size={19} />
                                <span className="font-semibold">{item.label}</span>
                              </span>
                              <span className="h-4 w-1.5 rounded-full bg-secondary-fixed" />
                            </Button>
                          );
                        }

                        return (
                          <Button
                            key={item.label}
                            variant="ghost"
                            className="h-auto min-h-11 w-full justify-between rounded-lg px-3 text-on-surface-variant hover:bg-surface-container"
                            onPress={() => showToast(item.label, `Đã chọn mục ${item.label.toLowerCase()}.`)}
                          >
                            <span className="flex items-center gap-3">
                              <Icon size={19} className="text-outline" />
                              <span>{item.label}</span>
                            </span>
                            <ChevronRight size={17} className="text-outline" />
                          </Button>
                        );
                      })}
                    </nav>

                    {/* Nút Đăng xuất */}
                    <div className="mt-4 w-full border-t border-outline-variant/30 pt-4">
                      <Button variant="ghost" className="w-full text-error hover:bg-error-container/40" onPress={handleLogout}>
                        <LogOut size={19} />
                        Đăng xuất
                      </Button>
                    </div>
                  </Card.Content>
                </Card>

                {/* Cố vấn học tập */}
                <Card className="border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <Card.Content className="flex items-center gap-3 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
                      <School size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold">Cố vấn phòng lab: Tiến sĩ Evelyn Reed</p>
                      <p className="mt-1 truncate text-xs text-on-surface-variant">Khoa Cổ sinh vật học Oakridge</p>
                    </div>
                  </Card.Content>
                </Card>
              </div>
            </aside>

            {/* CỘT NỘI DUNG CHÍNH (BÊN PHẢI) */}
            <section className="lg:col-span-8">
              <div className="flex flex-col gap-4">
                
                {/* Thông tin cá nhân */}
                <Card className="border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <Card.Content className="p-5 sm:p-6 lg:p-7">
                    {/* Tiêu đề */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Thông tin cá nhân</h1>
                        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-on-surface-variant">
                          Quản lý chi tiết cá nhân, tiểu sử độc giả và thông tin liên hệ tổ chức.
                        </p>
                      </div>

                      <Button variant="secondary" className="w-full sm:w-auto" onPress={() => showToast("Đã bật chỉnh sửa", "Các trường dữ liệu đã được mở khóa để sửa.")}>
                        <Edit3 size={17} />
                        Sửa hồ sơ
                      </Button>
                    </div>

                    {/* Lưới thông tin */}
                    <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                      <InfoCard
                        label="Tên người dùng"
                        value="@alex.nguyen"
                        description="Mã định danh thư viện dùng cho bài tập nhóm & phẫu thuật 3D đa người dùng."
                        right={
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-secondary">
                            <CheckCircle2 size={14} />
                            Đã xác minh
                          </span>
                        }
                      />

                      <InfoCard
                        label="Họ và tên đầy đủ"
                        value="Alex Nguyễn"
                        description="Tên chính thức đồng bộ với cơ sở dữ liệu học sinh quận Oakridge."
                        right={<span className="text-[11px] text-outline">Học sinh / Học viên</span>}
                      />

                      <InfoCard
                        label="Email tổ chức"
                        value="alex.nguyen@edu3d.org"
                        description="Tên miền được quản lý bởi Lab Khoa học Oakridge. Đã bật Đăng nhập một lần (SSO)."
                        icon={<Mail size={17} />}
                        right={<Chip variant="secondary" color="success" size="sm">Đã xác minh</Chip>}
                      />

                      <InfoCard
                        label="Khoa / Chuyên ngành"
                        value="Khoa Khoa học Oakridge • Lớp 8B"
                        description="Giảng viên chính: Tiến sĩ Evelyn Reed (Lab Cổ sinh vật & Giải phẫu)."
                        icon={<School size={17} />}
                        right={<span className="text-[11px] text-outline">Học kỳ 2023–2024</span>}
                      />
                    </div>

                    {/* Tiểu sử */}
                    <div className="mt-7">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles size={19} className="text-primary" />
                          <h3 className="font-semibold">Tiểu sử độc giả & Lĩnh vực nghiên cứu</h3>
                        </div>
                        <span className="text-xs text-outline">198 / 300 ký tự</span>
                      </div>

                      <div className="mt-3 rounded-xl bg-surface-container-low p-4 text-sm leading-7 text-on-surface">
                        Học sinh lớp 8 đam mê khoa học và cổ sinh vật học.
                        Hiện đang khám phá các hóa thạch kỷ Phấn trắng, hệ sinh thái đại Trung sinh,
                        và các mô hình giải phẫu 3D tương tác tại Thư viện Edu3D.
                        Luôn ghi chú chương bằng âm thanh và tham gia phẫu thuật mẫu vật không gian cùng các bạn!
                      </div>

                      {/* Lĩnh vực quan tâm */}
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-xs font-semibold text-outline">Lĩnh vực tập trung:</span>
                        {interests.map((interest) => {
                          const Icon = interest.icon;
                          return (
                            <span key={interest.label} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${interest.className}`}>
                              <Icon size={14} />
                              {interest.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tiến độ học tập */}
                    <div className="mt-7 border-t border-outline-variant/30 pt-6">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="flex items-center gap-2 font-semibold">
                          <Activity size={19} className="text-secondary" />
                          Tiến độ học tập
                        </h3>
                        <span className="text-xs font-semibold text-primary">Cột mốc học kỳ: Hoàn thành 84%</span>
                      </div>

                      {/* Thanh tiến trình */}
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-container">
                        <div className="h-full rounded-full bg-primary" style={{ width: "84%" }} />
                      </div>

                      {/* Các chỉ số */}
                      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
                        {metrics.map((metric) => {
                          const Icon = metric.icon;
                          return (
                            <div key={metric.label} className="rounded-xl bg-surface-container-low p-3">
                              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${metric.iconClass}`}>
                                <Icon size={19} />
                              </div>
                              <div className="mt-2">
                                <p className="text-2xl font-bold tracking-tight">
                                  {metric.value}
                                  {metric.suffix && <span className="ml-1 text-xs font-normal text-outline">{metric.suffix}</span>}
                                </p>
                                <p className="mt-1 text-xs leading-4 text-on-surface-variant">{metric.label}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Chân trang thẻ (Footer) */}
                    <div className="mt-6 flex flex-col gap-4 border-t border-outline-variant/30 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 text-xs text-outline">
                        <CloudCheck size={16} className="shrink-0 text-secondary" />
                        <span>Cập nhật 2 ngày trước • Đã đồng bộ với Đám mây</span>
                      </div>

                      <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                        <Button variant="secondary" className="w-full sm:w-auto" onPress={() => showToast("Đang tạo PDF", "Đang tổng hợp hồ sơ học tập 3D cho Alex Nguyễn...")}>
                          <Download size={17} />
                          Tải hồ sơ học tập
                        </Button>

                        <Button variant="primary" className="w-full sm:w-auto" onPress={() => showToast("Đã cập nhật hồ sơ", "Thông tin hồ sơ học tập của bạn đã được đồng bộ.")}>
                          <Save size={17} />
                          Lưu thông tin
                        </Button>
                      </div>
                    </div>
                  </Card.Content>
                </Card>

                {/* Tùy chọn không gian 3D */}
                <Card className="border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
                  <Card.Content className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-container/40 text-secondary">
                        <View size={25} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold">Tùy chọn mẫu vật không gian</h3>
                        <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                          Điều khiển quỹ đạo 3D mặc định được đặt thành dựng hình 60fps sinh động và đã bật nhãn sinh học.
                        </p>
                      </div>
                    </div>

                    <Button variant="ghost" className="shrink-0" onPress={() => showToast("Bảng điều khiển 3D", "Đang mở tùy chọn tăng tốc cổng nhìn không gian.")}>
                      Cấu hình
                      <ArrowRight size={17} />
                    </Button>
                  </Card.Content>
                </Card>

              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   THÀNH PHẦN INFO CARD (THẺ THÔNG TIN)
========================================================= */

interface InfoCardProps {
  label: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
  right?: React.ReactNode;
}

function InfoCard({ label, value, description, icon, right }: InfoCardProps) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5 rounded-lg bg-surface-container-low p-3">
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-outline">{label}</span>
        {right}
      </div>

      <div className="mt-0.5 flex min-w-0 items-center gap-2">
        {icon && <span className="shrink-0 text-outline">{icon}</span>}
        <span className="min-w-0 wrap-break-word text-sm font-bold text-on-surface">{value}</span>
      </div>

      <p className="mt-1 text-xs leading-5 text-on-surface-variant">{description}</p>
    </div>
  );
}
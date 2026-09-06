"use client";

import BiographySection from "@/components/profile/BiographySection";
import InstitutionSection from "@/components/profile/InstitutionSection";
import PreferencesSection from "@/components/profile/PreferencesSection";
import ProfileIdentitySection from "@/components/profile/ProfileIdentitySection";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { Button, Card, Chip } from "@heroui/react";
import { Check, CheckCircle, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const DEFAULT_AVATAR =
  "https://lh3.googleusercontent.com/aida/AEtjO1X9o2YH1ljAoe86IoCuJfMU0mto69sLfiHEx9JnitRwUaKXAYwdv8gvIlC_gS9BqwHOTdHzkvNiXX1y5KjWx7vzu32-0uUhtmAG_0WjlkHCxZG2ZZ_QiJSo1nMpLfybzNy3pI7mCEg-L60SrqrVjvU6-IQB3LMczt-cMf4Zp3K4NptUkm5GP3l30oWjqYmCZ3FWoinAoQvR_PnGp9SxINkP0TfVHCox0misJOnZmYQvC6IbSQa-nQT6O57k";

const INITIAL_FORM = {
  firstName: "Alex",
  lastName: "Nguyễn",
  username: "alex.nguyen",
  department: "Khoa Khoa học Oakridge • Lớp 8B",
  grade: "Lớp 8 (Khoa học Tự nhiên & Trái đất)",
  mentor: "Tiến sĩ Evelyn Reed (Lab Cổ sinh vật & Giải phẫu)",
  bio: "Học sinh lớp 8 đam mê khoa học và cổ sinh vật học. Hiện đang khám phá các hóa thạch kỷ Phấn trắng, hệ sinh thái đại Trung sinh, và các mô hình giải phẫu 3D tương tác tại Thư viện Edu3D. Luôn ghi chú chương bằng âm thanh và tham gia phẫu thuật mẫu vật không gian cùng các bạn!",
  webgl: true,
  audioSync: true,
  publicProfile: true,
};

const INITIAL_TAGS = [
  "Cổ sinh vật học Phấn trắng",
  "Giải phẫu động vật có xương sống",
  "Mô hình 3D tương tác",
  "Bản ghi âm có chú thích",
];

export default function EditProfilePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState(INITIAL_FORM);
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const updateField = (
    field: keyof typeof form,
    value: string | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const handleAvatarUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showToast("Kích thước ảnh phải nhỏ hơn 5MB.");
      return;
    }

    if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      showToast("Vui lòng tải lên ảnh định dạng JPG, PNG hoặc GIF.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
    showToast("Đã cập nhật ảnh đại diện.");
  };

  const removeAvatar = () => {
    setAvatar("");
    showToast("Đã xóa ảnh đại diện.");
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((item) => item !== tag));
  };

  const addResearchTopic = () => {
    const topic = window.prompt("Nhập chủ đề nghiên cứu mới:");

    if (!topic?.trim()) return;

    const normalizedTopic = topic.trim();

    if (tags.includes(normalizedTopic)) {
      showToast("Chủ đề nghiên cứu này đã tồn tại.");
      return;
    }

    setTags((prev) => [...prev, normalizedTopic]);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setTags(INITIAL_TAGS);
    setAvatar(DEFAULT_AVATAR);
    showToast("Đã hủy bỏ các thay đổi.");
  };

  const handleSave = async () => {
    setIsSaving(true);

    // TODO: await updateProfile(form);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSaving(false);
    showToast("Đã cập nhật hồ sơ thành công.");
  };

  return (
    <main className="min-h-screen w-full bg-surface pt-16">
      {/* Thông báo Toast */}
      {toast && (
        <div className="fixed right-4 top-20 z-50">
          <div className="flex items-center gap-3 rounded-xl bg-inverse-surface px-4 py-3 text-sm text-inverse-on-surface shadow-lg">
            <CheckCircle className="h-5 w-5 text-secondary" />
            <span>{toast}</span>
          </div>
        </div>
      )}

      {/* Thanh hướng dẫn / Breadcrumb */}
      <div className="w-full bg-surface-container-low px-4 py-3 shadow-sm sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <span className="text-xs font-semibold uppercase tracking-wider text-outline">
              Cài đặt tài khoản
            </span>

            <ChevronDown className="h-4 w-4 -rotate-90 text-outline" />

            <span className="transition-colors hover:text-primary">
              Hồ sơ & Tùy chọn
            </span>

            <ChevronDown className="h-4 w-4 -rotate-90 text-outline" />

            <span className="font-semibold text-primary">
              Chỉnh sửa hồ sơ
            </span>
          </div>

          <Chip
            variant="soft"
            color="success"
            className="self-start sm:self-auto"
          >
            <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-secondary" />
            Học viên Chính thức • Niên khóa 2028
          </Chip>
        </div>
      </div>

      {/* Khung nội dung chính */}
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-12">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-12">
          {/* CỘT BÊN TRÁI - SIDEBAR */}
          <ProfileSidebar
            avatar={avatar}
            onAvatarClick={() => fileInputRef.current?.click()}
          />

          {/* CỘT BÊN PHẢI - NỘI DUNG CHÍNH */}
          <div className="flex w-full min-w-0 flex-1 flex-col gap-6">
            {/* Tiêu đề trang & Thao tác nhanh */}
            <Card className="border-none shadow-sm">
              <Card.Content className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
                    Chỉnh sửa hồ sơ
                  </h1>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-on-surface-variant sm:text-base">
                    Cập nhật thông tin học viên công khai, tiểu sử nghiên cứu
                    và chi tiết liên hệ học tập của bạn.
                  </p>
                </div>

                <div className="flex w-full shrink-0 gap-2 sm:w-auto">
                  <Button
                    variant="secondary"
                    onPress={handleReset}
                    className="flex-1 sm:flex-none"
                  >
                    Hủy bỏ
                  </Button>

                  <Button
                    variant="primary"
                    onPress={handleSave}
                    isDisabled={isSaving}
                    className="flex-1 sm:flex-none"
                  >
                    <Check className="h-4 w-4" />
                    {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
                  </Button>
                </div>
              </Card.Content>
            </Card>

            <form
              className="flex flex-col gap-6"
              onSubmit={(event) => {
                event.preventDefault();
                handleSave();
              }}
            >
              {/* PHẦN 1: THẺ ĐỊNH DANH & ẢNH ĐẠI DIỆN */}
              <ProfileIdentitySection
                form={form}
                avatar={avatar}
                fileInputRef={fileInputRef}
                onAvatarUpload={handleAvatarUpload}
                onUpload={() => fileInputRef.current?.click()}
                onRemoveAvatar={removeAvatar}
                updateField={updateField}
              />

              {/* PHẦN 2: THÔNG TIN HỌC TẬP & TRƯỜNG HỌC */}
              <InstitutionSection
                form={form}
                updateField={updateField}
              />

              {/* PHẦN 3: TIỂU SỬ & LĨNH VỰC NGHIÊN CỨU */}
              <BiographySection
                bio={form.bio}
                tags={tags}
                updateBio={(value) => updateField("bio", value)}
                removeTag={removeTag}
                addResearchTopic={addResearchTopic}
              />

              {/* PHẦN 4: TÙY CHỌN HIỂN THỊ & 3D */}
              <PreferencesSection
                form={form}
                updateField={updateField}
              />

              {/* CÁC NÚT THAO TÁC DƯỚI CÙNG */}
              <Card className="border-none shadow-sm">
                <Card.Content className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex w-full justify-end gap-2 sm:w-auto">
                    <Button
                      type="button"
                      variant="secondary"
                      onPress={handleReset}
                      className="flex-1 sm:flex-none"
                    >
                      Hủy bỏ thay đổi
                    </Button>

                    <Button
                      type="submit"
                      variant="primary"
                      isDisabled={isSaving}
                      className="flex-1 sm:flex-none"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
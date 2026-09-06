"use client";

import { Card } from "@heroui/react";
import { Boxes } from "lucide-react";

interface Props {
  form: {
    webgl: boolean;
    audioSync: boolean;
    publicProfile: boolean;
  };
  updateField: (
    field: "webgl" | "audioSync" | "publicProfile",
    value: boolean
  ) => void;
}

export default function PreferencesSection({ form, updateField }: Props) {
  return (
    <Card className="border-none shadow-sm">
      <Card.Content className="flex flex-col gap-6 p-6">
        {/* Tiêu đề section */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <Boxes className="h-5.5 w-5.5 shrink-0 text-primary" />
            <h3 className="text-lg font-semibold text-on-surface sm:text-xl">
              Tùy chọn tương tác & Không gian
            </h3>
          </div>
          <span className="shrink-0 text-xs text-outline">Phần 4 / 4</span>
        </div>

        {/* Danh sách các nút bật/tắt tùy chọn */}
        <div className="divide-y divide-surface-container">
          <PreferenceToggle
            title="Bật xem trước mẫu vật 3D WebGL 2.0"
            description="Hiển thị hình học tương tác độ phân giải cao trong các thẻ bài học."
            checked={form.webgl}
            onChange={(value) => updateField("webgl", value)}
          />

          <PreferenceToggle
            title="Tự động đồng bộ thuyết minh âm thanh với tiến trình chương"
            description="Tự động di chuyển góc nhìn người đọc khi nghe hướng dẫn âm thanh học thuật."
            checked={form.audioSync}
            onChange={(value) => updateField("audioSync", value)}
          />

          <PreferenceToggle
            title="Hồ sơ học viên công khai"
            description="Cho phép bạn học và giảng viên đã xác thực xem danh hiệu và bộ sưu tập của bạn."
            checked={form.publicProfile}
            onChange={(value) => updateField("publicProfile", value)}
            secondary
          />
        </div>
      </Card.Content>
    </Card>
  );
}

{/* Sub-component: Nút gạt Toggle chuyển đổi trạng thái (Switch) */}
function PreferenceToggle({
  title,
  description,
  checked,
  onChange,
  secondary = false,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  secondary?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-5 py-4 first:pt-0 last:pb-0">
      <div className="flex min-w-0 flex-col">
        <span className="text-sm font-semibold text-on-surface">{title}</span>
        <span className="mt-1 text-xs leading-5 text-on-surface-variant">{description}</span>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={[
          "relative mt-0.5 h-6 w-12 shrink-0 rounded-full transition-colors",
          checked
            ? secondary
              ? "bg-secondary"
              : "bg-primary-container"
            : "bg-surface-container-highest",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
            checked ? "translate-x-6" : "translate-x-0.5",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
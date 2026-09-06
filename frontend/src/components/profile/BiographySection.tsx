"use client";

import { Card } from "@heroui/react";
import { BookOpen, Plus, X } from "lucide-react";

interface Props {
  bio: string;
  tags: string[];
  updateBio: (value: string) => void;
  removeTag: (tag: string) => void;
  addResearchTopic: () => void;
}

export default function BiographySection({
  bio,
  tags,
  updateBio,
  removeTag,
  addResearchTopic,
}: Props) {
  return (
    <Card className="border-none shadow-sm">
      <Card.Content className="flex flex-col gap-6 p-6">
        <SectionHeader
          icon={<BookOpen className="h-5.5 w-5.5" />}
          title="Tiểu sử người đọc & Lĩnh vực nghiên cứu"
          section="Phần 3 / 4"
        />

        {/* Tiểu sử */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="bio-textarea"
              className="text-sm font-semibold text-on-surface"
            >
              Tiểu sử nghiên cứu
            </label>

            <span className="shrink-0 text-xs text-outline">
              {bio.length} / 300 ký tự
            </span>
          </div>

          <textarea
            id="bio-textarea"
            maxLength={300}
            rows={4}
            value={bio}
            onChange={(e) => updateBio(e.target.value)}
            className="w-full resize-y rounded-lg bg-surface-container-lowest p-3 text-sm leading-6 text-on-surface shadow-sm outline-none transition-colors focus:bg-surface-container-low"
          />

          <span className="text-xs text-on-surface-variant">
            Mô tả ngắn gọn định hướng học tập của bạn cho cố vấn và bạn học.
          </span>
        </div>

        {/* Thẻ chủ đề */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-on-surface">
            Thẻ định hướng nghiên cứu hiện tại
          </label>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1.5 text-sm font-medium text-on-secondary-container shadow-sm transition-transform hover:scale-105"
              >
                <span># {tag}</span>

                <button
                  type="button"
                  aria-label={`Xóa thẻ ${tag}`}
                  onClick={() => removeTag(tag)}
                  className="transition-colors hover:text-error"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addResearchTopic}
              className="inline-flex items-center gap-1 rounded-full bg-surface-container px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-high"
            >
              <Plus className="h-4.5 w-4.5" />
              Thêm chủ đề nghiên cứu
            </button>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}

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

        <h3 className="text-lg font-semibold text-on-surface sm:text-xl">
          {title}
        </h3>
      </div>

      <span className="shrink-0 text-xs text-outline">
        {section}
      </span>
    </div>
  );
}
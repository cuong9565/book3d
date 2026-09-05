"use client";

import { Box, ChevronLeft, Volume2 } from "lucide-react";
import { Button, SearchField } from "@heroui/react";

interface TableOfContentsProps {
  currentPage: number;
  onClose: () => void;
}

const chapters = [
  {
    number: "01",
    title: "Giới thiệu về Trái Đất Tiền Sử",
    page: 1,
    description: "Phân chia đại Trung Sinh & tổng quan khí hậu",
  },
  {
    number: "02",
    title: "Thời Đại Khủng Long",
    page: 12,
    active: true,
    model: true,
    audio: "Âm thanh 4 phút",
  },
  {
    number: "03",
    title: "Giải Phẫu & Sinh Lý Học",
    page: 18,
    description: "Cơ học sinh học bộ xương và lực cắn của hộp sọ",
  },
  {
    number: "04",
    title: "Môi Trường Sống & Hệ Sinh Thái",
    page: 26,
    description: "Sự thay đổi thảm thực vật và cách mạng thực vật",
  },
  {
    number: "05",
    title: "Hóa Thạch & Hồ Sơ Cổ Sinh Vật Học",
    page: 34,
    description: "Kỹ thuật khai quật và phân tích địa tầng",
  },
  {
    number: "06",
    title: "Sự Tuyệt Chủng Kỷ Phấn Trắng",
    page: 40,
    description: "Tác động của tiểu hành tinh Chicxulub & hậu quả",
  },
];

export default function TableOfContents({ currentPage, onClose }: TableOfContentsProps) {
  return (
    <aside className="h-full w-[min(88vw,320px)] lg:w-72 xl:w-80 shrink-0 bg-surface border-r border-outline-variant/40 flex flex-col shadow-lg lg:shadow-sm">
      
      {/* Header section */}
      <div className="px-4 md:px-5 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low/50">
        <div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">
            Điều hướng
          </span>
          <h2 className="text-sm font-bold">Mục lục</h2>
        </div>

        <Button
          isIconOnly
          size="sm"
          variant="ghost"
          aria-label="Đóng mục lục"
          onPress={onClose}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      {/* Search input section */}
      <div className="p-3 border-b border-outline-variant/30">
        <SearchField name="search" aria-label="Tìm kiếm các chương...">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-full" placeholder="Tìm kiếm chương..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      {/* Chapter list section */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
        {chapters.map((chapter) => {
          const active = chapter.page === currentPage;

          return (
            <button
              key={chapter.number}
              className={`w-full text-left flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                active
                  ? "bg-primary/10 border border-primary/20"
                  : "hover:bg-surface-container"
              }`}
            >
              {/* Chapter number badge */}
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-xs ${
                  active
                    ? "bg-primary text-white font-bold"
                    : "bg-surface-container text-on-surface-variant font-semibold"
                }`}
              >
                {chapter.number}
              </div>

              {/* Chapter main info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-xs truncate ${active ? "font-bold text-primary" : "font-medium"}`}>
                    {chapter.title}
                  </span>
                  <span className={`text-[10px] shrink-0 ${active ? "font-bold text-primary" : "text-on-surface-variant"}`}>
                    tr. {chapter.page}
                  </span>
                </div>

                {/* Additional media details or description */}
                {active ? (
                  <div className="flex items-center gap-2 mt-1">
                    {chapter.model && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-secondary">
                        <Box className="h-3 w-3" />
                        Mô hình 3D
                      </span>
                    )}

                    {chapter.audio && (
                      <>
                        <span className="text-on-surface-variant/40">•</span>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-primary">
                          <Volume2 className="h-3 w-3" />
                          {chapter.audio}
                        </span>
                      </>
                    )}
                  </div>
                ) : (
                  <p className="text-[11px] text-on-surface-variant truncate mt-0.5">
                    {chapter.description}
                  </p>
                )}
              </div>

              {/* Active indicator dot */}
              {active && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary self-center shrink-0" />
              )}
            </button>
          );
        })}
      </div>

    </aside>
  );
}
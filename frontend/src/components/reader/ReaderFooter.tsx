"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@heroui/react";

interface ReaderFooterProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ReaderFooter({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: ReaderFooterProps) {
  const progress = (currentPage / totalPages) * 100;

  return (
    <footer className="h-16 md:h-18 shrink-0 bg-surface border-t border-outline-variant/40 px-3 md:px-8 flex items-center z-50 shadow-sm">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        {/* NÚT TRANG TRƯỚC */}
        <Button size="sm" variant="outline" onPress={onPrevious} isDisabled={currentPage <= 1}>
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Trang trước</span>
        </Button>

        {/* TIẾN TRÌNH ĐỌC */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-bold">
              Trang <span className="text-primary text-sm md:text-base">{currentPage}</span> / {totalPages}
            </span>

            <span className="hidden md:block text-slate-300">•</span>

            <span className="hidden md:block text-xs text-on-surface-variant">
              Đã hoàn thành {Math.round(progress)}%
            </span>
          </div>

          <div className="w-28 sm:w-36 md:w-56 h-1.5 bg-surface-container rounded-full overflow-hidden mt-1.5">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* NÚT TRANG SAU */}
        <Button size="sm" variant="primary" onPress={onNext} isDisabled={currentPage >= totalPages}>
          <span className="hidden sm:inline">Trang sau</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
}
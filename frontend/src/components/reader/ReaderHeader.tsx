"use client";

import { ArrowLeft, BookOpen, ClipboardList, Maximize, Minimize, ZoomIn, ZoomOut, Box } from "lucide-react";
import { Button, Chip } from "@heroui/react";

interface ReaderHeaderProps {
  tocOpen: boolean;
  modelOpen: boolean;
  fullscreen: boolean;
  zoom: number;

  onToggleTOC: () => void;
  onToggleModel: () => void;
  onZoomChange: (zoom: number) => void;
  onToggleFullscreen: () => void;
}

export default function ReaderHeader({
  tocOpen,
  modelOpen,
  fullscreen,
  zoom,
  onToggleTOC,
  onToggleModel,
  onZoomChange,
  onToggleFullscreen,
}: ReaderHeaderProps) {
  const decreaseZoom = () => {
    onZoomChange(Math.max(70, zoom - 10));
  };

  const increaseZoom = () => {
    onZoomChange(Math.min(140, zoom + 10));
  };

  return (
    <header
      className="
        h-14 shrink-0
        border-b border-outline-variant/40
        bg-surface
        px-3 md:px-5
        flex items-center justify-between
        z-50
        shadow-sm
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-2 md:gap-4 min-w-0">

        <Button
          isIconOnly
          variant="ghost"
          size="sm"
          aria-label="Thoát trình đọc"
          onPress={() => window.history.back()}
          className="shrink-0 text-on-surface-variant"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <div className="hidden sm:block h-5 w-px bg-outline-variant/40" />

        <div className="flex items-center gap-2.5 min-w-0">

          <div
            className="
              hidden sm:flex
              h-8 w-8
              rounded-lg
              bg-primary/10
              text-primary
              items-center justify-center
              shrink-0
            "
          >
            <BookOpen className="h-4 w-4" />
          </div>

          <div className="min-w-0">

            <div className="flex items-center gap-2">

              <h1 className="text-sm md:text-base font-bold truncate">
                Thế Giới Khủng Long
              </h1>

              <Chip
                size="sm"
                variant="secondary"
                color="success"
                className="hidden xs:flex"
              >
                <Box className="h-3 w-3" />
                3D
              </Chip>

            </div>

            <p className="hidden md:block text-[11px] text-on-surface-variant truncate">
              Chương 2: Thời Đại Khủng Long • TS. A. Grant
            </p>

          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1.5">

        {/* CONTENTS */}
        <Button
          size="sm"
          variant={tocOpen ? "primary" : "ghost"}
          onPress={onToggleTOC}
          className="hidden sm:flex"
        >
          <ClipboardList className="h-4 w-4" />
          Mục lục
        </Button>

        {/* MOBILE CONTENTS */}
        <Button
          isIconOnly
          size="sm"
          variant={tocOpen ? "primary" : "ghost"}
          onPress={onToggleTOC}
          aria-label="Mục lục"
          className="sm:hidden"
        >
          <ClipboardList className="h-4 w-4" />
        </Button>

        {/* MODEL */}
        <Button
          size="sm"
          variant={modelOpen ? "secondary" : "ghost"}
          onPress={onToggleModel}
          className="hidden sm:flex"
        >
          <Box className="h-4 w-4" />
          Mô hình 3D
        </Button>

        <Button
          isIconOnly
          size="sm"
          variant={modelOpen ? "secondary" : "ghost"}
          onPress={onToggleModel}
          aria-label="Mô hình 3D"
          className="sm:hidden"
        >
          <Box className="h-4 w-4" />
        </Button>

        {/* ZOOM */}
        <div
          className="
            hidden lg:flex
            items-center
            bg-surface-container
            rounded-lg
            border border-outline-variant/30
            p-0.5
          "
        >
          <Button
            isIconOnly
            size="sm"
            variant="ghost"
            aria-label="Thu nhỏ"
            onPress={decreaseZoom}
            className="min-w-7 w-7 h-7"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>

          <span className="w-10 text-center text-[11px] font-semibold">
            {zoom}%
          </span>

          <Button
            isIconOnly
            size="sm"
            variant="ghost"
            aria-label="Phóng to"
            onPress={increaseZoom}
            className="min-w-7 w-7 h-7"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        {/* FULLSCREEN */}
        <Button
          isIconOnly
          size="sm"
          variant="ghost"
          aria-label="Bật/Tắt toàn màn hình"
          onPress={onToggleFullscreen}
        >
          {fullscreen ? (
            <Minimize className="h-5 w-5" />
          ) : (
            <Maximize className="h-5 w-5" />
          )}
        </Button>

      </div>
    </header>
  );
}
"use client";

import { Box, Fullscreen, Grid3X3, Info, RotateCcw, X } from "lucide-react";
import { Button, Chip } from "@heroui/react";
import ModelViewer from "../three/ModelViewer";

interface ModelPanelProps {
  onClose: () => void;
  fullscreen: boolean;
  onFullscreen: () => void;
}

export default function ModelPanel({
  onClose,
  fullscreen,
  onFullscreen,
}: ModelPanelProps) {
  return (
    <aside className="h-full w-[min(92vw,384px)] lg:w-80 xl:w-96 shrink-0 bg-surface border-l border-outline-variant/40 flex flex-col shadow-lg lg:shadow-sm">
      {/* THANH TIÊU ĐỀ (HEADER) */}
      <div className="px-4 md:px-5 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-secondary-container text-secondary flex items-center justify-center">
            <Box className="h-4 w-4" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold text-secondary tracking-wider">
                Mẫu Vật 3D
              </span>
              <Chip size="sm" color="success" variant="secondary" className="h-5 text-[9px]">
                WebGL
              </Chip>
            </div>
            <h2 className="text-sm font-bold">Hộp Sọ & Cột Sống T-Rex</h2>
          </div>
        </div>

        <Button isIconOnly size="sm" variant="ghost" aria-label="Đóng mô hình 3D" onPress={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* KHU VỰC HIỂN THỊ MÔ HÌNH (VIEWER) */}
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <ModelViewer modelPath="/models/dinosaur.glb" bgPath="/images/bg-forest.png" />
        </div>

        {/* THÔNG BÁO HƯỚNG DẪN */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none whitespace-nowrap">
          <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-[10px]">
            Kéo để xoay • Cuộn để phóng to/thu nhỏ
          </div>
        </div>

        {/* CHỈ SỐ SINH HỌC (STATS) */}
        <div className="absolute bottom-16 left-3 right-3 z-10 flex flex-wrap gap-2">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-teal-500/30 px-2.5 py-1 rounded-lg text-white text-[10px]">
            <span className="font-semibold text-teal-300">Thông số sinh học:</span> 12.3m Chiều dài
          </div>

          <div className="bg-slate-900/80 backdrop-blur-sm border border-amber-500/30 px-2.5 py-1 rounded-lg text-white text-[10px]">
            <span className="font-semibold text-amber-300">Lực cắn:</span> 35,000 N
          </div>
        </div>

        {/* NÚT ĐIỀU KHIỂN (CONTROLS) */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 rounded-lg border border-white/10">
            <Button isIconOnly size="sm" variant="ghost" aria-label="Đặt lại góc nhìn" className="text-white">
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button isIconOnly size="sm" variant="ghost" aria-label="Bật/tắt lưới tọa độ" className="text-white">
              <Grid3X3 className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 rounded-lg border border-white/10">
            <Button isIconOnly size="sm" variant="ghost" aria-label="Thông tin mô hình" className="text-white">
              <Info className="h-4 w-4" />
            </Button>

            <Button isIconOnly size="sm" variant="ghost" aria-label="Toàn màn hình" className="text-white" onPress={onFullscreen}>
              <Fullscreen className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* BẢNG CHI TIẾT THÔNG TIN (DETAILS) */}
      <div className="p-4 bg-surface border-t border-outline-variant/30 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold">Chú Thích Giải Phẫu</span>
          <span className="text-[11px] text-on-surface-variant">Kỷ Phấn Trắng Muộn</span>
        </div>

        <p className="text-xs text-on-surface-variant leading-relaxed">
          Phần sọ hoàn chỉnh với cấu trúc hốc mắt định vị hai mắt và các đốt sống cổ chắc chắn, giúp hấp thụ lực xoắn shock tải trọng cao.
        </p>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg bg-surface-container-low border border-outline-variant/20 text-center">
            <span className="text-[9px] text-on-surface-variant uppercase font-bold block">
              Niên Đại
            </span>
            <span className="text-xs font-bold">68–66 Tr.Năm</span>
          </div>

          <div className="p-2 rounded-lg bg-surface-container-low border border-outline-variant/20 text-center">
            <span className="text-[9px] text-on-surface-variant uppercase font-bold block">
              Tỷ Lệ Lưới
            </span>
            <span className="text-xs font-bold">1:1 Chuẩn Khoa Học</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
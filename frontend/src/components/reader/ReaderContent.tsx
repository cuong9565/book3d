"use client";

import { Box, Headphones, Play } from "lucide-react";
import { Button, Chip } from "@heroui/react";

interface ReaderContentProps {
  currentPage: number;
  zoom: number;
  onOpenModel: () => void;
}

export default function ReaderContent({
  currentPage,
  zoom,
  onOpenModel,
}: ReaderContentProps) {
  return (
    <section className="flex-1 min-w-0 h-full overflow-y-auto overflow-x-hidden bg-[#f4f6f9]">
      <div className="min-h-full p-4 sm:p-6 md:p-8 lg:p-10 flex justify-center">
        <article
          className="w-full max-w-170 h-fit bg-white rounded-xl border border-slate-200 shadow-[0_12px_32px_-4px_rgba(15,23,42,.08),0_4px_12px_-2px_rgba(15,23,42,.04)] overflow-hidden transition-transform duration-200"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top center",
            marginBottom: zoom > 100 ? `${(zoom - 100) * 3}px` : undefined,
          }}
        >
          {/* HEADER TÀI LIỆU */}
          <div className="px-6 md:px-8 pt-6 md:pt-7 pb-3 flex items-center justify-between border-b border-slate-100 text-[10px] md:text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
            <span>Bộ Sách Giáo Khoa Tương Tác Edu3D</span>
            <span className="text-primary font-bold">Tập II • Chương 2</span>
          </div>

          <div className="p-6 md:p-10 space-y-6">
            {/* THÔNG TIN CHƯƠNG */}
            <div className="space-y-1">
              <Chip size="sm" variant="primary" color="accent" className="font-bold tracking-wide">
                CHƯƠNG 02 • KỶ TRUNG SINH
              </Chip>

              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight pt-1">
                Kỷ Nguyên Khủng Long
              </h2>

              <p className="text-xs text-slate-500 font-medium">
                Chuẩn chương trình: Khoa học Tự nhiên & Trái đất {" • "} Thời gian đọc dự kiến: 6 phút
              </p>
            </div>

            {/* HÌNH ẢNH MINH HỌA */}
            <div className="rounded-xl overflow-hidden border border-slate-200 relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcGJCs2w5l4taWtkyeg7aFmLeMyA52EfeuevyheQRUaG7jZ0yfwu8MId_SJ8G2xVVQG5prYs1xbI5_aUE1r7w8r4OvocnSo_snUBtuJAcv5GpXJ-GEhiy89YRiA78Vs1lIdvLYrC4h6hLAIOMynVOpg5JDtpZQLNvZFx1xkmgbIvdaKdA9ZsA1cdPeW_HV7hAF30J8IKPm8P4nTvuHChlwyw-l5n9uMOAMzZYty0CqAPiWIK4yVMxWMg"
                alt="Cảnh quan rừng nguyên sinh Kỷ Phấn Trắng với khủng long"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0" />

              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-white text-xs">
                <span className="font-medium">Hệ sinh thái rừng Kỷ Phấn Trắng muộn</span>
                <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded">Hình 2.4</span>
              </div>
            </div>

            {/* BỘ PHÁT ÂM THANH */}
            <AudioPlayer />

            {/* NỘI DUNG VĂN BẢN 1 */}
            <p className="text-sm md:text-base leading-[1.8] text-slate-700">
              <span className="text-3xl font-extrabold text-primary float-left mr-3 mt-1 leading-none">
                H
              </span>
              àng triệu năm trước khi những loài người cổ đại đầu tiên xuất hiện trên Trái Đất, các loài bò sát thuộc nhóm Archosaur tuyệt đẹp được biết đến với tên gọi khủng long đã thống trị các hệ sinh thái trên cạn. Thời kỳ này, được gọi theo thuật ngữ khoa học là{" "}
              <strong className="text-navy font-semibold">Kỷ Trung Sinh</strong>, kéo dài từ khoảng 252 đến 66 triệu năm trước. Nó được chia thành ba kỷ địa chất riêng biệt: Kỷ Tam Điệp (Trias), Kỷ Jura và Kỷ Phấn Trắng (Cretaceous).
            </p>

            {/* KHU VỰC GỢI Ý MÔ HÌNH 3D */}
            <div className="p-4 md:p-5 rounded-xl border border-secondary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0">
                  <Box className="h-5 w-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                      Mẫu Vật Tương Tác
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  </div>

                  <h4 className="text-sm font-bold">
                    Khám phá cấu trúc xương Bạo chúa (Tyrannosaurus Rex)
                  </h4>

                  <p className="text-xs text-slate-500 mt-0.5">
                    Xoay, phóng to và quan sát chi tiết giải phẫu hộp sọ ngay trên trình xem 3D.
                  </p>
                </div>
              </div>

              <Button variant="secondary" size="sm" onPress={onOpenModel} className="shrink-0">
                <Box className="h-4 w-4" />
                Mở Mô Hình 3D
              </Button>
            </div>

            {/* NỘI DUNG VĂN BẢN 2 */}
            <p className="text-sm md:text-base leading-[1.8] text-slate-700">
              Trong Kỷ Phấn Trắng, các lục địa đã phân tách mạnh mẽ từ siêu lục địa Pangaea ban đầu. Khi các biển nông nội địa xuất hiện, các loài khủng long ăn thịt đa dạng như{" "}
              <em className="text-navy font-semibold">Tyrannosaurus rex</em> đã phát triển lực cơ hàm sinh học ước tính vượt quá 35.000 Newtons.
            </p>

            {/* FOOTER CỦA TRANG */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="hidden sm:block">© Nhã xuất bản Thư viện Edu3D</span>
              <span className="font-bold text-navy">Trang {currentPage}</span>
              <span>Thế Giới Khủng Long</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function AudioPlayer() {
  return (
    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <Button isIconOnly variant="primary" size="sm" aria-label="Phát âm thanh">
          <Play className="h-4 w-4 fill-current" />
        </Button>

        <div className="min-w-0">
          <div className="text-xs font-bold flex items-center gap-2 truncate">
            <Headphones className="h-3.5 w-3.5 text-primary" />
            <span className="truncate">Nghe Giọng Đọc Sách</span>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
            <span>02:15 / 05:40</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-secondary font-semibold">Tốc độ 1.0x</span>
          </div>
        </div>
      </div>

      <div className="hidden sm:block flex-1 max-w-40">
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[38%] rounded-full" />
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { BookOpen, CheckCircle2, ChevronRight, ChevronDown, Headphones, Lock, PlayCircle, Rotate3D, Touchpad, Volume2 } from "lucide-react";
import { Button, Card, Chip } from "@heroui/react";

interface Chapter {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "locked";
}

const chapters: Chapter[] = [
  { id: 1, title: "Giới thiệu về Kỷ Trung Sinh", description: "Đặt nền móng cho sự tiến hóa của loài khủng long.", status: "completed" },
  { id: 2, title: "Thời Đại Khủng Long", description: "Khám phá các kỷ Tam Điệp, Giura và Phấn Trắng.", status: "current" },
  { id: 3, title: "Giải Phẫu & Sinh Lý Học", description: "Tìm hiểu cấu trúc cơ thể của chúng.", status: "locked" },
];

export default function BookDetailPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-7xl px-container-margin py-stack-lg">

        {/* --- BREADCRUMB --- */}
        <nav aria-label="Breadcrumb" className="mb-stack-md flex items-center gap-2 text-label-sm text-on-surface-variant">
          <button className="transition-colors hover:text-primary">Khám phá</button>
          <ChevronRight className="h-4 w-4" />
          <button className="transition-colors hover:text-primary">Khoa học</button>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-primary">Thế Giới Khủng Long</span>
        </nav>

        {/* --- BOOK DETAILS SECTION --- */}
        <section className="grid grid-cols-1 gap-stack-lg lg:grid-cols-12">

          {/* Left Column: Book Cover */}
          <div className="flex justify-center lg:col-span-5 lg:justify-start">
            <div className="relative aspect-3/4 w-full max-w-md overflow-hidden rounded-xl border border-outline-variant shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0V9u_hPiIoTFeQEuHa66Pve3wxEsJDsOhcTzt99qRNbTUPmFWEUdaXt3dFBpnCVJ5MIuwLMCJfEAWrAlxNrTPd4xDDriapnrd7BlFqQS3U9YWDOK6fj0evoJKePdCn-Asn0MP0XcInbbPxF9i6GdD9zwl5FSgMRnbXA05qTpBqujPhyhFR34aiYtONZel2Ta3b_4so9bHWyyrMTYZoxvUCGroSlpsxXg4LvCkHPbGcSKx6DOVRCM7Tg"
                alt="Bìa sách Thế Giới Khủng Long"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: Book Info & Actions */}
          <div className="flex flex-col gap-stack-md lg:col-span-7">

            {/* Title & Author */}
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <Chip size="sm" variant="primary" className="bg-surface-variant">Khoa học</Chip>
              </div>

              <h1 className="text-headline-xl font-bold tracking-tight text-on-surface max-md:text-headline-xl-mobile">
                Thế Giới Khủng Long
              </h1>
              <p className="mt-2 text-body-lg text-on-surface-variant">Tác giả: Sarah Johnson</p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 border-y border-outline-variant/30 py-4">
              <div className="flex flex-col">
                <span className="mb-1 text-label-sm text-on-surface-variant">Số chương</span>
                <span className="text-headline-md text-on-surface">12</span>
              </div>

              <div className="flex flex-col border-l border-outline-variant/30 pl-4">
                <span className="mb-1 text-label-sm text-on-surface-variant">Số trang</span>
                <span className="text-headline-md text-on-surface">45</span>
              </div>

              <div className="flex flex-col border-l border-outline-variant/30 pl-4">
                <span className="mb-1 text-label-sm text-on-surface-variant">Tính năng</span>
                <div className="flex gap-3 text-primary">
                  <Rotate3D className="h-5 w-5" aria-label="Mô hình 3D" />
                  <Headphones className="h-5 w-5" aria-label="Thuyết minh âm thanh" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-gutter pt-2 sm:flex-row">
              <Button size="lg" variant="primary" className="flex-1 sm:flex-none">
                <BookOpen className="h-5 w-5" />
                Bắt đầu đọc
              </Button>
            </div>

            {/* Book Description */}
            <div className="mt-4">
              <h2 className="mb-3 text-headline-md font-semibold text-on-surface">Giới thiệu về cuốn sách</h2>
              <p className="text-body-md text-on-surface-variant">
                Du hành ngược thời gian để khám phá thời kỳ đầy mê hoặc của loài khủng long. Cuốn sách tương tác này kết hợp
                các nghiên cứu khoa học toàn diện với hình ảnh trực quan 3D sống động, cho phép bạn quan sát cấu trúc hóa thạch,
                tìm hiểu hệ sinh thái thời tiền sử và chiêm ngưỡng những sinh vật hùng vĩ từng thống trị Trái Đất.
              </p>
            </div>

            {/* Experience Highlights */}
            <Card className="mt-4 border border-outline-variant/20 bg-surface-container-low p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="mb-4 text-lg font-semibold text-on-surface">Trải nghiệm nổi bật</h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-on-primary-container">
                    <Touchpad className="h-5 w-5" />
                  </div>
                  <span className="text-label-md font-semibold text-on-surface">Trang sách tương tác</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-container text-on-secondary-container">
                    <Volume2 className="h-5 w-5" />
                  </div>
                  <span className="text-label-md font-semibold text-on-surface">Thuyết minh chuyên nghiệp</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-container text-on-tertiary-container">
                    <Rotate3D className="h-5 w-5" />
                  </div>
                  <span className="text-label-md font-semibold text-on-surface">Mô hình 3D</span>
                </div>
              </div>
            </Card>

          </div>
        </section>

        {/* --- TABLE OF CONTENTS SECTION --- */}
        <section className="mx-auto mt-stack-lg max-w-4xl">
          <h2 className="mb-stack-md text-center text-headline-lg font-bold text-on-surface">
            Mục lục
          </h2>

          <div className="flex flex-col gap-3">
            {chapters.map((chapter) => (
              <ChapterItem key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

/* =====================================================
   CHAPTER ITEM COMPONENT
===================================================== */

function ChapterItem({ chapter }: { chapter: Chapter }) {
  const isCompleted = chapter.status === "completed";
  const isCurrent = chapter.status === "current";
  const isLocked = chapter.status === "locked";

  const cardStyle = isCurrent
    ? "border-2 border-primary bg-surface shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
    : "border-outline-variant/40 bg-surface hover:bg-surface-container-low";

  const badgeStyle = isCompleted
    ? "bg-surface-variant text-primary"
    : isCurrent
    ? "bg-primary text-on-primary shadow-md"
    : "bg-surface-container-high text-outline";

  return (
    <Card
      className={`relative overflow-hidden rounded-xl border p-4 transition-all ${cardStyle} ${isLocked ? "opacity-70 hover:opacity-100" : ""}`}
    >
      {/* Current Chapter Indicator Bar */}
      {isCurrent && <div className="absolute bottom-0 left-0 top-0 w-1 bg-primary" />}

      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Number & Info */}
        <div className="flex min-w-0 items-center gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-headline-md ${badgeStyle}`}>
            {String(chapter.id).padStart(2, "0")}
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-base font-bold text-on-surface">{chapter.title}</h4>
            <p className="mt-1 truncate text-sm text-on-surface-variant">{chapter.description}</p>
          </div>
        </div>

        {/* Right Side: Status Badge / Action Icon */}
        <div className="flex shrink-0 items-center gap-3">
          {isCompleted && (
            <Chip size="sm" variant="secondary" className="hidden bg-secondary text-on-secondary sm:flex">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Đã hoàn thành
            </Chip>
          )}

          {isCurrent && (
            <span className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">
              <PlayCircle className="h-4.5 w-4.5" /> Tiếp tục đọc
            </span>
          )}

          {isLocked ? <Lock className="h-5 w-5 text-outline" /> : <ChevronDown className="h-5 w-5 text-outline" />}
        </div>
      </div>
    </Card>
  );
}
import { BookOpen } from "lucide-react";
import { Button } from "@heroui/react";

export default function ContinueReading() {
  return (
    <section className="w-full max-w-7xl mx-auto px-container-margin p-4">

      <h2 className="font-headline-lg font-bold text-3xl lg:text-headline-lg text-on-surface mb-stack-md">
        Tiếp tục đọc
      </h2>

      <div
        className="
          bg-surface
          rounded-2xl
          p-6
          shadow-[0px_4px_20px_rgba(15,23,42,0.05)]
          border
          border-outline-variant/20
          flex
          flex-col
          md:flex-row
          items-center
          gap-stack-md
        "
      >

        {/* Book Cover */}
        <div
          className="
            w-full
            md:w-48
            h-32
            rounded-lg
            overflow-hidden
            flex-shrink-0
            relative
          "
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/books/dinosaur-world.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <span
            className="
              absolute
              bottom-2
              left-2
              text-white
              font-label-sm
              text-label-sm
              bg-black/40
              px-2
              py-0.5
              rounded
              backdrop-blur-sm
            "
          >
            Sách 3D
          </span>
        </div>

        {/* Book information */}
        <div className="flex flex-col gap-2 w-full">

          <h3 className="font-headline-md text-headline-md text-on-surface">
            Thế giới Khủng long: Kỷ Phấn trắng
          </h3>

          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-1">
            Chương 4: Những kẻ săn mồi đỉnh cao của phương Bắc.
          </p>

          {/* Progress */}
          <div className="flex items-center gap-4 mt-2">

            <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full w-[70%]" />
            </div>

            <span className="font-label-sm text-label-sm text-primary font-semibold whitespace-nowrap">
              70% Hoàn thành
            </span>

          </div>
        </div>

        {/* Continue button */}
        <Button
            className="bg-primary text-white px-5 py-6 rounded-lg hover:bg-primary/90 transition-colors items-center gap-2">
            Tiếp tục
          <BookOpen className="inline ml-1 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
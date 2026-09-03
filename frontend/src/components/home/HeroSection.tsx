"use client";

import { ArrowRight, Hand } from "lucide-react";
import { Button, Chip } from "@heroui/react";
import { useRouter } from "next/navigation";
import ModelViewer from "../three/ModelViewer";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="w-full max-w-7xl mx-auto px-container-margin py-7">
      <div className="flex flex-col lg:flex-row items-center gap-gutter">
        {/* Introduce */}
        <div className="w-full lg:w-5/12 flex flex-col gap-5">
          {/* Heading */}
          <h1 className="lg:items-start text-center lg:text-left flex flex-col gap-1 font-bold text-3xl lg:text-headline-lg text-on-surface leading-tight">
            <span>Khám phá. Trải nghiệm.</span>
            <p className="text-primary block">Học tập với mô hình 3D.</p>
          </h1>

          {/* Description */}
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Hãy bước vào thế giới của lịch sử, khoa học và thiên nhiên. Những
            cuốn sách 3D tương tác của chúng tôi sẽ thổi hồn vào các chủ đề,
            biến việc đọc thụ động thành hoạt động khám phá tích cực.
          </p>

          {/* Buttons */}
            <Button
                className="bg-primary text-white px-5 py-6 rounded-lg hover:bg-primary/90 transition-colors items-center gap-2 hidden lg:inline-flex"
                onClick={() => router.push("/explore")}
            >
                Khám phá sách
                <ArrowRight className="w-4 h-4" />
            </Button>
        </div>

        {/* 3D Model */}
        <div className="w-full lg:w-7/12 relative h-100 lg:h-150 rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 bg-surface-container-low group cursor-grab active:cursor-grabbing">
          {/* Model */}
          <ModelViewer modelPath="/models/dinosaur.glb" bgPath="/images/bg-forest.png"/>

          {/* Overlay */}
          <Chip className="gap-2 absolute left-6 bottom-6 rounded-lg text-sm py-1 bg-secondary-container text-secondary">
            <Hand className="w-4 h-4"/>
            Tương tác với mô hình
          </Chip>
        </div>
        
          {/* Buttons */}
            <Button
                className="w-full bg-primary text-white px-5 py-6 rounded-lg hover:bg-primary/90 transition-colors items-center gap-2 lg:hidden inline-flex"
                onClick={() => router.push("/explore")}
            >
                Khám phá sách
                <ArrowRight className="w-4 h-4" />
            </Button>

      </div>
    </section>
  );
}
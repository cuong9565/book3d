"use client";

import { useEffect, useState } from "react";
import ReaderHeader from "./ReaderHeader";
import TableOfContents from "./TableOfContents";
import ReaderContent from "./ReaderContent";
import ModelPanel from "./ModelPanel";
import ReaderFooter from "./ReaderFooter";

export default function BookReader() {
  const [tocOpen, setTocOpen] = useState(true);
  const [modelOpen, setModelOpen] = useState(true);

  const [currentPage, setCurrentPage] = useState(12);
  const totalPages = 45;

  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);

  // Desktop / tablet responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setModelOpen(false);
      }

      if (window.innerWidth < 768) {
        setTocOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changePage = (delta: number) => {
    setCurrentPage((prev) => {
      const next = prev + delta;

      if (next < 1) return 1;
      if (next > totalPages) return totalPages;

      return next;
    });
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setFullscreen(true);
      } else {
        await document.exitFullscreen();
        setFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Không trigger shortcut khi đang nhập text
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (event.key) {
        case "ArrowRight":
        case "PageDown":
          changePage(1);
          break;

        case "ArrowLeft":
        case "PageUp":
          changePage(-1);
          break;

        case "f":
        case "F":
          toggleFullscreen();
          break;

        case "t":
        case "T":
          setTocOpen((prev) => !prev);
          break;

        case "m":
        case "M":
          setModelOpen((prev) => !prev);
          break;

        case "Escape":
          if (document.fullscreenElement) {
            document.exitFullscreen();
            setFullscreen(false);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-dvh w-full overflow-hidden bg-background text-foreground flex flex-col">
      {/* HEADER */}
      <ReaderHeader
        tocOpen={tocOpen}
        modelOpen={modelOpen}
        fullscreen={fullscreen}
        zoom={zoom}
        onToggleTOC={() => setTocOpen((prev) => !prev)}
        onToggleModel={() => setModelOpen((prev) => !prev)}
        onZoomChange={setZoom}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* BODY */}
      <main className="relative flex-1 min-h-0 overflow-hidden">
        <div className="flex h-full w-full">

          {/* LEFT TOC */}
          <div
            className={`
              absolute inset-y-0 left-0 z-40
              lg:relative lg:z-20
              transition-all duration-300
              ${tocOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full lg:hidden opacity-0"
              }
            `}
          >
            <TableOfContents
              currentPage={currentPage}
              onClose={() => setTocOpen(false)}
            />
          </div>

          {/* MOBILE TOC BACKDROP */}
          {tocOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] lg:hidden"
              onClick={() => setTocOpen(false)}
            />
          )}

          {/* CENTER READER */}
          <ReaderContent
            currentPage={currentPage}
            zoom={zoom}
            onOpenModel={() => setModelOpen(true)}
          />

          {/* RIGHT MODEL */}
          <div
            className={`
              absolute inset-y-0 right-0 z-40
              lg:relative lg:z-20
              transition-all duration-300
              ${modelOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full lg:hidden opacity-0"
              }
            `}
          >
            <ModelPanel
              onClose={() => setModelOpen(false)}
              fullscreen={fullscreen}
              onFullscreen={toggleFullscreen}
            />
          </div>

          {/* MOBILE MODEL BACKDROP */}
          {modelOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] lg:hidden"
              onClick={() => setModelOpen(false)}
            />
          )}
        </div>
      </main>

      {/* FOOTER */}
      <ReaderFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => changePage(-1)}
        onNext={() => changePage(1)}
      />
    </div>
  );
}
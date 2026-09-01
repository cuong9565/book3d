import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edu3D Library",
  description: "Thư viện sách giáo dục 3D",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className="flex flex-col">
        {children}
      </body>
    </html>
  );
}

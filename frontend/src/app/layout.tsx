import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Edu3D Library",
  description: "Thư viện sách giáo dục 3D",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}

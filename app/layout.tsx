import type { Metadata, Viewport } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ชีวิตเป็นสัปดาห์ — Life in Weeks",
  description:
    "เห็นชีวิตทั้งชีวิตในภาพเดียว: กริด 1 ช่อง = 1 สัปดาห์ คำนวณจากวันเกิดของคุณ ทำงานบนเครื่องล้วน ไม่มีข้อมูลส่งออกไปไหน",
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={anuphan.variable}>
      <head>
        <script
          defer
          src="https://umami-host-peerapongsms-projects.vercel.app/script.js"
          data-website-id="3f09453d-0b39-443e-8845-5e65611cc58a"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

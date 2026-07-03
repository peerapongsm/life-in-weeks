import type { Metadata, Viewport } from "next";
import { Trirong, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

// Display serif for the poster masthead — carries the "printed matter" character.
const trirong = Trirong({
  variable: "--font-trirong",
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

// Grotesk for numerals, UI and body copy — precise, tabular, quiet next to the serif.
const plexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ชีวิตเป็นสัปดาห์ — Life in Weeks",
  description:
    "เห็นชีวิตทั้งชีวิตในภาพเดียว: กริด 1 ช่อง = 1 สัปดาห์ คำนวณจากวันเกิดของคุณ ทำงานบนเครื่องล้วน ไม่มีข้อมูลส่งออกไปไหน",
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${trirong.variable} ${plexSansThai.variable}`}>
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SwirlCanvas } from "@/components/SwirlCanvas";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abyss | Voice-First Assistant for Code, Email & Calendar",
  description:
    "Your voice-first assistant — for coding, email, calendar, and more. From coding assistant to full personal productivity — all by voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased relative`}
      >
        <SwirlCanvas />
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}

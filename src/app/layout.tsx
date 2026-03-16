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
  title: "Abyss | Voice-First OS for Coding and Productivity",
  description:
    "Abyss is a voice-first operating layer for coding and personal workflows, with tool routing across iOS, server, macOS bridge, and cloud agents.",
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

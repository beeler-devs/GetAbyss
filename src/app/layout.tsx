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
  metadataBase: new URL("https://get-abyss.app"),
  title: "Abyss | Voice-First AI Assistant for iPhone and Mac",
  description:
    "Abyss is a voice-first, iPhone-native AI assistant with secure local execution, a permissioned Mac bridge, and flagship workflows for coding, Gmail, Calendar, Canvas, and web search.",
  openGraph: {
    title: "Abyss | Voice-First AI Assistant for iPhone and Mac",
    description:
      "Voice-first on iPhone, secure local execution on Mac, and product-grade workflows across coding, Gmail, Calendar, Canvas, and web search.",
    url: "https://get-abyss.app",
    siteName: "Abyss",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Abyss logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Abyss | Voice-First AI Assistant for iPhone and Mac",
    description:
      "A voice-first assistant with secure local execution, a paired Mac bridge, and real workflows for coding and everyday work.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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

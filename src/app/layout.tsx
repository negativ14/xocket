import type { Metadata } from "next";
import { Chivo_Mono, Geist, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
});

const instrumental = Instrument_Serif({
  variable: "--font-instrumental",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Xocket",
  description: "Structured Execution for Growing Startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, chivoMono.variable, instrumental.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col selection:bg-foreground selection:text-background">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: "Hive Sign In Status",
  description: "A dashboard to track Hive sign ins",
};

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

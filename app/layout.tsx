import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Saqlain Shoukat - Portfolio",
  description:
    "Welcome to my Porfolio! Hi I am Muhammad Saqlain Shoukat. Contact with me on WhatsApp, Instagram, and YouTube. Stay updated with my latest projects, videos, and social media profiles. Let's talk and collaborate!",
  keywords:
    "Muhammad Saqlain Shoukat, Saqlain, Portfolio, world best porfolio website, Instagram, YouTube, social media, connect, chat, collaborate, projects, videos, hire me",
  icons: {
    icon: "logo.png",
    shortcut: "favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  other: {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0C0C0C] text-gray-900">
        <NavbarDemo />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "E-commerce Three",
    template: "%s - Ecommerce",
  },
  description: "Enter the real world by buying new ones",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
  categories,
}: Readonly<{
  children: React.ReactNode;
  categories: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {categories ? categories : <h2>Not found</h2>}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farrukh Hafeez | Full-Stack Developer | SaaS, ERP & E-Commerce Solutions | AI-Powered Web Apps",
  description: "Experienced Full-Stack Developer with 7+ years in building responsive websites, custom admin dashboards, and AI-powered SaaS applications. Skilled in React, AngularJS, Next.js, Node.js, MongoDB, Ruby on Rails, PHP & Python. Delivering scalable solutions that align with business goals",
};

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
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

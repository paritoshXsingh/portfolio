import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Paritosh Singh | Full Stack Developer",

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and cloud technologies. Creator of LearnHub LMS, DevInk Blogging Platform, and CollabSpace Real-Time Collaboration Workspace.",

  keywords: [
    "Paritosh Singh",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "MERN Stack",
    "JavaScript",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Paritosh Singh",
    },
  ],

  creator: "Paritosh Singh",

  openGraph: {
    title: "Paritosh Singh | Full Stack Developer",

    description:
      "Portfolio showcasing LearnHub LMS, DevInk, and CollabSpace built with modern web technologies.",

    url: "https://your-portfolio-domain.vercel.app",

    siteName: "Paritosh Singh Portfolio",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/layout/loading-screen";
import ScrollProgressBar from "@/components/layout/scroll-progress-bar";
import CursorGlow from "@/components/layout/cursor-glow";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://anujkumar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anuj Kumar | Full Stack & AI Engineer",
    template: "%s | Anuj Kumar",
  },
  description:
    "Anuj Kumar — B.Tech CSE student at NIT Jamshedpur building scalable systems, AI applications, and real-time products. Explore projects in full-stack development, AI/ML, and competitive programming.",
  keywords: [
    "Anuj Kumar",
    "Full Stack Developer",
    "AI Engineer",
    "NIT Jamshedpur",
    "Software Engineer Portfolio",
    "Machine Learning",
    "Next.js Developer",
    "Competitive Programming",
  ],
  authors: [{ name: "Anuj Kumar", url: "https://github.com/kumar1035" }],
  creator: "Anuj Kumar",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Anuj Kumar | Full Stack & AI Engineer",
    description:
      "Building Scalable Systems, AI Applications, and Real-Time Products.",
    siteName: "Anuj Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Kumar | Full Stack & AI Engineer",
    description:
      "Building Scalable Systems, AI Applications, and Real-Time Products.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="noise min-h-full flex flex-col bg-background text-foreground selection:bg-violet-500/30">
        <LoadingScreen />
        <ScrollProgressBar />
        <CursorGlow />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

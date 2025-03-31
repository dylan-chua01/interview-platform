import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer"; // ✅ Import Footer

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepMate",
  description: "Get Interview-Ready: Practice, Analyze, and Improve with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main> {/* ✅ Ensures footer stays at the bottom */}
        <Footer /> {/* ✅ Added Footer */}
        <Toaster />
      </body>
    </html>
  );
}

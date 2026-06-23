import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/context/CursorContext";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talha Ahmad | Website Developer & SEO Specialist",
  description: "Portfolio of Talha Ahmad, an experienced Website Developer and SEO Specialist from Pakistan. Designing clean, performance-optimized websites, Shopify development, and digital marketing strategies.",
  keywords: [
    "Talha Ahmad",
    "Website Developer",
    "Web Developer Pakistan",
    "SEO Specialist Pakistan",
    "Shopify Developer",
    "Frontend Developer",
    "React Developer",
    "Creative Developer Portfolio"
  ],
  authors: [{ name: "Talha Ahmad" }],
  openGraph: {
    title: "Talha Ahmad | Website Developer & SEO Specialist",
    description: "Portfolio of Talha Ahmad, an experienced Website Developer and SEO Specialist from Pakistan.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground selection:bg-accent selection:text-white">
        <CursorProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}
